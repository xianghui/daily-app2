# Crossed Bench

A local-AI worksheet for quality teams reconciling repeated measurements from different operators. Unlike tolerance checks or paired-method agreement tools, this workflow requires a balanced **part × operator × trial** study and separates repeat-reading noise from operator and interaction components. Nothing controls instruments or certifies product release.

## Workflow

1. Choose Workshop measurements or Digital checks, paste source JSON, or import a `.json` source/audit file.
2. Edit 2–6 feature definitions (`id`, `label`, `description`, `unit`) and 1–32 records (`id`, `description`, `part`, `operator`, `trial`, numeric `value`, `owner`). Set units and study design before loading. IDs are case-sensitive. All readings per feature must share its unit; no conversion.
3. Explicitly load the real model. It embeds feature definitions and reading descriptions and proposes the nearest feature. Inspect cosine evidence, not confidence. No model-generated numbers or canned responses.
4. Review **every** feature, part, operator, trial, reading and owner; correct suggestions or hold records. Review notes/owners support multiline text. Undo restores previous review edits. Originals are never replaced.
5. Apply the reviewed study. Duplicate approved feature/part/operator/trial cells block applying. Incomplete grids produce remeasurement lists rather than estimates. Compare repeat-only SD with the full measurement SD, inspect ANOVA/raw components and plan rechecks by observed within-cell range. No arbitrary acceptance threshold.
6. Export current applied JSON, CSV or Markdown or copy the worksheet. Any review edit invalidates exports until reapplied. JSON retains originals, semantic evidence, every held row and full calculations. CSV preserves every record and original row; spreadsheet-like text fields are apostrophe-escaped, signed numeric readings stay numeric. Markdown includes the recheck list and every reviewed record. Reimporting JSON restores originals only, requiring fresh inference/review.

## Real AI, runtime and license

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, roughly **23 MB** weights/tokenizer. Frozen installed dependency versions are in package-lock.json.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT); normalized mean-pooled 384-dimensional vectors. Four texts per inference batch; 256-token max/text; source descriptions ≤300 characters. Input validation requires finite normalized vectors of the correct count/dimension.
- Runtime binary: ~27 MB, identical immutable same-origin collection asset at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that historical build. Worker and module factory bundle locally; no executable CDN scripts. Vite rewrites the duplicate binary to this shared path.
- First load needs internet to this collection and Hugging Face / its CDN. Download progress is displayed. Worker termination cancels download/inference; retry creates a fresh worker. Run identity protects worker fetch, callbacks and asynchronous imports against stale completion. Errors/timeouts do not produce fake suggestions.
- Recommended device: current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM. WebGPU is **not required**: real CPU-only inference was tested with GPU disabled. Physical phones, Safari/Firefox and low-memory hardware are unverified. User-actionable errors cover missing worker/WASM support.

## Privacy and offline scope

No API key, provider integration, content upload, telemetry, paid service or backend. User input/reviews stay in browser memory, except explicit user downloads/copy. Model download requests are GET file downloads, not text inference requests. Cache API stores model, worker, factory and WASM, not user content. Synthetic fixtures only; no personal data is committed.

A real online run followed by **fully offline fresh-worker inference on the already-open warmed page** passed. Offline app navigation/reload is **not claimed**; the app shell has no service worker. Evicted caches/private browsing may need another download. Downloads are initiated only by the load button, not page startup.

## Deterministic model and limits

Input: JSON source ≤30,000 characters; `.json` files ≤2 MB (larger audit metadata can round-trip). 2–6 features, 1–32 readings, descriptions ≤300 characters, feature labels ≤80, units ≤20, project/owner ≤150, part/operator IDs ≤40, review note ≤1,000. Trials are integers 1–4; readings finite within ±1,000,000. At least two parts, two operators and two repeats per approved feature are needed, every crossed cell exactly once. 180-second run timeout.

The balanced random-effects two-way ANOVA **retains interaction** (no p-value pooling):

- repeat variance = MSerror;
- interaction variance = (MSinteraction − MSerror) / repeats;
- operator variance = (MSoperator − MSinteraction) / (parts × repeats);
- part variance = (MSpart − MSinteraction) / (operators × repeats).

Negative component estimates are explicitly clamped to zero and their names/raw values shown. Full measurement SD = sqrt(repeat + operator + interaction); repeat-only SD is the simple baseline. Part variance is excluded from measurement SD. No confidence intervals or significance/acceptance claims. The literal-label count compares wording coverage, not semantic accuracy or time saved.

Use representative parts and operators, randomized independent repeated readings, consistent units and stable conditions. Tiny synthetic designs only demonstrate the calculation, **not adequate metrology studies**. The app cannot verify independence, identity, calibration, representativeness or stationarity. Missing/held whole groups can change the population; check complete design against your original plan. Results are exploratory follow-up aids, not capability, uncertainty budgets, causal operator blame or certification. Similarity can misclassify unrelated/negated wording; mandatory human review is essential. Imported instructions are embedded as data and have no execution/tool authority.

## Build / publish

`npm install`; `npm run dev`; `npm run predeploy` builds the individual production app at `/daily-app2/20261114-18/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained as required, but **publish only through the repository root combined deploy workflow** so the collection survives.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual checks and known limitations. Run `node core-test.mjs`, `python3 arithmetic-test.py`, serve the production bundle using `node serve.cjs`, and run the Playwright/browser and defensive suites. The browser tests require locally installed Chrome and the workspace Playwright installation; synthetic fault injection is confined to defensive tests, never successful AI fixtures.
