# Catalog Concord

A procurement reconciliation workbench: import a supplier item CSV, paste a canonical SKU catalog, run real semantic AI, review/edit or reject every SKU link, apply the ledger and download CSV or lossless audit JSON. Multiple supplier records may share one SKU; records are never merged. Unmatched items remain in the output.

## Run / deploy

`npm install`, `npm run dev`. Production: `npm run predeploy`. Vite base is `/daily-app2/20261107-1/`. Required per-app scripts include predeploy/build and deploy/gh-pages, but publishing MUST use the parent repository's combined deploy workflow, not per-app deployment. If dependencies are reinstalled, retain `public/runtime/ort-wasm-simd-threaded.asyncify.mjs` from the matching installed onnxruntime-web version.

## Real AI, deterministic guardrails

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. The upstream sentence-transformers model is also Apache-2.0. Transformers.js (Apache-2.0) runs feature extraction in a dedicated local Web Worker, using ONNX Runtime Web (MIT), WASM CPU, one thread, mean pooling, normalized 384-dimensional embeddings. Four descriptions per inference batch; maximum token context 256, descriptions limited to 300 characters. The neural network supplies semantic vectors; cosine ranking, unit filtering, thresholds, schema checks, row conservation and metrics are deterministic. No generated prose, hardcoded responses, remote provider or fallback heuristics.

Supplier `id,description,unit`: 1–40 records. Catalog `sku,description,unit`: 1–30 products. CSV with exact header order; quoted commas/newlines supported; unique IDs per list; nonempty cells of 1–300 characters. Each input <=40,000 characters, imported file <=40,000 bytes. Only supplier CSV file import is offered; paste catalog CSV. Unit equality is trimmed/case-insensitive, not semantic. Explicitly align units before starting; no conversions or inferred pack sizes. A similarity threshold gates initial suggestions, not manual choices. Candidate gaps under 0.05 receive an ambiguity warning. These are not confidence estimates.

The exact-description baseline counts supplier items with a case-insensitive, compatible-unit literal description match. Reviewed-link coverage is computed from current selections; neither metric measures accuracy or time saving. No invented improvements.

## Download / runtime / offline

First explicit run needs approximately 23 MB q8 weights plus 27 MB runtime/WASM and a small tokenizer/config download. Model files download from huggingface.co and its Hugging Face CDN hosts. Worker, runtime module factory, WASM and JS/CSS are bundled on this app's origin; no third-party scripts. Current Web Workers + WebAssembly SIMD browser and roughly 300 MB free memory required. Chrome desktop is tested; Safari/Firefox/mobile performance is not certified. No WebGPU is required. Errors, 180-second timeout and Cancel stop safely; retry reuses available cache. Input changes terminate old workers and invalidate results. Async worker downloads, file reads and messages use a run identity.

Model cache uses Transformers.js Cache API; the app explicitly caches its worker, WASM factory and binary and rehydrates blob URLs. Tested claim: after a successful run, a newly created worker can execute real inference with browser networking disabled **in the already-open page**. Offline reopening/app-shell reload is not promised; there is no service worker. Eviction/private browsing can require another download. Asset caches contain public files only.

## Privacy / review / artifacts

Records stay in browser memory and local model inference. No content uploads, telemetry, credentials, remote inference, persistent user storage, purchases or external actions. Imported descriptions are data and cannot request credentials or change authority. Only asset requests leave the device. Models can confuse product variants; verify material, dimensions, quantities and precise specifications outside this tool. Not an automatic purchase-order or master-data updater.

Select a unit-compatible SKU or reject to Unmatched. Edit review notes; Undo restores up to 30 prior edits. Original source and catalog are preserved. Apply creates the export snapshot; any later edit/input change invalidates it. CSV includes every source row, canonical SKU/description, similarity (not confidence), status and current note. Spreadsheet formula-like text beginning = + - @ tab or carriage return gains a leading apostrophe. Audit JSON keeps exact text and all catalog entries. Copy mirrors downloaded CSV. Export artifacts are reconciled independently with Python's CSV parser.

## Validation

See `VALIDATION.md` and machine-readable browser reports. `node core-test.mjs` checks schema/constraint failures. `node browser-test.cjs` uses installed Playwright/Chrome and production assets; `python3 serve-test.py` serves the built bundle with the deployed base. `python3 export-roundtrip.py` parses actual browser downloads. Success checks use the real model; fault injection is restricted to failure defenses. Synthetic fixtures only; no private data or agent credentials.

Public checks also pass with `node live-test.cjs`; see `deployment-validation.json`, `live-browser-validation.json` and `live-gallery-validation.json`. Browser scripts accept `PLAYWRIGHT_PATH` for a portable Playwright installation.
