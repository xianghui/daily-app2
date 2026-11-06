# Validation — 2026-11-06

## Production browser, actual model

Chrome desktop headless, production Vite bundle, CPU/WASM with real Hugging Face model downloads; not a mock inference. Both known-answer fixtures pass:

- Data analyst: SQL relevance 0.671 to SQL goal and dashboard relevance 0.873 to visualization goal. Plan selects SQL (4h) + dashboards (3h), total 7/7h and 2/2 goals above 0.35. Catalog-order baseline also covers 2/2: no improvement claimed.
- Community garden: vegetable course relevance 0.833 to growing goal and irrigation course 0.784 to water goal. Plan selects vegetable growing (3h) + irrigation (2h), total 5/5h and 2/2 goals. Catalog-order baseline selects only SQL (4h), 0/2 goals. These are computed relevance checks on synthetic fixtures, not broad accuracy estimates.

All 8 per-fixture course selection expectations passed. This tiny English fixture set is insufficient for general quality claims; semantically adjacent or negated descriptions can mislead the encoder. User review is required.

## Passed automated checks

- Build/predeploy; real normalized 384-dimensional embeddings; schema checks; 20-course batch processing.
- Deterministic optimizer independently compared against exhaustive enumeration for 96 course/budget configurations. Over-budget application rejected.
- Reviewed selection, duration and quoted note edits; reject, undo and re-optimize; apply gate; post-edit exports cannot remain stale.
- Actual JSON, CSV and Markdown downloads. JSON/CSV parsed and every original catalog row retained; quote/comma note round-trip. Modified review selection and notes exported correctly. Clipboard matches current Markdown.
- Invalid/empty/oversized/malformed inputs, invalid budget, unsupported PDF import, text import.
- Cancellation and retry; editing inputs during inference invalidates the run and prevents stale outputs.
- Fresh-context blocked model host produces visible failure and no fake results, followed by successful retry.
- Unsupported worker, malformed vectors and timeout branches fault-injected solely to test failures. Successful runs use real inference.
- Fresh worker offline after caches warmed; online page reload reuses cached model without new external requests. Offline page reload is not claimed.
- Network capture: external requests only GET/HEAD to Hugging Face/CDN, no content bodies. No requests to external hosts before clicking AI.
- 1440px desktop and 390/320px phone viewports; no horizontal overflow, working form labels/keyboard focus and touch-sized buttons. Screenshots retained; phone is browser emulation, not physical hardware.
- Zero page errors during the workflow.

Reports: `browser-validation.json`, `gallery-validation.json`, `deployment-validation.json`, and public `live-browser-validation.json` when complete. Build assets contain no API credential configuration. Public-site and combined gallery checks are recorded separately rather than inferred from a branch push.

## Fixed during validation

A repeated offline run exposed reliance on browser HTTP caching for worker/WASM assets. Worker JS, WASM binary and runtime factory now use explicit Cache API storage and blob execution, with absolute asset paths preserved. The complete real-inference workflow suite passed after that fix; screenshots were visually checked. Original gallery was inspected read-only for conflicting course-planning ideas. Existing unrelated untracked work was left untouched.

## Public deployment verified

Published through root `npm run deploy`. GitHub Pages build `ae6a52e6c42e6459adfc867579930023287ce427` reached `built` and matched the gh-pages head. All public production files (including worker, runtime factory and WASM binary) matched local dist SHA-256 hashes. The entire browser suite then passed against https://xianghui.github.io/daily-app2/20261106-18/ with actual model inference on both fixtures, offline fresh-worker execution, review/edit/undo, exports, invalid inputs, network failure/retry and fault branches. Live gallery rendered 489 cards, old categories and working search, with Course Compass exactly once. No page errors. Physical phones and non-Chrome engines remain untested.
