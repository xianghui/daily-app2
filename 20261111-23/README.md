# Mix Observatory

A local-AI inspection comparison bench for service-quality coordinators. Rough batch labels are a bottleneck: before comparing two periods, reconcile each batch to the same service-family codebook. MiniLM performs semantic family retrieval; a human verifies identity, period and counts. A deterministic symmetric Kitagawa decomposition then separates the aggregate failure-rate change into within-family rate and workload-mix contributions. Unlike an aggregate-only comparison, this exposes composition reversals. It does not explain causes or estimate statistical significance.

## Workflow

1. Choose either synthetic example, paste JSON or import `.json`. Supply `name`, a `catalog` of `{id,title,description}`, two ordered `periods` (before, after), and `records` of `{id,text,period,inspected,failed}`. Include disjoint, complete inspection batches under identical failure/selection definitions. No actual personal data is included.
2. Explicitly select **Load AI & reconcile families**. Watch model download and four-text inference chunk progress; Cancel terminates the worker. Input changes invalidate current work.
3. Inspect source text and ranked candidate descriptions/cosine scores. Scores are similarities, not confidence. Correct family, period and counts, add a reviewer note, and approve or hold/reject every record. Undo restores the previous review state. Original source values remain intact.
4. **Apply reviewed comparison**. Any hold or empty family–period cell blocks comparison; complete audits still export. There is no invented denominator, smoothing or silent deterministic AI fallback.
5. Download JSON audit, all-batch CSV or Markdown worksheet; copy Markdown. Every edit invalidates the applied snapshot. Reimporting an audit restores originals only, never old approvals: rerun/review to establish a fresh audit.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), derived from sentence-transformers/all-MiniLM-L6-v2; Apache-2.0. q8 ONNX, normalized mean-pooled 384-dimensional embeddings, deterministic cosine ranking over supplied family descriptions. No generated summaries or inferred counts.
- Runtime: Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web CPU WASM, MIT. WebGPU is not required or used. Runtime/worker JS is bundled locally; the same-origin ~26.9 MB WASM is shared at immutable `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that older asset. Vite rewrites only byte-identical WASM references.
- First use: approximately 50 MB total (~23 MB model/tokenizer plus ~27 MB runtime), internet required. Model files download from huggingface.co / hf.co and their CDN (including signed CDN redirects). Model revision is upstream `main`; a future upstream change can affect results or cache reuse. Package lock pins the installed runtime.
- No model-host access before explicitly loading. Only model/runtime file GETs were observed during production-browser tests. Input text stays in local worker memory; no content uploads, analytics, API credentials, account connections, remote inference or external actions. Imported instructions are embedded as data, not executed. Do not import private information on a shared device.
- Cache API stores model assets through Transformers.js and explicitly stores worker, WASM factory and binary. Browser cache can persist after closing the page and can be evicted; clearing this site's browser storage removes it. Originals/reviews are not intentionally persisted. JSON downloads are user-controlled local artifacts.
- Tested offline scope: after successful online inference, a **fresh worker in the same already-open page** ran real inference with all network disabled. Offline app-shell reload/navigation is not promised. Private browsing/cache restrictions can require another download.

## Devices, bounds and errors

Tested with actual headless desktop Chrome on macOS, desktop and 390/320 CSS-pixel layouts. Physical phones, Safari/Firefox/Edge, low-memory devices and screen-reader operation are unverified. Requires current browser supporting WebAssembly SIMD, module workers, Blob modules and several hundred MB memory. Cache API is recommended for offline use. Clear browser/site restrictions or use desktop Chrome if the runtime fails.

Limits: 2–6 distinct families, 1–12 batches, text/description ≤400 characters, 256-token model context (long tokenizations are truncated; keep identifying terms near the start), four texts/chunk, 180-second timeout. IDs ≤40 and titles ≤80 characters. Each inspected count is integer 1–1,000,000, failed integer 0–inspected; aggregate totals can reach 12,000,000. Two distinct period labels ≤40 characters. Originals ≤18,000 characters; imported/exported audit envelope ≤1 MB. CSV/PDF input unsupported. Empty/malformed/oversized inputs, invalid embeddings, unavailable workers/WASM, download failures and timeout show errors and no fake results. Cancellation, input/file changes and run identity guard against stale asynchronous completion.

## Transparent comparisons

For family j and period t, rate `r[j,t]=failed/inspected`, share `w[j,t]=inspected/total inspected`. The naive baseline is `R[after]-R[before]` from pooled counts. Decomposition:

- Within = Σ `(w[j,before]+w[j,after])/2 * (r[j,after]-r[j,before])`
- Mix = Σ `(r[j,before]+r[j,after])/2 * (w[j,after]-w[j,before])`
- Aggregate difference = Within + Mix (up to floating point residual).

Positive means higher failure rate. Values display in percentage points; tiny rounding differences are retained in JSON. Per-family source IDs, denominators, rates, shares and contributions are inspectable. No claims about causal attribution, statistical significance, future performance or certified quality. Aggregated totals cannot detect duplicate inspections or different sampling rules. Entirely omitted batches remain undetectable. Keep categories meaningfully comparable.

Identity baseline is literal case-insensitive trimmed title lookup, reported as resolved count; AI/reviewer agreement is not accuracy. Tiny known-answer fixtures are validation, not evidence of universal model quality. Unrelated text still receives a nearest family, and negation misclassified in testing; mandatory human review is essential.

## Build and collection publication

`npm install`, `npm run predeploy`; base `/daily-app2/20261111-23/`. Required individual scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` remain present, but **publish only through collection root** (`npm run predeploy`, then `npm run deploy`). Per-app deploy would replace the gallery. See root README for Pages verification.

See [VALIDATION.md](VALIDATION.md) and machine-readable `*-validation.json` for observed checks. Tests depend on this machine's Playwright Chrome installation; `core-test.mjs` and `boundary-test.mjs` use Node only, and `artifact-test.py` uses Python's independent CSV parser. No model mock is used for success-path tests; defensive tests explicitly inject faults only to verify errors/stale-run guards.
