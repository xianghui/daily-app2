# Value Canopy

Inventory-note reconciliation → reviewed ABC counting worksheet for small-stockroom coordinators. React + Vite; no server or API key.

## Workflow

1. Paste/import JSON, or choose **Repair store** / **Studio supplies** synthetic examples.
2. Supply 2–6 catalog products (`id`, `title`, `description`); 1–24 additive annual consumption lines (`id`, `text`, `annualUnits`, `unitCents`); `name`, `aPercent`, `bPercent`. Thresholds are integer percentages, 1 ≤ A < B ≤ 99. Annual units/unit cents are integers 0–1,000,000. All lines must cover the same annual period, currency and product-unit basis. Do not add repeated cumulative snapshots.
3. Explicitly load AI. Review every proposed product, adjust quantities/cents, add notes, approve or hold each line. Inspect original text, catalog descriptions and cosine scores. Undo reverses review edits. Changing input cancels processing and clears prior reviews/results.
4. Apply the reviewed worksheet. Held lines remain in all-record audits, not aggregates; the worksheet is prominently provisional when holds exist. Unobserved catalog products are omitted, not assigned assumed zero consumption.
5. Download current JSON, Audit CSV, Product CSV or Markdown; copy Markdown. Any review edit invalidates exports until reapplied. Audit import restores originals only, requiring new inference and approval.

## What AI actually does

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, via locally bundled Transformers.js **4.3.2** and ONNX Runtime Web. Normalized mean-pooled 384-dimensional embeddings rank catalog descriptions against each note by cosine. This reconciles descriptions that exact-title matching cannot resolve. Similarity is not confidence or evidence of identity. AI does not extract/invent prices, quantities, units or urgency. Four-text chunks; context capped at 256 tokens; descriptions/notes ≤400 characters. Weights use the model host's default revision, so upstream changes may affect later runs.

Everything after embeddings is deterministic: product ranking, review validation, exact integer-cent totals, cumulative classes and comparisons. Values are within JS safe-integer arithmetic even at maximum limits. Product totals sort descending. A tie group's cumulative value **before** the group determines class (below A threshold: A, otherwise below B: B, otherwise C). Thus crossing groups stay in the earlier class, and equal-valued products never split. Zero-total/zero-valued products are C. Suggested counts/year A/B/C = 12/4/1 are a transparent policy, not a dated calendar or optimized labor roster.

Comparisons are computed, not inferred: A-class annual value versus the same number of products picked by highest observed unit cost (ID tie-break); planned count events versus monthly counting of every approved product. These are exposure and event counts, not measured time savings, stock-loss reduction or accuracy. Critical low-value spares can warrant a separate policy. This is not an accounting valuation standard, demand forecast or stock-accuracy certification.

## Downloads, privacy, devices and offline scope

Before explicit loading, the app downloads only local app assets. Initial AI download ~50 MB: ~23 MB model/tokenizer/config from huggingface.co, hf.co and their CDN; ~27 MB shared same-origin WASM plus bundled JS/runtime. Model weights download to your browser; **content is never uploaded**. No remote provider integration, credentials, analytics, persistence of user inputs or external stock modifications. Imported instructions remain data.

CPU WASM is default and was tested with WebGPU unused. Requires WebAssembly SIMD, module workers, Cache API for offline reuse, and several hundred MB available memory. Current desktop Chrome was tested; physical phones, other browsers and low-memory devices were not. No promise of universal mobile inference. Browser failures show actionable errors, not fake classifications. 180-second timeout, progress, cancel/retry, worker termination and run-identity guards protect against stale messages, delayed downloads and delayed file imports.

Workers, WASM module factory and binary use Cache API; Transformers.js caches weights. After warming online, **fresh-worker inference works offline in an already-open page** (tested with browser context network disabled). Offline navigation/reload/app-shell startup is not supported or claimed. Private browsing, cache eviction and insufficient storage may require redownload. Closing the page discards inputs/reviews unless exported.

The immutable shared WASM is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that app asset in combined deployment; `runtime-assets.json` records byte equality/hash. Runtime factory and worker bundle are local under this app's deployment base.

## Formats and limits

Input: JSON only; originals ≤18,000 characters; JSON/audit file ≤1 MB. Unique IDs ≤40 characters, titles/name ≤80; text and reviewer notes ≤400. Wrong files, malformed JSON, null/duplicate/oversized records, invalid thresholds and invalid reviewed numbers are blocked. All lines require explicit approval or hold; originals are retained unchanged.

Output: JSON audit envelope (`value-canopy/v1`) containing originalInput, complete reviewed records, aggregated products and metrics; Audit CSV includes every source line/hold; Product CSV contains approved aggregates/classes/count frequencies; Markdown contains the worksheet plus all source lines. CSV quotes delimiters, quotes and newlines and prefixes spreadsheet formula-like text; numeric fields remain numeric.

## Run and publish

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261112-3/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` exist, but publish **from repository root only** via its combined `deploy/` workflow. Per-app publishing would replace the gallery.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports/tests. Real inference runs on both fixture sets and maximum batch; no mocks in successful AI checks. Mocks/fault injection are limited to malformed vectors, worker errors/timeouts and deliberately late messages. Negation and unrelated-text challenges mislinked: all uncertain lines need holds. Tiny fixtures are not broad accuracy benchmarks. No real documents or credentials are included.
