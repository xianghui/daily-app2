# Bundle Bench

A service-scope and bundle-pricing desk for small repair workshops. Match rough customer repair notes to your own service menu with real local AI; verify each service/asset link, then calculate the cheapest **exact partition** of approved requested work. No extra services, cross-asset bundling or double-covered tasks. No bookings, repair authorization or external actions.

## Use

1. Load Cycle workshop or Studio turnaround, or edit/paste/import JSON with `name`, `currency`, `services`, `offers`, `notes` as illustrated in the UI. Prices are integer cents; `asset` strings determine exact work-order grouping. Use one note per requested service; split multi-service prose yourself.
2. Explicitly press **Load AI & reconcile notes**. Review every proposed service against source notes/menu descriptions and similarity evidence. Correct service/asset, add annotations, approve or hold. AI only retrieves the closest service; it cannot diagnose a repair or authorize work.
3. Apply the reviewed snapshot. Standalone pricing of the same unique approved services is the baseline. The deterministic subset dynamic program minimizes integer-cent cost using single services and eligible offers, partitioning every requested service exactly once per asset. Duplicate approved notes of the same service/asset remain in the audit but become one work task; inspect grouping carefully. Offers with extra work are excluded even if cheaper. No taxes, parts, quantities, capacity or currency conversion.
4. Download actual JSON, CSV, Markdown or copy Markdown. Any review edit invalidates exports until reapplied; undo is available. Holds stay in audits, excluded from work orders. JSON retains full original menu/offers/notes, proposals, candidates, review edits and plan; CSV audits every note with spreadsheet formula protection; Markdown includes work orders and every source note. JSON audit reimport restores original inputs only, never approvals.

## Real AI, sources and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX q8; [upstream](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Transformers.js 4.3.2 / ONNX Runtime Web. Normalized mean-pooled 384-dimensional embeddings; cosine ranking. Similarity is not confidence. No generated prices, diagnoses or fabricated answers. Negation, short ambiguous requests and unrelated prose can mislink; mandatory review/hold is essential.
- First explicit load requires internet: approximately 23 MB model/tokenizer from `huggingface.co` with `*.hf.co` download redirects plus 26,861,777-byte WASM from same-origin shared immutable collection asset `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Byte equality with installed runtime is checked; preserve this older asset. App JS, worker and WASM factory are bundled locally. No CDN scripts or fonts.
- User content is embedded inside a browser worker; it is never sent to a model service. Model files download in; text does not upload. No analytics, credentials, backend or optional remote provider. Imported text is data, not executable instructions. Only synthetic fixtures are included.
- Current desktop Chrome with module workers, Cache API and WebAssembly SIMD CPU; WebGPU is unnecessary. Other engines and physical phones untested. Responsive phone viewports tested, not phone inference performance. ~50 MB downloads are not a claim about peak RAM.
- Worker source, runtime factory and WASM binary use explicit Cache API; Transformers.js caches model assets. Offline inference including a fresh worker **inside an already-open successfully loaded page** is tested. Offline startup/reload/navigation is untested and not promised. Cache eviction/private mode/quota may force redownload. Content, edits and reviews are in-memory only; export before closing.

## Bounds and failure behavior

1–12 services, 0–24 offers, 1–24 notes; unique string IDs within each collection ≤30 chars; name/title ≤100, description/note ≤400, asset ≤60, review annotation ≤500. Offers reference 2–12 distinct known services. Prices integer 0–1,000,000,000 cents; one of USD/EUR/GBP/SGD/AUD/CAD. Original payload ≤40 KB; JSON/audit import ≤1 MB. Four texts per inference batch with 256-token context. 180-second loading/inference timeout. Empty/malformed/oversized inputs, unsupported formats and invalid references fail explicitly. Validated finite normalized vector count/dimension required. No fake or deterministic inference fallback. Download progress, batch progress, cancel and retry are visible. Run identities guard model callbacks, worker-source reads and file reads; cancellation terminates workers and prevents stale results. Unsupported WASM/worker/network errors are actionable.

## Development and publishing

React + Vite, base `/daily-app2/20261110-9/`; `npm install`, `npm run dev`, `npm run predeploy`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained, **but publish the collection from the root only**. Root predeploy assembles the gallery and apps; root deploy preserves the collection and shared WASM. See ../README.md.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable test reports. `node core-test.mjs`: 1,800 independent exhaustive offer-subset oracles plus exact coverage/hold guards. `python3 serve.py` serves production paths at port 6339, then `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `python3 artifact-test.py`, `python3 asset-test.py`. The successful browser inference checks use the real model; worker fault injection is confined to defensive checks. Tested fixture accuracy is small-sample observation, not universal accuracy or measured time saved.

## UNPUBLISHED DRAFT — hosting blocked

All three GitHub Pages builds passed, but deployments failed: two timeouts and one immediate cancellation. The public app is HTTP 404; public inference/worker verification could not run. Excluded from gallery and restored combined deploy. Do not count as complete. See publication-status.json and hosting-attempts.json; promote only after hosting recovery and public checks.
