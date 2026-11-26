# Splitvalue Desk

A private, no-key **joint-production cost allocation** worksheet for small manufacturing finance reviewers. Input bottleneck: rough common/product-specific/period-expense handoffs. Real browser AI proposes the cost role; a human reviews costs, final sales and product links; deterministic NRV apportionment produces usable reconciled artifacts. It is not a sell-or-process decision tool: joint costs are sunk for incremental decisions.

## Workflow

1. Choose **Dairy batch** or **Timber batch** (synthetic), paste source JSON, or import `.json`. Include every saleable output and production cost for one completed batch.
2. Read the download/privacy notice, then explicitly **Load AI & match cost roles**. Cancel or retry if needed.
3. Inspect each original note and candidate descriptions/cosines. Verify `joint` (pre-split common production), `separable` (post-split product production), or `excluded` (nonmanufacturing period expense). Edit amounts and product links; separable costs require a product. Product identity and amounts are supplied, not guessed by AI.
4. Verify all final sales values in the same currency/minor units. Approve every checked record, or hold/reject. A hold blocks the entire dependent batch allocation, while full audit exports remain available. Undo restores prior reviews and sales.
5. Apply. Inspect NRV, exact allocations, source IDs, gross-sales baseline differences and cost conservation. Every edit invalidates the export snapshot until applied again.
6. Download current JSON, CSV or Markdown; copy Markdown. No ledger, account, file or remote website is changed.

## Input/output contract

Source JSON `{title,currency,products:[{id,label,sales}],requests:[{id,note,cost,product}]}`. `product` is a supplied product ID or empty string. IDs unique within each list, ASCII letters/digits/hyphens/underscore ≤40 characters. Title ≤200, product labels ≤120, cost notes ≤200 characters. All amount fields are nonnegative **strings of integer minor units**, ≤12 digits; product sales must be positive. No floats/currency-symbol parsing. Two to eight products, one to 24 costs, source ≤60,000 characters. Source import ≤1 MB; audit import ≤8 MB. Reviewer notes ≤500 characters. Invalid control characters and malformed Unicode are rejected.

Audit JSON schema `splitvalue-desk/v1` preserves original data, complete reviews, all candidate similarities, reviewed sales, cost rows, products, blockers and computed totals. Reimport restores **originals**, not approvals, avoiding trusting saved AI output or arithmetic. CSV has 18 columns and includes both `cost` and `product` record types, including held/blocked batches. It retains original and reviewed values, decisions, source IDs and allocations. RFC-style double quoting/CRLF preserves commas, quotes and newlines; formula-like text beginning `= + - @ TAB CR` is apostrophe-prefixed. Signed computed numeric differences remain numeric. Load large integer columns as text. JSON is the lossless canonical audit. Markdown includes all original cost notes, reviewer notes and product worksheets.

## What is really AI?

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX weights 22,972,370 bytes. Model revision `main` is unpinned and may change.
- Transformers.js 4.3.2 / ONNX Runtime Web (Apache-2.0/MIT). Actual single-thread WASM CPU inference, normalized mean-pooled 384-dimensional vectors. Each note is matched by cosine to three explicit cost-role descriptions. Scores are similarity, **not confidence**.
- Approximately 50 MB initially: 23 MB weights + 26,861,777-byte WASM, plus JS/tokenizer overhead. Internet required for Hugging Face/public model CDN downloads and same-origin runtime. No model requests before explicit loading. No API key, paid provider, remote inference or analytics.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve their originating builds. SHA-256s/bytes in `runtime-provenance.json` and asset audits. Worker protocol `{id,texts}` → progress/batch/error or `{id,vectors}` verified; no runtime CDN imports.
- Four texts per chunk: three role anchors plus ≤24 notes (up to seven chunks). Pipeline passes `max_length:256`, but that feature-extraction option is not enforced by the installed implementation; actual tokenizer model limit is 512. Short source/anchor bounds reduce context; unusual text may truncate.

## Privacy, devices, cache and failures

Default user content stays in browser memory. Downloading model weights does not upload notes. No provider credentials or account actions. Imported text is data, never an instruction or request for authority. Closing the page loses unsaved content.

Current browser with module workers, WebAssembly SIMD, BigInt, Cache API and sufficient memory. Desktop Chrome CPU with GPU disabled tested. No WebGPU needed; other engines and physical phones/memory-constrained devices unverified. Runtime/worker/model files use Cache API when available. **Tested offline scope: new worker in the same already-open warmed page with all browser network disabled.** No promise of offline cold navigation/reload. Eviction/private mode may require redownloads.

Progress and cancel controls precede inference; 180-second timeout, worker/network/model errors, unsupported runtime and malformed vectors fail visibly. There is no deterministic or canned-output substitute for AI. Terminated workers, run identities, abort signals and guarded file reads prevent stale results from replacing newer input. If blocked, use current desktop Chrome with WASM enabled, internet and sufficient storage, then retry.

## Exact deterministic worksheet

1. Sum approved joint cost `J`, separable production per product `S_i`, excluded period expenses `E`, and reviewed final sales `V_i`.
2. Compute `NRV_i = V_i − S_i`. All NRVs must be positive; otherwise block the allocation and request corrections/another method. Holds block the full batch rather than silently allocating incomplete costs.
3. Allocate `J × NRV_i / sum(NRV)` with exact BigInt integer division. Distribute remaining minor units to largest fractional remainders; source product order breaks exact ties. No floating pre-rounded weights.
4. Product production cost = allocated joint cost + separable cost. All joint minor units reconcile exactly. All reviewed costs = allocated production + excluded period expenses.
5. Baseline applies identical apportionment to gross final sales, without subtracting separable cost. Count actual product allocation differences; sum differences is zero. These are scenarios, not accuracy, savings or verified accounting treatment.

Assumptions: complete joint-output batch, positive final values/NRVs, one currency, independently verified inputs, NRV method already approved. No by-product credits, WIP/opening stock, negative values, returns, taxes, net margins, incomplete cohorts or postings. Excluded costs are deliberately not deducted in this bounded production-NRV method; verify suitability for your accounting policy. AI cannot infer that policy. It always chooses a nearest role even for irrelevant notes.

## Observed quality and limitations

Simple known-answer fixtures: 8/8 roles matched across dairy and timber; dairy shared-cost allocations 28,571 and 71,429 minor units, versus gross-sales baseline 40,000 and 60,000. This tiny synthetic test is not general accuracy. A negated post-split cream-cost challenge incorrectly selected `joint`; an unrelated bicycle note selected `excluded`. Both demonstrate why every row starts pending. An embedded credential-request instruction remained inert and selected a cost-role suggestion only. See `VALIDATION.md` for actual checks and public verification scope.

## Build / deployment

React + Vite; `npm install`, `npm run predeploy`; base `/daily-app2/20261126-14/`. Required app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Do not publish using the individual deploy:** root `npm run predeploy` assembles every gallery app and root `npm run deploy` publishes combined `deploy/`. See root README for Pages commit/build verification.

## Reproduce validation

`python3 serve-built.py --port 7795` serves production app and shared runtime at deployment paths. `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node download-cancel-test.cjs`, `node challenge-test.cjs`, `node core-test.mjs`, `python3 independent-core.py`, `python3 bundle-audit.py`. Browser tests use installed workspace Playwright + Chrome. Set `APP_URL` and `PREFIX` to repeat against assembled/public builds. `gallery-test.cjs` checks every script and preserved gallery entry; `gallery-browser.cjs` checks actual render/search/older links. `asset-audit.py BASE_URL PREFIX` compares served bytes including shared runtime to assembled builds.
