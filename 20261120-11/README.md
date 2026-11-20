# Label Scribe

A local-first stocktake transcription desk for workshop keepers and archive teams. **Images → real neural OCR → mandatory visual review → validated inventory register + complete audit.** This is not a semantic-matching reskin: AI recognizes printed characters from pixels, reducing the need to type every field. It does not change an inventory system, send data, buy stock or authenticate a count.

## Use

1. Select **Workshop cards** or **Archive cards** for realistic synthetic raster examples, or upload your own PNG/JPEG card batch. Examples are drawn onto canvas and fed to the actual model: no OCR answers are stored or substituted.
2. Use one upright English printed card per image with exactly one of each labeled line:
   ```text
   ITEM: BOLT-204
   LOCATION: NORTH RACK
   COUNT: 24
   ```
3. Read the download notice. Explicitly select **Load OCR & read cards**. Loading stages and per-card inference progress are displayed; Cancel aborts runtime fetches and terminates the worker. The complete run has a 180-second timeout. Retry after fixing network/device/image problems.
4. Compare the recognized ID, location and quantity with the original local photo, which can be opened full-size. Approve or hold **every** source. Empty/ambiguous labeled fields are not guessed. Edit any field; this resets approval and invalidates exports. Notes support line breaks. Undo reverses review edits.
5. Apply the reviewed register. Invalid approved fields or repeated approved item/location pairs block application. Hold repeated photos; counts are never silently added together. All-held batches yield an empty register and a complete audit.
6. Export **Register CSV** (approved rows only), **Audit CSV**, **JSON**, or **Markdown**, or copy the worksheet. Full audits retain all original recognized text, initial parsed fields, current fields and holds. Photos are deliberately **not embedded**; retain originals separately. JSON restores reviewed fields and original text but requires renewed approvals. Restoring an audit is not a new inference run.

## Actual AI and deterministic processing

- **Tesseract.js 7.0.0** worker, **Tesseract.js-core 7.0.0**, English `4.0.0_best_int` LSTM traineddata from `@tesseract.js-data/eng@1.0.0`; Apache-2.0. Model/source: [English model distribution](https://github.com/naptha/tessdata), [Tesseract tessdata_best](https://github.com/tesseract-ocr/tessdata_best), [Tesseract.js](https://github.com/naptha/tesseract.js). Runtime dependency hashes are in `asset-validation.json`.
- Neural LSTM OCR recognizes characters from image pixels using OEM 1, page segmentation mode 6 (single uniform text block). The **non-SIMD CPU core** is deliberately selected, tested with GPU disabled; no WebGPU requirement or unsupported GPU promise. No generative LLM, API provider, shared key or paid service.
- The locally bundled worker uses its pinned library protocol: load → loadLanguage → initialize → setParameters → recognize. The app owns the worker from initialization onward so cancellation can terminate it even during model loading.
- Parsing ITEM/LOCATION/COUNT labeled lines, required-field checks, duplicate detection, sums and artifact generation are explicitly **deterministic**. Duplicate or missing labels yield empty fields. Neural text is validated as nonempty bounded text, then parsed into a fixed schema; malformed worker envelopes/text fail without fake output.
- Imported text/instructions are inert data. No tools, external actions or credential requests are exposed through recognized content.

## Downloads, static hosting, privacy and offline scope

All app UI code and the 111 KB worker are same-origin static files under `/daily-app2/20261120-11/`. To fit the existing collection budget, the CPU engine and model are explicit on-demand pinned downloads from **cdn.jsdelivr.net**:

- Engine: `https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0/tesseract-core-lstm.wasm.js` — **3,896,484 bytes**, JavaScript with embedded WASM (no hidden relative binary path).
- English model: `https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng@1.0.0/4.0.0_best_int/eng.traineddata.gz` — **2,952,873 bytes** compressed; expanded model uses more memory.
- First run needs internet and several hundred MB available RAM. The UI rounds downloads to 3.9 MB engine + 3 MB model, excluding the small app/worker. Network audit confirms no model/runtime CDN request before explicit OCR loading.
- Images and text stay in page/worker memory. Remote traffic consists of GET file downloads, not content uploads. No analytics, secrets, remote inference, URL image imports or server-only calls. User edits are not persisted automatically.
- Engine and worker source use Cache API; the worker uses IndexedDB to cache traineddata. A cached engine becomes a blob URL with a `.js` fragment for the core loader; its embedded WASM has no network-dependent base URL. Blob URLs are revoked on termination.
- **Tested offline claim:** after one successful run, a fresh worker can run actual OCR again with all browser networking disabled in the **already-open warmed page**. Offline reload/navigation/app-shell startup is **not promised**. Browser caches can be unavailable/evicted; reconnect and retry.
- Secure-context browser with WebAssembly and Web Workers required. Desktop Chrome tested. Physical phones, other browsers, low-memory devices and assistive-technology users were not tested; narrow phone viewport layouts were checked.

## Input/output bounds and consistency

- 1–8 PNG/JPEG images; each ≤5,000,000 bytes, ≥100×100 pixels and ≤4,000,000 pixels; aggregate ≤20,000,000 bytes. Header dimensions are checked **before** bitmap decoding. Filename ≤150 characters. No PDF, SVG, remote image URL, handwriting or barcode support.
- OCR ≤12,000 characters per card. Sequential card inference bounds concurrency. Item: 1–40 uppercase ASCII letters/digits/hyphens, starting with letter/digit. Location: 1–100 single-line characters. Count: canonical whole-number string 0–999999; a missing count is not zero. Notes ≤1,000 characters. Audit JSON ≤1,000,000 characters/bytes for files. Image/source changes and imports invalidate running generations.
- Structured `label-scribe/v1` audit: `originals`, `reviewed`, `register`, `metrics`. Original recognized text and original parsed fields are immutable within a run. Source photos remain visible until input changes. Failed batches leave original input images available for retry and publish no partial register.
- Register count fields are actual numeric integers. Full CSV uses proper quotes/newlines and prefixes formula-like text with an apostrophe; JSON preserves exact values. Reimporting revalidates source text and resets approvals. Audit photos are not included.
- Displayed baseline is **format-valid cards immediately after OCR**, compared with visually approved reviewed rows and the actual number of changed fields. Format validity is not accuracy. Total units is the sum of approved counts. No invented confidence, percentage improvement, time saving, inventory valuation or accuracy generalization.

## Limits

OCR can produce plausible wrong digits even when format checks pass. Sharp, upright high-contrast printed English cards only; handwriting, tables, skew, glare, tiny labels, unstructured text and multi-card photos are not reliable. The model cannot establish that a photo is current or that an item really exists. Human visual verification is mandatory. Small synthetic fixtures do not establish real-world accuracy.

## Build / publish

React + Vite. `npm install`, `npm run predeploy`; base `/daily-app2/20261120-11/`. Individual required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish only through the root collection's predeploy/deploy**, never individual deploy, which would replace the collection.

The existing combined-site 1 GB guard is preserved. Deploy-only byte-identical geometry WASM sharing extends to `20261028-9` → immutable `20261028-24`; both source builds and legacy JS URLs are preserved, with versioned worker/shell references. Actual older-app PNG/STL imports and valid distinct exports are revalidated. The original daily_app tree remains read-only. No builder digest is sent.

See [VALIDATION.md](VALIDATION.md) for observed tests and limitations. Synthetic fixtures/audits only; no personal records or credentials are committed.
