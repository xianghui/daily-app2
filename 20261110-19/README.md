# Resolution Tide

A private completion-time notebook for service operations analysts. Rough work-item descriptions often use different wording from a process taxonomy, while completed-only reports silently omit unfinished jobs. Real local AI proposes stream links; mandatory human review feeds a transparent Kaplan–Meier worksheet that includes right-censored open work.

## Use

1. Choose a synthetic office/workshop example or paste/import JSON with `name`, elapsed-time `unit`, positive `horizon`, 2–6 `streams` (`id`, `title`, `description`) and 2–64 `items` (`id`, `text`, `duration`, `state`). `state` is `complete` or `open`; duration is completed elapsed time or elapsed observation time while still open. JSON input only; no implied CSV/PDF/date extraction.
2. Press **Load AI & reconcile work items**. Initial download is approximately 50 MB: ~23 MB model/tokenizer and 26,861,777 bytes of WASM plus small local JS assets. Progress, cancellation and retry are available. No model traffic occurs before this explicit action.
3. Inspect original text, stream definition and ranked cosine similarity (not confidence). Correct stream/duration/state, add verification notes and approve or hold every item. Each changed observation resets its approval. Undo is available for the last 100 review edits.
4. Verify cohort/censoring assumptions and apply. Every stream needs ≥3 approved items; any hold blocks all estimates rather than silently excluding awkward observations. You can still export the complete blocked audit.
5. Inspect completed-only baseline median, censor-aware median, estimated completion by target horizon, survival curve and exact risk-set table. Export current JSON/CSV/Markdown or copy Markdown. Review edits or changed assumptions invalidate exports. Reimported audit JSON restores **original inputs only**, never approvals.

## Real AI / runtime / license

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, normalized mean-pooled 384-dimensional feature embeddings. Downloads resolve the model repository's default revision (not vendored/pinned); future upstream changes could alter results. No generation, classification-by-regex or canned AI responses.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0, MIT. Dependency lockfile records exact package resolution. Inference explicitly uses WASM CPU, one thread, no WebGPU. The local factory is bundled at `runtime/`; shared identical WASM stays at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve this immutable older-app asset in the collection.
- Embeddings compare each note to supplied stream titles/descriptions. This meaning-aware retrieval reduces literal-title lookup misses but does not establish stream identity. Four texts per inference batch, maximum first 256 tokens per text. Outputs must be finite, normalized, correctly counted 384-dimensional vectors.
- Tested device: headless real desktop Chrome. Module workers, WebAssembly SIMD and Cache API required for the verified path. Physical phones and other browsers not tested. Narrow Chrome viewports are layout tests, not phone inference claims. Timeout 180 seconds; memory/CPU limits may prevent use on smaller devices. There is no mandatory API, paid provider, key or remote fallback. Failure leaves no fake suggestions.

## Privacy / internet / caching

The browser downloads model files from `huggingface.co` and its `hf.co` CDN, and code/runtime from the same site. User content is never put into download URLs or request bodies. No analytics, API credentials, remote inference or external actions. Imported text is data, never authority. All work/review content lives in browser memory; export before closing. Public fixtures and validation artifacts contain synthetic data only.

Worker source, WASM factory/binary and model assets use browser caches. Verified offline scope: after online inference **inside an already-open page**, terminate the worker, disable all network and run real inference using a fresh cached blob worker. Offline app-shell reload/navigation is **not** promised. Eviction/private mode/storage denial can require internet again. Cancel terminates workers; run IDs also guard delayed worker fetches, stale callbacks and asynchronous file imports.

## Statistical interpretation / deterministic steps

Input duration/unit/state are supplied by the analyst, not extracted or invented by AI. For each reviewed stream at each distinct observed time, compute the at-risk count, completed count and censor count; update `S(t) *= 1 − completions/atRisk`, then remove both completed and censored items. Tied completions are evaluated before censored observations leave the risk set. Median is the first time S(t) ≤0.5; if never reached it stays null, not zero. Completed-only median uses ordinary sorted completed durations and is explicitly a potentially biased descriptive baseline. Estimated completion at the target is `1−S(horizon)` only within observed follow-up. No extrapolation, confidence interval, automatic bias diagnosis, significance test, forecast or causal claim.

In both fixtures the completed-only median is 4 days and censor-aware median is 6 days; estimated completion by day 5 is 0.375 (37.5%). These are computed synthetic-cohort quantities, **not measured productivity or accuracy gains**. Small samples below 30 are preliminary and no sample-size threshold guarantees adequacy.

Assumptions need domain judgment: whole start-defined cohort; independent, unique items; common time origin/unit; no left truncation or competing terminal outcomes; non-informative right censoring. Avoid a current-backlog-only sample or selectively reported completions. Cancelled, lost or withdrawn difficult work is not automatically valid censoring. Group differences can reflect case mix, different entry periods or censoring, not process performance. This is exploratory operations analysis, not SLA certification or a service guarantee.

## Limits / validation / formats

Original JSON ≤40,000 serialized characters; imported audit ≤1 MB. IDs ≤30 ASCII letters/digits/_/-; name/title ≤100, stream description/note ≤400, time unit ≤20. Durations finite 0–1,000,000, horizon positive ≤1,000,000. Source originals are preserved. JSON retains all inputs, current review, similarity evidence, calculations and blockers; CSV retains every work item including holds and original/reviewed fields with formula-safe text; Markdown contains risk-set calculations and full audit. Signed numeric durations remain numbers. Markdown is escaped and multiline notes flattened for readability; JSON is lossless.

See [VALIDATION.md](VALIDATION.md) for observed checks and limitations, not universal accuracy claims. Run `npm run predeploy`, `node core-test.mjs`, start `python3 serve.py`, then `node browser-test.cjs` and `python3 artifact-test.py`. Additional browser scripts check network/download cancellation and delayed imports. Publish through the **root** combined deployment, never this app's required standalone deploy script.
