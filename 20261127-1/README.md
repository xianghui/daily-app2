# Rootwater Planner

Private crop-note reconciliation → reviewed daily root-zone water balance → usable watering CSV and complete audit.

## Who and why
Community-garden coordinators receive informal bed notes and weather sheets. AI matches each note to a supplied crop description, avoiding a rigid exact-name dictionary. After verifying crop factors and soil measurements, reviewers produce an end-of-day watering worksheet instead of blindly repeating a timer. This is distinct from Rain Reserve's catchment/tank sizing and Dewpoint Desk's surface-condensation checks: it tracks available root-zone water, crop ET, depletion triggers and per-bed irrigation limits over consecutive days.

## Workflow
1. Load either synthetic example, paste source JSON or import `.json`. Edit constraints and crop/weather data in the source editor. Source changes cancel inference and invalidate all previous suggestions/exports.
2. Read the download/privacy notice, then **Load AI & match crop notes**. No model downloads occur before this explicit action.
3. Inspect each original note and ranked crop-description evidence. Correct crop assignments, area, available capacity or initial available water. Add multiline notes. Approve every checked bed or hold/reject it. Undo up to 40 review edits; originals are never overwritten.
4. **Apply reviewed water plan**. Any subsequent review edit invalidates the snapshot and disables exports until reapplied. Held beds remain in the audit but are explicitly excluded from calculations. The complete watering CSV is blocked until all beds are approved.
5. Download JSON, Audit CSV, Markdown, or complete Watering CSV; copy the current Markdown plan. Reimport an audit to recover original inputs; approvals are intentionally not restored.

## Input contract
One object:
- `title`: 1–100 characters.
- `trigger`: fraction of available capacity depleted to trigger watering, 0.05–1.
- `efficiency`: 0.1–1; net root-zone irrigation / gross applied depth.
- `rainCapture`: 0–1; fraction of supplied rainfall entering the modeled bucket.
- `maxGrossMm`: 0–100, maximum gross watering depth **per bed per day**, not a shared system limit.
- `profiles`: 2–8 `{id,description,kc}` entries; descriptions ≤200 characters, Kc 0–2. User supplies and verifies these factors; AI does not estimate them.
- `records`: 1–24 `{id,note,areaM2,capacityMm,startMm}` beds; notes ≤200 characters, area 0.1–10,000 m², available capacity 1–500 mm, initial available water 0–capacity.
- `days`: 1–14 consecutive ascending `{date,et0Mm,rainMm}` UTC calendar days; dates YYYY-MM-DD, reference ET0 0–30 mm/day, rain 0–500 mm/day.

IDs are unique within each list, 1–32 ASCII letters/numbers/_/-. Numbers are finite JSON numbers. Control codes/malformed Unicode are rejected in source text. Source ≤60,000 characters; import envelope ≤8 MB. All data is synthetic in this repository. Values in examples are illustrative assumptions, not agronomic recommendations.

## Real AI and static runtime
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX feature extraction. Normalized mean-pooled 384-dimensional embeddings compare each short note with supplied crop descriptions using cosine ranking. Similarity is not confidence, crop suitability or a guarantee of identity.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT), WASM CPU, one thread; WebGPU not required. No backend, API key, paid service, remote provider or deterministic fake-AI fallback.
- Same-origin immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, runtime factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve the originating apps/assets in collection deployment. Their hashes and byte lengths are in `runtime-provenance.json` and `bundle-audit.json`. Protocol `{id,texts}` → progress / batch / result vectors / error. Worker implementation and dependencies were inspected and inference retested, not presumed compatible.
- Up to 32 short texts in chunks of four. Validate exact vector count, 384 dimensions, finite components and unit normalization before ranking. Notes/descriptions capped at 200 characters. Actual tokenizer maximum is 512 tokens with truncation. The shared feature pipeline does not forward its supplied `max_length:256` argument; no 256-token claim is made. See `tokenizer-audit.json`.
- Roughly 50 MB first download: ~23 MB weights + 26.86 MB WASM + tokenizer/JS. Internet initially from Hugging Face/CDN for model/tokenizer and same-origin for bundled runtime. Current model revision uses `main`, observed commit `751bff37182d3f1213fa05d7196b954e230abad9`; upstream changes could alter results.
- Current desktop Chrome/Edge with module/Blob workers, WebAssembly SIMD and Cache API recommended. Tests used desktop Chrome with GPU disabled. Actual phone hardware, low-memory behavior, Safari/Firefox and screen-reader use were not verified; 320/390px responsive browser viewports were tested.
- Download and chunk progress, cancellation, 180-second timeout and actionable runtime/network errors. Cancelling terminates workers and aborts worker-source fetches; run/file-read identities prevent stale writes. Failed inference never creates fabricated profiles.

## Privacy and offline scope
User content remains in browser memory; it is passed only to the local worker, never a model server. Model/file downloads expose ordinary network metadata (e.g. IP address) but not notes. No telemetry, URL fetches from imported data, keys, external irrigation controls or account writes. Text is data, not instructions or tool authority. Exports contain your inputs/review notes: handle them accordingly.

Cache API stores worker, runtime factory/WASM and model/tokenizer files—not garden data. A fresh worker in the same already-open, warmed page was tested successfully with all network disabled. **Offline navigation/reload is not supported** (no app-shell service worker). Cache eviction, site-data deletion or private mode can require fresh downloads. Runtime/cache failures are visible; no silent fallback.

## Deterministic calculation
For each bed/day, in this explicit order:
1. Add captured rainfall (`rain × rainCapture`), cap at available capacity and record drainage.
2. Crop demand = `ET0 × Kc`. Remove the lesser of demand and available water; preserve unmet ET separately.
3. At day end, if depletion reaches `trigger × capacity`, request refill to capacity, adjusted for application efficiency. Limit gross depth to `maxGrossMm`. Add net water to storage, cap and record any drainage.
4. Liters = gross depth mm × area m². Confirm `start + effectiveRain + netIrrigation = actualET + drainage + end` within floating-point tolerance 1e-7 mm.

Capacity/start are available water above wilting point, not total moisture content. Gross-minus-net irrigation is assumed lost outside the bucket. Same-day end-of-day watering cannot erase unmet demand earlier that day. No infiltration-rate, groundwater, rooting-growth, salt, forecast-error, shared pump-budget or plant-health model. The worksheet is an assumption-based planning aid, not an irrigation prescription.

Baseline repeats maxGrossMm every day under the same weather, Kc and efficiency. Display totals for liters, drainage and unmet ET are computed scenarios—not observed water savings, accuracy or time improvements. Drainage/unmet-ET summaries are **sums of bed-mm**, not area-weighted volumes. Full JSON/CSV preserve floating-point results; display rounds values. Lower water use alone is not a quality improvement if unmet ET increases.

## Output
- JSON `rootwater-v1`: untouched original inputs, full review/candidates, complete/partial flag, plan, fixed-daily baseline and summary.
- Audit CSV: one row per original bed, including holds, current measurements, decision and multiline reviewer notes.
- Watering CSV: one row per approved bed per day; enabled only for a complete plan. Includes start/rain/demand/actual/unmet/gross/liters/end/drain and crop evidence reference.
- Markdown/copy: every original bed and note, decisions, review notes, daily recommendations and summary.

CSV is CRLF, every field quoted and embedded quotes doubled. Spreadsheet-formula-leading textual cells receive an apostrophe, including multiline text. Numeric values remain numeric. CSV is independently parsed with Python; edited multiline text, IDs, all daily rows and reviewed values are checked. Markdown is a text handoff, not a sanitized HTML publishing format.

## Validation and build
See [VALIDATION.md](VALIDATION.md) for actual outcomes and limits. Run `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `python3 artifact-test.py`, `python3 bundle-audit.py`. Browser tests require the installed Playwright/Chrome used in this environment. `python3 serve-built.py --port 7830` serves production files at the actual deployment base and referenced runtime paths. `--assembled` tests the combined deployment after root assembly.

`npm run predeploy` builds this app; contractual per-app `deploy` remains `gh-pages -d dist`. **Publish only from the collection root**, where the combined `deploy/` tree preserves the gallery and older apps. No builder digest is sent.
