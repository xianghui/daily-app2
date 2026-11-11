# Carton Compass

A local-AI packing worksheet for small-shop dispatchers. Reconcile informal packing-slip names to a supplied SKU catalog, verify quantity and physical facts, compare homogeneous grid fits and supplied postage schedules, then export a reviewed plan. This is not a generic chat wrapper or live carrier integration.

## Workflow

1. Load either synthetic example or paste/import JSON. Supply 2–6 products, 1–8 cartons and 1–12 order rows. Each order row is one parcel containing identical units of a single SKU. IDs are unique within each collection.
2. Click **Load AI & match products**. First loading requires internet and approximately 50 MB: ~23 MB model/tokenizer plus 26,861,777 bytes of WASM and the local runtime factory. Download progress and cancellation are shown. No user text is uploaded.
3. Inspect source notes, candidate descriptions and cosine similarities. Select the verified product and correct quantity, padded dimensions, unit grams and rotation. Selecting another product resets its physical defaults. Approve each row or hold it. Undo restores the previous review state. Approval is mandatory, not automatic.
4. Verify the dimensional divisor and supplied carton charges. Apply the reviewed plan. Any review/constraint edit disables old exports until reapplied.
5. Download JSON, all-row CSV or Markdown, or copy the current worksheet. JSON preserves originals, reviews, alternative carton checks and selected plans. CSV includes held/no-fit orders, uses quoted CRLF records and prefixes formula-like text with an apostrophe; JSON is the lossless format. Exported JSON can be reimported: only originals are restored and AI/review must run again.

## What AI actually does

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX through locally bundled **@huggingface/transformers 4.3.2** and ONNX Runtime Web. Mean-pooled, normalized 384-dimensional learned embeddings compare each order description with the supplied product descriptions. Cosine ranking proposes catalog identity beyond literal name matching. It does not generate measurements, perform packing, establish identity, predict damage or interpret packaging regulations. Similarity is not confidence. English-focused, with known negation/unrelated-text errors; holds and human review are essential.

Inference runs on **WASM CPU**, not WebGPU. Four texts per batch, truncation at 256 tokens; each text ≤400 characters. Embedding schema, finite values, dimension and normalization are checked before suggestions. No hard-coded responses or fake fallback. A 180-second timeout, network/runtime errors and malformed vectors produce actionable failures. Run identity guards, terminated workers and guarded asynchronous import/downloads prevent cancelled or stale results replacing newer inputs.

The model host is not revision-pinned; upstream model changes can alter suggestions. Actual validation results are dated snapshots, not a general accuracy claim.

## Deterministic packing/cost model

- Dimensions are whole centimetres, 1–200 on each axis, **including per-unit protective padding**. Unit weight is 1–50000 whole grams; order quantity 1–100. Do not round down real measurements. Measure/round up outside this worksheet.
- Product dimension order is length/width/height. `rotate:false` locks all axes; `true` allows all six orthogonal permutations. Upright yaw-only constraints are not supported.
- Each orientation forms a uniform grid: `floor(inner length/unit length) × floor(inner width/unit width) × floor(inner height/unit height)`. Capacity must cover the entire order, and actual total grams must not exceed the carton limit. Fill grid along x, then y, then z, stopping at the requested quantity. No duplicated or omitted planned units.
- This is a **conservative homogeneous packing model**, not a complete 3D bin-packing solver. No mixed orientations/SKUs, nesting, irregular shapes, compressibility, load-bearing, fragile stacking, stock limits, outer clearance beyond supplied padding, or carton strength checks. “No fit” is not proof of physical impossibility. Holds/no-fit rows are preserved but are not shipping plans.
- External carton dimensions must be at least internal dimensions on each axis. Actual-weight limit is 1–100000 grams. Quoted integer carton/base/per-kg cents are 0–1000000, all in one currency. Dimensional divisor is 1000–10000 cm³/kg.
- `billable kg = ceil(max(quantity × unit grams / 1000, external carton cm³ / divisor))`.
- `total cents = carton cents + base cents + billable kg × perKgCents`.
- Enumerate all eligible cartons, choose minimum total cost, tie-break by smaller external volume then supplied order. Compare with smallest internal-volume eligible carton (input order breaks ties). Both totals cover the same planned subset only. No taxes, surcharges, negotiated rate changes or live rate verification. Charges are user-supplied estimates, not purchased postage.
- AI/review agreement versus always choosing the first product is descriptive review agreement, not independent accuracy. No invented time/accuracy/improvement percentages.

## Formats, privacy and device requirements

Examples in `src/core.js` define the JSON schema. Required top-level fields: `name`, `divisor`, `products`, `cartons`, `records`. Products: `id,title,description,dims,grams,rotate`; cartons: `id,inside,outside,maxGrams,boxCents,baseCents,perKgCents`; rows: `id,text,quantity`. Originals ≤18000 characters; exported review envelopes/import files ≤1 MB. JSON is the only import format. No personal fixtures or secrets are included.

The default/only inference path sends no content to any provider. Requests are GET downloads for local code/runtime and huggingface.co / hf.co / model CDN files. No API credentials, analytics, external actions, label purchase or stock mutation. Browser Cache API stores runtime and model files, **not user documents**; input/review state lives in page memory unless explicitly exported. Clear site data to evict cached weights. Imported instructions stay inert text, rendered through React escaping.

Tested desktop Chrome with WASM SIMD, module workers, Cache API and several hundred MB free memory. GPU/WebGPU not required. Other browsers and physical phones unverified. Narrow phone viewports tested in desktop Chrome. After successful online processing, a fresh worker works offline in the **already-open page** (tested with all network disabled). Offline reload/navigation/app-shell startup is not promised. Cache eviction/private browsing can require renewed downloads. Cache failures fall back to online fetch, not fake inference.

Local worker/runtime factory are bundled. The build references the byte-identical immutable 26,861,777-byte WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root deployment must preserve that earlier app. Factory is copied from the matching ONNX package. See public asset verification for hashes.

## Build, validation and publishing

React + Vite; `npm install`, `npm run predeploy`. Base `/daily-app2/20261111-17/`. Per-app required scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not run per-app deploy**, which would replace the collection. Publish from the repository root using its combined predeploy/deploy workflow.

`node core-test.mjs` checks independent geometry and BigInt billing arithmetic. `python3 serve.py` serves production assets at port 6446 with the shared runtime. `node browser-test.cjs`, `node defensive-test.cjs`, `node stale-import-test.cjs`, `python3 artifact-test.py` validate real inference, exports, privacy and failures. Defensive mocks are used only for error tests; successful inference uses the real model. `TEST_URL`/`REPORT` can target the public release. See `VALIDATION.md` and generated reports for actual outcomes and deployment status.
