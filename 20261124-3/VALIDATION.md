# Observed validation — Tie Ledger

## Local production bundle

- `npm run predeploy` passed (React/Vite). No default scaffold CSS constraints remain.
- Real desktop Chrome, WASM CPU with GPU disabled. Both materially different synthetic batches matched **12/12 intended policy labels**; all expected exact-cent outputs and seeded invalid rows matched. These small known-answer fixtures are not general model accuracy.
- Context-only intervention on identical `1.005` changed the real-model suggestion between all three policies; applied cents changed from 100 to 101 under half-away. No model mock used for successful workflow checks.
- Competing-negation probe misrouted to bank-even instead of merchant-away; documented mandatory contract review.
- **2,646 core assertions** plus **2,592 independent Python Decimal cases / 7,776 comparisons** passed (exact cents, residual and decimal output). Signed ties, both quotient parities, tiny fractions, large values, zero normalization, all three policies, malformed numeric syntax, schema limits and malformed vectors covered.
- Real reviewed downloads independently parsed with Python csv/json/Decimal: **442 assertions**, all originals/reviews, signed values, multiline formula-leading note, 24-record batch, ready-only release and exact total survived.
- Complete review gate, edit-reset approval, hold/undo, stale-export invalidation, copy, actual downloads, audit reimport, maximum batch/chunks and cancellation/retry passed.
- Fresh worker real inference after disabling all network in already-open warmed page passed. No cold offline navigation claim.
- Nine defensive browser scenarios: real worker network abort; unsupported Worker; unsupported WebAssembly; construction failure; worker error; malformed vectors; timeout; stale error after input change; cancellation during pending worker fetch. Fault injection used only for defensive checks.
- Actual model-host abort failed closed; removing abort allowed a successful real-model retry. Delayed file read could not overwrite changed input. Late valid synthetic result from a cancelled run could not replace newer real inference. Keyboard order checked.
- Captured requests from production-page startup through tests: GET-only documented asset/model downloads, no request bodies, no model downloads before explicit load, no source content in request URLs. Built files scanned for credential patterns and source inspected; no embedded credentials found (pattern scans are not an exhaustive secret guarantee).
- Desktop 1440 and phone-width 390/320 layouts: no horizontal overflow, every form field labeled, visible controls ≥44px; screenshots captured. Hero 390 and result 320 screenshots visually inspected; readable, no clipped controls. Physical phones, other browser engines, low-memory devices and assistive-technology usability are not tested.

## Combined-site checks

Root `npm run predeploy` passed: 832 apps copied, zero failures/skips. Assembled site **999,871,508 bytes**, under unchanged 1,000,000,000-byte guard; no additional legacy dedupe rules or size increase. Gallery inline scripts compile with `new Function`, new AI-utility entry exactly once, all 831 prior working-gallery entries preserved. Root and public verification reports are recorded alongside this document; completion is only asserted after matching Pages build and public inference checks.

Assembled production browser rerun passed both real fixtures, reviewed exports, full 24-record inference, offline fresh worker, defensive inputs and responsive checks. Nine assembled app/gallery/runtime files matched expected bytes; all 832 gallery cards rendered. Independently parsed assembled artifacts passed the same 442 assertions.

Extra large-number layout regression exposed an overflowing totals card at 320px; fixed with min-width and numeric wrapping. Maximum-batch phone-width checks and screenshots added before final publication; corrected bundle reruns recorded in reports.

Corrected source and assembled full workflow reruns passed, including 320px maximum-batch totals; both independently reopened artifact suites again passed 442 assertions.

## Public release verified

Matching Pages commit `b8475840199050dc6dc31b6418f170237917de47`, successful workflow `45235803609`. Nine public gallery/app/runtime assets matched assembled bytes. Public real-model fixtures, context-only AI impact, full reviewed/export/24-record/offline/privacy workflow and 320px large-total regression passed; independent public artifact parsing passed **442 assertions**. All **832 public gallery cards** rendered, including all 831 pre-existing working-gallery entries. Combined size **999,871,508 bytes**, below unchanged guard. Existing main-source entries preserved; unrelated pre-existing recovery changes were not staged. No digest sent.
