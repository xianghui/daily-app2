# Succession Bench

A local-AI nursery planning utility for a small grower assembling repeated plant-order handoffs. Rough crop descriptions are the bottleneck: the same crop arrives under informal names, while dense propagation trays and spaced finishing trays consume different bench capacity.

## Workflow

1. Choose either synthetic batch, paste the documented JSON shape, or import a `.json` source/audit (up to 8 MB).
2. Set an explicit planning date `asOf`, shared `capacityTrays`, dispatch dates, target plants and crop references. Example references are invented demonstration assumptions, **not horticultural advice**.
3. Explicitly click **Load AI & match crop notes**. The no-key model proposes crop-reference links with source descriptions and cosine evidence.
4. Review every profile. Edit target quantities/dates, leave multiline notes, approve or hold. Undo the last 40 review changes. Source changes clear old suggestions; review changes invalidate applied exports.
5. Apply the current reviewed plan. Inspect sow/pot-up/dispatch dates, seed counts, two-stage tray reservations, overloads and past sow dates. Revise inputs to resolve conflicts; no automatic order moving or equipment control.
6. Download the complete JSON audit, audit CSV, daily occupancy CSV or Markdown; copy Markdown. **Plan CSV** is gated until all orders are approved, capacity fits and no sow date precedes the planning date.

An exported audit imports its original source only, intentionally resetting decisions for fresh review. It does not silently restore old approvals. All held orders survive the audit and Markdown but are excluded from demand totals; partial results are labeled and cannot release a Plan CSV.

## Real AI, not a lookup demo

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX; model task is feature extraction, not generated horticultural instructions.
- Runtime: Transformers.js 4.3.2 / ONNX Runtime Web, WASM SIMD CPU, one thread, mean pooling and normalized 384-dimensional vectors. No WebGPU needed.
- Cosine ranking links short order notes to supplied crop descriptions, improving on exact-name/manual lookup. All suggestions are pending; no confidence percentages or automatic acceptance. Similarity is not identity or suitability. Negated/unrelated text may still select an unsuitable nearest crop. AI does not estimate growing times or survival.
- Batches contain at most 32 texts (8 profiles + 24 orders), processed in chunks of four. Each note/description is limited to 200 characters. The actual inspected feature-extraction pipeline truncates using tokenizer `model_max_length: 512`; it does **not** forward its caller's `max_length:256` option. We do not claim a 256-token cap.
- Every returned vector count, dimension, finiteness and approximate unit norm is validated before ranking. There is no fake fallback, external provider option, API key or server inference.

### Shared same-origin dependencies

The small app intentionally reuses existing immutable public runtime assets to avoid duplicating approximately 27 MB in this collection:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` — complete embedding worker.
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` — WASM module factory.
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` — 26,861,777-byte binary.

Preserve these originating apps/paths during assembly. Exact hashes are in `runtime-provenance.json` and checked against built/public bytes. App React/JS/CSS is bundled locally; the shared worker is fetched then instantiated as a module Blob worker. Source/protocol and complete dependency paths were inspected.

## Downloads, devices & offline scope

First run needs roughly **50 MB** (~23 MB weights + 26.86 MB WASM + tokenizer/JS). Hugging Face and its documented redirect/CDN hosts serve model files; runtime assets are same-origin. The UI explains this before loading and displays file/chunk progress. Cancellation terminates workers and aborts pending worker-source fetches; run identity rejects late results. Errors/timeouts leave no classifications; retry is explicit.

Recommended and tested: current desktop Chrome, WebAssembly SIMD, module workers, Cache API; actual tests disabled GPU. Narrow 320/390 CSS-pixel layouts were checked in desktop Chrome, not physical phones. Slow devices can exceed the 180-second timeout. Unsupported workers/WASM fail with device guidance; SIMD/runtime construction failures are surfaced rather than replaced with fake output.

Cache API retains worker source, factory and WASM; Transformers.js caches model files. A warmed, **already-open page can run another real inference using a fresh worker while all network is blocked**; this was tested against the production bundle. Offline app-shell reload/navigation is **not** supported or claimed. Storage eviction/private browsing may require fresh internet. Model URLs currently resolve `main`; future upstream changes can affect behavior, so semantic fixtures and offline caching must be rechecked after runtime/model updates.

## Deterministic planning contract

- `sow = dispatch − propagationDays − finishingDays`; `potUp = dispatch − finishingDays` using UTC calendar dates, no time zones/business-day adjustment.
- One seed per propagation cell. Seeds are `ceil(targetPlants × 1000 / successPermille)`; emergence is an assumption, not a guarantee or statistical service level. `successPermille` is an integer 1–1000.
- Propagation trays `ceil(seeds / propagationCells)`; finishing trays `ceil(targetPlants / finishingCells)`. Assumes all attrition is known by pot-up and zero later mortality. Spare expected emergence is retained in the JSON worksheet but is not a guaranteed plant count.
- Each whole tray reserves equal bench footprint. Propagation occupies `[sow,potUp)`; finishing occupies `[potUp,dispatch)`. Dispatch frees space that morning. Whole-tray rounding is independent per order; no inter-order tray sharing.
- Daily totals and over-capacity tray-days are calculated from reviewed approved orders. Baseline uses target plants directly in dense propagation trays through both stages, ignoring attrition and pot-up spacing. It is explicitly labeled a deliberately naive space estimate, **not measured productivity or biological accuracy**.
- No optimization of dates, labor, sowing inventory, temperatures, weather, cultivar differences, germination uncertainty or biological interactions. The improvement is consistent back-planning and visible capacity exceptions; operators make tradeoffs.

## Input/output and bounds

Source shape is shown in both editable examples. Required root: `title`, `asOf`, `capacityTrays`, `profiles`, `records`. Each profile has unique `id`, `description`, propagation/finishing durations, cells per tray and `successPermille`. Each order has unique `id`, `note`, positive integer `plants` and ISO `dispatch` date.

Limits: 1–24 orders; 2–8 profiles; 200-character model text; 40-character IDs; 100-character title; 60,000-character source; 8 MB import envelope; 500-character reviewer note; target plants 1–100,000; cells/tray 1–500; each stage 1–90 days; capacity 1–100,000 trays; dates 2000–2099; combined first-sow through last-dispatch horizon ≤366 days. Invalid calendars, absent/duplicate IDs, malformed vectors and invalid reviewed quantities are blocked. No records are silently dropped.

JSON contains originals, current review decisions/evidence, worksheets, daily occupancy, summary and release gates. CSVs have quoted fields/CRLF with quote/newline escaping; formula-like text beginning `= + - @ tab CR` is apostrophe-protected. JSON preserves exact text. Signed numeric data is not rewritten. Markdown is a downloadable text report, not rendered imported HTML. All artifacts reflect the last **applied current** review only.

## Privacy

User input remains in memory on the device. Only static runtime/model downloads occur; no content, notes, keys or telemetry are sent. Imported instructions cannot add tool or network authority. No optional remote inference exists. Network requests were observed from production startup through processing: downloads only, all GET with no body, no synthetic input in URLs. Signed model-CDN query values were never persisted in reports. Downloaded audits naturally contain the user's own records; samples/tests use synthetic data only.

## Build / verify / publish

```sh
npm install
npm run predeploy
python3 serve-built.py --port 7833
# separate terminal
node core-test.mjs
python3 independent-test.py
node browser-test.cjs
node defensive-test.cjs
PREFIX=local- node recovery-test.cjs
python3 artifact-test.py
python3 bundle-audit.py
```

Browser tests use the workspace-installed Playwright/Chrome. Serve the real base path, including the referenced older app `dist` trees. Run **root** `npm run predeploy` and **root** `npm run deploy` from `/Volumes/ExternalHD/daily_app2`; per-app `deploy` exists as required but must not replace the collection. `serve-built.py --assembled` tests the completed assembled tree. See `VALIDATION.md` for observed results, limitations and public verification.
