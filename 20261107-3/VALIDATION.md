# Validation — Notice Atelier (2026-11-07)

## Production-bundle checks completed locally

`npm run predeploy` passed. The final production version reuses a byte-identical, same-origin WASM binary from the preserved 20261107-2 app; full browser, offline, network-recovery and token-limit tests were rerun after this change. `asset-audit.json` and `combined-validation.json` verify the shared binary SHA-256 and deployed presence. This avoids 26,861,777 duplicate bytes without changing the model or inference. Browser tests use real desktop Chrome through Playwright, serving `dist` at the production base. Successful inference tests do not mock the model. `browser-validation.json` contains actual drafts and review snapshots; `browser-test.cjs` is reproducible. Fault-injected workers are limited to defensive tests.

### Real AI / task-specific quality

Two different synthetic batches, three notices each:

| English | Observed neural draft | Check |
|---|---|---|
| The museum is closed on Monday. | Le musée est fermé lundi. | Museum, closure and Monday retained |
| Please wash your hands before entering. | Lavez-vous les mains avant d'entrer. | Washing hands before entry retained |
| The guided tour starts at 10 and lasts 45 minutes. | La visite guidée commence à 10 heures et dure 45 minutes. | Tour, 10 and 45 retained |
| Your order is ready for collection. | Votre commande est prête pour la collecte. | Order and readiness retained |
| Please do not park in front of the door. | Ne vous garez pas devant la porte. | Parking prohibition retained |
| The library has 20 computers and 3 meeting rooms. | La bibliothèque dispose de 20 ordinateurs et de 3 salles de réunion. | Library, 20 and 3 retained |

Six of six handwritten lexical/semantic assertions passed; both numeric-bearing records retained all numeric tokens. This is a tiny fixture result, not validated translation accuracy. In particular, “collecte” for customer pickup is understandable but less idiomatic than “retrait” in many service contexts; the review layer exists for these corrections. Native-speaker professional evaluation was not performed.

The 12-record limit ran as 12 real sequential inference chunks, preserving all IDs/source order; all 12 simple fixture checks passed. Source input remains intact. Changed-vs-copy baseline is computed from actual drafts, not a promised speed or quality improvement.

### Review / artifacts / constraints

- Edited French, approved one record, rejected another, added quoted/multiline reviewer notes, undid an edit, reapplied and exported. Applied snapshots disappear after edits.
- Status filter does not drop hidden rows from artifacts.
- Protected term loss and changed numeric tokens visibly flag drafts and disable approval. Restoring the exact term re-enables approval. Unit tests also reject forged invalid approved artifacts.
- Browser-downloaded CSV and JSON independently parsed by Python (`export-roundtrip.py`): all 3 edited and 2 quoted-source records retained, including exact originals, current French, rejected French blank in CSV, statuses and notes. Formula-like multiline text is safely prefixed in CSV and exact in JSON. Copied CSV equals downloaded CSV.
- Core tests cover malformed count/types, empty output, row reordering, bad approvals, duplicate IDs, limits, exact-term and number multisets, formula safety.

### Runtime, privacy and recovery

- No model-host traffic before the explicit Load AI action. Captured external requests were GET/HEAD for public model downloads, with no content bodies or source text in URLs. Observed hosts: huggingface.co and us.aws.cdn.hf.co.
- Successful online run → fully offline browser context → terminated/recreated worker → genuine identical inference in the already-open page passed.
- Online reload/re-run reused cached files with no additional remote request in that context. Offline initial navigation/app-shell reopening is not tested or promised.
- Empty/malformed CSV, missing columns, duplicate IDs, oversized rows, 13-row batch and oversized input all rejected; PDF and oversized file imports rejected. Actual Marian tokenization also rejected a 348-character punctuation-heavy notice exceeding 192 tokens, without creating drafts (token-limit-validation.json).
- Model network failure and WASM download failure surfaced errors with no fabricated results; removing network faults and retrying succeeded. Cancelling during cold model download then retrying succeeded.
- Cancel/retry and source-change cancellation passed; delayed stale worker results and delayed file reads could not overwrite newer inputs/results.
- Fault-injected unsupported Worker/WASM, worker constructor failure, worker runtime failure, malformed result and accelerated timeout all surfaced actionable errors. Defensive fault injection is not used to claim real inference.
- Credential-pattern scan of built text assets found zero hits; source integration has no API-key fields/provider integrations or remote content calls. This is not a general security certification.

### UI and gallery

1440px desktop and 390/320px phone viewports passed no-horizontal-overflow checks, screenshots, review/export interaction and keyboard focus/labels. Screenshots visually inspected. Physical phone runtime, other browser engines, low-memory devices and full accessibility auditing remain untested.

Gallery inline scripts compile with `new Function`; new entry exactly once as ai-utility; all 497 prior entries retained, 498 total. Browser gallery displays AI Utilities first and preserves STL Generators and Mini Games; search finds the new entry once. Root predeploy assembled all 498 apps with zero failures/skips and exact root gallery copy.

## Public deployment — verified

Final Pages commit `820fdb9b21af8249be3ef487effacb23897c5089` reached **built** and matches the remote gh-pages head. `deployment-validation.json` records byte-for-byte public/local checks for every app production asset plus the shared WASM binary. The public app is https://xianghui.github.io/daily-app2/20261107-3/ .

`live-browser-validation.json` records a complete rerun of the same real-inference, review/edit/reject/undo, 12-record batch, offline fresh-worker, cache reload, cancellation, input validation, source-race, network failure/retry, fault-injected defensive, export/copy and desktop/phone viewport suite against that public URL. All passed; the two three-notice fixture batches again passed all six semantic assertions and both numeric checks. Independently parsed the browser-downloaded artifacts after the live run; all edited/quoted records and current reviewed fields survived. Live gallery verified all 498 cards, AI Utilities first, new entry once and working search.

### Deployment recovery observed

The first published SHA `deb3e1796da7e884c9e095c6c11c9a2e98036209` built successfully but its deploy job returned only “Deployment failed, try again later.” A failed-job rerun produced a misleading queued workflow status with no jobs; the attempt endpoint confirmed completed/failure and pending deployments were empty. The documented legacy Pages rebuild was requested only after those checks; that rebuild also passed build but failed deployment. Logs are retained.

The final version reuses an already deployed byte-identical WASM binary, removing 26,861,777 duplicate bytes. The entire local suite was rerun, then root predeploy/deploy published the changed bundle; its new SHA built/deployed successfully. The reason for GitHub's earlier generic rejection was **not isolated**: reduced payload and a new deployment SHA coincided with recovery, and neither is claimed as the proven cause. No Pages source, scheduler, old app source or deployment configuration was changed. A successful branch push alone was never treated as public verification.
