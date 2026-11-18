# Phase Folio

A daily arrival-window worksheet for operators reconciling recurring delivery/service logs. Real local MiniLM embeddings associate inconsistent arrival descriptions with supplied stream profiles. Human review precedes clock-aware statistics and shortest observed coverage windows; this is not a chat wrapper, forecast or live scheduling service.

## Workflow and formats
1. Try either synthetic example or paste/import JSON with `context`, `referenceClock`, `coverage` (0.5–1), 2–8 `items` (unique ID, label, description), and 1–24 `observations` (unique ID, description, integer `minute` 0–1439).
2. Use one common clock, preferably UTC. Each record is one equally weighted arrival. Do not mix time zones, repeat an event or supply durations/count aggregates. Dates/trends/DST conversion are not modeled.
3. Explicitly load AI. It generates normalized 384-dimensional mean-pooled neural embeddings and ranks supplied stream meanings by cosine. Inspect source descriptions and the top two cosine scores, which are NOT confidence. Correct identity/minute, approve each event, or hold the complete worksheet. Identity/minute changes reset approval; notes allow multiline edits. Undo restores prior review state; originals never change.
4. Apply reviewed plan. Any hold blocks calculation; at least two approved events per stream are required. Change source JSON to edit coverage or profiles, then rerun AI and review.
5. Download JSON (lossless originals/reviews/statistics envelope), CSV (every source and current reviewed event, spreadsheet-formula-protected text), Markdown (worksheet, source register and follow-up checklist), or copy Markdown. Any review edit invalidates applied exports. Audit JSON reimport restores originals only, requiring new inference/approval; no stale approvals are trusted.

## What is AI, what is deterministic
Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Real inference runs on WASM CPU, one thread, four texts per chunk. The worker passes max_length=256, but this pipeline implementation does not enforce that option: the tokenizer ceiling is 512 tokens; each input description is separately bounded to 300 characters. Maximum 32 embedding texts. No API key/provider integration or fake fallback.

AI improves stream reconciliation beyond literal labels. It does not extract or invent timestamps, validate identities, verify log completeness or choose a reliable future schedule. Nearest-neighbor matching always returns a candidate, including for irrelevant or negated text: mandatory human review/hold is essential.

After review, all calculations are deterministic. Map minute m to angle mπ/720, average sine/cosine, and convert atan2 to the circular mean. R is resultant length (concentration, NOT confidence); mean is undefined when R < 0.000001. Multimodal streams can have misleading means even when R is nonzero. The linear mean baseline averages ordinary minute numbers and ignores midnight. Both means are compared by mean shortest clock distance to the actual events; neither generally minimizes absolute distance.

The coverage window is the shortest clockwise arc containing at least ceil(coverage × n) observed events. Sort clock minutes, consider each observed minute as a start and wrap the kth event into the next day. Choose minimum width, ties by earliest starting minute. Count all events on inclusive arc endpoints (duplicates may make actual coverage exceed the target). Midnight crossing is explicit. The minimum observed arc is not a confidence interval or future coverage guarantee. No staffing, dispatch, notifications or external actions are performed.

## Runtime / device / download / privacy
First explicit load needs internet: approximately 23 MB model weights + 27 MB WASM plus small tokenizer/factory files. WebAssembly SIMD, module workers, Cache API and several hundred MB RAM required; no WebGPU needed. Actual desktop Chrome CPU tested. Phone-sized viewports tested, not physical phones or other browser engines.

Immutable same-origin dependencies:
- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
Preserve originating builds. Asset audits record SHA-256 and production/public byte matching. Reuse avoids redundant runtime bytes in the static collection.

Only static file downloads from this origin, Hugging Face and `*.hf.co` CDN occur. Source text goes to a local worker, not a server; no analytics, credential collection, upload or remote inference. Imported instructions are inert data. Source/reviews stay in page memory, lost on reload unless exported. Only synthetic fixtures are committed. Request audits persist no signed CDN query values.

Cache API stores worker source, runtime factory/binary and model files. **Fresh-worker inference in an already-open warmed page** is tested with browser networking disabled. Offline app-shell startup/navigation/reload is NOT supported/promised. Denied storage, eviction or model-host changes require downloading again. Explicit loading includes file progress, cancellation, retry and 180-second timeout. Workers terminate on cancellation/input change; run identities guard late fetches/messages/file imports. Network/runtime/malformed-vector errors never produce synthetic suggestions.

## Limits and validation
50,000 source characters; 300-character context/referenceClock/labels/descriptions; 1,000-character review notes. JSON import under 2 MB (larger envelope allowance for full reviewed audits). Duplicate IDs, invalid numbers/shape, >24 events, missing stream coverage, unknown reviews, invalid vectors and pending approvals are blocked. Reviewed times must be whole clock minutes 0–1439.

See [VALIDATION.md](VALIDATION.md) for observed results, known-answer fixtures, artifact round trips, offline, error injection, privacy and responsive checks. Tests are not a universal accuracy/time-saving claim. `core-test.mjs` compares 300 deterministic random cases with an independent exhaustive endpoint oracle; browser scripts use installed Playwright and Chrome.

## Build / publication
React + Vite; `npm install`; `npm run predeploy`. Base `/daily-app2/20261119-4/`. Per-app predeploy/deploy scripts and gh-pages dependency are retained, but publishing must use repository ROOT `npm run predeploy` and `npm run deploy` to preserve the combined collection. Never deploy this app alone.

### Collection size preservation
Root assembly exceeded its conservative 1,000,000,000-byte guard by 151,055 bytes with this app. Deploy-only byte-identical manifold WASM reuse was extended to legacy `20261030-27`, sharing `20261028-24/assets/manifold-BE4c7gO-.wasm` without modifying either source build or removing apps. Vite browser-external diagnostic stubs mention worker filenames but are not HTML entry points; the deployment rewriter now excludes these inert warning strings from entry rewriting. Actual legacy worker geometry, imported-image processing and downloaded STL are tested before publication. See legacy-runtime validation and deployment runtime-deduplication reports.
