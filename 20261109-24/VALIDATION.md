# Observed validation — 2026-11-09

## Local production bundle — passed

- `npm run predeploy`: Vite production build passed. App base `/daily-app2/20261109-24/`; bundled local worker/factory and shared immutable same-origin WASM paths verified. Shared WASM SHA-256 matches installed runtime. No credential-pattern matches in built text assets; source integrations contain no credential/provider integration.
- Installed desktop Chrome via Playwright ran the real default MiniLM q8 model on WASM CPU. No mocks for inference, quality, offline or artifact-success checks. No WebGPU dependency.
- Research-tool batch: **8/8** expected primary-group links. Community-skills batch: **8/8**. These are only sixteen simple synthetic bios, not estimated general accuracy.
- Each batch selected four distinct people (two per group) with **0** quota-deviation units vs **4** for the first-four-approved baseline. Optimal feasible priority **22** vs baseline **26**: the higher baseline is infeasible. Both use identical reviewed labels/points. This is not a percentage improvement or measured time saving.
- Challenge: negated research experience mapped to `qual`; unrelated bicycle/baking bio mapped to `quant`. Neither should be approved; human holds were required. Closest-description retrieval cannot abstain and is not competence/identity/eligibility verification.
- `core-test.mjs`: **500** generated cases independently exhaustively enumerated every subset and matched the app optimizer's feasibility and maximum priority. Unique seats, exact size and quota bounds checked. Both known-answer fixtures, pending/hold blocking, malformed vectors and schema/bounds checks passed.
- Full **18-candidate** batch ran real inference; every record preserved. JSON original-input reimport round-tripped exactly and reset approvals. Four texts per batch; 384-dimensional finite normalized vector validation.
- Review edits reset approval and invalidate current exports; undo restored priority and decision. Edited priority 10 propagated to actual downloads; hold preserved the record. Infeasible quotas and fractional reviewed priority blocked applying/exporting until corrected.
- Browser downloaded JSON/CSV/Markdown and copied Markdown; clipboard matched the current artifact. Independent Python parsing checked all original/selected/reserve/held records, row order, original priorities, exact optimality, quota/baseline metrics and all current reviewed values across nine JSON exports. Quoted multiline Unicode note and formula defense round-tripped; MD contained all bios and edits.
- Offline: after online loading, network disabled and the old worker terminated; a fresh real worker successfully inferred. Scope is **an already-open page only**, not offline navigation/reload.
- Defensive checks passed: empty/malformed/oversized/count-bounded input, unsupported CSV and >1 MB files, cancel/retry, input changes during run, malformed embeddings, worker constructor failure, unavailable WASM, timeout and forced late callbacks after cancellation/new run. Fault injection was used only for defensive cases.
- Separate fresh-browser real model-host network-abort test gave an error and zero suggestions, then recovered with real inference. Actual model-weight request cancellation was tested while the request was paused; retry ran real inference. A production worker with WebAssembly disabled reported an actionable error without fake output.
- Network trace from page load through tests: no model-host download before explicit loading; all observed requests were GET with no bodies, and only same-origin/static model-download hosts. No fixture content in remote URLs. No user content upload observed. Signed model-download URL values are omitted from saved traces; parameter names retained.
- Desktop plus emulated **390px** and **320px** widths: no document horizontal overflow, input focus and ≥44px primary touch target; real input/review/download actions worked. Screenshots inspected. Physical phones, screen readers, other browsers, multilingual quality and cache-evicted/private browsing are untested.
- Gallery: every inline script compiled with `new Function`; exactly one new `ai-utility` entry. All **562** prior entries preserved; **563** total. Local gallery rendered AI Utilities first, legacy STL/mini-game categories, old-app search and correct new-app link.

## Publication

**Published and publicly verified.** Root deployment published commit `3e9da01fd672df4f51dc3040b185a5c3d3f7cb4b`; GitHub Pages reported `built` for that exact remote gh-pages head. Matching workflow `42641597272` completed successfully. No rebuild trigger or repeated publication was needed. An initial availability probe during the active build timed out; it passed after deployment completed.

- Public URL: https://xianghui.github.io/daily-app2/20261109-24/
- Public gallery rendered all 563 cards, AI Utilities first, old categories and old-app search intact. Root HTML matched local gallery bytes.
- Public app entry point, all emitted JS/CSS (including worker), runtime factory and shared WASM returned successfully and matched local SHA-256 hashes.
- The **entire 11-check production browser suite passed again at the public URL**, including both real 8/8 fixture batches, fresh-worker fully offline inference in the open page, full 18-candidate batch, review/undo/hold/current exports, quota infeasibility, cancellation/retry/stale guards, malformed output/timeouts, imports and phone layouts with applied results. Public traces contain only GET file downloads and no user-content upload. Physical devices, offline reload and general real-world accuracy remain untested.
- Actual public-run downloads were independently reparsed and checked for conservation, quotas, exact priority optimality, computed baselines, reviewed edits and escaping.

Pre-existing uncommitted Receipt Current and older draft work were preserved in the working tree. The current combined deployment retains the existing gallery including Receipt Current; this run's source commit intentionally excludes those unrelated changes.
