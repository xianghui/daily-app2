# Freight Weave

A local-AI transport allocation worksheet for distribution coordinators moving **one interchangeable commodity** from warehouses to destinations. Not a dispatch system, route navigator or mixed-product optimizer.

## Workflow

1. Paste source JSON, import `.json`, or choose one of two synthetic examples. Edit destination descriptions, warehouse supplies, available lanes/caps/cents and requests in the source editor.
2. Explicitly click **Load AI & match destinations**. MiniLM embeds the destination and request descriptions, then cosine ranking proposes destinations. This meaning-based reconciliation reduces manual alias lookup; quantities never come from AI.
3. Inspect every original snippet, candidate description and similarity. Correct destination, integer quantity, multiline owner and next action. Approve for worksheet calculation or hold. Nearest-neighbor similarity is not calibrated confidence: unrelated text still gets a nearest destination. Identity, suitability and product equivalence require human review. Undo review edits; any edit invalidates exports.
4. Apply to maximize delivered units, then minimize variable cents among those maximum-service allocations. See unmet demand and a cheapest-lane-first baseline. Held demand is excluded and prominently marks partial coverage.
5. Download full JSON, request CSV, **Lanes CSV** or Markdown, or copy the reviewed worksheet. Reimport JSON restores originals only, never approvals. No stock or shipments change.

## Real AI, assets and privacy

- `Xenova/all-MiniLM-L6-v2`, https://huggingface.co/Xenova/all-MiniLM-L6-v2 (Apache-2.0). Quantized q8 ONNX; normalized mean-pooled 384-dimensional vectors.
- `@huggingface/transformers` 4.3.x / ONNX Runtime Web WASM CPU; exact installed versions in lockfile. No WebGPU required. No alternative remote provider or keys.
- Initial model download approximately 23 MB plus approximately 27 MB WASM CPU binary, bundled worker and local module factory. Explicit loading required; internet first run. Hugging Face and its CDN deliver model files. The runtime/worker are same-origin collection assets.
- Immutable byte-identical shared WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Keep that app asset published. To keep the combined site below its existing size guard, the app reuses the immutable collection embedding worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` and its factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`. Preserve both older apps. The worker implements the same text→vectors protocol; it contains no task decisions or user data. Its source reference is retained in `src/ai.worker.js`; `public/runtime/` is a source reference, not emitted again. The app caches shared worker source before blob instantiation. Actual shared production paths are tested.
- Default content stays in browser memory, never sent with model requests. No analytics, keys, backend, uploads or external inference. Cache API contains runtime/model downloads, not user content. Downloaded user exports remain under the user's control. Fixtures and committed artifacts are synthetic only.
- Tested offline scope: after an online warm-up, **fresh-worker inference in an already-open page** with network disabled. Offline navigation/reload/app-shell startup is not promised. Eviction or private mode can require a re-download. Cache storage denial falls back to explicit network download, not fake AI.
- Current desktop Chrome, WebAssembly SIMD, module workers, several hundred MB free RAM. Physical phones, Safari/Firefox and low-memory devices not verified. Narrow layouts tested in desktop Chrome. No claim that all mobile devices can infer.

## Formats and limits

Source object:

```json
{
  "rules": [{"id":"reading","label":"Library","description":"Public library book lending"}, {"id":"sport","label":"Gym","description":"Sports gym swimming pool"}],
  "warehouses": [{"id":"store","supply":10}],
  "routes": [{"from":"store","to":"reading","cap":8,"cents":120}],
  "records": [{"id":"R1","description":"Take standard parcels to the book lending desk","quantity":3,"owner":"Coordinator"}]
}
```

2–6 destinations; 1–6 warehouses; 0–36 unique warehouse/destination lanes; 1–32 requests. Supply/cap integers 0–10,000; quantity integers 1–10,000; cents per unit integers 0–1,000,000. IDs unique within each list, nonempty ≤50 characters; destination labels ≤100; descriptions ≤300; owners ≤150; review notes ≤1,000. Source ≤30,000 characters; `.json` imports ≤2 MB, including full audit envelopes whose original input must still fit the tighter source limit. Four texts per inference batch, 256 tokens per text, 180-second timeout. Long token sequences may truncate even within the character limit. No CSV import; exports are UTF-8 with proper CSV quoting and spreadsheet-formula escaping for text fields. JSON is the lossless audit format; CSV's safety apostrophe is intentional.

JSON includes every original input, every reviewed request (held/unmet included), semantic evidence, both allocations, demand and lane constraints. Request CSV includes all requests, quantities, allocated/unmet and reviews. Lanes CSV includes every available lane, including zero flows, cap, unit cost and line cost. Markdown includes all requests and lanes. These are current applied snapshots, not cached defaults.

## Deterministic allocation and comparison

Integer min-cost maximum flow on source → warehouse → destination → sink. Residual reverse edges allow earlier allocations to be undone. Successive Bellman-Ford shortest augmenting paths maximize served quantity first and minimize linear cost for that quantity. Per-warehouse supply, per-lane cap and per-destination demand are hard upper bounds; unavailable lanes are absent, zero-cost lanes allowed. No claim of unique allocations where several optima exist.

Baseline: globally ascending unit-cost lanes, source lane order for ties, greedily fill remaining demand from remaining supply; never reroute. Equal served quantities allow a conditional variable-cost difference. **Different served quantities do not support cost-saving claims.** The app shows raw computed units and cents, not invented measured improvements. At each destination, allocated totals fill requests in source order, not by urgency. Partial request fulfillment is allowed. Costs are integer cents throughout (within safe integer range).

Assumptions: identical interchangeable units across all warehouses and destinations; one simultaneous planning period; linear per-unit costs; no fixed costs, minimum shipments, route time, fleet capacity, time windows or competing products. Supply need not be fully consumed. Insufficient capacity yields an explicit shortage worksheet. Holds mean incomplete demand coverage; no forecast, dispatch, booking or shipment creation occurs. Real stock and transport feasibility must be verified separately.

## Reliability and validation

Worker termination/run identities guard cancellation, changes, late file reads and late worker downloads. Model/load/worker errors, unsupported WASM/workers, timeouts and malformed finite-normalized embedding schemas leave no fake suggestions or exports. Instructions in imported text remain inert model data; model has no tools or network authority beyond fetching runtime/model files.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed results, fixture limitations and publication status. Build with `npm run predeploy`; per-app deploy scripts are retained by contract but **publish only from the repository root** with its combined `deploy/` workflow.

Freight Weave public release: first matching Pages `8ba071eec8ddae42cafb5f237b7b413eb5c759c7` built and deployed successfully; byte-matched public app/shared worker/factory/WASM, both real-AI fixtures, seven workflow groups, reviewed request/lane artifacts, warmed-page fresh-worker offline inference and the preserved 680-entry working-tree gallery passed. Combined site remains below the unchanged 1 GB guard. Source commit excludes unrelated pre-existing edits.
