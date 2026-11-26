# Coupon Trail

A local-AI **fixed annual bond handoff workbench** for an investment-accounting analyst receiving short acquisition and cash-flow notes. It turns role reconciliation into an editable evidence register and a downloadable effective-yield amortization schedule. It is not a trading system, posting tool, source-contract verifier or financial-reporting certification.

## Complete workflow

1. Choose either synthetic example, paste source JSON or import a `.json` source/audit file.
2. Supply `title`, three-uppercase-letter `currency`, integer `years` (1–30) and 1–24 `records`. Each record has a unique ASCII `id`, a short `note` and nonnegative integer `amountMinor`; 100 minor units = one currency unit, regardless of currency code. See `src/core.js` for complete synthetic examples. All records concern **one** bond and currency, not a portfolio.
3. Explicitly select **Load AI & classify cash-flow notes** after reading the download disclosure. Real local neural embeddings compare each note with five role descriptions: initial purchase consideration, direct acquisition fees, annual coupon receipts, final principal redemption, or excluded ongoing/unrelated charges.
4. Inspect source snippets and cosine-ranked reference descriptions. Correct roles/amounts, add multiline review notes and approve or hold every record. A nearest class is always proposed, even for irrelevant content; scores are similarities, **not confidence percentages**. Undo restores prior review/completeness state (up to 40 edits).
5. Confirm the scope/completeness attestation and apply the reviewed schedule. Pending records prevent application; holds, incomplete attestation or missing positive purchase/redemption block the complete schedule. Audit exports remain available for blocked applications. Check your contract: missing notes are not detected by the model.
6. Export current applied JSON, complete audit CSV, Markdown or annual worksheet CSV; copy current Markdown. Any review edit invalidates exports until reapplied. Reimporting audit JSON restores **original input**, not approvals. Originals remain unchanged throughout. Work is memory-only: download before leaving.

## What AI actually does

`Xenova/all-MiniLM-L6-v2`, quantized q8, is an Apache-2.0 sentence encoder: <https://huggingface.co/Xenova/all-MiniLM-L6-v2> / <https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2>. Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web 1.31.0-dev (MIT) execute mean-pooled, normalized 384-dimensional embeddings on WASM CPU in a module worker. Five references plus every input note are inferred in chunks of four texts. Vector count, dimensions, finite elements and normalization are validated before cosine ranking.

This resolves varied cash-flow wording against explicit role meanings. It does not extract/guess amounts, authenticate a financial instrument, determine accounting policy, execute document instructions or generate postings. There is no fake/sample-response inference, regex classifier, remote inference provider, server dependency or API-key path. Errors never silently substitute deterministic classifications.

The shared feature-extraction pipeline's `max_length:256` argument is not forwarded; its actual tokenizer ceiling is 512 tokens (`tokenizer-audit.json`). Notes are bounded further to 200 characters. Upstream model revision is `main`, not an immutable model commit; future host changes can alter results.

## Deterministic calculations and comparison

Approved purchase consideration + direct acquisition fees = opening carrying basis. Approved coupon rows sum to the **annual recurring receipt**, and principal rows sum to redemption received **once**, at final maturity. Excluded amounts remain in the audit, not in this schedule. Optional coupon rows can sum to zero for zero-coupon instruments; direct fees may be absent.

A bounded bisection solves the annual effective yield `y` from:

`basis = Σ[t=1..n] coupon/(1+y)^t + principal/(1+y)^n`

Supported yield bracket: −95% through 1000% annually. Out-of-bracket terms produce an actionable error. Yield is a numerical estimate, not a percentage claimed as accuracy. Every year: interest = opening × yield rounded to nearest minor unit (JavaScript `Math.round`, ties toward +∞); amortization = interest − coupon; closing = opening + amortization. **The final year's interest explicitly adjusts accumulated rounding** so closing carrying amount equals principal. The worksheet exposes that adjustment separately; closing is before the final principal receipt. This is not a claim that the last year's adjusted interest is the exact unrounded effective-rate product.

The schedule verifies `total interest = n × coupon + principal − basis`. Straight-line baseline carrying amounts spread `(principal − basis)` across the same annual periods, rounding each cumulative amount; its total interest is identical but timing differs. Displayed comparisons are the **computed first-year interest gap and maximum carrying-value gap**, not measured time savings or general accuracy. PV residual in minor units is disclosed. Integer source sums and schedule amounts remain safely below JavaScript's safe-integer limit at enforced bounds; discounting uses floating point. Tiny amounts and long terms can magnify the final rounding adjustment; inspect it, rather than treating the worksheet as ledger-ready.

## Downloads, requirements, privacy and offline scope

Before explicit loading, no model-host download occurs. Initial download is approximately **50 MB**: ~23 MB quantized ONNX model, ~27 MB WASM, plus tokenizer/runtime code. Internet is required initially. Model/config/tokenizer assets come from Hugging Face and `hf.co`/Xet CDN redirects. App, worker and runtime assets come from the same GitHub Pages origin. Default content stays in local memory; request capture checks downloads are GETs without bodies or source-note data in URLs. Only synthetic content is included. No credentials, accounts, remote submissions or provider integration exist.

Current desktop Chrome/Edge with WebAssembly SIMD, module workers and sufficient memory is recommended. CPU/WASM is the default and was tested with GPU disabled; no WebGPU fallback is needed. Physical phone inference, other engines and low-memory performance have not been established. UI was exercised at desktop and narrow-phone widths.

Cache API stores model/runtime downloads, never user notes. Worker source, the module factory and WASM binary are explicitly cached, not merely left to HTTP caching. **After a successful run, fresh-worker inference in an already-open warmed page was tested with all networking disabled.** Offline reload/navigation is not promised (no service worker). Cache eviction, private browsing or unavailable storage can require redownloads. Clear browser site data to remove cached weights/runtime.

Immutable shared same-origin dependencies, verified by SHA-256 in `runtime-provenance.json`, must remain published:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Reusing these avoids another ~27 MB runtime copy. Protocol: `{id,texts}` → download progress, batch progress, `{id,vectors}` or error. Dependencies resolve against page origin even for cached blob workers. Cancellation terminates the worker, aborts pending source fetch and invalidates the run identity. Source changes cancel inference and clear approvals/results. Worker construction/network/runtime errors, malformed vectors/messages, unsupported capabilities and a 180-second timeout fail visibly with retry guidance. Imported strings are data; no tool authority or credential request is executed.

## Formats, limits and known limitations

Source ≤60,000 characters; JSON/audit import ≤8 MB; 1–24 unique records; id 1–32 ASCII letters/digits/underscore/hyphen; title ≤100 characters; note ≤200; reviewer note ≤500; each amount integer 0–10,000,000,000 minor units. Currency is an uppercase three-letter label, **not validation of a real currency or its minor-unit convention**. Disallowed control characters, malformed Unicode (unpaired surrogates), unsafe/fractional numbers and unsupported files fail. Term is an integer 1–30 annual periods. Maximum inference: 29 texts / eight chunks. Separate envelope and source limits allow maximum-batch audit reimport.

JSON `coupon-trail-v1` preserves original source, current review, all rows, exclusions/holds, totals, blockers and annual schedule. Audit CSV preserves original/edited amounts and notes. Formula-like text beginning `=`, `+`, `-`, `@`, tab or CR is apostrophe-prefixed; genuine numeric fields remain numbers, including negative interest/amortization. CSV quotes commas, quotes and embedded newlines with CRLF row endings. Worksheet CSV has year, opening, coupon, effective interest, amortization, closing, final rounding adjustment and straight-line comparison, all monetary fields in minor units. Markdown includes the applied annual schedule and complete source review.

Scope: a single fixed annual-coupon instrument purchased immediately after coupon payment. No accrued-interest clean/dirty-price reconciliation, semiannual/irregular periods, day-count conventions, step/floating coupons, embedded options, early redemption, default, FX or taxes. Classification of fees is a human policy decision; the example assumes directly attributable acquisition costs belong in basis. This does not support fair-value accounting or establish the appropriate reporting treatment.

Observed simple fixture labels matched 9/9, but these are easy synthetic examples, not representative accuracy. An irrelevant coffee-machine request was assigned an annual coupon role; nearest-reference inference has no reliable out-of-domain rejection. A negated broker/custody note correctly selected exclusion in the observed run; general negation understanding is not established. All suggestions require approval or hold.

## Build, tests and publication

React + Vite; base `/daily-app2/20261126-22/`; per-app `gh-pages` and required `predeploy: npm run build`, `deploy: gh-pages -d dist` scripts are present. Run `npm install` and `npm run predeploy`. Publish only through the root combined-site workflow, not this app's deploy command.

- `node core-test.mjs`; `python3 artifact-test.py core-` — deterministic checks plus independent 70-digit Decimal yield/schedule oracle.
- `python3 serve-built.py --port 7810`; `node browser-test.cjs`; `node defensive-test.cjs`; `python3 artifact-test.py local-` — production bundle, real Chrome inference, exports, warmed-page offline, layouts and injected defensive failures.
- After root assembly: `python3 serve-built.py --assembled --port 7811`; set `APP_URL`, `PREFIX` for browser tests and parse the corresponding artifacts.
- `python3 bundle-audit.py`; `python3 asset-audit.py <base-url> <prefix>` — provenance, credential-pattern scan and exact served-byte comparison.
- `node gallery-test.cjs`; `BASE_URL=<gallery-url> PREFIX=<prefix> node gallery-browser.cjs` — script compilation, preservation, live render/search and old categories.

Tests use the existing local Playwright installation and installed Chrome, as referenced in source. See [VALIDATION.md](VALIDATION.md) for observed results and untested scope. No digest is sent by this builder.
