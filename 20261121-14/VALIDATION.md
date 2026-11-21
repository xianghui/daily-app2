# Buffer Folio — observed validation

Production Vite bundle tested in real headless desktop Chrome on this machine. No mocked successful inference or fake fallback. Model/runtime protocol and hashes recorded in runtime-dependency-audit.json. Publication checks are appended after combined assembly and public verification.

## Actual inference and task quality
- Both distinct synthetic workflows ran actual quantized MiniLM WASM inference. Service desk (access vs billing) and Workshop jobs (bicycle vs clothing) each matched all 12 supplied service keys: **24/24 on these easy examples**, not general accuracy.
- Calibration radii: service desk 4/8 minutes; workshop 7/6 minutes, n=4/group, alpha=.2, k=4. Each evaluation set had one finite hit out of two; the exact point-only baseline had 0/2. These are deliberately tiny checks, not evidence of target coverage or a quality claim.
- Real negation challenge “This is not a password reset or login issue. Refund the invoice payment.” incorrectly selected Access (0), intended Billing (1). Mandatory review/hold remains essential. The model cannot verify group identity, independence, exchangeability or training provenance.
- 1,518 independent rank-oracle cases (n=0…32, alpha=.05….50) plus known values, small-sample unbounded handling, validation, row conservation and outcome isolation passed in core-test.mjs. Evaluation outcome changed to 999 without changing either calibration radius.

## Workflow / artifacts
- Every source needs approval/hold and explicit assumptions affirmation. Predicted-minute edits reset review; apply/export use edited data, while originals remain unchanged. Notes retain quotes, commas and newlines. Holds, undo, invalidated export snapshots and insufficient calibration tested.
- Maximum 32 records + 2 service definitions ran actual inference across nine chunks. All 32 originals/reviews survived JSON export and source-only audit reimport. A separate real maximum test also processed all 32 records + 4 definitions = 36 texts / nine chunks; all records survived export/reimport, and bad/oversized files were rejected.
- Browser-downloaded JSON/CSV/Markdown and clipboard worksheet were exercised. Independent Python csv/json parsing verifies current endpoints, all source IDs, numeric edits and leading formula-like multiline escaping. JSON keeps the original string losslessly; CSV prepends an apostrophe for spreadsheet safety.
- Invalid/empty/non-JSON/oversized text, unsupported file format, duplicate IDs, invalid partition/alpha and nonfinite numeric values rejected. Genuine inference failures leave no recommendations.

## Runtime, privacy and defensive paths
- No model host requests before explicit loading. Captured external requests were static GET downloads with no request bodies or source content in URLs. Public audit records preserve host/path/query-key names only, never CDN signed query values. No remote provider integration, keys, analytics or content storage in source. Built-text credential-pattern scan passed; this scan alone is not exhaustive proof.
- Fresh-worker real inference passed with **all networking blocked in an already-open warmed page**. Offline navigation/reload/startup is not claimed. Cache eviction/private modes can redownload.
- Cold download progress, cancellation before completion and actual model retry passed. Network abort/recovery, unavailable WASM/worker support, worker download/error, malformed vectors/envelope, timeout and late cancel/input messages tested. Fault injection is only for defensive paths. Separate stale-worker test injected an old run's error after a newer real result; current results and errors stayed unchanged.
- Device requirement is WASM SIMD/module workers/secure context, no WebGPU. Physical phones, other browser engines and low-memory devices remain unverified. First download≈23 MB model/tokenizer +27 MB CPU runtime, shown before loading.

## Layout and collection
- Desktop 1440 and narrow 390/320 CSS px: no horizontal overflow, labeled fields, ≥44px standard action controls, large checkbox label and desktop/mobile input/review/results screenshots. Normal viewport screenshots inspected. An initial missing global-style copy caused a 320px import-control overflow; fixed, rebuilt and full workflow rerun passed.
- New gallery entry exactly once as ai-utility, all **770** prior entries preserved, 771 total, AI Utilities first, legacy STL/Mini Games sections and search intact; every inline script compiled via Node new Function.
- Combined deployment conserves the existing 1 GB guard. Byte-identical Manifold sharing extends to 20261028-30 → 20261028-24, without source build edits. Legacy source worker/import/export ran, then its expected shared-path assertion failed because the source server intentionally serves original, non-deduplicated assets. The authoritative shared-path check is against the assembled deployment, recorded below; no inference or app defect was hidden by that diagnostic failure.

## Assembled deployment verification
- ROOT predeploy: 771 builds/copied apps, zero failures/skips. Assembled size **999,536,431 bytes**, below unchanged 1,000,000,000-byte conservative guard; no older app removed.
- Served assembled production tree: both real neural fixtures, reviewed edits/holds/undo, downloaded artifacts, maximum batching, fully offline warmed-page fresh-worker inference, phone layouts and privacy checks all passed again. Nine exact gallery/app/AI worker/factory/WASM asset byte matches passed.
- Affected legacy 20261028-30: actual worker uses shared 20261028-24 WASM; PNG import and binary STL import both produced independently parsed closed oriented positive-volume STL exports with matching geometry fingerprint. Source builds unchanged; compatibility JS URLs retained.
- Keyboard focus/visible outline, logical navigation and Enter-started actual inference passed. Ten additional schema boundary cases rejected. Gallery rendered all 771 cards, old categories intact, new app search and old game search passed.

## Public release verification

Matching Pages gh-pages commit `505f1bb9747c27c75f22ad3897ad02d850ebd545` reached **built**, workflow `44869558672` succeeded. Public gallery rendered all 771 preserved cards/categories. Nine public gallery/app/AI asset byte matches and four affected legacy byte matches passed. Both real public AI fixtures, all reviewed downloads/clipboard/undo/holds/independent evaluation/max-batch/privacy/layout checks and fresh-worker fully offline inference in a warmed page passed. Public older-app PNG/STL import and independently valid mesh export passed. Downloaded public artifacts were independently reparsed; credential-pattern/source-flow checks passed. No fake inference, no digest.
