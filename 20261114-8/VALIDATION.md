# Observed validation — Contingency Lens

## Local production bundle

- React + Vite `npm run predeploy`: passed. Model and worker are real production assets, not dev-server mocks.
- Real WASM CPU MiniLM inference: Outdoor market `sun/rain/sun/rain`, Print run `high/low/high/low`: **8/8 intended scenario links on these tiny synthetic examples only**. All begin pending; applying before review fails.
- Outdoor matrix: expected-value and minimax-regret choice `tent`; optimistic choice `open`. Expected payoff 480.00 versus baseline 440.00; perfect-information ceiling 240.00, all under supplied assumptions.
- Print matrix: expected-value choice `small`, minimax regret `bulk`; optimistic `bulk`. Expected payoff 325.00 versus optimistic expected −150.00; perfect-information ceiling 275.00. This deliberate disagreement illustrates different decision criteria, not a guarantee or measured benefit.
- Known-answer arithmetic, schema validation, cell completeness, signed values and review gates passed. **1,500 independent Python Fraction cases** verified exact weighted expectations, ties, regret vectors, all ranking sets and information ceilings against JS results. No invented confidence or accuracy metrics.
- Real browser review: multiline owner/note edits, payoff edits, scenario rejection, option reassignment, hold, undo, clipboard, export invalidation and source/audit import passed. Missing/duplicate approved pairs produce a complete audit but no recommendations.
- Full 32-record inference batching, all source-row conservation, duplicate-cell blocking, complete audit export/reimport, all-held audit passed. Cancellation/retry, source edit during run and delayed processing did not repopulate stale results.
- Empty, invalid, null, array, oversized, duplicate-ID, missing-record/scenario, invalid weights, unknown option, unsupported file and noninteger/out-of-range payoff paths passed.
- Defensive fault injection only: blocked model host, blocked worker download, unavailable module workers, malformed vectors, null worker envelope, runtime worker error and accelerated timeout all leave no fake review/export result. Model-host recovery retries **real** inference successfully.
- Offline: after online inference, network disabled and fresh worker performs real inference in the same already-open page. No offline reload/navigation claim.
- Request capture from startup through processing: static GET requests only, no request bodies, no model-host requests before explicit loading, no input strings in URLs. App source has no remote content/inference path or credentials. Pattern scan found no common credential strings in built text assets; this is a bounded scan, not a universal secret detector.
- Downloaded JSON/CSV/Markdown independently reopened with Python json/csv, including original/reviewed fields, every record, multiline quoted formula-like text, signed negative numeric payoffs, current edited weights, holds and undo. CSV text-prefix protection does not alter signed numeric cents.
- Desktop 1440 px and narrow 390/320 px: no document horizontal overflow, every form field labelled, buttons ≥44 px high, keyboard focus works. Normal-viewport source/review/results screenshots saved and visually inspected. Physical phones and non-Chrome browsers remain untested.
- Matching runtime factory and immutable shared WASM SHA-256 verified; correct worker production base verified. See `asset-validation.json`.

## Collection and public release

Gallery inline scripts compiled with Node `new Function`; missing scripts fail the check. Exactly one new `ai-utility` entry, newest first. All 656 prior working-tree entries unchanged, including the pre-existing Receipt Current entry. AI Utilities remains before STL Generators/Mini Games; legacy search and 320/390 px gallery rendering passed. Root predeploy assembled **657** apps with **0 failed / 0 skipped**, preserved gallery index and exact new app files. Unrelated pre-existing source work is not included in this app's commit.

Public status and exact Pages commit are recorded in `publication-status.json` after verification. Public inference, reviewed workflow/export/offline tests and asset-byte matches are recorded separately; do not treat branch publication alone as functional proof.

## Limits

Nearest-neighbor scenario matching is not probability estimation or truth verification. An unrelated instruction-like note still receives a nearest scenario and remains pending; holding it correctly blocks an incomplete matrix. Real scenario sets may be incomplete, correlated, badly weighted or financially incomparable; the app cannot establish otherwise. No research study valuation, forecast, risk-utility recommendation or external action. Small-fixture results are not representative model accuracy. Initial downloads, memory consumption and cache retention may fail on restricted/low-memory devices; errors must be retried or used on a supported desktop browser.

## Verified public release

Pages workflow `43524808204` completed build/deploy/report successfully for gh-pages `86efbfac06b7c90700e6eb5f35a6bee844242632`. Public index/app/worker/runtime/WASM bytes matched the tested production files. Both real-AI fixtures, all nine browser workflow groups, independent reopening of public-downloaded artifacts, offline fresh-worker inference and the preserved 657-entry public gallery passed. The initial public probe occurred while deployment was still active and returned 404; after waiting for the actual deploy job to succeed, the public checks passed without republishing. See `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json` and `publication-status.json`. Targeted source/test lint also passed; vendored runtime is excluded from lint.
