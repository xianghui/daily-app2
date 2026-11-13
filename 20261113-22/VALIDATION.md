# Observed validation — 2026-11-13

## Production bundle, local CPU

`npm run predeploy` passed. Real default MiniLM q8 inference ran in desktop Chrome using WASM CPU with GPU disabled. No mocked success path.

- Library: actual `access, guidance, access, guidance` = 4/4 simple known-answer topics. Access mean importance 5 / performance 2.5, gap 2.5, target shortfall 1.5; **Focus first**. Guidance importance 2 / performance 1.5 = **Monitor**, despite being first in lowest-performance baseline. Both dimensions have n=2. This is a descriptive priority difference, not measured improvement.
- Repair desk: actual `updates, booking, updates, booking` = 4/4. Updates importance 4.5 / performance 1.5; weighted shortfall 23/9. Booking importance 2.5 / performance 4.5. Only updates is Focus first. Baseline and weighted ordering happen to agree here.
- These eight easy fixture links do not establish general accuracy. An unrelated instruction-like topic still received a nearest proposal, remained pending, and was held; no credentials or external actions exist. Negation and ambiguity are known semantic-matching limitations.
- 500 generated synthetic cases independently checked with Python Fraction arithmetic: means, paired gaps, weighted/unweighted target shortfalls, threshold boundaries, sample counts, below-target counts, baseline/weighted ranking and no-evidence dimensions. A final regression additionally verified that trimmed respondent codes agree between duplicate detection and distinct-person counts.
- All 40 maximum-batch rows retained, real chunked inference executed, audit JSON reimport restored all originals with fresh pending decisions. Review edits/undo, duplicate respondent/dimension blocking, invalid ratings, target equality, holds, full held batches and input schema rejection passed.
- Actual downloaded JSON/CSV/Markdown independently parsed; every row, reviewed rating, quoted comma/newline, multiline owner/follow-up and formula-like escaping survived. Clipboard content checked; any review edit disabled stale exports.
- Cancellation/retry, input change during processing, cold model-download cancellation with no late results, offline fresh-worker real inference passed. Offline scope is an already-open warmed page, NOT reload/startup.
- Fault injection tested network/model-download abort with real retry, worker download failure, unsupported module workers, worker errors, malformed vectors and accelerated 180-second timeout. All produced actionable errors and no fake review/export. These are defensive tests, not inference evidence.
- Request audit: no model-host traffic before explicit loading; all observed requests were GET without body to documented static/model hosts. Content is absent from request URLs. Built text asset credential-pattern scan passed; source has no remote inference/key integration. Runtime factory byte-matched, shared WASM byte-matched, correct production worker/runtime paths.
- Desktop 1440px and emulated 390/320px widths: no horizontal overflow, all input controls labelled, buttons ≥44px, keyboard focus exercised; input/review/results screenshots saved. This does not establish physical phone memory/latency or screen-reader compatibility.

Machine-readable reports: `browser-validation.json`, `defensive-validation.json`, `model-cancel-validation.json`, `oracle-validation.json`, `artifact-validation.json`, `asset-validation.json`. Local and public deployment checks are recorded separately below when complete.

## Limitations / untested

Physical mobile devices, other browser engines, cold offline navigation and representative survey accuracy are untested. Model host revision is not pinned. Initial downloads and storage availability vary. Ratings are descriptive ordinal-score means, no population or causal inference. Sample sizes can differ across dimensions. No service intervention or external action occurs.

## Published combined site

Root predeploy assembled all 647 gallery entries with zero failures; final combined source assets matched byte-for-byte. Gallery inline script compilation and preservation checks passed, including AI Utilities first, legacy categories and search. The final GitHub Pages commit `84afebd80ae69c3ccb470c4afbb8e4ecc87af056` reached **built**. All public app files, worker, factory and shared WASM byte-matched production, and the public gallery byte-matched the complete source gallery. The full public real-AI workflow suite passed again: both fixtures, review/edit/undo/holds, batching, cancellation/retry/stale input, offline fresh-worker inference, downloads/clipboard, input rejection and desktop/narrow-phone layout. The preserved 647-entry public gallery rendered and searched correctly. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-ui-validation.json` and `publication-status.json`.

A first publication was followed by a source correction for normalized respondent counts; the second combined deployment and all final public checks verify the corrected asset hash. No deployment configuration, earlier source tree or credentials were changed.
