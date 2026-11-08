# Search Rescue — observed validation, 2026-11-08

## Actual browser inference on production build

Chrome (installed macOS channel), Playwright, static server using `/daily-app2/20261108-9/` and the same shared WASM path as production. **Real** Xenova/all-MiniLM-L6-v2 q8 inference on WASM CPU, no GPU, API key or mocked successful inference.

| Synthetic fixture | Expected top concepts | Observed | Exact-only → reviewed lookup hits |
| --- | --- | --- | --- |
| Help center | access, billing, exports, access | 4/4 match | 1/4 → 4/4 |
| Library catalog | hours, loans, study, loans | 4/4 match | 1/4 → 4/4 |

Each batch produces three new one-way rules; the existing canonical phrase is preserved, not duplicated. These are small easy fixtures, not general accuracy or production uplift claims. A recovered hit is only destination coverage, not validated correctness. Ground-truth semantic checks and hit-count checks are distinct.

Additional real challenge: a negated password-reset request that actually needs an invoice ranked billing (cosine ~0.610), an unrelated soup recipe scored ~0.028 and was held at the default 0.3 threshold, but instruction-like text asking to upload passwords ranked access (~0.419) and was proposed. This is a **semantic false positive**: the app never obeys it, uploads anything or asks for credentials, but bulk approval would create an unsuitable alias. Review and hold such text. Similarity is neither entailment nor synonym certainty. Do not rely on threshold alone.

## Passed workflow and defense checks

- Eight fixture matches above use actual inference. Known canonical phrases retain their identity. Review is required before applying; manual target changes return a row to pending.
- 32 queries plus 12 concepts embed in batches of four. All query records and originals survive apply/export/import. Duplicate phrases produce one approved rule, not lost audit records.
- Fresh worker after all network was disabled completed actual inference while the loaded page remained open. No offline reload/navigation claim. No model-host request occurs before explicit run action.
- Cold model-host download blocked: visible network error, zero fake results. Unblocking and retrying loaded the real model. Worker-source abort/retry also passed.
- Cancel/retry, editing input during loading, late failed source fetch and late cancelled-worker result cannot overwrite newer real results.
- Empty, invalid JSON, null, over 50,000 characters, empty/too-many records, oversized text, duplicated IDs and case/space-normalized duplicate canonical labels rejected. Unsupported PDF clears prior result and leaves exports disabled.
- Invalid model vector count/dimension/norm/nonfinite data rejected. Unsupported runtime construction, worker error and 180-second timeout handling fault-injected; these injections do not establish successful AI. No deterministic fallback.
- Conflicting normalized aliases and attempts to remap a canonical phrase to a different concept block application. Same-target duplicates deduplicate. All holds preserve originals and existing baseline hits.
- High 0.9 threshold holds the three unmatched fixture queries; a deliberate manual acceptance below threshold is allowed and counted honestly.
- Reviewed edits, holds and undo change the exact export snapshot. Any edit disables stale exports. JSON round-trip restores original inputs, not approvals.
- Browser-downloaded JSON/CSV/synonym files parsed independently by Python. Quoted/newline notes survive; multiline formula-leading cells receive an apostrophe only in CSV. Synonym shape checked, rule destinations refer to canonical labels, every required original query survives the complete audit.
- Clipboard content equals downloaded synonym JSON. Applied query probe resolves case/space-normalized approved aliases and reports no result for unknown phrases. Baseline/result/recovered counts independently recomputed.
- Desktop and 320/390 CSS-pixel phone widths: no horizontal overflow; review editing/apply/download actions work; labels and keyboard focus inspected. Screenshots saved and desktop visually inspected. This is not physical-phone performance testing.
- Request capture: only GET downloads with no bodies; no fixture content in remote URLs. No provider API integration. Bundled text assets scanned for credential patterns; no findings. Source inspection supplements the limited scan.
- `npm run predeploy` passes. Asset audit proves reused 26,861,777-byte WASM equals installed runtime byte-for-byte; hashes recorded. Gallery inline scripts compile with `new Function`; new AI utility occurs once and every prior entry remains unchanged.

## Evidence / reproducible commands

- `node browser-test.cjs` → `browser-validation.json`, actual downloads and screenshots.
- `node extra-test.cjs` → `extra-validation.json`, cold download/threshold/challenge/stale-result evidence.
- `node core-test.mjs` → deterministic schema/boundary tests using synthetic unit vectors, explicitly not real-AI evidence.
- `python3 artifact-test.py` → independent `artifact-validation.json`.
- `node gallery-test.cjs` → source scripts and prior-entry preservation (snapshot in `/tmp` for this run).
- `asset-audit.json` → build file sizes/hashes, immutable runtime and pattern scan.

## Not tested / limitations

Physical mobile hardware, Safari/Firefox/Edge engines, low-memory devices, arbitrary languages, long token-dense text, all semantic ambiguity/negation cases, offline app startup/reload, or an external search-account import. Model host default revisions can change. Network/cache failure may require an online retry. No live content or private credentials used. Public deployment verification is recorded separately after combined-site publishing; a branch push alone is not proof.

## Public production verification — passed

The root combined deployment published gh-pages commit `93edb7773830af58e54bf5f909db0f68b5be582e`; workflow `42428383299` completed successfully and the Pages API reported that same commit **built**. All seven public app assets and the shared WASM matched local SHA-256 values; the public root gallery matched source byte-for-byte and rendered 525 cards with AI Utilities first, all older categories intact and Search Rescue exactly once.

The complete 15-check browser suite was rerun against `https://xianghui.github.io/daily-app2/20261108-9/`, including both real default-model fixtures (8/8 top concepts), fully offline fresh-worker inference, 32-query/12-concept batching, review/undo/copy/download, collision guards, narrow layouts, malformed-result/runtime/timeout defenses and privacy requests. Public-downloaded artifacts were independently parsed and round-tripped again. Evidence: `public-browser-validation.json`, `public-assets-validation.json`, `public-gallery-validation.json`, and `public-check/artifact-validation.json`.
