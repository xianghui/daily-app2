# Cart Weave

A local-AI purchasing worksheet for community groups and small teams comparing supplier quote batches. Input a requirement list and quoted packs, reconcile descriptions, verify products/units/prices, then compare a goods-first basket with a delivery-aware basket. It never places orders or contacts suppliers.

## Workflow

1. Load either synthetic example or paste/import JSON. Edit requirements, supplier delivery fees/free-delivery thresholds and offers. Descriptions are not specification certificates.
2. Explicitly press **Load AI & reconcile quotes**. The real local model compares semantic descriptions, restricted to compatible units, and shows ranked similarity evidence. Similarity is not confidence.
3. Review every offer: correct item, unit, quantity per pack, pack price in cents and available pack count. Approve verified alternatives or hold/reject them. Add notes; undo review edits. Original quotes remain intact. Editing a match or numeric field resets its approval.
4. Confirm equivalence, explicit unit conversion, tax-inclusive prices, stock, delivery and one currency. Apply the reviewed plan. Held offers are excluded but never disappear; an uncovered requirement blocks purchasing output. Every review/confirmation edit invalidates export until reapplication.
5. Inspect required/supplied/surplus quantities, supplier bills and the complete baseline. Export current JSON, CSV or Markdown, or copy Markdown. All records survive, including unused and held quotes. Importing audit JSON restores originals only and renews approvals.

## AI, runtime and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; [original sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Transformers.js 4.3.2 / ONNX Runtime Web, WASM CPU, single thread. No WebGPU required, no mandatory paid service, API key, remote inference integration or agent credential.
- Actual AI: mean-pooled, normalized 384-dimensional learned embeddings; dot-product ranking against supplied requirement descriptions. Four texts per batch; first 256 tokens. Finite normalized vector count/dimension validated before matching. Units restrict candidates deterministically. Zero compatible candidates yields unmatched, never a fabricated match.
- The model host’s current main revision is used; future upstream revisions/cache eviction can change downloads or results. First explicit model load requires internet: approximately 23 MB model/tokenizer downloads from huggingface.co / hf.co and redirected Hugging Face file hosts, plus about 27 MB same-origin runtime/WASM. App code and worker are bundled locally. The byte-identical shared immutable WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must be preserved by the collection deployment.
- Inputs, vectors and reviews stay on-device in memory. Model requests download files; content is not sent in URLs or bodies. No content telemetry or remote action exists. Imported instruction-like text is treated as data, not authority. Only synthetic fixtures are committed. No browser localStorage persistence; export before closing.
- Cache API stores worker source, runtime factory and WASM; Transformers.js caches model assets. Fresh-worker offline inference was tested after an online run **inside an already-open cached page**. Offline reload/navigation is not promised. Browser eviction, disabled caches or insufficient storage require another download.
- Tested current desktop Chrome on this macOS host; requires module workers, WebAssembly SIMD and adequate memory (allow several hundred MB). 320/390px emulation is not physical-phone validation. Safari/Firefox, old browsers and low-memory hardware unverified. WebGPU absence is harmless because default CPU runtime is actually used.
- Loading shows download file progress and batch counts. Cancel terminates the worker; edits and imports invalidate the run ID. Late worker/file-download/file-read results cannot overwrite new input. 180-second timeout, worker errors, network errors, malformed embeddings and unavailable WASM/worker handling give errors, never canned inference.

## Formats, bounds and exact cost rules

JSON only; no CSV/PDF parser. Originals ≤40 KB, audit JSON ≤1 MB; 1–6 requirements, 1–4 suppliers, 1–24 offers, unique IDs; text descriptions ≤400 chars. Follow either example's schema. `currency` is an uppercase three-letter label, **not** a conversion service. All money is integer cents in that one currency, including applicable taxes.

Units are `each`, `g` or `ml`; convert kg/litres explicitly. Demand and pack quantity 1–1,000,000 units; pack price 1–1,000,000 cents; stock `maxPacks` 1–1,000 packs. Supplier delivery 0–1,000,000 cents; `freeAtCents` 0–100,000,000: zero disables free delivery. A used supplier's fee is waived at or above a positive threshold, based on its goods subtotal. An unused supplier incurs no fee.

After review, exact enumeration chooses **one sufficient offer per requirement**, at `ceil(required/packQuantity)` whole packs, within stock. It minimizes goods plus per-supplier delivery; deterministic input order breaks total-cost ties. Baseline independently chooses cheapest sufficient goods per item, then adds the **same** delivery rules. This is not a global purchasing optimum beyond those explicit restrictions: no split sourcing, no extra packs bought only to reach free shipping, no partial filling, lead-time constraints, additional discounts, taxes outside supplied prices or exchange rates. Products need human specification checks. An offer maps to only one requirement.

JSON contains original input, full reviewed records with evidence, complete selected and baseline baskets, supplier bills, blockers and computed metrics. CSV contains every quote, originals, current reviewed pack/price/stock fields, decision/note and selected quantities/costs; supplier bills and requirements are in JSON/Markdown, not CSV. Spreadsheet-formula-like strings are escaped without changing numeric cents. Markdown includes current purchase lines, surplus, both total costs, supplier bills and complete audit. Downloaded JSON reimports original input, not reviewed state.

## Distinct workflow scope

The gallery’s Catalog Concord handles canonical SKU reconciliation, not basket optimization. The unpublished Quote Canopy draft uses exact-unit per-piece prices and fixed supplier fees. Cart Weave specifically handles **unequal pack quantities, whole-pack rounding/surplus, pack-stock limits and subtotal-dependent free-delivery thresholds**; its optimizer enumerates offer combinations because shipping waiver boundaries cannot be solved by simply picking each supplier subset’s cheapest line. It does not promote or alter that earlier draft.

## Quality and validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Both materially different tiny fixtures matched 12/12 intended product links; this is not universal accuracy. Unrelated or negated descriptions still get a nearest candidate, so mandatory verification/holds are essential. Real inference also drives 24-offer batches and successful fresh-worker offline processing. No mocked success path. Defensive mocks only inject malformed outputs/worker failures/timeouts.

The pantry baseline is 3,800 cents vs reviewed delivery-aware 2,690; art workshop 4,300 vs 3,270. These are computed synthetic quote estimates, **not actual savings, accuracy or measured time reductions**. AI avoids literal-title dependence; the deterministic optimizer accounts for cross-item delivery effects. One-offer and minimum-pack restrictions are deliberate limitations.

## Build and collection publishing

`npm install`, `npm run dev`; `npm run predeploy` builds the production Vite bundle with base `/daily-app2/20261110-23/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained as required, but **do not publish this app alone**. Publish from `/Volumes/ExternalHD/daily_app2` with root predeploy/deploy so all prior apps and the gallery survive. The root deployment README specifies Pages commit/build and public runtime checks.

Public release verified at https://xianghui.github.io/daily-app2/20261110-23/ after two Pages synchronization timeouts and a successful third deployment. Actual public asset hashes, real inference and the full public workflow suite passed; see the validation and publication records.
