import argparse
import json
import os
import re
from dataclasses import dataclass
from datetime import datetime
from glob import glob
from typing import Any, Dict, Iterable, List, Optional, Tuple


@dataclass(frozen=True)
class Category:
    title: str
    id: int
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


VIDEO_URL_TEMPLATE = "https://www.youtube.com/watch?v={videoId}"


def _safe_int_list(s: str) -> List[int]:
    out: List[int] = []
    for part in s.split(","):
        part = part.strip()
        if not part:
            continue
        out.append(int(part))
    return out


def _extract_page_idx(path: str) -> int:
    """
    期望文件名类似：{id}_{page_idx}.json
    """
    base = os.path.basename(path)
    m = re.match(r"^\d+_(\d+)\.json$", base)
    if not m:
        return -1
    return int(m.group(1))


def _iter_source_files(source_root: str, date_dir: str, category_id: int) -> List[str]:
    pattern = os.path.join(source_root, date_dir, f"{category_id}_*.json")
    files = glob(pattern)
    # sort by page idx so the merge is stable
    files_sorted = sorted(files, key=_extract_page_idx)
    return files_sorted


def _map_item_to_target(item: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    video_id = (item.get("id") or {}).get("videoId")
    if not video_id:
        return None

    snippet = item.get("snippet") or {}
    title = snippet.get("title") or ""
    description = snippet.get("description") or ""
    channel_title = snippet.get("channelTitle") or ""
    channel_id = snippet.get("channelId") or ""
    published_at = snippet.get("publishedAt") or ""
    thumbnails = snippet.get("thumbnails") or {}

    # 你的 readme 示例里 name/title 一致、searchQuery/pageNumber 为空字符串。
    return {
        "videoId": video_id,
        "name": title,
        "title": title,
        "description": description,
        "channelTitle": channel_title,
        "channelId": channel_id,
        "publishedAt": published_at,
        "thumbnails": thumbnails,
        "url": VIDEO_URL_TEMPLATE.format(videoId=video_id),
        "searchQuery": "",
        "pageNumber": "",
    }


def merge_category(
    *,
    source_root: str,
    target_root: str,
    date_dir: str,
    category: Category,
    dedupe: bool,
    dry_run: bool,
    overwrite_existing: bool,
) -> None:
    source_files = _iter_source_files(source_root, date_dir, category.id)
    if not source_files:
        print(f"[跳过] category={category.id}：source 无文件（{source_root}/{date_dir}/{category.id}_*.json）")
        return

    out_path = os.path.join(target_root, f"{category.id}.json")
    merged: List[Dict[str, Any]] = []
    seen_video_ids = set()

    if (not overwrite_existing) and os.path.exists(out_path):
        with open(out_path, "r", encoding="utf-8") as f:
            existing_payload = json.load(f)
        if isinstance(existing_payload, list):
            merged = existing_payload
            if dedupe:
                for it in existing_payload:
                    if isinstance(it, dict):
                        vid = it.get("videoId")
                        if vid:
                            seen_video_ids.add(vid)
        else:
            print(f"[警告] 已存在文件但不是数组，忽略旧数据：{out_path}")

    total_items = 0
    kept_items = 0

    for p in source_files:
        with open(p, "r", encoding="utf-8") as f:
            payload = json.load(f)

        items = payload.get("items") or []
        total_items += len(items)

        for item in items:
            mapped = _map_item_to_target(item)
            if not mapped:
                continue

            vid = mapped["videoId"]
            if dedupe and vid in seen_video_ids:
                continue
            if dedupe:
                seen_video_ids.add(vid)

            merged.append(mapped)
            kept_items += 1

    print(
        f"[合并] category={category.id} files={len(source_files)} totalItems={total_items} "
        f"newMergedItems={kept_items} totalMergedItems={len(merged)} -> {out_path}"
    )
    if dry_run:
        return

    os.makedirs(target_root, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Merge YouTube source JSON into target category JSON array")
    parser.add_argument("--date", default=datetime.now().strftime("%Y%m%d"), help="source 的日期目录名 YYYYMMDD")
    parser.add_argument("--categories", default="", help="仅处理指定分类id，逗号分隔，例如 --categories 20,19")
    parser.add_argument("--source-root", default="tools/videospider/source", help="source 根目录")
    parser.add_argument("--target-root", default="tools/videospider/target", help="target 根目录")
    parser.add_argument("--no-dedupe", action="store_true", help="不按 videoId 去重（慎用）")
    parser.add_argument("--overwrite-existing", action="store_true", help="覆盖已有 target/{id}.json（默认：保留旧数据追加）")
    parser.add_argument("--dry-run", action="store_true", help="只统计不写文件")
    args = parser.parse_args(argv)

    if args.categories.strip():
        category_ids = set(_safe_int_list(args.categories))
        categories = [c for c in CATEGORIES if c.id in category_ids]
        if not categories:
            raise SystemExit(f"没有匹配到分类id：{args.categories}")
    else:
        categories = CATEGORIES

    date_dir = args.date
    dedupe = not args.no_dedupe

    print(f"开始合并：date={date_dir} categories={len(categories)} dedupe={dedupe} dry-run={args.dry_run}")

    for c in categories:
        merge_category(
            source_root=args.source_root,
            target_root=args.target_root,
            date_dir=date_dir,
            category=c,
            dedupe=dedupe,
            dry_run=args.dry_run,
            overwrite_existing=args.overwrite_existing,
        )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

