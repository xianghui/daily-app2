# Peak Folio — observed validation

## Real local AI

Production React/Vite bundle, real MiniLM q8 ONNX and WASM CPU in desktop headless Chrome, GPU disabled:

- Ceramics studio: kiln / air compressor / lighting / ventilation, **4/4** intended profiles.
- Print room: ventilation / printing press / dryer / lamps, **4/4** intended profiles.
- These are eight tiny synthetic examples, NOT an accuracy estimate. Unrelated instruction-like text still matched lighting; it remained pending and was held. No uploads or authority were granted.
- Studio profile: 41.2 kWh and 10,800 W peak. Moving the compressor start from slot 40 to 48 reduced the modeled peak to 7,800 W with unchanged 41.2 kWh and unchanged 10,800 W noncoincident baseline. No realized savings claim.
- Print profile: 40 kWh; coincident 6,300 W versus 10,300 W sum-of-equipment-maxima baseline. At supplied rates: 10.00 energy + 63.00 demand scenario = 73.00 in chosen currency. Not a real bill.

## Independent arithmetic and artifact checks

3,000 deterministic-seed Python Fraction oracle cases independently calculated every slot load, quarter-Wh, peak, noncoincident baseline, half-up charges and target gaps, matching JS. The first schema test mapped print records in policy order rather than known identities and correctly hit a rating blocker; the test fixture mapping was corrected and the complete suite passed.

Actual browser-downloaded JSON/CSV/Markdown were independently parsed using Python json/csv. Both four-record examples, edited multiline formula-like reviewer/evidence and full 40-record audit survived. Current edits/undo/holds invalidate and rebuild snapshots correctly. All original IDs and review decisions persist; audit reimport resets approvals. A separate 40 nonoverlapping-interval complete-plan test checks full-batch energy and export/reimport, plus zero rates/loads and 320px touch interactions.

## Defensive, privacy and offline

Empty/null/array/invalid/oversized JSON, empty/duplicate notes, fractional watts, invalid rates/ratings, unsupported import format; pending review rejection; hold blocking; rating exceedance; same-equipment overlap; 24:00 end boundary; cancel/retry and changed-input stale-run checks passed. Real model download was intercepted, cancelled, then different input successfully inferred without stale replacement. Defensive-only injection checked malformed vectors, timeout, unsupported workers and worker errors; blocked model/worker downloads produced no fabricated output, and network recovery ran the real model.

Captured production-page requests were GET without bodies, to same-origin assets or documented Hugging Face/CDN file URLs; no note content was uploaded. No model-host requests before explicit loading. Built text credential-pattern scan had no hits; source has no credential/provider integration. Runtime module and shared 26,861,777-byte WASM byte matched installed dependencies. After warming, network was disabled and a fresh worker completed real inference; only already-open-page offline use is claimed, not reload/startup.

## UI and scope

1440/390/320px viewports: no page horizontal overflow, labels/IDs, 44px-minimum buttons, keyboard focus and screenshots for input/review/results checked. Desktop overview and narrow result screenshots inspected. Emulated mobile touch workflow is tested; physical phones, other browsers, real electrical measurements and real billing reconciliation are not. User-provided load identity/rating/timing remains mandatory review.

Combined/public deployment results are recorded separately after release in `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json` and `publication-status.json`; a build or branch push alone does not establish public functionality.

Combined assembly: root predeploy reported 645 built, zero failed/skipped. All 645 gallery app indexes were present; root HTML and new app files byte matched sources. The full nine-group real-inference browser suite and preserved gallery/category/search/phone checks also passed against the served deploy directory before publication.

Peak Folio public release: both real-AI fixtures, all nine public workflow groups, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 645-entry gallery verified on the first Pages deployment.
