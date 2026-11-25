# Observed validation — Multiplicity Desk

2026-11-25, macOS desktop Chrome via Playwright; real production bundles, CPU WASM inference with GPU disabled. No mocked successful AI path.

## Completed before publication

- `npm run predeploy` passed. Root predeploy assembled 869/869 apps, 0 failed/skipped. Deploy-only immutable runtime sharing preserved existing size guard: **811,868,475 bytes**, below 1 GB. Shared worker/factory/WASM source hashes verified against `runtime-provenance.json`.
- Two materially different synthetic batches: dispatch reconciliation and print queues. Actual MiniLM top profiles matched **6/6** simple known-answer handoffs after clarifying a starter sentence. Initial combine paraphrase failed (subtraction instead): preserved in `quality-probe.json`, not hidden as general accuracy. Human review mandatory.
- Dispatch expected outputs: 3 unfulfilled + 3 shared + 4 combined occurrences = **10**, versus **5** distinct-only baseline rows. Print queue: 6 combined + 3 remainder + 2 shared = **11**, versus **4** distinct-only rows. These are snapshot counts, not performance or universal quality claims.
- 147 independent count fixtures covering lengths 0–6 for both inputs and all three operations; exact Unicode/case/empty-string checks; schema/bounds/malformed vector checks (`core-validation.json`).
- Maximum batch: 8 profiles + 24 contexts = **32 real embeddings / eight chunks**, 24 requests, **1,920 original records**. No records lost from audits; source-only reimport of actual downloaded maximum audit succeeded.
- Actual downloaded JSON/CSV/Markdown/SQL; independent Python JSON/CSV parsing and SQLite execution compare every emitted row, source ID, side, order, multiline note and source value. Includes commas, double/single quotes, formula-like multiline values, Unicode and empty strings. CSV apostrophe safeguards intentionally differ from lossless JSON. Held request records retained with no output or SQL. Tests also exercised operation changes, mandatory approval, note edits, reject/hold, undo and stale export invalidation.
- Real model download, real inference on both fixtures, fresh-worker offline inference in the already-open warmed page and cancel → retry passed on both per-app production build and assembled `deploy/` bundle. **Offline reload/app-shell startup and real phone hardware are not claimed.**
- Network requests captured from initial navigation: no model host before explicit run, GET-only file downloads, no content in URL/body, only documented same-origin/model delivery hosts. Signed query values excluded from saved audit. Built text credential scan and source integration review found no embedded provider secrets.
- Network aborts for real worker download and real model host produce error/no fabricated output. Same-page real model recovery passed. Fault injection (defensive paths only): unavailable Worker/WebAssembly, construction error, worker crash, malformed vectors, shortened timeout, stale late callbacks, cancelled pending worker fetch. Late import cannot replace newer source. Clipboard failure leaves downloads available.
- Empty/invalid/null/oversized JSON, excessive requests, malformed profiles, nonstring values, unsupported file extension and oversized files rejected. Inputs changes clear old results. Runtime does not depend on WebGPU.
- Desktop 1440 and narrow 390/320 viewports: no horizontal document overflow, labeled inputs, 44px controls, keyboard focus and disclosure activation, functional input/review/export. Hero/review/results screenshots inspected. These are viewport emulations, not physical phone device tests.
- Every inline root script compiles with `new Function`; exactly one newest AI Utilities entry; all **868 prior entries preserved**, prior categories unchanged. Actual gallery renders/searches on source and assembled servers.

## Reports

`browser-validation.json`, `assembled-browser-validation.json`, `core-validation.json`, `artifact-validation.json`, `defensive-validation.json`, `recovery-validation.json`, `async-validation.json`, `accessibility-validation.json`, `gallery-validation.json`, `assembly-validation.json` and provenance/security reports contain observed outcomes. Successful AI reports contain semantic rankings, not confidence percentages. Model may misinterpret subtle phrasing, negation or other languages. Exact-value equality does not reconcile aliases. Other SQL dialects, browsers and hardware remain unverified.

## Publication

Public status and final production asset hashes are recorded separately in `publication-status.json`, `pages-build-latest.json` and `public-asset-validation.json` after root deployment. A branch push alone is not treated as public validation.

Public verification completed: matching gh-pages commit `8ac7da2fc8a2bf477de36b22be1c6029f696b45a` reached **built**. Seven public app/runtime/gallery assets matched production bytes. The full browser suite passed at the public URL: two real-model fixture batches (6/6 simple intent matches), maximum 1,920-record batch, fresh-worker offline inference, cancellation/retry, review/edit/hold/undo, downloads and mobile layouts. Public gallery preserved all 868 older entries. Independent artifact validation now covers **25 JSON envelopes**, including downloaded local/assembled/public artifacts and a generated empty-list/Unicode SQLite edge fixture. A deliberately delayed old-worker callback could not overwrite newer real inference (`stale-newer-validation.json`).
