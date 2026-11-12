# Observed validation — 2026-11-12

## Local production and assembled collection: passed

Real desktop Chrome via Playwright, GPU disabled, production Vite bundle served at its actual base. No mocked AI in successful workflow tests. The same full suite passed against the assembled root `deploy/` copy; see `browser-validation.json` and `combined-browser-validation.json`.

- **Community rooms**: expected/observed `study, study, music, music` (4/4). Study energetic Leq **57.032913781 dBA**, arithmetic baseline 50; music **84.107772334 dBA**, arithmetic baseline 75. The 15-minute louder music interval contributed 97.087% of session energy, despite 25% of duration.
- **Workday spaces**: expected/observed `packing, reception, packing, reception` (4/4). Packing energetic Leq **77.403626895 dBA**, arithmetic baseline 75; reception **57.403626895 dBA**, arithmetic baseline 55.
- These are tiny, deliberately distinct synthetic examples, not a general accuracy estimate. An unrelated instruction-like ocean-tide note still receives a nearest profile: no abstention or truth guarantee. It remained pending and could be held; no credentials were requested. Negation, overlapping session descriptions and field measurements are not certified.
- `core-test.mjs`: 2,002 independent numerical/fixture cases. Log/exp oracle, +10 dB translation invariant, energetic mean ≥ arithmetic mean, max-level bound, equal-level identity, normalized contribution totals, finite schema bounds, duplicate IDs, malformed AI vectors, coverage/hold blocking and formula protection.
- Empty/malformed/oversized input, unsupported CSV, >1 MB imports, invalid/fractional durations, out-of-range readings, 24-row maximum batch, four-text worker chunking, all originals retained. Changed input cannot install old results. Exact minute gaps block summaries rather than imply quiet missing time. Held records remain in audit exports.
- Review edits disable old downloads; undo and hold/reject work; JSON reimport restores originals and pending decisions, not old approvals. Delayed file reads, cancelled worker-download races and late old messages cannot replace current inputs. Fault injection was used **only** for stale-result/timeout/malformed-output/device defenses; see separately named reports.
- Real model-host download cancellation, new-input retry, model-network abort/recovery, worker download failure, worker constructor/error, actual-worker WebAssembly-unavailable path and 180-second timeout (accelerated only in fault test) passed. No fake output on errors.
- After online inference, networking disabled and a **fresh worker** processed real model inference successfully in the already-open warmed page. App-shell reload/navigation offline was **not tested or promised**. Cache eviction remains a limitation.
- Captured startup/inference requests: GET asset downloads only; no request bodies or user content in URLs; no model-host request before explicit loading. Static built-asset credential-pattern scan found no matches. This is not a claim that arbitrary future dependencies were exhaustively audited.
- Actual browser-downloaded JSON/Audit CSV/Session CSV/Markdown independently parsed/reopened in Python; all four reviewed rows, numeric edits, multiline quoted notes and spreadsheet-formula escaping survived. Maximum 24-row export retained every row. Clipboard Markdown contained the edited 72 dBA reading.
- 1440, 390 and 320 CSS-pixel viewports: no horizontal document overflow, explicit form labels, keyboard focus and ≥44px buttons. Screenshots inspected for desktop introduction and narrow reviewed output. Physical phones, non-Chrome engines and screen-reader testing remain unverified.
- Root gallery: all inline scripts compiled via `new Function`; new entry exactly once as `ai-utility`, newest first. All 621 baseline entries retained unchanged/in order; 622 total. AI Utilities appears first, with older STL/games/SaaS preserved. Root predeploy assembled **622 apps, 0 failed, 0 skipped**.

## Publication

Public verification is recorded separately in `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json` and `public-gallery-validation.json` after deployment. A successful branch push alone does not establish public runtime functionality.

## Public release: passed

Root combined deployment published successfully on the first attempt. GitHub Pages reports **built** for `c2236cf23675a164b9304154edb682818a6267e8`, identical to remote gh-pages head; workflow `43215205182` completed successfully. Public app, worker JS, factory, shared WASM and other app files byte-matched local production artifacts. The complete public gallery byte-matched source and all 622 entries rendered with old categories preserved.

The full eight-check browser workflow suite passed again at the public HTTPS URL, including both real AI fixtures (8/8 simple expected links), fresh-worker offline inference, input validation, 24-row batching, cancellation/retry, editable/undoable reviewed exports, clipboard, reimport and 320/390/1440-width checks. Python independently reparsed the actual public-session downloads. No content uploads were observed. Desktop Chrome only; offline navigation/reload and physical devices remain unverified.
