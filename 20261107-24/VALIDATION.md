# Validation — Distractor Desk / 20261107-24

## Local production bundle

- Per-app predeploy passes. Real production worker and collection WASM paths tested in Chrome.
- Real WASM MiniLM inference on Earth science and Software systems: paired distractor recall in top 3 is 8/8 and 8/8. Not a universal accuracy claim.
- Earth mean cosine 0.462054 vs input-order baseline 0.357981; software 0.439409 vs 0.272656. Measures relatedness only, not exam validity.
- Maximum 24-concept batch / six chunks: every concept preserved, 3 distinct non-self choices. 2-distractor setting also tested.
- Fully offline fresh-worker real inference passes in already-open tab. Offline shell reload not claimed.
- Review edits, reject, undo, invalid duplicates, apply/export snapshot invalidation, JSON import roundtrip, cancel/retry, stale-run input changes, empty/malformed/oversized/duplicate inputs pass.
- Worker download failure and model-host network abort yield errors without fabricated results; network restoration + real inference retry passes.
- Defensive fault injection: malformed vectors, unsupported worker/runtime, worker crash and timeout safely reject results. Fault injection never used for successful inference checks.
- All captured requests are GET with no bodies; no model downloads before explicit action. Default input never uploaded. No embedded credential-pattern matches; no provider integration.
- JSON artifacts parse and preserve originals, including excluded concepts. Independent gift-pegjs 1.0.2 parses reviewed 7-question GIFT and 8-question reserved-character/newline fixture. Correct answers, distractors and edited stems checked against review. Clipboard copies actual GIFT. Imported audit restores source only, as documented.
- Desktop and 320/390-pixel phone viewport workflow/export pass without horizontal overflow; labeled controls, visible focus and touch-friendly buttons. No page errors. Screenshots saved.
- Gallery scripts compile; new entry once; every old entry preserved; AI Utilities first.

Evidence: browser-validation.json, extra-validation.json, artifact-validation.json, asset-audit.json, gallery-validation.json, logs, synthetic exports and screenshots.

## Limitations / untested

Physical mobile devices, Safari/Firefox, screen readers, actual Moodle server import, offline app-shell reopening and psychometric quality are untested. Model uses upstream main revision, not pinned. Memory size is advisory. Ambiguous synonyms and poor banks require instructor corrections. No measured time-saving or educational accuracy claim.

## Publication

Public built-commit, asset hashes and real inference checks recorded separately after deployment. A branch push alone is not verification.

## Public verification — passed

GitHub Pages built commit `8aa4b18d3736577134b53420c2c158d8bd27535b` matches remote gh-pages. Every app/runtime asset, including shared WASM, matches the local SHA-256. The public browser suite passed all 14 checks, real inference on both banks (8/8 expected pair inclusions each), maximum batch, fully offline fresh worker, reviewed artifacts and defensive paths. Public GIFT independently parsed and JSON round-tripped again. Gallery renders all 516 apps with older categories preserved. See public-evidence/, deployment-validation.json and public-gallery-validation.json.
