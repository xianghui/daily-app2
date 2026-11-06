# Brief Quarry — observed validation, 2026-11-07

## Actual production-bundle browser tests

`npm run predeploy` passes. `node browser-test.cjs` passes on desktop Chrome using Playwright and the built Vite bundle at `/daily-app2/20261107-4/`, not the dev server. Repeated after switching to the collection's byte-identical shared WASM. `browser-validation.json` and `browser-test.log` contain results.

- Real downloaded MiniLM q8 CPU inference on Urban heat and Password safety: 3 expected relevant passages included and 2 distractors excluded on each topic, 10/10 decisions on these synthetic development fixtures. Not a held-out accuracy estimate. The first exploratory run with a 0.20 cutoff admitted kitchen memo P3 at 0.277. Raising the disclosed cutoff to 0.35 removed it. Threshold tuning does not establish generalization.
- Urban heat selected H1/H2/H4, 34/50 words, mean similarity about 0.551 vs leading-passage baseline about 0.417. These are internal model scores, not independently measured quality or time savings.
- Password safety selected P1/P2/P4; materially different question/content changed both vectors and reviewed evidence.
- Maximum 80-passage input: 81 texts including question, 21 chunks, 497/500 selected words; all 80 originals retained. Manually adding an extra excerpt above budget disables apply.
- Reject, undo, shorten to verbatim excerpt, edit notes, apply, download JSON/CSV/Markdown and copy Markdown passed. Non-source invented excerpt blocks apply. Every edit invalidates applied exports.
- Actual downloaded CSV/JSON parse independently with Python csv/json; all originals/decisions/current edits retained, quoted commas/newlines round-trip, formula-leading multiline fields are escaped for CSV but lossless in JSON. Markdown/clipboard reflect current selected edited quotes and omit excluded quotes. Word totals and mean-score metrics independently recomputed.
- Seven invalid CSV cases, empty question, out-of-range budget, invalid format and oversized import rejected; duplicate IDs and excess cells/rows rejected.
- Cancel/retry, cold-download cancel/retry, input-change invalidation, delayed stale worker response and delayed file-read guards passed.
- Model network failure and WASM download failure display actionable errors with no records; recovery passes with real inference. Unsupported Worker/WebAssembly, worker constructor/error, malformed vectors and timeout paths tested by fault injection only. Successful paths always use the real model.
- After successful run, browser network disabled and worker recreated: real inference passed offline in the already-open page. Model cache also survived online reload without new remote requests. Offline reopening not claimed.
- No model-host requests before explicit run. Observed remote traffic: only GET/HEAD public asset downloads, no request bodies or user content in URLs; hosts huggingface.co and us.aws.cdn.hf.co. Runtime is same-origin. No integration accepts provider keys. Built text credential-pattern scan found no matches; source has no secrets/provider calls.
- Desktop 1440px and narrow 390px/320px: screenshots saved, no horizontal overflow; labeled controls, keyboard focus and mobile review/apply actions passed. Desktop screenshot visually inspected. No browser page errors.

## Collection validation

Every root inline script compiled with `new Function`; missing scripts fail validation. New gallery entry exactly once with area ai-utility, AI Utilities category first, all previous 498 entries preserved. Real browser gallery: 499 cards, older STL/mini-game sections and search intact. Root assembly reported 499 built, 0 failed, 0 skipped; new app is copied to deploy/20261107-4 alongside root index.

Public verification PASSED at https://xianghui.github.io/daily-app2/20261107-4/ . Pages built commit `62ff4b8def0646cdd6cf6e025a5e2f1186d02f65` matches gh-pages head. Every app asset, worker, WASM factory and shared WASM fetched publicly and matched local SHA-256 hashes. The entire browser suite passed again on the public URL, including both real-AI fixtures, fresh-worker offline inference, review/export, failure recovery and narrow layouts. Actual public-run downloads independently parsed successfully. Public gallery has 499 cards, AI Utilities first, older categories intact and search working. See deployment-validation.json, live-browser-validation.json, live-browser-test.log and live-gallery-validation.json.

## Limitations / not tested

No physical phones or Safari/Firefox performance tests; only Chrome viewport simulation. No full-document parsing, factual verification, contradiction resolution, multilingual quality guarantee or globally optimal selection. A low relevance score can still be useful or a high one misleading. Shortening exact quotes can remove context; human review remains necessary. Budget counts whitespace tokens, not language-aware linguistic words. No offline navigation/reopen claim. Models referenced by name can change upstream; observed revision/license recorded in model-source-validation.json. No real personal data or agent provider credentials used.
