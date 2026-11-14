# Observed validation — Crossed Bench / 2026-11-14

## Passed locally on the production bundle

- `npm run predeploy`: React + Vite build passed. Model/runtime binary hashes matched the shared preserved asset.
- Headless installed Chrome, GPU disabled, actual WASM CPU model inference: **32/32 intended feature links** across two different 16-reading fixtures (Workshop measurements and Digital checks). Each required human review before applying. These tiny fixtures are not general accuracy evidence.
- Both fixtures: per feature 2 parts × 2 operators × 2 trials, repeat variance 2, part variance 32; first feature operator variance 8 and full SD sqrt(10), second operator variance 0 and full SD sqrt(2). Interaction raw variance −1 is explicitly clamped to zero. Repeat-only SD sqrt(2) hides the seeded operator offset in the first feature.
- 1,200 generated balanced designs checked against independent Python Fraction ANOVA/component arithmetic and total sums-of-squares decomposition. Translation/scaling, constant readings, empty/incomplete designs, duplicate cells, invalid numeric data and malformed vectors checked.
- Maximum actual inference: 6 definitions + 32 readings, chunks of 4, complete record conservation and exported/reimported originals. Review notes in the last record survive. Undefined extra feature groups return no estimate.
- Reviewed numeric edits, multiline owner/note, changing/rejecting feature assignment, hold/incomplete-grid handling, undo, original preservation and applied-export invalidation. Downloaded JSON/CSV/Markdown independently parsed/reopened, original rows and current reviewed fields preserved. Multiline formula-like text escaped without converting signed numeric readings.
- Clipboard copied actual reviewed worksheet. Audit imports restore originals only with pending decisions, not stale approvals.
- Empty/malformed/oversized/unsupported input, invalid readings, duplicate approved cells, model-download failure/recovery, worker download/creation/error, missing WASM, malformed vectors/envelope and accelerated timeout. Every failure produced no fake output and disabled exports. Fault injection was defensive-only.
- Cancel/retry; input edits terminate pending work; deliberately late cancelled callback cannot overwrite a newer run. Delayed file reads cannot overwrite newer examples.
- Real negation challenge correctly selected mass over diameter in this one example; unrelated/instruction-like text still gets a nearest match, stays pending and can be held. No equivalence/negation robustness claimed.
- Network observed from startup through inference: no model requests before load; requests were GET downloads without bodies, only documented collection/model hosts. Notes/keys not transmitted. Static asset scan accompanies source review, not an absolute security proof.
- Online run then fully blocked-network **fresh-worker** real inference on the already-open warmed page passed. No offline navigation/reload claim.
- Desktop 1440 px and emulated 390/320 px phone widths: no horizontal overflow, associated form labels, visible focus, buttons ≥44 px. Normal-viewport overview/review/result screenshots inspected. Physical phones, other browsers, screen-reader certification and memory-starved devices not tested.

## Reports and reproducibility

`browser-validation.json`, `defensive-validation.json`, `stale-validation.json`, `import-stale-validation.json`, `edge-validation.json`, `core-validation.json`, `artifact-validation.json` record observed results. Core cases and fixtures are synthetic. Browser suite failures during authoring exposed a *test* attempting to create a duplicate crossed cell while changing features; the app correctly blocked it. The test was corrected to supply a distinct reviewed identity and the full suite rerun successfully.

## Publishing

Passed on the first combined publication: root predeploy and root deploy assembled **667 apps, 0 failures, 0 skips**. Pages workflow `43579211431` successfully built/deployed gh-pages `9209cda1bdd175baa85c96fdc61f6f277c77b862`; the Pages API reported the same commit built. Public HTML, JS worker, CSS, runtime factory and shared WASM byte-matched local production assets. Both real-AI fixtures, all eight reviewed workflow groups, fresh-worker offline inference, maximum-batch reviewed artifacts and the real negation challenge passed again at https://xianghui.github.io/daily-app2/20261114-18/ . All 666 prior working-tree gallery entries remained unchanged, new entry appears once under AI Utilities, legacy categories/search and 320/390/1440px layouts passed. Public requests were 51 GET downloads without bodies; no user-content uploads were observed.

See `pages-build.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json`, `public-edge-validation.json` and `publication-status.json`. The assembled production directory was separately byte-checked and tested before publishing. Existing unrelated root README/gallery edits and untracked older folders were preserved in the working tree and excluded from this source commit; the combined publication preserved the complete current gallery rather than removing them.
