# Cover Calendar — observed validation, 2026-11-20

## Build and real inference

- React + Vite scaffold, dependency installation and `npm run predeploy` passed. The exact production Vite base is `/daily-app2/20261120-1/`. No dev-server-only model calls.
- Chrome (installed desktop channel, headless, `--disable-gpu`) ran the actual shared Transformers.js 4.3.2 / q8 MiniLM WASM CPU model. No mock or heuristic substitutes were used for successful inference. Expected known identities:
  - **Workshop:** metal / wood / electric → all 3 matched. Exact whole-request priority **6**, source-order feasible greedy **4**; both 2 person-days away. Shared holiday omitted; 4 workdays retain at least 2 present.
  - **Service desk:** billing / network / delivery → all 3 matched. Exact **9**, greedy **2**; both 2 person-days away, minimum 2 present across 5 workdays.
- Six intended links across two small synthetic examples are not general accuracy estimates. Descriptions were manually authored known-answer fixtures. The maximum 12-person/12-request case intentionally contains ambiguous same-topic profiles; human corrections were needed and were applied before planning. Unrelated/instruction-like text still receives a nearest staff profile and was explicitly held. AI is not identity authentication or request authorization.
- Changing only two request descriptions caused real model identities to swap and Monday's absence to change from wood to metal; dates/priorities remained unchanged (`semantic-change-validation.json`). The AI materially affects the reviewed workflow.
- Tokenizer source inspection confirmed `model_max_length:512`; feature-extraction source ignores call-time `max_length`. Four-text chunks, normalized 384-dimensional vectors, finite/dimension/norm validation; full 24-text batch actually processed.

## Deterministic planner and invariants

`core-test.mjs` passed both known fixtures and **60 independent exhaustive random subset oracle** comparisons. Verified daily headcount minima, indivisible requests, same-person overlap rejection, pins/forced deferrals, holds, leap-date/weekend/holiday handling and malformed vector rejection. Browser checks independently reconcile granted priority and person-days from all daily coverage records. Every original has one review/allocation; held/deferred requests are never silently lost.

## End-to-end browser and defensive checks

`browser-test.cjs` passed against the individual production build and the root-assembled production bundle. Checks include required approvals, identity/date/priority edits, multiline review notes, holds and undo, pin grants, infeasible pins, force-defer, invalid-date/priority errors, export invalidation, clipboard, source/audit imports, maximum batch/export/reimport, empty/invalid/oversized/duplicate data, unsupported file formats, cancel/retry and changed-input cancellation. Fresh-worker offline inference was real. The assembled run completed and wrote every assertion/report before Chrome shutdown stalled; its completed harness was terminated and the harness now bounds browser shutdown separately from test assertions. Public validation uses that bounded cleanup.

`defensive-test.cjs` passed all eight fault modes: model-host network abort plus real recovery, unavailable WASM, worker download failure, unsupported worker constructor, malformed vectors, malformed message envelope, timeout, worker error. Defensive tests inject faults only, never evidence of successful AI. Every failed path produced no fake suggestions and left export disabled.

Cold model-download cancellation followed by real retry passed. Delayed file reads could not overwrite newer input; a deliberately late old-worker response could not replace a completed newer run; delayed worker-source fetch could not create an old worker after input change. See separate `*-validation.json` reports.

## Privacy, caching, exports, layout

- Browser request audit began before app startup: no model-host requests before Load AI. Observed request traffic was GET/HEAD only, no bodies or source text in URLs. Reports persist host/path only, no temporary signed-CDN query values. No external provider integration or credential input. Built text assets scanned for common key patterns; this supplements source inspection, not a comprehensive secret detector.
- Successful online model load followed by terminated/recreated-worker inference with **all network disabled** passed. Scope is a warmed already-open page only, not offline reload/navigation; cache eviction requires internet. Shared worker, WASM factory and binary hashes/paths were independently inspected and audited.
- Browser-downloaded JSON, CSV, Coverage CSV and Markdown were reopened. Independent Python `csv.DictReader` compared all source rows, reviewed identities/dates/priorities/outcomes and every daily/team coverage row. A formula-like note containing a comma, quotes and a newline survived JSON exactly and CSV with a protective apostrophe. Maximum 12-record export and held originals survived. Clipboard matched edited Markdown.
- At 1440, 390 and 320 CSS pixels: no horizontal overflow, controls labeled, buttons ≥44 px, visible focus. Normal-viewport screenshots of hero, review and results inspected. Native selected option labels were shortened to avoid unnecessary truncation at narrow widths. Physical touch devices, screen readers and non-Chrome browsers are not tested.

## Root gallery, combined site and size recovery

- Parsed full existing target AI gallery (251 utilities) and original collection (3,595 entries), checking exact name and underlying workflow. Related old static attendance/shift CRUD apps are not this real semantic reconciliation plus exact leave-subset workflow. Original collection remained read-only.
- Every inline root script compiled using Node `new Function`; missing scripts fail. New folder appears exactly once with area `ai-utility`, first in newest-first AI Utilities. All 733 prior entries preserved byte-for-byte; assembled gallery renders 734 cards, old categories/search preserved at desktop/phone widths.
- First root predeploy failed its existing conservative 1 GB size guard: 1,000,204,680 bytes. Fixed by extending existing deploy-only byte-identical geometry runtime reuse to `20261028-14` → immutable `20261028-24`, saving 541,470 duplicate binary bytes while retaining source builds and compatibility URLs/query-versioned entries. No apps removed or old categories relabeled; no increase to the limit.
- Rerun root predeploy passed: **734 apps, zero failed/skipped**, **999,663,415 bytes**. Root index plus every gallery folder exists. Assembly/publication uses repository-root package `daily_app2` and `deploy/`, never individual app deploy.
- Affected older app real worker startup/default/PNG/binary-STL imports and downloads passed. Three distinct preview signatures; exports passed independent closed-manifold/winding/finite/size validation. Source build unchanged.
- Assembled app/gallery/worker/factory/WASM byte audits and credential-pattern scan passed. See `assembled-asset-audit.json`, `combined-size-validation.json`, `legacy-runtime-validation.json` and `assembled-browser-validation.json`.

## Public release

Publication and live validation are recorded after root deployment in `publication-status.json`, `public-asset-audit.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `public-legacy-runtime-validation.json`. A gh-pages branch push alone is not counted as success; the matching Pages build must reach built and actual public real-AI/runtime checks must pass. See final release note below.


Public release passed on the first deployment: Pages commit `aee7e95d00c777c77380f52f598823c54a429f96` reached `built`, matching a successful build/deploy workflow. All 13 public app/gallery/runtime/affected-legacy asset byte checks, both real-AI known fixtures, the full review/export/privacy/offline/max-batch browser suite, independent artifact parsing, preserved 734-card gallery and older-app import/export checks passed. No public page errors. Source staging excludes unrelated pre-existing edits; no digest sent.
