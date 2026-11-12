# Observed validation — Column Harbor

## Real default model

Production React/Vite bundle, actual Transformers.js 4.3.2 MiniLM q8 WASM CPU inference in headless desktop Chrome, GPU disabled. Two materially different synthetic inputs:

- Registration `Guest identity / Mailbox / Places booked / Attendance day` → `name / email / seats / date`: **4/4 intended links**.
- Inventory `Device description / Factory serial / Acquisition price / Purchased on` → `asset / serial / cost / date`: **4/4 intended links**.
- Exact-heading baseline: **0/5 source columns** per fixture. Each fixture has one irrelevant source-only column; AI still proposes a field, so the human explicitly omits it. Eight correct tiny examples are not universal accuracy or measured savings.

## Functional and artifacts

- Manual approval required, explicit omission, duplicate target rejection, missing required target rejection, held-column export blocking, undo and snapshot invalidation.
- Cell repair and original reimport tested: changed purchase amount `1250.50` → `199.95`; renewed import restored the original, not the repaired value. `2026-02-30` rejected; valid leap dates tested. Invalid numeric text rejected, negative decimal preserved as numeric spelling.
- Actual browser downloads parsed independently by Python's CSV parser: both fixtures, reviewed repairs, formula-like multiline content and a maximum **100-row / 12-source-column / 8-target-field** batch. All rows and reviewed fields preserved in schema order; quoted commas, embedded quotes and line breaks survived. Text repair editors support multiline values; a browser assertion confirms an edited line break survives into reviewed output and the independently parsed CSV. Formula-like text receives a protective apostrophe; validated numeric fields do not. Mapping-note escaping and original source-only columns preserved.
- Core tests: **700** rectangular datasets independently round-tripped through CSV parsing (1–100 rows × 2–8 fields), plus required/type/schema/duplicate/vector guards. No lost rows or unapproved automatic transforms.
- Clipboard output matched the reviewed target. Audit round-trip restores bounded originals and renews AI/decisions. Maximum audit envelope reimport succeeded.

## Failure, privacy and caching

- Browser network trace from startup through real inference: no model host requests before loading; all requests GET with no bodies; no fixture content in URLs. No credentials/provider integration.
- Fresh worker real inference succeeded with browser networking disabled on an already-open warmed page. Offline navigation/reload is not claimed.
- Model-host network abort and real retry, worker download failure, unsupported module workers, actual worker with WebAssembly disabled, malformed vectors, worker error and timeout all leave no fake output. Fault injection used only for defensive failures.
- Cancel during actual model-host download followed by changed input and real-inference retry. Delayed file reads/worker downloads ignored after edits/cancel. A synthetic late worker ignoring termination could not replace newer results; successful AI fixtures always used the real model.

## Layout

Desktop 1440 px and narrow 390/320 px checks: labels, focus, page overflow, touch run/review/apply/download. Visual viewport screenshots inspected; target table intentionally scrolls in its own focusable region. Initial scaffold CSS caused mobile clipping and was replaced; touch workflow rerun passed. Physical phones, other browser engines, low-memory hardware and assistive technologies remain untested. Very tall full-page Chrome screenshots produced capture artifacts; normal viewport screenshots were used for visual review.

## Publication

The initial public build passed runtime hashes, both real-AI fixtures, full workflow suite and touch checks. A final multiline text-editor improvement was rebuilt and republished; final-public reports below must match that updated build.

Final combined-site and public verification results are recorded in `combined-browser-validation.json`, `public-browser-validation.json`, `public-asset-validation.json`, `gallery-validation.json`, and `publication-status.json` after deployment. Do not infer public success merely from a branch push.

Final updated release: public app/worker/runtime/WASM hashes matched; both actual MiniLM fixtures, complete review/repair/export/offline suite, phone touch and preserved 628-entry gallery passed. Deployment `7745746685` and workflow `43277705657` succeeded for gh-pages `4ed867087fdb613a158b0a6b412fa6bc4c395edb`. The legacy builds API reports the previous commit despite that successful matching-head deployment; byte-matched served assets and successful updated multiline assertion establish the new production bundle is live. No extra rebuild was requested.
