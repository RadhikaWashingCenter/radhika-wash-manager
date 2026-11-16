RADHIKA WASH MANAGER v3.3.19 — Stability Update (16 Nov 2026)

FIXES:
- Daily wash number is locked by SAVED ENTRY ORDER; adding an older wash time does not change existing incentive amounts.
- Only standard Complete / Exterior / Interior services consume a NEW daily wash number; Other Service / custom vehicles do not.
- Large Complete bonus now follows Complete starting wash number by default. Set a separate large bonus start if desired (blank = Auto).
- Test Mode new sample data gets current incentive snapshots and consistent payout ledgers. Reset/reload sample if already created earlier.
- New employee defaults ₹7,000 basic + ₹1,500 attendance + ₹1,500 performance; existing salaries are unchanged.
- Clear warning for Complete starting #1–5 while 0–5 slab rate remains ₹0.

INSTALL ON GITHUB PAGES:
1. Export a verified Full JSON Backup from your CURRENT app first (and keep a copy outside browser storage).
2. Extract ZIP and replace index.html, manifest.webmanifest, sw.js, icon-192.png and icon-512.png in the same GitHub Pages repository root.
3. Open app ONLINE and refresh; close/reopen the installed app if old version stays cached. Do NOT clear browser site data without backup.
4. Confirm header says v3.3.19. Check Salary & Incentives > Starting Rules and Service-wise Rates.
5. The app is offline-first; Google Drive sync and Android native PWA install need real-device verification.

IMPORTANT: Stored historical incentive snapshots and real payment ledgers are not bulk-recalculated. If a wash is backdated, its wash # is the next saved-entry number, not its chronological position in time. Changes to saved washes can trigger financial safeguards.
