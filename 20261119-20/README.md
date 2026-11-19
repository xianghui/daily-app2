# Level Loop

A local-AI closed-leveling notebook utility for training and low-stakes field-record review. Informal landmark names can obscure whether measured legs actually connect. Real MiniLM embeddings retrieve a station identity for both ends of each leg; mandatory human review verifies links and numeric measurements. A deterministic closure audit then either withholds adjustment or distributes a small permissible closing error by distance.

## Workflow and formats

1. Choose **Garden circuit** or **Library circuit**, paste JSON or import `.json` (source or complete audit).
2. Set `context`, `stations:[{id,description}]`, registered `benchmark`, `elevationMm`, absolute `toleranceMm` and ordered `logs:[{id,fromText,toText,riseMm,lengthM}]`.
3. Signed rise is TO minus FROM, in **whole millimeters**; length is **whole meters**. The AI does not infer readings from prose. Explicitly load AI, inspect both candidate station descriptions and cosine evidence (not confidence), edit endpoints/rises/lengths/notes and individually approve or hold every leg.
4. Apply the reviewed snapshot. Pending reviews fail; holds, unknown/unvisited stations, self-loops or disconnected/unclosed chains block adjustment. Above-tolerance closure retains the audit but withholds all adjusted elevations. Undo reverses edits. Any input change cancels older inference; any review edit disables exports until reapplied.
5. Download current complete **JSON**, spreadsheet-protected **CSV** or **Markdown**, or copy the worksheet. All original legs and reviews survive, including blocked/held records. Reimport audit JSON restores originals only; inference and approvals must be renewed. JSON is lossless; CSV protects formula-leading strings with an apostrophe and preserves signed numeric readings. No site/equipment changes.

## Real AI and dependencies

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Cosine retrieval ranks the full supplied station register independently for each endpoint.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU. No WebGPU requirement, API key or remote-provider integration.
- **≈23 MB model + 27 MB CPU runtime**, plus app/worker code; internet on first load. Hugging Face and its redirected CDN serve model files. Model uses upstream main revision, not a pinned revision; upstream changes/cache eviction can alter download requirements or suggestions.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps/paths. Worker protocol `{id,texts}` → progress/batch/result-vectors/error; exact assets/hashes are recorded in runtime/public audits.
- Four-text inference chunks. Source worker supplies max_length=256, but FeatureExtractionPipeline does not forward it. Actual tokenizer ceiling is **512**, confirmed against tokenizer config; no 256-token guarantee. Each endpoint and description is bounded to 300 characters.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Desktop Chrome on macOS CPU tested. Physical phones, other browsers and low-memory performance unverified; phone-width emulation is layout validation only.

## Privacy, cache and failures

Nothing from the model host loads before the explicit AI button. Content stays in browser memory and local worker messages. Weight downloads are not content uploads. No analytics, accounts, cookies-based integrations, provider credentials or external actions. Imported text is embedded as inert data, never executed as instructions. All fixtures are synthetic.

Worker source, WASM factory and binary are explicitly Cache-API cached; model files use runtime browser caching. **Fresh-worker inference offline in an already-open warmed page** is tested with all network disabled. Offline navigation/reload/app-shell startup is not promised. Cache eviction requires another online load. Notes are not persisted automatically; export before closing.

Loading/file progress, chunk counts, cancel/retry, 180-second timeout and actionable runtime/network errors are visible. Worker termination and monotonically changing run IDs guard late model results, worker fetches and asynchronous file reads. Bad vector count/dimension, nonfinite or unnormalized output fails closed. No deterministic sample/fake model fallback.

## Bounds and deterministic method

2–8 station IDs, 2–24 ordered legs (up to 56 texts). IDs use 1–40 ASCII letters/digits/underscore/hyphen. Context/descriptions/endpoint notes are 1–300 characters; review notes ≤1,000. Source ≤50,000 characters; import envelope ≤2 MB. `elevationMm` is an integer within ±1,000,000,000; `riseMm` within ±1,000,000; `lengthM` 1–100,000; tolerance 0–1,000 mm. Every station must be visited, first leg starts at the benchmark and final leg returns to it. Repeated visits are allowed; no reordering or hidden omission.

Let e = sum of reviewed signed rises, L = sum of leg lengths. If |e| exceeds supplied tolerance, adjustment is withheld. Otherwise each correction is −e × leg length / L. The last leg receives the remaining unrounded correction so the sum is −e within floating-point tolerance. Add corrected rises to the supplied benchmark elevation. This is weighted closure under an **independent error variance proportional to distance** assumption, not equal per-leg precision and not a network least-squares solver. Repeat visits may have different intermediate elevations. Display rounds elevation to 0.1 mm and corrections to six decimal mm; JSON/CSV retain floating values, not an assertion of measurement precision.

The baseline is the unadjusted closing elevation minus benchmark. The result is enforced adjusted closure and transparent leg corrections; a mathematical zero is **not improved measurement accuracy**, time saved or external validation. No invented confidence/quality gains.

## Limitations and validation

AI similarity is not station identity, especially for irrelevant/negated notes. Humans must verify every match, sign, unit, distance, benchmark and tolerance. This tool cannot locate blunders, remove systematic errors, establish a datum or certify a survey. Excessive closure must be remeasured, not normalized away. Educational low-stakes worksheet only, not construction setting-out or a safety-critical decision tool.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual checks and known limitations. React + Vite base `/daily-app2/20261119-20/`. `npm run predeploy` builds the app. Required per-app gh-pages scripts exist, but publish only through root `npm run predeploy` and root `npm run deploy` to preserve the collection.
