# Android App Links – Digital Asset Links

Serve these files from your website root so that:

- **URL**: `https://notifypay.appxlab.space/.well-known/assetlinks.json`

## 1. Get your SHA-256 certificate fingerprint

**Production (release) keystore:**

```bash
keytool -list -v -keystore keystore.jks -alias notifypay
```

Copy the **SHA256:** line (format `AA:BB:CC:...`, 95 characters).

## 2. Update assetlinks.json

Replace `REPLACE_WITH_PRODUCTION_SHA256_FINGERPRINT` in `assetlinks.json` with the SHA256 value from your release keystore (for `com.app.notifypay`).

## 3. Deploy to your server

- Copy the contents of this `well-known` folder to your web server so that the file is available at:

  `https://notifypay.appxlab.space/.well-known/assetlinks.json`

- Ensure the response has `Content-Type: application/json`.
- The file must be served over HTTPS.

## 4. Verify

- Use [Google's Statement List Generator and Tester](https://developers.google.com/digital-asset-links/tools/generator) or [App Links Assistant](https://developer.android.com/studio/write/app-link-indexing) to confirm the setup.
- On a device, install the app and open `https://notifypay.appxlab.space/` in a browser or link; it should open in the app without a disambiguation dialog when verification succeeds.
