Radhika Wash Manager v2.2 (November 5, 2026)

NEW
- Daily Incentive Register redesigned: date-wise workers, cars, automatic vs final totals, month filter, export CSV.
- Edit per worker's final daily incentive. Optional reason, Auto reset, change history, automatically reflected in Payroll and Dashboard.
- Attendance-linked Employee Assignment: Absent / Paid Leave disabled, Present / Half Day enabled, Not Marked allowed with warning.
- Previously saved assignments are NOT silently changed by later attendance edits.
- Existing Google Drive OAuth client ID, local IndexedDB name, backup format and receipt numbers are retained.

UPDATE YOUR EXISTING GITHUB PAGES REPOSITORY (DO NOT MAKE A NEW REPO)
1. Export Full JSON Backup from existing app. Verify Drive backup too.
2. Unzip this package. Upload the files INSIDE the zip (index.html, manifest.webmanifest, sw.js, icons) to the same repository location as your current PWA.
3. Replace old files, commit changes. Keep your GitHub Pages URL unchanged.
4. Open existing PWA, refresh/reopen; in case the old version remains, close & reopen/refresh after SW update.
5. Check saved wash entries, old receipts and Attendance → New Wash → Records → Salary. First test with one sample.
6. Connect Google Drive again if requested and verify a new successful sync.

IMPORTANT
- Never delete old GitHub Pages origin, clear site data or delete your older backup until verified.
- For a local HTML file opened under file://, Google sign-in cannot be used; GitHub Pages HTTPS is required.
- No background sync when the app is fully closed. One-phone intended.
- Manual incentives are stored in incentiveOverrides and incentiveHistory, included in JSON/Google Drive snapshots.
- Browser/logic tests are not the same as live Google Account sync; verify with your own account.
