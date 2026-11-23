# Tie Ledger

A rounding-policy preflight for finance operations analysts preparing mixed-source decimal imports. Source notes describe the originating process, but the contract-specific tie rule is easily lost. **Real local AI retrieves a proposed supplied policy from that context**; mandatory human review precedes exact line-by-line cent quantization and reviewed exports. No payment or accounting system is connected.

This is not the collection's locale-number parser, balanced integer-table rounding optimizer, or repeated-reading interval checker. It audits signed fractional-cent quantization under different source contracts, including exact ties, large decimals and explicit toward-zero truncation.

## Workflow and formats

1. Choose a synthetic example, paste JSON or import source/audit `.json` ≤1 MB. Provide 2–5 `plans` and 1–24 `records`. Edit descriptions and constraints in JSON.
2. Explicitly click **Load AI & reconcile**. First run needs internet and approximately **23 MB model + 27 MB CPU runtime**, plus app/worker code. Progress, cancellation and errors are shown. No model-host traffic before this action.
3. Review each original source context, cosine evidence and proposed rounding policy. Change policy or amount, add notes, approve or hold every record. Policy/amount edits reset approval; every review edit invalidates exports. Undo retains the last 100 review states. Originals remain unchanged.
4. **Apply reviewed scenario** calculates exact cents, tie/remainder witnesses, output-minus-input residuals and a ready-only total. Held/invalid records remain in complete audits and are excluded from the release total.
5. Download complete **JSON/CSV/Markdown**, ready-only **Manifest JSON**, or copy Markdown. Audit reimport restores originals, not historical approvals, and requires fresh inference/review. Exports always use the current applied snapshot.

```json
{"plans":[{"id":"bank","description":"Bank settlement nearest cents, exact half cent chooses an even cent","mode":"half-even"},{"id":"invoice","description":"Merchant invoice nearest cents with ties away from zero including refunds","mode":"half-away"}],"records":[{"id":"credit-1","context":"Customer merchant invoice credit note with halfway refunds rounded away from zero","raw":"-1.005"}]}
```

Policies: unique ID ≤60 characters, description ≤200 and `mode` = `half-even`, `half-away` or `truncate`. Records: unique ID ≤80, nonempty context ≤200 and raw string ≤60. Source JSON ≤24,000 characters; notes ≤2,000. Audit envelopes have a separate 1 MB limit while extracted originals still meet source bounds. Structured vectors and reviews are validated; wrong counts, nonfinite/non-unit vectors, invalid policies and incomplete approvals fail closed.

## Real model and deterministic boundary

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). Single-thread **WASM CPU**, normalized mean-pooled **384-dimensional embeddings**. Contexts and supplied policy descriptions are embedded, then cosine ranked. Raw amounts are not model inputs. Four-text chunks; texts ≤200 characters, actual tokenizer maximum 512 tokens (the feature-extraction pipeline ignores supplied max_length 256). Upstream model revision is `main`, not immutable; future changes may alter ranking.

AI materially changes proposed policy and therefore output: the same `1.005` yields `100` cents under bank-even context and `101` under merchant-away context in real-model tests. Decimal validation, integer arithmetic, review gating, totals, comparisons and artifact generation are deterministic, not marketed as AI. No generative output, canned responses or silent heuristic fallback.

**Limitations:** cosine is not confidence or contract verification. Unrelated contexts always have a nearest policy. The competing-negation probe selected bank-even instead of the intended merchant-away. The 12 simple fixture labels are not a general accuracy benchmark. Verify source-system contracts; hold uncertain records. The model does not infer currency, legal requirements or aggregate-first rounding policy.

## Exact arithmetic and baseline

One currency per batch, fixed **two-decimal minor units**, independently rounded lines. ASCII decimal notation only: optional `+`/`-`, canonical integer part with ≤24 digits, optional fraction of 1–12 digits. No leading integer zeros other than zero, whitespace, grouping, exponent, currency signs or locale conversion. Invalid strings become blocked records, not guessed amounts.

For absolute coefficient n and denominator 10^fractionDigits, divide n×100 into quotient q and remainder r. Nearest rules increment when 2r exceeds denominator. At equality, half-even increments only odd q; half-away always increments. Truncate never increments. Apply the sign afterward; signed zero normalizes to zero. BigInt prevents floating precision loss. The exact signed residual is output minus input. Fixed-two-decimal output reparses to the exact integer cents; values remain strings in JSON so large amounts are preserved.

Baseline: `Math.round(Number(raw) * 100)`. Only safe-integer results are compared; others are counted as baselineUnavailable. Differences reflect **both tie policy and binary floating behavior**, not solely floating error or a benefit guaranteed for all inputs. Metrics are recomputed from approved valid rows: ties, differing comparable rows, ready/held/blocked counts and exact totalCents. No accuracy/confidence percentages or time-savings estimates. Rounding before summing is intentional; no aggregate-first tax or currency conversion support.

## Privacy, supported devices and cache

No credentials, paid service, analytics, optional remote provider, content uploads or accounting writes. User contexts, amounts and reviews remain in browser memory; exported files are explicitly downloaded locally. Imported instructions are inert data and cannot request credentials or call tools. All fixtures are synthetic.

Public model files download from Hugging Face/CDN; app/runtime files download from this same GitHub Pages collection. Current desktop Chrome with **module workers, WebAssembly SIMD and several hundred MB available RAM** is tested. No WebGPU required: WASM CPU is the default, not an untested fallback. Physical phones, low-memory hardware and other engines are untested; responsive emulation is not phone inference certification.

Immutable same-origin dependencies (preserve originating builds):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Hashes in `runtime-provenance.json`. Inspected worker protocol `{id,texts}` → `{id,type,vectors/info/done/total/error}`. Worker source cache `tie-ledger-worker-v1`; factory/WASM cache `circuit-cove-runtime-v1`; model Cache API managed by Transformers.js. Actual offline scope tested: warm successful online run, terminate worker, disable all network, create fresh worker and run inference in an **already-open page**. Offline reload/navigation is not claimed. Cache eviction/private storage can force redownload. Cancel terminates workers; run identities protect pending fetch/file reads and late messages. Timeout 180 seconds, explicit retry. Device/network/model/malformed-output failures show errors, never fake AI.

## Artifacts

Complete JSON includes originalInput, reviews, all checks and metrics. CSV retains every record and reviewer note, with proper quote/comma/newline escaping. Formula-leading **text** (`= + - @ TAB CR`) receives an apostrophe; genuine signed decimal numeric cells remain exact signed text. JSON is lossless. Markdown contains source/review/check JSON representations and computed counts. Manifest JSON: `{minorUnitDigits:2,totalCents,records:[{id,source,cents,amount,policy}]}`; only ready rows. Cents and amounts are strings, including values larger than IEEE-754 safe integers. Artifacts have been independently reopened with Python json/csv/Decimal. Downstream accounting importers and legal suitability are untested.

## Build and publication

React + Vite; base `/daily-app2/20261124-3/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Publish through the repository root combined-site workflow only.** Individual deploy would replace the collection. Existing size guard and legacy sharing rules are unchanged.

See [observed validation](VALIDATION.md) and machine-readable reports. No digest sent by the builder.

### Reproduce local production checks

Per-app Vite dev/preview serves the UI but does not itself mount shared sibling runtime paths. For complete local inference, first run root `npm run predeploy`, then run `python3 20261124-3/serve.py` from the root. Open `http://127.0.0.1:7518/daily-app2/20261124-3/`. This helper serves static files only; it is not an AI backend. With this repository environment’s Playwright installation, run the browser suite from the app folder with `APP_URL=http://127.0.0.1:7518/daily-app2/20261124-3/ PREFIX=assembled- node browser-test.cjs`. Core checks: `node core-test.mjs`, `python3 decimal-test.py`; artifact checks: `PREFIX=assembled- python3 artifact-test.py`. For browser fault-injection scripts’ test origin, run `python3 serve.py --port 7516 --source` from the app folder; it mounts the app and sibling production dist assets.

## Public release verified

Matching Pages commit `b8475840199050dc6dc31b6418f170237917de47`, successful workflow `45235803609`. Nine public gallery/app/runtime assets matched assembled bytes. Public real-model fixtures, context-only AI impact, full reviewed/export/24-record/offline/privacy workflow and 320px large-total regression passed; independent public artifact parsing passed **442 assertions**. All **832 public gallery cards** rendered, including all 831 pre-existing working-gallery entries. Combined size **999,871,508 bytes**, below unchanged guard. Existing main-source entries preserved; unrelated pre-existing recovery changes were not staged. No digest sent.
