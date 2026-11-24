# Vary Ledger

A cache-variation QA worksheet for integration engineers. Match informal response handoffs to documented **Vary contracts**, review every match, then compare exact request-header keys and export reproducible regression fixtures. No websites are fetched, no caches changed and no backend is required.

## Use

1. Choose a synthetic example, paste JSON, or import source/audit `.json` ≤1 MB.
2. `plans`: 2–5 `{id,description,target}` contracts. `target` is a JSON string such as `{"vary":["accept-language"]}`. Headers must be unique lowercase names; `[]` means URL-only, `["*"]` means never reusable.
3. `records`: 1–24 `{id,context,raw}` batches. `raw` is a JSON string containing `{url,requests:[{headers,representation},...]}`. Use 2–8 requests per batch. Representation tags label known distinct responses; they are supplied evidence, not model guesses or fetched bytes.
4. Read the download notice and explicitly load AI. Inspect cosine rankings, correct the selected contract, edit batch JSON and notes, then approve or hold every record. Apply the reviewed scenario.
5. Download full JSON/CSV/Markdown or approved-only Fixtures JSON; copy the worksheet. Fixtures include contract, original request batch and expected keys. **Collisions are deliberately exported as regression evidence, not safe-deployment advice.** Held and invalid cases remain in audits. JSON is lossless; CSV prefixes formula-leading text with an apostrophe.
6. Every edit disables exports until reapplied; contract/batch edits renew approval. Undo restores up to 100 review edits. Reimporting an audit restores originals only, requiring new inference/review.

## Real AI / static runtime / privacy

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8, Apache-2.0; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Normalized mean-pooled 384-dimensional embeddings rank English response context against supplied contract descriptions. This replaces manual exact-label lookup with semantic retrieval. AI never generates header rules or representations. Similarity is **not confidence**; negation and similar descriptions can mislink. Human approval is mandatory.

Initial internet requirement: approximately **23 MB model weights + 27 MB runtime**, plus tokenizer/worker code. Model files download from Hugging Face/CDN (`huggingface.co`, observed `us.aws.cdn.hf.co`). Content stays in browser memory; requests download public files, never upload source text. No API key, remote inference option, analytics, credential integration or account action exists. Do not paste sensitive headers. Cookie/authorization request headers are blocked; arbitrary private text cannot be automatically detected.

Immutable same-origin runtime dependencies:
- `20261115-6/assets/ai.worker-lkOoPoq8.js`
- `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older apps when deploying the collection. `runtime-provenance.json` records hashes and byte sizes. Worker protocol `{id,texts}` returns progress, four-text batches and finite normalized vectors; inspected original implementation under `20261115-6/src/ai.worker.js`. The tokenizer cap is 512 tokens; the worker's max_length option is not relied on to enforce a smaller cap. Each input text is bounded to 200 characters.

Recommended: current desktop Chrome, secure origin, WebAssembly SIMD, module workers and several hundred MB free RAM. No WebGPU needed. Chrome CPU path tested; physical phones, other engines and low-memory devices untested. Download progress, cancellation, errors and 180-second timeout are visible. Cancel terminates workers; run identities guard fetch/file/results against stale replacement. There is no fake fallback.

Cache API stores worker source (`vary-ledger-worker-v1`), factory/WASM (`circuit-cove-runtime-v1`); Transformers.js caches model files. Caches can be evicted/disabled. **Tested offline scope: fresh-worker inference in an already-open warmed page only.** Cold offline navigation/reload is not supported. User content/reviews are never persisted by this app except user-requested exports.

## Deterministic scope / limitations

For each batch, compare every distinct-representation pair using exact URL plus selected header tuples. Missing differs from empty. `Vary:*` always fails reuse. URL-only baseline compares the same supplied requests without header variation. Counts report conflicting pairs and batches differing from that baseline—not AI accuracy, cache certification or time savings.

Assumes GET, identical status and eligibility. No freshness, Cache-Control, authorization, CDN override, URL normalization or actual HTTP cache is modeled. Exact header strings deliberately omit HTTP semantic normalization; this may miss collisions a normalizing cache creates. Equal representation tags do not prove equal bytes. Vary:* is not a substitute for `private`/`no-store`. It only checks selection, not overall caching safety.

Limits: source ≤50,000 characters; IDs ≤60/80; descriptions/context ≤200; contract string ≤6000; batch string ≤2500; parsed value ≤500 nodes, depth ≤8; headers ≤12/request, values ≤200 single-line characters; reviewer note ≤2000. Unsafe prototype-related keys rejected. Duplicate JSON keys follow JSON.parse last-key behavior; avoid them. Imported text is inert data, not tool instructions.

## Build / validation

React + Vite, base `/daily-app2/20261125-2/`. `npm install`, `npm run predeploy`. Required per-app deploy scripts exist but **publish only through root combined predeploy/deploy**, never individual deploy. See `VALIDATION.md` and machine-readable evidence for actual outcomes. Browser scripts use existing workspace Playwright/installed Chrome. `APP_URL`/`PREFIX` selects public or assembled targets. `node oracle-test.mjs` checks independent known-answer key cases; `python3 artifact-test.py` parses actual browser downloads with Python CSV/JSON.
