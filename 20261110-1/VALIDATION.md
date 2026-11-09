# Observed validation — 2026-11-10

Production React/Vite bundle served with `/daily-app2/20261110-1/`, not development paths. Synthetic inputs only. Successful tests execute actual q8 MiniLM inference in headless desktop Chrome on CPU WASM; mocked workers are used **only** for defensive fault injection.

## Actual quality and arithmetic

- Ceramic studio: 4/4 intended fixed/variable labels. Approved F=150000 cents/month, V=300 cents/unit, P=1200; break-even 167 units, target 234, capacity 300, target feasible, target price floor at capacity 1000 cents/unit.
- Workshop seats: 3/4 intended labels. Refreshments per attendee was incorrectly proposed fixed; human review corrected it to variable. Reviewed F=100000, V=1000, P=3000; break-even 50, target 88, capacity 80, target infeasible, target price floor 3188 cents/unit.
- These eight tiny records are not an accuracy benchmark. Literal fixed/variable baseline classifies 0/4 in each fixture; actual AI proposes all rows, 7/8 intended. Coverage is not correctness. Review is essential, not a cosmetic step.
- Negated per-unit cost was misclassified fixed. Mixed and unrelated descriptions still received nearest-anchor classes. The latter must be held. No universal accounting understanding is claimed.
- 1000 generated positive-margin cases passed independent ceiling, minimality, target-feasibility and capacity profit checks. Zero/negative margins produce no positive-margin break-even; held costs block all projections. Independent Python recomputation also checked downloaded audits.

## Actual browser workflow checks

Two distinct fixture runs; mandatory review; kind/amount/note edit; re-review reset; undo; exclude and hold; financial projection suppression on holds; stale applied-export invalidation; download JSON/CSV/Markdown; clipboard equality; full 24-row/26-text chunking; original-audit JSON import/rerun/reset; fractional cents blocking; empty/malformed/oversized/unsupported input; zero capacity; input-change and cancellation guards; retry with real inference.

Fresh worker with **all browser network disabled** successfully ran real inference after an online load. This verifies only an already-open page, NOT offline reload/navigation. Separate fresh-context model-host request abort produced a visible error, no fabricated output, then real-inference recovery. Actual weight-download cancellation and retry passed. Disabled WebAssembly in the real worker produced an actionable error and no results. Fault injection checked malformed vector output, unavailable module workers, worker error, accelerated 180-second timeout and late stale callbacks; real-worker retry passed.

Network recording from production startup through inference observed no model-host traffic before the explicit load click and only external GET file downloads with no request bodies/content. Source has no remote-content-inference path, credentials or analytics. Built text assets passed credential-pattern/local-path scan. Shared 26861777-byte WASM was byte-equal to installed runtime; production worker points to local factory and immutable shared binary. See asset/network reports for hashes and request URLs.

Downloaded JSON/CSV/Markdown were independently reopened with Python: every original cost and original amount retained, reviewed values current, no lost records, approved/excluded/held conservation, whole-cent sums and unit ceilings independently recomputed, comma/quote/newline/Unicode note preserved, formula-like multiline CSV note safely prefixed. JSON remains exact; CSV formula defense intentionally changes text cells. Audit reimport restores original inputs, not review edits, as documented.

Desktop and 390px/320px viewport screenshots inspected; no horizontal document overflow. Focus, label associations, ≥44px main action, download/copy paths and narrow result layout exercised. Physical-device inference, assistive-technology audit, Safari and Firefox remain untested.

## Publication

Published through the root combined-site workflow: 564 apps assembled, zero failures/skips. Pages workflow 42651855367 completed successfully for gh-pages commit `881d7546bbc0989ce1af77c783d319cd03ea19d3`; latest Pages build reports built for the same commit. Public gallery contains all 564 entries, AI Utilities first, new app first, preserved legacy categories and working oldest-app search.

At https://xianghui.github.io/daily-app2/20261110-1/ the complete 11-check browser suite passed again, including both actual MiniLM fixtures, reviewed edits/undo/holds, exports, full batch, offline fresh-worker inference and responsive layouts. Public root HTML, app code, worker, module factory and shared WASM matched local production hashes. Downloaded public artifacts were independently reparsed/recomputed. No fallback Pages trigger was needed. See public-browser-validation.json, public-validation.json, gallery-ui-validation.json and publication-status.json.

Pre-existing unrelated changes (Receipt Current root additions and older untracked draft directories) were preserved in the working tree and excluded from this source commit. The combined deployment preserves the full current working gallery, including those existing entries.
