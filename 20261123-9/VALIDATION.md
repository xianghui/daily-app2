# Checkline Desk — observed validation

## Local production bundle

- Required React/Vite app `npm run predeploy` passed. Actual static production bundle served with `/daily-app2/20261123-9/` and immutable shared worker/factory/WASM paths.
- Actual quantized MiniLM inference in Chrome, GPU disabled, on two materially different synthetic batches: library intake **4/4** intended profile matches; equipment labels **4/4**. Not universal accuracy. Both ISBN and retail/Luhn workflow outputs differ with real inferred profile selection; no mocked model supplies successful suggestions.
- Library: reviewed unchanged codes yield 2 valid / 2 blocked; one checksum failure passes format-only checks. Equipment: 1 valid / 3 blocked; two checksum failures pass format-only checks. Explicit repair buttons, renewed approvals and reapply yield 4 valid records in each fixture. Originals remain unchanged.
- Negation/instruction-like context selects `books` despite “Not a book ISBN”; remains pending, then held. Demonstrates unsuitable nearest-neighbor retrieval, not safe automatic classification. No tool authority, credentials or external actions derive from notes.
- Generated 1,000 complete and single-missing-digit cases, independently checked in Python with separate ISBN equivalent modulo-11 identity, GTIN final-digit calculation and Luhn lookup-table implementation. Validity and entire candidate sets match (`core-validation.json`, `artifact-validation.json`). Known ISBN X, normalization, invalid length/X and multiple missing digits included.
- Maximum 8 profiles/24 records/32 real embeddings in eight chunks; complete source/audit JSON reimport, 24 valid release rows. Separate original-input and 16 MB audit-import bounds.
- Actual reviewed downloads independently parsed with Python CSV/JSON and embedded Markdown audit parsing: all records retained, current repairs/holds/scheme edits reflected, leading zeros and exact identifier strings survive; multiline quoted formula-like notes safely escaped in CSV and lossless in JSON. Clipboard action exercised.
- Profile/value edits reset approval, every review edit invalidates exports, undo restores prior review, held/blocked records never enter valid-only releases. Approve/hold required for every row before applying.
- Actual offline fresh-worker inference with all network disabled succeeds after online warming in the same open page. No cold offline navigation/reload claim. Actual model-load cancellation with delayed weight response followed by successful real retry.
- Fault-injected defensive tests: model network failure and actual retry, unavailable WASM, worker download abort, module-worker construction failure, malformed vectors/envelope, worker error, accelerated 180-second timeout, late message after cancel/input change. No fake outputs. Delayed file reads and worker-source fetches cannot overwrite new source. Superseded malformed old worker cannot overwrite newer real inference.
- Request audit from initial bundle startup through inference: no model requests before explicit load; only GET static/model downloads with no body or source-content URLs. Reports remove CDN signed query values. Built app inspected for remote integrations and credential patterns: none. Pattern scan alone is not exhaustive security proof.
- 1440/390/320px widths: no horizontal overflow; input labels, keyboard focus and ≥44px controls checked; normal-viewport hero/review/results screenshots inspected. No uncaught browser errors.

## Combined collection

Root inline script compiled with `new Function`; exactly one newest `ai-utility` entry; all **813** previous entries preserved. Gallery rendered **814** cards with AI Utilities before original STL/Game categories and working search/link. Root predeploy: 814 built, zero failures/skips; assembled size **999,867,068 bytes**, below unchanged 1,000,000,000 guard. No new legacy sharing rules. Full workflow rerun against assembled production directory before publishing; see assembled reports.

## Limitations / untested

Physical phones, other browsers, low-memory devices, cold offline navigation/reload, real catalog import tools and identifier assignment/authenticity are not tested. Checksums are not source truth or security credentials. Some multi-digit/transposition errors remain undetected. CSV columns require text import to preserve leading zeros. Tiny semantic fixtures are not model-quality guarantees. No paid provider, content uploads, remote edits or announcements.

Public verification results are recorded separately in `publication-status.json`, `public-asset-audit.json`, and public browser/gallery/artifact reports after a matching Pages deployment.

## Public verification — passed

Matching Pages commit `54ea83eb898623e0dbacd7a55cb98671a8e7dc39` is built; workflow 45087101906 succeeded. Seven gallery/app/JS/CSS/worker/factory/WASM assets byte-match assembled output. Full public real-model workflow, both 4/4 fixtures, explicit repairs, edited/held outputs, 24-record maximum, fresh-worker offline inference, privacy/network and responsive checks passed; all downloaded artifacts parsed independently. Public gallery retains all 814 cards and earlier categories. See public reports for observed requests/results; no untested-device or identifier-authenticity assurance is implied.
