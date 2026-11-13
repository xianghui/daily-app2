# Gauge Harbor

A static React + Vite inspection-preparation utility for quality coordinators. Rough inspection descriptions often do not match drawing-feature names. Local AI proposes a feature, the reviewer verifies identity/readings/uncertainty, and a deterministic interval worksheet exposes boundary cases hidden by nominal-only checks. No instrument connection, part certification or lot release.

## Use

1. Choose either synthetic example, paste source JSON or import a `.json` source/audit file. Set project, 2–8 feature `policies` (`id`, `label`, `description`, `low`, `high`) and 1–40 `records` (`id`, `note`, `value`, `uncertainty`, `owner`). All dimensions are **integer micrometres**, not mm. Supply externally justified expanded uncertainty; the app does not estimate it.
2. Explicitly load AI. Inspect ranked description evidence and cosine scores (not confidence), correct feature/reading/uncertainty, record evidence notes/owner and approve or hold each record. Approval accepts evidence for this worksheet, not a part.
3. Apply reviewed matches. Any pending review blocks application. Holds survive all exports and make counts partial. Undo restores the previous review; subsequent edits invalidate applied exports.
4. Download current JSON, CSV or Markdown, or copy the checklist. CSV has every record including holds; formula-like text is prefixed with an apostrophe. JSON preserves originals, reviews, evidence and interval calculations. Reimport restores originals only, with fresh AI/review required. No remote actions occur.

## Real AI, runtime and licenses

- `Xenova/all-MiniLM-L6-v2`: https://huggingface.co/Xenova/all-MiniLM-L6-v2, Apache-2.0. Quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings through Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread. No WebGPU required.
- About 23 MB model/tokenizer downloads from Hugging Face/CDN plus 26,861,777 bytes same-origin WASM and local JS/runtime. Approximately 50 MB first use; internet required initially. Worker/runtime bundled locally. The immutable byte-identical WASM is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older deployment asset.
- Real neural inference proposes a feature by cosine similarity to user-supplied descriptions. Numerical intervals, counts, review guards and exports are deterministic. No hardcoded response, regex classification or fake fallback. Imported instructions are untrusted data, not executable authority.
- Nearest-match retrieval always offers a candidate even for irrelevant notes. Hold unrelated/ambiguous text. Tiny fixture performance is not general accuracy, especially for terse names or similar features. Model mainly targets English; it cannot inspect drawings or verify geometry.

## Interval worksheet

For reading x and supplied expanded uncertainty U, compute `[x−U, x+U]`. Compare inclusive drawing limits `[L,H]`:

- **Contained** if x−U ≥ L and x+U ≤ H.
- **Disjoint** if x+U < L or x−U > H.
- **Overlap** otherwise, including outside intervals touching a boundary.

Zero uncertainty reduces to the nominal test. Negative endpoints are retained mathematically. The baseline counts nominal-inside readings ignoring uncertainty; the follow-up metric counts nominal-inside but not contained intervals. This measures a rule difference, not accuracy, actual time saved or product quality. Each fixture has baseline 2, contained 1, overlap 2, disjoint 1 and one nominal-inside follow-up. Records can independently measure the same feature; no invented aggregation or sample-based lot decision is made.

No probability distribution, coverage factor, sampling adequacy, calibration validity, bias correction, geometric tolerance or contractual decision rule is inferred. Confirm units, uncertainty provenance and agreed decision rules externally. The follow-up checklist is preparation, not metrological certification.

## Privacy, caching, requirements and failures

User content stays in browser memory; no API keys, uploads, backend, analytics or optional providers. GET asset downloads only. Cache API stores model/runtime/worker files, not user datasets. An already-open warmed page can run real inference fully offline even after terminating and creating a fresh worker; this was tested on the production bundle. Offline reload/app-shell startup is **not** promised. Eviction or unavailable cache requires internet.

Requires module workers, WebAssembly SIMD and several hundred MB free memory. Tested in desktop Chrome with GPU disabled, responsive emulated widths 320/390/1440; physical phones and other browser engines untested. Records/profile descriptions ≤300 characters, source ≤40,000 characters, imports ≤2 MB. Reading/specification 0–10,000,000 µm; uncertainty 0–1,000,000 µm; L < H; unique IDs within each list; owner ≤150 and review note ≤1000 characters. Inference batches four texts, max 256 tokens/text, timeout 180 seconds.

Download progress and processed-text counts are shown. Cancel terminates the worker and invalidates its run ID. Input changes also terminate inference; stale responses/file reads cannot overwrite newer inputs. Unsupported workers/WASM, downloads, runtime errors, malformed vectors and timeout produce actionable errors without fabricated results. Explicit retry uses the current originals. Exports disabled until a valid reviewed snapshot exists.

## Build and publish

`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261113-16/`. Per-app `deploy: gh-pages -d dist` is retained by collection contract but **do not run it**: publish via root `npm run predeploy` then root `npm run deploy` to preserve the combined gallery.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed checks and publication status. Tests use local Playwright/Chrome in this builder environment; they are not bundled into the public app. All fixtures are synthetic.
