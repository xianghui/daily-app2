# Bearing Meadow

A local-AI reconciliation and vector-averaging worksheet for field-survey teams. Rough location notes are the input bottleneck: “by the solar array” and “roof access hatch” do not exactly match a canonical station. Neural semantic retrieval proposes the station, human review verifies it, and deterministic duration-weighted vector arithmetic produces an auditable summary. No sensor connections, forecasts or equipment actions.

## Workflow

1. Load a synthetic example or paste/import source JSON. Supply `context`, 2–8 `sites` (`id`, `text`) and 1–24 `records` (`id`, `text`, `bearing`, `speed`, `minutes`). Edit these fields in the source editor before inference.
2. Explicitly select **Load AI & match stations**. No model-host request occurs before this action.
3. Inspect original notes and station evidence. Correct the station, FROM bearing, speed or duration. Approve every record or hold unresolved records. Measurement/station edits renew pending status. Undo reverses review edits; originals remain unchanged.
4. **Apply reviewed measurements** creates a current result. Holds block all aggregate summaries, not record preservation. Any edit invalidates the export snapshot.
5. Download actual JSON/CSV/Markdown or copy Markdown. JSON preserves the complete original input and reviews; reimport restores originals only and requires renewed inference/review. CSV contains every original and reviewed measurement, with formula-like text escaped. Markdown includes computed station summaries and every record. No sending/uploading/export to other services.

## Real AI and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; underlying [sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Runtime: Transformers.js **4.3.2**, Apache-2.0, with ONNX Runtime Web WASM CPU (MIT). Normalized mean-pooled 384-dimensional neural embeddings, four texts per chunk. The shared pipeline accepts truncation; inspected tokenizer ceiling is 512 tokens, not the ignored per-call `max_length:256` option. Individual strings are bounded to 300 characters.
- First load: about **23 MB model**, **26,861,777-byte WASM** plus ~0.6 MB shared worker/factory and app bundle. Internet needed for first downloads, several hundred MB RAM recommended. Modern WebAssembly SIMD and module-worker browser required; WebGPU is not used. Chrome desktop CPU tested; physical phones and other browsers unverified.
- Same-origin immutable dependencies: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating builds. `runtime-dependency-audit.json` records hashes and protocol. This avoids duplicating the collection's large runtime.
- Worker accepts `{id,texts}`, emits progress, four-text batch progress, finite normalized vectors or errors. Main thread validates shape/count/dimension/norm before any station proposals. Cancellation terminates workers. Run identities guard worker fetches, delayed inference and asynchronous imports. Timeout is 180 seconds; retry requires no credentials. Errors never substitute canned AI.
- Runtime/model downloads use Cache API. Tested: online inference followed by **all network disabled and a fresh worker in the already-open page**, still performing real inference. Offline navigation/reload is **not** promised. Cache eviction needs internet again; cache unavailability can prevent offline reuse. No offline service-worker app shell.

## Privacy and data flow

There is no remote AI/provider integration, analytics or API key field. Notes and measurements stay in page memory; the default path only downloads model files from Hugging Face/CDN and runtime files from this collection. Cache holds runtime/model bytes, not source content. Exports are local user-triggered downloads. No user content is stored in URLs, logs or persistent application storage. Imported text is treated as data for embeddings, not tool instructions. Synthetic fixtures only are included. Closing/reloading clears unsaved input/review state.

## Calculation and baseline

Bearings are meteorological **FROM** directions, degrees clockwise from **true north**. Speed is m/s; minutes are positive representative, nonoverlapping observation durations at each station. Use a common reference and do not mix magnetic bearings or TO conventions.

For each record: eastward velocity `u = -speed * sin(bearing)`, northward `v = -speed * cos(bearing)`. Average both components by duration. Vector speed is `hypot(mean_u, mean_v)` and FROM bearing is `atan2(-mean_u,-mean_v)` modulo 360. Below 1e-9 m/s the direction is undefined. Also show time-weighted scalar speed and the deliberately naive time-weighted arithmetic bearing baseline. Coherence is vector speed / scalar speed; calm has undefined coherence. These are descriptive quantities, not confidence, accuracy, risk or weather forecasts. Opposing winds can cancel despite high scalar speeds, so never use vector speed alone as a gust/safety indicator.

## Limits and failure handling

Source ≤50,000 characters; imported JSON ≤2 MB (separate audit-envelope allowance). 2–8 stations, 1–24 records, unique ASCII IDs ≤40 characters per collection, text/context 1–300 characters. FROM bearing 0≤degrees<360; speed 0–100 m/s; duration 0.01–1440 min; review note ≤1,000 characters. No timestamp-based overlap detection is possible. Missing stations remain explicitly unestimated. Semantic similarity cannot verify station identity, instrument accuracy, measurement quality or negation. Even irrelevant content gets a nearest neighbor; mandatory review/holds are essential.

## Build and publish

`npm install`, `npm run predeploy`. Vite base is `/daily-app2/20261119-23/`. Required per-app `deploy: gh-pages -d dist` remains, but **publish only using the root combined-site workflow**. Root `npm run predeploy` assembles every app under `deploy/`; root `npm run deploy` preserves the collection.

## Validation

See [VALIDATION.md](VALIDATION.md) and executable browser/core/artifact tests. Build success alone was not used as inference evidence. The small synthetic fixture outcome is not a general accuracy claim. Asset/public release status is recorded separately; public verification requires real inference, not just a branch push.
