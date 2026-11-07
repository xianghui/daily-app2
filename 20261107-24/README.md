# Distractor Desk

A local-AI assessment preparation utility for instructors. Import a bank of terms and definitions, retrieve plausible wrong answers, edit/reject questions, apply a reviewed snapshot, and download Moodle GIFT plus a lossless JSON audit. It never publishes or sends questions anywhere.

## Workflow

1. Choose Earth science / Software systems (synthetic fixtures) or paste/import JSON.
2. Supply 5–24 unique `{id, term, definition}` objects. IDs ≤40 characters, terms ≤100, definitions ≤450; JSON ≤20,000 characters, import file ≤60 KB. Use 2–4 distractors per question.
3. Explicitly click **Load AI & build question bank**. Initial downloads need internet. Progress shows individual model files and processed chunks; Cancel terminates the worker.
4. Inspect every wrong answer alongside its original definition and cosine similarity. Edit stems, change choices, add audit notes, or exclude a question. Undo restores the last edit (30 snapshots). Imported text is data, never tool instructions.
5. Apply reviewed bank. Invalid duplicate/self answers, blank/oversized stems or an empty included set block applying. Any subsequent edit disables export until reapplied.
6. Download/copy GIFT for Moodle (**Import → GIFT**). Enable Moodle's “Shuffle within questions”; the correct choice is first in the file. JSON preserves every original concept and excluded question, instructor notes and computed metrics. JSON can be imported again as **source concepts**, not restored review state.

## What AI does

Real normalized 384-dimensional mean-pooled embeddings of concept **definitions**, produced by [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized ONNX q8, Apache-2.0. [Transformers.js](https://github.com/huggingface/transformers.js) (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread. No WebGPU requirement. Inference executes inside a bundled module worker on the user's device. Definitions are truncated at 256 tokens, chunks of 4; maximum 24 concepts. No generative model, paid provider, remote inference option, API key or hidden backend.

After real inference, deterministic cosine ranking selects the nearest distinct definitions. Schema checks, input-order baseline, uniqueness, source conservation, snapshot application and GIFT escaping are deterministic. Imported words do not control code or permissions. This is not an AI chat wrapper or a keyword demo; inference failure yields an error, never canned suggestions.

## Download, caching, privacy

Approximately 23 MB quantized model weights, tokenizer/config files, 26,861,777-byte shared WASM and a ~53 KB module factory on first use; bundled worker ~549 KB, application JS ~236 KB. Requirements: current WebAssembly/module-worker browser, Cache API recommended, roughly 300 MB available memory. Tested in desktop Chrome, not physical phones or Safari/Firefox. Phone layouts tested with Chrome at 320 and 390 pixels. Browser memory needs vary.

Runtime code is hosted by this GitHub Pages collection. The byte-identical immutable WASM is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that app when deploying. Its size is not duplicated in this app's build. Runtime factory and worker source are explicitly cached in Cache API; Transformers caches model downloads separately. Model downloads use Hugging Face and its CDN redirects, currently the model's main revision (not pinned). Results may change if upstream assets change. Source, runtime and license notices are in this folder.

Only static file GET downloads occur on the default workflow; user definitions are not in requests. No analytics, external fonts, content logging or provider credentials. User inputs/review exist only in tab memory and explicitly downloaded artifacts. Cache contains model/runtime files, not user content. Browser storage can be evicted; remove it with browser site-storage controls. Once cached, **fresh worker inference in the already-open tab** was tested with all network disabled. Offline app-shell reopening/reload is not supported or claimed. If cache storage is unavailable, online inference can still work but offline reuse is not guaranteed.

## Limits and honest metrics

A semantic neighbor is not necessarily a valid distractor; synonyms or overlapping definitions can make multiple answers correct. Mixed domains and vague, multilingual or long definitions may rank poorly. An instructor must verify stems and alternatives and pilot the bank before high-stakes use. Notes remain in JSON, not GIFT. No student response data, psychometric validation, difficulty calibration or factual correctness checking.

Mean cosine compares current included distractor definitions with each correct concept's definition. The baseline takes the first N other input concepts. “Different slots” counts reviewed choices not in that baseline set. These are computed semantic relatedness measures, not confidence/accuracy, learning gains or measured time savings. No fabricated percentages. Two small synthetic banks produced 8/8 expected pair-neighbor inclusion each; this is fixture recall, not universal educational quality.

## Validation / development

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only from repository root** so the collection is retained. Vite base is `/daily-app2/20261107-24/`.

See [VALIDATION.md](VALIDATION.md), browser logs/JSON, independent `gift-pegjs` parser results, export files and screenshots. `serve-test.py` serves the production bundle with real collection paths at port 6240. `node browser-test.cjs`, `node extra-test.cjs`, `node core-test.mjs`. Test fault injection is confined to defensive checks; successful fixtures and offline tests use the actual model. A real Moodle server import and physical low-memory-device tests were not performed.
