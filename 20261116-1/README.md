# Quote Crossings

**Workflow:** for travel/workshop budget keepers reconciling informal currency quotes. Paste/import synthetic or your own JSON → explicitly load local neural inference → inspect and edit both currencies/rate → approve or hold every quote → apply a directed conversion worksheet → export current JSON, CSV or Markdown. No live feed, account actions or transactions.

## Real AI, not generated rates

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, runs through Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web (MIT), WASM CPU, one thread. Mean-pooled normalized 384-dimensional neural embeddings compare each informal source/target currency note with supplied currency descriptions. A four-text worker batch yields vectors; the app validates finite values, count, dimension and norm before cosine ranking. Similarities are evidence, not calibrated confidence. There is no hard-coded inference response, automatic numeric extraction or optional remote provider.

The existing immutable collection worker is reused to avoid duplicating a large runtime. Preserve these files and their originating apps in root deployment:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Exact bytes and SHA-256 appear in `asset-audit.json`. The WASM is 26,861,777 bytes; weights are approximately 23 MB plus tokenizer/config. Runtime source was inspected: worker accepts `{id,texts}`, emits progress/batch/result vectors or errors. It uses the documented MiniLM feature-extraction pipeline, WASM/q8/mean/normalize. The pipeline's supplied `max_length:256` is not a reliable tokenizer override; actual model tokenizer ceiling is 512 tokens. This app separately bounds every model text at 300 characters. Intended for short English notes, not long documents or multilingual guarantees. A 56-text full batch is tested.

## Input and review schema

JSON source object:

- `maxHops`: integer 1–4.
- `currencies`: 2–8 `{id,label,description}` objects. IDs unique, 1–32 ASCII alphanumeric/underscore/hyphen; nonempty labels/descriptions ≤300 characters.
- `quotes`: 1–24 `{id,fromText,toText,rate}` objects. Unique IDs, endpoint notes ≤300 characters. `rate` finite 1e-9–1e9, **target units per ONE source unit**, already net of proportional fees.
- `requests`: 1–8 `{id,from,to,amount}` objects; unique IDs and distinct exact known currency IDs, amount 1e-6–1e12.

Paste ≤50,000 characters; `.json` files ≤2 MB. PDF, CSV and other imports are unsupported. Audit JSON reimport restores `originalInput` only; AI and approvals must be renewed. Full-size audit reimport is tested. Examples are synthetic and illustrative, not market prices.

Every AI proposal starts pending. Edit source/target/rate, add multiline notes, approve or hold, and undo up to 100 review edits. Changing a currency/rate renews pending status. All records must be reviewed before apply; approved self-conversions and duplicate directed pairs are blocked. Holds remain in the audit but never in calculations. Originals are not mutated. Every edit/undo/source change invalidates applied exports. File reads, worker loading and responses are guarded by run IDs; cancellation terminates workers. Network/device/worker/malformed-vector errors and 180-second timeouts leave no fabricated matches. Retry is explicit.

## Deterministic worksheet

Enumerate simple directed paths up to `maxHops`, never revisit a currency or invert a quote. Multiply supplied net rates and choose the largest product; ties prefer fewer edges, then quote IDs. Baseline is the existing direct quote only. Missing direct rates are unavailable, not invented. Compare output/difference separately for each request's target currency; never sum mixed currency units. Display six decimals but preserve unrounded binary floating-point numeric values in exports. No execution rounding or exact decimal accounting is claimed.

Enumerate unique directed cycles of length 2–maxHops; a product above `1+1e-8` flags inconsistent assumptions. Cycle rotations are deduplicated; reversed cycles are distinct. A missing cycle at this cap is not proof of global consistency. Rates must be contemporaneous, comparable at the same amount tier, and actually available. Fixed fees, size limits, taxes, market changes and execution rounding are not modeled. A larger product is not realized savings, a recommended trade or guaranteed arbitrage. Review quoted directions and fees with providers before using any budget.

Concrete benefit: reconcile repeated currency descriptions and audit many bounded paths in one review layer. Metrics are actual request/path/cycle counts and supplied-rate differences, not time-saving or universal accuracy claims.

## Privacy, devices and offline scope

No API key, remote inference, telemetry, uploads, backend or persisted user content. Text goes only to a local Worker as embedding data; imported instructions cannot invoke tools or request credentials. Network activity consists of public model/runtime GET downloads from this origin, `huggingface.co` and its `*.hf.co` CDN. No user text is put in request URLs/bodies. The browser test captures full requests in memory and saves sanitized host/path/query-key audits only, never signed CDN tokens.

Requires module Workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Tested Chrome desktop CPU with GPU disabled; no WebGPU requirement. Physical phones, Safari and Firefox are not verified. Responsive layouts were tested with browser viewports, not physical devices.

Worker source, WASM factory/binary use Cache API; Transformers.js caches weights/tokenizer. After a successful online run, **fresh-worker inference in an already-open warmed page** works with networking completely disabled (tested). Offline reopening/navigation/reload is not promised; there is no app-shell service worker. Private browsing, cache eviction or low storage can require redownload. Cancellation can leave partial public downloads cached. No content is cached.

## Exports

- JSON `quote-crossings/v1`: exact original source, current reviews/evidence/notes, all conversions, metrics and bounded cycles. Reimport restores originals, not approvals.
- CSV: one row per quote including original notes/rate and current direction/rate/decision/note. RFC-style quoting handles commas, quotes and newlines; string cells beginning `= + - @ tab CR` receive a spreadsheet-safety apostrophe. Numeric rate cells stay numeric. JSON preserves exact original strings.
- Markdown: request paths/direct baselines/differences, cycle evidence, all originals/reviews and a verification checklist. Copy exports the same applied worksheet.

Downloads and copy are disabled until current reviews are applied. No stale defaults. Independent CSV/JSON parsing checks actual browser downloads, all records and multiline edits.

## Development, tests and deployment

React + Vite; `npm install`, `npm run dev`. `npm run predeploy` builds base `/daily-app2/20261116-1/`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist` with gh-pages installed. **Do not run the per-app deploy:** publish the combined site from `/Volumes/ExternalHD/daily_app2` with root predeploy/deploy.

`PORT=6903 node serve.cjs` serves production assets and immutable shared assets. `node browser-test.cjs` runs real model fixtures, review/export/offline and layout checks. `node defensive-test.cjs` uses fault injection only to test errors, plus a real network-recovery run. Stale import/download/old-result scripts isolate races. `node oracle-test.mjs` independently enumerates vertex permutations for 60 graph fixtures. `python3 artifact-test.py` parses downloaded artifacts. `python3 asset-audit.py` hashes runtime assets and scans built text for common credential patterns (not an exhaustive security proof). See `VALIDATION.md` for observed outcomes and untested scope.

Model downloads use the upstream `main` revision rather than an immutable model commit; upstream changes require inference and offline revalidation. Runtime worker/factory/WASM URLs are immutable collection files with audited hashes.
