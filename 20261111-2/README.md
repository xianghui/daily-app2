# Quota Spring — microgrant allocation worksheet

**User:** a community microgrant coordinator. **Bottleneck:** free-text spending requests need routing into restricted funding pots before limited budgets can be allocated consistently. Unlike expense reimbursement or weighted bill splitting, this worksheet rations insufficient, separate grant pots with a capped equal-awards rule.

## Workflow

1. Load either synthetic example or paste/import JSON. Set `name`, `currency`, `items` (funding pots with `id`, `title`, semantic `description`, `budget` in cents), and `observations` (requests with unique `id`, `text`, `quantity` in cents). Examples are embedded in `src/core.js`.
2. Read the download/privacy notice, then explicitly **Load AI & match funding pots**. No model download occurs before this action.
3. Inspect every original narrative, competing pot descriptions and cosine similarities. Similarity is not confidence, eligibility or correctness. Correct the pot/claim, add notes and explicitly approve or hold each request. Changes to pot/claim reset its approval; undo restores prior review state.
4. Confirm independently that applicants are eligible, each has one request, each request has one pot, all amounts share one currency and partial funding is useful. Apply the reviewed allocation. Without confirmation, numeric allocations are withheld. A held request stays in the audit with a null award.
5. Compare capped equal awards with source-order first-come funding on the same approved claims and budgets. Download current JSON, CSV or Markdown; copy Markdown. Any edit invalidates exports until reapplied. Export before closing: source/reviews are memory-only. Reimporting an audit restores original inputs, **not** prior approvals or corrected claims; review again.

## Real AI / deterministic boundary

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Learned 384-dimensional normalized, mean-pooled text embeddings; q8 ONNX weights. Runtime: Transformers.js 4.3.2, ONNX Runtime Web WASM CPU, single thread; no WebGPU needed. Installed versions are in package-lock.json. Cosine nearest-pot matching uses real learned representations, not keywords or canned fixture answers.
- AI only proposes funding-pot links. It cannot verify identity, eligibility, requested costs, need, fairness or grant rules. Unrelated/negated text still gets a nearest pot; hold it. English short descriptions are the tested scope.
- Input: 1–4 pots, 1–24 requests, 400 characters per description, originals ≤40 KB; audit import ≤1 MB; IDs ≤40 characters. Amounts are integer cents 0–100,000,000. Currency is a three-letter uppercase label, no conversion or assumption about actual currency minor-unit rules. Four texts per inference batch; first 256 tokens, maximum 28 texts. Finite normalized vector dimensions/counts validated before proposals. Imported text is data, never tool authority.
- Math after mandatory review is deterministic: find the largest integer common award level `L` whose capped awards `min(claim,L)` fit available funds. Give residual single cents to still-unsatisfied requests in source order. No claim or budget is exceeded. Unspent funds stay within their pot; no cross-pot transfers. Zero claims receive zero. The first-come baseline fills claims in source order with exactly the same available funds. Recipient counts measure nonzero awards, not improved project outcomes. The literal-title count is a string-match routing baseline, not an accuracy score.
- Equal awards are a declared policy, not equal satisfaction ratios or a universal fairness guarantee. It does not model applicant weights, minimum viable awards, multiple applications, eligibility rules, overlapping pots or payment instructions. Coordinators must consolidate duplicates themselves before confirming. No payments, contact or changes to grant accounts occur.

## Downloads, devices and privacy

First run needs internet: approximately 23 MB model/tokenizer files from huggingface.co / hf.co plus 27 MB same-origin WASM runtime (~50 MB total, excluding small app code). Progress and per-batch status are shown. Cancel terminates the worker; timeout is 180 seconds. Error messages support retry; no failure substitutes fake AI.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB available memory is tested. Other browsers and physical phones are unverified. Responsive layouts are tested in Chrome at 1440, 390 and 320 CSS pixels. No API keys or remote-inference option exist. Requests are model/runtime file GET downloads; user content and embeddings stay in the worker/browser, never uploaded. No telemetry. Default data/reviews are memory-only, not placed in URL or localStorage.

Worker source, WASM factory and WASM binary use app-specific Cache API caches; Transformers.js caches model files. Fresh-worker real inference offline in an **already-open, successfully warmed page** is tested. Offline navigation/reload is **not** promised. Browser caches can be evicted; clearing site data removes them. App/worker/factory code is locally bundled. The byte-identical runtime is reused from the collection's immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve that app path in combined deployments.

## Artifacts

JSON is the lossless audit: `originalInput`, every source request and review, proposed/current pot, corrected claim, award, first-come award, holds, pot summaries and computed counts. CSV contains every request with original and reviewed integer cents, decision, note and awards (blank for holds/unconfirmed). Spreadsheet formula-like text is apostrophe-escaped. Markdown is the complete current human-readable worksheet, not just selected awards. CSV/JSON parse checks compare all rows, notes, edits and cent conservation. No sensitive fixtures or credentials are used.

## Development and deployment

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261111-2/`. Per-app `deploy: gh-pages -d dist` is retained by contract but **do not invoke it**: publish only from repository root to preserve the collection. Root README describes combined `deploy/`, Pages synchronization and public asset verification.

See [VALIDATION.md](VALIDATION.md) for actual results and release status, not inferred build-only success. Browser test scripts use the local installed Playwright and Chrome; no mocked AI in successful workflow checks. Defensive fault injection is isolated to failure tests.
