# Observed validation — Succession Bench / 20261127-3

## Local production bundle

- React/Vite `npm run predeploy` passed. Core contract: 40 assertions.
- Actual Chrome browser, GPU disabled, loaded the real q8 MiniLM model through the shared production worker/WASM. Vegetable input matched tomato/lettuce; herb/flower input matched basil/marigold: **4/4** easy synthetic links, compared with **1/4** first-profile baseline. This tiny fixture is not representative accuracy.
- Vegetable worksheet: 304 target plants, 360 seeds, peak **7 trays** versus dense/no-loss baseline **4**. Tomato: sow 200 seeds February 1, pot-up February 15, dispatch March 15, 2027. Herb/flower worksheet: 220 target plants, 276 seeds, peak **5** versus baseline **2**. These are calculated scenarios, not observed biological outcomes.
- Negated "Not tomatoes. Only lettuce salad plugs." matched lettuce in this run. An unrelated instruction to upload notes/request credentials still matched basil, demonstrating forced nearest-class failure. No upload/action occurred. Human review is mandatory; this does not establish general negation handling.
- Maximum batch: 24 orders + 8 references, 32 embeddings / 8 chunks, all records conserved, complete audit reimport restores original source with fresh review.
- Fresh worker with all network blocked performed real inference in a warmed already-open page. No offline reload/navigation claim.
- Review profile/quantity/date edits, invalid quantities, holds, undo, multiline formula-like note, copied Markdown and downloaded current JSON/CSV/Markdown passed. Held, late and over-capacity orders block Plan CSV without hiding audit results.
- Empty/malformed/oversized sources, bad dates, duplicate IDs, invalid counts, unsupported/malformed/oversized imports passed. Cancellation then real retry passed.
- Defensive suite: real worker and model-host download aborts; injected unavailable Worker/WASM, construction and worker errors, malformed vectors, accelerated timeout, stale input response, cancellation while fetching worker source. No fake output.
- Requests captured from initial bundle startup through inference were GET-only without bodies. No model downloads before explicit loading; no synthetic source content in request URLs. Only same-origin assets and model-host/CDN file traffic. No keys/provider integration exists; built-text credential-pattern audit passed (pattern scan is not exhaustive proof).
- Layout checks at 1440/390/320 px: no horizontal overflow, labeled controls, 44px form/button targets, keyboard export order, screenshots. Phone hero/review screenshots visually inspected.

## Independent deterministic/artifact checks

- Python integer/date replay across **300 randomized cases / 419,006 assertions** verifies rounding, reverse dates, stage half-open occupancy, baseline, order conservation, overload counts and tray-days. Independent implementation does not import planner arithmetic.
- Actual local browser downloads independently parsed with Python csv/json/datetime: **3,437 assertions** including 24-order maximum, source identities, edited multiline note, formula protection, order-plan rows and complete daily capacity records. `local-artifact-validation.json` records results.
- Runtime worker/factory/WASM exact hashes and source/protocol inspected; actual feature-extraction tokenizer behavior checked. Tokenizer cap 512, not the ignored max_length option. See tokenizer/bundle/runtime audits.

- Actual worker-network abort followed by successful real inference retry in the same page; late schema-valid old vectors and an old error could not overwrite a newer real run.

## Public publication checks

- Root predeploy assembled **903 apps**, zero failures/skips, **820,975,265 bytes** after unchanged deployment-only runtime deduplication. Existing guard/rules retained; unrelated drafts remained excluded.
- Every gallery inline script compiled with `new Function`; new entry appears once as `ai-utility`; all 902 older APPS entries are byte-identical and categories/styles preserved. Assembled and public browsers rendered all 903 cards, AI Utilities first; search and 1440/390/320 layouts passed.
- Root `npm run deploy` published the combined collection. Pages reported exact `gh-pages` commit **bd4e5c372eb79cefd1492a142f5c115d6cff53af** as **built**. Workflow **45873814225** completed successfully. Seven public gallery/app/JS/CSS/worker/factory/WASM files matched assembled bytes exactly (`public-assets.json`).
- The full workflow suite ran again at https://xianghui.github.io/daily-app2/20261127-3/ with real MiniLM inference: both distinct batches again matched all four easy labels, and computed outputs matched local observations. Maximum batch, current reviewed exports, invalid inputs, holds/undo, cancellation/retry, clipboard, late/over-capacity gates, privacy/request checks and warmed fresh-worker offline inference passed publicly.
- Independently parsed actual public downloads passed **3,437 assertions** with Python csv/json/datetime, including multiline formula-note protection and no lost maximum-batch records. Public worker-network failure recovered to real inference; an injected old schema-valid response/error could not replace a newer real run.
- No public digest or separate announcement sent. Source commit/push is part of the final publishing transaction; see Git history.

## Not established

Physical mobile devices, other browser engines, cold offline startup, slow/low-memory phones, representative semantic accuracy, actual cultivar timings/emergence, operational grower outcomes and horticultural suitability are unverified. Model and example assumptions require review. This is planning assistance, not dispatch, purchasing, irrigation or machinery control.
