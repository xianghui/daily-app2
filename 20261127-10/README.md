# Longlight Desk

A local AI-assisted field worksheet for photographers reconciling mixed film-stock notes, ND filters and long-exposure assumptions. No camera controls, uploads, accounts, keys or paid service.

## Workflow

Choose either synthetic example, paste source JSON or import a `.json` source/full audit. Supply a `title`, duration ceiling `maxSeconds`, film `profiles` and shot `records`. Explicitly click **Load AI & match films**. Real neural embeddings rank film descriptions and initialize the selected profile's reciprocity parameters. Inspect descriptions and cosine similarity (not confidence); correct film assignments, measured time, stops, exponent, threshold and multiline notes. Changing the film resets its coefficients and approval. Approve or hold every shot. Undo retains 40 snapshots. Original inputs remain intact; editing source cancels pending work and invalidates previous results. Review edits invalidate applied exports.

Apply the reviewed scenario. Approved shots receive field cards; held shots receive no exposure recommendation but remain in JSON, audit CSV and Markdown. Over-limit times are shown explicitly, never clamped. Export current **JSON**, **Audit CSV**, **Field CSV**, **Markdown**, or copy Markdown. JSON retains every original/reviewed record and ranked evidence. Importing an audit restores only the original source, never its approvals. CSV strings beginning with spreadsheet formula characters receive an apostrophe, including multiline strings. JSON retains exact originals. Field CSV is an approved-only worksheet; audit CSV retains all shots. Markdown is plain handoff text, not trusted HTML.

## Input and calculation contract

- 2–8 profiles: unique `id`, `description`, `exponent` (1–2), `thresholdSeconds` (1–60).
- 1–12 shots: unique `id`, `note`, `meterSeconds` (1/8000–3600), `ndStops` (0–16). Fractional numbers/stops supported.
- `maxSeconds`: 1–86,400. Title ≤100, IDs ≤40, neural text ≤200 and reviewer notes ≤500 UTF-16 units. Source ≤30,000 units; separate audit import limit 8 MB. Valid Unicode and newlines allowed; control characters/nonfinite numbers rejected.
- Meter at intended aperture/ISO **without** the filter. ND is measured in stops, not optical-density numbers.
- Linear baseline seconds = metered time × 2^stops.
- At/below supplied threshold, corrected time equals linear time. Above it: threshold × (linear / threshold)^exponent. The dimensionless ratio keeps this continuous at the threshold.
- Round corrected time **up** to whole seconds, then check against the supplied maximum. Unsafe integer durations fail visibly and require lower parameters; no silent overflow/clamping.
- No color-shift compensation, illumination changes, filter leakage, aperture/ISO changes, timers or camera actions. This continuous power-law is an approximation supplied by the user, not a universal film law.

**All example coefficients are synthetic, not manufacturer recommendations.** Verify authoritative film data and filter calibration before use. Fractional-second exposures round to at least one second in field cards; the exact model estimate remains exported. Shots are independent, not an execution timetable.

AI materially selects different film references/default coefficients from informal notes. Arithmetic, limit checks, comparisons, schemas and exports are deterministic. The displayed comparison counts approved shots whose supplied reciprocity correction differs from filter-only timing; it is not an accuracy, image-quality or time-saving claim.

## Real model, runtime and privacy

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. Normalized mean-pooled 384-dimensional embeddings, four short texts per batch. Worker `{id,texts}` protocol returns progress/batch/result vectors/errors. Vector count, dimensions, finiteness and normalization are validated. Tokenizer `model_max_length` is 512; the pipeline's nominal max_length option does not override it. Independent 200-character text bounds apply. Short English notes recommended.

First explicit load requires about 50 MB: ~23 MB model weights, 26.86 MB WASM and smaller tokenizer/JS files. Weights download from Hugging Face/HF-Xet CDN using model `main` (not pinned). No model-host request precedes explicit loading. Content stays in browser/worker memory: only model/runtime GET downloads, no content uploads. No remote inference integration, keys, analytics or content persistence. Imported notes are data and grant no instructions/tool authority.

Immutable same-origin shared assets (preserve these older apps):

- `../20261115-6/assets/ai.worker-lkOoPoq8.js`
- `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

See `runtime-provenance.json` for exact sizes/hashes. App code is bundled locally. Worker, factory, WASM and model assets use Cache API. **Offline scope tested: fresh-worker inference in an already-open page after successful online inference.** Offline navigation/reload/app-shell startup is not promised. Cache eviction, private browsing or blocked storage can require downloads again. Recommended: current desktop Chrome/Edge with module workers, WebAssembly SIMD and Cache API. CPU path does not require WebGPU. Low-memory devices may fail. Physical phones and other browser engines are unverified.

Similarity is not emulsion identification. Unrelated text still forces a nearest film; negation and nuanced stock names may fail. Human review remains mandatory. Tiny easy fixtures are not a representative accuracy estimate. There is no deterministic demo substitute on inference failure. Errors, 180-second timeout, cancellation and retry are explicit; run IDs and worker termination prevent stale results overwriting current work.

## Development and verification

`npm install`, `npm run dev`; `npm run predeploy` builds with the real deployment base. Per-app gh-pages dependency/scripts are retained but **do not deploy this app alone**. Root `npm run predeploy` / `npm run deploy` publish the whole collection.

`node core-test.mjs`; `node browser-test.cjs`; `python3 artifact-test.py local-`; `node defensive-test.cjs`; `node recovery-test.cjs`; `python3 bundle-audit.py`. Browser tests use installed Playwright and Chrome. `APP_URL`/`PREFIX` select assembled/public suites. Serve with `python3 serve-built.py --port 7779` or `--assembled --port 7781` after root assembly. See [observed validation](VALIDATION.md), not build output alone, for tested behavior and limitations.
