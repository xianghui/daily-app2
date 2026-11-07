# Form Pruner

A questionnaire redundancy review workbench for research coordinators. Paste/import questions, compare their semantic meaning, review a shorter form, and export the usable questionnaire plus a complete reversible audit.

## Workflow

1. Start with Event feedback or Workplace pulse (synthetic only), or import UTF-8 CSV.
2. Supply the exact header `id,question,response,seconds,protected`. Quote commas/newlines. `response` is `text`, `scale` or `choice`; `protected` is `true` or `false`. Seconds are user-entered estimates, not measured completion times.
3. Set cosine threshold 0.50–0.95 (default 0.75) and advisory target duration 1–14400 seconds.
4. Explicitly click **Load AI & audit questions**. Observe download/batch progress, cancel or retry if necessary.
5. Inspect source text and nearest-question cosine scores. Keep or remove a question, select a retained same-response-type replacement, edit wording and add researcher notes. Protected questions cannot be removed. Every question must be individually reviewed. Reject all removals or undo edits at any time.
6. Apply the reviewed questionnaire. Download JSON (originals, all rows, scores and form), CSV (every original and reviewed decision), or Markdown (retained questionnaire); copy JSON. Any review edit invalidates downloads. Original CSV is preserved inside JSON; an audit CSV is not the import schema. CSV prefixes formula-like text with an apostrophe for spreadsheet safety; JSON preserves exact original strings.

This utility does not edit remote forms or send surveys. Target duration never forces removal of a unique item. If another retained question is changed to removed, references to it become invalid and applying is blocked until fixed.

## Real AI, not keyword matching

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; derived from sentence-transformers/all-MiniLM-L6-v2.
- Transformers.js **4.3.2**, ONNX Runtime Web **1.30.0**, WASM CPU in a bundled Web Worker. WebGPU is neither required nor used.
- AI produces normalized 384-dimensional sentence embeddings. Finite dimensions, count and unit norms are validated. Input is bounded at 256 tokens per question and inference batches of four.
- Deterministic steps: cosine matrix, protected-first greedy retention, same-response-type guard, reference validation and duration sums. A removable question must directly match an already-retained question above the threshold; transitive similarity does not suffice. Order matters within protected/non-protected groups. Similarity is not confidence, equivalence or an accuracy percentage. Model output is vectors, not executable instructions or tool requests.
- Baseline is the original unpruned form. The UI computes original/retained question counts and sums of supplied seconds. These are estimates, not measured savings or a guarantee of respondent burden. The target is advisory; greedy pruning is not globally optimized.

## Downloads, devices and privacy

First use needs internet and approximately **23 MB model/tokenizer assets + 27 MB WASM runtime**, plus under 1 MB app/worker/factory code. Hosts: huggingface.co and its model CDN redirect domains; runtime assets are same-origin. No network model downloads occur before explicit loading. Current desktop Chrome/Edge with Web Workers, WebAssembly, Cache API and adequate memory is recommended. CPU-only inference was tested in desktop Chrome; real phones, Safari and Firefox performance have not been certified. Phone layout is tested at 390/320 CSS pixels.

Default content stays local in memory/worker. There are no credentials, remote-inference integrations, analytics or content uploads. Only public model/config/tokenizer file GET/HEAD requests leave the origin. No input content is placed in request URLs/bodies. Asset caches persist, not questionnaire text. Close/reload discards unsaved work; export first.

Model, worker source, WASM factory and WASM binary use Cache API. After a successful online run, a fresh terminated/recreated worker can infer with all networking disabled **in the same already-open page**; this was actually tested. Offline app-shell navigation/reload is **not promised**. Cache eviction, storage restrictions or clear-site-data require redownload. Cancel terminates the worker; partial caches may remain. A 180-second timeout gives actionable retry errors, not fake suggestions.

The identical immutable 26,861,777-byte WASM is shared with `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve that older app during combined deployment. The matching factory is bundled under `public/runtime/` and worker code under this app's assets. No external executable CDN imports.

## Limits and judgment

2–24 questions; CSV ≤16 KB; IDs ≤50 characters; question ≤300 characters; seconds integer 1–600. English short questions only. Protected flags and original inputs remain immutable. Notes ≤500 characters. Unknown formats, duplicate IDs, malformed CSV, missing fields, invalid numbers, empty/oversized data and malformed AI vectors are rejected. Workers are terminated and run IDs/file-read tokens prevent stale results from replacing new input.

False positives/negatives are expected, especially negation, different periods, answer choices, reverse-coded questions and multi-construct items. Answer options are not modeled. Do not prune validated scales outside their design protocol. Editable wording does not recompute embeddings; scores remain explicitly tied to original source text. Rerun revised CSV for changed meanings. Protection prevents removal, not intentional wording edits. Exported Markdown is plain questionnaire text, not an interactive survey.

## Validation and publishing

`npm run predeploy` builds with base `/daily-app2/20261107-17/`. Per-app `deploy` remains `gh-pages -d dist` for contract compatibility, **but publish only through root combined-site workflow**, never this command. See `VALIDATION.md`, `browser-validation.json`, `core-validation.txt`, export parse and asset/deployment reports for observations.

Reproduce: `npm install`; `npm run predeploy`; `python3 serve-test.py` (port 6197); `node browser-test.cjs` (local workspace Playwright/Chrome installation); `node core-check.mjs`; `python3 export-roundtrip.py`; `python3 audit-assets.py`. Browser tests use real model inference for successful flows; fault injection only tests error guards. Public verification sets `TEST_URL` to the Pages app URL and reruns that same suite. Public output evidence is retained separately.
