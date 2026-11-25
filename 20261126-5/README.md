# Flowmark Ledger

A local-AI review desk for an investment-club analyst reconciling a small statement. AI interprets the meaning of short notes as **valuation, external contribution or external withdrawal**. After mandatory human review, exact integer capital accounting and reduced-fraction time-weighted returns separate observed portfolio growth from external money movements. No account access, trades, uploads or investment recommendations.

## Workflow

1. Paste/import source JSON. Choose either synthetic example to learn the schema. Supply one account, one currency label, opening capital at day 0 and events in exact statement order.
2. Explicitly **Load AI & classify events**. Real MiniLM embeddings retrieve the nearest described event profile. Inspect the original note, ranked cosine alternatives and profile descriptions. Similarity is not confidence. No keywords or canned AI responses substitute for inference.
3. Verify the event class, day and positive integer minor-unit amount for every row. Edit opening capital, annotate, approve or hold. Undo restores the previous review. Every edit invalidates the applied result and exports.
4. Apply reviewed events. Missing pre-flow marks, invalid chronology, exhausted capital, a missing closing mark or **any held event** block the whole-account return. Diagnostic steps and all originals remain exportable, never a silent partial-account return.
5. Export complete JSON, all-event CSV, Steps CSV, Markdown or copy the applied worksheet. JSON audit reimport restores original inputs, not prior approvals. Originals are never rewritten by review.

## Genuine AI: runtime, license, task and limits

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 quantized ONNX. Runtime: Transformers.js **4.3.2** / ONNX Runtime Web, normalized mean-pooled 384-dimensional embeddings on single-thread **WASM CPU**. No WebGPU is needed. AI matches paraphrased statement meanings to supplied profile descriptions; subsequent cosine ranking, schema checking, account validation and accounting are deterministic. AI does not extract numbers, verify statements, discover missing transactions or reliably handle negation/cash direction. It always proposes a nearest profile, including for unrelated or instruction-like text. Imported text has no authority; nothing executes it or requests credentials.

Actual final simple-fixture inference matched **7/8 event classes**. One pre-withdrawal valuation was proposed as a withdrawal; its missing-boundary error blocked performance until the test explicitly corrected it in review. The top-up example works from the uncorrected real proposals. Harder wording/negation probes matched only **2/5** desired classes, and unrelated instruction-like text still received a nearest class. These are tiny synthetic checks, not representative accuracy estimates. Review/holds are essential. See [observed validation](VALIDATION.md).

Descriptions/notes are independently capped at 200 characters; at most 6 profiles + 24 events = 30 texts, four per inference chunk. The shared tokenizer's actual model maximum is **512 tokens**. The worker passes `max_length:256`, but the feature-extraction implementation does not establish that shorter cap, so it is not claimed. Unusual Unicode can truncate. Model revision is not pinned: upstream changes can affect results.

## Deterministic accounting

Opening capital is the marked account value on day 0. A valuation contributes the exact growth factor `marked value / preceding post-flow capital`. Multiply all interval factors and subtract 1 for the cumulative time-weighted return. An external contribution adds capital; an external withdrawal subtracts it; neither changes the growth factor. **Every flow must immediately follow a same-day pre-flow valuation** in the supplied sequence. The final event must be a closing valuation after day 0. Intra-day order is supplied, not inferred.

Reduced BigInt fractions avoid cumulative floating rounding. UI percentages are rounded displays. Capital conservation is `opening + contributions − withdrawals + net gain = closing`. Each source-linked step records capital before/after and exact interval/cumulative factors. Baseline `net gain / opening capital` is computed on the same reviewed events; it ignores changing capital exposure and is not a substitute for time weighting. No invented time savings, confidence or percentage improvements.

Top-up example: factors `11/10 × 9/10`, return `−1/100` (−1%), versus net-gain/opening `−1/10` (−10%). Withdrawal/refill: factors `11/10 × 6/5 × 9/10`, return `47/250` (18.8%), versus baseline `1/10` (10%). Values are observed examples, not predictions.

Assumptions: reliable complete marks immediately before external flows, one account/currency, positive values. Internal trades, reinvested dividends and fees remain inside market values, not external capital. No zero-valued positions, full liquidation/reopening, short/leveraged negative balances, arbitrary missing valuation interpolation, multi-currency conversion, tax, annualization, money-weighted IRR, forecasts or certified reporting. Chronology and statement completeness cannot be established from short notes alone. Held events block performance rather than changing the account cohort.

## Privacy, loading, caching and supported devices

No API key, remote inference option, analytics or backend. Default user content goes only to a local worker. Network requests download static files, never send note text. No model-host request occurs before explicit AI loading. Documents/reviews stay in page memory; export to retain work.

First load is approximately **50 MB**: ~23 MB model, **26,861,777-byte** WASM, 548,645-byte worker, 53,057-byte factory, JS and tokenizer/config files. Hugging Face and its CDN host the model; all app/runtime assets are same-origin GitHub Pages files. Internet is required for uncached assets.

Requirements: current browser with WebAssembly SIMD, module workers, BigInt and sufficient memory. Desktop Chrome with GPU disabled is tested. Phone-width layouts are emulated, not physical-phone inference. Other engines/devices unverified. Cache API is used when available; private mode/eviction may require downloads. There is no oversized general language model or GPU requirement.

Cache API explicitly retains worker source, WASM factory/binary and model files. **Tested offline scope: a fresh worker doing real inference in an already-open, successfully warmed page with all networking disabled.** Cold offline navigation/reload is not promised; no app-shell service worker exists. Download/file and four-text chunk progress are shown; cancellation aborts worker fetch and terminates running workers. Timeout is 180 seconds. Worker construction/errors, unsupported APIs, malformed vectors, network failure and timeouts display actionable errors without fabricated results. Run IDs guard late callbacks; import reads use generation IDs.

### Immutable shared same-origin dependencies

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older builds and paths in the combined collection. `runtime-provenance.json` records exact bytes/SHA-256; `audit-assets.mjs` checks them. Reuse avoids ~27 MB duplicate runtime per utility and does not move inference to a server. Existing runtime-sharing rules are unchanged.

## Input and output contracts

Source ≤60,000 characters; imported `.json` source/audit file and envelope ≤1 MB. Source object: `title` ≤200 characters, `currency` three uppercase ASCII letters (a label only), `opening` a positive integer string of ≤12 digits, `profiles` 2–6 `{id,description,rule}` entries and `requests` 1–24 `{id,note,day,amount}` entries. Rules: `valuation`, `contribution`, `withdrawal`. Distinct IDs within each list: `[-A-Za-z0-9_]`, 1–40 characters. Descriptions/notes ≤200 characters; review notes ≤500. Day is a canonical whole-day string 0–36500; every amount is a canonical positive integer **minor-unit string**, not a decimal, float, formatted currency or exponent. Arrays, malformed JSON, duplicate IDs, unsupported files, invalid controls/unpaired surrogates, empty/oversized input and malformed vectors are rejected. Full audit reimport is allowed at maximum batch size and restores exactly the original source.

JSON preserves exact originals, edited review, holds, status/errors, integer money strings and reduced fractions. Event CSV quotes commas, quotes and embedded newlines; it retains every event, original and edited values. Formula-like text beginning `=+-@`, tab or CR is apostrophe-prefixed; JSON remains lossless. Steps CSV includes every event/held row and the whole-account `ready`/`blocked` status: diagnostic factors on a blocked trail are not a valid return. Markdown is a human-readable audit, not trusted executable HTML. Downloaded files reflect the applied reviewed state; all edits disable exports until reapplied.

## Build and validation

React + Vite; base `/daily-app2/20261126-5/`. Run `npm install` then `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish only through the root combined workflow**, never this individual deploy script.

`browser-test.cjs`: real production AI twice, known answers and explicit review corrections, 30-text maximum batch, review/undo/holds, clipboard, actual downloaded files, reimport, input limits, offline fresh-worker inference and desktop/phone layout checks. `defensive-test.cjs`: real failed downloads plus explicitly injected unsupported runtime, worker construction/error, malformed vectors, timeout and stale callback checks. `recovery-test.cjs`: actual real-model retries after failed downloads, newer real inference surviving an old callback and delayed file-read guards. `challenge-test.cjs`: real semantic limitations, not mocks. `core-test.mjs`: schema and hard boundary guards. `oracle-test.py`: independent Python Fraction accounting. `artifact-test.py`: independent JSON/CSV parsing and re-accounting of browser downloads. Gallery tests retain all earlier entries and categories. Asset audits compare public bytes and scan built text/source/network for secrets.

See VALIDATION.md for the observed checks and publication status. Physical phones, other engines, cold offline start and representative semantic accuracy are not claimed.
