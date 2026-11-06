# Folder Ferry

A document-operations utility for teams organizing inconsistent filenames. Import a manifest of relative paths and short document summaries, describe destination-folder purposes, and let real local AI propose a filing plan. Review each route and export a collision-safe manifest. This is not generic chat, a file explorer, or a file-moving script. It does not open or alter actual files.

## Workflow and formats

1. Paste or import UTF-8 CSV with header `id,path,summary`. Up to 60 files; unique IDs ≤80 characters, unique case-insensitive source paths, each summary 1–300 characters. Use summaries, not full documents. Each CSV ≤40,000 bytes. CSV supports quoted commas, quotes and newlines.
2. Paste/import `folder,purpose`, up to 10 destination folders; purposes ≤300 characters. Folder names are safe single segments. Source paths are safe relative paths with `/` separators, no absolute paths, traversal, reserved Windows device names or unsafe punctuation. IDs and summaries may contain punctuation. Paths are deliberately portable and conservative; rename unusual paths outside this tool before using it.
3. Set minimum cosine similarity, 0–1 (default .30). Click **Load AI & plan routes**. Downloads occur only after this explicit action. Cancel kills the worker; retry uses cached public assets. Progress shows model download files and inference record batches.
4. Review every source summary and nearest folder purpose. Select a different folder or **Keep original / reject route**, add optional notes and mark the record reviewed. Edits are reversible with a 30-step undo history. All originals remain intact. Apply is disabled until every record is reviewed.
5. **Apply reviewed plan** creates an in-app result with all source/destination paths and computed metrics. Subsequent review/input edits invalidate applied exports. Download lossless JSON, spreadsheet-safe CSV or copy the JSON. JSON includes every original path/summary, folder taxonomy, AI nearest match/score, baseline, reviewer decision/note and final path. CSV contains every source record and reviewed final destination; formula-leading cells receive an apostrophe. JSON retains their exact originals. JSON is an audit format, not a re-import format; CSV exports are hand-off manifests, not the three-column input format. Extract `id,path,summary` from JSON to rerun. Browser-downloaded exports are independently parsed in `export-roundtrip.py`.

## What is AI, what is deterministic?

- **Real AI:** [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX derived from sentence-transformers/all-MiniLM-L6-v2. Transformers.js 4.3.2 and ONNX Runtime Web embed file summaries and folder purposes with mean pooling and normalization into 384-dimensional vectors. WASM CPU inference in a browser worker; no API key, remote inference or WebGPU. Four texts per inference chunk, max 70 texts, 256-token cap. Rare tokenization may truncate even short summaries.
- **Deterministic:** validate finite normalized vectors and counts, rank cosine similarities, keep originals if below threshold, require human review, allocate unique case-insensitive final destinations and serialize exports. Original source paths are reserved; collisions append ` (2)`, ` (3)` before the original extension. Source order breaks ties. Reservations are conservative and remain even when another source is being routed elsewhere; avoids relying on file-operation ordering. Nothing actually moves.
- **Baseline:** raw English alphabetic-word overlap between a file summary and folder purpose. Highest positive-overlap folder wins; ties use folder order. Compare lexical assigned counts, AI above-threshold counts and differing suggestions. These are computed signals, **not** measured accuracy/time savings or claims that every difference is better. Neural inference can recognize topics despite different wording; the human decides if that helps.
- Model output is an embedding tensor, not executable text or instructions. Imported requests to change authority/ask for credentials cannot cause tool calls. No fallback substitutes fake AI on errors.

## Download, privacy, caching, devices

Initial internet required: ~23 MB model/tokenizer from huggingface.co and Hugging Face download CDN, ~27 MB same-origin WASM, plus bundled JS (~1 MB). The UI discloses this before load. The model follows the public repository default revision; future host changes can alter results. Lockfile pins the runtime dependencies used here. The worker/module factory are bundled in the production app. Byte-identical WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`; preserve this collection dependency.

All user content remains in page/worker memory. Network traffic on the default path downloads public model/runtime assets only. No document uploads, API integration, keys, telemetry, document persistence or external file operations. Download/copy are explicitly user-initiated local outputs. Cache API stores only public model/worker/WASM assets. Worker source and WASM factory/binary are bridged through Cache API rather than relying on HTTP cache alone.

Tested offline scope: after an online run, a fresh worker can perform another real inference in the **already-open page** with network disabled. No promise of offline navigation, reload or app-shell startup. Cache eviction, storage restrictions and private browsing may require downloads again.

Use current browsers with Workers, WebAssembly SIMD and roughly 300 MB free memory. Desktop Chrome is tested. Safari, Firefox and physical phones are unverified; narrow layouts are tested in Chrome emulation. WebGPU is neither required nor used. Unsupported Workers/WASM, network/runtime failures, malformed embeddings, worker startup/errors and a 180-second timeout show errors without invented results. Reduce the input batch on slow devices. Run identities invalidate worker fetches/responses and file reads when cancelled or inputs change.

## Limitations

English short summaries work best. In the harder synthetic paraphrase fixture, a password-recovery summary routed correctly without shared words, while abstract outstanding-balance wording scored below threshold and needed manual routing (1/2 intended routes). The two straightforward fixtures routed 6/6. These tiny tests do not estimate production accuracy. This model measures topical resemblance, not factual correctness; negation, version/date differences and domain-specific boundaries may be missed. Very similar folder purposes create ambiguous routing; the interface shows nearest purpose but no calibrated confidence. A low threshold can over-route; keep or override uncertain files. This is a proposed taxonomy plan, not retention/compliance/legal advice, document-content scanning, recursive file access or permission checking. It does not inspect real destination folders, so collisions with unlisted existing files cannot be detected. Include relevant existing paths in your input manifest and inspect the destination environment before using the plan. Export is not a runnable move script.

## Build and publish

React + Vite. `npm install`, `npm run predeploy`. Base `/daily-app2/20261107-8/`. Required individual `deploy` script exists, but publish only from parent root with `npm run predeploy` and `npm run deploy`, preserving the gallery and other apps. Then commit/push main. No agent credentials are used by this app. Synthetic examples only. Third-party notices/licenses included.

## Validation

See `VALIDATION.md`, `browser-validation.json`, `core-test.mjs`, `export-roundtrip-validation.json`, asset audit and public/deployment reports for actual observed checks, not promises of universal quality. A build alone does not establish working inference. The separate digest handles announcements.
