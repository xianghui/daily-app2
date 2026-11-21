# Observed validation — 2026-11-21

## Local production bundles

- React + Vite `npm run predeploy`: passed. Real Chrome headless, WebGPU disabled / WASM CPU; no mocked model for successful workflow checks.
- Two different synthetic fixtures: publishing team mapped **7/7** grant notes to known capabilities; finance team mapped **4/4**. Both produced **2 roles vs 3 per-person baseline roles**, proved minimum for those matrices. No extra/missing approved permissions. This small known-answer result is not general accuracy.
- Maximum batch: 6 people, 6 capabilities, 36 grants /42 embedded texts /11 chunks; 36/36 exact-description links, all 36 source records retained, single role covers all 36 approved matrix cells. Full audit imported back with originals intact.
- Same suite run against individual production `dist` and assembled deployment; reports include actual suggestions, applied outputs and sanitized network audit. See `browser-validation.json` and `assembled-browser-validation.json`.
- Real offline check: all browser networking disabled after warming, old worker already terminated, fresh worker successfully performs inference. Scope is an open warmed page only; offline startup/navigation untested and not promised.

## Deterministic correctness / artifacts

- Independent exhaustive 3×3 binary-matrix check: **512 matrices**; solver minimum role count agrees with independently enumerated arbitrary rectangles and dynamic set cover. Exact reconstructed permission equality for every matrix. Search-budget exhaustion correctly labeled not proved optimal (`core-validation.json`).
- All source grants require approve/hold; holds withhold role plan. Capability changes reset approval; review/source edits invalidate applied exports; undo works without resurrecting stale export snapshots. Copy matches current Markdown.
- Downloaded JSON, Audit CSV, Role CSV and Markdown from browser. Independent Python CSV/JSON parsing checked all rows and exact role-union permissions for both examples. Multiline quoted/comma note survives JSON/Markdown and escaped CSV; formula-leading CSV text neutralized. Held blueprint role CSV contains no rows (`artifact-validation.json`).

## Defensive / privacy / UI

- Download-host abort then real retry; missing WebAssembly, worker download failure, constructor failure, worker error, malformed result vectors, malformed envelope, accelerated 180-second timeout, late-after-cancel and late-after-input-change injections all passed with no fabricated results (`defensive-validation.json`). Fault injection is only for failure checks.
- Real warmed-run cancel/retry and cold model-download cancel/retry exercised. Late results cannot replace new input. An additional delayed-cancelled-worker test then completed newer REAL finance inference and verified that its four results survived the late invalid reply (`stale-validation.json`). Source/audit import guards asynchronous file reads with run identity.
- Empty, null, malformed, oversized JSON and unsupported file type rejected. Core validates counts, IDs, roster references and descriptions.
- Browser request audit: no model-host requests before explicit load; external traffic static GET-only, no request bodies, no user-content-bearing paths. Sanitized report stores hosts/paths/query-key names only, not signed URLs. No remote inference integration. Built credential-pattern scan clean (`security-validation.json`), not a claim of exhaustive secret detection.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal document overflow, every form control labeled, focus works, visible touch controls ≥44px. Normal viewport screenshots inspected for hero/results; physical mobile inference, screen-reader/keyboard-only end-to-end tests and alternate browsers untested.

## Gallery / collection size

- Inline scripts compiled with Node `new Function`; new AI-utility entry exactly once/newest. All **774** prior entries retained unchanged; total **775**. Browser checks AI Utilities first, legacy STL/Mini Games categories, old/new search results and phone widths.
- Initial root predeploy correctly failed the existing 1 GB guard at 1,000,065,423 bytes. Extended existing deploy-only geometry deduplication by one already-published app (`20261029-2`), sharing its byte-identical 541,470-byte WASM from `20261028-24`. No source builds, old apps or guard removed. Final assembled size recorded in `deploy/runtime-deduplication.json` and deployment log.
- Legacy affected app actually tested with real shared geometry worker: built-in expected signature `40b589f5`, PNG and binary-STL import, nonempty valid binary-STL export length, portable JSON save/reopen preserving imported geometry. Shared WASM request verified; no obsolete WASM request. See `legacy-browser-validation.json`.

## Public publication

Matching Pages commit `428fff9cc36bdcbecbcef10b3d0555e741a42304` reached **built**; workflow `44888162163` succeeded on the first deployment. All **11** public gallery/app/runtime/legacy asset byte comparisons passed. Both real-AI fixtures, complete public review/edit/undo/export/offline/max-batch/privacy suite, preserved **775-card** public gallery and affected legacy real worker/import/export checks passed. Evidence: `publication-status.json`, `pages-watch.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `public-legacy-validation.json`. Combined site **999,524,164 bytes** under unchanged 1 GB guard. Source main is committed and pushed after these public checks; unrelated pre-existing recovery work is preserved and excluded.

## Limits

Simple synthetic paraphrases only. No production grant-accuracy study, no real accounts/data, no security/compliance certification, no segregation-of-duties or scoped/conditional permissions. Similarity can mishandle negation/compound requests; review mandatory. Model main revision unpinned. CPU memory/device suitability varies. Search budget can return feasible nonminimum roles, explicitly labeled. No provisioning or revocation occurs.
