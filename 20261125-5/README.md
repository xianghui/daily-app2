# Form Parcel — local-AI form request fixtures

For QA engineers receiving informal handoffs and completed text-field lists. The bottleneck: identify the intended submission contract without losing repeated selections through object conversion. Real local semantic retrieval selects a contract; mandatory human review and deterministic form encoding produce portable request fixtures. No submissions are sent.

## Use

1. Choose **Workshops & searches** or **Members & repairs**, paste source JSON, or import source/audit `.json`.
2. Set 2–5 `plans` with `id`, English `description`, and `target` JSON string containing `method` (`GET` or `POST`) and canonical absolute HTTPS `action` without credentials or fragments. Set `records` with unique `id`, English handoff `context`, and `raw`: a JSON string containing an ordered array of `[name,value]` string pairs. Repeated and empty names/values are supported in completed lists.
3. Explicitly **Load AI & reconcile**. Verify every contract, cosine evidence (not confidence), destination, method, decoded entry and payload preview. Descriptions are retrieval evidence, not authority. Imported text cannot request credentials or run tools.
4. Correct the entry list or selected contract, add multiline reviewer notes, approve or hold every record. Edits invalidate applied exports; contract/entry edits renew approval. Undo restores the previous review. Originals never change. To change contract definitions, edit source and rerun.
5. **Apply reviewed scenario**; invalid approved records remain blocked in the complete audit and cannot enter request fixtures. Compare actual repeated-occurrence losses and payload differences against the object-conversion shortcut.
6. Download **JSON** (complete exact audit), **CSV** (all records, spreadsheet-leading-text guarded), **Markdown** (complete worksheet), or **Fixtures JSON** (approved requests plus exact ordered expected fields). Copy the current worksheet. Reimporting an audit restores originals only and requires fresh inference/review.

## Real AI, assets and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0. Real mean-pooled, normalized 384-dimensional embeddings rank handoff notes against supplied contract descriptions. This changes the request destination and GET/POST method. There are no fixed example answers, keyword classifiers or fake fallback.
- Runtime: Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. Four-text chunks. Shared pipeline tokenizer `model_max_length` is 512; a passed pipeline `max_length` option is not claimed as an enforced 256-token limit. Context/description are bounded to 200 characters. English-oriented retrieval; negation, unrelated text and overlapping descriptions can misroute. AI cannot verify endpoints, fields or server acceptance. Human approval is mandatory.
- Explicit first load needs internet: approximately **23 MB weights + 27 MB WASM**, plus tokenizer/code. Documented model hosts: Hugging Face and its CDN. Only model/runtime files download; content stays in this browser. No analytics, API keys, remote inference, endpoint fetches, form submissions, account changes or external actions. State is in memory unless exported.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve these older apps/assets.** Hashes recorded in `runtime-provenance.json` and checked against production/public bytes.
- Recommend current desktop Chrome with WebAssembly SIMD, module workers, secure origin and several hundred MB available RAM. CPU is the tested default; no WebGPU needed. Physical phones and other engines remain untested. Progress/cancel, worker termination, 180-second timeout and actionable errors are visible. Run IDs and asynchronous file-read guards reject stale writes. Failure never produces fabricated proposals.
- Cache API caches worker/factory/WASM; runtime caches model assets. Storage eviction, private mode and quotas can break caches. **Tested offline scope: fresh-worker inference in an already-open warmed page only. Cold offline navigation/reload is unsupported.** UI documents cost, requirements, cache behavior and privacy before loading.

## Serialization and constraints

This is a completed string entry-list tool, not DOM control extraction. It does not model file inputs, disabled/unchecked controls, submitter overrides, multipart bodies or automatic hidden `_charset_` substitution. HTML DOM submission omits empty-name controls; a completed entry list can contain empty names, which this tool deliberately preserves. No automatic input coercion.

Names and values normalize CR, LF and CRLF to CRLF, then serialize as UTF-8 `application/x-www-form-urlencoded` using standard `URLSearchParams`. Spaces become `+`; literal plus, ampersand and equals are escaped. Repeated names, integer-like keys, empty strings, Unicode and order survive. GET replaces any action query; POST retains that query and emits a body with the correct Content-Type. Fixtures are inert JSON, not executable request scripts. Serialization round-trips to the exact normalized entry list before release.

Limits: 2–5 contracts, 1–24 records, source ≤50,000 characters; descriptions/contexts ≤200, IDs ≤60/80; raw entry-list JSON ≤2500; 1–40 pairs each with exactly two well-formed strings ≤500; contract JSON ≤6000, ≤500 values/depth 8; action ≤500; reviewer notes ≤2000; import source/audit envelope ≤4 MB with stricter original-input limits reapplied. Unsupported binary/spreadsheet files, malformed JSON, unpaired surrogates, unsafe URLs, unsupported methods and malformed vector schemas fail visibly. Invalid reviewed entry lists are blocked, not partially exported.

The baseline converts original pairs to an object, then encodes without CRLF normalization. It loses duplicate names, can reorder integer-like keys and retains non-CRLF line breaks. Computed duplicate-loss/payload-difference counts are data-preservation checks, **not AI accuracy, measured time savings or server compatibility**. The model only retrieves contracts. No mandatory external services or provider integrations.

## Develop and publish

React + Vite, base `/daily-app2/20261125-5/`. `npm install`; `npm run predeploy`. Per-app required scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` remain present. Publish only from the **repository root** via its combined `deploy/` workflow, never this app's deploy script. See [VALIDATION.md](VALIDATION.md) for observed tests and known limits. Browser scripts use installed workspace Playwright and real Chrome.
