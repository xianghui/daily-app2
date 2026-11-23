# Mode Loom

A dry-run creation-permission handoff desk for build engineers. Real browser MiniLM retrieves Unix umask profiles from informal environment notes. Human review and exact nine-bit AND-NOT checks produce a traceable worksheet, not shell commands or filesystem changes.

## Workflow

1. Choose **Build handoff** or **Archive handoff**, paste JSON or import source/audit `.json` ≤1 MB. Shape: `{plans:[{id,description,mask}],records:[{id,context,raw}]}`. `mask` and valid `raw` are exactly three octal digits as strings. Examples are entirely synthetic, including intentional invalid rows.
2. Explicitly **Load AI & reconcile** after reading download/device requirements. MiniLM embeds environment descriptions and contextual notes and ranks their cosine similarity. AI materially handles paraphrased context; it does not calculate permissions, inspect a filesystem or infer policy from a numeric mode.
3. Verify every environment assignment with its policy owner; inspect descriptions, explicit mask and similarity, not confidence. Edit requested modes, switch profiles, add multiline notes and approve or hold each row. Mode/profile edits reset approval. Undo restores review state; source data is retained. Edit source JSON and rerun to change masks or profile constraints.
4. **Apply reviewed scenario** computes `requested & (~mask & 0777)`. Reject malformed/ambiguous octal, whitespace, special bits and symbolic syntax. Each ready row proves effective bits are a subset of requested bits, none of the masked bits survive, and effective plus removed bits reconstruct the requested value. A per-bit trace explains all nine results.
5. Download complete JSON/CSV/Markdown audits or ready-only **Manifest JSON**. Any edit invalidates the export snapshot. Audit reimport restores original input only and requires renewed inference/review; reviewed edits remain available in the audit. No actual files are created, chmodded or moved.

## Scope and constraints

2–5 profiles; 1–24 creation requests; unique profile IDs ≤60, record IDs ≤80; descriptions/context ≤200; mode fields ≤600; reviewer notes ≤2,000; source JSON ≤24,000 characters. Separate ≤1 MB audit envelope supports maximum-batch reimport. Requested modes may initially be invalid so humans can repair or hold them. Profile masks must be valid upfront. Blank mode fields can be reviewed but cannot be released. IDs are labels, not executable paths.

Exactly nine ordinary Unix permission bits, 000–777. No 0o prefixes, leading fourth digit, special/setuid/setgid/sticky bits, symbolic modes or whitespace. The worksheet models creation only; it is not existing-file chmod, ACL resolution, ownership, inherited directory group policy, actual access checking or a security audit. Directory execute means search/traversal. Defaults of 666 for ordinary files and 777 for directories are common conventions, **not** automatic defaults here: supply the actual requested mode. Umask never adds execute permissions.

## Real AI and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX ≈23 MB. Normalized mean-pooled 384-dimensional embeddings; four-text chunks. Validate vector count, dimension, finite values and unit norm before ranking. Each text ≤200 characters. Actual tokenizer maximum 512; the pipeline does not enforce the worker's supplied `max_length:256`. Model revision is upstream `main`, not immutable; future changes may change rankings.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU requirement. Current desktop Chrome with module workers and WebAssembly SIMD tested. Several hundred MB free RAM recommended. Other engines, disabled SIMD hardware and physical phones untested; responsive emulation does not promise phone inference performance.
- First run requires internet: approximately 23 MB model + 27 MB runtime plus local app/worker code. Only public weights/tokenizer files download from Hugging Face/CDN; runtime assets come from this same-origin collection. Downloading a model is not uploading content. Notes, requests, embeddings and reviews remain in browser memory. No remote inference, analytics, API key or provider integration. No agent credentials or real documents are used.
- Immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating builds. Inspected protocol: `{id,texts}` → progress/batch/error/result `{id,vectors}`. Hashes in runtime-provenance.json.
- Worker cache `mode-loom-worker-v1`, runtime cache `circuit-cove-runtime-v1`, Transformers.js browser model cache. After online warmup, a new worker can infer with all network disabled in the **already-open warmed page**. Offline navigation/reload is not promised. Eviction/private mode can require redownload; browsers control cache availability.
- Progress, termination-based cancellation, explicit retry and 180-second timeout. Run IDs guard late worker fetches/results and asynchronous file reads. Unsupported/runtime/network/malformed-vector errors fail without fake AI. Imported context is inert data, not a command, tool authority or credential request.

## Artifacts and baseline

Full JSON preserves all original inputs, reviews, similarity evidence, blockers, checks and computed counts. CSV quotes commas/quotes/newlines, retains octal values as text, and prefixes formula-leading strings (`= + - @ TAB CR`) with an apostrophe. JSON remains lossless; downstream spreadsheet software may still coerce numeric-looking text, so use JSON where leading zeros are essential. Markdown includes escaped JSON source/review/check evidence; imported markup is not executed.

Manifest JSON is an array of `{id,requestedMode,umask,effectiveMode,symbolic}` for approved valid rows only. It is a dry-run worksheet, not an executable deployment plan. All octal values are three-character strings including leading zeros.

Baseline: subtract the numeric octal mask from the numeric octal requested mode, compared on the same reviewed ready rows. This common shortcut is wrong: 600 minus 022 gives 556, inventing bits, while 600 AND NOT 022 remains 600. Negative subtraction results are displayed explicitly. The UI counts differing rows, not time saved, AI accuracy or a security improvement. Held/blocked rows are excluded from this comparison. AI cannot establish the right policy: human verification remains mandatory even when arithmetic is correct.

## Development, validation and publishing

React + Vite base `/daily-app2/20261123-24/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, with gh-pages installed. Publish only from collection ROOT using the combined deployment directory.

See VALIDATION.md for observed inference, exhaustive independent arithmetic, defensive browser checks, downloaded artifact parsing and untested scope. The combined site preserves its 1,000,000,000-byte guard. Deploy-only byte-identical geometry runtime reuse additionally covers 20261029-29 → 20261028-24, without source-build modification or removal of compatibility JS URLs; actual older-app worker/image/STL/import/export checks accompany this release. This app itself uses no geometry.

Observed local assembled quality: both six-record paraphrased fixtures matched 12/12 intended profiles and all eight valid effective modes. A competing-negation challenge misrouted to public rather than private. This is a review aid, not validated policy selection.

Public release verified: Matching built Pages commit `6e461e6f1114186e284650ddb2e0223530371d37` and workflow `45201878793` succeeded. Nine app/gallery/runtime byte matches, both real-AI fixtures, reviewed/export/max-batch/offline/privacy checks, 762 independent public artifact checks and all 829 gallery cards passed. Leading-zero modes survived the public max-batch manifest. Five affected legacy assets and actual import/export/restoration regression passed. Combined size **999,622,634 bytes**, under the unchanged guard. Pre-existing unrelated recovery work remains preserved and excluded from this source commit. Physical phones, other engines, cold offline startup and actual filesystem behavior untested. No digest sent.
