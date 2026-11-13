# Dough Atlas — observed validation

## Local production bundle

- `npm run predeploy` passed. Worker/runtime are emitted for the actual GitHub Pages base; 26,861,777-byte WASM is shared with preserved `20261107-2`.
- Real quantized MiniLM CPU inference (GPU disabled) matched **8/8** intended ingredient identities across two tiny synthetic fixtures: Milk loaf (flour/water/milk/salt) and Enriched buns (egg/butter/flour/water). These clear, tuned examples do not measure general accuracy. Irrelevant instruction-like prose still received a nearest match and remained pending, then held.
- Milk loaf original added-water-only hydration **30%** versus modeled **73.5%** including milk; target **2000 g / 70%**. Buns original baseline **36%** versus modeled **61.06%**; target **1800 g / 65%**. Current rounded plan metrics are computed from actual output, including rounding deviation.
- Nine browser workflow groups passed: both real-AI fixtures; pending guard; multiline review/edit/hold/undo/clipboard/export/reimport; offline fresh-worker inference; invalid inputs; cancel/retry/stale-input and 40-record batches; duplicate-water/no-flour/infeasible-water blockers; instruction-like irrelevant input; desktop and 390/320 px layouts, labels/focus and ≥44 px buttons.
- 3,000 independent Python Fraction-oracle cases passed: **1,908 feasible** exact-mass/largest-remainder formulas, **1,092 blocked** infeasible/rounding cases. No measured time or percentage improvement claimed.
- Browser-downloaded JSON/CSV/Markdown reopened independently. Every original and review survived; maximum batch produced 40 originals plus one explicit calculated-water row. Whole-gram totals, source order, quoted commas/newlines/Unicode, formula-like multiline text and edited fields matched current reviews. Held/infeasible plans retained complete audit records but no partial recipe.
- Six defensive modes passed: cold model network failure with real retry, worker-download failure, unavailable worker/runtime requirements, malformed embeddings, accelerated timeout and worker error. No fake output or enabled stale exports.
- `edge-validation.json` covers identity correction changing the plan, undo, delayed import and a late terminated-worker message. `model-cancel-validation.json` covers real in-flight model-host download cancellation, new-input real-inference retry and no stale overwrite.
- Production request capture found only GET asset downloads with no bodies; no model-host requests before explicit run. Built assets are scanned separately for credential-like patterns. No provider integration or credentials exist.
- Normal viewport screenshots of input/review/results are saved at 1440, 390 and 320 px. No horizontal overflow detected. Physical phones and browsers other than desktop Chrome remain untested.

## Offline scope

An already-open warmed production page completed another real inference with all networking disabled and a newly constructed worker. This verifies worker-source, factory, WASM and model cache reuse; **offline navigation/reload is not claimed**.

## Publication

Final combined/public checks and exact Pages commit are recorded in `publication-status.json`, `public-asset-validation.json`, `combined-browser-validation.json`, `public-browser-validation.json` and gallery reports after publication. A branch push alone is not counted as public runtime verification.

### Completed public verification

Pages commit `401b8d6345e403ff78c9538ef3df18ebd510efbc` reached `built` on the first deployment. Public app/worker/factory/shared-WASM bytes matched the production build. Both real-AI fixtures and all nine workflow groups passed at the public URL, including offline fresh-worker inference and 320/390 px layouts. The live gallery preserved 641 prior entries and categories, with Dough Atlas first (642 total). Independently parsed artifacts were checked again after public runs. Touch-emulated 320 px real-inference/review/export/undo passed locally; physical phones remain untested. Three additional arithmetic edges cover zero required water, stable rounding ties and flour rounded away.

An initial combined-server test failed because rebuilding the deployment directory invalidated that server’s working directory; restarting the server after assembly fixed the test harness. Subsequent assembled and public suites passed. Pre-existing unrelated working-tree files and root edits are preserved and excluded from this source commit.
