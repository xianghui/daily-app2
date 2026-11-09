# Driver Ledger — UNPUBLISHED DRAFT

**Not a completed collection app.** Local real AI/workflow checks passed, but all three Pages deployments failed (two sync timeouts, then immediate cancellation). The public URL remains HTTP 404, so public inference/assets are unverified. Excluded from the gallery and restored combined deployment. Resolve hosting and rerun public checks before promotion.

A no-key, browser-local activity-based overhead worksheet for small-studio operations analysts. Input: cost pools with cents and driver units, plus product activity logs. Bottleneck: logs describe work differently from the accounting pool titles. Output: reviewed activity mappings, proportional product overhead and a cent-conserving reconciliation; no transactions are posted.

## Workflow

1. Choose Print workshop or Digital studio, or paste/import JSON. Use one currency/period and consistent product names. Set each pool's integer `cents`, unit and description; each activity's `product`, text and integer `units`.
2. Explicitly load AI. Read first-download/device/privacy notice. Watch progress or cancel. AI ranks pools by meaning; every activity starts pending.
3. Inspect original log, pool description and candidate cosine similarities. Correct the pool and driver quantity, annotate, approve or hold. Units must match the selected pool; AI does not convert them. Undo is available. Missing activities and held units make allocations provisional.
4. Apply locally. For each pool, distribute costs in proportion to approved driver quantities using largest-remainder integer-cent rounding, input-order tie breaking. Pools with no approved activity stay fully unallocated. Product totals consolidate exact product strings; originals survive.
5. Download current JSON/CSV/Markdown or copy Markdown. Editing invalidates exports. JSON includes original input, all reviews, all pools and product totals; CSV is the complete activity audit, not the full reconciliation. Markdown includes both. JSON reimport restores ORIGINAL input, not approvals or edited quantities, to avoid silently trusting previous reviews.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX feature extraction; [upstream model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Transformers.js 4.3.2 / ONNX Runtime Web; normalized mean-pooled 384-dimensional embeddings, cosine retrieval. Runtime/model versions are fixed by package-lock; model host uses its default revision, not a promised immutable model snapshot.
- Approximately 23 MB model/tokenizer downloads from huggingface.co and its hf.co delivery hosts, plus ~27 MB same-origin WASM runtime on first run. Runtime JS and worker are bundled locally. Byte-identical WASM is shared with the preserved collection asset `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; do not remove it.
- Weights are downloaded, but user content is never sent to a model host. No server AI, keys, analytics or remote provider integration. Logs/reviews stay in page memory, not saved designs or localStorage. Browser Cache API retains model/runtime assets, not user inputs. Clear site data to evict them.
- Imported text is data passed to an embedding model. It cannot change permissions or request credentials. No external actions or authority are exposed.
- Tested desktop Chrome, CPU WASM SIMD and module workers. WebGPU is not required. Other browsers, low-memory devices and physical phones are unverified; mobile layout was tested with desktop emulation.
- After a complete online inference, an already-open page can run real inference offline with a fresh worker; tested on the production bundle. Offline navigation/reload is NOT promised. Private browsing/cache eviction/storage limits may require downloads again.

## Bounds and validation

JSON only, no PDF or CSV import. Original payload ≤40 KB; imported audit file ≤1 MB; 1–12 pools and 1–24 activities. Unique IDs ≤30 characters; titles/products ≤100; descriptions/logs ≤400; annotation ≤500; units integer 1–10000; pool cost integer 0–100000000 cents. Four texts per inference batch, 256-token context, 180-second timeout. Failed/unsupported/network/malformed runs report actionable errors, not fake data. Cancellation terminates workers; run identity protects worker fetches, file reads and late callbacks.

Pool/quantity approval is mandatory, with holds and undo. Every activity survives audit exports. Integers remain exact at these bounds. Remainder allocation is deterministic, not AI optimization. Exact-title substring baseline and human-confirmed AI links are computed counts, not accuracy or saved-time claims. No confidence percentages are fabricated.

## Limits

Meaning similarity is not accounting appropriateness or unit compatibility. Negation and unrelated logs still receive a nearest-pool proposal. Different products must use stable names; refunds, fractional driver quantities, multi-currency, ledger integration and authoritative accounting validation are unsupported. Missing or held activity changes other products' shares; do not treat partial logs as complete allocations. Model can truncate long text; keep descriptions short. No expenses, quantities or costs are generated by AI.

## Run / publish / evidence

`npm install`, `npm run dev`; `npm run predeploy` builds. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but publish the entire collection ONLY with the root predeploy/deploy workflow. Base `/daily-app2/20261110-6/`.

See [VALIDATION.md](VALIDATION.md), browser/core/artifact/network validation JSON and executable tests for observed outcomes. All fixtures are synthetic. Browser failure injections exercise defensive paths only; successful fixtures, offline tests and public inference use the real default model.
