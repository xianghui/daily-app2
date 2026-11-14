# Interval Orchard

A local-AI maintenance-interval review utility for planners reconciling rough equipment notes to supplied reliability profiles. Distinct from calendar-recurrence tools: it compares **age-replacement renewal cost rates** across an explicit feasible age grid, rather than merely expanding reminders. No equipment connections or maintenance dispatch.

## Workflow

1. Open a synthetic example, paste source JSON, or import a `.json` source/audit.
2. Define 2–6 equipment profiles and 1–32 asset notes. Enter your own verified lifetime assumptions and same-currency replacement costs. `currentAge` means **existing replacement interval**, not current asset age.
3. Explicitly click **Load AI & match profiles**. Review ranked source profile descriptions and cosine similarity; it is not confidence.
4. Correct profile links/parameters, enter verification notes and owners, then approve for calculation or hold every asset. Profile changes reset profile defaults. Undo reverses individual review edits.
5. **Apply reviewed worksheet** compares baseline and grid-best rates. Review boundary flags and assumptions with the owner before any real scheduling.
6. Download JSON/CSV/Markdown or copy the worksheet. Edits invalidate exports until reapplied. Audit reimport restores originals only, not old approvals. Every held record survives JSON/CSV/Markdown; held assets have no calculations.

## Real AI / static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, approximately 23 MB plus tokenizer/config downloads.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Local worker uses normalized mean-pooled 384-dimensional embeddings. Cosine similarity matches notes to profile descriptions. No LLM instructions or generated parameter estimates.
- Four texts per inference batch, truncation at 256 tokens/text; descriptions ≤300 characters. Finite normalized vector count/dimension is validated before ranking. No fake responses or heuristic fallback.
- Approximately 27 MB WASM binary is reused byte-identically at the collection's immutable `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this path in root deployments. The module factory and app worker are bundled under this app's base. `asset-audit.json` records hashes.
- Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free memory. No WebGPU required; tested with GPU disabled. Physical phones and other browser engines are unverified. 320/390px responsive layouts tested in desktop Chrome emulation.
- First load requires internet and explicit load-button invocation. Model downloads use Hugging Face and its CDN (`huggingface.co`, `hf.co` and signed CDN redirects); model hosts may change. Content is never included in requests.
- Worker/runtime/model files use Cache API. Tested scope: **fresh-worker inference offline inside an already-open page after online warming**. Offline reload/navigation/app-shell startup is NOT promised. Private mode/cache eviction may require downloads again. Cancel terminates worker, progress reports downloads and processed batch counts; timeout is 180 seconds. Download/runtime errors offer retry, not canned results.

## Privacy and data flow

Source text → local model embeddings → local matching → editable review → deterministic worksheet → user-triggered local downloads/clipboard. No backend, telemetry, API integration, shared/user keys, content uploads or external actions. Input remains in memory unless explicitly exported; caches contain runtime/model files only. Refresh loses content. Imported instructions are data, never authority. Only synthetic fixtures are committed. Network audit checks GET-only file downloads and omits temporary signed query values from saved reports. Credential pattern checks are not a comprehensive security certification.

## Schema and limits

Source JSON has `rules` and `records` arrays. IDs must be nonempty, ≤50 characters and unique within each array. Rules need `id`, `label` ≤100, `description` ≤300, numeric `shape` .5–8, `scale` 1–10000 days, `minAge`/`maxAge` 1–10000 days with max ≥ min, and positive `step` ≥1 day. At most 200 grid candidates. Fractional ages/steps are allowed. Records need `id`, `description` ≤300, `currentAge` 1–10000 days, `plannedCost` >0, `failureCost` ≥ plannedCost (both ≤10 million), `owner` ≤150. Source ≤30,000 characters. Source/audit files ≤2 MB. Review notes ≤1000 characters.

Only JSON imports are supported. Export CSV includes all reviewed numeric inputs, original descriptions, owner/notes, decision and approved-result rates; string formula-like cells receive a protective apostrophe, while numeric fields remain numeric. JSON is the lossless complete audit (originals, review evidence, decisions, calculations). Markdown is a human handoff, not a machine schedule. CSV/Markdown do not restore original review state.

## Deterministic calculation

For Weibull lifetime with shape k and scale λ, survival `S(t)=exp(-(t/λ)^k)`. A renewal ends at failure or age a, whichever is first. Expected cost is `plannedCost*S(a)+failureCost*(1-S(a))`; expected duration is `∫0ᵃ S(t)dt`; rate is cost/duration. Integrate after `t=λ*x²` using 2048-panel composite Simpson quadrature, omitting survival tails below exp(-40). Independent incomplete-gamma comparisons cover 248 boundary/random cases (see validation).

Search `minAge+i*step ≤ maxAge`, choose the lowest estimated cost/day (earliest on exact ties), compare with the existing interval, and flag first/last-grid optima. The upper bound is not automatically included when step does not divide the range. The baseline may lie outside the grid; a positive improvement is not guaranteed. No continuous global optimum or measured savings claim. No aggregate cost/day is shown because asset independence/counts and shared downtime may not justify summation.

Assumes independent as-good-as-new renewals, instantaneous replacement, constant costs, one currency, no discounting and correct supplied parameters. Failure cost includes replacement and all supplied consequences. No data fitting, censored-life estimation, repairable-system aging, downtime/availability, capacity or condition-monitoring model. AI semantic similarity is not equipment identity or engineering approval. Unrelated notes still get a nearest profile: use holds. Not for safety-critical decisions.

## Build, validation and publishing

`npm install`; `npm run predeploy`. Per-app `deploy` exists to satisfy collection convention but **do not invoke it**: publish from root `/Volumes/ExternalHD/daily_app2` with its combined deployment workflow.

See `VALIDATION.md` and machine-readable reports. Browser tests use installed Playwright/Chrome; independent arithmetic uses SciPy in an external test-only virtual environment (not shipped). Production/public tests must execute actual model inference, not mocks. Fault injection is used only for defensive error checks. No app-shell service worker is installed.
