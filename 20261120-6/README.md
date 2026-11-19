# Gap Orchard

Survey coordinators: reconcile scattered numeric answer notes with a canonical question register, inspect missing-answer patterns, and export a capacity-bounded follow-up worksheet. No survey account access, messages or invented answers.

## Workflow

1. Choose either synthetic example, paste JSON or import `.json` (source or a prior audit).
2. Set canonical `first` questions with `id`, description `text`, numeric `min`/`max`; explicit `people` roster with ID and `followup` permission; long-form `records` with ID, person, informal question label and numeric `value` or `null`.
3. Set `cellBudget` (maximum missing answers to request), `contactCap` (maximum people) and `minSimilarity` (cosine abstention threshold, not confidence).
4. Read the download/privacy notice, then explicitly **Load AI & reconcile**. Review every proposed question link and original rating. Correct the link/value, leave blank for missing, approve or hold. Notes support multiline evidence; undo restores previous edits. Link/value edits require renewed approval.
5. **Apply reviewed study** validates ranges and duplicate cells, displays complete-case loss and pairwise availability, and enumerates a bounded follow-up plan. Rejected/held records stay in the audit but cannot fill cells. Edits invalidate exports.
6. Export reviewed JSON audit, complete record CSV, roster/matrix CSV, Markdown checklist or copy Markdown. Reimporting an audit restores original input only: prior approvals are never silently reused.

All listed questions are required for all listed people. Exclude conditional/structurally skipped questions from the register. Empty ratings remain missing; zero is a real value. No imputation or missing-at-random assumption. Duplicate approved person/question cells block application rather than silently overwriting data.

## Real AI and local runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 feature extraction, mean-pooled normalized 384-dimensional sentence embeddings. Semantic cosine ranking of question labels materially drives which person/question cells are populated. It is not an LLM instruction interpreter or consent classifier.
- Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **WASM CPU**, one thread; no WebGPU requirement or remote inference.
- First explicit load: approximately **23 MB model + 27 MB WASM**, plus ~1 MB worker/factory/tokenizer assets. Internet required. Downloads from public Hugging Face and its CDN; all app/runtime scripts same-origin. Main model revision is not pinned; observed revision recorded in `runtime-dependency-audit.json`. Browser progress reports each file and four-text chunk; cancellation terminates workers, 180-second timeout and retry controls are visible.
- To preserve the collection's 1 GB limit, reuse immutable byte-audited worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/assets. Protocol `{id,texts}` → progress/batch/result `{id,vectors}`. Hashes and source inspection in runtime audit. App UI/React bundled locally.
- Worker source and runtime factory/WASM cached using Cache API; Transformers caches public model assets. After successful loading, **fresh-worker inference in an already-open warmed page** was tested with all network disabled. Offline reload/navigation is **not** promised. Cache eviction/private-mode restrictions may require online reload. Source inputs are never cached or persisted by this app.
- Requires secure-context current browser, module workers, WebAssembly SIMD, Cache API for offline reuse and several hundred MB RAM. Desktop Chrome CPU tested; physical phones, other browsers and low-memory devices unverified. Unsupported runtime/network failures show actionable errors; no fake or deterministic replacement inference.

## Privacy and limits

No keys, providers, telemetry or remote content calls. Default traffic only retrieves public files; your question labels, participant IDs and answers remain in memory on your device. User explicitly downloads/copies exports; audit JSON includes the originals and must be handled accordingly. Imported strings are data, rendered as text. No sending, file deletion, account modification or inferred authority. Use synthetic fixtures when sharing public validation artifacts.

1–6 questions, 1–12 people, 1–72 records; IDs unique ASCII letters/digits/underscore/hyphen, 1–40 chars within each list. Descriptions/context 1–300 chars; source ≤50,000 chars; import ≤2,000,000 bytes. Ratings and ranges within ±1,000,000. Integer cell budget 0–72, contact cap 0–12. Worker batches four texts (78 maximum, 20 chunks). Actual tokenizer `model_max_length` is 512; feature-extraction per-call `max_length` is not treated as a stricter token guarantee. Vector count/dimension/finiteness/unit normalization are validated. Run IDs protect file reads, worker-source downloads and late results; cancellation terminates workers.

## Deterministic planning and comparison

Construct a complete person × question matrix from approved records; absent, empty and held cells remain missing. Report complete-case row count and pairwise observed counts, with no correlations, imputation or statistical-validity claims.

For permitted incomplete people, enumerate all subsets (≤4096), maximize newly complete people within both requested-answer and contact caps; ties minimize answers, then retain the earliest roster-bit-order subset. Each selected person is allocated all their missing questions. Baseline scans roster order and takes each whole person if both remaining caps allow it. Both use the same data/permissions/budgets. Potential complete-case counts assume all requested answers return: a **capacity ceiling**, not a response forecast, unbiased analysis or measured improvement. Consent is supplied, never inferred. Refine the source roster/permissions/budget and rerun to revise a plan.

## Exports

- JSON `gap-orchard/v1`: originals, every review/evidence note, complete roster/cells/reasons, pairwise counts, selected/deferred statuses and computed comparison metrics.
- CSV: every original record, original value, reviewed link/value/decision and note.
- Matrix CSV: every person, permission, plan status/selected flag, each question value (empty if missing) and missing-question IDs.
- Markdown: capacity comparison, complete roster/checklist and complete record audit.

CSV fields are quoted with escaped quotes and CRLF records; formula-leading textual fields are apostrophe-protected, including multiline fields; signed numeric values remain numeric. JSON preserves exact original text.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), runnable test scripts and JSON observations. Two real-model synthetic domains, 12 expected links, maximum 72-record processing, stale/cancel/retry/offline checks, downloaded artifacts independently parsed, permission/budget guards, duplicate/range failures, and 100 independent DP planner checks. These small synthetic tests do not establish general accuracy. English short labels are the tested scope; multilingual quality is unverified. Similarity does not prove question identity or resolve negation; one library paraphrase barely clears the example threshold. Human review is mandatory, including unrelated text and conflicting labels. Holds reduce observed coverage. This app does not diagnose bias, restore consent, guarantee replies or make outreach automatic.

## Build and publication

`npm install`; `npm run predeploy` builds the React + Vite app at base `/daily-app2/20261120-6/`. Per-app `deploy` remains required but **do not execute it**: publish the combined collection using root `npm run predeploy` / `npm run deploy`. Browser validation serves the production `dist` with production-prefixed runtime paths. Run `python3 serve-test.py` and `node browser-test.cjs`; defensive tests use injected failures only, while successful fixtures and offline checks use real inference.
