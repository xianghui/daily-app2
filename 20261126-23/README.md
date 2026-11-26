# Readycost Desk

A no-key local-AI commissioning-cost workbench for a bookkeeper receiving informal equipment/setup handoffs. **Distinct objective:** reconcile initial asset cost with a verified ready-for-use cutoff and separate trial-sale income, not depreciation or general account coding. Original collection remains read-only.

## Workflow

1. Choose either synthetic example, paste JSON or import a `.json` source/audit. Supply `title`, three-uppercase-letter `currency`, `readyDate` and 1–24 `records`: `{id,note,date,amountMinor}`. Dates are real ISO calendar dates, 1900–2100; 100 minor units = 1 displayed currency unit. Source examples live in `src/core.js`.
2. Read the first-download disclosure and explicitly load AI. Real MiniLM compares notes with three treatment descriptions: necessary equipment/setup, operating/excluded expenditure, trial-sale receipts. It does not guess dates/amounts, verify necessity or read contracts.
3. Inspect original notes and cosine-ranked reference evidence. Correct treatment, incurred date, amount and multiline reviewer note. Approve or hold every row. A nearest class is always suggested, even for irrelevant input. Similarity is **not confidence**. Undo restores up to 40 prior review states.
4. Attest that one complete asset and the explicit narrow scope were checked, then apply. Pending rows prevent application. Holds/incomplete attestation block the basis; approved capital notes dated **after** readiness block rather than silently becoming expenses. The ready date is inclusive. Audits of blocked work still export.
5. Export JSON, full audit CSV, Markdown or approved worksheet CSV; copy Markdown. Every review edit invalidates prior applied exports. Reimport restores originals only, resetting approvals. Notes are memory-only; download before leaving.

## Real model and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, [original model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), Apache-2.0.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev (MIT), WASM CPU module worker, GPU disabled in validation.
- Mean-pooled normalized **384-dimensional neural embeddings**, chunks of four texts, up to 27 texts / seven chunks. Count, dimension, finite values and unit normalization validated before cosine ranking. No regex classifier, canned responses, provider keys or server inference.
- Tokenizer ceiling is 512 tokens. The shared pipeline does **not** forward its `max_length:256` option; source notes separately capped at 200 characters. See tokenizer audit. Model revision `main` is mutable; future host changes may affect results.

Verified immutable same-origin shared dependencies must remain published (hashes in `runtime-provenance.json`):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Protocol: `{id,texts}` → progress / batch / `{id,vectors}` / error. App worker source, factory and WASM are explicitly cached; shared assets avoid another ~27 MB collection copy.

## Deterministic worksheet and comparison

Only approved eligible acquisition/setup costs through readiness enter the initial basis. Operating expenditure and trial-sale receipts stay separate. The deterministic bridge is:

`asset basis + excluded operating expenditure − trial-sale receipts = net cash expenditure`

Baseline: capitalize all expenditure minus trial-sale receipts. `basis difference = trial-sale receipts − excluded expenditure`. This is a **computed accounting-policy comparison**, not measured accuracy, time saved or a claim every real asset follows this policy. Per-record asset/expense/receipt columns conserve each amount; no source records disappear. Integer sums stay exact and safe at enforced bounds (at most 24 × 10 billion minor units). A negative net-cash baseline is permitted and does not imply negative asset cost.

The date is the **incurred date**, not the invoice payment date. It does not establish necessity: before-ready training still remains operating expenditure. This is an analytical initial-acquisition handoff under an explicitly assumed policy, not accounting certification. No taxes/recoverable VAT, borrowing costs, grants, refunds, dismantling obligations, later enhancements, depreciation or trial-production-profit calculation. Costs of trial output need a separate review; do not enter them as necessary equipment-testing costs. Missing costs cannot be detected. Consult your actual reporting policy.

## Privacy, downloads and device requirements

Initial internet needed: approximately **50 MB** (~23 MB quantized model + ~27 MB WASM, plus tokenizer/code). No model requests before explicit run. Model/config/tokenizer weights download from Hugging Face / hf.co / Xet CDN; runtime/code use the GitHub Pages origin. Default notes never upload. Browser request capture checks GET-only downloads with no request bodies or source notes in URLs. Imported text is data; no instructions inside it change authority, request credentials or trigger external actions. There is no optional remote provider path.

Current desktop Chrome/Edge, WASM SIMD, module workers and enough memory recommended. CPU/WASM is the tested default, so WebGPU is unnecessary. Physical phone inference and other engines are unverified. First load exposes model-file progress; chunk counts, cancellation and 180-second timeout are shown. Errors are actionable and never replaced by fake AI. Run IDs, worker termination, abortable fetches and guarded file reads prevent stale/cancelled results from replacing newer state.

Cache API stores model/runtime downloads, never notes. After warming, **fresh-worker inference in the already-open page was tested fully offline**. Offline reload/navigation is not supported; no service worker. Cache eviction/private browsing/storage restrictions can require new downloads. Clear browser site data to clear cached weights/runtime.

## Formats and limits

Source ≤60,000 characters; source/audit import ≤8 MB; unique IDs 1–32 ASCII letters/digits/`_`/`-`; title ≤100; note ≤200; reviewer note ≤500; nonnegative integer amounts ≤10,000,000,000 minor units. Currency is a label, not validation of real currency or actual currency subdivision. Control characters and malformed Unicode fail. Unsupported files and invalid/oversized data fail before inference.

JSON `readycost-desk-v1` preserves originals, current reviews, all rows, blockers and exact bridge. Audit CSV retains original/edited dates, amounts and notes, including holds. Worksheet CSV preserves every approved row's allocation; numeric amounts are minor units. CSV quotes embedded commas/quotes/newlines with CRLF endings; formula-leading text receives an apostrophe while genuine signed numeric values remain numeric. Markdown includes totals and the complete reviewed source list. No automatic sending, posting or account changes.

## Validation and publishing

Observed easy synthetic matches: **7/8**. The studio repair note was incorrectly proposed as capital; its post-readiness date also blocks uncorrected application. Tests explicitly corrected it before export. An unrelated coffee-machine request received a capital class; a negated training note is logged separately. These are not representative accuracy measurements. Every proposal requires human review.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Reproduce:

- `npm install && npm run predeploy` (React + Vite; base `/daily-app2/20261126-23/`). Required per-app gh-pages dependency/scripts retained; do not individually deploy over collection.
- `node core-test.mjs && python3 artifact-test.py core-`: deterministic boundary checks and 240 cases independently checked with Python integer arithmetic.
- `python3 serve-built.py --port 7820`; `node browser-test.cjs`; `node defensive-test.cjs`; `python3 artifact-test.py local-`.
- After root `npm run predeploy`: `python3 serve-built.py --assembled --port 7821`; run browser suite with `APP_URL=http://127.0.0.1:7821/daily-app2/20261126-23/ PREFIX=assembled-`.
- `node recovery-test.cjs`: network-failure/real retry and delayed stale message after newer real inference.
- `python3 bundle-audit.py`; `python3 asset-audit.py <gallery-base> <prefix>`; `node gallery-test.cjs`; `BASE_URL=<gallery-base> PREFIX=<prefix> node gallery-browser.cjs`.

Tests use installed Chrome and the workspace Playwright installation referenced in test scripts. Publish only via root combined-site workflow, verify matching built Pages commit, public byte-identical runtime assets and rerun public inference/export suite. No digest is sent.
