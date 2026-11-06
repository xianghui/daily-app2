# Observed validation — 2026-11-07

## Production bundle, local browser

Passed `npm run predeploy`, `node core-test.mjs`, `node browser-test.cjs`, `python3 export-roundtrip.py`, `python3 audit-assets.py`, gallery inline compilation and real-browser gallery checks.

- Real default pinned DistilBERT q8 model executed in Chrome/WASM CPU, no mocks on success paths. Tested workshop surveys and delivery feedback.
- Six unambiguous sentiment examples: 6/6 expected lenses, including two negations; simple disclosed keyword baseline labeled 3/6 correctly (two unassigned, one negation mislabeled). This tiny synthetic set is NOT a general accuracy estimate.
- Two factual controls (schedule and tracking status) both received concern. This is a known binary-model limitation, clearly documented. The UI supports overriding to mixed/factual. Raw model scores are not confidence. No neutrality or high-stakes classification claim.
- Full 40-row batch, ten chunks of four: all 40 source rows conserved and expected alternating clear positive/negative labels. No lost rows or silently merged IDs.
- Score-array count, valid label pair, uniqueness, finite scores/range/sum and review schemas validated. Near-tie review-band tested separately. Invalid outputs reject the complete result.
- Review lens override, action, owner, multiline note, explicit reviewed checkbox, edit-clears-reviewed, undo, filtered view versus all-row export, apply snapshot invalidation, clipboard and downloads passed. All exact JSON originals retained.
- Independent Python csv/json parsing validated every row and edited field in normal and quoted/newline fixtures. Formula-like multiline cells receive spreadsheet-safe prefix in CSV, exact text in JSON.
- Seven empty/invalid/oversized/duplicate input cases, unsupported/oversized file imports, max batch, cancellation/retry, cancellation during cold model download, input invalidation and delayed stale file read tested.
- Network aborts for model/tokenizer and local WASM fail visibly with no results; removing block and retry succeeds. Missing Worker/WASM, worker construction/error, malformed outputs, timeout and stale callbacks fault-injected only for defensive tests.
- Default requests: only public GET/HEAD file downloads; remote hosts huggingface.co and us.aws.cdn.hf.co. No remote requests before explicit model loading; no content-bearing request bodies or URLs. No provider credentials or remote inference integration in code. Built credential-pattern scan found zero hits; scan is not a proof of all possible secret formats.
- Cache reuse: actual inference after terminating worker with all network disabled PASSED. A new worker used explicit Cache API worker/factory/WASM/tokenizer plus Transformers weight cache. Cached online page reload made no new model-host requests. Offline app-shell startup is not claimed.
- Initial generic Transformers tokenizer discovery queried main despite a pinned revision. Fixed using explicitly cached pinned JSON and DistilBertTokenizer construction, plus explicit model/task pipeline classes. Entire suite rerun successfully after fix.
- Desktop 1440 px and phone viewports 390/320 px: no horizontal overflow, actual review/apply/export controls worked at narrow width, labels and keyboard focus checked. Screenshots inspected. Physical phones, screen-reader audit, Firefox/Safari and memory peak are not measured.
- Gallery: 497 entries; prior 496 unchanged, AI Utilities first, earlier STL/Mini Games remain correctly categorized, new entry once and searchable. Every inline script compiled using Node new Function.

Machine-readable results: browser-validation.json, model-source-validation.json, gallery-validation.json, local-gallery-validation.json and asset-audit.json. Public deployment checks are recorded separately after combined-site publishing.

## Public GitHub Pages verification

- Combined root predeploy/deploy succeeded: 497 built, 0 failed, 0 skipped.
- Matching Pages head `eafea323b03e0a64c4f006720c079a3a855b90b5` reached `built`; no redundant rebuild triggered.
- Every new public asset, including HTML, main bundle, worker, WASM and local factory, matches production build SHA-256. See deployment-validation.json.
- Full browser suite rerun at https://xianghui.github.io/daily-app2/20261107-2/ PASSED, including real two-domain inference, 40-row batch, fresh-worker offline inference, model/runtime failure and recovery, review/edit/undo/apply/copy/download, defensive fault tests, stale-run guards and desktop/phone layouts. See live-browser-validation.json.
- Public gallery renders 497 cards with new entry exactly once, AI Utilities first, prior categories preserved and search working. No page errors. See live-gallery-validation.json.
- Publicly downloaded CSV/JSON edited and quoted fixtures reparsed independently; all source records and reviewed fields preserved.
