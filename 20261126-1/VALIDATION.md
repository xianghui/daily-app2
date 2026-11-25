# Variant Grove — observed validation

## Production-bundle local validation

- `npm run predeploy`: passes. Real Vite output served with the actual `/daily-app2/20261126-1/` base plus immutable collection worker/runtime paths (not a dev server).
- `node smoke.cjs` and `node browser-test.cjs`: two materially different real MiniLM CPU fixtures, 16/16 axis choices; 6/16 always-first-option baseline. No mocked successful AI. Both fixtures: 3/4 covered, one missing, one duplicate, one zero-stock listed cell. Notebook units 23; T-shirt units 40.
- `node core-test.mjs`: 46 schema/constraint/hold/lineage assertions. `python3 oracle-test.py`: 200 randomized cases, **16,170 independent SQLite assertions** over Cartesian coverage, grouped counts, integer sums and source IDs. Uses CROSS JOIN / LEFT JOIN / GROUP BY, not the implementation's algorithm.
- Full production browser suite: maximum 24 listings plus 12 option texts, 36 actual embeddings in nine chunks, 36 matrix cells, all 24 original IDs and 276 stock units conserved. Maximum audit import restores exact originals and reruns real inference.
- Mandatory approval/hold; either-axis edits; reviewed units; zero stock; multiline formula-like note; undo; hold isolation; snapshot/export invalidation; clipboard; JSON, listing CSV, Matrix CSV and Markdown downloads.
- `python3 artifact-test.py`: independently parses **24 actual browser-downloaded artifacts**, **952 assertions**; checks every original, unit edit, hold, source ID, quoted comma/quote/newline, formula prefix, full matrix and stock conservation.
- Empty/malformed/oversized JSON, extra fields, too many listings, negative/fractional/non-numeric units, unsupported file formats and oversized import fail visibly.
- `node defensive-test.cjs`: ten checks — real worker/model download aborts; injected unavailable workers/WASM, constructor error, worker error, malformed vectors, accelerated timeout, stale callbacks, cancellation during pending worker fetch. No fallback output.
- `node recovery-test.cjs`: four checks — actual worker/model download abort then real AI retry; delayed old callback cannot overwrite a newer real second fixture; delayed file read cannot replace newer source.
- Offline check disables all browser networking, terminates prior worker, creates a fresh worker and executes the real model in an already-open warmed page. **No claim about offline reload or cold startup.** GPU disabled throughout successful inference.
- Network audit from initial navigation through inference: no model request before explicit load; all observed requests GET/no body; only same-origin and documented Hugging Face/CDN. Signed query values not persisted. Built JS/CSS credential-pattern scan and immutable runtime SHA-256 checks pass; not an exhaustive guarantee.
- Desktop 1440px and narrow 390/320px: no horizontal overflow; all form controls have labels; 44px+ targets; keyboard focus order checked. Normal viewport screenshots of hero, review and results saved and representative narrow screenshots inspected visually. Physical phone performance/other engines not tested.
- Real stress inference (`quality-challenge.json`): paraphrase succeeds, negated page-pattern text fails (sewn/grid vs sewn/plain); unrelated café request still receives a pair. Always inspect both axes and hold uncertainty.

## Publication

Local checks above do not establish public Pages availability. Public build commit, asset byte comparisons, assembled/public real-inference suites, gallery preservation and artifact checks are recorded separately when publication completes. No completed public release is asserted until those checks pass. Source uses synthetic fixtures only; no digest/announcement.

### Observed publication blocker

Root predeploy and root deploy succeeded: 878 builds, 814,268,537 bytes, unchanged 1 GB guard. Combined assembled browser suite and independently parsed artifacts passed (another 952 assertions); gallery preserved all 877 older entries. `gh-pages` commit `5484a52073ccdac57c52c03a1d3af837dd8cdb6b` then failed Pages deployment creation with HTTP 500 in workflow `45651561782` despite a successful build. Two legacy build POSTs returned HTTP 500/empty bodies, and failed-job rerun also returned HTTP 500. Completed/failure, attempt 1; no active retry workflow. Public app HTTP 404: **public runtime/assets/inference untested**.

The new gallery entry was removed, root gallery restored exactly to its prior state and a restoration assembly/deploy attempted. Source remains a documented unpublished draft, not counted as completed. Hosting failure is independent of the working local model; replacing it with a fake/simpler workflow would not fix the HTTP-500 platform APIs. No digest sent.

Restoration: root predeploy/deploy passed with **877** apps and **814,002,142 bytes**; new draft absent from deploy tree. Restoration gh-pages commit `0ab9c94bf7456d06cbb703b5f864d1bcc4ec6eab`, workflow `45652162717` in progress at last check. Live prior gallery independently byte-matches restored source; all 877 cards, categories and older-app search pass. No claim that restoration Pages workflow is complete. Unrelated untracked recovery work remains excluded from source staging.
