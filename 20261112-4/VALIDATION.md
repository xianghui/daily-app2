# Buffer Estuary — observed validation

## Local production bundle

- `npm run predeploy` passes (React + Vite production build; correct `/daily-app2/20261112-4/` base). Shared WASM byte-identical to the installed runtime; factory and worker bundled locally. See `runtime-assets.json` and build log.
- Real WASM/CPU MiniLM inference in desktop Chrome, no mock in successful runs: Repair store → bearing/glove/tape; Studio supplies → ink/paper/cable. **6/6 tiny intended identities**, exact-title baseline **0/6**. These are small synthetic checks, not generalized accuracy.
- Known points: Repair 9/20/6, Studio 4/12/5 units. Bearings: empirical point covers 7/7 historical windows vs mean 4/7; ink 7/7 vs 5/7; cable 8/8 vs 6/8. Both fixture total top-up counts = 8 units, versus mean baselines 5 and 3. More buffer is not proven cost-effective or a future service guarantee. Other products have unchanged points.
- **2,400 independent BigInt sum/nearest-rank/ceiling-mean oracle cases** passed, plus inventory conservation, split-location aggregation, held-product blocking, absent-product behavior, input validation and audit-original round trip (`core-test.mjs`, `core-validation.json`).
- Actual maximum batch: six products / 24 notes, four-text model chunks; all original records retained and expected exact-description matches obtained. Complete max audit reimport reproduces original input and resulting products, with approvals renewed.
- Browser review: edit product/numbers/multiline note, undo, pending-approval block, holds, all-held worksheet, invalid number, result discard/invalidation, copy Markdown. JSON, Audit CSV, Product CSV and Markdown downloaded, independently parsed/reopened in Python; current edits and original quantities preserved; formula-like multiline note escaped correctly; all required records retained (`artifact-validation.json`).
- Warming online then disconnecting the browser context and starting a **fresh worker** produces real inference inside the already-open page. Offline reload/navigation is **not** claimed. Cache clearing/eviction may require download.
- Input error cases: empty, malformed/null, duplicate IDs, oversized source/file, unsupported CSV, >24 notes, invalid percentile and negative/fractional quantities. No fake result on errors.
- Download abort/recovery (real model retry), worker download failure, unsupported module workers, actual worker without WebAssembly, malformed vector schema, timeout and worker failure tested. Fault injection is confined to defensive error/stale tests, not AI-success checks.
- Cancel/retry, edit-while-running, delayed import, cancelled delayed worker download, and deliberately late valid vectors from a worker ignoring termination tested. No old input or result overwrites a newer run.
- Negation challenge (`Not steel ball bearings…need…gloves`) incorrectly proposed bearing. Unrelated instruction-like astronomy text also proposed bearing. Both were held; blocked outputs remained blocked and text did not gain authority. Nearest-match retrieval is not identity verification or instruction following.
- Requests captured from page load through real inference: no model-host requests before explicit load; all 45 captured requests GET with no bodies, only page/runtime/model files, no input-bearing URL. Source inspected for integrations/persistence; built asset credential-pattern scan returned no hits. No real data or credentials included. Pattern scans alone are not exhaustive security proofs.
- Layouts at **1440, 390 and 320 px**: no horizontal overflow, all form controls labeled, focus working, buttons ≥44 px. Narrow screenshot inspected. Physical phones/low-memory devices/other browsers untested; responsive layout is not a claim of universal phone inference. No browser page errors.

## Publishing

Gallery syntax/conservation passes: all inline scripts compiled with `new Function`; 605 entries, exactly one new AI-utility entry, all 604 prior entries/order/metadata preserved. Existing AI Utilities-first category and tagline already express utility focus; legacy category labels retained. Combined assembly and public verification results are recorded separately after publishing. A branch push alone is not validation.

## Public release verified

First root deployment completed successfully: Pages commit `63fde651f400354c5fe671ea72999c495d8d8a33`, workflow `43084178925` (all jobs successful), latest Pages build `built`. An early request while deployment was active returned HTTP 503; after completion the full check passed. Public app HTML, CSS, worker, runtime factory and shared WASM were fetched and hash-matched to the validated bundle. The **full public browser workflow suite** passed: both real-AI fixtures, maximum batch, actual reviewed artifact downloads, undo/holds, invalid input/cancel/retry, fresh-worker offline inference and three viewport widths. Public gallery renders all 605 working-tree entries with older categories intact. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `pages-status.json` and `publication-status.json`.

Pre-existing unrelated README/gallery changes and untracked earlier apps were preserved, not included in this source commit. The validated/published gallery count refers to the existing working tree.
