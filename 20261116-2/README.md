# Retry Ledger

A local-AI retry-budget worksheet for reliability engineers and operations analysts. Reconcile differently worded attempt summaries with canonical operations, review the complete cohort counts, then allocate per-operation retry caps within an observed extra-call budget. No service configuration, API calls, accounts or messages.

## Workflow

1. Choose either synthetic example, paste source JSON, or import a `.json` source/audit (under 2 MB). Set `extraCallBudget` and canonical operation descriptions. Each observation supplies `id`, `description`, `attempt`, `reached`, `succeeded`.
2. Explicitly select **Load AI & reconcile attempts**. The real model embeds descriptions and proposes operation identities with top-two source evidence. It never supplies or changes counts.
3. Verify every identity, zero-based attempt index and count. Approve or hold each row; edit numeric fields or operation to reset its approval. Add multiline review notes and undo edits. Originals are preserved. All rows require review; a nearest semantic match is not identity verification.
4. Apply the worksheet. Approved rows must form one contiguous closed-cohort prefix for each operation. Duplicate slots, missing attempt 0, gaps and `next reached != previous reached - previous succeeded` block application. Hold an entire chain or suffix if it is incomplete. Operations without approved rows are explicitly excluded, not silently treated as zero-failure histories.
5. Inspect exact retry caps and comparisons, then export JSON, audit CSV, policy CSV or Markdown, or copy Markdown. Any review edit invalidates the result snapshot until reapplied. JSON audits retain all originals, held rows and reviewed values. Reimport restores originals, not prior approvals.

## Real AI and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Q8 ONNX weights, normalized mean-pooled 384-dimensional neural embeddings. Dot-product ranking occurs locally. Similarity scores are not confidence, correctness or retry-safety probabilities.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Default requires no API key, server or paid provider; no optional remote integration exists.
- First-use download: approximately 23 MB model plus 27 MB WASM and approximately 0.6 MB worker/factory. Requires internet to Hugging Face and its hf.co CDN; runtime and app assets are same-origin. Downloading files does **not** upload your input.
- Reuses tested immutable same-origin collection worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating builds. SHA-256 audit is in `asset-audit.json`.
- The worker accepts only text batches and emits vectors/progress/errors. The app validates vector count, 384 dimensions, finite values and normalization before assigning identities. Imported text cannot modify permissions or request credentials.
- Text, counts, edits and results stay in page memory. No telemetry, content uploads, persistent user-data storage or credentials. Asset/model caching uses Cache API and runtime browser caching. Closing the page loses unsaved work; export JSON first.
- Tested offline scope: after an online load, **fresh-worker inference in an already-open warmed page** with the browser context fully offline. Offline navigation/reload/startup is **not** promised. Private mode, cache eviction or unavailable storage may require redownload.

## Supported devices and bounds

Current desktop Chrome was tested with GPU disabled; inference uses CPU and does not need WebGPU. Requires WebAssembly SIMD, module workers, Cache API and several hundred MB free RAM. Physical phones, Safari, Firefox and low-memory devices were not tested. Phone-width layouts were tested in desktop Chrome.

2–6 operations; 1–24 observations; attempts 0–3; 1–300 characters per description/label; 50,000 source characters; 2 MB input file. Counts are integers: reached 1–1,000,000, succeeded 0–reached, extra budget 0–10,000,000. Worker batches four texts (maximum 30 texts). Actual model tokenizer ceiling is 512 tokens; this app limits characters rather than claiming the pipeline's unused max_length option enforces a lower token ceiling. English is the intended language.

Loading/progress/cancel, a 180-second timeout, model/network/worker errors and retry are visible. Cancellation terminates the worker. A monotonic run identity guards worker downloads, file imports and late callbacks; stale results cannot overwrite current input or a newer run. Failures produce no fake assignments.

## Deterministic objective and comparison

For each approved operation, cap `k` chooses the first `k` retries of its observed closed-cohort chain. Extra calls are the sum of reached counts at attempts 1 through k. Additional successes are the sum of successes there. Cap zero uses no retry. Exact enumeration maximizes total recovered requests under the integer extra-call budget, breaking equal recovery with fewer extra calls. It does not extrapolate beyond recorded attempts. At most 4^6 = 4,096 cap combinations exist before budget pruning.

The baseline gives every operation one retry if recorded; it is explicitly labeled when over budget. The no-retry baseline is the initial success total. All metrics are computed from current reviews. Initial successes + recovered successes + remaining failures equal initial calls. The budget is for **this cohort**, not per second or per future request. Operations are treated as disjoint request cohorts.

This is a counterfactual prefix **replay**, not a prediction or causal estimate. It assumes observed outcomes stay unchanged when other chains receive fewer retries. It does not model load/congestion, durations, deadlines, monetary cost, backoff, side effects, idempotency or retry safety. Partial/censored histories are unsupported. A high similarity can still link an unrelated description; hold it. No future savings/accuracy guarantee or automatic production recommendation is made.

## Input and exports

Source schema is illustrated in `src/core.js` and both in-app examples. JSON audits use `retry-ledger/v1`, including `originalInput`, ordered `reviews`, `groups`, `best`, `baseline` and totals. Source imports validate the original input again; audit metadata has a separate 2 MB envelope limit.

- `retry-ledger.json`: lossless full source, held and reviewed records, evidence, constraints and replay.
- `retry-ledger.csv`: every original observation and current review, correctly quoted multiline cells. Formula-leading text is apostrophe-prefixed for spreadsheets; genuine numeric counts remain numeric text. Original text is losslessly preserved in JSON.
- `retry-policy.csv`: every canonical operation, selected cap/calls/recovery and source IDs, or explicit exclusion.
- `retry-ledger.md`: computed policy, baseline, full original/review audit and follow-up checklist.

## Development / deployment

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base: `/daily-app2/20261116-2/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not run per-app deploy for this collection**. Publish only with root `/Volumes/ExternalHD/daily_app2` predeploy/deploy. Shared dependency paths require serving the collection base, not only an isolated app directory.

See [observed validation](VALIDATION.md) for real inference outcomes, artifact checks and untested scope. All fixtures are synthetic.
