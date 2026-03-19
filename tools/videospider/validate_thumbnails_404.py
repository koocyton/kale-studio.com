import argparse
import json
import os
import re
import socket
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from typing import Any, Dict, Iterable, List, Optional, Tuple


THUMBNAIL_MEDIA_PATH = ["thumbnails", "medium", "url"]
ID_RE = re.compile(r"^(?P<id>\d+)\.json$")


@dataclass(frozen=True)
class CheckTarget:
    category_id: int
    item_index: int
    video_id: str
    url: str


def _get_nested(d: Dict[str, Any], path: List[str]) -> Optional[Any]:
    cur: Any = d
    for key in path:
        if not isinstance(cur, dict):
            return None
        cur = cur.get(key)
    return cur


def _http_status(url: str, timeout_s: float) -> Optional[int]:
    """
    返回 HTTP 状态码；如果网络错误/超时，返回 None（保守起见不删）。
    """
    # urllib 在 HEAD 请求上可能被部分服务拒绝或重定向异常，准备失败时回退 GET(Range)
    def try_head() -> Optional[int]:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=timeout_s) as resp:
            return getattr(resp, "status", None)

    def try_get_range() -> Optional[int]:
        req = urllib.request.Request(url, method="GET")
        req.add_header("Range", "bytes=0-0")
        with urllib.request.urlopen(req, timeout=timeout_s) as resp:
            return getattr(resp, "status", None)

    for fn in (try_head, try_get_range):
        try:
            return fn()
        except urllib.error.HTTPError as e:
            # 例如 404/405 都会进入这里
            if getattr(e, "code", None) is not None:
                return int(e.code)
            continue
        except (urllib.error.URLError, socket.timeout):
            return None
        except Exception:
            # 保守处理：未知错误不删
            return None

    return None


def _iter_target_json_files(target_root: str) -> List[Tuple[int, str]]:
    out: List[Tuple[int, str]] = []
    for name in os.listdir(target_root):
        m = ID_RE.match(name)
        if not m:
            continue
        category_id = int(m.group("id"))
        out.append((category_id, os.path.join(target_root, name)))
    return sorted(out, key=lambda x: x[0])


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Remove videos whose medium thumbnail URL returns 404")
    parser.add_argument("--target-dir", default="tools/videospider/target", help="target 根目录（默认 tools/videospider/target）")
    parser.add_argument("--timeout", type=float, default=10.0, help="单个请求超时（秒）")
    parser.add_argument("--max-workers", type=int, default=16, help="并发请求数")
    parser.add_argument("--dry-run", action="store_true", help="只打印，不写文件（默认就是 dry-run）")
    parser.add_argument("--write", action="store_true", help="写回修改后的 target/{id}.json（会删除 404 缩略图对应条目）")
    args = parser.parse_args(argv)

    # 兼容：如果没显式 --write，就当作 dry-run
    do_write = bool(args.write)
    if not do_write:
        args.dry_run = True

    target_root = args.target_dir
    files = _iter_target_json_files(target_root)
    if not files:
        print(f"[结束] 未找到任何 target 文件：{target_root}/*.json")
        return 0

    # 先收集所有要检查的条目
    targets: List[CheckTarget] = []
    category_items: Dict[int, List[Dict[str, Any]]] = {}

    for category_id, path in files:
        with open(path, "r", encoding="utf-8") as f:
            payload = json.load(f)
        if not isinstance(payload, list):
            print(f"[跳过] {path} 不是数组，忽略")
            continue

        category_items[category_id] = payload
        for idx, item in enumerate(payload):
            if not isinstance(item, dict):
                continue
            video_id = item.get("videoId")
            if not video_id:
                continue
            url = _get_nested(item, THUMBNAIL_MEDIA_PATH)
            if not url or not isinstance(url, str):
                continue
            targets.append(CheckTarget(category_id=category_id, item_index=idx, video_id=str(video_id), url=url))

    print(f"[开始] 待检查 thumbnails/medium/url：{len(targets)} 条；文件数={len(files)}")

    to_delete: Dict[int, set] = {}
    checked = 0
    removed = 0

    def worker(t: CheckTarget) -> Tuple[CheckTarget, Optional[int]]:
        status = _http_status(t.url, timeout_s=args.timeout)
        return t, status

    with ThreadPoolExecutor(max_workers=args.max_workers) as ex:
        futures = [ex.submit(worker, t) for t in targets]
        for fut in as_completed(futures):
            t, status = fut.result()
            checked += 1
            if status == 404:
                to_delete.setdefault(t.category_id, set()).add(t.item_index)
                removed += 1
            if checked % 200 == 0:
                print(f"[进度] checked={checked}/{len(targets)} removed={removed}")

    print(f"[结果] checked={checked} removed(404)={removed}")

    if args.dry_run:
        for category_id in sorted(to_delete.keys()):
            print(f"[dry-run] category={category_id} 将删除条数={len(to_delete[category_id])}")
        print("[结束] dry-run 模式，无文件写入")
        return 0

    # 写回：删除对应索引的条目（保持原顺序）
    for category_id, idx_set in to_delete.items():
        items = category_items.get(category_id)
        if not items:
            continue
        new_items = [it for i, it in enumerate(items) if i not in idx_set]

        out_path = os.path.join(target_root, f"{category_id}.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(new_items, f, ensure_ascii=False, indent=2)
        print(f"[写入] {out_path} 删除={len(idx_set)} 新长度={len(new_items)}")

    print("[结束] 写回完成")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

