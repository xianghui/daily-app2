# Calibration Bench

An on-device AI worksheet for technicians reconciling informal instrument notes before fitting and verifying linear measurement corrections. It is distinct from unit conversion: this utility learns a per-instrument observed→reference correction from supplied pairs and validates it on separate supplied check rows. It never changes equipment.

## Workflow

1. Choose **Climate probes** or **Workshop balances**, paste JSON or import a JSON file. Fixtures are synthetic. Describe each instrument and its unit/tolerance, then supply source reading notes, observed values, reference values and roles (`fit`, `check`, `use`). `use` has `reference: null`.
2. Explicitly **Load AI & match instruments**. Inspect candidate descriptions and cosine similarities. Review identity, role, observed/reference values and notes. Approve or hold every row. Original input stays intact; undo restores review changes.
3. Set a maximum absolute check-error tolerance for each instrument. **Apply reviewed calibration** fits reference = slope × observed + intercept using only fit rows. It compares raw versus corrected mean absolute errors on the same held-out check rows, never on training rows.
4. Each instrument needs at least three distinct fit observations and two distinct check observations inside the fit range, finite positive slope, matching source units, no holds and maximum corrected check error ≤ supplied tolerance. New readings outside the training range are blocked. Numerical tolerance comparisons include a 1e-9 rounding allowance. No implicit unit conversion. Blocked instruments and all readings remain in the audit; valid instruments can still release corrections.
5. Download actual current JSON, CSV or Markdown, or copy the worksheet. Every edit invalidates the applied export snapshot. JSON retains originals, reviewed rows, candidate evidence, fitted parameters, blockers and metrics; CSV retains every row with original/reviewed numbers, decision, note and correction; Markdown shows models and all reading IDs. Reimporting an export uses **originalInput only**, discarding previous approvals and corrections. Renew review deliberately.

## Real AI, runtime and licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, learned 384-dimensional mean-pooled normalized embeddings. Descriptions and source notes are embedded locally; cosine similarity ranks instrument identities, without deriving them from IDs or units. Unit compatibility is checked later as a deterministic guard.
- [Transformers.js](https://github.com/huggingface/transformers.js), version 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU. Runtime factory, worker and app assets are bundled locally. Exact package versions are in package-lock.json. Model host's default revision is not pinned; upstream changes may affect outputs.
- First load: approximately 23 MB model/tokenizer files from `huggingface.co`, redirecting to `hf.co` / Hugging Face CDN (observed `us.aws.cdn.hf.co`), plus 26,861,777-byte same-origin WASM (~27 MB), total ~50 MB excluding smaller JS files. Requires internet, no key, no paid service. Loading/progress, cancellation, timeout and retry are explicit.
- To avoid duplicate deployed bytes, Vite rewrites the identical WASM URL to `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Keep that older build when deploying. New app's own factory is in `runtime/` and its worker is in `assets/`.

## Privacy, requirements and offline behavior

No user content, keys or credentials are sent to any inference provider. Downloading model files is not uploading readings. The model host still sees ordinary connection metadata. No telemetry, remote provider, server inference, account control or equipment actions are included. Imports cannot execute instructions; their text is embedded as data. Inputs/results are in page memory and not persisted by this app. Downloaded artifacts may contain all imported source data; store them appropriately. Model/runtime files are stored in browser Cache API when available; cache can be cleared in site settings and evicted by the browser.

Tested: current desktop Google Chrome, WebAssembly SIMD, module workers and Cache API, several hundred MB available memory recommended. WebGPU is not required; CPU is the default, not an untested fallback. Other browsers and physical mobile hardware unverified. No GPU-only promises.

After one successful online run, a **fresh worker** performed actual inference with browser networking completely disabled in the already-open page. Worker source, WASM factory and binary bridge Cache API to blob URLs; Transformers.js caches model files. This is not an offline app-shell guarantee: offline navigation/reload is not supported or promised. Browser cache eviction or blocked storage requires downloading again. Runtime failures give an actionable error and no fake result.

## Limits, schema and safeguards

JSON input only; CSV/PDF unsupported. File ≤1 MB including export envelope; original input ≤24 KB; 1–4 instruments and 1–24 readings; note/description ≤400 characters; first 256 tokenizer tokens; four texts per AI chunk. Numeric inputs finite and bounded ±1,000,000; tolerance positive. IDs unique within each list, alphanumeric/underscore/hyphen only. Check/reference values required except use rows. JSON output vectors are validated for count, 384 dimensions, finite numbers and approximate unit norm. A 180-second timeout terminates failed runs. Cancel/input change terminates the worker and increments a run identity; late worker responses, delayed file imports and delayed worker downloads cannot replace newer work. No hard-coded suggestions or deterministic AI fallback.

## Interpretation and limitations

Similarity is not identity proof, confidence or a metrological uncertainty estimate. Unknown notes always have a nearest candidate, even if none fits; hold them manually. Negation, ambiguous identical devices, drift, nonlinear response and unstable sampling can defeat the method. Both synthetic fixtures use linear relationships and clean check data; the observed near-zero corrected residuals are not a real-world accuracy promise. The lexical baseline counts notes containing a full instrument title (coverage only), while calibration compares uncorrected versus corrected error on supplied held-out rows. It does not invent accuracy, time savings or improvement percentages. Reviewers control data, roles and tolerance; the app cannot verify independent physical measurements or traceability. Small check sets cannot establish generalization. Do not treat the worksheet as calibration certification, uncertainty analysis, regulatory compliance or a safety-critical equipment procedure.

## Build and publication

React + Vite, base `/daily-app2/20261111-9/`. `npm install`, `npm run dev`, `npm run predeploy`. Required individual deploy script exists but **do not publish it alone**. Publish through the root combined deployment to preserve the entire gallery. See root README for Pages verification.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable `*-validation.json`. Browser suites use installed workspace Playwright and real Chrome. Successful inference tests never mock the model; fault injection is limited to defensive errors and stale-response tests. Exports are synthetic fixtures only.
