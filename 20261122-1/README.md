# Keyfield Studio

**20261122-1 · AI utility**

For data migration analysts preparing a stable record identity. Column names alone can hide a composite key; accidentally unique counts should not become primary keys. This tool uses real local AI to propose identity-bearing column roles, then exact tuple enumeration to find minimal observed keys and create source-row duplicate investigation worksheets.

## Workflow

1. Paste/import a JSON worksheet (try **Branch inventory** or **Course register**). Describe the intended row grain in `title` and each column in `columns`. Every `records` cell is a string, including numeric-looking values. `auditKey` lists a provisional key to investigate.
2. Explicitly load the model. Review each identifier / descriptive attribute / changing measure role and cosine evidence. Approve or hold every column; edit the independent audit-key checkboxes.
3. Apply the reviewed scenario. Compare inclusion-minimal composite keys with single-column keys. Inspect exact row-number witnesses, blank-key rows and differing nonkey columns. A duplicate may be a legitimate repeated event; no deletion/merge is offered.
4. Export current JSON, long-form audit CSV or Markdown; copy the worksheet. Any review change invalidates exports. Undo restores the previous role/key choice. Reimport an audit restores its originals only, requiring fresh inference and reviews.

### Input format

```json
{"title":"One row per branch and item","columns":[{"id":"branch","description":"Stable warehouse branch identifier"},{"id":"item","description":"Stable product catalog identifier"}],"auditKey":["branch","item"],"records":[{"branch":"N","item":"A"},{"branch":"S","item":"A"}]}
```

2–10 columns, at most 8 reviewed identifiers, 2–64 records, 300 characters/description, 160 characters/string cell, 40/column ID, 200/title, 2,000/review note. Pasted source ≤120,000 characters; imported source/audit JSON ≤2 MB. Unknown/missing cells, nonstrings, duplicate/unsafe IDs, invalid keys and unsupported formats are rejected. Four texts/chunk; at most 13 texts. Model receives **only role anchors and column descriptions**, not cell values.

## Real AI and static-host runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX; mean-pooled normalized 384-dimensional embeddings. Semantic similarity is **not confidence** and cannot establish business identity.
- Runtime: Transformers.js 4.3.2, ONNX Runtime Web, single-thread WASM CPU. WebGPU is not required. No paid provider, backend, API credentials, telemetry or remote inference integration.
- First explicit load downloads approximately 23 MB model plus 27 MB WASM/runtime, from Hugging Face/CDN and this collection. Model host main revision is not pinned. Existing immutable same-origin worker is reused to preserve collection size: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older apps. Hashes and inspected protocol are in `runtime-dependency-audit.json`.
- Worker protocol: `{id,texts}` → progress/batch/result `{id,vectors}` or error; chunks of four. Tokenizer actual ceiling is 512 tokens; worker's feature-extraction per-call max_length is not an enforced 256 cap. Descriptions/anchors are independently bounded to 300 characters (anchors below that), keeping context small. App validates vector count, finite normalized 384-D shape.
- HTTPS or localhost, module workers, WebAssembly SIMD and several hundred MB available RAM. Actual desktop Chrome CPU inference tested. Phone layout is tested with emulation, not physical low-memory devices. Other engines are not certified.
- Cache API stores model/runtime downloads when allowed. Explicit worker-source, factory and WASM caching supports fresh-worker inference offline **in the already-open page after successful online loading**. Offline navigation/reload/app-shell startup is not promised; private mode or eviction may require another download. Cancel terminates work; retry creates a new worker. Progress, network/runtime errors, 180-second timeout, run IDs and guarded file reads prevent stale overwrite. No fake fallback.

## Exact checks and meaning

Enumerate all nonempty subsets of at most eight reviewed identifiers (≤255). A subset is a valid observed key only if every component is nonblank and every exact string tuple is distinct. JSON tuple encoding avoids delimiter collisions. Return only inclusion-minimal keys (no proper valid subset). Missing includes empty or whitespace-only values; otherwise do **not** trim, case fold or normalize. Single-column baseline applies identical rules. Duplicate audit uses the independently reviewed key and reports every source row; differing nonkey columns indicate investigation, not a proven functional dependency violation.

Counts are computed, not improvement percentages. A unique measure is excluded from the search after role review even if it happens to distinguish rows. No statistical generalization, accuracy, speed savings, future constraint guarantee, safe deduplication or SQL execution claim. Descriptive names, dates, negation, opaque headers and incomplete metadata can cause AI role errors. Verify business grain and key stability with domain knowledge. Held columns withhold all analysis but preserve all input/reviews.

## Privacy and exports

Default user content stays in browser memory; only downloads use the network. No content is put in URLs/request bodies or uploaded. No user data is persisted by the app. Imported text is data and has no tool authority. Exports may contain sensitive data; synthetic fixtures only are committed.

JSON contains complete original table, reviewed roles, notes, selected key and exact analysis. Audit CSV is long-form: one row per original source-row/column cell with original value, roles, review note, key membership, missing flag and duplicate-group membership. Spreadsheet formula-like strings receive a leading apostrophe; quotes/newlines are CSV-escaped. JSON preserves exact unmodified strings. Markdown includes all records and source-linked analysis. Exports always use the current applied review snapshot; no source row is silently removed.

## Build/publish

React + Vite; base `/daily-app2/20261122-1/`. `npm run predeploy` builds. Per-app gh-pages dependency/scripts retained but **publish only through root combined-site deployment**. Root README describes Pages verification. See `VALIDATION.md` for actual outcomes and untested scope.

Observed challenge: the negated description “Not a stable identifier. This code changes as a numeric count of units on hand.” was misclassified as identifier. Treat roles as suggestions and review every column; do not assume negation comprehension.
