# Observed validation — Batch Breakwater, 2026-11-11

## Real AI, production bundle
Real desktop Chrome, Transformers.js 4.3.2 q8 MiniLM, WASM CPU. No mocked successful inference, no deterministic fallback. `browser-validation.json` records requests, fixture results and checks. Model assets are requested only after explicit invocation, using GET with no request bodies; source review confirms user text is passed to a local worker only. Built text asset credential scan is recorded in `secret-scan.json`; no credential integration exists.

- Bakery: bread/cookie/tart matched 3/3 intended identities, first-product baseline 1/3. Demand 20/10/8: optimized costs 2300/1300/1000 cents; produced 20/12/8. Bread's same-limit repeated-smallest baseline costs 3000 cents for 24 units vs selected 2300 for 20. Cookie baseline is infeasible, so no comparable savings claim.
- Print: poster/card/sticker matched 3/3, first-product baseline 1/3. Demand 20/22/18: selected costs 3000/1200/1400, produced 21/24/20. Poster baseline 3600 cents for 20 and sticker baseline 1500 for 18; card baseline infeasible.
- Challenge: “Not a loaf of sourdough bread. Chocolate chip cookies instead.” incorrectly retrieved bread. Unrelated password-request/Jupiter text retrieved tart. Both were held; all plans blocked. This demonstrates similarity is neither identity certification nor instruction-following authority. Six tiny simple cases do not establish general accuracy.

## Exact optimizer / constraints
`node core-test.mjs`: 1,680 independent exhaustive two-mode cases matched minimum cost, then extras, then batch count. Selected counts reproduce units and cents. Original round trips, malformed vectors and global hold blocking passed. Whole quantities, bounded extras and complete audit preservation checked in actual downloaded plans. No factory-wide resources are modeled; no claim of operational feasibility or safety.

## Actual browser workflow / artifacts
`browser-test.cjs` passes both fixtures, mandatory review gate, product/count/note edits, undo, export invalidation, holds blocking all plans, exact-limit infeasibility, invalid counts/limits, clipboard equality with downloaded Markdown, maximum 6-product/4-mode/12-request batching, audit reimport with renewed review and all plans preserved, empty/invalid/oversized/unsupported inputs, cancellation/retry and input-change stale guards. All source records remain in JSON/CSV/Markdown. CSV repeats product totals per request (explicitly documented, not summed as line totals).

Independent Python csv/json parser reopened reviewed, max and phone downloaded artifacts, checked record count, IDs, source text, corrected quantities/products, review notes, states and batch counts. A formula-like note containing commas, quotes and a newline survived JSON losslessly and CSV with leading apostrophe; Markdown contains reviewed notes. Originals remained unchanged. Reports: `artifact-validation.json`, `export-*.json/csv/md`.

`defensive-test.cjs`: model host abort then real-inference retry, worker-download failure, unsupported worker constructor, malformed embedding response, shortened 180-second timer fault and worker errors all leave zero suggestions and disabled exports. Successful retry uses real AI. `stale-import-test.cjs`: delayed import can't replace newer input; delayed worker-source download after cancel is discarded; next real run succeeds; actual worker with WebAssembly disabled reports actionable failure. Fault injection is limited to defensive tests.

## Runtime / offline / layout
After an online production run, network disabled completely, original worker terminated and a fresh worker performed real model inference from caches in the already-open page. Tested offline scope excludes reload/navigation. Worker, runtime module and WASM paths use the production Pages base and explicit Cache API; shared immutable WASM is preserved. Desktop widths 1440 and phone widths 390/320 passed horizontal overflow, labels, focused input, ≥44px buttons and actual downloads; screenshots inspected. Physical phone hardware and other browsers untested.

Initial local server mount omitted `/dist` for the shared old WASM, resulting in a visible HTTP-404 error (no fake output). Corrected the production test server mapping, reran real inference and all checks successfully; application/shared deployment paths did not need alteration.

## Gallery, assembly and publication
`gallery-test.cjs` compiles every inline script with `new Function`, requires scripts/APPS, verifies exactly one correct new entry and preserves every earlier entry/order. Gallery UI checks require AI Utilities first, Batch Breakwater first, all legacy categories and no overflow. Combined assembly and public deployment reports are recorded separately; publication is only complete when public bytes and actual public real-AI workflows pass.

Public release verified: Pages run 42992516566 succeeded for `f5370df729d7572d9802e1f7d1aeb7d9e8bb1541`. Every public app/runtime/worker/shared-WASM byte hash matched production. Both public real-AI fixtures, the full workflow/export/batch/defensive-input/offline/phone suite and public gallery checks passed. Gallery has 595 entries, with every prior entry/category preserved. Source is committed/pushed separately after recording this result. Additional zero-cost tie and maximum 1,200-unit demand boundary checks also passed.
