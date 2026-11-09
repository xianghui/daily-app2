# Screening Harbor

For research assistants doing title-and-abstract screening: paste/import a review rubric and short paper snippets → run local semantic inference → inspect both sides of every criterion → manually queue, exclude or mark unresolved → apply → export a complete audit and full-text reading checklist. This is **not automated eligibility determination**, a systematic-review platform or a complete PRISMA flow diagram. Unlike general document routing, every paper must satisfy multiple supplied criteria, excluded papers have one primary reason, and unresolved records remain in stage totals.

## AI, licenses and privacy

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; upstream [sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), q8 on WASM CPU. Normalized mean-pooled 384-dimensional embeddings compare each snippet with the inclusion and exclusion anchor for every criterion. The larger cosine wins; all inclusion sides propose full-text reading, any exclusion side proposes an exclusion candidate and the first failing criterion. There is no confidence percentage or semantic entailment claim. The question/title are human context, not model inputs; eligibility constraints must be encoded in anchors.

The initial download is approximately 23 MB model weights + 27 MB WASM + tokenizer/config and bundled runtime. Internet required initially. Hugging Face/CDN supplies model files; app, worker and runtime come from this static site. No requests for model files until explicitly loading AI. All content stays in the browser/worker. No remote inference options, API keys, analytics or content persistence. Imported instruction-like text is inert data and cannot invoke tools or request secrets. Only synthetic fixtures are included.

WebAssembly SIMD and module workers required; WebGPU is not used. Current desktop Chrome was tested on the builder Mac; other browsers and physical phones are unverified. Low-memory devices or blocked model hosts can fail. Errors leave no fabricated evidence; cancel/retry creates a fresh worker.

Worker/runtime files are stored explicitly in Cache API, model files via Transformers.js. After a successful run, fresh-worker inference works **offline in the already-open page while caches remain**. Offline navigation/reload is not supported or promised. Clear site data to remove model/runtime caches. Browser caches do not store input content. The WASM is byte-identical to the immutable shared `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older app asset in combined deployment. Factory and bundled worker are local to this app.

## Input, bounds and review

JSON has `name`, `question` (1–300 characters), `criteria` (1–4 objects with unique `id`, `label`, `include`, `exclude`) and `papers` (1–24 objects with unique `id`, `title`, `text`). Anchors are 1–300 characters, distinct on each criterion; titles 1–160; snippets 1–600; globally unique simple IDs up to 32 characters. Workflow JSON max 50 KB (conservative character limit), import file max 1 MB. JSON/prior JSON audits only: no PDF, BibTeX or CSV import. English intended. Four-text batches, maximum 32 model texts; 256-token truncation and 180-second timeout. Non-English, punctuation-heavy or complex text may truncate or perform poorly.

Review every original snippet and both anchors, then choose full-text reading, exclude, or unresolved. Exclusion requires a supplied primary criterion. Change reason before setting an exclusion decision; reason changes reset decision to pending. Add rationale/follow-up (max 500 characters), undo edits; every edit invalidates the applied export snapshot. Original inputs remain unchanged. Source changes cancel current work; run IDs, guarded file/worker fetches and terminated workers prevent stale overwrites. Reimporting an audit restores originals and requires fresh inference and human review, not silently trusted old decisions.

## Deterministic output and honest comparison

Only fully reviewed records can be applied. Full-text + excluded + unresolved always equals the original count; no deduplication or records silently dropped. Exclusion totals count one primary reason per excluded record. The full-text queue retains source order. These counts do not encompass identification, deduplication or later full-text eligibility.

A strict lexical baseline resolves an anchor side only when the normalized full supplied phrase occurs in the snippet and its opposing phrase does not; any exclusion resolves the paper, otherwise all inclusion sides must match. The UI compares how many records this rule resolves with the number of AI proposals and how often the human changes a proposal. This exposes otherwise manual first-pass comparisons; **proposal volume is not accuracy, saved time or clinical/research validity**. No quality or speed improvement percentage is claimed.

MiniLM can ignore negation, confuse mixed populations and invent certainty from missing information. The two simple synthetic fixtures matched all 8 intended decisions and exclusion reasons, but a negated randomized-trial challenge wrongly proposed full-text inclusion and a missing-design snippet wrongly proposed exclusion. Do not automatically accept outputs. Full-text eligibility, study validity, evidence synthesis and critical appraisal are out of scope.

## Artifacts

- JSON: versioned complete audit, original question/criteria/papers, both-side model evidence, all reviewed decisions/notes, counts and comparison.
- CSV: every paper with original title/snippet, AI proposal/reason, human decision/reason/note and baseline. Spreadsheet-formula-like strings get a leading apostrophe, including multiline notes; JSON preserves exact strings.
- Markdown/copy: current full-text reading checklist, complete decision log and supplied criteria. Unresolved/excluded papers remain in the audit, not in the reading queue.

No exports until Apply succeeds; all artifacts use the current reviewed snapshot. Downloads/copy never send data externally.

## Build and tests

`npm install`, `npm run predeploy`. Vite base `/daily-app2/20261109-9/`. Required per-app gh-pages scripts exist, but publish **only via root combined-site predeploy/deploy**, never replace the collection with this app's dist.

`node core-test.mjs`; `python3 serve-test.py` serves the production bundle at localhost:6299 with shared WASM; `node browser-test.cjs`, `node edge-test.cjs`, `node network-test.cjs`, `node additional-test.cjs`, `python3 artifact-test.py`. Browser harness uses installed Playwright in `/Users/hsianghui/.openclaw/workspace/node_modules/playwright` and Chrome; this is a developer-only path, not an app runtime dependency. See VALIDATION.md and machine-readable reports for actual observations.
