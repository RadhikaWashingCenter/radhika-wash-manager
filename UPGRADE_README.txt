RADHIKA WASH MANAGER v2.1 — GOOGLE DRIVE AUTO BACKUP + SAFE RESTORE
====================================================================

WHAT IS NEW
1. Auto Backup to Google Drive (when app OPEN, online and signed in).
2. Safe automatic cloud recovery when phone records are empty, plus safe auto
   download when Drive is updated and phone has no unsynced edits.
3. Separate "Restore from Google Drive" button, with preview of counts and
   confirmation before replacement.
4. Stores the previous phone dataset in a separate IndexedDB recovery store
   before replacing nonempty phone data; keeps the five newest local copies.
5. "Restore Phone Safety Copy" button for reversing an unwanted restore.
6. When Drive and phone copies conflict, the app asks which is correct.
7. Preserves all v2.0 car-wash, salary, incentive, receipt and CSV features.

UPGRADE IF YOU ALREADY USE v2.0 ON GITHUB PAGES
1. Before upgrade, open v2.0 -> Drive & Settings -> Full JSON Backup.
2. Confirm the actual Drive backup file already exists.
3. Upload *all* v2.1 PWA files to the SAME GitHub Pages repository and path,
   replacing index.html, sw.js, manifest.webmanifest and icons.
4. In Chrome, refresh the existing HTTPS app. If an old PWA is cached,
   close/reopen or refresh it; the service-worker cache version is changed.
5. Your v2.0 IndexedDB and saved Google OAuth Client ID remain in place on
   the same origin and Chrome profile (unless site data was cleared).
6. Tap Connect Google Drive again if Google says sign-in required.
7. Check that your records and the Drive backup counts are correct.
8. To restore explicitly: Drive & Settings -> Restore from Google Drive ->
   check counts and date -> Confirm Restore.

HOW AUTO RECOVERY WORKS
- App starts by reading local data (even offline).
- When Google is CONNECTED and app is online, it checks the live Drive file.
- If phone data is empty but Drive has records, the existing Drive copy is
  restored automatically. It will not upload the empty phone over Drive.
- If both copies differ, only safe cases are auto-resolved. Other changes
  require your choice; there is NO blind overwrite of both datasets.
- Before replacing nonempty phone data, a separate local recovery copy is
  written. If that fails, restore stops.

RESTRICTIONS
- A downloaded file:// HTML can run offline but cannot use Google OAuth.
- Use an HTTPS-hosted PWA to enable Google Drive sync.
- HTML/PWA cannot sync in the background after the browser is fully closed.
- Google OAuth access tokens are in memory, not permanently stored. Sign-in
  may be needed after restarting, after an expiration or after Google testing
  mode sessions expire.
- One-phone solution; NOT designed for concurrent edits from multiple phones.
- The user must grant Drive access through their own Google Cloud OAuth app.
- Without live Google credentials, actual Google Drive sign-in cannot be
  fully verified by the app author. Test restore against your Drive backup
  on the phone before relying on it.
- Never delete v2.0, original JSON backups or Drive recovery snapshots before
  checking your live records on v2.1.
- Customer records may contain personal information; keep your backup private.
