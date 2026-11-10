# Observed validation — 2026-11-10

## Local production bundle

- `npm run predeploy` passed with React + Vite base `/daily-app2/20261110-21/`. Shared WASM byte-identical to installed runtime, checked SHA-256. Built text assets scanned for common secret patterns, no matches; this is not an exhaustive security proof.
- Real default MiniLM q8 WASM inference in installed headless desktop Chrome, not mocked: Print workshop 5/5 intended family links; Maker studio 5/5. These are two tiny synthetic fixtures, **not general accuracy claims**. Both have zero literal full-family-title hits, a narrow computed string-match baseline.
- Source evidence and actual scores recorded in `browser-validation.json`. Negated/unrelated instruction-like inputs were processed as text, received nearest families and could be held; semantic inference does not detect irrelevance reliably.
- Exact optimizer checked against independent exhaustive permutation oracle in 600 generated 1–7-job cases, including asymmetric costs, zero costs, conservation, baseline bound and confirmation/hold blockers (`core-validation.json`). Hard maximum 12-job chunked inference and audit round-trip exercised.
- Review pending guard, changed family resetting approval, undo, holds, unconfirmed scope, snapshot invalidation, copied current Markdown and real downloaded JSON/CSV/Markdown passed. Independent Python parser verifies complete source records, edits, quoted/multiline/formula-leading notes and every transition/cumulative minute (`artifact-validation.json`).
- Real cached model inference passed offline with a fresh worker in the same open page. Offline reload/navigation and cache eviction are not claimed.
- Production request capture: only GET requests with no request bodies; hosts recorded in browser report; no model-host request before explicit load. No content-upload implementation exists. Model/runtime download traffic only.
- Empty/malformed/oversized input, invalid schema, cancellation, input replacement during a run, retry and export invalidation passed. Network abort/recovery used actual model inference on retry. Worker download failure, unavailable worker/runtime, malformed vectors, worker error and timeout defensive checks use fault injection only, never as successful inference (`defensive-validation.json`). Failures leave no recommendations/export snapshot.
- Responsive screenshots at 1440, 390 and 320 CSS pixels: no horizontal overflow. Labels, source/results/edit/export controls exercised. Physical phones, touch hardware and non-Chrome browsers not tested.

## Publication

Public combined-site verification is recorded separately after deployment. Build/branch push alone does not prove a working public app. Public status must be checked before this utility is counted complete.

The first assembled-browser run overlapped root deployment's deploy-folder cleanup and correctly reported worker download failure. Retested only after assembly completed; this is not treated as a successful inference check.

Additional checks: six families × 12 jobs at maximum 10,000-minute off-diagonal costs yielded the known 50,000-minute optimum. Delayed file-read replacement, rejected CSV/oversize uploads, cancellation during a delayed worker-source download followed by real retry, and actual worker with WebAssembly disabled are tested in `stale-import-test.cjs`. A Playwright route double-handling race in the first test-harness version was fixed before rerunning; it was not an app inference failure.

## Public release verified

GitHub Pages run 42812996369 succeeded; Pages API reports `built` for gh-pages commit `44796739b37e44bbb5bc80e4f2f06d63ade434c7`. New public app returned HTTP 200. Every app asset, bundled worker, local runtime factory and shared WASM matched local SHA-256 bytes. The public gallery was byte-identical to the assembled root and retained all prior entries plus exactly one Sequence Dock entry. Public desktop/narrow gallery rendering passed. The entire nine-check real production-browser suite passed again at the public URL, including both real-AI fixtures (10/10 tiny links), current exports, offline fresh-worker inference, maximum batch, cancellation and mobile layout (`public-browser-validation.json`, `public-validation.json`). Public branch push alone was not used as proof.
