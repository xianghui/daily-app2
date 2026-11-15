# Lot Calendar

For a workshop supply coordinator repeatedly reconciling informal period-demand notes and deciding when to consolidate orders. Import/paste a complete JSON horizon, supply item setup/storage costs and an explicit planning cost cap, run real local AI matching, inspect evidence, correct item/period/quantity, approve or hold every note, apply and export the reviewed stock ledger. No purchases or supplier contact.

Unlike fixed EOQ or demand forecasting, this is exact finite-horizon dynamic lot sizing for already-supplied demand. Its output is a period-by-period quantity/order/inventory worksheet, not a forecast or a constant lot recommendation.

## Real AI, runtime and data flow

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, through [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0) and [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) WASM CPU (MIT). Quantized q8 model, normalized mean-pooled 384-dimensional embeddings. Cosine similarity retrieves supplied item descriptions for rough demand descriptions. No keyword classifier, canned inference or fake fallback. AI improves repeated identity reconciliation across paraphrases, not arithmetic. It cannot verify identity or understand all negation; unrelated inputs still receive a nearest match. Every match requires independent human approval or hold. No confidence percentages.

Initial internet download: approximately 23 MB model/tokenizer plus 27 MB WASM and runtime/worker JavaScript. Documented hosts: Hugging Face and its CDN, plus same-origin static collection assets. No content upload, remote inference, API keys, analytics, external actions or persisted user inputs. Imported instruction-like text is only embedding data. Cache API stores model/runtime files, not source records. Private browsing/eviction may require redownload.

Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/assets. Verified worker protocol: `{id,texts}` → progress/batch messages or `{id,type:'result',vectors}`; batches four texts with max 256 tokens/text. Count, 384 dimensions, finite values and normalization are validated before ranking. Cache source is bridged to blob workers; module factory/WASM are explicitly cached. Reuse avoids duplicating runtime bytes in this near-capacity collection.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB RAM tested on CPU with WebGPU disabled. Physical phones and other browsers unverified. Fresh-worker inference offline is supported only in an already-open warmed page after online inference; offline startup/reload/navigation is not promised. Errors expose actionable retry, not fake AI. Cancel terminates workers, input changes invalidate results, asynchronous imports/downloads share run IDs, and loading/inference times out after 180 seconds.

## Input schema and workflow

Source JSON ≤30,000 characters; imports `.json` ≤2 MB. Exported audit envelopes restore `originalInput` only, never trusted approvals. Two wholly synthetic examples are included.

- `periods`: 2–8 unique ordered labels ≤60 characters. Equal-duration accounting periods assumed.
- `items`: 2–4 entries, unique `id` ≤40, `label` ≤100, `description` ≤300, `setup` integer cents per positive order and `holding` integer cents per unit per end-period stock, each 0–1,000,000.
- `records`: 1–48 entries, unique `id` ≤40, `description` ≤300, zero-based `period` index, `quantity` integer 0–10,000.
- `costGoal`: integer 0–100,000,000 cents, cap for setup + storage only, not a purchase budget.

Run AI explicitly to start downloads. Every row starts pending. Inspect original snippets and candidate descriptions/cosines; correct the item, period and quantity, add multiline notes, approve or hold. Undo reverses review edits. Source edits require fresh AI and discard old reviews. Apply requires every row approved or held, valid quantities and valid references. Each item/period must have exactly one approved row, including explicit zero demand. Missing or duplicate cells block only that item's schedule: no implicit zero, lost rows or double-counting. Blocked items are excluded from both totals and make the global goal unevaluated. Held rows stay in all audit exports.

Download current applied JSON (originals/reviews/schedules), CSV (every record), Schedule CSV (every period of complete items), Markdown (complete checklist/audit), or copy Markdown. Every review edit disables stale exports until reapplied. Formula-like CSV text is prefixed with an apostrophe; actual numeric fields remain numeric. JSON preserves exact text and originals. All-blocked schedules export a header-only schedule CSV, not fabricated orders.

## Deterministic calculation

Zero initial stock, zero lead time, known nonnegative integer demand, unlimited order/storage capacities, no shortages, constant purchase prices excluded because they are identical across plans. Per item, dynamic programming evaluates every contiguous demand block supplied by an order at the block start: setup if positive quantity + `holding × demand[k] × (k - start)`. DP minimizes setup plus storage; equal costs retain the first enumerated predecessor. Backtracking yields orders; the ledger conserves units and charges holding on closing stock. Baseline orders exact demand each period. Costs are integer cents; bounded inputs remain within safe integer range. Complexity O(periods³), at most eight periods per item.

The finite-horizon model assumes no safety stock, lead times, capacity, discounts, perishability, uncertain forecasts or changing prices. Empty periods may have zero orders. Multiple optima can exist. Review assumptions before using output. Comparison is a conditional model calculation, not a measured saving or accuracy guarantee. A complete-frame goal never uses partial totals.

## Development and release

React + Vite, React/MIT, Vite/MIT; local RFC 4180 CSV serializer. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261115-10/`. Required per-app gh-pages dependency/scripts retained; publish **only through the root combined workflow**, never the individual app deploy. See root README. See `VALIDATION.md` for observed results and untested scope.
