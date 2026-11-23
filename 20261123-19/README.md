# Slab Ledger

A local-AI graduated usage billing audit for operations coordinators. Turn mixed service notes, supplied rate cards and billed totals into a reviewed, source-linked discrepancy worksheet. It never contacts billing systems or sends invoices.

## Workflow

1. Choose either synthetic batch, paste source JSON or import a `.json` file. Edit currency, plans, fixed fees and cumulative marginal tier bounds in the source editor. Set `upto: null` on the last tier.
2. Explicitly **Load AI & reconcile**. Read the download/device disclosure first. MiniLM embeds plan descriptions and usage context, then cosine ranking suggests a plan per record. Quantities and prices are not model inputs. Similarity is not confidence.
3. Inspect each source, ranked plan evidence and complete rate card. Correct the plan, exact unit, quantity or billed cents. Approve or hold every record. Every substantive edit renews approval. Undo review edits independently of the immutable originals.
4. **Apply reviewed scenario**. Deterministic arithmetic allocates all units into marginal slabs, adds the fixed fee and checks unit conservation. Wrong units, fractional/negative/out-of-bounds numbers are blocked. Held/blocked records are not included in release totals.
5. Review billed-minus-expected discrepancies and the all-units baseline. Download the current reviewed JSON, CSV, Markdown or approved-valid-only Release CSV, or copy Markdown. Review edits invalidate applied exports. JSON audit reimport restores originals only, requiring new inference/review.

The baseline is the fixed fee plus the whole quantity times the highest **occupied** tier's rate, not an alternative contract interpretation. At an exact upper bound the lower tier remains occupied; zero usage still incurs the fixed fee. Displayed counts/deltas are computed from current reviewed valid rows, not AI accuracy, observed time savings or realized savings. Each record independently resets its slabs and fixed fee: do not split one billing period into multiple rows.

## Real model, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX model, approximately 23 MB. Normalized mean-pooled, 384-dimensional feature extraction; batches of four.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WebAssembly CPU single-thread inference. The feature-extraction pipeline's extraneous `max_length:256` argument does **not** enforce 256: tokenizer configuration is 512 tokens. Source contexts/descriptions are separately bounded to 200 characters. No generative model or structured-output hallucination is involved; finite normalized vectors are validated before ranking.
- Same-origin immutable shared worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; WASM factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; approximately 27 MB binary: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/assets in collection deployment. See asset audit JSON for byte counts/hashes.
- First use needs internet for these same-origin runtime downloads and public Hugging Face/CDN model files. The pinned immutable worker currently requests model revision `main`, not a pinned model revision. Upstream model changes could affect matching. Runtime and model files are browser cached; model loading displays file progress, inference displays processed-text counts, and cancellation terminates the worker. Timeout: 180 seconds; retry explicitly. No fake AI fallback.
- Worker source is cached in `slab-ledger-worker-v1`; factory/binary in the inherited runtime cache; model files in Transformers.js cache. Fresh-worker inference with **all network disabled** passed after a complete online run in an already-open page. Offline reload/navigation is **not** claimed; app-shell startup and cache eviction may need internet. Private browsing/cache limits can prevent caching.
- Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB available memory tested. GPU disabled during primary workflow tests: WebGPU is not needed. Physical phones and other engines not tested. Narrow desktop-emulated layouts at 320/390 px tested.
- User notes, units, quantities and prices stay in browser memory, except artifacts the user explicitly copies/downloads. No localStorage designs, analytics, uploads, remote inference or provider integration. Download requests are model/runtime files, not user-content uploads. No credentials needed, requested, stored or bundled. Imported text is data, never executable tool instructions. All fixtures are fictional.

## Input and schema limits

Source JSON shape:

```json
{"currency":"USD","plans":[{"id":"service","description":"Service meaning","unit":"page","fixedCents":200,"tiers":[{"upto":100,"rateCents":10},{"upto":null,"rateCents":8}]}],"records":[{"id":"period-1","context":"Office document printing","unit":"page","quantity":150,"billedCents":1600}]}
```

This abbreviated shape needs a second plan to meet the actual 2–5-plan minimum; use either complete in-app example. Plans have unique IDs ≤60 chars, descriptions ≤200, units ≤30 and 1–8 tiers. Earlier cumulative bounds strictly increase and are ≤1,000,000; last bound is null. Fixed fees/rates are whole cents ≤1,000,000. Records: 1–24, unique IDs ≤80, contexts ≤200, exact unit ≤30, quantity integer 0–1,000,000, billed integer cents 0–100,000,000. Source ≤24,000 characters; imported source/audit file ≤1,000,000 bytes. Reviews have ≤2,000-character multiline notes. One three-uppercase-letter currency across the batch; no conversion. Envelope reimport allows extra metadata while revalidating the bounded original source.

Structured output includes immutable `originalInput`, editable `reviews`, one `checks` entry for each source, exact-cent slab witnesses, statuses and computed metrics. JSON retains exact strings. CSV includes original and reviewed values, plan, decision, status, charge, baseline, delta and note, using quoted RFC-style fields and CRLF. Formula-leading text (`= + - @ tab CR`) receives a leading apostrophe for spreadsheets; numeric signed deltas remain numeric. This protective prefix is intentional, not byte-identical text. JSON is the lossless format. Release CSV omits held/blocked rows; full audit exports preserve them. Markdown includes complete source/review/check objects. All export totals are cents, not formatted decimal currency.

## Limitations

Semantic similarity is not contract entailment. The six simple known-answer records matched, but a challenge mentioning **not cloud archive storage** and actual water usage incorrectly chose storage. An exact-unit check blocked this particular error; it cannot protect against wrong same-unit plans. Mandatory human review remains essential. No automatic confidence percentages or guarantees.

Supports **graduated** integer-unit tariffs only. No taxes, proration, fractional currency/subcent rates, rebates, minimum bills, pooled allowances, multiple periods, currency conversion, rate-effective dates or genuine all-units contracts. Unit identity must be independently verified. It audits supplied assumptions, not whether a real contract or invoice is legally correct. No payments, account changes, data deletion or remote actions.

## Development and publication

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Per-app scripts intentionally retain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not invoke individual deploy for this collection**. Vite base `/daily-app2/20261123-19/`. Publish through root `npm run predeploy` and root `npm run deploy`, retaining all older apps and shared runtime paths. See root README.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable evidence beside it. `node core-test.mjs`, `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `node async-race-test.cjs`, `node ai-impact-test.cjs`; production/assembled/public URL overrides are documented in those scripts. Mock worker messages appear only in defensive/race tests, never successful inference checks or product code.
