# Observed validation — 2026-11-15

## Production bundle

- `npm run predeploy` passed. Actual production base served in Chrome headless, GPU disabled; no server inference.
- Two materially different fixtures: learning-platform engagement and library borrowing. **16/16** intended event classes matched real MiniLM inference; literal event-label baseline covered **0/16**. Tiny synthetic checks, not a general accuracy claim.
- Each fixture: **1/2 mature accounts returned (50%)**, versus **1/3 all activated accounts (33.3%)** naive baseline; one immature account, one no-start account, one ignored repeated activation. Initially the first fixture cutoff was too early for its intended known answer; test caught this and cutoff was corrected before rerunning successfully.
- **600** independent Python datetime-oracle cases verified accounts, exact qualifying event lists, maturity, cohorts, denominators and both rates. Explicit lower-inclusive/upper-exclusive bounds, one-second-before-maturity, repeated-start handling and schema guards passed.
- Maximum **48 events / 51 texts**, four-text chunks: real inference classified all three identical-description event sets correctly; complete review yielded 16/16 mature returning accounts. Complete audit source reimport preserved originals/reset approvals. No lost event/account rows.
- All-network-blocked **fresh-worker inference in an already-open warmed production page** passed. No offline reload/startup claim.
- Mandatory approval, hold/partial warning, all-held empty rates, undo, event-type/account/time editing, future reviewed timestamp block and stale-export invalidation passed. Multiline formula-leading review note preserved in current JSON/Markdown/clipboard; safe escaped CSV verified with independent Python parser. Every event and account survives downloaded artifacts.
- Bad/empty/oversized JSON, duplicate IDs, invalid day windows/UTC/future timestamps, overlong text, PDF and oversized/malformed import failures passed.
- Model-host failure then successful real retry; worker-download failure; unavailable WASM/module worker; malformed vectors/envelope; worker errors and timeout all yielded visible errors without fabricated results. Successful AI tests used real inference; fault injection restricted to defenses.
- Cancel/retry/source changes, delayed worker-source fetch, delayed import read and deliberately late old result after a completed newer run verified separately.
- No model host request before explicit loading; all captured requests GET with no bodies; synthetic content not in URLs. Public signed query values are omitted from saved logs. Built text credential-pattern scan and immutable shared dependency hash audit passed. No provider integration.
- 1440px desktop and 390/320px phone layouts passed no-overflow, labels, 44px buttons and focus checks. Viewport screenshots saved; phone overview/results visually inspected.

## Limitations

An unrelated instruction-like note still received a nearest event type and was held. This model does not establish relevance, first-use truth, identities, tracking completeness or churn. Unknown missing events and holds bias denominators. No statistical significance or future-product behavior claim. Other browsers, physical-phone inference and offline page startup remain unverified.

## Publication

Combined and public results are recorded in the corresponding validation JSON and `publication-status.json`; a branch push alone is not proof of public functionality.

Combined-site preflight passed: 694 apps assembled, zero failed/skipped, **999,632,903 bytes**, under the unchanged conservative 1 GB guard. Gallery preserves 693 earlier entries and old categories, with AI Utilities first. The full combined production browser suite passed. Deploy-only byte-identical legacy WASM reuse additionally covers `20261030-21`; its real worker, synthetic image import and binary STL export passed (3,276 triangles, 163,884 bytes), without modifying its source build. Shared geometry host `20261028-24` must remain published.

Public release verified: first matching Pages build `b2ce7174d2eb7ebd5329a8ddbb9af40eb32005f0` reached **built**. All new app and AI dependency bytes matched production sources, as did rewritten legacy shell/worker assets. Both public real-model fixtures, all five workflow-check groups, raw-URL/request-body privacy checks before query sanitization, reviewed downloads/independent artifact parses, offline fresh-worker inference and 694-card gallery passed. The affected older geometry worker/image import/STL export also passed publicly. No shared model runtime or older app source was modified. Source staging preserves and excludes unrelated pre-existing work.
