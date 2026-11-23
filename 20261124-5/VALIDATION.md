# Observed validation — Plural Loom

## Production-bundle browser and real AI

Current desktop Chrome via Playwright, actual q8 MiniLM and CPU WASM, no mocked successful inference:

- Two materially different synthetic batches: **8/8 intended market-profile matches**, four locales each. Storefront batch: 3 ready/1 blocked, 2 missing Polish branches. Catalog QA batch: 2 ready/2 blocked, 4 missing Arabic branches plus Japanese placeholder error. Each batch's 36 supplied preview counts had 14 category differences from the one-at-1 English shortcut. These are small fixture observations, not general accuracy.
- Four context-only variants with identical message data selected four different locales. English passed, Polish/Arabic lacked branches, Japanese had an unexpected `one`; demonstrates real AI impact on workflow outputs.
- One conflicting-negation probe selected intended Tokyo. Do not infer reliable negation handling or locale certainty; all sources require review.
- Actual fresh-worker inference with all network disabled after online warmup passed. Only an already-open warmed page is covered, not offline startup/navigation.
- 24-message maximum batch passed chunking, no lost rows, reviewed catalog completeness and audit reimport. Four-text worker chunks. Every source ID and original message retained.
- Review/edit/hold/undo, pending-review gating, export invalidation, malformed message blocking, duplicate locale/key blocks and resolving one conflict with hold passed. Edited quoted/comma/newline template and formula-like multiline note survived real downloads and independent parsing.
- Downloaded JSON, CSV, Markdown and ready Catalog JSON, plus clipboard worksheet. Independent Python JSON/CSV and golden plural checks passed **1,503 assertions** for local artifacts.
- GET-only app/model asset traffic, no request bodies or source context in URLs. No model-host requests before explicit initiation. Reports store no signed CDN query values.

## Deterministic and defensive checks

- **40,039 core assertions**, including independent integer CLDR rules against Intl for 0–10,000 in en/pl/ar/ja; validation, collision blocking and preservation. This is not model testing or translation quality validation.
- Fault injection: unavailable Worker/WASM/Intl, worker constructor/error, malformed model vectors, timeout, stale error and cancellation during delayed worker download: no fabricated output.
- Actual model-host network abort failed closed, explicit retry subsequently completed real inference. Delayed file read could not replace newer input.
- A delayed valid-vector fake response (defensive check only) could not replace a newer successful real-model run. Keyboard order profile → message → decision passed.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts, no document overflow, labels and ≥44 px control heights passed. Desktop and narrow normal-viewport hero/review/results screenshots visually inspected. Enlarged JSON editor rechecked in assembled bundle.

## Publication checks

The assembled production bundle and public release are checked separately; see `assembled-*`, `public-*`, `pages-build-status.json` and `publication-status.json` for actual final status. Root gallery scripts are compiled with Node new Function, exactly one correct new entry and all prior entries checked. Asset byte audits include immutable shared worker/factory/WASM; no dependency source build changed. Root combined-site workflow only; original daily_app tree untouched. No digest sent.

## Known limits / not tested

Physical phones, low-memory performance, other browser engines, cold offline startup, downstream translation engines, external catalog importers, linguistic correctness and general model accuracy remain untested. Numeric counts cannot preserve visible decimal trailing zeros. No ordinal/ICU/exact-number syntax support. Semantic nearest neighbors can be wrong; review is mandatory. Model upstream main can change. The catalog format is explicitly documented and not advertised as an off-the-shelf ICU/i18next file.

## Assembled result

Root predeploy assembled **834 apps**, zero failures/skips, **999,858,900 bytes** below the unchanged 1 GB guard. All gallery entries preserved; 9 app/gallery/runtime byte comparisons passed. Full assembled real-model workflow, all 1,503 independent artifact assertions and 297 actual catalog-consumer preview round trips passed. Ten defensive cases passed. No legacy runtime-sharing rules or existing source builds changed. Pre-existing unrelated recovery edits/folders are preserved and excluded from this app source commit.

## Public release


Public release verified: matching built Pages commit `0b86dd1de19dab40196f997f9740b110e114c86f` and successful workflow `45256349959`. Nine public app/gallery/runtime byte matches, all 834 gallery cards, both real-model fixtures, review/export/24-message/offline/privacy suite, 1,503 independent public artifact assertions and 297 catalog-consumer preview round trips passed. Combined site **999,858,900 bytes**, under the unchanged guard; no runtime-sharing rule changed. Pre-existing unrelated recovery work preserved and excluded from source staging. Physical phones, other engines, cold offline startup, translation quality and downstream integrations untested. No digest sent.

See `public-browser-validation.json`, `public-artifact-validation.json`, `public-catalog-consumer-validation.json`, `public-asset-validation.json`, `public-gallery-browser-validation.json` and `publication-status.json`. All successful workflow tests use actual public model inference; faults are separately labeled. No extra publishing retry or Pages-source change was needed.
