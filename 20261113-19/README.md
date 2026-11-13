# Reliability Grove

A no-key, local-AI redundancy planning worksheet for small-service owners. Rough component notes are often differently named from a service dependency register. Real MiniLM semantic inference proposes required-stage identities; a human reviews identity, probability evidence and common observation horizon before deterministic budgeted parallel-unit planning.

## Workflow

1. Open a synthetic example, paste source JSON or import a `.json` source/audit under 2 MB. Set `project` (include mission horizon), whole-unit `budget`, required `policies` (id, label, description, extraCost, maxExtra) and `records` (id, note, successBp, owner).
2. Explicitly choose **Load AI & match stages**. Before download, the UI explains size, network, device and privacy requirements. Inspect progress; cancel terminates the worker. Retry needs no credentials.
3. Check every proposed stage against source and similarity-ranked profile descriptions. Correct identity and supplied success basis points; record evidence/horizon/independence. Approve or hold every note. Undo reverses review edits. Original input is never transformed.
4. Apply reviewed stages. Missing/duplicate approved stages or any holds block the complete plan, but all records remain exportable. Each stage must have exactly one evidence record. Remove duplicate source observations only by explicitly editing the original JSON and rerunning.
5. Compare one-unit-per-stage baseline with budgeted parallel units, costs, remaining budget and candidate count. Export current JSON/CSV/Markdown or copy the checklist. Review edits invalidate exports until reapplied. Audit reimport restores originals, not prior approvals.

## Real AI and runtime

- `Xenova/all-MiniLM-L6-v2`: <https://huggingface.co/Xenova/all-MiniLM-L6-v2>, Apache-2.0. Quantized q8 ONNX; Transformers.js **4.3.2**; ONNX Runtime Web WASM CPU. No generative model or remote inference.
- Approximately 23 MB model/tokenizer downloaded from Hugging Face/CDN, plus 26,861,777-byte same-origin WASM and a bundled factory. Model host's default revision is used, not a frozen model commit; future host changes can affect reproducibility.
- Mean pooling, normalized 384-dimensional embeddings, deterministic cosine ranking. Finite vector dimensions/norms/count are validated. Similarity is not confidence. All nearest matches require human approval; unrelated inputs still get a match.
- Worker and application code are local production assets. The byte-identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root deployment MUST preserve this earlier app. Factory bundled under this app's `runtime/`.

## Privacy, caching, supported devices

User content is processed only in the browser. Network downloads retrieve runtime/model files, never notes. No shared or optional provider credentials, external AI, server, analytics, account access or purchases. Imported instructions are data with no authority. Synthetic fixtures only. Review state is memory-only; export if you want to keep it.

Requires WebAssembly SIMD, module workers and several hundred MB available memory. Desktop Chrome headless CPU tested with GPU disabled. WebGPU is not needed. Other browsers and physical mobile devices are unverified. Responsive 320/390 px phone viewports were tested, not phone inference hardware.

Cache API holds model, runtime factory/binary and worker source. After an online run, **an already-open warmed page** was tested fully offline with a newly created worker and real inference. Offline app startup/reload is NOT supported or claimed. Cache eviction, storage denial or a new browser profile requires internet. Worker/model errors, unsupported workers, aborted downloads, timeout and malformed output produce actionable errors, not fake results. Cancellation and input changes terminate/invalidate older runs.

## Bounds

Source ≤40,000 characters; JSON import ≤2 MB (an audit envelope is unpacked then original source revalidated). 2–6 required profiles; 1–40 notes; note/description ≤300 characters; unique profile and note ids. Budget 0–1,000,000 whole cost units. Extra-unit cost 1–100,000, maximum extra units 0–3 per stage. Success basis points 0–10,000 inclusive. Model runs four texts per batch with 256-token truncation and a 180-second run timeout. Owner ≤150 and review note ≤1,000 characters. No PDF, CSV import or automatic probability extraction.

## Deterministic planning and limitations

For stage j, single-unit success p_j = successBp/10,000. With n_j identical independent active-parallel units, stage success = 1 − (1 − p_j)^n_j. All required stages are in series, so service success is their product. Enumerate all available extra-unit allocations within budget (at most 4^6 = 4,096), maximize service probability, and prefer lower cost on exact floating-point ties. Numerical near-ties may resolve differently; probabilities use double precision, not exact certification. The baseline has one unit per stage. Costs for existing units are sunk. All costs must share a currency/unit and horizon; no conversion or ongoing-budget model.

All p values MUST refer to a common mission horizon and same meaning of success. This is not a blend of availability, per-request success and annual survival. The model excludes common-cause/correlated failures, failover failure, repairs, load sharing, shared capacity and changing failure rates. Real duplicated links on one power source/conduit are not independent. A proposed extra unit does not establish failure-domain independence. Confirm evidence before procurement. Not engineering certification, measured uptime improvement, safety assurance, or a live infrastructure controller.

## Exports

- JSON: original source, every current review, blocker list or full plan with per-stage units/cost/probability, aggregate baseline/candidate/cost and candidate count.
- CSV: one row per original note including source, proposed/reviewed stage, original/reviewed probability, decision, owner, multiline evidence and plan data if complete. Formula-like text is apostrophe-escaped; numeric fields remain numeric.
- Markdown: source-linked review tasks and complete review audit. No orders placed.

Actual browser downloads were independently parsed in Python; multiline quoted/formula-like fields and all 40 rows survived. See [VALIDATION.md](VALIDATION.md).

## Build and publish

`npm install` then `npm run dev`. `npm run predeploy` builds with Vite base `/daily-app2/20261113-19/`. Required per-app `deploy: gh-pages -d dist` exists, but DO NOT use it to publish this collection. Use root `npm run predeploy` and root `npm run deploy` to assemble/publish the combined site.

## Reproduce checks

`python3 oracle-test.py && node core-test.mjs`; `python3 serve.py` then `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`, `python3 artifact-test.py`, `python3 asset-audit.py`. Browser scripts use the installed workspace Playwright and desktop Chrome. Set `TEST_URL` and `REPORT` for combined/public suites. Network/model downloads required initially. Fault injection is confined to defensive tests; successful inference checks use the real model.
