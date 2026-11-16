# Rate Terrace — observed validation (2026-11-16)

## Production-bundle Chrome CPU checks

Real shared MiniLM WASM worker (not a mock) matched **12/12** known-answer service links across two materially different synthetic inputs: print/packing versus audio/photo. Print fitted unit rates were `[13.5,13.5,9]` and `[8,8,8]`, weighted squared adjustment **5** versus running-min baseline **16**. Studio fitted rates were `[60,52.5,52.5]` and `[40,30,20]`, adjustment **12.5** versus baseline **25**. These are fixture outcomes/adjustment costs, not universal matching accuracy, revenue or measured savings.

Independent core oracle enumerated all contiguous partitions for **420** small weighted sequences: PAVA matched the minimum feasible squared adjustment every time and obeyed non-increasing rates. Weighted known answer `[12,14,9]` with weights `[1,3,1]` pooled to `[13.5,13.5,9]`, SSE 3 versus baseline 12.

Full ready batch: **8 services / 24 quotes / 32 embedded texts**, four-text chunks. All 24 exact-description fixture links matched, all tiers survived; fitted SSE 16 versus baseline 32. Exported audit reimported at the maximum record count, renewing AI and leaving approvals pending. Exact-description fixture matching is easier than paraphrase matching and is not an accuracy estimate.

`browser-test.cjs`, `core-test.mjs`, `max-ready-test.cjs`, `artifact-test.py` and reports retain reproducible checks. Tests ran against built `dist`, then the root assembled production bundle. Local harness initially needed its URL translation corrected (`daily-app2` public path versus `daily_app2` disk directory and per-app `dist`); no application fallback was added.

## Review, artifacts, privacy and failure checks

- Mandatory approval; edits to service, quantity, rate and weight; edits reset approval; note edits invalidate exports; pending decisions block application; holds block fitting but remain exportable; undo restores a review. Duplicate tiers and insufficient service data block a full fit.
- Downloaded JSON, audit CSV, Rates CSV and Markdown, and clipboard copy. Python's independent CSV parser verifies all records, exact fitted numeric rates and multiline quoted/formula-like notes. Formula text is safely apostrophe-prefixed while JSON preserves exact review text. Original inputs survive reviewed numeric edits unchanged. Max 24-record audit CSV/JSON preserves the last multiline note. Downloaded max-ready Rates CSV parsed with 24 rows.
- Empty/malformed/oversized JSON, duplicate IDs, zero weight, numeric strings, out-of-range reviewed numbers, unsupported files and excessive descriptions fail without fabricated output.
- Successful online caching → **all network disabled** → a fresh worker performed real inference within the already-open warmed page. Offline navigation/reload not claimed/tested. No WebGPU required. Other physical devices and browsers unverified.
- Cancel + real retry, source changes during inference and slow-file-import race prove invalidation. Defensive fault injection separately covers model-host network abort + successful real retry, no WebAssembly, worker download failure, unsupported workers, malformed vectors, malformed message envelopes, timeout and worker error. These injected tests are not evidence for AI functionality; successful fixture tests use real inference.
- Network audit from navigation through inference: no model download before explicit Load, only GET file downloads, no content in bodies/fixture URLs, only same-origin and documented model hosts. Persisted reports strip CDN query values. All served app/worker/factory/WASM bytes audited against combined output. Built text credential-pattern scan passed; source has no external provider integration. A pattern scan is not a universal secret detector.
- Unrelated instruction-like text still receives a nearest candidate; holding it blocks fitting. No command/tool authority exists in the model pathway. Mandatory human service review is essential.
- 1440/390/320px viewport screenshots inspected for input, review and results; no horizontal overflow, labeled fields, visible focus and ≥44px button targets. Keyboard tab from source reaches import. No physical-phone or screen-reader test performed.

## Gallery, root build and changed legacy runtime

All inline root scripts compiled with Node `new Function`. Exactly one new `20261116-11` AI utility; **707 prior entries preserved** in original order, including pre-existing working-tree additions. AI Utilities remains first; old STL/Mini Games categories, search and narrow layouts render.

Initial combined predeploy exceeded the conservative 1,000,000,000-byte guard by 75,260 bytes. Extended existing deploy-only byte-identical Manifold reuse to `20261030-25`, pointing to existing immutable `20261028-24` with query-versioned worker/shell references. Source builds and legacy JS URLs remain unchanged. No old app/category removed; no guard increase. Geometry regression exercises real default/image/mesh generation and parses actual binary STL downloads before publication. See geometry-regression.json and deploy/runtime-deduplication.json.

Public verification and publication commit details are recorded in publication-status.json after deployment. Do not infer working public inference from a branch push alone.

## Known limitations

Nearest neural match can be wrong or unrelated. Similar descriptions do not guarantee identical specifications. Assumed one currency and comparable units are human responsibilities. PAVA minimizes rate adjustments, not profit or forecast error. No uncertainty estimates, rounding policy, interpolation/extrapolation, margin floor, or total-order price-cliff constraint. Always review before using the worksheet outside the app.

Additional race checks: a deliberately late old worker reply could not replace a completed newer run (`newer-run-validation.json`); delayed worker-source downloads cannot start inference after source changes (`download-stale-validation.json`). Fault injection only; real AI remains independently tested.

## Public publication result

Published combined site to gh-pages `ce497285cda0796b0f6bd24ed54d020d69ec24c9`; GitHub Pages workflow 43790582615 completed successfully and Pages API reports this exact commit built. Live URL: https://xianghui.github.io/daily-app2/20261116-11/ . Full real-AI workflow suite passed again publicly (12/12 simple fixture links, review/exports/cancel/retry/input guards and fully offline fresh-worker inference). Public full ready batch passed with 8 services/24 quotes and renewed audit import. All eight app/dependency assets byte-matched combined output. Public gallery rendered 708 entries and preserved legacy categories/search. Public affected-legacy default/image/mesh geometry and parsed STL exports passed. Independent artifact parsing passed again on actual public downloads. No digest sent. Pre-existing unrelated README/gallery edits and untracked old app directories are preserved but excluded from this run’s source commit.

The assembled test server needed restarting after root deploy recreated its working directory; a stale test-server directory caused connection resets, resolved without application changes. No publish or AI check relies on those failed harness requests.
