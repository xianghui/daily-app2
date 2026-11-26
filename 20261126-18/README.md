# Clearing Bridge

A local-AI bank-reconciliation review utility for a small-team bookkeeper. One account, one cutoff and one currency. Not a statement-matching service or journal-posting system.

## Workflow

1. Choose **Workshop month-end** (balanced) or **Studio close review** (unresolved difference), paste source JSON, or import a `.json` source/audit file.
2. Supply closing statement/cashbook balances and each reconciling item once. Values are integer minor units: `100` = 1.00 currency unit. Positive absolute item amounts; signed opening balances supported.
3. Click **Load AI & classify handoffs**. This explicitly starts real local model loading/inference. Cancel download/run at any time, or retry visible failures.
4. Inspect source and ranked references. Correct type/amount, add multiline notes, approve or hold every item. Undo restores the previous review edit. Holds block the complete bridge; all originals remain exportable.
5. Apply the reviewed bridge. Inspect both running trails, draft cashbook adjustments and the unexplained difference. No balancing plug is inserted. Source edits clear approvals; review edits invalidate the applied/export snapshot.
6. Download current JSON/CSV/Markdown, a separate Book CSV, or copy the current worksheet. JSON audit reimport restores the original source, not approvals or reviewed edits.

## What AI does—and does not do

Real normalized mean-pooled 384-dimensional MiniLM embeddings compare every short handoff to four reference descriptions: deposit in transit, outstanding payment, unrecorded receipt and unrecorded charge. Cosine ranking is semantic retrieval, **not confidence**. This helps interpret informal timing-versus-missing-entry notes before manual reconciliation. No hard-coded model answers or deterministic substitute on failure.

Amounts, cutoff and balances are supplied, not extracted. AI does not verify documents, understand accounting policy, recognize all reversals or detect missing/duplicate transactions. Negation and unrelated notes failed observed challenge checks; every proposal needs human review. Bank/book errors, bounced deposits, reversed items, signed corrections, already-cleared items, multi-currency and full statement matching are outside scope: hold unsupported notes and resolve separately. Arithmetic agreement is not proof of completeness.

Deterministic steps validate bounded schemas and model vectors, rank cosines, require review, assign side/sign, sum safe-integer minor units and serialize exports. Adjusted bank = statement + deposits in transit − outstanding payments. Adjusted books = cashbook + unrecorded receipts − unrecorded charges. Difference is bank minus books. Running trails preserve source order, **not chronological transaction order**. All-to-books baseline puts the same signed adjustments in the books; displayed differences/misrouted-item counts are computed, not savings, accuracy or measured labor reduction. No financial/account actions occur.

## Real model, runtime and assets

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 open weights; quantized q8 ONNX feature extraction.
- Runtime: shared Transformers.js 4.3.2 / ONNX Runtime Web WASM CPU. See original runtime package lock in `../20261115-6/`. Transformers.js is Apache-2.0, ONNX Runtime is MIT. Runtime dependencies/attributions are retained in that build and source package.
- Initial download approximately **50 MB plus JS/tokenizer**: about 23 MB model + 26,861,777-byte WASM binary. Internet required for Hugging Face and its HF/CDN redirects, plus same-origin collection runtime assets. The model currently resolves `main`; observed revision in test requests was `751bff37182d3f1213fa05d7196b954e230abad9`. It is **not pinned**; future upstream changes can affect inference.
- Every inference uses a module worker, four short texts per chunk, mean pooling and normalized embeddings. 24 records + 4 references = 28 texts / 7 chunks. Description/handoff bounds are 200 UTF-16 code units. The shared pipeline supplies `max_length:256`, but its feature-extraction implementation does not forward that override; the actual tokenizer `model_max_length` is **512**. Do not claim a 256-token hard cap.
- Immutable same-origin dependencies, checked against `runtime-provenance.json`:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
- Preserve these prior app builds and URLs when publishing the combined site. They contain computation/runtime code, not a remote inference backend. No duplicate 27 MB WASM is added to this app.

## Device, caching and failure behavior

Current desktop Chrome/Edge with WebAssembly SIMD, module workers and available memory recommended. Real tests used installed headless Chrome on macOS with GPU disabled; no WebGPU is needed. Physical phones, other engines and minimum RAM have not been tested. Unsupported/malformed runtime results fail visibly; there is no fake fallback. Worker/network errors and a 180-second timeout show retry controls. Cancel terminates the worker and aborts pending worker-source fetch; model downloads are terminated with their worker. Run tokens and import-read guards prevent stale updates.

Cache API stores worker source in `clearing-bridge-worker-v1`, WASM factory/binary in the original shared runtime cache and model files in Transformers.js cache. **Tested offline scope: fresh-worker inference in an already-open, successfully warmed page.** Cold offline navigation/reload is not supported or promised; no app-shell service worker is provided. Eviction, private browsing or unavailable cache storage can require re-download. Progress shows model download files/percent where reported and actual processed-text counts.

## Privacy

No provider credentials, API keys, uploads, analytics, browser storage of source/review content or optional remote integration. Content remains in page/worker memory and only user-initiated downloads/clipboard exports leave that memory. Model/runtime downloads expose normal request metadata to asset hosts; they do not transmit source notes. Imported text is only model data, never tool instructions or credential requests. Refresh/close loses unsaved work. All fixtures/reports are synthetic. Network audits persist host/path and query **names**, not temporary signed CDN values.

## Source schema and bounds

```json
{"title":"Month-end close","cutoff":"2026-11-30","bankBalance":100000,"bookBalance":108000,"records":[{"id":"deposit1","note":"Deposit in transit, recorded in cashbook, absent from statement.","amount":20000}]}
```

1–24 records; globally unique record IDs matching `[A-Za-z0-9_-]{1,32}`; title nonblank ≤100 characters; notes nonblank ≤200; actual YYYY-MM-DD cutoff; balances integers −100,000,000..100,000,000; item/reviewed amounts integers 1..100,000,000. Source ≤60,000 characters, file/audit envelope ≤8 MB, reviewer notes ≤500 characters. All permitted sums are within JavaScript's exact integer range. Invalid dates, empty/oversized inputs, duplicate IDs, negative/zero/fractional amounts and malformed/non-normalized AI vectors fail validation. Imported JSON audit envelopes validate the original payload independently of envelope size.

## Actual export formats

- **JSON**: `clearing-bridge-v1`; original source, every review and ranking, every original row, reviewed values, side/sign, metrics, exact-integer summary, both trails and book-adjustment list. Holds keep all rows and null the summary.
- **CSV**: one audit row per original record, including holds; source note/amount, reviewed type/amount, signed adjustment, decision and reviewer note. RFC-style quoted fields and CRLF records. Spreadsheet formula-like text receives a leading apostrophe; genuine signed numeric adjustments remain numeric.
- **Book CSV**: only current approved book-side draft adjustments. Disabled if held items block the bridge. No balancing item and no bank-side timing rows. Differences may remain; this is not an import-ready journal or authority to post.
- **Markdown/clipboard**: current balances, both trails, computed shortcut comparison, every original note and review. Plain text intended for human review, not HTML rendering or downstream automation.

## Build, validation and publishing

React + Vite; `base:'/daily-app2/20261126-18/'`. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages installed. **Do not deploy the individual app:** use the root workflow to preserve the collection.

```sh
npm run predeploy
python3 serve-built.py --port 7799
# in another terminal in this app folder
node browser-test.cjs
node core-test.mjs
python3 independent-test.py
python3 artifact-test.py
node defensive-test.cjs
node network-retry-test.cjs
node download-cancel-test.cjs
node extra-defensive-test.cjs
node challenge-test.cjs
python3 bundle-audit.py
```

Browser tests require installed Chrome and the existing Playwright package in the agent workspace; test scripts are not production dependencies. `APP_URL` and `PREFIX` select a production/assembled/public origin and report prefix. `python3 serve-built.py --assembled --port 7797` serves an already completed root assembly. Re-run assembly before public asset hashes; do not run browser checks concurrently with root cleanup/reassembly.

See [VALIDATION.md](VALIDATION.md) for actual observed checks and limitations. No representative accounting-accuracy claim, physical-device certification, cold offline startup or automated postings.
