# Lot Lantern

**Purchasing coordinators → informal annual consumption notes → reviewed catalog demand → economic order-lot worksheet.** This is lot-sizing, not the collection's demand-forecasting app. No ordering, accounts, remote system writes or demand forecasts.

## Workflow

1. Load either synthetic example or paste/import JSON. Supply 2–6 catalog items and 1–12 disjoint annual-demand records. Catalog fields: unique `id`, `title`, semantic `description`, integer `pack` (units per order multiple), `minimum` (minimum order units), `capacity` (maximum incoming lot units), `orderCost` (currency/order) and `holdingCost` (currency/base unit/year). Demand fields: unique `id`, `text`, integer `annualUnits`. Use a single currency and the correct physical base unit for each item; do not mix packs with singles. Catalog assumptions are editable in JSON before inference.
2. Explicitly **Load AI & reconcile demand**. A real local embedding model ranks each description against the catalog. Inspect candidate source descriptions and cosine scores, correct item/annual units and add a note. Approve or hold every record. A hold blocks ALL recommendations, retaining every record.
3. **Apply reviewed lot plan** to aggregate demand and search all feasible pack-multiple lots, then compare estimated annual ordering + cycle-stock holding costs against monthly-rounded lots. Edit/undo invalidates exports; discard removes only the applied snapshot. JSON keeps originals, reviews, semantic evidence and computations; CSV and Markdown keep every source record and current review. JSON reimport restores originals, requiring fresh inference/approval.
4. Download JSON/CSV/Markdown or copy Markdown. CSV properly quotes commas, quotes and newlines, and prefixes formula-like text with an apostrophe. Item totals repeat per source row: do not sum those repeated totals. Original text is preserved in JSON. Nothing places an order.

## Real AI / static runtime / privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional embeddings, cosine ranking. AI proposes semantic identity only. Numeric quantities, prices and constraints are user input; arithmetic, schema checks, aggregation and lot-size optimization are deterministic. No canned classifications or keyword fallback.
- `@huggingface/transformers` 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. React + Vite base `/daily-app2/20261111-20/`. No WebGPU, API key, paid service or optional remote provider. Worker and runtime factory are bundled same-origin.
- Initial internet requirement: ~23 MB model/config/tokenizer files from huggingface.co / hf.co and their CDN, plus 26,861,777-byte same-origin WASM. Allow approximately 50 MB transfer and several hundred MB working memory. Host revisions are unpinned; upstream changes may alter behavior/downloads. Cache API stores worker/factory/WASM; Transformers.js caches model assets.
- Reuses byte-identical immutable WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this older app/path when publishing the collection; SHA-256 and other built assets in `runtime-assets.json`.
- Current desktop Chrome tested with WebAssembly SIMD, module workers and Cache API. No WebGPU requirement; physical phones and other browsers unverified. After online inference a **fresh worker in the already-open page** successfully inferred with all network disabled. Offline reload/navigation/app-shell startup is NOT claimed. Cache eviction/private browsing can require downloads again.
- Content remains in browser memory and is posted only to a local worker, not a server. Model download traffic fetches files; it does not upload input. No analytics, content persistence, keys or external inference. Only synthetic fixtures committed. Imported instruction-like text has no tool authority.

## Bounds and failure handling

Original JSON ≤18,000 characters, audit import ≤1 MB. Text fields ≤400 characters (title/name ≤80, IDs ≤40); model context max 256 tokens, four-text chunks, ≤18 embeddings. Annual units integer 0–1,000,000 per record. Pack/minimum/capacity integers 1–10,000; ordering cost .01–10,000, holding cost .0001–10,000. Costs need not be cents, because per-unit annual holding costs can be fractional cents. No exchange-rate conversion. All records for an item must represent disjoint consumption streams for the SAME planning year.

Finite, near-unit 384-vectors are required. Missing/invalid input, unsupported file types, worker/runtime/download failures, malformed vectors and 180-second timeout produce explicit errors and no substitute AI output. Run IDs guard asynchronous worker fetches and imports; cancel/input edits terminate workers and invalidate late results. Retry starts a fresh worker. Review quantities also validate at apply time.

## Deterministic economics and limitations

For annual demand D, quantity Q, ordering cost S and annual unit holding cost H, minimize `D/Q*S + Q/2*H`. Enumerate every pack multiple ≥minimum and ≤capacity, choosing the smaller lot on exact ties. The continuous EOQ `sqrt(2DS/H)` is audit evidence, not the constrained answer. Baseline is `ceil((D/12)/pack)*pack`, raised to the first feasible minimum multiple and capped to the largest feasible storage multiple. No feasible lot yields an explicit infeasible state; any infeasibility suppresses complete aggregate costs. Zero-demand items need no order. All approved demand is conserved; held demand remains visible but blocks plans. All-zero demand yields zero cost.

Assumes steady known demand, fixed cost/order, linear holding cost, instantaneous replenishment, no discounts or shortages. Ignores purchase cost (assumed constant across quantities), safety stock, lead time, seasonality, shelf life, quantity discounts, cash limits, shared storage and residual year-end inventory. Capacity constrains lot size, not stock plus safety stock. Fractional orders/year is a long-run rate, NOT an executable yearly calendar. Costs are model estimates, not observed savings. Do not use this as a procurement or stockout guarantee.

Embedding similarity is not identity, equivalence, confidence or unit conversion. Near-identical variants and irrelevant notes can force a wrong top match. Human approval/hold is essential. UI match-agreement counts compare model/first-catalog assignment to the same human review, not independent accuracy; independent fixture outcomes are documented separately.

## Validation / development

See [VALIDATION.md](VALIDATION.md) and reproducible browser/core/artifact scripts and JSON reports. `npm install`, `npm run dev`, `npm run predeploy`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained as required. **Publish only via repository ROOT predeploy/deploy**, never per-app deploy, so the gallery survives. Local production server: `python3 serve.py` on 6450; tests use installed Playwright and Chrome under the workspace node_modules. Public verification recorded in `public-validation.json`, `public-browser-validation.json` and `publication-status.json` after deployment.
