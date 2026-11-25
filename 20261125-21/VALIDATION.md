# Effective Ledger — observed validation

## Local production bundle

- `npm run predeploy`: passed. No shared credentials, server inference, optional provider or private fixtures.
- Real Chrome CPU/WASM with GPU disabled: both fixtures matched 6/6 books. Separate wording challenge 3/4; negation misrouted. Reports: quality-probe.json, quality-challenge.json, browser-validation.json. Fixtures are synthetic; this is not universal accuracy.
- Half-open dates: print fixture ready 3000 cents, overlap and gap blocked. Venue 3000/400/700 cents; 4100 total. Boundary, zero-price, open-ended, future-only and tied newest-start behavior checked by core/oracle tests.
- Independent Python datetime interval enumeration: 700 version histories, **5,600 assertions** including arbitrary overlaps/gaps and integer totals. `oracle-test.py` / oracle-validation.json.
- Workflow: manual book/date/quantity edits change amounts; pending decisions block apply; hold/undo, multiline formula-like reviewer note, clipboard, snapshot invalidation; real max eight-chunk inference (8 books, 128 versions, 24 requests), full JSON-audit reimport.
- Actual downloaded JSON/CSV/ready CSV/Markdown: independent Python parsing, source/evidence preservation and totals; **1,205 assertions** locally. `artifact-test.py` / artifact-validation.json.
- Real fresh-worker offline inference within already-open warmed page passed; no offline-startup claim. Requests captured from page load: no model before click, GET-only downloads, no source text in URLs/bodies, documented hosts only.
- Defensive suite: real worker/model download abort, unsupported Worker/WASM, construction/worker failure, malformed vectors, accelerated 180-second timeout, stale callback and cancellation during fetch. All produce visible errors or cancellation, no fake output. Separate network recovery succeeds with real inference; older injected error cannot replace a newer real model result.
- Empty/invalid/oversized input, wrong file extension, invalid day/quantity, batch cap: visible errors. Desktop 1440, narrow 390/320 viewports: no document overflow, all form controls labeled, ≥44px controls, screenshot review. Keyboard navigation, example activation and details toggle pass.
- Runtime dependency hashes and built credential-pattern scan pass; source/network inspection supports privacy claim. Pattern scanning alone is not exhaustive proof.

## Assembly and publication

Combined-site assembly and public production verification completed; observed results below. A branch push was not treated as proof of public functionality.

## Limits

Physical phones, other engines, cold offline navigation and representative matching quality are untested. Descriptions may truncate at the tokenizer cap. Semantic similarity is not confidence, unit equivalence, accounting correctness or authorization. No invoices, payments or remote changes are performed.

### Assembled collection (local)

Root `npm run predeploy` assembled 874 apps with zero failures/skips. Existing deploy-only runtime reuse rules and 1,000,000,000-byte guard are unchanged. Full gallery inline script compiled; exactly one new AI-utility entry, all 873 earlier entries/categories unchanged. Gallery browser search and 874 cards passed. Final production bundle is served under its real `/daily-app2/20261125-21/` base for assembled checks.

Failed-import preservation regression: invalid file leaves the pasted source intact; delayed file read cannot replace a newer example. `import-regression.cjs` / import-regression.json. Production rebuilt and both real-model probes rerun after this correction.

Final assembled bundle (after import preservation fix): full real-AI workflow/exports/offline/max-batch/phone-width suite passed again; independently parsed final exports passed **1,205 assertions**. Keyboard checks rerun. Reports use `final-` prefixes. An attempted check during root assembly correctly received a missing-worker error while deploy assets were being rebuilt; the full suite was rerun sequentially after assembly finished and passed. No runtime fallback was substituted.

### Public production release

- Exact Pages commit `ae9187616fc181921b1a49cffcfb3bae5ac3f9dc` reached **built**; workflow **45611347275** completed successfully. Initial superseded workflow was cancelled when the import-preservation correction was published. No Pages configuration, cadence or sharing rules changed.
- **7 public asset byte/hash matches**: app HTML/JS/CSS, shared model worker, module factory, WASM and gallery root. Combined site **813,199,494 bytes**, below unchanged 1,000,000,000-byte guard.
- Full public-browser suite passed: both real CPU AI fixtures (6/6), current reviewed date/quantity/book changes, hold/undo, source-complete downloads, max eight-chunk inference/128 versions/24 transactions, audit reimport, real fresh-worker offline inference, cancellation/retry, privacy capture, invalid inputs, desktop/390/320 layouts and labels/touch controls.
- Actual public downloaded artifacts independently parsed: **1,205 assertions**; public gallery has all **874** cards, earlier entries/categories intact; keyboard controls pass. Reports: public-browser-validation.json, public-artifact-validation.json, public-asset-validation.json, public-gallery-browser-validation.json and public-keyboard-validation.json.
- No digest, invoice, payment or remote data change was sent. Physical phones, other browser engines, cold offline startup and representative matching accuracy remain unverified. Unrelated pre-existing recovery folders were preserved and excluded from source staging.
