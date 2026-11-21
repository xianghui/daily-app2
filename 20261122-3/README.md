# Join Ledger

A local-AI merge preflight for spreadsheet analysts. Instead of guessing that a lookup is safe, map unfamiliar fields, review composite join keys, inspect exact duplicate-key fanout and unmatched records, then export a source-linked draft join and complete audit. No database is accessed or changed.

## Workflow

1. Open **Order lookup** or **Archive rights**, paste source JSON, or import a source/audit `.json` file. Each table has `fields: [{id,description}]` and `rows: [[...cells]]` in field order. Specify `expectation`: `many-to-one`, `one-to-one`, or `many-to-many`.
2. Read download/privacy requirements, then explicitly **Load AI & reconcile**. Real MiniLM embeddings compare each left field description with each right field description. Table values are not embedded. Proposals include ranked cosine similarity evidence, not confidence.
3. Inspect original descriptions and sample cells. Correct each right field, **approve only key components**, and reject every non-key field. Multiple approved components mean AND equality. Right key fields must be distinct. Review notes are editable multiline text; undo is available. Any edit invalidates applied exports.
4. **Apply reviewed scenario**. The deterministic audit joins all exact matches, retains unmatched left rows with null right payload, and reports unused right records, null/empty keys, global duplicate-key groups, observed cardinality, expectation violations, fanout and lineage.
5. Download current reviewed **JSON**, complete **Audit CSV**, **Join CSV**, or **Markdown**, or copy the worksheet. A violated expectation does not prevent an explicitly reviewed draft export; it remains prominently flagged. Nothing silently deduplicates, trims, changes case or coerces values. Numeric `1` differs from string `"1"`; null and empty-string key components never match. Every left row appears at least once. Unused right rows are retained in the original tables/audit, not falsely included in a left join.

The first-match lookup baseline emits one row per left source row and hides additional right matches. The displayed extra-row count is exact join length minus this baseline, not accuracy or time saved. Observed cardinality uses all non-null keys on each side, including unmatched keys; sample uniqueness does not prove future uniqueness.

## Real AI, runtime, license and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, normalized mean-pooled 384-dimensional embeddings.
- Runtime: collection's immutable Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT), WASM CPU, single thread. No WebGPU or API key needed. AI materially proposes semantic field correspondences across different names/descriptions. Equality joins and all accounting are ordinary deterministic logic, not marketed as AI.
- First load: approximately 23 MB model/tokenizer downloads from Hugging Face/CDN plus 27 MB same-origin CPU WASM and ~0.6 MB runtime JS. Initial internet required. Progress, cancellation, 180-second timeout and actionable failure/retry are shown. Never substitutes fake AI on failure.
- Content remains local. Only field descriptions enter inference; table cells stay in app memory. Requests are file GETs to same-origin runtime and documented model/CDN hosts; no content upload, remote inference provider, analytics, credentials or storage of content. Model/runtime Cache API entries may persist. Default exported audits contain the user's original data; users decide how to store them.
- Shared dependencies (preserve originating apps): `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Exact hashes/protocol are in `runtime-dependency-audit.json`. Runtime/worker assets are same-origin, not externally loaded scripts. Worker source, factory and WASM are explicitly cached; model files use Transformers.js Cache API.
- Tested offline scope: fresh-worker real inference in an **already-open warmed page** with all network disabled. Offline navigation/startup/reload is not promised. Private mode/storage eviction may require downloads. No service worker/offline shell claim.
- Requirements: HTTPS or localhost, current browser supporting module workers, WebAssembly SIMD and Cache API, several hundred MB available memory. Headless desktop Chrome on macOS tested with GPU disabled; actual phones, Safari/Firefox/Edge and low-memory devices untested. Responsive layout is not a promise of inference performance on all phones.

## Bounds and limitations

1–8 fields and 1–64 rows per table; unique safe field IDs ≤40 characters; field descriptions and string cells ≤300 characters; title ≤200; source paste ≤60,000 characters. Cells: strings, finite numbers, booleans or null. Four descriptions per chunk (at most 16 descriptions / 4 chunks). Runtime tokenizer `model_max_length` is 512; the pipeline's supplied `max_length` is **not** relied on to enforce a smaller cap. Short character limits bound model context. Finite, normalized 384-vectors and exact vector counts are validated. At most 4,096 joined rows. Source/audit JSON import ≤8 MB (separate envelope bound; source remains ≤60,000 characters); originals are extracted and strictly revalidated; reviews are intentionally not restored. No CSV import: CSV **exports** are actual quoted RFC-style records with CRLF, embedded quotes/newlines preserved and leading formula-like string cells prefixed with an apostrophe. JSON retains original types exactly. Audit CSV stores every original row as JSON cell text; join CSV provides both source row numbers and all left/right fields. CSV cannot preserve all type/null distinctions: use JSON for lossless restoration.

Semantic proximity is not equivalence, key identity, unit compatibility, validity or authorization. Every field must be explicitly reviewed; unrelated, negated or domain-specific descriptions can still return an unsuitable nearest field. Equal similarities use catalog order. Composite keys are user-chosen, not inferred solely from uniqueness. This is a bounded sample worksheet, not fuzzy entity resolution, a database query engine or a production migration system. Imported text never changes tool authority or requests credentials. Runs terminate workers and invalidate identities on cancel/input changes; stale file reads, downloads and responses cannot overwrite newer state.

## Development and publishing

`npm install`; `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261122-3/`. Per-app deploy scripts/dependency are retained by contract, but publish **only from collection root** via its combined `deploy/` workflow, never this app's `npm run deploy`.

## Validation

See [VALIDATION.md](VALIDATION.md), actual browser/network reports, independent core tests and parsed downloaded artifacts. All examples are synthetic. No claim of universal AI accuracy, measured productivity improvement or future key safety. Public release is not established until documented Pages/assets and real public workflow checks succeed.
