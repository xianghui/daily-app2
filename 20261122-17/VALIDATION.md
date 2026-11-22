# Observed validation — Serial Atelier

## Production bundle and real AI

- `npm run predeploy` passes with the required React + Vite base and per-app gh-pages scripts/dependency.
- Chrome headless with GPU disabled, actual shared Transformers.js/ONNX WASM CPU inference (not a mocked success path).
- Inventory fixture: **6/6** simple resource notes matched; reviewed trace has 3 conflict pairs, 2 precedence edges and a cycle `checkout → restock → checkout` with concrete source operation witnesses.
- Editorial fixture: **6/6** notes matched; reviewed trace has 2 conflict pairs, 2 edges and one harmless read/read pair. First-appearance order reverses 2 conflict pairs; valid serial order `revise → credit → publish` reverses none. Every source access survives in local order.
- Maximum 8 resources, 8 transactions, 32 operations: 40 actual embeddings / 10 chunks; every original/review and serial access retained. Exported audit reimports originals successfully. Neural suggestions for deliberately indistinct maximum-size labels were manually reviewed, not treated as identity truth.
- Unknown/negated/instruction-like note selected `price` while remaining pending. Human hold withholds whole-trace analysis. Nearest semantic match is not an identity/unknown detector. The 12 tiny fixture matches are not a general accuracy claim.
- `core-test.mjs`: **500 generated traces**, each independently checked against all transaction permutations (up to 120). Conflict pairs match independent enumeration; acyclic status agrees with existence of a valid permutation; serial operations preserve count and per-transaction order; cyclic witnesses replay to source operations. Empty/schema/count/malformed-vector/unreviewed guards pass.

## Workflow, artifacts and defensive handling

- Real fixture, maximum-batch, reviewed, held and edited downloads parsed with independent Python JSON/CSV readers. Quoted commas, multiline source IDs and `=SUM(1,2)` multiline reviewer notes survive; CSV formula-like fields are guarded while JSON preserves exact strings. Markdown's complete JSON is reopened. DOT node/edge content is inspected; no Graphviz renderer is available/tested.
- Serial CSV independently checked for every conflict direction, original positions, no lost access and preserved per-transaction order. Cyclic traces cannot export serial CSV. Holds retain complete audit but withhold DOT/serial plan. Clipboard contains current reviewed audit.
- Correcting the reviewed resource of inventory operation o5 from stock to address changes the cyclic graph to an acyclic graph with 2 conflict pairs. Editing its mode reduces this to 1 conflict pair. Transaction/resource/mode edits reset approval; all review edits invalidate exports. Undo restores the prior layer.
- Empty, invalid JSON, null, oversized source, unsupported file format and >4 MB import tested. Invalid schema shapes and array count bounds independently checked.
- Model host abort → visible failure, no fake output, then successful real retry. Worker download failure, missing WASM, unsupported worker construction, worker error, malformed vectors/envelope and 180-second watchdog tested with fault injection. Fault injection is only for defensive checks; successful inference always uses the real model.
- Cancellation during real initial weight download, real retry, mid-run cancellation, changed input during delayed worker fetch, old asynchronous file read, delayed post-cancel/input messages and delayed old-run error after newer real inference all pass. No stale result overwrites the current source or run.

## Privacy, caching, accessibility and deployment

- Requests captured from initial production-page startup through real inference: no model host before explicit load; requests are GET public assets without bodies or user text in URLs. Persisted audit records only hosts/paths/query-key names, not signed CDN query values. No remote inference/key integration or upload path. Built asset credential-pattern scan clean; integration reviewed separately because pattern scans alone are not proof.
- After warming caches, terminate model worker, disable all network, and create a fresh worker for another actual inference: passes. This tests already-open warmed-page inference only; cold offline navigation/reload is not promised. Runtime/weights may need internet after cache eviction.
- Desktop 1440px, narrow 390px and 320px layouts: no horizontal overflow, controls have labels, focus works, visible touch targets ≥44px. Normal viewport hero/review/results screenshots inspected. Physical phones, low-memory devices, Safari and Firefox inference untested.
- Gallery inline scripts compile with Node `new Function`; missing script fails. New ai-utility entry appears exactly once. All 797 previous entries preserved, AI Utilities stays first, old categories/search/cards remain intact: **798 total**.
- Root `npm run predeploy` assembles every gallery app and byte-matching new production assets. Shared worker/factory/WASM hashes match their recorded immutable dependencies. **999,947,514 bytes**, below unchanged 1,000,000,000-byte guard. No additional sharing rule, old app deletion or source build rewriting.

Publication and public inference results are appended after the root deploy; see `publication-status.json`, Pages watcher and public asset/browser/gallery reports. No digest sent.

## Public release verified


Public release verified: matching Pages `26066bb87e04ec923a950d202010d612c4e43ad2` and workflow `45001426069` succeeded. Nine public gallery/app/worker/factory/WASM assets byte-match the combined site. Both public real-AI fixtures (12/12 simple record notes), complete reviewed/export/maximum-batch/offline/privacy checks, independently parsed artifacts and all 798 gallery cards passed. Combined size 999,947,514 bytes remains below the unchanged 1 GB guard. Source staging excludes and preserves unrelated recovery work. No digest sent.

The nine public byte checks include two unused scaffold SVG assets in addition to the seven gallery/app/runtime assets. Public production-bundle browser tests reran both real-model fixtures, maximum batch, fresh-worker offline inference, reviewed/edit/hold/undo/copy/download flows, invalid input checks, privacy request capture and phone-width layout checks. Public gallery search/count/category preservation also passed. Fault injection tests were local production-bundle checks, not repeated on the public site.
