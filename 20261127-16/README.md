# Flashfield Desk

A manual-flash starting-point worksheet for small portrait/product studios. Informal kit descriptions are matched to a supplied flash catalog; the user reviews each match and its numeric assumptions, then gets whole-stop power estimates, feasibility checks and usable exports. No camera control, uploads or external actions.

## What is real AI?

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8, Transformers.js 4.3.2 / ONNX Runtime Web. Actual CPU WASM inference produces normalized mean-pooled 384-dimensional embeddings in batches of four texts. Cosine retrieval matches each kit note to catalog descriptions. This changes the selected guide number and minimum-power limit, hence the actual plan. Numeric values are operator-supplied, not extracted by AI. No key, paid provider, canned response or fake deterministic fallback.

MiniLM is English-oriented retrieval, not a lighting expert. It always selects a nearest candidate, even for unrelated text; negation may fail. Similarity is not confidence. Inspect every source description, approve/correct or hold every setup. All sample guide numbers are illustrative, NOT manufacturer specifications. Meter and test physical equipment.

Distinct from the collection's Longlight Desk (film reciprocity), Focusfield Desk (depth of field), Framecadence Desk (time-lapse intervals) and Lumen Terrace (room lighting purchasing): this plans discrete manual photographic flash exposure. Both gallery entry lists were parsed before selection; prior apps/categories are retained.

## Deterministic contract and comparison

For one direct normal-sync flash at fixed zoom/reflector, effective GN = GN × sqrt(ISO/100) × 2^(−modifierLoss/2), metres. Required continuous power fraction = (f-number × distance / effectiveGN)^2. Enumerate 1, 1/2, 1/4 … 1/2^maxStop. Choose smallest absolute log2(chosenFraction/requiredFraction) exposure error; tie prefers lower power. Positive error means overexposure. Within the reviewed tolerance: ready; otherwise infeasible with actionable alternatives. Never silently clamp. Holds and infeasible rows block operational Power CSV, but complete audit exports preserve all records.

Baseline is full power using the SAME reviewed inputs; count approved setups meeting tolerance. Relative power sum includes only ready setups and compares with the same count at full power. It is a sum of fractions, **not** measured battery savings, seconds saved or comparable watt-seconds across different flashes. JSON retains unrounded numbers; display rounds only.

This ideal inverse-square GN model omits bounce, TTL, HSS, ambient, multiple lights, beam coverage, reflector/zoom changes, macro extension, recycle time and real output variation. Illustrative catalog defaults and loss estimates are not field calibration. No physical exposure quality was tested.

## Use and formats

1. Choose either synthetic example, paste source JSON or import .json source/audit.
2. Explicitly click **Load AI & match flashes**; watch model-download and batch progress. Cancel terminates the worker; retry reuses caches. Timeout: 180 seconds.
3. Inspect ranked candidate descriptions/cosines; verify flash identity, GN, minimum power and shot values. Change profile (resets approval/ratings), edit values or multiline notes, approve or hold. Undo retains 40 review states.
4. Apply reviewed scenario; pending or invalid review blocks apply. Every edit/input/run invalidates prior exports.
5. Download complete JSON, Audit CSV, Markdown, or all-ready Power CSV; copy current Markdown. Transfer settings manually and take a metered test exposure.

Source schema: object with title (≤100), profiles (2–8), records (1–12). Unique string IDs ≤40. Profile: id, description ≤200, gn 1–200 metres at ISO 100/full power, maxStop integer 0–10 (minimum power 1/2^maxStop). Record: id, note ≤200, distance 0.2–100 m, aperture f/1–64, iso 25–12800, lossStops 0–8, tolerance 0–1 exposure stops. Finite fractional numbers accepted except maxStop. Source ≤30,000 characters. Control characters and lone surrogates rejected. At most 20 short texts/five inference chunks. The actual tokenizer model_max_length is 512; pipeline max_length is not relied upon for a smaller cap. Vector count/dimension, finiteness and normalization checked.

Audit schema flashfield-v1 includes original, review, candidates, jobs, summary. Up to 8 MB audit import restores originals only, NOT approvals/results; rerun AI/review required. Audit CSV contains one row for every original, reviewed fields, decision, results and baseline. Power CSV contains every all-ready setup, profile, reviewed exposure settings/GN, nearest power, signed exposure error and reviewer note. Standard worksheet, not a proprietary device format. CSV quotes commas, quotes and line breaks; formula-like string cells starting =,+,-,@,tab/CR gain a leading apostrophe. Signed numeric errors remain numeric. JSON preserves exact original/review strings; Markdown is plain handoff text, not rendered imported HTML.

## Privacy, downloads, devices and offline scope

Initial internet needed. Before explicit loading no model requests occur. ~23 MB weights/tokenizer/config from Hugging Face / hf.co CDN, plus ~27.5 MB same-origin runtime (~29 MB conservative UI allowance). Model downloads do not upload user content. No telemetry, remote inference, keys or autosaved documents; content remains in browser memory. Imported prose is embedding data, never instructions/tool authority. Network audit checks GET-only asset requests and absence of content in request URLs/bodies; persisted reports omit signed CDN values.

Tested: desktop Chrome, WASM CPU with GPU disabled. WebGPU not required. WebAssembly SIMD, module workers and several hundred MB RAM recommended. Cache API used where available. Physical phones, other engines/low-memory devices unverified; responsive layout alone is not phone inference proof. Unsupported runtime, worker/network/model errors, malformed outputs, timeout and stale/cancelled runs have explicit no-result errors rather than fallback answers.

Immutable same-origin shared assets (preserve originating builds):

- /daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js
- /daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs
- /daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm

Exact hashes/bytes: runtime-provenance.json. Worker source inspected for CPU/q8/normalized mean pooling/four-text protocol; no runtime originals modified. Explicit Cache API caches worker, factory, WASM; Transformers.js caches model files. Tested offline scope: a fresh worker in an **already-open online-warmed page** with all networking disabled. Cold offline navigation/reload is not implemented or promised. Eviction/private mode can require re-download.

## Build and validation

React + Vite base /daily-app2/20261127-16/. `npm install`, `npm run predeploy`. Required per-app gh-pages dependency/predeploy/deploy scripts retained. Publish only through ROOT combined-site deployment; do not replace collection with a per-app deploy. Root README documents Pages verification.

See VALIDATION.md and machine-readable reports for actual observations. Browser tests exercise actual production-bundle model inference; mocked workers only test fault handling. Python independently parses downloaded artifacts and checks intensity arithmetic. Core tests enumerate discrete powers independently. Layout screenshots at 1440/390/320 px, labels, keyboard flow and 44px controls are checked. Tiny synthetic matches are not representative accuracy evidence or physical lighting validation.

Runtime licenses: Transformers.js Apache-2.0; ONNX Runtime Web MIT. Cached model revision observed during validation: 751bff37182d3f1213fa05d7196b954e230abad9. The inherited worker resolves the model's main revision, not a frozen model snapshot; later host changes can alter downloads or require revalidation. Runtime dependencies themselves are hash-verified immutable local assets.
