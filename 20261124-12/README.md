# Patch Ledger — guarded change worksheets

A local-first worksheet for turning informal change requests into reviewed, guarded JSON Patch fixtures. Unlike the collection's audit and reporting apps, this prepares **independent test cases with a `test` guard**, not a combined transaction, a live endpoint call, or an applied change.

## Use

1. Choose either synthetic example, paste JSON or import source/audit `.json`. Supply 2–5 `plans` (`id`, English `description`, RFC 6901 `pointer`) and 1–24 `records` (`id`, English `context`, `raw`). `raw` is a JSON string containing only `snapshot`, `current` and `value`. Descriptions are your semantic goal; pointers are explicit target constraints. Edit contracts in the source before inference.
2. Explicitly load AI. Review every source-linked contract and ranked cosine evidence. Correct the target field or the case document, write a multiline note, then approve or hold every case. Similarity is not confidence; unrelated notes still receive a closest match. No automatic release.
3. Apply the reviewed scenario. Invalid cases remain blocked in the complete audit. All review edits invalidate the export snapshot; target/case edits reset approval. Undo restores the previous review state. Originals are never overwritten.
4. Download complete JSON, spreadsheet-protected CSV, Markdown or approved-only Release JSON. Copy the current worksheet. Reimporting an audit restores original inputs only, never trusted approvals. Nothing contacts an endpoint or sends requests.

## Actual AI and local runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, produces real normalized mean-pooled 384-dimensional embeddings. English change-note contexts and target-field descriptions are compared by dot product to retrieve paraphrased intent. [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web, MIT; one-thread WASM CPU, four texts/chunk. The shared worker requests max_length 256, but feature extraction uses the tokenizer's actual model_max_length of **512**. Inputs are bounded to 200 characters per semantic text; token-dense strings can truncate. The model does not generate pointers, prove JSON Patch semantics, or verify that a request is legitimate. Negation can misroute; verify every intent.

Initial internet download approximately **23 MB weights + 27 MB CPU runtime**, plus code/tokenizer. Hugging Face and its CDN host model files. Runtime/worker assets are same-origin, immutable existing collection assets: worker and factory from `20261115-6`, WASM from `20261107-2`. Preserve these apps/paths. `runtime-provenance.json` records hashes; no duplicate runtime needs deployment. React + Vite keeps this app small without changing the collection size guard.

Current desktop Chrome with WebAssembly SIMD and module workers is tested; several hundred MB free RAM recommended. No WebGPU, API key, paid service, remote model or agent credential is needed. Other engines and physical phones are untested.

## Privacy, caching and errors

Content, reviews and notes remain in volatile browser memory. Only static GET file downloads occur; no content in URLs/bodies, analytics, localStorage or content caches. Cache API stores worker, CPU factory/binary and model downloads, not source records. A successful inference warms caches. **Fresh-worker inference in an already-open warmed page** was tested with all network disabled. Cold offline navigation/reload is not promised. Cache eviction/disabled storage can require internet again. Downloads disclose network metadata to model hosts, not source text.

Cancel terminates the worker; explicit retry is required. Run identities guard pending worker fetches and late responses. Worker construction, network/model failure, malformed vectors and 180-second timeout fail closed with no canned suggestions. Requires 384 finite normalized numbers per text. Imported text is inert data and cannot request tools, uploads or credentials.

## Exact patch subset / limitations

- RFC 6901 JSON Pointer resolution with `~0`/`~1` escapes, root (`""`) and empty keys supported. At most 20 path segments. Prototype-related names (`__proto__`, `constructor`, `prototype`) are rejected. Pointer ≤300 characters.
- Only `test` and `replace` are produced. No `add`, `remove`, `move`, `copy`, append, URI fragments or array creation. Array indexes must be canonical nonnegative integers; `01`, `-` and out-of-range indexes are rejected.
- The `test` guard compares the target value in `current` against the supplied `snapshot` value using deep structural equality (key order irrelevant, array order significant). Guard pass means "the target still equals the supplied snapshot", not "the request was understood" or "the replacement is correct". A missing or changed target is an **expected test failure** and leaves `current` unchanged — that is a useful fixture, not a bug.
- A missing target in the **snapshot** blocks the case entirely; `replace` never creates a field. The blind-replace baseline applies the replacement without the `test`, and disagreements are counted only across reviewed valid cases.
- Each case is independent, not a multi-case transaction. No concurrency guarantee, no live server behavior, no guarantee that a real API accepts the patch, and no claim about authorization or intent.
- Source ≤50,000 characters, imported source/audit file ≤1 MB; plan IDs ≤60, case IDs ≤80; descriptions/context ≤200; raw case ≤1500; review note ≤2000. JSON values ≤20 levels/1000 nodes, finite numbers within safe magnitude; exact decimal preservation is not guaranteed, so use strings for exact money. CSV prefixes formula-leading textual fields with `'`; JSON preserves exact values. All counts and input occurrences survive export.

## Development, deployment and validation

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261124-12/`. Per-app deploy scripts exist as required; **publish only through the root combined-site workflow**. See [observed validation](VALIDATION.md), executable browser/core/oracle/artifact tests and JSON reports. Synthetic fixtures only; no secrets or personal datasets. No digest/announcements.
