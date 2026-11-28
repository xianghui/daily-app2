# Skyfield Desk

A local-AI observing worksheet for astronomy-club coordinators reconciling informal target handoffs. AI retrieves the intended observing profile; deterministic enumeration chooses the highest-power **offered** eyepiece meeting reviewed approximate field coverage, magnification and exit-pupil bounds. This differs from the collection's photographic focus/exposure tools: input is a visual telescope/eyepiece catalog and target intent; output is a reviewed observing worksheet, not camera exposure or depth of field.

## Workflow

1. Choose either synthetic example or paste/import JSON. Supply telescope focal length/aperture, 1–12 eyepieces, 2–8 observing profiles and 1–8 target notes with angular diameters. Edit telescope/catalog numbers in source JSON; measurements are never invented by AI.
2. Explicitly load AI. Inspect source notes, profile descriptions and ranked cosine evidence. Correct profile matches and all constraints. Changing a profile reloads its constraints while retaining target size, and resets approval.
3. Approve or hold every target. Hold rejects it from the observing worksheet but retains it in the audit. Undo up to 30 review mutations. Invalid numbers block application even for held targets.
4. Apply the review. Source/review edits invalidate exports immediately. JSON/CSV/Markdown include all targets; worksheet CSV includes approved targets and is enabled only when every approved target has a feasible offered eyepiece.
5. Download current artifacts or copy Markdown. JSON reimport restores originals, not approvals; run AI and review again. Nothing is installed, sent or saved automatically.

## Real AI / requirements

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js **4.3.2** / ONNX Runtime Web **1.31.0-dev.20260914-8d85527a0**.
- Real WASM CPU feature extraction, mean pooling, normalized 384-dimensional embeddings; four short texts per batch. Vector count/dimension/finiteness/norm are validated before ranking. Cosine similarity is evidence, **not confidence**. Every note receives a nearest match even when unrelated. Negation and unfamiliar targets require correction. AI does not recognize sky objects or predict visibility.
- First explicit run downloads approximately **23 MB** model/tokenizer/config from Hugging Face/CDN and **27 MB** same-origin runtime. Current WebAssembly SIMD, module workers, sufficient memory and internet required. Desktop Chrome CPU tested; no WebGPU required. Physical phones/other engines are untested; no universal phone performance claim.
- Notes/descriptions ≤200 characters; source JSON ≤30,000 characters; ≤16 short texts. Tokenizer configuration enforces model_max_length 512; feature extraction ignores a stricter max_length pipeline option, so no 256-token guarantee is claimed. Short-text bounds constrain actual workload.
- Model resolves `main`, not an immutable revision. Upstream changes may affect retrieval. No API keys, agent credentials, paid services or optional remote provider integration.

## Static hosting, cache and privacy

React + Vite app code is bundled locally. Reuses these **immutable same-origin** assets instead of duplicating ~27 MB:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve those older apps and paths. `runtime-provenance.json` records exact hashes/bytes. Shared worker protocol is `{id,texts}` → progress/batch/result `{id,vectors}` or error. It explicitly uses WASM CPU q8 normalized mean pooling in batches of four. No content leaves the browser: network requests download model/runtime assets, not notes. Imported instructions remain inert data. Model requests do not begin until the user clicks Load AI.

Cache API stores the worker, factory/binary and model assets where allowed. Tested offline scope: **new worker in the same already-open page after a successful online run**. Offline cold startup/reload/navigation are not supported. Storage denial/eviction requires internet. Cancellation terminates the worker and aborts worker fetches; run/import identities prevent stale updates. Construction/runtime/network/malformed output failures produce visible errors and no fake outputs. Timeout 180 seconds; retry available.

## Deterministic model / bounds

For telescope focal length F and eyepiece focal length f:

- Magnification M = F/f.
- Exit pupil (mm) = telescope aperture/M.
- Approximate true field (degrees) = supplied apparent field/M.
- Required field = target angular diameter × (1 + margin/100).

Enumerate every offered eyepiece; require inclusive power, pupil and field constraints. Choose highest feasible M, ties by ascending ID. No feasible choice stays unresolved and blocks worksheet release when approved. Baseline always picks highest M without constraints. Miss counts compare the **same approved rows**, not measured accuracy, quality or time savings. All alternative options and their failed constraints remain inspectable.

Telescope focal length 100–4000 mm, aperture 20–500 mm; eyepiece focal length 2–60 mm, apparent field 30–82°. Profile magnification 1–500×, pupil 0.2–10 mm with min≤max; field margin 0–100%; target angular diameter 0.001–10°. No Barlows/reducers or variable focal lengths. AI profiles express supplied preferences, not universal recommended powers.

**Night visual observing only. Never point at the Sun.** AFOV/M is approximate: use measured field stops/actual field when precision matters. No weather/seeing, location/time/visibility, eye pupil, tracking, optical aberration, illumination or performance model. No telescope controls, purchases or external actions.

## Formats and validation

Schema/examples: `src/core.js`. Unique simple IDs ≤24 characters. Invalid/empty/oversized input, controls/broken Unicode and unsupported catalogs fail visibly. Import source/audit JSON ≤1 MB; restored originals retain the stricter source cap. JSON is lossless; CSV quotes commas, quotes and line breaks and prefixes formula-like text with an apostrophe while retaining numeric signs. Markdown is unrendered human-readable text. Worksheet CSV deliberately omits held targets; audit formats never do.

`npm install`; `npm run dev`; `npm run predeploy`. Required per-app `deploy` exists, but publish **only through repository-root predeploy/deploy** to preserve the whole collection. Browser tests use workspace Playwright and installed Chrome. Use `TMPDIR=/Volumes/ExternalHD/daily-builder-tmp` because internal disk space is limited; no unrelated files were deleted.

See `VALIDATION.md` and saved reports for observed results, device limits and public verification. All fixtures are synthetic; no personal documents or credentials.

Observed extended paraphrase check: 3 of 4 top profile matches agreed with fixture intent. “A sprawling gas cloud surrounded by stars” retrieved GALAXY instead of WIDE. The review selector corrected it and produced the expected feasible worksheet. This is a tiny synthetic check, not a general accuracy estimate.
