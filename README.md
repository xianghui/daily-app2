# Daily App Lab 2

## Current focus: AI-powered workflow utilities (2026-11-06)

The hourly Daily App Builder now creates practical utility apps that use real AI to improve repeatable processes, replacing the earlier fidget/kit-card STL direction. Examples include document triage, semantic data cleanup/entity matching, meeting-to-action planning, knowledge search, batch organization and constraint-aware task planning. Each app must complete a useful input → AI assistance → review/edit → usable export workflow; generic chat wrappers and AI-branded heuristics do not qualify.

- Local root: `/Volumes/ExternalHD/daily_app2`
- Source: https://github.com/xianghui/daily-app2
- Gallery: https://xianghui.github.io/daily-app2/
- Original collection `/Volumes/ExternalHD/daily_app` remains read-only.
- Existing STL apps/games remain intact, accurately categorized. Historical requirements are in [legacy STL builder direction](docs/legacy-stl-builder-through-20261105.md) and are NOT requirements for new apps.

## AI and product requirements

Use real browser-compatible AI inference with a small suitable open-weight model and a no-key default path. GitHub Pages remains the host, so do not assume a backend. Document the real model/runtime/license, download size/network and device requirements, caching, privacy and limitations. Model weights may download from a documented host; keep default user content on-device. Optional remote inference must be explicitly user-invoked/configured, and any user-supplied key stays in memory by default. Never reuse agent credentials, commit secrets or personal data, or silently substitute canned output for failed inference.

Validate structured model outputs, input/batch/context limits, cancellation, stale results and failure paths. Let users review/edit/undo suggestions, retain original data, and export actual CSV/JSON/Markdown/calendar artifacts as appropriate. Measure a meaningful baseline or task quality/constraints honestly; do not invent improvement percentages or accuracy. External sending/deletion/account actions are not part of the default utilities.

Require actual model inference on at least two materially different synthetic inputs, small known-answer quality checks, production runtime/worker loading, privacy/network and claimed offline checks, export parse/round trips, and responsive desktop/phone UX before marking complete. A successful build, mock inference or AI-generated source code does not establish that the app itself uses AI. Clearly mark blocked work as unpublished rather than counting a placeholder.

Keep the polished responsive utility styling; familiar lavender/pink accents are fine, but 3D previews, millimeter controls, reference STLs and mandatory image/STL imports are no longer required. Gallery entries use `area:"ai-utility"` labeled "AI Utilities", ahead of earlier categories.

## Shared browser runtime assets

Notice Atelier (`20261107-3`), Brief Quarry (`20261107-4`), Split Sentinel (`20261107-6`), Veil Desk (`20261107-7`), Folder Ferry (`20261107-8`), Scope Harbor (`20261107-9`), Revision Dock (`20261107-10`), Mention Atlas (`20261107-11`), Outcome Map (`20261107-12`), Retention Desk (`20261107-14`), Parallel Room (`20261107-15`), Pack Relay (`20261107-16`), Form Pruner (`20261107-17`), Queue Mosaic (`20261107-18`), Rewrite Guard (`20261107-20`), Claim Ledger (`20261107-21`), Chapter Cut (`20261107-22`), Anchor Desk (`20261107-23`) and Distractor Desk (`20261107-24`) reuse the byte-identical ONNX Runtime WASM already hosted at `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, avoiding 26,861,777 duplicate deployed bytes. Their Vite builds rewrite fallback URLs to that immutable same-origin asset. Preserve referenced older app builds and paths when assembling the collection; the app README and asset/deployment audits record the SHA-256 and production-bundle/offline validation. No model inference or user content moves to a server.

## Label Lens — 20261108-2

Local semantic label-consistency auditing with MiniLM leave-one-out neighbor evidence, human corrections/holds and lossless JSON plus reviewed CSV. Reuses the immutable shared WASM from `20261107-2`; preserve that app asset when deploying. Both seeded errors in two synthetic batches were flagged, along with four false-positive neighbor cues: this is a human audit aid, not an automatic label fixer. See [workflow and requirements](20261108-2/README.md) and [observed validation](20261108-2/VALIDATION.md).

## Builder and publishing workflow

Preserve the existing enabled hourly Asia/Singapore cron, model, run budget, routing and delivery settings. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages and use Vite base `/daily-app2/YYYYMMDD-N/`. Each app retains `predeploy: npm run build` and `deploy: gh-pages -d dist`. Validate the working AI flow and artifacts, add the gallery entry, run root predeploy/deploy, commit and push main using `YYYYMMDD-N: App Name (ai-utility)`.

Root predeploy assembles `deploy/index.html` and app builds in `deploy/YYYYMMDD-N/`; root deploy publishes that combined site to `gh-pages`. `npm run deploy` also invokes predeploy automatically via npm lifecycle. GitHub Pages serves the root of gh-pages.

Deployment verification: `gh-pages` reporting “Published” proves the branch push, not that Pages has rebuilt. Compare `git ls-remote origin refs/heads/gh-pages` with `gh api repos/xianghui/daily-app2/pages/builds/latest --jq '{status,commit,error}'`. If the latest build still targets an older commit and no new run is queued, request the existing legacy Pages build with `gh api --method POST repos/xianghui/daily-app2/pages/builds`. Wait for that commit to reach `built`, then verify the new app URL and its bundled worker/WASM. Do not change the Pages source or repeatedly republish the same files to resolve this trigger delay. This fallback was needed for 20261021-27.

Daily digest remains at 22:00 Asia/Singapore and scans both collections, with each app linked to its own gallery.


## Unpublished draft — 20261107-5: Retrieval Bench

Local real MiniLM inference, four known-answer queries, 320-pair full-batch conservation, review/undo/export round trips, offline fresh-worker inference and defensive tests passed. Three Pages deployments of commit `2d7fb1ad7ad11b0cd817fdf2170263a737ff5913` timed out during synchronization/finalization despite successful builds. The new public URL remained HTTP 404, so public inference/assets could not be verified. The draft is deliberately excluded from APPS and the combined deployment; do not count it as completed. See [draft README](20261107-5/README.md), [publication status](20261107-5/publication-status.json) and [validation](20261107-5/VALIDATION.md). Existing gallery entries and public apps are preserved.

The failed autogenerated legacy Pages workflow accepted a failed-job rerun but exposed a ghost queued state with zero jobs, while its cancellation endpoint said the workflow was completed. A fresh legacy build was requested only after confirming the deployment itself had failed; this did not resolve the provider timeout. Do not assume queued status alone establishes an active deployment in this inconsistent state, and do not repeatedly repush unchanged files. Resolve Pages synchronization before promoting the draft and rerun its public real-AI/asset checks.


## Unpublished draft — 20261107-13: Dependency Loom

Real local MiniLM inference, six known-answer task links across two synthetic workflows, shuffled-source topological ordering, 12-task batching, cycle blocking, review/undo/export round trips, fully offline fresh-worker inference and defensive browser checks passed. Three GitHub Pages deployment attempts for `5ce4e25f78483c21bc053c8645dd0cb811a6c225` built successfully but failed/timed out during Pages deployment (synchronization/queue). The public app remained unavailable, so public AI/assets could not be verified. This tested draft is excluded from APPS and combined deployment; do not count it as completed. See [draft README](20261107-13/README.md), [publication status](20261107-13/publication-status.json), and [validation](20261107-13/VALIDATION.md). The prior gallery is restored unchanged. Resolve the hosting synchronization blocker before promotion and rerun public inference/assets/gallery checks.


## Unpublished draft — 20261107-19: Alias Calendar

Real local MiniLM inference matched eight known-answer room aliases across two synthetic booking sets, exposed the seeded double booking, and passed 24-booking conservation, conflict blocking, reviewed JSON/CSV/ICS round-trips, fully offline fresh-worker inference, responsive layout and defensive browser checks. Three GitHub Pages deployments of `4b1c67cf9ee06d1a43d7d46cb19ad52e8954e0f1` built successfully but timed out during deployment/synchronization. The new public app remained HTTP 404; public runtime and inference could not be verified. This tested draft is excluded from APPS and the combined deployment and must not be counted as completed. See [draft README](20261107-19/README.md), [publication status](20261107-19/publication-status.json), [hosting attempts](20261107-19/hosting-attempts.json) and [validation](20261107-19/VALIDATION.md). The prior 511-entry public gallery was independently verified byte-identical to restored source. Resolve the hosting blocker and rerun public inference/assets/gallery checks before promotion. No further app/model simplification can repair a provider synchronization timeout while preserving the existing collection; the new app added only 881,989 deployed bytes and already reused the shared runtime.

## Scale Compass — 20261108-3

Local MiniLM opposing-anchor inference assists survey-item direction review before deterministic reverse scoring. Every item requires human acceptance or hold; originals and missing cells survive JSON/CSV export. Simple fixtures matched 8/8 keys, but a double-negative challenge failed: this is a scoring-key review aid, not psychometric validation. Reuses the immutable shared WASM from `20261107-2`; preserve that asset. See [workflow](20261108-3/README.md) and [observed checks](20261108-3/VALIDATION.md).

## Sense Margin — 20261108-4

Local MiniLM contextual acronym disambiguation for technical editors. Review every source occurrence against approved glossary senses, edit or hold expansions and export exact-span expanded TXT plus complete JSON/CSV. Simple fixtures matched 8/8 meanings versus 4/8 first-sense baseline, but a negation challenge failed; mandatory human review remains essential. Reuses the immutable shared WASM from `20261107-2`. See [workflow](20261108-4/README.md) and [observed checks](20261108-4/VALIDATION.md).

## Evidence Split — 20261108-5

Construct reviewed train/evaluation partitions using local MiniLM semantic components and exact group-size allocation. Originals and holds survive JSON/CSV export. Six known paraphrase pairs across two interleaved synthetic batches were grouped correctly; the negation challenge overmerged opposing instructions, so semantic similarity is not equivalence or a leakage guarantee. Reuses the immutable WASM from `20261107-2`; preserve its asset. See [workflow](20261108-5/README.md) and [observed checks](20261108-5/VALIDATION.md).
