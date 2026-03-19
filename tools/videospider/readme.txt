
1. tools/videospider 下写 python 脚本，

2. 从 youtube 接口检索不同类型的视频，视频分类 json 如下 (忽略 json_file 字段)

   [{"title":"古装美人","id":20,"json_file":"20.json"},{"title":"契约婚姻","id":19,"json_file":"19.json"},{"title":"女主逆袭","id":18,"json_file":"18.json"},{"title":"家庭纠纷","id":17,"json_file":"17.json"},{"title":"悬疑短剧","id":16,"json_file":"16.json"},{"title":"推理剧情","id":15,"json_file":"15.json"},{"title":"穿越成妃","id":14,"json_file":"14.json"},{"title":"职场宫斗","id":13,"json_file":"13.json"},{"title":"牛马逆袭","id":12,"json_file":"12.json"},{"title":"创业奋斗","id":11,"json_file":"11.json"},{"title":"反转剧情","id":9,"json_file":"9.json"}]

3. 查询接口为 https://www.googleapis.com/youtube/v3/search?key={youtube_key}&q={title}&part=snippet&order=rating&maxResults=50&videoDuration=long&videoDefinition=high&videoEmbeddable=true&type=video&relevanceLanguage=zh
   查询返回 nextPageToken 为下一页的代码，通过 &pageToken={nextPageToken} 读取下一页

4. youtube 有三个 key ，每个 分类 循环使用
   AIzaSyBDZi-ThtTK0nl-a3x_KkvAKnV4ZXxojVI
   AIzaSyCuU2S--cBPUjDC-cobvZ_j5RnRN2KxMlE
   AIzaSyABdIXBFesolWb79K4_3ZxtJfhRd4UusIk

5. 将查询的数据，保存在 tools/videospider/source/{生成的年月日}/{分类id}_{第几页}.json 下

6. 开发完成自己测试，先提取两页看看效果，每页 5 个数据 (maxResults=5)，避免 token 的限量用尽

有疑问补充在 readme.txt 后，全理清后再开始

cd /Users/henry/Project/web/kale-studo-com-web

export YOUTUBE_API_KEYS="AIzaSyBDZi-ThtTK0nl-a3x_KkvAKnV4ZXxojVI,AIzaSyCuU2S--cBPUjDC-cobvZ_j5RnRN2KxMlE,AIzaSyABdIXBFesolWb79K4_3ZxtJfhRd4UusIk"

# 先测：2 页、每页 5 条（对应你 readme 的建议）
python3 tools/videospider/youtube_spider.py --pages 15 --max-results 50 --sleep 0.5



输出会保存到：

tools/videospider/source/{YYYYMMDD}/{分类id}_{第几页}.json
可选参数：

--categories 20,19：只抓指定分类id
--resume：如果对应输出文件已存在，会从文件里的 nextPageToken 继续翻页（断点续抓）
如果你愿意，我也可以在你本地环境确认好 key 的方式后，帮你跑一次“只抓某个分类的一页”来确认返回结构完全符合你的后续处理流程。


再生成一个 python 脚本

按下面的格式，读取数据源 tools/videospider/source/{YYYYMMDD}/{分类id}_{第几页}.json

将同分类按下面字段，归并成新的 json 数组,放在 tools/videospider/target/{id}.json 目录下

[{"videoId":"mJbz6EfIOQM","name":"瘦成傾國美人","title":"瘦成傾國美人","description":"欢迎来到小妹爲大家準備的超爽短劇，中國劇   超多题材，超甜剧情~霸总、古装、复仇、爽文全都有~英文字幕✧* ٩(ˊᗜˋ*)و✧* ...","channelTitle":"独播中剧","channelId":"UCCmg--gxdPL3S-cnD9wBO7w","publishedAt":"2025-05-16T09:01:10","thumbnails":{"medium":{"url":"https://i.ytimg.com/vi/mJbz6EfIOQM/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/mJbz6EfIOQM/hqdefault.jpg","width":480,"height":360},"default":{"url":"https://i.ytimg.com/vi/mJbz6EfIOQM/default.jpg","width":120,"height":90}},"url":"https://www.youtube.com/watch?v=mJbz6EfIOQM","searchQuery":"","pageNumber":""}]


cd /Users/henry/Project/web/kale-studo-com-web

# 合并某一天全部分类
python3 tools/videospider/merge_targets.py --date 20260320

# 只合并某个分类id（例如 9）
python3 tools/videospider/merge_targets.py --date 20260320 --categories 9

# 只统计不写文件
python3 tools/videospider/merge_targets.py --date 20260320 --categories 9 --dry-run


# 追加+去重（默认）
python3 tools/videospider/merge_targets.py --date 20260320 --categories 9

# 覆盖重建
python3 tools/videospider/merge_targets.py --date 20260320 --categories 9 --overwrite-existing



cd /Users/henry/Project/web/kale-studo-com-web

# 先 dry-run：只统计每个分类将删除多少条
python3 tools/videospider/validate_thumbnails_404.py --target-dir tools/videospider/target

# 确认无误后，写回删除
python3 tools/videospider/validate_thumbnails_404.py --target-dir tools/videospider/target --write