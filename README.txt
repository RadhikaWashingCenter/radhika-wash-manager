RADHIKA WASH MANAGER v3.3.11 — CUSTOM VEHICLE + CUSTOM WORKER INCENTIVE
Date: 10 November 2026

NEW ENTRY
- Existing Small / Medium / Large Car rates stay ₹249 / ₹299 / ₹399.
- Fourth tile renamed from Custom Car to Custom Vehicle.
- Select Tractor / Tractor + Trolley / Bus / Truck / JCB / E-Rickshaw / Pickup / Other Vehicle.
- For Custom Vehicle, select Exterior Vehicle Wash / Complete Vehicle Wash / Custom Service; set manual price.
- Custom Worker Incentive: Equal (amount per assigned worker) or Individual (separate amount for each assigned worker).
- Default custom incentive ₹0 until explicitly entered. Absent / Paid Leave staff cannot be newly assigned.

ACCOUNTING
- Regular daily slab counts only Small / Medium / Large car washes.
- Each new Custom Vehicle earns ONLY the explicitly approved per-worker custom incentive; it never increases car-slab count.
- Each assigned worker custom amount is stored on the wash record and included in Daily Incentive Register,
  monthly earned/pending/paid balances, batch payment settlement and Salary calculations.
- Saved Custom Vehicle type also appears on Wash Records and printed receipts.
- Wash Records CSV now adds custom incentive detail and total columns.
- Existing historical Custom Car records created before v3.3.11 keep their prior slab calculation unless edited.
  Be careful editing past Custom Car entries if their incentives were already paid.
- New Wash Entry still has no Wash Stage selector. Attendance remains manual.

DEPLOYMENT
1. Open the OLD LIVE app at its EXISTING GitHub Pages URL and export Full JSON Backup first.
2. Unzip this folder and REPLACE all six existing root files in the SAME GitHub Pages repository.
3. Commit changes and refresh that same URL. Do NOT clear Chrome site data or uninstall the PWA.
4. Verify old receipt numbers, Live data and Drive status. TEST MODE has separate data and Drive is OFF.
5. In Test Mode add 20 car washes and a Custom Vehicle, then verify Daily Incentives and payment flows.

DISCLAIMER
- Browser tests exercised Save/Edit, 20-car slab isolation, equal and per-worker custom incentives and receipts.
- This does NOT verify the live Android PWA, customer real data, printer output or Google Drive OAuth end-to-end.
- 'Payment' records bookkeeping; it does not make a real bank/UPI transfer.
