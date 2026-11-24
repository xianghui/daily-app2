# Observed validation — 2026-11-24

## Production build and real model

`npm run predeploy` passed. Tested the actual Vite production bundle (not the dev server) in headless installed Chrome **157.0.8103.79**, using the real shared Transformers.js/MiniLM q8 WASM CPU pipeline. No WebGPU or mocked success path. The first model load downloaded real weights/runtime; all progress, result and batch messages came from that worker.

- Dashboard/account fixture: actual clients `[public, account, account, partner]`, **4/4** intended matches. Reviewed results readable/denied/readable/denied; **2** differences from origin-only baseline.
- Preflight-edge fixture: actual clients `[partner, account, public, account]`, **4/4** intended matches. Reviewed results readable/denied/denied/denied; **3** differences from origin-only baseline.
- Context-only causal check: identical request snapshot, changing only AI input context public → account produced public/readable → account/denied. Thus actual neural output changes a relevant workflow decision.
- Negation probe intended public but returned account. This is an observed semantic limitation; mandatory profile review is essential. Eight simple cases are not a general accuracy estimate.
- Maximum 24-record batch retained all records, matched the intended repeated profile sequence, processed four-text chunks, and exported/reimported exact originals from the full audit envelope.
- After online warm-up, terminated the model worker, disabled all browser networking and ran a **fresh real worker** successfully. Only already-open warmed-page operation is claimed. Cold offline startup, cache eviction, other browsers, physical phones and restricted-storage devices were not tested.

See `browser-validation.json` and `assembled-browser-validation.json`; tests retain sanitized network host/path/query-key metadata only, not signed CDN values.

## Deterministic quality and hard constraints

`core-test.mjs` passed **14** groups: fixture outcomes/baseline counts, credential include wildcard denial, credentialed simple request preflight behavior, exact credential/origin checks, Content-Type safelist/unsafe values, preflight status, method/header wildcards, header-name case, independent preflight/actual gates, unsupported schema, malformed AI vectors and full held/invalid record conservation. All approved valid test cases, including expected denials, survive release; held/malformed cases remain only in complete audits.

`cors-oracle.cjs` ran **32** supported synthetic cases against actual browser CORS fetch behavior between two loopback origins. Both credential modes, simple/form/JSON/custom-header requests and exact/wildcard/missing/failed-preflight response snapshots matched **32/32**. This oracle is independent of the helper's implementation: Chrome itself decides whether fetch exposes the response. These loopback requests exist only in the developer test, never the utility UI.

An earlier 40-case exploratory oracle found 39 matches: installed Chrome accepted wildcard Authorization permission where the helper's standards-oriented rule required explicit permission. **Fixed by excluding Authorization from the supported authored-header subset**, with an actionable validation message and visible UI/README limitation. The final supported-subset oracle asserts every match. Do not generalize this helper to all browser behavior or security guarantees.

## Review, artifacts and errors

Real-browser checks passed: approval gate; profile/request edits reset approval; multiline notes; undo; holds; invalid case preservation; stale snapshot export disabled; clipboard content; current reviewed JSON/CSV/Markdown/release downloads. `artifact-test.py` independently parsed actual downloaded CSV with Python's standard parser and JSON with `json`, checked every original/reviewed field, multiline quoted formula-like cells, 24-row IDs, held/blocked cases and ready-only release reconstruction. JSON and CSV retain every source occurrence; CSV intentionally prefixes formula-leading text, while JSON preserves exact values. No external action is implemented.

Empty, invalid, oversized and unsupported imports/inputs were exercised. Defensive worker fault injection tested unsupported Worker/WASM, construction error, runtime error, malformed vectors, timeout, stale error and cancellation while worker fetch is pending. Actual model-host download abort surfaced an error without fabricated results; lifting the block and retrying performed real inference. Asynchronous file-import races cannot replace newer text. A deliberately late well-formed injected vector response could not replace a newer **real** successful inference. These mocks are solely fault-injection checks, never evidence of model success.

Desktop 1440 px and narrow 390/320 px layouts passed no-horizontal-overflow, associated form labels, ≥44 px visible control targets, and screenshots of hero/review/results. Phone screenshots were visually inspected; keyboard focus moves profile → raw request → approval. Physical touch devices/screen-reader narration untested.

## Privacy and runtime assets

Production traffic from startup through real inference consisted of GET file downloads, with no request body, source context in URLs or calls to the synthetic client domains. No model-host request before explicit Load AI. Source review and credential-pattern scan found no embedded provider credentials or provider integration; pattern scans alone are not an exhaustive secret proof. Imported strings render as inert React text.

Shared worker/factory/WASM byte hashes matched `runtime-provenance.json`. Assembled app assets, gallery and shared runtime returned exact bytes. Existing immutable worker uses 512-token model tokenizer configuration; feature-extraction max_length argument is not relied upon as a strict cap. Input limits separately bound text.

## Collection assembly

Root gallery inline scripts compiled with `new Function`; new entry appears exactly once as ai-utility and newest. All **845 earlier entries** and existing category definitions/styles were preserved, yielding **846** cards; real-browser gallery check passed. Root `npm run predeploy`: **846 built, 0 failed, 0 skipped**. Combined site **999,684,186 bytes**, below the **unchanged** 1,000,000,000-byte guard.

To stay within that guard, one additional byte-identical 541,470-byte legacy geometry WASM (`20261106-9`) shares the existing `20261028-24` runtime in assembled output only. Old source dist remains unchanged and compatibility JS URLs survive. The affected earlier app actually loaded shared WASM, imported synthetic PNG and STL, exported distinct valid binary STL with exact preview/export fingerprints, and saved a portable JSON carrying the imported source. See `assembled-legacy-validation.json`. No old apps were removed or recategorized.

## Publication

Local/assembled verification does not establish a public release. Final matching Pages status, public asset hashes, public real inference/workflow/artifact/offline/privacy tests and affected legacy regression are recorded in `publication-status.json` and public-prefixed reports after deployment. No digest is sent by this builder.

Public release verified: matching Pages commit `32b5a6a7f28bca7a4a844bb4310c16681bfd103d` and workflow `45363627311` succeeded. Nine public asset byte checks, both real-AI fixtures, full review/export/maximum-batch/offline/privacy suite, independently parsed actual artifacts, all 846 gallery cards and affected legacy PNG/STL import/export passed. Combined site 999,684,186 bytes remains below the unchanged guard. Source staging preserves and excludes unrelated pre-existing recovery work.

Source-record recovery: an initial report-collection cwd assertion failed but a non-fail-fast shell continued and pushed app sources without the root gallery/documentation hunks. A follow-up commit completes those scoped root hunks and release records. Lesson: assert the app report directory and use fail-fast shell execution before staging/committing dependent release steps; recognize valid CSV CRLF with cr-at-eol during whitespace checks.
