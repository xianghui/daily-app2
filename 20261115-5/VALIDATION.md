# Observed validation — 2026-11-15

## Actual production-bundle AI and workflow

`npm run predeploy` passed. Playwright controlled installed desktop Chrome with GPU disabled, served under `/daily-app2/20261115-5/`, loading the real q8 MiniLM model and bundled WASM CPU runtime. No inference mocks were used for successful checks.

- Workshop fixture: actual profile assignments `pump, belt, fan`, matching all three synthetic answer keys.
- Office fixture: actual assignments `roller, battery, filter`, matching all three synthetic answer keys. Six easy examples are not an accuracy estimate.
- Workshop reviewed best intervals: 70, 40, 400 days versus current 180, 120, 200. Current/grid-best cost rates approximately 3.040/2.296, 3.414/1.431, 1.645/1.539. These are conditional model calculations, not measured savings. Fan selected the grid boundary; inspect wider feasible intervals.
- An unrelated instruction-like note still received a nearest profile. It did not cause content upload or tool use; held review preserved it without calculation. This explicitly demonstrates lack of relevance rejection, not model correctness.
- Maximum 32-record/6-profile source processed 38 texts across four-text chunks, preserved every record and reimported the maximum audit envelope; renewed decisions were pending.
- Pending reviews blocked application. Approve/hold, profile reassignment and default resets, numeric edits, multiline owner/notes, undo, stale-export invalidation and clipboard all passed.
- Offline: after online warming, network disabled and **new worker created**; real CPU inference passed in the already-open page. Offline navigation/reload is untested and not promised.
- Empty, malformed, null, oversized input; duplicate IDs; unsupported file formats; numeric-string, cost-order, empty number, shape and grid bounds were rejected.
- Cancel/retry and input changes during processing passed. Delayed worker-source fetch and delayed import could not overwrite newer input. See separate stale-run reports.
- Injected failures: blocked model-host network (then successful real retry), no WASM, failed worker download/construction, malformed vectors/envelope, worker error and timeout. No fake suggestion or enabled export survived. Fault injection only exercised defenses.

## Independent numerical/reference checks

248 bounded extreme/random lifetime cases matched SciPy incomplete-gamma expected durations and cost rates within relative tolerance 1e-7. Maximum observed duration relative error approximately 2.43e-9. Independent enumeration matched all six fixture grid optima. This validates the implemented formula, not the supplied Weibull assumptions or real equipment behavior.

## Real artifacts, privacy and layout

- Actual browser-downloaded JSON and CSV parsed with Python standard parsers. Fixture, reviewed and max-batch IDs/counts and every numeric field matched. Reviewed quoted commas/newlines and formula-like multiline strings survived; CSV protection added the expected apostrophe. Markdown preserved all IDs and edited notes. Actual clipboard text was read back.
- Requests from startup through inference were GET-only downloads without bodies. Model hosts were not contacted before explicit loading. No optional remote inference exists. Signed URL query values omitted from saved reports.
- Production text assets scanned for common credential patterns and remote inference endpoints. Worker shared-WASM and factory bytes matched installed runtime. This is a scoped audit, not a general security certification.
- 1440, 390 and 320px layouts: no horizontal overflow, labels on controls, button heights ≥44px, keyboard focus and actual viewport screenshots checked. Physical phones, other engines and screen-reader behavior untested.

## Combined deployment

First root predeploy failed the conservative 1,000,000,000-byte guard at 1,000,737,021 bytes. Existing byte-verified geometry runtime reuse extended to 20261030-11 through -14. Source builds unchanged, original JavaScript URLs retained, revised worker/main entries query-versioned. Root predeploy then passed at 998,571,969 bytes. Combined bytes and shared references audited; real legacy-worker export tests cover all seven affected apps.

Gallery inline scripts compiled with `new Function`; new entry appears exactly once in AI Utilities. All 677 existing entries preserved, AI Utilities remains first, earlier maker categories/search/layout checked. Root tagline describes workflow planning trade-offs. New app files in assembled deployment byte-match production build.

Publication and public runtime verification are recorded in `publication-status.json`, `pages-build.json` and public validation reports when completed. Do not infer public success from a branch push alone.


## Public release completed

First Pages deployment `3b84cecc96748906022890ae4d61303150741b31`, workflow 43635810867 reached **built** with no Pages error. The new URL briefly returned 404 while the deployment job was still running; checks resumed after built status. Public app, worker, runtime factory, shared WASM and gallery byte-matched their assembled production files. Both real-AI fixtures, complete reviewed workflow/exports, offline fresh-worker inference, maximum batches, privacy network checks, gallery and all seven older geometry workers passed at the public origin. Browser downloads were independently parsed again.

The first public suite's immediate post-resize button-height assertion failed despite the CSS minimum height and separate public layout inspection passing. The harness now allows 150 ms for viewport settling and records every measured button height. The complete public suite passed on retry: minimum 48.390625px at all three widths, no overflow. No app-code or inference fallback change was made to bypass this check. Physical devices and offline app-shell navigation remain untested.

Source publication excludes unrelated pre-existing working-tree edits. All old gallery entries in the starting working copy were retained in the deployed combined site.
