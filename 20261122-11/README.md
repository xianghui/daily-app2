# Gate Atlas

A local-AI process bypass workroom for operations analysts. Reconcile informal handoff endpoints with a stage catalog, review every arrow, then ask whether nominated checkpoints occur on **every** route from entry to completion. Download source-linked bypass witnesses, not unsupported compliance assurances.

## Workflow

1. Use Editorial release / Equipment repair synthetic examples or import/paste JSON.
2. Set `start`, `finish` and `gates` to supplied stage IDs. `stages` have `id,description`; `handoffs` have `id,from,to`, where from/to are informal descriptions, not necessarily exact IDs. Edit goals/catalog in source and rerun.
3. Read requirements, then explicitly click **Load AI & reconcile**. Inspect download progress; cancel/retry is available.
4. Confirm or correct both endpoints, add multiline notes and approve each arrow. Similarity values are cosine evidence, **not confidence**. Hold uncertainty to withhold the entire graph audit; removing an uncertain arrow could hide a bypass. Undo reverses review edits.
5. Apply reviewed scenario. Inspect unavoidable, bypassable and off-route gates, concrete route stage/arrow IDs, unreachable stages and a simple on-route-presence comparison.
6. Export current JSON, CSV or Markdown; copy worksheet is available. Any review/source edit invalidates applied exports. JSON/audit reimport restores original input only, requiring renewed inference/review. No live workflow changes occur.

## Real AI, runtime and privacy

Default model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, with Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Real mean-pooled normalized 384-dimensional embeddings compare every rough endpoint with stage descriptions. Finite vector count/dimension/norm validation precedes deterministic cosine ranking. No canned responses, keyword fallback, remote inference, accounts, keys or mandatory paid service. Imported text is data, not instructions or executable code.

Initial load approximately 23 MB model plus 27 MB CPU runtime, tokenizer/config and ~0.6 MB worker. Requires internet initially, HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB free RAM. Single-thread WASM CPU does not need WebGPU. Desktop Chrome with GPU disabled tested; physical phones, Safari, Firefox and assistive technology are untested. Cache API stores public files where available; browser eviction/quota can require re-download. **Only fresh-worker inference in an already-open warmed page is claimed offline**, not cold navigation/reload. Network/runtime failures, malformed vectors and a 180-second timeout stop the run with actionable errors; nothing silently becomes fake AI. Four texts per chunk. Shared worker pipeline supplies max_length 256, but this Transformers pipeline uses tokenizer model_max_length **512**; no stricter token-cap claim. Phrases are bounded to 200 characters.

Public files download from this collection, huggingface.co and its CDN (including hf.co/xethub distribution endpoints). User content goes only into a local browser worker, never download URLs or request bodies. No analytics or backend. User data/reviews stay in React memory; closing the page loses unsaved work. Exported audits can contain sensitive content; use de-identified inputs if sharing. No personal records or credentials in fixtures.

### Immutable same-origin dependencies — preserve these published apps

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Their byte sizes/SHA-256 are in `runtime-dependency-audit.json`. Worker source has its own Cache API bridge. The worker explicitly caches factory and WASM and uses blob URLs for fresh-worker offline loading. Transformers caches model files. Deploy this app through the collection, not alone without these assets. Source and production dependencies were inspected and real inference rerun against the assembled/public site.

## Deterministic method and limits

Breadth-first search finds a completion route. For each nominated gate, remove that node and search again: if completion still exists, its shortest-by-arrow-count bypass witness is returned; otherwise the gate dominates the reachable finish. The baseline merely checks that a gate appears on some completion walk (reachable from entry and can reach finish). Counts are computed graph properties, not accuracy, productivity gains or elapsed-time savings. If finish is unreachable no mandatory claim is made. Holds withhold conclusions and preserve all rows. All arrows are assumed feasible unconditionally; there are no inferred guards, concurrency, route probabilities or hidden entry points. Finish is terminal; outgoing finish arrows are preserved but ignored for path searches. Cycles, self-loops, duplicate arrows, arbitrary string IDs and unreachable stages are supported. Missing/incorrect arrows can make mandatory claims false; this is not policy/security certification.

Input: source JSON ≤60,000 characters; JSON source/audit file ≤4 MB; 2–12 stages with unique IDs ≤50 and descriptions ≤200; 1–40 handoffs with unique IDs ≤50/from/to ≤200; 1–10 distinct gates excluding distinct entry and finish. Review notes ≤2,000. At max 92 neural texts/23 chunks. Input edits, file reads, source downloads and worker messages share run IDs; terminated/stale workers cannot replace newer results.

Output: `gate-atlas/1` lossless JSON with originals, neural evidence, decisions and analysis; CSV all original/reviewed arrows/notes; Markdown route worksheet plus full audit. CSV quotes commas/newlines/quotes and prefixes formula-like strings with an apostrophe. Use JSON for exact round trips. No external emails, account changes, file deletion or process enforcement.

## Validation and release

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Actual production-browser inference on two different fixtures, known-answer links, exhaustive independent graph oracle, review/hold/undo, downloaded artifact parsing, maximum batch/reimport, invalid inputs, network/model/runtime/malformed output/timeouts, cancellation/races, warmed-page offline inference, privacy trace, credential scan, desktop/320/390px layout checks and public runtime byte checks are recorded. Tiny fixture results are not general accuracy estimates; negation/unknowns still receive a nearest-stage suggestion and require a hold.

`npm run predeploy` builds this app. Required scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **do not run this app's deploy for the collection**. Publish with root `npm run predeploy` and `npm run deploy`. Source path `20261122-11`; Vite base `/daily-app2/20261122-11/`.
