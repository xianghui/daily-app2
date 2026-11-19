# Atlas Overlay — observed validation

## Local production bundle

- React/Vite `npm run predeploy` passed. Real Chrome (headless, CPU WASM, GPU disabled), built app served at its production base; no development-runtime substitutions.
- **Gallery sketch:** all 4/4 intended semantic landmark links; scale 2, rotation +90°, translation (10,20). Released targets exactly (8,24), (6,26). Zero fit residual against nonzero translation-only baseline.
- **Archive floorplan:** all 4/4 intended semantic links; scale 0.5, rotation −90°, translation (−3,7). Targets exactly (−2,5), (2,1); latter flagged outside observed box. Fixture outcomes are tiny known-answer checks, not general accuracy claims.
- 1,500 independent geometry cases passed: 1,000 generated known transformations and 500 noisy normal-equation stationarity cases; fitted RMS never exceeds the fitted translation-only comparator. Known target values, duplicate identities, holds, degeneracy, mismatched schemas/vectors and excessive residual blocks checked.
- Complete browser workflow: pending review refuses apply; edits invalidate exports; multiline formula-like note retains quotes/commas/newline in JSON and spreadsheet-safe CSV; hold/undo, duplicate-anchor block, edited coordinates, excessive residual, audit reimport, clipboard and actual JSON/CSV/target CSV/Markdown downloads passed.
- Independent Python `csv`/`json` parsing verified all observation IDs, target coordinates, multiline escaping and complete 16-observation audit retention. Max 24 real inference texts in four-text chunks; max 8 released target points. Duplicate-laden 16-observation batch remains blocked rather than silently dropping observations; audit reimport works at the full batch size.
- Fresh-worker real inference passed fully offline **within the already-open warmed page**. Offline navigation/reload untested and not promised.
- Request audit from startup through real inference: no model requests before explicit loading, only GET/HEAD with no bodies and no source snippets in URLs. Report persists origins/paths only, not CDN signed query values. No external model provider integration; credential-pattern scan accompanies assembly/public assets.
- Network/model-host failure with successful real retry, missing WASM, failed worker download, unsupported Worker construction, worker error, malformed vectors/envelope and shortened timeout fault injection all yielded explicit errors, zero fake suggestions and disabled exports. Fault injection is defensive only, never evidence of successful AI.
- Cancellation/retry, source changes during inference, delayed old result after newer completion, and delayed import after changed input all preserved latest run/source authority. Worker termination/run IDs protect stale completions.
- Desktop 1440px, phone-width 390px and 320px: no horizontal overflow; form labels, visible focus, minimum 44px button heights; normal-viewport overview/review/results screenshots inspected. Physical phones and other browsers untested. SVG labels may overlap; exact coordinates remain accessible in text below.
- Irrelevant instruction-like text still receives a nearest match; human hold blocks the worksheet. Similarity is not confidence or authority. No automatic geographic, physical or account actions.

Machine-readable reports and test scripts live alongside this file. Publication verification is appended after combined assembly/deploy; a branch push alone is not claimed as success.


## Combined assembly and public verification

Root predeploy assembled all **722** apps with no failures/skips. Gallery inline scripts compiled; the new AI-utility entry appears exactly once and all **721 prior entries** remain unchanged. Desktop/phone gallery rendering and search passed. Combined site: **999,835,753 bytes**, below the conservative 1,000,000,000-byte guard; no new older-runtime deduplication rules or source-build changes.

Root `npm run deploy` published Pages commit `12ec07e4950f25746abd6b4adf4ed5dfc54a4148`; matching Pages API status **built** and workflow **completed/success** were verified. All **nine** public gallery/app/worker/factory/WASM assets byte-match the assembled bundle; deployed text credential-pattern scan passed. Public URL: https://xianghui.github.io/daily-app2/20261119-13/

The full real-model browser workflow suite was rerun on the public app: both known-answer fixtures, reviewed artifacts, current-output invalidation, max batches, clipboard, cancellation/retry, offline fresh-worker inference, privacy requests, desktop/phone labels/focus/touch/overflow passed. Public plot screenshots were also inspected at 1440/390/320px. The independent artifact parser was rerun on the public downloads. No external content uploads or digest messages. Source staging deliberately excludes unrelated pre-existing edits/untracked projects.
