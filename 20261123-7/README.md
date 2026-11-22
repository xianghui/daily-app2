# Parity Folio

A browser-local AI share-manifest audit for archive maintainers working with short, equal-length XOR chunks. It is distinct from Shard Shelter's failure-domain layout optimization and Chunk Harbor's byte-interval coverage: this utility checks **linear independence and actual byte consistency**, explains individually recoverable blocks and exports their bytes with source XOR witnesses. It never opens or changes files.

## Workflow and formats

1. Paste JSON, import `.json` source/audit, or choose either synthetic fixture.
2. Define `blocks` (2–8 unique IDs), `recipes` (2–8 `{id,description,blocks}` objects), and `records` (1–32 `{id,note,hex}` received shares). Each recipe's nonempty unique block subset is XORed bytewise. All `hex` values must contain the same 1–32 bytes, with no spaces. See `src/core.js` for complete examples.
3. Read download/privacy/device information, then explicitly click **Load AI & reconcile**. Real local MiniLM compares each informal received label with catalog descriptions. Review the full source, ranked similarity evidence, proposed recipe and original bytes. Change identities or hold uncertainty; every share starts pending.
4. Approve or hold every share; optional multiline reviewer notes are editable. Identity edits reset approval. Correct byte values or recipe definitions in source and rerun. **Apply reviewed scenario** computes exact reduced equations. A held share withholds all recovery, rather than silently deleting a constraint. Contradictory equations also withhold every byte. Otherwise only individually uniquely determined blocks are released, even when the overall system is underdetermined.
5. Download complete JSON, audit CSV, per-block CSV or Markdown. Copy the current worksheet/audit. Review changes invalidate exports; undo restores the prior edit. Originals are preserved. Reimport restores originals only and requires fresh AI and review.

Strict schema rejects unknown fields, duplicate IDs, invalid hex, mismatched lengths, unknown/repeated recipe blocks and unsupported files. Source ≤60,000 characters; imported source/audit JSON ≤16 MB. IDs ≤50 characters for blocks/recipes and ≤100 for received shares. Descriptions/notes ≤200 characters; reviewer notes ≤2,000. At most 40 embedding texts, four per chunk. Finite normalized 384-dimensional vectors are validated before ranking.

## What AI does—and does not do

**Xenova/all-MiniLM-L6-v2**, q8 WASM CPU, generates mean-pooled normalized embeddings. Cosine retrieval reconciles reworded share labels with supplied recipe descriptions; it reduces repeated manual catalog lookup. It does not invent recipes, coefficients, bytes, authenticity or confidence percentages. Nearest-neighbor retrieval always proposes something. Unknown/negated descriptions and ambiguous catalog entries require holds; similarity is not identity verification. Imported text is data sent only to the local embedding worker, never executable instructions or credential requests.

After review, Gaussian elimination over GF(2) is deterministic. Row operations XOR coefficient masks, every payload byte and source-witness sets together. Rank exposes redundant equations. A zero coefficient row with nonzero bytes proves inconsistency; an isolated single-block reduced equation yields uniquely determined bytes. This works because equations share the same coefficient mask for every byte. The count-only baseline checks received shares ≥ unknown blocks; the displayed false-positive flag is computed from reviewed rank/contradictions, not an accuracy or time-saving claim. Held batches have no release/comparison claim.

**Limitations:** no Reed–Solomon coefficients, variable-length blocks, offsets, padding, encryption, filesystem recovery or live storage access. At most eight source blocks and 32-byte chunks: this is a small audit/teaching worksheet, not a bulk repair system. Recovered bytes satisfy supplied reviewed equations but are not authenticated or checksummed. Full-rank corrupted input can produce incorrect bytes without a contradiction. Recipe labels, equations and provenance must be verified independently. No safety/integrity guarantee.

## Runtime, downloads, licenses and privacy

- Model/source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 — Apache-2.0. Approximately 23 MB weights/tokenizer/config; model `main` is not pinned by the app. Actual observed revision/tokenizer limit are in `model-runtime-audit.json`. Tokenizer context is 512; the pipeline's `max_length` argument is not relied on for a stricter cap.
- Transformers.js 4.3.2 — Apache-2.0: https://github.com/huggingface/transformers.js.
- ONNX Runtime Web — MIT: https://github.com/microsoft/onnxruntime. CPU WASM approximately 27 MB; worker approximately 549 KB; factory approximately 53 KB.
- Shared immutable same-origin assets: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/paths. Hashes and byte sizes are verified in `runtime-dependency-audit.json`.
- Initial internet to this site and Hugging Face/redirected model CDN hosts is required. No model-host traffic before explicit loading. **No API key, optional provider, telemetry, content upload or remote inference.** Only public files download. User content stays in volatile page/local-worker memory; exports stay on the user's device.
- Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. WASM CPU default requires no WebGPU. Tested desktop Chrome with GPU disabled and emulated 1440/390/320 widths; physical phones, Safari/Firefox and screen readers untested.
- Cache API retains public model, worker and runtime files if supported. **Tested offline scope:** actual inference from a new worker in an already-open warmed page with network disabled. Cold navigation/reload, permanent offline retention and installable PWA startup are not promised. Cache eviction/disabled caching needs internet.
- Download/chunk progress, cancellation, actionable error/retry and a 180-second timeout are implemented. Cancel terminates the worker. Run identities guard worker fetches/messages and asynchronous imports; stale results cannot replace current source/results. Runtime/network/malformed-vector failures leave no fake AI results.

## Output contracts

`parity-folio/1` JSON retains original input, every AI suggestion, reviewed recipe, ranked evidence, human decision/note, applied timestamp, reduced equations, rank, contradictions and every block status. Each recovered byte string has a list of original share IDs whose XOR reproduces it. Block CSV retains all source block IDs, including unresolved/held/inconsistent rows with empty hex. Audit CSV retains all received shares. Markdown includes the worksheet and complete JSON audit. CSV text fields guard leading spreadsheet formula characters, including multiline strings; use JSON for exact formula-like content. JSON hex strings preserve leading zeros.

## Build and validation

React + Vite, base `/daily-app2/20261123-7/`. `npm install`; `npm run predeploy`. Required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish only from the root combined-site workflow**, never the per-app deploy. Existing 1,000,000,000-byte guard and legacy runtime-sharing rules are unchanged.

Run `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node async-race-test.cjs`, `node superseded-run-test.cjs`, `node cold-cancel-test.cjs`, then `python3 artifact-test.py`. Browser tests use the existing workspace Playwright installation and actual Chrome/model inference; defensive checks alone inject failures. `python3 serve-production.py 7376` serves per-app production builds and 7377 serves assembled deploy output. Use APP_URL/REPORT_FILE/PREFIX for public workflow checks. After root assembly: `python3 assembly-test.py`, `python3 bundle-audit.py`, `node gallery-syntax.cjs`, `node gallery-test.cjs`. After Pages built status matches published branch: `python3 public-audit.py` and public browser/artifact/gallery tests.

See `VALIDATION.md` and `publication-status.json` for observed outcomes and publication evidence, not just a successful build. Only synthetic data is committed.
