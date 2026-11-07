# Validation — 2026-11-07

## Observed production-bundle local results

- `npm run predeploy` passed; locally bundled module worker/factory and shared same-origin WASM load at the production base.
- Real MiniLM q8 CPU inference in real Chrome: Office records linked P1/P2/P3; Community center linked C1/C2/C3, 6/6 expected links. Office outputs 2 due review, 1 held. Community outputs 1 due, 1 retain, 1 held. These are tiny synthetic fixtures, not legal accuracy or general performance claims. All source-linked similarity vectors came from real inference.
- 12 policies + 12 records, six embedding chunks: all records retained, 6 original holds protected, 6 due candidates, August 31 + six months correctly clamps to February 28.
- Fresh-worker inference with context networking fully offline passed after successful online inference. Cached online reload made no additional remote requests. Offline app-shell reload is untested and not promised.
- Review/edit/reject/undo, added hold, immutable original hold, export invalidation, apply, copied JSON, actual downloaded JSON/CSV, quoted commas/newlines and spreadsheet formula protection passed. Independent Python parser checks recorded separately.
- Empty, malformed CSV, duplicate IDs, oversized text/files, 13 rows, invalid date/hold, unsupported format, invalid floor and high-floor deferral passed.
- Model download failure/retry, download cancellation/retry, WASM failure/retry, cancel/retry, input-change invalidation, delayed file reads and delayed cancelled results passed. Injected unsupported runtime/Worker, malformed vectors, timeout, worker construction/crash were rejected without fake results. Fault injection used only defensive checks, not successful inference assertions.
- Core tests: leap-year/month-end, future-close state, original/additional holds (including unassigned), valid policy/month limits, malformed/unnormalized vectors, incomplete/unreviewed export rejection.
- Production page request audit: no remote requests before explicit load. Remote requests only public static model GET/HEAD, no request bodies or user content. No provider API integration. Built text assets scanned for common credential patterns: no matches; scan alone is not proof.
- 1440px desktop, 390px and 320px emulated-phone layouts, input/result/export actions, labels, keyboard focus, 44px controls and no horizontal overflow passed. Screenshots retained and visually reviewed. Physical phones, Firefox/Safari, screen readers, offline navigation and low-memory performance not tested.

## Evidence

`browser-validation.json`, `browser-test.log`, `core-validation.json`, `export-roundtrip-validation.json`, `asset-audit.json`, `desktop.png`, `phone-320.png`, `phone-390.png` and actual exported synthetic artifacts.

## Publication

Published and independently verified at https://xianghui.github.io/daily-app2/20261107-14/ . GitHub Pages build/deploy succeeded for gh-pages commit `209afe4b68dd973d27bede9dc9d39911c4d35519`. All seven production app files plus shared WASM fetched publicly and matched local SHA-256; the root public gallery rendered all 507 apps with AI Utilities first and Retention Desk exactly once. The complete browser suite was rerun at the public URL: real 6/6 fixture links, 12-record batching/holds/month-end, fresh-worker offline inference, review/undo/copy/downloads, cancellation/stale protection, defensive failures/retries and narrow layouts all passed. Public artifacts independently parsed again. See `deployment-validation.json`, `public-gallery-validation.json` and `public-evidence/`. No physical-device, non-Chrome, offline-navigation or legal-validity claims.
