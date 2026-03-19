import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from datetime import datetime
from typing import Any, Dict, List, Optional


@dataclass(frozen=True)
class Category:
    title: str
    id: int
    # 注意：readme 里提到 json_file 字段在查询阶段忽略，这里也不使用
    json_file: str


CATEGORIES: List[Category] = [
    Category(title="古装美人", id=20, json_file="20.json"),
    Category(title="契约婚姻", id=19, json_file="19.json"),
    Category(title="女主逆袭", id=18, json_file="18.json"),
    Category(title="家庭纠纷", id=17, json_file="17.json"),
    Category(title="悬疑短剧", id=16, json_file="16.json"),
    Category(title="推理剧情", id=15, json_file="15.json"),
    Category(title="穿越成妃", id=14, json_file="14.json"),
    Category(title="职场宫斗", id=13, json_file="13.json"),
    Category(title="牛马逆袭", id=12, json_file="12.json"),
    Category(title="创业奋斗", id=11, json_file="11.json"),
    Category(title="反转剧情", id=9, json_file="9.json"),
]


YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search"


def _load_api_keys() -> List[str]:
    """
    读取 API key（避免把 key 写死在仓库里）。

    支持两种方式：
    1) 环境变量 YOUTUBE_API_KEYS：逗号分隔，例如：
       YOUTUBE_API_KEYS="key1,key2,key3"
    2) 环境变量 YOUTUBE_API_KEY_1 ~ YOUTUBE_API_KEY_3
    """
    keys_env = os.getenv("YOUTUBE_API_KEYS")
    if keys_env:
        keys = [k.strip() for k in keys_env.split(",") if k.strip()]
        if keys:
            return keys

    keys: List[str] = []
    for i in range(1, 4):
        v = os.getenv(f"YOUTUBE_API_KEY_{i}")
        if v and v.strip():
            keys.append(v.strip())
    if keys:
        return keys

    raise SystemExit(
        "未找到 YouTube API key。请设置环境变量："
        "YOUTUBE_API_KEYS（逗号分隔）或 YOUTUBE_API_KEY_1~YOUTUBE_API_KEY_3。"
    )


def _http_get_json(url: str, timeout_s: int = 30) -> Dict[str, Any]:
    req = urllib.request.Request(url, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=timeout_s) as resp:
            raw = resp.read().decode("utf-8")
            return json.loads(raw)
    except urllib.error.HTTPError as e:
        # 读取错误体，尽量把 YouTube 返回的错误信息打印出来
        body = ""
        try:
            body = e.read().decode("utf-8", errors="replace")
        except Exception:
            body = ""
        raise RuntimeError(f"HTTPError: {e.code} {e.reason}\n{body}") from e
    except urllib.error.URLError as e:
        raise RuntimeError(f"URLError: {e.reason}") from e


def _safe_int_list(s: str) -> List[int]:
    out: List[int] = []
    for part in s.split(","):
        part = part.strip()
        if not part:
            continue
        out.append(int(part))
    return out


def build_query_params(
    *,
    api_key: str,
    title: str,
    max_results: int,
    page_token: Optional[str],
) -> Dict[str, str]:
    params: Dict[str, str] = {
        "key": api_key,
        "q": title,
        "part": "snippet",
        "order": "rating",
        "maxResults": str(max_results),
        "videoDuration": "long",
        "videoDefinition": "high",
        "videoEmbeddable": "true",
        "type": "video",
        "relevanceLanguage": "zh",
    }
    if page_token:
        params["pageToken"] = page_token
    return params


def fetch_category(
    *,
    category: Category,
    category_index: int,
    api_keys: List[str],
    max_results: int,
    pages: int,
    sleep_s: float,
    output_dir: str,
    resume: bool,
) -> None:
    api_key = api_keys[category_index % len(api_keys)]

    date_dir = datetime.now().strftime("%Y%m%d")
    out_root = os.path.join(output_dir, date_dir)
    os.makedirs(out_root, exist_ok=True)

    page_token: Optional[str] = None
    for page_idx in range(1, pages + 1):
        out_path = os.path.join(out_root, f"{category.id}_{page_idx}.json")
        if resume and os.path.exists(out_path):
            print(f"[跳过] {category.id} 第{page_idx}页（已存在）: {out_path}")
            try:
                with open(out_path, "r", encoding="utf-8") as f:
                    existing = json.load(f)
                page_token = existing.get("nextPageToken")
                items_len = len(existing.get("items", []) or [])
                print(f"[续抓] {category.id} 第{page_idx}页已保存 items={items_len} nextPageToken={'有' if page_token else '无'}")
            except Exception as e:
                raise RuntimeError(f"resume 模式读取失败：{out_path}\n{e}") from e

            if not page_token:
                print(f"[结束] category={category.id}：已存在文件里也没有下一页 token")
                return

        params = build_query_params(
            api_key=api_key,
            title=category.title,
            max_results=max_results,
            page_token=page_token,
        )
        url = f"{YOUTUBE_SEARCH_URL}?{urllib.parse.urlencode(params)}"

        print(f"[请求] category={category.title}({category.id}) page={page_idx} maxResults={max_results}")
        resp = _http_get_json(url)

        payload: Dict[str, Any] = {
            "category": {"id": category.id, "title": category.title},
            "query": {"q": category.title, "part": "snippet", "order": "rating"},
            "page": {"page_index": page_idx, "max_results": max_results},
            "items": resp.get("items", []),
            "nextPageToken": resp.get("nextPageToken"),
        }

        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)

        items_len = len(payload["items"])
        print(f"[保存] {out_path} items={items_len} nextPageToken={'有' if payload.get('nextPageToken') else '无'}")

        page_token = payload.get("nextPageToken")
        if not page_token:
            print(f"[结束] category={category.id}：无下一页 token")
            return

        if sleep_s > 0:
            time.sleep(sleep_s)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="YouTube 分类视频抓取（search API）")
    parser.add_argument("--max-results", type=int, default=5, help="每页最大返回条数（测试建议 <= 5）")
    parser.add_argument("--pages", type=int, default=2, help="抓取页数（测试建议 2 页）")
    parser.add_argument("--sleep", type=float, default=0.5, help="请求之间等待秒数，降低触发限流概率")
    parser.add_argument("--output-dir", default="tools/videospider/source", help="输出目录（会自动按日期分文件夹）")
    parser.add_argument("--categories", type=str, default="", help="仅抓取特定分类id，逗号分隔，例如：--categories 20,19")
    parser.add_argument("--resume", action="store_true", help="已存在的输出文件将跳过（注意：不会精确续抓 token）")
    args = parser.parse_args(argv)

    api_keys = _load_api_keys()

    if args.categories.strip():
        category_ids = set(_safe_int_list(args.categories))
        categories = [c for c in CATEGORIES if c.id in category_ids]
        if not categories:
            raise SystemExit(f"没有匹配到分类id：{args.categories}")
    else:
        categories = CATEGORIES

    print(
        f"开始抓取：categories={len(categories)} pages={args.pages} maxResults={args.max_results} "
        f"keys={len(api_keys)} output-dir={args.output_dir}"
    )

    for idx, c in enumerate(categories):
        fetch_category(
            category=c,
            category_index=idx,
            api_keys=api_keys,
            max_results=args.max_results,
            pages=args.pages,
            sleep_s=args.sleep,
            output_dir=args.output_dir,
            resume=args.resume,
        )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

