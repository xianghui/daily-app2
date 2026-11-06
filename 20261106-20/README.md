# Stock Again

A local-AI reuse desk for workshop buyers and community organizers. Compare purchase requests to existing inventory even when names differ, review semantic matches and quantities, then export a pick/buy sheet. This is distinct from an inventory CRUD dashboard: the bottleneck is recognizing already-owned equivalents before ordering. The original gallery includes StockPulse (inventory CRUD) but no semantic, quantity-constrained reuse planner; the current collection's AI utilities were also checked.

## Workflow

1. Paste or import requests and on-hand stock, or load either synthetic example.
2. Set a minimum cosine similarity and explicitly click **Load AI & match stock**.
3. Inspect source descriptions and up to five same-unit semantic candidates per request. Confirm physical suitability yourself. Reject with the empty stock source, select another source, edit reuse quantity and add a note. Changing source resets reuse to zero deliberately.
4. Undo up to 30 edits. Errors such as over-allocation prevent approval; the original lists remain intact.
5. **Approve reviewed plan** creates an in-app pick/buy snapshot. Download JSON/CSV or copy CSV. A later edit invalidates exports until approval again. Nothing orders products or modifies external inventory.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX conversion of [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), Apache-2.0.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), locked by package-lock. Locally bundled ES module worker, single-thread WASM CPU; no WebGPU or API key required.
- Actual AI creates normalized mean-pooled 384-dimensional embeddings for request and stock descriptions. It connects concepts such as power drilling tools ↔ cordless drills, beyond exact text. Real model inference—not regex, canned examples or a remote service—drives suggestions.
- Deterministic: cosine ranking, threshold, exact unit match, input-order greedy allocation, CSV parsing, quantity and schema checks, review and artifact creation. This is **not** a global optimizer: earlier requests consume stock first, each request uses at most one stock source, and suggestions may leave useful stock unused. Reordering CSV requests changes priority. It does not split one request over multiple stock sources.
- Similarity is not confidence or compatibility. Negation, generic labels, unfamiliar languages, part numbers and dimensions can mislead this English-focused model. Verify condition, safety ratings, dimensions and food/electrical compatibility. Suggestions are not approvals.

## Downloads, devices, caching and privacy

Before explicit processing there are no model-host requests. First run downloads roughly 23 MB of model/tokenizer/config files from `huggingface.co` and Hugging Face's CDN (observed `us.aws.cdn.hf.co`), plus same-origin runtime assets: 26.86 MB WASM binary, 53 KB factory, 548 KB worker and app bundles. Runtime files are bundled locally, not loaded from a JavaScript CDN. Progress reports file download state and groups of four embedded descriptions. Cancel terminates the worker; timeout is 180 seconds. Interrupted partial files may need downloading again.

Current browsers with Web Workers, WebAssembly, module/blob workers and enough memory (roughly 300 MB available recommended) are required. CPU fallback **is the default tested path**; unavailable WebGPU is irrelevant. Desktop Chrome on the build machine was tested; other browsers and physical phones are not certified. Phone layout was tested with 390/320px viewports, not phone inference performance. Browser policy may block blob workers or storage.

User descriptions are sent only to a local worker. The default path has no content upload, API integration, analytics, provider credentials or remote inference. Text is data for an embedding model; it has no tools or instruction-following authority. All source content/review notes live in page memory only. Export before closing/reloading.

Transformers.js caches model files. Worker source and WASM/factory explicitly use Cache API; cache keys include asset URLs. Cached worker/factory are instantiated via blob URLs, with locally emitted WASM URLs resolved against page origin. **After a successful run, another real run with a fresh worker in the same open page was tested with all network disabled.** Cached model reuse after an online reload was tested as well. This does not promise offline navigation/reopening: there is no app-shell service worker. Storage denial/private mode/eviction or changed assets may require internet. Clear site data to remove caches; user content is never stored in them.

## Formats, limits and hard constraints

Both CSVs require exact headers `id,description,quantity,unit`. Up to 30 records each (60 model texts), max 30,000 characters per CSV; `.csv` imports max 30 KB. IDs are unique per list, 1–24 ASCII letters/digits/underscore/hyphen. Fields have max 400 characters; surrounding whitespace is trimmed. Quantities are integers 1–9999. Unit names are 1–16 letters and normalized lowercase. Use the same unit word across lists; `each` and `pair` are not interchangeable. No XLSX/PDF, fractions, prices, currencies or pack conversions.

Papa Parse handles quoted commas, doubled quotes and newlines. Model input batches contain four texts, capped at 256 tokenizer tokens per text (long/subword-heavy descriptions may truncate). Vectors must be finite, normalized and dimension/count-correct before allocating. Source IDs/descriptions/quantities/units remain unchanged after parsing. Every request survives the output, including rejected matches. For every request, **reuse + buy = requested**; stock allocations may not exceed original quantity and units must match. Invalid reviewed values block approval. Run IDs guard model responses, worker downloads and asynchronous file reads; input/threshold/example changes invalidate old runs and output.

JSON schema `stock-again/v1` contains model/policy, original parsed requests, all reviewed records (source, suggestion, candidate similarities, note, reuse, buy) and every inventory record with used/remaining quantities. CSV headers: `id,description,requested,unit,stock_id,reuse,buy,note`, intended as a downstream pick/buy sheet, **not** an input file for this app. CSV text beginning with `= + - @ TAB CR` is prefixed with an apostrophe for spreadsheet safety, including multiline fields; numeric quantity columns remain numeric. JSON preserves exact parsed text and all inventory. Independent Python parsing validates actual browser downloads.

Metrics show current fully covered request lines, an exact case-insensitive description baseline under identical unit/quantity constraints, and lines still needing purchase. They count lines, not mixed units or monetary savings. No time, accuracy percentage or savings claim is invented. On the two synthetic fixtures, expected semantic sources were 8/8 correct; this tiny fixture set is not a general accuracy estimate.

## Development, validation and publication

```
npm install
npm run dev
npm run predeploy
node core-test.mjs
python3 serve-test.py
# In another terminal, with workspace Playwright/Chrome installed:
node browser-test.cjs
python3 export-roundtrip.py
```

Production base `/daily-app2/20261106-20/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained as required; **publish only from the root combined workflow**, never the per-app deploy command. The ONNX factory under public/runtime must match the locked onnxruntime-web version. Browser test defaults to production bundle served on port 6170. `PLAYWRIGHT_PATH` may select a different Playwright installation. `TEST_URL` and `REPORT` select public reruns/report paths. See VALIDATION.md for observed tests and honest limitations. Failure injection checks defensive behavior only; all successful workflow checks use the real default model.
