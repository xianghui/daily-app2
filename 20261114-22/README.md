# Stock Saffron

A local-AI single-period stocking worksheet for market stalls and event kiosks. Different wording across scenario notes makes product reconciliation repetitive; a small semantic model proposes identities, while a reviewed discrete newsvendor calculation balances shortage and unsold-stock losses. Distinct from time-series forecasting, lead-time buffers and tier-price ordering.

## Use

1. Choose Bakery market or Event kiosk (synthetic only), paste source JSON or import `.json`.
2. Define 2–6 products (`rules`: id, label, description, underage, overage, cap). Costs are **positive integer cents of marginal loss**, not automatically selling price. Cap is whole units. Describe 1–32 full-period demand scenarios (`records`: unique id, description, demand, weight, owner). Positive integer weights are relative likelihoods, normalized per product; records are alternatives, not additive orders.
3. Explicitly load AI (internet needed first time). Inspect source descriptions and cosine evidence. Verify/edit product, demand, weight, owner and multiline review note; approve or hold each row. No automatic approval. Undo restores previous review state.
4. Apply the worksheet. Pending rows block apply; holds or missing product coverage block aggregate calculations. Product partials are labeled. Edit source to revise costs/caps; that invalidates all suggestions and review. Review changes invalidate export snapshots.
5. Export actual current JSON audit, scenario CSV or Markdown worksheet; copy Markdown. Every original/held row survives. CSV has spreadsheet-formula escaping for text, including multiline cells. JSON import of audits restores originals only, requiring new AI/review. No purchases or other external actions.

## Real AI / source / license

`Xenova/all-MiniLM-L6-v2` — https://huggingface.co/Xenova/all-MiniLM-L6-v2 — Apache-2.0. Quantized q8 ONNX feature extraction via `@huggingface/transformers` 4.3.2 / ONNX Runtime Web (Apache-2.0/MIT); React/Vite. 384-dimensional normalized mean-pooled embeddings and cosine nearest-product retrieval. Four texts per inference batch, max 256 tokens/text, descriptions ≤300 characters. Model proposals are validated for count, dimension, finiteness and unit norm. Similarity is not confidence, calibrated probability, or equivalence. No general-purpose LLM, numeric extraction, forecast generation or instruction execution. Unrelated and negated notes can match the wrong product: review is required.

Initial download ≈23 MB model plus ≈27 MB CPU runtime and <1 MB app code. Local module worker/runtime are bundled; WASM is reused byte-identically from this collection's immutable `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that asset. Model/tokenizer/config downloads use Hugging Face and its CDN redirects; availability is not guaranteed. No API key/provider integration, paid dependency or server is required.

## Calculation and limits

For integer quantity q in [0,cap], scenario loss is `underage*max(demand-q,0)+overage*max(q-demand,0)`. Integer BigInt numerators compare weighted losses exactly. The convex piecewise-linear minimum occurs at a demand breakpoint or endpoint; the smallest quantity wins ties. Displayed expected losses convert the exact numerator to floating point and divide by total weight, so decimal display is rounded, not ledger posting. Baseline rounds weighted mean demand (JavaScript half-up for these nonnegative values), clipped to the same cap. Critical fractile is underage/(underage+overage), a cost ratio, not model confidence. Differences are hypothetical scenario losses, not measured improvements.

Demand/cap ≤10,000 units; costs/weights ≤1,000,000 integers; input ≤30,000 characters; import ≤2 MB (audit envelope may be larger than source). IDs unique per list. All review rows and order are conserved. Each product optimizes separately: no shared budget/capacity, correlation-dependent joint constraints, order fees, pack sizes, lead times, carryover, substitutions or demand forecasting. Users must verify periods, likelihoods, currency consistency and net marginal costs. Repeated equal-demand records simply add weight; do not duplicate alternatives inadvertently.

## Privacy / devices / caching

All content, review and outputs stay in browser memory; files download to your device only. Downloading model weights is not uploading user data. Cache API stores worker/runtime/model assets, not notes. No analytics, external inference, credential handling or content-bearing requests. Reload loses unsaved work. Browser downloads persist until you remove them.

Use current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM. CPU WASM is the default, not an untested WebGPU path. Headless Chrome tested; physical phones, other browsers and assistive technology not tested. Responsive 1440/390/320 px layouts, labels, keyboard focus and touch heights checked. Device/runtime/network failures produce errors and retry; cancellation terminates worker, run IDs reject stale callbacks, import reads and worker fetches. Timeout 180 seconds.

After a successful online run, a **fresh worker in the same already-open warmed page** was tested with browser network completely offline. Full offline navigation/reload is NOT promised; no service-worker app shell. Evicted caches need internet again.

## Development / deployment

`npm install`; `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261114-22/`. The per-app deploy script is retained by contract but **publish only through repository-root predeploy/deploy** to preserve the gallery. See root README and [VALIDATION.md](VALIDATION.md).

Stock Saffron public release: first combined Pages deployment built matching gh-pages `faa9a7b3c9333aada410074206594730258b9f76`; public runtime assets byte-matched, both real-AI fixtures and eight workflow groups passed, including reviewed artifact reopening and warmed-page offline inference. All 670 prior working-tree gallery entries preserved. Negation mislink documented; human review remains required.
