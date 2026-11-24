# Freshness Ledger

A local-first cache QA worksheet for API engineers. Mixed handoff notes often omit explicit cache policy names; AI retrieves likely contracts, then exact age arithmetic exposes stale upstream responses that look fresh by receipt time alone. This is not a chat app or an HTTP client.

## Workflow

1. Choose either synthetic fixture or paste/import JSON. `plans` contain unique `id`, English `description`, integer `maxAge` (0–86400 seconds) and boolean `noCache`. `records` contain unique `id`, `context` and `raw` (a JSON string with exactly `requestTime`, `responseTime`, `date`, `now`, `age`). All times are nonnegative integer seconds on a shared clock, ≤2 billion; require requestTime ≤ responseTime ≤ now.
2. Explicitly click **Load AI & reconcile**. Inspect source context, original timeline, all cosine scores, selected contract and corrected-age witnesses. Edit each contract selection/timeline and approve or hold every case. Contract/timeline edits reset approval; all edits invalidate the applied snapshot. Undo restores prior reviews; originals never change.
3. Apply. Invalid timelines are blocked, held cases stay held; both remain in the audit. Review computed baseline differences and expected fresh/revalidate decisions.
4. Download complete JSON/CSV/Markdown or approved-valid-only Release JSON test cases; copy Markdown. Exports reflect the current applied snapshot. Importing an audit restores originals only and requires fresh inference/review. CSV protects formula-leading text; JSON preserves exact text including multiline notes.

Example raw case: `{"requestTime":1000,"responseTime":1010,"date":1005,"now":1020,"age":295}`. Under 300 seconds, corrected initial age is max(5,295+10)=305; current age is 315, so revalidate. A residence-only baseline sees 10 seconds and falsely labels it fresh. At exact expiry equality is stale. `noCache` always requests origin validation, even with remaining lifetime.

## Real AI / runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0 (MiniLM/Sentence Transformers family). Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web, MIT.
- Actual neural feature extraction runs on WASM CPU, normalized mean pooling, 384 dimensions. Dot products retrieve the best English content-contract description; cosine is similarity, **not confidence**. Finite unit vectors/count/dimension are validated before suggestions.
- Shared immutable worker: `20261115-6/assets/ai.worker-lkOoPoq8.js`; local factory `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these published dependencies. Hashes in `runtime-provenance.json`.
- Four texts per inference chunk; tokenizer effective `model_max_length` is 512 (the shared pipeline's requested max_length 256 does not establish a stricter cap). Descriptions/contexts ≤200 characters bound this app's model inputs. Model registry revision is upstream `main`, not immutable; future changes may alter behavior.
- First load needs internet and approximately 23 MB weights + 27 MB CPU WASM, plus worker/factory/tokenizer/code. Weights download from Hugging Face/CDN; runtime stays same-origin. Current desktop Chrome, module workers, WebAssembly SIMD and several hundred MB free RAM recommended. No WebGPU requirement. Other engines and physical phones untested.
- Worker and runtime use Cache API, model files Transformers.js cache. Eviction possible. Tested offline claim is **fresh-worker inference in an already-open warmed page only**; not cold reload/navigation. Progress, cancel, retry, 180-second timeout, model/network/worker/runtime/schema errors have explicit states; never fake AI fallback. Cancel terminates workers; run IDs guard delayed fetches and messages.

## Deterministic checks and limits

RFC 9111 §4.2.3 age arithmetic: apparent_age=max(0,responseTime-date); response_delay=responseTime-requestTime; corrected_age_value=age+response_delay; corrected_initial_age=max(apparent_age,corrected_age_value); current_age=corrected_initial_age+(now-responseTime). Fresh iff !noCache and current_age < maxAge. Remaining=max(0,maxAge-current_age) does not override noCache. Baseline compares residence time alone with lifetime, ignoring upstream Age, transfer delay and noCache; differences are computed fixture outcomes, **not** accuracy, time saved or observed server performance.

2–5 contracts, 1–24 records, IDs ≤60/80 characters, descriptions/contexts ≤200, raw case ≤1500, reviewer note ≤2000, source ≤50,000 characters; JSON file ≤1 MB (audit envelopes may be larger than source). No lost records: audits retain every source/review/check. Invalid sources cannot start inference. Unsupported file formats rejected.

Supported subset: already-stored, otherwise reusable responses with explicitly supplied lifetime/noCache. No header/date parsing, s-maxage, Expires, Vary, authorization, cacheability/storage permission, request directives, stale allowances or live endpoint verification. A “fresh” answer is not proof that reuse is safe or legal. AI can confuse negation, content types and mixed intent; every assignment requires review. No remote actions.

## Privacy / deployment

No API keys, remote inference, analytics, content upload, URL fetching or persistence of imported content. Only model/runtime downloads occur after explicit invocation. Inputs are inert data and cannot request tools, change authority or ask for credentials. Synthetic fixtures only. Export files are user-initiated. No optional providers.

React + Vite; base `/daily-app2/20261124-14/`. `npm install`, `npm run predeploy`. Per-app deploy is retained by contract but **do not run it**: publish only the combined collection through root `npm run predeploy` / `npm run deploy`.

The collection reuses byte-identical legacy geometry WASM for `20261106-11` from immutable `20261028-24` in the deploy tree only. The original source builds and compatibility JS paths remain intact, query-versioned imports avoid stale worker caches. This preserves the unchanged 1,000,000,000-byte guard without dropping older apps. See `legacy-runtime-sharing.json` and local/public legacy checks.

## Validation

See [VALIDATION.md](VALIDATION.md), executable browser/defensive/stale/core/oracle/artifact tests and saved observations. No physical-device, cross-engine, cold-offline or real-server claims.
