Radhika Wash Manager v3.3.16 — Service-wise Staff Incentives

WHAT'S NEW:
- Complete Car Wash: fixed five-wash slabs; default Small/Medium per worker: 0-5 ₹0, 6-10 ₹5, 11-15 ₹10, 16-20 ₹15, 21-25 ₹15, 26-30 ₹20, 31-35 ₹25. Explicitly saved prior customized slab rates are preserved.
- Complete Large Car: +₹5 per worker AFTER the first five washes (editable in Salary / Settings).
- Exterior Foam Wash: FIXED total ₹5 per worker Small / Medium, ₹10 per worker Large; no slab amount is added. Both values editable.
- Interior Vacuum & Dashboard: ₹0 by default; optionally turn on/edit worker rates in Service-wise Incentive Settings.
- Other Service: ₹0 per worker by default; individual wash manual override available.
- In New Wash > Employee Assignment: optional one-wash manual per-worker override (does not change defaults). The Staff Incentive Preview updates on changes.
- Custom Vehicles (Tractor, Bus, Truck, etc.) retain independent worker-wise custom rates; they do not count toward daily car slabs.
- Every standard car service contributes to the daily car-wash sequence. Existing saved washes preserve their own per-worker incentive rate; changing settings never changes earned/paid history.
- Service-wise Incentive Cost table in Reports, and CSV export.

SAFE UPGRADE:
1. Before doing anything, export Full JSON Backup from existing LIVE app and keep a copy.
2. Unzip all SIX files into the SAME GitHub Pages repository/path; replace existing files and commit.
3. Keep the same App URL. DO NOT clear browser Site Data or uninstall existing PWA: offline records may be lost.
4. Try on Test Mode first. Check manual rates, service selection, and salary reports.
5. Real Google Drive sign-in, backup and restore require account-side verification, not covered by local browser tests.

Files: index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, README.txt
