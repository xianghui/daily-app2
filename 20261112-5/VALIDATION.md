# Observed validation — 2026-11-12

## Local production bundle (not a dev server)

- `npm run predeploy`: passed. React + Vite, required per-app scripts, locally bundled module worker and runtime factory, shared immutable same-origin WASM.
- Actual Chrome CPU/WASM q8 MiniLM inference: Workshop accounts 4/4 intended customer matches; Creative accounts 3/3. Exact-title baseline 0/7. Tiny synthetic checks, not universal accuracy.
- Workshop: 80,000 cents open, 65,000 overdue; invoice days late `[73,12,0,28]`. Creative: 140,000 open, 120,000 overdue; days `[104,43,0]`. Due-today is current; the fully paid workshop invoice does not increase oldest unpaid age. Bucket and customer totals reconciled exactly.
- `core-test.mjs`: bucket boundaries 0/1/30/31/60/61/90/91, leap date and invalid dates, integer-cent conservation, malformed embedding/schema and pending-review blocking passed. Independent Python datetime oracle checked all browser-exported invoice ages and balances.
- Max batch 6 accounts + 24 invoices matched 24/24 intended descriptions using four-text chunks. Audit JSON reimport preserved originals and recalculated customer totals; approvals reset to pending.
- Human account edit/undo, date/payment edits, multiline formula-like reviewer note, export invalidation, hold/reject, all-held zero-approved totals and discard supported. Downloaded JSON/CSV/Markdown and clipboard compared. Independent Python CSV parser preserved every row, reviewed fields, cent values and escaped multiline notes; customer summary reconciled.
- After online inference, network disabled entirely, fresh worker created and another actual inference succeeded. **Only already-open warmed-page offline inference tested; offline reload/navigation not promised.**
- Empty/bad/oversized JSON, duplicate IDs, null rows, invalid dates/currency, negative/fractional/overpaid amounts, issue-after-due, 25 invoices, unsupported file and oversized file rejected.
- Cancel/retry and input changes during inference passed. Explicit defensive fault injection verified delayed old valid vectors cannot replace newer results even when a fake worker ignores terminate; delayed file reads/worker downloads cannot overwrite newer inputs.
- Network/download abort, unavailable module workers, malformed AI vectors, timeout and worker error produced no fake result and disabled exports. Network recovery retried real inference successfully. Actual worker with WebAssembly disabled showed actionable requirements. These defensive tests are not claimed as AI evidence.
- Desktop 1440px and narrow 390/320px layouts passed no-horizontal-overflow, associated labels, focus, ≥44px buttons and download checks. Screenshot visually inspected. Physical devices, other browsers and low-memory hardware not tested.
- Browser request audit from startup through inference: GET downloads only, no request bodies or user text in URLs; no model-host requests before explicit load. Built-asset credential-pattern scan clean; source contains no external provider or content-upload code. Pattern scan is not a general secret audit.

## Known quality limitations (observed, not hypothetical)

The negated recipient “Not a bicycle repair shop. This is an artisan sourdough bakery.” incorrectly ranked `bike` first. Unrelated instruction text mentioning credentials also ranked `bike`. Both were held; held balances stayed separate, no authority changed and no credentials were requested. Semantic similarity is not legal identity or negation understanding. Mandatory review is essential. Customer descriptions cannot distinguish similar businesses.

## Gallery and publishing

Inline scripts compiled with `new Function`; exactly one new ai-utility entry, all 605 prior entries and their order preserved, total 606. Prior gallery state included unrelated workspace edits, which were preserved. Public/combined validation status is recorded separately after deployment; a branch push alone is not proof of a working public app.

Combined root predeploy: 606 built, 0 failed, 0 skipped; every gallery app has deploy/<folder>/index.html. Root index and all new app assets were byte-identical to source/build. Served combined directory: gallery UI (AI Utilities first, legacy STL/games/SaaS present, 1440/320px) and the full real-AI workflow suite passed.

## Verified public release

First Pages deployment succeeded at commit `dfb6b619b239c9f6d51f1db3a703ff3825f6ce05` with status `built`. Every public app file plus shared WASM matched local production SHA-256 bytes; the public root gallery was byte-identical to source. Both real-AI fixtures and the full production browser workflow suite (offline fresh-worker inference, maximum batch, review/edit/holds/undo, downloaded artifacts, invalid input, cancellation and desktop/phone layout) passed at https://xianghui.github.io/daily-app2/20261112-5/. The public gallery rendered AI Utilities first and preserved old categories and entries. No hosting retries or app/model simplification were needed. See public-*-validation.json and pages-status.json.
