# Range Relay — reviewed downloader QA

A local-first worksheet for integration testers repeatedly translating informal download handoffs into exact byte-range fixtures. Unlike the collection's chunk-completeness and cache-replay apps, this prepares **GET Range request expectations**, not an archive audit, transfer client or network service.

## Use

1. Choose either synthetic example, paste JSON or import source/audit `.json`. Supply 2–5 `plans` (`id`, English `description`, `range`) and 1–24 `records` (`id`, English `context`, `raw`). `raw` is a JSON string containing only integer `length` (representation bytes). Descriptions are your semantic goal; range strings are explicit request constraints. Edit contracts in the source before inference.
2. Explicitly load AI. Review every source-linked contract and ranked cosine evidence. Correct the contract or length, write a multiline note, then approve or hold every case. Similarity is not confidence; unrelated notes still receive a closest match. No automatic release.
3. Apply the reviewed scenario. Invalid cases remain blocked in the complete audit. All review edits invalidate the export snapshot; contract/length edits reset approval. Undo restores the previous review state. Originals are never overwritten.
4. Download complete JSON, spreadsheet-protected CSV, Markdown or approved-only Release JSON. Copy the current worksheet. Reimporting an audit restores original inputs only, never trusted approvals. Nothing fetches source URLs or sends requests.

## Actual AI and local runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8, produces real normalized mean-pooled 384-dimensional embeddings. English intent descriptions and range-contract descriptions are compared by dot product to retrieve paraphrased request intent. [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web, MIT; one-thread WASM CPU, four texts/chunk. The shared worker requests max_length 256, but feature extraction uses the tokenizer's actual model_max_length of **512**. Inputs are bounded to 200 characters per semantic text; token-dense strings can truncate. The model does not generate Range values or prove HTTP behavior. Negation can misroute; verify every intent.

Initial internet download approximately **23 MB weights + 27 MB CPU runtime**, plus code/tokenizer. Hugging Face and its CDN host model files. Runtime/worker assets are same-origin, immutable existing collection assets: worker and factory from `20261115-6`, WASM from `20261107-2`. Preserve these apps/paths. `runtime-provenance.json` records hashes; no duplicate runtime needs deployment. React 18.3.1 + Vite keeps this app small without changing the collection size guard.

Current desktop Chrome with WebAssembly SIMD and module workers is tested; several hundred MB free RAM recommended. No WebGPU, API key, paid service, remote model or agent credential is needed. Other engines and physical phones are untested.

## Privacy, caching and errors

Content, reviews and notes remain in volatile browser memory. Only static GET file downloads occur; no content in URLs/bodies, analytics, localStorage or content caches. Cache API stores worker, CPU factory/binary and model downloads, not source records. A successful inference warms caches. **Fresh-worker inference in an already-open warmed page** was tested with all network disabled. Cold offline navigation/reload is not promised. Cache eviction/disabled storage can require internet again. Downloads disclose network metadata to model hosts, not source text.

Cancel terminates the worker; explicit retry is required. Run identities guard pending file reads, worker fetches and late responses. Worker construction, network/model failure, malformed vectors and 180-second timeout fail closed with no canned suggestions. Requires 384 finite normalized numbers per text. Imported text is inert data and cannot request tools, uploads or credentials.

## Exact range subset / limitations

- 1–8 `bytes=` range members: first-last, first- or -suffix. Nonnegative decimal components and representation length ≤1,000,000,000 bytes. Reject CR/LF, non-ASCII, invalid bounds, unknown units and oversized fields. `length=0` and suffix 0 have no satisfiable interval.
- Assume GET **honors Range**, unchanged identity representation, no conditionals/content encoding. Clip satisfiable ranges to `[0,length-1]`, discard unsatisfiable members; sort and merge overlapping/adjacent intervals. Any surviving interval yields 206, otherwise 416 and `bytes */length`.
- Multiple disjoint intervals require multipart/byteranges. Exports give each part's Content-Range; they **do not** put a single Content-Range on multipart responses or generate multipart body framing. Payload counts exclude framing and headers. A real server may ignore Range and return 200 or reject resource-expensive requests. This is a bounded test worksheet, not complete RFC conformance or a live server certificate.
- Baseline: full representation / 200, ignoring Range. Status differences and omitted payload bytes are computed on current approved valid cases. They are not measured bandwidth savings, model accuracy or time saved. Holds/blocks are excluded from byte totals but retained in every complete audit.
- Source ≤50,000 characters, imported source/audit file ≤1 MB; IDs ≤80 (contract IDs ≤60); context/descriptions ≤200; raw case ≤1500; review note ≤2000. CSV prefixes formula-leading textual fields with `'`; JSON preserves exact values. All counts and input occurrences survive export.

## Development, deployment and validation

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261124-13/`. Per-app deploy scripts exist as required; **publish only through the root combined-site workflow**. See [observed validation](VALIDATION.md), executable browser/core/oracle/artifact tests and JSON reports. Synthetic fixtures only; no secrets or personal datasets. No digest/announcements.
