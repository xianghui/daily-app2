# Null Lantern

A local-first SQL validation worksheet for database/import reviewers. Match informal row-check notes to a supplied rule catalog, review each link and binding, then expose SQL's three-valued behavior before writing constraints. Not a chatbot, database client, migration runner or SQL generator from arbitrary prompts.

## Workflow

1. Choose either synthetic batch, paste JSON or import source/audit `.json` ≤1 MB. Define 2–5 `plans` with `id`, English `description` and SQL `predicate`. Supply 1–24 `records` with `id`, English `context`, and `raw` (a JSON string holding named scalar bindings). One record means one independent rule check; repeat a source row to test multiple rules.
2. Explicitly click **Load AI & reconcile**. Real MiniLM embeddings compare context with rule descriptions. AI ranks rules; it does not invent predicates, values or test results.
3. Review the rule, original source, editable bindings, similarity evidence and expression trace. Approve each test case or hold it. Approval means a useful reviewed QA case, not that the row passes. Target/binding edits reset approval; every edit invalidates the export snapshot. Undo restores the prior review. Original records stay intact.
4. Apply the fully reviewed scenario. The deterministic evaluator reports TRUE/FALSE/UNKNOWN, CHECK acceptance, WHERE selection and the baseline discrepancy count. Invalid approved bindings are blocked, preserved in the audit and omitted from SQL.
5. Download complete JSON/CSV/Markdown audits or read-only SQL SELECT fixtures for all approved valid cases. Copy Markdown is also available. Reimport audits restores original inputs and requires fresh inference/review. No external database actions occur.

## Real AI, licenses and download

- `Xenova/all-MiniLM-L6-v2` q8, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web WASM, MIT. CPU module-worker inference uses normalized mean-pooled 384-dimensional vectors; no WebGPU/API key/paid service required.
- Initial internet requirement: approximately 23 MB model weights + 27 MB runtime binary, plus tokenizer and code. Downloads use Hugging Face and its CDN; application/worker/runtime assets use this GitHub Pages origin. No model download before explicit invocation.
- Shared immutable worker `../20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older published apps. See runtime-provenance.json for hashes/bytes. Inspected protocol accepts `{id,texts}` and emits progress/batch/result/error. Worker embeds four texts at a time. Tokenizer config cap is 512, not its pipeline's unenforced 256 hint. Descriptions/context are bounded to 200 characters.
- Current desktop Chrome with WebAssembly SIMD, module workers, secure origin and several hundred MB free RAM recommended. Tested desktop headless Chrome CPU with GPU disabled. Physical phones, other browsers, performance on low-memory devices and WebGPU are not tested/promised.
- Cache API stores worker source/factory/WASM; Transformers.js caches downloaded model files. Storage can be denied/evicted. Tested offline: another real inference in a fresh worker in an already-open warmed page with all network disabled. Cold offline navigation/reload is not supported or promised.
- Download progress and inference chunk counts are shown. Cancel aborts the worker-source fetch and terminates the worker. Run IDs also guard async file/cache reads and callbacks. 180-second timeout and retry; malformed/nonfinite/wrong-sized/non-normalized vectors are rejected. Unsupported device, worker construction/runtime and network errors show no fake recommendations.

## Supported SQL subset and limits

Predicates ≤600 characters, 120 tokens, 12 nested parentheses/NOT levels. Scalar ASCII identifiers ≤40 characters, numbers, single-quoted strings with doubled apostrophe escaping, TRUE/FALSE/NULL; comparisons `= <> != < > <= >=`, `IS [NOT] NULL`, `NOT`, `AND`, `OR`, parentheses. SQL operator precedence is preserved. No functions, comments, casts, queries, DDL/DML, IN, BETWEEN, arithmetic or subqueries. Each binding object has ≤12 scalar fields; raw JSON ≤3500 characters; strings ≤1000, no NUL or unpaired Unicode surrogates. Missing bindings are errors, never implicit NULL. Identifier case is exact. Equalities require matching scalar types; ordering supports numbers only. No implicit truthiness/casting or string collation emulation. Duplicate JSON keys use last-value parsing. Numeric values/literals must be finite within safe-integer magnitude; fractional numbers use JavaScript binary floating-point, not arbitrary SQL decimal semantics.

Total source ≤50,000 characters; import envelope ≤1 MB. Rule IDs ≤60, record IDs ≤80, descriptions/context ≤200, reviewer notes ≤2000. No arbitrary code execution, interpolated identifier SQL, external table access or database writes. SQL export substitutes quoted scalar literals into the validated AST and emits only SELECT statements. IDs and apostrophes/newlines are safely quoted. Use the target database for final verification; SQLite is the independent test oracle here, PostgreSQL was not executed. Other dialects, collations, SQL modes and decimal types may differ.

## Privacy

No content uploads, analytics, credential integration, provider keys, saved designs or database connections. Network is code/runtime/model downloads only. User strings are inert data, never tool instructions. Source and reviews stay in memory unless exported; cached files contain model/runtime, not user inputs. Closing the page loses unexported work. Fixtures and validation artifacts are synthetic only.

## Comparison and artifacts

The simple baseline equates WHERE acceptance with CHECK acceptance. SQL CHECK allows TRUE **or UNKNOWN**; WHERE keeps only TRUE. Displayed differences count actual approved valid cases with UNKNOWN. Counts are not prediction accuracy, measured time savings or universal improvements. Local inference matched 6/6 intended rules in the two small known-answer batches, but a competing-negation challenge selected `age` rather than `contact`: similarity is not authorization or semantic proof.

JSON preserves every original, review, source mapping and expression trace. CSV has one row per original, quoted fields/newlines, and apostrophe protection for formula-leading text; JSON retains exact text. Markdown includes the complete source and reviewed worksheet. SQL contains ready cases only, including useful FALSE/UNKNOWN tests; held/blocked cases remain in the audit. Export snapshots always reflect the current applied review and are invalidated on edits. Independent SQLite execution checks each downloaded SELECT's case ID, predicate value, CHECK and WHERE results; Python CSV/JSON parsers check conservation and multiline content.

## Validation and publishing

See VALIDATION.md and machine-readable reports. Tests cover actual production-bundle inference, known answers, 24-row chunking, source-context-only output changes, fresh-worker offline inference, review/edit/undo/hold, malformed and invalid inputs, cancellation/retry, stale async work, model-host/network failure, unsupported runtime, export round trips, privacy requests and 320/390/1440 layouts. Read-only SQLite verifies the supported truth semantics. No real private documents are included.

React + Vite, base `/daily-app2/20261124-21/`. `npm run predeploy` builds; required per-app deploy metadata is retained, but **publish only through root `daily_app2` combined-site predeploy/deploy**. No digest is sent by the builder.
