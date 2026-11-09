# Borrow Bridge

A local-AI checkout planning desk for community media rooms, learning labs and shared equipment coordinators. Free-text requests often name the same equipment differently; real semantic inference helps reconcile them before a human-approved fixed-interval allocation determines reusable units and capacity shortages. Distinct from consumable stock allocation: units return, need turnaround, and can serve later loans.

## Workflow

1. Choose synthetic **Media room** or **Learning lab**, paste JSON or import a prior JSON audit.
2. Set catalog capacity and turnaround, plus each request's start/end minutes and quantity. All minutes are relative to your own session start; no timezone/calendar inference.
3. Explicitly click **Load AI & match equipment**. Review actual source descriptions, cosine rankings and every proposed match. Correct unsuitable matches, add notes or hold requests. Nothing is automatically approved.
4. Apply the reviewed plan. Inspect numbered unit assignments and **EXTRA REQUIRED** flags. Extra units are hypothetical rental/acquisition needs, not available inventory. This never books or changes inventory.
5. Export current JSON, CSV or Markdown, or copy the handoff report. Any review edit disables stale exports until reapplied; undo is available. Input changes discard prior evidence. Originals remain in every JSON audit. Reimport restores source only, never approvals.

## Real AI / license / runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX weights.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web **1.31.0-dev.20260914-8d85527a0**, MIT; bundled worker/runtime factory. React + Vite.
- Real WASM CPU feature extraction, normalized mean pooling, 384-dimensional vectors; dot product is cosine similarity. Four texts per batch, 256-token truncation. Vector count, dimension and finite values validated before suggestions.
- No prompt completion or extraction is fabricated. Similarity is not confidence, equipment compatibility, identity or suitability. English intended. Mixed requests, negation, specifications and specialist jargon can fail. Inspect actual connectors, accessories and condition manually. All requests require human review or hold.
- Exact-string description matching is the simple AI comparison baseline. Agreement against edited reviews is not independent accuracy.

## Deterministic allocation / honest comparison

Approved quantity is expanded into unit-demand intervals **[start, end + buffer)**. Sort by start, reuse the first free numbered unit, otherwise add one. Equal-time returns including turnaround precede new checkouts. This interval partitioning attains the minimum number of units per reviewed equipment type: whenever a unit is added, every existing unit is occupied. Types are distinct and cannot substitute. IDs are numbered within each type, not actual serial numbers.

Units numbered beyond supplied available capacity are always labeled **EXTRA REQUIRED**. The whole plan remains a draft, not a promise that shortage requests can be fulfilled. There are no time shifts, split requests, actual serial inventory, transport, location, booking or maintenance constraints. Add adequate turnaround for your own process. Holds are excluded from allocation but retained in all handoffs.

The dedicated-per-loan baseline sums every approved quantity without reuse; it is intentionally simple and clearly labeled. Compare peak units to that sum under identical reviewed mappings. These are calculated resource counts, not measured cost/time savings. Capacity shortage, quantity conservation and per-unit non-overlap are checked deterministically.

## Privacy, first download and offline scope

No API key, provider account, backend, remote inference, analytics or content uploads. Only static file GET downloads occur. User source/reviews stay in React memory until explicitly downloaded or copied. Imports are inert data and cannot acquire tool authority. All committed examples and exported tests are synthetic.

First load: approximately **50 MB** total, including ~23 MB model/tokenizer files from `huggingface.co` and Hugging Face delivery hosts under `*.hf.co`, plus ~27 MB same-origin WASM. Download needs internet and is explicitly user-initiated. Model file progress and batch progress are displayed; cancel terminates the worker. Network, model, malformed output, worker and 180-second timeout errors produce no fake results. Retry starts a fresh worker, guarded by run IDs so stale/cancelled responses cannot replace current results.

Runtime JS is bundled locally. Reuses the collection's byte-identical immutable binary at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older app asset in combined deployment. Its SHA-256 and actual sizes are in `asset-audit.json`. The factory is app-local under `runtime/`. Worker, factory, binary and model files are cached via Cache API/Transformers.js. Tested offline scope is **fresh-worker real inference inside an already-open successfully cached page**, not offline reload/navigation or installation. Cache eviction/private browsing can require another download; clear browser site data to remove downloaded models/runtime.

Requires module workers, WebAssembly SIMD, Cache API for offline reuse and sufficient RAM. CPU WASM path does not need WebGPU. Desktop Chrome tested at desktop and 390/320px emulated widths. Physical mobile devices and other engines unverified; low-memory devices may fail. Actionable runtime/device errors, no hidden GPU requirement or fake fallback.

## Input/output and limits

JSON object: `title` (1–100 chars), `gear` (1–8 unique IDs with text, available 0–48, buffer 0–120 minutes), `requests` (1–12 unique IDs with text, start 0–10000, end 1–10000 greater than start, quantity 1–4). Descriptions 1–400 characters, IDs 1–40. Numeric values must be integers. Up to 20 descriptions / five four-text batches / 48 unit demands. Payload 50 KB UTF-8; imported audit/file 1 MB. Unsupported formats and duplicate/empty/bad/oversized data are rejected.

JSON includes originals, all rankings and reviews, every request, unit-demand slots, equipment counts and metrics. CSV is one row per source request including holds, quantities, times and numbered/extra units; JSON retains normalized slot details. CSV uses Papa Parse with formula-leading text neutralization including multiline notes. Markdown includes all equipment and all requests/holds. Review notes up to 500 chars. Output is never a remote action.

## Build/deploy and observed validation

`npm install`, `npm run predeploy`. Required per-app scripts are retained (`predeploy: npm run build`, `deploy: gh-pages -d dist`), but **publish only through the root combined deployment** so the collection is not replaced. Vite base `/daily-app2/20261109-21/`.

See [VALIDATION.md](VALIDATION.md) for actual real inference, known-answer results, independent artifact checks, defensive checks and public verification. Build success alone is not AI validation. No general accuracy, compatibility or real-world savings claim.
