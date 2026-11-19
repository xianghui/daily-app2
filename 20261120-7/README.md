# Skip Ledger

A local-AI, human-reviewed conditional-questionnaire audit for coordinators consolidating informal yes/no answer notes. Unlike a rectangular completeness grid, it respects explicit skip logic and distinguishes unknown eligibility paths from intentional skips. This is not an eligibility or access decision system.

## Workflow

1. Choose either synthetic example, paste source JSON, or import a `.json` source/audit file. Edit the canonical question register, supplied gates, roster and answer notes. `first` holds questions, `people` the full roster and `records` the informal answers. Binary values are **1 yes**, **0 no**, **null missing**.
2. Set `minSimilarity` (0–1 cosine cutoff; not confidence). Click **Load AI & reconcile**. The first model/runtime download needs internet; progress and cancel are available. Nothing runs until this explicit click.
3. Inspect every proposed question link, exact source question and neural cosine evidence. Correct links and binary values, add multiline review notes, and approve or hold **each** record. Holds preserve originals but cannot populate the audit matrix. Undo restores the previous review edit. Answer/link edits reset that row's approval.
4. Apply the reviewed study. Required missing answers become verification tasks; blocked gates request their prerequisite; unexpected off-path answers are retained and flagged, not erased. Editing any review invalidates all export buttons until applied again. Editing source cancels inference and clears review state.
5. Download complete JSON, record CSV, person/question Cells CSV or Markdown including verification tasks. Copy Markdown if desired. Imports of audit JSON restore **original inputs only** and require fresh AI/review, deliberately not trusting prior approvals. No emails, changes to accounts, access grants or deletions occur.

`when:null` makes a question unconditional. A conditional question uses `when:{"question":"parent-id","equals":1}` (or 0). Gates must form an acyclic graph; question order does not matter. Only one equality gate per question is supported. The full canonical register and every participant remain in the JSON/Markdown; CSVs contain either all source records or all person/question cells. JSON is the lossless restorable format. CSV formula-like text is apostrophe-prefixed; signed answers remain numeric. Files use real CSV quoting, including multiline notes.

## Exactly what AI does

Real [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, generates 384-dimensional normalized mean-pooled neural embeddings of the canonical questions and informal answer labels. Cosine nearest-neighbor retrieval proposes each question link above the chosen cutoff. Labels need not share exact words. These are not generated answers, hard-coded example outputs, regex classification, truth detection or calibrated probabilities.

Model: ONNX q8 quantization, **WASM CPU**, through Transformers.js **4.3.2** / ONNX Runtime Web. Model source/license is above; Transformers.js and ONNX Runtime are Apache-2.0 / MIT respectively. No WebGPU is required. Model revision follows the host's `main`, not a pinned immutable revision; the observed revision is recorded in `runtime-dependency-audit.json`. Downloads are approximately **23 MB weights** plus tokenizer/config files and **26,861,777-byte WASM (~27 MB)** plus worker/factory. Model files come from Hugging Face and its CDN (`huggingface.co`, `hf.co`/Xet). Keep internet available for the first load. Similarity handles short English topical labels, not arbitrary multilingual language understanding, negation, entailment or identity verification. Similar questions can mislink, so human review is mandatory.

The default path needs no key or paid service; there is no optional external inference integration. User text is sent only to a local browser worker, never into a network request. Only public model/runtime downloads occur. Imported text is inert React-rendered data, not tool instructions. No personal or secret fixtures are included. Public runtime caches contain assets, not answer notes; input/review state stays in page memory and is lost on reload. Downloaded audits can contain sensitive user data if users supply it themselves.

## Runtime dependencies and offline scope

To avoid republishing tens of MB in a nearly full collection, the app reuses an immutable same-origin module worker:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

**Preserve those originating published apps.** Their hashes, worker text/vector protocol, q8 CPU settings and batches of four are audited in `runtime-dependency-audit.json`. The app caches worker text under `skip-ledger-worker-v1`; the shared worker bridges its factory/WASM Cache API entries to blob modules and Transformers.js caches model assets. After a completed online run, a **fresh worker in an already-open warmed page** is tested with browser networking disabled. Offline page reload, first navigation, eviction recovery and installable/PWA startup are **not promised**. Model cache clearing/eviction requires a fresh online download. There is no service worker or external-script CDN for app code.

Use a current secure-context browser with WebAssembly SIMD, module workers, Cache API and several hundred MB free memory. Chrome desktop CPU was tested with GPU disabled. Physical phones, Safari, Firefox, memory-constrained devices and accessibility assistive technology are unverified; responsive 320/390px layouts were tested in Chrome. Worker/network/runtime failures show an actionable error, no synthetic fallback. A run times out after 180 seconds. Retry starts a new worker; cancellation terminates it. Run identities also guard late file reads, worker fetches and old results.

## Deterministic audit and metric interpretation

Every approved binary answer is joined to its supplied person and reviewed question. Duplicate approved cells block application rather than overwriting data. Gate evaluation recursively follows the question DAG:

- Unconditional questions are required.
- An inactive parent path makes all descendants skipped, even if an off-path answer exists.
- An active missing/held gate, or a blocked parent, leaves descendants **blocked**, not skipped.
- Otherwise the reviewed parent's binary value is compared with the supplied equality condition.
- Required + no value = **missing**; required + value = **answered**; skipped + value = **unexpected answer**; skipped + no value = **intentional skip**.

The naive baseline counts every blank person/question cell without consulting gates. The result compares that with confirmed required gaps and separately reports blocked gates, intentional skips and unexpected answers. No percentage savings, elapsed-time claim or measured accuracy improvement is asserted. Resolving a gate can create additional required gaps. Structural completeness is only a workflow validation signal, not correctness, consent, legal eligibility or proof that outreach is authorized.

Bounds: 1–8 canonical questions, 1–12 participants, 1–96 records; unique ASCII IDs 1–40 chars per list; question/answer labels and context 1–300 chars; source ≤60,000 chars; imported JSON ≤2 MB; review note ≤1,000 chars. Model calls batch four texts. The pipeline's `max_length:256` argument is not an enforced feature-extraction token cap in this version; the tokenizer's actual ceiling is 512, alongside the 300-character label bound. Every returned vector's count, dimension, finite entries and normalization are checked. Only binary reviewed answers are accepted. No compound gates, free-text answer coding, dates, survey weights, consent inference, imputation or automatic invitation sending.

## Build and validation

React + Vite. `npm install`; `npm run dev`. `npm run predeploy` builds with base `/daily-app2/20261120-7/`. Per-app `deploy: gh-pages -d dist` exists as required, but **do not execute it** for collection publishing. Publish the combined root `deploy/` using root `npm run predeploy` / `npm run deploy`.

`core-test.mjs` checks arithmetic, validation and 1,500 independent path-gate oracle cases. `browser-test.cjs` exercises real production-browser inference on both synthetic inputs, semantic changes, maximum batch, review/edit/hold/undo, offline fresh workers, exports/reimport, clipboard, input errors and responsive layouts. `artifact-test.py` independently parses actual downloaded artifacts. Defensive scripts inject only error conditions, never substitute for successful model checks. See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed outcomes and limitations, including assembled and public deployment checks. No digest is sent by the builder.
