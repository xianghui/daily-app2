# Fair Current

A local-AI dispatch worksheet for small service-team coordinators. Rough request descriptions are hard to reconcile to service queues; real MiniLM semantic retrieval proposes routes even when wording differs. After mandatory human review, a deterministic weighted-fair work order balances supplied service entitlements. This is distinct from staffing forecasts, priority sorting and recurring-duty allocation: it orders one ready backlog across weighted queues.

## Use
1. Choose either synthetic example, paste JSON or import `.json`. Set `catalog` queues `{id,title,description,weight}` and `records` requests `{id,text,minutes}`, plus `name`. Weights 1–10 define relative service shares; they are not urgency ratings. Durations are user-supplied, never AI estimates.
2. Explicitly load AI. It embeds descriptions and notes, ranks queue cosine similarities, and presents source profiles. No hardcoded responses, confidence percentages or fake fallback.
3. Review every route and duration; correct, approve or hold; add verification notes. Undo restores the prior review. Imported text cannot invoke tools or request authority. A hold blocks the whole schedule. Input changes cancel the run; review edits invalidate applied exports.
4. Apply. Each request receives cumulative minutes within its queue divided by that queue's weight. Sort these virtual finish tags, breaking ties by input order, then accumulate actual non-overlapping time. Rational cross-products avoid floating-point tie drift. Queue order is preserved. All jobs are assumed ready at time zero, with one worker and no preemption. This packetized approximation is not a fluid-share guarantee, deadline solver or urgent/safety dispatcher.
5. Compare per-queue mean scheduled starts with FIFO on the same reviewed requests. These are computed waiting estimates, not measured savings. Some queues wait longer; total work is unchanged. Export JSON (all originals, reviews, fair and FIFO plans, metrics), complete audit CSV or Markdown worksheet; copy Markdown. Even held requests survive exports. Audit reimport restores originals only, never approvals. No live tickets or external actions.

## AI/runtime/source/license
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional English embeddings. Finite count/dimension/norm validation. Closed-set nearest-queue retrieval cannot detect unrelated requests reliably. Negation and similar services may misroute; similarity is not confidence or fact verification.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU. Four texts per inference batch, max 256-token context. No WebGPU/API key/backend needed. No optional provider integration.
- First use: approximately 50 MB (~23 MB model/tokenizer from huggingface.co, hf.co and model CDN; ~27 MB same-origin WASM). Code, worker and WASM factory bundled locally. Reuses immutable byte-identical collection WASM `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes). Preserve that earlier asset. Public model main is not pinned: upstream changes can affect future behavior.
- Modern module workers and WebAssembly SIMD required; several hundred MB available memory recommended. Desktop Chrome tested. Physical phones, constrained-memory performance and other browsers unverified.

## Privacy, offline and failure handling
User content remains in browser memory. No uploads, keys, analytics, account access or automatic content persistence. Only public assets download after explicit loading. Cache API stores worker/runtime and Transformers.js caches model files. Fresh-worker offline inference was tested in an already-open warmed production page; offline reload/navigation/app-shell startup is not promised. Eviction/private mode may require redownload. Model progress, cancellation, retry and network errors are visible. Cancellation terminates the worker; run identities guard late worker, worker-fetch and file-read completion. Timeout 180 seconds. Unsupported runtime, malformed vectors and download failures show actionable errors, never deterministic demo results.

## Limits/formats
JSON only; no CSV/PDF/image input. 2–8 queues, 1–24 requests, unique safe IDs ≤40 chars; names/titles ≤80; descriptions/request text/notes ≤400. Integer weights 1–10; integer minutes 1–240. Original JSON ≤18,000 chars; audit/file envelope ≤1 MB. CSV quotes multiline content and protects formula-leading text with an apostrophe. Original values remain lossless in JSON. Exported times are relative minutes, not calendar dates.

## Development and checks
React + Vite; base `/daily-app2/20261112-12/`. `npm install`, `npm run dev`, `npm run predeploy`. Required `predeploy: npm run build`, `deploy: gh-pages -d dist` retained; publish only via ROOT combined workflow, not individual deploy.

Run `node core-test.mjs`; `python3 serve.py` and `node browser-test.cjs`; defensive/stale/model-cancel/challenge scripts; `python3 artifact-test.py`. See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed checks and limitations.
