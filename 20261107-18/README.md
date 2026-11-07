# Queue Mosaic

A local-AI quality-audit sampling workspace for support team leads. Unlike a theme backlog or priority queue, this app chooses a **meaning-diverse subset for human audit**, with a strict reviewer count budget. It never claims statistical representativeness, urgency detection or measured audit accuracy.

## Workflow

1. Paste/import UTF-8 CSV with exactly `id,text` headers, or choose either synthetic fixture. Use quoted CSV fields for commas/newlines.
2. Set the maximum number of tickets to audit, then explicitly press **Load AI & build sample**.
3. Review every selected/deferred decision. Inspect original text and the closest other selected case, change selections, assign reviewers and add notes. Selections must number 1–K. Reject AI resets to the first K records; undo restores prior edits. Every original remains unchanged.
4. Check all review boxes and apply. Any subsequent edit invalidates exports. JSON includes originals, all decisions, metrics and the similarity matrix; CSV includes all tickets with decisions; Markdown contains selected tasks. Copy JSON is also available.

## Real AI and deterministic steps

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; derived from sentence-transformers/all-MiniLM-L6-v2. Approximately 23 MB weights/tokenizer/config.
- Transformers.js 4.3.2 with ONNX Runtime Web WASM CPU. 384-dimensional normalized mean-pooled embeddings; four texts per inference batch, ≤256 tokens, English short summaries. No API key, backend or WebGPU requirement.
- Deterministic cosine matrix; seed with highest average similarity, then repeatedly select the case least similar to its nearest selected case (farthest-point sampling). Ties resolve by source order. This is greedy, not guaranteed globally optimal.
- Baseline is first K input tickets. Displayed coverage is mean nearest-selected cosine across **every input including selected items**. It is recomputed from reviewed selections. It is not confidence, topic recall, audit accuracy or a time-saving claim; the AI sample is not guaranteed to improve it. Exact distinct text counts use trimmed, lowercase strings, not semantic inference.

## Static hosting, devices and caching

React + Vite, base `/daily-app2/20261107-18/`. App code, worker and matching WASM factory are bundled. The byte-identical 26,861,777-byte WASM is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`; preserve this older build when deploying. Total first-run model/runtime download is roughly 50 MB, plus app/worker. Internet is needed for first download from this collection and Hugging Face (including its weight CDN redirects).

Current desktop Chrome/Edge with Web Workers, WASM, Cache API and enough memory recommended. CPU is the tested default, not an untested GPU fallback. Firefox/Safari and physical phones are untested; responsive UI is verified in desktop Chrome at 1440/390/320 widths. Slow devices may hit the 180-second timeout.

Worker source, factory and WASM are explicitly stored in Cache API; Transformers.js caches model files. A successful run followed by **fresh-worker inference in the still-open page with all browser network disabled** is tested. Offline page navigation/startup/reload is **not** promised; there is no service worker. Private mode/cache eviction/storage restrictions may require internet. Clear browser site data to remove caches. Failed downloads never generate fake suggestions. Cancel terminates the worker and permits retry; partial asset caches may remain.

## Privacy and trust boundaries

Default user content remains in memory on-device. There is no remote inference option, API credential, telemetry, content POST or automatic external action. Downloads fetch public model/runtime assets; downloading weights is not uploading tickets. Cache API stores assets, not ticket content. Imports are model data only and cannot request tools or credentials. Exports can contain sensitive source content; the operator controls their download. Only synthetic fixtures are committed.

## Limits and safeguards

2–40 records; CSV ≤18 KB; unique nonempty IDs ≤50 characters; text 1–350 characters; whole-number review budget 1–record count; owner ≤80 characters and note ≤500. CSV parse errors/extra columns rejected. Original rows and order conserved. Finite normalized 384-dimensional vector count validated before sampling. Stale worker/fetch/file results are guarded by generation tokens; input changes cancel active work. Worker construction/errors, unavailable runtime, malformed output, network failure and timeout show actionable errors without substitute AI. Review changes/undo clear export snapshots. Spreadsheet formula-like text is prefixed with an apostrophe in CSV; JSON remains exact and lossless. This intentional CSV safety change is documented and round-trip tested.

## Limitations

Semantic embeddings do not understand operational severity, all negations or specialist meanings. Similar cases may still require separate audits. Sampling favors diversity, not risk or frequency-proportional estimates. Mandatory/high-risk audits belong in a separate policy-controlled process. Review source before relying on suggestions. An assigned owner is only an export field; nobody is notified. Data and review state are not persisted across reloads.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `deploy` is retained by collection contract but **publish only from the root**: root `npm run predeploy`, root `npm run deploy`. Root assembly preserves all prior listed builds. See root README for Pages commit/build verification.

`python3 serve-test.py` serves the production build at port 6198 with the shared WASM path. `node browser-test.cjs` runs real model and defensive checks in Chrome via workspace Playwright. `python3 audit-assets.py` records hashes/credential-pattern checks. `python3 export-roundtrip.py` independently parses browser downloads. See VALIDATION.md and machine-readable evidence for actual outcomes, not build-only AI claims. Fault-injected vectors are used only for defensive tests; successful paths use real model inference.
