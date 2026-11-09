# Cut Ledger

A local-AI cutting-list desk for small workshop coordinators. Paste/import stock definitions and one record per requested physical piece, run real semantic material matching, inspect source evidence, correct each material and approve or hold it, then apply a bounded minimum-board cutting plan. Export reviewed JSON, CSV or Markdown; copy the same Markdown. No purchasing, machine instructions or external actions.

## Workflow and constraints

Use either synthetic batch to learn the JSON format. `locations` contains 2–6 stock types `{id, description, length}`; `records` contains 1–12 individual pieces `{id, text, length}`. `kerf` is global integer 0–20 mm; lengths are integer 1–100000 mm. IDs are unique within each collection. Stock descriptions are at most 300 characters, piece text 500, source payload 50 KB. Quantities must be expanded explicitly into distinct pieces, within the 12-piece limit. Import `.json` only; a prior audit restores its original inputs, not approvals. Original lengths are never overwritten by suggestions.

Every row needs human approval or hold. Inspect source stock definitions and verify grade, dimensions, cross section, material, grain and fabrication requirements. Material edits reset approval; undo restores the previous review state. Notes support 500 characters. Every edit invalidates an applied/exportable snapshot until reapplied. Holds remain in all audit exports but are not cut. Overlength approved pieces block applying rather than silently disappearing.

The deterministic planner charges one kerf per piece, including the last cut, conservatively allowing a complete saw pass for each piece. It allocates every approved piece exactly once to unlimited identical standard stock lengths of the reviewed material. Subset dynamic programming solves the minimum board count per material for at most 12 pieces; ties are deterministic and do not optimize cut sequencing or offcut reuse. Compare against next-fit in original input order, using identical stock lengths/kerf. Counts are planning comparisons, not measured workshop savings. It checks finished length + kerf + unused length = purchased length and no duplicated/missing approved IDs.

This is one-dimensional planning only. Existing offcuts, purchase inventory limits, defects, grain, safety/workholding, end trim beyond kerf, angles, thickness, section and mixed stock lengths are not modeled. Verify all dimensions and safe cutting practice separately. Do not execute the manifest as a machine program.

## Actual AI, source and runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2
- Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), locally bundled module worker, q8 ONNX CPU/WASM inference.
- The model creates normalized 384-dimensional mean-pooled embeddings; cosine ranking compares piece descriptions against stock descriptions. It improves retrieval over literal naming, but does **not** prove compatibility or understand all prohibitions. Scores are similarity, never confidence. No generated answers or fallback labels.
- English intended, 256-token bounded context, four-text inference batches. Vector count/dimension/finite values are validated. 180-second timeout, download/batch progress and cancel/retry. Cancel/input changes terminate workers and invalidate run IDs, including async file/worker fetches. Errors produce no fabricated proposals.

## Downloads, devices, cache and privacy

Before explicit Run there are no model-host requests. First Run needs internet and approximately 50 MB: about 23 MB model/tokenizer from Hugging Face and its CDN, plus 26,861,777-byte same-origin WASM and locally bundled runtime/worker. Content is never uploaded. No API keys, provider integrations, analytics or telemetry. Imported strings are inert data, never instructions or tool authority. Only synthetic fixtures are included.

Requires a current browser with module workers, Cache API for offline caching, WebAssembly SIMD and enough memory for a small sentence encoder (allow several hundred MB). CPU inference is the default, not a fallback needing WebGPU. Desktop Chrome was tested; physical phones, Safari and Firefox were not. Mobile layout was tested at 390/320 CSS pixels; this is not physical-device inference verification.

Model assets are cached by Transformers.js; worker, WASM module factory and binary are explicitly retained in Cache API. A fresh worker can perform real inference offline **inside an already-open successfully cached page**. Offline navigation/reload/app-shell installation is not claimed. Eviction/private browsing/storage restrictions may require downloads again. Inputs, reviewer notes and outputs are not persisted by the app. Clear site storage to delete model/runtime caches. Exports explicitly save content locally at the user's request.

To avoid duplicate 27 MB payloads the production build references the immutable shared `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Keep that app's deployed asset. Hash is recorded in `bundle-audit.json`.

## Exports

JSON (`cut-ledger/v1`) includes all originals, AI rankings, reviewer decisions, held records, board allocations and computed metrics. Reimport retrieves originals for fresh review. CSV includes every piece and its board/null hold, source text, integer length, proposed/reviewed material and reviewer note. Spreadsheet-like leading text gets an apostrophe; JSON remains lossless. Markdown includes all allocated boards and held follow-ups, with the same content available via clipboard. These are planning artifacts; Markdown imported line breaks can affect presentation, not execute code.

## Build and verify

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy scripts are retained as required but **publish only through the collection root** `npm run predeploy` / `npm run deploy`, never replace the collection with this app. Vite base `/daily-app2/20261109-13/`.

Observed checks and limits: [VALIDATION.md](VALIDATION.md). Browser suites use the locally installed Playwright with Chrome against the production bundle (`python3 serve-test.py` on port 6313), not a development server. `node core-test.mjs`, `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node audit.mjs`, `node defense-test.cjs`, `python3 artifact-test.py`. Model failure checks use network aborts; malformed outputs, timeout and unsupported-runtime errors use explicitly injected fault workers, not mocked successful AI. No accuracy guarantee from small fixtures.
