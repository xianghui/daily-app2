# Paydown Harbor

A private debt-note reconciliation and repayment-scenario worksheet for household budget preparation. Source folder `20261113-14`, React + Vite; no backend, API key or bank access.

## Workflow

1. Load either synthetic example or paste/import JSON. Supply 2–8 account descriptions, a fixed monthly budget in cents and 1–40 debt records (id, note, balance cents, APR basis points, fixed minimum cents/month, owner). 2200 basis points means 22%. One currency only.
2. Explicitly click **Load AI & match debts**. MiniLM embeds account descriptions and notes; normalized cosine ranking proposes the most semantically similar account. Inspect every candidate and source snippet. AI does not extract financial numbers, authenticate accounts or advise which debts to pay.
3. Correct links/numbers; approve or hold each record. Edit reviewer and multiline review notes. Undo is available; edits invalidate applied exports. Original input survives unchanged. Held or duplicate account links block simulations, not audit exports. At most 8 uniquely mapped debts can be simulated; 40-note batches support triage of repeated records, not automatic merging.
4. Apply review. Deterministic simulation compares highest APR first with smallest post-minimum balance first. All active debts first receive fixed minimums (capped at balance after interest), then extra budget is allocated. Ties use record ID. Monthly interest is opening balance × APR / 12, half-up to whole cents, computed with BigInt. Budget remains constant, unused final funds do not carry forward. Results stop at payoff or 360 months; unpaid balance is explicit. Below-minimum budgets block. Balance growth beyond 1 trillion cents throws an actionable error, preventing imprecise oversized arithmetic.
5. Download current JSON (originals, every review and both full ledgers), CSV (every source note, reviewed link/number/hold), or Markdown (full review trail plus selected ledger). Copy Markdown. CSV formula-like textual cells are prefixed with apostrophe, preserving multiline quoted content. Reimport audit JSON restores originals, never prior approvals.

These are conditional modeled costs, not measured savings, lender quotes or financial advice. APR-first is a named allocation rule, not a universal optimization claim. Rates/minimums are fixed; no fees, daily compounding, promotional rates, new borrowing, changing minimums, tax effects or lender-specific timing. Do not apply a plan to real accounts without validating actual lender terms. Nothing is sent or paid.

## Real AI/runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 ; quantized `q8` ONNX feature extraction, normalized mean pooling, 384 dimensions.
- `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, 1 thread. No WebGPU required. Runtime/model license metadata ships with dependencies/model repository; see package lock for exact versions.
- About 23 MB model/tokenizer plus 26,861,777-byte WASM (~27 MB) and local app/factory files on first explicit load. Hugging Face may redirect downloads to its CDN. Model host revision follows repository default: future upstream changes/cache eviction can affect downloads and outputs.
- Worker/factory are local bundled assets. Identical immutable WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root combined publication must preserve it. Asset audit verifies byte identity and hash.
- Modern WebAssembly SIMD, module workers, Cache API and several hundred MB RAM recommended. Desktop Chrome CPU tested; other browsers and physical phones unverified. No automatic GPU path or fake fallback.
- Texts ≤300 characters and 256 tokens; batches of four; 180-second timeout. 40,000-character source JSON; source/audit .json import ≤2 MB (larger envelope supports full schedule metadata); at most 40 notes. Each balance/minimum 1–100,000,000 cents; APR 0–6000 basis points. Model output must contain finite, normalized, correctly counted 384D vectors.

## Privacy, caching and failures

Only downloadable model/runtime assets are requested; no user content is uploaded, persisted or sent to an optional remote provider (none exists). Source text is data, not instructions. No credentials are requested. Cache API stores model/worker/runtime files, not documents. The warmed already-open page supports new-worker offline inference, actually tested with network disabled. Offline navigation/startup/reload is NOT promised. Cache eviction or denied storage needs internet again.

Load progress is visible. Cancel/input changes terminate workers; run identities guard late fetches/messages/file imports. Retry starts fresh. Network, worker, unsupported device, malformed vectors, timeout and schema errors display actionable errors without manufactured AI responses. Nearest-match retrieval can mislink unrelated/negated notes; human review is mandatory. No confidence/accuracy promises.

## Run and publish

`npm install`; `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261113-14/`. Required per-app deploy script remains but **publish only with root** `npm run predeploy` / `npm run deploy`, preserving the collection. See root README for Pages verification.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports/scripts. Tests use only synthetic data. Successful AI tests run actual production workers/model; injected failures are used only to test defensive behavior. Browser tests require local Playwright at the path in scripts. `python3 serve.py` serves the production build locally; `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`, `node paraphrase-test.cjs`, `node oracle-test.mjs`, `python3 artifact-check.py`, `python3 asset-audit.py` reproduce checks. Public tests set `TEST_URL` and `REPORT`. No physical payment, device or lender validation was performed.
