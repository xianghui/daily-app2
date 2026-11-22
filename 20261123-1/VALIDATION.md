# Observed validation — TTL Harbor

## Local production bundle

- `npm run predeploy` passed.
- `node core-test.mjs`: both known-answer timelines and 500 independently enumerated quarter-second cache-fill histories passed, including zero TTL and returns to old. Strict schemas/invalid boundaries and hold/pending constraints passed.
- `node browser-test.cjs`: actual q8 MiniLM WASM CPU inference with GPU disabled matched **6/6 simple service notes** across two materially different synthetic scenarios. This is a small fixture outcome, not general accuracy. First scenario bounds `[4200,900,1800]` vs latest-old-TTL `[960,900,1800]`; baseline missed one planned-retirement risk. Second bounds `[2520,800,1500]`, including zero TTL and equality.
- Maximum source: 8 services, 32 records, 256 revisions, 40 actual embedding texts in 10 worker chunks. All 32 records and 224 old-revision witnesses survived reviewed exports/reimport. The max fixture’s numeric service names are not an identity-quality benchmark; identities were manually reviewed/corrected.
- Review/edit/reset approval, hold/undo, stale-export invalidation, clipboard and current JSON/CSV/Timeline CSV/Markdown downloads passed. Multiline quoted formula-like reviewer text survived guarded CSV and lossless JSON/Markdown. `python3 artifact-test.py` independently parses actual downloads and checks all records/revisions/witnesses.
- Actual fresh-worker inference passed with all network disabled in an already-open warmed page. No cold offline navigation claim.
- Desktop 1440 and phone widths 390/320 passed label/focus/touch/no-overflow checks; normal-viewport hero/review/results screenshots inspected. No physical mobile devices tested.
- Empty/invalid/oversized JSON, unsupported and oversized files passed error checks. Network failure followed by real retry, missing worker, unsupported runtime, worker error, timeout, malformed vectors/envelope and late cancelled/source-changed messages passed defensive tests. Successful inference is not mocked.
- Async file-read and worker-fetch races, late old worker during newer real inference, and cold model-download cancellation/real retry passed separate browser tests.
- Unknown/negated instruction-like source still selects a nearest service and remains pending; explicit hold withholds the worksheet. It is a model limitation, not a verified classification.
- Production request capture found only file GETs with no request body and no synthetic content in URLs. No model-host traffic before explicit load. Saved reports retain host/path/query-key names only, not signed CDN query values.

## Assembly / public release

Publication checks are recorded in `assembly-validation.json`, `bundle-audit.json`, gallery reports, `public-asset-validation.json`, public real-browser reports and `publication-status.json` once completed. Build success alone is not public inference verification.

Initial root assembly correctly refused 1,000,107,335 bytes under the unchanged 1 GB guard. Byte-identical deploy-only geometry reuse was extended to existing `20261029-15` (541,470 bytes), preserving its source build and old JS compatibility URLs. The existing shared host remains `20261028-24`. Old-app real worker/image/STL import/export checks must pass before release. Unrelated pre-existing recovery changes are preserved and excluded from this release.

Final local assembly passed all **805** gallery/app shells, preserved all 804 previously published entries/categories, compiled inline scripts, verified shared runtime hashes and app byte equality, and measured **999,566,055 bytes**, below the unchanged 1,000,000,000-byte guard. Built text-asset credential-pattern scan and integration review passed (not an exhaustive security guarantee). Both actual model fixtures/full workflow suite passed again on the assembled site. The old `20261029-15` app passed real shared-WASM worker generation, image import, confirmed STL import, independently parsed binary STL exports and portable design export with no page errors.

Public release verified: matching Pages `94d522f90c1a36ea9c4e1b1026c9e5267bbc2f44` and workflow `45042233816` succeeded. Nine public gallery/app/worker/factory/WASM assets byte-match assembled output. The public production browser passed both real MiniLM fixtures (6/6 simple identities), full maximum-batch/review/export/clipboard/offline/privacy/responsive suite, independent actual artifact parsing, and all 805 gallery cards. Public older-app shared-worker/image/STL regression and older asset byte audits passed. No digest sent. See `publication-status.json` and public reports.
