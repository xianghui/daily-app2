# Referee Weave

A browser-local allocation desk for small workshop organizers: paste/import a JSON roster of expertise/capacities and proposal abstracts/conflicts → real semantic inference → inspect and edit every paper–reader relevance score/exclusion → approve or hold each paper → apply a complete capacity-respecting assignment → download JSON, CSV or Markdown/copy the handoff. No invitations or external writes.

## Real AI

`Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 ; source model https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 . Transformers.js 4.3.2 + ONNX Runtime Web, quantized q8 CPU WASM feature extraction. Normalized mean-pooled 384-dimensional vectors yield cosine scores, converted to editable integer relevance points (negative cosine clamped to zero). AI materially distinguishes reworded abstracts and expertise; it does not discover conflicts or certify competence. No generated answers, remote calls or fake fallback.

First run needs internet and approximately 50 MB: ~23 MB model/tokenizer/config files from huggingface.co and hf.co delivery hosts, plus 26,861,777-byte same-origin WASM and local JS/runtime. Model host default revision is mutable; reproducibility can change if upstream changes. Worker and runtime are locally bundled; the byte-identical shared WASM is preserved at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Root combined deployment must preserve that older app. Cache API retains runtime/worker/model downloads; data stays in page memory unless explicitly exported. No credentials or analytics. Network captures check only GET downloads and absence of content-bearing URLs/bodies. Clear site data to remove caches.

## Devices and limits

Modern browser with module workers, WebAssembly SIMD and sufficient memory. Tested desktop Chrome with WASM CPU, no WebGPU required; physical phones and other engines unverified. Fresh-worker offline inference works **inside the already-open cached page**, tested by blocking network after loading. Offline navigation/reload is not promised. Private browsing/cache eviction may require re-download. Downloads/progress, cancellation, actionable errors and a 180-second timeout are visible; retry starts a new worker. Run IDs block late replies/file reads from replacing newer input.

2–6 reviewers; capacities integer 0–8. 1–8 papers; 1–2 distinct readers per approved paper. ID 30 chars, abstract/expertise/goal 400, name 100, note 500. Four texts per inference batch, 256-token context truncation. JSON payload 40 KB, file import 1 MB. Other input formats rejected. Text is data, never instructions to execute actions or request keys. Use synthetic IDs; do not import sensitive abstracts into a public/shared computer.

## Review and deterministic plan

Inspect all source expertise, raw cosine and proposed points. Edit points 0–1000 or exclude unsuitable pairs. Declared conflicts cannot be overridden in review: correct source JSON and rerun if wrong. Each edit resets that paper's approval and invalidates applied exports; undo is available (100 edit history). Every paper must be approved or held. Holds preserve complete records but do not allocate slots.

Exact integer min-cost flow maximizes total reviewed relevance among complete assignments, with reviewer capacity and paper-reader edge capacity one. Reverse residual edges permit reassignment. If a complete assignment is impossible, apply is blocked; no partial assignment is exported. Equal optima follow graph traversal order, not a fairness promise. The first-eligible input-order baseline uses the same approvals, exclusions, capacities and scores. Show filled slots separately: relevance totals from incomplete baselines are explicitly not comparable. These are computed planning objectives, not time savings, accuracy or review quality claims.

JSON retains original inputs, all review scores, cosine evidence, holds, assignments and loads. CSV has every paper–reviewer pair (including conflicts/holds), source snippets, reviewed points/decision/note and assigned flag; spreadsheet-formula-like text is prefixed with an apostrophe, including multiline fields. Markdown includes all papers and ratings as a human handoff. Exports always reflect current applied edits. Audit JSON reimport restores original source only and resets approval; no stale assignment restoration.

## Development / validation

`npm install`; `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261110-4/`. Required per-app deploy script exists but **do not use it to publish this collection**. Run root `npm run predeploy` then root `npm run deploy`.

Production local browser tests: `python3 serve.py`, then `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`; Playwright is provided by the workspace. `node core-test.mjs` checks 500 independent exhaustive assignment cases; `python3 artifact-test.py` independently parses real downloaded artifacts. See VALIDATION.md and machine-readable reports. Browser fault injections test defensive paths only; successful runs always use the actual model.

Limitations: tiny synthetic fixtures are not general accuracy evidence. Closest expertise is not suitability, and negation/unrelated text still receives scores. Conflicts are only supplied declarations; this cannot establish reviewer independence. For low-stakes workshop planning, not hiring/admissions/grant selection or integrity certification. Human review is required.
