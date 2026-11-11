# Observed validation — 2026-11-11

## Local production bundle

- `npm run predeploy` passed; actual Chrome browser ran the compiled worker/WASM, not a mocked success path.
- Real MiniLM: Software helpdesk mapped access/billing/technical correctly; Community services mapped library/fitness/housing correctly (6/6 tiny known-answer links). First-queue baseline matched 2/6. This is fixture coverage, not general accuracy.
- Software fixture: modeled minimum teams 5/4/6 agents (15 total), versus occupancy-only 4/2/5 (11). Community fixture 4/4/4 (12), versus 2/3/3 (8). Service-target teams satisfy the supplied thresholds and occupancy constraints. These extra agents are a model prediction, not observed service gains.
- Independent direct factorial Erlang-C expression agreed within 1e-12 across a moderate load/team grid. Known load-one, two-agent case has probability(wait)=1/3 and mean wait 120 seconds. Minimum-agent predecessor checks passed; zero demand, unstable staffing and cap infeasibility checked.
- Review is mandatory; queue/rate edits, notes, undo, global hold blocking, export invalidation and changed settings tested. Negative/out-of-range/empty numerical values rejected.
- Maximum 6 queues/12 streams runs real chunked inference; all 12 records survive JSON/CSV. Exported JSON reimport reproduces original input and recomputed plans, with approvals reset.
- Real browser downloads independently parsed with Python CSV/JSON; edited rates and multiline formula-like notes survive; Markdown matches copied clipboard content. Quoting and formula-prefix safeguards verified.
- Online load followed by network-disabled fresh-worker inference passed. Offline reload/navigation is not claimed.
- Network abort and recovery to real inference, worker download failure, unsupported Worker, actual worker WebAssembly absence, malformed embeddings, worker error and timeout were exercised. Fault injection was used ONLY for failure tests, never successful AI paths.
- Cancel/retry, changed input during processing, delayed file read and delayed worker download stale guards passed. No stale result replaced newer input.
- All captured browser requests were GET with no body; no model-host request before explicit load. Requests contain no source text. Built-asset credential-pattern scan and source integration inspection found no provider keys or content-upload path. This is scoped validation, not a universal security proof.
- Desktop 1440 px and narrow 390/320 px: no document overflow; controls labeled, focusable and buttons ≥44 px; exports work. Physical phones, other browsers, screen-reader speech and offline navigation not tested.
- Negated/unrelated instruction-like challenge is kept in `export-challenge.json`: the negated crash request was incorrectly mapped to access, and an unrelated instruction-like request was also mapped to access. Top-candidate selection is not an abstention mechanism. Both challenge rows were held; no staffing advice released.

Reports: `core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `stale-import-validation.json`, `artifact-validation.json`. Public/combined verification reports are added when complete.

## Combined and public release

Root predeploy assembled all 596 apps, zero failures/skips; 595 prior entries and order preserved. Inline gallery scripts compiled with `new Function`; new entry appears once as AI Utilities, before preserved older categories. Combined deploy size 930,605,356 bytes after existing verified runtime deduplication. Combined production-browser suite and gallery rendering passed.

Root `npm run deploy` published gh-pages commit `4564538c5a168c1fe48c952a6dbf32ffcdae3897`; GitHub Pages reported **built** for that exact commit (workflow 43001025066). A transient status-watch HTTP 500 was recovered by checking the active workflow, without redeploying. Public HTML, JS, CSS, factory and shared WASM matched local hashes. The complete public real-AI workflow suite passed both fixtures, maximum batching, fresh-worker offline inference, review/undo/holds, downloads/reimport, cancellation/staleness and 1440/390/320 px layouts. Public gallery matched source byte-for-byte and rendered AI Utilities first with older categories intact. Public downloaded artifacts were independently parsed again.

Reports: `combined-assembly-validation.json`, `combined-browser-validation.json`, `gallery-validation.json`, `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `pages-status.json`, `publication-status.json`. Source lint passes (`npm run lint`).
