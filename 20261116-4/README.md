# Pilot Bridge — local AI pilot/reference review

Operations teams paste rough KPI aggregate notes, reconcile them against a canonical metric register with actual neural embeddings, review every identity/group/period/value, then export a descriptive before-after comparison and rollout follow-up checklist. This is not a chat wrapper, causal-effect estimator or rollout decision engine.

## Workflow

1. Open either synthetic example or paste/import a JSON source. Set `context`; 1–6 `metrics` with unique `id`, `label`, semantic `description`, `unit`, `direction` (`increase`/`decrease`) and nonnegative `minimum` meaningful net change. Set these thresholds before looking for favorable results.
2. Supply 1–24 `observations`: unique `id`, `description`, explicit `arm` (`pilot`/`reference`), `period` (`before`/`after`) and numeric `value`. All four cells must be comparable aggregates in the metric's unit. Use comparable populations/windows/denominators; combine duplicate aggregates appropriately upstream.
3. Explicitly click **Load AI & reconcile KPIs**. Read download/privacy information first. Inspect the top two cosine scores and canonical descriptions; these scores are not probabilities or confidence. AI only suggests metric identities, never numbers/groups/periods. Unrelated text still gets a nearest candidate; hold it.
4. Edit suggestions, group, period, value and multiline follow-up notes. Every substantive edit resets that observation's approval; every edit invalidates exports. Approve or hold every observation. Undo is available for the last 100 review edits. Originals remain unchanged.
5. Apply. Any missing/duplicate/held cell blocks the entire affected metric. Ready metrics show pilot change, reference change, net change and goal flags. Baseline = signed pilot-only change versus supplied threshold; adjusted = signed (pilot change minus reference change). Counts are recomputed on ready metrics, never mixed-unit amounts or accuracy estimates.
6. Download current JSON (lossless original/review/result audit), CSV (every source and reviewed field), Metric CSV (every registered metric, including blocked ones), or Markdown (comparisons, every source/note, follow-up checklist). Copy current Markdown when clipboard permission permits. Source/audit JSON imports restore only originals and require renewed inference/review. No external sending, accounts, integrations or dispatch.

## Real AI, dependencies and hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. English semantic sentence feature extraction, quantized q8 ONNX, normalized mean pooling, 384 dimensions.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web/WASM CPU (MIT). No WebGPU needed; CPU path actually tested in desktop Chrome with GPU disabled. Four texts per inference batch. The feature-extraction tokenizer's actual model limit is 512 tokens; source descriptions are bounded at 300 characters. A pipeline max_length hint in the shared worker is not treated as an enforced 256-token cap.
- Initial model download approximately 23 MB, CPU WASM approximately 27 MB, plus bundled worker/module glue. Hugging Face and its CDN provide model assets; no API key/paid provider. Network traces are retained with signed query values omitted.
- This app bundles React/UI locally and reuses immutable same-origin collection assets: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older apps in combined deployments. Hashes: `asset-audit.json`. Worker protocol `{id,texts}` → progress/batch/result `{id,vectors}` or error. Inspected real worker source; no content upload operation or tool authority.
- Requires a modern secure-context browser with WebAssembly SIMD, module workers, Cache API and several hundred MB available memory. Physical phones and other browsers are not verified. Phone-width Chrome layouts were checked, not phone hardware inference.
- Worker source, WASM factory/binary and model assets are cached via Cache API/runtime model cache. Tested offline scope: fresh worker in an already-open warmed page, with all network disabled. Offline reload/app-shell startup is NOT promised. Eviction/private mode can require redownload. No service worker/offline navigation claim.

## Privacy, limits and failure handling

User content stays in page/worker memory; it is not uploaded to the model host. Downloads retrieve weights, not send notes. No telemetry, optional remote providers or credentials. Tests inspect request methods/bodies/URLs. Asset credential-pattern scan is supplementary, not an exhaustive security proof. Only synthetic fixtures are committed.

Source JSON under 50,000 characters; source/audit files under 2 MB. IDs use 1–32 ASCII letters/digits/underscore/hyphen; labels, context, descriptions and units 1–300 characters; finite values bounded to ±1e9; minimum 0–1e9; note at most 1000 characters. 1–6 metrics, 1–24 observations, up to 30 texts. Exact vector count, 384 dimensions, finiteness and approximate unit norm validated. Empty/bad/oversized/unsupported files, worker/download/model failures and 180-second timeout show actionable errors, not fake output. Cancel/input changes terminate workers and invalidate run IDs; late file reads/downloads/results cannot overwrite newer work. Imported instructions have no authority. There are no content-executing tools.

CSV quotes commas/newlines and prefixes formula-like text cells with apostrophes; numeric fields stay numeric, including negatives. JSON is lossless; CSV formula protection intentionally changes unsafe text presentation. Calculations use ordinary finite JS floating-point arithmetic; display rounds to eight significant digits, exports retain underlying values. Threshold decisions use underlying values: inspect near-boundary values, do not infer meaningful precision from rounded display.

## Interpretation and limitations

Difference-in-differences **arithmetic** here is descriptive. One pre-period cannot establish parallel trends; non-randomized groups, spillovers, compositional changes, concurrent interventions, regression to the mean and measurement changes can invalidate an impact interpretation. No standard errors, p-values, confidence intervals, raw-data validation or causal identification. The output checklist asks reviewers to examine pre-trends and confounding and obtain appropriate uncertainty analysis. Goal flags are supplied operational thresholds, not significance. Model similarity cannot verify units, denominators, comparable populations or truth; human approval is mandatory. Missing/held metrics never enter ready-metric goal counts.

## Development and publication

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261116-4/`. Required per-app `predeploy` builds and `deploy` is `gh-pages -d dist`, but **publish only through repository-root predeploy/deploy**, preserving the collection. No individual app deployment.

See `VALIDATION.md`, browser/defensive/stale/arithmetic/artifact JSON reports, screenshots and public byte audits for observed checks and untested scope. Real successful inference is never mocked. Defensive fault injection is explicitly separate.

Published and publicly verified at https://xianghui.github.io/daily-app2/20261116-4/ . Matching Pages build, public real inference, offline fresh-worker inference, reviewed artifact round trips, preserved gallery and runtime byte audits passed; see validation reports.
