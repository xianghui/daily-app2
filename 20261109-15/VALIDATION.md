# Observed validation — 2026-11-09

Production bundle served at its real deployment base, using desktop Chrome/Playwright, real q8 MiniLM WASM CPU inference. Synthetic data only.

- `npm run predeploy` passed. Worker and runtime bundled locally, immutable shared WASM reused.
- `node core-test.mjs`: majority, transfer, exhausted denominator, equal-final and elimination ties, all-held/no-continuing, vote conservation, duplicate-rank and unreviewed gates passed. An initial test expectation incorrectly expected a winner after a 3–3 transfer; corrected the fixture to a genuine 4–2 transfer, not the tie-stopping implementation.
- `node browser-test.cjs`: both materially different fixtures (outing and library) matched **8/8 expected links each**, versus 0/8 exact-description baseline, on these small authored examples only. Both tallies are A=1/B=2/C=1 and stop at the A/C elimination tie. Review agreement is not independent accuracy.
- Human correction resets approval; hold, undo, duplicate rejection, current JSON/CSV/MD, clipboard and export invalidation passed. Audit reimport restores originals and requires new review.
- Full limits: 6 options, 12 ballots × 3 ranks = 42 texts in 11 real inference batches, 36 rank records preserved.
- Negated pottery prohibition still proposed pottery (B); unrelated accounting software text proposed cooking (C). Neither is semantically acceptable. Held whole in challenge audit, not counted.
- Offline: a fresh worker ran real inference with the browser context fully offline after a successful online run. Only an already-open page is claimed; offline navigation/reload untested and not promised.
- Empty/malformed/oversized data, duplicate IDs, unsupported/oversized imports, model-host abort/retry, cancellation during a real weight request, input changes mid-run, stale callbacks, malformed vector output, missing worker constructor, unsupported WASM, worker crash and timeout handling passed. Fault injection only tests defensive paths; successful inference uses the actual model.
- Network capture from startup through inference found only GET downloads, null bodies, documented local/HF hosts, no content in URLs and no model download before explicit load. Built text asset scan found no common OpenAI/GitHub/AWS secret patterns; source contains no provider integration or credential handling.
- `python3 artifact-test.py` independently parsed all eight reviewed CSV rank rows and JSON, checked original texts, edits, UTF-8, quoted/multiline formula escaping, held rows, Markdown completeness and per-round conservation.
- 390px/320px viewport overflow, input focus, ≥44px primary touch control and working phone-width exports passed. Screenshots inspected. No physical-phone, screen-reader or cross-engine inference claim.

`browser-validation.json`, `network-validation.json`, `cancel-download-validation.json` and `transfer-validation.json` retain observed outcomes. Public-host verification is recorded separately after combined deployment.

## Public publication verified

Combined root predeploy assembled **554 apps**, zero failed/skipped, preserving all 553 older entries. Root `npm run deploy` published Pages commit `c48854a5839789a386a70c5a24fcbc06fa1f2c0c`; GitHub Pages build/run 42571131583 completed and Pages API reported `built` for that exact commit.

`node public-test.cjs` verified the rendered gallery and prior categories, plus SHA-256 equality for the gallery, new app HTML, bundled JS/CSS/worker, runtime factory and immutable shared WASM. The complete real-model browser suite was rerun at https://xianghui.github.io/daily-app2/20261109-15/ and passed all 10 checks, including both known-answer polls, 42-text batching, fresh-worker offline inference, review/artifacts and defensive paths. Separate public browser transfer/exhaustion test and independent artifact parsing passed. See public-validation.json, public-browser-validation.json, public-transfer-validation.json and public-browser-test.log. Offline navigation, real phones and other engines remain unverified.
