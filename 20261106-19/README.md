# Ledger Lane

A local-AI expense-coding desk for bookkeepers and small studio operators. Paste/import a synthetic or user-owned expense CSV; define account descriptions; infer semantic account matches; review/reject/edit notes; apply a snapshot; download CSV/JSON or copy CSV. This is a review artifact, not a bank integration, financial advisor, tax classifier or automatic journal posting tool.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX; converted from [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Apache-2.0 model license.
- Runtime: pinned dependency resolution in package-lock: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Runs feature extraction on WASM CPU, one thread, in a locally bundled Web Worker. No WebGPU requirement or API key.
- AI creates normalized 384-dimensional embeddings for each expense description and account definition. It handles semantic correspondence such as cloud hosting → software expenses without relying on account-code substrings.
- Deterministic: cosine dot-product ranking, minimum similarity cutoff, three alternatives, CSV validation, row preservation, exact integer-cent accounting/subtotals, schema checks, review and serialization. No fabricated confidence values. Similarities are not calibrated probabilities. Text is data; there is no tool-calling or instruction-following inference.

## Download, cache and privacy

Before the explicit **Load AI & suggest codes** action, the page does not contact model hosts. First use downloads approximately 23 MB of model/tokenizer/config data from huggingface.co and its CDN, plus a locally hosted 26.86 MB WASM binary, 52 KB factory and 548 KB worker bundle. Model download progress and per-four-text inference progress appear live. Cancellation terminates the worker; timeout is 180 seconds. Partial model files may need downloading again after cancellation.

User text stays in browser memory; network model requests are GET/HEAD file downloads, not content submissions. No optional remote inference, shared credentials, analytics, account login or browser content persistence. Model files use Transformers.js cache; worker source and WASM/factory are explicitly stored using Cache API and instantiated from blob URLs. Cached inference in the open page with a fresh worker is tested offline. Reloading/reopening the whole app offline is **not** promised: no app-shell service worker. Storage denial, private mode, eviction, or a changed asset hash can require internet again. Site data removal clears model caches. No guarantee of operation on memory-constrained phones; roughly 300 MB free memory recommended. Current desktop Chrome tested; other current WASM/Workers/Cache-API browsers are intended but not certified. Blob workers/modules must be permitted by browser policy.

## Input, limits and output

- Expense CSV exact headers: `id,description,amount`. Unique IDs, nonempty fields, 1–40 rows. Plain decimal amounts up to seven integer digits and two fractional digits, negative refunds supported. One currency only; the app does not convert currencies or infer them.
- Account CSV exact headers: `code,description`. 1–12 unique codes, codes limited to 20 ASCII letters/digits/underscore/hyphen. Fields max 400 characters. Each CSV max 30,000 characters; file import `.csv` max 30 KB. Properly quoted commas/newlines work via Papa Parse. No PDF, XLSX, date conversion or locale currency parsing.
- Model input: four texts per inference batch, at most 52 descriptions, max tokenizer length 256 (long/subword-heavy descriptions may truncate). English-focused and similarity-based, not a contextual accountant. Single-merchant cryptic references and multi-category purchases may be wrong. Supply meaningful account descriptions and review every row. Threshold can leave any row unassigned.
- Every row retains original ID, description, amount string and integer cents. Review affects account code and note only. Unassign rejects a suggestion; undo retains up to 30 edit snapshots. Input/taxonomy/threshold changes cancel and invalidate prior results. Run IDs guard late async/worker responses.
- Apply explicitly creates the reviewed artifact. Further edits hide exports until reapplication. JSON schema `ledger-lane/v1` contains all records (including unassigned), account definitions, original amounts, AI alternatives/source similarity, notes, totalCents and accountTotalsCents. CSV contains id/description/amount/account/note. Spreadsheet formula-like text is apostrophe-prefixed in CSV; JSON preserves exact text. Negative amounts export as numeric CSV values. CSV is a downstream coding sheet, not an import with the original three-column schema; JSON is the lossless audit artifact.
- Coverage metrics compare assigned rows to a literal-account-code-in-description baseline. They measure coverage, not accuracy, time saved or a claimed percentage improvement. Original total and reviewed subtotals must reconcile. No external actions are performed.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261106-19/`. Per-app `deploy` is retained by collection contract but **do not invoke it**; publish through root combined deployment. Runtime factory is bundled under public/runtime; WASM and worker are emitted as hashed assets. No server inference or public credentials.

## Validation

Run `node core-test.mjs`, serve production with `python3 serve-test.py`, then `node browser-test.cjs`. Playwright uses the workspace's installed browser tooling, not an app dependency. `browser-validation.json` records actual results and failure-injection checks; `VALIDATION.md` summarizes scope. Fault-injected malformed-output/runtime tests test defensive behavior, not AI quality. Main successful inference runs always use the real downloaded model.
