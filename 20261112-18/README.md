# Expiry Relay

A local-AI stock-planning utility for makerspace supply coordinators. Rough lot descriptions often do not exactly match catalog product names; MiniLM semantic retrieval proposes product identities before human review. The distinct workflow is **shared-capacity expiry rescue scheduling with protected demand**, not replenishment forecasting, generic stock matching or inventory editing. Unlike the earlier Pantry Current ingredient-reservation desk, this optimizes otherwise-expiring surplus across a shared daily handoff capacity after protecting normal demand, with an explicit loss ceiling and rescue sheet.

## Use

1. Choose a synthetic example or paste/import JSON. Define a name, horizonDays (1–14), rescueCapacity (one shared daily whole-pack handoff cap 0–100000), maxExpiredPacks (your allowed loss ceiling 0–2400000), catalog of 2–8 products (`id,title,description,demand`) and 1–24 lots (`id,text,qty,expiryDay`). Demand has one whole-pack count 0–100000 per horizon day. Quantities are whole sealed packs (1–100000); each product must use one consistent pack size. Lot expiryDay is 1–365 and inclusive: day 1 means usable today only. Input order must represent receipt order for the FIFO baseline.
2. Explicitly press **Load AI & match lots**. First run requires internet and approximately 50 MB downloads. Watch download/batch status; cancel terminates the worker. Retry starts a fresh worker. No loading before this action.
3. Check every suggested product against its supplied descriptions and cosine evidence. Similarity is not confidence. Edit quantities/expiry from primary labels, correct product links, approve each lot or hold uncertainty. Undo reverses review edits; holds block the entire plan. Demand/catalog changes go through input JSON and require a new run/review.
4. **Apply reviewed lots** creates a reviewed snapshot. See rescued versus still-expiring packs, loss-goal status, shared daily rescue slots, protected FEFO demand picks and all lot balances. The no-rescue FEFO baseline and secondary FIFO context use identical reviewed inputs. Any further edit clears exports until reapplied.
5. Download actual JSON, Audit CSV, Pick CSV, Rescue CSV, Markdown or copy Markdown. JSON contains unchanged original input plus all reviewed fields/evidence and both scenarios. Importing an export intentionally restores originals only and requires fresh inference/approval, not old approvals.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized `onnx/model_quantized.onnx`, downloaded from Hugging Face and its CDN (`huggingface.co`, currently `us.aws.cdn.hf.co`). This uses the repository's default revision, not a pinned immutable model snapshot.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), q8 WASM CPU. Model/tokenizer approximately 23 MB; same-origin WASM approximately 27 MB. Four texts per batch, maximum 256 tokens, normalized mean-pooled 384-dimensional embeddings. Finite dimensions/norms are validated before cosine ranking.
- Browser runtime/worker and factory are bundled locally. Byte-identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes); preserve this older collection asset. See asset audit for SHA-256.
- No API key, backend, provider integration, analytics or external content upload. Only public model/runtime assets download. User content is sent to the local worker in memory, never included in model-download URLs/bodies. Imported instructions are inert text, not tool authority. No personal data or credentials in fixtures.
- Modern module workers + WebAssembly SIMD required; several hundred MB free RAM recommended. WebGPU is not used or required. Desktop Chrome tested; physical phones, Firefox, Safari and constrained-memory devices not tested. Failure is explicit, never a fake/deterministic AI fallback.
- Cache API stores worker/runtime and Transformers.js stores model assets. **Tested offline scope: fresh-worker real inference inside an already-open, previously warmed page with the browser context fully offline.** Offline reload/navigation not promised. Cache eviction/private browsing can force downloads. A 180-second timeout, download errors and device errors allow retry. Cancel/edit invalidates run IDs; stale imports/downloads/results cannot replace newer work.

## Deterministic planning and limits

All lots are on hand at day 1. Each product is independent. At each day, consume demand from eligible lots, then expire remaining stock whose expiryDay equals that day. FEFO orders by earliest expiry, then original index; FIFO always orders by original index. Unmet demand is not carried forward. There are no future arrivals, substitutes, partial packs or reservations. Expiry beyond the horizon is closing stock. After reserving all FEFO demand, the otherwise-expiring residual is scheduled for rescue by earliest expiry into the earliest daily shared capacity. All packs cost one handoff slot, all lots are available from day 1, and future demand reservations are immutable. This earliest-deadline schedule maximizes rescued pack count under those assumptions; it does not optimize money or recipient welfare. Suitable recipients and storage are assumed, not verified. Loss goal compares still-expiring packs against maxExpiredPacks and never hides insufficient capacity.

Every lot satisfies `demand-picked + rescued + unrescued expiry + closing = reviewed quantity`; every product/day satisfies `picked + unmet = demand`.

AI drives semantic identity proposals only. It does not forecast demand, infer expiry, validate compatibility, detect unsafe materials or certify stock condition. Mandatory review remains necessary even after the tiny known-answer fixture passed. Follow actual labels, storage conditions and suitability; this is not food/medical safety guidance or an actual donation. No inventory movement, ordering or external account action occurs.

Input text ≤400 characters; titles ≤80; IDs unique safe word/hyphen IDs ≤40. Original JSON ≤18 KB, import/audit envelope ≤1 MB. CSV/PDF input unsupported. Audit CSV preserves every lot, with quoted commas/newlines/quotes and leading formula-like text prefixed with an apostrophe for spreadsheet safety. Pick CSV has one row per lot pick; product/day demand repeats across those rows, and unmet demand appears only on its first row (do not sum repeated demand). Zero-pick product/days still get a row. Rescue CSV contains every rescue day, including no-pick days; capacity repeats on split-pick rows and must not be summed across those rows. JSON is the complete lossless audit. Markdown escapes source/note newlines as JSON string literals.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports/test sources. Two real inference fixtures, production-bundle and offline checks, independent arithmetic/optimization oracles including 2,000 unit rescue cases and 200 exhaustive shared-capacity optima, maximum 8-product/24-lot/14-day run, defensive faults, cancellation/retry and independent export parsing were exercised. Tiny examples are not general accuracy evidence.

## Development / publication

React + Vite, base `/daily-app2/20261112-18/`. `npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy contract retained (`predeploy: npm run build`, `deploy: gh-pages -d dist`) but **publish only through the root combined workflow**. No individual deploy should replace the collection.
