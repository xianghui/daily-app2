# Shard Shelter — observed validation

## Production-bundle workflow (2026-11-22)

Desktop Chrome headless, Playwright, GPU disabled; source dist at localhost and actual root-assembled production tree were both exercised. No mocks in successful AI tests. See `browser-validation.json` and `assembled-browser-validation.json`; request logs retain only hosts/paths and query-key names, not signed CDN query values.

| Synthetic fixture | Real neural initial matches | Reviewed baseline | Exact feasible final layout |
|---|---:|---|---|
| Campus archive | 6/6 intended locations | 0/2 stripes survive all 3 single-site outages | 2/2 safe, minimum supplied cost 3, 2 moved shards |
| Regional snapshots | 4/4 intended locations | 0/1 stripe survives all 10 up-to-two-site outages | 1/1 safe, minimum supplied cost 2, 1 moved shard, pinned shard retained |

Both fixtures have 0 exact-name location matches; reviewed mapping covers all shards. Coverage is not accuracy and human-reviewed safety is conditional on the input assumptions. Tiny fixtures are not a general model benchmark. A deliberately negated/unknown location still receives a nearest-domain suggestion and remains pending; the browser test holds it and withholds a plan. Do not infer physical location or domain independence from cosine similarity.

## Deterministic/schema checks

- `core-test.mjs`: 420 passing checks, including 400 generated systems compared against an independent unpruned all-assignment oracle. Feasibility, minimum relocation cost and move-count tie-break agreed. Capacity, complete stripe counts, pins, zero-cost moves, one/two-domain outages and infeasibility covered. Original inventories retained.
- Source parser rejects empty/invalid/oversized JSON, bad capacities/coding counts, missing shards, duplicate IDs and wrong types. Neural vectors reject wrong count/dimension, nonfinite entries and nonnormalized output. Every shard must be approved or held before apply.
- Browser maximum: 10 shards, 4 domains, 2 stripes, 14 embeddings in 4 chunks, all 10 outage subsets, complete audit reimport. An infeasible all-pinned inventory produces no plan and preserves all 6 records.
- Initial maximum test fixture incorrectly asked a six-shard 3+3 stripe to survive any two of four sites, which is mathematically infeasible. Corrected fixture to 2+4 parity; the app correctly withheld the infeasible plan. Defensive testing also caught and corrected a timeout literal mismatch before publication; final bundle uses the documented 180 seconds.

## Review and artifact checks

Actual browser downloads parsed independently by Python `json` / `csv`; `artifact-validation.json` records all seven cases. JSON/Markdown retain all originals, reviews and full analysis; CSV retains every source shard and current reviewed note/destination. Verified cost and move sums, all outage constraints, capacities, pins, original counts, formula-protected multiline IDs/notes, commas and quotes. Notes survive JSON/CSV/Markdown and clipboard. JSON audit import restores original inventory, never prior approvals. Source/review edits disable stale exports; review, hold, undo, changed-domain approval reset and infeasible/held exports checked. No real files or personal data are committed.

## Failure, race, privacy and offline checks

- `defensive-validation.json`: model-host network failure and real retry, unavailable WASM, worker download failure, unsupported worker constructor, malformed vectors/envelope, injected worker error, accelerated 180-second timeout, delayed cancelled/changed-input messages. Fault injection is only for defensive checks, never proof of AI behavior. No fabricated outputs on failure.
- `cold-cancel-validation.json`: observed model download progress and weight request, cancelled before completion, terminated worker, then successful actual-model retry.
- `async-race-validation.json`: late file reads and worker source fetches cannot replace newer source; `newer-run-validation.json`: delayed old error cannot overwrite newer real inference.
- Default browser trace from startup through inference: no model requests before explicit load; public runtime/model downloads are GET-only without content bodies; no source snippets found in URLs. No keys, remote provider or upload integration. Built text asset credential-pattern scan is clean, with source inspection; pattern scan is not exhaustive proof.
- Successful model run, terminated worker, all network blocked, then a fresh worker successfully processed the other inventory in the same warmed page. Model/runtime and worker source caches were exercised. **Cold offline navigation/reload, cache eviction persistence and other browsers/devices are untested.**
- Responsive 1440/390/320 px: no document horizontal overflow, labels for form controls, keyboard focus and ≥44 px controls. Input, reviewed suggestions and applied-result screenshots inspected; actual download/copy actions work. Physical mobile devices and assistive-technology audits untested.

## Assembly and legacy preservation

All gallery inline scripts compiled with Node `new Function`; no missing script accepted. New AI Utilities entry appears exactly once; all 789 prior entries/category labels remain, AI Utilities first, search/phone gallery checks pass (790 cards). Root predeploy: 790 apps, zero failed or skipped; root gallery and every app index present. Unchanged conservative 1 GB guard. Existing deploy-only byte-identical geometry sharing extended to `20261029-9` → immutable `20261028-24`; hashes match, source builds unchanged, legacy JS URLs retained. The affected older app's real worker, PNG/STL imports, parsed STL exports and portable design JSON passed locally. Shared neural worker/factory/WASM hashes verified; dependencies documented in README.

## Publication

Public verification results and matching Pages build commit are recorded in `pages-watch.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `public-legacy-runtime-validation.json` for the completed release. Do not infer a successful public workflow solely from a branch push. No digest is sent.

Public release verified: Pages commit `e6e2ef9574db98bb5ec88ed836ff6e798feb0f2c`, workflow `44965251327` completed successfully. Seven public gallery/app/worker/factory/WASM assets byte-match the assembled site. Both public real-MiniLM fixtures (10/10 simple matches), full review/export/max-batch/offline/privacy suite, independently parsed actual downloaded artifacts, all 790 gallery cards, and the affected older app’s worker/image/STL import/export regression passed. Combined site: 999,569,392 bytes. No digest sent.
