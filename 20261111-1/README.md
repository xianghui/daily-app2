# UNPUBLISHED DRAFT — hosting blocked

Not a completed gallery release. Three Pages builds succeeded but all deployments timed out/cancelled; public inference and assets could not be verified. Resolve hosting and rerun public checks before promotion.

# Buffer Bench

An exploratory inventory buffer worksheet for small stockroom teams. Unlike demand forecasting, it uses **observed total demand during completed replenishment lead-time windows** to size an empirical inventory-position trigger.

## Workflow
1. Load a synthetic Print cupboard or Repair cupboard example, paste JSON, or import JSON/a previous complete audit.
2. Set `target` (0.50–0.99), item IDs/descriptions/units, and observations (`id`, `text`, integer `quantity`). One observation is total demand over one completed lead-time window, not a daily count or lead-time duration.
3. Explicitly load AI. Real local MiniLM embeddings propose item links; inspect ranked source descriptions/similarities. Verify every link, unit and count, approve or hold, add notes, undo edits.
4. Confirm comparable, representative, nonoverlapping windows with no stockout-censored demand. Apply. At least three approved windows per item are required. Every edit invalidates exports until reapplication.
5. Export JSON (all originals, suggestions, reviews, held records and summaries), CSV (complete record audit with formula-safe text) or Markdown worksheet; copy the current worksheet. Audit import restores originals only and requires fresh inference/review. No orders or stock changes occur.

## What AI does
`Xenova/all-MiniLM-L6-v2`, https://huggingface.co/Xenova/all-MiniLM-L6-v2, Apache-2.0, q8 ONNX through Transformers.js 4.3.2 and ONNX Runtime Web WASM CPU. Mean-pooled normalized 384-dimensional learned embeddings rank observation text against item descriptions. This reconciles paraphrases without requiring exact item-title words. No hardcoded responses or fake fallback. Similarity is not confidence; negation, unrelated descriptions, unit ambiguity and taxonomy mistakes need human correction/holds. Text cannot change authority or request tools/credentials. Model host revision follows the runtime's default main revision; future upstream updates may affect results.

## Requirements, privacy and caching
Current desktop Chrome with WebAssembly SIMD, module workers, Cache API, and several hundred MB available memory. No WebGPU or API key needed. Other browsers/physical phones are unverified. Four texts per batch, first 256 tokens; 180-second timeout; cancel terminates worker and run IDs guard stale responses and file imports.

First explicit run downloads approximately 23 MB model/tokenizer from huggingface.co / hf.co (including documented host redirects) and approximately 27 MB same-origin WASM. App JS and worker bundled locally, runtime factory in public/runtime. Immutable byte-identical shared WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve this earlier asset in combined deploy.

User content stays on device. Only file GETs occur; no remote inference, analytics, credentials or content upload. Model/runtime files cache in browser storage, not user content; data/reviews remain in memory. Fresh-worker real inference with all network disabled was tested **inside an already-open cached production page**. Offline reload/navigation is not promised. Caches may be evicted; network/storage settings can require downloading again. Errors do not produce classifications. Download progress, batch counts, cancellation and retry are visible.

## Deterministic method and limits
Input originals ≤40 KB; audit import ≤1 MB, 1–4 items, 1–24 observations, unique IDs, descriptions ≤400 characters; quantities integers 0–1,000,000. Every approved observation must use the selected item's unit. No automatic unit conversion.

Nearest-rank empirical reorder point = sorted demand at `ceil(n × target)` (one-based). Baseline = `ceil(mean demand)`. Buffer above mean = `max(0, reorder − mean)`; targets can produce a reorder point below the mean. In-sample coverage counts values ≤ point. LOO refits each rule using n−1 observations and counts held-out demand strictly above the point. These are descriptive sensitivity counts, not validated future service estimates or a claimed improvement. Small samples cannot reliably estimate tails. No normality assumption or trend/seasonality, changing lead times, demand censoring, periodic-review policy or order-quantity model. Inventory position means on hand + on order − backorders. No future service guarantee or procurement certification.

The UI additionally counts literal item-title occurrences as a transparent matching baseline, not a quality percentage. Tiny known-answer fixtures separately test semantic matching. See VALIDATION.md and machine-readable reports for actual outcomes.

## Development and publishing
React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261111-1/`. Required individual deploy scripts retained, but publish **only from collection root**, with root predeploy/deploy, to preserve all apps. Tests: `node core-test.mjs`, `python3 serve.py`, `node browser-test.cjs`, `node defensive-test.cjs`, `python3 artifact-test.py`, `node gallery-test.cjs`. Browser tests use installed local Playwright/Chrome. No optional provider integration.
