# Witness Window

A reviewed incident timeline desk for operational incident coordinators. Import JSON with an event register and timestamp-bounded reports, load local AI, review each event link or hold the report, apply interval reconciliation, then download JSON/CSV/Markdown or copy Markdown. Synthetic service-outage and workshop-flood examples are included. No external actions, identities or credentials are required.

## What is actually AI?

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0), using Transformers.js 4.3.2 and ONNX Runtime Web: real quantized q8 ONNX feature extraction, CPU/WASM, normalized mean pooling, 384-dimensional vectors, cosine-ranked event candidates. The model handles paraphrased descriptions rather than exact text comparison. Every candidate and score can be inspected; cosine is not confidence. No canned responses or heuristic fallback are used.

After review, ordinary deterministic code intersects all approved bounds for each event. An empty intersection remains a conflict with the incompatible gap in minutes. No midpoint or fictional ordering is generated. Strict before-links require compatible event A to end strictly before event B starts; touching or overlapping intervals do not imply order. Held reports never constrain windows; unconfirmed catalog events remain visible. Bounds are assumed to constrain the same occurrence's time, not its duration. Split compound reports and repeated occurrences into separate event identities before using. No witness credibility, legal conclusions, causal inference or truth verification is attempted.

## Formats and limits

JSON: `title`; `events`: 2–8 `{id,text}` records; `reports`: 1–24 `{id,text,start,end}` records. Unique IDs per array, nonempty text, maximum 500 characters/description, title 100 characters, IDs 40 characters, payload 50 KB. UTC ISO minute/second timestamps ending Z are required; end cannot precede start. Four-text batches, 256-token truncation, 180-second run timeout. JSON imports under 1 MB only; audit imports restore original input and reset approvals. English intended.

Review allows event override, unresolved/hold, rationale, undo and explicit approval. Source changes clear recommendations. Every review edit invalidates the applied export snapshot. JSON retains complete source inputs, evidence, reviews, windows and strict before-links. CSV includes every original report, original bounds, reviewed event/decision and status, with formula-like text escaped for spreadsheets. Markdown includes all events and report audit. Reports cannot disappear by holding them.

## Devices, download, privacy and offline

Current browser with module workers, WebAssembly SIMD, Cache API (for offline reuse) and adequate memory. No WebGPU needed. Desktop Chrome was tested, including 320/390 CSS-pixel emulation; physical mobile hardware, Safari/Firefox/Edge are unverified. First run downloads approximately 23 MB of model/tokenizer assets from huggingface.co and hf.co delivery hosts plus approximately 27 MB same-origin WASM. Download/progress, cancellation, errors and retry are visible. App code, worker and WASM module factory are bundled locally. Shared byte-identical WASM is retained at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that immutable older asset.

No user content is uploaded; all captured successful-path traffic was bodyless GET asset downloads. Input is inert data, not instructions. There are no keys, remote inference providers, telemetry or agent credentials. Inputs/reviews exist only in page memory unless explicitly exported. Cache API stores model/runtime/worker assets, not reports. Clear site storage to evict model caches. Fresh-worker real inference with all networking blocked was tested after online caching **inside an already-open page only**. Offline navigation/reload is not promised. Eviction or an uncached model requires internet again. Model host revision currently follows the library default (not a pinned immutable model revision).

## Reproduce

`npm install`, `npm run predeploy`. Vite base `/daily-app2/20261109-16/`. Required per-app deploy script is present but **do not use it to publish the collection**: run root `npm run predeploy` and root `npm run deploy` instead.

Production tests: `python3 serve-test.py`, then `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`. Real-browser tests require the workspace Playwright installation and local Chrome. Tests write only synthetic artifacts. `TEST_URL`/`REPORT` target the public production bundle. See [VALIDATION.md](VALIDATION.md) for observed outcomes and limitations.
