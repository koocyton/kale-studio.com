# SMS Forwarder Web — View on PC

Static web client for **SMS Forwarder** (*View on PC*). Open this page on your computer, scan the QR code with the Android app, and copy recent SMS messages as sticky notes in the browser.

## Links

| | URL |
|---|---|
| **Live site** | https://kale-studio.com/sms-forwarder-web/ |
| **Android app (Google Play)** | https://play.google.com/store/apps/details?id=com.bobog.n.sms_forwarder |
| **Source code** | https://github.com/koocyton/sms-forwarder-web |

## How it works

1. The page generates a one-time **session ID** and **AES-256 key**, both embedded in the QR code.
2. The phone app scans the QR, connects to a public **MQTT over WebSocket** broker, and publishes **AES-CBC** ciphertext only (up to 20 recent messages).
3. This page decrypts locally in the browser and shows messages as sticky notes. No custom backend stores SMS content.

## Files

| File | Purpose |
|------|---------|
| `index.html` | UI, MQTT client, QR generation |
| `i18n.js` | UI strings (14 languages) |
| `crypto.js` | AES-256-CBC decrypt (Web Crypto API) |

## Self-hosting

Serve the folder over **HTTP/HTTPS** (not `file://`):

```bash
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

Optional query parameter:

- `?broker=wss://your-mqtt-broker:8084/mqtt` — override the default public MQTT broker (must match what the app uses if you change it in the QR flow).

Default public MQTT broker (transport only, payloads are encrypted):

`wss://broker.emqx.io:8084/mqtt`

## Security notes

- The session key exists only in the QR code; treat scanning like sharing a password.
- Prefer **HTTPS** for the web page.
- Close the tab when finished; refresh generates a new session and key.

## Android app

Install **SMS Forwarder** from Google Play, then use **Home → View on PC** to scan the QR code on this page.

https://play.google.com/store/apps/details?id=com.bobog.n.sms_forwarder

## License

AGPL-3.0 — see [LICENSE](https://github.com/koocyton/sms-forwarder-web/blob/main/LICENSE) in the repository.
