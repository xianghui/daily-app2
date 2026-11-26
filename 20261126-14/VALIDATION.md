# Splitvalue Desk — observed validation

2026-11-26, desktop installed Google Chrome via Playwright, CPU inference with GPU disabled. All datasets synthetic. Browser tests serve the **production Vite bundle** under `/daily-app2/20261126-14/`, not development mode. No mocked model on successful AI paths.

## Real AI and workflow

- Dairy fixture: actual `[joint,separable,separable,excluded]`, expected same (4/4). Reviewed shared cost 100,000, separable 60,000, excluded 5,000. NRV 40,000 and 100,000. Joint allocations **28,571 / 71,429**, vs gross-sales **40,000 / 60,000**. Product production totals sum to 160,000; all costs reconcile to 165,000.
- Timber fixture: actual `[excluded,separable,joint,joint]`, expected same (4/4). Shared 100,001, separable 60,000, excluded 8,000. Production 160,001, all cost 168,001. Every minor unit conserved.
- Maximum batch: 24 real-inferred costs, eight products, seven chunks; 12-digit costs, exact conservation. Full downloaded JSON reimport restored originals, and a second real run retained 24 records.
- New worker inference with **all browser network disabled** succeeded in the warmed open page, with unchanged role predictions. Worker/factory/WASM/model caches were exercised. This does not establish offline cold navigation/reload.
- Mandatory approval/hold, cost/sales/product/role edits, snapshot invalidation, undo, multiline reviewer notes, quote/comma/newline/formula-like CSV escaping, clipboard and current JSON/CSV/Markdown downloads tested. Holds block the whole dependent batch but retain all records/products in exports. Invalid amounts, missing separable product links, zero/negative NRV cannot yield a complete allocation.

## Quality limitations (not universal accuracy)

Eight simple known-answer labels matched; tiny synthetic fixtures are not representative accuracy. In a challenge, the explicitly negated post-split cream-processing note incorrectly matched `joint`; a bicycle note forced `excluded`. Prompt-like credential-request text remained inert and selected `joint` only. No credentials were requested or content uploaded. `challenge-validation.json` records exact observed outputs. The model cannot determine accounting policy, product identity, amount correctness or suitability of NRV. All suggestions start pending; unsupported costs must be held, not trusted.

## Independent arithmetic and artifacts

`core-test.mjs` / `independent-core.py`: 700 two-to-eight-product largest-remainder cases matched independently implemented Python `Fraction` calculations; exact sum conservation and deterministic source-order tie-breaking verified, including zero shared cost. Structural/amount/ID errors, malformed vector shape/normalization and missing reviews tested.

`artifact-test.py`: independent Python CSV/JSON/Markdown parsing checks dairy, timber, reviewed multiline note, maximum batch and held exports. All original cost and product records, original and reviewed amounts, decisions and numeric allocation differences survived. CSV columns all match 18-column headers; JSON/cost/product totals reconcile. Signed differences remain numeric; formula-like reviewer note is escaped only in CSV. Markdown and clipboard retained the reviewed multiline note. JSON audit import intentionally restores source, not trusted approvals.

## Defensive and recovery paths

`defensive-test.cjs`: ten checks: actual worker network abort, actual model-host abort, absent Worker, absent WebAssembly, worker constructor failure, worker error, malformed vectors, accelerated timeout, delayed stale callback and cancel during pending worker fetch. Fault injection used **only** for defensive cases; successful inference always real.

`recovery-test.cjs`: worker-download and model-download failures both recovered with real inference after removing the network fault. An old delayed callback could not overwrite a newer real timber run; delayed file import could not overwrite newer source. `download-cancel-test.cjs` additionally cancels during actual delayed model-host requests and confirms no late result, then real inference retry.

## Privacy, runtime and layout

Browser request capture from initial page startup through runs found no model requests before explicit loading. Requests were GET downloads without bodies; no synthetic notes appeared in request URLs. External traffic stayed at documented Hugging Face/model-CDN hosts; reports persist host/path and query **names**, not signed values. No remote provider/key integration. No analytics.

`bundle-audit.py` verifies actual immutable worker/factory/WASM SHA-256s and mean-pooled normalized q8 pipeline, scans built text assets for common credential patterns (none found), and confirms 4-text chunks/384-vector contract. This is a pattern scan plus source review, not a universal secret-detection guarantee.

Desktop 1440px, narrow 390px and 320px: no horizontal overflow, labels on every field, keyboard focus progression, controls ≥44px, working source/review/results/export actions. Normal viewport screenshots inspected for desktop hero and narrow hero/review/results. Native option labels shortened after visual review to avoid narrow-select truncation. Physical phones, assistive-technology sessions, non-Chrome engines and low-memory devices unverified.

## Collection and publication

Root gallery scripts compile with Node `new Function`; missing scripts fail. New folder appears once as `ai-utility`; AI Utilities remains first. All 889 prior entries retain exact metadata/order. Browser renders/searches all **890** cards, preserves every old link/category, and has no desktop/narrow overflow or page errors.

Root predeploy: **890 built, 0 failed, 0 skipped**. Combined tree **817,488,613 bytes**, below unchanged 1,000,000,000-byte guard. Existing deploy-only byte-identical runtime sharing unchanged. Every app remains under its folder; original `/Volumes/ExternalHD/daily_app` untouched. Shared runtime dependency assets retained.

Local and assembled production suites and served-byte audits are recorded separately. Publication verification is recorded in `publication-status.json`, public reports and the final section below after checking the matching built Pages commit, public byte hashes and actual public inference. A branch push alone is not validation.

## Verified public release

GitHub Pages built commit `a964d628dede0103743b7dcea49543d7789113c9`; matching workflow **45759736916** completed successfully. All **8 public files** (gallery, app entry/icon/JS/CSS, shared worker, factory and WASM) matched assembled SHA-256s byte-for-byte. Public app real inference matched 8/8 simple roles; full review/edit/undo/hold/max-batch/invalid-input/export/clipboard/privacy/phone-layout suite passed. Fresh-worker fully offline inference in the warmed public page passed. Independently parsed public CSV/JSON/Markdown exports retained every required record and reviewed note, and reconciled NRV/cost totals. Public gallery rendered all **890** cards, preserving all previous links and categories. No digest sent. Source commit/push is performed after these checks; consult Git history for the release commit.
