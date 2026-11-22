# Observed validation — Chunk Harbor

## Local production app

- `npm run predeploy` passed: actual Vite production bundle, not a development-only worker path.
- Real MiniLM q8 inference in Chrome with GPU disabled: **6/6** simple labels for Report & photograph and **6/6** for Audio & handbook. No mocked model on successful paths. These tiny fixtures do not establish general accuracy.
- Both fixtures have expected size 1,800 bytes, unique received 1,700 and missing 100; first repeats 800 logged bytes, second 100. Capped-sum baseline implies both files complete; exact union finds one gap-free file. Missing worksheet: report bytes=600-699; handbook bytes=300-399.
- `core-test.mjs`: 1,000 independent randomized byte-array coverage oracles passed for unique/missing/repeated/overlap bytes, baseline totals and all source witnesses. Empty-file coverage, adjacency, nested/repeated ranges, invalid bounds/IDs/fields, review/hold/schema and maximum-envelope checks passed.
- Real 8-file/32-part batch: 40 embeddings in ten chunks, 6,400,000,000 logged bytes; all 32 original records retained in audits. Every file and missing range is retained. Maximum field-length source/audit envelope round-trip validated by core test.
- Unknown/negated/instruction-like note still selects a nearest file; its decision stays pending and a human hold withholds the whole worksheet. Similarity is not identity proof.
- Review edits, multiline notes, undo, explicit holds, identity-change reapproval, invalidated exports, out-of-bounds reviewed match rejection, clipboard and audit reimport passed. Edited identity changes computed unique/missing bytes.
- Actual downloaded JSON/CSV/Ranges CSV/Markdown reopened with independent Python parsers. Every original part, reviewed assignment, edited multiline quoted/formula-like note, file, missing range and byte identity survived. Inclusive range endpoints independently checked. Eight audit variants checked, including maximum batch and holds.
- Network capture from production startup: no model-host requests before explicit load; all observed requests were public-file GETs without bodies or fixture text in URLs. Signed CDN query values are not persisted in reports. Built text assets scanned for credential patterns; integration inspected for provider/key/upload calls (a pattern scan is not exhaustive proof).
- After online warming, all networking disabled and a **fresh worker** performed another real inference in the already-open page. Cold offline navigation/reload is untested and not claimed.
- Cold model-download progress/cancel/real retry passed. Asynchronous file-read and worker-source-fetch stale-result races passed.
- Defensive tests: model-network abort + real retry; missing WebAssembly; worker-source abort; unsupported module-worker constructor; malformed vectors and envelope; 180-second timeout via injected timer; worker error; late response after cancel and after input change. Every failure produced no invented output, and late stale messages were ignored. Only defensive tests inject faults.
- Invalid/empty/oversized JSON and unsupported/oversized imports blocked. Desktop 1440px and narrow 390px/320px checked for no horizontal overflow, associated labels, focus and ≥44px visible touch controls. Hero/review/results screenshots captured; representative desktop/phone screenshots visually inspected.

## Publication checks

Combined-site assembly, unchanged 1 GB guard, shared-runtime hashes, all inline gallery script compilation, unique AI-utility entry and preserved old entries/categories are checked by `assembly-test.py`, `bundle-audit.py`, `gallery-syntax.cjs` and `gallery-test.cjs`. Assembled/public browser and asset results are recorded separately; publication status is only marked complete after actual public inference and byte comparisons.

## Not tested / limitations

Physical phones, non-Chrome browsers, low-memory devices, cold offline startup, real user datasets and arbitrary-language semantic accuracy are untested. No checksum/content/assembly/durability validation, actual file transfer, storage integration or performance benchmark is performed. One fixed file version and trustworthy received-range metadata are prerequisites. Model upstream revision is unpinned. No universal completeness/integrity or accuracy claim.

The initial local test server mapped Vite URLs incorrectly and returned asset 404s; the harness was corrected to serve production dist trees at their deployment bases. The complete local and assembled real-AI suites subsequently passed. The assembled 808-card site occupies 999,895,949 bytes, below the unchanged 1,000,000,000-byte guard; shared assets byte-match and all existing gallery entries are unchanged.

## Public release verified


Public release verified: matching Pages `842aeba5424bff0526ff47fcc923551a8d111f13` and workflow `45053419944` succeeded. Nine public gallery/app/runtime assets byte-match assembled output; both public real-AI fixtures (12/12 simple file labels), full reviewed/export/maximum-batch/offline/privacy suite, independent artifact parsing and all 808 gallery cards passed. Combined size 999,895,949 bytes remains below the unchanged 1 GB guard. Unrelated pre-existing recovery work is preserved and excluded from this release commit. No digest sent.

The complete public production-browser suite also passed maximum batching, review/undo/holds, export invalidation, out-of-bounds blocking, downloaded artifact parsing, clipboard, invalid inputs, cancellation/retry, fresh-worker fully offline inference, responsive layouts and GET-only privacy checks. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json` and `publication-status.json`.
