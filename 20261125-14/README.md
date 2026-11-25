# Peerframe Desk

Local-AI window-frame review for data analysts preparing running-total reports. The bottleneck is ambiguous handoffs: “after each entry” and “through that day” produce different answers when ordering keys tie. Real MiniLM inference ranks user-supplied frame profiles from their semantic descriptions. A human checks each proposed link. Deterministic partition sums then expose row-by-row versus whole-peer-group differences and export usable, read-only SQL QA fixtures. No database connection exists.

## Workflow

Load **Shop close** or **Lab timeline**, paste JSON, or import source/audit JSON. Read the first-download notice, explicitly **Load AI & match frame intent**, inspect source records, candidate cosine similarities and profile descriptions. Edit a link, approve or hold each request, add multiline reviewer notes; undo retains the last 50 review edits. **Apply reviewed fixtures** creates the in-app proof sheet. Any review edit invalidates the export snapshot until reapplied. Download JSON/CSV/Markdown/SQL or copy the worksheet. Audits reimport originals only: AI and human review must run again.

## Real AI and dependencies

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8, normalized mean-pooled 384-dimensional sentence embeddings. Approximately 23 MB model/tokenizer/config files.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread. Runtime download approximately 27 MB. No GPU, server, credentials, paid service, optional remote provider or agent keys.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps and URLs. `runtime-provenance.json` records exact hashes; `asset-test.py` verifies them locally/publicly. New application assets are bundled locally with React/Vite.
- Model text includes only profile descriptions and request context (each at most 200 characters); numeric records are never supplied to the model. Four texts per inference chunk, maximum 32 texts/eight chunks. The model tokenizer enforces its 512-token maximum; the shared pipeline's max_length=256 option is not relied on for a stricter limit.
- Every returned vector must be finite, dimension 384, normalized within tolerance, and have the exact requested count. Cosine similarity ranks profiles. It is neither confidence nor proof of intent, entailment, arithmetic correctness or SQL correctness. Negation and close requirements can mislead this English-oriented model; mandatory review is essential.

## Device, privacy and caching

First use requires internet and roughly 50 MB downloads. Current desktop Chrome with module workers and WebAssembly SIMD is tested, GPU disabled. CPU mode requires no WebGPU; insufficient memory or unsupported WASM produces visible failure with an actionable retry/browser instruction. Actual phones, Firefox, Safari and assistive technologies are not verified.

User text runs only inside a local worker. No content upload, telemetry, API integration or automatic persistence. Requests are GET-only asset downloads from same origin and Hugging Face/file-delivery hosts. Imported strings are data, never instructions or executable HTML. No real personal datasets or credentials are shipped. Exports may contain your supplied information; nothing is sent automatically.

Worker source, WASM factory/binary and model files use Cache API. After one successful online run, fresh-worker inference in the **same open page** is tested with all networking disabled. Offline reload/app-shell startup is **not promised**. Browser eviction/private mode/storage denial can require redownloads. Progress shows actual download files and four-text chunks. Cancel terminates the worker and aborts pending worker fetch. IDs guard asynchronous imports/fetches/messages against newer input; errors, malformed output and 180-second timeouts never become fake results. Retry explicitly runs real AI again.

## Input schema and bounds

JSON `{title, profiles, requests}`. Title 1–200 characters. Source at most 240,000 characters; `.json` files/audit envelopes at most 1.5 MB. Unknown fields, empty required text, control codes, lone surrogates, duplicate IDs, non-integer values and out-of-range arrays are rejected.

- 2–8 profiles: `{id, description, mode}`. Mode `rows` or `peers`; description 1–200 characters. Supply honest intent anchors, not just mode labels.
- 1–24 requests: `{id, context, records}`. Context 1–200 characters, 1–40 records each (at most 960 records).
- Record: `{id, partition, key, value}`. Key and value signed integers between -1,000,000 and +1,000,000; no floating-point currency, NULLs or missing values. Partition exact text 1–80 characters. Every ID uses 1–60 ASCII letters/digits/underscore/hyphen and is unique within its containing list. Reviewer notes 0–500 characters, including line breaks.

Full examples are available directly in `src/core.js` and the UI. Batch size bounds allow all sums to remain safe integers. Audit-envelope imports enforce the same stricter original-source bounds.

## Deterministic contract

Always ascending numeric key. **Rows:** partition by exact string, order key then ASCII record ID, sum all preceding rows and the current row. **Peers:** partition by exact string; each row sums every record with key less than or equal to its key. This is SQL `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, not numeric-offset ranges. The ID tie-break is deliberately omitted from the peer window; output display still sorts by key/ID. Partition display order is JS string order; queries use SQLite BINARY ordering (non-BMP partition ordering may differ; per-record totals do not). Fixtures are immutable snapshots, not concurrent/live data.

Baseline always uses rows-only accumulation on the same reviewed request. Metric counts approved **row totals** differing from that baseline (repeated requests count again). It is a correctness witness, not accuracy, measured speedup or estimated labor savings. Held requests retain all source records in JSON/CSV, but are excluded from approved-only SQL. Every approved request retains exactly its original records, values, partitions and keys.

## Outputs

- JSON `peerframe-desk/v1`: originals, all reviews/candidate scores, all approved/held cases, exact totals and computed metrics. Lossless canonical audit.
- CSV: one row per source record, including held records, editable notes, reviewed totals and rows-only baseline. Commas/quotes/newlines escaped. Formula-like strings beginning `= + - @ TAB CR` are apostrophe-prefixed, including multiline strings. Signed numeric values stay numeric; JSON preserves exact strings.
- Markdown: human proof sheet, source context, review notes and totals; user text is not rendered as HTML in-app. Sanitize imported Markdown before displaying it in another system.
- SQL: read-only SQLite-compatible `WITH ... VALUES ... SELECT SUM(...) OVER ...` per approved request, with safely single-quoted literals. Compare returned rows/totals with JSON. No DDL, DML, endpoint calls or credentials. Another engine's collation, numeric/NULL semantics and production report are not certified.

## Validation and limitations

See `VALIDATION.md` and machine-readable reports for observed outcomes. Tests include real Chrome production-bundle inference on two materially different synthetic sets, manual known answers, SQLite's independent window-function implementation, maximum batch conservation, export parsing, review/undo/cancel/stale-run and defensive fault injection, privacy requests and cache scope. Build alone does not prove AI behavior. Semantic inference cannot establish that a handoff is correct or complete; a profile is only a proposal.

## Build and publishing

`npm install`; `npm run predeploy` builds the app under base `/daily-app2/20261125-14/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages dependency. **Publish only from repository ROOT** using its combined `npm run predeploy` / `npm run deploy`, never the individual app deploy. Existing collection apps and immutable runtime dependencies must remain intact.
