# Postfolio Desk

A local-AI mailing worksheet for small association and community mailrooms. Informal insert notes often omit their catalog IDs; manually reconciling those notes and looking up paper specifications is the bottleneck. Real MiniLM embeddings retrieve supplied paper kits, including physical specifications. A mandatory human review feeds an all-in envelope/service comparison. This is distinct from carton packing: it models flat homogeneous paper stacks, paper GSM, envelope tare and thickness-sensitive postage bands, not grid carton layouts or dimensional freight charges.

## Workflow

1. Choose either synthetic batch, paste source JSON or import a source/audit JSON file. Edit your paper kits, envelopes and service bands; sample prices are **synthetic cents, not real carrier rates**.
2. Read the initial download/privacy notice; explicitly choose **Load AI & match insert notes**. Download progress and embedding chunk progress appear. Cancel terminates download/worker; retry is explicit.
3. Inspect original notes, ranked source descriptions and cosine similarities (not confidence). Correct kit links and physical fields; approve or hold each batch. Numeric or identity edits reset approval; reviewer notes are multiline. Undo restores the last review edit, up to 30. Originals never change.
4. Apply the review. Each approved batch considers every envelope × service pair. Compare the insert-only baseline with full assembled-piece checks. A missing plan remains unresolved, not zero cost. The displayed subtotal excludes held/unplanned batches.
5. Download current JSON, all-record audit CSV, Markdown, or an approved-only worksheet CSV. Worksheet export requires all approved batches to have plans; holds remain in complete audits. Copy uses the reviewed Markdown. Any review edit invalidates exports. Reimporting an audit restores its originals for fresh inference/review, not trusted saved classifications.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled 384-dimensional vectors. Runtime: Transformers.js 4.3.2 with ONNX Runtime Web on single-thread WASM CPU. No WebGPU required. Not an LLM/chat/regex classifier.
- Approximately **50 MB** first-use transfer (~23 MB model, 26.9 MB WASM plus tokenizer/runtime). Internet required initially. Model files download from huggingface.co and its CDN; same-origin runtime assets remain in this collection. In observed runs `main` resolved to model revision `751bff37182d3f1213fa05d7196b954e230abad9`; the shared worker uses upstream `main`, not an immutable model pin.
- Immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Their originating apps/paths must remain deployed. SHA-256 provenance in `runtime-provenance.json`; byte audits in scope-specific asset reports. App React/JS/CSS bundles are local. Shared worker protocol `{id,texts}` → progress/batch/error or `{id,type:'result',vectors}` was inspected, and actual production-path inference tested.
- Default user content stays in browser memory. Only model/runtime files download; no user-content upload, API key, analytics, account integration, label purchase or external inference exists. Imported descriptions are data, never instructions or authority. No model requests before explicit Run. GET/body/URL privacy checks recorded in browser reports. Source fixtures are synthetic.
- Worker code and factory/WASM explicitly cache in Cache API; Transformers.js caches model files. After a complete successful run, **a fresh worker can infer with all network disabled in the same already-open warmed page** (tested). Offline navigation/reload, cold startup and persistent cache retention are **not promised**. Cache eviction/private mode may force re-download. Clear site data to delete model/runtime cache; source/reviews are not auto-saved.
- Requires module workers, WebAssembly SIMD, Cache API for the offline scope, sufficient memory and a current browser. Desktop Chrome CPU tested. Physical phones, other engines and low-memory devices are unverified. Runtime/network errors are actionable and never substituted with fake AI. 180-second timeout; cancelled/stale run IDs cannot overwrite newer results. Input changes cancel current work; asynchronous imports are identity-guarded.

## Deterministic checks and bounds

Source JSON: title; `kits` (2–8), `envelopes` (1–8), `rates` (1–12), `records` (1–24). IDs unique per collection, simple ASCII ≤24 characters. Description/note AI texts ≤200 UTF-16 characters. Source ≤30,000 characters; JSON import ≤1 MB. Up to 32 AI texts, chunks of four. The shared pipeline passes `max_length:256`, but tokenizer enforcement is its model limit **512 tokens**, not a claimed 256-token cap. All model outputs must be finite, near-unit-norm 384-vectors in the expected count.

Kit fields: widthMm/heightMm 20–500, sheets integer 1–200, GSM 20–1000, caliperMm .01–5. Mailing quantity integer 1–10,000. Envelope internal/external dimensions 20–600 mm (internal ≤ external on each axis), tare .1–500 g, combined wall thickness .02–10 mm, capacity .1–50 mm. Rate maximum long/short side, mass and thickness are upper inclusive bounds; rates and envelope prices are integer cents 0–100,000. No unsupported format parsing or silently coercing invalid inputs.

Per piece:

- paper grams = width × height / 1,000,000 × GSM × sheets;
- paper stack mm = sheets × per-sheet caliper;
- assembled grams = paper + envelope tare;
- assembled thickness = stack + **combined** envelope walls (not per wall);
- 0°/90° unfolded footprint must fit envelope inner dimensions; stack must fit envelope capacity;
- sorted exterior long/short side, assembled mass and thickness must satisfy service maxima;
- eligible pairs minimize combined envelope + service whole cents (stable envelope ID/service ID ties). Batch cents = per-piece cents × quantity. Unlimited stock; no global tier discounts or taxes.

Baseline uses the same geometry and stack-capacity checks, but ignores tare and combined walls for service selection. Its selected pair is then tested with full assembled values. False-pass counts are computed constraint failures, not estimates of AI accuracy, time savings or realized postage savings. Every result includes source evidence and all original records remain in audit exports.

## Formats and limitations

JSON preserves originals/review/results losslessly; CSV uses RFC-style quoted fields/CRLF and guards spreadsheet-leading formula text with an apostrophe. Signed numeric data stays numeric. Markdown is plain source text, not a sanitization boundary for arbitrary downstream Markdown rendering. Worksheet CSV includes approved planned mailings only. All formats reflect the applied review; download/copy actions have recovery messages.

Only unfolded, homogeneous paper-sheet stacks are supported: no fold geometry, glue, staples, bindings, mixed materials, compression, rigidity tests, carrier-specific minimum dimensions, destination, tracking, tax or machinability rules. Rate entries must already encode applicable offers for the intended destination; prices are not fetched. Decimal measurements have a small 1e-9 comparison tolerance; real tolerances require separate allowance. **Weigh and measure an assembled sample and verify official carrier rules before mailing.** No labels/postage purchased or addresses collected.

MiniLM can confuse negation/jargon/near-duplicate kit descriptions; observed negation challenge chose REPORT instead of intended CARD and was manually corrected. No automatic acceptance or invented confidence. This fixture result is not a population accuracy guarantee.

## Build/deploy and validation

React + Vite base `/daily-app2/20261129-1/`; `npm install`, `npm run predeploy`. Per-app gh-pages dependency/scripts retained, but **publish only through repository ROOT `npm run predeploy` / `npm run deploy`** to preserve the collection. See root README for Pages commit matching and public verification. Tests use the existing workspace Playwright installation. Details/outcomes: `VALIDATION.md` and saved browser/artifact reports. No model/provider credentials used.
