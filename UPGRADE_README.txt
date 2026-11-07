Radhika Wash Manager v3.3.4 — DATE-WISE WORKER INCENTIVE REGISTER

BEFORE UPDATING: Download a Full JSON Backup from the currently installed app.

UPGRADE EXISTING GITHUB PAGES PWA:
- Unzip and upload the FIVE files (index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png) to the existing repository and SAME folder.
- Commit Changes. Reopen your existing app URL and refresh; confirm the top shows v3.3.4.
- Do NOT clear Chrome site data/storage. Do NOT change the installed PWA origin or path.
- When possible, verify Google Drive backup/restore independently before trusting cloud sync.

WHAT CHANGED IN v3.3.4:
- Daily Incentive & Payment Register now shows ONE ROW PER DATE:
  Date | Total Cars | <each real employee name> | Earned | Paid | Pending
- Each worker column shows that worker's earned incentive for the date, including approved manual adjustment.
- Dates with payments remain visible, even when the earning amount was zero.
- The Total row adds each worker's earnings and all payments/pending for the selected dates.
- Horizontal scroll on mobiles, with sticky date column; Edit remains available under each date.
- Incentive CSV starts with the same date-wise register and includes worker payment details and payment history after it.

UNCHANGED:
- Pay Now/Pay Later, partial payments, date-linked pending, reversals, worker payment history.
- Payroll, salary slips, daily cash closing, receipt reset safety, Drive features and existing database schema.
- Paid is allocated to EARNING DATE, not necessarily actual payment date. Cash Closing uses actual payment date.

The app does NOT transfer money. Offline/Drive integration should be tested on your own phone.
