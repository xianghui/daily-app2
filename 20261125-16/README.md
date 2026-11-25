# Multiplicity Desk — 20261125-16

A local-first analyst workbench for reconciling **repeated occurrences** across two exports. A row can represent a physical copy, scan or queue item; distinct-set operations can silently erase that quantity. Paste/import batches of informal handoffs and exact left/right record lists. Real AI suggests the intended operation; review, change or hold each suggestion, apply, inspect counts/provenance, and export a usable reconciliation worksheet and read-only SQL QA queries. No dispatches or database connections.

## AI versus deterministic work

Normalized mean-pooled MiniLM sentence embeddings compare request context with user-supplied operation descriptions. Cosine ranking proposes combine-all, shared-copies or left-remainder. This materially drives how the two lists reconcile without requiring identical terminology. It does **not** fuzzy-match item values, extract quantities, generate SQL, or execute imported instructions. Descriptions are user-editable in source JSON; final choices require human approval. Similarity is not confidence.

Occurrence pairing, exact string equality, count conservation, deterministic SQL encoding and exports are not AI. Combine appends all left then right rows. Overlap pairs equal copies in source order, retaining earliest matched left rows. Subtraction cancels earliest left copies against right copies; unmatched left rows remain. Equality is case-sensitive with no trimming/Unicode normalization. Empty values are supported; NULL is not.

Baseline uses the **same reviewed operation**, but distinct sets rather than occurrence counts. Displayed counts are actual snapshot row counts and their difference, not accuracy, time saved or a universal improvement claim. Held requests retain originals but contribute no output or baseline rows. Both-empty lists remain represented in JSON even though CSV has no record rows.

## Workflow and limits

1. Load Dispatch reconciliation or Print queue reconciliation, or import `.json` source/audit.
2. Source shape: `{title, profiles:[{id,description,operation}], requests:[{id,context,left:[{id,value}],right:[{id,value}]}]}`. Operations: `combine`, `overlap`, `subtract`. Edit descriptions to set intent/goals; repeat a row for each copy rather than supplying quantity fields.
3. Explicitly click **Load AI & match reconciliation intent**. No model download occurs before this action. Inspect source lists and semantic rankings.
4. Change operation, approve or hold every request, add multiline notes. Undo keeps up to 50 review snapshots. Source changes cancel running inference and clear old reviews. Review edits invalidate applied exports.
5. Apply reviewed reconciliation; inspect each exact value's left/right/output/distinct counts and ordered source witnesses. Download or copy the current applied snapshot.

Bounds: 2–8 profiles, 1–24 requests, 0–40 records on **each** side (1,920 source rows max), source ≤240,000 characters; imported audit/file ≤1.5 MB. Descriptions/context/title ≤200 UTF-16 characters; record values 0–200; notes 0–500; IDs 1–60 unique ASCII letters/digits/_/-. IDs unique within each side; the same ID can exist on opposite sides and provenance includes side. Reject most controls including NUL, malformed Unicode, extra fields, nonstring values and unsupported operations. Text content is rendered as text, never HTML or tool authority. JSON reimport restores originals only, deliberately starting fresh review, not trusting saved approvals.

## Artifacts

- **JSON**: originals, reviewed decisions/rankings/notes, every source record, ordered output witnesses, per-value counts, baseline and metrics.
- **CSV**: every original source record, including holds, with current review/note and 1-based output index (blank when not emitted). All cells quoted, quotes doubled, CRLF records; spreadsheet-like strings beginning `= + - @ TAB CR` get an apostrophe. JSON retains unmodified originals.
- **Markdown / copy**: current reviewed worksheet including every approved output occurrence; held originals remain in JSON/CSV. Not rendered as HTML inside app.
- **SQL**: standalone read-only SQLite 3.25+ CTE queries using ROW_NUMBER partitioned by side/value with BINARY collation and one-to-one occurrence pairing. SQL strings are quoted, no writes or connections. Tested independently with Python SQLite. No assumption that SQLite supports INTERSECT ALL or EXCEPT ALL. Other dialects remain unverified.

## Real model / runtime / privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, 384-dimensional embeddings. English-oriented semantic retrieval, not an instruction-following model.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM **CPU**. No WebGPU required, server, API key, remote inference integration, mandatory paid service or agent credentials.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating apps. `runtime-provenance.json` records verified bytes/hashes. Shared worker text/vector protocol was inspected.
- Initial internet download approximately **50 MB**: ~23 MB model plus ~27 MB WASM and small tokenizer/runtime JS. Model files download from Hugging Face/CDN hosts; same-origin runtime downloads from this collection. User content remains in page/worker memory; no content uploads or URL parameters. Network audit captures GET-only file downloads and persists no signed query values.
- Four texts per inference chunk, up to 32 texts/eight chunks. Only descriptions/context go through the model; source row values never need embeddings. Each is bounded to 200 characters, below the tokenizer's 512-token context for these inputs. Shared pipeline passes truncation/max_length 256, but this is **not** a claim that its tokenizer independently enforces 256 tokens.
- Current desktop Chrome with module workers, WebAssembly SIMD and Cache API recommended. Real CPU inference tested with GPU disabled. Phone **layout emulation**, not real phone hardware, is tested. Other devices/browsers unverified; small-memory devices may fail. Use desktop Chrome and retry on runtime errors.
- Worker source, factory and WASM explicitly Cache-API-cached; model files use Transformers.js browser cache. After warming, **fresh-worker inference offline in the same open page** is tested. Offline reload/navigation/app-shell startup is **not promised**. Eviction, private mode or disabled caching can require redownload. Clear browser site data to clear caches; input survives only in page memory/downloaded artifacts.
- Visible download/chunk progress, cancel (worker termination and pending-fetch abort), retry and 180-second timeout. IDs suppress stale callbacks and late file reads. Finite normalized vector counts/dimensions are validated before ranking. Worker/network/malformed output/unsupported runtime failures produce visible errors, never fabricated answers.

## Validation and limitations

See `VALIDATION.md` and reports for observed tests. Small known-answer examples do not establish general accuracy. An initial combine paraphrase was misclassified as subtraction (`quality-probe.json`); this limitation is retained and the starter wording was clarified. Ambiguity/negation can confuse MiniLM; review every profile. Item identity must be exact; normalize or reconcile aliases upstream if needed, explicitly reviewing changes. SQL fixtures are bounded test datasets, not a production query performance guarantee. The app does not confirm physical inventory or complete remote transactions.

## Build and publication

React + Vite. `npm install`; `npm run predeploy` (build). Base `/daily-app2/20261125-16/`. Required per-app `deploy: gh-pages -d dist` is present but **do not invoke it** for the collection. Publish through repository-root predeploy/deploy; preserve root gallery, older apps, immutable runtime paths and 1 GB size guard. No builder digest.
