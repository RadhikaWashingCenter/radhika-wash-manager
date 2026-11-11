Radhika Wash Manager v3.3.13 — Four Selected Updates Only

UPGRADE (EXISTING LIVE APP)
1. FIRST: from the CURRENT Live app, download Settings > Full JSON Backup and keep it separately.
2. Extract this ZIP and replace the 6 files in the SAME GitHub Pages repository/path.
3. Commit, reopen the SAME website URL; allow the service worker update. Do NOT clear Chrome Site Data or uninstall the existing app as a cache-fix.
4. Test features with ?mode=test first; the Live and Test data stores and receipt sequences remain distinct.

ONLY FOUR UPDATED AREAS
1. Google Drive: Settings > Verify Backup & Restore (read-only integrity and restore-readiness check). Requires real HTTPS Google OAuth connection. The check downloads/validates cloud data without changing phone records. It checks phone-versus-Drive match and previews counts. Real-world Google login, backup upload and actual restore must still be checked on your own device/account.
2. Customer Outstanding: Expenses & Profit > Customer Outstanding & Payment Register. Search receipt #, vehicle ID, vehicle registration, name, mobile, type. 25 entries/page; all matching pending records searchable, not capped at 100.
3. Compact Test Banner: one-line fixed banner above bottom mobile menu; Google Drive remains OFF in Test Mode.
4. Vehicle-wise Business Report: Reports > select month; groups Small/Medium/Large Cars and Custom Vehicle types (Tractor, Bus, Truck, etc.). Shows number of washes, wash sales, received-to-date against those washes, pending; vehicle-wise CSV export. Membership-plan sales excluded; 'received to date' is NOT calendar-month cash collection.

UNCHANGED
No Attendance Automation. Manual attendance retained. No Wash Stage selector on New Entry. Car prices ₹249/₹299/₹399, custom incentive rules, payment ledgers, receipts and receipt numbering are unchanged.

SAFETY
- Test Mode Google Drive disabled; never import Test data into Live Mode.
- Backup/Restore verification is a READ-ONLY rehearsal and cannot guarantee OAuth or actual restore on a different phone.
- Keep at least one independently stored Full JSON Backup before any upgrade.
