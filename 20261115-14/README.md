# Cost Current

An inventory-costing review desk for small workshop keepers. **A reviewed worksheet, not accounting advice, stock authentication or a ledger posting.**

## Workflow

1. Paste/import JSON or use **Print workshop** / **Garden store** synthetic examples. Supply the complete product catalog, one currency and ordered receipt/issue records. Opening stock is zero; enter opening lots first as receipts.
2. Explicitly click **Load AI & match movements**. Real local embeddings compare each description with every catalog definition. The closest product is proposed with cosine evidence; unrelated text still gets a closest product.
3. Verify product/unit equivalence, movement direction, whole quantities and receipt **total** cost in cents. Edit or hold unsuitable records; every row must be approved or held. Undo reverses review edits. Originals never change.
4. Apply. Insufficient approved stock blocks processing. FIFO consumes oldest receipt layers. A perpetual moving-average baseline pools remaining cost at every receipt and allocates it at each issue. Compare costs on identical reviewed movements; the difference is not a saving or AI accuracy metric. Held movements are excluded and the worksheet is labeled incomplete.
5. Export current applied JSON, movement CSV, product CSV or Markdown, or copy Markdown. Every edit disables exports until reapplication. Reimport JSON restores originals only and requires fresh AI/review.

## Real AI and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX, normalized mean-pooled 384-dimensional embeddings.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **WASM CPU**; no WebGPU dependency or fake/demo fallback. Max 256 tokens/text, batches of four.
- Shared immutable worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`. Preserve that originating app and its compatibility worker URL.
- Combined deployment reuses byte-identical 26,861,777-byte WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this originating app. Production worker bytes and dependency paths are audited again after assembly and at the public URL; local raw source builds may reference the byte-identical originating WASM.
- First load: approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus app/worker JS. Internet required; Hugging Face and its download CDN provide public weights. No account/key, paid service or remote inference provider.
- Browser requires WebAssembly SIMD, module workers, BigInt and several hundred MB of free RAM. Current desktop Chrome without GPU is tested. Physical phones, Safari, Firefox and low-memory devices are unverified; responsive emulation is not device performance testing.
- Download/file progress and processed-text counts are displayed. Cancel terminates the worker. Model/network/worker errors and 180-second timeout show errors with retry; no fabricated inference on failure.

## Privacy and caching

Content is only passed into a local Web Worker. Network is GET-only public model/runtime downloads; no descriptions are sent to a server. No analytics, credentials or optional remote integration. Input strings cannot issue tools or request keys. App state/content stays in page memory; downloads contain what the user explicitly exports.

Cache API retains public model/runtime assets, not inventory. A successful online run followed by a **fresh-worker real inference with all network disabled in the already-open warmed page** is tested. Offline startup/reload is **not** supported or claimed. Private browsing/cache eviction can require redownload. Shared runtime origins are same-site, not a service backend.

## Inputs, limits and deterministic rules

```json
{
  "currency": "USD",
  "products": [
    {"id":"paper","label":"Paper sheets","description":"Blank paper sheets for printing documents"},
    {"id":"ink","label":"Printer ink","description":"Ink cartridges for printing machines"}
  ],
  "records": [
    {"id":"R1","description":"Blank sheets for the printing press","kind":"receipt","quantity":10,"costCents":1000},
    {"id":"I1","description":"Paper used to print documents","kind":"issue","quantity":3,"costCents":0}
  ]
}
```

2–12 products, 1–48 movements. Unique product IDs and movement IDs (1–40 chars each); product label ≤100 chars; all descriptions ≤300; source JSON ≤40,000 characters. Import `.json` ≤2 MB, including an audit envelope with `originalInput`; the extracted original must still meet source limits. Quantities: integers 1–10,000; receipt costs: integer cents 0–100,000,000; issues must supply 0. Currency: three uppercase letters, interpreted as a two-decimal unit label; not exchange-rate or ISO currency validation. File reads, worker downloads and worker results use a run identity to prevent stale writes.

Source-array order, **not dates**, controls cost flow. Per product, approved receipts supply homogeneous whole units with total costs. Separate grades, packs and units into separate catalog entries. FIFO issues consume layers oldest first; each partial-layer cost is `roundHalfUp(remainingLayerCents × takenUnits / remainingLayerUnits)`. Moving average similarly allocates `roundHalfUp(remainingPooledCents × issueUnits / remainingUnits)`. Exact BigInt arithmetic handles rounding; depletion consumes the final cent. This explicit cent-by-cent balance convention can differ from higher-precision accounting systems. Zero-cost receipts are permitted. Costs and quantities are supplied data, not AI extraction.

Every product must satisfy received units = issued + ending units and received cents = issued + ending cents **under both methods**. Negative stock blocks the whole worksheet. Holds are retained but omitted; this can make downstream issues unsupported. No returns, negative movements, taxes, landed costs, write-downs, transfers, currency conversion or external operations. No inference of correct accounting policy.

## Output schema

JSON schemaVersion 1 contains `originalInput`, ordered `reviews`, ordered `ledger` (including held rows), every `product` summary and remaining FIFO layers, totals, baseline and scope. Each issue records consumed receipt IDs/units/cents. CSV keeps every movement and multiline review note; products CSV keeps every catalog item, even unused ones. Integer money fields are cents. Standard quote/comma/newline escaping and leading spreadsheet-formula neutralization are applied to string fields only. Markdown includes all source movements and reconciliation. JSON retains original unescaped strings. Export always reflects the current applied review; never a stale default.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed results. Synthetic fixtures only; no personal data or keys. Similarity is not identity, unit compatibility, correctness or confidence. Mandatory review is essential, especially negation, unrelated or near-identical product grades. Small fixture success is not general accuracy. The literal full-label/ID matching baseline measures name coverage only, not correct classifications. Cost-method comparison is a deterministic reconciliation, not measured time savings.

## Build / publish

React + Vite, base `/daily-app2/20261115-14/`. `npm run predeploy` builds this app; per-app gh-pages dependency and scripts retained. **Publish only from the collection root** using its combined `deploy/` workflow, never the individual app deploy. Shared dependency host apps must remain published. `node serve.cjs` serves local production builds on port 6882; `COMBINED=1 PORT=6883 node serve.cjs` serves the assembled deployment.
