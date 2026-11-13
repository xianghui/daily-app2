# Terms Orchard

A local-AI payment-terms worksheet for accounts-payable reviewers. Informal invoice descriptions make it tedious to find the right supplier profile; real semantic inference proposes a match, a human verifies identity and terms, and deterministic arithmetic compares eligible early-payment discounts against simple advance-financing cost. This is distinct from cash application, invoice aging, ordering and payment execution: it prepares an auditable discount decision.

## Use

1. Choose Warehouse or Studio synthetic examples, paste source JSON, or import a `.json` source/audit file.
2. Set `annualRatePct` and supplied supplier profiles (`id`, `label`, `description`, `discountBps`, `discountDay`, `netDay`). 200 basis points means 2%. Each invoice needs `id`, `note`, `cents`, `ageDays`, `owner`. All amounts share one user-defined currency; no exchange conversion. `ageDays` is whole days since invoice date, not a live clock.
3. Explicitly choose **Load AI & match invoices**. Download/model progress and batch counts appear; cancel terminates the worker. Correct source data and rerun if needed.
4. Inspect source snippets, ranked descriptions and cosine similarities. Correct each supplier, verify its actual contract, approve or hold each invoice, and edit follow-up notes/owners. Undo reverses review edits. Review edits invalidate exports; source edits invalidate the AI run. Every invoice needs a decision.
5. Apply reviewed matches. Held invoices remain in gross totals/audits but never receive payment recommendations. Check the partial-worksheet warning. This utility does not authenticate payees or execute payments.
6. Download JSON, CSV or Markdown, or copy Markdown. Exports reflect only the current applied review. JSON contains originals, terms, reviews, evidence and calculations; reimport restores originals and requires fresh inference/review. CSV has one row per original invoice, including holds, and spreadsheet formula-leading text is apostrophe-escaped. Markdown preserves complete review notes and plans.

## Actual AI, privacy and download

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX feature extraction with [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 and ONNX Runtime Web (MIT). Runtime/package versions are in the lockfile; model registry files currently track the host's default revision rather than an immutable model snapshot.
- Normalized, mean-pooled 384D embeddings compare supplied profile descriptions with invoice notes. Cosine ranking drives the initial matching; it is not regex or a canned response. No confidence percentages or universal accuracy claims.
- First run requires internet for approximately 23 MB model/tokenizer downloads from `huggingface.co` / its `*.hf.co` CDN plus 26,861,777-byte same-origin WASM and app/worker/factory assets. Downloads are explicitly user-initiated. No inference backend, API keys or optional remote provider exists.
- User content remains in browser memory; only static-file GET requests are needed. The worker sends embedding results locally to the UI. Content is never added to download URLs, requests, local storage or automatic saved designs. Exported files naturally contain the supplied content. Synthetic fixtures only are committed.
- Worker source, runtime factory and WASM use Cache API; Transformers.js caches model files. Fresh-worker inference with network completely offline was tested **inside an already-open warmed page**. Offline navigation/reload/app installation is NOT promised. Eviction/private browsing/storage denial may require fresh internet; nothing silently switches to fake inference.
- Same-origin immutable shared WASM: `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Byte identity checked against installed runtime; preserve that older app in combined deployment. Factory and bundled worker are app-local.

## Deterministic assumptions

Eligible means a positive discount and invoice age ≤ discount day (inclusive). Discount = round(gross cents × basis points / 10000). Early payment = gross − discount. Advance days = net day − discount day. Financing = round(early payment × annual rate / 100 × advance days / 365). Recommend considering discount-day payment only if discount exceeds financing after rounding. Already-overdue invoices are flagged for review; missed/no discounts use net-day planning. Assumes payment on the last eligible discount day, not today.

Baseline: pay approved invoices at net, take no discounts, incur no **incremental advance** financing. Aggregate benefit sums discount minus financing only for recommended early payments. Potential benefit per eligible invoice can be negative; gross includes held invoices. Break-even annual simple rate = discount fraction / (1 − discount fraction) × 365 / advance days; displayed unrounded-theory rate can differ slightly from cent-rounded decisions. No discount has no break-even rate. These are scenario estimates, not measured gains, financing quotes or advice.

No compounding, taxes, late fees, weekends, currency conversion, liquidity optimization, partial payments, bank validation or calendar-date calculation. Verify supplier identity, credit availability, agreed terms and due dates separately. Similar suppliers, negation, mixed invoices and unrelated text can receive wrong matches; human review is required. Imported instructions cannot execute tools or request credentials.

## Devices and bounds

Modern WebAssembly SIMD/module-worker browser, several hundred MB free memory recommended. Chrome desktop CPU is tested with GPU disabled; WebGPU is unnecessary. Physical phones, Safari, Firefox and Edge remain unverified; 320/390-pixel responsive layouts were tested in desktop Chromium. Failure gives actionable retry/device messages, never deterministic fake output.

2–8 profiles, 1–40 invoices; descriptions ≤300 characters; batches of four texts; model max length 256 tokens. Nonempty IDs unique within each list. Source ≤40,000 characters, JSON import ≤300,000 bytes. Integer cents 1–100,000,000; integer age 0–3650. Discount 0–2000 basis points; integer discount day 0–364 before integer net day 1–365. Finite financing rate 0–100%. Review owners ≤150 characters; notes ≤1000 characters. 180-second run timeout. Output shape, vector counts, normalized norms/dimensions and finite numbers are validated. Run identities guard asynchronous file/worker fetches and stale worker responses.

## Develop and publish

`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261113-10/`. Required per-app deploy scripts exist but **do not deploy this app alone**: root `npm run predeploy` and root `npm run deploy` preserve the combined collection. See parent README for Pages build verification.

See [VALIDATION.md](VALIDATION.md) and machine-readable test reports for actual observed outcomes, defensive fault injection and untested limits. Browser tests use this environment's Playwright and Chrome; financial tests use Node, artifact checks use Python standard CSV/JSON parsers. No real customer data is used.
