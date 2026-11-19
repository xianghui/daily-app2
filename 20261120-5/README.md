# Field Loom — 20261120-5

A local-first spot-measurement worksheet for workshop/facility coordinators. Informal station names in field notes are a reconciliation bottleneck: a misplaced scalar reading changes every spatial estimate. Actual MiniLM neural embeddings propose station identities; humans approve or hold every note before any numeric worksheet is applied. This differs from a map fitter or rain-tank planner: it estimates an unmeasured scalar field from nearby measured stations and audits leave-one-station-out errors.

## Workflow

1. Choose a synthetic workshop-temperature or garden-moisture session, paste source JSON, or import a `.json` source/audit (under 2 MB). Audit imports restore **original inputs only**, not old approvals. No personal fixtures are included.
2. Edit `unit`, `power` (1–4), `radius` (meters), `minSimilarity` (0–1), surveyed `first` stations, rough `records` readings and `queries` coordinates. Use a single session, comparable instrument scale/unit and flat local coordinate system.
3. Explicitly click **Load AI & reconcile**. First load needs internet: approximately 23 MB quantized model plus 27 MB WASM and smaller tokenizer/runtime files. File progress and batch counts are visible. Cancel terminates the worker; retry starts fresh; timeout is 180 seconds. Network/device/malformed-vector errors produce no fake output.
4. Inspect source station definitions and cosine evidence (not confidence). Correct station links and scalar values, add multiline follow-up notes, and approve or hold **every** record. Numeric/identity edits reset approval; undo restores the last review snapshot. Originals are never changed.
5. **Apply reviewed study** pools approved readings by station, computes radius-bounded IDW estimates and nearest-station baselines, and displays source weights and complete station-level leave-out diagnostics. Edits invalidate all applied exports.
6. Download JSON (lossless source/review/evidence/diagnostics), complete reading CSV, query Point CSV with evidence JSON, or Markdown. Copy the current Markdown worksheet. Held rows and unsupported query points remain explicit. No devices or accounts are changed.

## Real AI, source and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, `q8`, feature extraction, 384-dimensional mean-pooled normalized embeddings.
- Transformers.js 4.3.2 / ONNX Runtime Web, actual WASM CPU path. No WebGPU or API key required. Model receives only bounded station descriptions and note labels, not instructions or tool authority.
- Immutable shared worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve these apps/assets when assembling the collection.** Actual hashes/protocol inspection are in `runtime-dependency-audit.json`.
- Worker runs at most 16 texts in chunks of four. Actual tokenizer ceiling is 512 tokens; the pipeline's per-call `max_length` is not relied upon. Descriptions separately limited to 300 characters. The model host's `main` revision is unpinned; observed revision is recorded, not a reproducibility guarantee.
- No remote inference integration, provider credentials, analytics or content POST. Model hosts see ordinary public file download requests; they do not receive field notes. Default content is in page memory only. Persisting/downloading your audit is explicit; exported JSON may contain sensitive originals if you supply them.
- Worker source, WASM factory/binary and public model files use Cache API. Tested: after a successful run, completely offline **fresh-worker** inference inside the already-open warmed page. Offline reload/navigation is **not promised**. Cache eviction/private-mode limitations can require downloading again. Storage contains public files, not studies.
- Current secure-context browser with WebAssembly SIMD, module workers, Cache API and several hundred MB available RAM. Desktop Chrome CPU tested. Physical mobile hardware and other browsers unverified. Responsive 320/390 px layouts are tested separately from hardware inference.

## Formats and limits

Source JSON: `{context, unit, power, radius, minSimilarity, first:[{id,text,x,y}], records:[{id,text,value}], queries:[{id,text,x,y}]}`. 2–8 stations and 2–8 readings; 1–8 queries. IDs unique per list, ASCII letters/digits/underscore/hyphen, 1–40 characters; descriptions/context/unit 1–300 characters. Coordinates within ±10,000 meters, readings within ±1,000,000; radius 0.01–10,000 meters. Station coordinates must be distinct. Source up to 50,000 characters, source/audit import up to 2 MB, review notes up to 1,000 characters. Other file formats are rejected. JSON keeps original numbers and strings; CSV quotes delimiters/newlines/quotes and prefixes formula-like textual cells, while genuine signed numeric readings stay numeric.

## Deterministic method and interpretation

Approved readings are averaged **within each station**, preventing a repeatedly sampled station receiving additional spatial weight. At a query exactly on a measured coordinate return that station mean. Otherwise require at least two measured stations inside radius and normalize `distance^(-power)` weights. Implemented as `(minimumDistance/distance)^power` for numerical stability. Each contributor carries distance, mean, normalized weight and original reading IDs. Baseline is the nearest station inside radius; distance ties use original station order. Unsupported IDW queries remain null, even when the one-neighbor baseline exists.

Cross-validation leaves out an **entire station**, including all repeated readings, before estimating its observed mean. IDW and nearest MAE are compared only on identical folds supported by IDW; show unavailable/null if there are none. No automatic tuning or improvement percentage. On the two deliberately simple synthetic sessions, observed matched-fold MAE was 4 vs 5 °C and 16 vs 20 sensor units. These are tiny retrospective illustrative fixtures, not validated accuracy or measured time savings.

IDW is not a physical model. It can extrapolate outside the station footprint, cannot model walls/elevation/time/soil barriers, and has no uncertainty interval or sensor calibration. Similarity is not proof of identity; negation, unknown locations and domain jargon require human holds/corrections. Estimate bounds follow contributor values but do not establish truth. Holds reduce coverage. Take follow-up measurements before use; not safety, climate, regulatory or certification advice.

## Development and publication

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. App base `/daily-app2/20261120-5/`; required per-app `deploy: gh-pages -d dist` exists for contract compatibility but **do not invoke it**. Root `npm run predeploy` and `npm run deploy` publish the entire collection. See `VALIDATION.md` for observed checks, known limits and publication status. No digest is sent by this builder.
