# Veil Desk validation — 2026-11-07

## Local production-bundle checks

- React/Vite `npm run predeploy`: passed; actual dist served at deployment base `/daily-app2/20261107-7/`, not the Vite dev server.
- Real Chrome/WASM BERT NER: two materially different synthetic fixture sets, four excerpts; **14/14 expected exact entity spans and types**. Interview fixture: Sarah/London/Microsoft and John Smith/Google/Berlin. Field-notes fixture: Marie Curie/Paris/Albert Einstein/Princeton and Apple/California/Tim Cook/London. These tiny known answers are not universal accuracy or privacy guarantees.
- First fixture: one known-name literal baseline hit vs six neural candidates. Second fixture: zero baseline hits vs eight candidates. Counts are computed and overlapping, not claimed time/accuracy improvements. Initial actual output changed the redacted text based on these real detections.
- Model output schema, finite scores/valid types, complete token-to-source alignment and exact original spans validated. Independent core tests cover malformed schemas, missing coverage, wrong token words, NaN scores, unsupported labels, unknown tokens, repeated WordPieces, bounds and manual additions.
- Full 12-excerpt batch: 24 real neural entity candidates; all 12 originals retained and reviewed. Sequential one-excerpt chunks, no lost records.
- Review: reject mask, replacement edit, undo, add missed exact phrase, per-excerpt review gating and stale export invalidation passed. No-entity text still requires explicit review. Type-selection controls leave deselected entity types visible but unselected.
- TXT download and clipboard match applied reviewed text. Optional sensitive JSON parses with exact originals and all decisions; independent Python reconstructs redacted text from offsets. LF/CRLF, quoted text and line breaks retained. Test assertions were corrected to respect the app's exact CRLF preservation and HTML single-line replacement fields; neither required changing inference or fabricating output.
- Empty/whitespace input, 401-character excerpt, 13 excerpts, oversized UTF-8 batch, unsupported file extension/oversized file, empty replacement, absent manual phrase handled visibly.
- Cancellation/retry, cancellation during cold model download, input-change invalidation, late cancelled worker response and stale file-read rejection passed.
- Model-host and WASM-download failures produce errors without suggestions; retry after network recovery performs real inference. Unsupported Worker/WebAssembly, worker constructor/error, malformed output and 240-second timeout were tested with explicit defensive fault injection. These injections are not used in successful inference checks.
- Online scan followed by **fresh worker with all network disabled**: real inference succeeds from caches. Cached online reload also makes no further model-host requests. Offline app-shell startup is not implemented or claimed.
- Captured browser traffic: zero external requests before explicit scan; afterwards only model-file GET/HEAD from `huggingface.co` / `us.aws.cdn.hf.co`, no request bodies or source text in URLs. Local worker/factory/WASM bytes are downloaded from same-origin collection paths. Source flow inspected: no remote inference or credentials. Content not placed in localStorage/sessionStorage. Built text assets pass credential-pattern scan (not an exhaustive proof).
- Imported instruction-like content remains inert text; manual redaction and quoted JSON/TXT work. Unknown-token input (emoji) fails exact alignment visibly without applying or retaining stale exports.
- Desktop 1440 and narrow 390/320 CSS pixels: screenshots inspected, no document horizontal overflow, review/export controls work at narrow width; form labels and keyboard focus checked. Touch buttons have 44px minimum height. Physical phone engines and screen readers not tested.

Reports: `browser-validation.json`, `data-safety-validation.json`, `export-roundtrip-validation.json`, `asset-audit.json`; source tests in matching scripts. Only synthetic fixture content is committed.

## Publication

- Root `npm run predeploy`: 501 built, 0 failed, 0 skipped. Combined deploy includes root index, all 501 app indexes, exact new-app assets and the preserved shared WASM.
- Root `npm run deploy`: Published. GitHub Pages reports **built** for `c5c4641225139ce668100e7ef0d695d063564076`, matching remote gh-pages head. No duplicate build trigger or source configuration change was needed.
- Public app: https://xianghui.github.io/daily-app2/20261107-7/ . Public index, client/CSS, AI worker, WASM factory and shared WASM fetched and SHA-256 matched to tested production assets.
- Public real BERT/WASM inference on both fixture sets passed: 14/14 expected spans/types, actual redacted output changes. Fresh-worker inference with all network disabled passed at the public origin. Reviewed replacement invalidation/reapply and downloaded edited TXT match passed; narrow 390/320 layouts have no horizontal overflow. Captured remote traffic is GET/HEAD downloads only, with no content bodies.
- Public gallery renders 501 cards; AI Utilities first; STL Generators and Mini Games remain; new card appears once and search works.
- Reports: `combined-validation.json`, `pages-status.json`, `deployment-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, and downloaded public fixture audits/TXT. Source is committed on main and pushed after these checks; job completion requires matching local/remote main commits.

## Known limitations / not tested

English news-trained entity recognition is incomplete for research transcripts, indirect identifiers, contact details and unfamiliar names. Exact alignment refuses unknown/unusual tokens rather than guessing. Default masks do not retain person identity. User can accidentally reintroduce names via replacement text. No formal anonymization claim. No universal accuracy, minimum RAM benchmark, physical phone/WebGPU benchmark, offline app-shell navigation or assistive-technology certification. Main model revision is not pinned at runtime; source snapshot is recorded. Sensitive audit JSON deliberately includes originals.
