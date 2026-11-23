# Observed validation — 2026-11-24

## Local assembled production bundle

- `npm run predeploy` passed; root assembly built/copied 836 apps, zero failed/skipped. Size guard unchanged: **999,833,933 bytes**, below 1,000,000,000. Shared runtime avoids duplicating model code/WASM.
- Real Chrome CPU inference, GPU disabled: both materially different three-record fixtures matched all **6/6** intended convention links. Strict statuses were ready/ready/blocked and blocked/ready/ready. Each had one baseline disagreement among two valid approved dates. Tiny synthetic fixtures are not general accuracy evidence.
- Context-only change on identical `2020011` caused real inference to choose week versus ordinal, changing output from 2019-12-30 to 2020-01-11.
- Competing-negation probe **failed** semantic intent: week chosen, ordinal intended. Mandatory review and holds are necessary; dates can be valid yet represent the wrong source convention.
- Independent Python `datetime.date.fromisocalendar` oracle matched **74,200** year/week/weekday combinations, including nonexistent week 53, across 1900–2099. Boundary cases cover leap/nonleap/century dates, invalid weekdays, wrong formats and year limits; malformed vectors/schema rejected.
- Maximum 24-record batch, actual four-text worker chunks, source changes, cancel/retry, review/edit/hold/undo, approval reset, stale-export invalidation, actual downloads, clipboard and audit-original reimport passed. Complete audit row conservation checked; release excludes blockers/holds.
- Downloaded JSON and CSV independently reopened using Python json/csv; dates checked with Python datetime. Original/edited values and multiline formula-like note survive, with CSV formula neutralization. Ready-only release identities/dates agree with current reviewed audits.
- Fully offline **fresh-worker real inference** passed within the already-open warmed page. Cold offline reload/navigation remains untested and not promised.
- Real model-host network abort produced a visible failure/no suggestions; unblocking and explicit retry completed actual inference. Worker download abort also produced a visible error. Defensive fault injection passed unsupported Worker/WASM, worker constructor/error, malformed vectors, timeout and stale error. A delayed well-formed success could not replace a newer real inference result; delayed file reads could not overwrite edited input. Keyboard focus order passed. Cancellation during pending fetch prevented late output. Successful inference was never mocked.
- Network capture from production startup through workflow contained only asset GETs, no request bodies or source context in URLs; no model request before explicit Load. Audit stores hosts/paths/query-key names only, not CDN signed query values.
- Desktop 1440px and narrow 390/320px layouts: no horizontal overflow, labeled inputs and ≥44px controls. Screenshots saved and phone hero/review/results and desktop hero visually inspected. Long metric words wrap but remain readable. Physical mobile devices/other engines untested.
- All inline gallery scripts compiled with `new Function`; new AI entry exactly once; all 835 pre-run entries preserved in working gallery. Browser rendered all 836 cards and AI Utilities category without errors/phone overflow.
- Nine assembled app/gallery/shared runtime assets served byte-identically, including worker, module factory and WASM. Source/runtime provenance retained. Shared source app code and tokenizer settings inspected; no new runtime duplication.

## Publication

First combined-root deployment `b057a8c6bf20a166d41b3b38f9126f5fe7ba8ca3` reached matching Pages built status. Full public real-AI workflow (both fixtures, context-only changes, offline fresh worker, max batch, reviewed artifacts and responsive checks), independent downloaded artifact parsing, all 836 gallery cards and nine byte-identical app/runtime assets passed.

Final metadata-only deployment `aaecdc7528c952ec7dfc019c2ae3d469ba80c156` reached matching Pages **built** status. Public title/favicon/app/runtime byte audits, all 836 gallery cards and a fresh real CPU inference smoke (ISO-week output 2019-12-30) passed. JavaScript and CSS remain byte-identical to the fully tested public bundle (`metadata-polish-validation.json`). Final assembled size: **999,833,933 bytes**. Existing unrelated working-tree edits are preserved, not staged as part of this app.
