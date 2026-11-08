# Observed validation — 2026-11-08

## Production bundle, real model

`npm run predeploy` passed. Actual browser tests used production Vite assets at `/daily-app2/20261108-15/`, not a dev-server shim. Chrome on macOS, WASM CPU q8 MiniLM. No mock model on successful inference paths.

| Synthetic batch | Intended anchor scores | Observed suggestions | Known-answer matches | Original marks matching key |
|---|---|---|---|---|
| Water cycle | 1, 2, 0, 1 | 1, 2, 0, 1 | 4/4 | 1/4 |
| Database indexes | 1, 2, 0, 1 | 1, 2, 0, 1 | 4/4 | 1/4 |

Both originals deliberately contain three inconsistencies. AI placed all three disagreements before the unchanged answer; final marks nevertheless stayed original until human edits. This tiny seeded comparison is not a realistic accuracy estimate or measured time saving.

**Failed semantic challenge:** an answer falsely stating indexes never speed lookup, never consume storage and never slow writes matched the score-2 anchor with cosine **0.920408**. Similarity is clearly not correctness. Instruction-like text remained inert input, with no credential request or authority change. This finding is documented in the UI and README; mandatory human decisions, holds and preservation of original marks are intentional safeguards.

## Successful local checks

- Real inference on both subjects and instruction/negation challenges; ranked finite normalized 384-dimensional vectors.
- Full 24-answer batch and JSON reimport conserved every original answer. Maximum 11-anchor + 24-answer **35-text actual inference** passed, with 11 ranked candidates per answer.
- Pending reviews block apply; final marks reject blank, fractional and out-of-bounds values. Unique IDs, complete anchor levels, nonempty content, size limits, format limits and model-output schema checked.
- Human edit, anchor-as-provisional edit, restore original, confirm/hold, undo and export invalidation passed. All 24 held records survive JSON/CSV with zero confirmed totals and blank released marks.
- Independent Python CSV parsing reconciles originals, reviewed marks, multiline quoted notes, formula safety prefix, queue positions and released marks. JSON/Markdown and clipboard reflect current reviewed edits. Edited total changed from 5 to 4 on the same four confirmed records, exactly one human mark change. This is not labeled an improvement.
- Actual first-use model-host abort gives a visible error and no fake output; subsequent online retry succeeds. Worker-download abort/retry also passed.
- Worker constructor/runtime rejection, worker crash, malformed vectors and 180-second timeout behavior tested with bounded fault injection. Unsupported runtime is actionable, not a fake deterministic fallback.
- Cancellation/retry, input changes during run, obsolete failed worker fetch, delayed file read, late cancelled-worker response and late response after a newer success cannot replace current state.
- After online inference, all networking was disabled, the worker terminated and a fresh worker performed real inference on the open page. No offline reload claim.
- Request capture from startup through inference: only GETs, no request bodies and no user-text URLs; no model download before explicit loading. Code has no remote content inference or credentials. Built text credential-pattern scan found no matches; this is not claimed as exhaustive proof of absence.
- Desktop and 320/390px layouts exercised; no horizontal overflow, current review/export actions work, visible keyboard focus. Screenshots visually inspected. Real phones, low-memory devices, Safari/Firefox and screen readers untested.
- Gallery: every inline script compiled with `new Function`; 530 previous entries unchanged, one new AI Utility first; total 531 cards. Browser rendering/search preserves AI Utilities, STL Generators and Mini Games.

Artifacts: `browser-validation.json`, `extra-validation.json`, `boundary-validation.json`, `artifact-validation.json`, `core-validation.json`, `asset-audit.json`, `gallery-source-validation.json`, `local-gallery-validation.json`, fixture exports and screenshots.

## Publication checks

Publication is only complete after the root combined deployment has a matching `built` Pages commit, public asset hash checks and public real-model workflow execution. Public evidence is recorded separately in `deployment-validation.json`, `public-assets-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `publication-status.json`.

Public verification passed: Pages commit `e3330f75dd5ef1c02f2328b396d5604ed55667d8` reached `built`. All seven app assets plus the shared WASM hash match the production build, and the public root gallery is byte-identical to source. The public URL passed all 13 real-browser workflow/defensive checks, including both real-model subject fixtures and offline fresh-worker inference, with zero uncaught page errors. Public gallery renders 531 entries with earlier categories intact. Source publication excludes pre-existing unrelated `20261105-7/` work.
