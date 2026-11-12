# Closure Horizon — observed validation

Run date: 2026-11-13 (Asia/Singapore).

## Real default model, not a mock

`inference-test.cjs` and `browser-test.cjs` ran the production Vite bundle in Chrome, WebGPU/GPU disabled, using actual MiniLM q8 WASM inference. No model-host traffic occurred before explicit processing. Known answers and actual proposals are retained in `inference-validation.json` and `browser-validation.json`.

- Repair: 8/8 workstreams, 6/8 outcome labels. R1/R2 completed screen repairs were incorrectly censored.
- Course: 8/8 workstreams, 6/8 outcome labels. L3/L8 incomplete training was incorrectly marked completed.
- Browser review corrected those four errors before applying. Expected completion/medians and all records were asserted. This is observed behavior on tiny synthetic data, not general accuracy.
- Unrelated instruction-like text still received nearest-label proposals. It was held, retained and excluded from curves. Negation challenge outcomes recorded, not hidden. No tool authority or credential request is granted by imported text.

## Deterministic checks

`core-test.mjs`: 3,000 seeded random cases compared every curve step against an independent BigInt rational product based on separate at-risk counts. Median threshold is compared using exact BigInt numerator/denominator arithmetic; all-event cohorts of every size 2–40 are regression-tested after a floating-point half-survival boundary was found and fixed. Also ties, day zero, all censored, empty groups, all held, median, baseline, queue membership, input/schema/review guards, malformed vectors and record conservation.

`browser-test.cjs`: edit/hold/undo, pending approval blocking, invalid duration, changed threshold, stale snapshot invalidation, clipboard, actual JSON/CSV/Markdown downloads, audit original-only reimport, empty/invalid/oversized inputs, unsupported PDF import, maximum 40-record/six-group batch, cancellation/retry, changed-input cancellation, and all-held zero curves.

`artifact-test.py`: independent Python csv/JSON parsing compared every exported ID, original note, group, status, reviewed duration, decision, reviewed note and follow-up flag on repair, course, edited and maximum-batch artifacts. Multiline quoted comma-containing formula-like review notes receive a protective CSV apostrophe; JSON retains exact values and untouched originals. Markdown reopened and contains full register.

## Runtime, failure and privacy

`defensive-test.cjs`: fresh-context blocked model download and real retry, blocked worker, unsupported worker construction, malformed model vectors, accelerated 180-second timeout and worker error all showed actionable errors with no fabricated review/export. Fault injection is used only for defensive paths, never successful AI checks.

`stale-result-test.cjs`: injected terminated worker deliberately delivered late valid-shaped vectors after a newer run; newer source remained intact.

`stale-import-test.cjs`: delayed file read could not replace new input; oversized file rejected; delayed worker download cancelled then real inference retried; real worker with WebAssembly unavailable reported an error.

Production browser traffic was GET-only with no request bodies; no tested source text in request URLs. Review of source confirms no content fetch/remote integration. `validate-assets.py` scanned built JS/MJS for common credential patterns and records shared WASM hash/size. Pattern scanning alone is not a universal secret audit.

Offline check blocked all context network after a successful run, then terminated/recreated the worker for another actual inference. Scope: an already-open warmed page only, not offline navigation/reload. Cache eviction behavior not guaranteed.

## UI

Desktop 1440px and phone widths 390px and 320px: no document horizontal overflow; every editable control has a label; focus tested; touch controls ≥44px; input/review/results screenshots captured and 390px overview/320px review plus a populated 390px curve/results viewport visually inspected. `touch-test.cjs` also exercised real inference, corrected outcome review, apply, undo and an actual downloaded audit with touchscreen emulation. Tables have bounded keyboard-focusable horizontal scroll regions. Physical phones, screen readers and non-Chrome inference untested.

## Publishing

Gallery preservation, combined assembly, public assets and public real inference are recorded separately when completed. Build success alone does not establish publication or inference correctness. No external account/case modifications occur.

### Public release — verified

Combined root predeploy assembled **629 apps with zero failed/skipped builds**, preserving all 628 earlier working-tree gallery entries and categories. Inline gallery scripts compiled with `new Function`; the new entry occurs exactly once, first in AI Utilities. Final combined app files match the individual production build.

The first root Pages deployment reached **built** at commit `5ad837b956751ff9b9c46ce4a16305554c08de46`. `public-assets.py` byte-matched the public HTML, bundled JS/CSS, local worker, module factory, shared WASM and full gallery. The complete nine-check browser suite passed at the public URL with actual model downloads/inference, both fixture outcomes, manual corrections, all reviewed artifacts, maximum batch, guards, layout and warmed-page offline fresh-worker checks. Public touch emulation passed real inference, outcome correction, apply, undo and downloaded artifact checks. Public gallery retained old categories and first-position new utility. Independent artifact parsing was rerun after public downloads. See `publication-status.json`, `public-*-validation.json` and `final-audit.json`. Source commit/push is confirmed by the automation's final git command.
