# Path Haven

A local-AI archive-manifest preflight for release engineers reconciling mixed destination handoffs. MiniLM matches informal destination notes to supplied Windows/POSIX namespaces. After mandatory review, lexical checks expose traversal, invalid Windows filenames, normalized collisions and file/directory ancestor conflicts. Nothing is extracted, opened, sent, renamed or written to a filesystem.

## Workflow and formats

1. Choose **Mixed handoff** or **Recheck queue** (synthetic), paste JSON or import source/audit `.json` ≤1 MB. Source shape: `{plans:[{id,description,kind}],records:[{id,context,raw}]}`. Kind is `windows` or `posix`; each destination ID is a separate namespace. Files landing together must use the same ID.
2. Read requirements, then **Load AI & reconcile**. Real MiniLM embeddings compare destination context with profile descriptions; raw filenames do not enter inference. This is semantic retrieval, not a regex OS guess or a generative model.
3. Review cosine evidence and every destination. Edit paths or destinations, approve or hold each row, add multiline notes. Changed paths/destinations need renewed approval. Undo is reversible; originals remain unchanged. Edit profile rules in source and rerun.
4. **Apply reviewed scenario**. Deterministic checks normalize separators/dot segments, enforce lexical containment and validate filename rules. All sides of canonical duplicate or file/directory conflicts are excluded from release. Holds are excluded from collision analysis, not silently deleted from audits. Resolve a conflict by editing a path, correcting its destination or holding a file.
5. Download JSON/CSV/Markdown audits or ready-only **Manifest JSON**, or copy Markdown. Any edit invalidates exports. Audit reimport restores originals only and requires renewed inference/review.

Source JSON ≤24,000 characters; 2–5 destinations; 1–24 file records; unique IDs ≤60 (destination)/80 (record), descriptions/context ≤200, paths ≤200, segments ≤100, notes ≤2,000. Import envelope bound is separate so maximum-batch audit reimport works. Directory/symlink entries are unsupported; use file manifests only. Inputs are inert data and cannot request credentials or change authority.

## Exact lexical scope

- POSIX: forward slash separator, case-sensitive names; backslashes, colons and percent sequences are literal. Unicode is preserved without normalization; control characters and unpaired surrogates are blocked. No URL decoding.
- Windows: ASCII-only, both slash forms accepted, ASCII case-insensitive collision keys; invalid `< > : " | ? *`, reserved `CON/PRN/AUX/NUL/COM1–9/LPT1–9` names with optional extensions (also conservatively trimming spaces from the device stem), trailing dots/spaces, rooted/UNC/drive-relative/absolute paths are blocked. This is a deliberately restricted lexical model, not complete NTFS semantics or Unicode case folding.
- Empty and `.` segments collapse; `..` pops one prior segment and blocks if it would leave the namespace. Resolving to the root or ending in a directory separator is blocked. Invalid intermediate Windows segments block even if later removed by `..`.
- Conflict pairs are same canonical key or ancestor/descendant file paths within the same reviewed destination. Both sides block; a case-sensitive POSIX `Logo.svg` differs from `logo.svg`. Held/invalid paths do not contribute collisions.
- **No actual archive metadata, symlink, hardlink, mount, existing-file or filesystem inspection. Not an extraction sandbox, portable filename guarantee, or security certification.** A ready manifest does not authorize or guarantee safe extraction. Extraction tooling must enforce its own containment and overwrite rules. No shell commands are generated.

## Real AI, runtime, devices and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX ≈23 MB, normalized mean-pooled 384-dimensional embeddings. Four-text batches; vector count/dimension/finiteness/normalization validated before ranking. Cosine similarity is not confidence or logical entailment. Every row requires review.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. WebGPU is unnecessary. The feature-extraction pipeline ignores the supplied worker `max_length:256`; actual tokenizer maximum is 512 and individual text is bounded to 200 characters. Model revision is upstream `main`, not immutable; future rankings may change.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` and factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, with ≈27 MB shared WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both originating apps/assets. Inspected protocol: `{id,texts}` → progress/batch/error/result `{id,vectors}`. Hashes in runtime-provenance.json; no new oversized runtime copy.
- First explicit run requires internet for public Hugging Face/CDN model files and same-origin assets. Downloads are **not uploads**: content stays in browser memory and the local worker. No analytics, remote inference, keys, provider credentials or localStorage designs. GET-only downloads are inspected in browser tests; persisted request audits omit signed query values. Copy/download only occurs on explicit clicks.
- Worker source cache: `path-haven-worker-v1`; runtime cache: `circuit-cove-runtime-v1`; model files use Transformers.js browser cache. After successful online loading, a fresh worker can infer with all network disabled in an **already-open warmed page**. Offline navigation/reload is not promised; eviction/private mode can require internet again.
- Model-file and four-text batch progress, cancellation by worker termination, explicit retry, 180-second timeout and run identities protect file reads/fetches/results. Failures never produce fake AI. Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM tested; physical phones and other browser engines untested. Narrow-layout tests are desktop emulation, not mobile hardware validation.

## Artifacts and honest comparison

Full JSON preserves all originals, reviews/evidence, checks, witnesses and metrics. CSV uses CRLF and quotes commas/quotes/newlines, prefixing formula-leading text (`= + - @ tab CR`) with an apostrophe; JSON remains lossless. Markdown contains every source/review/check. Manifest JSON is an array of `{id,destination,relativePath}` for approved valid nonconflicting files only. Paths use `/`, with POSIX literal backslashes retained. This is not a command or automatic extractor input; destination software integration is untested.

Baseline compares **identical reviewed raw strings** within a reviewed destination, among lexically valid approved paths. The UI reports conflict pairs caught/missed by that baseline and normalized path count. It demonstrates canonical and ancestor conflicts, not AI accuracy, productivity percentages or measured time savings. Input edits affect both comparisons consistently.

## Validation and development

See [VALIDATION.md](VALIDATION.md), browser/core/artifact reports and test scripts. Twelve tiny fixture destination matches passed. A competing-negation probe selected POSIX when Windows was intended: nearest-neighbor similarity is not reasoning, and ambiguous notes must be corrected/held. No general accuracy claim.

React + Vite, base `/daily-app2/20261123-22/`. `npm install`, `npm run dev`, `npm run predeploy`. Required `predeploy: npm run build`, `deploy: gh-pages -d dist` and gh-pages dependency retained. **Publish through root predeploy/deploy only**, never individual deploy. The collection size guard remains unchanged. Deploy-only byte-identical geometry runtime reuse now also covers legacy app `20261029-28`, preserving its source build and compatibility URLs; preserve shared host `20261028-24`. Unrelated pre-existing working-tree recovery edits are preserved and excluded from this run's source commit.
