# Tax Weave

A recurring purchase-list reconciliation utility for studio bookkeepers. **Not tax advice, a filing, invoice authentication or an accounting integration.** Example rates are hypothetical.

## Workflow

1. Choose Studio purchases or Workshop purchases, paste JSON or import a source/audit JSON. Set your category descriptions and supplied `rateBps` (2000 = 20%). All lines must share a currency with 100 minor units.
2. Click **Load AI & reconcile purchases**. Real local semantic inference proposes categories. It never supplies tax rates or amounts and cannot establish legal tax treatment.
3. Inspect source notes and candidate cosine evidence. Correct the category, integer cents or inclusive/exclusive basis; add multiline owner/follow-up notes. Approve or hold every line. Undo restores the last review edit. Source edits discard results, protecting against stale runs.
4. Apply to create a current reviewed worksheet. Held lines remain in the register but are excluded from subtotals. No external system is changed.
5. Download JSON, CSV or Markdown, or copy the worksheet. JSON retains originals, all reviews and evidence. CSV retains every line including holds and uses spreadsheet formula-prefix protection. All monetary fields are integer cents. JSON audit import restores **originals only**, requiring renewed AI and review; it does not trust previous approvals.

## Real AI, model and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, approximately 23 MB weights/tokenizer. Runtime: `@huggingface/transformers` 4.3.2 and ONNX Runtime Web (Apache-2.0/MIT respectively; see installed package licenses).
- Mean-pooled normalized 384-dimensional embeddings; cosine ranking compares purchase descriptions to user-supplied categories. Four texts per batch, 256-token cap; exact output count, dimension, finite values and norm validated. Scores are similarity, **not confidence**. Even irrelevant/negated text gets a nearest candidate, so nothing is auto-approved.
- Default WASM CPU works without WebGPU or an API key. Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM was tested. Physical phones, Safari, Firefox and low-memory devices are not verified.
- Initial download: about 23 MB model + 27 MB CPU WASM + under 1 MB app/worker plus runtime module. Internet required initially; loading shows file/batch progress and supports cancellation. Runtime files are same-origin; model files download from Hugging Face/CDN. No remote AI path exists.
- The immutable byte-identical WASM is reused at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve it in combined deployments. Vite rewrites the emitted worker reference; the module factory is bundled under `runtime/`.

## Privacy, cache and failures

Purchase content stays in page/worker memory. No content uploads, analytics, API credentials, automatic remote actions or content persistence. Explicit model loading sends GET requests for static files only; downloads are not content uploads. Imported text is data, never tool authority. Only synthetic fixtures are committed.

Cache API stores worker source, runtime factory and WASM; Transformers.js caches model files. After an online run, **an already-open warmed page** can start a fresh worker and infer offline (tested with browser network disabled). Offline navigation/reload is **not promised**. Cache eviction/private-mode restrictions require redownload. Source changes, cancellation or timeout terminate/invalidate work; no fallback labels or fabricated output appear on errors. Timeout: 180 seconds. Network, worker, unsupported runtime and malformed embeddings produce actionable errors and retry controls.

## Input/schema and limits

JSON object: `{project, categories:[{id,label,description,rateBps}], records:[{id,description,amountCents,basis,owner}]}`. IDs unique within each list. `basis` is `inclusive` or `exclusive`.

1–8 categories, 1–32 records; descriptions ≤300 characters, labels ≤80, IDs ≤40, project/owner ≤150. Source JSON ≤30,000 characters; import envelope/file ≤2 MB. Amount 0–100,000,000 cents; rate 0–10,000 basis points. Review note ≤1,000 characters. Rates are edited in source; doing so requires a new run and review. Negative/refund amounts, mixed currencies, compound taxes, per-unit input and invoice-level rounding are unsupported.

## Deterministic accounting assumptions

Inclusive tax = amount × bps / (10000 + bps); exclusive tax = amount × bps / 10000. BigInt intermediates round the exact tax **half up per line**; inclusive net = supplied gross minus rounded tax. Exclusive gross = supplied net plus rounded tax. Every approved line and every group satisfy net + tax = gross. Held lines have null computed amounts.

Baseline treats **the same approved lines and reviewed rates** as all-exclusive. Difference from reviewed gross is an arithmetic basis-assumption comparison, not measured savings or model accuracy. Literal-label coverage measures notes containing a full reviewed label, not correctness. Tax eligibility, deductibility, special schemes, jurisdiction rates, invoice rounding conventions and completeness must be checked by a qualified person.

## Development, deployment and validation

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Required per-app `deploy` exists but **do not invoke it**: publish through the root combined-site workflow. Base `/daily-app2/20261114-7/`.

`node core-test.mjs && python3 oracle-test.py` checks 8,004 independently verified rational tax cases plus schema and conservation guards. `node browser-test.cjs` uses Chrome/Playwright to load real production AI on two synthetic domains, review/edit/hold/undo/export, maximum batch, cancellation/stale invalidation, offline fresh-worker and responsive layouts. `node defensive-test.cjs` injects failures only for defensive tests. `python3 artifact-test.py` independently reopens actual downloaded artifacts. `python3 asset-test.py` checks bundle paths, runtime identity and credential patterns. Test dependencies use the host's installed Playwright. See VALIDATION.md and machine-readable reports for actual outcomes and limitations.
