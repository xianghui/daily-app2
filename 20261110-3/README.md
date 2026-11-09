# Quote Canopy — UNPUBLISHED DRAFT

**Not completed or listed in the gallery.** Three Pages publication attempts failed during a GitHub Actions partial outage. Local production inference/workflow validation passed, but public AI and assets are unverified. See publication-status.json and hosting-attempts.json. Resolve hosting and rerun public validation before promotion.

A private local-AI bid-leveling worksheet for small community purchasing coordinators. Unlike SKU reconciliation or invoice checking, this app compares competing supplier offers for an entire requirement basket, including one-time supplier fees. Semantic scope linking is real model inference; humans must confirm specifications. No order is placed.

## Workflow and formats

1. Load one of two synthetic examples or paste/import JSON: `name`, `goal`, `currency`; `requirements` (`id`, `description`, `unit`, `quantity`); `vendors` (`id`, `name`, `feeCents`); `quotes` (`id`, `vendor`, `description`, `unit`, `unitCents`, `maxQuantity`). Goal is human context, not a model instruction. Edit source quantities, costs and constraints to rerun.
2. Explicitly load AI. Model embeds requirement and quote descriptions; cosine similarity ranks requirements for each quote. All candidates and source descriptions remain inspectable. These are semantic similarities, not confidence or verified suitability.
3. Review each link, add a specification note and approve, reject or hold. An edit resets approval; undo restores the last review. Exact unit/capacity mismatches cannot be approved. Supply authoritative specification checks yourself; the app cannot know printer cartridge compatibility or product safety.
4. Apply reviewed bids. Exact deterministic supplier-subset search minimizes item cost plus activated supplier fees. Every requirement uses one quote for the whole quantity. Held/rejected quotes are excluded; missing requirements make the plan explicitly partial. No loss of original quote or requirement records.
5. Download JSON (complete originals, review evidence, all held/rejected quotes, both plans), spreadsheet-safe CSV (every quote plus selected quantities), or Markdown order worksheet. Copy current Markdown. Edits invalidate exports until reapplied. Reimport JSON restores **original inputs**, not edited review links/notes/approvals. CSV is output only; unsupported PDF/CSV inputs are rejected. The CSV's repeated `vendorFeeCents` is contextual, not additive; JSON/MD contain deduplicated activated fee totals.

## Real AI / runtime / privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. q8 ONNX, Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Model host main revision is currently used; upstream changes can affect future downloads.
- Normalized mean-pooled 384-dimensional vectors; four texts per batch; max 256 tokens per text. Local module worker and WASM CPU, **no WebGPU, API key, paid service, or remote inference**. Embeddings materially link differently worded descriptions, not regex or hard-coded replies.
- Initial download approximately 23 MB model/tokenizer from huggingface.co and hf.co delivery hosts, plus 26,861,777-byte same-origin WASM (~50 MB total). Progress, cancellation and retry are visible. JS/worker/factory assets are bundled same-origin. Shared WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` is byte-identical to installed runtime; combined deployments must preserve it. Factory under this app's `runtime/`.
- Only model/config downloads use the network. Quotes and requirements remain in browser memory; no content uploads, analytics, credentials, provider integrations or automatic external actions. Cache API stores worker/runtime/model assets, not user quotes. Exports are explicit local downloads. Clear site data to remove caches.
- Tested offline scope: **fresh-worker real inference inside an already-open page after successful caching**, networking disabled. Offline navigation or reload is not promised. Cache eviction/private browsing can require internet again.
- Current desktop browser with module workers, WebAssembly SIMD and adequate memory. Chrome desktop tested. Physical phones and other engines are unverified. CPU WASM is the default, not an untested GPU fallback. Failures show errors, never fabricated results.

## Cost contract and honest metrics

Each requirement is fully covered by one approved quote with identical unit string and sufficient per-line capacity. No quantity splitting, shared quote stock, taxes, tiered discounts, minimum orders, delivery constraints, alternative currencies, or supplier aggregate capacity. Prices and fees are nonnegative integer cents in one supported two-decimal currency. Each used supplier fee is charged once. Quotes are independent offers; do not model interdependent inventory with this app.

Enumerate at most 256 supplier subsets; for each subset pick the cheapest eligible line per available requirement, then charge only suppliers actually used. This finds the exact optimum under the stated independent-line contract. Missing requirements are identical for all compared plans. All-held batches yield zero-cost **partial plans**, never a free complete purchase.

Cost baseline: pick cheapest eligible unit-price line per covered requirement, then include every activated fee. The computed fee-inclusive difference is not measured purchasing savings. Input-link baseline: exact case-insensitive description equality. AI proposal coverage and human/model agreement are not accuracy. No invented timing/confidence claims.

## Bounds and failure handling

1–8 requirements/suppliers; 1–24 quotes. Description ≤400 characters; ID/unit ≤30; name ≤100; goal ≤400; review notes ≤500. Input ≤40 KB, imported JSON/audit ≤1 MB. Quantities 1–10000; integer prices/fees 0–100000000 cents. Currency USD/SGD/EUR/GBP/AUD/CAD only. Unique IDs within each collection; known supplier references; exact units, no conversion. Structured finite normalized 384-vector validation; run identities, terminated cancelled workers, stale file/run guards and 180-second timeout. Unsupported runtime, worker/network failures and invalid model outputs produce actionable errors, not deterministic demo outputs.

English-oriented nearest-match retrieval always proposes one requirement. Negation, unrelated offers and technical distinctions can be wrong. **Hold unsuitable proposals.** Imported text is data, not tool authority. Tiny synthetic fixtures do not establish universal accuracy.

## Build / validation / publishing

`npm install`; `npm run predeploy`. React + Vite, base `/daily-app2/20261110-3/`; required per-app predeploy/deploy scripts retained. Publish **only from repository root**, never per-app deploy.

Checks: `node core-test.mjs`; `node bounds-test.cjs`; `python3 serve-test.py` (production bundle, port 6413); `node browser-test.cjs`; `node network-test.cjs`; `node cancel-download-test.cjs`; `node runtime-test.cjs`; `python3 artifact-test.py`; `python3 asset-test.py`; `node gallery-test.cjs`. Browser checks use workspace Playwright and desktop Chrome. Independent artifact parser uses Python standard library. See VALIDATION.md and JSON reports for actual results and limitations. Public workflow/assets are checked against the combined GitHub Pages deployment before completion.
