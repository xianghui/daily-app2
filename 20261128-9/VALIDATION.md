# Observed validation — 2026-11-28

## Local production bundle — passed

- `npm run predeploy`: React/Vite production build passed.
- Real MiniLM CPU inference in desktop Chrome with GPU disabled: slides/interview → SLIDES, INTERVIEW; sport/concert → SPORT, CONCERT. Four expected semantic matches across two materially different batches. Inspected candidate vectors through actual output, not mocks.
- Fixture 1: video-only baseline 2 failing clip budgets → 0 reviewed failures. Chosen estimated total 96,360,800 bytes. Fixture 2: baseline 1 → 0; chosen estimated total 98,091,200 bytes. These are deterministic estimate checks, not actual encoding accuracy or quality gains.
- Maximum 8 profiles + 12 clips / 20 texts processed in five worker chunks. Complete 12-row audit downloaded/reimported, originals preserved.
- All-network-offline, newly constructed worker inference passed in a successfully warmed open page. No offline reload/navigation claim.
- Review, correction, pending resets, hold/release gating, manual infeasible target, numeric failure, undo, snapshot invalidation, multiline notes, copy and downloaded JSON/CSV/Markdown/Delivery CSV passed. Python's independent CSV parser and integer arithmetic verified all required records, source text, quotes/newlines, formula-string escaping and calculations.
- 144 parameter combinations independently checked with BigInt sizing and feasible-rate enumeration; source schema/review guards tested.
- Empty/invalid/oversized JSON, excessive/zero rows, bad ladder and unsupported file type rejected.
- Worker and actual model-host download aborts gave visible errors without fabricated output. Unsupported Worker/WebAssembly, construction/worker errors, malformed output, accelerated timeout, delayed stale responses and cancellation during worker fetch passed (10 defensive scenarios; fault injection only here).
- Actual pending model-host request cancellation, fresh real retry and delayed file-read/input replacement passed separately.
- No model-host request before explicit run. Observed inference requests were GET without bodies; synthetic content was absent from URLs. Only documented model/runtime download paths observed. No remote inference integration.
- Desktop 1440px and emulated phone 390/320px: no horizontal overflow; forms labeled; touch controls ≥44px; export keyboard focus order passed. Screenshots stored. Physical phone performance and other browser engines untested.
- Negation challenge: “Do not use sports settings…” still selected SPORT. Documented limitation, not hidden as a success. This is retrieval assistance, not autonomous quality assessment.

## Combined production assembly — passed

Root `npm run predeploy`: 933 built, zero failed/skipped. Byte-deduplicated combined deployment: 828,938,273 bytes, below unchanged 1,000,000,000-byte guard. Shared runtime assets and app bundle fetched from the assembled site matched source SHA-256 hashes (six assets). Built JS/CSS credential-pattern scan found zero matches; source integration review found no credential/remote inference path.

The 10-scenario defensive suite and delayed file-import identity check passed against the assembled tree as well. The real-model browser workflow suite passed again against the actual assembled production tree, including both fixtures, offline fresh worker, 20-text batch and artifacts. Independent Python artifact parsing passed again. Root gallery scripts compile; new entry occurs exactly once with `ai-utility`; all 932 previous entries/categories preserved. Gallery renders/searches older and new apps at desktop and phone widths.

## Publication

**Published and public workflow verified**: https://xianghui.github.io/daily-app2/20261128-9/

Root `npm run deploy` completed successfully through package `daily_app2`, publishing all 933 apps. GitHub Pages build `58618db794d6d14e242eacf3f3ea8690af128a02` reached `built`; matching Actions run [46086218680](https://github.com/xianghui/daily-app2/actions/runs/46086218680) completed successfully. No trigger workaround was needed.

Public app shell/main/CSS and shared worker/factory/WASM: all six assets fetched and byte/SHA-256 matched local production sources. Public root gallery is byte-identical to source; 933 entries, new app exactly once, older categories/search preserved.

The **full real-model workflow browser suite passed at the public URL**, not merely localhost: both independent synthetic batches matched 4/4 profiles, review/edit/hold/undo/copy and all artifact downloads worked, maximum batch processed/reimported, offline fresh-worker inference passed, and desktop/390/320px checks passed. Python independently reopened public JSON/CSV/Markdown/Delivery CSV downloads; all records and edited newline/quote/formula-prefix fields survived. Public network inspection again observed only GET downloads without content uploads or bodies. Public negation challenge still mismatched SPORT, consistently documented.

See `public-browser-validation.json`, `public-artifact-validation.json`, `public-asset-validation.json`, `public-gallery-browser-validation.json`, `pages-build.json` and `publication-status.json`. Source commit/push is verified by final git command results, not by a self-referential file.
