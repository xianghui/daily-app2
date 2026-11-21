# Seat Margin — observed validation

## Production-bundle checks

- Vite `npm run predeploy` passed. Real headless Chrome with GPU disabled exercised the production bundle (not Vite dev or mocked success paths).
- Real MiniLM matched **9/9 expected profile links** across two different synthetic fixtures. Maker evening: two additions at P(overflow)=0.192 under limit 0.20, versus one headcount-only addition. Library lab: one addition at zero overflow; mean-fill would add two with overflow 0.16, breaching limit 0.15. These are tiny fixture outcomes and conditional math, **not general accuracy or measured operational improvement**.
- Negation challenge: expected tentative profile, got paid-ticket profile. Mandatory review/hold is essential. This failure is visible in the UI guidance and retained in browser reports, not concealed by a fake fallback.
- Maximum 32 reservations + 8 profiles = 40 texts, 10 actual inference chunks. All nearest links for identical descriptions matched, every source row preserved, every 29-prefix plan checked, and the maximum exported audit reimported successfully.
- `core-test.mjs`: **55 independent outcome-enumeration comparisons**, distribution mass, means/excess identity, expected known plans, maximal safe prefixes, p=0/1, impossible existing commitments, holds and schema rejection passed. Exact here means non-Monte-Carlo convolution, subject to floating-point arithmetic and the independence assumptions.
- Exported JSON/CSV/Markdown downloaded in browser and independently parsed with Python: all source/review rows, IDs, probabilities, current plan, PMF and prefixes survive. Formula-leading `=SUM(1,2)` plus newline/quotes/comma review note round-trips; CSV escapes formula-leading text deliberately. Clipboard matches current Markdown exactly. Held export retains all records and has no selected distribution. Reviewed p=0 changes chosen prefix to +3 while preserving the original .8 assumption and existing committed ID.
- Every edit disables exports until reapply. Profile edits reset supplied p; p edits reset approval; undo restores previous review. Pending decisions block apply; holds withhold the whole calculation; impossible commitments produce an infeasible audit without silently cancelling anyone.
- Empty/invalid/null/oversized pasted JSON, unsupported files, malformed schema and >2 MB files rejected. A delayed file read cannot overwrite a newer input.
- Real cold download progress observed, weight download interrupted, cancellation clears output, real retry succeeds. Warm cancellation/retry passed. Delayed cancelled-run output cannot overwrite a newer real Library lab run.
- Defensive fault injection only: blocked model host and real retry, absent WASM, blocked worker, unsupported module workers, malformed vectors/envelope, worker error, accelerated timeout, late cancelled/input-changed messages. No fabricated output or exports on any failure. Successful AI checks always used the real model.
- Browser network audit from startup through inference: no Hugging Face requests before explicit loading; only static GET downloads (plus local blob workers), no request bodies/content uploads, no credential/analytics integration. Shared runtime bytes and model revision/512-token ceiling rechecked. Built credential-pattern scan plus source inspection passed; pattern scan alone is not exhaustive proof.
- Fully offline real inference with all network blocked and a fresh worker in the already-open warmed page passed. No claim of offline initial navigation/reload; no offline shell implemented.
- Desktop 1440 and phone-width 390/320 screenshots inspected. No horizontal overflow; form labels, visible keyboard focus, >=44 px buttons/inputs/select/summary checks passed. Real phones and non-Chrome browsers untested.

## Assembly and legacy preservation

- Gallery scripts compile with Node `new Function`; Seat Margin appears exactly once as newest AI utility. All 776 prior entries retained (777 total), AI Utilities before legacy categories, search and phone layouts passed.
- Initial root assembly exceeded the unchanged 1,000,000,000-byte guard by 64,115 bytes. Extended an existing deploy-only byte-identical Manifold sharing rule for **20261029-3 → 20261028-24**, saving 541,470 bytes with source builds and existing worker/script URLs preserved and cache-versioned entries.
- Assembled size: **999,523,068 bytes**. All 777 apps built/copied, zero failures/skips. Root HTML and new app bytes match source build.
- Legacy Plumb & Plane: actual worker/shared WASM, real PNG and STL imports, valid downloaded STL and exact preview/export fingerprint verified. No old app source was changed.
- New app full production workflow and real inference rerun against the assembled deployment tree before publishing. Public verification status is recorded below/alongside publication-status.json; no completion claim until public assets and inference pass.

## Publication

Published through root combined workflow. Pages commit `a4dfa3968bcde3997f62ccf2cec0c96b839c4bde` reached **built** on the first deployment; no rebuild or repeated publish needed. Initial probes ran prematurely against the previous deployed version and were rerun after the matching build completed.

Public app and complete shared worker/factory/WASM bytes match the assembled build. Full public real-AI suite passed: both fixtures, maximum chunks, reviews/undo/holds, actual artifacts/clipboard, fresh-worker offline inference, responsive widths and local-only static-download traffic. Public gallery retains all 777 cards; legacy Plumb & Plane shared-runtime PNG/STL import and valid export passed. Physical phones and non-Chrome inference remain untested.

URL: https://xianghui.github.io/daily-app2/20261121-20/

The builder verifies local HEAD equals remote main after committing this audit. Publication-status.json records the independent Pages and public-runtime evidence.

## Reproduce

Run `node core-test.mjs`, serve with `python3 serve-test.py` (port 7120), `node browser-test.cjs`, `node defensive-test.cjs`, `node stale-test.cjs`, `node cold-cancel-test.cjs`, `node review-edge-test.cjs`, `python3 artifact-test.py`, `python3 security-audit.py`. For assembly: root `npm run predeploy`, `python3 serve-assembled.py` (7220), use APP_URL environment variable for browser suite; gallery and legacy suites default to assembled origin. Public assets: `python3 public-asset-test.py`; public browser tests set APP_URL and REPORT_FILE. Only synthetic content appears in reports/screenshots/artifacts.
