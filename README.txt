RADHIKA WASH MANAGER — VERSION 3.3.9 (2026-11-08)

BEFORE ANY UPDATE:
1. Open existing GitHub app in LIVE MODE and export Full JSON Backup.
2. Keep that backup private and stored safely outside the app/phone as well.
3. Upload these SIX files into the SAME existing GitHub Pages repository; replace previous files and Commit Changes.
4. Open the SAME URL and refresh. DO NOT clear Chrome site data/uninstall the PWA.
5. After update, check real records/receipts, monthly payment history, salary and Drive sync before real business use.

WHAT CHANGED:
- New wash Payment Ledger: collection date (not just wash date), Cash/UPI, partial payments, refunds, outstanding and payment history. Exports included.
- Historical Paid washes migrate to ledger once. Their payment date is ASSUMED to equal wash date, because older data did not record actual received dates. You must treat historical cash-flow date summaries as approximate.
- New orders automatically Completed; New Wash Entry DOES NOT have Wash Stage selector.
- Membership redeemed wash edit supported even when remaining credits are zero.
- Future Completed wash dates blocked in Live Mode; Test Mode may use future sample dates.
- Rejects known old demo-style and Test backups in Live Mode.
- Salary basic pro-rata for join/leave month; manual attendance remains unchanged and NO attendance automation is added.
- Salary Advance target month and more visible Salary, Revenue, Outstanding, Closing review and Dashboard metrics.
- Closing corrections can be audited. Daily Summary uses actually received amount and pending rather than binary Paid status.

TEST MODE:
- Test storage/receipt sequence separated from Live; Drive off while testing.
- Test sample loading and Reset All Test Data work only in Test Mode.

LIMITATIONS:
- Google Drive OAuth, actual cloud backup/restore, installed Android PWA behavior, receipts on physical printers and actual business payments have not been verified end-to-end on the user's phone.
- Consult an accountant before using estimated profit/salary reports for tax filing. Verify historical wages expense duplicates manually.
