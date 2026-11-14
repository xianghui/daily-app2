# Evidence Loom

Local AI outcome reconciliation and reviewed common-effect evidence synthesis for operations analysts. This is distinct from study eligibility screening, A/B count comparisons and forecast scoring: its inputs are already-computed signed study estimates and standard errors; its output is a source-linked precision-weighted synthesis with heterogeneity and influence checks.

## Workflow

1. Open a synthetic example, paste source JSON, or import `.json`. Define 2–6 outcome anchors (`id`, `label`, `description`, `unit`, signed `target`). Each of 1–32 records needs `id`, `description`, signed `effect`, positive `se` (standard error, **not standard deviation**), independent `study` and `owner`.
2. Read download/privacy information, explicitly click **Load AI & match outcomes**. Real local MiniLM embeddings rank supplied outcome descriptions against each experiment summary. Source snippets, both candidate descriptions and cosine values are inspectable. No suggestions exist until inference succeeds; failure never substitutes a heuristic/demo.
3. Review outcome, unit, direction, numeric effect, SE and independent study identity. Correct or hold every row. Different study IDs do not prove independence. Repeated samples or incompatible effects must be held, not renamed. AI cannot verify these assumptions. Add multiline review notes/owners; undo restores the last edit.
4. **Apply reviewed worksheet**. Pending decisions, invalid numbers or duplicate approved study IDs within one outcome block applying. Every review edit invalidates applied exports. Held rows leave calculations, never the audit. A single estimate is explicitly labeled, not called synthesis.
5. Compare the inverse-variance mean with an unweighted mean of the same approved rows. Inspect normal approximate 95% intervals, signed target comparison, Q, df, descriptive I² and (at least three estimates) leave-one-out results. A high-I² review cue is not a formal test. Challenge comparability before using a result.
6. Download JSON, CSV or Markdown; copy Markdown. Actual current applied reviews drive artifacts. JSON retains exact original input and full calculations/evidence; CSV includes every original description/value and every reviewed row, including holds. Signed numeric effects remain numeric; formula-like text is escaped with a leading apostrophe. Reimport an audit restores originals only—new inference and review required. Nothing is sent, launched, purchased or changed externally.

## Actual AI and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized `q8` ONNX, about 23 MB weights plus tokenizer/config files. Model host revisions are not pinned; later upstream revisions may change inference/cache behavior.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0, bundled into a module worker; ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT), WASM CPU. No WebGPU or API key required. Normalized mean-pooled 384-dimensional embeddings; four texts per batch; truncation at 256 tokens/text.
- CPU binary: 26,861,777 bytes, reused byte-identically from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve that immutable collection asset.** Module factory bundled under this app's `runtime/`; application JS/CSS/worker bundled locally. Installed factory and shared binary were byte-compared; hashes in `asset-audit.json`.
- First load needs internet, approximately 50 MB model/runtime downloads plus app code. Worker/model/runtime progress and cancellation are visible. Current desktop Chrome, module workers, Cache API, WebAssembly SIMD, and several hundred MB free RAM recommended. Physical phones, low-memory devices and other browsers are not validated. CPU path was tested with GPU disabled, not merely proposed as fallback.
- Worker source, WASM factory/binary and model files use browser Cache API where available. After a successful online run, **a new worker in an already-open warmed page** was tested with all network blocked. Offline reload, first navigation or installed PWA startup is **not** promised; no service worker. Cache eviction or denied storage may require new downloads.

## Privacy and bounds

Default/only inference is local. User content remains in browser memory; no content persistence, analytics, remote inference or credentials. Network traffic is file GET downloads from this collection and Hugging Face/CDN, not content uploads. Loading a model is not uploading source data. Reports retain host/path and query-key names, never signed CDN query values. Imported instruction-like text remains data, never gains authority or requests credentials.

2–6 anchors; 1–32 rows; 300 characters/description; 30,000 source characters; import file ≤2 MB (audit originals also must meet source limit); IDs ≤50; label/study ≤100; unit ≤80; owner ≤150; review note ≤1,000. Effect/target −100,000 to 100,000; SE .01 to 100,000, finite numeric values only. No automatic unit conversion or numeric extraction. Four texts per chunk; 180-second timeout. Cancel/input edits terminate workers and increment run identity. Worker downloads and asynchronous file reads also check identity, so late work cannot overwrite a new input. Malformed vector counts/dimensions/nonfinite values/norms are rejected. Network/runtime/worker/schema/timeouts expose errors and retry, never fake AI.

## Deterministic method and limitations

For yᵢ and standard error sᵢ: wᵢ=1/sᵢ²; mean=Σwᵢyᵢ/Σwᵢ; pooled SE=√(1/Σwᵢ); normal 95% interval=mean±1.96SE. Unweighted baseline=Σyᵢ/n. Q=Σwᵢ(yᵢ−mean)²; df=n−1; I²=max(0,(Q−df)/Q), zero when Q=0, null when n=1. I² is a descriptive fraction, **not confidence**. Leave-one-out repeats pooling after omitting each record, for n≥3. Target comparisons use strict above/below interval bounds; touching/crossing is unresolved.

Requires independent, comparable estimates of one common effect, consistent signed units/context and valid known SEs. No random-effects model, small-sample/t correction, covariance, publication-bias correction, significance p-value, clinical guidance or causal guarantee. Heterogeneous studies may make a common-effect interval misleading; the UI flags a descriptive I²>0.5 review cue, not an inference rule. Similarity is not equivalence or study validity; the model always selects a nearest supplied anchor even for irrelevant text, which must be held. No fabricated confidence, timing savings or accuracy claims. The baseline difference is computed—not evidence that either estimator is unbiased.

## Development, validation and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261115-2/`. Per-app `deploy` script retained for contract only: **publish from collection root** via `npm run predeploy` then `npm run deploy`, so the collection stays intact. The shared runtime asset must remain deployed.

See [observed validation](VALIDATION.md), browser/defensive JSON reports and downloaded synthetic artifacts. `node browser-test.cjs` targets local production bundle at port 6852 (start `node serve.cjs`); `python3 arithmetic-test.py` checks independent exact-rational cases; `python3 artifact-test.py` reopens browser downloads. Public verification reruns the suite using `APP_URL`, after matching gh-pages and built Pages commits and byte-checking public assets. Screenshots cover 1440/390/320 CSS pixels, not physical-device testing.
