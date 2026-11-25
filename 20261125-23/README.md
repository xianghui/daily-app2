# Quantile Dock

A local-AI measurement handoff utility for reporting analysts migrating percentile worksheets. Informal batch labels do not necessarily name the metric dictionary. Real semantic inference links each raw observation batch to its reporting contract; mandatory review and deterministic quantile witnesses prevent silently replacing linear percentiles with observed-rank values. No database, device, reporting system or remote account is changed.

## Workflow

1. Paste/import source JSON or select either synthetic example.
2. Explicitly load AI. MiniLM embeds context and contract descriptions and ranks normalized cosine similarity. It proposes the contract, not numeric answers. This is real browser inference, not keyword matching, canned responses or a chat API.
3. Verify context, measurement units and contract. Approve or hold every batch. Changing a contract resets its method, percentile and upper-limit goal. Override those fields, edit multiline reviewer notes or undo the last 100 edits. Source values remain untouched; correct bad measurements by editing originals and rerunning.
4. Apply reviewed percentiles. Linear interpolation uses **type 7**: sorted zero-based index `h=(n-1)*p`, interpolate its adjacent observations. Observed nearest rank uses one-based `max(1,ceil(n*p))`, including a documented minimum at p=0. One observation and ties are valid. Upper-limit checks use `value <= limit`.
5. Download complete audit JSON, all-batch CSV, plain-text Markdown or approved-only Release JSON; copy the current worksheet. Any edit invalidates exports. Audit JSON reimport restores originals and requires new inference/review, never old approvals.

## Model/runtime, downloads and device requirements

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Transformers.js 4.3.2 / ONNX Runtime Web. Revision not pinned.
- Single-thread WASM CPU; **no WebGPU needed**. Tested installed desktop Chrome with GPU disabled. Requires WebAssembly SIMD, module workers and sufficient memory. Physical phones and other browser engines unverified.
- About **50 MB first download**: 23 MB weights and 27 MB WASM, plus JS/tokenizer. Internet initially required; Hugging Face/CDN model files plus same-origin shared runtime assets. Visible model/batch progress, cancellation, retry, error handling and 180-second timeout.
- Immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both originating apps. Verified protocol, mean pooling, normalization, four-text batching, CPU paths and hashes in `runtime-provenance.json` / `asset-audit.json`. Runtime assets are same-origin, not external JS imports.
- At most 8 contracts + 24 batches = 32 embeddings in eight four-text chunks. Context ≤200 characters. The shared pipeline passes max_length 256, but feature extraction actually uses tokenizer model_max_length **512**. Unusual text can truncate; do not assume a separate 256-token enforcement.

## Privacy, caching and failure behavior

Default input remains in the page/local worker. No content upload, telemetry, remote inference, mandatory service, key, personal data or credentials. Network audit from startup through real inference observed only GETs without bodies, same-origin assets and documented Hugging Face/CDN downloads; no model requests before explicit loading. Downloading weights is not uploading samples. Imported strings are data, not HTML, commands or authority.

Cache API retains worker source and runtime/model assets where permitted. **Tested offline scope:** fresh-worker real inference in the already-open warmed page with all browser networking disabled. Offline navigation/reload/cold app-shell startup is not promised. Eviction, private browsing or storage denial can require downloads. Run/import identities and worker termination prevent late cancelled results from overwriting current data. Download errors, unsupported runtime, worker construction/runtime errors, malformed vectors and timeouts produce visible errors, never heuristic or fake suggestions.

## Input/output contract and hard limits

Source `{title, contracts, batches}`. Unknown fields rejected.

- `title`: nonempty text ≤200 characters.
- `contracts`: 2–8 `{id, description, unit, method, percentile, limit}`. Description ≤200, unit ≤30 characters. `method` is `linear` or `rank`; percentile finite 0–100; limit finite ±1 billion. All limits are **upper bounds**, never lower/two-sided specifications.
- `batches`: 1–24 `{id, context, values}`; context ≤200 characters; values 1–100 finite numbers, each ±1 billion. No missing values, numeric strings, histogram buckets, weighting or censoring. Up to 2,400 raw observations; duplicates preserved.
- IDs unique within each list, 1–60 ASCII letters/digits/_/-. Source ≤120,000 characters; JSON/audit import ≤1.5 MB. Reviewer notes ≤500 characters. Malformed/control text and invalid fields fail visibly.
- Every batch must already use its contract's unit; AI cannot verify units from numbers or convert them. Do not mix metrics, sampling frequencies or units in one batch. Numeric calculations use JavaScript floating point, not arbitrary decimal arithmetic; witness values are not rounded before threshold comparisons.
- Audit JSON retains every original, contract, review, row, ranked suggestion and sorted witness. Complete CSV retains every batch including holds; Release JSON excludes holds intentionally. CSV properly quotes comma/quote/newline cells and apostrophe-prefixes formula-like text. Markdown is plain text, not sanitized HTML. Numeric fields stay numeric. No real personal fixtures.

## Comparison and quality

Baseline always selects the observed nearest rank with **the same reviewed percentile and observations**. Reported counts show numerical convention disagreements and upper-limit verdict disagreements, not accuracy, performance or time savings. Neither percentile convention is universally best; preserve the downstream reporting requirement.

Actual MiniLM matched **6/6** intended contracts across service (web latency / telephone waiting / parcel transit) and workshop (machine noise / package mass / kiln temperature) fixtures; always-first-contract baseline matched **2/6**. Small synthetic fixtures are not representative accuracy. Actual results: service `[440,6,5]`, workshop `[65,104,95]`; two values per fixture differ from rank-only baseline. An edited upper-limit goal also produced the expected convention-dependent verdict disagreement.

Challenge results are in `quality-challenge.json`: a support-call paraphrase matched the waiting contract, but negative/unrelated text still received a nearest contract. MiniLM does not reliably reject out-of-domain input or understand negation, unit correctness, statistical suitability or population risk. Human review/hold is essential; cosine is not confidence. Sample percentiles describe these observations only, without inference or causal promises.

## Validation and publishing

React + Vite, base `/daily-app2/20261125-23/`. `npm install`; `npm run dev`; `npm run predeploy`. Required `predeploy: npm run build`, `deploy: gh-pages -d dist` and gh-pages dependency retained. **Publish through collection root only**, not individual deploy.

See `VALIDATION.md` and machine-readable reports: real production browser inference, offline fresh-worker run, maximum batch, independent Python order-statistic oracle over 300 random cases, independent parsing of actual browser downloads, edits/undo/holds/copy, cancellation and failure injection, privacy request audit, runtime asset hashes and desktop/phone screenshots. Untested: physical phones, other engines, cold offline startup, representative model accuracy and downstream report-system integration.
