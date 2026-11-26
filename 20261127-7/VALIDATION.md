# Observed validation — 2026-11-27

## Real local success path

- Production-bundle Chrome, headless CPU (`--disable-gpu`), no API key: two materially different synthetic batches. MiniLM proposed terracotta/porcelain and paperclay/stoneware: **4/4 simple known-answer links**, versus **1/4** always-first-reference baseline. Not a general accuracy benchmark.
- First batch wet templates: terracotta target 200×120 → 218×134 mm. Combined wet area 242,848 mm² versus 186,000 mm² unadjusted; 10 pieces, 4 baseline undersized axes. These are predictions, not actual ceramic measurements.
- Second batch: 5 pieces; wet area 244,326 versus 202,400 mm²; 4 baseline undersized axes. The 290 mm paperclay target requires 309 mm wet width, exceeding the 300 mm board. CSV correctly blocked. Reviewed 280 mm target resolves; undo restores blocker.
- Neural instruction-like text matched an arbitrary stoneware reference; it caused no tool authority, credentials request or upload. Negation probe matched terracotta, but no general negation reliability is claimed.
- Maximum 12 projects + 8 references executes 20 real embeddings in five chunks; 12 rows survive review/export/audit reimport.
- Fresh worker with network completely disabled successfully reloaded cached runtime and model and reproduced inference in the already-open production page. Offline reload/navigation not claimed.
- Observed cached tokenizer maximum: 512 tokens. App bounds every neural note to 200 characters; no reliance on pipeline max_length enforcement.

## Workflow, artifacts and constraints

`browser-test.cjs`: mandatory review, editable sample links/dimensions/quantity, invalid review values, reversible hold/reject, undo, snapshot invalidation, multiline formula-like quoted Unicode note, clipboard, JSON/CSV/Markdown download, maximum audit reimport, 25 bad source cases plus unsupported/oversized import, cancel and real retry. Desktop 1440 / narrow 390 / 320 CSS px: no document overflow, labels, keyboard order, ≥44px controls, screenshots captured and representative hero/review inspected.

`core-test.mjs`: 200 parameterized calibration cases independently compare ceiling formula, no modeled undersize, bounded rounding overshoot, stage-retention product and area conservation. Identity, malformed vector and pending-review guards exercised. `artifact-test.py` uses Python Fraction/math/csv/json independent parsers to recompute dimensions, board decisions, areas, quantity/row conservation and multiline formula escaping across 16 downloaded audit snapshots. Original inputs retained. No irreversible actions.

`defensive-test.cjs`: 10 cases: worker-download abort, actual model-host abort, unsupported Worker/WASM, worker constructor/error, malformed vectors, accelerated timeout, stale messages and cancellation during pending worker fetch. Fault injection is only defensive; all success/quality tests use real weights. `recovery-test.cjs`: actual network failure followed by real retry, and delayed schema-valid old result/error cannot overwrite a newer real run.

## Privacy / runtime / gallery / deployment

Requests captured from navigation through model inference: GET-only with no bodies, no source-note URLs, no model-host request before explicit load; external requests limited to documented Hugging Face/CDN paths. Public reports preserve paths/query-key names only, not signed CDN values. Reviewed runtime source and static credential-pattern scans passed; pattern scans are not exhaustive credential proofs. Shared worker/factory/WASM provenance hashes recorded.

907 gallery entries; all 906 old entry strings unchanged, new entry exactly once with ai-utility area, all inline scripts compile with Node new Function. Real-browser gallery categories/order/search and desktop/phone layout passed. Root assembly: 907 built, 0 failed/skipped; deploy-only deduplication leaves 822,035,712 bytes, below existing size guard. Shared dependencies preserved. Assembled-tree real inference/recovery and stale-result checks passed.

Public verification completed: Pages built commit `7be19f9f42e7daa9f03a7308810c139dcdc441f5`; matching workflow concluded success. All 9 public gallery/app/runtime assets byte-match the assembled production tree. The full public browser suite reproduced 4/4 real MiniLM links, offline fresh-worker inference, maximum batch/reimport, review/undo/cancel/export and responsive checks. Python independently parsed 16 public audit snapshots and related CSVs. Public gallery and network-failure recovery/new-run stale defenses also passed. See `pages-build.json`, `pages-workflow.json`, `public-assets.json`, `public-browser-validation.json`, `public-artifact-validation.json`, `public-gallery-browser.json` and `public-recovery-validation.json`.

## Not tested / limitations

Physical ceramic outcomes, real personal data, physical phones, other browser engines, storage eviction and offline navigation/reload are not tested. No food-contact/safety, glaze, warpage, kiln suitability, variance, thickness or volumetric model. Fixture sample bars are synthetic. Nearest-reference retrieval can confidently-looking match irrelevant content: cosine is similarity, not confidence. Human review and measured sample comparability remain essential.
