# Observed validation — Grainshift Desk / 20261129-2

## Prepublication evidence (2026-11-29)
- React + Vite scaffold; required per-app gh-pages dependency/scripts; `/daily-app2/20261129-2/` base; `npm run predeploy` passed.
- Both galleries inspected; original collection read only. 949 earlier entries retained unchanged; exactly one new AI Utilities entry, newest first. Every inline script compiled with Node `new Function`; 950 cards render, old/new search and categories work. See idea/gallery audits.
- Root `npm run predeploy`: **950 built, zero failed/skipped**, root index and every app present. Existing deduplication/size guard unchanged; **833,442,887 bytes** assembled. Sources and immutable runtime origins preserved.

## Real browser AI and workflow
Production bundles, desktop Chrome headless with GPU disabled; both local app-tree and assembled-tree scopes passed the browser suite, no page errors.

| Fixture | Known-answer material links | Deterministic output |
| --- | --- | --- |
| Furniture panels | OAK, WALNUT, MAPLE, PINE — 4/4 | Four approved plans, 4 fixed-2-mm-travel shortfalls; selected slots 20, 16, 16, 12 mm |
| Workshop shelves | CHERRY, BEECH, CEDAR, ASH — 4/4 | Four approved plans, 4 fixed-2-mm-travel shortfalls; selected slots 16, 25, 8, 12 mm |

These are simple known-answer fixtures, not estimated universal accuracy. Each executes real quantized MiniLM inference and produces data-dependent rankings/physical calculations. A negated instruction (“Not white oak furniture wood. Use Eastern white pine timber for this panel instead.”) incorrectly retrieved **OAK**, intended **PINE**. Human correction to PINE and coefficient replacement passed, original text preserved in the exported audit. This limitation is expected for embedding proximity, not logical entailment. No fabricated confidence percentages.

- Real CPU model loading/progress; no model-host requests before Run.
- Offline fresh-worker inference passed in the already-open warmed page with all network disabled. No cold reload/navigation/offline installation claim.
- Maximum batch: 24 panels/8 profiles, 32 texts in 8 chunks; all records survive complete-audit reimport. Duplicate profile descriptions in this limit test are manually disambiguated; no claim of 24/24 unique identity quality.
- Review/edit, profile coefficient replacement, numeric edits reset approval, pending blocks apply, holds preserve originals, undo, invalid numeric fields, infeasible plans block worksheet, current exports invalidated by edits, multiline reviewer notes, clipboard and actual downloads passed.
- JSON parse/reimport, CSV parsed by Python's independent CSV parser, Markdown reopen. **1,568 independent artifact assertions per browser scope**: Decimal arithmetic from source/review recomputes widths/travel/required minimum, exhaustive offered-slot choice, baseline counts, all-row conservation, held rows, selected-slot limits, multiline/quoted/formula-leading text and approved worksheet records. Displayed counts are computed, not measured time savings.
- **1,266 core assertions**, including 400 independent algebra/enumeration cases, source/schema bounds, normalized-vector validation, all-held gating and lossless original restore.
- Empty/malformed/oversized inputs, >24 rows, invalid slots, invalid text/format and unsupported import type produce actionable errors.
- Ten defensive cases (assembled and public): actual worker-download abort, actual model-host abort, missing Worker, missing WASM, worker construction failure, worker error, malformed AI vectors, accelerated 180-second timeout, stale errors and cancel during pending worker fetch. Injected workers only test failures, never success.
- Actual factory and WASM network aborts each fail visibly without suggestions; same-page real-AI retry retrieves OAK (assembled and public).
- Real same-page retry after worker-download failure; a delayed valid old-worker result cannot overwrite a newer real model run. Delayed file import cannot overwrite newer input. Cancel while a real model request is pending then successful real retry.
- 1440, 390 and 320px layouts: no horizontal overflow, labeled controls, ≥44px buttons/selects/inputs, keyboard focus and screenshots inspected at ordinary 900px viewport height. Desktop/phone hero, input, review and results screenshots retained. These are viewport checks, not physical-phone inference.
- Request audit: GET downloads only, no request bodies, content absent from URLs; raw signed CDN queries are not persisted. Model host/CDN paths documented in browser report. No credential/inference-provider path implemented; built text credential-pattern scan zero matches (not an exhaustive secret detector).
- All eight own/shared production assets fetched and byte/SHA-256 matched in the assembled scope, including worker, factory and WASM. Tokenizer configuration observed `model_max_length:512`; no reliance on ignored pipeline max_length for a stricter cap.

## Limitations / untested scope
No physical woodworking/material test, moisture validation, structural/attachment assessment, physical phone, other browser engine or cold offline startup tested. Coefficients are illustrative synthetic references. Linear free movement is not mechanical stress/strength. Review profiles and actual measurements; embedding negation errors require human correction. Exact offered minimum is only optimal within the supplied finite list, not all possible designs.

## Publication
Root `npm run deploy` reported Published. Remote gh-pages head **4cab45b979cd2583721b596974628ea745dc3d76** matched Pages latest build status **built**, error null. [Pages workflow 46168916330](https://github.com/xianghui/daily-app2/actions/runs/46168916330) completed successfully. Public app: https://xianghui.github.io/daily-app2/20261129-2/ .

Public verification passed the same two real model fixtures (8/8 simple links), full workflow/export/max-batch/offline/negative-input/layout suite, independent **1,568** artifact assertions, ten defensive scenarios, recovery/stale-newer-result test, delayed import, actual model-download cancel/retry and actual factory/WASM download failures with real retry. All **eight** own/shared public production assets match local byte counts/SHA-256; model/runtime load from the public app works, not just branch push. Public gallery renders **950** cards, categories and old/new search intact. `public-*.json`, downloaded artifacts, screenshots and logs retain evidence. No content-upload requests observed; no digest sent. Main-source commit/push is performed after these records are saved. Unrelated pre-existing draft folders remain excluded.
