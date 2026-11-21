# Observed validation — 2026-11-21

## Real AI and quality

Desktop Chrome, GPU disabled, actual production Vite bundle, real q8 MiniLM on WASM CPU. Two materially different synthetic batches: delivery damage vs shipping inquiries; code defects vs requests for documentation expansion. All **20/20 supplied easy labels** matched, including all 12 calibration predictions and eight target predictions. This is a tiny hand-written fixture check, not estimated general accuracy. Both initial raw/adjusted/reviewed target shares were 0.5, with TP3/FN0/TN3/FP0.

A separate negated mixed-topic challenge (“The sample code is not broken. I do not need an error fix; I need a beginner tutorial.”) was **misclassified positive**, expected negative. The app is not a reliable negation or entailment detector. Mandatory review, holds and explicit limitations remain necessary; no semantic certainty claim.

After correcting one calibration truth to negative and one target audit label to negative: immutable raw share remained .5; reviewed share became .25; adjusted share was 1/3. This verifies target corrections are not double-calibrated. Independent known arithmetic checks included .5 and .3 estimates, missing classes, weak denominator and out-of-range incompatible counts. See core-validation.json and export-reviewed.json.

## Workflow, artifacts and safety

- Maximum 32+32 records, 66 actual embedded texts / 17 chunks; complete 64-record audit envelope reimported successfully.
- Mandatory per-record review; held records block estimates but remain exported. Unconfirmed assumptions block estimates. Review edits invalidate applied snapshots/exports; undo restores prior review but requires reapply.
- Real cancellation/retry and cold model-request cancellation/retry passed. Fault injection tested model network abort/recovery, missing WebAssembly, worker-download failure, unsupported Worker constructor, worker error, malformed vectors/envelope, timeout and late cancelled/input messages. Fault injection was used only for defensive checks, never successful inference.
- Delayed **actual model result** delivered after newer real inference did not overwrite the new documentation input. Delayed file reads could not replace newer source edits. Empty/malformed/oversized input, duplicate IDs, bad truth, unsupported file types and >2 MB files fail without output.
- Downloaded JSON/CSV/Markdown reflect reviewed labels and multiline `=SUM(1,2)` plus quoted-comma notes. Independent Python CSV and JSON parsing verified complete originals and current reviewed fields, quoting, formula escaping and maximum-envelope conservation. Clipboard exactly matched downloaded Markdown.
- Network requests observed from bundle startup through inference: no model host request before explicit loading; external requests were model-file GET downloads with no bodies, not user-content uploads. Signed query values not persisted. Built assets scanned for common credential patterns; source inspected for data flow and no provider integrations.
- Fresh worker in an already-open warmed page performed real inference with the entire browser context offline. No offline reload/startup claim.
- Desktop 1440px and narrow 390/320px layouts: no horizontal overflow, labeled controls, ≥44px controls and keyboard focus. Normal viewport hero/review/results screenshots inspected. Physical phones, other engines and low-memory hardware unverified.

## Assembled and public checks

The root gallery scripts compile with Node new Function; exactly one new ai-utility entry, all 768 prior entries unchanged, AI Utilities first and earlier categories retained. Root predeploy built/copied **769 apps**, no failed/skipped builds. Conservative 1 GB guard unchanged. Deploy-only byte-identical Manifold reuse extended to published Lace & Fold (20261028-29), preserving its source builds and JS compatibility paths. The assembled app and gallery, real legacy PNG/STL imports and independently checked mesh exports, plus shared runtime hashes are tested before publication.

Public deployment results are recorded in publication-status.json, pages-watch.json, public-asset-validation.json, public-browser-validation.json and legacy-public-validation.json when complete. A branch push alone is not accepted as public validation. See these observed reports, not assumed release state.


## Public release verified

Matching Pages `82a9698dea8ea4ba4a51e37f9bc9b0f2e8352657` / workflow `44859515566` reached built successfully. Nine public gallery/app/worker/factory/WASM asset byte matches, four affected legacy asset matches, both real-model fixtures, the complete reviewed-artifact/offline/maximum-batch/privacy suite, all 769 gallery cards and real legacy PNG/STL/mesh workflows passed. Combined site 999623912 bytes under the unchanged 1 GB guard. Physical phones and offline reload remain unverified. No digest sent.
