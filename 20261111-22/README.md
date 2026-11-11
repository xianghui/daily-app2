# Uptime Mosaic

A private shift-review worksheet for maintenance coordinators reconciling rough stoppage reports. Local semantic inference links inconsistent descriptions to supplied equipment; mandatory identity/time review feeds exact overlap-safe downtime calculations. No equipment controls, uploads or external actions.

## Workflow

1. Paste/import JSON or use either synthetic example. Edit `name`, `catalog: [{id,title,description}]`, `window: {start,end}` and `records: [{id,text,start,end}]`.
2. Use integer minute offsets from midnight: 08:00 = 480; 24:00 = 1440. One common reporting window applies to each asset. Split overnight events into separate day worksheets. Enter actual stopped intervals only, not reduced speed. All intervals are half-open `[start,end)`.
3. Explicitly choose **Load AI & reconcile equipment**. Inspect original descriptions, candidate descriptions and cosine scores. Review equipment and both offsets; approve or hold each record. Undo restores previous review state. Nothing applies automatically.
4. Apply the reviewed audit. Window clipping and merging touching/overlapping intervals removes double counting. Inspect source-linked merged stops, gaps, held and outside-window records. Editing any review invalidates exports until reapplied. Discarding a result does not discard reviews.
5. Download JSON (complete original input, reviews, source evidence, summaries, merged intervals and gaps), all-record CSV, or Markdown; copy the identical Markdown worksheet. Reimport audit JSON restores **originals only**, intentionally requiring fresh inference and approval. Original notes/times remain in the audit; current edited times appear in outputs. CSV text fields beginning with spreadsheet formula markers are apostrophe-protected; JSON preserves exact originals.

## Real AI, runtime and license

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX feature extraction through `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT).
- Normalized mean-pooled **384-dimensional real embeddings** rank each note against user-supplied equipment descriptions by cosine similarity. This is semantic retrieval, not an LLM, confidence score, identity verification or failure diagnosis. The model never supplies times.
- No key, backend, mandatory paid service, remote inference integration or provider credentials. CPU WASM is the default; WebGPU is unnecessary.
- First load: approximately 23 MB model/tokenizer/config from huggingface.co / hf.co and their CDN (observed us.aws.cdn.hf.co), approximately 27 MB same-origin WASM, plus bundled app/worker JS. Internet required for uncached assets. Progress shows file/status/percent where available, then embedded-text counts. Cancel terminates the worker; retry starts fresh.
- App code, worker and WASM factory are bundled locally. Builds reuse the byte-identical immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that older app asset in the collection. Model upstream files use the model repository's default revision, not a pinned commit; upstream changes require revalidation.
- Tested: current desktop Chrome in a real headless browser. Requires WebAssembly SIMD, module workers, several hundred MB available RAM. Cache API recommended. Physical phones, other browsers and low-memory devices remain untested; phone-sized layouts are tested. Worker/runtime/download failures give actionable errors, never a deterministic fake-AI fallback.

## Privacy and offline scope

Model downloading is **not content uploading**. Notes stay in browser memory and are passed only to a local worker. Inputs/reviews are not stored in localStorage, URLs or telemetry. Model/runtime files persist in browser caches; exports are explicitly user initiated. Requests observed during complete production workflows were GET-only with no request bodies or source text in URLs. No analytics, keys, accounts or remote inference path exists.

After a successful online run, actual inference with a **new worker** passes with the network disabled **inside the already-open warmed page**. Worker source and WASM factory/binary use Cache API; Transformers.js caches model assets. Offline reload/navigation/app-shell startup is not promised. Private mode, unavailable/evicted caches or model-host changes can require internet again. Cancel does not clear already cached model files. Clear site data in browser settings to remove caches.

## Limits, validation and interpretation

- 2–6 equipment entries; 1–12 stoppages; distinct IDs ≤40 characters, distinct equipment titles ≤80; descriptions/notes ≤400. Reporting window and each original/reviewed interval: integer minutes 0–1440, start strictly before end. Originals ≤18,000 characters; audit/file import ≤1 MB. JSON only; CSV/PDF import unsupported. Four-text inference chunks with a 256-token maximum; very token-dense text may truncate.
- Result schema `uptime-mosaic/v1`; validate finite normalized 384-component vectors and exact vector counts. All decisions required; reviewed times and target IDs validated. Unique run IDs, terminated workers and async file/download guards prevent stale updates. Timeout 180 seconds. Imported instructions are data and have no tool/credential authority.
- Deterministic baseline sums the **same approved, window-clipped intervals**. Union downtime removes overlap per asset. Totals are **asset-minutes**, not elapsed time. Complements plus union duration equal each asset's scheduled window. Baseline exact-title matching measures reconciliation workload, not semantic accuracy.
- Logged availability = `1 − union downtime / window duration`, only reported for assets with approved observations and no assigned holds. Holds suppress availability for their reviewed asset. Uncertain identity may affect another asset; review the entire register. No approved observations means **not reported**, not 100%.
- **Completeness cannot be inferred.** Gaps mean no approved stoppage reports, not proven uptime. Availability assumes complete supplied logs; excluded/held/missing reports can bias it. No failure counts, MTBF, OEE, causal diagnosis, reliability forecast or maintenance certification. Different reporting completeness makes cross-asset comparisons misleading.
- Negation and unrelated text can still get a confident-looking nearest match; scores are cosine similarity, never probabilities. Human review is mandatory. Tiny synthetic matches are not general accuracy evidence.

## Build and validation

`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261111-22/`. Per-app gh-pages dependency and deploy scripts are retained, but publish **only through root combined workflow**, never the individual deploy script. See [VALIDATION.md](VALIDATION.md), recorded JSON reports and executable tests for observed results. All fixtures/exports/screenshots are synthetic.

Uptime Mosaic public release, byte-matched runtime assets, both real-AI fixtures, the full public workflow suite and preserved 599-entry gallery passed on the first Pages deployment.
