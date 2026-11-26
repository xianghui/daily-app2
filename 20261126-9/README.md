# Payment Cadence

A local-AI payment-timing reconciliation desk for lease analysts consolidating fixed rental handoffs. Distinct from the collection's debt-paydown, depreciation and project-portfolio utilities: the decision is **advance versus arrears**, and the usable artifact is an exact discounted obligation/payment worksheet, with a separate commencement-payment balance.

## Workflow

1. Choose either synthetic example, paste source JSON or import `.json`.
2. Edit your 2–6 described timing profiles and 1–24 contracts, including effective periodic rates and equal payments.
3. Explicitly click **Load AI & suggest timing**. No model downloads happen before this action.
4. Review the source note and cosine-ranked profile evidence. Correct the timing, payment, payment count or rate. Approve or hold every contract. Undo restores the last edit; originals never change.
5. Apply the current review to obtain gross present obligation, immediate payment, after-immediate balance and every discounted payment/balance witness. Inspect the computed all-arrears baseline. Holds block a complete batch release but retain partial diagnostics and all records.
6. Download complete JSON, contract CSV, payment Worksheet CSV or Markdown, or copy Markdown. Edits invalidate exports. Audit JSON reimport restores original source, **not previous approvals**, for fresh inference/review.

Input shape is demonstrated by the two synthetic fixtures in `src/core.js`: `title`, three-letter `currency`, `periodLabel`, `profiles: [{id,description,rule}]`, `requests: [{id,note,payment,periods,rateBps}]`. Rules are `advance` and `arrears`. ASCII IDs are unique within each list. Payment is a nonnegative integer minor-unit **string**, at most 12 digits; periods 1–60; periodic effective rate 0–5000 integer basis points (100 bps = 1% **per period**, not per annum). Notes/descriptions ≤200 characters; title ≤200; reviewer notes ≤500. Source ≤60,000 characters. Source file ≤1 MB; audit envelope ≤8 MB, with originals still validated against the source limit. Imported audit calculations/approvals are never trusted or restored.

## Real AI, runtime and licenses

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0) on **Transformers.js 4.3.2 / ONNX Runtime Web**, q8, single-thread **WASM CPU**, normalized mean-pooled 384-dimensional embeddings. AI embeds the supplied descriptions and handoff notes; deterministic cosine retrieval proposes a profile despite paraphrased wording. It does not extract the numeric terms, infer rates, analyze legal clauses, call tools or determine accounting treatment. Scores are similarities, not confidence. No hard-coded inference responses or fake fallback.

Model revision is currently `main`, not immutable; future host changes can affect results. The shared worker's feature-extraction pipeline passes `max_length:256`, but the pipeline does not enforce that setting; the actual tokenizer maximum is **512**. The app bounds each model text to 200 JS characters and total texts to 30; four texts per chunk, at most eight chunks. Vector count, dimension, normalization and finiteness are validated before proposals.

The existing collection is near its deployment-size guard. This app deliberately reuses immutable, same-origin deployed assets (no runtime CDN):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` — bundled Transformers.js worker.
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` — WASM module factory.
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` — ONNX WASM binary.

**Preserve those older apps/paths.** The shared worker's text/vector protocol and runtime/cache implementation were inspected; asset hashes and public byte checks are recorded by `asset-audit.py`. React, Vite and gh-pages retain their upstream licenses. No provider integration, shared key or agent credential is used.

## Downloads, privacy and offline scope

Before the first explicit AI run, the UI discloses approximately **50 MB** (23 MB quantized model + 27 MB WASM, plus JS/tokenizer). Model/config/tokenizer files download from Hugging Face and its CDN; runtime assets come from this site's origin. **Downloading weights does not upload user data.** No remote inference, analytics, sending, account access or external actions. Text and values remain in browser memory; unsaved work is lost on close.

Cache API stores worker source, WASM factory/binary and runtime model downloads where available. Tested offline scope: **fresh-worker real inference in the same already-open warmed page** with the network disabled. Offline page navigation/reload/startup is not promised. Cache eviction, private browsing or denied storage can require downloads again. A no-cache/network failure is visible; never substituted demo results. Download progress, cancellation and 180-second timeout are shown; retry starts a new worker. Run IDs plus terminated workers and guarded file reads prevent cancelled/stale results from overwriting current inputs.

Supported requirements: modern browser with WebAssembly SIMD, module workers, BigInt and enough memory for the model. No WebGPU is needed. Desktop Chrome with GPU disabled is validated; physical phones and other engines are not. Narrow 320/390px viewports are layout tests, not physical-device inference claims. If runtime/model loading fails, use current desktop Chrome, enable WASM/workers, restore internet and retry.

## Deterministic mathematics and limitations

For payment P, count N, effective periodic rate r:

- arrears payments occur at t = 1 … N;
- advance payments occur at t = 0 … N−1;
- gross PV = sum P/(1+r)^t;
- immediate payment = P for advance, zero for arrears;
- after-immediate balance = gross PV − immediate payment;
- interest = opening balance × r, except at t=0 where it is zero;
- closing balance = opening + interest − payment.

Reduced BigInt fractions preserve exact arithmetic. Invariants: final balance zero, gross PV + interest = total payments. Gross PV **includes** advance commencement cash; it is not the remaining liability after that payment. Display values truncate to two decimal **minor units**; exact fraction exports are authoritative. These are not cent-rounded accounting postings. All-arrears baseline uses the same reviewed numeric terms, so the comparison isolates timing rather than rate/amount changes. Zero rate or zero payments may produce equal PVs with different cash timing. Differences are not savings, model accuracy or business improvements.

Only fixed equal payments, constant periods/rates, one currency. No calendar dates, fees, taxes, incentives, variable rent, guarantees, purchase options or annual-rate conversion. This is not a complete lease-recognition standard, legal interpretation or financial advice. Nearest-profile retrieval can misread negation and always proposes an answer even for irrelevant/mixed terms; reviewers must hold unsupported cases. Known-answer outcomes and actual limitations are in [VALIDATION.md](VALIDATION.md).

## Artifacts and verification

JSON retains original inputs, every review/candidate, holds and exact rational schedules. CSV retains all source contracts and reviewed fields; payment Worksheet CSV contains every approved payment plus a placeholder for each held contract. CSV textual cells beginning with `= + - @ TAB CR` are apostrophe-prefixed to reduce spreadsheet formula interpretation, including multiline strings. JSON is lossless; CSV intentionally includes this text-safety prefix. Markdown is a plain downloadable worksheet, never rendered as imported HTML. Reimport original JSON from exported audits to restart review.

`npm run predeploy` builds the app. Required per-app deploy scripts remain present but **do not invoke individual deploy**: publish the combined collection through root `npm run predeploy` and `npm run deploy` only. `core-test.mjs` + independent Python `core-check.py` validate arithmetic. `browser-test.cjs` validates production real AI, reviewed/downloaded artifacts, caching, bounds, cancellation/retry and responsive controls. `defensive-test.cjs` injects faults only for failure-path checks; successful AI checks are real. `artifact-test.py` independently parses actual browser downloads and validates every schedule via Python Fraction. `challenge-test.cjs` records hard wording limitations. Runtime/public byte verification uses `asset-audit.py`.

### Reproduce the tests

From this app folder, run `npm install` and `npm run predeploy`, then `python3 serve-built.py` in a separate terminal. It serves actual production files and shared dependencies under the real base on port 7779, not the Vite dev server. With Playwright and desktop Chrome available at the configured local test path, run `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `node recovery-test.cjs`, and `node challenge-test.cjs`. Override `PLAYWRIGHT_PATH` where supported or adjust the local require path in the scripts for another machine.

For assembled tests, finish root `npm run predeploy`, then run `python3 serve-built.py --assembled` (port 7781), and use `APP_URL=http://127.0.0.1:7781/daily-app2/20261126-9/ PREFIX=assembled- node browser-test.cjs`. Serve via absolute handler directories; assembly deletes/recreates `deploy`, so a server that chdirs there can retain a deleted cwd. Production/browser tests must not overlap deployment's assembly cleanup. `asset-audit.py` and all Python artifact scripts are run from this app folder. Public tests use the same suite with `APP_URL=https://xianghui.github.io/daily-app2/20261126-9/` and `PREFIX=public-`.
