# Meridian Desk

Coordinate handoff review for GIS coordinators combining notebooks, archives and GeoJSON-oriented exports. Real local AI retrieves the convention from source context, not from coordinate digits. After human review, exact grammar/range checks produce WGS84 longitude-first points and an auditable export. No maps, geocoding or uploads.

## Workflow

1. Load **Survey handoffs** or **Archive waypoints**, paste source JSON or import source/audit JSON. Edit the profile descriptions to describe known source workflows. Confirm that every approved point uses **WGS84 geographic coordinates**; projected coordinates and other datums are unsupported.
2. **Load AI & reconcile** explicitly loads MiniLM and embeds notes/profile descriptions. Review the semantic ranking (cosine similarity, not confidence). Decimal axis order can be ambiguous; DMS axes are resolved deterministically from hemisphere letters after AI identifies the notation.
3. Correct convention/pair and add multiline notes. Approve or hold every point; applying before review is blocked. Undo reverses review edits, originals stay intact, and edits invalidate applied exports.
4. **Apply reviewed scenario** validates decimal/DMS syntax, hemisphere and ranges and rounds output to nine decimal places. It compares approved valid coordinates with a naive longitude-first decimal baseline. Disagreement counts are not AI accuracy or measured time saved.
5. Download complete JSON/CSV/Markdown, ready-only Release CSV or GeoJSON; copy the reviewed worksheet. GeoJSON lists withheld IDs/reasons in a foreign member. Audit JSON reimport restores originals only and requires fresh AI/review.

## Real model, runtime and device requirements

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0; 384-dimensional normalized mean-pooled embeddings. No generated responses, fake fallback or mandatory paid service.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU required. Current desktop Chrome, GPU disabled, tested. Module workers, WebAssembly SIMD, HTTPS/localhost and several hundred MB RAM required. Physical phones and other engines untested.
- Approximately 23 MB model/tokenizer from Hugging Face/CDN plus 27 MB same-origin WASM on first use. Loading/progress/cancel and a 180-second timeout are visible. Download/network, unsupported runtime, worker, schema and timeout failures fail closed; retry never substitutes canned output.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. These earlier apps and paths must remain published. Byte audits check production/public dependencies.
- Worker source/factory/WASM use Cache API; Transformers caches model files. Tested offline scope: **fresh-worker inference in an already-open page after one complete online run**. Offline reload/navigation is not promised. Cache eviction requires internet. Model revision is main, not immutable; upstream updates can change results.
- Batch size four, maximum 27 texts/run. Descriptions/contexts ≤200 characters. Pipeline truncation uses tokenizer model_max_length 512; its max_length:256 option does not override that tokenizer. Vector count, dimension, finite values and normalization are validated.
- Monotonic run identities guard file reads, pending worker fetches and late responses. Cancel terminates workers. Text resembling instructions is inert input; it has no tools/authority and cannot request credentials.

## Formats and bounds

Source JSON: `{ "profiles": [{"id":"latlon","description":"Field notebook latitude first signed decimal WGS84"}, ...], "records": [{"id":"point-1","context":"Latitude then longitude decimal notebook","value":"1.3521 | 103.8198"}, ...] }`.

Use 2–3 profiles with unique supported IDs: `latlon` (decimal latitude first), `lonlat` (decimal longitude first), `dms` (hemisphere-bearing DMS in either axis order). 1–24 unique records; ID 1–80 chars, context/description 1–200, pair 1–120. Source JSON ≤24,000 chars, imported `.json` files ≤1,000,000 bytes. Audit envelopes have a separate file bound but restored originals must fit source bounds. Notes ≤2,000 chars. Only synthetic examples are included. Extra fields are preserved as inert data.

Pairs use exactly one `|`. Decimal syntax permits sign and period, not comma decimals or exponents. DMS syntax: nonnegative integer degrees, integer minutes, decimal seconds, N/S/E/W, e.g. `33 51 35.9 S | 151 12 40 E`. Hemisphere supplies sign and axis; repeated or wrong hemispheres are blocked. Minutes/seconds <60. Latitude ±90°, longitude ±180°, with zero subdegrees at the bounds. No altitude, degree-symbol notation, hemisphere-free DMS, projected grids, datum transforms, routes or polygons. Output rounds to nine decimals but does not increase source accuracy. Both ±180 are retained without deduplication.

GeoJSON is a FeatureCollection of approved valid Point features in longitude/latitude order. Complete JSON retains originals, edits, evidence, checks and metrics. CSV retains all rows; formula-leading text receives an apostrophe including multiline text, while signed numeric coordinate columns stay numeric. JSON is the lossless interchange format. Markdown is a human worksheet. No external file, map, account or device changes occur.

## Privacy and limitations

The default path has no API key, remote inference, analytics or optional provider integration. Network requests are static GET downloads; content is not placed in URLs or bodies. Downloading weights is distinct from uploading content. Host metadata/IP is visible to download hosts. Local browser memory/cache is not encrypted storage; input itself is not persisted by the app.

The initial four-profile design confused DMS axis-order descriptions, so it was simplified: the model identifies DMS and the parser uses explicit hemisphere identities. Final two tiny fixtures matched 6/6 conventions, **not** a general accuracy claim. A negated decimal-axis note misrouted to longitude-first; mandatory review is essential and even unrelated notes receive a nearest profile. Range checks cannot detect all swapped axes when both numbers are plausible. The app cannot establish the datum, real place or survey accuracy.

## Build and validation

React + Vite, base `/daily-app2/20261123-18/`; `npm run predeploy` builds. Per-app gh-pages scripts/dependency are retained; publish only through root combined predeploy/deploy, never the per-app deploy. See `VALIDATION.md` and reports for actual checks. Tests use installed Playwright/Chrome and independent Python artifact parsing. No daily digest is sent here.
