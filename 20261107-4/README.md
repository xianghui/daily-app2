# Brief Quarry

A research-operations utility for analysts preparing recurring reading briefs. Paste/import a batch of short passages, ask a research question, set a quotation word budget, run local semantic AI, inspect original sources and edit/reject exact excerpts, then apply and export a source-linked evidence packet. This is extractive selection, not a chatbot or generated summary. No factual verification is performed.

## Run and publish

`npm install`, `npm run dev`; production validation uses `npm run predeploy`. Vite base `/daily-app2/20261107-4/`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but publish only using the parent combined-site root workflow. The build reuses the identical 26,861,777-byte WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`) rather than deploying another copy. Preserve that older app and asset. The runtime factory in public/runtime must match the installed onnxruntime-web version. Dependencies are locked. Root gallery and older apps must remain intact.

## What is actually AI?

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; upstream sentence-transformers/all-MiniLM-L6-v2 is Apache-2.0. Transformers.js (Apache-2.0) and ONNX Runtime Web (MIT) execute neural feature extraction in a Web Worker on WASM CPU (one thread). Mean-pooled normalized 384-dimensional embeddings represent the question and each passage. Four texts per batch, maximum 256 tokens per text. Text can be token-truncated by the model at that limit; original records are always retained in full. English short passages work best.

Deterministic steps: validate finite vector schema; compute cosine similarity; greedy diversity-aware selection by question similarity minus 0.25 times maximum similarity to any already selected passage; omit candidates below 0.35 query similarity; fit whole passages within the remaining word budget. Scores are ranking signals, not calibrated confidence or evidence of truth. Greedy selection is not a globally optimal solution. Duplicate/contradictory excerpts may remain; inspect carefully. The 0.35 cutoff is conservative and was raised after a 0.20 cutoff admitted an irrelevant kitchen notice in the exploratory security fixture (similarity 0.277). The fixtures are development checks, not a held-out benchmark.

## Inputs / limits

CSV exact header `id,source,text`, 1–80 unique passage IDs, every cell nonempty with at most 300 characters. Quoted commas/newlines supported. Paste <=40,000 characters or import .csv <=40,000 bytes. Question 1–300 characters. Budget integer 20–500 whitespace-delimited words. Split long documents manually into meaningful, short passages before import; no unsupported PDF/DOCX ingestion. Synthetic Urban heat and Password safety fixtures included. Imported text is only model data; it cannot request keys, invoke tools or change authority.

## Review and outputs

Every original source row remains in original order. Include/exclude decisions, exact excerpt text and separate analyst notes are editable. Edited excerpts must be contiguous, nonempty substrings of their own original; this guards against invented quotations, not misleading omission. Combined selected words cannot exceed budget. Undo retains up to 30 edits. No external emails or account changes.

Apply creates an immutable-in-UI export snapshot. Any subsequent edit invalidates it until re-applied; input changes discard results. JSON audit preserves exact originals, excluded rows, review fields, question, budget, similarities and computed metrics. CSV ledger includes every source and review decision; leading = + - @ tab/carriage-return text gains an apostrophe for spreadsheet safety. Markdown/clipboard contains only selected verbatim excerpts, labeled sources/IDs and separate notes. Markdown is plain text data, not safe-to-render trusted HTML; sources are user-provided labels, not verified citations.

Baseline takes leading passages that fit the same budget (skips passages too long for remaining space). Both baseline and current review report the arithmetic mean model question similarity; empty selection is zero. Selected-word count, selected/retained passage count and mean similarities are computed, not invented quality/time claims. Similarity comparisons are not independent validation or accuracy measurements. The concrete optimization is a bounded, reviewable selection rather than manual scanning of every passage; no percentage or time-saving claims.

## Download / privacy / offline

No API key, optional provider, server inference, telemetry or shared credential. Documents remain in browser memory and are never uploaded. Model host gets only public-asset GET/HEAD requests; no user text in URLs/bodies. Assets, not content, enter Cache API. No document persistence.

Before the first explicit run, the UI discloses ~23 MB q8 model weights plus tokenizer/config and ~27 MB runtime/WASM. Model assets use huggingface.co and its Hugging Face CDN. App code, worker, WASM factory and WASM are same-origin. Initial internet required. Current Web Workers + WebAssembly SIMD and roughly 300 MB free memory are needed; desktop Chrome tested, Firefox/Safari/mobile performance not certified. No WebGPU needed. Loading progress, Cancel and retry provided; 180-second timeout stops safely with no fake result. Cancellation/input edits terminate workers and run identities prevent late worker responses, downloads or file reads overwriting new state. Invalid vector outputs, unsupported runtime, network failures and worker construction/errors are handled.

The worker, module factory and binary are explicitly cached and rehydrated through blob URLs, while Transformers.js caches model files. Tested offline scope: after one successful inference, a **fresh worker in the already-open page** can run real inference with networking disabled. No offline reopening/reload guarantee; no service worker. Private mode, cache eviction and low storage can require new downloads. Models are referenced by model name rather than immutable revision: upstream drift is possible; rerun fixtures after updates. No mobile runtime guarantees.

## Validation

`node core-test.mjs` checks pure schema, budget and evidence guards (unit vectors only for guard tests, not AI proof). `python3 serve-test.py` serves the actual production bundle at the deployed base; `node browser-test.cjs` runs real model checks and fault-injected failure checks through Playwright/Chrome. `python3 export-roundtrip.py` independently parses the actual downloaded artifacts. Browser reports/logs and VALIDATION.md record observed outcomes, including limits and untested devices. No mock model is used for successful inference, including offline tests.

Public verification passed with the full browser suite on GitHub Pages; worker/runtime/WASM hashes match the built app. See deployment-validation.json and live-browser-validation.json.
