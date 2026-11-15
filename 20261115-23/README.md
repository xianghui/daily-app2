# Tariff Loom — 20261115-23

A local-AI time-of-use planning worksheet for a small workshop with one shared work bay. The coordinator's bottleneck is reconciling differently worded job notes to equipment, then fitting uninterrupted runs into cheaper hours without missing allowed windows. This is not an appliance controller, utility-bill estimator or automatic safety approval.

## Workflow

1. Paste JSON or import `.json`; the two example buttons supply entirely synthetic workshop/kitchen batches.
2. Set hourly `rates` in integer **cents/kWh** in one chosen currency, equipment `profiles` (id, label, description, active watts), and `records` (id, rough text, whole `hours`, `earliest` start, `latest` **finish**).
3. Explicitly click **Load AI & reconcile jobs**. MiniLM compares note meaning to equipment descriptions and proposes equipment links; watts come from that proposed profile, not model measurement.
4. Inspect top-two source descriptions and cosine scores (not confidence), correct equipment/watts/run duration/window, add multiline review notes and approve or hold every row. Changing equipment restores that profile's watts and renews review. Undo restores the last review edit. Originals never change.
5. Apply the reviewed worksheet. Deterministic exact subset/time dynamic programming minimizes energy cost for every approved run, including idle hours. It compares source-order earliest-start FIFO. If FIFO is infeasible no savings comparison is invented; if exact planning is infeasible no partial schedule is presented. Holds stay in every audit, unscheduled.
6. Download current JSON, CSV or Markdown; copy Markdown. Any review/source edit invalidates exports. JSON includes all originals, review/evidence and both schedules. CSV includes every held/pending-free reviewed row and its schedule if present. Markdown includes ordered runs, every original and a follow-up checklist. JSON reimport restores originals only and requires fresh inference/review, not trusted saved approvals. Spreadsheet-formula-like text is apostrophe-prefixed in CSV, including multiline text; JSON preserves exact text.

Example source shape:
```json
{"rates":[40,40,10,10],"profiles":[{"id":"wash","label":"Parts washing","description":"Ultrasonic cleaning bath removes dirt from metal parts","watts":500}],"records":[{"id":"j1","text":"Clean fittings in the ultrasonic bath","hours":2,"earliest":0,"latest":4}]}
```
Hour offsets are from a coordinator-selected start, not calendar times. Cost is held as integer milli-cents (`watts × sum(cents/kWh)`), avoiding rounding inside the optimization; divide by 100,000 for currency units. Energy is integer Wh. No base load, startup surges, standby energy, varying power, demand charges, dependencies, multiple concurrent bays or supervision constraints. Supply real equipment power/run information; do not use this to authorize unsupervised or unsafe operation.

## Real AI, runtime and license

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, approximately 23 MB plus tokenizer/config. English semantic similarity, not instruction-following, power extraction or generative scheduling. Normalized mean-pooled 384-dimensional embeddings, 256-token cap/text, four texts/batch.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU single thread. No WebGPU required; GPU fallback is unnecessary because default path is CPU.
- Same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` and factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, plus 26,861,777-byte WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these published app builds. `asset-audit.json` records exact byte counts/hashes; the worker was inspected and its full paths verified. Reuse avoids duplicating ~28 MB in the collection.
- First load needs internet to this GitHub Pages collection and Hugging Face / its `*.hf.co` CDN. No public CDN JavaScript runtime, backend, paid service, provider key or optional remote inference.
- Requires a modern browser with module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Tested desktop Chrome CPU with GPU disabled and emulated phone layouts at 320/390px; physical phones, Safari/Firefox and low-memory devices untested. Unsupported device/network errors are actionable, never replaced with fake responses.

## Privacy, cache and limits

User content is embedded locally; only public model/runtime **downloads** use network. No content upload, telemetry, key entry or account action. Model loading begins only after the explicit run button. Imported instructions are data, not tool instructions. Source/review state stays in memory until explicit download/copy; public assets cache with Cache API/Transformers.js. Worker source has its own app cache; shared worker explicitly caches WASM factory and binary. Close page to discard unsaved content. Exported audits may contain all source text, so choose where to save them.

**Tested offline scope only:** after online inference, an already-open warmed page can terminate the worker and start a new worker for real CPU inference with all network disabled. Offline startup/navigation/reload is **not** promised. Browser eviction/private mode can require fresh downloads. Model registry currently follows the shared worker's model revision defaults; a future host revision can alter behavior and must be revalidated.

Limits: 1–8 profiles, 1–32 source jobs, at most 8 approved jobs per exact plan, 1–12 hourly tariffs (integer 0–1000 cents/kWh), 1–4 whole hours per job, integer watts 1–10000. Each description/text/label is 1–300 characters, source JSON ≤50,000 characters, import file ≤2 MB. Audit imports use this larger envelope limit then validate the original source bound. Job IDs are unique alphanumeric/underscore/hyphen up to 32 characters. Context cap is 256 model tokens/text. Inference has a 180-second timeout and retry; cancellation/input changes terminate workers, invalidate snapshots and guard delayed fetch/import/result callbacks with run identity. Model vectors must have correct count, 384 finite normalized entries. No inferred confidence percentages.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Real default-model inference on two unrelated synthetic workflows matched 6/6 simple intended equipment links; this is a tiny fixture result, not an accuracy claim. Maximum 40-text input and 32-row conservation tested. Nearest-neighbor AI always offers a profile even for irrelevant text; an unrelated instruction-like challenge produced an inappropriate nearest candidate that was held by the reviewer. Negation and out-of-domain notes need care. Human review remains essential.

Exact scheduling matched 500 independent exhaustive fixed-job/start-assignment oracles, including infeasible windows. Original rows, windows, nonoverlap, energy and integer costs checked. Downloaded CSV/JSON/Markdown and clipboard parsed/reopened; edited quotes/newlines and held rows survive. Production-bundle online/offline, simulated network/runtime/malformed/timeout failures, cancel/retry and stale callbacks, empty/oversized input, phone layouts, labels, touch controls and focus checked. No measured usability or field-energy savings study.

## Build and publish

React + Vite, base `/daily-app2/20261115-23/`. `npm install`; `npm run predeploy` builds. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` exist, but **do not invoke per-app deploy**: it would replace the gallery. Use root `npm run predeploy` and root `npm run deploy` to assemble/publish the whole collection. No server is required by the app. `serve.cjs` is a validation-only local static server for production assets; Playwright test scripts use the machine's existing Playwright install, not app runtime dependencies.

Combined-site size guard: the existing deploy-only byte-identical geometry WASM reuse list now includes `20261030-22`. It shares the existing `20261028-24` geometry runtime, retains compatibility JS URLs, query-versions rewritten entry/worker references and leaves source builds untouched. `legacy-runtime-validation.json` records actual worker geometry generation, image import and binary STL reopening in the combined site; matching public checks are required before release. This is collection maintenance, not part of Tariff Loom's AI workflow.
