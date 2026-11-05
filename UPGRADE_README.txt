RADHIKA WASH MANAGER v3.1 — RECEIPT NUMBER PREVIEW UPDATE

WHAT CHANGED
- New Wash: Shows the NEXT receipt number at the top before saving (read-only, not reserved).
- Entry Summary: Shows the same number.
- Editing an existing wash: Shows its already-issued receipt number; does not change it.
- After Save: Confirms the assigned receipt number; Records, image, WhatsApp and QR use that number.
- Everything else from v3.0 is retained. No database schema change or special migration required.

UPDATE EXISTING GITHUB PAGES PWA
1. IMPORTANT: On your current app download Drive & Settings > Full JSON Backup first. Also keep the current Google Drive backup.
2. Extract this ZIP on your phone or PC. Upload all five app files (index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png) to the SAME ROOT folder of your EXISTING GitHub Pages repository and replace the existing files. Commit.
3. Keep your existing HTTPS URL and repository. Do NOT clear site data, IndexedDB, browser storage, or uninstall the PWA.
4. Reload the existing PWA; if old UI remains, close/reopen the installed PWA and refresh its HTTPS page. The updated service worker has a new cache name.
5. Check that New Wash shows the next receipt, save one test wash and verify its ID in Records and receipt. Check Google Drive status and confirm backup before deleting any test entry.

CAUTION
- Displayed number is provisional; only Save assigns it permanently. A cancelled draft uses no receipt number. Deleted receipts are not reused.
- Google Drive sync needs the user's live Google session and network access while the app is open. This build does not change that behavior.
- PWA ZIP is not an APK. The standalone HTML file may not support Google OAuth from file:// URLs.
