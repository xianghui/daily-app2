# Flag Harbor

A local-AI tri-state import preflight for data migration and operations teams. Reconcile mixed flag conventions without treating nonempty strings such as `"false"` as true, or silently converting unknowns to false. No subscriptions, devices, databases or inspection systems are changed.

## Workflow

1. Choose **Migration desk** or **Recheck queue**, paste JSON, or import `.json` source/audit. All samples are synthetic. Set each dictionary's description, destination field, true/false/null lists and explicit `trim`/`caseFold` constraints in the source editor.
2. Read the device/download disclosure, then explicitly **Load AI & reconcile**. Real MiniLM embeddings compare each source context with the supplied dictionary descriptions. Raw lexical tokens do not enter AI. Cosine similarity ranks conventions, not confidence or polarity entailment.
3. Inspect the original note/token, ranked evidence and full proposed dictionary. Correct the dictionary or token; approve or hold every row. Token/profile edits renew approval; review notes are multiline. Undo edits without altering originals.
4. **Apply reviewed scenario**. Deterministic code matches normalized tokens to disjoint lists, yielding a real Boolean or null. Unknown tokens are blocked, not guessed. Hold excludes a row from release; audit outputs preserve every row.
5. Download complete JSON/CSV/Markdown or approved-recognized-only **Typed JSON**, or copy Markdown. Applied outputs are invalidated after any review edit. Reimporting an audit restores originals only and requires fresh inference/review.

The baseline is JavaScript `Boolean(reviewedRawString)`: every nonempty string is true and an empty string is false. Differences compare the same reviewed data with explicit typed conversion, not model accuracy, measured time savings or universal correct interpretation. Null remains a real JSON null; CSV's `canonical_json` explicitly contains `true`, `false` or `null`, never an ambiguous empty unknown. Held/blocked rows have no canonical value. Output is a flat list of `{id,field,value}` objects, not updates to a remote schema or a merged record table.

## Real AI and data flow

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX ≈23 MB. Mean pooling, normalized 384-dimensional embeddings, batch size four; result count/dimensions/finiteness/normalization validated before ranking.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WebAssembly CPU. No WebGPU needed. The inherited pipeline's `max_length:256` does not enforce a 256-token cap; tokenizer configuration is 512, with all source context and description strings additionally bounded to 200 characters.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, ≈27 MB WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/assets. These are the actual compiled protocol-compatible worker/runtime, not server calls. The worker requests model revision `main`; upstream changes can affect suggestions.
- First explicit run requires internet to download model files from Hugging Face/CDN plus same-origin runtime files. User context, tokens and dictionaries remain in browser memory; all successful requests are GET file downloads, not content uploads. No analytics, localStorage design persistence, remote provider integration, shared keys or credentials. Explicit exports/clipboard move the data only at the user's request. Text is inert data, not tool authority.
- Worker source uses Cache API `flag-harbor-worker-v1`; inherited factory/WASM and Transformers.js model caches store public runtime/model files. After a full online run, fresh-worker inference in an **already-open warmed page** is tested with all network disabled. Cold offline navigation/reload is not promised. Cache eviction/private mode can require internet again.
- File-level download progress and text-batch progress are shown. Cancel terminates the worker; run IDs guard delayed source fetches, file reads and callbacks. Timeout is 180 seconds; retry is explicit. Construction/runtime/network/malformed-vector failures stop without canned results.

## Formats and bounds

```json
{"plans":[{"id":"device","description":"Equipment enabled active status","field":"device_enabled","trueTokens":["1","true","on"],"falseTokens":["0","false","off"],"nullTokens":["","unknown"],"trim":true,"caseFold":true},{"id":"inspection","description":"Quality acceptance pass fail inspection result","field":"inspection_passed","trueTokens":["pass"],"falseTokens":["fail"],"nullTokens":["pending"],"trim":true,"caseFold":true}],"records":[{"id":"sample","context":"Machine enabled equipment status","raw":"false"}]}
```

2–5 profiles, 1–24 independent records; unique profile IDs ≤60 and record IDs ≤80; descriptions/context ≤200. Destination fields use `[a-z][a-z0-9_]*` ≤60. Each of the three lists contains 1–12 strings ≤80; duplicate and cross-class overlap after normalization are rejected. Empty string is allowed as a token. Raw values must be strings ≤200: no implicit JSON number/Boolean coercion. Source JSON ≤24,000 characters; imports ≤1 MB, with a separate bounded original-input check so maximum-batch audits can round-trip. Review notes ≤2,000 characters. Unicode case handling is JavaScript lowercase, not locale-specific caseless equivalence. Trimming uses JavaScript trim. No fuzzy token repair.

Full JSON preserves exact original/review strings, evidence and every row's status. CSV quotes embedded commas/quotes/newlines with CRLF records and prefixes formula-leading textual fields (`= + - @ tab CR`) with an apostrophe. This intentional spreadsheet protection is not byte-identical text; JSON is lossless. Markdown includes source, review, check and computed count objects. Typed JSON excludes all held/blocked rows, preserving actual true/false/null types and source IDs. Ready results are a worksheet, not proof that a production target accepts its field names or null policy.

## Requirements and limitations

Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB available RAM tested; primary inference has GPU disabled. Physical phones and other browser engines untested; desktop-emulated 320/390 px layouts checked. No claim of model suitability on every phone.

Observed quality: both simple synthetic batches matched 6/6 conventions each. A negation challenge (not equipment status, actually newsletter unsubscribe) incorrectly selected device. A same-token context-only probe correctly switched between mail and device, producing opposite Boolean values. These are tiny fixture outcomes, not general accuracy.

Mandatory human review is essential: similarity is not logical entailment or proof of consent, field polarity, equipment readiness or inspection validity. Model matching uses context, never token validity. Bad dictionaries can produce valid but wrong values. Verify the source's documented coding scheme and destination semantics; inspect negative/ambiguous wording. No dictionary generation, remote account changes, consent decisions, external actions, locale-specific coercion or automatic row merging.

## Development and deployment

React + Vite, base `/daily-app2/20261123-20/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish only through root predeploy/deploy**, never the individual app deploy. Existing size guard is preserved. Deploy-only byte-identical geometry runtime sharing additionally covers `20261029-27` → `20261028-24`, leaving source builds and compatibility JS paths intact; actual affected legacy worker/import/export/restoration is regression-tested. See VALIDATION.md for observed checks and publication status.
