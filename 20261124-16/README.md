# Backoff Bench

For integration engineers who receive mixed operation handoffs and must create replay QA cases. Paste/import a synthetic JSON batch, edit operation contracts and constraints, explicitly load the real model, review/edit or hold each match, apply the reviewed scenario, then download JSON/CSV/Markdown or approved release JSON fixtures. Nothing sends requests, schedules retries, or stores actual idempotency keys. `keyConfirmed` is only a boolean assertion; do not paste secrets.

## Real AI and why

Xenova/all-MiniLM-L6-v2, quantized q8, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2 (Apache-2.0) uses ONNX Runtime Web WASM CPU (MIT). Normalized mean-pooled 384-dimensional neural embeddings retrieve an operation contract from an English handoff note without relying on exact words. User-supplied descriptions are the only semantic anchors; no hard-coded response table. Cosine similarity is evidence, not confidence. Negation, mixed intents and indistinguishable descriptions can fail; every case requires human approval or hold. AI does not infer server guarantees, retry status semantics, credentials, or timing values.

Shared immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps when publishing. See runtime-provenance.json for hashes. The worker uses feature-extraction q8 CPU, normalized mean pooling, 4-text chunks. Installed tokenizer enforces model_max_length 512; the worker's max_length option is not advertised as a stricter guaranteed cap. Each text is bounded to 200 characters.

## Download, device and privacy

Explicit load required; initially approximately 23 MB weights + 27 MB WASM, plus tokenizer/code files. Model/config downloads use Hugging Face and its CDN; worker/runtime use this site. Default content remains in browser worker memory. No remote inference, analytics, shared credentials, keys, POSTs or user-content URL parameters. Real model inference is no-key. Current desktop Chrome with module workers, Cache API, Blob modules and WebAssembly SIMD tested. CPU path does not require WebGPU. Several hundred MB free RAM recommended; mobile viewports tested in desktop emulation, physical phones and other engines untested.

Worker/runtime use Cache API; Transformers.js caches model files. Eviction/private-mode quotas can force fresh downloads. Only fresh-worker inference in an already-open, warmed page is claimed offline, not cold navigation/app-shell reload. Cancel terminates worker and invalidates run ID; a 180-second timeout, worker fetch/errors, unsupported capability, invalid vectors and failed model downloads surface errors with retry. Input changes invalidate old runs, pending file reads and export snapshots. No fallback fabricates AI.

## Input and deterministic subset

Source JSON `{plans,records}`. Two to five unique contracts: `{id,description,replay,baseSeconds,capSeconds,maxRetries}`. Replay: `safe`, `key-required`, `never`; these are explicit service contracts, not assumptions from HTTP method. Integer base 1–3600 seconds, cap between base and 86400, retries 0–10. One to 24 unique records: `{id,context,raw}`. `raw` is a JSON string with exactly `attempt,status,now,deadline,retryAfter,keyConfirmed`. `attempt` is the NEXT retry ordinal, 1–10. Only 429/503 are retryable in this limited worksheet. UTC instants must be exact YYYY-MM-DDTHH:MM:SSZ, valid calendar dates, with deadline at/after now and within seven days. Retry-After is empty, 0–999999999 whole seconds, or exact IMF-fixdate including correct weekday. A past date has zero remaining wait. Case validation errors remain visible and blocked, never dropped.

Backoff = min(capSeconds, baseSeconds × 2^(attempt−1)); required wait = max(backoff, server minimum). Server wait is never capped. Stop if status unsupported, replay forbidden, keyed contract unconfirmed, ordinal exceeds limit, or earliest retry exceeds deadline. Equality at deadline is allowed. No jitter, network execution, automatic HTTP-date clock-skew correction, distributed-client coordination or general HTTP parser. `keyConfirmed` means the reviewer has confirmed server-supported idempotency AND reuse of the original key. A key by itself does not make replay safe. These are illustrative QA fixtures, not an operational retry client.

Inputs: ≤50,000 source characters; descriptions/context ≤200; IDs ≤60/80; raw case ≤1500; review note ≤2000. Source/audit `.json` files ≤1 MB; audit reimport restores originals only and requires fresh inference/review. Text remains inert data, never tool instructions. Examples are entirely synthetic.

## Review and exports

Every case starts pending. Correct contract/case or hold; source and ranking evidence remain visible. Editing a contract or case resets approval; all edits invalidate applied exports. Undo restores prior review, not hidden external state. Apply requires every case approved/held. JSON audit retains every original, review, blocked case, and metric. CSV includes every source/review and escapes formula-leading strings; JSON retains exact strings. Markdown is a plain-text worksheet (do not render untrusted imported Markdown as HTML). Release JSON includes every approved valid case with expected retry/stop and exact timestamp; stop decisions are actionable test outcomes, not blocked records. Clipboard uses current applied Markdown. No output changes external systems.

Baseline: retry every valid case at capped local exponential delay, ignoring status/replay policy/server minimum/limit/deadline. Counts show computed action/timing differences, not accuracy, time saved, or live success rates. Holding/invalid cases are excluded from this comparison and retained in audit counts.

## Development and publishing

`npm install`; `npm run dev`; `npm run predeploy`. Required per-app deploy script exists but **do not run it**: publish the combined collection from its root only. Vite base `/daily-app2/20261124-16/`. Tests use local Playwright installed in the agent workspace (not a production dependency). `node core-test.mjs`, `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `python3 static-test.py`. APP_URL/PREFIX configure browser checks; ASSET_BASE/PREFIX configure assembled/public asset audits. See VALIDATION.md for actual observations and known limitations, not just build success.
