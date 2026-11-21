# Observed validation — Evidence Walk

## Local production bundle

- `npm run predeploy` passed. React + Vite production base `/daily-app2/20261121-23/`; shared same-origin module worker and WASM paths inspected/hash-recorded.
- Desktop real Chrome, GPU disabled: actual q8 MiniLM CPU inference on **Packaging checks** and **Website checks** matched all **12/12 supplied known-answer protocol assignments**. These are tiny synthetic fixtures, not a general accuracy claim.
- Packaging: lower evidence at A2 / 20 tested; higher evidence at B1 / 10. Website: higher at L1 / 10; lower at C2 / 20. Fixed comparison reaches 30 in each stream; observed count differences are 10/20 and 20/10. All 60 tested units per fixture and all six records retained, including post-boundary observations. These are retrospective count comparisons, not measured saved time.
- Actual negation challenge **failed**: notes explicitly naming barcode checks while negating seal tests mapped to `seal` rather than `print`. UI/README require human verification and provide holds. Prompt-like text remained ordinary source data and could not request credentials or invoke tools.
- Maximum six protocols + 32 batches (38 texts, ten real inference chunks): all 32 known exact-description assignments matched, 320 tested units and every trace row conserved; downloaded audit reimported.
- 300 deterministic checks, including independent enumeration of every 8-observation binary path (256), cumulative likelihood equality, first-stop freezing, fixed-prefix counts, hold gating, invalid parameters/counts/IDs/context and malformed vectors.

## Review / actual artifacts / failure tests

- All rows require approval or hold. Count/protocol edits reset approval. Any edit invalidates exports, undo restores prior review, original text unchanged. Invalid reviewed counts cannot apply. Holds retain every record and suppress calculation.
- Real browser JSON/CSV/Markdown downloads independently parsed with Python. All source IDs and quantities survive. Edited counts, multiline quoted/comma note survive; CSV formula-leading text escaped, signed numeric likelihoods preserved. JSON audit round-trip retains original maximum batch. Clipboard contains current reviewed Markdown.
- Cold-download progress and real model weight request observed, cancellation during load, no output after cancellation, real retry succeeds. Warm retry after network recovery succeeds.
- Defensive injected checks: model download blocked, worker download blocked, WebAssembly unavailable, module worker constructor failure, worker error, malformed envelope/vectors, accelerated timeout, late responses after cancel/input edit. No fabricated recommendations or exports. A delayed old mocked failure could not replace a newer **real** Website inference.
- Empty/invalid/null/oversized JSON, unsupported CSV and >2 MB import rejected. File/worker asynchronous reads use run identity guards.

## Privacy / offline / responsive

- Captured production-bundle requests from initial navigation through inference; no model-host request before explicit Load. Static GET downloads only, no request bodies/content upload. Persisted reports strip CDN signed query values. Built text asset credential-pattern scan clean; source integrations inspected (no providers, secrets, telemetry or content persistence).
- After online warming, switched the entire browser context offline and ran real inference in a **fresh worker** successfully. This does not establish offline startup/reload; those are not claimed. Cache eviction/storage denial may require downloads.
- 1440, 390 and 320 px browser widths: no horizontal overflow; all form controls have labels, visible focus and ≥44 px interactive heights. Hero/review/results screenshots inspected. Physical phones, other engines, low-RAM devices and assistive-technology usability not tested.

## Assembly / publication

Root assembly, preserved gallery, 1 GB guard, older-app runtime sharing and public checks are recorded in the associated machine-readable reports and publication status. A source push alone is not completion. Publication is complete only after matching Pages build and public byte-matched assets plus real public inference pass.

Combined assembly: **999,630,306 bytes** under unchanged 1,000,000,000-byte guard; 780 gallery entries, all 779 earlier entries preserved and inline scripts compiled. Assembled production real inference/full workflow suite passed. Legacy `20261029-4` actually requested shared WASM and passed default/image/STL-import parsed exports plus portable design save; no runtime errors.

## Public release verified

Matching Pages commit `38f520465c9339282c67b9dc6eb96db8ab3ec471` reached built and workflow 44912546319 succeeded. Seven gallery/new-app/AI-runtime assets byte-matched assembled files. Both real default-model fixtures and the full review/edit/undo/hold/export/maximum-batch/offline/privacy/responsive suite passed on the public app. Public downloads were independently reparsed. All 780 gallery cards and old categories passed; affected older app public worker/image/STL imports, parsed STL exports, portable-design save and shared runtime bytes passed. See `publication-status.json`, `public-*-validation.json` and `artifact-validation.json`.
