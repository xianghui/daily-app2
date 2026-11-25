# Observed validation — 2026-11-25

## Local production bundle

- React/Vite `npm run predeploy` passed. Local Chrome, WASM CPU with GPU disabled, **real** MiniLM worker inference matched 6/6 simple profile choices: Shop close `[peers, rows, peers]`, Lab timeline `[rows, peers, rows]`. Record values and domain contexts differ. See `browser-validation.json`; fixture candidate similarities are recorded, not confidence percentages.
- Shop close has 11 records, 2 row totals differing from rows-only. Lab timeline has 10 records, 2 differing totals. These are arithmetic snapshot witnesses, not measured accuracy/time improvements.
- Negation challenge **failed**: “Do not show a period-end total … instead … each separate transaction” selected peers rather than rows. `quality-challenge.json` and audit contain actual evidence. Mandatory review/hold is part of the product; small simple-fixture success does not establish general intent understanding.
- Four-text chunks: maximum 8 profiles + 24 requests = 32 short texts / 8 chunks. Real maximum-batch inference completed. All 960 input records survive the applied audit/CSV; original maximum audit reimport succeeds.
- Fresh worker on warmed already-open page processed real inputs with networking disabled. GPU unavailable is supported via tested WASM CPU, not an untested fallback. Offline reload/app-shell startup is not claimed.
- Current reviewed profile changes alter totals, pending decisions block apply, editing invalidates downloads, hold excludes only approved SQL, undo restores review. Multiline quoted/formula-like reviewer notes survive JSON/CSV and clipboard. Signed numeric values remain numeric.
- Actual browser-downloaded JSON/CSV/Markdown/SQL artifacts saved. Python's CSV parser verifies every row/record/value, formula-safe strings, multiline notes and held records. SQLite executes generated read-only window queries and compares every ID/key/value/total with reviewed JSON, including 24 requests / 960 maximum records, duplicate keys, negative values, multiple partitions, quotes/newlines and Unicode. `artifact-validation.json` records eight downloaded audit variants; core fixture queries are independently checked too.
- `core-test.mjs`: 21 input/output/schema/known-total checks. `defensive-test.cjs`: 10 checks covering real model-host/worker network aborts and fault-injected unsupported workers/WASM, construction/runtime error, malformed vector results, timeout, stale messages and cancellation during delayed source fetch. No fallback/fabricated outputs. Fault injection is only for defensive branches; successful inference always uses the real model.
- Async file read race test proves an older import cannot overwrite newer example input. Cancellation then real retry succeeds.
- Desktop 1440 and narrow 390/320 CSS widths checked: no horizontal document overflow, associated form labels, minimum 44px controls. Hero/review/results screenshots saved. Phone hero and results visually inspected; actual phones and assistive technology not tested.
- Network capture from bundle startup through real inference: GET-only asset requests, no request bodies, no source contexts in URLs; no model-host traffic before explicit AI action. Recorded network URLs omit signed download query values. Built text credential-pattern scan passed (not a general proof of absence); no API integration/credentials exist in the implementation.
- Immutable worker/factory/WASM byte hashes checked in `runtime-provenance.json` / `asset-validation.json`. Original model worker and pipeline source inspected; actual tokenizer 512-token cap is documented, not an assumed 256-token option.

## Collection and publication

Root gallery scripts compile with Node `new Function`, new entry appears exactly once as `ai-utility`, old 866 entries preserved unchanged, existing category labels/order retained. Tagline now includes reconciliation. Root assembly copies 867 builds with 0 failed/skipped; deploy-only deduplication preserves source builds and brings the combined site below its existing 1 GB guard (approximately 811 MB). Original daily_app collection remains read-only. Pre-existing unrelated untracked source folders are excluded from this job's commit.

Assembly/public validation results are appended after completion below. A source push alone is not considered successful publication.

## Assembled bundle

The full successful real-inference/browser suite was repeated against root `deploy/` with the production base and all shared paths, including offline fresh workers, maximum batch, review, downloads and phone widths (`assembled-browser-validation.json`). Independent downloaded-artifact/SQLite parsing passed again (`assembled-artifact-validation.json`). All three shared dependency hashes and app HTML match source build. Final combined payload is **811,333,256 bytes**, below the existing 1 GB guard. A tagline change after the first assembly was incorporated by root deployment lifecycle; final assembled index is byte-identical to current source. Real gallery browser verified 867 cards, newest entry and earlier-app search.

## Public Pages verification — completed

GitHub Pages build **1cb23cf7ca7a455502b7574934ac6692fa1a6ff9** reached `built`; matching workflow [45551696525](https://github.com/xianghui/daily-app2/actions/runs/45551696525) completed successfully. Live app, gallery and all app asset bytes match the production build; worker/factory/WASM hashes match immutable provenance. Public real Chrome inference repeated both fixtures (6/6 simple matches), fresh-worker offline inference, maximum batch, review/edit/hold/undo/cancel-retry, exports and 1440/390/320 width checks. Public downloaded artifacts passed independent Python CSV and SQLite checks again. See `public-browser-validation.json`, `public-artifact-validation.json`, `public-app-assets.json` and `public-asset-validation.json`. No hosting fallback or republishing retry was needed.

Live app: https://xianghui.github.io/daily-app2/20261125-14/ . Model negation limitation remains documented; successful publication does not turn semantic proposals into verified user intent.
