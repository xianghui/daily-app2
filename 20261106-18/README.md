# Course Compass

A browser-local learning catalog planner for learners and training coordinators. Paste goals and a catalog, set available hours and a relevance floor, run AI, review courses, adjust hours or notes, reject choices or undo edits, apply the reviewed plan, then download JSON/CSV/Markdown or copy Markdown. No enrollment, purchasing, sending, backend or external actions.

## Real AI and deterministic planning

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 encoder, mean pooling, normalized 384-dimensional embeddings.
- Runtime: `@huggingface/transformers` (Apache-2.0) and ONNX Runtime Web (MIT); dedicated module worker, CPU/WASM, one thread. No WebGPU required and no remote provider integration.
- AI embeds every goal and course title + description; cosine similarity measures semantic relevance. No generated text or hardcoded responses. Scores are not confidence percentages.
- Deterministic exact subset search maximizes the sum of the best selected relevance per goal, counting a goal only above the selected floor. Selected hours must fit the budget. Ties prefer fewer hours. With no adequate match the plan can be empty. Re-optimize uses edited hours and the existing AI embeddings.
- The baseline greedily takes courses in catalog order while they fit. Both coverage counters use the same AI scores/floor. This is a relevance proxy, not measured learning, accuracy or time savings. Optimizing summed relevance does not guarantee maximizing the number of covered goals.

## Inputs, outputs, limits

Goals: 1–6 lines, ≤240 characters each. Catalog: 1–20 lines in `Title | whole hours | description` form, titles ≤80 characters, descriptions ≤400, duration 1–80. Budget 1–80 whole hours. Optional UTF-8 `.txt` imports ≤20 KB. Pipes inside fields are unsupported. Synthetic samples only. Inference batches four texts; model input capped at 256 tokens per text. Up to 26 total texts. English is best; the model cannot verify skill level, prerequisites, teaching quality or course availability.

Original input stays in the input form; reviewed output is separate. Every catalog record remains in JSON and CSV even when not planned. JSON contains goals, scores, model, constraints, review notes and metrics. CSV preserves each catalog row including selection and notes, using quoted fields/CRLF with proper double-quote escaping. Markdown is a usable checklist. The current review must be applied to unlock export; further edits hide stale artifacts. Over-budget or invalid durations cannot be applied. Undo retains up to 40 recent edits (re-optimizations may add history entries). Page reload discards input and reviews; download before leaving. Spreadsheet applications may interpret user-supplied formula-like cell text; JSON preserves text without spreadsheet evaluation.

## Download, privacy and offline

Before running, UI discloses approximately 23 MB model weights plus approximately 27 MB uncompressed WASM/runtime (WASM alone 26,861,770 bytes; transfer compression varies), tokenizer/config metadata and app code. Internet is required for first load. Bundled JS, worker, WASM and the factory module are served from this app's own Pages path. Model/tokenizer downloads use huggingface.co and its hf.co CDN. No credentials, analytics, remote inference or API key. Text is passed to a local worker only; observed external requests are GET/HEAD model downloads without content bodies.

Browser Cache API caches model/runtime downloads; worker code, the WASM binary and module factory are explicitly cached and loaded through blob URLs to avoid relying only on the HTTP cache. Once cached, fresh model workers can process data offline in an already-open app tab (tested). Offline navigation or page reload is **not** promised: no service worker or offline app shell. Cache availability depends on storage policy/quota; clear site data to remove it. Use modern Chrome/Edge/Firefox/Safari with WASM, module workers and Cache API. Chrome desktop was actually tested; mobile layouts were emulated, not physical phone performance. Mobile RAM and speed vary.

## Failure handling

A 180-second timeout, worker termination on cancel or input changes, run-id stale-result guard, bounded batches, finite normalized 384-dimensional vector schema checks, invalid input messages and retry controls prevent silent fake results. Cancel may preserve already-cached download files. Unsupported workers/WASM, worker creation failure, network/model failures and malformed output produce actionable errors without a heuristic substitute. Model output is numeric data, and input text never acquires tool authority.

## Develop and deploy

`npm install`, `npm run dev`, `npm run predeploy`. Vite base: `/daily-app2/20261106-18/`. Per-app `deploy` is retained by contract but **publish via the collection root**, not by deploying this app alone. Root `npm run predeploy` assembles the combined collection; root `npm run deploy` publishes it.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable browser reports. `node core-test.mjs` checks schema/input handling and 96 independent exhaustive budget cases. `python3 serve-test.py` serves the production bundle; `node browser-test.cjs` drives real Chrome with Playwright (the local Playwright path is in the test file). Set `TEST_URL` and `REPORT` for public-site validation.
