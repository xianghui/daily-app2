# Observed validation — 2026-11-11

## Local production bundle

- React/Vite `npm run predeploy` passes. Real q8 MiniLM CPU inference in headless installed desktop Chrome, not mocked.
- Ceramics studio: intended cup/plate/vase matched 3/3. All 6 units planned in 3 parcels; selected cost 1800 cents = smallest-fitting baseline 1800.
- Bookshop dispatch: intended book/puzzle/poster matched 3/3. All 5 units planned in 3 parcels; selected cost 1610 cents versus baseline 1800 (190 quoted cents difference from rate-aware choice). Not measured actual carrier savings.
- 6/6 tiny synthetic links matched versus first-product baseline 2/6. This tiny fixture is not general accuracy evidence. Negation challenge incorrectly chose cup over vase; unrelated instruction-like astronomy text received a plate suggestion. Both held. The model always finds a nearest supplied product, even when none is appropriate.
- 1800 independently generated geometry/billing cases checked using explicit grid-position enumeration and BigInt ceiling arithmetic. All passed. This verifies the declared homogeneous grid model, not unrestricted physical packing.
- Full maximum: 6 products, 8 cartons, 12 orders across 4-text AI batches. Input/output record counts conserved; grid capacity, dimensions, actual weight and rate minimum checked per parcel. Holds and no-fit rows retained; all-held totals zero.
- Review product reset, quantity/weight edits, undo, held/no-fit plans, original preservation, invalidated exports, JSON-originals reimport with fresh pending reviews, actual clipboard and downloaded JSON/CSV/Markdown checked.
- Offline: successful online load, terminated worker, network disabled, fresh real worker and inference passed in already-open production page. Offline reload/navigation is **not** claimed.
- Network capture from startup through workflow: all GET requests with no bodies; only origin/blob and model host/CDN downloads; no model before explicit loading or source text in URLs. No optional provider path or keys.
- Empty/null/invalid/oversized inputs; null rows; inconsistent internal/external carton dimensions; bad extension/oversized files; numeric bounds and empty fields blocked without fake results.
- Cancellation/retry, input changes during work, delayed import and delayed worker-download stale guards passed. Worker download/network failures, actual missing WebAssembly, worker-construction/error, malformed vectors and timeout injection blocked results/exports; network retry used real inference successfully.
- Desktop 1440 and narrow 390/320 layouts: no horizontal overflow; labels/focus and ≥44px button targets; working downloads. Screenshots inspected. Physical devices and non-Chrome engines not tested.

## Fix discovered during testing

Maximum-batch exported audit envelopes exceeded the raw-input 18 KB limit. Parsing now allows a ≤1 MB exported envelope while independently enforcing originals ≤18 KB. Full original round trip retested successfully. No old review approvals are trusted on reimport.

## Publication

Published and verified on the first deployment. Root predeploy assembled all 594 app directories with zero failures; the deduplicated combined site is 928,871,561 bytes. Every new app file matches the combined build byte-for-byte. All gallery inline scripts compile and all 593 previous entries/order/categories remain unchanged; new entry appears exactly once.

GitHub Pages built `e96ce030d97902d31dcbd57effb55bc8a3e0da49`, workflow `42984860015`. Public URL: https://xianghui.github.io/daily-app2/20261111-17/ . All public app/runtime/worker files and shared WASM match local SHA-256 hashes; public gallery is byte-identical to source.

The full successful public-browser suite reran both real-model fixtures, review/undo/holds/no-fit, edited artifact downloads/copy, numeric/input guards, maximum batching and reimport, cancellation/stale guards, challenge data, responsive layouts, and fully offline fresh-worker inference in an already-open public page. Public downloaded CSV/JSON/Markdown were independently parsed/reconciled with Python. Public network capture contains only GET downloads and no user text uploads. Model limitations and unsupported physical-device claims remain unchanged. Local defensive failure injection was not repeated against public hosting; byte-identical code and full public successful workflow were verified. See generated reports and publication-status.json.
