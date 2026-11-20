# Load Ladder — observed validation

Synthetic-only validation on 2026-11-20. Production React/Vite bundle served at its real `/daily-app2/20261120-12/` base; actual desktop Chrome with GPU disabled for successful neural checks. No mocked inference in successful AI/quality/offline tests. Fault injection is limited to defensive/race checks.

## Real model and known-answer studies

- Archive: **6/6** initial neural procedure links matched the intended scan/pack identities. Scan raw means `[15,30,20]` fit to `[15,25,25]`; pack stays `[8,16,28]`. One raw adjacent drop, zero fitted drops by construction; largest observed mean-within-25 sizes `[30,20]`.
- Workshop: **6/6** intended wash/bake links. Wash `[12,28,18]` fits `[12,23,23]`; bake `[20,18,40]` fits `[18.6666667,18.6666667,40]` (weights 1,2,1). Two raw adjacent drops, zero fitted drops; largest observed qualifying sizes `[30,20]`.
- Each fixture conserves all six original summaries and total approved weight **8**. Both source-note sets use paraphrases rather than exact procedure descriptions. Tiny clean synthetic results are not general accuracy, predictive improvement or time-savings claims.
- Changing one source note from washing to baking changes the real neural link and both affected procedure lookup memberships. An unrelated instruction-like note stays inert and is explicitly held; semantic proximity alone is not suitability.
- Maximum **96 summaries + 8 procedures**, **26 real neural batches**: all 96 originals survive, total weight **128** is conserved and exported/reimported. Equal sizes aggregate with all source IDs retained.

## Independent math and artifact checks

- **1,200** seeded small random weighted fits compared against an independent exhaustive enumeration of every contiguous partition; optimum squared loss and fitted values match. Equal-size weighted aggregation, empty procedures and weight conservation also checked (`core-validation.json`).
- Actual browser downloads of both fixtures' JSON/CSV/lookup CSV/Markdown independently parsed using Python csv/json. Reviewed multiline formula-like notes survive JSON and clipboard; CSV escaping preserves line breaks/quotes and adds an apostrophe only to formula-like strings. Maximum 96-row audit and 128-sample lookup reconcile. See `artifact-validation.json`.
- Mandatory approve/hold; edited snapshots disabled until reapplied; hold exclusion; undo; invalid reviewed sizes blocked; import restores originals only with renewed approvals; input changes invalidate inference. All-held input preserves six originals with zero active levels/weight; an above-maximum threshold leaves every note unassigned and blocks approval until corrected/held; zero ceiling is handled.

## Defensive, network and layout checks

- Empty/invalid/null/oversized JSON, empty catalogs/rows, duplicate IDs, long descriptions, invalid size/count/duration/threshold/ceiling, malformed files, unsupported PDF and oversized imports rejected.
- Cold model download cancelled before completion, late worker-source fetch, input change during inference, delayed import, late old result after newer completed run: no stale overwrite; real-model retries pass.
- Actual model-host abort and recovery; worker-download abort; unsupported WASM/module-worker, worker error, malformed envelope/vectors and shortened injected timeout all leave no proposals or fake artifact (`defensive-validation.json`). Timeout injection accelerates only the timer, not successful inference.
- From initial production load through all real inference: recorded requests are GET/HEAD, no bodies or source notes in URLs; no model-host request before explicit loading. Only documented file hosts/paths persist in reports; temporary signed CDN query values are not saved. Built text assets scanned for credential patterns; source integrations inspected—no keys/providers/uploads/analytics.
- Shared worker/factory/WASM hashes and protocol audited. **Actual fresh-worker inference with networking disabled passes** in the already-open warmed page. Offline navigation/reload is not claimed or tested.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, ≥44px button targets, form labels and visible focus. Normal viewport screenshots of overview/review/results inspected. Physical devices/other browsers/screen readers untested.

## Publication

Combined-root assembly/public byte checks, Pages status and public real inference are recorded in `assembly-validation.json`, `public-asset-validation.json`, `public-browser-validation.json` and `publication-status.json` once completed. The gallery preserves all prior working entries/categories. Existing root edits unrelated to this app are preserved and excluded from its source commit. No digest sent.

**Completed public release:** matching Pages `51986e68bea0e8fb87b23dd63865946b3492eaa3` is built with successful workflow 44665806196. All nine public gallery/app/runtime assets match the combined directory; both real neural fixtures, full public reviewed-artifact/privacy/offline/max-batch suite and all 745 preserved gallery cards pass. Combined size: 999,967,250 bytes; unchanged conservative 1 GB guard. No new legacy-runtime rewrite.
