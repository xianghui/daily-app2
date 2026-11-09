# Question Compass

An editorial review desk for researchers who repeatedly prepare semi-structured interview guides. Paste a question batch with an interview goal and a question-only time budget. Real local semantic inference suggests one of four framing lenses; inspect anchor evidence, override classifications, rewrite questions yourself, approve/hold every question, then apply and export a facilitator guide and complete audit.

This is distinct from duplicate-question pruning: it screens question framing and makes deliberate human editing and timeboxing traceable. It does not generate rewrites, certify neutrality, infer participant intent, or score interview quality.

## Run / publish

```
npm install
npm run dev
npm run predeploy
```

Vite base `/daily-app2/20261109-23/`. Per-app `predeploy` and `deploy` scripts are retained as required, but **publish only through the root combined-site workflow**, never this app's deploy script. Build references the immutable identical WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier build. Other code, worker and WASM factory are bundled with this app. React + Vite, no backend.

## Workflow and formats

1. Choose either synthetic example, paste JSON, or import a `.json` draft/prior audit. Required shape:
   ```json
   {"name":"Checkout study","goal":"Understand friction","budget":20,"questions":[{"id":"Q1","text":"Tell me about the last time you placed an order.","minutes":5}]}
   ```
2. Understand first-load costs, then explicitly click **Load AI & screen questions**. Nothing downloads from the model host before that action. Cancellation terminates the worker; retry creates a new worker.
3. Inspect nearest example text and cosine similarity for open experience, closed/yes-no, leading/assumed praise and multi-part lenses. Every proposal starts pending. These categories overlap: a question may be both closed and leading; only one primary lens is retained. Goal text is planning context and does not drive model screening.
4. Edit the lens, wording, minutes and facilitator note. Approve or hold every record. For an approved non-open original, change wording or document why you retain it. A note is a human retention decision, not proof that bias has been fixed. Any edit invalidates exports; wording/lens/time/note edits also reset that question to pending. Undo restores the previous review state. Model scores always refer to the original question, not the human rewrite.
5. **Apply reviewed guide** enforces a question-only minute budget. Reserve consent, introduction and breaks outside it. Approved prompts keep original order; held prompts remain in the audit. This does not optimize or infer interview order.
6. Export actual current JSON, CSV or Markdown, or copy Markdown. Markdown includes approved guide plus full audit. JSON includes originals, all ranks, reviews, guide and computed metrics. CSV retains every question, original wording, current wording, decisions and minutes; spreadsheet-leading formula text is apostrophe-escaped, including multiline notes. JSON import restores original inputs only, never silently restores approval. PDF, CSV import and office-document extraction are unsupported.

## Real AI and licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized `onnx/model_quantized.onnx` (q8). Model license is available from its model repository. Upstream revision is not pinned; record outcomes here refer to the files downloaded during validation, not a guarantee against future upstream changes.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), CPU WASM, one thread. React (MIT), Vite (MIT), Papa Parse (MIT); see lockfile and package distributions for exact dependency licenses.
- Normalized mean-pooled 384-dimensional vectors compare each question against 12 hand-authored synthetic anchors (three per lens). Each lens takes its maximum anchor cosine; the highest ranks first. AI genuinely runs in the worker. The result vector count, dimensions, finiteness and near-unit norm are validated before ranking.
- The anchors are examples, not hard-coded output: every input runs inference and ranking. Similarity is not confidence. The model was not trained specifically as a bias detector; assumptions, negation and topical resemblance often defeat this approach. Open questions can still be leading. Multi-part prompts may be mistaken for leading prompts. Human review is essential.
- Deterministic steps: input schemas, original preservation, review gates, integer-minute accounting, budget guard, original-order assembly and export formatting. Human writers supply every rewrite. No regex is presented as AI.

## Downloads, supported devices and caching

First run needs internet and roughly **50 MB**: ~23 MB model/tokenizer/configuration from `huggingface.co` and its `hf.co` delivery hosts; ~27 MB same-origin WASM binary, plus ~1 MB code/runtime overhead. Redirected delivery files may use temporary signed download URLs; no content is included in those URLs.

Requires modern browser module workers, WebAssembly SIMD and sufficient memory. WebGPU is not required: the default path is actual tested CPU WASM, not a fallback from an untested GPU path. Desktop Google Chrome on the build Mac was tested; responsive Chrome viewports 1280, 390 and 320 pixels were exercised. Physical mobile devices, Firefox, Safari, low-memory hardware and assistive technologies are unverified.

Cache API retains model files, worker source, WASM factory and binary. Successful loading permits real inference in a **fresh worker within the same already-open page while network is fully blocked**, tested on the production bundle. No service worker/app-shell cache: offline navigation or reload is NOT promised. Private-mode limitations or cache eviction require downloads again. Site-data clearing removes caches; app content is not persisted by the app. Cache failure while online does not silently substitute fake output.

## Privacy and boundaries

Default processing remains entirely on-device. Content is passed to a local worker, never sent to the model host. Network capture during production startup/inference found only documented file GET downloads with no request bodies and no question text in URLs. No analytics, provider credentials, remote inference, automatic sending, account modification or external actions. Imported instructions remain plain text data; there are no model tools. Public fixtures and exports are synthetic only. Default state is in memory; do not use a shared browser session for sensitive interviews. Built-text credential pattern scan is a defense-in-depth check, not a mathematical proof of absence.

## Bounds and error behavior

1–24 questions; unique IDs ≤30 characters, question ≤400 characters, name ≤100, goal ≤400, note ≤500. JSON workflow ≤50 KB, audit import ≤1 MB. Budget 5–240 whole minutes, per-question 1–30 minutes. Four texts per embedding batch, model truncation at 256 tokens per text; non-ASCII/subword-heavy long questions can lose late clauses. Short prompts recommended. 180-second timeout, visible progress, cancel/retry, worker/network/runtime error messages. Run identities prevent stale callbacks or asynchronous imports overwriting newer input. Malformed vectors fail closed with no fabricated results. Approved guide must fit budget; every record must be approved or held.

## Comparisons and validation

The displayed baseline is the original unreviewed guide: all questions and their supplied minute estimates. Current metrics count approved/held prompts, actual human edits, planned minutes and remaining budget. Fewer prompts/minutes do not prove better research or measured time savings. AI/human lens agreement is not independent accuracy. See [VALIDATION.md](VALIDATION.md) and machine-readable test reports for actual outcomes, including one fixture error and a presupposition challenge.
