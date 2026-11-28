# Beltpath Bench

A local AI-assisted worksheet for educators and prototype technicians reconciling rough open flat-belt drive handoffs. Paste/import a small JSON batch, retrieve the intended supplied setup by meaning, review its copied speed and stock, then export fit-checked pulley/belt/center worksheets. Does not control machines, order parts or certify drives.

## Workflow

1. Choose Workshop mockup or Exhibit mockup, or import `.json` source. Edit the source JSON's title, belts, setups and job records. All fixtures are synthetic.
2. Read the download/privacy information, then explicitly **Load AI & match drive notes**. Downloads/cancellation and four-text batch progress are visible. No automatic model-host traffic on startup.
3. Inspect each note, ranked setup description and cosine similarity (not confidence). Select another setup if needed; that copies its input RPM and pulley stock. Edit input/target speed, center travel, minimum wrap and maximum percentage speed error. Approve checked jobs or hold/reject links; add multiline notes. Content changes reset approval. Undo retains 30 review versions.
4. Apply the reviewed plan. Exact deterministic geometry searches stock combinations. No fit means no released plan. The worksheet export is blocked unless all approved jobs fit; audits remain available. Holds are excluded from planning but preserved in full exports.
5. Download JSON, Audit CSV, Markdown or the approved-only Worksheet CSV; copy Markdown. Every edit invalidates the snapshot and disables exports until re-applied. Reimport an audit to recover its original inputs (review decisions are intentionally not automatically trusted; rerun AI/review).

## Real AI / assets / licensing

AI executes `feature-extraction` using [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web WASM CPU (MIT), single thread. Mean-pooled normalized 384-component embeddings compare setup descriptions and job notes; cosine ranking suggests a setup. This retrieves a useful candidate rather than requiring exact IDs or keywords. The model does **not** extract measurements, generate hardware specifications, perform the optimizer or understand tool instructions. Source measurements come from the user; copied values are explicitly reviewed.

To avoid adding ~27 MB to an already-large static collection, reuse the immutable worker from Circuit Cove: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; its cached factory is `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/paths. `runtime-provenance.json` records exact bytes and SHA-256; `asset-audit.mjs` verifies them and this app's production assets locally/publicly. Worker protocol: `{id,texts}` in; `progress`, `batch`, `error` or `result` with matching id out. Worker source is available in the originating app's `src/ai.worker.js`.

Initial download approximately **50 MB** (~23 MB model, 26.9 MB WASM, tokenizer + worker/factory). Internet initially required. Model/config/tokenizer files use huggingface.co and its CDN; runtime assets are same-origin. Current remote `main` resolved to `751bff37182d3f1213fa05d7196b954e230abad9` during validation; upstream `main` is not pinned by the shared runtime, so future host/model revisions can affect results. No mandatory API, provider keys, paid services or remote-inference option.

## Privacy / devices / offline

All supplied content and embeddings remain in browser memory. Only GET file downloads were observed; there are no uploads, analytics or network operations involving supplied URLs. Import text is data, never executable instructions. JSON/CSV/Markdown exports are the user's explicit local download. Nothing saves content automatically. Browser download history/files and clipboard are outside this app's memory.

Requires modern module workers, WebAssembly SIMD, Cache API for persistent offline caches and adequate memory. Desktop Chrome CPU was tested with GPU disabled. No WebGPU requirement. Other browsers, physical phones, low-memory devices and physical drive behavior were not tested. Missing worker/WASM, construction errors, network failures, timeout and malformed results fail visibly without fake outputs. Cancel terminates the worker and invalidates run identity; input changes and delayed file reads cannot replace a newer run. Timeout 180 seconds.

Runtime/factory/WASM are explicitly cached with Cache API; Transformers.js caches model assets. After a complete successful run, a **fresh worker in the same warmed, already-open page** performed real inference with all network disabled. Offline page navigation/reload is **not promised**; app-shell caching is not implemented. Cache eviction, private mode and upstream changes may require internet again. Clear site data to delete model/runtime caches.

## Schema / limits

- Source JSON object, ≤30,000 characters, title ≤100; file/source-or-audit envelope ≤1 MB. `.json` only. Bad JSON, controls/broken Unicode, unknown numeric types, nonfinite values, duplicate IDs/options and empty/oversized batches are rejected.
- 2–8 `setups`: unique simple id (≤24 ASCII letters/digits/_/-), description ≤200 characters, `driveRPM` 10–10,000; `drivers`/`driven` each 1–12 distinct pitch diameters 10–500 mm.
- `belts`: 1–12 distinct pitch lengths 100–10,000 mm.
- 1–24 `records`: unique id, note ≤200 characters, `targetRPM` 10–10,000, `centerMin` 20–2,000 mm and `centerMax` ≥ minimum and ≤2,000; `minWrap` 60–180 degrees; `maxError` 0–50 percent.
- At most 32 AI texts, chunks of four. The shared feature-extraction tokenizer truncates at its actual model limit **512 tokens**; the worker's supplied max_length argument is not relied on as a separate cap. Texts are independently character-bounded. Vectors must be finite normalized arrays, exactly 384 components and correct count.
- At most 12³ × 24 = 41,472 deterministic candidates. Reviewer note ≤1,000 characters; apply revalidates every reviewed row, including holds.
- JSON `beltpath-bench-v1` preserves original source, all reviews/rankings, plans and baseline witnesses. Audit CSV includes one row per source job, including holds/unplanned. Worksheet CSV contains approved feasible jobs, precise numerical geometry and speed error. Markdown includes originals, all decisions and current notes. Standard quoted CSV escapes quotes/commas/newlines; dangerous spreadsheet-leading **text** receives a leading apostrophe; numerical cells remain numeric. JSON is lossless.

## Deterministic geometry and comparison

All dimensions are pitch dimensions in mm. Open flat-belt, ideal no-slip, non-crossed geometry. For driver d, driven D and center C, set a=|D−d|/2. Require C>(d+D)/2 (pulley nonoverlap). Exact length:

`L(C) = 2 sqrt(C²−a²) + π(d+D)/2 + 2a asin(a/C)`.

This is increasing in C. For each offered (d,D,L), reject if no root within allowed center travel; otherwise bisect 70 iterations. Small-pulley wrap is `180 − 360/π asin(a/C)` degrees. Ideal output RPM is input RPM × d/D. Check minimum wrap and maximum absolute percentage target-speed error. Select minimum error, then center nearest the travel midpoint, shorter belt, smaller driver, smaller driven. This minimizes the stated objective **within supplied finite stock**, not all possible designs. One independent plan per job: no shared stock quantities/availability optimization.

Baseline chooses nearest speed ratio (tie: smaller driver, then driven), then belt nearest ideal length at travel midpoint (tie: shorter); it ignores feasibility when choosing. A collision at midpoint gives baseline nominal 0, explicitly leading to shortest belt; feasibility is still independently checked. Displayed failures count exact constraint violations, not model accuracy, measured productivity or time savings.

Neither pitch geometry nor AI accounts for belt thickness/elasticity/slip, tension/take-up procedure, torque, power, guarding, shaft/bearing load, manufacturer ratings or physical installation clearance. Not a timing/toothed, V-belt or crossed-belt design tool. Numbers are worksheet estimates, not manufacturer recommendations. Never infer safe drive operation from these checks.

## Development / publishing

React + Vite, base `/daily-app2/20261128-24/`. `npm install`; `npm run predeploy` builds `dist`. Per-app required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Do not publish per app**: root collection `npm run predeploy`, then root `npm run deploy` assembles/publishes all apps from root `deploy/`. Keep existing categories/old apps intact.

Validation scripts use the existing workspace Playwright Chrome installation; Python 3 independently parses artifacts and recomputes geometry/optimality. `node core-test.mjs`; `node browser-test.cjs`; `python3 artifact-test.py`; `node defensive-test.cjs`; `node input-guard-test.cjs`; `node recovery-test.cjs`; `node import-race-test.cjs`; `node model-cancel-test.cjs`; `node asset-audit.mjs`. Supply `APP_URL`, `PREFIX`, `SITE_ORIGIN`, `GALLERY_URL` for assembled/public runs. See VALIDATION.md and saved JSON reports for observed scope/limitations, not universal accuracy claims.
