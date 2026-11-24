# Observed validation

## Local production bundle

- React + Vite `npm run predeploy` passed. Real installed Chrome, headless, CPU WASM inference (GPU disabled).
- Two materially different synthetic batches: **6/6 intended asset contracts retrieved**, versus 2/6 if always choosing the first supplied contract. An additional materially different laboratory/warehouse/conference corpus retrieved 3/3 intended contracts and detected its same-size changed loading-bay instruction. Tiny seeded examples only, not a general accuracy estimate. Negation probe selected intended `locale`; difficult real notes remain unvalidated.
- Website release: 3 records, 2 verified, 1 same-length digest mismatch. Visitor kiosk: 3 records, 1 verified, 1 same-length mismatch, 1 changed-length mismatch. Expected SHA-256 values independently generated using Python hashlib.
- Same raw text with only context changed: AI selected `style` then `locale`; applied output changed from ready `/assets/theme.css` to blocked `/assets/fr.json`.
- All 24 records processed in chunks; all originals retained, 8 size-only false passes observed, duplicate ready paths blocked after first. Source audit JSON reimport restores all originals.
- Human approval required; contract/text editing renews approval, every edit disables prior exports. Undo/hold/copy exercised. Multiline accented/quoted text and formula-like multiline notes survive actual JSON/CSV/Markdown downloads. Mismatches are excluded from verified manifests.
- **522 independent artifact assertions** with Python csv/json/hashlib/base64 passed on local downloads (including the separate cross-domain corpus); checks include every original/reviewed record, status, byte count, digest, ready manifest SRI and proper formula escaping. Core suite: 24 assertions including standard empty/abc, Unicode, combining marks, BOM, CR/LF byte vectors, malformed embeddings, hard limits and pending review rejection.
- Actual fresh-worker inference succeeded with network fully offline in the warmed open page. Cold offline startup unsupported, not claimed.
- Four additional asynchronous checks passed: real model-download failure followed by successful real retry, delayed Web Crypto hashes after review changes, delayed hashes after source changes, and delayed File.text import after source changes.
- Ten defensive scenarios passed: worker fetch abort, real model-host abort, no Worker/WebAssembly, worker construction error, worker error, malformed result, timeout, stale message after source change, cancellation during delayed worker fetch. Successful AI cases do not use injected vectors or fallback.
- Invalid/empty/oversized JSON, 25 records, malformed contract hashes, wrong raw type, unsupported import format and >4 MB import rejected visibly. Cancel then real retry passed.
- Full request audit: no model requests before explicit run; downloads only (GET, no request bodies); no source content in URLs; no content uploads. No credentials/provider integrations in source; built-asset credential pattern scan included in asset audits.
- Desktop 1440 px and narrow 390/320 px screenshots; no document horizontal overflow, labels on every input/select/textarea, visible controls ≥44 px. Desktop and 320 px screenshots visually inspected.

## Collection/public checks

Combined root predeploy: 858 apps, zero failed/skipped; 999,634,261 bytes below unchanged 1,000,000,000-byte guard. Gallery inline scripts compile, new entry appears exactly once, every older entry/category survives, all 858 cards render with no narrow-phone overflow. Seven exact assembled asset matches include new shell/CSS/JS, shared worker/factory/WASM and gallery. Byte-identical deploy-only geometry reuse for 20261106-3 → 20261028-24 removes 541,470 duplicate bytes while retaining compatibility URLs and original source builds. Real legacy PNG/JPEG/ASCII/binary imports and checked closed/manifold STL exports pass.

The assembled production bundle also passed the full real-AI browser suite and 473 independent artifact assertions. Public release verified: Pages reports matching commit `2c2641f1b8a5e14f9bcd63e1da7f4be2ae72da7a` built; workflow `45488102632` succeeded. Seven exact public asset matches passed. Public full browser suite reran real inference, 24-record batching, changed-context impact, fresh-worker fully offline inference, review/edit/hold/undo, clipboard/exports, input limits/privacy and 1440/390/320 px layout checks. The separate cross-domain corpus also passed real public inference (3/3) and its changed-byte witness. Python independently parsed public artifacts and passed **522 assertions**. All 858 public gallery cards/categories and affected legacy geometry/import/export paths passed. No private data or credentials used.

## Not tested / limitations

Physical phones, other browser engines, cold offline startup, large binary assets, original file encodings, cryptographic authenticity of user references, adversarial semantic retrieval and real deployments were not tested. Hashes only compare exact supplied strings to supplied references. No external writes or sending are part of this utility.
