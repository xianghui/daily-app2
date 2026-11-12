# Flow Window

A local-AI queue-observation review desk for operations leads. Distinct from ticket ranking or scheduling: it reconciles informal **observation windows** into service streams, then computes pooled Little’s-law estimates and a target-WIP scenario. No backend or operational actions.

## Use

1. Load a synthetic example or paste/import JSON. Edit the catalog descriptions and `targetDays` to set your stream definitions and planning targets.
2. Explicitly choose **Load AI & match observations**. First use downloads about 50 MB; loading is cancellable.
3. Inspect each source snippet and ranked profile evidence. Verify stream identity, day offsets, time-average WIP and whole completions. Approve or hold every record; edit verification notes. Undo reverses review edits. Source input remains unchanged.
4. Apply reviewed observations. Holds, overlapping windows and streams with zero total completions block calculated outputs, but complete audit exports remain available.
5. Download current reviewed JSON, CSV or Markdown, or copy Markdown. Review edits invalidate the applied snapshot. JSON reimport restores originals only and deliberately requires fresh AI/review, not old approvals.

## Input / output

JSON shape: `{name,catalog:[{id,title,description,targetDays}],records:[{id,text,start,end,wip,completed}]}`. Example buttons are synthetic. IDs are unique within each list, safe word/hyphen strings. 2–8 streams; 1–24 records; 400-character descriptions/notes; 24 KB original JSON; 1 MB import envelope. Day offsets 0–3650; end greater than start; WIP 0–1,000,000; integer completions 0–1,000,000. Target 0.001–3650 days. No PDF/CSV input. Imported text is data, not instructions or credential authority.

JSON exports preserve original input, every reviewed record, decisions, evidence, constraints and derived results. CSV preserves every observation and reviewed numeric/identity/note field, with quoted commas/newlines and spreadsheet-formula protection on strings. Markdown is a complete readable observation/summary worksheet. No rows are deleted; holds block release. Numbers remain numeric, not spreadsheet-sanitized strings. Exports are generated from the current applied snapshot.

## Actual AI and privacy

**Xenova/all-MiniLM-L6-v2**, Apache-2.0, [model source](https://huggingface.co/Xenova/all-MiniLM-L6-v2). **@huggingface/transformers 4.3.2**, Apache-2.0, ONNX Runtime Web (MIT) WASM CPU, quantized q8 model. Normalized mean-pooled 384-dimensional embeddings, four-text batches, max 256 tokens/text. Cosine ranking proposes a catalog identity for each note. The result vectors are validated for count, dimension, normalization and finite values. Numeric values are supplied by the user, not extracted or invented by AI.

This is real trained semantic inference, useful for aliases/paraphrases missed by exact titles. It does not understand operational truth, reject unknown queues reliably, or establish confidence. Negated/irrelevant/ambiguous notes can mislink. Mandatory human review is essential; similarity is not probability. The two tiny fixtures are smoke checks, not accuracy benchmarks.

Default content stays in page/worker memory. Network requests download static model/tokenizer files from huggingface.co and its CDN only, plus same-origin worker/runtime assets. User content is not put in URLs or uploaded. No API key, optional remote provider, tracking or automatic persistence. No agent credentials. Do not put private content in source control.

## Download, device and cache contract

About 23 MB model/tokenizer plus 26,861,777-byte WASM and small JS assets. Browser needs module workers, WebAssembly SIMD, Cache API for offline reuse, and several hundred MB free RAM. No WebGPU required. Desktop Chrome WASM CPU was tested, including GPU-disabled runs; other browsers and physical phones were not tested. Mobile Chrome touch/layout was emulated only.

App code, worker and runtime module factory are bundled locally. Byte-identical WASM is reused from immutable collection path `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 in asset-validation.json). Preserve that path when publishing. Cache API stores worker, factory and WASM, Transformers.js caches model files. **After a successful run, offline inference with a fresh worker is tested in an already-open warmed page. Offline reload/navigation/app-shell launch is not promised.** Eviction/private mode may require new downloads. Internet is required before first inference. No silent fake fallback. Cancellation terminates the worker; run identity guards late worker/import/download completions. Timeout: 180 seconds. Errors give retry/device/network guidance.

## Deterministic math and limitations

Within each stream, windows are half-open and may not overlap. Gaps are excluded from observed duration. WIP must be a **time-average** over each window, with the same jobs/boundaries as completions. Do not supply an instantaneous snapshot as a time average.

- `observedDays = sum(end-start)`
- `wipDays = sum(wip * (end-start))`
- `meanWip = wipDays / observedDays`
- `throughput = sum(completed) / observedDays`
- `pooledLeadDays = wipDays / sum(completed)`
- Baseline: unweighted average of each window’s `wip*days/completed`. Undefined if any window has zero completions.
- Target-WIP scenario: supplied `targetDays * observed throughput`.

Little’s law requires stable flow and consistent population/units. The app cannot test stationarity, arrivals/departures balance or measurement quality. Never pool cases with subtasks. Zero completions for a whole stream makes lead time undefined and blocks release. A zero-completion individual period is allowed if its stream has other completions. No cross-stream pooling, individual wait prediction, capacity/throughput guarantee, staffing advice or measured time-savings claim. The baseline comparison illustrates weighting, not proof that the pooled estimate is true.

## Build / publish / verification

React + Vite. `npm install`, `npm run predeploy`. Individual scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but publish only through the ROOT combined-site workflow. Vite base `/daily-app2/20261113-1/`.

See [VALIDATION.md](VALIDATION.md), browser/core/defensive/stale/cancellation tests and machine-readable validation files. Browser tests require this machine’s Playwright installation and Chrome. `serve.py` maps production dist paths on port 6531. `browser-test.cjs` supports TEST_URL for combined/public reruns. Model downloads are real; fault-injected tests are only failure/stale checks. Export fixtures are all synthetic.
