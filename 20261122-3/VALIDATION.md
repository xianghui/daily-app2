# Observed validation — Join Ledger

## Production-bundle local checks

- React/Vite `npm run predeploy` passed. Real browser: installed Chrome, headless, macOS, GPU disabled (WASM CPU).
- Real q8 MiniLM inference: **Order lookup** 3/3 field links and **Archive rights** 4/4 field links matched known answers. Descriptions differ in wording; fixtures cover commerce and multilingual archive rights. No mocked inference in success checks.
- Reviewed composite joins: order fixture 6 rows from 5 left rows (2 unmatched; 2 unused right); archive fixture 5 from 4 (1 unmatched; 1 unused right). Each exposes one extra right match hidden by first-match lookup and flags the requested lookup/one-to-one expectation violation. See `browser-validation.json` for actual vectors-derived evidence, links and audit results.
- Maximum batch: 8+8 fields, 64+64 source rows, four inference chunks, 4,096 output rows, exact complete lineage, audit-envelope reimport. An additional 45,180-character maximum-row source produced a 4,137,535-byte JSON audit that restored originals exactly through the separate 8 MB envelope bound (`envelope-validation.json`). Multiline/quoted/formula-like strings retained; JSON preserves types; CSV neutralizes spreadsheet formula prefixes.
- 2,415 core assertions including 800 independent nested-loop typed composite join oracle cases: no lost left rows, exact multiplicity, null/empty exclusion and typed equality. Strict malformed/oversized source schema rejection.
- Actual Chrome downloads independently parsed with Python `csv`/JSON: both fixtures, corrected/reviewed multiline note and maximum 4,096-row join. Every original row and reviewed note survived. Actual clipboard content checked.
- Review decisions, edited links/reset approval, reject, undo, stale-export invalidation, input changes, cancellation and real retry passed. No inferred key is automatically applied.
- Default network capture from startup through inference: only GET file downloads, no bodies, same-origin runtime and documented model hosts, no model request before explicit load. Built text asset credential-pattern scan found none; source inspection found no provider integration. Reports omit signed CDN query values.
- Real fresh-worker inference succeeded with all networking disabled in the already-open warmed page. **Not tested/claimed:** offline navigation/reload/startup.
- Desktop 1440, narrow phone-layout 390 and 320 CSS px: no horizontal overflow, labeled fields, focus and ≥44px controls. Input, review and results screenshots captured and visually inspected. Physical mobile devices not tested.
- Defensive fault-injection checks cover model-host failure and real recovery, missing WASM, worker-download failure, unsupported worker construction, malformed vectors/message, timeout, worker error, late cancelled/input-invalidated response. No fabricated output allowed. Async file-read/worker-fetch races and cold download cancellation/real retry have separate reports.

## Limitations

Seven simple known-answer links do not establish general accuracy. The negation probe expected a courier-note field but selected customer ID instead; see `browser-validation.json`. This observed failure makes mandatory review essential. Model does not inspect values or establish semantic/units compatibility. Source sample uniqueness does not prove production safety. CSV blank values lose null/type distinctions; JSON is the lossless audit. Browser/runtime performance on physical phones and non-Chrome browsers remains untested.

## Combined assembly and legacy regression

Root predeploy built all 784 gallery entries. Initial size guard correctly rejected the site. Extended the existing byte-identical deploy-only geometry runtime sharing to 20261029-6 → 20261028-24; exact 541,470-byte SHA verified, source builds unchanged, old JS compatibility URLs retained. Assembled size **999,614,379 bytes**, below unchanged 1,000,000,000-byte guard. Older app real worker plus PNG/STL imports, parsed binary STL exports and portable JSON passed. Full assembled production-bundle AI workflow, privacy, exports/offline suite and 784-card gallery/category/search/phone checks passed. See assembly/legacy/gallery reports.

## Publication

Matching Pages commit `955e26a3c51e5c797596ea1af4d02841a481d641` reached **built**; workflow **44933924577** completed successfully. Seven public gallery/app/worker/factory/WASM assets matched assembled bytes. Both real-AI known-answer fixtures (7/7 links), the complete public review/export/max-batch/offline/privacy suite, separate applied key-correction and invalid-contract checks, and all 784 gallery cards/categories/search/phone checks passed. Public older-app worker, PNG/STL import and parsed STL/portable JSON export regression passed; public older shell/worker/shared geometry bytes also matched. Actual public downloads independently parsed again. See `public-*-validation.json`, `pages-watch.json`, and `publication-status.json`. No digest sent.
