# Observed validation — Lot Calendar / 20261115-10

## Local production bundle

- `npm run predeploy` passed React/Vite production compilation. Real default browser inference, not the build or fault-injection fixtures, establishes the AI path.
- Actual Chrome headless CPU with GPU disabled loaded the shared production worker, Transformers.js/ONNX WASM and real q8 MiniLM model. Paper workshop matched 6/6 known item links; Repair studio matched 8/8. These tiny synthetic fixtures are not an accuracy estimate.
- Reviewed Paper schedule setup/storage cost: baseline 1,300 cents, exact 790 (paper orders 25/0/0, tape 8/0/0). Repair: baseline 1,950, exact 1,240 (thread 3/0/6/0, chain 6/0/0/0). Conditional modeled costs, not measured savings. Changing verified demand changes schedules; every link must be reviewed.
- Independent exhaustive contiguous-partition enumeration matched DP cost in 1,260 generated 2–8-period cases, with stock nonnegativity, opening/order/demand/closing conservation, final zero inventory, total quantity preservation and lot-for-lot dominance. Zero-demand and integer upper-bound cases also checked.
- Real workflow exercised required approval, item/period/quantity edits, hold, undo, duplicate/missing frame blocking, all-held, explicit zeros, cost-goal evaluation, multiline formula-like quoted review text, copy, JSON audit reimport and stale-export invalidation. Maximum batch: 52 texts, four-item/eight-period frame, 48 records with 16 held duplicates; every row retained.
- Actual downloads parsed independently with Python CSV/JSON: every source/review record, reviewed quantities, exact multiline escaping and complete stock schedule survive. Header-only schedule output is valid for blocked frames. Audit imports restore originals, not approvals.
- Already-open warmed-page **fresh-worker** real inference passed with all network offline. No claim of offline page navigation or reload. Cache eviction and physical-device RAM constraints remain limitations.
- Requests captured from startup through processing: model hosts not contacted until explicit run, GET downloads only, no content bodies. Built-text credential-pattern and remote-provider scan plus source inspection passed. Signed CDN query values deliberately omitted from stored reports; this is a scoped audit, not a general security certification.
- Defensive fault injection: model-network abort with successful real retry; worker download failure; absent WASM; unsupported workers; malformed vectors/envelope; worker error; timeout. All left no AI recommendations or export. Cancellation/retry and input-change stale invalidation checked with real AI; deliberately late old vectors, delayed worker fetch and delayed file import could not replace newer input/results. Fault-injected vectors used only to test rejection/stale handling, never to claim inference.
- Desktop 1440px and narrow 390px/320px layouts checked: no horizontal overflow, labels connected to all fields, controls ≥44px, focus reachable, input/review/result screenshots. Physical phones and other browsers untested.

## Release checks

Gallery script compilation, exactly-one correct AI Utilities entry and all 682 earlier working-tree entries/categories preserved; browser render/search tested. Combined root assembly and public release results are recorded in root build/deploy logs, `publication-status.json`, public asset/browser/gallery reports. This document does not substitute branch publication for public runtime verification.

## Limitations

Nearest-item similarity is not identity, entailment or suitability. An unrelated instruction-like challenge still received a nearest item; it was explicitly held and generated no eligible schedule. No extraction of quantities from prose. Finite deterministic horizon assumes known demand, zero initial stock/lead times, no capacity/shortage/discounts/perishability or uncertainty. Missing demand is never silently zero. Costs omit constant purchase prices. Human review and domain feasibility are required; no external purchase/action occurs.

## Public result

First combined Pages release `0d1902c5d951eec4cc5f3083d202413349fc8397` reached `built`. Public app, shared worker, factory and WASM are byte-matched; public gallery is byte-identical to source. Both real-AI fixtures, all seven workflow groups, complete reviewed downloaded artifacts, offline fresh-worker inference and desktop/phone-width checks passed at the public URL. Public traffic audit observed GET downloads only, with no user-content upload. Public gallery rendering/search retained all 682 earlier working-tree entries and both legacy categories. Root predeploy copied 683 apps with zero failures/skips. Combined site is 999,988,083 bytes below the unchanged 1 GB guard. Removed unused new-app scaffold icons and a needless CSV dependency; no older app/runtime source or deployment config was changed.
