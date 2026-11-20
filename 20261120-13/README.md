# Distribution Dock

A local-first recheck worksheet for service operations analysts. **Rough duration notes → real neural queue retrieval → mandatory human review → reference/current empirical comparisons → usable JSON/CSV/Markdown.** Detect whole-distribution changes that a mean-only screen can miss, without uploading observations or operating a service.

## Workflow

1. Try **Archive queues** or **Workshop queues** (synthetic). Paste/import JSON with queue descriptions, a common unit, reference/current observations and your recheck tolerance. Each duration is an individual exact observation or repeated exact value, **not** a histogram bin, cohort mean or interval.
2. Read the model/device notice, then explicitly choose **Load AI & reconcile**. The download and four-text neural batches show progress. Cancel terminates the worker; timeout is 180 seconds. Retry after network/device errors. No deterministic or canned AI fallback exists.
3. Inspect every original note, proposed queue and ranked cosine/source evidence. Correct queue, period, duration and exact-value frequency; substantive edits reset approval. Approve or hold every row. Holds remain in complete audit exports but are excluded from calculations. Notes support multiple lines; undo restores up to 100 review edits.
4. **Apply reviewed comparison**. Inspect per-queue reference/current CDFs, Wasserstein distance, means, nearest-rank p50/p90, observation frequencies and exact CDF-area segments. Queues are shown by descending distance, with incomplete queues explicitly marked. Compare distribution flags against mean-only flags at your same supplied tolerance. These are computed descriptive checks, not measured accuracy/time improvements or statistical significance.
5. Download **JSON** (original input, all reviews, evidence, metrics and comparisons), **CSV** (every original/reviewed row), **Segments CSV** (CDF-area evidence for complete approved queues) or **Markdown**; copy the worksheet. Any edit invalidates the applied export snapshot. Reimporting an audit restores **original inputs only**, not reviewed edits or approvals; retain the complete audit to preserve review history.

## Input schema and bounds

```json
{
  "context":"Synthetic comparable scanning service observations",
  "unit":"minutes",
  "tolerance":2,
  "minSimilarity":0.15,
  "first":[{"id":"scan","text":"Scanning paper documents into digital archives"}],
  "records":[
    {"id":"a","text":"Digitizing paper documents","period":"reference","value":10,"count":1},
    {"id":"b","text":"Scanning printed pages","period":"current","value":18,"count":1}
  ]
}
```

- 1–8 unique queue IDs; 1–96 unique observation IDs; ASCII letters/digits/underscore/hyphen, 1–40 characters.
- Nonempty context/unit/descriptions ≤300 characters. Source ≤60,000 characters. JSON source/audit import ≤2,000,000 bytes, with restored originals independently checked against source bounds. Other formats unsupported.
- Period: `reference` or `current`. Duration/tolerance: finite nonnegative numbers ≤1,000,000 in one common unit. Exact-value frequency: integer 1–100,000. No record expansion is required for weighted counts. Similarity threshold: 0–1. Review notes: ≤1,000 characters.
- Complete queues require at least one approved observation in each period. All-held exports are valid audits, not evidence of no change. Empty/incomplete queues have null distances rather than zeros.
- `distribution-dock/v1` result schema validates every original/review ID in order, decisions, targets and numeric bounds. Neural output must have one normalized finite 384-dimensional vector per supplied text. No neural generation/JSON parsing is needed.
- CSV quotes commas, quotes and line breaks; formula-like text beginning `= + - @ tab CR` is prefixed with an apostrophe. Genuine numeric measurements remain numeric; JSON preserves exact text. Segments CSV intentionally includes only complete approved queue comparisons.

## What AI actually does

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX `q8`, Transformers.js **4.3.2**, ONNX Runtime Web **WASM CPU**, one thread. Mean-pooled normalized 384-dimensional neural embeddings compare messy observation text with your queue descriptions; no keyword-only classifier or hard-coded sample responses. Scores are cosine similarities, **not confidence probabilities**. Below-threshold rows remain unassigned, and every suggestion requires review.

Maximum 104 texts = 26 batches of four. Actual tokenizer ceiling is **512 tokens**; the older shared pipeline's per-call `max_length:256` is ignored by feature extraction and is not an enforced cap. App descriptions are independently bounded to 300 characters. English-focused MiniLM can mislink negation, jargon and unrelated text. It does not verify measurements, identify people, infer periods or counts, diagnose causes or determine which changes matter operationally. Imported text is inert data and cannot grant tool authority or request credentials.

The model's `main` revision is unpinned; observed revision is recorded in `runtime-dependency-audit.json`. Future host updates may change outputs.

## Deterministic comparison and baseline

For each approved queue, reference/current empirical distributions are independently normalized by total frequency. At each interval between adjacent distinct observed values, accumulate `width × abs(referenceCDF − currentCDF)`. The sum is exact **one-dimensional Wasserstein-1 distance**, in the supplied duration unit. Means and inverse-CDF p50/p90 are frequency weighted. Displayed mean-only baseline is `abs(currentMean − referenceMean)`; both flags use strict `> tolerance`, not `>=`. Distance is at least absolute mean change (within floating-point tolerance), but neither is a significance test.

Archive fixture: scanning reference `[10,10]`, current `[2,18]` has equal means (10), mean-only change 0, W1 **8**. Packing W1 **2**, equal to the tolerance, so it is not flagged. Workshop: washing W1 **5**, baking **0**. These tiny known-answer cases illustrate a mechanism, not general accuracy. The negation challenge “This is not scanning documents; it is packing boxes for shipping” incorrectly linked to scanning in actual inference. Human review remains mandatory. Holds, incomplete logs, changed workload/mix or differing periods can bias the comparison. No causal claims, safety conclusions, future forecasts, automatic interventions or claimed time savings.

## Downloads, privacy, supported devices and offline scope

- First explicit load: ≈23 MB public model/tokenizer from **huggingface.co** and its CDN (**hf.co / us.aws.cdn.hf.co**), ≈27 MB runtime binary plus worker/factory from this static collection. Several hundred MB RAM and internet required initially. No model-host request occurs before explicit loading.
- Same-origin immutable dependencies: **20261115-6/assets/ai.worker-lkOoPoq8.js**, **20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs**, **20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm**. Preserve those existing app builds. Byte/hash and protocol audit: `runtime-dependency-audit.json`. Reuse avoids duplicate deployed runtime bytes; no content goes to those apps or a server.
- Source text, vectors and edits remain in browser/worker memory. Requests only download public assets with GET/HEAD; no content in request bodies/URLs, keys, remote inference, telemetry, analytics or upload integration. Only synthetic fixtures are committed. Built asset credential-pattern scan is supplemental to source/network inspection, not a universal secret detector.
- Worker cache `distribution-dock-worker-v1`, explicit shared runtime factory/binary Cache API bridge and Transformers.js model caching. Storage can be denied or evicted: reconnect and retry.
- **Verified offline scope:** after an online run, networking disabled, **new worker** performs real inference in the **already-open warmed page**. Offline reload/navigation/app-shell startup is **not promised**; no service worker is installed.
- Secure-context browser with WebAssembly SIMD, module workers and Cache API required. WebGPU is not required. Tested desktop Chrome on CPU with GPU disabled; 320/390px layouts are viewport emulation, not physical-phone inference. Other browsers, low-memory hardware, physical phones and screen readers unverified.
- Run identities guard cancelled runs, input edits, delayed worker-source fetches and delayed file reads. Worker/network errors, invalid vectors/envelopes, unsupported runtime and timeout clear proposals rather than fabricating output.

## Build, validation and publishing

React + Vite, base `/daily-app2/20261120-13/`. `npm install`; `npm run predeploy`. Required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Never publish this app individually**: root `/Volumes/ExternalHD/daily_app2` predeploy assembles the collection into `deploy/`; root deploy publishes it. The 1 GB guard, original read-only collection and legacy categories are preserved. No builder digest.

See [VALIDATION.md](VALIDATION.md) for observed outcomes and limitations. Run `node core-test.mjs`, `python3 serve-test.py` and `node browser-test.cjs` for production-bundle checks; browser scripts use the installed workspace Playwright and Chrome. Defensive fault injection tests failure paths only; successful workflow tests load the real default model.
