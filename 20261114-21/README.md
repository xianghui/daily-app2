# Uptime Orchard

A local-AI redundancy worksheet for service planners reconciling informal component inventories. No keys, backend, uploads or external equipment actions.

## Workflow

1. Choose **Office connectivity** or **Cold-room monitoring**, paste source JSON, or import a `.json` file (source or exported audit).
2. Define 2–6 functional groups: `id`, `label`, `description`, `required` (integer k, 1–32). Every group is required in series.
3. Supply 1–32 distinct component records: `id`, `description`, `availability` (probability 0–1), `owner`. One record means one independent physical unit. Use probabilities over a common observation horizon, not failure rates or durations. You supply all numbers; AI does not extract them.
4. Explicitly load AI. Inspect cosine-ranked source definitions; approve, correct or hold each group assignment and availability. Add multiline review notes/owners. All rows require review; undo restores edits. Input changes cancel runs and invalidate review and exports.
5. Apply the reviewed worksheet. A hold or insufficient membership in any group withholds the system estimate; all rows remain exportable. Review group membership, the all-components-required baseline, redundant system scenario and one-at-a-time perfect-component sensitivity.
6. Download current JSON (originals, reviews, evidence, all groups and scenarios), CSV (every component, including holds), or Markdown worksheet; copy Markdown. Reimport restores originals only, requiring renewed inference and review. CSV protects leading spreadsheet formula characters; JSON is the lossless audit format.

## Real AI, source and runtime

- **Xenova/all-MiniLM-L6-v2**, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Quantized `onnx/model_quantized.onnx`, approximately 23 MB plus tokenizer/config downloads. Model revision follows the host's main revision; a future host update can change behavior. See lockfile for exact installed libraries.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, mean-pooled normalized 384-dimensional embeddings; four texts per inference batch, truncation capped at 256 tokens. No WebGPU or remote inference.
- AI computes semantic vectors and drives nearest-functional-group suggestions. It can connect differently worded inventory notes with definitions, unlike exact-word matching. Nearest similarity is **not confidence** and there is no automatic rejection threshold. It does not discover topology or certify probability assumptions.
- Locally bundled module worker, runtime factory (~53 KB) and app code. The byte-identical 26,861,777-byte WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older app asset. Vite's build plugin rewrites this immutable URL. Combined published site is the distribution unit.

## Deterministic computation & assumptions

Group availability uses a Poisson-binomial recurrence for at least k operating units with heterogeneous supplied probabilities. System availability is the product of all required group probabilities. The baseline instead requires every component to operate. Differences are probability percentage points, not measured improvements. Perfect-component sensitivity sets one probability to 1 and recomputes the entire system, holding everything else fixed; no cost or feasibility optimization is claimed.

All component and group states must be independent, switching/detection perfect and shared dependencies absent. No standby modes, shared units, common-cause faults, repair scheduling, duration distribution, topology discovery, uncertainty intervals, SLA prediction or certification. Shared power/network/control failures can make results optimistic. The UI cannot verify physical independence or evidence quality; use this as a preparation/recheck worksheet, not a design or operational authorization.

## Privacy, downloads, devices and offline scope

Content stays in browser memory and is passed only to a local worker. Only static files download from the collection origin and Hugging Face/CDN (`huggingface.co`, `hf.co`, `xethub.hf.co`); no content-bearing requests, POSTs, APIs or credentials. Loading does not begin until the user presses the load button. Cache API stores static/model files, not input data. Reload loses review state unless exported. No telemetry, remote fallback or optional provider integration.

First use requires internet and approximately 50 MB of model/runtime downloads plus app assets. Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB free memory is the tested runtime. No WebGPU needed. Safari, Firefox, physical phones, low-memory devices and assistive technology are not tested. Unsupported workers/WASM, blocked downloads and model errors show actionable errors rather than fake AI.

**Tested offline scope:** after successful online inference, a fresh worker in the already-open warmed page can run with all networking disabled. Worker source, runtime module, binary and Transformers model files are explicitly cached. Offline reload/navigation is **not promised**; cache eviction/private mode/disabled Cache API can require downloads again. Cancellation terminates the worker; retry creates a fresh worker. A 180-second run timeout prevents indefinite work.

## Input limits and validation

Source ≤30,000 characters; import file ≤2 MB (allows exported audit envelopes); 2–6 groups, 1–32 unique records, descriptions ≤300 characters, IDs ≤40, labels ≤80, project/owners ≤150, review notes ≤1000. JSON only; malformed, empty, duplicate, out-of-range and oversized sources rejected. Model vectors must have the exact count, 384 finite dimensions and approximately unit length. Guarded run IDs reject delayed downloads, file reads and worker callbacks. Imported instructions are data, never executable authority. See [VALIDATION.md](VALIDATION.md) for actual observed checks and limitations.

## Build & publish

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261114-21/`. Required individual `predeploy` and `deploy` scripts exist, but **publish only from the collection root** with its combined `deploy/` workflow to preserve all apps.

Tests: `node browser-test.cjs`, `node defensive-test.cjs`, `node stale-test.cjs`, `node import-stale-test.cjs`, `node edge-test.cjs`, `node arithmetic-test.mjs`, `python3 artifact-test.py`. Browser scripts use the installed workspace Playwright and Chrome. `node serve.cjs` serves the production app at port 6821; `node combined-serve.cjs` serves root `deploy/` at 6822. Set `APP_URL`/`REPORT` for combined/public workflow testing. Defensive worker injections test only failure handling, never substitute for successful real AI checks.
