# Frontier Folio

A local-AI Pareto shortlist worksheet for operations teams comparing supplier quotes, venues or other small option sets. It improves the repeatable bottleneck of reconciling informal measurement labels before comparing multiple conflicting goals. Unlike Tender Prism's weighted score ranking or Yield Ledger's defect-frequency Pareto chart, this workflow constructs **multiobjective dominance fronts without preference weights**, retains equivalent alternatives and exports pairwise dominance/trade-off witnesses. Both collection galleries were checked before choosing it.

## Workflow / formats
1. Load a synthetic example, paste JSON or import a `.json` source/audit under 2 MB. Schema: `context`, `items` (criterion `id,label,description,unit,direction` with `min` or `max`), `options` (`id,label`), `observations` (`id,option,description,value`). Each value is supplied, never extracted or invented by AI.
2. Set your explicit goals using criterion direction and comparable units in source JSON. Press **Load AI & reconcile inputs**. Local neural embeddings propose criterion identity for every rough measurement description. Inspect the top-two criterion descriptions and cosine evidence; these are not confidence scores.
3. Review/edit each criterion link, option, numeric value and multiline note; approve or hold every row. Link/value edits reset approval. Undo restores review edits. Original input is retained independently. A held row blocks the complete shortlist, rather than silently discarding options.
4. Apply reviewed plan. Every option × criterion cell must have exactly one approved measurement; gaps/duplicates produce a blocked audit. Inspect all options, nondominated tiers, dominance witnesses, equivalent scorecards and genuine trade-off pairs. Compare with all options tied for best on the first criterion alone.
5. Export current reviewed **JSON, CSV, Markdown** or copy the worksheet. Any review edit invalidates the applied snapshot and disables exports until reapplied. JSON preserves originals, reviews, evidence and full results. CSV has every measurement, original/reviewed values and current option status. Potential spreadsheet formulas in text cells receive an apostrophe; genuine signed numbers remain numeric. Markdown includes every source, option and a follow-up checklist. Audit reimport restores **originals only**, not trusted model outputs/approvals; run and review again.

## Real AI / static hosting
[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). WASM CPU, one thread, normalized mean-pooled 384-dimensional sentence embeddings. Cosine compares rough measurement meaning against supplied criterion descriptions. It materially drives criterion linking; no regex or canned response substitutes for inference. AI does not verify measurements, infer units/directions, extract values, perform arithmetic, assess evidence or make purchases.

To avoid duplicating large runtime bytes near the collection size limit, this app caches and reuses these immutable same-origin production dependencies; **preserve their originating apps**:
- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` — bundled Transformers.js / ONNX worker, `{id,texts}` input, progress/batch/result vectors output.
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` — runtime factory.
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` — CPU binary.

Initial download budget: **about 23 MB model + 27 MB WASM**, plus tokenizer, config and JS. Internet required initially; model files download from Hugging Face and its CDN, runtime code from the collection. No third-party runtime CDN or hidden backend. Model repository default revision is not pinned; no reproducibility guarantee after upstream changes. Four-text chunks, up to 32 texts. Worker passes `max_length:256` but installed feature-extraction pipeline does not enforce that argument: actual tokenizer ceiling is 512 tokens. App independently bounds descriptions to 300 characters. Embedding count, finite components, 384 dimensions and normalization are checked before matching.

## Devices, limits, cancellation
Requires WebAssembly SIMD, module workers, Cache API and several hundred MB free RAM. No WebGPU required. Desktop Chrome with GPU disabled is tested. Physical phones, other engines and minimum RAM limits are unverified. Responsive layout is tested at 1440, 390 and 320 CSS pixels.

2–8 criteria, 2–12 options, 1–24 measurements, 50,000 source characters; 300 characters per description/label/context/unit. Numeric values finite within ±1 billion. A complete option × criterion grid is required for a ready shortlist, so some combinations of upper bounds cannot form a complete grid within 24 rows. Source IDs are unique and bounded. Review notes max 1,000 characters. JSON file envelope max 2 MB independently of stricter original-source bounds.

Loading/progress, four-text processing counts, cancellation and retry are visible. A 180-second timeout, network/runtime/construction failures and malformed vector/envelope handling leave no fake results. Cancel terminates worker; run identity protects source fetches, file reads and messages. Input changes invalidate all prior recommendations/results. Imported instructions cannot acquire tool authority, request keys or change code.

## Privacy / tested offline scope
No account, shared key, optional provider integration or remote inference. User content remains in browser memory, sent only to the local worker. External requests download static model files; user content is not uploaded or placed in URLs. No content localStorage/history. Explicit exports download to the user's device. Caches contain model/runtime assets, not documents.

Worker source uses `frontier-folio-worker-v1`; factory/WASM use the shared `circuit-cove-runtime-v1` cache; model files use Transformers.js Cache API. Cache persistence/eviction is browser-controlled. After a successful online run, **fresh-worker real inference in the same already-open warmed page with all network disabled** is tested. Offline navigation/reload/first use and cache-evicted operation are not promised. Clear site data to remove caches; redownload is then required.

## Deterministic comparison / limitations
A dominates B iff A is no worse on **all** reviewed criteria and strictly better on at least one, respecting each min/max direction. All pairs are checked. Repeatedly remove nondominated options to form numbered fronts. Exact equal vectors are equivalent and both remain. No epsilon, normalization or preference weights are invented. Baseline keeps all options tied for best on the first criterion; UI computes its omitted nondominated options and dominated baseline picks from the current reviewed matrix.

Counts describe these inputs, not predicted accuracy, time savings or universal improvement. More frontier options are not necessarily better decisions. Finite exact-double comparisons do not model measurement noise/uncertainty, feasibility constraints, unmeasured goals or utility. Units must already agree per criterion; no unit conversion. Human review is mandatory: even unrelated/negated descriptions receive a nearest-criterion suggestion. Do not treat nondominated tiers as an overall ranking or recommendation to buy.

## Validation / deployment
React + Vite base `/daily-app2/20261119-6/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages dependency retained. **Publish only through root combined-site workflow**, never the individual deploy command.

See [VALIDATION.md](VALIDATION.md), browser/defensive/core/artifact JSON evidence and byte audits. `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node import-stale-test.cjs`, `node newer-run-test.cjs`, `python3 artifact-test.py`. Tests use local Playwright installation and served production assets; `APP_URL`/`REPORT` choose assembled/public bundle targets. No real personal data or credentials used.

Combined assembly required extending the existing deploy-only geometry WASM sharing to `20261030-29`. Its source remains unchanged; actual built-in generation, PNG import and parsed STL export were retested against the assembled site. Shared geometry host `20261028-24` must remain published.
