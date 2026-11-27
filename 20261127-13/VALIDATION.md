# Scanfolio Desk — observed validation

## Local production bundle

- Vite predeploy passes; tested actual built JS/CSS at the `/daily-app2/20261127-13/` base, not a dev-only import path.
- Real q8 MiniLM WASM CPU inference in Chrome with GPU disabled: intake A returns TEXT / PHOTO / GRAY; intake B returns MAP / TEXT. All 5 simple known-answer standard links match. These notes are deliberately easy synthetic fixtures, not representative accuracy evidence. An unrelated instruction-like note still chooses GRAY: nearest-neighbor retrieval has no automatic abstention and human review remains necessary. Notes request no tools or credentials.
- 300-dpi baseline fails supplied checks on 3/3 and 1/2 jobs respectively. Planned batches contain 60 and 22 reviewed pages and 751,041,928 / 857,172,784 raw raster bytes. These are computed sampling/constraint checks, not observed scan quality, time savings, storage provisioning guarantees or measured improvements.
- A too-fine map fixture initially exceeded the pixel ceiling and correctly blocked the operational manifest. Its example feature size was adjusted to a feasible setting; explicit infeasibility tests remain. No failed AI was replaced with deterministic fake inference.
- Independent 50-digit Python Decimal replay: 400 cases, **4,800 assertions**, validating minimum DPI steps, up-rounded raster dimensions, packed rows, page/batch bytes and feasibility; no app encoder inverse used.
- Core checks: malformed normalized vectors, source identities, invalid bitonal RGB, holds, scanner ceiling, pixel ceiling, storage budget and audit-envelope restore. All blockers preserve source jobs; manifests are gated.
- Real-browser workflow includes pending-review blocking, all numeric/multiline edits, export invalidation, undo, relinking/reset approval, hold, clipboard, maximum 12-job/8-standard batch (5 chunks), complete audit reimport, empty/invalid/oversized inputs and imports, cancellation and successful real retry.
- Online model caching followed by network-offline **fresh-worker real inference in an already-open warmed page** passes. Cold offline page startup/navigation/reload is NOT claimed or tested.
- Network capture begins at bundle startup: no model-host requests before explicit load; requests are GET-only, no bodies, notes absent from request URLs; only documented model-download hosts externally. Temporary CDN signed query values are not retained. Built app text assets scanned for common credential patterns; source integrations inspected, not an exhaustive secret-detection guarantee.
- Defensive suite: actual worker download abort and model-host abort fail visibly; injected absent Worker/WebAssembly, construction failure, worker error, malformed vectors, accelerated timeout and late messages pass. Pending-fetch cancellation cannot construct a late worker. Separate real network recovery followed by actual inference and a newer real run rejects both old valid result and old error.
- Layout checks at 1440/390/320px: labels present, no horizontal overflow, minimum 44px buttons/inputs/selects, keyboard export traversal. Desktop and narrow-phone screenshots inspected. Physical phones, alternate engines, screen-reader testing and actual scanners are unverified.
- Actual downloaded JSON/CSV/Markdown parsed with independent Python parsers. Multiline quotes/commas and formula-like notes retained in JSON/Markdown and correctly escaped in CSV; record counts, source identity, row/page/batch byte invariants and current reviewed fields reconciled. See *artifact-validation.json for actual assertion counts.

## Collection and public verification

Gallery scripts compile with `new Function`; the new folder appears once under AI Utilities, first. All previous entries/categories are preserved. Root combined assembly/publish and public commit, asset, gallery and real inference results are recorded separately after deployment; no branch push alone counts as verification.

## Known limits

No OCR/image processing or automatic optical/legibility verification. Standards, dimensions, smallest features and channel depth are supplied assumptions. Raw raster storage excludes overhead/compression/backups. Short English nearest-neighbor retrieval can misunderstand negation, novel topics or local policy. Model downloads use the existing shared worker's `main` revision resolution (observed resolved model commit is captured by request paths); upstream model-host changes and cache eviction may affect future behavior. No external actions or digest sent.

## Assembled production site

Root predeploy: **913 built, 0 failed, 0 skipped**; shared-runtime assembly **823,624,413 bytes**, unchanged size guard. Full real-browser production-bundle suite and network recovery/stale-new-run checks pass again from the assembled tree. Independently parsed artifacts: **568 assertions** each on local and assembled downloads. Browser gallery: **913 cards**, new entry once, AI Utilities first, earlier categories intact, search works and no JS errors/overflow at 1440/390/320px. An additional 371 exact-threshold sampling probes found no DPI-step over-rounding failures. Public checks follow separately.

## Public release — verified

- Matching Pages build **4363a9c6445499da231133d9c5e15670212ddb60** reached `built`; workflow **45938217912** completed successfully (build/deploy/report jobs). No rebuild trigger or repeated publication was needed.
- **9 public files** match assembled bytes exactly: root gallery, app entry/assets and shared CPU runtime dependencies. See public-assets.json.
- Full public real-inference workflow passes again: **TEXT/PHOTO/GRAY** and **MAP/TEXT** fixture links; reviewed edits/undo, held and infeasible/budget gates, batch/reimport, clipboard/downloads, cancellation/retry, defensive inputs, private GET-only download traffic and fresh-worker inference with the network offline in the already-open warmed page.
- Actual public worker-download failure recovers to real inference; delayed old schema-valid result/error cannot replace a newer real run.
- **568 independent public artifact assertions** pass; all source records and reviewed edits survive JSON/CSV/Markdown.
- Public gallery: **913 cards**, all older categories preserved, first entry once, functional search and no JS errors/overflow at desktop/phone viewport widths.
- Physical devices/scanners, other engines, screen readers, cold offline startup, real scan quality and representative semantic accuracy remain unverified. No digest sent.
