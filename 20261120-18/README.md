# Margin Press

**Status: published and public real-AI workflow verified.** [Open Margin Press](https://xianghui.github.io/daily-app2/20261120-18/).

A local-AI publication workbench for program/operations analysts who receive rough allocation notes and need whole-unit tables whose row and column totals agree. Not a chat interface, data-upload service, source-data correction tool or disclosure-control mechanism.

## Workflow

1. Paste source JSON or import a `.json` source/audit (under 2 MB). Try synthetic **Workshop hours** and **Library grants** examples. Supply row and column ID/description rosters, approved integer margins, common-unit nonnegative quantities and an explicit assumption.
2. Explicitly choose **Load AI & reconcile**. The real neural model independently maps each record's rough row and column descriptions to roster definitions. Inspect cosine-similarity evidence, not confidence.
3. Review both labels and each quantity. Correct links/values, add multiline notes, approve or hold every record. Originals never change; undo restores the prior review layer. Quantity/label edits reset that record's approval; all review edits invalidate applied exports.
4. **Apply reviewed checks** aggregates approved cells and solves minimum-total-absolute-error floor/ceiling rounding under both margin constraints. Independent-nearest rounding is displayed as a computed baseline. Holds remain in the audit and may make margins infeasible. Missing roster cells are structural zero, not imputed observations. Incompatible constraints produce an explanation and no table export; revise the source/targets and rerun.
5. Download **JSON**, complete review **CSV**, **Markdown**, or a feasible-only **Table CSV**. Copy worksheet copies the current applied Markdown. Audit import restores originals only, requiring fresh AI/review. No notifications, reports, payments or external actions are performed.

## Input schema and limits

```json
{
  "context": "Analyst and reporting purpose",
  "assumption": "All values are comparable hours; integer margins approved separately",
  "minSimilarity": 0.15,
  "first": [{"id":"teamA","text":"Wood carpentry team","total":2},{"id":"teamB","text":"Textile sewing team","total":2}],
  "second": [{"id":"teach","text":"Beginner training","total":2},{"id":"repair","text":"Repair maintenance","total":2}],
  "records": [{"id":"r1","rowText":"Carpentry wood shop","colText":"Teaching beginners","value":1.4}]
}
```

This abbreviated schema illustration is intentionally not a feasible complete table. Use the full synthetic fixtures in the UI.

- `first` is rows; `second` is columns. Each has 2–6 unique ASCII IDs (1–40 letters/digits/underscore/hyphen), nonempty descriptions ≤300 characters, nonnegative integer totals ≤96,000,000. Both grand totals must agree.
- 1–96 records; unique IDs; row/column descriptions ≤300 characters; finite nonnegative values ≤1,000,000, all in a single common unit. Input JSON ≤60,000 characters. Context/assumption ≤300 characters. No PDF/CSV/spreadsheet/image parser is advertised.
- 4 model texts per batch, up to 204 texts / 51 batches at maximum. The shared feature-extraction tokenizer enforces 512 tokens; per-call max_length is not treated as a stricter guarantee. Bounded 300-character descriptions also limit memory/context.
- Normalized finite 384-dimensional vectors, vector counts and norms are validated before suggestions. Every original must have a matching approved/held review. Run IDs and terminated workers protect against stale inference, file reads and worker-source downloads. 180-second timeout, explicit cancel and retry; errors never become canned predictions.

## Real AI, runtime and immutable assets

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, mean pooling and L2 normalization; 384-dimensional embeddings.
- Runtime: Transformers.js **4.3.2**, ONNX Runtime Web, **WASM CPU**, one thread. No WebGPU, API key, paid service, provider integration or server inference.
- First load: approximately **23 MB model + 27 MB WASM**, plus tokenizer/config and shared worker code. Internet needed initially. Public weights from Hugging Face and its CDN. The model's `main` revision is not pinned; observed revision is recorded in `runtime-dependency-audit.json` (upstream can change).
- Reuses byte-verified same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those original published apps/assets. Dependency sizes, SHA-256, actual source protocol and tokenizer cap are audited in `runtime-dependency-audit.json`.
- Worker source cached in `margin-press-worker-v1`; shared factory/binary in `circuit-cove-runtime-v1`; weights/tokenizer in Transformers.js browser cache. Cache storage is browser-controlled and may be evicted or unavailable in private modes.
- Required: secure-context browser, WebAssembly SIMD, module workers, Cache API and several hundred MB available memory. Desktop Chrome CPU is tested, physical phones/other engines are unverified. Unsupported devices receive an actionable error; there is no silent fake AI or GPU-only path.
- Tested offline scope: fresh-worker real inference after online warmup **in an already-open page**, with all network disabled. No offline reload/navigation/app-shell installation claim.

## Privacy and trust boundary

Source content, quantities and reviews stay in local page/worker memory and are not persisted by this app. Model-file downloads do not upload content. Only public model files and same-origin code/runtime are requested, after explicit loading. No keys, analytics, remote provider, URLs containing input, request bodies, model tools or account connections. Imported instruction-like text is inert embedding data, cannot grant authority, request credentials or invoke actions. Browser metadata (IP and file requests) still reaches model hosts. Export before closing; exports may contain whatever you entered. Committed fixtures and artifacts are synthetic only.

## Deterministic method and honest comparison

Aggregate all approved records by the reviewed row/column IDs. Define floor/ceiling cell bounds; quantities within 1e−8 of an integer snap to it. Each supplied margin must be the floor or ceiling of its reviewed exact marginal sum. Initialize with cell floors. A unit-capacity row→column residual network chooses which fractional cells round up, with incremental L1 cost `1−2*fraction`. Successive shortest augmenting paths (Bellman–Ford with reverse arcs) produce the minimum absolute-error feasible table. Verify all row and column sums exactly before returning it; report infeasibility rather than silently changing totals or source values. Ties follow roster order.

Baseline independently rounds each aggregate cell to nearest integer (JS Math.round). Count mismatched row + column margins, and compare total absolute cell error in the input's common unit. Constrained error can be larger than the unconstrained baseline; the improvement is **consistency**, not invented accuracy or time savings. Neural similarity does not establish identity, relevance, policy compliance or quantity correctness. Human review remains mandatory; missing/negated/unrelated descriptions may mislink.

## Exports

- JSON: originalInput, every review/evidence record, both rosters and totals, exact/nearest matrices, full cell provenance, feasible rounded matrix or blocker, metrics and assumptions.
- CSV: every source record and reviewed field, including held rows. RFC-style quoted fields/newlines and spreadsheet-formula neutralization for leading `= + - @ TAB CR` strings. Numeric values remain numeric.
- Table CSV: all roster cells, including structural zeros, exact sum / nearest / controlled integer and contributing source IDs. Available only when feasible.
- Markdown/copy: complete reviewed audit and reporting worksheet, supplied margins and limitations.

Audit JSON round-trips all originals within the separate 2 MB import limit; AI suggestions/approvals are not trusted on restore. Review notes stay in JSON/CSV/Markdown. Edits disable all exports until reapplication.

## Development and validation

React + Vite; base `/daily-app2/20261120-18/`. `npm install`; `npm run dev`; `npm run predeploy`. Per-app `deploy` exists per collection contract but **publish only from repository root**, whose combined `deploy/` retains all older apps. See `VALIDATION.md` for actual observed outcomes and untested scope; `core-test.mjs`, `browser-test.cjs`, defensive/race suites and independent Python artifact parsing are reproducible evidence, not universal quality guarantees.
