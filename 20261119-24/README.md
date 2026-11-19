# Boundary Basket

An AI-assisted ground-cover worksheet for garden/site-planning teams. The bottleneck is reconciling informal boundary-walk notes ("the container of decomposing scraps") with a coordinate landmark catalog ("compost bin"). Neural semantic matching suggests the corner, mandatory human review verifies identity and traversal, and deterministic geometry converts the closed outline into an area/depth/whole-bag worksheet. No microphone, geocoding, surveying service, API key or automatic order.

## Workflow and formats

1. Paste/import source JSON or choose either synthetic example. Supply `context`, `depthCm`, `bagLitres`, `wastePercent`, `landmarks` (`id`, `text`, `x`, `y` metres), and `records` (`id`, `text`, `order`). The last edge automatically closes to the first: do not repeat the first vertex. Edit numerical measurements and material constraints in the source before inference.
2. Explicitly **Load AI & reconcile boundary**. There are no model-host requests before this action. Watch download and four-text batch progress; cancel terminates the worker.
3. Inspect every original note, proposed landmark/coordinate and cosine evidence. Correct links or traversal positions and approve, or hold/reject ambiguity. Edits reset approval and invalidate applied exports; undo restores the last review edit. Review notes support multiline text.
4. **Apply reviewed boundary**. Every original survives. Holds, missing/repeated landmarks, repeated positions, crossed/touching edges or negligible area block estimation, not audit export. Correct the source coordinates and rerun if necessary.
5. Review the equal-axis outline and numeric comparison. Download complete JSON/CSV/Markdown or copy Markdown. **Outline CSV** is available only for a valid reviewed boundary, with every ordered vertex/coordinate/source-note ID. JSON reimport restores originals, not old approvals; renewed AI/review is required. CSV escapes formula-like textual cells, preserves genuine signed numeric coordinates, and quotes embedded commas/newlines. No external actions.

## Real model/runtime and static dependencies

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0; upstream [sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). AI produces normalized mean-pooled 384-dimensional embeddings; cosine ranking selects the nearest supplied landmark. No hard-coded responses, regex classification, generative extraction or remote-provider integration.
- Transformers.js **4.3.2**, Apache-2.0, ONNX Runtime Web CPU WASM (MIT). Four-text batches. Shared tokenizer ceiling is 512 tokens; the worker's per-call `max_length:256` is not enforced by this feature-extraction pipeline. Every individual string is bounded to 300 characters. Similarity does not establish identity or confidence.
- First download: approximately **23 MB model**, **26,861,777-byte CPU WASM**, 548,645-byte shared worker, 53,057-byte factory and ~250 KB app code/styles. Internet and several hundred MB free RAM recommended. Model files download from Hugging Face/CDN; other assets are same-origin. Model host `main` revision is not immutable; future host/model changes can affect availability/results.
- Modern WebAssembly SIMD, module workers and Cache API browser required; no WebGPU. Desktop Chrome with GPU disabled tested. Physical phones, other browsers and low-memory devices are unverified. An actionable error/retry replaces failures, never fake AI.
- Immutable collection dependencies: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating builds. [Dependency audit](runtime-dependency-audit.json) records verified bytes/hashes, four-text protocol and runtime version. Reuse avoids another large runtime copy near the collection's hosting-size limit.
- Worker protocol `{id,texts}` → progress/batch/result vectors/error. Main thread checks count, finite 384 dimensions and normalized norms before proposals. Run IDs protect asynchronous worker source loading, imports and inference; termination cancels downloads/runs; timeout 180 seconds. Fresh retries require no credentials.
- Cache API stores runtime and model files, not notes. **Tested offline scope:** complete online loading, then disable all network and create a fresh worker for real inference in the already-open page. Offline reload/navigation is **not** promised; there is no offline app-shell service worker. Cache eviction or disabled storage requires internet again.

## Privacy

User text/coordinates remain in page memory. Only static model/runtime downloads occur on the default path; no uploads, analytics, API credentials or server inference. No content is written into URLs, request bodies, logs or application storage. Export is a user-triggered local download/clipboard action. Closing/reloading clears unsaved edits. Imported instruction-like text remains embedding data; it cannot invoke tools or request keys. Included fixtures and exports are synthetic.

## Calculations and baseline

After validating the one-to-one vertex map and unique traversal permutation, reject nonadjacent intersecting/touching edges and area ≤0.000001 m². Use Cartesian straight-edge shoelace area `abs(sum(x_i*y_next - x_next*y_i))/2`, Euclidean edge perimeter, and winding. The equal-axis diagram includes a dashed axis-aligned bounding rectangle.

`net litres = area_m² × depth_cm × 10`; apply the supplied waste factor, then round up `planned litres / bag litres` to whole bags. The quotient is rounded to 14 significant digits before ceiling to avoid floating-point integer-boundary artifacts; estimates are not exact metrology. Compare the same depth/waste/bag assumptions against the axis-aligned bounding-box area. Display actual computed area/bag differences, not claimed measured savings, accuracy or a suggested purchase. Axis rotation changes the baseline rectangle, not the polygon area.

Only a simple flat polygon with straight edges and no holes is supported. No geographic coordinates, slopes, arcs, compaction, settlement, packing-density inference or ownership validation. No automatic bag coverage knowledge; verify field measurements and supplier specifications. A nearest neighbor is always proposed even for irrelevant/negated text, so every corner requires human review. Ambiguous maximum-batch notes intentionally need manual correction.

## Bounds

3–12 landmarks and exactly one boundary note per landmark. Unique ASCII IDs ≤40 characters per list; descriptions/context 1–300 characters; source ≤50,000 characters; source/audit JSON file ≤2 MB; review notes ≤1,000 characters. Coordinates −10,000…10,000 m, distinct by ≥0.000001 m, in one Cartesian frame. Traversal positions are a unique integer 1–N permutation. Depth 0.1–100 cm; bag size 1–1000 litres; waste 0–100%. Source validation and a separate larger envelope/file allowance enable maximum audit round-trip without weakening input limits.

## Build/publish

`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261119-24/`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but **publish only through root combined-site workflow** (`npm run predeploy`, `npm run deploy` from collection root). An individual deploy would replace the collection. Source code is React + Vite; no backend.

See [observed validation](VALIDATION.md), browser/core/artifact tests and publication status. Build alone is not inference evidence; tiny synthetic matches are not a general accuracy claim.
