# Observed validation — 2026-11-09

Production Vite bundle, desktop Google Chrome driven by Playwright. Successful classifications use real q8 MiniLM WASM inference, not mocked/fallback labels. Synthetic sources only.

## Known-answer observations

| Fixture | Intended types | Actual AI types | Matches |
| --- | --- | --- | --- |
| Library launch | decision, rationale, action, proposal, question | decision, rationale, action, proposal, question | 5/5 |
| Software release | decision, rationale, action, proposal, question | decision, rationale, **decision**, proposal, question | 4/5 |

The release follow-up mentioning a release meeting was incorrectly classified as a decision. The browser test explicitly corrected it to action before release. Both final reviewed registers contain one decision, one attached reason and one attached action, with original five records preserved. Literal-keyword agreement with reviewed labels is 4/5 in each batch, versus AI 5/5 and 4/5. These are computed fixture observations, not claimed general accuracy or measured productivity gains.

Additional challenge: “We did not approve the migration. The proposal is still under discussion.” → proposal (intended proposal); “Tessa to circulate the room plan by Tuesday.” → action (intended action; keyword baseline question); “The group settled on the blue design and closed the debate.” → proposal (intended decision). 2/3 matched. The model can help semantic shorthand and still miss implicit agreement. Mandatory human review remains necessary; no confidence percentages or proof-of-agreement claims.

## Actual passing checks

- Real inference on both distinct fixture meetings; model changes relevant editable workflow categories. Invalid result vector counts/dimensions/nonfinite values reject.
- Real full-capacity 20-note/30-text inference over eight bounded batches; every note retained. JSON audit reimport restores originals, returns all decisions to pending; maximum-length >50 KB audit envelopes restore <50 KB source payloads.
- Pending review blocks release. Rationale without approved decision parent blocks; held/wrong-type/self/dangling links block. Reviewer-corrected type/wording/owner/date applied, hold exclusion, undo, export invalidation after edits and record conservation verified. Leap-day and impossible-date checks.
- Downloaded JSON/CSV/Markdown are parsed/read independently, including quoted commas, quoted strings, newlines, Unicode, leading formula-like multiline notes, current reviewer corrections, all holds, all IDs and parent links. Clipboard equals current Markdown.
- Offline: after online caching, all network blocked and the old worker terminated, **fresh-worker real inference in the already-open page** succeeds. Offline reload/navigation is untested and not promised.
- First-load network: no model-host requests before explicit load; observed content requests are GET file downloads only with no request bodies. App/model paths are fixed and source text does not occur in URLs. No analytics or remote inference integration. Built text assets scanned for credential patterns; source data is synthetic. Pattern scanning is not a universal secret detector.
- Actual model-host network abort shows an error and no classifications; restoring network permits real inference. Actual weight request is intercepted then cancelled; retry runs the real five-note model successfully.
- Empty, invalid JSON, absent/empty records/title, oversized source/audit/file, duplicate IDs, too many notes, overlong note text and unsupported CSV import reject without stale review rows.
- Cancel/input changes prevent old results replacing new input. Explicit injected malformed-vector workers, unsupported-WASM error, worker constructor failure/crash, accelerated timeout and late stale callbacks all fail safely; subsequent real inference succeeds. These are defensive fault injections, not simulated successful AI. Physical unsupported devices are untested.
- Desktop and 390/320 CSS-pixel layouts: labels/focus, ≥44-pixel run control, no horizontal overflow, usable exports; screenshots saved and phone screenshot inspected. Physical touch devices and other engines are not verified.
- The reviewer-note Markdown omission found by the first core check was fixed; the complete production suite was rerun on rebuilt assets.

Evidence: `browser-validation.json`, `browser-test.log`, `core-validation.json`, `network-validation.json`, `cancel-download-validation.json`, `defense-validation.json`, `export-validation.json`, `bundle-audit.json`. Publication checks are recorded separately after root deployment. All limitations in README/UI apply; no unattended approval or automatic task sending.

## Published-site verification

Root `npm run predeploy` assembled all 553 app indexes (0 failed/skipped); root `npm run deploy` published the combined site. Pages built gh-pages commit `aeb01c329878189023c68f0f1ea68e595fa84dc7`. The deployed commit changed only the root gallery and this app’s seven new files; no older app assets were changed/removed. All 552 older gallery entries remained unchanged; every inline script compiled and the new AI Utilities entry appears exactly once. The new app adds ~876 KB of deployed files by reusing the existing immutable WASM.

Public gallery/app/worker/module-factory/shared-WASM SHA-256 comparisons passed against local production assets. The complete 10-group browser suite then passed again at https://xianghui.github.io/daily-app2/20261109-14/ with actual model downloads/inference, both fixtures, corrected human review, 20-note batching, fully offline fresh-worker inference, current artifact downloads/clipboard, phone widths, cancellation and defensive injections. The newly downloaded public-run artifacts were independently reparsed. See `public-validation.json`, `public-browser-validation.json`, `public-browser-test.log`, `publication-status.json`, `deployment-validation.json` and `hosting-files.json`. Physical devices/other engines and offline navigation remain untested.
