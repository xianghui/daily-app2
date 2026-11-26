# Warpwise Desk

A weaving studio's **rough yarn notes → measured sample references → reviewed warp worksheet**. Real local AI removes manual semantic lookup; exact dimension arithmetic then exposes motif, contraction, take-up, loom-capacity and shared-yarn-stock consequences. Distinct from Fiber Balance (minimum-cost fiber blending), Cut Ledger (linear stock partitioning) and Succession Bench (nursery-stage capacity). No orders, file changes or equipment control.

## Use

1. Select a synthetic example, paste source JSON or import a `.json` source/audit (8 MB import, 30,000-character source). Edit the sample profiles, finished dimensions, loom width/end capacity and **warp-only available stock**. All supplied sample values are synthetic, not recommended specifications.
2. Read the network/device notice. Explicitly click **Load AI & match yarn notes**. Real model downloading/inference shows progress; cancel terminates the worker. No model traffic before this action.
3. Inspect original yarn notes, candidate descriptions and cosine similarity (not confidence). Review the sample link, finished dimensions, pieces, fringe, motif repeat, selvedge count and loom waste. Edit multiline reviewer notes, approve or hold/reject. Bulk approval is an explicit human decision; undo keeps the last 40 edits.
4. Apply the review. Pending decisions block results; holds remain in the complete audit but block operational release. Shared stock is checked across ALL approved projects linked to a profile, not independently for each project. A stock gap, reed-width limit or end-capacity violation blocks operational Warp CSV without dropping records.
5. Download complete JSON / Audit CSV / Markdown, copy Markdown, or export release-gated **Warp CSV**. Every review edit invalidates the snapshot and exports. JSON audit reimport restores original inputs, NOT approvals; rerun and review. JSON retains exact strings. CSV text beginning `= + - @ tab CR` gains an apostrophe to resist spreadsheet formulas; genuine numeric dimensions are unaffected. Markdown preserves all original/review records and raw notes in dynamically sized code fences.

## Real AI, model and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 open weights; q8 ONNX `onnx/model_quantized.onnx` (~23 MB). Resolves upstream `main`, not a pinned revision: host availability and future model changes remain dependencies.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). WASM CPU, one thread, batches of four, normalized mean-pooled **384-dimensional embeddings**. No WebGPU needed; tests explicitly disable GPU.
- AI embeds supplied yarn descriptions and short informal notes, then ranks descriptions by dot product of normalized vectors. This helps synonyms and rough labels, but does NOT measure yarn, extract dimensions or establish sett/shrinkage/strength. A nearest reference is always selected, even on unrelated text. Five easy known-answer notes passed; the negation probe picked cotton despite requesting silk. Human review is essential, not optional validation theatre.
- Dimension/schema validation, conservative integer ceilings, motif rounding, stock pooling, baseline and release gates are deterministic, not AI. No hardcoded model responses or fallback classifications.
- React, CSS and app code are local Vite assets. Byte-audited immutable same-origin dependencies: worker and module factory from `20261115-6`, WASM from `20261107-2`. Preserve those public builds/paths. Exact sizes/hashes in `runtime-provenance.json`; actual shared worker protocol `{id,texts}` → progress/batch/result vectors/error was inspected.
- Shared worker passes `max_length:256`, but feature extraction uses tokenizer `model_max_length` (observed upstream 512); **no 256-token guarantee** is claimed. Application enforces 200 characters per note/description, at most 20 texts, validates count/dimension/finite values and near-unit norms before ranking.
- First cold run roughly **50 MB** (~23 MB weights + 26,861,777-byte WASM + JS/tokenizer). Documented hosts: Hugging Face and its HF/Xet/CDN download domains. No keys, paid services, backend or optional remote inference.

## Privacy, caching and devices

Content remains in browser memory. Only model/runtime file GET downloads occur, without request bodies or source notes in URLs; no telemetry, uploads, credentials, remote inference, orders or controls. Imported text is model data, not instructions granting tool authority. No real documents, personal datasets or secrets are included.

Use current desktop Chrome/Edge supporting WebAssembly SIMD, module workers and Cache API. Allow roughly 300 MB working memory (estimate, not measured guarantee). Actual validation uses desktop Chrome with GPU disabled. Physical phones, Firefox/Safari and low-memory devices are unverified. Unsupported Worker/WASM, construction/runtime/download errors, malformed vectors and 180-second timeout produce actionable errors, never fabricated results. Cancellation/input edits abort worker fetch, terminate workers and invalidate asynchronous file reads/results by run ID; retry creates a fresh worker.

Worker source, module factory, WASM and model files use Cache API/runtime caching. **Tested offline scope:** real fresh-worker inference after an online run in the SAME already-open production page, with all network disabled. No app-shell service worker; offline navigation/reload is NOT promised. Eviction/private browsing can require downloads again. Failure to cache may leave online-only behavior; a successful online run is not an unconditional offline guarantee.

## Input contract / limits

Source is a JSON object: `title` (1–100 chars), `loomWidthMm` (1–4000), `maxEnds` (1–10000), `profiles` (2–8) and `records` (1–12). See both complete synthetic fixtures in `src/core.js` / the app editor. No CSV input: explicit JSON avoids ambiguous units.

Each profile: unique `id` (1–40 chars), `description` (1–200), `endsPer100mm` (1–200), `widthShrinkBps`, `lengthShrinkBps`, `takeupBps` (each 0–5000), `stockM` (0–1,000,000 whole metres, reserved for warp). Each project: unique `id`, `note` (1–200 chars), `widthMm` (1–3000), `lengthMm` (1–20000 per finished woven piece), `pieces` (1–100), `fringeMm` (0–1000 per piece end), `repeat` (1–64 body ends), `selvedgeEnds` (0–40 TOTAL extra ends), `wasteMm` (0–3000 per warp end). All numeric values are integers; unsupported control characters are rejected. Reviewer notes ≤500 characters.

## Exact method and assumptions

100 basis points = 1%. Width and length shrink mean contraction relative to pre-finish width/off-loom woven length. **Take-up means extra warp yarn divided by off-loom woven length** (not yarn-length-denominator take-up). `endsPer100mm` is LOOM sett, not finished sett.

1. Allowance width mm = ceil(finished width × 10000 / (10000 − width shrink bps)).
2. Raw body ends = ceil(allowance width × sett / 100). Round UP to an integer motif multiple; add total extra selvedge ends.
3. Calculated reed width = ceil(total ends × 100 / sett), assuming selvedges use the same sett. This width, including motif overshoot, must fit the supplied loom. It is not a prediction of final fabric width.
4. Yarn mm per end = ceil(pieces × finished woven length × (10000 + take-up bps) / (10000 − length shrink bps)) + 2 × pieces × fringe mm + loom waste mm.
5. Total warp mm = ends × per-end mm. Pool per profile and compare to `stockM × 1000`; no fractional spool purchasing or automatic orders.

The woven portion uses BigInt rational ceiling once; integer sums/products fit safe Number bounds under validated limits. Pieces share ONE continuous warp and ONE waste allowance. Fringe is additional **uncontracted yarn length**, not a finished-fringe specification. No gaps between pieces, joining, mistakes, breakage, weft, sampling, strength, tension, draft, reed/dent arrangement or production tolerance included. Verify these separately from actual swatches before winding.

**Baseline:** same whole-mm, motif/selvedge/fringe/waste rules but no contraction or take-up; finished width/length used directly. Compare required metres and stock gaps, NOT accuracy, time or savings. Example 2 needs 1,445.542 m linen versus 1,350 m stock; baseline 1,290.2 m incorrectly appears sufficient. An explicit reviewed piece-count reduction clears the gap; undo restores it. No invented confidence percentages or performance improvements.

## Development / validation

```sh
npm install
npm run predeploy
python3 serve-built.py --port 7836
node core-test.mjs
python3 independent-test.py
node browser-test.cjs
node defensive-test.cjs
node recovery-test.cjs
python3 artifact-test.py local-
python3 bundle-audit.py
```

Tests use workstation-installed Playwright and real desktop Chrome. Defensive injections test only errors/stale handling; all successful AI assertions use the real model. The independent Python Fraction oracle checks 300 cases, including dimensions, conservative ceilings, motif counts, shared stocks, baseline and release gates. Artifact tests independently parse actual browser downloads with Python JSON/CSV and replay dimensions; multiline formulas survive with documented escaping. `VALIDATION.md` records observed outcomes and untested limits; five easy semantic examples are not representative accuracy.

Vite base `/daily-app2/20261127-6/`; required per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish the collection using ROOT predeploy/deploy**, never per-app deploy. Public URL: https://xianghui.github.io/daily-app2/20261127-6/ .
