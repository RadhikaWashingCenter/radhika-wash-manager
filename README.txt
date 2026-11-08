RADHIKA WASH MANAGER — v3.3.10 (2026-11-08)

NEW: EMPLOYEE MONTH-END INCENTIVE PAYMENT
- Records > Daily Incentive & Payment Register > select Earned Month > Worker card > Pay Full Pending.
- One confirmation records ONE physical payment per selected worker, settled across every unpaid earning day in the selected month.
- Default amount is full unpaid total. Enter a lower amount to pay PARTIALLY; oldest unpaid dates settle first.
- Select the ACTUAL payment date and Cash / UPI method. Payment is bookkeeping only — it does not send real cash/UPI.
- Batch Payment History shows ONE transaction, with paid date, worker, earning dates, method and amount. Batch allocations are retained under the hood and in CSV as date rows with common Batch ID.
- Reversal of a batch reverses ALL allocations together, with required reason and Cash Closing review warning.
- Prevents duplicate payments, overpaid incentives, and excessive wage advances/salary payments. Payment can never predate its associated earned days.
- On a previously closed payment day, the user must accept a reconciliation warning.
- Test Mode retains its own records, receipt numbers, sample loading/reset and no cloud sync.
- The New Wash screen still has NO Wash Stage selector. Attendance remains MANUAL.

IMPORTANT BEFORE YOU DEPLOY
1. In old app LIVE MODE, download Full JSON Backup (keep a safe external copy).
2. Extract ZIP; upload these SIX files to your SAME GitHub Pages repository, replacing old files.
3. Commit Changes and refresh the SAME existing GitHub URL. Do not clear Chrome site data or uninstall your old PWA.
4. Confirm Live receipts and existing washes, employee incentives, Salary and Drive status before real operation.
5. First test batch payments using TEST MODE. For fictional future earnings, future simulated payment dates are only permitted in TEST MODE.

LIMITATIONS
- Cloud OAuth/Drive restore, physical printer output, and installed Android PWA end-to-end are not verified here.
- The batch button records a payment already made; no automatic transfer is initiated.
- Historical Paid Wash payment dates are carried over from v3.3.9 assumptions; review past cash flow separately.
