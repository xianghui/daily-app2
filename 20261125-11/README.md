# Span Press

**Report editors → scattered cell notes → reviewed merged-cell HTML table.** Distinct from CSV schema mapping, controlled rounding and tidy-data reshaping: this utility reconstructs and audits an HTML table occupancy model with incoming rowspans, colspans, holes and collision witnesses.

## Workflow

1. Load a synthetic Workshop report or Service report, paste source JSON, or import a `.json` source/audit (≤1 MB). Audit import deliberately restores `originalInput`, not untrusted AI/review metadata.
2. Describe 2–8 rows in vertical order; set 1–8 columns. Supply 1–24 cells with unique `id`, short `context` identifying the intended row, `order` within that row, literal `text`, positive `rowspan`/`colspan` and `kind` (`data`/`header`). Edit these constraints in the source editor before running.
3. Explicitly click **Load AI & match rows**. No model-host requests happen before this action. Download and inference progress are shown. Cancel terminates the worker; a 180-second timeout fails visibly.
4. Inspect AI row candidates and cosine evidence. Correct row links, content, relative order, spans or header kind. Approve each cell or hold it. Bulk approval is an explicit review action, never automatic. Undo retains the last 60 review snapshots; originals never change.
5. **Apply reviewed layout**. The deterministic grid walker skips occupied slots from prior rowspans, places cells in order, checks span rectangles and bounds, reports holes and duplicate orders. It does not shift a colliding span to a later gap or invent filler cells. Pending review blocks application; holds and layout issues block HTML release but not full audit export.
6. Download JSON, spreadsheet-safe CSV, Markdown and—only for a complete reviewed grid—HTML. Copy the current worksheet. Any edit invalidates applied exports. Reimport the JSON audit to recover originals for a fresh run.

## Real AI, not a mock

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized `onnx/model_quantized.onnx`, approximately 23 MB; tokenizer/config files add overhead. The model produces embeddings, not generated text.
- Runtime: Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web (MIT), WASM CPU, one thread. WebGPU is not used or required. Approximately 27 MB WASM plus ~0.6 MB shared worker/factory. Several hundred MB available memory recommended; a current desktop browser with WebAssembly SIMD and module workers is required. Tested in installed desktop Chrome with GPU disabled; physical mobile devices and other engines are untested.
- Each row description and each cell context is embedded. Normalized 384-dimensional mean-pooled vectors drive cosine ranking. The top row is proposed; every proposal starts pending. Four-text chunks; maximum 32 texts (8 rows + 24 cells). Inputs for embeddings are capped at 200 characters each. The shared pipeline requests max_length 256, but feature-extraction does not reliably forward that option; verified tokenizer `model_max_length` is **512**, the documented effective cap.
- Vector count/dimension/finite values and approximately unit norm are validated before any suggestions are created. No canned response or heuristic fallback exists. Retrieval always proposes a nearest row, even for unrelated text. Negation, similar descriptions, ambiguous notes and multilingual text need human review; cosine scores are not confidence or verified identity.
- Deterministic stages: constraints, row ordering, occupancy placement, collisions, baseline comparison and serialization. AI does not infer span counts, generate content, extract HTML or certify correctness.

## Static hosting, runtime dependencies and caching

React + Vite production base: `/daily-app2/20261125-11/`. Code and styles are bundled locally. To keep the collection within its unchanged 1 GB guard, this app reuses the immutable same-origin CPU runtime:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Their hashes and sizes are in `runtime-provenance.json`. Preserve both originating apps and dependency URLs in combined deployments. No new sharing/deployment rule was introduced. Worker source, WASM factory and binary are cached with Cache API and instantiated as blob modules/objects so fresh workers can reuse them; model files use Transformers.js cache. Factory and WASM use origin-absolute paths (not a blob-relative base). Model files download from `huggingface.co` and its CDN hosts; browser requests are download-only GETs. Cache storage can be evicted/disabled and is not a permanent installation.

**Tested offline scope:** fresh-worker real inference in an already-open warmed production page after all network is disabled. Cold offline navigation/reload is **not** supported or claimed (no app-shell service worker). An uncached first run requires internet. Clear site storage to remove downloaded models/runtime. Failed download, unsupported runtime, malformed vectors, worker failure and timeout show an actionable error without fabricated results; retry remains available.

## Privacy / data flow

All source/review content stays in browser memory, except artifacts explicitly downloaded/copied by the user. No API keys, provider integration, telemetry, remote inference, remote table imports, browser credentials or agent credentials are used. Downloading public model weights is not uploading user content. Imported instructions/markup are inert strings; they cannot request credentials or change worker authority. Input changes/cancel increment run identity, abort pending worker fetches, terminate workers and invalidate result snapshots; late file reads and late AI messages cannot overwrite new inputs.

## Formats and limits

See `src/core.js` examples for the exact JSON schema. Source ≤50,000 characters; IDs ≤60; row descriptions/cell contexts ≤200; caption ≤200; reviewed text/notes ≤500. Unique row/cell IDs, integer orders 1–24 and integer spans 1–8 required. Nonstandard control codes and lone Unicode surrogates are rejected. JSON imports have a separate 1 MB envelope bound so complete maximum-size audits can restore their originals.

- JSON: original input, every reviewed cell, candidates, placements, grid, issues and computed metrics. Zero-based coordinates.
- CSV: every cell, including holds; original context and current reviewed text/spans/decision/note/placement. RFC-style quoting. Leading `= + - @ TAB CR` text is apostrophe-prefixed for spreadsheets (including multiline values); JSON is the exact-string audit.
- Markdown: full reviewed handoff and issues, with strings JSON-quoted rather than executable markup.
- HTML: standalone UTF-8 script-free single-`tbody` table draft. Exact reviewed text after CRLF/CR → LF normalization; markup and attributes escaped. Data cells use `td`, headers `th`. No arbitrary HTML, styles, URLs or scripts from imported content. Header associations for complex tables, row groups, nested tables, reading order and final publication accessibility require editorial work; valid occupancy alone does not establish them. No website changes are made.

## Honest comparison

The baseline uses the **same reviewed row assignments and spans**, but starts every row at column 1 and ignores incoming rowspans. Metrics count placement differences, repeatedly occupied baseline slots and out-of-bounds baseline slots, plus actual holes, placed/approved/held cells and total slots. They are computed layout witnesses, not time savings or model accuracy claims. In each tiny synthetic fixture, two cells move around the incoming rowspan and one naive overlap is avoided. Known-answer AI results are reported separately, not inferred from layout validity.

## Build / validation

```sh
npm install
npm run predeploy
```

Per-app `deploy` is required but **do not use it** to publish this collection. Root `npm run predeploy` assembles every listed app; root `npm run deploy` publishes the combined `deploy/` tree. See the root README.

`core-test.mjs`, `browser-test.cjs`, `defensive-test.cjs`, `async-test.cjs`, `artifact-test.py`, `quality-probe.cjs` and observed JSON reports document actual validation. See [VALIDATION.md](VALIDATION.md). Fixtures are synthetic. Browser tests use the installed local Playwright/Chrome; they never substitute mock inference for successful AI tests. Fault injection is used only for error/stale/timeout handling. No general accuracy, full-browser support, cold-offline or full HTML-accessibility claim is made.
