# Audit Estuary

A two-inspection reconciliation desk for quality leads. Paste/import synthetic-shaped JSON containing category definitions and detection logs from two passes. MiniLM reconciles different descriptions into consistent categories; people verify category, pass and shared issue identity. Apply reviewed rows to see observed overlap, A-only/B-only cross-check lists and an explicitly exploratory Chapman estimate of unseen issues. Export the current applied JSON audit, detection CSV or Markdown owner worksheet. No sending, issue closure, remote actions or API keys.

## Workflow and limits

Choose either synthetic example or edit the JSON. Supply `project`, 2–6 `rules` (`id`, `label`, `description`) and 1–32 `records` (`id`, `description`, `pass` A/B, shared issue `entity`, `owner`). Descriptions ≤300 characters, source ≤30,000 characters, IDs ≤40, shared issue IDs ≤60, owner ≤150. Source/audit JSON files ≤2 MB. Audit import restores originals only; approvals and inference must be renewed. Descriptions are immutable original evidence; review identity/pass/category/owner and notes separately. Hold unsuitable matches. Undo is available for the last 100 review edits; originals are always retained. Edits invalidate applied exports. Four texts per inference batch, max 256 tokens/text, timeout 180 seconds. Cancel terminates the worker; changed inputs invalidate pending file/worker callbacks.

Case-sensitive shared IDs identify *the same issue*, not similar wording. Duplicate issue IDs within a pass or conflicting categories across approved detections block applying. Held detections remain in every artifact but are excluded from overlap and make the worksheet partial. Row count and original identity/order are validated. Each category shows its observed union baseline and deterministic Chapman total `((A+1)*(B+1)/(overlap+1))-1`; zero overlap produces no estimate. A-only/B-only lists and reviewed owners support concrete cross-checks. Literal-label coverage is a computed wording baseline, not accuracy or time savings.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, approximately 23 MB plus tokenizer/config files. Model files download from Hugging Face and its CDN after explicit Load AI only.
- Runtime: bundled [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0) with ONNX Runtime Web WASM CPU (MIT). Inspect package-lock for exact dependency versions. Mean-pooled, normalized 384-dimensional embeddings; cosine matching against supplied definitions. Finite vector shape/norm checked before use. Similarity is not confidence; out-of-domain notes and negation can misclassify. There is always a nearest category, so human hold/correction is mandatory.
- First run needs internet: approximately 27 MB WASM plus model. Code, worker and runtime factory served by the collection; immutable shared WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must be preserved. Byte-identical to the installed runtime. No backend or WebGPU dependency.
- Recommended/tested: current desktop Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB free memory. Narrow desktop emulation tested; physical phones, Firefox and Safari unverified. WASM CPU is the default, not an untested fallback. Runtime/model errors show actionable errors, no fabricated outputs.
- All user content remains in browser memory. Downloads of weights do not upload source text. No analytics, remote inference, provider credentials or persistence of notes. Model/runtime/worker caches contain public code/weights only. Cache eviction and private mode can require redownload. Default tests observed GET/file requests without request bodies.
- Tested offline scope: after one online run, a fresh worker can infer in an already-open warmed page with networking disabled. Offline page reload/navigation is **not** promised. Worker source, WASM binary and module factory use Cache API; model caching is provided by Transformers.js.

## Statistical limitations

Use a closed issue population, genuinely independent inspection passes, correct cross-pass IDs and roughly equal detectability. Shared hints, repairs between passes, misidentification and heterogeneous defect visibility can invalidate estimates. Tiny overlaps are unstable. No confidence interval, representative sampling guarantee or verified missing count. Estimates are not certification, forecasts or discovered defects. A zero-overlap result is not zero unseen issues. The worksheet deliberately distinguishes observed IDs from fractional assumption-based estimates.

## Export and build

JSON retains original input, every review, AI evidence and current metrics. CSV retains original record JSON and reviewed fields, including holds; leading formula-like text is escaped for spreadsheets, signed numeric values are not used here. Markdown supplies category cross-check lists and every owner/review. Copy uses the Clipboard API; download remains available on clipboard failure.

`npm run predeploy` builds Vite with base `/daily-app2/20261114-17/`. Required per-app `deploy` exists but **do not use it**: publish through root `npm run predeploy` and `npm run deploy`, preserving the collection. See root README for Pages commit verification.

See VALIDATION.md and machine-readable reports for observed checks and limitations. All committed fixtures are synthetic.
