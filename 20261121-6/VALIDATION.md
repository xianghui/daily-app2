# Observed validation — 2026-11-21

Production Vite bundle served at the actual deployment base, real desktop Chrome WASM CPU with GPU disabled.

- Two materially different synthetic batches: packaging (paper thickness / parcel mass), water workshop (temperature / conductivity). Real MiniLM inference returned 16/16 simple expected group links; first-group baseline 8/16. Repeated within-group notes make these easy fixtures; not a general accuracy estimate.
- Real challenge: negated thickness / intended parcel-mass note incorrectly mapped to thickness. Unrelated lunch/meeting note also ranked a group. No entailment or out-of-domain detector: mandatory review/hold is essential. See input-review-validation.json.
- Numerical: exact line slope/intercept, ten axis-swap/lambda-reciprocal checks including negative slopes and lambda 0.001–1000; constant/zero-covariance/insufficient groups guarded. No claim that Deming is more predictive than OLS.
- Production browser: maximum 48 records / 12 groups (60 embeddings / 15 chunks), JSON envelope reimport, preserved source and row totals; pending reviews and duplicate specimens blocked. Editing numerical X retained original; multiline notes, hold/all-held, undo, export invalidation and clipboard exact match passed.
- Actual JSON/CSV/Markdown downloads parsed independently with Python csv/json. Numeric fits, all IDs/readings, edited multiline formula-like evidence and 48-row audit survived. CSV strings safely escaped; original signed numeric fields remain numeric.
- After online inference, all networking disabled, worker terminated, fresh worker performed real inference in same warmed page. No offline reload/navigation claim.
- Defensive fault injection only: model network abort with actual recovery inference; unavailable WASM/module workers; worker download/error; malformed vector/envelope; shortened timeout; late messages after cancel/input changes. No fabricated suggestions or exports. Real successful inference tests are not mocked.
- Cold model download cancellation and real retry; delayed file read / worker-source fetch input replacement; late malformed old run could not overwrite a newer real inference. Empty/malformed/oversized/bad-shape sources and unsupported file format rejected.
- 1440/390/320px no horizontal overflow; labeled controls, keyboard-visible focus styles and touch-sized controls. Overview/review screenshots visually inspected. Physical phones, browser engines other than desktop Chrome and assistive screen-reader interaction untested.
- Network capture: no model requests before explicit run; external file downloads GET with no bodies; no user content sent. No keys/providers/integrations in app. Built-asset credential pattern scan supplements source inspection, not proof of all possible secrets.

See browser-validation.json, core-validation.json, defensive-validation.json, boundary-validation.json, stale-retry-validation.json, cold-cancel-validation.json, artifact-validation.json and runtime-dependency-audit.json for actual observed details. Public deployment and asset checks are recorded separately once complete.

## Public release verified

Matching gh-pages commit `d44b53c10849a077dee12c526b324ebb42b3b6aa` reached built status; workflow `44817816726` succeeded on the first deployment. Public app and all shared worker/factory/WASM plus gallery byte-matched the assembled site (9 assets). The complete public browser suite repeated both real-model fixtures, actual reviewed downloads/independent CSV parsing, clipboard, offline fresh-worker inference, 48-row batching/reimport, cancellation/retry and 320/390/1440px checks. The 763-entry gallery retained all existing objects/categories. Combined site 999827491 bytes under the unchanged 1,000,000,000-byte guard. No legacy runtime modification was needed. Unrelated pre-existing recovery work remains untouched and excluded from source staging. No digest sent.
