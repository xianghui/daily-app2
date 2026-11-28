# Leverline Desk

A local-AI handoff reconciliation desk for a teaching/workshop coordinator comparing **supplied torque-wrench adaptor setups**. Rough notes often omit exact catalog names; semantic retrieval maps the notes to supplied geometry profiles. Human review comes before a bounded, deterministic torque worksheet. This is not a generic chatbot, torque-specification generator or equipment controller.

## Workflow

1. Paste/import source JSON or choose either synthetic example. Supply 2–8 setup descriptions with measured/calibrated geometry and wrench limits, and 1–8 informal record notes with explicit target torques.
2. Explicitly load AI. Inspect each source snippet, retrieved setup and candidate cosine scores. Correct links and numbers. A setup change restores its catalog geometry/limits while preserving the record's target. No numerical values are extracted or invented by AI.
3. Approve checked records or hold/reject them. Undo up to 30 review mutations. Pending records prevent application. Invalid numeric edits also block application: restore valid numbers even for held rows.
4. Apply the reviewed worksheet. Input/review changes invalidate the applied snapshot. Complete JSON/CSV/Markdown preserve all records and holds. Worksheet CSV is enabled only when at least one approved record exists and every approved setting meets its supplied modeled tolerance.
5. Download current artifacts or copy Markdown. JSON reimport restores original input, not trusted approvals; run inference and review again. Nothing is saved automatically or installed.

## Real AI / browser requirements

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Transformers.js **4.3.2**, ONNX Runtime Web **1.31.0-dev.20260914-8d85527a0**. Shared runtime's dependency lock is authoritative.
- Mean-pooled normalized **384-dimensional** embeddings on **WASM CPU**, four short texts per model batch. Finite vector count/dimension/norm are validated before ranking. Cosine similarity is evidence, **not confidence**. A negated test retrieved the wrong setup; human review is mandatory.
- First explicit run: approximately **23 MB** model/tokenizer/config downloads from Hugging Face and its CDN plus **27 MB** same-origin runtime. Internet, adequate memory, module workers and WebAssembly SIMD required. Current desktop Chrome CPU tested; WebGPU is neither required nor used. No all-phone performance promise.
- Original notes/descriptions ≤200 characters; source ≤30,000 characters; 2–8 setups, 1–8 records, at most 16 texts. Tokenizer configuration limits context to 512 tokens; the shared feature-extraction pipeline also requests truncation/max_length 256 but we do **not** claim that option imposes a stricter guaranteed cap. Short-text bounds keep this workload small.
- Model assets currently resolve `main` (observed host revision `751bff37182d3f1213fa05d7196b954e230abad9`); this is not an immutable model pin. Host changes can alter retrieval. No API key, provider integration, shared credential or paid service.
- Same-origin immutable shared worker: `../20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory: `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary: `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both old apps in deployment. Exact hashes/sizes: `runtime-provenance.json`. Sharing avoids redundant runtime bytes; the new app code is bundled locally.

## Privacy, cache and failure behavior

Notes remain in this browser. Requests are GET asset downloads; there are no user-content uploads, credential prompts or external actions. Imported instruction-like text remains inert data. Browser memory contains sources/reviews until navigation. Downloads are explicit local artifacts.

Cache API stores worker source, WASM factory/binary and model assets where storage allows. **Tested offline scope: a fresh worker in the same already-open warmed page after successful inference.** Cold offline startup, reload, navigation and cache eviction are not supported/tested. Internet is required after eviction. Initial page loading does not request model weights. Explicit cancellation terminates workers and aborts pending worker fetches. Run/import IDs prevent stale results/file reads replacing new input. Model/network/unsupported-runtime/malformed-vector errors remain visible without simulated results; 180-second timeout and retry supported. Storage denial may prevent offline reuse.

## Deterministic model and bounds

For a planar rigid adaptor with perpendicular handle force at the specified grip point:

`ratio = (L + A*cos(theta)) / L`

`modeled fastener torque = wrench setting * ratio`

`ideal setting = target / ratio`

L is calibration grip-to-drive length in mm; A is drive-to-fastener offset in mm. θ is measured from the forward continuation of the handle axis to the drive-to-fastener vector. 0° extends forward, 90° is sideways, 180° points toward the grip. No added offset means A=0. Positive effective lever arm is mandatory. All torques are Nm.

Bounds: L 100–1000 mm, A 0–500 mm, θ 0–180°, target 1–500 Nm, wrench min/max 0.1–500 Nm with min≤max, zero-origin tick spacing 0.1–10 Nm, supplied modeled tolerance 0.1–20%. Setups include a default target to satisfy the same numerical schema; record targets override it. Only zero-origin tick grids are supported (e.g. 0, 1, 2…); not arbitrary offset scales.

The nearest feasible integer dial tick minimizes absolute modeled delivery error, ties favor the lower setting. Boundary ticks are included. No feasible tick or error above tolerance blocks that approved row. Baseline sets the wrench to the requested target without correction; baseline counts ignore wrench feasibility and are explicitly labeled. Counts compare identical approved records under the same supplied tolerance, never measured accuracy/time savings. Held rows stay in the audit but do not affect counts or worksheet CSV.

Ideal geometry is not physical validation. No universal joints, flex, grip-placement uncertainty, friction, calibration drift, fastener torque specs, strength calculations or operating authorization. Manufacturer instructions take precedence; not for safety-critical work.

## Formats / development / validation

Source schema and two synthetic fixtures live in `src/core.js`. JSON imports ≤1 MB may contain a complete audit envelope; restored originals still obey the source cap. IDs are unique simple 1–24-character strings. Text rejects controls/broken Unicode. CSV quotes commas/newlines and doubles quotes; formula-like text is prefixed with an apostrophe, while numeric columns remain numeric strings. JSON is the lossless source/review envelope. Markdown is a human-readable unrendered handoff.

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app deploy script exists, but **publish only from repository root** to preserve the collection. Tests use local Chrome via the workspace Playwright package. Set `TMPDIR=/Volumes/ExternalHD/daily-builder-tmp` for this run because the internal temporary volume filled; no existing user files were deleted.

See [VALIDATION.md](VALIDATION.md) and saved validation JSON for observed results and untested scope. No physical wrench, phone hardware, other browser engines or cold offline startup were tested. Synthetic data only; no personal documents or credentials.
