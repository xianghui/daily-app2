# Coatfolio Desk — observed validation

## Local production bundle

- React + Vite per-app predeploy passed. Real Chrome browser tests, GPU disabled for successful inference; no mock or deterministic substitute used for successful AI checks.
- Two materially different synthetic batches: room maintenance retrieved WALL and STEEL; furniture/floor finishing retrieved WOOD and FLOOR. **4/4 intended simple-profile matches**. This is a tiny known-answer fixture, not general accuracy.
- Room batch: 22.4 L supply versus 8.28 L dry-volume-only baseline; shortfall 14.12 L, approved pools require five packs total. Workshop batch: 39.126315789473686 L, baseline shortfall 10.686315789473685 L, eight packs. Independent Python parsing recalculates volume and stock/pack balance from downloaded artifacts.
- Negated unsuitable steel-gate challenge still retrieved STEEL. Similarity fails suitability/negation; all proposals begin pending and human hold is required.
- Separate real-AI same-finish fixture: two small jobs require two packs separately, one pooled (both with zero stock). Profile correction changes room batch supply from 22.4 to 20.4 L, resets approval and invalidates exports.
- Core checks: known film/volume calculations, 100 numeric scenarios, nonnegative stock and volume conservation, whole-pack rounding, shared-profile consistency, hold exclusion, cap blocking, complete source restoration, malformed vector rejection and input/schema bounds.
- 12 jobs + eight profiles / 20 texts, five four-text chunks, every record retained and complete JSON reimported before another real run.
- Cancel/retry; actual delayed model-download cancellation followed by successful real retry; actual worker/model-host network aborts; successful recovery after network failure. Simulated unsupported Worker/WebAssembly, constructor/worker errors, malformed vectors and shortened timeout produce visible errors and no fabricated recommendations.
- Late schema-valid result and error from a superseded run cannot replace a newer real inference. Delayed file read cannot overwrite a newer chosen input. Cancellation during worker fetch prevents late result construction.
- Review/edit/approve/hold/undo; invalid numeric field blocks apply; shared-profile mismatch blocks apply; pack-cap excess or held job blocks Pack CSV while full audit remains available.
- Downloaded current JSON, Audit CSV, Markdown and Pack CSV. Independent Python CSV/JSON parser checks every source row, current reviewed values, formula-leading multiline note with comma/quotes, all pool counts and ending stock. Clipboard returns current Markdown; later edits disable old exports.
- Fresh worker performs real inference with browser context fully offline after online inference in the already loaded page. Offline reload was not tested and is not supported/claimed.
- Requests captured from startup through inference: only GET, no request bodies; example content absent from URLs. No model-host request before explicit load. Persisted reports omit signed query values. Default path has no content-upload or provider integration.
- Desktop 1440px and emulated narrow 390/320px layouts: no document overflow; labeled controls and ≥44px input/select/button heights; keyboard export focus traversal. Screenshots inspected. Mobile shared-pack table changed to stacked cards and retested in assembled bundle.
- Pattern scan of built text assets plus integration review found no embedded credential or remote-inference path. Pattern scans alone are not an exhaustive secret proof.

## Publication checks

Root gallery inline-script compilation and previous-entry equality checks passed: 930 entries; new folder exactly once, area ai-utility, AI Utilities first. Old entries/categories and search retained. Root predeploy assembled 930 apps with 0 failures / 0 skips, 828,156,782 bytes after existing deploy-only runtime deduplication; below unchanged 1,000,000,000-byte guard. Shared worker/factory/WASM remain immutable.

Published and publicly verified at https://xianghui.github.io/daily-app2/20261128-6/. GitHub Pages workflow 46068432211 completed successfully for gh-pages commit `55c02ca16df6522d98147799b1f1e1c55a58a125`; latest Pages build was built at that same commit. Public real-AI workflow, offline fresh-worker inference, all 12-row batch/reimport and review/export checks passed. Public profile correction, cap blocking, undo and actual pooled-pack scenario passed. Independent Python parsed six public downloaded audit pairs and available pack sheets. Public app JS/CSS and shared worker/factory/WASM matched tested byte lengths and SHA-256 hashes. The live gallery retained all 930 entries, older categories and old/new search. See publication-status.json and public-* evidence reports.

## Limits of testing

Installed desktop Chrome only. Phone viewports emulated; physical phones, browsers other than Chrome, low-memory behavior, cache eviction survival and offline app-shell reload are untested. Synthetic profiles are not real product recommendations. Transfer and solids assumptions require actual product/application verification; no universal model accuracy, consumption accuracy or time-saving claim.

## Reproduction

`node core-test.mjs`; `node browser-test.cjs`; `node defensive-test.cjs`; `node review-test.cjs`; `node recovery-test.cjs`; `node import-race-test.cjs`; `node model-cancel-test.cjs`; `python3 artifact-test.py`; `node gallery-test.cjs`; `node gallery-browser-test.cjs`; `node asset-audit.mjs`. Browser tests accept APP_URL / PREFIX; gallery uses GALLERY_URL; asset audit uses SITE_ORIGIN / PREFIX. Playwright uses the existing local workspace install and installed Chrome. serve-test.py serves source dist paths; serve-assembled.py serves the finished deploy tree with an absolute handler directory. Do not rebuild deploy while browser tests are using it.
