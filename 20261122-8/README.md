# Melt Atelier

A local-AI wide-to-long spreadsheet workroom for data stewards. Repeated-wave sheets often hide two meanings inside inconsistent column descriptions. MiniLM proposes each measurement column's joint **wave / measure** slot; a human confirms it before a reversible tidy-table reshape.

## Workflow

1. Paste/import source JSON. Supply 2–3 waves and 2–3 measures, descriptive measurement columns, 1–3 explicit identifier columns and 1–60 string-cell row arrays. Exactly one measurement column per wave × measure is required. Two synthetic examples cover workshop before/after scores and greenhouse sunrise/sunset measurements.
2. Explicitly click **Load AI & reconcile**. Local neural embeddings compare column descriptions with all supplied joint wave/measure descriptions; top cosine matches and alternatives appear for review. Data cells are not sent even to the neural worker.
3. Correct slots, add multiline notes, approve or hold every column. No auto-approval. Slot changes reset approval. Undo restores the previous review state. Source or review edits invalidate all applied exports.
4. Apply the reviewed reshape. Holds withhold tidy output. Duplicate slot assignments and unfilled slots block it with source-column witnesses. Nothing overwrites another measurement.
5. A complete mapping emits one row per original row × wave with explicit identifiers and one field per measure. A 1-based original row ordinal prevents duplicate identifier values or duplicate records from collapsing. Every blank string, original spelling and source order is retained. The app reconstructs the complete wide sheet and compares it cell-for-cell before enabling tidy export.
6. Export lossless **Tidy JSON**, spreadsheet-protected **Tidy CSV**, or complete audit **JSON / CSV / Markdown**. Copy the current worksheet. Audit JSON reimport restores original inputs only, requiring renewed AI/review; the bare tidy table is an output, not a source format. No remote table, file or account is modified.

## What AI does (and does not)

Real [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Transformers.js 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. Mean-pooled normalized 384-dimensional embeddings reconcile semantic descriptions beyond exact header spelling. Vector count, dimension, finite values and normalization are validated. Cosine ranking proposes a nearest slot; similarity is **not confidence**. No hard-coded model answers, fake deterministic fallback or external provider path.

After review, complete bijection checks, string-preserving reshaping and exact reconstruction are deterministic. It does not infer identifiers, fill missing data, aggregate duplicates, convert units, validate measurement comparability, or infer real experimental time order. Input wave order controls output wave order. A nearest slot is proposed even when the description is irrelevant or negated: review is essential, especially with abbreviations or subtle temporal wording.

The baseline is the count of measurement column IDs exactly equal to `waveID_measureID`, compared with approved mapping coverage. It is not accuracy, a performance benchmark or measured time saved. The concrete consistency improvement is preventing slot overwrites/missing assignments and proving no cell loss before release. Row and measurement counts and blank counts are calculated from current input and review, never canned metrics.

## Runtime, first download and privacy

Before explicit run, no model-host traffic. Initially requires internet for approximately **23 MB** of tokenizer/weights from Hugging Face and its CDN, approximately **27 MB** same-origin CPU WASM, plus app/worker JavaScript. All user content stays on-device. The browser makes file GET requests; it does not upload input to the model host. No keys, paid services, analytics or agent-provider integration. Synthetic fixtures only. Imported strings are inert data, not instructions or authority.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. WASM CPU is the tested default; WebGPU is unnecessary. Desktop headless Chrome with GPU disabled was tested. Physical phones, low-memory devices and other browsers are not performance-tested. Narrow layouts are simulated at 390 and 320 pixels.

The app explicitly Cache-API caches its shared same-origin worker source. That worker caches its WASM module factory/binary; Transformers.js caches model files. **Fresh workers can perform real inference offline within an already-open warmed page**, tested with all network disabled. Offline app startup/reload is **not promised**. Private mode, storage limits/eviction and changed upstream model files may require downloads. There is no service worker/app-shell offline contract.

Immutable shared dependencies: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/paths in the combined site. Hashes and sizes are in `runtime-dependency-audit.json`. Four texts per neural chunk, maximum 18 texts in five chunks. Tokenizer `model_max_length` is 512; the worker's feature-extraction `max_length` argument is not relied on as a stricter cap. Descriptions are tightly character-bounded. The upstream model revision is not pinned; deployment checks record actual observed behavior, not a future guarantee.

## Bounds, error behavior and formats

Source JSON ≤80,000 characters. Import source/audit `.json` ≤8 MB, allowing review evidence without shrinking valid original input limits. Title ≤200 characters. Distinct column IDs ≤50; descriptions ≤200. Wave/measure catalog IDs unique within each catalog, ≤50, descriptions ≤160. 2–3 waves, 2–3 measures, 1–3 identifiers, total 5–12 columns, 1–60 row arrays. All rows have exact column width; cells must be strings ≤500 characters. JSON limits apply together; 60 rows of maximum-size cells can exceed the source character cap. Empty strings remain empty, not zero or null.

Downloads/progress and explicit cancellation are visible. Cancellation terminates the worker. Run IDs guard late messages, delayed worker fetches and asynchronous file reads. Network/worker errors, unsupported runtimes, malformed vector output and a 180-second timeout produce actionable errors and no fabricated recommendations; retry is available. No silent remote or fake fallback.

Tidy headers use `source_row`, `id:<identifier>`, `wave`, `value:<measure>` to avoid collisions with user IDs. Audit CSV prefixes original column names with `source:`. All CSV cells are quoted and embedded quotes/newlines escaped; formula-like strings beginning `= + - @`, tab or CR receive an apostrophe, including multiline strings. **That intentional spreadsheet protection changes CSV strings**; JSON preserves exact raw strings. The independent reconstruction guarantee is for raw tidy JSON plus its reviewed mapping/audit—not automatic reverse import of spreadsheet-protected CSV. Complete audit JSON/Markdown preserve every original cell, review, neural evidence and analysis; audit CSV preserves every original wide row and status (not all review evidence).

## Validation and deployment

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261122-8/`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained. Publish only via repository **root** predeploy/deploy; per-app deploy would replace the collection. No new legacy runtime rewriting is needed; existing sharing rules and 1 GB guard are unchanged.

See `VALIDATION.md`, runnable browser/core/artifact checks and generated reports. Build success is not evidence of real AI. The two tiny known-answer fixtures matched all 8 intended slots; that is not a universal accuracy claim. A deliberately negated/unrelated description still proposed before/knowledge, demonstrating that the model does not abstain; a human hold correctly withheld transformation. Actual production bundles, reviewed artifacts, offline fresh workers and failure paths were exercised; public checks are recorded separately after publication. Not tested: physical devices, all browsers, offline navigation, large real-world data or semantic correctness beyond documented synthetic fixtures.


Public release verified: matching Pages commit `6a15eee4ecec2869bb2e1884615f37e370b6fd26` and workflow `44960368096` succeeded. Seven public gallery/app/worker/factory/WASM assets byte-match the assembled site. Both public real-AI fixtures, reviewed exports, maximum batch, offline fresh-worker inference, privacy checks and all 789 gallery cards pass. Combined site: 999,844,975 bytes, below the unchanged 1 GB guard. Source staging preserves unrelated pre-existing recovery changes; no digest sent.
