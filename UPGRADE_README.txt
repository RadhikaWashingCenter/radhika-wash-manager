Radhika Wash Manager v3.3 — Guarded Employee Deletion

WHAT'S NEW
Employees → Delete: An accidental unused employee can be permanently removed. The confirmation screen checks assigned washes, attendance, payroll, incentive overrides/edit history and salary advances. Any linked history prevents deletion. For workers with history, use Edit Employee → uncheck Active employee → Save.
Before deleting, the app saves a Phone Safety Copy. If creating that copy fails, deletion is cancelled.

UPDATE ON GITHUB PAGES
1. Download Full JSON Backup from your EXISTING v3.2 app; confirm it has all records.
2. Extract this ZIP and upload the five web files (index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png) into your existing GitHub Pages folder. Overwrite the old files; keep the SAME repository and URL.
3. Commit. Reload the PWA and check that the version reads v3.3.
4. Check existing employees, washes, incentives and cloud sync. Do a test with an unused fake employee only.

NOTES
No Google account/Drive backup is included in this ZIP. The app retains the previous Drive API integration but live sync must still be verified on your own account. Automatic Drive backup works only when the app is running and connected. Do not clear browser site data. Keep a separate JSON copy before major updates.
