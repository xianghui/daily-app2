# Tail Atlas

A local-AI utility for engineers repeatedly reconciling differently worded latency-histogram exports. It reduces manual metric reconciliation and prevents the invalid shortcut of averaging window percentiles. It is a worksheet, not production monitoring or a service configuration tool.

## Workflow and formats

1. Choose either synthetic example, paste JSON, or import `.json`. Source fields: `context`, global `edges` (positive upper bounds in milliseconds), `quantile` (0.5–0.99), `targetMs` (one of the edges), `targetShare` (0–1), `items` (`id`, `label`, `description`) and `observations` (`id`, `description`, `counts`).
2. Explicitly load AI. Inspect the suggested metric, source descriptions and cosine evidence. Correct the metric or bucket counts, add multiline notes, and approve or hold every window. Corrections reset approval. Undo restores review edits. Original inputs remain intact.
3. Apply reviewed plan. A hold or missing metric blocks the complete worksheet; no windows disappear. Inspect merged distributions, nearest-rank percentile intervals, threshold counts and the labeled window-upper-bound average baseline.
4. Download JSON (complete originals, reviews and calculations), CSV (every original/reviewed window) or Markdown (pooled calculations, every source and checklist). Copy Markdown. Any review edit invalidates the applied snapshot. Reimporting audit JSON restores originals only, requiring fresh inference/review. CSV quotes commas, quotes and newlines and prefixes formula-like text with an apostrophe; JSON remains lossless.

## Histogram semantics and limitations

Counts must be **noncumulative**, with bins `[0,e0]`, `(e0,e1]`, ..., `(last,infinity)`. All windows must share the same sampling definition, units and edges and represent disjoint observations. Convert cumulative exporter buckets to differences and cumulative snapshots to disjoint windows before use. AI cannot verify any of these assumptions. There is no connection to telemetry or automatic deduplication of observations.

For each reviewed metric, sum each bucket; let N be the total and locate rank `ceil(quantile*N)`. Report that bucket's containing interval, without interpolation or invented raw timings. Overflow upper bounds are JSON `null`, displayed as infinity/unknown. Threshold coverage is an exact count at a supplied edge, not an estimate of unobserved timings. The baseline is an **unweighted mean of per-window quantile upper bounds**, NOT an aggregate percentile and NOT an accuracy benchmark; it is unavailable if any window quantile overflows. Bounds do not identify an exact percentile within a bucket. No probabilistic confidence or universal model-accuracy claim is made.

The storefront checkout fixture has pooled P95 `(300,1000]` ms versus a 650 ms window-upper-bound average; 990/1100 observations meet 300 ms. The media indexing fixture has pooled P90 `(5000,10000]` ms; the baseline is unknown because a window overflows. These are synthetic observed calculations, not measured production improvements.

## Real AI, runtime, licenses and privacy

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8, normalized mean-pooled 384-dimensional neural sentence embeddings through Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime WASM CPU (MIT). AI ranks metric descriptions by cosine similarity. It materially bridges different wording but does not infer numerical counts, validate populations or prove metric identity. Irrelevant text still gets a nearest candidate: hold uncertain matches. No canned/model-failure fallback. All schemas, validation, histogram aggregation, ranks, comparisons and exports are deterministic.

Shared immutable same-origin assets (preserve their originating app builds):

- Worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- WASM factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The worker accepts `{id,texts}`, emits progress/batch messages and `{id,type:'result',vectors}`. Count, 384 dimensions, finiteness and normalization are checked before ranking. Up to 32 texts are inferred in chunks of four. The actual tokenizer ceiling is 512 tokens (`model_max_length`); the worker's extra `max_length:256` argument is ignored by this feature-extraction implementation and is not a 256-token guarantee.

Initial download: approximately 23 MB model/tokenizer/config from Hugging Face/CDN, plus 27 MB CPU runtime. Internet required on first load. Requires WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. No WebGPU needed. Tested: desktop Chrome CPU; physical phones, other browsers and low-memory devices unverified. The app exposes progress, cancellation and retry before loading. A 180-second timeout terminates failed runs. Input changes/imports invalidate run IDs; stale messages/file reads/worker-source fetches cannot overwrite newer work.

Content stays in browser/worker memory. Only static model/runtime files download; user text is not sent in network bodies or URLs. No keys, provider integrations, telemetry or local document persistence. Imported instructions are inert model data. Worker source, factory and WASM use Cache API; model files use runtime caching. Tested offline scope: **fresh-worker inference within an already-open warmed page with network disabled**. Offline navigation/reload is not promised; eviction/private browsing can require redownload.

Limits: 2–8 metrics; 1–24 windows; 2–8 edges (at most 1e9 ms); one integer count 0–1,000,000 per bin and positive total per window; descriptions/labels/context 1–300 characters; source JSON 50,000 characters; audit imports under 2 MB; review notes at most 1000 characters. Unsupported, invalid, zero-total, duplicated-ID and oversized inputs are rejected.

## Development and validation

React + Vite, base `/daily-app2/20261119-2/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app deployment scripts remain, but publish **only through the root combined-site workflow**. React 18 avoids unnecessary collection-size overhead. See [VALIDATION.md](VALIDATION.md) for observed checks and limitations, executable tests and sanitized network/asset reports.
