# Observed validation — 2026-11-12

## Local production bundle

- `npm run predeploy` passed; shared runtime WASM byte-identical to existing collection asset; factory and worker use the production base.
- Real CPU/WASM MiniLM inference: Repair store 4/4 and Studio supplies 4/4 intended product identities matched. Exact-title baseline resolved 0/4 in each fixture. No mocked success/fallback.
- Repair: bearing 160,000 cents, glove 50,000, tape 20,000; A/A/C. A products capture 210,000 cents versus 180,000 same-count high-unit-cost baseline; 25 planned annual count events versus 36 monthly-all.
- Studio: paper 600,000 cents; cable/ink tied 50,000 each; A/B/B. A captures 600,000 cents versus 50,000 baseline; 20 planned annual events versus 36. These are worksheet calculations, not observed savings.
- The first browser test expected tape B incorrectly; threshold-start rule correctly yielded C. Corrected the fixture expectation, independently verified the rule with a BigInt oracle, and reran the full suite successfully.
- Negation challenge ('Not steel ball bearings... nitrile...') wrongly proposed bearing; unrelated instruction-like text also forced a bearing match. Both were held and never affected products. No semantic-equivalence or general accuracy claim.
- 2,400 generated cases matched independent BigInt totals and strict-larger-value-group class oracle. Ties, zero totals, all-held, bounds and no-lost-record constraints passed.
- Real 24-line / 6-product maximum batch matched all source identities across four-text chunks. JSON audit reimport preserved originals and recomputed identical products, requiring fresh approvals.
- Reviewed mapping/units/cents/note edits, undo, pending blocking, held exclusions, all-held empty aggregates, stale export invalidation and copy/download paths passed.
- Independent Python parsers reopened downloaded JSON, all-record CSV, product CSV and Markdown; edited cents, all 24 maximum records, quotes/newlines, formula-prefix escaping, class/frequency/source membership and totals survived.
- Fresh worker with browser network disabled performed real inference in an already-open warmed page. No offline reload claim.
- Empty/invalid/null/duplicate/oversized input, invalid thresholds/numeric fields, CSV/oversized-file rejection passed.
- Cancel/retry and input invalidation passed; delayed file reads, delayed worker downloads and valid late vectors from a worker ignoring termination could not replace new input/results.
- Network/model abort recovered to real inference. Worker download abort, unsupported Worker, actual worker WebAssembly disabled, malformed vectors, worker errors and accelerated 180-second timeout all produced errors and no fake results.
- Observed traffic was GET-only with no request bodies and no content in URLs; no model-host requests before explicit loading. Built text/source credential-pattern scan and source review passed. Not a universal secret detector.
- Desktop 1440 and emulated 390/320px phone widths: no horizontal overflow, all form controls labeled/focusable, buttons ≥44px and exports operational. Screenshot inspected. Physical mobile devices, alternate engines, accessibility screen-reader audit and offline navigation are untested.

Reports: `browser-validation.json`, `core-validation.json`, `defensive-validation.json`, `stale-result-validation.json`, `stale-import-validation.json`, `artifact-validation.json`, `runtime-assets.json`, `secret-scan.json`, `source-privacy-validation.json`.

Public/combined checks are recorded separately after publication; branch push alone is not verification.

## Combined and public release

Root predeploy assembled all 604 gallery apps with no failures/skips, then root deploy published the combined site. All 603 prior working-tree entries and category order remain intact. The combined served bundle passed the full browser suite. Pages workflow 43074758174 succeeded on commit `8ca123340495a8f7e9ad2e85e825def68c44bb27`; latest Pages build matched and reported built. Every public app asset plus shared WASM byte-matched the local production build. The full real-AI browser suite passed again at the public URL, including both 4-line fixtures, maximum batch, offline fresh-worker inference, reviews, artifacts and desktop/phone checks. Public gallery was byte-identical and rendered the new app first, preserving legacy categories. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`, `pages-status.json` and `publication-status.json`.
