# Reply Shelf

A static React + Vite support-workflow utility: paste/import a batch of questions and an approved-answer shelf, run local semantic matching, inspect sources, edit/reject replies, undo review changes, apply a reply sheet, then download JSON/CSV or copy JSON. No sending, accounts or remote actions.

## Real AI and deterministic work

- **Model:** [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), ONNX q8 / `model_quantized.onnx`, Apache-2.0; derived from [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Model repo revision observed during validation: `751bff37182d3f1213fa05d7196b954e230abad9`. Downloads use the model repo's default revision, so a future host update can change results.
- **Runtime:** Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT), from the locked npm dependency graph. Browser code, worker, WASM factory and binary are bundled/served on this site's origin; no runtime CDN dependency. See public license notices. Model is downloaded, not redistributed here.
- AI produces mean-pooled, normalized **384-dimensional semantic embeddings** of each incoming question and each approved question. The actual learned neural representation, rather than regex or canned responses, drives matching of paraphrases.
- Deterministic steps: vector schema/normalization validation, cosine ranking, cutoff, top-three alternatives, lexical baseline, preserving every incoming record, applying review edits, and serialization. Answers are retrieved verbatim from your shelf and edited by you, never generated.
- Baseline uses maximum word-set Jaccard overlap. The displayed count of different choices is **not an accuracy/improvement claim**. Runtime is measured with performance.now and includes loading/download. Similarities are not probabilities/confidence.

## Use and limits

1. Questions: UTF-8 `.txt`, one per line, 1–24 nonblank lines; ≤600 characters/line and ≤16,000 total. Blank lines are ignored, repeated questions retained.
2. Shelf: UTF-8 `.json` array, 1–16 records, ≤24,000 total characters. Records contain unique nonempty `id` (≤60), `question` (≤600), `answer` (≤1,200). Extra fields are ignored. Synthetic examples show the format.
3. Select cosine cutoff (default 0.42), then explicitly **Load & match with AI**. Question + shelf vectors run in batches of four with progress. Maximum 40 texts; maximum model sequence 256 tokens, possibly truncated. English short single-intent questions are the intended input.
4. Inspect original sources and top-three scores. Change source (clears approval), edit the draft, check/uncheck approval, or undo up to 30 review changes. Preserve your original source files; edits do not overwrite them. Editing inputs clears previous recommendations and applied output.
5. Apply reviewed replies. Unapproved questions remain `needs-human` with blank output answers. Approved empty drafts are blocked. Editing a review invalidates applied exports until reapplied.
6. Export **JSON** (`reply-shelf-v1`: all records, source IDs, suggestions, similarity and approved shelf), **CSV** (all records, escaped multiline/quoted cells), or clipboard JSON. JSON is recommended as the lossless archive; exported reply sheets are outputs, not shelf-import format. No formula evaluation occurs in this app; open untrusted CSV fields as text in spreadsheet software.

## Download, devices, cache and privacy

Initial download: roughly **23 MB model** plus **26.9 MB WASM** and approximately 1 MB JS/tokenizer/config data (wire transfer may be compressed). Internet/model-host access is required initially. Model/config files download from huggingface.co and its public CDN (observed us.aws.cdn.hf.co). All user strings remain in the local worker; no inference requests, keys, analytics, uploads or remote providers exist. Content is held only in React/worker memory; it is not saved to localStorage or cache. Explicit exports/clipboard are user actions.

Requires a modern browser with ES module workers, WebAssembly and enough memory (~300 MB free recommended, not a guaranteed peak). Uses **single-threaded CPU WASM**, so no WebGPU, cross-origin isolation headers or GPU are required. Desktop Chrome tested; phone-width layouts are emulated, not physical-device certification. Safari/Firefox/low-memory phones have not been inference-tested. If workers/WASM/memory fail, use current desktop Chrome/Edge, close heavy tabs and retry. Never substitutes fake answers.

Transformers.js Cache API stores model/config/WASM when available; the app explicitly caches the local WASM factory. Browser policies, quota, private mode and eviction can prevent caching. Inference with the loaded worker retained while the page is open was tested with the browser offline. Idle input edits and reruns retain this worker; active cancellation terminates it. **Offline page reopening is not supported**: no service worker caches the whole app. Keep the page open and loaded; if cancelled worker recreation cannot use browser-cached application code, reconnect before retry. Cancellation terminates the worker and blocks old run IDs; changing inputs invalidates results. A 180-second timeout provides a retryable error. Download progress is per file (not a fabricated overall percentage).

Imported text is only passed as embedding input. It cannot issue instructions, change app authority or request credentials. Nothing is sent even if input says to do so. Avoid real sensitive data on shared devices and remember clipboard/export files persist outside the tab.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), executable `browser-test.cjs`, `phone-test.cjs`, `core-test.mjs`, and JSON evidence. Build success is not the AI test: real production worker/WASM inference was executed for both different synthetic batches, all 24 batch rows, offline loaded-worker inference and retry. Error-only injection tests are explicitly separate from real inference tests.

This small model can misread negation, multilingual text, policy details and closely related intents. It does not verify facts, detect all unsupported topics, or guarantee the threshold is calibrated. Five known-answer paraphrases and one out-of-domain case are a tiny smoke fixture, not an accuracy benchmark. Human approval is essential. No general-purpose text generation, multi-document RAG, attachments beyond text/JSON, automatic sending or provider integration.

## Development / deployment

`npm install`; `npm run dev`. `npm run predeploy` builds with Vite base `/daily-app2/20261106-12/`. Individual scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish the collection only through the root workflow**, not this per-app deploy command. Runtime assets are emitted under assets/ and runtime/. `browser-test.cjs` uses the collection's existing Playwright installation and local production server at 127.0.0.1:6122; `TEST_URL` can point at the actual public app. No agent/model-provider credentials are used.
