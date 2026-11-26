# Coupon Trail — observed validation

## Local production bundle

- `npm run predeploy`: passed, React + Vite production base `/daily-app2/20261126-22/`.
- Real installed Chrome, WASM CPU with GPU disabled: discount fixture **5/5**, premium fixture **4/4** role labels matched expected values. These easy synthetic labels do not measure representative accuracy.
- Discount fixture: opening basis 960,000 minor units, annual coupon 50,000, maturity 1,000,000, three periods. Estimated yield **6.510597071%**, total interest **190,000**, year-one interest versus straight-line **−831** minor units, final rounding adjustment **−1** minor unit.
- Premium fixture: five-year premium purchase produces a different effective yield and negative amortization; exact observed values are saved in `local-browser-validation.json` and downloaded fixtures.
- `node core-test.mjs`: **2,476 checks**, 356 schedules including random discount/premium/negative-yield and zero-coupon cases.
- Independent Python Decimal 70-digit PV-root and integer schedule oracle: **356 cases / 50,426 assertions**. Independently checks every year's carrying amount, interest, amortization, straight-line comparison, final principal and lifetime cash identity. Exact half-minor-unit ties permit binary floating point's adjacent rounding result and still verify all identities.
- Browser-downloaded local JSON/CSV/Markdown/worksheet files: Python stdlib independent parsers and Decimal oracle **1,341 assertions** across **12 JSON snapshots**, including all originals, current edits and quoted multiline formula-like text. Worksheet columns parsed and compared to all annual rows.
- Mandatory review, scope attestation, holds, amount/role edits, undo, export invalidation and clipboard passed. Maximum batch: **24 source records + five references**, eight real inference chunks. Maximum audit reimport restores exact originals and resets approvals.
- Empty/malformed/oversized inputs and imports, bad numeric amounts, invalid years/notes, unsupported formats, cancel + real retry passed.
- **10 defensive checks**: real worker/model network abort, missing Worker/WebAssembly, construction and worker errors, malformed vectors, timeout, stale delayed message and pending-fetch cancellation. Only these failure tests inject faults; successful inference uses real weights.
- Real fresh-worker inference passed with **all network disabled in an already-open warmed page**, GPU disabled. No claim of offline navigation/reload.
- Network capture: no model requests before explicit loading; observed requests are GET without bodies; source notes do not appear in URLs. External paths limited to documented model/CDN downloads. Only host/path/query-key metadata is saved, not signed CDN query values.
- Runtime SHA-256 provenance and built-asset credential-pattern scan passed; source contains no provider/key integration.
- 1440, 390 and 320 px layouts: no document horizontal overflow; every input has a label; relevant controls meet 44 px height; keyboard export order passed. Table intentionally scrolls within its labeled local region. Normal viewport screenshots saved and inspected.

Lint passed with one expected warning for the deliberate control-character validation regex.

## Challenge probes

“This is not a broker commission; it is an ongoing annual custody charge.” → exclusion (correct in this run).

“Please refill the coffee machine in the kitchen.” → coupon (irrelevant input receives a forced nearest class). No automatic correctness claim is made. Approval/hold is essential.

## Publication checks

Combined-tree assembly: **898 built / 0 failed / 0 skipped**, **819,641,574 bytes**, below the unchanged 1,000,000,000-byte guard; no sharing-rule changes. Root inline scripts compile, the new entry appears exactly once as `ai-utility`, all **897 prior entries** are byte-for-byte preserved as records, and the browser renders all **898** cards with existing categories and search intact.

The assembled production tree passes both real-AI fixtures, maximum batch, warmed-page offline, review/export/undo, privacy and responsive suites again. Its downloaded artifacts independently pass **1,341 assertions**; **nine served files** (root/app HTML, app assets and shared worker/factory/WASM) match exact production hashes. Screenshot result scrolling was made instantaneous in the test harness to avoid capturing an unfinished CSS smooth-scroll animation; the UI did not require a behavior change.

Five extra checks pass locally: zero-coupon real inference with untrusted instruction-like text, invalid reviewed amounts with undo, missing redemption and out-of-bracket yields, and delayed file import unable to replace newer source followed by a real retry; and unpaired Unicode surrogate rejection before inference to prevent UTF-8 export corruption.

Public release verified at <https://xianghui.github.io/daily-app2/20261126-22/>:

- Remote gh-pages head and built Pages commit both **`556d3da72879fe74c849920562342e16ed1c0e7f`**; successful workflow [45827150497](https://github.com/xianghui/daily-app2/actions/runs/45827150497).
- **Nine exact public file hash matches**, including the new app's HTML/CSS/JS and shared worker, factory and WASM.
- Both real public CPU-AI fixtures again matched **9/9** simple role labels; the complete reviewed/export/max-batch/offline/privacy/layout suite passed without browser errors.
- Actual downloaded public artifacts independently passed **1,341 assertions** across 12 JSON snapshots plus corresponding CSV/Markdown/worksheet files. All current reviewed fields and required source rows survived.
- All **five** extra public checks passed: real zero-coupon inference and untrusted text handling, invalid reviewed amounts/undo, missing redemption/out-of-bracket yields, delayed import/newest-source retry, and malformed-Unicode rejection.
- Public gallery rendered **898 cards** and preserved all **897 prior entries**, categories, search and narrow layout.
- Source main is committed/pushed as the final publishing step. No digest or external financial action was sent.

## Not established

Representative semantic/accounting accuracy, physical-phone inference, other engines, cold offline startup, financial compliance, source completeness/authenticity and unsupported contract features. This is a bounded human-reviewed analytical worksheet.
