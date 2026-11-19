# Pairwise Foundry — 20261119-10

A local-AI worksheet for release QA leads: reconcile informal condition notes with a canonical test-factor catalog, review active levels, generate a forbidden-combination-aware pairwise test matrix within a test budget, and export actual runnable-case worksheets. No tests are executed, credentials required or notes uploaded.

**Distinct objective:** generates new covering-array configurations. Test Loom selects existing tests; Coverage Loom audits feature/scenario cells. The complete 718-entry pre-existing gallery was parsed for objective/name overlap before implementation; see `gallery-catalog-review.json`.

## Run / publishing

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261119-10/`. Required scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages is installed per-app. Publish **only through the root collection workflow** and its assembled `deploy/` directory. Individual app deploy would replace the collection.

## Workflow and formats

1. Select Checkout release or Document viewer (synthetic), paste source JSON, or import `.json` under 2 MB. Input shape: `{context,budget,factors:[{id,label,levels:[{id,description}]}],observations:[{id,description}],forbidden:[[levelId,levelId]]}`. IDs for levels must be globally unique. Each note describes **one** level; split mixed notes.
2. Edit catalog, budget and forbidden combinations in source. Explicitly **Load AI & reconcile inputs** starts neural embeddings. No model-host downloads occur beforehand.
3. Inspect the original note, top semantic evidence and factor/level assignment. Correct or hold, add multiline review notes, and approve every row. Changing a level resets its approval. Undo restores the prior review. Repeated notes remain separate audit records but activate the same level once.
4. **Apply reviewed plan** snapshots current review. Any hold blocks the whole plan, not silently shrinks the cohort. Every factor needs at least two active levels. Unmentioned catalog levels are explicitly inactive. Active levels with no feasible configuration block the plan.
5. Review coverage, generated cases, inactive levels, impossible and uncovered pairs. Budget-limited suites are labeled incomplete. Review edits invalidate the snapshot and disable all stale exports.
6. Export JSON (lossless originals/evidence/reviews/full computed plan), audit CSV (every original note and reviewed assignment), Matrix CSV (generated configurations in factor columns, marginal pair counts, suite status), Markdown (complete source/review audit, test worksheet, constraints and verification checklist), or copy Markdown. CSV preserves quotes/commas/newlines; formula-leading strings are apostrophe-prefixed. JSON is lossless. JSON/Markdown retain constraints and context that matrix CSV alone does not.
7. Reimport JSON audits to restore **original input only**. Prior review/approvals are deliberately not trusted. To reuse reviewed assignments as catalog changes, explicitly edit the new source. The maximum-batch audit was reimported and reprocessed.

Limits: 2–5 factors, 2–4 levels each; 1–24 source notes; IDs 1–40 ASCII alphanumeric/underscore/hyphen; context, labels and descriptions 1–300 characters; review notes ≤1,000; source ≤50,000 characters; imports ≤2 MB; 0–30 forbidden combinations, each with 2–5 known levels from distinct factors; budget integer 1–100. Maximum 1,024 Cartesian configurations. JSON file-envelope and original-input bounds are checked separately. CSV/PDF input is unsupported with an error.

## Actual AI / source / license / downloads

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. q8 ONNX weights, normalized mean-pooled 384-dimensional neural embeddings; cosine retrieval against user-supplied catalog-level descriptions. All returned vector counts, dimensions, finite values and approximate normalization are checked.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT); one-thread WASM CPU, no WebGPU. Up to 44 texts processed in four-text chunks. The reused feature-extraction pipeline ignores its supplied `max_length:256`; the tokenizer ceiling is **512 tokens**, not an enforced 256-token cap. Character bounds limit inputs.
- Approximately 23 MB model weights + 27 MB CPU WASM, plus runtime/tokenizer files. Internet needed for first load; explicit disclosure precedes loading. Progress, worker termination on cancel, retry and 180-second timeout are provided.
- Verified immutable shared worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps and paths. Asset audits record SHA-256 hashes and served-byte comparisons. No duplicate runtime is deployed.
- Model/tokenizer files download from Hugging Face/CDN/Xet hosts. Revision follows upstream main, not a pinned revision. No remote inference, optional provider, API key, telemetry, source persistence or agent credentials. Inputs are inert data, not executable instructions. Observed network traffic consists only of static GET/HEAD downloads, without bodies or source text in URLs; reports omit signed CDN query values.
- Cache API stores downloads, never notes. Offline scope tested: **fresh-worker real inference in an already-open warmed page with all network disabled**. Offline reload/navigation/app-shell startup is not promised. Cache eviction/private browsing can require downloads again.
- Requires WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. Desktop Chrome CPU with GPU disabled tested. Emulated 320/390px layouts checked visually. Physical phones, Safari, Firefox, low-memory devices and screen readers are untested. Failure paths return errors, not fabricated model output. Run identities protect worker fetches, replies and asynchronous file reads against stale input/cancellation/newer runs.

## Deterministic coverage engine

Approved assignments define active levels, with at least two per factor. Enumerate the bounded Cartesian product and discard configurations containing every level of any explicit forbidden combination. Every active level must appear in a feasible configuration. The **target pair universe** contains only cross-factor level pairs present in some complete feasible configuration. Impossible pairs are separately reported; they do not inflate feasible coverage.

Greedily choose the configuration covering the most uncovered pairs; ties follow catalog order. Stop at full coverage or the test budget. This is deterministic, not guaranteed minimum-size. With sufficient budget it covers the finite universe. The two comparisons are (1) the full feasible Cartesian configuration count and (2) coverage of the first `min(budget, feasibleCount)` feasible configurations in catalog order. Comparisons are counts, not invented speedups or accuracy claims. Generated suites are unexecuted QA worksheets; pairwise coverage does not establish higher-order coverage or bug absence.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. An initial real-model run confused an online note with offline. More explicit catalog/sample wording resolved the two simple fixtures, but that is **not** general accuracy evidence. Unrelated instructions still receive a nearest level; hold unsuitable or ambiguous notes. Near-duplicate catalog levels require human correction. The maximum-batch test deliberately used human-reviewed assignments rather than claiming 20-way semantic discrimination.

Commands: `python3 serve-built.py` (actual dist with production base/shared assets, port 6971), `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node newer-run-test.cjs`, `node import-stale-test.cjs`, `python3 artifact-test.py`. Browser scripts use installed Playwright at `/Users/hsianghui/.openclaw/workspace/node_modules/playwright`; adjust locally as needed. Successful AI checks use the real model; mocks are limited to defensive faults/races. `browser-test.cjs` accepts APP_URL/REPORT for assembled/public validation.

`gallery-test.cjs` compiles every inline script and preserves every old gallery entry; its reproducible comparison baseline is `gallery-before.json` from this build. `gallery-ui-test.cjs` accepts GALLERY_URL/GALLERY_REPORT. `asset-audit.py` accepts ASSET_BASE/ASSET_REPORT and compares served files with root `deploy/`. Never clear/rebuild deploy concurrently with assembled tests. Publication is complete only after a matching Pages build and actual public inference/asset/gallery verification. The original collection stays read-only; no digest is sent.
