# Shrinkform Studio

A local-AI worksheet for pottery studios reconciling short clay-body project notes with their measured shrinkage sample book. Match → review every sample and target → apply a wet-form worksheet → export. This is not a generic chatbot or a kiln controller.

## Workflow

Choose either synthetic example, paste source JSON, or import a `.json` source/audit (8 MB envelope limit). Source has `title`, `maxWetMm` (square working-board side), `profiles` (2–8) and `records` (1–12). Each profile has `id`, a short `description`, and measured `wetX/dryX/firedX` plus `wetY/dryY/firedY` in whole mm, 1–1000, with wet ≥ dry ≥ fired and combined retention ≥ 0.5. These must be the same bar axis measured at each stage. Each project has `id`, `note`, target fired `widthMm/heightMm` (1–2000) and `pieces` (1–100). Source limit 30,000 characters; neural descriptions/notes limited to 200 characters each.

Explicitly load AI. Inspect ranked sample descriptions and measured bars; change sample/target/quantity, approve or hold every project, add a multiline note and apply. Any review edit invalidates the export snapshot. Undo restores the previous review (40 steps). Source changes terminate the old worker and clear old results. Holds remain in the audit, and holds or board oversize block operational template CSV. Editing sample bars or the board limit requires changing the source and rerunning AI.

Download complete JSON, source-preserving Audit CSV, Markdown, or approved feasible Template CSV. CSV strings beginning with spreadsheet-formula characters are prefixed with an apostrophe; numeric dimensions remain numeric. JSON is lossless and reimports original source, intentionally not approval authority. Markdown is a text handoff, not trusted HTML. Copy uses the current applied Markdown snapshot. No external writes, uploads, purchases, credentials or equipment actions.

## Real AI / runtime and data flow

Default: `Xenova/all-MiniLM-L6-v2`, quantized q8, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, mean pooling, L2-normalized 384-dimensional embeddings, batches of four. Neural cosine ranking retrieves a supplied measured clay profile, materially changing subsequent calibration. It does **not** estimate material properties. Scores are similarities, not confidence or calibrated probabilities. Forced nearest-reference matching can be wrong for unrelated notes or negation. Mandatory review is essential.

To keep the combined static site small, this app reuses the existing immutable same-origin worker `../20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and binary `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those old apps/assets. See `runtime-provenance.json` for byte hashes and sizes. The protocol is `{id,texts}` → progress/batch/result vectors/error. Actual source reviewed: mean/normalized embeddings; groups of four; single CPU thread. Pipeline tokenizer applies its own model maximum; the passed max_length is not asserted to override it. Observed tokenizer model maximum was 512 tokens. App inputs are independently bounded to short 200-character strings. Model files resolve the hosted main revision at load time; hashes in the provenance audit cover the shared runtime, not a guarantee of future upstream model immutability.

First run roughly 50 MB: ~23 MB weights plus 26.86 MB WASM, JS/tokenizer/factory. Internet required initially. Runtime is same-origin; model files download from Hugging Face and its HF/Xet CDN. Loading is explicit, with file progress, batch progress, a cancel button and a 180-second timeout. Errors never substitute fake AI. Current desktop Chrome/Edge with WASM SIMD, module workers and Cache API recommended; WebGPU is not required. Tested with Chrome CPU and responsive viewport emulation, not physical phones or other engines.

User content stays in page/worker memory. There are no remote providers, API keys, analytics or saved personal data. Text cannot grant tools or request credentials. Cache API stores worker/factory/WASM and Transformers.js model downloads. After a successful online run, a new worker can infer offline in the already-open page (tested with all networking disabled). Offline reload/navigation is **not** promised. Cache eviction, private browsing or denied storage may require a fresh download. No content is stored in model cache.

## Deterministic calibration / baseline

For each axis, wet dimension = `ceil(targetFired × measuredWet / measuredFired)`, using exact integer ceiling; predicted dry = wetDimension × measuredDry / measuredWet; predicted fired = wetDimension × measuredFired / measuredWet. Drying retention × firing retention = combined retention. Predictions are displayed to 2 decimal places; artifacts retain numeric precision. Rounding can overshoot the target by less than one wet mm times combined retention.

Baseline forms at target size without allowance, then applies the same measured combined retention. Undersized-axis count and added wet area (quantity weighted) are calculated estimates, not measured quality gains or time savings. Working-board constraint applies to each unrotated rectangular piece; aggregate area is **not** nesting, clay consumption or concurrent board capacity.

All bar measurements in fixtures are synthetic. The linear model assumes batch, forming axis, thickness and firing schedule comparability. No extrapolated thickness/volume, glaze, warping, variability, food-contact safety or firing suitability. Verify your own measurements and process before forming.

## Build / publication

React + Vite. `npm install`; `npm run predeploy`. Base `/daily-app2/20261127-7/`. Per-app gh-pages dependency/scripts preserved, but publish only through root `npm run predeploy` and root `npm run deploy` to preserve collection. Local production test: `python3 serve-built.py --port 7837`; `node browser-test.cjs`. Root assembly serving: add `--assembled` after root build completes.

## Validation

See `VALIDATION.md` and machine-readable browser/artifact/defensive/public reports. Tests use real weights for success; fault injection is only for defensive branches. Known-answer fixtures are small sanity checks, not a general accuracy benchmark.
