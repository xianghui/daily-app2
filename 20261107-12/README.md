# Outcome Map — assessment blueprint

A local-AI utility for instructors checking a draft assessment against intended learning outcomes. Paste/import two small CSVs, run real semantic inference, inspect question→outcome suggestions, adjust marks and revision notes, acknowledge gaps, apply the reviewed blueprint and export JSON/CSV or copy JSON. No student submissions, grading, generated answers or external actions.

## Workflow and formats

Both CSV inputs use `id,text,points`. Learning-outcome points are minimum target marks; question points are available marks. Each question gets at most one primary outcome; many questions may share an outcome. Maximum 12 records per input, 16 KB UTF-8 per CSV, 300 characters per text, unique IDs within an input, integer marks 1–100. Import supports quoted commas/newlines. Empty/malformed/duplicate/oversized inputs are rejected. Two synthetic examples are included; no real student information.

1. Set outcome targets and enter questions; select a cosine floor (default 0.42, not confidence).
2. Explicitly load AI. First use needs internet and approximately 23 MB model data plus 27 MB WASM runtime, tokenizer/config and bundled code. Download progress, batch progress and cancellation are shown. CPU inference does not require WebGPU.
3. Inspect exact original source text, proposed outcome, cosine similarity and editable reviewed marks/notes. Reject by choosing no outcome or override the outcome. Review every question and acknowledge target deficits/unassigned questions. Undo retains up to 40 review edits. Inputs stay intact; changing inputs cancels work and invalidates results. Any review edit invalidates the applied export.
4. Apply the reviewed blueprint. JSON includes every original input, every reviewed question, proposed/overridden mapping, original/reviewed marks, full per-outcome coverage and deficits/excess. CSV includes every question and reviewed outcome/source. All outcomes, including uncovered targets, survive in JSON. Download or copy the current snapshot; CSV protects formula-like text with a leading apostrophe. Numeric marks remain numeric.

## Real AI and deterministic checks

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, derived from sentence-transformers/all-MiniLM-L6-v2. Quantized q8 ONNX model, mean pooling, normalized 384-dimensional sentence vectors, max 256 tokens; batches of four.
- Runtime: locally bundled `@huggingface/transformers` 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. Model/config/tokenizer files download from Hugging Face and its CDN only when requested. Dependencies are locked in package-lock.json; model uses upstream main (not an immutable model pin), so future upstream changes can alter predictions. Model weights are not committed.
- AI materially links differently worded questions and outcomes, unlike an exact-text baseline. It neither generates questions nor judges student performance.
- Deterministic: highest cosine candidate above the floor, strict finite normalized-vector schema, bounded batch sizes, mark totals, minimum-target deficits/excess, reconciliation and exports. No confidence percentages, fabricated answers or fallback heuristic AI. Metrics compare exact-text candidate count with AI candidate count, **not** measured accuracy or time savings.
- Similarity is topical. It does not validate assessment quality, difficulty, cognitive demand, negation, factual correctness, curriculum alignment or whether a question merely mentions the skill. Primary-outcome assignment omits secondary coverage intentionally. All links need pedagogical review; under-assessment can be an acceptable design choice once acknowledged.

## Privacy, caching and devices

Default user content stays in the browser/worker. No backend, API key, optional remote provider, analytics, or content upload. Imports are data, not instructions; the embedding model has no tools or credential authority. Runtime and public model GET requests are distinct from content upload. Nothing is persisted as user records by the app; exports are user-triggered downloads/clipboard actions.

Use a modern browser with WebAssembly, Workers, sufficient memory and browser Cache API; a desktop is recommended. WASM CPU is the default and was tested, not a speculative fallback. Phones may be slow or exhaust memory. Real browser validation used headless desktop Chrome, including 390px and 320px emulated viewports; physical phones, Safari and Firefox are not tested.

The worker source, WASM factory/binary and model files cache in browser storage. After successful online inference, **another run in the open page with a fresh worker was tested fully offline**. Offline startup/reload is not promised. Storage eviction, private-mode cache restrictions or upstream model changes can require a fresh download. Clear this site's browser data to clear caches. Cancelling terminates the worker, preserving inputs; completed cached files may remain. Run IDs guard asynchronous fetches, imports and late worker responses. Timeout after 180 seconds; errors explain retry/connectivity/storage/WASM actions without substitute results.

The identical immutable WASM binary is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Vite rewrites its emitted reference; preserve that earlier app in combined deployments. The factory remains local under this app's `runtime/` directory.

## Build and validation

`npm install`, `npm run predeploy`; base `/daily-app2/20261107-12/`. Required per-app deploy script exists but **publish only from the repository root** to preserve the collection. Root README documents Pages verification.

See VALIDATION.md and machine-readable reports for actual results. Run `python3 serve-test.py` then `node browser-test.cjs`; browser tests require the workspace's Playwright/Chrome installation. `node core-check.mjs`, `python3 export-roundtrip.py` and `python3 audit-assets.py` check schema/coverage, real downloaded artifacts and bundled assets. Browser tests distinguish real-model success runs from injected defensive faults. No benchmark across real curricula is claimed.

## Distinctness

Unlike Coverage Desk's requirement/evidence register or Course Compass's time-budgeted course selection, this is an instructor's assessment **mark blueprint**: many-to-one question alignment, editable original versus reviewed question marks, minimum-target deficits/excess and retained unassigned questions. It does not infer evidence sufficiency or recommend a learning plan. Both collection galleries were checked for related workflows; historical apps/categories remain unchanged.
