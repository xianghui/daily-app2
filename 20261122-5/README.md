# Equation Folio

A local-AI editorial desk for science curriculum authors turning rough compound-name equations into checked classroom worksheets. **Symbolic equations only**, not experiment instructions, chemical feasibility assessment or safety advice.

## Workflow

1. Choose Carbon cycle or Carbonate workbook, paste JSON, or import source/audit JSON. Supply a title and 1–12 equations with unique IDs and `left` / `right` arrays of 1–4 descriptions each. Each description is ≤200 characters, title ≤200, ID ≤50; original input ≤60,000 characters. Use the fixed catalog or synonyms; out-of-catalog compounds must be held.
2. Explicitly click **Load AI & reconcile**. Real local MiniLM inference embeds the descriptions against 16 catalog definitions. Four texts per neural chunk, maximum 112 texts / 28 chunks; vectors must be finite, normalized and 384-dimensional. Nearest three cosine similarities are evidence, **not confidence**. Input is data and cannot request credentials or execute tools.
3. Review every proposed formula and equation side. Change the compound, approve or hold, and attach multiline notes (≤2,000 characters). Identity changes reset approval. Every edit invalidates the applied export. Undo restores earlier reviews (last 100 changes). Change sides in the preserved source and rerun. There is no bulk auto-approval.
4. Apply the reviewed batch. Exact BigInt rational RREF solves the signed atom matrix. Only a one-dimensional nullspace with a strictly positive vector is released; denominator LCM / coefficient GCD gives primitive integer coefficients. Coefficients over 1,000,000, duplicate same-side species, impossible/nonpositive balances and ambiguous multi-dimensional balances are blocked. A separate atom recount verifies conservation. Any held compound holds its whole equation.
5. Inspect formulas, coefficients and per-element left/right counts. The baseline uses **all coefficients equal to one on the same reviewed species**. Counts are computed, not model accuracy or measured time savings. A balanced equation may still be chemically impossible or incomplete.
6. Download current JSON, CSV or Markdown, or copy Markdown. Markdown includes student blanks, a separate answer-key section and complete originals/reviews. Held/blocked drafts are labeled and have no released coefficients. CSV has every original compound row, reviewed identity, source description, decision, notes and any released coefficient. JSON preserves the catalog, complete originals, all reviews, similarity evidence and atom proofs. Reimport an audit JSON (≤8 MB) restores only its bounded original input and requires renewed inference/review, never trusting saved answers. Spreadsheet formula-like string fields are prefixed with an apostrophe; JSON preserves exact source text.

## Real AI, runtime, downloads and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled feature extraction. Neural semantic retrieval helps recognize synonyms such as dextrose/glucose, ethanoic/acetic acid and washing soda/sodium carbonate. No text generation or hard-coded model responses.
- Transformers.js **4.3.2** / ONNX Runtime Web, single-thread **WASM CPU**, no WebGPU requirement. The worker supplies a max_length option, but the enforced tokenizer `model_max_length` is **512**; the app does not claim that the pipeline enforces its supplied 256 option. Descriptions are character-bounded. Real inference, not a heuristic fallback, is required before review.
- First load approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus ~0.6 MB worker/factory and app shell. Initial internet required. Model artifacts download from Hugging Face and its documented CDN redirects. There are no API keys, paid services, remote inference integrations, uploads, telemetry or external actions. Only compound descriptions / catalog definitions enter the local neural model; equations are not executed as code. No quantities or experimental procedures are generated.
- Same-origin immutable shared dependencies (preserve their originating apps):
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
  - Exact hashes/bytes/protocol are in [runtime-dependency-audit.json](runtime-dependency-audit.json).
- Worker source, WASM factory and WASM binary are explicitly cached with Cache API; Transformers.js caches model artifacts. Tested offline scope: **fresh-worker inference in an already-open warmed page with all network disabled**. No offline cold startup/reload claim. Storage eviction/private browsing can require another download. Inputs and reviews remain in page memory until the user exports; model caching does not intentionally save input documents.
- HTTPS or localhost, module workers, WebAssembly SIMD and several hundred MB free RAM needed. Desktop Chrome was tested with GPU disabled. Phone layouts at 320/390 px were tested on desktop Chrome, **not physical low-memory phones**. Other browsers/device memory conditions unverified. Unsupported devices get an actionable error, never fake output. Loading/progress, 180-second timeout, cancellation and retry are visible; cancelled/input-invalidated run IDs cannot write new results.

## Scope and limitations

Fixed 16-compound neutral catalog. Formula strings are flattened atom compositions (for example calcium hydroxide is `CaH2O2`, equivalent atom counts to `Ca(OH)2`). No charge balance, ions, hydrates, state symbols, arbitrary formulas, reaction prediction, feasibility, mechanisms, yield, energy, conditions, concentrations or mixing quantities. Similar compounds and negation can be misidentified: the deliberate “Not glucose ... this is water” probe selected glucose. **Review every identity**, even when atom conservation passes. The balancing engine proves only a bounded mathematical property of the reviewed formula list; it cannot repair missing species or change reaction sides automatically.

## Development and publication

React + Vite; base `/daily-app2/20261122-5/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`; **do not use the per-app deploy to publish this collection**. Run root `npm run predeploy` and root `npm run deploy` to assemble/publish all gallery entries. The unchanged 1 GB guard required deploy-only sharing of byte-identical geometry WASM for `20261029-7` with `20261028-24`; original source builds and compatibility JS URLs remain intact, and real older-app image/STL import/export regression is checked.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed results. Synthetic fixtures only, no real documents or credentials. Build success is not inference proof. Tests use local Playwright from the builder workspace; no testing dependency is shipped to users.


## Equation Folio — 20261122-5

Local MiniLM reconciles informal compound names to a fixed neutral-formula catalog before mandatory editorial review. Exact rational nullspace balancing proves minimal positive atom-conserving coefficients against all-one drafts; export student blanks, answer keys and complete JSON/CSV/Markdown source audits. Both tiny fixtures matched 20/20 compound links, but a negation probe mislinked: review remains essential, and atom conservation does not establish reaction feasibility or safety. Symbolic equations only, no experiment instructions. Reuses immutable worker/factory from `20261115-6` and WASM from `20261107-2`; preserve these dependencies. Offline scope is fresh-worker inference in an already-open warmed page. See [workflow/privacy](20261122-5/README.md) and [observed validation](20261122-5/VALIDATION.md). The unchanged 1 GB guard required deploy-only byte-identical geometry sharing for `20261029-7` → `20261028-24`; source builds and compatibility JS URLs are preserved. No digest sent.

Public release: matching Pages `45da5001c9dde1cc0c109252939613c5c198edb2` and workflow `44945054607` succeeded. Seven public asset byte matches, both real-AI fixtures, complete reviewed/export/max-batch/offline/privacy suite, all 786 gallery cards and the affected older geometry app's real import/export regression passed. Combined size 999,593,305 bytes remains below the unchanged guard. Source staging preserves and excludes unrelated pre-existing recovery work; no digest sent.
