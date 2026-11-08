# Repeat Radar

A local-AI automation-opportunity planner for operations leads reviewing a weekly task diary. Paraphrased entries hide repeated work; MiniLM embeds task descriptions, then complete-link grouping consolidates related entries. People verify/split/merge groups before a deterministic budget optimizer creates a shortlist. This differs from a generic classifier: the deliverable is a setup-budget-constrained automation backlog with editable payback assumptions and a complete task audit. No automation is executed.

## Workflow

1. Load Finance week / People operations (synthetic), paste JSON or import a JSON file. The editor includes the full schema: `records:[{id,text,minutes,weekly}]`, `budget` (setup minutes), `horizon` (weeks), `threshold` (cosine).
2. Explicitly choose **Load AI & find repeats**. Inspect loading/download progress. Cancel terminates the worker; retry starts a fresh worker. Input edits invalidate previous results.
3. Inspect every source description and suggested group. Group IDs/names can be edited to merge/split. Confirm each row or hold it. Undo restores the preceding review/assumption snapshot. Confirm-all is a user attestation after review, not AI validation.
4. Set each group's setup minutes and estimated reduction percentage. Defaults (60 minutes/50%) are conspicuous assumptions, NOT predictions.
5. Apply the reviewed shortlist. Exact 0/1 integer-minute-budget dynamic programming maximizes sum of `(weekly minutes × reduction × horizon) − setup`, excluding nonpositive opportunities. A group is indivisible. Baseline takes positive-net groups in first occurrence order until the same budget is exhausted. Both use identical reviewed data. Estimates do not measure actual savings or prove feasibility.
6. Download JSON, CSV, Markdown or copy Markdown. Editing any review/assumption invalidates the applied snapshot and disables export until reapplied. JSON reimports the original diary from its `input` field; review decisions must deliberately be made again.

## Real AI, model and privacy

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Quantized q8 feature extraction, mean pooling, normalized 384-dimensional vectors.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Runtime and worker code bundled locally. Model files downloaded from Hugging Face and its CDN only after the load button. No external inference provider or API keys.
- First load ~23 MB model weights plus tokenizer/config and ~27 MB runtime; internet required. Browser Cache API stores download assets, NOT task text. No analytics, no uploads, no remote tool authority. Imported credential requests/instructions remain ordinary data.
- Immutable identical WASM reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` to avoid duplicating 26,861,777 deployed bytes. Root deployment must retain that earlier app. App-local `public/runtime/` holds the factory. Vite rewrites the shared binary URL.
- After successful online inference, fresh-worker inference on the **already open page** is tested with network disabled, using explicit cached worker/runtime and Transformers model cache. Offline reload/app-shell startup is NOT promised; browser eviction/private mode may require a new online download. Cache clearing is available in browser site-data controls.
- Model repository uses its upstream default revision, not an immutable pin; future upstream changes can alter output. The deployed runtime is lockfile-pinned.

## Devices, bounds and limitations

Current WebAssembly-enabled desktop Chrome/Edge/Firefox/Safari expected; tested Chrome on this builder. No WebGPU needed. CPU is the default tested inference path, not an untested GPU fallback. Phone layout tested at 320/390 CSS px; actual mobile inference and non-Chrome engines untested. Keep the tab open during processing.

1–24 records, each 1–500 characters; source JSON <=50,000 characters, imported file <=50 KB. IDs unique, <=60 characters. Per-task minutes (0,1440]; weekly repetitions integers 1–100. Setup budget integers 1–4800, horizon integers 1–52, threshold 0.3–0.95. English model; context truncated at 256 tokens. Textual similarity is neither process identity nor automatable feasibility. Descriptions may undergroup or conflate tasks; every group requires human confirmation. Complete-link grouping is input-order-sensitive, bounded and deterministic after inference. Similarity values are cosine scores, never confidence percentages.

Budget optimization assumes independent groups and additive time estimates, not shared infrastructure, dependencies, time-value of money or implementation risk. Repetitions must not double-count the same real-world occurrences: correct the diary first. Held tasks remain in all audit artifacts and are excluded from allocation. Downstream automation implementation/security review is outside scope.

Malformed AI vectors (count, dimension, finite values), bad schema, worker errors, downloads, unsupported runtime and 180-second timeout fail visibly with no fake fallback. Cancel/edits advance a run token and terminate workers; async file reads/fetches and late results are guarded. JSON is lossless; CSV quotes multiline text and prefixes spreadsheet-formula-like strings with an apostrophe, so CSV is safe for spreadsheet viewing rather than a byte-lossless archive. Markdown includes JSON-escaped source rows and is plain text, not rendered HTML.

## Build / publish

`npm install`, `npm run predeploy`. Base `/daily-app2/20261108-13/`. Required per-app deploy script is retained but **publish only through the root combined workflow**, never this app's deploy script. Run the root `npm run predeploy`, then root `npm run deploy`. No backend needed.

## Validation

See [VALIDATION.md](VALIDATION.md), machine-readable reports, browser tests and independent Python artifact parsing. `node core-test.mjs` compares the optimizer with exhaustive subset enumeration. `python3 serve-test.py` serves the production bundle with its real deployment prefix and shared binary; `node browser-test.cjs` runs real browser inference and defensive tests. Synthetic files only.
