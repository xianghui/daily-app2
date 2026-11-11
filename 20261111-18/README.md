# Batch Breakwater

A local AI demand-to-production-batch worksheet for small workshop coordinators. Distinct from setup sequencing, cutting plans and carton selection: it reconciles informal demand descriptions to supplied product identities, then solves additive, repeatable whole-batch quantity/cost combinations.

## Workflow
1. Load Bakery orders or Print workshop, paste JSON, or import a `.json` file. All fixtures are synthetic.
2. Supply 2–6 product profiles with 1–4 batch modes (id, whole units yielded and all-in integer cents per batch), 1–12 request rows with explicit quantities and an allowed extra-unit limit.
3. Explicitly click **Load AI & match products**. Downloads begin only then. Review ranked alternatives and source snippets; edit product/count/note and approve or hold every request. Verify batch yields/costs in input before inference. Undo reverses a review edit.
4. Apply the reviewed batch plan. Any hold blocks ALL production plans, preserving unresolved demand rather than silently making too little. Each product is optimized independently. Infeasibility is visible; partial plans are not a complete release.
5. Download reviewed JSON, CSV or Markdown or copy the worksheet. Review/settings edits invalidate exports. Reimporting the audit restores originals only and requires fresh inference and renewed review.

## Real AI / runtime
[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, `@huggingface/transformers` 4.3.2. Learned normalized mean-pooled 384-dimensional embeddings match descriptions using cosine similarity. Similarity is NOT confidence or evidence of product identity. AI materially drives the initial identity assignments, not a keyword heuristic. It does not extract quantities, invent recipes, forecast demand or certify production safety. There is no deterministic fake-AI fallback.

Default path requires no key or server. First load needs internet: approximately 23 MB model/tokenizer downloads from huggingface.co/hf.co and redirects/CDN, plus 26,861,777 bytes of collection-hosted WASM. Runtime JS, worker and WASM factory are local production assets. The exact immutable shared WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must be preserved by combined deployment. No content is uploaded; browser request logs verify GET-only asset downloads. No optional remote provider, credentials, analytics, account integration or production-control actions exist.

Current desktop Chrome tested using WASM CPU (no WebGPU necessary), module workers, WebAssembly SIMD and Cache API; several hundred MB free memory recommended. Physical phones and other browsers are unverified. Inference batches contain at most four texts, each limited to 400 characters and 256 tokens. Worker count/dimensions/finite normalized vectors are validated before applying recommendations. A 180-second timeout, download progress, cancellation and retry are provided. Worker termination plus run identities discard stale model/file downloads and responses. Network/runtime errors remain errors with no suggestions.

After a successful online run, Cache API stores model, worker, WASM factory and binary. A fresh worker can run offline in an **already-open warmed page**, as tested. Offline reload/navigation/app-shell startup is NOT promised. Cache eviction or private browsing may require another download. Cancel destroys the worker but not caches.

## Deterministic optimization and limits
Schema validation, reviewed demand aggregation, dynamic programming and exports are deterministic. For each product with demand D, DP enumerates reachable produced quantities through D + allowed extras. It minimizes total supplied batch cost, breaking ties by fewer extras then fewer batches. Batch modes may repeat without limit. Mode order resolves otherwise identical ties. Costs are nonnegative, additive cents; no ingredient, machine, time, stock, capacity, shelf-life or inter-product constraints are modeled. Costs are supplied estimates, not actual spending. Recipe compatibility/safety is not checked.

Baseline repeats the first smallest-yield mode until demand is covered; it is shown as infeasible if it violates the SAME extra-unit limit. No cost difference is claimed when baseline is infeasible. AI/review and first-product/review agreement are computed from approved rows; neither is independent accuracy. No invented time savings or confidence percentages.

Request quantities 1–100; 12 rows maximum. Batch yield 1–100, cost 0–1,000,000 integer cents; extra units per product 0–50. IDs ≤40 chars, title ≤80, description/source/note ≤400. Original JSON ≤18,000 characters; imported JSON/audit ≤1 MB. Empty/malformed/oversized/unsupported files and invalid review values fail visibly. CSV/PDF import is unsupported.

## Artifacts and privacy
JSON is the lossless audit envelope (originalInput, records, reviewed settings, product plans and metrics). CSV includes EVERY original request, review, product state and product plan; **product totals repeat per request, so do not sum repeated totals**. Formula-like text is apostrophe-prefixed with multiline-safe leading-character checks. Markdown contains all product plans, held/infeasible states and every reviewed request. No persistent user-data storage beyond downloaded artifacts; content stays in React/worker memory. Model caches contain public assets only. Clear the input/reload to discard working data. Imported instructions are inert text.

## Validation / development
`npm install`, `npm run dev`; `npm run predeploy` builds production. Per-app deploy scripts are retained for contract compliance, but publication MUST use the root combined workflow, never individual deployment. See VALIDATION.md and machine-readable reports for observed checks. `node core-test.mjs` checks independent exhaustive integer oracles; browser suites use an installed local Playwright and real Chrome. Successful AI tests always use the real model, fault injection only tests error handling. The local production server mounts the correct Pages base and immutable shared runtime.

English-focused embeddings confuse negation/unrelated text and overlapping identities. Mandatory review/holds are essential. Actual factories, physical phones, non-Chrome devices and app-shell offline navigation have not been validated. This is a planning worksheet, not an instruction to operate machinery or make food.
