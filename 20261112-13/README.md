# Tier Harbor

A local-AI annual purchasing worksheet for small workshops that receive inconsistent product descriptions. Input a product catalog, all-units supplier price tiers, storage/order caps and annual-demand notes. MiniLM retrieves product matches from meaning rather than exact names. Review every identity/count, approve or hold, apply a price-break worksheet and download JSON, audit CSV or Markdown (or copy Markdown). No purchase orders are sent.

## What is AI, and what is not?

The default and only inference path uses [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX through locally bundled Transformers.js 4.3.2 / ONNX Runtime Web on WASM CPU. Normalized mean-pooled 384-vectors rank catalog descriptions by cosine similarity. Every vector count, dimension, norm and finite value is checked. Cosine is not confidence. There are no canned answers, external AI providers, API keys or hidden backend. Model assets use the model host's main revision; upstream changes may affect results.

Everything after semantic matching is deterministic: schema checks, annual demand aggregation, exact rational cost comparisons, storage constraints, review state and artifact generation. AI does not estimate demand/cost, check legal product identity, understand supplier contracts reliably or authorize buying. Closed-catalog ranking always proposes a product even for unrelated text; negation and similar products need correction or holds.

## Workflow and inputs

1. Choose Workshop supplies or Garden stores (synthetic), paste JSON or import a `.json` input/export.
2. Edit name, catalog (2–8 products) and records (1–24 notes). Each product has `id`, `title`, `description`, `maxOrder` 1–5000, `orderCents` 0–100000, `holdingCents` 1–100000 and 1–8 `tiers` with integer `min` and `unitCents` 1–100000. First minimum must be 1; minimum quantities strictly increase up to maxOrder and prices strictly decrease. Holding cost is absolute cents per unit per year, not a percentage.
3. Each record has unique `id`, `text` and integer annual `demand` 1–10000. IDs use letters/numbers/underscore/hyphen. Text/description ≤400 characters; titles ≤80. Originals ≤18 KB; exported/imported envelope ≤1 MB. JSON only, no PDF/CSV imports. Four-text inference batches, 256-token truncation, 180-second timeout.
4. Explicitly load AI. Inspect source snippets and product-description cosine evidence, correct products/demand and add verification notes. Every item starts pending. Approve each only after checking catalog terms too. A hold retains the note and blocks **all** computed plans, not just its guessed product. Undo reverses the last edit; up to 100 review snapshots.
5. Apply the reviewed worksheet. Every edit/input change invalidates exports. Original inputs always survive. Exported JSON contains originalInput, every reviewed note, exact rational costs and per-product plans. Reimport restores originals and intentionally resets approvals/edits; it is not a saved-review restoration mechanism.
6. CSV includes every source note and its current reviewed product/demand/decision/note and matching product cost. Repeated product totals in CSV are lookups, not additive line costs. Leading formula-like string cells are apostrophe escaped; embedded commas, quotes and newlines are preserved. Markdown contains the full source audit and product plans. Display dollar values are rounded; JSON retains the rational numerator/denominator in cents.

Unlike the earlier fixed-price pack-lot worksheet, this process handles **all-units price discontinuities** and can reject an apparently cheaper bulk tier because of annual carrying cost. It is not a pack-rounding reskin.

## Cost model and comparison

For annual demand D, integer order quantity Q, eligible tier unit price P, order charge S and annual per-unit holding H, modeled annual cents = D×P + D/Q×S + Q/2×H. Every Q from 1 through maxOrder is checked, using BigInt cross-products for exact rational comparisons. Ties choose the smaller Q. All units in an order receive the applicable tier price. Compare the best all-tier plan with the best quantity confined to the base-price interval (below the first discount); a one-tier catalog gives identical baselines. Products without reviewed demand have no plan. The displayed grand annual-unit sum is a mixed-product record-conservation count, not a shared stock measure; only per-product demand drives the plans.

This models steady demand, instantaneous replenishment, fractional annual order frequency, average stock Q/2, and constant annual holding cost. It excludes freight, taxes, lead-time stock, expiry, shortages, working-capital constraints, supplier minima other than tiers and multi-product discounts. Maximum order quantity is a per-product cap, not a shared warehouse capacity. If real supplier terms are incremental rather than all-units, do not use this model. Computed cost differences are not measured savings or supplier quotes. An optimum can remain in the base tier despite a lower discounted unit price.

## Download, devices, privacy and cache

First load requires internet: approximately 23 MB model/tokenizer/config from Hugging Face and its CDN, plus approximately 27 MB same-origin WASM/runtime (~50 MB total, excluding browser overhead). Several hundred MB working memory recommended. Modern module workers, WebAssembly SIMD, Cache API and secure origin; no WebGPU required. Desktop Chrome tested; phone-width emulation is not a physical-phone test. Other browsers/devices unverified. Download progress, cancel and actionable failures are visible. Cancellation terminates the worker; retry creates a fresh one. Run identities guard late worker messages, worker downloads and file reads.

Only public model/runtime files are downloaded. User text is passed into the local worker, not uploaded, sent in URLs or saved automatically. There is no analytics or remote inference. Source/review is in memory until you explicitly export/copy. Cache API keeps public worker/factory/WASM; Transformers.js caches model assets. Fresh-worker inference with **all network disabled inside an already-open warmed page** was tested. Offline navigation/reload/app-shell startup is NOT promised. Cache eviction, browser settings/private mode or upstream revisions can require internet again.

The immutable shared WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Keep that earlier published asset. Installed runtime binary/factory byte matches were checked; see asset-privacy-validation.json. Runtime JS and worker are locally bundled; no inference scripts are CDN imported.

## Build, validate, publish

React + Vite; base `/daily-app2/20261112-13/`. `npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy script is required but **do not run it to publish the collection**: from the root run predeploy/deploy, which assembles every gallery app in deploy/. Pages branch/build commit and public asset/inference verification are required.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed checks. Successful model tests use real inference. Fault injection is confined to defensive tests and is explicitly labeled. Examples/exports are synthetic, not real purchases or documents.
