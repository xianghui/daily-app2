# Revision Dock

A local-AI change-control desk for operations leads reconciling two versions of a short checklist. Folder: `20261107-10`. React + Vite; static GitHub Pages deployment under `/daily-app2/20261107-10/`.

## Workflow

1. Paste/import two UTF-8 CSV files with exactly `id,step` columns, or choose one of two synthetic examples. IDs must be unique within each version; versions can use different IDs. Originals are never rewritten.
2. Set the semantic similarity floor (default 0.42), read the first-download notice, then explicitly load/run AI.
3. Inspect each new step beside its linked old source. Change the link or choose no link to reject it, add owner/verification notes, and mark each row reviewed. One old step can link to at most one new step. Unlinked old steps need a separate acknowledgement; they are retained, not deleted. Undo keeps the last 40 edits.
4. Apply the reviewed register, then download JSON/CSV or copy JSON. Edits invalidate the applied export snapshot. All new rows survive; all old rows are either linked once or included in the unlinked-old list.

The exact-text baseline counts verbatim matching step strings. AI candidate counts show additional potential connections, **not measured accuracy or time savings**. The useful optimization is an exact maximum-weight one-to-one assignment with optional unmatched records, maximizing summed `(cosine - floor)` across retained links rather than greedily pairing rows. AI alone produces the embeddings; assignment, constraints, conservation, validation and exports are deterministic.

## Real model / runtime / license

- `Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX encoder; 384-dimensional mean-pooled normalized embeddings. Model/source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 ; based on sentence-transformers/all-MiniLM-L6-v2. Apache-2.0 weights and tokenizer.
- Transformers.js 4.3.2 (`@huggingface/transformers`), Apache-2.0; ONNX Runtime Web, MIT. See `THIRD_PARTY_NOTICES.md` and `licenses/`.
- The browser runs real feature extraction in a bundled worker using single-thread WASM/CPU. No GPU requirement or server inference. English short operational steps are the intended input.
- Initial explicit load needs internet: approximately 23 MB model plus tokenizer/config and approximately 27 MB WASM (26,861,777 bytes), plus ~0.8 MB JS and ~53 KB module factory. Downloads come from Hugging Face/CDN and this collection. Progress displays model-file download stages and bounded embedding batches. Slow devices can take longer; timeout is 180 seconds. Cancel terminates the worker and late replies cannot change a newer run.
- The byte-identical runtime WASM is shared with `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`), avoiding duplicate deployed bytes. Root deployment must preserve that app/path. Factory and worker are app-local; Vite rewrites WASM references at build time.

## Devices, privacy and offline scope

Current browsers with Web Workers, WebAssembly SIMD, sufficient memory and storage: current desktop Chrome recommended; CPU path requires no WebGPU. Desktop Chrome was actually tested. Phone-width rendering was tested in desktop Chrome; physical phones, Firefox and Safari were not tested. Unsupported capabilities/download/worker/malformed-result errors leave no fake fallback and offer retry.

No API keys, analytics, remote inference or content uploads. Imported text only reaches the local worker and is data, never tool instructions. Network traffic on the default path consists of code/runtime/model asset downloads. Inputs/results remain in page memory until copy/export; they are not saved to localStorage. Explicit user downloads/copy are the only content outputs. All fixtures are synthetic.

Hugging Face model caching plus explicit Cache API storage of worker source, factory and WASM permit **another run in the already-open page, with a fresh worker, after a successful online run**. This exact scope is tested with all network disabled. Offline app-shell navigation/reload is **not** promised (no service worker). Cache denial/eviction/partial download may require internet again; clear site data to remove caches. Cancel can leave completed or partial model files cached.

## Limits and data contracts

- 1–12 steps per version; 1–60-character IDs, 1–300-character steps; 16 KB UTF-8 per CSV; strict columns/quotes and unique IDs.
- AI consumes at most 24 texts, batches of four, truncation at 256 tokens. Unicode text can reach token limits before character limits. No unbounded documents. Model output must contain exactly one finite normalized vector of dimension 384 for each input.
- Floor 0.20–0.95, default 0.42. Similarity is not confidence or a probability of equivalence. Unmatched is safer than invented equivalence. Opposing/negated obligations may be semantically close. Inspect exact source text yourself.
- One-to-one only; splits/merges must be documented manually. This is not legal/compliance certification, semantic entailment or an automatically safe migration.
- JSON schema version 1 includes original versions, threshold/model, complete reviewed new rows with source links/scores/notes, unlinked old steps and computed metrics. `original` round-trips the source CSV data without spreadsheet escaping.
- CSV is a flattened change register: `kind,old_id,old_step,new_id,new_step,owner,note`. Linked old steps appear on their new row; every unlinked old step appears separately. CSV uses standard quoting; formula-leading strings are prefixed with an apostrophe for spreadsheet safety, deliberately differing from raw JSON. Every source record can be reconciled by ID. JSON is the lossless machine interchange format.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy` (build). Per-app deploy script is retained as required but **do not invoke it** for collection publishing. Publish via root `npm run predeploy` / `npm run deploy`, which assemble the combined `deploy/` collection. Validate real AI before gallery addition; verify Pages built commit and public inference/assets after publication.

## Validation

Run `python3 serve-test.py` and `node browser-test.cjs` against the production bundle. `TEST_URL` selects the public URL; `REPORT` changes the report filename. `node core-check.mjs` validates schema/optimization defensive cases using synthetic vectors (not an AI-functionality test). `python3 export-roundtrip.py` independently parses actual browser-downloaded artifacts. `python3 audit-assets.py` records hashes and credential-pattern checks.

See `VALIDATION.md`, machine-readable browser/core/export reports and screenshots for observed outcomes. Do not infer universal model quality from the small fixture set.

## Published result

Live: https://xianghui.github.io/daily-app2/20261107-10/ . Complete production-browser validation also passed at the public URL; public asset hashes match the build and Pages reports the matching gh-pages commit built. Public evidence and actual downloaded artifacts are retained in `public-evidence/`. See `publication-status.json` and `deployment-validation.json`.
