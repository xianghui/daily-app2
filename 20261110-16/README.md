# Sample Balance

A local-AI worksheet for community workshop survey coordinators. Rough branch/location descriptions are a reconciliation bottleneck: the model proposes which supplied branch each response belongs to, a human verifies branch and rating, then the app compares raw respondent means with descriptive population-weighted means. It does not upload surveys, send messages, infer population facts or change a survey service.

## Workflow

1. Load a synthetic **Library workshops** or **Repair cafés** example, paste JSON, or import a `.json` original-input/audit file.
2. Define a mutually exclusive, exhaustive branch frame for one period and known target attendee populations. Provide one response per attendee, with a branch-location description and integer rating on a common 1–5 scale. The app cannot independently verify respondent identity, uniqueness or frame completeness.
3. Press **Load AI & reconcile responses**. Review initial download/privacy requirements first. Loading status, filename/percentage, inference batch progress and cancellation are visible. Nothing is auto-approved.
4. Inspect each original snippet, branch definition and candidate cosine similarities. Correct the branch or rating, add a verification note, then approve or hold. Undo restores prior reviews. Branch/rating edits reset that row to pending; all edits invalidate applied exports.
5. Confirm frame, uniqueness and scale. Apply the reviewed worksheet. Held responses, any empty branch, counts exceeding branch population or an unconfirmed frame block weighted estimates. Raw approved-only averages are provisional when blocked. Resolve held data by correction or deliberately amend original inputs and rerun; do not silently omit responses.
6. Inspect branch target/sample mix, expansion weights, raw and weighted means and weight-imbalance ESS. Download complete JSON, reviewed response CSV, Markdown worksheet/audit or copy Markdown. No outgoing survey actions exist.

## Real AI, source and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized `onnx/model_quantized.onnx`, hosted public model files (default host revision, not an immutable pin). Upstream changes can affect reproducibility; exports preserve observed candidate scores and proposals.
- Transformers.js **4.3.2** / ONNX Runtime Web **1.30.0**. CPU WASM q8; no WebGPU or server inference. Source/runtime factory and JS worker are bundled under the app base; WASM reuses an identical immutable collection asset described below.
- Actual inference: normalize mean-pooled **384-dimensional** sentence embeddings, then rank each response text against supplied branch title + description using cosine similarity. Validate count, dimension, finite values and normalized vector norms before results enter review. Four texts per batch; first 256 tokens; at most 72 texts; 180-second timeout.
- This is semantic retrieval, not an instruction-following model. Imported text has no authority, cannot initiate tools or request credentials. There is no generative output, canned result or heuristic fallback. Real model failures leave no suggestions and give actionable retry/device guidance.
- Negation and out-of-domain text still receive a nearest neighbor. A negated waterfront note and an unrelated instruction-like spacecraft note both matched the waterside branch in the observed challenge. Hold or correct them. Similarity is not confidence, identity verification or evidence of correctness.

## Deterministic statistics and limits

For each branch h with target population Nₕ and approved response count nₕ, each response gets expansion weight Nₕ/nₕ. The weighted mean is the sum of branch population shares multiplied by branch means. Raw mean gives each approved response equal weight. The weights sum to target population (within floating-point tolerance). ESS = (sum w)² / sum(w²) reports weight imbalance only; it is not a real independent-sample count, design-effect-adjusted precision or confidence interval.

Weighting adjusts the known branch mix only. It cannot correct nonresponse or rating bias within a branch, establish representativeness, verify populations or support causal claims. No CI, significance test, raking, design-based variance or operational decision recommendation. Means remain on the supplied 1–5 scale. Display rounding does not change exported calculations; JS double precision is used, not monetary/exact rational arithmetic.

Comparison is transparent: unweighted versus weighted descriptive means; per-branch response share versus population share. The reconciliation baseline counts case-insensitive literal branch-title occurrences in source notes. The retained-AI counter counts approved links unchanged from AI. Neither count is accuracy, measured productivity gain or statistical evidence of improvement. Tiny test fixtures do not establish real-world accuracy.

## Formats and bounds

```json
{"name":"One survey period","branches":[{"id":"A","title":"Workshop A","description":"Bicycle repair bench","population":50},{"id":"B","title":"Workshop B","description":"Sewing and garment mending","population":100}],"responses":[{"id":"r1","text":"Patched a flat bike tyre","rating":4},{"id":"r2","text":"Sewed a torn jacket seam","rating":3}]}
```

- Direct JSON ≤40,000 UTF-8 bytes; audit import ≤1,000,000 bytes with original payload ≤40 KB. 2–8 branches; 1–64 responses. Populations integer 1–1,000,000. Ratings integer 1–5. IDs 1–30 ASCII letters/digits/_/- and unique within each list; name/title 1–100 characters; descriptions/response/verification text ≤400 characters. Input bounds prevent unbounded inference; long text can still be token-truncated.
- JSON (`sample-balance/v1`) preserves original inputs, all rows including holds, original and reviewed ratings, AI candidates, human notes, blockers, current strata and metrics. Reimport restores originals and reruns AI; approvals are intentionally not trusted/restored.
- CSV includes **all** reviewed rows, original/reviewed ratings, AI/verified branches, human decisions/notes and applied weights (blank when blocked). Quoting via Papa Parse; formula-like text fields get a protective apostrophe, including multiline content. Original strings remain lossless in JSON. CSV is not an import format.
- Markdown includes warnings, means, blockers, branch worksheet and complete source audit. Pipes and line breaks are escaped/flattened for tables; use JSON for byte-exact original text. CSV/PDF/XLSX unsupported. No real personal documents or credentials are fixtures.

## Download, caching, devices and privacy

First load requires internet: roughly **23 MB** model/tokenizer/config downloads from `huggingface.co` and its `*.hf.co` CDN, plus **26,861,777 bytes (~27 MB)** same-origin WASM and ~0.9 MB app/runtime code. No paid service, API key, optional provider, analytics or user-content upload. Network checks observed GET downloads only with null request bodies; all content was processed on-device. Data/reviews are in memory, not persisted with model caches.

Chrome desktop with module workers, WebAssembly SIMD and Cache API was tested. CPU path runs without WebGPU. Other browsers, physical phones, low-memory devices and assistive-technology usability are unverified; narrow-phone responsive layouts were checked in desktop Chromium. Worker construction/runtime/network errors are displayed rather than silently replaced with fake AI.

Cache API explicitly stores worker JS, WASM factory and WASM binary; Transformers.js caches model assets. A **fresh worker** performed real inference with network blocked inside an already-open cached production page. This is the only offline claim. Offline navigation/reload is **not** promised; there is no service worker. Browser eviction, denied storage/private browsing and host changes can require internet again. Clear site data in browser settings to remove caches. Cancellation terminates workers; run IDs guard delayed file reads/downloads/callbacks from replacing changed inputs.

The shared binary at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` has SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`, identical to the installed runtime. Preserve this earlier app path in combined deployments. The current app builds only its own worker, runtime factory and app code.

## Build and publication

React + Vite, base `/daily-app2/20261110-16/`. `npm run predeploy` builds this app. Required per-app `deploy: gh-pages -d dist` exists for the publishing contract, but **do not run it**: publish the entire collection with root `npm run predeploy` then root `npm run deploy`. Root size guard and shared runtime must remain intact. Public target: https://xianghui.github.io/daily-app2/20261110-16/ . See `publication-status.json` and `VALIDATION.md` for actual release status; a pushed branch is not proof of public inference.

## Validation

See [observed validation](VALIDATION.md). Reproducible scripts: `node core-test.mjs`, `node browser-test.cjs` against `python3 serve.py`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node import-stale-test.cjs`, `python3 artifact-test.py`, `python3 asset-test.py`. Playwright uses the workspace's installed desktop Chrome. Successful AI tests use the real default model; malformed/unsupported/timeout/stale defensive tests explicitly inject faults, not successful fake inference.
