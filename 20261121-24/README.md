# Forecast Canopy

React + Vite utility for operations planners reconciling independently prepared department/product demand forecasts. Distinct from forecasting a time series: it repairs **additive hierarchy coherence**, not future accuracy. No orders, staffing actions or external changes.

## Workflow

1. Choose **Shop demand** or **Help-desk load** (synthetic), paste JSON or import source/audit `.json` ≤2 MB.
2. Supply a rooted tree and one forecast for each node, all with the **same horizon and additive unit**. Child groups must be disjoint/exhaustive. Put horizon/unit in the title. Supply positive adjustment weights; larger weights discourage movement. No weight is inferred as confidence or reliability.
3. **Load AI & reconcile** explicitly downloads and runs local neural embeddings. Review each rough source label against the hierarchy, inspect ranked cosine evidence, correct mapping/value/weight and approve or hold every source.
4. **Apply reviewed scenario** blocks pending or duplicate/missing node estimates. Holds withhold the calculation while preserving all records. Compare a coherent nonnegative weighted reconciliation with coherent bottom-up totals.
5. Inspect all adjustments; export current JSON, Audit CSV, Forecast CSV or Markdown, or copy the worksheet. Any edit invalidates exports; value/weight/mapping changes reset approval. Undo restores the previous review. Audit reimport restores originals only, requiring fresh inference/review.

## Real AI / privacy / runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8, Apache-2.0; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Mean-pooled normalized 384-dimensional embeddings on single-thread WASM CPU; no WebGPU required. AI matches paraphrased estimate labels to user-supplied hierarchy definitions. It **does not predict numbers, construct a hierarchy, infer reliability or establish semantic equivalence**. Cosine similarity is not confidence.

First load requires internet, approximately **23 MB model/tokenizer + 27 MB CPU WASM**, plus app/worker/factory. Static same-origin assets and Hugging Face/CDN model downloads only. User text is passed to a local worker and never uploaded. There are no API keys, providers, backend, analytics or persisted content. Imported instructions are data, never tool authority. No optional remote integration.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB free RAM. Tested in desktop Chrome with GPU disabled and emulated 320/390-pixel viewports; physical phones, other browser engines and low-memory devices are unverified. Unsupported/network/runtime errors show actionable messages without fabricated results. Download and chunk progress, cancel/worker termination, retry and a 180-second timeout are provided. Run IDs guard worker messages, worker downloads and file reads against stale replacement.

Immutable collection dependencies (preserve these older published paths):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Protocol/source and hashes are checked in `runtime-dependency-audit.json`. Worker receives `{id,texts}` and returns download/chunk progress, errors or `{id,type:'result',vectors}`. Model host revision is not pinned; observed revision is recorded in that audit. Pipeline `max_length` is not relied upon: actual tokenizer ceiling is 512 tokens and source descriptions are capped at 300 characters. Four texts per inference chunk; at most 44 texts. Outputs validate count, 384 finite values and near-unit normalization.

Cache API stores the worker source, runtime factory, WASM and model files where storage permits. **Tested offline claim: fresh-worker inference in an already-open, warmed page with all network unavailable.** Offline startup/reload is not promised. Private mode, storage denial/eviction or incomplete downloads require network again.

## Schema / limits / exports

Source: `{title,nodes,estimates}`. `title`: 1–120 chars. `nodes`: 1–12 `{id,text,parent}` records, one root with `parent:null`; every other parent references a known ID; no cycles; at most 6 leaves. `estimates`: 1–32 `{id,description,value,weight}` records. IDs are unique per list, alphanumeric/underscore 1–40 chars. Text/description: 1–300 chars. Values: finite number 0–1,000,000; weights: finite 0.01–1,000. Paste limit 60,000 chars, file envelope limit 2 MB; review notes ≤2,000 chars. No CSV ingestion; unsupported files show guidance. Applying requires exactly one approved estimate per node, or a hold that withholds calculations.

JSON `forecast-canopy/1`: originalInput, every review/source/evidence/note, hold count, analysis or null, limitations. Audit CSV includes every reviewed source; Forecast CSV includes every node, parent, raw value, weight, full-precision reconciled value, signed adjustment and bottom-up value. Markdown contains the complete worksheet/method. CSV quotes commas, quotes and newlines, and prefixes formula-leading strings with an apostrophe; signed numeric adjustments remain numeric. JSON preserves literal text. Browser downloads are independently parsed in Python. Reimported audit envelopes restore original input, not trusted prior decisions.

## Deterministic reconciliation

Let x contain leaf forecasts and S map leaves to every ancestor (0/1 descendant matrix). Minimize `sum_i w_i (S_i x - y_i)^2`, with `x >= 0`. Enumerate all ≤64 free/zero leaf faces, solve the positive-definite weighted normal equations with pivoted elimination, reject negative free solutions and select the lowest feasible objective. Every leaf has a positive-weight estimate, so the full objective is strictly convex. Tiny floating residuals are expected. KKT certificates are independently checked for varied fixtures.

Bottom-up baseline fixes all leaf forecasts at their reviewed values and sums them for parents. Both methods are coherent/nonnegative; reconciliation minimizes weighted adjustment loss, **not predictive error**. Maximum raw mismatch is `max |parent - sum(children)|`. There is no invented time saving, confidence percentage or accuracy gain. Fixture adjustment loss is described with actual numbers in VALIDATION.md.

Outputs retain fractional planning units at full export precision. Two-decimal display rounding can make displayed totals differ slightly; **not integer inventory/order allocation**. Weights are supplied preferences, not estimated covariance/inverse variance. Forecast uncertainty, correlated errors, disaggregation correctness and future accuracy are not modeled. Semantic negation failed a real challenge; verify every link. Wrong hierarchy, inconsistent units/horizons or overlapping children invalidate the interpretation even when arithmetic is coherent.

## Development / verification / publishing

`npm install`; `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261121-24/`. Individual gh-pages dependency and required predeploy/deploy scripts exist; **publish only through repository-root predeploy/deploy**, preserving the combined collection. Original `/Volumes/ExternalHD/daily_app` is untouched.

Run `node core-test.mjs`, `python3 serve-test.py`, `node browser-test.cjs`, `node defensive-test.cjs`, `node cold-cancel-test.cjs`, `node stale-test.cjs`, `python3 artifact-test.py`. Browser tests use the locally installed Playwright/Chrome. Reports document actual outcomes; public production verification is recorded separately. See VALIDATION.md.
