# Reserve Relay — reviewed multi-site stock rebalancing

**UNPUBLISHED DRAFT:** three GitHub Pages builds succeeded but deployments timed out. Public app remains HTTP 404; public runtime/inference are unverified. Excluded from gallery and restored deployment; do not count as completed. See [publication status](publication-status.json) and [hosting attempts](hosting-attempts.json).

**User:** a small multi-site supply coordinator. **Input bottleneck:** inconsistent product descriptions in stock counts obscure avoidable shortages across sites. **Output:** a reviewed transfer worksheet with donor reserves, directed route costs, remaining shortages and a complete source audit. Unlike purchasing, pick/buy allocation or expiring-lot reservation, this utility redistributes an existing complete multi-site snapshot; no stock or money moves externally.

## Workflow and formats

1. Choose Workshop supplies or Community equipment (synthetic), paste JSON, or import JSON/a prior audit. `name`; `sites` (2–4 unique IDs); `costs` (directed per-unit route matrix in site order, zero diagonal); `items` (1–4 products, unique `id`, `title`, `description`, `targets` in site order); `observations` (unique `id`, product narrative `text`, explicit `site`, whole-unit `quantity`). Include zero counts for empty sites. Set targets/costs in the editable JSON before running.
2. Read the ~50 MB download notice and explicitly **Load AI & match products**. Nothing downloads from the model host before this action.
3. Compare each narrative with the model's competing product descriptions and cosine similarity, not confidence. Correct product, site or quantity; these edits reset approval. Add a note and approve or hold every count. Undo restores the previous review state. No suggestion is auto-approved.
4. Confirm complete/current counts, interchangeable whole units, target reserves and linear costs. Apply the reviewed plan. Every product/site needs exactly one approved count. Holds, missing cells, duplicates or missing confirmation block all transfers, while all records remain exportable in the audit.
5. Compare unfilled target units against the **no-transfer baseline**, inspect direct transfers, final balances, remaining shortages and estimated cost points. Download JSON, CSV or Markdown, or copy the current Markdown. Every edit invalidates exports until reapplied. Data/reviews live only in memory: export before closing. Audit reimport restores originals, not prior corrected values or approval; review again.

JSON is lossless (`originalInput`, `records`, candidates, reviews, blockers, per-product transfers/balances and metrics). CSV retains every source with original/current product/site/count, note, decision, target, final count and shortage; blocked summaries have blank planned counts. Spreadsheet formula-like text is apostrophe-escaped, including multiline cells. Markdown contains transfers, all site balances and every source review. CSV is not an import format. PDF, XLSX and remote inventories are unsupported.

## Real AI and deterministic boundary

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0: quantized q8 ONNX learned 384-dimensional mean-pooled normalized embeddings. Transformers.js **4.3.2**, ONNX Runtime Web CPU/WASM (exact dependencies in lockfile). The default path requires no API key or server. No remote-inference integration exists.
- The model **only matches free-text counts to supplied product descriptions**. It does not infer sites/counts, verify compatibility, estimate targets, authorize dispatch or read stock systems. This reduces manual catalogue lookups for reworded descriptions. It is not ordinary keyword sorting. Finite vector count/dimension/normalization is checked before ranking. Imported text is data, never instructions or credential authority.
- Similarity is not probability, confidence or equivalence. Unrelated text still receives a nearest product. Negation, pack size, substitutes, multilingual descriptions and near-identical SKUs can fail. Verify independently or hold. Short English descriptions are the tested scope; no universal accuracy claim.
- Deterministic planning uses a bipartite donor/recipient residual network: maximize covered deficit units, then minimize total directed linear per-unit route cost using successive shortest augmenting paths. Reverse edges can undo earlier choices. Only surplus above target can leave a donor; recipients never exceed target from transfers. Integer quantities conserve stock independently per product. No target is fabricated by AI.
- Each product is planned independently, without transshipment, vehicle capacity, fixed trip fees, expiry, time windows or mixed pack conversion. Costs are estimated abstract points per unit, not money. Zero-transfer baseline uses identical reviewed counts/targets. Total units across unlike products are only a workload count, not economic utility. No dispatch, purchasing, contacts or account changes occur.

## Devices, downloads, privacy and offline scope

First load requires internet: approximately 23 MB model/tokenizer from `huggingface.co` / `hf.co` (including their CDN subdomains) plus ~27 MB same-origin runtime (~50 MB, excluding small app code). The UI shows model download/batch progress and cancellation. Four texts per batch; first 256 tokens; ≤28 texts. Module worker termination enforces cancel, changed-input and stale-run protection; timeout is 180 seconds. Network, malformed model and runtime failures show errors; never canned or heuristic AI fallbacks.

Tested in current desktop Chrome with WebAssembly SIMD, module workers, Cache API and several hundred MB available memory. CPU/WASM is the default; **no WebGPU required**. Physical phones and other browsers are unverified, although Chrome layouts at 1440/390/320 CSS pixels passed. An unavailable runtime gives an actionable requirement instead of silently switching inference.

User content/embeddings stay in the browser worker. Only model/runtime GET downloads leave the page; no content upload, telemetry, API keys, URLs containing source content, saved designs or localStorage. Fixtures are synthetic. Worker code, WASM factory and binary use explicit Cache API caching; Transformers.js caches weights/tokenizer. **Fresh-worker real inference offline in an already-open successfully warmed page was tested. Offline navigation/reload is not promised.** Browser eviction/clearing site data can remove caches. Export data before leaving.

App and worker/runtime code are bundled locally. The identical shared WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve this earlier app asset in combined deployments.

## Limits and validation

Original JSON ≤40 KB; audit import ≤1 MB; narratives/descriptions ≤400 characters; IDs ≤40 characters; 1–24 observations, 1–4 products, 2–4 sites. Counts/targets are integers 0–100,000; off-diagonal costs integers 1–1000. Complete snapshots have at most 16 distinct product/site cells; extra count rows can be reviewed but duplicate cells block planning. Invalid/empty/oversized data is rejected. The original source always survives unchanged alongside edits.

See [VALIDATION.md](VALIDATION.md) for observed fixture quality, independent exhaustive-flow oracle tests, real production-browser checks, artifacts and publication status. Two tiny clean fixtures are not general accuracy evidence.

## Development and publishing

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261111-3/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; per-app gh-pages dependency is retained. **Publish only from repository root** with the combined `deploy/` workflow; the individual deploy script would replace the collection. Root README documents Pages verification. Test scripts use the local Playwright/Chrome installation. Success-path model inference is never mocked; isolated fault injection tests defensive paths only.
