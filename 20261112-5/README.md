# Aging Harbor

An internal receivables-aging and follow-up worksheet for small-business bookkeepers. Informal invoice recipient descriptions are often not identical to legal customer names. Real local AI proposes account candidates; humans verify identities, dates and amounts before deterministic aging and export. This is distinct from payment allocation: it does not match bank transactions, split receipts or post entries.

## Use

1. Load **Workshop accounts** or **Creative accounts** (entirely synthetic), paste JSON, or import `.json`.
2. Set `asOf`, one three-letter `currency`, 2–6 `catalog` accounts (`id`, `title`, `description`) and 1–24 invoice `records` (`id`, `text`, `issued`, `due`, `amountCents`, `paidCents`). Amounts are integer cents. Include only invoices issued and cumulative payments received by the as-of date.
3. Explicitly click **Load AI & reconcile invoices**. Before this action, no model host is contacted. Progress shows file download and four-text inference chunks; cancellation terminates the worker. Retry starts a new worker. The 180-second timeout and errors never produce fake suggestions.
4. Review each account match, original source, candidate similarities, dates and amounts. Edit follow-up notes; approve or hold every invoice. Undo restores a review edit. Original inputs remain separate. Changing inputs cancels old work and invalidates results; editing a review invalidates exports.
5. **Apply reviewed worksheet**. Holds are retained but excluded from customer totals and reported separately. Export current reviewed JSON, invoice audit CSV, customer summary CSV or Markdown; copy the same Markdown. Discard removes the applied worksheet. Reimporting JSON restores originals, not approvals.

## Real AI and static deployment

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction with Transformers.js 4.3.2.
- AI computes normalized 384-dimensional mean-pooled embeddings for supplied account business descriptions/names and invoice recipient text. Cosine ranks all candidate accounts; it is not confidence, identity verification, a debtor-risk prediction or guaranteed relevance.
- CPU WebAssembly SIMD, module workers and several hundred MB RAM required. No WebGPU dependency; the tested default is WASM CPU. Desktop Chrome tested; physical phones, Firefox/Safari and low-memory devices unverified.
- Initial download approximately 50 MB: about 23 MB model/tokenizer from huggingface.co/hf.co and documented host CDN redirects, plus 27 MB same-origin WASM. Model files are resolved by Transformers.js; no user prompt is sent. No remote provider option or credentials.
- Vite bundles JS and the worker. The WASM factory is local under `runtime/`. The byte-identical shared binary is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier app when deploying the collection. See Vite's URL rewrite. The default is a genuinely static workflow.
- Cache API explicitly caches worker, runtime factory and WASM; Transformers.js caches model files. **Tested offline scope: a fresh worker doing another real inference within the already-open, warmed page. Offline reload/navigation is not supported or promised.** Eviction/private mode can require downloading again. No service-worker app shell.
- Module worker construction, missing WebAssembly, network failures, malformed/nonfinite/incorrect-size embeddings and timeouts show actionable errors without fabricated output. Run IDs guard late workers, delayed file imports and worker downloads.

## Deterministic output and constraints

`daysLate = max(0, asOf − due)` using UTC calendar days; due today is current. Buckets: current, 1–30, 31–60, 61–90 and 91+ days late. `balanceCents = amountCents − paidCents`. Approved invoice balances roll into customer buckets; fully paid invoices remain in the audit and do not increase the oldest unpaid age. Priority: oldest unpaid age descending, overdue cents descending, then customer ID. This is an explicit follow-up convention, not AI credit advice.

Hard checks: all source records survive; exact cent sums reconcile across invoices, customer buckets, approved/held partitions; unique IDs; nonnegative safe integer cents up to 1,000,000,000 per field; paid ≤ invoiced; valid ISO dates 1900–2200; issued ≤ due and issued ≤ asOf. One two-decimal currency with no conversion. Originals ≤18,000 characters, import/audit envelope ≤1 MB, descriptions ≤400 characters, titles ≤80, IDs ≤40; 256-token model context, four-text chunks. Imported text is only data and cannot request credentials or change authority.

CSV includes every reviewed invoice with source text, proposed/reviewed accounts, dates, cents, decision and note. Text fields are quoted with escaped quotes; spreadsheet formula-like prefixes are neutralized (including multiline values). Genuine numeric fields remain numbers. JSON is the lossless audit with separate `originalInput`, current `records`, `customers`, metrics and schema `aging-harbor/v1`. Markdown is a human worksheet. Exports reflect the applied current snapshot and are disabled after edits.

Baseline is **exact normalized customer-title equality**, compared with semantic candidate coverage. More candidates are not demonstrated accuracy; every proposal still requires review. No invented savings or percentages.

## Privacy and limitations

No keys, telemetry, content uploads, server inference, bank connection or external actions. Data exists in browser memory; only explicitly downloaded artifacts persist outside it. Caches store public model/runtime files, not invoice data. Never use real personal data in fixtures or commits.

Descriptions cannot distinguish similar legal entities. Negation/unrelated content can still receive a plausible top match; hold it. Duplicate IDs are rejected but duplicates under different IDs need manual detection. No credit notes/refunds, taxes, FX, interest, disputed debt, contacts, accounting certification or payment-timing reconstruction. As-of cumulative payments and completeness are user assertions; the app cannot verify them. Held invoices make the overview provisional. Verify against the authoritative ledger before any financial use.

## Development / publishing

`npm install`; `npm run dev`; `npm run predeploy` builds the individual app. Required scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not run per-app deploy** for the collection. Base `/daily-app2/20261112-5/`. Root `npm run predeploy` assembles all gallery apps into `deploy`; root `npm run deploy` publishes combined GitHub Pages. See root README.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Production browser tests use the actual model; only defensive/stale tests use explicitly labeled fault injection. `browser-test.cjs` can target `TEST_URL`, with `REPORT` selecting the output report. `core-test.mjs` verifies date boundaries and schema. Downloaded CSV is independently parsed with Python.
