# Deferral Folio — 20261126-7

A local-AI prepaid-contract handoff workbench for small-business finance coordinators. Its distinct task is monthly recognition planning: distinguish continuous service coverage from goods accepted at a point in time, review the evidence, and preserve every minor unit in a monthly worksheet. Earlier asset depreciation, processor reconciliation and price/volume tools do not perform this workflow. The gallery was parsed in full before selection; snapshot: `gallery-before.json`.

## Use

1. Choose **Studio prepayments** or **Workshop handovers**, paste source JSON, or import a `.json` file.
2. Read the download/privacy disclosure, then explicitly **Load AI & suggest treatments**. No model download occurs before that action.
3. Check the original note and the two supplied policy descriptions/cosine alternatives. Edit profile, value, service start/end or delivery month. Approve each treatment or hold/reject it. The bulk approval button is a human action, not automatic acceptance.
4. Set the report month and apply the reviewed treatments. Resolve held contracts or invalid method/date combinations; blocked worksheets show partial diagnostics, not complete totals. Undo restores the prior review/cutoff and invalidates any applied export.
5. Download the current JSON audit, all-contract CSV, monthly Schedule CSV, Markdown worksheet, or copy the Markdown. Any edit disables exports until reapplied. Source JSON reimport restores originals only, never silently reinstates approvals.

## Real AI, not a synthetic response

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings.
- Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. WebGPU is not required and there is no remote-provider fallback.
- AI embeds the user-supplied treatment descriptions and free-text contract notes, then cosine retrieval proposes a supplied profile. This resolves semantic phrasing rather than keywords; no dates or amounts are inferred. Similarity is not confidence. Every decision requires human review.
- Input text is data, never authority. There are no tools, external actions or credential requests available to the model. There is no API-key feature.
- Subsequent inclusive-month allocation, remainder distribution, validation, conservation and baseline comparison are deterministic BigInt arithmetic.
- The fixture arrays in `src/core.js` supply synthetic **inputs**, not model responses; successful browser tests run the actual quantized model. Defensive tests alone inject bad workers/messages.

### Runtime dependencies and cache

Approximately **50 MB** first download (about 23 MB weights + 26,861,777-byte WASM, plus tokenizer and JS). Model files download from `huggingface.co` and its Hugging Face/Xet CDN. The model revision is not pinned; the observed model resolver used commit `751bff37182d3f1213fa05d7196b954e230abad9`. No user text enters download URLs or bodies. Sanitized paths/query-key names are recorded, never temporary signed query values.

The app bundles its React/UI code. To avoid multiplying the collection size, it explicitly reuses these immutable, same-origin production assets, whose hashes/byte counts were checked in `runtime-provenance.json`:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes)
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes)
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes)

Preserve these originating apps/assets during combined deployment. The worker accepts `{id,texts}`, processes four texts per chunk and returns `{id,type:'result',vectors}`; batch/progress/error messages share the same run ID. The hook caches worker source and uses a blob module worker; the worker Cache API bridges its runtime module/binary and Transformers.js caches model files. Missing SIMD/module-worker support or downloads fail visibly. Run identities guard fetches/callbacks; cancellation aborts fetches, terminates workers and prevents stale results. Timeout is 180 seconds; retry always uses the real model.

**Tested offline scope:** after successful online load, creating a fresh worker in the same warmed, open page and running actual inference while browser network is blocked. **Not promised/tested:** cold offline navigation, reload, persistence after cache eviction, private-browsing persistence. There is no app-shell service worker. Internet is required initially and after eviction.

## Formats, limits and accounting model

The source is a JSON object: `title`, three-letter `currency`, `reportMonth`, `profiles`, `requests`. Each profile has unique ASCII `id`, `description`, and `rule` (`service` or `delivery`). Each request has unique ASCII `id`, `note`, `value`, `startMonth`, `endMonth`, `deliveryMonth`. Use empty date strings for irrelevant fields. See the synthetic examples in `src/core.js`.

- 2–6 profiles; 1–24 contracts; at most 30 texts/eight four-text chunks.
- Notes/descriptions ≤200 characters. Runtime feature-extraction call uses truncation; actual tokenizer `model_max_length` is 512. Its `max_length:256` pipeline call does **not** establish a 256-token guarantee; unusual text may still truncate. Character bounds are enforced before inference.
- Source ≤60,000 characters. Files/audit envelopes ≤1,000,000 bytes (import also bounds characters), `.json` only. Exports from maximum batches can be reimported.
- Values are positive integer minor-unit **strings**, ≤12 digits. No currency conversion or currency-exponent inference. Use one consistent minor unit per file.
- Months are strict `YYYY-MM`, 2000–2099. Service ranges are inclusive and 1–60 months. Delivery requires a valid acceptance month. Irrelevant dates remain in the audit and do not affect allocation.
- Service value `v` over `n` months: allocate integer quotient to each month, with one extra unit to each of the first `v mod n` months. Thus even a value smaller than its month count conserves exactly; zero-valued monthly slices are allowed. Delivery allocates all value to one month.
- Report month splits the schedule into prior/current/future; recognized-through is prior + current. Exact source value must equal prior + current + future for every approved ready record and the ready batch. Original input is never overwritten. Held or invalid records remain in all-contract exports and as placeholders in schedule CSV, and block complete totals.
- Baseline: recognize each eligible prepaid contract's entire value immediately; compare with the reviewed recognized-through amount. The computed difference is future allocation, not accuracy, cash balance or time saved. For blocked worksheets both baseline and reviewed totals use only eligible ready records and are explicitly partial.

This is a deliberately simplified planning worksheet assuming supplied value is prepaid. It does not determine contractual performance obligations, legal transfer of control, accounting standards or tax treatment. No daily proration, multi-obligation allocation, refunds, variable consideration, financing, foreign exchange, invoice/cash tracking or journal posting. Review actual contracts and applicable policies separately.

## Review/export integrity

JSON preserves complete originals, review layer, source-linked rows, monthly slices, report cutoff, metrics and all errors. Contract CSV retains every original note/value plus current reviewed fields and decisions. Schedule CSV preserves each slice and held/blocked placeholders. Markdown includes the source/reviewer evidence and full schedules. RFC 4180 quoting preserves commas, quotes and newlines; formula-like CSV strings beginning `= + - @ TAB CR` receive an apostrophe. CSV is an export artifact, not an import format. JSON is the round-trip source format.

## Requirements, privacy and limitations

Current browser supporting WebAssembly SIMD, module workers, BigInt, blob modules and sufficient memory. Real tests use desktop Chrome with `--disable-gpu`. Physical phones, non-Chrome engines and low-memory hardware are unverified. Phone-width layouts are tested, not claims of physical-device inference performance.

All contract content and review state stay in browser memory until the user exports/copies. External requests are GET-only model-file downloads, not inference uploads. No shared keys, agent credentials, telemetry, backend, payment or account connections. Nothing is persisted except model/runtime caches; unsaved work is lost when closing the page.

Observed model quality: both simple batches matched **6/6** expected suggestions; this is a small synthetic check, not an accuracy claim. A negated hosting-versus-delivery challenge was **wrong** (suggested service when delivery was expected). Do not rely on similarity to understand negation, compound obligations, off-topic records or accounting policy. Hold/split these and verify every proposal.

## Run and validate

```sh
npm install
npm run predeploy
node core-test.mjs
# Serve the built app under /daily-app2/20261126-7/ and preserve shared runtime paths.
node browser-test.cjs
node defensive-test.cjs
node recovery-test.cjs
node challenge-test.cjs
python3 artifact-test.py
```

`browser-test.cjs` accepts `APP_URL` and `PREFIX`; it downloads actual artifacts, inspects network requests, tests inference/offline batching/review/failure behavior and captures 1440/390/320px screenshots. Playwright is resolved from the existing workspace installation. See `VALIDATION.md` and machine-readable reports for observations and limitations.

## Publish contract

Vite base `/daily-app2/20261126-7/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages installed. **Publish only from the collection root**, via root `npm run predeploy` / `npm run deploy`, never this app's deploy command. Root workflow preserves all gallery apps and assembles `deploy/`. Verify matching Pages commit, public real inference, gallery, and worker/runtime hashes after deployment. No builder digest is sent.
