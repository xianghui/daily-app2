# Observed validation — Callout Loom / 20261128-22

## Production builds and assembly

- Individual `npm run predeploy` passed (React + Vite, exact `/daily-app2/20261128-22/` base).
- Root predeploy passed: **946 built, 0 failed, 0 skipped**. All 945 previous gallery entries remain unchanged and in order; new AI Utilities entry appears exactly once, newest first. Inline scripts compile with Node `new Function`; gallery browser rendering/search and category preservation passed.
- Combined site: **832,375,084 bytes**, below unchanged 1,000,000,000-byte guard; older immutable runtime dependencies preserved. No source-build/runtime dedupe rule was changed.
- Assembled app and all shared worker/factory/WASM assets passed HTTP byte-length and SHA-256 verification. Built JS/CSS credential-pattern scan found no matches; manual integration review finds no credential/remote-inference path.

## Actual AI (not injected)

Both fixture batches ran real MiniLM q8 feature extraction in installed desktop Chrome with GPU disabled, using production bundles and actual shared CPU WASM worker:

| Fixture | Expected / observed links | Baseline gap conflicts | Layout gap conflicts | Mean vertical move |
|---|---|---:|---:|---:|
| Workshop | WATER, MOTOR, FILTER, SCREEN / all matched | 3 | 0 | 23 px |
| Museum | POT, CLOCK, FOSSIL, PAINT / all matched | 3 | 0 | 20 px |

These are eight simple synthetic known answers, not a general accuracy claim. Negation challenge **failed**: WATER instead of intended MOTOR. Manual correction, approval and exported corrected source-preserving audit passed. Similarity is never presented as confidence.

Maximum batch ran 32 actual short embedding inputs in eight chunks (24 callouts + 8 landmarks); duplicate descriptions are not treated as uniquely identifiable. Reviewed maximum-batch export and source-only reimport succeeded. All records and held callouts remain in complete audits.

After successful online loading, tests disabled all network, terminated the previous worker, and performed another real inference in a **fresh worker in the same warmed page**. Passed. No fresh offline navigation claim. Model/runtime requests were GET downloads without request bodies, and no fixture source notes appeared in URLs. Saved network reports retain only origin/path, never signed query strings.

## Geometry, review and artifacts

- 120 seeded random weighted layouts compared with an independent half-pixel-grid dynamic program, not the app's PAVA algorithm. Continuous objective was never greater than the grid minimum; maximum sampled-grid excess was 0.9615384615281073 px²-weight (expected grid discretization).
- Checked page margins, fixed x column, all pair gaps, source-ID conservation, positive weights and output dimensions. Tall-label capacity overflow blocks SVG and blanks audit coordinates rather than discarding callouts.
- Actual browser-downloaded JSON/CSV/Markdown/SVG artifacts parsed with Python standard JSON/CSV/XML parsers. Browser DOMParser independently accepted exported XML. Current reviewed multiline quoted labels and `<&` text survived safely; spreadsheet-like reviewer text was escaped only in CSV. SVG titles retain exact label text, visible tspans contain the wrapped text, and held records are omitted only from SVG.
- Independently recomputed baseline pair-gap conflicts, weighted squared displacement and mean absolute move from the actual SVG rectangles, source coordinates and reviewed weights, matching displayed/exported values.
- Edited wording, link and numeric weight invalidated approvals/snapshots. Undo, hold, explicit review/apply, clipboard copy, maximum-audit reimport and blocked audit export passed. Original input data remains immutable.

## Defensive checks and UX

- Empty/malformed/oversized JSON, empty notes, excessive rows, duplicate IDs, off-canvas anchors, unsupported label glyphs, invalid numbers/weights, control characters, broken source/import formats and >1 MB file rejection passed before inference.
- Actual worker-download abort and model-host download abort each produced visible errors and no suggestions. Same-page recovery and genuine model retry passed.
- Cancellation while a real model-host request was pending, and initial worker-fetch cancellation, prevented late output. A newer actual fixture remained intact when an obsolete worker delivered an injected late error. Delayed file read could not overwrite newer example input.
- **Fault injection only for defensive paths:** missing Worker/WASM, worker constructor failure, worker error, malformed vectors, accelerated timeout and stale callbacks all failed visibly without fake recommendations.
- Production desktop 1440 px and narrow 390/320 px layouts: no horizontal page overflow, labeled controls, ≥44 px interactive controls, keyboard focus/export navigation and screenshots passed. Normal viewport screenshots inspected for desktop hero and narrow review/results. SVG preview intentionally scales down on phones; exported SVG retains original pixel dimensions.

Reports use `local-`, `assembled-` and (after hosting verification) `public-` prefixes. Core report: `core-validation.json`; byte provenance: `runtime-provenance.json`; gallery/source guard: `gallery-validation.json`.

## Limitations / not tested

No universal phone/browser inference certification; memory-constrained devices may fail. Not fresh offline navigation, background-image import, non-ASCII visible labels, crossing-free leaders, image recognition or arbitrary upstream model revisions. The app explicitly documents these limits. Semantic links always require review.

## Publication

Public hosting and source commit status are recorded in `publication-status.json`. A branch push alone is not treated as working public inference. The builder sends no digest.

### Public result

GitHub Pages commit `675e9b073a37272996ca991052eb23c3368692bd` reached **built**, workflow [46148239542](https://github.com/xianghui/daily-app2/actions/runs/46148239542) succeeded, and the new public app returned HTTP 200. All eight app/shared-asset hashes matched the assembled production build. The complete real-inference workflow, offline fresh-worker run, exports and independent metrics/XML/CSV assertions, defensive/recovery/model-cancel/input-guard/import-race suites and 946-entry gallery checks passed again at the public HTTPS URL. No digest was sent.
