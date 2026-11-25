# Observed validation

- Built production React/Vite bundle with `npm run predeploy`.
- Real browser, real MiniLM WASM CPU inference on pottery/astronomy and bakery/library batches: expected parent vectors `[root,root,a,b]` and `[root,root,p,q]` matched exactly, 8/8 decisions. Same-subject baseline matched only the initial root in each four-message fixture (2/8); these deliberately constructed tiny fixtures are not an accuracy benchmark.
- 24-message maximum batch ran six actual four-text chunks; originals/rows conserved. Offline fresh worker processed actual model inference after warming and terminating online worker; network blocked with Playwright offline mode.
- Review/edit/root/hold/undo, held-parent guard, pending-review guard, multiline notes, copied worksheet, real JSON/CSV/Markdown downloads and maximum audit reimport exercised. Python csv/json independently parsed downloads and checked original fields and escaping.
- Empty, malformed, null, unknown-field, oversized and invalid-date inputs blocked; unsupported file and oversized import errors visible. Core tests reject invalid/non-normalized vectors, prototype-like IDs, unknown/self/future parents and unresolved reviews.
- Defensive browser tests: actual worker/model download abort; injected missing Worker/WASM, constructor error, worker error, malformed vectors, accelerated timeout and late stale callback. Cancel during pending fetch and real cancellation/retry passed. Faults are tests only; successful runs use the unmodified real model.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal overflow, every form control labeled, visible controls at least 44px. Saved screenshots; physical mobile inference and other browser engines untested.
- Captured startup-through-inference requests: only GET downloads with no bodies; no user excerpt in request URLs; no model request before explicit start. Reports omit CDN signed query values. No remote provider integration or credentials. Static asset hashes compared separately.
- Offline cold navigation/reload not supported or tested. Real mailbox data, threading headers, authorship and quality on natural private conversations not tested.

Publication and assembled-site results are recorded in publication-status.json and assembled/public browser reports when completed. A branch push alone is not publication proof.

## Completed public verification

Combined root deployment succeeded for gh-pages `5c683ed690060b2083a3a064d080ff17d215c7f4`; workflow 45523792357 completed with success and deployment 8045384949 reports success. The legacy builds/latest API still reported errored for that same head, inconsistent with successful current-head build/deploy jobs, deployment status and live bytes. No redundant rebuild was requested. Public app, gallery, runtime worker/factory/WASM byte checks passed. Both real AI fixtures, maximum batches, offline fresh-worker inference, editable review/undo/hold, copy/download/reimport and 1440/390/320 layouts passed at the public URL. Independent Python parsing validated public JSON/CSV exports. The affected legacy geometry app loaded the shared binary and passed real STL import/export with preview signatures matching downloaded geometry. Combined assembled size: 999,619,791 bytes, below the unchanged 1 GB guard. All 862 apps assembled with zero failures/skips.
