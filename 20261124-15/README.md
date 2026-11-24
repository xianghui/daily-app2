# Disposition Desk

Export engineers repeatedly reconcile informal delivery handoffs with attachment/inline contracts and international download filenames. This app proposes audience-profile links with real local AI, requires human review, and produces Content-Disposition QA fixtures. It never sends HTTP requests to a supplied endpoint or changes a server.

## Workflow
1. Choose a synthetic example or paste/import JSON. Edit 2–5 profiles (`id`, `description`, `disposition`: `inline` or `attachment`) and 1–24 records (`id`, English `context`, `raw`: JSON string containing `filename` and `fallback`).
2. Explicitly load AI. Initial internet download is approximately 23 MB quantized model plus 27 MB CPU runtime, tokenizer/code overhead. Cancellation terminates the worker; errors produce no fake results. Retry is explicit.
3. Inspect cosine evidence and original names. Correct the proposed profile and editable names, supply printable ASCII fallback, approve or hold every case, and add notes. Undo is available. Changes invalidate the export snapshot; profile/name changes require renewed approval.
4. Apply reviewed scenario. Invalid approved names are retained as blocked audit rows; held/blocked rows never enter release fixtures.
5. Download complete JSON, CSV, Markdown, approved-only Release JSON, or copy Markdown. JSON reimport restores originals only and requires new AI/review. CSV formula-leading text receives a protective apostrophe; exact text remains in JSON. The exported header is inert data, never installed or requested.

## Real AI and deterministic processing
Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Mean-pooled normalized 384-dimensional neural embeddings rank record contexts against editable delivery descriptions. Model source is Hugging Face/CDN; it is not a classifier trained for HTTP security. It materially selects inline/attachment intent; changing only context can change the resulting disposition. Similarity is not confidence. Negation/mixed-domain notes can misroute; every recommendation requires human review.

Filename validation, ASCII quoted-string escaping, RFC 8187 UTF-8 extended encoding, decoding checks, counts and export are deterministic. The baseline inserts the original name into an unescaped ASCII quoted parameter without filename*. Differences count valid reviewed cases where that baseline is unsafe/lossy. No measured productivity/accuracy claim.

Same-origin immutable shared dependencies (preserve their originating apps):
- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

See runtime-provenance.json for exact source hashes. Worker protocol: `{id,texts}` → progress/batch → `{id,type:'result',vectors}` or error. Four-text chunks; finite normalized vectors are schema-validated. Effective tokenizer model_max_length is 512 (pipeline max_length request is not treated as a stricter guarantee). Descriptions/contexts capped at 200 characters. The shared runtime is bundled code, not a remote inference service.

## Privacy, caching and devices
No keys, paid provider, analytics or remote content inference. Context strings enter only the local worker. Network activity downloads static runtime/model files on explicit load; filenames and notes are not sent. Current desktop Chrome with WebAssembly SIMD/module workers tested; several hundred MB RAM recommended. WebGPU is not needed; CPU is the primary tested path. Other engines and physical phones untested.

Cache API stores worker and WASM/factory; Transformers.js caches weights. Fresh-worker offline inference is supported only in an already-open page after successful online loading. Cold offline navigation/reload is NOT promised. Storage eviction, private mode and network restrictions can break caches; reconnect and retry. A 180-second timeout and run IDs prevent delayed/cancelled results replacing newer work. Import reads use the same invalidation guard.

## Bounds and supported output subset
Source ≤50,000 characters; JSON file ≤1 MB; unique record IDs ≤80, profile IDs ≤60; raw cases ≤1500; notes ≤2000. Names ≤180 UTF-16 units with no edge spaces, path separators, controls/C1, bidi formatting, lone surrogates or dot-only names. Exactly filename/fallback fields; printable ASCII fallback required. UTF-8 extended parameter plus escaped ASCII fallback emitted for each valid case.

This is header-fixture preparation, **not** a filesystem sanitizer, full HTTP parser, extension/MIME validator or a guarantee that a browser saves a name unchanged. Reserved device names, platform naming rules, confusables, authorization, content security and real server/browser integration remain outside scope. No endpoints are called. Imported instructions are inert text and cannot request credentials or tool execution. Fixtures and reports contain synthetic data only.

## Build / collection publishing
`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261124-15/`. Required per-app deploy script exists but publishing must run from the ROOT collection with `npm run predeploy` then `npm run deploy`, retaining all older apps.

## Validation
See VALIDATION.md and machine-readable browser/artifact/core/defensive reports for observed results, limitations and commands. These are tiny synthetic checks, not general accuracy estimates.
