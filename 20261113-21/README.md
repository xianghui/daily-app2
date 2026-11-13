# Pack Ledger

A local-AI packaging composition worksheet for packaging coordinators. Reconcile rough component descriptions into a material register, verify supplier/count/mass evidence and export a complete mass, recycled-content and supplied-fee ledger. Unlike a stock blend optimizer, it audits an existing packaging batch; it does not choose or buy materials.

## Workflow

1. Choose **Parcel dispatch** or **Gift hamper**, paste source JSON or import source/audit `.json` ≤2 MB. Set `project`, `targetPct`, `baselineCentsPerKg`, material `policies` (id, label, description, centsPerKg) and `records` (id, note, units, grams, recycledPct, owner). All included examples are synthetic.
2. Explicitly **Load AI & match materials**. Review the first-download/privacy/device notice before loading. Progress distinguishes model downloads from four-text inference batches; cancel terminates workers.
3. Review every source note, proposed material, ranked competing descriptions, quantities and recycled-content evidence. Correct identity/count/grams/percentage, reviewer and multiline follow-up. Approve or hold each record. Undo changes; originals are preserved.
4. **Apply reviewed components**. Every record needs a decision; any hold blocks complete-batch totals but still permits complete audit exports. Composite packs need separate measured material components. Check double counts manually: multiple different components of the same material are allowed.
5. Inspect material mass/fee subtotals, mass-weighted versus unweighted recycled content, target gap and material-rate versus flat-rate scenario. This improves evidence consistency and prevents misleading averages of percentages; it makes no measured time/accuracy/savings claim.
6. Download current JSON/CSV/Markdown or copy the checklist. Any review edit invalidates applied exports. Audit reimport restores originals only; inference and approvals must be renewed.

## Real AI / source / runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: <https://huggingface.co/Xenova/all-MiniLM-L6-v2>. Quantized q8 ONNX, Transformers.js **4.3.2** and ONNX Runtime Web CPU/WASM. No generative model or remote inference.
- Approximately 23 MB model/tokenizer from Hugging Face/CDN plus 26,861,777-byte same-origin WASM and a ~53 KB locally bundled factory. Model host default revision is not pinned; upstream changes may affect reproducibility. See package lock for exact dependencies.
- MiniLM produces mean-pooled normalized 384-dimensional embeddings of material descriptions and component notes. Cosine ranking proposes semantic matches despite wording differences. Count/dimension/finiteness/norm validation rejects malformed output. Similarity is not confidence, authenticity or environmental certification; unrelated notes still get a nearest match and need holding.
- AI does not extract/invent counts, masses, percentages, rates or target values. Those are supplied and human-reviewed. Aggregation, arithmetic, validation, target gap and exports are deterministic. Imported instruction-like text has no authority or credential/tool access.
- Worker and runtime factory are bundled locally with production paths. Byte-identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Root deployment must preserve this earlier app asset. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.

## Privacy, devices, cache and errors

Default content never leaves the browser. Only model/runtime files download; no API key, optional provider, analytics, uploads or account connection. Content and reviews are memory-only, not automatically saved. Cache API stores model/runtime/worker files, not source notes.

Requires WebAssembly SIMD, module workers and several hundred MB free memory. Desktop Chrome CPU with GPU disabled tested. 320/390px layouts and 320px emulated touch workflow tested; physical phones and other browsers unverified. WebGPU unnecessary. Cancel/input changes terminate workers and invalidate run IDs, including asynchronous file/worker-source reads. Worker construction/download, runtime/network/model failures, malformed vectors and 180-second timeout show actionable errors without fabricated output.

An **already-open warmed page** can run real inference with a fresh worker fully offline. Offline navigation/reload/app-shell startup is NOT supported or claimed. Cache eviction, denied storage or a new browser profile needs internet again.

## Bounded formats

Source JSON ≤40,000 characters; import ≤2 MB, with audit envelope originals unpacked and revalidated. 2–6 material profiles, 1–40 component records, unique profile and record ids. Note/description ≤300 chars; owner ≤150; review evidence ≤1,000. Inference batches four texts, 256-token truncation, 180-second timeout.

Integer units 1–100,000; grams per component 1–10,000; recycledPct/targetPct 0–100; material and baseline rates 0–100,000 cents/kg. Whole grams/whole percentages only: use better source measurements elsewhere if finer precision is necessary. No CSV/PDF import, OCR or automatic numeric extraction. One material per record; separate multilayer/composite parts before import.

## Exact arithmetic and honest comparisons

Mass = units × grams. Recycled mass is stored exactly as `recycledGramPct = sum(mass × recycledPct)`; grams = this numerator / 100. Batch percentage = numerator / totalGrams. The unweighted baseline averages record percentages, not product percentages. It depends on record grouping and is intentionally not the correct batch measure.

Material fee cents = half-up(materialGrams × suppliedCentsPerKg / 1000), rounded **once per material**, then summed. Flat baseline rounds all mass at baselineCentsPerKg once. BigInt handles fee products; bounded totals fit exact integer storage. A material-rate total can exceed a flat-rate total solely because of separate rounding, even with identical rates. Scenario differences are not measured savings, legal obligations or fee filings.

Fixed-mass target gap = max(0, targetPct × totalGrams − recycledGramPct). Minimum whole grams of virgin mass to turn into 100%-recycled mass = ceil(gap / 100). This is an arithmetic lower bound, not a feasible substitution plan. Product performance, supplier claims, recyclability, life-cycle emissions, food contact, regional regulations, taxes, minimums and reporting thresholds are not assessed. All rates use one currency, with cents as 1/100 unit. No report, order or payment is submitted.

## Artifacts and validation

- JSON preserves every original/review, ranked evidence, holds/blockers or full material ledger and comparisons.
- CSV has one row per original with original/reviewed quantities and identity, decisions and multiline evidence. Batch totals repeat per row and **must not be summed**. Formula-like text receives a leading apostrophe; genuine numeric fields stay numeric.
- Markdown includes current material subtotals, comparison summary and source-linked evidence checklist plus complete reviews.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed results and limitations. Start `python3 serve.py`, then run `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`, `node edge-test.cjs`, `python3 artifact-test.py`, `python3 oracle-test.py` and `python3 asset-audit.py`. Browser tests use installed workspace Playwright/Chrome and initially require model-host internet. `TEST_URL`/`REPORT` select combined/public browser suites.

## Build / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds React + Vite at `/daily-app2/20261113-21/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` remain required, but publish the collection only through the ROOT `npm run predeploy` / `npm run deploy` workflow and root `deploy/` folder.

Pack Ledger public release: both real-AI fixtures, all nine public workflow groups, reviewed artifact round-trips, byte-matched app/worker/runtime assets, warmed-page fresh-worker offline inference and the preserved 646-entry gallery verified on the first Pages deployment.
