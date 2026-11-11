# Asset Calendar

Local AI-assisted policy matching and reviewed straight-line monthly depreciation worksheets for small-team bookkeepers. This is distinct from existing expense coding, inventory allocation and project accounting apps: it turns asset notes into a policy-linked fixed-asset register and complete useful-life schedule.

## Workflow

1. Paste/import JSON with `asOf`, `policies` and `records`, or try **Office register** and **Studio register**. All fixtures are synthetic.
2. Supply policies `{id,title,description,months}` and assets `{id,text,cost,residual,start}`. Monetary amounts are **integer cents**, one currency per register; no currency conversion. Dates are `YYYY-MM`.
3. Explicitly **Load AI & match policies**. Inspect each source description, semantic alternatives and cosine similarities. Verify policy, cost/residual and service month; approve or hold each asset. Edits reset approval; undo restores the previous review layer. Original inputs stay intact.
4. Set useful lives and inclusive reporting month, then **Apply reviewed schedule**. Settings changes invalidate exports. Held assets are preserved but excluded from calculated totals, not treated as zero-valued assets.
5. Download JSON (complete originals, review/settings, schedules), CSV (all-asset audit), Schedule CSV (approved monthly charges only), Markdown (summary), or copy the current applied worksheet. JSON reimport deliberately restores original data only: reviewed edits/settings/approvals do not auto-restore. Export the JSON audit to retain them for inspection.

## Real AI and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), [upstream sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX learned feature extraction with normalized mean-pooled 384-vectors, four texts per batch, first 256 tokens per text. These are genuine model outputs, not regex classification or canned responses.
- Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). App/worker/module factory bundled locally. CPU WASM SIMD default; WebGPU is not required. No server, API keys, paid services, telemetry or optional remote provider.
- Explicit first load needs internet: approximately **23 MB** model/tokenizer download from `huggingface.co`, `hf.co` and its CDN (observed `us.aws.cdn.hf.co`), plus **27 MB** same-origin WASM runtime. Browser memory requirements exceed download size; allow several hundred MB free.
- Immutable same-origin shared WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that earlier app when deploying. Vite rewrites the emitted worker path to this byte-identical runtime, avoiding duplicate collection storage.
- Default user content stays in the browser worker. Network inspection from production startup through real inference saw GET downloads only with no request bodies or sample content in URLs. Loading weights is not uploading content. Imported instructions are inert data; the model cannot call tools or request secrets.
- Cache API stores worker, WASM factory and binary; Transformers.js caches model files. A new worker with **all network disabled** successfully ran real inference after online loading in the already-open page. Offline reload/navigation is **not promised**; cache eviction/private mode can remove assets. No input or reviewed register is intentionally persisted by this app; downloads and clipboard are explicit actions.

## Deterministic policy

Useful lives must be supplied and verified by the user; AI never estimates them. Only straight-line depreciation is supported, with the full first service month included. For basis `cost − residual`, cumulative depreciation after `k` elapsed months is `floor(basis*k/months)`, bounded to the useful life. Monthly charges are differences of cumulative values. Remainder cents are spread deterministically; all monthly charges sum exactly to basis, final book value equals residual, and cost always equals accumulated depreciation plus book value. Before service, accumulated is zero. There are no implicit disposals, impairments, additions or tax rules.

The always-first-policy baseline uses the same approved costs, residuals, start dates and reporting month, but assigns the first policy to every asset. This is a sensitivity comparison, **not** savings, accuracy or an accounting recommendation. AI/reviewer agreement and baseline/reviewer agreement are counts, not independently verified model quality.

## Limits and errors

2–6 policies; 1–24 assets; life 1–120 months; AI text ≤400 characters, title ≤80, IDs ≤40; canonical original JSON ≤24,000 characters; file/serialized import ≤1 MB; nonnegative integer cost/residual ≤1,000,000,000 cents, residual ≤ cost; input/reporting months 2000–2099. Schedules may extend beyond 2099 for later service starts. Complete supported originals and all approved schedule rows are exported, including unused policy definitions and held assets in the register audit.

Current desktop Chrome with WebAssembly SIMD, module workers and Cache API is tested. Narrow viewport emulation is tested, not physical phones. Other browsers, assistive technology and memory-constrained devices are unverified. Loading status, batch progress, cancel and retry are visible. Network errors, unsupported workers/WASM, timeout (180s), invalid vector schemas and bad inputs leave no fake output. Run IDs guard worker construction, late messages and asynchronous file imports. Cancellation terminates inference workers; it does not guarantee an already-issued browser download instantly stops.

## Limitations

Similarity is not accounting equivalence, confidence or tax classification. The simple fixtures matched 8/8 known policies; a negated office-chair description incorrectly matched the computer policy. Unrelated/instruction-like text also receives a nearest policy, so manual hold is essential. No automatic certainty threshold, compliance claim or ledger posting is provided. Mixed assets should be split by the user. Useful lives in the examples are teaching assumptions, not approved policies. This initial-cost worksheet does not replace an existing ledger or reconcile prior booked depreciation.

## Development and validation

`npm install`; `npm run dev`; `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **do not run per-app deploy**: publish combined collection through repository root.

See [VALIDATION.md](VALIDATION.md), browser/core/defensive reports and independent downloaded-artifact checks. `python3 serve.py` serves the production bundle at `http://127.0.0.1:6432/daily-app2/20261111-12/`; the shared WASM must be present in the root assembled deploy tree. Browser tests use the workstation Playwright/Chrome installation; they are not runtime dependencies.
