# Variance Loom

Local-AI material consumption reconciliation and exact price/usage/activity cost bridges for workshop cost reviewers.

## Workflow

1. Choose **Print workshop** or **Sewing studio**, or paste/import source JSON. Examples are synthetic.
2. Supply material descriptions, units and standard cents per unit. Supply one non-overlapping material/batch record with planned quantity, standard allowed quantity **for actual output**, actual consumed quantity and actual consumption cost. Use one currency and horizon. Quantities must share the selected standard's unit.
3. Explicitly load AI. Local MiniLM embeds descriptions and proposes the closest material for every record, even unrelated ones. Inspect source and cosine evidence, correct the assignment, verify figures and approve or hold each record. The model never invents allowances, output, prices, causes or numeric values.
4. Apply reviewed costs. Holds remain in all artifacts but are excluded from calculation; partial worksheets are marked. Edit or undo any review; edits invalidate exports until reapplied. Originals remain unchanged.
5. Download JSON, CSV or Markdown, or copy the worksheet. JSON retains originals, review decisions, evidence, all standards and exact results. CSV includes every source/reviewed record and approved bridge. Markdown includes standards, all original/reviewed records and bridges. Reimport an audit to restore **originals only**, never approvals; infer and review again.

## Actual AI and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX English text encoder. Source model: sentence-transformers/all-MiniLM-L6-v2. No generative responses, canned mappings or heuristic AI fallback.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.30.0 (MIT), React + Vite. Lockfile records installed versions. Feature extraction uses normalized mean pooling, 384-dimensional finite unit vectors, four-text batches, 256-token context. Cosine ranking is deterministic after actual model inference.
- About 23 MB model/tokenizer plus 27 MB CPU WASM and under 1 MB app/worker, plus runtime module. Internet required initially. File/download and batch progress, cancellation and retry shown. No API key, WebGPU, server or paid service required. No optional remote inference integration.
- Bundle/runtime and worker files are local to this site. Reuse the byte-identical immutable collection WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve it. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Vite rewrites emitted references; matching WASM module factory is in `public/runtime/`.
- Similarity is not confidence, equivalence or identity proof. Different grades/units or negations can match; every proposal needs review. Tiny known-answer tests are not general accuracy evidence. Model host's main revision is not pinned; upstream changes may change proposals.

## Data, devices, failures and offline scope

User content remains in page/worker memory. Only file GET downloads from this site and Hugging Face/CDN occur; no content upload, analytics, credentials or remote inference. Imported instructions are data, never tool authority. Runtime/model caches contain downloaded assets, not input content. Export files are explicitly created by the user.

Tested with headless desktop Chrome, CPU WASM (GPU disabled), module workers, SIMD and several hundred MB free RAM. Other browsers and physical mobile devices are unverified; narrow layouts tested at 390 and 320 CSS px. WebGPU is not required. Unsupported worker/runtime, download errors, malformed embeddings and 180-second timeout produce actionable errors, not fake output. Cancel terminates workers; run IDs protect source changes, asynchronous imports and late worker messages.

Cache API bridges worker source, WASM factory and binary; Transformers.js caches model downloads. After a successful online run, **an already-open warmed page** can terminate the worker, disable network and run real inference in a fresh worker. This is tested. **Offline navigation/reload/app-shell launch is not promised.** Cache eviction/private mode can require redownload.

## Formats and limits

Only source/audit JSON input; PDF/CSV input unsupported. Example:

```json
{"project":"Weekly review","materials":[{"id":"paper","label":"Paper","description":"Printing paper sheets","unit":"sheet","standardCents":10}],"records":[{"id":"R1","description":"A4 booklet page stock","plannedQty":1000,"allowedQty":1200,"actualQty":1300,"actualCostCents":11700,"owner":"Reviewer"}]}
```

1–8 material standards; 1–32 records; unique IDs ≤40 chars per list; labels ≤80, descriptions ≤300, unit ≤40, project/owner ≤150, review notes ≤1,000. Source ≤30,000 chars. Audit/import envelope ≤2 MB independently of source limit. Quantities are integers 0–100,000, rates 1–1,000,000 cents/unit, actual costs 0–100,000,000 cents. Zero consumed quantity requires zero actual cost: this model excludes fixed charges. Use a consistent smaller unit and rate when possible; fractional rates/quantities are not supported. All sums remain safe integers within these bounds.

## Deterministic bridge and useful comparison

For rate SP, planned quantity PQ, allowed quantity SQ, actual quantity AQ and actual consumption cost AC:

- Static planned budget = PQ × SP; flexible budget = SQ × SP.
- Price variance = AC − AQ × SP (consumption basis, **not purchase-price variance**).
- Usage variance = (AQ − SQ) × SP.
- Activity-volume bridge = (SQ − PQ) × SP.
- Price + usage = AC − flexible budget. Price + usage + volume = AC − static planned budget, exactly.

The baseline is the static-budget net gap; the reviewed bridge separates activity changes from price/usage, and exposes offsetting per-record drivers. Sum of absolute price/usage drivers is a computed magnitude, **not savings or improvement**. Literal-label baseline counts notes containing their reviewed label; it is wording coverage, not accuracy. Positive price/usage means adverse cost and negative means favorable cost, not quality. Activity is not efficiency; none of the components establishes cause.

Allowances must already reflect actual output. No fixed overhead, mix/yield decomposition, unit/currency/tax conversions, actual-output inference, purchasing, ledger posting or external action. Overlapping observations and inconsistent allowances can still yield arithmetically correct but misleading bridges; reviewer responsibility remains.

## Validation and development

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. `npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy exists as required but **do not use it to publish the collection**. Root `npm run predeploy` / `npm run deploy` preserves all apps.

Checks: `node core-test.mjs && python3 oracle-test.py`; production browser suite `node browser-test.cjs`; `node defensive-test.cjs`; `python3 artifact-test.py`; `python3 asset-test.py`. Browser scripts use the installed workspace Playwright and local production fixture server at port 6789; `APP_URL` overrides the main workflow suite for combined/public testing. Defensive fault injection only verifies failures; successful AI tests use the real downloaded model.
