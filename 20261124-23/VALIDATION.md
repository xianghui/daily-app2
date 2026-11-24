# Observed validation — Selector Desk

Date: 2026-11-24. Synthetic data only. Automated real Chrome (Playwright, installed Chrome channel), production Vite bundles, CPU WASM inference, not a model mock.

## Local checks

- Per-app `npm run predeploy` passed. React/Vite base `/daily-app2/20261124-23/`; gh-pages dependency and exact required predeploy/deploy entries retained.
- Actual MiniLM q8 inference matched 3/3 checkout reports (`checkout`, `warning`, `shipping`) and 3/3 materially different library reports (`search`, `reserve`, `hours`). Known-answer set is deliberately small, not a general accuracy estimate.
- Checkout output: 3 ready / 0 blocked, 2 winning-value differences from last-matching baseline. Library output: 2 ready / 1 missing-explicit-style block, 2 shortcut differences. All records remain in full audits.
- Context-only intervention, with unchanged property/rules, selected checkout vs warning and changed exported style from `#743e87` to `#b34750`. This establishes actual neural inference drives relevant workflow outputs, not just decorative model loading.
- Negation probe: “Do not use the checkout payment button or payment error warning. This report concerns only the shipping postal address panel.” selected **checkout**, intended shipping. Mandatory verification/hold is essential; this known failure is surfaced in README. Similarity is not confidence.
- Independent real Chrome CSS engine oracle: **500/500** generated cases matched `getComputedStyle`, including source ties, important precedence, type/id/class specificity, repeated classes and matching-branch comma-list specificity. See `oracle-validation.json`; random seed fixed in executable test. This covers the explicitly bounded subset, not full CSS conformance.
- Actual browser downloads independently parsed with Python CSV/JSON: **509 assertions** passed across fixtures, reviewed multiline/formula-like notes, held/blocked/undo cases, 24-record batch and context-only interventions. All source records and current reviews preserved; expected style/winning source indices and computed metrics reconcile. Complete audit reimport restores originals and requires new inference/review.
- Downloaded ready-only regression fixtures reopened as actual DOM/CSS in Chrome: **31/31** cases produced exported expected styles. Imported user CSS is not rendered by the utility; this independent fixture test uses only synthetic data.
- Review-required application, element/property edits renewing approval, note edit invalidation, undo, hold, blocked property, clipboard, JSON/CSV/Markdown/Fixtures downloads, maximum 24-record chunk processing, cancellation/retry passed.
- Network aborts of real worker and model-host downloads produced errors and no suggestions. Removing blocks and retrying in the same context produced the real expected neural matches in both cases (`recovery-validation.json`).
- Defensive checks: Worker unavailable, WebAssembly unavailable, construction failure, worker error, malformed vector output, timeout (fault-injected timer), stale message, cancel during delayed worker fetch, and real worker/model download failure. Fault injection is used only for defensive cases; successful inference uses actual model/runtime.
- Delayed file read cannot replace newer manually edited input. Input change invalidates results and run ID; cancelled workers are terminated. Empty/invalid/oversized source, 25-record batch, invalid element/schema, unsupported import format and >1 MB file fail visibly.
- Entire context offline, worker terminated after previous completion: **fresh worker real inference passed in the already-open warmed page**. Cold offline navigation/reload is not claimed. Browser eviction remains possible.
- Requests captured from production-bundle startup through all neural runs: only GET/no request bodies; no synthetic report context in URLs, no website calls. No model-host requests before explicit loading. Persisted network report includes hosts/paths/query-key names only, not signed CDN values. Built text assets scanned for credential patterns with no matches (not an exhaustive security audit).
- Desktop 1440px, narrow 390px and 320px: no horizontal overflow; all form inputs labeled, visible controls ≥44px tall. Hero/review/result screenshots saved, including visually inspected desktop and 320px views. No browser page errors.
- Gallery: every inline script compiled with Node `new Function`, new folder appears exactly once with `area:"ai-utility"`, baseline entries preserved, newest first. Browser gallery tests cover all 851 cards and earlier categories.

## Limits and untested environments

Physical phones, Firefox/Safari, cold offline app-shell navigation, real customer bug datasets and full CSS syntax outside the documented subset are untested. Source order/important/specificity expectations apply only to supplied author-only unlayered explicit declarations. The model cannot certify element identity, negation, bug truth or completeness of supplied styles. No external websites or production accounts are accessed or changed.

Publication verification will be recorded below only after assembled/public inference and byte checks pass.

## Assembled collection

Root `npm run predeploy` passed: **851 built, 0 failed, 0 skipped**. Existing runtime sharing rules and conservative guard unchanged. Combined published tree: **999,934,462 bytes**. Nine exact app/gallery/shared worker/factory/WASM asset comparisons passed. The full actual-neural workflow/offline/privacy/phone suite, 509 independently parsed artifact assertions, 31 reopened downloaded CSS cases and all 851 gallery cards passed again from the assembled production server. No shared-runtime or old-app source changes were made. Root `npm run deploy` published combined `deploy/`, not an individual app.

## Verified public release

[Live app](https://xianghui.github.io/daily-app2/20261124-23/) served the matching built Pages commit `1121d6afb64db03d5bee559be9f26c832c7e5698`; [workflow 45411005356](https://github.com/xianghui/daily-app2/actions/runs/45411005356) succeeded. Nine public app/gallery/shared-runtime assets byte-match assembled output. Both real neural fixtures and the complete workflow/review/undo/holds/blocked cases/24-record batching/reimport/cancellation/offline/privacy/export/desktop-and-phone-width suite passed again from GitHub Pages. Public downloads passed 509 independent Python assertions; 31 approved exported CSS cases reopened in Chrome with matching computed styles. All 851 gallery cards rendered, preserving older entries/categories and no phone overflow. No public browser errors. Known negation failure remained and is documented. No new runtime sharing, guard changes or digest. Pre-existing unrelated recovery work is preserved and excluded from source staging.
