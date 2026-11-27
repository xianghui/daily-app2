# Cadence Atlas

A local-AI gear-card workbench for cycling route planners. Turn informal route notes into reviewed rider-profile matches, then enumerate the gears on a supplied bicycle that keep an entire expected speed window within a supplied cadence band. Distinct from the collection's audio, finance, cutting and resource-planning workflows: this reconciles route language to rider-defined cycling context and produces drivetrain-specific kinematic cards.

## Workflow

1. Try **Hill and town** or **Distance and sprint**, paste source JSON, or import `.json` ≤1 MB. Synthetic fixtures only are included.
2. Explicitly **Load AI & match profiles**. Real sentence embeddings rank each segment against the supplied cadence-profile descriptions. Nothing downloads from the model host before this action.
3. Inspect source notes and cosine evidence. Correct profile links, cadence/speed bounds or the current gear; optionally override the automatic gear. Verify the supplied measured wheel circumference and blocked combinations in source JSON. Profile/numeric/gear changes reset approval. Approve or hold each segment, add multiline notes, undo up to 30 changes.
4. **Apply reviewed worksheet**. Every source segment survives, including holds and infeasible choices. Audits remain available when a plan fails. Gear cards require all segments approved and all selected gears feasible. Any edit invalidates the applied snapshot and exports.
5. Export JSON, Audit CSV, Markdown, gated Gear cards CSV, or copy Markdown. These reflect the current applied review, not original demo defaults. JSON `cadence-atlas-v1` preserves source, every review, candidate evidence, complete gear enumeration and calculations. Reimport restores originals only, requiring fresh AI and review. No bicycle controls, remote writes, orders or messages.

## Inputs, bounds and outputs

Source JSON ≤30,000 characters: `title` ≤100 characters, `bicycle`, 2–8 `profiles`, 1–12 `records`. Descriptions/notes ≤200 characters; unique IDs of 1–24 ASCII letters/digits/underscore/hyphen. Valid Unicode, tabs and newlines allowed; other control characters/unpaired surrogates rejected. Reviewer notes ≤1000 characters. Audit envelope/import ≤1 MB but original source limit still applies.

- Bicycle: integer `circumferenceMm` 1000–3000, 1–3 unique integer `front` teeth 20–65, 4–12 unique integer `rear` teeth 10–52. `blocked` is a unique list of existing `front/rear` strings, e.g. `34/11`.
- Profile: `id`, `description`, integer `cadenceMin`/`cadenceMax` 40–140 rpm, ordered.
- Record: `id`, `note`, `speedMinKph`/`speedMaxKph` 1–80 in 0.1 steps, ordered, and integer `currentFront`/`currentRear` present in the bicycle.
- Review adds `profileId`, editable numeric fields, `gearId` (`auto` or an existing pair), `decision` (`approve`/`hold`), `reviewerNote` and immutable model candidate evidence.

CSV quotes all cells, uses CRLF, and preserves commas, embedded quotes and line breaks. Leading formula-like text (`= + - @ tab CR`) is prefixed with an apostrophe; numeric values retain numeric representation. JSON preserves exact reviewer text. Audits include originals and unresolved rows. Gear-card CSV contains every approved feasible row, front/rear selection, speed range, cadence endpoints and rollout. Markdown is plain copy, not rendered imported HTML. JSON and CSV were independently parsed and compared, including edited multiline text and maximum batches.

## Real AI and device requirements

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8, via Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), WASM CPU. Normalized mean-pooled 384-dimensional embeddings; cosine ranking, no generated numeric specifications or canned answers. Vector count/dimension, finite values and normalization are validated. Similarity is not confidence. The deterministic steps are schema validation, full gear enumeration, cadence formulas, minimax choice, release constraints, baseline comparison and artifacts.

First load: approximately 50 MB (~23 MB weights + ~27 MB runtime), internet needed. Current module-worker / WebAssembly SIMD browser with adequate memory; WebGPU is not required. Tested installed desktop Chrome with GPU disabled. Physical phones, low-memory devices, other browsers and rider performance are untested. Phone layouts are emulations, not inference-speed claims.

Progress shows individual file download percentages and four-text inference batches. At most 20 short texts / five batches. The feature-extraction pipeline's `max_length` option is not relied on: texts are bounded to 200 characters and the inherited tokenizer model limit applies. Cancel terminates the worker, aborts pending source fetches and increments run identity. Timeout is 180 seconds. Model, network, worker construction, unsupported runtime and malformed results fail visibly with no heuristic fallback. Input changes invalidate late runs and delayed imports; retry creates a fresh worker.

## Privacy and cache scope

No API keys, mandatory services, account, remote AI integration, telemetry or automatic workspace storage. User text stays in the local browser worker. Network requests download runtime/model files by GET from this site, Hugging Face and its CDN; they do not upload route text. Imported text cannot change authority or request tools/credentials. Export before closing the tab.

Immutable same-origin shared dependencies, verified by SHA-256 in `runtime-provenance.json` (preserve the originating apps):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The bundle uses the existing worker's `{id,texts}` → progress/batch/result protocol. This prevents large runtime duplication in the collection. Worker source, WASM factory and binary use explicit Cache API caches; model assets use the Transformers.js cache. The worker sets one CPU thread and uses normalized mean pooling. After one online run, fresh-worker real inference with all network blocked **in an already open page** was tested. Offline app-shell startup/reload is not supported or claimed; cache eviction/storage restrictions can require downloading again. Download cancellation can leave partial reusable cache entries.

## Deterministic method

Rollout metres per crank revolution = circumference mm / 1000 × front teeth / rear teeth. Cadence rpm = speed km/h × 1000 / (60 × rollout). For every front/rear pair, reject explicit blocked combinations and test cadence at both speed endpoints. Since cadence is linear in speed, fitting both endpoints fits the whole assumed interval. Use 1e-8 rpm comparison tolerance.

Automatic choice minimizes the larger absolute endpoint departure from `(cadenceMin + cadenceMax) / 2` among feasible gears. Ties use ascending front, then rear teeth. If none fits, return unresolved, not an invented gear. Manual override is checked against the same constraints; it is not required to be minimax optimal. Calculations use JavaScript doubles, display one decimal, exports retain full precision.

Baseline is the supplied current gear assessed against the **same reviewed** speed interval, cadence band and blocked list. The displayed counts cover all rows including holds. They are constraint violations, not measured riding improvements, model accuracy, elapsed time or physiological gains. No profile-identification baseline is labeled as a performance result.

## Limits

AI does not determine appropriate cadence, rider fitness, component compatibility, actual speed, road grade, power, traction or shifting feasibility. It always picks a nearest description, including unrelated or negated notes. Human holds are essential. Synthetic cadence bands and tooth sets are illustrative, not training advice. This is a static one-gear-per-segment kinematic worksheet: it does not optimize an across-route shift sequence, predict effort, handle multiple gears during a wide speed window, or assume a blocked-list rule from tooth ordering. Split wide segments explicitly when needed. Verify manufacturer constraints, measured circumference and rider assumptions. Use only off-bike.

## Build and validation

React + Vite; base `/daily-app2/20261128-7/`. `npm run predeploy` builds. Per-app `gh-pages` and `deploy: gh-pages -d dist` remain present, but publish only through the repository ROOT combined-site workflow. See `VALIDATION.md`, browser/defensive reports and independent artifact checks for actual observed outcomes, not universal claims.
