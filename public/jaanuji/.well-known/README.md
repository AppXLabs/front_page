# Universal Links (iOS) & App Links (Android)

Deploy these files to **https://jaanuji.appxlab.space/** so that links like `https://jaanuji.appxlab.space` open the Jaanu Ji app when installed.

## Deploy

1. **iOS – Apple App Site Association**  
   - Copy `apple-app-site-association` to your web server at:  
     **`/.well-known/apple-app-site-association`**  
   - URL: `https://jaanuji.appxlab.space/.well-known/apple-app-site-association`  
   - Serve with `Content-Type: application/json` (no file extension).  
   - **Replace** `REPLACE_WITH_APPLE_TEAM_ID` with your Apple Team ID (e.g. from [developer.apple.com/account](https://developer.apple.com/account) → Membership, or `expo.fyi/apple-team`).

2. **Android – Digital Asset Links**  
   - Copy `assetlinks.json` to your web server at:  
     **`/.well-known/assetlinks.json`**  
   - URL: `https://jaanuji.appxlab.space/.well-known/assetlinks.json`  
   - **Replace** `REPLACE_WITH_SHA256_FINGERPRINT` with your app’s SHA256 cert fingerprint (e.g. run `eas credentials -p android` or use Google Play Console → Release → Setup → App signing).

After deploying, rebuild the app (EAS Build or `expo run:ios` / `expo run:android`) so the new `associatedDomains` and `intentFilters` are included.
