Radhika Wash Manager v3.3.8
1. BEFORE UPDATE, export FULL JSON BACKUP from Live Mode.
2. Upload all app files into the same GitHub Pages repository and commit.
3. Live Mode uses existing IndexedDB RadhikaWashingCenterDB and existing localStorage keys.
4. Test Mode: open the same URL with ?mode=test or use the Test Mode switch in header/Settings.
5. Test Mode uses separate IndexedDB RadhikaWashingCenterTEST_v338, localStorage and receipt counter. Google Drive is blocked.
6. In Test Mode Settings, Load October-November Sample Data or Reset All Test Data. Both require typed confirmation.
7. Do not clear site data or uninstall the app; doing so may destroy your live data.
8. No automatic Drive backup in Test Mode. Android WebView must allow IndexedDB for test storage.
9. Full/Encrypted Test JSON backups are explicitly labelled TEST ONLY; they cannot be imported to Live Mode.
