# Pantry Current

A **draft ingredient reservation desk for cafe/bakery prep leads**. Recipe descriptions and stock catalogs often use different names; manually cross-referencing them and choosing lot order can leave avoidable shortages. Real local AI retrieves catalog candidates; a person confirms identity/form, then deterministic earliest-expiry planning allocates integer grams and exports reservations, shortages and remaining lots. No stock system changes occur.

This differs from the earlier **Stock Again** reuse desk: requests here can split across multiple lots, eligibility depends on service date, and chronological earliest-expiry reservation is compared against input-order lots. This is date-aware perishable-lot planning, not a renamed single-source pick/buy sheet. Both collection galleries were inspected read-only.

## Use

1. Open the app in a current desktop browser, try **Cafe prep** or **Bakery prep**, or paste/import synthetic/private JSON. Set `asOf`, service dates and quantities in the editable input. File inputs accept JSON only; no PDFs, spreadsheets or recipes are parsed.
2. Read the first-download/privacy disclosure. Explicitly click **Load AI & match ingredients**. Initial internet access and approximately **50 MB** of downloads are needed. Loading shows file progress and batch counts. Cancel terminates the worker; retry uses a new worker. A run times out after 180 seconds with an actionable error, never fabricated AI.
3. Review each source request against the supplied stock descriptions. Change the item, add notes, then **approve** or **hold** every request. Similarity does not establish equivalence. Undo reverses review edits. Original JSON is never rewritten.
4. **Apply reviewed reservations**. Inspect per-request lot splits, held demand, shortages and the complete remaining-stock ledger. A lot's user-supplied inclusive planning cutoff must be on/after service date. No unreviewed request can apply.
5. Download **JSON**, **CSV**, **MD**, or copy the Markdown report. Editing reviews invalidates the applied snapshot and disables exports until reapplied. JSON audits can be reimported: only original inputs are restored; AI must rerun and approvals are not restored.

Input shape (the app includes two complete synthetic examples):

```json
{"title":"Prep plan","asOf":"2026-11-09","items":[{"id":"CP","text":"Cooked chickpeas, garbanzo beans"}],"lots":[{"id":"L1","item":"CP","grams":800,"expires":"2026-11-12"}],"requests":[{"id":"R1","text":"Garbanzo beans for hummus","grams":500,"date":"2026-11-10"}]}
```

IDs must be unique within each list. All lots are assumed already available as of `asOf`; there are no arrivals. Dates: real YYYY-MM-DD in 2000–2099; service date cannot precede `asOf`. Same-day requests use input order. Quantities are whole grams, 1–1,000,000 per record. Normalize units yourself: no density/volume conversion. Limits: **12 items, 24 lots, 24 requests, 400 characters/description, 50 KB original payload**. Audit imports up to 1 MB are accepted before extracting/validating that original payload. Imported strings are treated as data, never instructions or requests for secrets.

## Real model/runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), **Apache-2.0**; original [sentence-transformers model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Quantized `onnx/model_quantized.onnx` q8, roughly 23 MB with tokenizer/configuration. Downloads use the model repository's default revision, not a pinned model snapshot; future host changes may change outputs.
- [Transformers.js](https://github.com/huggingface/transformers.js) **4.3.2** (Apache-2.0); [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) **1.31.0-dev.20260914-8d85527a0** (MIT). Lockfile records exact packages. WASM CPU, one thread, batches of four, mean pooling and L2 normalization, 384-dimensional embeddings; bounded to 256 tokens/text. No WebGPU required. Long descriptions can truncate.
- Inference embeds each catalog description and request. Cosine similarity ranks all catalog candidates. This is genuine embedding inference, **not** generated prose, regex classification, a chat proxy or hard-coded example response. Every request has a nearest proposal even if the catalog contains no suitable item. There is no fabricated confidence percentage or calibrated acceptance threshold. Vector count, dimension and finite values are validated before ranking.
- App, worker and factory are locally bundled/hosted. The byte-identical **26,861,777-byte** WASM is reused at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve this earlier app asset in the combined site. Vite rewrites the emitted reference to that immutable same-origin path and removes the duplicate binary.
- A current browser needs module workers, WebAssembly SIMD, Cache API for offline reuse, and sufficient memory (no universal RAM guarantee). Actual desktop Chrome tested. Firefox, Safari, physical phones/low-memory devices are not verified. Worker/module/WASM failures are surfaced with browser/network guidance; there is no silent deterministic replacement.

## Deterministic steps and comparison

After human review, requests process in chronological service order. For each approved item, consume eligible lots in earliest cutoff order, then original lot order for ties; split grams across lots if necessary. A lot must reference the reviewed item and not precede the service date. Insufficient stock yields explicit shortage grams. Held demand is separately retained and reserves nothing. Every request satisfies `requested = reserved + shortage + held`; every lot satisfies `original = reserved + remaining`, with no negative remaining stock. This does not optimize costs, substitutions or recipe priorities.

Two independently labeled comparisons are computed:

- **Exact-description baseline vs AI agreement with human review**: literal case-insensitive full-description equality versus embedding proposals. Agreement is not independent accuracy or safety certification.
- **Input-order lots vs earliest-expiry lots**: identical human-approved mappings and chronological demand; only lot policy differs. Shows actual allocated/shortage grams, not invented savings, elapsed time or production waste reduction.

## Privacy, caching and offline scope

No API key, backend, analytics or external actions. No optional remote provider. User content remains in page/worker memory; only documented model file downloads go to `huggingface.co` and its `*.hf.co` delivery hosts. The default path never sends recipe/stock text to them. Workers/runtimes are same-origin. Input and approvals are not saved to localStorage/IndexedDB. Downloaded audits contain your originals and should be treated as private.

Transformers.js caches model files; explicit Cache API caches hold worker source, WASM factory and binary. Cache names are `pantry-current-worker-v1`, `pantry-current-runtime-v1`, plus the Transformers cache. The factory/binary are bridged through local blob URLs so a fresh worker can infer **offline within an already-open successfully cached page**. This actual production-bundle flow was tested with all network disabled. **Offline reload, navigation or initial startup are not promised.** Cache eviction, storage failure or private browsing may require online redownload. Clear browser site data to remove cached assets. Cache failures never authorize content upload.

Run IDs guard worker fetches, file reads and callbacks. Cancel/input edits terminate workers and invalidate output. Defensive tests inject malformed vectors, absent workers/WASM, delayed callbacks and timeouts only to test errors; all successful workflow/quality checks use the real model.

## Exports

- **JSON**: complete original input, all review/ranking evidence, every request, per-lot splits, all stock lots, computed metrics and full baseline. Reimport restores only `originalInput`.
- **CSV**: both `record_type=request` and `record_type=lot`; preserved original quantities/descriptions, reviewed item/decision/note, allocations encoded as JSON, shortage/held/remaining grams. Spreadsheet formula-leading strings are apostrophe-prefixed (including multiline notes); genuine numeric gram values stay numeric.
- **Markdown/clipboard**: complete prep reservations, holds/shortages, original lot totals and remaining stock. Plain-text format, no sending or inventory updates.

## Limitations

English semantic retrieval can confuse negation, species, ingredient forms, quantities, restrictions and allergens. The observed negation challenge still proposed chickpeas when explicitly prohibited. **Not food-safety, allergen, nutrition or substitution advice**. User dates are inclusive planning cutoffs, not an assertion that food is safe on those dates. Physical condition, storage and recipe suitability require independent checks. All fixtures are synthetic. Never use the computed plan as automated authorization to consume food or purchase replacements.

## Validation and publishing

See [VALIDATION.md](VALIDATION.md), browser/asset reports, saved exports and screenshots for actual observations and untested devices. Commands:

```sh
npm install
npm run predeploy
node core-test.mjs
python3 serve-test.py
# another terminal
node browser-test.cjs
node network-test.cjs
node cancel-download-test.cjs
python3 artifact-test.py
```

React + Vite, base `/daily-app2/20261109-19/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained as required; **do not invoke per-app deploy**. Use the root README's combined `npm run predeploy` / `npm run deploy`, preserve every existing gallery entry, verify Pages commit/runtime hashes and rerun real public inference. Daily digest handles announcements separately.
