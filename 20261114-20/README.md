# Mix Lantern

A target-population comparison worksheet for course and service operations analysts. Rough cohort notes often use different words for the same segment. Real local MiniLM reconciles those notes with your segment definitions; you review group identity and aggregate counts. Deterministic direct standardization then answers: **what are these two groups' observed rates under the same supplied target mix?** Stress-test that mix with segment contributions, a convex gap envelope and two-segment break-even weights.

This differs from the collection's Mix Observatory (historical Kitagawa change decomposition): this app accepts an explicit prospective target distribution and explores how that choice changes the descriptive comparison. It does not predict future results or explain causes.

## Workflow and formats

1. Pick Course completion, Repair intake or Mix trade-offs (synthetic only), paste source JSON, or import `.json` under 2 MB. `project` is a label. `rules` contain unique `id`, `label`, `description`, positive `weight`; `records` contain unique `id`, `description`, `group` (A/B), integer `successes`, integer positive `total`, and `owner`.
2. Set target weights in the source. We normalize them to shares. Use disjoint, closed-cohort batches, the same outcome and follow-up horizon. Aggregate data cannot reveal overlapping subjects or omitted batches; verify those independently.
3. Explicitly click **Load AI & match segments**. Download and four-text processing progress are shown. Cancel terminates the worker. Input changes cancel processing and invalidate results; no fake classifications on failure.
4. Inspect source snippets, candidate definitions and cosine similarities. Correct each segment/group/count, approve or hold each batch, add multiline notes/owners, and undo edits. Every batch must be reviewed, and all originals remain retained.
5. Apply reviewed comparison. Missing group/segment cells withhold all standardized results rather than silently dropping segments. Holds are excluded and visibly mark results partial. Pooled totals remain available for the approved subset.
6. Inspect pooled versus common-mix rates, A-minus-B percentage-point differences and target-mix stress tests. Change input weights and rerun for a different target. Export JSON audit, all-batch CSV or Markdown worksheet; copy Markdown. Edits invalidate exports. Reimport restores only originals, not approvals or reviewed edits.

## Real AI / privacy / runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX via Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT). The package lock pins runtime dependencies. Upstream model revision is `main`, so later upstream changes may affect results/cache.
- Normalized mean-pooled 384-dimensional embeddings drive cosine-ranked segment retrieval. AI does not extract numbers, verify populations, calculate rates, forecast or establish causality. Nearest-match proposals include unrelated notes. Similarity is not confidence. A negation challenge mislinked; human correction/hold is mandatory.
- First load needs internet: approximately 23 MB model/tokenizer plus 27 MB WASM CPU runtime, ~50 MB total plus app code. Model files download from Hugging Face/hf.co and redirected CDN hosts; no content is uploaded. No provider keys, accounts, analytics, remote inference or external actions.
- App/worker/runtime JS is bundled locally. Immutable byte-identical WASM is shared at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier asset. Build rewrites its URL to avoid duplicating ~26.9 MB.
- Content and reviews stay in page/worker memory. Cache API stores worker/runtime/model files, not intentional user-content persistence. User-triggered local downloads contain your data. Clear this site's storage to clear model caches; eviction/private mode may require downloading again.
- **Tested offline scope:** after successful online inference, a fresh worker in the same already-open warmed page executed real inference with network disabled. Offline reload/navigation is not promised. The production/public worker and factory/binary paths are tested, not just dev-server paths.

## Devices, bounds and recovery

Requires module workers, WebAssembly SIMD, Blob modules and several hundred MB free RAM. WASM CPU is the default tested path; WebGPU is not required. Tested desktop headless Chrome on macOS and 1440/390/320 CSS-pixel layouts. Physical phones, low-memory devices, other browsers and screen-reader operation remain unverified.

Limits: 2–6 segments, 1–32 batches, source ≤30,000 characters, source/definition ≤300 characters (256 model tokens, truncated), four texts per inference batch, 180-second timeout, JSON envelope ≤2 MB. Counts are integers 0–1,000,000 (total ≥1; successes ≤total); weights 0.001–1,000,000. IDs ≤40, labels ≤80, owners ≤150 and review notes ≤1,000 characters. PDF/CSV input unsupported. CSV/Markdown/JSON are exports. Bad counts, duplicates, malformed embeddings, timeout, unsupported workers/WASM and download failures show actionable errors with no fabricated output. Run identities also guard late worker callbacks, fetched worker code and delayed file reads. No instructions in imported text become commands.

## Transparent deterministic calculation

Within segment j and group g, sum successes and totals from approved disjoint batches; `r[j,g]=successes/total`. Normalize supplied weights: `w[j]=weight[j]/sum(weights)`. Pooled baseline is total successes divided by total observations. Standardized rate is `sum(w[j]*r[j,g])`; A−B differences are percentage points. A strict sign reversal between pooled and standardized differences is flagged; ties do not count.

Stress test: each segment gap is `r[j,A]-r[j,B]`; its contribution is weight-share × gap. Across arbitrary nonnegative shares the gap lies between min/max segment gaps (boundary zero weights, distinct from strictly positive input weights). For two unequal segment gaps, solve `w*gap[0]+(1-w)*gap[1]=0`; only roots in [0,1] are shown. More than two segments do not have a single threshold. No optimization, uncertainty interval, significance or causal effect is claimed. Floating-point arithmetic, not exact decimal accounting. No automatic program launches or changes.

Tiny known-answer fixtures are checks, not measured model accuracy. Course counts reverse from pooled A 35.45% versus B 74.55% to common-mix A 60% versus B 50%. Repair counts at 3:1 weights give A 83.75% versus B 77.5%, versus pooled A 59% versus B 80%. The third Mix trade-offs fixture crosses at 80% routine repairs; moving its target from 75% to 90% changes the standardized leader. No invented time savings. Both pairs have A better in every segment; the pooled reversal arises from their different compositions.

## Development and observed validation

`npm install`; `npm run predeploy`. Per-app scripts retain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only through the repository root combined workflow**, never the individual deploy script.

See [VALIDATION.md](VALIDATION.md) and machine-readable browser/arithmetic/artifact reports. Browser suites use installed Playwright and real Chrome. Defensive-only workers are explicitly isolated from successful real-model checks. Synthetic fixture exports and screenshots contain no personal records.
