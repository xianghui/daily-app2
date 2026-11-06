# Agenda Loom

A meeting facilitator's proposal inbox → local AI overlap review → time-budgeted agenda → editable handoff. Every proposal remains either on the agenda or in the parking lot. No invitations or external actions are performed.

## Run / use

`npm install`, `npm run dev`; production: `npm run predeploy`. Vite base is `/daily-app2/20261106-17/`. Per-app deployment scripts are retained, but publish this collection only with the root combined workflow.

Paste or import UTF-8 `.txt`, one proposal per line:

`Title | minutes | priority | description`

Limits: 1–24 proposals, titles ≤80 characters, descriptions ≤400 characters, input ≤20,000 characters/import ≤20 KB, whole minutes 1–120, priority 1–5, meeting budget 5–180. Pipe characters cannot appear inside fields. Blank lines are ignored. Synthetic Product council / Community board examples are included.

Choose the budget and semantic overlap threshold (0.40–0.95), then explicitly click **Load AI & plan agenda**. Review original descriptions, representative similarities, group IDs, inclusion, duration, priority and facilitator notes. Uncheck a suggestion to park it; undo up to 30 edits. To keep two proposals incorrectly grouped by AI, give them different group IDs and re-optimize. Re-optimization can override manual inclusions, so review again. Agenda order is original input order, not a model-generated dependency order. Apply is blocked if over budget or selecting multiple proposals in one reviewed group. All source proposals and original input text survive JSON export. Editing invalidates the applied snapshot.

Download current applied JSON, RFC-style quoted CSV, or Markdown checklist; copy the same Markdown. JSON schema `agenda-loom/v1` contains source, budget, threshold, metrics and all records. Agenda items have sequential relative minute offsets; parked rows have null offsets. CSV preserves all records including descriptions and notes; JSON is the lossless session handoff, not an import format. Open untrusted CSV as text fields in spreadsheets; formula-like imported strings are retained literally. Markdown includes all descriptions, so review untrusted source formatting before sharing.

## Real AI / deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX; Apache-2.0. Underlying model: sentence-transformers/all-MiniLM-L6-v2.
- Runtime: installed `@huggingface/transformers` 4.3.2, ONNX Runtime Web, module worker, single-thread CPU/WASM. No WebGPU and no API key. Runtime JS/WASM ships same-origin in the production bundle; ONNX JS factory is copied to `public/runtime` from the installed version. Re-copy that file when upgrading ONNX.
- Model inference creates normalized 384-dimensional embeddings, batches of four; max 256 tokens per description. Long descriptions can be truncated even below the character limit. English is recommended.
- AI materially changes the feasible agenda by finding paraphrased overlapping proposals. Deterministic cosine similarity compares each proposal to earlier group representatives; threshold is not calibrated confidence. Groups are representative-based, not transitive connected components.
- Deterministic grouped knapsack selects at most one proposal per group to maximize user-supplied priority sum within time. Tie-breaking is deterministic and does not measure importance. It has no dependency model, buffers, mandatory items, deadlines or participant constraints.
- The comparison is the initial same-budget duration-only optimizer without group exclusion. It displays actual minutes, priority sum and repeated-group counts computed on the same inferred groups. It is not an accuracy or productivity improvement claim. Reviewed metrics update independently; baseline remains labeled initial.

## Downloads, privacy and devices

First explicit run needs internet: approximately 23 MB model plus approximately 25 MB WASM/runtime/tokenizer, about 50 MB total uncompressed. Model/tokenizer/config files download from huggingface.co and its CDN. Download progress, encoded-record progress, cancel and a 180-second deadline are displayed. Browser Cache API stores complete model files and a same-origin runtime factory; caching depends on available browser storage. No source data, notes or embeddings are uploaded. No optional remote API path, credentials, analytics, remote fonts or automatic model downloads.

A current browser with module workers and WebAssembly/SIMD and sufficient memory is required; a modern laptop is recommended. Actual production inference tested in desktop Chrome on macOS using CPU/WASM, without WebGPU. Firefox/Safari/Edge and physical phones were not directly tested; compatibility is a requirement, not a guarantee. Missing Worker/WASM and worker/network/runtime failures show actionable errors, never canned results. Cancellation terminates the worker and invalidates the run ID. Input/constraint changes also terminate work; stale messages cannot apply. Retry starts a fresh worker and reuses completed cached files. No partial proposals are published on failure.

After one complete run with browser caching permitted, inference on new proposals works from the already-open page offline, including a fresh worker. Online reload should reuse cached model files. Offline navigation/reopening is NOT supported/claimed; app-shell service-worker caching is not implemented. Clearing browser site storage/cache removes downloaded assets; closing the page discards proposals/results.

## Validation and limitations

See `VALIDATION.md`, `browser-validation.json`, `browser-test.cjs`, `core-test.mjs`. Synthetic fixtures only. Similarity can miss duplicates or merge distinct/negated discussions. Model similarity must never be treated as an authoritative cancellation of a proposal. Group numbers and every selection are human-reviewable; the parking lot is always retained. Priority values are user judgments, not model-generated urgency. Any times shown are computed meeting durations, not measured human time savings.
