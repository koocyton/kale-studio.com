# SMS Forwarder Web — 在电脑上查看

**短信转发器（SMS Forwarder）** 的静态网页端：在电脑浏览器打开本页，用手机 App 扫描二维码，即可把最近短信以便签形式展示在网页上，方便复制。

## 链接

| | 地址 |
|---|---|
| **线上部署** | https://kale-studio.com/sms-forwarder-web/ |
| **Android App（Google Play）** | https://play.google.com/store/apps/details?id=com.bobog.n.sms_forwarder |
| **开源仓库** | https://github.com/koocyton/sms-forwarder-web |

## 工作原理

1. 网页为本次会话生成唯一的 **会话 ID** 与 **AES-256 密钥**，并写入二维码。
2. 手机 App 扫码后连接公共 **MQTT（WebSocket）** 代理，仅上传 **AES-CBC** 加密后的报文（最多 20 条最近短信）。
3. 浏览器本地解密并展示便签，无自建业务服务器存储短信明文。

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 界面、MQTT、二维码 |
| `i18n.js` | 多语言文案（14 种语言） |
| `crypto.js` | AES-256-CBC 解密（Web Crypto） |

## 自托管部署

请通过 **HTTP/HTTPS** 访问（不要用 `file://` 直接打开）：

```bash
python3 -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765/
```

可选 URL 参数：

- `?broker=wss://你的-mqtt-地址:8084/mqtt` — 覆盖默认公共 MQTT 代理。

默认公共 MQTT 代理（仅传输，内容为密文）：

`wss://broker.emqx.io:8084/mqtt`

## 安全提示

- 会话密钥只存在于二维码中，扫码相当于共享密钥，请注意周围环境。
- 建议通过 **HTTPS** 打开网页。
- 用完后关闭标签页；刷新页面会生成新的会话与密钥，需重新扫码。

## Android App

从 Google Play 安装 **SMS Forwarder**，在 App 内打开 **首页 → 在电脑上看**，扫描本页二维码即可。

https://play.google.com/store/apps/details?id=com.bobog.n.sms_forwarder

## 许可证

AGPL-3.0 — 详见仓库中的 [LICENSE](https://github.com/koocyton/sms-forwarder-web/blob/main/LICENSE)。
