# Settlement Folio

A local-AI payment-processor clearing worksheet for a small shop bookkeeper. Input mixed statement notes with exact amounts and opening/observed closing available and reserved balances. MiniLM proposes a movement class; a human verifies every proposal; deterministic integer arithmetic traces both balances. Export the current reviewed worksheet, never a canned example response.

## Workflow

1. Choose **Shop week** or **Reserve unlock**, paste JSON, or import a source/exported audit `.json`.
2. Check the displayed ~50 MB initial download requirement and click **Load AI & classify events**. No model request happens before this explicit action. Cancel a download/run at any time; retry is supported.
3. Inspect original notes, profile descriptions and ranked cosine similarities (not confidence). Correct profile/amount/balances, approve or hold each row, and add multiline review notes. Undo reverses individual edits. Approve-all is a manual shortcut, not independent verification.
4. **Apply reviewed events**. Unresolved pending rows prevent apply; holds, negative intermediate balances or either unexplained closing difference block complete reconciliation. Blocked audits remain exportable and clearly diagnostic.
5. Download JSON, event CSV, balance-trail Steps CSV or Markdown; copy Markdown. All current original rows and holds survive. Any edit disables exports until reapplied. Reimporting an audit restores original inputs, intentionally not approvals.

## Distinct process and measurement

Unlike inventory FIFO, customer-invoice allocation, internal-transfer pairing or investment performance, this reconciles a processor's two clearing balances. Six classes have fixed effects:

| Class | Available | Reserved |
| --- | --- | --- |
| sale | +amount | unchanged |
| refund | -amount | unchanged |
| fee | -amount | unchanged |
| payout | -amount | unchanged |
| reserve | -amount | +amount |
| release | +amount | -amount |

Conservation: opening available + opening reserved + sales - refunds - fees - payouts = closing available + closing reserved. Reserve moves cancel. The UI compares a **sales-less-refunds shortcut** with actual bank payouts and displays their computed difference, fees and balance changes. These are different accounting measures, not interchangeable estimates. No invented time savings, accuracy percentages or financial recommendations. The improvement is explicit classification review, source lineage, exact consistency checks and usable exports instead of manually rebuilding a two-balance trail.

## Real AI, runtime and download

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 feature extraction, normalized mean-pooled 384-dimensional embeddings. Real learned embeddings compare each note with user-supplied class descriptions; deterministic cosine ranking selects the proposal. No regex/sample-response fallback.
- Transformers.js **4.3.2**, ONNX Runtime Web, single-thread **WASM CPU**, no WebGPU requirement. Runtime provenance includes exact SHA-256/byte counts in `runtime-provenance.json`. Preserve these immutable same-origin collection dependencies:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes), source `../20261115-6/src/ai.worker.js`.
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes).
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes).
- Approximately **50 MB initially**: ~23 MB ONNX weights + ~27 MB WASM plus tokenizer/JS. Model assets download from Hugging Face and its CDN (`huggingface.co`, `hf.co`, `xethub.hf.co`). Model revision is not pinned; upstream changes/availability can affect results.
- Current browser with WebAssembly SIMD, module workers, Cache API for offline caching, BigInt, sufficient memory. Desktop Chrome with GPU disabled is tested. Mobile viewport emulation is tested; physical phone performance and other browser engines are not.
- Worker runs four texts per chunk, maximum 30 texts = six profiles + 24 events / eight chunks. Each note/description ≤200 characters. Actual tokenizer model_max_length is 512; shared pipeline passes a max_length option that does not establish a stricter token cap. Unusual text may truncate; keep notes short.
- Finite normalized 384-vector shape/count checks reject malformed AI outputs. Run identity, aborted fetches, terminated workers, 180-second timeout and explicit retry prevent stale/cancelled responses from replacing current work. Network/runtime/model errors are visible; no silent fake AI.

### Cache and offline scope

Cache API retains worker source, runtime factory, WASM and model files. Successful online inference followed by a **fresh worker with all network blocked in the same warmed open page** is tested. Offline app-shell reload/startup is **not promised**. Browser eviction, private browsing, cache denial or model updates may require downloading again. Cancellation terminates the worker; completed cached files may remain. No user records are intentionally persisted; closing the page loses unsaved content.

## Input / output limits

Source is one JSON object (≤60,000 characters): `title` ≤200 characters; uppercase three-letter `currency` is a label, not conversion; four balances are canonical nonnegative integer minor-unit strings up to 12 digits; `profiles` has 2–6 unique ASCII IDs with descriptions ≤200 characters and one of the six `rule` values; `requests` has 1–24 unique ASCII IDs, note ≤200 characters, and positive canonical `amount` string up to 12 digits. IDs match `[-A-Za-z0-9_]{1,40}`. Reviewed notes ≤500 characters. JSON files/audit envelope ≤1 MB. Examples in `src/core.js` specify the exact source shape. Arrays preserve statement order.

All amounts are minor units, not decimal amounts; user supplies precision/currency correctly. No negative inputs, currency conversion, date inference, chargebacks, pending authorizations, multi-account netting or tax handling. Split compound/netted events into separate gross movements. Negative available or reserve at any intermediate step blocks reconciliation. Use complete ordered statements; matching closing balances alone cannot prove completeness or detect offsetting errors.

JSON (`settlement-folio.json`) retains originals, all review decisions/candidate evidence, exact strings, held records, diagnostics and arithmetic trail. CSV (`settlement-folio.csv`) retains every original and reviewed event; Steps CSV (`settlement-folio-steps.csv`) retains every event including holds and both balance states. CSV doubles quotes and preserves multiline fields; leading spreadsheet-formula text is apostrophe-prefixed. Markdown includes originals, reviewer notes, conservation equation and every step. JSON is the lossless audit format; CSV sanitization is intentional. These are worksheets, not uploads or automated accounting postings.

## Privacy / authority

All default inference and processing is local. Network traffic downloads static code/model weights; notes/amounts are not uploaded or placed in URLs. No remote inference, API keys, telemetry, account connections, external actions or third-party fonts. Imported notes are data, never executable instructions; rendered with React text escaping. No secrets or real customer data in fixtures. Source/built pattern scan and browser request audit supplement (not replace) source inspection.

## Limitations

MiniLM is a semantic-retrieval model, not an accounting expert, entailment checker or numeric extractor. Every note receives a nearest class even if irrelevant. Negation, reserve-related fees, reversals, compound notes and ambiguous payout wording require human review. Similarity is not calibrated probability. The app cannot validate document authenticity, completeness, balances, accounting treatment or authorization. A blocked statement must not be reported as reconciled; diagnostic exports are clearly marked. Use appropriate professional review for real records.

## Build / publish / validation

React + Vite, base `/daily-app2/20261126-6/`. `npm install`, `npm run predeploy`; per-app required scripts retained (`predeploy: npm run build`, `deploy: gh-pages -d dist`). **Publish only using root** `/Volumes/ExternalHD/daily_app2` combined `npm run predeploy` / `npm run deploy`, never this app's deploy script. Existing immutable runtime dependencies must stay published.

Observed checks and limitations are in [VALIDATION.md](VALIDATION.md). Reproduce core/oracle checks with `node core-test.mjs` and `python3 oracle-test.py`; browser suites require the workspace's Playwright and installed Chrome, a production-bundle server with correct collection paths, and `APP_URL`. `browser-test.cjs` uses `PREFIX` for downloaded artifacts/reports. Fault injection in defensive tests is used only to test errors, never as evidence of successful AI inference.

Live verified app: https://xianghui.github.io/daily-app2/20261126-6/ . Public worker/factory/WASM bytes and real CPU inference were checked after the matching Pages build, along with reviewed downloads and warmed-page offline inference. See `publication-status.json` and `public-*` reports.
