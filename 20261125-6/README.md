# Integrity Folio

Release QA for small **text assets** whose informal handoff names differ from an approved manifest. Local real AI links each handoff to its intended asset; mandatory review precedes exact UTF-8 SHA-256 verification. A same-length edit cannot pass just because its size matches. No assets are fetched, deployed, modified or uploaded.

## Workflow

1. Use a synthetic example or paste/import source JSON. Supply 2–5 `plans`: unique `id`, English `description` (≤200 characters), and `target` JSON **string** containing `path`, `bytes`, and lowercase 64-hex `sha256`. Obtain these references from your trusted release process; AI never generates reference hashes.
2. Supply 1–24 `records`: unique `id`, English `context` (≤200 characters), and exact `raw` text (≤2500 UTF-16 units). Source JSON ≤50,000 characters. No binary/file-content import; JSON imports ≤4 MB. Audit import restores originals only and requires renewed inference/review.
3. Explicitly click **Load AI & reconcile**. Review the ranked cosine similarities (not confidence), descriptions, exact originals and selected contracts. Change a contract, edit text/notes, approve verification or hold each asset. No automatic approvals.
4. **Apply reviewed scenario** hashes the reviewed strings. Approval never bypasses mismatch checks. Duplicate verified paths after the first are blocked. Every original/held/blocked record remains in the audit. Edits invalidate applied exports; undo restores prior review state. Source edits cancel and clear inference.
5. Export complete JSON/CSV/Markdown, copy Markdown, or download **Fixtures** (verified manifest JSON with SHA-256 hex, SRI base64, byte count and path). Only ready records enter the manifest. JSON audits contain original and edited content; handle exports appropriately. CSV quotes all fields and prefixes spreadsheet formula-like strings with an apostrophe; JSON is lossless.

## Real AI, runtime and download

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, normalized mean-pooled 384-dimensional vectors. Real inference ranks supplied asset descriptions against handoff notes. It is not keyword routing, a chat wrapper or a canned example generator.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. No WebGPU needed. Four-text chunks, worker tokenizer model cap 512 tokens (pipeline `max_length:256` alone is not an enforced cap), ≤29 texts, 180-second timeout. Validate finite normalized vectors/count/dimension before ranking. No fake fallback on failure.
- Initial explicit run requires internet and approximately 23 MB weights + 27 MB WASM, tokenizer and code, downloaded from Hugging Face/CDN and this site. Current desktop Chrome, WebAssembly SIMD, module workers, Web Crypto, HTTPS/localhost and several hundred MB available RAM recommended. Physical phones and other engines untested.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/assets. Byte provenance is recorded in `runtime-provenance.json` and public asset audits. App code is locally bundled; no JS CDN or server AI.
- Explicit Cache API stores worker/factory/WASM; runtime caches model files. Storage can be evicted. **Tested offline scope: fresh-worker inference in an already-open warmed page**, not cold offline navigation/reload. Runtime/model downloads are not user-content uploads.

## Privacy and limits

Default content and reviews stay in memory, on-device, unless you export/copy them. No keys, accounts, analytics, remote inference, uploads or endpoint requests. Requests audited from production startup through real inference: file GETs only. Imported content is inert data, never evaluated HTML or instructions, never allowed to request credentials or authority. Cancel terminates workers and aborts pending fetches. Run identities guard input/file-read/fetch races; review edits guard asynchronous hash application against stale exports. Network/runtime/schema/timeout errors are visible and retryable, never replaced by mock AI.

SHA-256 uses Web Crypto over TextEncoder UTF-8 bytes **without Unicode/newline normalization or automatic BOM**. Empty strings are valid assets; malformed Unicode is rejected. Raw CR/LF are preserved through source JSON escapes; browser textarea editing normalizes its own line endings. For exact bytes edit the source JSON. Binary assets and original file encodings are out of scope. Paths are labels only, with no execution or filesystem authority. Supplied digests are not authenticated: equality proves equality to that reference, not provenance, safety or approval to publish. Semantic similarity can misidentify negation, overlapping descriptions and short notes; human review is mandatory.

The comparison is deterministic UTF-8 size-only equality versus SHA-256 equality: count the assets falsely accepted by size alone. These are actual batch checks, **not measured time saved or general AI accuracy**. No confidence percentages are fabricated.

## Development and validation

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261125-6/`; required individual `deploy: gh-pages -d dist` remains present but **publish the combined collection from its root**, never this script.

See `VALIDATION.md` for observed results and limits. Browser tests run the actual production bundle and real default model, including offline fresh workers, two materially different fixtures, changed-context output impact, full 24-record chunking, review/undo/reimport, parsed downloads, privacy and desktop/phone-width checks. Defensive fault injection is isolated from real-AI success tests. `artifact-test.py` independently verifies bytes/digests/SRI and parses actual JSON/CSV exports using Python standard libraries.
