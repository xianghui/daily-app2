# Column Bridge

A local-AI CSV schema mapping utility for operations teams onboarding partner/vendor spreadsheets. React + Vite, static GitHub Pages; no backend, credentials or paid dependency. CSV → destination descriptions → real semantic mapping → review/reject/edit/undo → required-field validation → applied target CSV and lossless audit JSON/CSV.

## Use

1. Load a synthetic Contact or Shipping example, paste CSV, or import a `.csv` file. Original cells stay unchanged.
2. Define a destination CSV with exact headers `field,description,required`. Use lowercase field IDs (letter first, letters/digits/underscores; ≤40 characters), English descriptions (≤300 characters), and `true`/`false` flags. Required fields must be mapped and nonempty for all rows.
3. Set minimum cosine similarity (0.1–0.9; default 0.3). Explicitly start **Load AI & map columns**. The first run downloads model/runtime assets. Cancel terminates the worker, including ongoing inference. Retry can reuse cached files.
4. Inspect suggested mappings, similarity scores and first-three-row source snippets. Choose another source column or reject by leaving unmapped. A source cannot feed two destinations. Add a review note; undo up to 30 recent edits. Manual below-threshold mappings are labeled.
5. Apply reviewed mapping after checks pass. Preview and export reflect the current mapping. Any input change clears inference; any review edit invalidates the export snapshot.
6. Download target CSV, audit CSV or audit JSON; or copy the target CSV. No remote import, account change or sending action occurs.

## Actual AI and deterministic work

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized `q8` ONNX, Apache-2.0, based on [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Model files download from Hugging Face and its CDN. Runtime: `@huggingface/transformers` 4.3.2 / ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0, locally bundled WASM CPU/SIMD. Exact installed versions are locked in package-lock.json.
- Model embeds **source headers and destination field IDs/descriptions**, not cell values. Normalized mean-pooled 384-dimensional embeddings; batches of four texts; maximum 256 tokens/text. Source headers are ≤100 characters and schema descriptions ≤300 characters, limiting context.
- AI recognizes semantic relationships between labels such as `Employer organization` and `company`, unlike a normalized-exact-header baseline. No hard-coded responses, keyword classifier, API calls or fallback pretending to be AI.
- Deterministic steps: CSV/schema parsing, bounded validation, cosine similarity, exact dynamic programming one-to-one assignment (maximize number of threshold-eligible mapped fields, then total similarity), row application, required-nonblank validation and exports. Required fields are **not** given automatic priority in optimization; inspect unresolved required fields. Scores are similarity, never confidence or accuracy probabilities.
- UI compares exact-header baseline coverage with reviewed semantic mapping coverage and counts retained rows. This is a computed structural comparison, not measured time saved or generalized model accuracy.

## Downloads, devices, privacy, offline scope

Approximately 23 MB quantized model plus 27 MB runtime (local binary 26,861,777 bytes, plus worker/factory). Internet is required on first run. Allow roughly 300 MB free memory. Current desktop Chrome was tested; modern Chrome/Edge/Firefox/Safari require Web Workers, WebAssembly and SIMD. No WebGPU required. Actual low-memory phones, Safari/Firefox and non-SIMD browsers were not hardware-tested. On failure, enable supported browser features, reduce inputs or retry online. 180-second deadline covers worker source download, model load and inference.

Content stays in local browser memory and is not persisted or uploaded. Worker receives header/schema text only. There is no remote AI option, credential input, analytics, model-provider secret, or document persistence. File reads and input/run identities guard against late arrivals. Imported text has no tool authority and cannot request credentials.

Transformers.js Cache API stores public model assets. App caches bundled worker source and WASM factory/binary explicitly, supporting a newly created worker while offline **in the already-open page after a successful online run**. This was tested with Playwright offline networking, not merely a second call on an existing model. Online reload reuses the model cache. No service worker/app-shell offline startup is promised; closing/reopening offline is not supported. Private mode or cache eviction may require a new download. Clear site data to remove cached public model/runtime files. CSV content is never in those caches.

## Formats, preservation and limits

- Source: UTF-8 comma CSV, 1–100 records × 1–12 columns; nonempty unique headers (case-insensitive/trimmed uniqueness, preserved original text), headers ≤100 chars; cells ≤400 chars; total ≤60 KB encoded. Quoted delimiters, embedded newlines and Unicode cells supported. Empty/whitespace-only lines are skipped. Values remain strings, preserving numeric formatting/leading zeros. A row of only blank values is not a record; there is no row deletion in the review layer.
- Schema: CSV, exactly `field,description,required`, 1–8 unique destination fields. Invalid flags/IDs, duplicate IDs, bad CSV, oversized input and ragged records are rejected. No Excel/JSON input, delimiter autodetection promises or per-cell corrections.
- Target CSV: all source records in the original order, destination fields in schema order; optional unmapped fields blank. **Source columns outside the destination schema do not appear in target CSV.** Download audit JSON alongside it to preserve everything.
- Audit JSON: versioned `column-bridge-v1`, original headers and all source cells, destination schema, reviewed mappings/notes and similarity, omitted-source list, every target row and computed metrics. JSON is lossless at cell level, not byte-for-byte identical input formatting.
- Audit CSV: each row has its original row number, every source field prefixed `original:`, then all mapped fields prefixed `target:`. Notes/schema metadata are in JSON only.
- Both CSV exports quote delimiters/newlines and prefix formula-like textual cells (`= + - @ tab CR`) with an apostrophe. This includes plus-prefixed phone strings. JSON retains exact cell values. No dates, amounts, values or types are inferred/converted; CSV formula protection intentionally changes those CSV cell strings.

## Limitations

Headers can be ambiguous, deceptive or multilingual; AI does not examine cell values to disambiguate. Every mapping needs human review. Similarity alone cannot establish schema correctness. No format/type validation beyond required nonblank values, no transformations, splitting, merging, joining, deduplication or external importer integration. Required fields can remain unresolved despite inference. Any blank required cell blocks application and must be corrected in source input (which requires rerunning). Memory and device speed vary. Two small synthetic fixtures establish limited observed behavior, not universal accuracy.

## Development / publication

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `deploy: gh-pages -d dist` is retained but **do not use it for collection publication**. Base `/daily-app2/20261106-24/`. Publish via root combined `npm run predeploy` / `npm run deploy`, preserving all apps.

Tests: `node core-test.mjs`, production bundle server `python3 serve-test.py`, `node browser-test.cjs`, `python3 export-roundtrip.py`. Browser test uses the host-installed Playwright/Chrome, not a production dependency. Fault injection tests only defensive errors; successful inference always uses actual weights. See VALIDATION.md and saved JSON reports for observed checks. No real personal data or credentials are fixtures.
