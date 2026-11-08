# Practice Weave

A local-AI interleaved practice planner for educators. Input an existing question bank with supplied answers; discover related prompts, review topic assignments, then export a sequence that separates related questions. This is not a question-answering chatbot or an answer generator.

## Use

1. Load Science practice / Computing practice, paste JSON, or import a `.json` file under 50 KB. Schema: `{name, threshold:0.5, avoidSameTopic:true, records:[{id,text,answer},...]}`. Unique IDs, 2–12 records, prompts 1–500 characters, answers 1–1000 characters. Threshold range 0.3–0.95. Only JSON input; PDF/CSV import unsupported.
2. Read the download/privacy notice, explicitly select **Load AI & discover topics**. Progress reports downloaded files and batches. Cancel terminates the worker; retry creates a fresh one.
3. Inspect every question. Rename/split/merge topic codes, correct answers, confirm or hold every question. Undo reverses the latest review edit. Answers are supplied by you, never generated or verified by the AI.
4. **Apply reviewed sequence**. If too many cards share a topic, the hard no-same-topic adjacency constraint may be impossible. Hold questions, correct topics, or explicitly set `avoidSameTopic:false` and reprocess. No silent relaxation.
5. Export learner Markdown (MD) or copy it; export a separate answer key (KEY). JSON and CSV include answers and holds: do not distribute these audits as learner sheets. Every edit invalidates applied exports until reapplied.

## What AI does / what is deterministic

Real `Xenova/all-MiniLM-L6-v2` q8 feature-extraction in Transformers.js **4.3.2**, normalized mean-pooled 384-dimensional vectors, WASM CPU, one thread. Prompts are embedded in batches of four with 256-token context/truncation. The feature extractor makes paraphrases comparable beyond exact-string matching. Finite shape and normalization checks reject malformed vectors.

Cosine matrix computation and greedy complete-link topic grouping are deterministic over the real vectors: every pair in a proposed topic must reach the user threshold. Topic suggestions depend on source order and threshold. No hard-coded model answers or regex-as-AI fallback. An exact subset dynamic program minimizes the sum of neighboring cosine similarities while forbidding equal trimmed reviewed-topic neighbors if enabled. Its complexity is O(n²2ⁿ), hence the 12-card bound. It preserves all confirmed cards exactly once and retains all holds in audits. The comparison is original confirmed input order vs optimized order, using the same reviewed cards and pairwise model matrix. Scores measure semantic adjacency only, not accuracy or learning benefit. No confidence percentages or productivity claims.

## Model, source, licenses, assets

- Model: https://huggingface.co/Xenova/all-MiniLM-L6-v2 — Apache-2.0; original https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2. Downloads tokenizer/config/quantized ONNX from Hugging Face and its documented CDN redirects on first explicit run. Model revision uses runtime default `main` (mutable upstream); caches are not a permanent version guarantee.
- Runtime: https://github.com/huggingface/transformers.js (Apache-2.0), ONNX Runtime Web (MIT). App code, worker and WASM module factory are hosted with this app. No backend or optional remote provider integration.
- First run: approximately **23 MB model + 27 MB WASM**, plus <1 MB application/runtime JS. Network, browser decompression and storage overhead vary. This is a small encoder, not a general language model.
- The byte-identical 26,861,777-byte WASM binary is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. `vite.config.js` rewrites to that immutable same-origin path, avoiding a duplicate large asset. Root combined deployment must preserve that app. `asset-audit.json` records bytes/hashes.

## Privacy / devices / caching

No API keys, accounts or paid services. Question text is sent only through `postMessage` to a local worker; host traffic consists only of file GETs. No user documents or credentials are shipped; all fixtures are synthetic. Imported instructions are inert text, with no tools, authority or outbound content API. The model host sees ordinary download network metadata, not question contents.

Use a current browser with WebAssembly, module workers and Blob URLs enabled. No WebGPU required. Actual testing: headless desktop Google Chrome on this macOS host; 320/390 CSS-pixel phone layouts. Physical mobile devices, Safari, Firefox and assistive technology are untested; memory/performance depend on device. Failures provide actionable errors and no fake inference. Runs time out at 180 seconds. Source edits, cancellations, delayed fetches and file reads use run identities; obsolete responses cannot overwrite newer work.

Model files use Transformers.js browser cache. Worker, module factory and WASM binary use Cache API, bridged to Blob URLs for fresh workers. Once one online inference succeeds, further runs on the **same open page** worked with the browser context fully offline and a newly created worker. Offline page reload/navigation is **not** promised (no app-shell service worker). Cache eviction, denied storage, clearing site data or upstream changes can require internet again. No input content is saved in cache; exports are user downloads. Close/reload resets session reviews. Use browser site settings to clear model/runtime caches.

## Artifact contract and reversibility

JSON includes original `input.records`, AI matrix, complete reviewed `records`, ordered IDs and computed metrics. CSV has one row for each question, original and edited answers, topic/decision/note and worksheet position (blank for holds). Spreadsheet formula-like string fields receive an apostrophe safety prefix; JSON stays lossless. Markdown serializes individual question/answer strings with JSON quoting, so embedded quotes/newlines cannot create extra list items. Learner MD omits answers, key includes only scheduled reviewed answers.

Importing an exported audit intentionally **reprocesses the original bank**, not a saved-review restoration: previous reviewed edits remain in the downloaded audit, and new reviews start pending. No remote files/accounts are changed. Holds/edits can be undone during this session; originals remain in every JSON audit. The AI cannot verify facts, answer correctness, curriculum goals, difficulty, prerequisites or educational suitability. Similarity may collapse opposing claims into the same topic, and maximizing topic switching may be inappropriate for beginners. Mandatory educator review is essential.

## Development / publication

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `deploy` is required by collection contract but **do not use it to publish the collection**. Publish with root predeploy/deploy at `/Volumes/ExternalHD/daily_app2`, then verify Pages commit/assets and real inference. Vite base `/daily-app2/20261108-14/`.

Validation scripts: `node core-test.mjs`; `python3 serve-test.py` serves the actual production bundle at port 6254; `node browser-test.cjs`; `node extra-test.cjs`; `python3 artifact-test.py`; root gallery served at port 6264 for `node gallery-browser.cjs`. Playwright uses the existing workspace installation. Successful inference tests use real weights; fault injection is only for malformed/unsupported/crash/timeout defenses. See [VALIDATION.md](VALIDATION.md) for observed outcomes, including public checks.
