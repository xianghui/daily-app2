# Quality Ledger

A private cost-of-quality worksheet for small-team quality coordinators. Unlike the collection's overhead allocation, failure-mode ranking and BOM tools, this app classifies spending activities into the prevention/appraisal/internal-failure/external-failure framework and reconciles a reviewed improvement-budget scenario.

## Workflow

1. Choose either synthetic example, paste source JSON or import `.json` (source or an exported audit). Set one period/currency, revenue cents, **additional** prevention investment cents and an assumed failure-cost reduction percentage. Do not double-count incremental investment in existing prevention expenses.
2. Explicitly click **Load AI & classify costs**. Inspect source notes, proposed categories, candidate definitions and cosine scores. Cosine is ranking evidence, not confidence.
3. Correct categories, integer costs, owners and notes. Approve each expense or hold unrelated/ambiguous items. Split mixed expenses upstream. Undo reverses review edits; originals remain unchanged.
4. Apply reviewed costs. Every review edit invalidates the applied snapshot and disables exports until reapplied. Input edits/cancellation invalidate the run entirely.
5. Export complete JSON, formula-escaped CSV or Markdown, or copy Markdown. All records, including holds, survive exports. Audit reimport restores originals only: new inference and review are required.

## Real AI, runtime and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX feature extraction, normalized mean pooling, 384 dimensions. Downloaded from Hugging Face/CDN at the model repository's current default revision (not pinned; host updates can change proposals). Approximately 23 MB model/tokenizer on first use.
- `@huggingface/transformers` 4.3.2, Apache-2.0; ONNX Runtime Web, MIT; WASM CPU, one thread. No WebGPU needed; Chrome was tested with GPU disabled. Runtime factory is bundled under `runtime/`; identical 26,861,777-byte WASM is reused at immutable collection path `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that asset. Runtime plus model initial transfer is approximately 50 MB; bundler/runtime JS adds overhead. `asset-validation.json` records the WASM hash.
- Worker/runtime code is local to the static site. Explicit loading downloads files only; cost text is embedded on-device and is not sent in requests. No key, backend, remote inference integration, analytics or automatic content persistence. Synthetic fixtures only are committed.
- Current browser with WebAssembly SIMD, module workers, Cache API and several hundred MB free RAM recommended. Unsupported WASM/workers, network errors and worker failures leave no fake recommendations; use a current browser, restore connectivity and retry. Physical phones and non-Chrome engines were not tested.
- Cache API bridges worker, runtime factory and binary; Transformers.js caches model files. After a successful online run, **fresh-worker inference within an already-open warmed page** was tested with all networking disabled. Offline navigation/reload/app-shell installation is not supported or promised. Cache eviction requires internet again. Browser storage controls can remove caches.
- Cancel terminates the worker; run identities guard source fetches, file reads and late worker results. The 180-second timeout offers explicit retry, never a deterministic pretend-AI fallback. Imported instructions remain strings, cannot request credentials and have no tool authority.

## Model contribution vs arithmetic

MiniLM embeds each spending note and the four fixed category definitions. Highest cosine similarity proposes the category, enabling reworded quality activities to be triaged without manual keyword rules. No money extraction, generated financial advice, transaction uploads or account actions occur.

After mandatory review, integer-cent sums deterministically reconcile category totals, conformance cost (prevention + appraisal), failure cost (internal + external), held amounts and quality cost / revenue. The no-change baseline assumes zero avoided failure cost. The scenario floors `reviewed_failure_cents × assumed_reduction_percent / 100`, then subtracts incremental investment. Break-even reduction is investment / reviewed failure cost; absent failure costs yield no finite break-even, and above 100% is infeasible. These are supplied-assumption scenarios, not predicted or measured savings. Revenue ratios are descriptive, not benchmarks. General expenses and mixed costs must be held or split; no accounting treatment is certified.

## Formats and bounds

Source object: `currency` (three uppercase letters, 2-decimal monetary units only), `revenueCents` (>0), `investmentCents` (≥0), `targetReductionPercent` (integer 0–100), `records: [{id,note,amountCents,owner}]`. Use the examples for complete schemas. One currency/period; no conversion. Costs/investment/revenue capped at 100 billion cents each. Expense counts 1–40, unique IDs ≤60 chars, source notes ≤300 chars, owner ≤150 chars, review note ≤1,000 chars. Source ≤40,000 characters, JSON import ≤300 KB. Model context 256 tokens/text, four texts/batch; oversized character/record inputs are rejected. Tokenizer context is bounded at 256 tokens; unusual token-heavy text can still be truncated, so use short plain-English activity notes. Model embeddings must have exact counts and finite, normalized 384D vectors.

JSON preserves original input, AI ranking evidence, reviews, decisions and computed results. CSV preserves every original note and amount alongside current reviewed category, decision, cost, owner and note; formula-leading text is apostrophe escaped, including multiline fields. Numeric cents remain numeric. Markdown is a complete plain-text handoff, not a journal import. Source order and exact record count are guarded.

## Run and publish

`npm install`, `npm run dev`; `npm run predeploy` builds React + Vite for `/daily-app2/20261113-7/`. Per-app gh-pages dependency and scripts remain installed as required, but **publish only through root `npm run predeploy` / `npm run deploy`** so the collection is preserved.

See [VALIDATION.md](VALIDATION.md) and machine-readable test reports. Browser scripts require the existing workspace Playwright and installed Chrome. Run `python3 serve.py`, then `node browser-test.cjs`; `node core-test.mjs`, `python3 artifact-test.py` and `python3 validate-assets.py` perform independent checks. Defensive scripts use fault injection only for failure/stale-output paths, never successful inference claims.

## Known limitations

Two tiny synthetic fixtures matched 7/8 intended categories. The workshop's pre-shipment test was incorrectly proposed as internal failure instead of appraisal; required human correction demonstrates why approval is mandatory. Unrelated instruction-like spending also receives a nearest category; hold it. Negation, shared costs and accounting boundary ambiguity are not resolved reliably. No universal accuracy, measured time saving or causal investment benefit is claimed. The framework provides a review aid, not audit assurance, tax advice or a live ledger.
