# Margin Press — observed validation

2026-11-20; synthetic inputs only. **Published; public workflow verified.**

## Real production-browser inference

Headless installed desktop Chrome, GPU disabled; Vite production bundle at its real `/daily-app2/20261120-18/` base. Actual q8 MiniLM model/CPU worker runs, not mocked output. See `browser-validation.json` and raw `browser-test.log`.

| Synthetic fixture | Correct neural axes / expected | Independent-nearest inconsistent margins | Controlled inconsistent margins | Controlled / baseline absolute cell error |
|---|---:|---:|---:|---:|
| Workshop hours, 9 records / 3×3 | 18 / 18 | 6 | 0 | 4.4 / 3.6 |
| Library grants, 6 records / 2×3 | 12 / 12 | 2 | 0 | 2.4 / 2.0 |

These are tiny known-answer fixtures, not broad accuracy estimates. Constrained error is higher than unconstrained error: consistency is the explicit objective, not an invented accuracy improvement. Changing a source row description to the other roster definition changes the actual neural link and final aggregate table. Instruction-like unrelated content remained inert and abstained at the chosen threshold; low thresholds/negations/ambiguous descriptions can still mislink. Human review is mandatory for both axes and numeric quantities.

## Constraints, records and artifacts

- `core-test.mjs`: 1,200 generated 2×2/2×3/3×2/3×3 cases compared against independent exhaustive enumeration. Feasibility, exact margin conservation and global minimum total absolute error checked. Malformed, zero-norm and nonfinite embeddings rejected.
- Mandatory approve/hold review, label/value editing and original preservation; multiline review note, rejection/hold, undo, current clipboard; all edits disable export until reapplication.
- Editing a source quantity makes supplied margins infeasible; no forced table, audit exports still available, Table CSV disabled.
- Downloaded JSON/CSV/Markdown/Table CSV read by independent Python JSON/CSV parsers (`artifact-validation.json`). Original IDs, descriptions, numeric values, review states, quoted commas/newlines, leading-formula neutralization and every roster cell preserved. Both row and column margins verified from downloaded tables, not screen text.
- Maximum batch: 96 records, 6 row + 6 column definitions, 204 texts / 51 real model batches. All 96 records and 36 table cells survive JSON/CSV/Table CSV; final multiline note retained; maximum audit reimport triggers fresh inference and review.

## Failure/race/privacy/cache checks

- Empty, null/malformed/oversized input, empty roster/record arrays, duplicate IDs, overly long text, invalid thresholds, nonfinite/negative quantities, fractional/inconsistent margins and unsupported/oversized/malformed file imports rejected.
- Real cold model download was intercepted, cancelled and retried successfully. No cancelled output survives.
- Input change while model runs; delayed old-worker response after a newer completed run; delayed import read; delayed worker source fetch. Existing generation identity guards stop all stale replacements. Race-only tests use explicitly injected responses; successful AI/quality tests never do.
- `defensive-validation.json`: actual model-host network abort + real retry; absent WebAssembly; worker-download failure; unavailable module workers; malformed vectors; malformed message envelope; timeout; worker runtime failure. All show errors, no fabricated records/exports. Fault injection is used only to exercise defensive branches.
- Real online inference followed by all-network-disabled **fresh-worker** inference passes in the already-open warmed page. Runtime factory and binary, worker source and weights are available from browser caches. Offline reload/navigation/app-shell install is NOT claimed or tested.
- Captured browser network from page startup through inference: GET/HEAD only, no request bodies, no source text in URLs; no model requests before explicit loading. Public Hugging Face/CDN paths and same-origin runtime only. Persisted audit paths omit signed query values. No optional providers/keys/analytics/content upload integration.
- Runtime dependency byte hashes/source protocol audited, tokenizer actual ceiling 512 tokens, four texts per batch. Built text assets scanned for credential patterns; no matches. This scan complements source/network review, not a universal proof.

## Interface/build/deployment

- Desktop 1440px plus narrow 390/320px browser viewports: no page horizontal overflow, labeled controls, focus-visible outline, ≥44px button targets, working import/review/apply/export/copy. Tables intentionally scroll inside their own labeled containers on narrow screens. Input/review/results screenshots inspected. Physical phones, other browser engines, private storage behavior and assistive-technology sessions are unverified.
- `npm run predeploy` passes. Production asset base and shared immutable worker/factory/WASM inspected.
- All inline root-gallery scripts compile using Node `new Function`; exactly one new AI-utility entry, all **750** pre-existing entry objects retained unchanged, earlier categories preserved and AI Utilities first. Gallery search and 1440/390/320 widths pass.
- Combined-site assembly, Pages commit/build, public byte matches and final public real workflow outcomes will be appended after publication. Existing 1,000,000,000-byte conservative guard is unchanged; no digest/announcement is sent.

## Test-harness correction

An initial semantic-change assertion incorrectly expected infeasibility when moving 0.6 units between rows. The modified 2.4/3.6 row sums still admit required 3/3 integer margins. The test now verifies the correct changed aggregate cells (0 and 2) rather than assuming infeasibility; the actual quantity-edit infeasibility test is separate. No solver/product behavior was changed to satisfy the incorrect assertion.


## Public release — passed

Matching Pages commit `51c97a4d1a42792ae7b9b7b1e2a639390e5fe093`, successful workflow `44708486858`, first deployment. All **9** public gallery/app/worker/factory/WASM files byte-match the production assembly. Both real neural fixtures again matched **18/18** and **12/12** axes on the public URL. The entire public reviewed workflow, actual downloaded artifacts, maximum batching, input-change/cancel/retry, clipboard, fully offline fresh-worker inference and privacy/network checks passed with no page errors. A structural-zero challenge with individually roundable margins but no jointly feasible table correctly blocked Table CSV. Desktop and 390/320px screenshots include actual horizontally scrollable tables; scroll movement was checked. Public gallery retains **751** cards and prior categories, search and responsive widths.

Combined site **999,939,906 bytes**, unchanged 1 GB guard; no additional legacy runtime rewriting rule required. Root predeploy/deploy passed, no app-only deploy. Sources and evidence committed/pushed to main; unrelated pre-existing work is preserved and excluded from staging. Original daily_app tree was inspected read-only for idea overlap and never modified. No digest sent.
