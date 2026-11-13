# Peak Folio

Local-AI equipment reconciliation and quarter-hour peak-demand planning for workshop managers. Unlike an appliance energy tally, this utility checks repeated-load overlaps, rated power, coincident demand and timing shifts in one supplied operating window.

## Workflow

1. Choose **Ceramics studio** or **Print room**, paste JSON or import source/audit `.json` under 2 MB. Set `project`, `energyCentsPerKWh`, `demandCentsPerKW`, `peakLimitW`, equipment `policies` (id, label, description, ratedW) and `records` (id, note, startSlot, slots, watts, owner). Examples are wholly synthetic.
2. Explicitly **Load AI & match equipment**. The download/device/privacy notice is visible before loading; progress updates distinguish downloads and four-text inference batches. Cancel terminates the worker. Retry requires no credentials.
3. Review every identity, source note, ranked description and supplied watt/time evidence. Correct equipment, watts, start/duration, reviewer and multiline follow-up. Approve or hold each record; undo edits. All originals remain intact.
4. **Apply reviewed loads**. Holds, rating exceedances or overlaps for the same equipment block totals, not complete audit exports. Missing/unrecorded loads are NOT inferred. Adjacent intervals are allowed. Independent physical units need separate profiles.
5. Inspect all 96 quarter-hour loads, peak slots, target excess, energy and charge scenarios. Compare concurrent demand with a sum-of-equipment-maxima baseline. Explore a feasible shift by changing reviewed start slots and reapplying. No automatic scheduling or device control.
6. Download current JSON/CSV/Markdown or copy the checklist. Review edits invalidate applied snapshots. Reimport audit originals; AI and approvals must be renewed.

## Real AI and runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: <https://huggingface.co/Xenova/all-MiniLM-L6-v2>. Quantized q8 ONNX; Transformers.js **4.3.2**, ONNX Runtime Web WASM CPU. No generative/remote inference or API keys.
- About 23 MB model/tokenizer from Hugging Face/CDN, plus 26,861,777-byte same-origin WASM and a bundled module factory. Model host default revision is not pinned; future upstream changes may affect reproducibility.
- AI creates mean-pooled normalized 384-dimensional embeddings of equipment descriptions and rough notes. Cosine ranking proposes identities despite wording differences. Vectors are checked for finite components, dimensions, count and norm. Similarity is not confidence, proof of identity, safety or billing accuracy. Unrelated text still gets a nearest match and requires a hold.
- AI never invents wattages, tariffs, ratings, schedules or constraints. Those are supplied and explicitly reviewed; totals/guards are deterministic. Imported instructions have no tool authority.
- Bundled worker and module factory use production paths. The byte-identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; the root deployment MUST preserve that earlier app.

## Privacy, devices and caching

Default user content never leaves the browser; only runtime/model files download. No shared credentials, optional provider, analytics, account access, uploads or device connections. Content/reviews are memory-only; export to keep work. Cache API stores model/runtime/worker, not user notes.

Requires WebAssembly SIMD, module workers and several hundred MB free memory. Desktop Chrome CPU with GPU disabled tested. 320/390px layouts and 320px emulated touch flow tested; physical mobile hardware and other browsers remain unverified. WebGPU is unnecessary.

After online warming, an **already-open page** can start a fresh worker and run real inference fully offline. Offline navigation/reload/app-shell startup is NOT supported or claimed. Cache eviction, denied storage or a new profile needs internet again. Worker construction/download, model/network failure, malformed embeddings and timeout show errors, never fake results. Cancel/input changes invalidate run IDs and terminate workers; asynchronous source/import operations are guarded.

## Bounded formats

Source JSON ≤40,000 characters; import ≤2 MB (audit envelope originals are unpacked and revalidated). 2–6 equipment profiles; 1–40 notes; unique profile/record ids. Note/description ≤300 characters; owner ≤150; review evidence ≤1,000. Model batches four texts, truncates at 256 tokens; run timeout 180 seconds.

Integer `watts` 0–1,000,000; ratedW 1–1,000,000; `startSlot` 0–95; `slots` 1–96; end ≤96. One slot = 15 minutes. Slot 32 = 08:00, slot 96 = 24:00. Timeline is a chosen abstract local day: no timezone/DST or multi-day conversion. Energy rate 0–10,000 cents/kWh; demand rate 0–100,000 cents/kW; peak target 0–6,000,000 W. No CSV/PDF import or automatic numeric extraction.

## Arithmetic and honest comparisons

Half-open constant-power intervals [start,end) are added into 96 integer-watt slots. `quarterWh = sum(watts × slots)` is an exact integer in quarter-Wh units; kWh = quarterWh/4,000. Peak = maximum concurrent slot watts. Baseline = sum of each reviewed equipment’s maximum supplied watts, ignoring coincidence. A record is not added twice: overlapping approved records for the same equipment block the worksheet.

Energy cents = half-up(quarterWh × energyCentsPerKWh / 4,000). Demand cents = half-up(peakW × demandCentsPerKW / 1,000). Round each aggregate charge once, then sum. Bounds keep all integer products within JavaScript’s exact integer range. No per-record rounding allocation is implied. All rates use one currency, with cents as its 1/100 unit.

Demand rate is per chosen billing period but applied only to this supplied window’s peak. Missing days/loads, different demand averaging intervals, ratchets, minimums, taxes, reactive-power/fixed charges and time-of-use rates are excluded. A real bill may be higher. This is not an electrical design, circuit sizing tool, certification, actual bill, measured savings or operationally feasible schedule guarantee. Human process dependencies may prohibit shifts.

## Artifacts

- JSON: originals, all reviews/holds, blockers or full 96-slot worksheet, exact quarter-Wh, peak/baseline and charge comparisons.
- CSV: one row per original, proposed/reviewed identity, original/reviewed interval and watts, decision, reviewer/evidence and aggregate window totals when complete. Aggregate totals repeat per row and must NOT be summed. Formula-like text gets a leading apostrophe; numeric fields remain numeric.
- Markdown: source-linked load timing checklist and complete review audit. No external action.

See [VALIDATION.md](VALIDATION.md) for observed results and limitations. `python3 oracle-test.py`, `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`, `node edge-test.cjs`, `python3 artifact-test.py` and `python3 asset-audit.py` reproduce checks. Start `python3 serve.py` first for browser suites. Browser checks use the installed workspace Playwright and Chrome; initial model network access required. `TEST_URL` and `REPORT` select combined/public suites.

## Build and publishing

`npm install`, `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261113-20/`. Per-app `deploy: gh-pages -d dist` is retained but MUST NOT publish the collection. Use root `npm run predeploy` and `npm run deploy`, which assemble/publish the combined gallery and all existing apps.

Peak Folio public release: both real-AI fixtures, all nine public workflow groups, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 645-entry gallery verified on the first Pages deployment.
