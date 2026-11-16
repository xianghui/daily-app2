# Practice Curve

A local-first repeat-work planning utility for workshop leads and small production teams. Match informal time-study descriptions to supplied procedure definitions with real neural embeddings, review the evidence, then estimate the next batch from individual-unit practice curves rather than assuming every repetition takes the last observed time.

## Workflow

1. Choose a synthetic example, paste source JSON, or import a `.json` source/audit file. Set `context`, `nextUnits` (1–100 for each procedure), `items` (`id`, `label`, `description`) and `observations` (`id`, `description`, `unit`, `minutes`). `unit` is the actual cumulative repetition index; `minutes` is that individual unit's time, not a cumulative average or batch total.
2. Explicitly load AI. Download progress and inference batches are visible; Cancel terminates the worker. Input changes invalidate in-flight work and delayed imports.
3. Inspect the top two semantic sources. Correct procedure, sequence and minutes; approve or hold every observation. Numeric/identity edits reset approval. Undo restores prior review state. Originals never change.
4. Apply the reviewed forecast. Holds, duplicate procedure/index pairs and fewer than three observations per procedure block calculations, but complete audit exports remain available. No record is silently omitted.
5. Download full JSON, review CSV, per-unit Forecast CSV or Markdown; copy the worksheet. All exports use the current applied snapshot; any edit invalidates it. Reimporting an audit restores original inputs only and requires fresh inference/review.

## What AI does

`Xenova/all-MiniLM-L6-v2`, Apache-2.0, quantized q8, with Transformers.js **4.3.2** and ONNX Runtime Web **WASM CPU**. Model source/license: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Runtime sources: https://github.com/huggingface/transformers.js (Apache-2.0) and https://github.com/microsoft/onnxruntime (MIT). The neural model produces normalized mean-pooled 384-dimensional embeddings. Cosine ranking matches each observation description to procedure descriptions, without requiring identical wording. Similarity is not confidence, equivalence or learning evidence. Nearest-candidate ranking always returns something, including for irrelevant content; human review is mandatory. AI does not extract numeric timings or invent source records.

Initial downloads: approximately **23 MB model** plus **26,861,777-byte WASM** (27 MB decimal), worker and module factory. Internet is required initially. Weights/config/tokenizer download from Hugging Face and its `*.hf.co` CDN; user content stays in a browser worker. No API keys, optional providers, uploads or server-side inference. Model revision is host default, not pinned; future upstream updates may change outputs.

The immutable existing collection worker is reused to avoid duplicating runtime bytes:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes)
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes)
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes)

Preserve these app builds in the combined deployment. This worker's actual source/protocol/runtime settings were inspected: input `{id,texts}`, output progress/batch/result/error with run ID; four-text batches, mean pooling, normalization. Its pipeline supplies max_length=256, but feature extraction relies on the tokenizer's **512-token ceiling**, not that shorter option. Descriptions are limited to 300 characters, limiting short English inputs further. Vectors must have expected count, dimension, finite components and near-unit norm. No deterministic fake AI fallback exists.

## Devices, caching, failure paths

Requires WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. WebGPU is not required. Desktop Chrome on macOS, with GPU disabled, is tested; physical mobile devices and other browsers are unverified. UI layouts were tested at 1440, 390 and 320 CSS pixels.

App code uses the local Vite production bundle. Worker source uses `practice-curve-worker-v1` Cache API, runtime uses the shared worker's `circuit-cove-runtime-v1`, and Transformers.js caches model downloads. Cache contents may be evicted; private browsing may restrict caching. **Fresh-worker real inference in an already-open warmed page was tested with networking disabled. Offline reload/startup is not promised.** No service-worker app shell is claimed. Cancellation, 180-second timeout, worker construction/runtime errors, failed network downloads and malformed model outputs yield actionable errors without fabricated suggestions. Retry explicitly.

Source/reviews stay in memory, not localStorage; closing the page loses unsaved work. Downloads contain the data the user chooses to export. Imported text is data, not authority, and cannot request credentials or trigger external actions. Observed model traffic consists of GET asset downloads without user text or request bodies; public audit records redact signed query values.

## Deterministic method and limits

Fit ordinary least squares on `log(minutes) = log(a) + b*log(unit)`. Predict individual-unit time `a*unit^b` and sum exactly the next `nextUnits` repetitions after each procedure's largest reviewed index. Doubling ratio is `2^b`. The baseline repeats the last observed time for the same horizon. Displayed differences are **conditional scenario differences**, not measured improvements or accuracy. Log RMSE is an in-sample descriptive residual, not out-of-sample validation. Predictions are not bias-corrected arithmetic means of a log-error process.

Flat/increasing curves are allowed and warned, not forced to improve. Warnings also flag horizons beyond twice the last observed index and log RMSE above 0.2 (a transparent heuristic, not a statistical threshold). No uncertainty interval, causal learning inference, minimum-time floor, fixed setup, fatigue, interruptions, capacity scheduling or staffing commitment. Verify consistent operator/equipment/method and future holdout observations. Sparse fits can badly extrapolate.

Limits: 2–8 procedures; 1–24 observations; at least three distinct indices each for a usable forecast; descriptions/context/labels ≤300 chars; source ≤50,000 chars; imported source/audit file ≤2 MB; indices integer 1–10,000; minutes finite 0.01–100,000; nextUnits integer 1–100. Maximum complete case: 8 procedures, 24 observations, 800 forecast rows. Duplicate IDs and invalid numeric types rejected. Review notes ≤1,000 chars. CSV quotes commas/newlines/quotes and prefixes formula-leading text with an apostrophe; numeric fields retain numeric values. JSON is the lossless audit format.

## Build, validation and publishing

React + Vite; base `/daily-app2/20261116-10/`. `npm install`, `npm run predeploy`; required per-app deployment scripts/dependency retained. **Publish only through the repository ROOT `npm run predeploy` / `npm run deploy`**, never this app's deploy command, to preserve the collection.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `python3 artifact-test.py`, `node max-ready-test.cjs` exercise genuine production-bundle inference and actual exported files. Tests use locally installed Playwright and Chrome; set APP_URL for public validation. Defensive checks inject faults only; successful inference always runs the real model.
