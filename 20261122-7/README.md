# Lookup Loom

A local-AI dependency audit for spreadsheet stewards. Before moving repeated attributes into a lookup table, test the claim that a single or composite key determines one value tuple. This is not key discovery, schema mapping, or an existing two-table merge preflight.

## Workflow

1. Paste/import synthetic-style JSON containing a title, 2–10 column IDs/descriptions, 1–60 row arrays, and 1–3 informal field descriptions on each side (`determinants` / `dependents`). All cells are strings; use `""` for missing. Supplier desk and Course desk examples are included.
2. Explicitly load/run real local AI. It embeds the field hints and column descriptions, proposing semantic field matches with cosine evidence. The raw table cells are not even sent to the local neural worker.
3. Verify every field; edit assignments, add multiline notes, approve or hold. No repeated/overlapping columns. Undo restores review edits. Field edits reset approval, and every review/source change invalidates applied exports.
4. Apply the reviewed audit. Exact string grouping finds key tuples with conflicting dependent tuples and points to every source-row witness. Blanks on either side block extraction. A hold withholds the split; nothing is dropped.
5. A clean audit constructs a unique key/value lookup and a remainder retaining every source row, duplicate and original order. It rejoins the tables and compares every cell against the originals before enabling split CSV exports.
6. Download complete JSON/Markdown, all-row audit CSV, or clean lookup/remainder CSV. Copy the current worksheet. Fix conflicting source data in the original JSON, then rerun/review; no majority-value replacement or database writes. Audit JSON reimport restores originals only, deliberately requiring fresh AI/review.

## Real AI boundary, model and license

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. Mean-pooled normalized 384-dimensional neural embeddings materially reconcile rough descriptions against the supplied schema. Deterministic cosine ranking proposes the top candidate and shows alternatives; similarity is not confidence. All vector counts, dimensions, finiteness and normalization are checked. No hard-coded predictions, fake fallbacks, remote inference, shared credentials or paid services.

A same-origin immutable worker from `20261115-6` processes four texts per chunk. The model tokenizer `model_max_length` is 512, independently checked; the pipeline's `max_length` option is not relied on as an enforced cap. Maximum input is 16 short description texts. Runtime/worker/WASM dependency hashes are recorded in `runtime-dependency-audit.json`. Preserve `20261115-6` and the immutable WASM host `20261107-2` in the combined collection. App code and runtime assets are same-origin, not third-party script tags.

After human review, exact case-sensitive string comparison, JSON-encoded composite tuples, conflict/missing-value detection, relational projection and rejoin verification are deterministic. The baseline is the number of hints equal to a literal column ID (case-insensitive), compared with reviewed mapping coverage—not accuracy. Dependent-cell repetition compares `source rows × dependent columns` against `lookup rows × dependent columns`; it excludes key overhead and is neither total file-size reduction nor measured time savings.

## Downloads, privacy, caching and devices

Before explicit run, no model-host traffic. First run needs internet for approximately 23 MB tokenizer/weights from Hugging Face and its download CDN, plus approximately 27 MB same-site WASM CPU runtime and app/worker JavaScript. All content stays in-browser; requests are file GETs, not content uploads. No analytics or optional remote providers. Imports are inert data, not tool instructions; no credentials are requested.

Cache API retains worker source and runtime/model files where available. Fresh workers perform real inference with all network disabled in an already-open warmed page; this scope was tested. **Offline startup/reload is not promised.** Storage eviction/private mode can cause redownload. Cancellation terminates workers, run identities discard late messages and guard delayed source imports/worker fetches. A 180-second timeout, network errors, unsupported runtime, worker failures and malformed model output leave no fabricated results; retry is available.

Requires HTTPS/localhost, WebAssembly SIMD, module workers and several hundred MB free RAM. WASM CPU is the default, not an untested WebGPU fallback. Headless desktop Chrome with GPU disabled was tested. Physical low-memory phones and other browsers are not performance-tested; 320/390 px layouts are simulations.

## Formats and hard limits

Source JSON ≤80,000 characters; import source/audit `.json` ≤8 MB. Other formats rejected. Title ≤200; distinct column IDs ≤50; descriptions/hints ≤200; cells ≤500; reviewer notes ≤2,000 characters. 2–10 columns, 1–60 exact-width string rows, 1–3 hints on each dependency side. Empty cells remain intact and block extraction when part of the reviewed dependency. Spaces/case are not silently normalized.

JSON is the authoritative lossless artifact: originals, reviews, neural evidence and full analysis/tables. Markdown contains the same complete source/review/analysis JSON in a readable worksheet. Audit CSV preserves every original row and status, not review evidence (use JSON for that). Split CSVs use current reviewed fields only after successful rejoin. CSV quotes delimiters/newlines and prefixes formula-like strings (including multiline leading `=+-@`, tab or CR) with an apostrophe. This intentional spreadsheet protection changes those CSV cell strings; raw exact strings remain in JSON. Duplicate rows and source order survive the remainder table; keys remain in both tables for joining. No implicit sorting or destructive deduplication.

## Limitations and observed quality

A dependency holding on one sample does not prove a business rule, future data validity or full third-normal-form design. The user supplies the hypothesis; the model does not discover dependencies or infer missing cell values. Every approved field must be verified. A nearest match is always proposed, even for negated or unrelated hints. Our negation/unknown challenge still selected `vendor`; holding it prevented extraction. Five simple known-answer hints across two fixtures matched, but that tiny synthetic result is not a universal accuracy estimate. Supplier addresses intentionally conflict; only the repaired source enables its split.

## Build, validation and publication

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261122-7/`; required per-app gh-pages scripts retained. Publish only via repository root `predeploy` / `deploy` so the combined site is preserved. See `VALIDATION.md`, executable test scripts and JSON reports. Production bundle—not only dev mode—was exercised. Build success alone is not evidence of AI functionality.

The nearly-full collection requires extending the existing deploy-only byte-identical Manifold sharing rule for older `20261029-8`, preserving source builds and compatibility JS URLs. It shares `20261028-24`'s immutable WASM. Local/public worker/import/export and byte audits verify that preservation change; no STL functionality was added to this utility.
