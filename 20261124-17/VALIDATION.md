# Observed validation — Crawl Compass

## Local production build

- Required Vite base and per-app predeploy/deploy scripts; `npm run predeploy` passed.
- Real Chrome WASM CPU inference (GPU disabled), **8/8 intended profile links** across two synthetic batches. First-profile shortcut would match 3/8. This is a tiny known-answer check, not general accuracy.
- Expected deterministic decisions: editorial fixture `allow, allow, allow, disallow`; media/archive fixture `allow, disallow, allow, disallow`. Longest-match versus first-matching-directive disagreements: 3 and 2 respectively.
- Identical `/assets/photos/same.jpg` raw input changed from **disallow to allow** solely by changing context from web indexing to image search; real model changed SearchBot to ImageBot. The full applied outputs were downloaded.
- The tested competing-negation probe selected the intended ArchiveBot. This single success does **not** establish negation comprehension; ambiguous/irrelevant notes still require explicit human correction/hold.
- Matching uses bounded O(pattern-length × path-length) dynamic programming, not wildcard-to-backtracking-regex translation. All 100 maximum-scale repeated-wildcard near-miss checks passed; actual test timing is recorded in `wildcard-stress-validation.json`.
- Independent Python fnmatch/prefix oracle: **1,606** bounded ASCII robots cases passed against the bounded JavaScript dynamic-programming matcher. Includes query anchors, literal regex punctuation, zero-length wildcards, specific agent overrides, duplicate agent-group merge, longest-agent selection, tied Allow precedence and empty rules. Not full RFC conformance testing.
- Full **24-record** run crossed four-text chunks; all rows survived review/application/JSON/CSV/Markdown/release downloads and complete audit reimport. Reimport restores originals only, invalidating old approvals.
- Independent Python CSV parser, JSON parser and policy oracle validate downloaded artifacts; **394 assertions** per suite cover all reviewed rows, multiline formula-leading notes and IDs, current edited paths, policy preservation, held/blocked/undo outcomes and approved fixture decisions. CSV is deliberately formula-sanitized; exact strings remain in JSON.
- Review approval required; editable identities/paths, pending reset, hold, undo, export invalidation, blocked path preservation and copied Markdown passed.
- **Offline scope tested:** disable all networking after warming; terminate the previous worker; create a new worker and run real inference in the already-open page. Cold offline navigation/reload is **not claimed or tested**.
- Privacy trace from page start through inference: no model-host traffic before explicit Load; all observed requests GET without bodies, no synthetic context in request URLs. Local browser requests plus Hugging Face (`huggingface.co`, `us.aws.cdn.hf.co`) model downloads; blob URLs remain on-device. Persisted network reports contain host/path/query-key names, not CDN signed query values.
- Built assets scanned for common credential patterns and source reviewed: no provider integration, API credentials, analytics, content upload or website-fetch code. Shared worker/factory/WASM hashes match `runtime-provenance.json`.
- Real worker-download abort and model-host abort surfaced errors with no fake output; unblocking model host and retry succeeded with real inference. Unsupported Worker/WebAssembly, construction failure, worker errors, malformed vectors and accelerated 180-second timeout used defensive fault injection only. Successful workflow tests always use the real model.
- Cancellation during worker fetch, cancel/retry, stale delayed error, delayed file reads, and a delayed valid synthetic old-worker response after a newer real-model result cannot overwrite new data. Keyboard focus sequence passed.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal overflow, associated labels on fields, visible focus controls, ≥44px touch controls; normal-viewport input/review/results screenshots inspected. Physical phones/other browser engines remain untested.

## Combined deployment and public verification

The combined 845-app site assembled at **999,957,623 bytes**, below the unchanged 1,000,000,000-byte guard. All previous worktree gallery entries/categories are preserved, with the new AI utility first. Inline scripts compile; new entry occurs exactly once. Nine assembled app/gallery/shared-runtime asset byte comparisons passed. The complete assembled real-model workflow, two fixture sets, 24-record run, review/edit/hold/undo, warmed fresh-worker offline inference, exports and phone layouts passed; 394 independent downloaded-artifact assertions passed again. No runtime-sharing rules were added or changed.

The initial combined candidate `ef72f136fce514f29eb47ed7567fd5594c861776` reached built, then was superseded by the corrected bounded wildcard matcher. Final root deployment **`dd8071171b3e41da71c75e56fcdfefcdccb3d9c4`** reached matching Pages **built**, workflow **45354412004 success**.

Public verification passed: **nine exact asset byte matches** (new app, gallery, immutable worker/factory/WASM), both real-model fixtures (8/8 links), full current review/edit/hold/undo/export/24-record/reimport/cancel-retry/privacy suite, context-only model-driven output changes, warmed fully offline fresh-worker inference, no-overflow 1440/390/320 layouts and **all 845 gallery cards**. Independent parsers and policy oracle passed **394 public downloaded-artifact assertions**. See `public-asset-validation.json`, `public-browser-validation.json`, `public-artifact-validation.json`, `public-gallery-browser-validation.json`, `pages-build-status.json` and `pages-workflow-status.json`.

No new runtime-sharing rules or guard changes were needed; the final assembled site remains **999,957,623 bytes**. No external writes, live crawls or digest. Physical phones, other browser engines, cold offline startup, full RFC/encoding behavior and actual crawler/indexing outcomes remain untested.

Unrelated pre-existing recovery files and root edits are preserved in the worktree and excluded from source staging. The staged gallery preserves every tracked previous entry and compiles independently; the served worktree gallery additionally retains the pre-existing uncommitted recovery entry. See `staged-source-validation.json`.

## Reproduce

Serve the production app plus immutable shared runtime paths under `/daily-app2/`. Test scripts use local port 7547 by default; browser workflow accepts `APP_URL`, `PREFIX`, and gallery accepts `GALLERY_URL`. `node core-test.mjs`, `python3 oracle-test.py`, `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `node model-network-test.cjs`, `node async-race-test.cjs`, `node stale-success-test.cjs`, `python3 static-test.py`, `node gallery-test.cjs`, `node gallery-browser-test.cjs`, `python3 asset-test.py`. Playwright scripts use the already-installed workspace Playwright and Chrome, not a production dependency. Successful inference is not mocked.
