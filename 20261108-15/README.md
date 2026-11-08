# Rubric Relay

A static, local-AI second-marking workbench for educators moderating **one prompt and one rubric criterion per batch**. The bottleneck is finding inconsistent marks in short-answer batches without rereading in arbitrary order. Input: human-approved score anchors and already-marked answers. Output: a human-reviewed moderation queue and release register. This is **not an automatic grader**.

## Workflow

1. Choose **Water cycle** or **Database indexes**, paste JSON, or import a JSON file under 50 KB. Set `prompt`, `criterion`, integer `maxScore` (1–10), `anchors` and `records`. Provide one approved anchor at every level 0–maxScore. Every item has unique `id`, `text` and integer `score`. IDs are unique across both arrays. Answers and anchors are limited to 500 characters; prompt to 500 and criterion to 1000. Use anonymous IDs.
2. Explicitly press **Load AI & compare anchors**, after reviewing download/device/privacy requirements. Loading has file-level progress, four-text batch progress, cancel and retry. It never starts model downloads merely on page open.
3. Compare source text, prompt/criterion and approved anchors. Inspect nearest and alternate anchors. Queue order is largest absolute AI/original score discrepancy, then smallest top-two cosine margin. These are review cues, not verified errors. Change the final mark, optionally use the anchor mark as a provisional edit, restore the original, add a note, confirm or hold. **Every answer requires an explicit decision**. Original marks are the default, not AI suggestions. Undo reverses review edits.
4. **Apply reviewed marks** validates all decisions and integer score bounds. Histograms/totals compare the same confirmed subset, with holds outside release totals. Changes/disagreements are counts, not accuracy gains. No student account or gradebook is changed.
5. Download JSON, CSV or Markdown, or copy the Markdown handoff. Every edit disables stale applied exports. JSON retains originals, anchors, evidence and reviews. Reimport intentionally reruns original inputs rather than silently restoring old reviews; the downloaded audit preserves prior edits.

## Real AI and deterministic steps

`Xenova/all-MiniLM-L6-v2`, q8, Transformers.js **4.3.2**, ONNX Runtime Web, WASM CPU, one thread. It performs feature extraction: normalized mean-pooled 384-dimensional text embeddings, in batches of four with 256-token truncation. These embeddings make paraphrased answer/anchor wording comparable beyond exact matches. Vectors are checked for count, dimension, finite values and unit normalization. No mocked answers, heuristics presented as AI, API key or server inference.

The model embeds **answer texts only**. Prompt and criterion are human review context, not instructions interpreted by the model. Cosine ranking chooses the nearest supplied anchor; its supplied score becomes a suggestion. Cosine, tie ordering, discrepancy queue, schema validation, review reconciliation, totals and export formatting are deterministic. There is no generative reasoning, rubric truth verification, learner profiling, plagiarism detection or factual checking. Top-two margin and cosine are **not confidence**. No threshold claims to ensure a valid grade.

The baseline is the supplied original marks and input-order review. The UI shows AI/original disagreements, human changes and original/reviewed histograms on identical confirmed records. The synthetic evaluation compares suggestions and original marks to explicit known-answer labels; it is tiny and deliberately seeded with marking inconsistencies. It does not establish production accuracy or time savings.

## Model/source/license and deployment assets

- Model: https://huggingface.co/Xenova/all-MiniLM-L6-v2 (Apache-2.0); original https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2. The runtime uses upstream default `main`, which is mutable. Cache reuse is not a permanent revision guarantee.
- Transformers.js: https://github.com/huggingface/transformers.js (Apache-2.0); ONNX Runtime Web (MIT).
- Initial model files are about **23 MB** from Hugging Face and CDN redirects; WASM about **27 MB** from this site; app/runtime JavaScript under 1 MB. Internet and sufficient memory/storage are needed initially.
- App, bundled worker and module factory are hosted locally. The byte-identical 26,861,777-byte WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Vite rewrites to this immutable same-origin shared asset; preserve it in the combined deployment. `asset-audit.json` records hashes.
- Vite base is `/daily-app2/20261108-15/`. React + Vite. `npm run predeploy` builds the individual app. Required per-app gh-pages scripts exist, but **publish only through the root combined-site predeploy/deploy**, never the per-app deploy.

## Privacy, devices, limits and offline scope

No credentials or optional remote integrations. User text goes only by `postMessage` to a local worker. Network traffic is file GET downloads, not answer uploads; the model host sees usual download metadata. Imported instructions are inert data, with no tools or credential authority. All included fixtures are synthetic. Session input/reviews are memory-only, not written to browser persistence. Downloaded audits contain the original answers: protect them appropriately.

Current browser with WebAssembly, module workers, Blob URLs and adequate memory. No WebGPU required. Actual execution tested in desktop headless Chrome on macOS; responsive views at 320/390 CSS pixels. Physical phones, Safari, Firefox, screen readers and low-memory devices are **not tested**. WASM is the actual default CPU path, not an untested fallback.

1–24 answers, 2–11 anchors, one complete integer scale 0–maxScore, at most 35 embedded texts. File input must be JSON ≤50 KB; paste limit is 50,000 characters. PDF/CSV inputs are unsupported. Worker/network/model failures, malformed vectors, unavailable runtime and a 180-second timeout produce errors, not fabricated marks. Source changes, cancellation and asynchronous file/worker fetches use identities so obsolete results cannot replace current work.

Transformers.js caches model files. Cache API stores worker source, module factory and WASM, bridged through Blob URLs to fresh workers. After a successful online run, a **new worker on the same open page** was tested with all browser networking disabled. Offline page reload/startup is not promised; no app-shell service worker exists. Clearing caches, denied storage, eviction or changed upstream files require internet again. Clear site data in browser settings to remove caches.

## Artifacts, review and limitations

JSON is lossless original input plus all reviewed records, ranked evidence, queue IDs and computed metrics. CSV includes every source record, original/AI/reviewed scores, nearest-anchor evidence, decision, note and queue position; `releasedScore` is blank for holds. String formula-like CSV values beginning with `= + - @ tab CR` receive a safety apostrophe, including multiline fields; JSON remains unchanged. Markdown quotes user strings with JSON escaping and contains confirmed marks or an explicit hold, source excerpts and notes. No marks are sent elsewhere.

Known-answer fixtures yielded 8/8 intended anchor levels versus 2/8 supplied original marks. The originals were intentionally seeded, so this is **not a representative benchmark**. A negated database answer matched the full-credit anchor at cosine ~0.920 despite being incorrect. This clearly demonstrates why semantic similarity must never authorize grading. Sparse/biased anchors, repeated vocabulary, negation, incorrect facts, missing details, multilingual answers and truncated text can mislead. Holds, human edits and mandatory confirmation are essential; do not rely on this tool alone for high-stakes decisions.

## Validation

See [VALIDATION.md](VALIDATION.md), `browser-validation.json`, `extra-validation.json`, `artifact-validation.json`, `core-validation.json` and public/deployment audits. Run `node core-test.mjs`; `python3 serve-test.py` serves the real production bundle on 6255; `node browser-test.cjs`; `node extra-test.cjs`; `python3 artifact-test.py`. Playwright uses the workspace installation. Success checks run the real downloaded model; fault injection is restricted to defensive malformed/error/timeout/stale paths. Public runs use `TEST_URL` and `REPORT`.
