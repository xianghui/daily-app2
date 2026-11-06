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

Notice Atelier (`20261107-3`) reuses the byte-identical ONNX Runtime WASM already hosted at `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, avoiding 26,861,777 duplicate deployed bytes. Its Vite build rewrites fallback URLs to that immutable same-origin asset. Preserve referenced older app builds and paths when assembling the collection; the app README and asset/deployment audits record the SHA-256 and production-bundle/offline validation. No model inference or user content moves to a server.

## Builder and publishing workflow

Preserve the existing enabled hourly Asia/Singapore cron, model, run budget, routing and delivery settings. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages and use Vite base `/daily-app2/YYYYMMDD-N/`. Each app retains `predeploy: npm run build` and `deploy: gh-pages -d dist`. Validate the working AI flow and artifacts, add the gallery entry, run root predeploy/deploy, commit and push main using `YYYYMMDD-N: App Name (ai-utility)`.

Root predeploy assembles `deploy/index.html` and app builds in `deploy/YYYYMMDD-N/`; root deploy publishes that combined site to `gh-pages`. `npm run deploy` also invokes predeploy automatically via npm lifecycle. GitHub Pages serves the root of gh-pages.

Deployment verification: `gh-pages` reporting “Published” proves the branch push, not that Pages has rebuilt. Compare `git ls-remote origin refs/heads/gh-pages` with `gh api repos/xianghui/daily-app2/pages/builds/latest --jq '{status,commit,error}'`. If the latest build still targets an older commit and no new run is queued, request the existing legacy Pages build with `gh api --method POST repos/xianghui/daily-app2/pages/builds`. Wait for that commit to reach `built`, then verify the new app URL and its bundled worker/WASM. Do not change the Pages source or repeatedly republish the same files to resolve this trigger delay. This fallback was needed for 20261021-27.

Daily digest remains at 22:00 Asia/Singapore and scans both collections, with each app linked to its own gallery.

