# Printscale Desk

A local-AI darkroom worksheet for technicians repeatedly changing print size. Match informal paper-stock notes to saved test-strip calibrations, review every setup, and export starting exposure estimates. No image import, uploads, paper identification from images or equipment actions. All fixtures are synthetic, not manufacturer specifications.

## AI / licenses / runtime

Real [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2) (Apache-2.0), quantized q8; Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), WASM CPU. Normalized mean-pooled 384-dimensional embeddings retrieve supplied calibration descriptions from paraphrased paper notes. Selecting a different calibration changes test exposure, aperture and magnification, materially changing the worksheet. AI does not estimate measurements or validate stock/grade/chemistry compatibility. Review is mandatory; nearest neighbors can be wrong, including negation and missing stock. Cosine similarity is not confidence.

Four texts per chunk, 20 total maximum; short note/description limits bound inputs. Shared tokenizer model_max_length 512 is the effective token cap; pipeline max_length:256 is not relied on as a stricter cap. Count, dimension, finite values and unit norm of vectors are validated before ranking. No generated JSON or prompt-driven tools: imported prose is inert data, never authority or credential requests.

Both galleries were parsed before selection (3,595 original / 919 current entries). See distinctness-audit.json. Film ND/reciprocity (Longlight), direct flash guide numbers (Flashfield) and paper cutting (Grainline) are different decisions, inputs and outputs from calibrated enlarger-paper exposure.

## Use

1. Choose either synthetic batch, paste source JSON or import a `.json` source / exported audit.
2. Click **Load AI & match paper**. There is no model download before this explicit action. File/chunk progress appears; cancel terminates workers and pending fetch, retry reuses caches, timeout 180 seconds. No fake fallback.
3. Review paper descriptions and similarity evidence. Verify same negative, enlarger lens/head, filtration and chemistry. Correct the calibration (resets approval and measurements), edit all numbers and multiline notes, approve or hold each request. Undo retains 40 edits; originals stay intact.
4. Apply reviewed scenario. Any review edit invalidates applied exports.
5. Download complete JSON / Audit CSV / Markdown or copy current Markdown. Exposure CSV requires every request approved and within the practical time limit. It is a worksheet, not executable equipment control.

## Input / output

`{title,profiles,records}` source ≤30,000 characters; title ≤100; IDs ≤40 and unique within each list; descriptions and notes ≤200. 2–8 profiles, 1–12 requests. Controls and lone surrogates rejected.

Profile: `id,description,negativeWidth` (8–200 mm), `testWidth` (10–1000 mm), `testAperture` (f/2–32), `testSeconds` (0.1–600 seconds). Record: `id,note,targetWidth` (10–1000 mm), `targetAperture` (f/2–32), `speedFactor` (0.25–4 extra-time multiplier), `maxSeconds` (1–3600 seconds). Width is projected negative-image width, not cropped sheet size. One means unchanged calibrated batch; speedFactor 2 means twice the exposure, NOT double sensitivity. Negative image dimensions remain fixed within each calculation; a different negative needs a new calibration.

Complete `printscale-v1` JSON retains original records, reviewed settings, ranked candidate evidence, held/blocked jobs, comparisons and summary. Audit CSV contains every source snippet, reviewed numeric field and result. Exposure CSV contains every request's reviewed target, calibration and unrounded estimated seconds; it is blocked rather than truncated or clamped. Markdown retains every request including holds and blocked cases. Source/audit imports ≤8 MB restore original inputs only; saved approvals and computed results are not trusted.

CSV double-quotes fields and escapes commas, quotes and newlines. Formula-like string prefixes (`= + - @ tab CR`) gain an apostrophe even with multiline content. Real numeric values remain numeric. JSON preserves exact text. Display seconds round to 2 decimals, Markdown to 6; CSV/JSON preserve JavaScript double precision. Do not infer physical timer accuracy from decimal precision.

## Deterministic calculation and honest baseline

For magnification `m = projectedWidth / negativeWidth` and aperture f-number N:

`t2 = t1 × ((1+m2)/(1+m1))² × (N2/N1)² × speedFactor`

This is a same-negative thin-lens effective-f-number irradiance model. Area-ratio shortcut uses `(newWidth/testWidth)²` instead of the magnification term, keeping the same aperture/speed factors. Relative difference = log2(baseline/model) stops. Summary counts approved requests more than 0.1 stop apart and the largest absolute difference. Held requests excluded; over-limit scenarios retained in comparisons and blocked from Exposure CSV. These are model-to-model arithmetic differences, not observed density, measured quality improvement, time savings or semantic accuracy percentages.

A new test strip is mandatory. No reciprocity, transmission, contrast-curve, dry-down, flare, enlarger-head nonuniformity, filter or developer-change correction. Mathematical reductions are allowed by bounded inputs but your enlarger may not support them. No lens/head or paper manufacturer calibration is supplied. Exposure limits reflect your practical choice, not a guarantee of usable results.

## Downloads, privacy, supported devices and offline scope

Initial internet: approximately 23 MB model/tokenizer/config from Hugging Face / its hf.co CDN plus approximately 27.5 MB same-origin runtime assets (UI conservatively says ~29 MB). Downloads are weights coming to the browser, not content uploads. No API key, agent credentials, remote inference, optional provider, paid dependency or telemetry. Documents remain in RAM and user-downloaded exports; Cache API stores only model/runtime files, not your notes. Network tests capture GET asset traffic without bodies, check no note strings in URLs and no model-host traffic before load; persisted reports omit signed CDN query values.

Current desktop Chrome WASM SIMD and module workers, several hundred MB RAM, GPU disabled tested. No WebGPU needed. Phone layouts 320/390 CSS px tested, not physical phone inference. Other engines and low-memory devices unverified. Runtime/network errors and malformed outputs produce actionable errors; run identity protects input changes, delayed file reads, pending worker fetch and late result/error events.

Cache API permits a fresh worker to perform real inference in a warmed **already-open** page with network disabled. Cold offline navigation/reload is not supported or claimed. Cache eviction, private browsing or denied storage may require new internet downloads.

Immutable same-origin dependencies, checked in runtime-provenance.json:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve those originating apps/assets in the combined collection. This source app bundles React/runtime coordination locally and reuses the existing immutable neural runtime to avoid another ~28 MB copy. No CDN JavaScript execution. The model revision follows the shared runtime's model host configuration; no pinned-revision guarantee.

## Build and validation

`npm install && npm run predeploy` builds React + Vite at `/daily-app2/20261127-20/`. Per-app deploy scripts/dependency are retained, but **publish only from repository root** using its combined `deploy/` workflow. See VALIDATION.md for observed results, limits and publication status.

Tests: core-test.mjs; independent 50-digit Decimal core-replay.py; browser-test.cjs with actual CPU inference, downloads, review/undo/hold, batching, offline, privacy and phone-layout checks; artifact-test.py using independent CSV/JSON parsing; defensive-test.cjs for injected error-only paths; recovery-test.cjs for real download failure/retry plus stale events; import-race-test.cjs; gallery tests; byte-identity public-audit.py. Fault injections are never used to claim successful inference. Successful small synthetic examples are not representative semantic accuracy or real photographic-quality validation.
