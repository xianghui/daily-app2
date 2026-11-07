# Revision Dock validation — 2026-11-07

## Local production-bundle checks

Headless installed desktop Chrome via Playwright; actual downloaded MiniLM q8 WASM inference, not mocked successful outputs.

- `npm run predeploy`: passed. Seven production assets hashed/scanned, no credential-pattern hits. Manual source review: no API integration, keys, analytics or upload path.
- Two materially different known-answer fixtures: service desk and community kitchen. Four expected reworded pairs correctly linked, two additions correctly unlinked, two old steps correctly retained as retired/unlinked. Scores for expected pairs: service 0.645 / 0.782; kitchen 0.650 / 0.695. Exact-text baseline: zero links on each fixture. These six new steps are a small fixture check, not universal accuracy or a measured time improvement.
- Maximum 12 old + 12 new steps, six chunks of four: all source IDs conserved, every new step retained and old links unique. `core-check.mjs` independently checks globally optimal conflict assignment, malformed/non-finite/zero vectors, missing/unreviewed rows, invalid links and duplicate links. Synthetic unit vectors are used only for those defensive checks, never to establish AI functionality.
- Fresh-worker real inference with all network disabled after online success passed. Cached online reload required no additional external model requests. Offline new-page startup/reload not promised/tested.
- No external requests before explicit model load. Captured model traffic was GET/HEAD downloads to documented Hugging Face/CDN hosts, no request bodies or content-bearing URLs. Worker/factory/WASM fetched same-origin. No supplied credentials.
- Review, reject links, prevent duplicate old links, note/owner edits, undo, apply invalidation, copy JSON, actual JSON/CSV downloads all passed. Independent Python csv/json parsing verifies every source ID survives exactly once on each side, both original versions round-trip CSV, notes/owner/quotes/newlines preserved, formula-leading multiline fields escaped in CSV while raw JSON remains lossless.
- Empty/invalid/oversized/duplicate CSVs, wrong quotes/headers, oversized step lengths, >12 rows, invalid floor, wrong file type and >16 KB imports rejected. Floor .95 leaves every fixture row unlinked as expected.
- Real model-host download abort and real WASM download abort display errors with no fabricated results, then recover on retry. Cancel during download, cancel during inference, and changed inputs all prevent stale results. Slow file reads after new input/example changes are discarded.
- Defensive fault injection only: unavailable Worker/WebAssembly, worker construction/error, malformed output and accelerated 180-second timeout all yield actionable errors without review output. Delayed cancelled callbacks ignored. Successful workflow runs always use the real model.
- Desktop 1440, narrow 390 and 320 widths checked: no horizontal overflow, form labels and keyboard focus present, phone-width note/review/apply/export works. Screenshots inspected. Actual phones, low-memory hardware, other browser engines and full assistive technology audit **not tested**.

Machine-readable evidence: `browser-validation.json`, `core-validation.json`, `export-roundtrip-validation.json`, `asset-audit.json`. Gallery and public results are recorded separately; local success is not publication proof.

## Public verification — passed

Root combined publication is built on GitHub Pages commit `e807cb10d510fde6685e2ca97307079e52307640`, matching the gh-pages branch. Every app asset, bundled worker, WASM factory and shared WASM fetched publicly and SHA-256 matched local production bytes. The complete browser suite passed at https://xianghui.github.io/daily-app2/20261107-10/ with real inference on both datasets, 24-text batch, open-page offline fresh-worker inference, edits/undo/copy/download, failure/retry and 1440/390/320 layouts. Public downloaded JSON/CSV artifacts were independently parsed and all source records, edited notes and formula-safe quoting reconciled. Public gallery renders all 504 entries, Revision Dock once, AI Utilities first, older categories intact and search works. Evidence is in `public-evidence/`, `public-gallery-validation.json` and `deployment-validation.json`.
