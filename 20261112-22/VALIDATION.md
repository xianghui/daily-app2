# Observed validation — Cash Estuary

## Local production bundle, 2026-11-12

- `npm run predeploy`: passed. Actual Vite production output served with its deployed base; locally bundled worker/factory and shared WASM used.
- Desktop Chrome with GPU disabled executed actual q8 MiniLM WASM inference on both synthetic inputs. Bookshop roles: ar,ar,inventory,inventory,ap,ap; Workshop: ar,ap,inventory,ar,ap,inventory. **12/12 intended links in these tiny fixtures**, not general accuracy. Exact-title baseline recognized 0/6 per fixture. Neither output is canned.
- Bookshop: DSO/DIO/DPO = 40/75/35; CCC 80 days vs supplied target 35; modeled release 3,300,000 cents vs inventory-only 1,800,000. Workshop: 40/40/20; CCC 60 vs 45; modeled release 2,500,000 cents vs inventory-only zero. This is a calculation comparison, not actual cash released or measured time savings.
- Unrelated instruction-like ocean text still matched ar. It remained pending and could be held; no scenario was released. The model always chooses a nearest role, so unsupported accounts/negation require human exclusion. No confidence claims.
- 3,000 generated formula/conservation cases matched independent BigInt rational oracles. Pending decisions, holds, missing opening/closing roles, invalid money/days/targets, duplicate IDs, oversized texts/batches and malformed/zero embeddings blocked as intended.
- Real model-host download paused and cancelled, changed input, then actual inference retried successfully. Delayed worker downloads and file imports were discarded. Fault-injected valid late messages from a worker ignoring termination could not overwrite newer data.
- Separate fault tests: model-host abort then real retry, worker-source abort, unavailable module workers, actual worker with WebAssembly disabled, malformed embeddings, worker error and accelerated 180-second timeout. No fake output or enabled exports on failures. Fault injections are defensive tests only, not evidence for real inference.
- Review amount edits invalidated applied exports, hold blocked scenarios, undo restored the prior review. Downloaded actual JSON/audit CSV/scenario CSV/Markdown and copied Markdown reflected current values. Python independent parsing checked all six records, reviewed amount, multiline quote/comma/formula-like note escaping, all three scenario rows and 24-record maximum batch. Original values stayed unchanged. Export JSON import restored originals with fresh pending decisions; maximum envelope round-trip passed.
- Fresh worker after successful loading performed **real inference while browser networking was disabled**. Tested offline scope: already-open warmed page only; reload/navigation is not claimed.
- Network audit: only GET requests without bodies, no model-host access before explicit load, no fixture content in URLs. Public file downloads only; local content remains in page/worker memory. Built JS/MJS credential-pattern scan found no matches. This scan is not a universal secret detector; integrations also inspected (no provider credentials or remote inference).
- Widths 1440, 390 and 320: no horizontal document overflow; all editable controls labeled; keyboard focus worked; controls min 44px. Desktop overview visually inspected. Physical phones, assistive technology and non-Chrome inference untested.
- Root gallery and combined deployment checks, public asset byte matching and public real-inference results are recorded in the adjacent machine-readable reports after publication.

## Limits

No general accounting classification accuracy, target feasibility, seasonality correction, ledger completeness, credit-sales/purchases accuracy, compliance or realized recovery claim. Missing unrelated accounts must be held; duplicate accounts with different IDs are not automatically detectable. Floating-point scenario estimates can include fractional cents, and displayed figures are rounded. No bank/account connections or transactions.

## Public release

The first root deployment completed successfully: Pages commit `6df75dfed86592d96898db1cf4b1118594f22e2b`, workflow `43224421129`, status `built`. Public app, worker, local factory and shared WASM byte-matched the production build. Both real-AI fixtures (12/12 tiny links), all eight public workflow checks including offline fresh-worker inference, reviewed artifact parsing and the 623-entry public gallery passed. All older entries/order/categories remain intact. No digest was sent. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json` and `publication-status.json`.
