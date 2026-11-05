RADHIKA WASH MANAGER v3.0 — UPDATING YOUR EXISTING GITHUB PAGES PWA

1. In the OLD v2.2 app, download Settings > Full JSON Backup. Keep your current Google Drive backup and old ZIP.
2. Extract THIS ZIP. Upload index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png into the SAME root folder of your EXISTING GitHub Pages repository. Replace files and commit.
3. Keep the EXACT same GitHub Pages HTTPS URL. Your local browser data and Google OAuth client configuration are origin-bound.
4. Open your PWA online; refresh and, if needed, close/relaunch the installed icon or clear the obsolete SERVICE WORKER cache only (never clear site storage).
5. Verify old wash entries, receipt numbers, salary incentives and Google Drive status before adding new data.
6. Test a small v3 expense and export a new JSON backup. Keep older backup for recovery.
7. Reconnect Google Drive if OAuth session expired; confirm successful Sync and Drive file modification time.

Notes: Offline data lives in IndexedDB; Drive sync needs authorization and the app to be open. Auto WhatsApp sending cannot be guaranteed in a free PWA. Camera plate capture requires browser support and always manual verification. Receipt QR encodes receipt summary text, not a hosted receipt webpage. This package is a PWA, not an Android APK.
