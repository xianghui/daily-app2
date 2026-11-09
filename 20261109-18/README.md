# Transfer Twin — 20261109-18

A local-AI reconciliation desk for bookkeepers combining statements from accounts they own. The bottleneck is finding both sides of internal money movements when bank memos differ and equal amounts collide. Real semantic inference ranks eligible counterparts; exact one-to-one assignment proposes a batch, mandatory human review verifies it, and a complete audit preserves unmatched rows. No bank connection, posting, money movement or automatic financial classification.

## Workflow and formats

1. Load either synthetic example, paste JSON or import a `.json` file. JSON audits reimport `originalInput`, not previous approvals.
2. Set `title`, `currency` (three uppercase letters, one currency only), `dayWindow` (0–14 absolute calendar days) and `minSimilarity` (0–1). Each `transactions` item has unique `id`, `account`, ISO date-only `date`, signed integer `cents` and `text` memo. Account names must consistently identify distinct owned accounts; this tool cannot verify ownership.
3. Explicitly select **Load AI & reconcile**. Inspect download/inference status, cancel or retry. No AI or network model download runs on initial page load.
4. Review every debit. Inspect both original memos, dates, eligible alternatives and cosine evidence. Correct the counterpart and approve a verified pair, or explicitly keep it unpaired. Empty proposals mean no global assignment above your threshold, not proof of external spending. Review notes are editable. Undo restores the prior review state. Editing invalidates the applied export.
5. Apply reviewed pairs. Revalidation forbids duplicate credits, non-opposite amounts, same-account pairs and dates outside the supplied window. All original rows remain; only reviewed classification fields change.
6. Download JSON (originals, all source rows, rankings, decisions, pairs, computed metrics), CSV (all transactions with signed numeric cents and counterpart fields) or Markdown (complete reconciliation handoff); copy Markdown. Spreadsheet-leading formula-like text is escaped in CSV; JSON retains exact strings. JSON import restores originals for a new review.

The computed gross absolute totals compare all rows against unresolved rows after removing both sides of approved pairs. Signed net is unchanged. These are reconciliation totals, not savings, verified business cashflow or external-income/expense claims. Unpaired means investigate. AI-versus-baseline agreement uses your approved review decisions, not independent ground truth or an accuracy claim.

## Real AI, deterministic work and limits

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX `q8`, through `@huggingface/transformers` 4.3.2 / ONNX Runtime Web (Apache-2.0 / MIT runtime components; see package metadata). No provider integration or API key.
- Real CPU/WASM feature extraction: normalized mean pooling, 384 dimensions, cosine memo comparisons. Semantics can match paraphrases beyond literal strings but cannot prove transfer identity. Negation fails in the documented challenge. Generic bank abbreviations, short IDs and shared terms are weak evidence. English intended.
- Deterministic eligibility: exactly opposite cents, different account strings and absolute date difference within `dayWindow`. Exact subset dynamic programming maximizes eligible pair count above `minSimilarity` first, then total cosine, with no credit reuse. Human review can choose hard-eligible below-threshold candidates. Thresholds are not calibrated probabilities.
- Baseline: greedily pair each debit in input order with the first unused credit passing amount/account/date eligibility, without embeddings.
- Limits: 2–24 transactions with 1–12 per sign; 500 characters per memo, 50 KB JSON workflow payload; import file under 1 MB to allow expanded audits; 4-text inference batches, 256-token context truncation per memo; 180-second run timeout. Unique IDs, nonempty fields, real dates and safe nonzero signed integer cents (absolute maximum 100000000) validated. No split transfers, fees, FX, mixed currencies or time-of-day matching. Invalid model vectors fail closed rather than fabricating results.
- Imported text is inert data. It cannot change model/tool authority, send instructions or request credentials. Run identities, worker termination and file-read guards prevent cancelled/stale callbacks from overwriting newer input. Worker/network/WASM/malformed-output/timeout failures provide retryable errors without fake fallback.

## Download, devices, caching and privacy

Initial internet download is approximately **50 MB**: ~23 MB model/tokenizer/config files from `huggingface.co` and its `.hf.co` delivery hosts, plus ~27 MB same-origin ONNX WASM. All app code, workers and runtime factory are hosted with the collection. User content is passed only to a local browser worker; it never appears in model-download URLs or request bodies. No analytics, credentials, remote inference, browser-storage statement persistence or content upload path. Synthetic fixtures only are committed.

Requires a current browser with module workers and WebAssembly SIMD plus sufficient memory; no WebGPU required. Real WASM CPU inference tested on desktop Chrome. Phone-sized viewports tested, not physical phones. Safari/Firefox, low-memory devices and assistive screen-reader behavior are unverified.

Cache API explicitly caches worker source, WASM factory/binary and Transformers.js model files. **Tested offline scope: a new worker inside an already-open production page after one successful online run**, with all context network disabled. Offline app-shell navigation/reload is NOT promised. Cache eviction, private mode or insufficient quota may require downloading again. Clear site data to remove model/runtime caches. No input or reviews are intentionally saved across reloads.

The production worker references byte-identical immutable shared WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that older app asset. `asset-audit.json` records installed/shared binary identity and SHA-256. Per-app code/runtime factory remain local, with the exact deployment base.

## Development and publication

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds production. Per-app required `predeploy: npm run build`, `deploy: gh-pages -d dist` scripts are retained, but **publish only via root collection predeploy/deploy**, never this app's deploy command alone. Vite base `/daily-app2/20261109-18/`.

See [observed validation](VALIDATION.md), browser/network/cancellation JSON reports, independently parsed downloaded artifacts and tests. Build success alone was not used as AI proof. Do not generalize tiny synthetic fixture results into production financial accuracy.
