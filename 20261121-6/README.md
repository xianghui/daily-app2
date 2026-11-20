# Axis Accord

A local-AI paired-method comparison worksheet for lab educators and measurement teams. Reconcile paraphrased notes to measurement groups, verify paired specimens and readings, approve or hold every row, inspect a descriptive errors-in-both-axes fit and export a source-linked follow-up worksheet. Neither instrument is assumed to be reference truth.

## Workflow

1. Choose Packaging lab / Water workshop or paste/import source JSON. Edit group definitions, shared units and independently supported error variance ratios.
2. Explicitly click **Load AI & reconcile**. The real MiniLM model embeds group definitions and notes locally, ranks cosine similarity and suggests groups. No fixture output is hardcoded.
3. Inspect definitions/scores and originals. Edit group, specimen, X/Y or multiline evidence. Every semantic/numeric edit resets approval. Approve or hold every record; duplicate approved specimens within a group block applying. Undo reverses review edits.
4. Apply the comparison. Every group remains visible, including insufficient/degenerate groups. Check residuals, assumptions and OLS direction dependence. No instrument settings are changed.
5. Download JSON, Audit CSV, Fit CSV or Markdown, or copy exactly the current Markdown. Edits invalidate export snapshots. JSON import restores only original inputs, never imported approvals or model output.

## Distinct objective

Unlike Calibration Bench's reference-as-truth correction and held-out prediction objective, this utility assumes measurement error on **both axes** and evaluates method-comparison direction dependence under an explicit variance ratio. It does not generate calibration corrections. Agreement Grove's limits-of-agreement objective is also distinct. The full root gallery and original read-only collection were parsed before selection; duplicate-objective keywords checked included Deming, orthogonal regression and errors-in-variables.

## Real AI / assets / licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Source sentence-transformers/all-MiniLM-L6-v2.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT), normalized mean-pooled 384-dimensional neural vectors, four texts per chunk. No WebGPU dependency or fake fallback.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating apps and paths. Source and complete dependency chain inspected; byte sizes/hashes and actual tokenizer ceiling recorded in runtime-dependency-audit.json.
- About 23 MB model + 27 MB WASM plus tokenizer/worker/app. Explicit load requires internet to Hugging Face/CDN file hosts and same-origin runtime. Model main is unpinned; the audit records the observed revision, not a permanent pin.
- Secure-context modern browser with module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. Tested desktop Chrome with GPU disabled; 320/390px phone emulation is not a physical-phone test. Other browser engines/devices unverified.
- Each text ≤300 characters; actual tokenizer ceiling 512 tokens (the feature-extraction per-call max_length option is not a guaranteed 256-token cap). At most 60 texts / 15 chunks. 180-second timeout, file progress and processed-text counts, cancel/retry.

## Format / validation

Source JSON ≤60,000 characters; .json file import under 2 MB (source or `axis-accord/v1` audit envelope). Envelope metadata is ignored and originalInput independently revalidated.

```json
{
  "context": "Synthetic paired comparison, both methods have error.",
  "groups": [
    {"id":"paper", "text":"Paper sheet thickness measured by micrometers.", "unit":"mm", "lambda":1},
    {"id":"parcel", "text":"Parcel mass measured by weighing scales.", "unit":"g", "lambda":4}
  ],
  "records": [
    {"id":"r1", "specimen":"sheet1", "text":"Thickness of the paper sheet on both micrometers.", "x":1.2, "y":1.3}
  ]
}
```

2–12 groups; 1–48 records. Safe IDs letter-first then letters/digits/underscore/hyphen, ≤40 characters. Unique IDs within each array. Nonempty context/text ≤300 characters, unit ≤30. Numeric lambda 0.001–1000; finite numeric readings ±1,000,000, no string coercion. A fit needs at least three distinct approved specimens and nonconstant axes with stable nonzero covariance. Same unit on both axes is a human prerequisite, not inferred or converted. Review notes ≤1,000 characters. Source and every held record retained.

Structured vectors are checked for expected count, dimension, finiteness and normalized magnitude before ranking. Review rows, IDs, known groups, numeric bounds and score schemas are checked before computing results. Imports cannot change tools, request credentials or acquire authority; React renders them as inert text.

## Deterministic method

Lambda = Var(error Y) / Var(error X), supplied from independent repeatability studies, NOT fitted from the pairs. Center the readings and compute Sxx, Syy, Sxy. Deming slope is `(Syy-lambda*Sxx + sqrt((Syy-lambda*Sxx)^2 + 4*lambda*Sxy^2))/(2*Sxy)` with an algebraically stable equivalent for negative numerator differences. Intercept passes through the sample centroid. Guard constant axes and covariance near zero; show an unavailable group rather than invent a slope.

Forward OLS slope is Sxy/Sxx; inverse reverse-OLS slope is Syy/Sxy. Their absolute gap is in Y-per-X units. It measures axis-direction dependence, **not improved predictive error or accuracy**. Under swapping X/Y and reciprocating lambda, Deming slopes are reciprocal and intercepts transform accordingly. Negative slopes are supported. Fits are descriptive; no confidence intervals or extrapolation. Independent errors, constant variance ratio, linearity and independent specimens are assumptions, not verified properties. Outliers, heteroscedasticity and correlated errors invalidate interpretations.

AI grouping-change count is the number of approved assignments differing from a naive all-first-group baseline. It is not accuracy. Known-answer fixture scores in VALIDATION.md are tiny synthetic checks, not general performance.

## Privacy / caching / failures

No credentials, optional remote provider, analytics, content uploads, account access or instrument actions. Model-host traffic downloads files; text is passed only to a local worker. Source and reviewed content live in memory until exported/copied. Cache API stores worker, factory, WASM and model assets—not user data.

After a successful cached run, an **already-open warmed page** can terminate its worker and perform real inference with all networking disabled. Tested locally and again on public production bundle. No app-shell service worker; offline first visit, navigation/reload are not promised. Cache eviction or quota limits may require redownloads.

Run identities guard asynchronous imports, worker-source fetches, progress and results. Cancellation/input replacement/retry terminates old work. Network/worker/runtime failures, malformed output and timeouts show errors with no fabricated result. Review undo and pending/hold status retain human control.

## Artifacts

JSON retains all originals, reviews, scores and computed groups. Audit CSV retains every original/edited row and hold; Fit CSV retains every group including unavailable ones. Quoted CSV fields escape quotes/commas/newlines; spreadsheet-leading string formulas receive an apostrophe, including multiline strings. Genuine signed numeric readings remain numeric. Markdown is a human worksheet, not trusted executable markup. Downloads reflect only the last applied current review.

## Development / publishing

React + Vite, `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261121-6/`. Required individual scripts/dependency retained, but publish only through the ROOT combined-site workflow. See VALIDATION.md and test scripts for observed checks. Shared runtime dependencies must survive assembly. No 3D/STL or external API services.
