# Agreement Grove

A local-AI paired-method agreement worksheet for workshop and nonclinical laboratory coordinators. Rough measurement descriptions become reviewed feature groups; paired readings become descriptive bias/spread/tolerance evidence rather than a misleading average-only comparison. Not an instrument controller, calibration fitter, clinical tool or certification.

## Workflow

1. Choose **Workshop dimensions** or **Room instruments** (synthetic), paste source JSON, or import source/audit `.json`.
2. Define 2–6 features `{id,label,description,unit,tolerance}`. Tolerance is a positive symmetric absolute difference in the same unit as both readings. Supply 1–32 records `{id,sample,description,a,b,owner}`. A is reference, B alternative, already paired for the same sample. The app does not infer sample pairing, units, numbers or independence.
3. Explicitly **Load AI & match features**. The real model ranks feature descriptions for each rough note. Inspect the original and candidate definitions with raw cosine similarity (not confidence). Change a feature to reject its proposal. Edit sample ID, A, B, reviewer and multiline review note. Approve or hold every pair.
4. **Apply reviewed agreement**. Every represented feature needs at least three approved pairs. Duplicate approved sample IDs within a feature block application; this detects explicit duplicates only, not actual dependence. A feature with no approved pairs gets no conclusion. Held pairs are retained but excluded and the worksheet is marked PARTIAL. Correct constraints/definitions in the source and rerun AI/review.
5. Compare mean bias B−A with bias ±1.96 sample SD, the supplied tolerance and observed pair counts. Inspect difference-versus-pair-mean plots and individual point values. A bias-only baseline may look acceptable while the full spread does not. Undo edits; any review/source change invalidates export snapshots.
6. Export JSON (all originals, definitions, reviews, evidence, points and statistics), CSV (all original/reviewed pairs including holds), Summary CSV (feature statistics/tolerance comparisons), Markdown (complete readable audit), or copy Markdown. Audit reimport restores originals only, never stale approvals. No external actions.

## Real AI and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, via bundled Transformers.js (Apache-2.0) / ONNX Runtime Web (MIT), quantized q8 WASM CPU feature extraction. Normalized mean-pooled 384-dimensional embeddings, four texts/batch and 256 tokens/text; descriptions are separately limited to 300 characters. Finite unit-normalized vector count/dimension is validated before deterministic cosine ranking. AI meaning retrieval drives grouping; statistics and guards are deterministic. No hardcoded response, regex classifier, remote inference option, key or paid service.

First use downloads approximately 23 MB model/tokenizer/config plus 27 MB WASM and app/runtime code. Internet required initially. Model files use Hugging Face/CDN redirects; app worker and factory are bundled. The byte-identical WASM is shared from immutable collection asset `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that earlier app during root publishing. Installed versions are locked in package-lock; upstream model revision is not pinned, so future upstream changes need revalidation.

Tested: desktop Chrome headless with GPU disabled, WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. No WebGPU required. Other browsers/physical phones unverified. Progress, cancellation, retry and 180-second timeout are exposed. Cancel terminates worker. Run IDs reject stale worker/file/fetch completions. Failure gives no fabricated classifications.

## Privacy and offline scope

Default user content stays on-device. Downloading weights is not uploading documents. No analytics, remote inference, automatic input persistence or credentials. Imported instructions are data, never tool authority. Cache API stores model, worker and runtime assets, not inputs. An **already-open warmed page** can create a fresh worker and infer offline: tested by disabling all browser networking after online inference. Offline navigation/reload is not supported or claimed. Cache eviction, storage disabled or private browsing may require downloads again.

## Deterministic comparison and limitations

For each approved pair, `difference=B−A`, `mean=(A+B)/2`. Bias is mean difference; SD is `sqrt(sum((difference−bias)^2)/(n−1))`. Descriptive limits are `bias ± 1.96*SD`. Bias-only baseline checks `abs(bias) <= tolerance`; full-envelope check requires lower >= −tolerance and upper <= tolerance. Counts within tolerance use actual pair differences. No estimated improvement, confidence percentage, significance test or realized time saving is claimed. Literal-label coverage is the count of original notes containing their reviewed feature label; it is only wording coverage, not a correctness baseline.

Three is a defensive minimum, NOT an adequate study recommendation. Limits are not confidence intervals or guaranteed future coverage. Assumes independent samples, same units, roughly normal differences with constant spread. Skew, outliers, dependence, heteroscedasticity, source incompleteness and small n can make results misleading. Inspect plots; plan an appropriate larger study. No unit conversion, correction fit, automatic deletion, causal claim or clinical interpretation. Semantic nearest candidates can be wrong even on unrelated/negated notes; human hold is essential. AI cannot validate physical identity or independence.

## Formats and limits

Source JSON ≤30,000 characters; import source/audit `.json` ≤2 MB. No PDF, Excel or CSV import. 2–6 features, 1–32 pairs; unique feature/record IDs ≤40 characters; label ≤80, definition/note ≤300, unit ≤40, sample ≤60, reviewer ≤150, review note ≤1,000. Finite A/B within ±1,000,000; tolerance 0.000001–1,000,000. Numeric signed readings remain numbers in CSV; formula-leading textual cells are apostrophe-protected, including multiline fields. JSON preserves literal text. Exports always use current applied reviewed state, not defaults. Source is always retained.

## Build and validation

`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261114-13/`. Per-app predeploy/deploy scripts exist, but publish this collection ONLY through repository-root `npm run predeploy` / `npm run deploy`. See [observed validation](VALIDATION.md) and the root README. Build alone is not AI validation. Tests use synthetic data; successful workflow tests use the real model, defensive fault injection only tests failure handling.
