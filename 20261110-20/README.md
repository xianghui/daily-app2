# Share Ledger — UNPUBLISHED DRAFT

**Publication blocked:** three GitHub Pages workflows built successfully but timed out while deploying. The public app remained HTTP 404. Excluded from the gallery and restored combined deployment; not completed. Local and assembled production-browser tests passed, but public worker/runtime/inference checks remain unverified. See `publication-status.json` and `hosting-attempts.json`. Resolve hosting and rerun public checks before promotion.

An on-device shared-expense reconciliation worksheet for housemates and small project teams. The bottleneck is selecting the correct beneficiary group from rough receipt descriptions—not extracting amounts or automatically deciding what is fair. Unlike expense account coding, this produces exact-cent participant obligations and a net reimbursement worksheet.

## Workflow

1. Open a synthetic example or paste/import JSON containing people, policies and expenses.
2. Set each policy's description and positive integer member weights. Supply each expense's payer and amount in integer cents. One common cent-based currency only.
3. Explicitly load AI (~50 MB first download). Real embeddings suggest a policy for each description.
4. Inspect source, ranked policy evidence and member weights; correct policy, payer or cents. Approve each expense or hold it. Review edits are undoable. Original input remains intact. Input changes cancel inference and invalidate the review.
5. Confirm participant scope, currency, receipt evidence and weights, then apply. Any hold or missing confirmation blocks all payments. Pending reviews prevent applying.
6. Inspect cent allocations, paid/owed/net balances and net payment worksheet. Compare computed per-expense reimbursement count against netted transfer count. No payments are sent.
7. Download JSON (complete original input, review, shares, balances, payments, baseline and method), CSV (every source and reviewed expense), or Markdown (payments and complete audit). Copy current Markdown. Editing invalidates exports until reapplied. JSON audit reimport restores originals only; approvals are never implicitly restored.

## Real AI, source, license and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; original [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Runtime: @huggingface/transformers 4.3.2, ONNX Runtime Web (package-lock records exact resolved versions). Browser WASM CPU, single thread, no WebGPU required. Four texts per batch, first 256 tokens. Normalized mean-pooled 384-dimensional embeddings; policy cosine ranking, never calibrated confidence. All text is data and cannot change tool authority.
- Initial downloads: ~23 MB model/tokenizer/config from huggingface.co and redirected *.hf.co; ~27 MB same-origin WASM binary plus bundled ~0.9 MB app/worker/module factory. Internet initially required. The binary reuses immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; keep that collection asset. Its byte hash is independently compared against installed runtime. Factory is local `public/runtime/` from the installed runtime distribution. Transformers.js is Apache-2.0; ONNX Runtime is MIT; distribution factory retains its license notice.
- Explicit button initiates model/runtime loading. Progress reports file downloads and embedding batches. Cancel terminates worker; retry starts fresh. Worker source, WASM factory/binary use Cache API; model assets use Transformers.js browser cache. Cache eviction/private-mode restrictions can require downloading again. Fresh-worker inference works offline in an already-open page after successful caching (tested); offline navigation/reload is NOT promised. No service worker is installed.
- Current desktop Chrome with module workers, WASM SIMD and Cache API is tested. Physical phones, Safari/Firefox/Edge and memory-constrained devices untested. Mobile viewport rendering is tested in desktop Chromium. No unsupported-device fake fallback. Timeout is 180 seconds; construction/runtime/schema/network failures show actionable errors and no fabricated suggestions.

## Privacy

Default and only path: expense/policy text is processed locally. No API credentials, telemetry, provider integration or account access. Network captures cover production startup through model runs: file-download GETs only, no user content in URL/body. Downloads are weights entering the device, not user documents leaving it. Review/input stays in memory and is lost on close unless exported. Synthetic fixtures only. JSON audits may contain whatever the user supplies; keep exports private as appropriate. A built-asset credential-pattern scan supplements source review, not a universal security guarantee.

## Input schema and limits

JSON only; no OCR/PDF/CSV imports. The displayed 40 KB paste guard means 40,000 UTF-16 code units (~40 KB for ASCII); non-ASCII may occupy more bytes. The file importer enforces a byte-based 1 MB file limit; pasted audit text is bounded at 1,000,000 code units before extracting the original payload. Fields:

```json
{"name":"Example","currency":"USD","people":[{"id":"A","name":"Alex"},{"id":"B","name":"Blair"}],"policies":[{"id":"shared","title":"Shared room","description":"Room rental and utilities","weights":{"A":1,"B":1}},{"id":"personal","title":"Alex equipment","description":"Alex's computer supplies","weights":{"A":1}}],"expenses":[{"id":"E1","text":"Overnight cabin rental","payer":"B","cents":10001}]}
```

2–8 unique people; 2–6 unique policies; 1–64 unique expenses. IDs 1–30 letters/digits/_/-. Name/title ≤100; person name ≤80; descriptions/notes ≤400. Positive integer cents 1–100,000,000 per expense; positive integer member weights 1–100, known members only. Three-uppercase-letter common currency label; no currency conversion or zero-decimal/three-decimal currency support. No refunds/negative/zero amounts. One split policy per expense: split mixed-beneficiary receipts into separate entries before running AI; amounts should already include any intended tax/tip. Payer need not benefit from the expense. JSON objects are validated before model loading; malformed/oversized input fails visibly. Every vector is validated for count, dimension, finiteness and approximate unit norm.

## Deterministic arithmetic and comparisons

Weighted shares floor exact rational amounts, then distribute residual cents by descending remainder, tie by ascending member ID. Products/totals remain exactly representable under bounded input. Each approved row conserves cents. Paid minus owed balances sum to zero. Largest-balance greedy netting settles debtors against creditors, at most n−1 transfers. This is NOT a guaranteed minimum-transfer algorithm; it allows intermediary original reimbursement relationships to be replaced by group net balances. Confirm this is acceptable.

Baseline: separately pay each nonpayer's positive allocated share to that expense's payer. Comparison counts are derived from current reviewed expenses, not hard-coded time/accuracy claims. Literal policy-title hits are an input-only matching baseline, not a calibrated quality metric. All holds and missing assumptions block the full payment worksheet. JSON retains all holds/sources. CSV escapes formula-like text (leading =,+,-,@,tab,CR) while preserving numeric cents. Markdown is escaped to avoid accidental markup.

## Limits and validation

Semantic similarity is not proof of beneficiary membership or spending legitimacy. A nearest policy is always returned even for unrelated text; negation may mislead. Human verification is mandatory. Payer/amount/weights are supplied, not inferred. No tax/accounting advice, legal adjudication, automatic reimbursement or minimum-transfer guarantee.

See [VALIDATION.md](VALIDATION.md) and machine-readable logs for observed fixture quality, real inference, exports, arithmetic, defensive cases, deployment and untested areas. Tiny fixtures are not population accuracy estimates.

## Development / publication

`npm install`, `npm run dev`, `npm run predeploy`. Per-app required `deploy: gh-pages -d dist` exists but MUST NOT be used for collection publication. Root `/Volumes/ExternalHD/daily_app2` owns combined-site predeploy/deploy and size guard. Vite base is `/daily-app2/20261110-20/`. Run `node core-test.mjs`, `python3 asset-test.py`, `python3 serve.py` then `node browser-test.cjs`. Test scripts use the workstation's installed Playwright/Chrome; not production dependencies. No native model-provider credentials used. Root deployment and public inference must be verified before counting complete.
