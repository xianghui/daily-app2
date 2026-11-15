# Reach Quilt

A local-AI overlap-count audit for campaign and community-service analysts. Reconcile differently worded channel names, review inclusive person-count intersections, derive exclusive audience segments and unique reach, and catch internally impossible reports before copying them elsewhere. No accounts, outreach or external actions.

## Workflow and input/output

1. Choose a synthetic learning campaign/community-services fixture or paste/import JSON. Define `context`, a person-count `universe`, unique-reach `target`, `channels: [{id,label,description}]`, and `observations: [{id,parts:[informalChannelDescription,...],count}]`.
2. Supply **every nonempty inclusive intersection** exactly once: 3 rows for 2 channels, 7 for 3. A+B includes anyone also in C. It is not union A-or-B and not A/B-only. Zero must be supplied explicitly; missing is never assumed zero. Within-channel counts must already be deduplicated; all counts must use the same population, identity and period.
3. Explicitly load local AI. It embeds every channel definition and informal channel mention, ranks cosine matches and proposes a channel-set mask for each tally. Inspect source descriptions and top-two evidence, correct the complete channel set/count, and approve or hold every row. A channel/count change resets approval. Undo restores review edits; originals are never changed.
4. Apply. Missing, duplicate or held combinations, negative exact segments or union above universe block the **whole** report. When ready, see exact segments, outside population, unique reach, target gap and naive single-channel-sum baseline.
5. Export current JSON audit, all-row CSV, ready-only exact-segment CSV or Markdown; copy the worksheet. All review edits invalidate prior applied results. JSON is lossless and preserves every original/review/evidence; CSV protects leading formula-like strings with an apostrophe (including multiline notes), while numeric counts remain numeric. Reimport source/audit JSON restores originals only and requires renewed AI/review.

Limits: 2–3 channels; 1–24 observations (extras are retained but duplicate/missing sets block release); 1–channel-count informal descriptions per row; 300 characters per context/description/label; integer counts 0–1,000,000; universe 1–1,000,000; target 0–universe; 50,000 source characters; source/audit files under 2 MB. Maximum 75 embedding texts, processed four at a time. JSON only; PDFs/CSV imports are not supported.

## Real model, runtime, licenses and downloads

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX neural sentence embeddings. Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), single-thread **WASM CPU**, not a server. Normalized mean-pooled 384-dimensional vectors are validated for count, dimensions, finite values and normalization before ranking. Actual tokenizer ceiling is 512 tokens; source descriptions are capped at 300 characters. The shared pipeline's `max_length:256` hint is not advertised as an enforced cap.

First use needs internet for approximately **23 MB model + 27 MB CPU runtime**, plus worker/tokenizer assets. Hugging Face/CDN hosts model files on the model repository's main revision; upstream changes may require revalidation. App code and immutable shared runtime dependencies are same-origin:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these originating app builds when deploying. `asset-audit.json` records bytes and SHA-256. Reuse avoids copying another 27 MB runtime into the collection. The worker accepts `{id,texts}` and emits progress/batch messages plus `{id,type:'result',vectors}`. It does actual neural inference; there is no deterministic or canned fallback.

## Privacy, devices and caching

No API keys, paid provider integration, uploads, telemetry, backend or private data fixtures. User content remains in page memory and exports, not model-download URLs/bodies. Downloads retrieve public assets, not remote inference. Imported text cannot gain tool authority or request credentials. Requests were audited from production page startup through real inference; only GET asset downloads occurred, and no fixture text appeared in complete request URLs. No model request occurs before explicit load.

Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. No WebGPU needed. Desktop Chrome CPU with GPU disabled was tested. Physical phones, low-memory devices, Safari and Firefox are unverified. Responsive 1440/390/320px layouts and visible phone screenshots were checked; this is not a claim of physical-phone inference testing.

Worker source, module factory, WASM and model files cache locally. Tested offline scope: **fresh-worker real inference in an already-open warmed page with networking disabled**. Offline startup/navigation/reload is not promised. Private mode, unavailable caches or eviction may require redownload. Progress, cancel/retry, 180-second timeout and actionable errors cover load/runtime failures. Cancel terminates the worker; generation IDs guard delayed worker fetches, imports and late messages from overwriting newer state.

## Deterministic audit and limitations

For each nonempty channel subset, subtract exclusive counts of strict supersets from its supplied inclusive count (Boolean-lattice inversion). All exclusive cells must be nonnegative integers; reconstruct every inclusive intersection and check exact cells plus outside population equals the universe. No independence assumption, statistical estimation or unknown-overlap imputation is used.

The baseline sums single-channel counts. Its excess above unique reach counts repeated **memberships**, not the number of duplicated people. A person in three channels adds two excess memberships. Targets are descriptive checks of reviewed counts, not forecasts. This workflow cannot estimate causal/incremental attribution, verify identity deduplication, or correct inconsistent populations/windows. Feasibility does not prove source accuracy.

Semantic matching is not factual identity. It always returns a nearest candidate, including for unrelated/negated text; humans must hold or correct unsuitable rows. Multiple informal mentions can collapse to the same suggested channel: inspect and correct the complete set selector. An unrelated instruction-like fixture matched a channel and was manually held. No confidence percentages or general accuracy claims.

## Validation and deployment

`npm run predeploy` builds React + Vite with `/daily-app2/20261116-7/`. Required per-app deploy scripts remain, but publish **only** via root combined `predeploy`/`deploy`; per-app deploy replaces the collection. See `VALIDATION.md` and machine-readable reports for actual observed checks, fixture results and limitations. `oracle-test.mjs`, `browser-test.cjs`, defensive/stale tests, Python artifact parser and gallery tests are repeatable validation harnesses. Browser success paths load the real model; fake workers appear only in explicitly labeled defensive tests.
