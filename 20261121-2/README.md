# Power Reserve

Portable-workshop battery run sheets, with real local AI equipment reconciliation. Built 2026-11-21 in React + Vite for `/daily-app2/20261121-2/`.

## Distinct process

The existing gallery already has Watt Folio (daily energy scenarios), Peak Folio (coincident demand) and Charge Terrace (tariff/storage scheduling). This app instead reconciles an off-grid mission to a **battery discharge/capacity worksheet** with a supplied Peukert exponent, rating hours, usable-fraction cap and first estimated reserve crossing. No tariff or energy-reduction optimization is presented as battery runtime. Both collections were inspected; the original collection was read only (`original-gallery-audit.json`).

## Workflow

1. Load either synthetic example or paste/import source JSON. Supply a canonical device roster with measured **battery-input** watts, rough usage descriptions, hours/counts and battery assumptions. Include conversion losses in watts yourself.
2. Explicitly select **Load AI & reconcile**. Review cosine evidence and the source for every suggested device. AI never supplies watts or battery specifications.
3. Edit the device, start/end hours or unit count; approve or hold every row. Holds remain in the audit but draw no power. Undo reverses review edits; source changes clear suggestions and exports.
4. Apply reviewed checks to build a half-open interval timeline, energy/peak-load summary and capacity worksheet. Invalid rows block application. Held rows make the plan incomplete.
5. Download complete JSON/Audit CSV, interval Summary CSV or Markdown; copy Markdown if clipboard permission allows. Edits invalidate exports until reapplied. Reimport audit JSON restores **original inputs only**, never old approvals.

## Real AI, runtime and dependency contract

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, 384-dimensional normalized mean-pooled embeddings. Download roughly 23 MB model/tokenizer assets from Hugging Face and its CDN. No API key or optional provider.
- Runtime: Transformers.js **4.3.2**, ONNX Runtime Web, WASM CPU; WebGPU not required. Runtime binary about 27 MB, plus worker/factory. Neural similarity retrieves device meaning, not instructions, electrical suitability or trustworthy confidence. There is no prompt executor or remote tool access.
- Immutable same-origin worker: `20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary: `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. These originating app assets must remain deployed. Exact sizes/hashes, inspected source and observed model revision are in `runtime-dependency-audit.json`.
- The shared worker uses `feature-extraction`, q8/wasm, four texts per chunk, normalization/mean pooling. The feature-extraction pipeline does not enforce its call-site max_length; the **actual tokenizer ceiling is 512 tokens**. This app separately bounds each neural text to 300 characters. Model `main` is unpinned and may change; observed revision is documented, not a promise of reproducibility.
- Before loading, the UI shows network cost, requirements, privacy and cache scope. Progress reports actual model file progress and processed text count. Cancel kills the worker, run identities reject stale messages/source fetches and file reads, timeout is 180 seconds. Retry is explicit; errors never generate fallback classifications. Vector count, dimension, finite values and normalization are checked before suggestions.

## Devices, privacy and offline scope

Modern secure-context browser with WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. Desktop Chrome CPU was tested at 1440/390/320 CSS pixel widths; physical phones, other browser engines, reduced-memory devices and real batteries were not tested. Actionable failures appear for unsupported workers/WASM, download problems or timeouts.

Default content goes only from page to local worker via postMessage. The network audit captured only GET asset/model downloads without request bodies, no content uploads, analytics or credentials. No content is persisted by the app; exports are user-invoked local files. Model/runtime caches persist downloads, not documents. Download hosts are the same site, Hugging Face and its weight CDN. Audit reports retain host/path/query-key names, not signed download tokens. Built assets were scanned for credential patterns and source/network integrations inspected; not an exhaustive security certification.

Worker source and WASM factory/binary are Cache-API-backed; Transformers.js caches model assets. **Fresh-worker real inference in a warmed, already-open page passed with all network disabled**, locally and against the published bundle when documented in VALIDATION.md. Caches can be evicted; private browsing and quota restrictions may disable them. Offline navigation, first visit and reload are not promised; app shell has no offline service worker.

## Format and bounds

See the editable examples in `src/core.js`.

- Source JSON 1–20,000 characters; context 1–300 characters.
- 2–8 devices: safe unique letter-first id ≤40 characters, description ≤300, watts .1–2000.
- 1–24 unique usage records: id, note ≤300, numeric start/end hours and integer units 1–20. `0 ≤ start < end ≤ targetHours`.
- voltage 6–96 V; hoursRated 1–100 hours; exponent 1–1.5; usableFraction .1–1; capacityAh 1–2000; targetHours .1–48.
- .json import ≤2 MB allows larger audit envelopes; originals still meet the stricter source limits. CSV and other formats are rejected, not silently misparsed.
- Review notes ≤1,000 characters, multiline supported. CSV uses RFC-style quoted escaping and protects string fields beginning with spreadsheet formula characters. JSON retains exact original/review text; numeric values remain numeric.

## Deterministic calculation and baseline

For each constant-load interval, current `I = watts / voltage`. Define `D = Σ(duration × I^k)`. Peukert constant-load equation is `t = H × (C / (I × H))^k`, giving full-discharge modeled consumption `D / (C^k × H^(1−k))`. Required nominal capacity for an allowed modeled fraction f is:

`C = [D / (f × H^(1−k))]^(1/k)`.

The simple baseline is ideal amp-hours divided by the same usable fraction (k=1). Source-linked intervals cover the entire mission, including idle gaps. Estimated first usable-limit crossing uses within-interval interpolation, never integrates negative loads. A computed fraction is a model quantity, **not a measured state of charge**. At low currents the Peukert estimate can be below ideal Ah. There is no claim of time saved, improved accuracy or universal benefit.

## Limitations

This is a planning worksheet, not electrical design or safety certification. The piecewise extension is chiefly a lead-acid approximation assuming constant voltage, stable temperature, suitable measured exponent, no recovery and correct battery-input watts. It omits surge/current limits, voltage sag, wiring/inverter ratings, aging, temperature and BMS cutoffs; do not use it for life-critical loads. Validate against manufacturer discharge curves and qualified design advice. No hardware connections/actions occur.

MiniLM can confuse negation and related device descriptions; the deliberate negative projector challenge still retrieves projector. All rows therefore require human approval or hold. A small synthetic match count is not a population accuracy estimate. Exact formulas are deterministic, but real-world battery prediction was not validated.

## Build and tests

`npm run predeploy` runs the production build; required individual `deploy` is `gh-pages -d dist`, but **publish the collection from the repository root only**.

- `node core-test.mjs`: independent fixed numerical identities and constraints.
- `python3 serve-test.py`: production-bundle test server at port 7092, including immutable shared runtime.
- `node browser-test.cjs`: actual CPU inference, complete review/export/offline/batch/responsive suite. `APP_URL` and `BROWSER_REPORT` target assembled or public deployments.
- `node defensive-test.cjs` and `node cold-cancel-test.cjs`: real failed-download/retry and injected malformed/unsupported/stale/timing paths; injections are never used for positive inference checks.
- `python3 artifact-test.py`: independent CSV/JSON/Markdown parsing, formulas and conservation.
- `runtime-audit.py`, `security-audit.py`, gallery and public asset checks provide reproducible reports. See `VALIDATION.md` for outcomes and publication status.
