# Literal Loom — 20261125-15

An analyst's workbench for recurring search-filter handoffs. Paste/import described search requests, literal terms and small synthetic/sanitized test corpora. Local AI proposes whole-field, prefix or substring intent. Review every intent and literal term, hold ambiguous requests, then apply and export selection fixtures. It never connects to a database or sends a query.

## Why AI / what is deterministic

Real normalized, mean-pooled MiniLM sentence embeddings compare each request's context with supplied intent-profile descriptions. Cosine ranking proposes the profile; this reduces manually classifying a batch of differently worded requests. It does not infer literal terms, prove intent, generate prose/SQL, or execute instructions found in imported text. The original corpus and context never change. Escaping `%`, `_` and `\`, constructing LIKE patterns, bounded dynamic-programming matching, record preservation, baseline comparisons and exporting SQL are deterministic. A human selects the final intent; no confidence percentages or automatic approvals.

Baseline uses the **same reviewed term and mode**, but omits escaping. The displayed number is the count of differing sample match decisions among approved requests, not AI accuracy, runtime improvement, or production false-positive rate. Holds are retained but excluded. Sample size/composition controls how representative this comparison is.

## Model / runtime / devices / network

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Quantized q8 ONNX feature extraction, 384-dimensional vectors. English-oriented semantic retrieval, not an instruction-following language model.
- Shared immutable worker from `20261115-6/assets/ai.worker-lkOoPoq8.js`, Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). No WebGPU, API key, agent credentials or paid service.
- Shared factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; shared 26,861,777-byte WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both originating apps. SHA-256/byte audit: `runtime-provenance.json`.
- Before first inference: internet and approximately **50 MB** downloads (roughly 23 MB weights plus 27 MB runtime, plus tokenizer/JS). Model artifacts download from Hugging Face and its CDN delivery hosts. No content is placed in network bodies or URLs. No optional remote inference.
- Current desktop Chrome with module workers, WebAssembly SIMD and Cache API recommended; CPU mode was actually tested with GPU disabled. Narrow phone layout was tested by viewport emulation, **not real phone hardware**. Other browsers/devices remain unverified. Small-memory devices may fail; use desktop Chrome and retry.
- Four short texts per model chunk. Context/profile descriptions are each capped at 200 UTF-16 characters, below the model's 512-token tokenizer context for these inputs. The shared pipeline passes truncation/max_length 256; its tokenizer's own limit remains 512 and this app does **not** claim a separately enforced 256-token cap. Corpus values and literal terms are not sent to the embedding model.
- The app caches worker source; shared runtime explicitly Cache-API-caches its module factory/binary; Transformers.js caches model files. After a successful run, **fresh-worker inference offline in the same already-open page** was tested. Offline navigation/reload/app-shell startup is **not promised**. Eviction, private mode or disabled caching can require downloads again. Clearing browser site data clears these caches; originals are kept only in page memory or your downloaded files.
- Download/chunk status, Cancel, error messages and retry are visible. Cancel terminates the worker and aborts pending worker fetches; IDs suppress stale callbacks. 180-second timeout. Unavailable WASM/module workers, network failures and malformed vectors produce no fake result.

## Workflow / formats

1. Open Catalog filters or Archive filters to inspect the JSON shape. Replace synthetic values with your own sanitized input, or import `.json` source/audit.
2. Edit intent descriptions/goals and requests in the source editor. A profile has `id`, `description`, `mode` (`exact`, `prefix`, `contains`). A request has `id`, `context`, `term`, `records: [{id,value}]`.
3. Explicitly click **Load AI & match search intent**. Nothing loads the model before this action. Inspect each source and cosine-ranked profile evidence.
4. Correct the intent, edit the literal term/note, approve or hold every request. Undo retains up to 50 review snapshots. Editing invalidates the applied artifact.
5. **Apply reviewed fixtures** computes all sample selections. Holds remain in audit exports, not executable fixtures. Download current JSON/CSV/Markdown/SQL or copy the current worksheet.

### Input and semantics contract

- 2–8 profiles, 1–24 requests, 1–40 records per request (960 records max). Unique ASCII IDs (`A-Za-z0-9_-`, 1–60). Context/profile 1–200 characters, title 1–200, term 1–100, value 0–200, note 0–500. Valid Unicode; no NUL, most control characters, NULLs or arbitrary extra fields.
- Source ≤240,000 characters; file/audit envelope ≤1.5 MB. Audit reimport restores **originals only**, explicitly starting a fresh AI review; it does not trust a saved approval state. Full-size exports are tested reimportable.
- Terms are always literal, never wildcard-intent syntax. Exact = whole field; prefix = opening text; contains = anywhere. SQLite's default LIKE folds ASCII A–Z only; non-ASCII compares exactly. No locale collation or Unicode normalization. No custom LIKE functions or `case_sensitive_like` override. Empty source values are valid; empty/whitespace-only terms are blocked. Trailing escape behavior is modeled for the **unescaped baseline**. Pattern matching is dynamic programming, not user regular expressions/backtracking.
- Source changes cancel old runs and invalidate all review/export state. File reads use the same stale-input guard. Imported strings render as text, never HTML or executable SQL in the page. Source text cannot request credentials or authorize tools.

### Artifacts

- JSON: lossless originals, reviewed fields/evidence, holds, every source value and match, metrics, plus approved parameterized `query` and `bindings`. No writes; bind `pattern` with your database driver in an appropriate test environment.
- CSV: one row for every source record, including holds; current reviewed term/note and match decisions. RFC-style double quoting/CRLF; formula-like text starting `= + - @ TAB CR` gets an apostrophe. JSON preserves exact original text without spreadsheet transforms.
- Markdown: readable worksheet with current review and all approved match decisions; JSON/CSV retain source values for held cases. Markdown is plain exported text, not rendered imported HTML.
- SQL: self-contained read-only SQLite `WITH ... VALUES` fixture queries including literal and unescaped baseline columns. Strings are SQL-quoted; the app never executes this text. Tested in independent Python SQLite. Other SQL dialects and customized SQLite builds are unverified.

## Validation and limitations

See `VALIDATION.md` and machine-readable reports. Actual production-bundle inference, two different datasets, offline fresh-worker inference, downloaded artifacts and independent SQLite execution are required before publication. The handoff classifier is an aid, **not a semantic correctness guarantee**: the original wordy prefix request containing negative constraints was misclassified as substring search. That failure is retained in `quality-probe.json`; a concise demonstration replaces it in the starter fixture. Any universal accuracy claim would be inappropriate. Review is mandatory, especially negation/ambiguous intent. Test corpora are small snapshots, not exhaustive production validations. This tool does not promise index use or query performance and does not support NULLs, wildcard authoring, other collations or full-text search.

## Build / publish

React + Vite. `npm install`, `npm run predeploy`. Base `/daily-app2/20261125-15/`. Required per-app `deploy: gh-pages -d dist` exists but **do not invoke it** for this monorepo. Publish with repository-root `npm run predeploy` and `npm run deploy`, preserving the collection, shared immutable runtime dependencies and the 1 GB site-size guard. No digest is sent by this builder.
