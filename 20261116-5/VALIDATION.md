# Observed validation — Uncertainty Weave

## Production app and real AI

- Individual `npm run predeploy` passed (React + Vite production bundle). Shared worker source/protocol/runtime inspected, dependencies hashed and built text scanned for credential patterns. No provider integration.
- Real default q8 MiniLM inference executed in desktop Chrome, GPU disabled, from the production static bundle. Two materially different synthetic fixtures: box dimensions and density measurements. All **5/5** intended quantity links matched. This is only tiny-fixture evidence, not universal model accuracy. First-input-only assignment would match 2/5 of those links.
- Box: output 100 cm³; standard uncertainty 1.527525… cm³; relative expanded uncertainty 3.055050…% at supplied k=2 versus worst-case-sum 5.154701…%. Supplied target 3.2% passes RSS and fails baseline.
- Density: output 5 g/mL; relative expanded 1.171893…% versus worst-case-sum 1.354701…%; target 1% fails both. Arithmetic checked independently against fixture formulas, not sample response data.
- Instruction-like unrelated text still received a nearest candidate. It was held, leaving the whole budget blocked; similarity cannot establish identity or metrological evidence.
- `oracle-test.mjs`: 46 numeric checks, six positive/negative powers, finite-difference sensitivity derivatives, all uncertainty kinds, zero uncertainty, six-input product and held/missing blocking. No covariance/linearity or calibration validity is inferred.

## Workflow and resilience

- Mandatory review, editable quantity/value/uncertainty/type/divisor, approval reset, original preservation, note edits, export invalidation, undo, missing/duplicate/held whole-budget blocking, all-held audits and JSON audit reimport passed.
- Maximum 6 quantities + 24 observations / 30 embedding texts used real inference in batches of four. Every source survived; duplicate measurements correctly blocked the budget. Max audit reimport succeeded with renewed review required.
- Cancellation → real retry, input changes during inference, late old response after a newer completed run, late worker download and delayed file read checks passed. Successful AI tests used real inference; delayed-response/runtime fault injection was only for defensive paths.
- Empty/malformed/oversized source, duplicate IDs, invalid values/powers/coverage/types, over-20%-uncertainty and unsupported/malformed/oversized files rejected.
- Fresh-cache network abort followed by successful real retry; missing WebAssembly, blocked worker download, unsupported module workers, malformed vectors/envelope, timeout and worker errors showed errors with disabled exports/no fake suggestions. Reports: `defensive-validation.json`, `*-stale-validation.json`, `newer-run-validation.json`.

## Privacy, offline, artifacts and accessibility

- From bundle startup through inference, no model requests before explicit loading; all observed requests GET without bodies, no fixture content in URLs and only documented same-origin/Hugging Face/CDN traffic. Signed CDN query values removed from saved audits. Source/worker inspection confirms no upload path. Runtime/model assets only cached.
- Fully offline real inference with a fresh worker in an already-open warmed page passed. Offline app navigation/reload/startup was **not** tested or promised.
- Browser-downloaded JSON/observation CSV/budget CSV/Markdown independently parsed/reopened with Python `json`/`csv`; every source, reviewed field and input quantity preserved. A note containing spreadsheet formula text, quotes, comma and newline survived JSON/Markdown; CSV added the documented protective apostrophe. Clipboard matched reviewed Markdown. Max 24-record artifacts and original-only audit import passed.
- Desktop 1440px, phone-width 390px and 320px layouts: no horizontal overflow, labels for every form control, ≥44px buttons, focus/Tab behavior and actual input/review/result/export actions passed. Normal-viewport screenshots inspected. Review decision captions shortened after the 320px visual inspection; final bundle retested during combined/public checks.
- Physical phones, browsers other than desktop Chrome, assistive-technology audit, correlated inputs, full nonlinear propagation and confidence-level estimation are untested/out of scope.

## Gallery and publishing

Gallery inline scripts compiled with Node `new Function`; unique new `ai-utility` entry, unchanged older entries, AI Utilities first, category rendering, search and narrow widths checked. Root combined assembly, public byte audits and public real-AI workflow results are recorded separately as they complete. No digest sent from the builder.

Combined validation completed: 702 entries, 702 builds copied, zero failed/skipped; production app and shared dependencies byte-matched. Combined-browser suite passed real inference, offline fresh-worker, review/undo/artifacts, maximum batch, stale/cancel behavior, input errors and layouts on the final bundle. The first assembly exceeded the conservative 1 GB guard; extending existing byte-verified geometry runtime sharing to `20261030-24` reduced the site to **999,585,736 bytes** without source-build changes. Affected legacy default/PNG/STL worker and exact mesh export signatures passed (10,572 / 10,420 / 10,332 triangles), with zero page errors. An early audit was retried only after assembly completion; no partial assembly was published.

Public release verified at https://xianghui.github.io/daily-app2/20261116-5/ . Pages commit `eaf88bcbd28f919d6ad82fc7c97be751827dc5fb` reached built. Public app files, shared AI worker/factory/WASM and rewritten older geometry runtime entry/worker byte-matched the combined bundle. Both actual MiniLM fixtures, full review/undo/edit/hold/export workflow, offline fresh-worker inference, input/cancel/max-batch/privacy/layout checks passed from the public URL. Public 702-card gallery/search/categories and affected legacy default/PNG/STL exact-geometry exports passed. Public downloaded artifacts were independently parsed again. No digest sent.
