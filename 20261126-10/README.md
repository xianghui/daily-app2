# Rate Anchor

Local AI-assisted foreign-currency remeasurement review for month-end preparers. Unlike existing currency-path, depreciation and rental-discounting apps, this workflow distinguishes **fixed-money balances from historical-cost goods/services** and produces a signed carrying-value bridge, not a payment schedule or currency-routing recommendation.

## Use

1. Choose Workshop close or Archive close (synthetic), paste JSON, or import `.json`.
2. Supply the closing exchange rate, reference carrying rates, signed foreign balances and 2–6 described treatment profiles. Click **Load AI & suggest treatment** explicitly.
3. Review original notes and cosine-ranked profile evidence. Edit profile, balance, reference rate and reviewer note; approve or hold each balance. Undo is available; originals never change. Set batch closing rate in source JSON and rerun if needed.
4. Apply the reviewed batch. Inspect reference + movement = reviewed, the exact unrounded numerator, and the all-closing baseline. Holds block complete release and remain visible as partial diagnostics.
5. Download JSON, CSV, Worksheet CSV or Markdown, or copy Markdown. Any review edit invalidates exports. Reimported audit JSON restores **original inputs**, not approvals or trusted calculations.

## Input/output contracts

Source: `{title, foreign, functional, closingRate, profiles:[{id,description,rule}], requests:[{id,note,balance,referenceRate}]}`. See `src/core.js` for complete examples. `rule` is `closing` or `historical`; IDs are unique ASCII tokens. Currency labels are distinct three-letter uppercase strings; **the user must ensure both have two decimal places**. No metadata-based currency-minor-unit conversion is provided.

Balances are signed integer **strings**, ≤12 digits excluding sign; zero allowed, negative zero forbidden. Assets positive, liabilities negative. Rates are positive decimal strings, ≤9999.999999, ≤6 decimals, **functional major units per one foreign major unit**. Because both currencies have two decimals, the same ratio multiplies minor units. Reference rate supports the supplied carrying amount: historical rate for cost balances, prior carrying rate for money balances. No intervening quantity changes, settlement, depreciation or impairment. Closing rate is batch-wide; reference rates may differ per record.

Limits: 1–24 balances, 2–6 profiles, ≤200 characters per note/description, title ≤200, reviewer note ≤500, source ≤60,000 characters, source file ≤1 MB, exported audit import ≤8 MB (originals still obey source limits). Invalid controls/unpaired surrogates are rejected. Imported content is text data, never executed or trusted as instructions.

JSON retains originals, reviews, ranked evidence, held rows and exact computations. CSV includes every source/review row; Worksheet CSV includes held placeholders and exact calculation columns. Formula-like text is apostrophe-prefixed; validated integer numeric cells retain exact decimal bytes, including negative liabilities and values above JavaScript safe integer. Consumers must import such columns as text/arbitrary-precision numbers to avoid spreadsheet rounding. Markdown is a human review report; imported markup is never rendered in the app.

## Real AI, runtime and licenses

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8; Transformers.js 4.3.2 / ONNX Runtime Web. Single-thread **WASM CPU**, normalized mean-pooled 384-dimensional embeddings. Real model inference embeds supplied descriptions and notes. Deterministic cosine retrieval chooses nearest profile; AI materially links varied account wording to rate treatment. It does **not** extract amounts, fetch rates, determine accounting policy or execute tools. No canned responses, heuristic substitute, paid service, API keys or optional remote integration.

Shared worker protocol/runtime implementation inspected. Four texts per chunk, at most 30 texts/eight chunks. All vectors validated for count, 384 dimensions, finite values and near-unit norm. The worker passes `max_length:256`, but the feature-extraction pipeline does not forward it; actual tokenizer maximum is **512**, confirmed from host tokenizer config. Each model input is bounded to 200 JS characters; unusual text can truncate. Model revision is `main`, not pinned; future host changes may change outcomes.

To avoid duplicating ~27 MB in a nearly full collection, preserve these immutable same-origin runtime dependencies:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Their SHA-256 provenance is in `runtime-provenance.json`; assembly/public byte checks must preserve these originating apps. App code, React and runtime are same-origin, not CDN imports. Upstream package licenses remain applicable.

## Privacy, network and devices

UI discloses first-run download **about 50 MB**: ~23 MB quantized weights + ~27 MB WASM, plus JS/tokenizer. Model/config/tokenizer download from Hugging Face/CDN; runtime from site origin. No model-host traffic before explicit Run. Downloading model weights is **not uploading user content**. Inputs stay in browser memory; no telemetry, analytics, remote inference or account actions. No credentials used or embedded.

Cache API stores worker source, WASM factory/binary and model assets where available. Tested offline claim: **fresh-worker inference in the same warmed already-open page with all network disabled**. Offline startup/reload/navigation is not promised. Storage eviction, private mode and denied cache may force downloads. Failures show actionable errors; cancellation terminates workers/aborts pending worker fetch; 180-second timeout and retry available. Run IDs guard late worker callbacks and imports.

Requires current browser with WebAssembly SIMD, module workers, BigInt and enough model memory. **No WebGPU needed.** Tested desktop Chrome with GPU disabled. Narrow 320/390px layouts tested; physical phones, other browsers and offline startup unverified. On errors restore internet, enable WASM/workers and try current desktop Chrome. Do not assume an old phone can run inference.

## Deterministic arithmetic and scope

Parse rates as exact millionths. For signed balance B, reference rate H, closing C:

- reference carrying = half-away-from-zero(B × H), rounded once to functional minor units;
- reviewed carrying = half-away-from-zero(B × C) for closing, otherwise the reference carrying;
- signed movement = reviewed − reference;
- baseline = half-away-from-zero(B × C) for every approved record;
- difference = reviewed − baseline.

BigInt preserves exact decimal products; rounding is symmetric for liabilities. Sum **rounded row endpoints**, not a rerounded aggregate product. Reference + movement = reviewed holds per row and in totals. Zero balances/equal rates legitimately yield zero differences. Totals are approved-only signed nets, not a balanced trial balance or statement of FX profit. Partial holds block complete batch release. Comparisons are computed discrepancies, not measured savings or AI accuracy.

Bounded historical-cost remeasurement aid only. Excludes fair value, impairments, depreciation, foreign-operation translation/consolidation, hedges, taxes, equity, refunds and changed/settled balances. No postings or accounting-policy authority. Mixed/irrelevant/negated notes can fail nearest-profile inference. A refundable-advance challenge actually selected historical treatment despite being cash-refundable; it is explicitly out of scope and **must be held**, not accepted. See `VALIDATION.md` for observed results.

## Build and checks

`npm install`; `npm run predeploy` builds React + Vite with base `/daily-app2/20261126-10/`. Per-app deploy script is retained solely for contract compatibility—**publish from repository root**, never replace the collection with an individual app.

- `node core-test.mjs`: schema guards, signed half ties, 600 arithmetic cases.
- `python3 serve-built.py --port 7790`: serve actual production bundle and shared assets.
- `node browser-test.cjs`: real inference, review/export/cancel/offline/batching/mobile checks.
- `node defensive-test.cjs`; `node recovery-test.cjs`: failures, stale runs, guarded imports and real retry.
- `node challenge-test.cjs`: negation, unsupported refundable advance and instruction-like text.
- `python3 artifact-test.py [local-|assembled-|public-]`: independent Python Decimal and CSV/JSON checks.

Browser tests require this environment's Playwright and Chrome; configure the import path if reproducing elsewhere. `APP_URL` and `PREFIX` select the production URL and audit filenames. Only the defensive fault suite injects workers; successful workflow/offline/public checks use real model inference.
