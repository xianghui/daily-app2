# Variability Harbor

A local-AI queue-study worksheet for workshop coordinators. Rough labels from separate time-study batches often describe the same station differently. Real neural embeddings reconcile them into reviewed queues; representative timing samples then expose variability hidden by mean-only waiting estimates. Unlike existing Erlang staffing or Little’s-law collection tools, this app compares empirical variability-dependent **G/G/1 Kingman queue-wait approximations** with a same-means M/M/1 assumption. It does not operate queues or recommend staffing automatically.

## Workflow / formats

1. Choose **Workshop service desk** or **Digital service study** (synthetic), paste JSON or import original/audit `.json` ≤2 MB. Source has `context`, `waitTarget` in minutes, `minSimilarity` 0–1, `first[{id,text}]` queue definitions, and `records[{id,text,gaps:number[],service:number[]}]` observation batches. Arrival gaps and service times are **separate marginal samples**, not pairs. Avoid duplicate observations or gaps crossing unobserved boundaries. `context` documents assumptions; only definitions/labels enter the model.
2. **Load AI & reconcile** explicitly downloads the default real model, showing download and four-text inference progress. Cancel terminates the worker; retry starts anew; timeout 180 seconds. Normalized 384-D neural embeddings drive the highest-cosine candidate above the chosen threshold (not calibrated confidence). No hard-coded answers, regex classifier or fake fallback.
3. Inspect source definitions, descriptions and all cosines. Correct queue identity and timing samples, write multiline notes and **approve or hold every batch**. Identity/sample edits reset approval. Holds exclude samples from estimates, not the audit. Original data remains untouched. Undo restores up to 100 review snapshots. A selected queue is required for approval; malformed sample lists block application even on held rows, so repair formatting or restore originals.
4. **Apply reviewed study** pools approved samples per queue, computes sample variance/C², stability, approximate wait, a same-means M/M/1 baseline, and a conditional target arrival-rate ceiling. Queues without approved evidence are explicitly missing, not zero. Held/incomplete studies should not be treated as complete. Changes/undo/input replacement invalidate exports.
5. Download **JSON** (lossless source, evidence, reviews, holds, results and assumptions), **CSV** (every original batch and reviewed samples), **Queue CSV** (all queue definitions, including uncovered queues, with sample counts/metrics), or **Markdown** (complete worksheet, original observations and reviews). Copy worksheet uses clipboard with actionable download fallback. JSON audit reimport restores **originals only**; fresh AI and review are mandatory. No queue messages, staffing changes, bookings or equipment actions occur.

CSV quotes commas, quotes and newlines. String fields beginning `= + - @ tab CR` receive an apostrophe to prevent spreadsheet interpretation, including multiline formula-like notes. JSON is the lossless interchange format. Numeric metrics stay numeric. Use an independent CSV parser, not splitting on commas.

## Formulas / assumptions / useful comparison

For each reviewed queue, `a = mean arrival gap`, `s = mean service time`, `ρ=s/a`; sample variance uses **n−1**; `Ca² = variance(gaps)/a²` and `Cs² = variance(service)/s²`. For `ρ<1`:

`Wq ≈ ((Ca² + Cs²)/2) × ρ/(1−ρ) × s`.

The mean-only baseline sets **both C²=1**, equivalent to the M/M/1 mean-wait expression with the same measured means. It is not empirical truth and may overestimate or underestimate relative to Kingman. `ρ≥1` yields an unstable flag and **null waits**, not finite planning results. No rounding is applied before calculations.

Given positive target queue wait `T` minutes and `V=(Ca²+Cs²)/2`, a conditional scenario ceiling is `60T/[s(T+Vs)]` arrivals/hour. The baseline scenario uses `V=1`. Both hold mean service and C² fixed as arrival rate changes; real systems need not preserve those quantities. For `V=0`, the expression is the **limiting service capacity**, not a stable equality operating point. Neither is a measured/safe capacity guarantee. Kingman models queue waiting only, not service-inclusive turnaround or tail latency.

Assumes one continuously available FIFO server, independent representative stationary arrivals/service, unlimited waiting room, no priority/abandonment. Not suitable for multiple servers, correlated/dependent timing, finite buffers, scheduled flows or transient startup. Small sample variance is uncertain; zero observed variability is **not proof of zero future waiting**. Two sample lists per batch need not have equal lengths. Pool only studies that represent one comparable operating regime. No generated distribution fit, simulation, accuracy percentage or measured time-saving claim.

The practical improvement is fewer repeated manual label crosswalks plus an auditable variability comparison. Neural matching materially determines which observations pool together; swapping only synthetic labels changes the inferred queue memberships and relevant wait outputs in the real-browser test. This is not just an AI label over ordinary calculations.

## Real model / static runtime / download

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX **≈23 MB** plus tokenizer/config. Host `main` is unpinned; observed revision this run `751bff37182d3f1213fa05d7196b954e230abad9`. Future host changes require revalidation.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), normalized mean-pooled 384-D feature extraction, single-thread **WASM CPU**. No WebGPU required; this is the default tested runtime, not an untested fallback. Mean/sample statistics, review, comparisons and exports are deterministic.
- Validates embedding count, dimension, finite values and approximate unit norm. Each list 2–8 entries, ≤16 model texts in four-text chunks. IDs unique per list, 1–40 ASCII alphanumeric/underscore/hyphen. Descriptions/context 1–300 characters. Actual tokenizer ceiling **512 tokens**; feature-extraction pipeline ignores per-call `max_length:256`, so the separate short-text bound remains important. English fixtures tested; multilingual quality unverified.
- Every sample list has 2–16 finite numeric values, **0.01–10,000 minutes**. Source arrays must be numeric arrays; review editors use comma-separated numbers. Maximum 256 approved durations across eight batches. `waitTarget` 0.01–10,000 minutes, threshold 0–1; source 1–50,000 characters, import envelope ≤2 MB, review notes ≤1,000 characters.
- Immutable same-origin shared dependencies, with hashes/bytes in [runtime-dependency-audit.json](runtime-dependency-audit.json):
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes).
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes).
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes).
  Preserve these originating app builds. Reusing their verified protocol and dependencies avoids duplicating a large runtime in the nearly-full collection. New app bundle uses `/daily-app2/20261120-4/`. No backend.

## Privacy / offline / devices / failures

No API keys, paid service, optional providers, analytics or remote inference. Only explicit AI loading downloads public model/tokenizer/config files from Hugging Face/CDN, and same-origin public runtime files. Queue labels, timing data, vectors and reviews remain in browser memory. Hosts receive normal download metadata, **not study content**. Browser audit checks requests from production-page startup through inference: GET/HEAD only, no bodies, no source text in URLs. Import text is data, never authority to obtain credentials or invoke tools. Only synthetic fixtures are committed.

Cache API stores public worker source in `variability-harbor-worker-v1`; shared factory/WASM use `circuit-cove-runtime-v1`; Transformers.js caches public model files. No study data is cached. After a successful online run, fresh-worker real inference works with **all network disabled in the already-open production page**. Offline app-shell startup, reload and navigation are **not promised**. Eviction or disabled caches require internet. Refresh loses unsaved work; download audits yourself.

Requires a secure context/current browser with WebAssembly SIMD, module workers, Cache API and several hundred MB free RAM. Desktop installed Chrome with GPU disabled tested; narrow 390/320 CSS-pixel layouts tested. Physical phones, low-memory devices and Firefox/Safari/Edge inference **unverified**. Model/network/WASM/worker failures, malformed messages/vectors and timeouts display actionable errors without fabricated results. Run IDs protect worker messages, async source fetches and file reads. Cancellation/input changes terminate workers, stale results cannot replace newer output.

Similarity does not prove queue identity or detect negation reliably. Always verify the actual station and operating regime. An unrelated instruction-like sample is inert and can be held, but must not be interpreted as a trustworthy label. No semantic truth, identity authentication or queue-model validity guarantee.

## Build / validation / deployment

`npm install && npm run predeploy`. React + Vite; base `/daily-app2/20261120-4/`; per-app gh-pages dependency and exact `predeploy: npm run build`, `deploy: gh-pages -d dist` retained. **Publish only through repository ROOT** `daily_app2` package combined `deploy/`, never individual deploy. Collection’s 1 GB conservative size guard is preserved; existing app dependencies/categories remain intact.

`node core-test.mjs`, `python3 serve-test.py` (7031), `node browser-test.cjs`, `node defensive-test.cjs`, stale/cold-cancel tests, `python3 artifact-test.py`, `python3 runtime-audit.py`. Browser scripts use workspace-installed Playwright and Chrome; fault injection is confined to defensive tests. Normal inference uses the actual model. See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed outcomes, public release status and untested scope. No digest is sent by this builder.

Public release: matching Pages `d2811e636301b79131ff5f171b3655a20dd83080` built successfully with workflow 44595618961 successful. Nine public asset byte matches, full public real-AI/privacy/offline/review/export/maximum-batch suite and preserved 737-entry gallery passed. Combined site 999,922,466 bytes; no digest sent.
