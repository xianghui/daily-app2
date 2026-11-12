# Column Harbor

A local-AI CSV schema reconciliation workbench for operations coordinators who repeatedly receive exports with unfamiliar headings. Unlike row/entity classification, the unit of AI review is a **source column**; the usable result is a rectangular, validated target table plus a lossless source/mapping/repair audit.

## Workflow

1. Choose a synthetic event-registration or equipment-inventory example, or paste/import comma-separated CSV with a header. Define 2–8 target fields as JSON: `id`, `label`, `description`, `type`, `required`.
2. Read the download/privacy panel. Explicitly select **Load AI & match columns**. AI embeds field definitions and each source heading with its first two sample values. Cosine ranking offers candidate mappings and their descriptions. Scores are similarity, never confidence.
3. Review **every source column**. Choose a target, explicitly omit a source-only column, or hold a doubtful suggestion. Approve verified mappings/omissions. All originals remain untouched. The model always ranks available fields, including for irrelevant columns; omissions require a human.
4. Inspect any source row in the repair editor. Change target cell values if necessary; undo restores the preceding mapping/repair state (last 100 edits). Changing source/schema starts fresh. Changing any review/repair invalidates the applied snapshot and disables downloads until reapplication.
5. Apply. Duplicate targets, missing required mappings, holds, required empty values, invalid integers/decimals, invalid calendar dates and basic email format failures block Target CSV. Click a reported cell issue to focus its row editor, repair and apply again. No type coercion, trimming, unit/currency conversion or invented values.
6. Download **Target CSV**, **Audit JSON**, **Mapping CSV**, **Markdown**, or copy target CSV. The target has every source row, in order, and schema field order. Audit JSON preserves exact source CSV, schema, mappings, candidates, all reviewed output and repairs, including omitted columns. Mapping CSV is a column audit, not the target data. JSON import restores originals only; approvals/repairs are deliberately renewed. JSON is the exact-value round-trip artifact.

CSV formula-like **text** values and mapping notes are prefixed with an apostrophe; JSON retains exact values. Validated signed integer/decimal fields retain their numeric spelling, including negative amounts and trailing decimals. Target table values otherwise remain strings (leading zeros are preserved); spreadsheet applications may independently reinterpret them. Empty optional unmapped fields export empty. JSON retains all original rows/columns, even when a target export is blocked.

## Real AI / runtime / privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX sentence embeddings, 384 dimensions, normalized mean pooling. English matching recommended; ambiguous meanings, jargon and unrelated columns require review. Not a generative model or schema inference oracle.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web WASM CPU (MIT), one thread; no WebGPU requirement. Four texts per batch, 256-token cap per text. No fake/heuristic fallback. Finite normalized vector count/dimension validated before ranking.
- Initial download ~50 MB: ~23 MB model/tokenizer from `huggingface.co` and its CDN, plus 26,861,777-byte same-origin WASM and local bundled worker/module factory. No model host traffic until explicit loading. No keys, accounts, backend, optional remote inference or paid dependencies.
- Runtime code, worker and factory are bundled locally. Byte-identical shared WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` avoids duplicating 27 MB. **Preserve that existing app/runtime** in root deployment. Vite rewrites only the local immutable binary URL; model computation is still on the user's device.
- User data exists only in page/worker memory and explicit local exports, not local storage, URLs or requests. Downloading weights is not uploading content. Imported instructions cannot invoke tools or ask for credentials. Model-host GET requests retrieve model files only.
- Cache API stores worker, runtime factory/binary and model files. Tested offline scope: **already-open, successfully warmed page, new worker and real inference with browser networking disabled**. Offline reload/navigation is **not promised**. Cache eviction, disabled storage, blocked hosts or private browsing may require internet again. Clear the site's storage/browser caches to remove model files.
- Current browser supporting module workers and WebAssembly SIMD, several hundred MB of RAM. Desktop Chrome CPU and touch-emulated Chrome tested. Physical phones, low-memory devices, Safari/Firefox/Edge and screen readers not tested. Unavailable runtimes and downloads produce actionable retry errors, not demo responses.

## Bounds and deterministic rules

CSV 80 KB, 2–12 unique nonempty headings (≤100 characters), 1–100 rectangular rows, values ≤300 characters. Schema ≤12 KB, 2–8 fields, descriptions ≤300 characters. Import audit JSON ≤1 MB. Types: `text`, safe `integer`, finite `decimal` within ±1e12, actual ISO `YYYY-MM-DD` `date`, basic `email`; booleans for `required`. Comma CSV with RFC-style quoting/multiline values; unsupported spreadsheets/PDFs fail explicitly. Whole table stays in memory.

At most one approved source per target. Required fields need a mapped source even if someone fills target cells manually. Holds block release; omissions retain source data in audit. All source columns require a decision. Repairs are keyed by source row index and target field ID and remain explicit overrides if mappings change. 180-second timeout; cancel terminates worker. Run IDs guard late worker output, worker-fetch completion and file reads. No external sending, imports into accounts, file deletion or automatic migrations.

Exact-heading baseline counts case-insensitive ID/label matches. Reviewed mapped-column count is **coverage**, not correct-match accuracy, improvement percentage or time savings. The two tiny fixture sets are not a benchmark.

## Development / publishing

```sh
npm install
npm run dev
npm run predeploy
```

Vite base `/daily-app2/20261113-3/`. Per-app `predeploy` and `deploy` scripts exist as required, but **publish only via the collection root** (`npm run predeploy`, `npm run deploy` at `/Volumes/ExternalHD/daily_app2`). Individual deployment would replace the collection.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Browser tests execute the production bundle, not Vite dev mode, with actual no-key CPU inference. Synthetic `.test` addresses and fixtures only. Reproduction: `python3 serve.py`, then `node browser-test.cjs`, `node defensive-test.cjs`, `node stale-result-test.cjs`, `node stale-import-test.cjs`, `node model-cancel-test.cjs`, `node touch-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`. Playwright harness uses the installed workspace package and Chrome; public tests accept `TEST_URL`.

Known limitations: meaning matching is not type inference, exact business semantics, identity verification or data correctness. Required omission, two source columns needing coalescence, transforms, multiple CSV joins and deduplication are deliberately unsupported. Email-format checking is not deliverability. Domain-specific constraints and legal/privacy decisions remain external. Incorrect but type-valid values can pass; review your sources.
