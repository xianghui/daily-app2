# Accrual Folio — 20261126-3

**Published and publicly verified:** https://xianghui.github.io/daily-app2/20261126-3/ . See `publication-status.json` and `VALIDATION.md`.

A private browser-AI utility for finance operations analysts reconciling informal simple-interest accrual handoffs. Real MiniLM inference retrieves a supplied day-count convention, mandatory human review confirms it, and exact rational arithmetic produces an inspectable worksheet. No payments, bank access, accounting writes or uploads.

## Workflow

1. Paste JSON, import `.json` source/audit, or choose either synthetic example. Set one currency/unit, 2–6 described convention profiles and 1–24 accrual requests.
2. Explicitly choose **Load AI & match conventions**. Real local embeddings match each handoff note to a profile description. No model downloads occur before this click. Dates, rates and principal do not influence semantic matching.
3. Review all proposals, source notes and cosine alternatives (similarity, **not confidence**). Edit convention, start/end dates, principal, percent rate and multiline review notes. Approve or hold every item. Approve-all means you have checked the links; it does not establish correctness. Undo reverses edits. Originals never change.
4. Apply reviewed accruals. Inspect the exact numerator/denominator and day-count witness. Compare each approved amount with ACT/360 on the same reviewed financial inputs. Differences count rounded amount disagreements, not errors, AI accuracy or measured time savings.
5. Download complete JSON, CSV or Markdown, or copy the current worksheet. All originals and holds survive. Any review edit invalidates exports until reapplied. Audit reimport restores originals, not prior approvals.

## Calculation contract

- **ACT/360:** actual UTC calendar-day difference / 360.
- **ACT/365F:** actual calendar-day difference / 365, including in leap years.
- **30E/360:** `360*(endYear-startYear)+30*(endMonth-startMonth)+min(endDay,30)-min(startDay,30)`, over 360. European rule; **no special February end/maturity adjustment**. Not US 30/360 or 30E/360 ISDA.
- Date difference excludes start and includes end. Zero-length intervals are allowed. Dates must be 2000–2099 with end ≥ start.
- Simple interest = principal × annual percentage /100 × day fraction. BigInt rational arithmetic retains exact unrounded cents; each row rounds half-up to two decimals. No floating-point currency accumulation or invented financial precision.
- One unit/currency per batch. Principal is a nonnegative decimal **string**, at most 1 billion and two places; annual percent rate a nonnegative decimal string, at most 100 and four places. No negative rates, compounding, amortization, fees, business-day rolling, FX or ledger posting.

## Source and output

Both in-app examples show the complete input shape: `{title, unit, profiles:[{id, description, rule}], requests:[{id, note, start, end, principal, rate}]}`. Valid profile rules are `ACT/360`, `ACT/365F`, `30E/360`. Unique 1–40 character ASCII letter/digit/underscore/hyphen IDs within each list. Title ≤200 chars, unit ≤40, descriptions/notes ≤200; reviewer notes ≤500. Source JSON ≤60,000 characters; imported source/audit file ≤1 MB. At most 30 texts, in eight chunks of up to four. Invalid dates, precision, empty/oversized arrays, bad rules and duplicate IDs are blocked.

JSON schema `accrual-folio/v1` preserves source, reviews/candidates, every row, exact witnesses and computed metrics. CSV retains every original and reviewed field, decisions, interest/baseline and witness JSON. Quotes, commas and multiline notes are escaped with CRLF records; formula-like text starting `= + - @ TAB CR` receives an apostrophe. Markdown is a plain-text worksheet, not executable HTML. Held rows have no calculation; even held edited inputs must remain structurally valid. Exports are planning/audit artifacts, not bank-import or accounting instructions.

## Real AI, runtime, license and downloads

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), **Apache-2.0**, q8 ONNX; **Transformers.js 4.3.2**, ONNX Runtime Web. Normalized mean-pooled 384-dimensional vectors drive cosine profile retrieval. The model revision is unpinned.
- Approximately **50 MB initial download**: ~23 MB weights + ~27 MB WASM plus JS/tokenizer. Requires initial internet to Hugging Face/CDN and same-origin runtime assets. Downloading weights does not upload user content.
- Single-thread **WASM CPU**, no WebGPU required. Requires WebAssembly SIMD, module workers, BigInt and enough memory. Tested desktop Chrome with GPU disabled. Physical phones/other engines untested; narrow viewport emulation is not phone-performance validation.
- Worker supplies `max_length:256`, but inspected feature extraction uses tokenizer `model_max_length` **512**; we do not claim a separately enforced 256-token cap. Each text is bounded to 200 characters; unusual text can truncate.
- Reuses immutable same-origin assets to avoid duplicating collection binaries; preserve these URLs:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
- `runtime-provenance.json` records exact sizes/SHA-256, verified by `audit-assets.mjs`. Worker text/vector protocol, model task, pooling, batching and runtime paths were inspected.

## Privacy, cache and failures

User data remains in page/worker memory, not persistent app storage. No credentials, optional provider, remote inference, telemetry or financial integration. Only synthetic fixtures ship. Imported instruction-like text cannot change authority, execute code or request credentials. All matching is real inference, never a canned or regex fallback.

Cache API retains model/runtime/worker downloads where permitted. **Tested offline scope:** after an online successful run, real inference in a fresh worker succeeds with network disabled in the same warmed, already-open page. Offline reload/navigation/app-shell startup is **not promised**. Cache eviction/private browsing/storage denial may require redownloads.

Visible download and chunk progress, cancel/retry, a 180-second timeout and actionable error states. Cancel terminates workers; run identities also guard asynchronous worker-source fetches and import reads. Model/download/runtime failures and malformed vectors (shape, finite values and normalization) fail visibly with no fabricated recommendation. No WebGPU is needed; missing workers/WASM is an error. Network audits observe only GET file downloads without bodies, and persisted reports omit signed query values. Built credential-pattern scanning complements source/network inspection; not an exhaustive security guarantee.

## Quality and observed limitations

Real browser inference matched **5/6** simple fixture conventions versus **2/6** always-first-profile baseline. The second fixture's explicit ACT/360 note was confused with ACT/365 fixed; the browser test corrects it through the actual review selector before applying/exporting. This is an observed model limitation, not a hidden fallback. Tiny synthetic fixtures are not representative accuracy. Model retrieval cannot reliably distinguish numeric conventions, negation or unrelated text and always proposes a nearest profile; mandatory human verification/holds are essential. Matching is not contract interpretation or accounting advice.

Independent Python datetime/Fraction checks cover **3,600 calculations across 1,200 randomized intervals** (10,800 day/denominator/rounded-cent assertions). Core tests cover February/31st dates, leap days, zero intervals, half-cent rounding, invalid decimals, malformed embeddings and review guards. Browser suites verify both real-AI batches, maximum chunked input, cache/offline behavior, editable review/undo/holds, artifacts and reimport, clipboard, cancel/retry, stale events/imports, actual network failure/recovery, defensive fault injections and desktop/390/320px layouts. See `VALIDATION.md` and machine-readable reports for exact outcomes/publication status.

## Development and publishing

React + Vite; base `/daily-app2/20261126-3/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` and gh-pages dependency retained. Serve the full collection for shared runtime paths: standalone app Vite does not serve the earlier apps. Publish **only through root** predeploy/deploy and root `deploy/`; never run individual deploy. Public release requires matching Pages build and asset hashes plus public real inference; a branch push is not verification. No builder digest is sent.
