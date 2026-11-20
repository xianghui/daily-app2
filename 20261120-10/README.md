# Overlap Ledger

A browser-local AI worksheet for QA leads reconciling **two independent inspections of the same unchanged scope**. It proposes paraphrased issue identities, requires human review, preserves unique and held findings, and exports a reinspection checklist plus an exploratory completeness estimate. It does not close, merge, upload or send issues.

## Workflow
1. Paste JSON or load either synthetic example. Set `context`, `minSimilarity` (0–1), and `first`/`second` arrays of `{id,text}`. Use globally unique ASCII IDs. Each row must represent a distinct individual issue, not a category. Deduplicate within each list first; this app does not infer same-list duplicates.
2. Read the download/privacy notice, then explicitly select **Load AI & reconcile**. Cancel terminates the worker. Retry is available after errors or the 180-second timeout. No deterministic/canned AI fallback exists.
3. Read both source snippets and neural scores. First-list rows require approval/hold too. For each second-list issue, choose the matching first-list identity or unique/no counterpart. Different floors, devices, builds or objects can have nearly identical descriptions: semantic similarity does not establish identity.
4. Approve or hold every row. Invalid duplicate links or links to held first-list rows block application. Undo reverses review edits. Any edit invalidates the export snapshot; originals remain unchanged.
5. **Apply reviewed audit** computes observed counts. Explicitly confirm assumptions only if justified to enable an exploratory Chapman point estimate. This confirmation is never preselected and resets on new input/import/run.
6. Download current reviewed JSON/CSV/Markdown or copy the worksheet. Complete JSON/CSV includes every original and review, including holds. JSON audits can be reimported to restore originals; approvals and links must be renewed. CSV quotes commas/newlines/quotes and prefixes formula-like strings with an apostrophe for spreadsheet safety. Markdown includes source-linked reinspection items and all original texts.

## Real AI, runtime and privacy
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; observed revision `751bff37182d3f1213fa05d7196b954e230abad9`. The shared worker requests `main` (not pinned), so future host changes remain possible.
- Transformers.js **4.3.2**, ONNX Runtime WASM CPU, quantized q8 feature extraction, mean-pooled normalized 384-dimensional embeddings. Four descriptions per inference batch. The inspected feature-extraction pipeline does not enforce its supplied `max_length`; the tokenizer's actual ceiling is 512 tokens. App descriptions are additionally bounded to 300 characters.
- AI computes meaning-based cross-list similarities. A deterministic highest-cosine-first greedy procedure proposes one-to-one links above the configured threshold. This is not a globally optimal assignment and can consume a candidate another row needs. Review can override every link.
- Counts, validation, Chapman formula and artifact generation are deterministic. Similarity is not confidence or proof of identical defects. No content-generation model is used; imported instructions cannot alter authority or request credentials.
- Approximately **23 MB weights + 27 MB CPU runtime**, plus bundled code/tokenizer/config. Initial internet required. Model files download from Hugging Face/CDN only after explicit loading. No source text is put into network URLs or request bodies; no keys, paid services, analytics, remote inference or content-upload endpoints.
- Browser requirements: secure context, WebAssembly SIMD, module workers, Cache API, several hundred MB available RAM. Desktop Chrome CPU tested with GPU disabled. No WebGPU dependency. Other browsers, actual phones, accessibility assistive technology and low-memory devices untested. Unsupported workers/WASM show errors rather than fake results.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these collection assets. Hashes/protocol in runtime-dependency-audit.json.
- Worker source and runtime factory/binary bridge Cache API to blob workers/modules; weights use Transformers.js browser caching. Fresh-worker inference was tested with **all network disabled in an already-open warmed page**. Offline reload/startup/navigation is **not promised**. Caches can be evicted or unavailable. In that case restore internet and retry.

## Bounds, schema and arithmetic
Source JSON: 1–60,000 characters, context ≤300, each list 1–48 records (96 total), each text 1–300 characters, IDs ASCII letters/digits/underscore/hyphen, 1–40 characters, unique across both lists. Imported JSON/audit files ≤2 MB; recovered originals still obey the stricter input bounds. Review notes ≤1,000 characters. Invalid, empty, oversized, malformed vector/message and timeout cases fail visibly without output. Run tokens guard file reads, worker fetches and results; cancellation/input changes invalidate older work.

For approved n₁ first-list and n₂ second-list issues, with m verified overlaps:

- Baseline actually observed union: `n₁+n₂−m`.
- Chapman point total: `((n₁+1)*(n₂+1)/(m+1))−1`.
- Estimated unseen: `((n₁−m)*(n₂−m))/(m+1)`.

Estimate is withheld unless assumptions are confirmed and overlap is nonzero. Fractional output is intentional; no rounding to a purported observed count. Zero estimated unseen is not evidence of completeness. Assumptions: stable closed population, independent inspections, approximately equal detectability, valid identity links and no within-list duplicates. Shared methods or inspectors create dependence; heterogeneous detection and false links bias estimates. Holds change the analyzed population and can bias inference. Small samples are especially unstable. No confidence interval, universal accuracy, causal interpretation or measured time-savings claim. Use to question scope and plan another independent inspection, never to certify safety or compliance.

## Build and publication
React + Vite, base `/daily-app2/20261120-10/`. `npm install`, `npm run predeploy`. Required individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; **publish only with the root collection workflow**, not individual deploy. No original daily_app files were changed.

See [VALIDATION.md](VALIDATION.md) for actual observed fixture outcomes, export/browser/defensive checks, limitations and publication verification. Tests use synthetic data only.
