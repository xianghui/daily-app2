# Receipt Current

A local-AI cash-application planning desk for small-service-business bookkeepers. Convert payment memos into a reviewed invoice-allocation handoff, without bank access, posting transactions or sending messages.

## Use

1. Choose either synthetic example, paste JSON or import a JSON audit. Enter a title, 2–8 accounts (`id`, descriptive `text`), 1–32 open invoices (`id`, `account`, `due` YYYY-MM-DD, positive integer `cents`) and 1–24 payments (`id`, `text`, positive integer `cents`). Invoice amounts are remaining balances, not historical totals. All records must share ONE currency; no automatic currency detection. Source order determines receipt processing order. Due dates and quantities are editable constraints in the source JSON.
2. Explicitly load AI. Inspect account rankings/source descriptions and verify payer identity using your own records. Approve or hold EVERY receipt; change a candidate or add a rationale. Undo restores the previous review layer. Originals remain intact.
3. Apply reviewed receipts. The deterministic allocator settles each approved account's oldest-due invoices first (ties: original invoice order), in payment input order. Partial payments split across invoices. Excess stays unapplied credit; held cash is not allocated. Integer-cent conservation blocks invalid results.
4. Export actual reviewed JSON, CSV or Markdown, or copy the Markdown handoff. Any review edit invalidates applied exports. JSON preserves all inputs, invoices, rankings, reviews, allocation lines and balances. CSV has one row per receipt with nested JSON allocation lines; Markdown includes all invoices and receipts. CSV protects formula-like text. Reimporting JSON restores original inputs ONLY: AI and human review must run again.

## Real AI, privacy and runtime

`Xenova/all-MiniLM-L6-v2`, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2 and ONNX Runtime Web use the q8 feature-extraction model on single-thread WASM CPU; normalized mean-pooled 384-dimensional embeddings, cosine ranking, 4-text batches. This is real semantic inference, not generated responses or regex. No WebGPU required. Descriptions are limited to 500 characters, model context truncated at 256 tokens; English intended. Entire JSON payload <=50 KB; each amount 1–100,000,000 cents. 180-second run timeout, worker termination, run-identity guards and finite vector/schema validation protect retries/cancellation/stale responses.

Before explicit loading there is no model request. Initial loading needs internet: approximately 23 MB model/tokenizer downloads from huggingface.co / hf.co delivery hosts, plus ~27 MB same-origin WASM and ~0.8 MB bundled app/worker. Source content never appears in requests. No API keys, remote inference, telemetry or provider credentials. All data stays in memory; downloads remain on your device. Worker/model/runtime assets use browser Cache API, not user data. Cache eviction/storage restrictions require internet again. Clear site data to remove caches.

Current browser with module workers, WebAssembly SIMD and adequate memory required. Tested headless desktop Chrome, including 320/390 CSS-pixel viewports. Other browser engines and physical phones NOT tested. Fresh-worker offline inference is tested in an already-open successfully loaded production page with ALL networking disabled. Offline navigation/reload NOT supported or claimed.

The factory is bundled under `public/runtime`. Byte-identical ONNX WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that immutable older app asset when deploying. Vite rewrites only this matching asset URL; model files remain hosted by Hugging Face.

## Limitations and comparisons

Semantic similarity cannot authenticate a payer or distinguish businesses offering similar services. Never apply suggestions without review. The negated challenge wrongly chose website account A. No refunds, FX, fees, tax reconciliation, invoice disputes, write-offs or transaction posting. No external account changes. This is a planning aid, not accounting advice or a completed bank reconciliation. Input text cannot change tool authority or request credentials.

Computed comparison: count of AI proposals and exact-description baseline links agreeing with YOUR approved review. This is not independent accuracy or measured time saved. Synthetic fixture quality is separately reported in VALIDATION.md. No confidence percentages or fabricated productivity claims.

## Development and publication

React + Vite. `npm install`; `npm run dev`; `npm run predeploy`. Per-app deploy script retained as required, but **publish collection through ROOT `npm run predeploy` and `npm run deploy`**, never individual deployment. Production base `/daily-app2/20261109-17/`.

Validation commands: `node core-test.mjs`, production server `python3 serve-test.py`, `node browser-test.cjs`, `python3 artifact-test.py`, `node network-test.cjs`, `node cancel-download-test.cjs`. Browser tests require the local installed Playwright/Chrome environment. See recorded results and publication status in VALIDATION.md and JSON reports.
