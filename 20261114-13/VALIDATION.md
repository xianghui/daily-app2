# Agreement Grove — observed validation

## Local production bundle

- `npm run predeploy` passed. Actual production worker/factory paths and shared WASM hashes verified; built text assets scanned for common secret patterns (not a proof of every possible secret). No credentials/integrations exist in app source.
- Real q8 MiniLM WASM CPU inference with GPU disabled matched 6/6 Workshop dimensions notes and 6/6 Room instruments notes. Actual assignments/statistics: `browser-validation.json`.
- Workshop length: bias 0.4 mm, SD 0.2, limits approximately [0.008,0.792], within ±1 mm. Package mass: bias 0 g but SD 2, limits [−3.92,3.92] exceed ±3 g, exposing the bias-only baseline's omission. Room temperature bias 1.2 °C exceeds ±1; humidity bias 2, SD 1, limits [0.04,3.96] within ±5. These tiny synthetic fixtures do not establish general accuracy or adequate study size.
- 1,500 independently computed Python Fraction mean/variance cases matched JS bias, sample SD, limits and tolerance comparisons: `oracle-validation.json`. Zero-spread behavior tested separately.
- Eight browser workflow groups passed: two actual-inference fixtures; review/edit/undo/reject/hold/copy/export/reimport; fully offline fresh-worker inference; empty/invalid/oversized/unsupported format/duplicates/minimum n; cancellation/retry/stale source/32-pair batch; inert instruction-like text; desktop/phone layout.
- Network inspection from initial page load through inference: no model-host request before explicit click; all observed requests GET with no body to local app/model hosts. No content uploads. `browser-validation.json` records asset URLs. Unrelated instruction-like notes still receive a nearest candidate; kept pending then held, not treated as commands.
- Browser-downloaded JSON/CSV/Markdown and summary CSV independently parsed with Python: no lost original/reviewed records; edited formula-leading quoted/comma/newline text survives, CSV escaped, numeric readings unchanged. Audit reimport restores originals and pending review. `artifact-validation.json`.
- Network/model abort plus real-model retry; worker download failure; unavailable worker/device; malformed embeddings/envelope; timeout; worker error all produced actionable errors with no fake output: `defensive-validation.json`. A deliberately late cancelled-worker callback could not overwrite newer results: `stale-validation.json` (defensive mock only).
- Desktop 1440 px and phone widths 390/320 px: no horizontal overflow, labeled fields, ≥44 px buttons and keyboard focus checked. Normal-viewport input/review/results screenshots saved and phone review/results visually inspected. Physical phones/other engines not tested.
- Offline claim is ONLY fresh-worker inference inside an already-open warmed page; all browser networking was disabled. Offline startup/navigation/reload untested and not promised.

## Maximum bounds

Real inference matched all 32 intended feature links at the maximum 6-feature/32-pair dimensions, produced zero SD for constant differences and restored the maximum audit with renewed pending approvals: `edge-validation.json`. Maximum character-bound combinations, real instrument studies, all browsers and cache eviction behavior have not been exhaustively tested. No universal accuracy, statistical validity, confidence or measured speed claim.

## Publication

Public verification is recorded separately after root deployment: public assets must match local bytes, Pages must build the matching gh-pages head, and the actual public workflow and gallery must pass before completion.

Combined deploy-directory production browser suite also passed all eight workflow groups. Gallery inline scripts compiled, the new AI Utility entry appeared once, all 661 prior working-tree entries remained unchanged, and the complete 662-card gallery rendered/search worked at desktop and 390/320 px widths. Root predeploy built 662, failed 0, skipped 0; deploy-only runtime deduplication preserved required shared assets.

## Public production verification

The final public app, worker, module factory, CSS/JS and shared WASM were byte-matched to local builds; the full current gallery matched source. Both actual-model fixtures, all eight workflow groups (including fresh-worker offline inference, reviewed exports and 320/390 px layouts), independent artifact parsing and the 662-card public gallery passed. The corrected summary filename was checked from the actual browser download. See `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json`.

The first deployment was superseded to correct a leftover summary-download filename. The matching final Actions workflow succeeded, but the legacy Pages API retained an earlier error from before that workflow began. A single documented legacy rebuild was requested only after confirming there was no active workflow; no repush or configuration change. See `hosting-attempts.json`, `pages-rebuild-request.json`, `pages-build.json` and `publication-status.json` for final hosting evidence.

Final legacy rebuild and all Actions jobs succeeded; Pages reports `built` for matching gh-pages `029db140da4295ea64c9ea466ba684b86842bb48`. Public byte checks were repeated after completion.

After the successful status-reconciliation rebuild, maximum 6-feature/32-pair real inference and audit reimport also passed at the public URL (`public-edge-test.log`); all 32 links matched again.
