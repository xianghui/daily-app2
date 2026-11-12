# Rain Reserve — local-AI catchment review & tank sizing

A practical worksheet for community-facility coordinators consolidating rough roof/ground notes into a transparent rainwater-storage scenario. This is a planning aid, not engineering, weather prediction or water-quality certification.

## Workflow

1. Choose a synthetic example, paste JSON, or import a `.json` file. Supply surface profiles with explicit runoff coefficients, catchment descriptions/areas, twelve monthly rain/demand values and your tank grid/annual supply goal.
2. Explicitly click **Load AI & match surfaces**. Real MiniLM inference embeds your descriptions locally and ranks surface profiles by cosine similarity. This helps normalize reworded material descriptions; it is not regex or a static response. AI does not supply weather, geometry, coefficients or safety facts.
3. Inspect source snippets and all ranked profile evidence. Correct each surface/area, add notes and approve or hold. Every catchment requires review. Hold preserves the entire audit but blocks sizing. Undo reverses edits. Changing input cancels work and clears results.
4. Apply the review. Integer-milliliter water balance tests discrete tank sizes from zero through your cap, choosing the smallest tested capacity meeting the annual supply target. If no size meets it, display the cap as **target not met**, not a recommendation. Compare against direct monthly use with zero storage.
5. Download complete JSON, reviewed audit CSV, twelve-row monthly CSV and Markdown; copy Markdown. Exports use the current applied review; any subsequent edit disables them until reapplied. Reimporting an audit restores **original inputs only**, not edited review fields or approvals, which must be renewed. JSON preserves originals plus reviewed edits separately.

## Real AI, licensing & downloads

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, converted from [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Model downloads use its current hosted revision, not a pinned commit; upstream changes/cache eviction can affect repeatability.
- Browser runtime: `@huggingface/transformers` **4.3.2** (Apache-2.0); ONNX Runtime Web (MIT), quantized q8 CPU/WASM, normalized mean pooling, 384 dimensions, 256-token context, four texts per batch.
- First load needs internet: approximately **23 MB** weights/tokenizer/config plus **27 MB** WASM/runtime, about **50 MB total** before browser compression/cache differences. Initial app JavaScript is under 1 MB; no model request precedes the user's load action.
- JS worker and WASM factory are bundled/same-origin. Immutable byte-identical WASM is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` to avoid duplicating 26,861,777 bytes in the collection. Preserve this earlier app in the combined deployment. Factory is bundled in `public/runtime/`. Dependency license notices remain in supplied runtime files and upstream packages.
- Weights/config/tokenizer download from Hugging Face and its CDN (`huggingface.co`, `*.hf.co`). No backend, key, provider integration, paid service, remote inference, telemetry or agent credentials.

## Devices, privacy & cache

Requires a modern browser with module workers, WebAssembly SIMD, Blob modules, Cache API for offline caching, and several hundred MB available RAM. WebGPU is **not required**; WASM CPU is the tested default. Chrome on macOS is tested. Physical phones, Safari/Firefox and low-memory devices are not verified. Mobile viewport tests do not establish mobile inference support.

User descriptions are passed only to the same-device worker and stay in memory. Network observations cover startup through real inference and exports: only GET downloads without request bodies; no source strings in URLs. Imported instructions cannot request credentials or change authority because this is embedding inference, not a tool-using language agent.

Cache API retains public worker, factory and WASM; Transformers.js caches model assets. After an online run, **fresh-worker inference in the already-open warmed page was tested with all network disabled**. Offline reload/navigation/app-shell startup is not claimed. Cache eviction/private modes can require redownload. User documents are not saved automatically. Downloaded exports are user-controlled local files. Cancellation terminates the worker; file reads, worker fetches and responses carry run identities to ignore stale completions. Loading progress, batch progress, cancellation, errors and retry are explicit. Runs time out after 180 seconds; no fake fallback is provided.

## Schema & hard limits

JSON object:

- `name`: 1–80 characters.
- `catalog`: 2–8 `{id,title,description,coefficient}` profiles. Unique safe IDs ≤40 characters, titles ≤80, descriptions ≤400. Integer coefficient 0–1000 per mille, supplied and verified by user.
- `records`: 1–24 `{id,text,area}` catchments. Unique safe IDs ≤40, text ≤400 characters; integer area 1–10000 m².
- `rainfall`: exactly twelve integer monthly values, 0–3000 mm each.
- `demand`: exactly twelve integer monthly values, 0–1000000 L each; total demand must be positive.
- `maxTank`: integer 0–100000 L; `tankStep`: integer 1–100000 L, must divide cap, at most 1000 steps.
- `targetPercent`: integer 1–100, fraction of **annual** demand supplied, not every-month reliability.

Original JSON ≤18 KB; imported audit envelope/file ≤1 MB. Unsupported formats, duplicate IDs, blank/oversized texts, malformed AI vectors and invalid numeric ranges are rejected. Model schema checks require one finite normalized 384-vector per text. No rows are silently dropped. Pending review blocks apply; holds block the whole storage worksheet, while audit exports preserve all records.

JSON is the only import format. CSV outputs quote/escape text, CRLF rows, and prefix spreadsheet-formula-like leading text with an apostrophe (including multiline verification notes). Monthly CSV is numeric. Markdown escapes free-form strings using JSON quoting. CSV/Markdown are output artifacts, not import formats.

## Deterministic process & limitations

Inflow mL = sum of `area_m2 × rainfall_mm × coefficient_per_mille`. Demand and capacity convert liters to milliliters. Bounds keep integer arithmetic below JavaScript's safe-integer limit. For each month, start storage plus inflow supplies demand first; remaining water fills the tank and then spills. Starting stock is zero; there is no cyclic-year warmup. Conservation holds each month:

`start + inflow = supplied + spill + end`, `demand = supplied + unmet`, `0 ≤ end ≤ capacity`.

Test capacities `0, tankStep, …, maxTank`. The first with `100 × supplied ≥ targetPercent × annualDemand` is chosen. This is exact **for the supplied monthly model and discrete capacity grid**, not continuous engineering optimization. Zero capacity can meet a low target; never force a purchase. Baseline uses exactly the same inputs without carryover storage. Displayed differences are computed scenario estimates, not observed savings or AI accuracy.

Monthly yield-before-spillage may overestimate usable water because rainfall/demand chronology within each month is ignored. No first-flush losses, evaporation, leaks, treatment, rain forecasts, plumbing capacity, pump losses, regulations or water-quality modeling. Synthetic runoff factors are illustrative, not authoritative specifications. Ground runoff is not assumed potable. Qualified local assessment and daily measurements are needed before installation.

Embeddings always propose a nearest profile, including for unrelated text; cosine is not confidence. Negation and close material descriptions can mislink. Mandatory human verification is essential. No automated physical actions, orders or external account changes.

## Build & validation

```sh
npm install
npm run predeploy
node core-test.mjs
python3 water-oracle.py
python3 serve.py
# In a second terminal; installed workspace Playwright + Chrome required:
node browser-test.cjs
node defensive-test.cjs
node stale-result-test.cjs
node stale-import-test.cjs
node model-cancel-test.cjs
node challenge-test.cjs
python3 artifact-test.py
```

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual observed results, limitations and public verification. Per-app scripts retain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only from repository ROOT** so the combined gallery is preserved.
