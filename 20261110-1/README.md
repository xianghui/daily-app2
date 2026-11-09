# Breakwater Budget

A single-product monthly cost worksheet for makers and workshop coordinators. Real local AI proposes whether each narrative describes fixed monthly overhead or a per-unit variable expense. Review both the category **and the amount basis**, approve/exclude/hold all rows, and apply a capacity-aware break-even scenario. No account connections, posting or sending.

## Use

1. Choose one of two synthetic examples or paste/import JSON. Set `name`, `goal`, `priceCents`, `capacity` (units/month), `targetProfitCents`, and `costs: [{id,description,amountCents}]`.
2. All monetary values are integer cents in one currency. Convert annual overhead into a monthly amount first; variable amounts must already be cents/unit. Split mixed/tiered costs manually. Never pass percentages as cents.
3. Click **Load AI & classify costs** after reading download requirements. Inspect original narratives and both anchor cosine similarities. AI suggestions are not approvals, confidence percentages or accounting verification.
4. Edit kind/amount/note and explicitly approve, exclude or hold each record. Any edit resets that row to pending and invalidates applied exports. Undo restores the last review snapshot. Holds block all financial projections, while preserving an incomplete audit; exclusions remain visible assumptions.
5. Apply the reviewed budget. For positive contribution margin, integer-ceiling break-even and target-profit unit counts are calculated. Compare target with monthly capacity, profit at capacity and minimum integer-cent price at capacity. Zero/negative margins yield no finite positive-margin break-even proposal. One product/month, all units sold, constant price and variable costs are assumed. Taxes, inventory changes, cash timing and financing are not implicit.
6. Download actual reviewed JSON, complete cost CSV or Markdown; copy the same Markdown. JSON includes originals, review state and model evidence. Reimport deliberately restores **original inputs only**, reruns AI and resets approvals, not edited review amounts. CSV formula-like text is prefixed with an apostrophe; JSON retains exact source and notes.

## Real AI / default no-key path

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX weights; English-oriented semantic retrieval, not a generative accountant.
- Runtime: `@huggingface/transformers` 4.3.2 / ONNX Runtime Web, CPU WebAssembly single-thread, no WebGPU required. Normalized mean-pooled 384-dimensional embeddings compare narratives against two explicit cost-behavior anchors. Four texts per inference batch, 256-token cap. All returned vectors are validated for count, dimension, finite values and approximate normalization.
- Rough first download: ~23 MB model/tokenizer from huggingface.co / hf.co delivery hosts, ~27 MB same-origin WASM plus app/runtime code (~1 MB). Internet needed on first load, or after eviction. Load status includes file progress and chunk counts. Cancellation terminates workers; network/device errors and 180-second timeout offer retry without fake output.
- Shared immutable WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, byte-identical to installed runtime. Preserve that older app asset in combined deployment. Module factory and worker are bundled locally with the real Vite base.

## Privacy / offline / supported devices

Content stays local in the default path: inference consumes strings inside a worker, not model-host requests. No external inference, credentials, analytics or persisted input documents. Downloads are network GETs for weights/configuration/runtime. Model and runtime/worker assets are cached in Cache API; inputs and review state are memory-only except user exports. Cached model assets may be shared by other apps on the same origin. Clear site data to remove caches.

After successful loading, **fresh-worker inference inside the already-open page** is tested with network blocked. Offline app navigation/reload is NOT promised; HTTP caching alone is not a durable offline shell. Private mode/cache eviction may require internet. Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and adequate RAM is tested. Physical phones, Safari and Firefox are unverified. Phone-width responsive layout does not establish phone inference performance. If WASM is absent, use a compatible desktop browser; there is no fake fallback.

## Limits and deterministic calculations

JSON payload 40 KB, imported audit 1 MB; 1–24 costs, IDs ≤30 characters, narratives ≤400, name ≤100, goal ≤400, notes ≤500. Price 1–100000000 cents; amounts and target 0–100000000; capacity 1–1000000. Unsupported formats and invalid schemas are rejected. Duplicate IDs, fractional cents and oversize batches fail validation. Input changes, file reads, worker fetches and callbacks share run-identity guards; cancelled/stale results cannot overwrite newer inputs.

Approved fixed total F and variable/unit total V yield margin M=P−V. For M>0, break-even=ceil(F/M), target=ceil((F+T)/M). Profit at capacity C is C*M−F. Minimum price at capacity for target T is V+ceil((F+T)/C). Any held cost suppresses projections. All operations remain within safe integer range under input bounds. Explicitly excluded costs are not savings. Zero fixed and positive margin can produce zero break-even units. No discounting or uncertainty forecast.

A transparent baseline classifies only descriptions containing literal words `fixed` or `variable` (fixed wins if both appear). Reported coverage and human/model agreement are computed from current records; neither is accuracy or measured time saved. AI materially supplies semantic proposals on narratives lacking those literal words; people must verify them. Goal text is human context, not sent to the model. Imported text is data, not authority.

## Limitations / validation

Cosine similarity cannot reliably understand negation, mixed costs, irrelevant text or financial contracts. Every row receives a nearest-anchor class even if neither fits. Hold ambiguous costs; split mixed costs manually. The model does not extract amounts or verify monthly/per-unit units. A mathematically feasible target is not evidence that demand exists.

See [VALIDATION.md](VALIDATION.md) and machine-readable browser/core/network/runtime reports for actual outcomes. Synthetic fixtures only. Run `npm run predeploy`; publish only through the **root** combined `deploy/` workflow, never this app's standalone deploy command. Per-app required scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`.

Observed initial fixture quality: 7/8 intended labels, with the missed per-attendee refreshment cost corrected during human review. Negation and mixed/irrelevant text challenges fail; mandatory review is essential. The examples deliberately retain that miss rather than substituting canned or forced labels.
