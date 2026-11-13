# Service Compass

A local-AI importance/performance survey reconciliation worksheet for service leads. Unlike a sentiment dashboard, it keeps supplied paired ratings, matches differently phrased topic descriptions to a user-maintained dimension register, and produces mandatory human-reviewed dimension summaries and owner checklists.

## Workflow

1. Choose synthetic **Library service** or **Repair desk**, paste JSON or import `.json`.
2. Supply 2–6 dimension profiles (`id`, `label`, `description`), 1–40 paired records (`id`, `respondent`, `note`, `importance`, `performance`, `owner`), `project`, `importanceCutoff`, and `performanceTarget`. Use pseudonymous respondent codes; one response per respondent/dimension. Leading/trailing code whitespace is ignored for duplicate checks and respondent counts; original text is retained. Ratings and thresholds are integer 1–5, higher = greater importance / better performance. No missing score imputation.
3. Explicitly select **Load AI & match topics**. Inspect the source, proposed dimension, and all cosine-ranked profile evidence. Correct mappings, respondent codes and ratings; assign owners and follow-ups. Approve or hold every row. Undo is available for up to 100 review edits.
4. Apply reviews. Holds or duplicate approved respondent/dimension pairs block complete summaries, but all rows remain exportable. Fix duplicates in original data or hold ambiguous evidence; do not rename respondents merely to bypass the check.
5. Compare performance-only ranking with importance/performance quadrants and importance-weighted shortfalls. Export current applied JSON, CSV or Markdown, or copy the checklist. Any review edit invalidates exports until reapplied. Audit import restores originals only, never old approvals.

## Real AI, assets and licensing

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX feature extraction, mean pooling, normalized 384-dimensional embeddings. Model-host `main` assets are used, not an immutable model revision; host updates can change suggestions.
- Runtime: `@huggingface/transformers` **4.3.2**, Apache-2.0; ONNX Runtime Web **1.30.0**, MIT. React/Vite with locally bundled module worker and CPU factory. WASM SIMD, one thread; no WebGPU required, no remote inference integration or keys.
- Approximately **23 MB** model/tokenizer from `huggingface.co` and its CDN plus **26,861,777 bytes** same-origin WASM (~50 MB first load). Initial internet is required; cancellation stops the worker. Download status/file progress and inference counts are shown. Device: current browser with module workers, WebAssembly SIMD and several hundred MB memory. Headless desktop Chrome CPU is tested; physical phones and other engines are unverified.
- The byte-identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that earlier build. `asset-validation.json` records SHA-256 and exact local/shared bytes. Local factory is at this app's `runtime/` path. Worker and runtime are explicitly cached in Cache API, with model caching provided by Transformers.js.

AI materially supplies semantic topic-to-dimension matching; it does not derive ratings, respondent identity, causal explanations or sample representativeness. Nearest-neighbor similarity is not confidence or proof. All nearest matches, including irrelevant text, begin pending. Imported instructions remain inert text; this app has no credential or external-action tools. Vector schema validates count, dimension, finite values and normalization before any proposal.

## Deterministic summaries and limitations

For each reviewed dimension: sample count, mean importance, mean performance, paired mean gap (importance minus performance), below-target response count, and target shortfalls. A dimension with no responses is **No evidence**, not zero.

Four quadrants use chosen fixed thresholds, not shifting sample means: importance ≥ cutoff and performance < target = **Focus first**; high importance/met target = **Maintain strength**; low importance/below target = **Monitor**; low importance/met target = **Lower priority**. Equality counts as high/met.

Baseline ranks ascending mean performance. Alternative ranking uses descending `sum(importance × max(0, target − performance)) / sum(importance)`. Unweighted shortfall is `sum(max(0, target − performance)) / n`. Ties break by dimension id and do not imply statistically distinct priorities. Quadrant focus and weighted ordering answer different questions; the weighted ordering is not presented as superior.

Means of ordinal ratings and these subjective weights are planning assumptions. The app does not establish interval-scale validity, measure improvement, estimate response bias, assess significance, authenticate respondents or identify causes. Compare sample counts and read source evidence. No ROI or population accuracy claims. Never mix reversed scales, unpaired survey waves or incompatible populations. Every hold blocks complete summaries rather than silently excluding a dissatisfied respondent.

## Privacy, caching and failure behavior

Only static runtime/model files download; default survey content stays in memory on-device. No uploads, analytics, server inference, external messaging or persistent content storage. Downloads/clipboard are user-initiated. No API keys required or accepted.

A warmed, already-open page was tested with all network offline, worker terminated, and real inference rerun through a fresh worker. **Offline page startup/reload is not supported or promised**. Cache eviction/storage denial requires internet again. Worker/runtime are stored under service-compass cache names; model files use runtime-managed Cache API storage. Clear site data to remove caches. Cache storage is not content encryption.

Source ≤40,000 characters, each topic/profile ≤300 characters, 1–40 rows, 2–6 dimensions, ids/respondent ≤60 characters, owners ≤150, review notes ≤1,000. Imports `.json` only, ≤2 MB, enough for maximum audit envelopes; restored originals remain subject to source limits. Four-text batches, 256-token context truncation, 180-second timeout. Run identities guard worker fetch, file reads and model messages. Input changes or cancellation terminate workers. Worker construction, asset/network, model, unsupported runtime, malformed output and timeout errors leave no fabricated result; retry is explicit.

## Output formats

- JSON: originals, all reviewed ratings/evidence/decisions, counts, blockers and complete summaries when unblocked. Reimport restores originals only.
- CSV: every source row, original/reviewed paired scores, dimension, respondent, owner, decision, notes and quadrant. Formula-like leading text is prefixed with an apostrophe, including multiline formula-like fields. JSON is lossless; CSV is spreadsheet-safe rather than a raw source-reimport format.
- Markdown: descriptive comparison and dimension summaries plus all source-linked owner checklists, including held rows. Never sends messages or applies service changes.

## Build and publishing

`npm install`; `npm run predeploy` (build). Vite base `/daily-app2/20261113-22/`. Per-app deploy scripts exist for contract compliance, but **publish only from the repository root** with `npm run predeploy` and `npm run deploy`, preserving the collection. Serving this folder alone must also serve the immutable shared WASM path above.

See [VALIDATION.md](VALIDATION.md) for observed fixture outcomes and browser checks. Tests use only synthetic fixtures. Reproduce production-browser tests using `python3 serve.py` then `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`; independent formula checks: `node oracle-generate.mjs && python3 oracle-test.py`; downloaded artifact checks: `python3 artifact-test.py`. Playwright resolves the installed workstation dependency; tests require desktop Chrome. Public/combined bundle targets are configurable through TEST_URL/REPORT.
