# Pointer Workshop

For configuration reviewers turning repeated informal change requests into guarded, independently testable JSON Patch fixtures. This is not a remote editor or generic chatbot.

## Workflow

1. Choose a synthetic example, paste JSON, or import a source/audit `.json` file. Edit the `plans` catalog: ID, English description, RFC 6901 pointer and scalar type. Each `records` entry has ID, English context and `raw`, a JSON string containing exactly `{document: object, value: scalar}`. **Each record is an independent document snapshot, not a cumulative transaction.**
2. Explicitly load AI. It embeds field descriptions and requests, then ranks cosine similarity to suggest one field per request. Review source snippets and all ranked scores; these are not confidence probabilities.
3. Edit the target and/or payload. Verify intent, pointer, current value and replacement; approve or hold every request. Any content/target edit renews approval; all edits invalidate applied exports. Undo restores the previous review. Original inputs remain intact.
4. Apply the reviewed scenario to an in-app result only. Deterministic pointer decoding, existing-index and scalar-type checks produce `test` then `replace` operations. Invalid approved cases are blocked, never released.
5. Download complete JSON/CSV/Markdown audits, or Release JSON containing approved fixture cases (`document`, RFC 6902 `patch` array, `expectedDocument`). Extract each patch array for your validator. Copy worksheet is also available. Reimport audits restores originals, requiring new inference/review.

## Real AI and static runtime

- `Xenova/all-MiniLM-L6-v2` q8, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web WASM, MIT. Normalized mean-pooled 384-dimensional embeddings run in a module worker on CPU. No WebGPU, API key or paid provider needed.
- Explicit initial download: approximately 23 MB weights, 27 MB WASM plus tokenizer and code. Model host Hugging Face and its download CDN; internet required for the first run. No inference occurs before clicking Load AI.
- Immutable same-origin shared worker: `../20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these published apps. SHA-256/bytes in runtime-provenance.json. Worker protocol was inspected: input `{id,texts}`, progress/batch/result/error messages, four-text batches; vectors validated for count, dimension, finiteness and approximate unit norm. Tokenizer configuration cap is 512, not the pipeline call's unenforced 256 hint.
- Current desktop Chrome with WebAssembly SIMD, module workers, secure origin and several hundred MB free RAM recommended. Tested Chrome headless CPU, including `--disable-gpu`; physical phones and other engines untested. Phone-sized layout checks do not imply phone model-performance checks.
- Cancel terminates the worker. Run identity also guards downloads, file reads, and callbacks. 180-second timeout; retry on network/device error. No fake or deterministic AI fallback. Missing WebAssembly/workers, construction/runtime errors and malformed vectors surface actionable errors.
- Cache API stores worker/factory/WASM; Transformers.js stores downloaded model files. Subject to storage availability/eviction. **Tested offline: a fresh worker can infer inside an already-open warmed page. Cold offline navigation/reload is not supported or promised.**

## Privacy and limits

No user content upload, analytics, external provider integration, endpoint calls or credential input. Network requests are runtime/model downloads. All document processing stays local; imported strings never confer tool authority. Source/reviews live in page memory and exports, not localStorage. Runtime/model files (not your content) are cached. Closing the page loses unexported work. Never paste production secrets.

2–5 fields, 1–24 records, ≤200 characters per description/context, raw JSON ≤3500, source ≤50,000 characters; import source/audit ≤1 MB. Bounded four-text chunks and 180-second timeout. Each document ≤300 nodes and 12 levels. Non-root pointers ≤240 characters and 8 segments, strict `~0`/`~1` decoding; array indices must be canonical and already exist. String, number, boolean and null replacements must preserve existing scalar type. No add/remove/move/copy/append or whole-document replacement. Prototype-related keys blocked. Numbers finite and within safe integer magnitude, but binary decimal rounding still applies. Duplicate JSON object keys use standard last-value parsing; no duplicate-key detector. No schema/business-rule validation.

Semantic matching may confuse negation or closely related fields. The adversarial negation fixture selected billing email instead of the intended theme. Always review intent; model similarity is not authorization. Test guards protect only the selected old scalar, not document version or unrelated fields. Atomic patch execution depends on the receiving system. This app performs no external writes.

## Comparison and artifacts

Baseline splits `/` literally, ignoring RFC 6901 `~1`/`~0`. Displayed baseline failures are measured only among approved valid cases. Changed counts reflect actual before/value differences. Neither is accuracy, time saved or a percentage improvement. JSON is lossless for supported JSON values; CSV quotes cells and protects formula-leading text with an apostrophe, retaining exact originals in JSON. CSV contains one row per original including held/blocked. Markdown quotes source and reviewed data as JSON.

## Validation

See VALIDATION.md and machine-readable reports. `npm run predeploy` builds; per-app `deploy` is required metadata only. Publish from the root combined-site workflow, never this folder's deploy command. Root gallery preserves older categories. Synthetic fixtures only.
