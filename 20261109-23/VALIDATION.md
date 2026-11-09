# Observed validation — 2026-11-09

Validation used actual production Vite assets, real Google Chrome headless on the build Mac, CPU WASM and the real downloaded q8 Xenova/all-MiniLM-L6-v2 model. Successful inference was never mocked. Fault injection was restricted to error/timeout/stale-response tests.

## Actual model quality

| Synthetic workflow | Intended primary lenses | Observed proposals | Exact labels |
|---|---|---|---|
| Checkout study | open, closed, leading, multi | open, closed, leading, multi | 4/4 |
| Library interviews | open, closed, leading, multi | open, closed, leading, leading | 3/4 |

The library prompt about opening hours, book selection and borrowing was mislabeled leading, manually corrected to multi during review. Seven of eight tiny examples is a fixture observation, not general accuracy. These examples are similar to anchor styles and are not an independent evaluation dataset.

Challenge: “Our awful checkout is not amazing. Tell me about the last time it failed.” → leading; “Why did you stop using the service?” → open. The latter assumes the participant stopped using it, an important leading premise the model missed. Nearest-anchor similarity cannot certify neutrality or suitability. No automatic rewrites or improvement claims are made.

## End-to-end checks

- `npm run predeploy` passed. React + Vite production bundle served at its real `/daily-app2/20261109-23/` base with local worker/factory and shared immutable WASM.
- Both real fixtures produced editable proposals, mandatory review and complete actual downloaded JSON audits. Original minute totals: checkout 15, library 14. Complete approval fit budgets 20 and 18. A human rewrite plus holding library L4 yielded three approved prompts, one held, one rewrite and nine planned minutes, all independently recomputed.
- Pending review blocks apply. Non-open retained wording without a reason blocks apply. Over-budget approved guides block exports. Review/wording/time/note changes invalidate prior exports; undo restores the exact prior review state. Held prompts remain in every complete audit.
- Full 24-question input plus 12 anchor texts executed real inference over nine four-text batches. All 24 records survived holding/export. Downloaded JSON reimport restored identical original input with approvals reset to pending.
- Downloaded CSV independently parsed with Python `csv.DictReader`; every original/revised prompt, ID, decision and minute value survived. A note containing `=1+1`, newline, commas, quotes and Unicode survived with the documented leading apostrophe formula defense. Markdown contained current human rewrite, approved guide and all original/held records; copied clipboard content equaled downloaded Markdown.
- Python independently parsed all downloaded JSON audits and recomputed source conservation, approved guide order, minute totals, remaining budget, rewrite counts and AI/human agreement. `core-test.mjs` passed 50 schema, boundary, malformed-vector, budget and conservation checks including 1–24-row cases.
- Empty/malformed JSON, empty questions, oversized batches, duplicate IDs, overlong content, invalid minute bounds, >50 KB workflow payload, unsupported file extensions and >1 MB files are rejected. No results fabricated on error.
- Cancellation during an actual intercepted model-weight request followed by real inference retry passed. Cancel/retry, editing source mid-run and a manually delivered stale callback after a newer successful run could not replace current results.
- Model-host downloads were blocked in a fresh context: visible failure, no output, then real inference retry after unblocking passed. Actual worker with WebAssembly removed reported actionable failure. Injected malformed vector output, Worker-construction failure and accelerated 180-second timeout all failed closed; actual inference recovery passed.
- Offline: after one real online load, network was fully blocked and the app created a fresh worker for another successful real inference. Worker source, model, WASM factory and binary caches suffice **inside this already-open page only**. Offline reload/navigation NOT claimed or tested.
- Browser request capture from production startup through inference showed no model-host requests before explicit loading, only documented GET file downloads with null request bodies, and no question text in URLs. Captured reports strip signed query values. No remote inference, content uploads, analytics or keys are implemented. Built-text credential-pattern scan results are recorded separately.
- Desktop 1280px and narrow 390px/320px Chrome viewports: no horizontal overflow, labeled controls, visible focus, ≥44px primary touch target, actual exported artifacts and screenshots. Screenshot visually inspected at 390px. Real touch devices, screen readers, Firefox, Safari and low-memory hardware remain unverified.

## Collection / publication

Gallery validation compiles every inline script with `new Function`, requires at least one script, checks exactly one correctly categorized new entry and preserves all 561 prior entries in order, including older categories. Root combined predeploy/deploy and public asset/inference results are recorded in publication reports after execution. Branch publication alone is not counted as a verified app.

Pre-existing unrelated modifications (`20261109-17`, `20261105-7`, and corresponding root additions) are retained; only Question Compass changes belong to this source commit.

## Final public result

Published and independently verified at https://xianghui.github.io/daily-app2/20261109-23/ . First Pages attempt built but timed out in `syncing_files`; after it completed with failure, a second root combined publish (including corrected title/favicon metadata) succeeded. Final remote gh-pages head and Pages `built` commit both equal `0b772e51f0729bae5f6fddcce62472ba5f919baf`, [successful workflow](https://github.com/xianghui/daily-app2/actions/runs/42633984991). No AI/model simplification was necessary; the failure was hosting synchronization, not inference.

- Public gallery and app index, JS, CSS, worker, factory, compass icon and shared WASM matched local build SHA-256 hashes. Gallery root bytes matched source.
- Entire real-browser workflow suite reran against the public HTTPS app: both actual model fixtures again produced 4/4 and 3/4 intended labels, with the same missed-assumption challenge, manual correction, edits, undo/holds, full batch, current-artifact downloads/clipboard, offline fresh-worker inference, privacy, cancellation, stale and defensive tests passing. Fault injection only tested defensive handling; successful inference remained real.
- Public downloaded JSON/CSV/Markdown artifacts were reparsed independently with all sources, edits, held prompts and accurate minute/count metrics retained.
- Public rendered gallery: 562 cards, AI Utilities first, newest app first, old STL Generators/Mini Games categories and legacy search preserved; new link correct.

Reports: `publication-status.json`, `hosting-attempts.json`, `public-validation.json`, `public-browser-validation.json`, `gallery-ui-validation.json`, `artifact-validation.json`, `asset-validation.json`, `browser-validation.json`, network/runtime/cancellation reports, plus synthetic downloaded artifacts and screenshots.
