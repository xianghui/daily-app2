# Observed validation — 2026-11-25

## Local production bundle

- `npm run predeploy`: passed React/Vite build with deployment base.
- Real MiniLM q8 WASM inference in headless desktop Chrome, GPU disabled. Workshop batch: clay / sky / clay; service batch: books / bread / books. **6/6** expected dataset links. These short, deliberately distinct synthetic examples do not establish general accuracy.
- Both fixture sets: 15 expected record visits, 15 compound-cursor visits, 5 records skipped by the single-key baseline. Metrics independently recomputed from downloaded artifacts.
- Additional close-description negation challenge: selected `exclude` as expected. One challenge is not evidence of reliable negation handling.
- Maximum batch: 8 feeds × 40 records, 24 requests, 32 embedded texts in eight chunks; real inference, human link corrections, 960 expected/emitted record visits; maximum audit original-input reimport succeeded.
- Fresh-worker real inference after warming the cache succeeded with all network disabled in the open page. Offline reload/startup not claimed.
- Complete review flow: pending apply blocked; approve, feed correction, hold, multiline note edits, snapshot invalidation, undo, copy, downloads, source changes, audit-original restore, cancellation then real retry.
- Independent Python CSV/JSON/Base64 parsing verified page order, strict boundaries, every record and cursor, Unicode/quoted/newline IDs, formula-safe multiline notes, and held cases excluded only from QA releases. Core tests covered 40 direction/page-size combinations over 40 records plus invalid schema/vector/cursor and approval checks: **56 checks passed**.
- Fault tests: actual worker fetch abort, actual model-host abort, unsupported Worker/WASM, worker construction/error, malformed vectors, accelerated timeout, stale worker response, cancellation during pending worker fetch. All failed visibly, without fabricated recommendations. Async delayed file import could not replace newer source.
- Empty/invalid/oversized JSON, unsupported file, excessive batch count and invalid page size rejected.
- Captured production requests: documented local/model file GETs only, no bodies, no user context in URL. No model host download before explicit AI action. Static built text credential scan plus integration source inspection performed; no credentials used.
- 1440 / 390 / 320 CSS-pixel layouts: no page overflow, every input labeled, interactive controls ≥44px, normal viewport screenshots inspected. Narrow size/direction pair changed to a single column after visual review found select text clipping.

Reports: `core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `async-validation.json`, `artifact-validation.json`, `quality-challenge.json`, `runtime-provenance.json`, `model-context-validation.json`. Synthetic downloaded artifacts and screenshots are retained for reproducibility. Negative/fault tests use injected conditions; successful AI tests use the real model.

## Publication

Root predeploy assembled 866 apps, 0 failures/skips. Combined site: 811,067,168 bytes, below the preserved 1 GB guard. The assembled production bundle repeated the real inference, offline fresh-worker, maximum batch, review/export, artifact parsing, layout and gallery suites successfully. All 865 prior gallery entries and existing categories were preserved. Public checks passed at https://xianghui.github.io/daily-app2/20261125-13/ . GitHub Pages workflow 45545002974 completed successfully for gh-pages commit `d418aadf1da09f601ccb6d28b5e5d9d1f1ba07b1`; latest Pages API status was `built` for that same remote head. Nine served files (gallery, app assets and shared worker/factory/WASM) matched assembled bytes. The full real-browser suite repeated both real-AI fixtures, warmed-cache offline fresh-worker inference, maximum batch, review/edit/export, input guards and responsive checks at the public URL. Downloaded public artifacts independently parsed; public gallery rendered all 866 entries and preserved categories with no page errors. Reports use the `public-` prefix. A first public test completed all assertions but Playwright browser cleanup hung after Chrome exited; the harness now bounds cleanup, and the repeated full public test completed normally. No app code changed during that harness fix.
