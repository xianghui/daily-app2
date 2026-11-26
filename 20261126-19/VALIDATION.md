# Allowance Orchard — observed validation

## Production-bundle local checks

- `npm run predeploy` passed (React + Vite, proper collection base).
- Actual installed headless Chrome on macOS, GPU disabled, downloaded and executed **real q8 MiniLM** through the immutable CPU WASM worker. No mocks on success paths.
- Two materially different synthetic batches: household/wholesale trade (4/4 profile matches) and public-agency/freelance services (4/4). These eight easy examples are **not representative accuracy evidence**.
- Reviewed trade fixture: exposure **430020**, allowance **32503**, all-current baseline **1708**, net **397517** minor units. Service fixture: exposure **615084**, allowance **46210**, baseline **2911**, net **568874** minor units.
- Real challenge: a negated wholesale note incorrectly selected **trade** instead of retail. An unrelated garden note still selected retail; this should be held. Instruction-like credential text remained data, with no credential form or network action. AI is not credit assessment or an abstaining classifier.
- Changed scenario weights triggered new real inference and a different applied allowance. Maximum 24 records + 6 profiles processed in 8 chunks; every record survived JSON export/reimport. Reimport restores original inputs, not approvals.
- Actual fresh-worker inference passed with the browser context offline in an already-open warmed page. **Cold offline page startup/reload untested and unsupported.**
- Request audit from startup through inference: no model-host requests before explicit Run; all observed requests were GET without bodies and only documented model hosts/same-origin runtime; synthetic notes absent from request URLs. Reports strip signed query values. No provider integration; credential-pattern bundle scan and shared-asset SHA-256 checks passed. Pattern scans are not exhaustive secret-proofing.

## Review, artifacts and defensive checks

- Mandatory review, profile/date/amount correction, multiline note edit, undo, hold/reject, clipboard and export invalidation passed. Holds block complete allowance and Worksheet CSV while audit exports retain all rows.
- Browser-downloaded JSON/CSV/Markdown/Worksheet CSV independently parsed with Python `json`, `csv.DictReader`, `datetime`, `fractions.Fraction`: **12 JSON audit snapshots / 1538 assertions locally**. Includes formula-like quoted comma/newline reviewer text and max-batch audit reimport.
- Empty/malformed/oversized inputs, invalid dates/weights/amounts/notes, unsupported file types, malformed JSON and 8MB import bounds passed. Invalid/duplicate/rate-bound schemas and finite normalized 384-vector validation checked in core.
- Actual worker/model-network aborts show errors without fabricated results. Actual model download cancellation followed by real inference retry passed. Delayed worker fetch and delayed file read cannot overwrite newer source.
- Fault injection only on defensive paths: unavailable Worker/WebAssembly, constructor error, worker error, malformed vectors, accelerated 180s timeout and late stale worker response all failed visibly or stayed ignored as appropriate. Success-path inference was not mocked.
- 1440/390/320-pixel Chrome layouts: no horizontal overflow; associated form labels, 44px targets and keyboard focus tested. Normal screenshots of hero/review/results inspected. These are viewport emulations, not physical-phone tests.

## Independent arithmetic

`node core-test.mjs` generated **403 cases**, including 400 seeded random rate/weight/date/exposure batches and a three-half-cent stable-tie fixture. Core assertions: **12370**, plus defensive schema checks. Independent Python Fraction/calendar recomputation passed **19361 assertions**, verifying age boundaries (0/1/30/31/90/91 days), every exact fraction, largest-remainder ordering, scenario totals, aggregate half-up, all-current baseline, independent-line rounding and net/exposure conservation. Extreme rates from 0 through 10000 are supported. Three half-cent losses allocate `[1,1,0]`, aggregate 2 cents versus independent-line sum 3.

## Limitations / not tested

No representative credit/default-quality validation, historical rate calibration, accounting-standard compliance, discounting, collateral, individual overlays, recovery estimation or financial posting. Supplied rates and weights may be inappropriate. No realized collections/savings claims. Physical devices, minimum RAM, other browser engines and cold offline startup are unverified. Upstream weights resolve `main` and may change.

## Assembly / public release

Combined-site root predeploy passed: **895 app builds**, no failures/skips; total **818843846 bytes** after the unchanged deploy-only sharing rules. All 894 older entries/links/categories survived; root inline scripts compile and the new AI Utilities entry appears once, newest first. The assembled production tree passed both real-AI fixtures, warmed offline inference, max-batch/review/export/defensive-input/layout checks, **1538 independent artifact assertions** and **seven exact asset byte/hash matches**, including the shared worker, factory and WASM. Root deploy reported Published. Matching Pages commit **`57dcf146f8d53614d002deaaf1297d872a7d3101`** reached **built**, and [workflow 45799030413](https://github.com/xianghui/daily-app2/actions/runs/45799030413) completed successfully.

At the actual public URL, **all seven files matched production bytes/SHA-256**, including the root/app index, new JS/CSS and shared worker/factory/WASM. The full real-AI browser suite passed again: both fixtures matched 8/8 easy labels, reviewed corrections/undo/hold, max 24 records / 6 profiles, audit reimport, cancellation/retry, malformed inputs, clipboard, phone-width layouts, privacy requests and fresh-worker warmed offline inference. Public browser-downloaded artifacts passed **1538 independent assertions across 12 JSON snapshots** with actual CSV/Markdown/worksheet files. Public gallery rendered **895 cards**, preserved every prior link/category and supported search without overflow. `public-*` reports/screenshots record actual results.

The original read-only gallery was additionally checked: **3595 entries**, no AI Utility category and no nearby allowance/receivables/provision-matrix objective matches. It was not changed. Collection size guard and sharing rules were not changed. Unrelated pre-existing drafts were preserved and excluded. No digest or external announcements were sent.
