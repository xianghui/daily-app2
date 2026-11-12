# Observed validation — 2026-11-12

## Local production bundle
- `npm run predeploy`: passed. Browser testing targets `dist` at the exact production base, not Vite dev mode.
- Real Chrome WASM CPU MiniLM inference: Community outing and Studio weekend each matched all four known payers (`p0,p1,p2,p3`). No fixture answers were installed/corrected before those assertions. Eight of eight tiny expected links, not a general accuracy claim; exact-title baseline resolved zero of eight.
- Each fixture contains 5,906 expense cents, 12 direct per-expense reimbursement transfers totaling 4,429 cents versus three net transfers totaling 1,048 cents. All participant shares, paid amounts, zero-sum balances and settlement residuals checked. These are computed fixture values, not observed time savings; netting is not a minimum-transfer optimizer.
- Challenge: “The gardener did not pay. Only the bicycle mechanic paid.” incorrectly selected `p0` (gardener) rather than `p3`. Unrelated instruction-like text still got a nearest candidate, but cannot call tools/request credentials. Both held; all settlement output blocked. Model similarity is not verified identity or negation reasoning.
- 3,000 seeded independent fractional-rounding/net-balance cases, cent conservation, quota floor/ceiling bounds, zero-weight exclusion, roster tie-break, deterministic clearing, schema and original roundtrip: passed. The independent floating-point test oracle needed fixed loop bounds and tolerance for mathematically equal fractions; production uses exact integer remainders, not floats for ranking.
- Real 24-expense / 8-person maximum input used chunked inference, conserved every expense/cent/person and reimported maximum audit originals with renewed approvals. Unequal 1:2:0:3 weights on 17 cents yielded 3:6:0:8 cents.
- Review edits, undo, holds/all-held block, reviewed amount and weights, invalidated stale exports, clipboard/downloads and reimport: passed. Independent Python CSV/JSON parsing checked every row, reviewed fields, multiline formula-like notes and Markdown transfer amounts. Original expense 1001 cents remains unchanged when reviewed to 17 cents.
- Empty/null/malformed/oversized input, wrong currency, null rows, >24 expenses, zero/negative/fractional/oversized cents, invalid/zero weights, wrong format and >1 MB file: blocked with no fake output.
- Cancellation/retry, changing input mid-run, late valid results from a worker ignoring terminate, delayed file reads and delayed worker download: stale writes suppressed; real retry succeeds.
- Fresh contexts exercised model-network failure and real recovery, failed worker download, unsupported module workers, actual worker WebAssembly unavailable, malformed embeddings, worker error and timeout. Fault injection is defensive only; successful inference tests use the real model.
- Online production inference followed by all-network-disabled **fresh-worker** inference passed. This tests an already-open warmed page only, not reload/offline navigation. Worker, runtime factory, WASM and model caches all participate.
- Request capture from startup through inference: model host untouched until explicit load, only GET asset downloads, no request bodies and no synthetic content in URLs. Bundled text credential-pattern scan had zero hits; source inspected with no remote inference, account integration or credentials.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal overflow, labeled form fields, focused amount input, current artifact actions and screenshots. Phone screenshot inspected visually. Physical phones, low-memory performance and cross-browser engines untested.

## Gallery / combined / publication
- Gallery inline scripts compiled with Node `new Function`; no missing scripts. New entry exactly once as AI utility; all 611 baseline entries preserved in order, including pre-existing unstaged gallery work. AI Utilities first; historical categories remain intact.
- Root predeploy: 612 built, zero failed/skipped; all gallery folders assembled, root/new app/shared WASM bytes verified. Root combined deployment size 944,484,007 bytes after existing runtime deduplication; sources unchanged.
- Combined-site browser and public publication results are recorded below as completed. Machine-readable reports and executable tests accompany this file.

No real personal data, private credentials, external payments or source-tree changes to the original daily_app collection were used. Pre-existing unrelated workspace changes are preserved and excluded from this app's source commit.

- Combined-site production-browser full suite passed (including both real-AI fixtures, max batch, offline fresh worker, reviews, artifacts and responsive checks). Combined gallery rendered with Share Tapestry first, AI Utilities before legacy categories, no overflow at desktop/320 pixels.

- A separate real model-host download was observed, delayed and cancelled; switching fixtures then retrying produced all four correct payers with no stale overwrite. No inference mocking in this cancellation check.
- First root publish succeeded: gh-pages `48ecb994706609999315601b39c1dc6b63841562`; Pages workflow `43139316677` completed successfully and matching Pages API status was `built`. Public app, bundled worker, runtime factory, CSS/JS and shared WASM returned HTTP 200 with matching SHA-256. Public gallery was byte-identical to the preserved 612-entry working gallery.

- Full public real-browser suite passed: both real model fixtures, reviewed edits/undo/holds, exact-cent and max-batch artifacts, public fresh-worker offline inference, reimport, defensive inputs, cancellation, three responsive widths and clipboard. Public gallery visible with new app first and earlier categories preserved. Independent Python artifact parsing passed again on actual public downloads.
