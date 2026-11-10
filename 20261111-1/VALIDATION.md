# Observed validation — Buffer Bench

2026-11-11, local production bundle, headless desktop Chrome (Playwright).

- Real q8 WASM MiniLM inference: Print cupboard 8/8 item links, Repair cupboard 8/8. These small, repetitive synthetic fixtures are not a general accuracy claim. Outputs changed with inputs and both item sets were correctly distinguished.
- Print observed mean-baseline points 5/8 versus empirical points 9/12 (target 0.8, four windows each); Repair baseline 4/6 versus empirical points 2/5 (target 0.75). Each item had 1/4 LOO exceedances for BOTH rules. No predictive improvement demonstrated; quantile targets can be below the mean.
- Negated challenge “Not nitrile hand gloves, electrical insulation tape for wires” incorrectly linked to gloves; unrelated instruction-like astronomy content also linked to gloves. Both held, no action performed. Review/holds are essential; semantic similarity is not entailment or an out-of-domain detector.
- 1,800 generated cases: nearest-rank arithmetic, mean rounding, coverage, independent empirical-CDF oracle and LOO counts. Malformed vectors/input boundaries rejected.
- Browser: two fixtures, 24-observation batching (also real maximum 4-item/24-observation fixture: 24/24 intended links), export/audit-original roundtrip, pending/hold/confirmation guards, review changes, quantity edits, undo, exports invalidation, cancellation, input-change stale protection, real retry. Empty/invalid/oversized inputs and unsupported file type rejected. Negative reviewed quantities blocked. Delayed file reads and delayed worker downloads could not overwrite newer input; actual worker WebAssembly-disabled handling also passed.
- Separate defensive fault-injection tests: model network failure then genuine inference retry, worker-download failure, unsupported worker, malformed vectors, timeout, worker error. No fake classifications or enabled stale exports. Fault injection was not used for successful inference tests.
- Offline: completed successful online run, terminated worker, disabled ALL network and ran real inference in a fresh worker inside the same open page. Passed. Offline reload/navigation untested and not promised.
- Network capture from startup through inference: only GET/no bodies; local files, blob assets and model downloads from huggingface.co / us.aws.cdn.hf.co. No model-host request before explicit run; no user content in URLs/bodies. Built JS credential-pattern scan passed; no provider integration exists.
- Real browser-downloaded reviewed JSON/CSV/Markdown independently parsed in Python. Every original, held record, edited quantity/note retained; quoted comma/newline and formula-leading note escaped in CSV. Clipboard equals downloaded Markdown. Reimport restores originals with new pending reviews.
- Desktop 1440px and narrow 390/320px layouts: no horizontal overflow; input focus and actions worked; screenshots retained. Actual touch hardware, other browsers and screen-reader walkthrough untested.
- Gallery: all inline scripts compiled with new Function; 579 previous entries preserved in order, one correct AI utility entry added (580 total). AI Utilities first; historical STL/game/SaaS categories retained.

See browser-validation.json, defensive-validation.json, artifact-validation.json, gallery-validation.json and logs. Combined/public checks and publication status are recorded separately after root deployment.

## Publication blocker

Three completed legacy Pages workflows (42851253329, 42853253695, 42855298460), all targeting gh-pages commit 7beb57ca69594fbcd29d7b17978dbefb183ac0ed, built successfully and failed during deployment. First reported syncing_files; later status responses were empty before timeout/cancellation. Each retry was requested only after confirming the prior run completed and its deployment cancelled, with no matching active workflow. Public app HTTP 404. Public worker/runtime/WASM and real inference could not be tested. No further model simplification can repair this provider blocker: new app build is <1 MB and already shares immutable WASM. Draft removed from APPS; prior gallery/deployment restored. Do not count as completed.

Prior public gallery was independently fetched byte-identical to the 579-entry baseline after all three failures; unpublished draft absent. See restored-gallery-validation.json. Restored root predeploy passed and excludes this draft. Restoration publishes only the prior combined site, not a fourth attempt to release this app.
