# Pack Relay

A local-AI dispatch workbench for a small warehouse dispatcher: turn a CSV manifest of free-text handling needs into reviewed, capacity-bounded picking/dispatch waves and a complete handoff checklist. This is not geographic route planning and never sends shipments.

## Workflow

1. Paste/import `id,instructions,units` CSV (1–24 orders), or use either synthetic fixture.
2. Set profiles in `id,procedure,description` CSV (1–6) and a shared additive wave capacity (integer 1–100). Each order must fit without splitting. Profiles describe meaning, not just codes.
3. Explicitly select **Load AI & plan waves**. Download/progress status and cancellation are visible. Empty, malformed, oversized, duplicate-ID, missing-field and noninteger inputs are rejected.
4. Inspect original instructions, all profile descriptions and cosine scores. Override any profile or choose HOLD; annotate and check every reviewed record. Reject-all holds every order; Undo restores previous edits (60 snapshots).
5. Apply the reviewed plan. JSON contains original input/profile/capacity data, all orders including holds, AI scores, reviewed decisions, wave allocations and computed metrics. CSV is the complete actionable order/wave checklist; Copy JSON is also available. Every edit invalidates the applied snapshot until reapplied.

## Real AI, deterministic logic and limitations

The default (and only) AI path uses [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX via `@huggingface/transformers` 4.3.2 / ONNX Runtime Web WASM CPU. A neural sentence encoder produces normalized mean-pooled 384-dimensional embeddings for instructions and profile descriptions in batches of four; cosine nearest-profile matching proposes handling. No model-generated instructions execute. No hard-coded responses or heuristic fallback impersonate inference. Output count, dimensions, finiteness and normalization are validated before suggestions exist.

Best-fit decreasing sorts orders by units and packs only the same reviewed profile together within capacity; this is a deterministic heuristic, not an optimal solver. The source-order baseline uses the **same current reviewed decisions** but opens a new wave whenever the procedure changes or the current wave is full. Both wave counts are calculated from actual rows; neither is a measured time/accuracy improvement. HOLD rows remain in the ledger but are not packed. Every unit and source ID is preserved; duplicate allocations and overcapacity waves are rejected at apply.

One profile per order is a deliberate limit. Mixed requirements (e.g. both frozen and fragile), negation, specialist jargon and ambiguous instructions can be wrong. Create combined profiles or hold such cases for human assessment. Similarity is not confidence. This app does not certify safety, hazardous goods, food handling or regulatory compliance. It does not model vehicles, dates, addresses, geography or delivery windows.

## Runtime, downloads, devices and privacy

- First use requires internet: approximately 23 MB quantized model plus 27 MB CPU WASM, ~0.55 MB worker, local runtime factory and model tokenizer/config files. Public weights download from Hugging Face / its CDN; code, factory and WASM are same-origin collection assets. Weights use the model host's current default revision; future upstream changes may change suggestions.
- The identical WASM binary is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes; SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). The collection publishing workflow must retain that existing app.
- No API key, provider integration, server inference, telemetry or content upload. Inputs live only in React state/worker memory. Cache API stores model/runtime assets, not documents. User-driven exports write local files. All fixtures are synthetic.
- Web Workers and WASM required; WebGPU is not used or needed. Current desktop Chrome/Edge recommended; tested in desktop Chrome. Firefox, Safari and physical phones are not performance-certified. English, ≤300 chars per instruction/description, ≤100 per other CSV field, 256 tokens per embedding, ≤16 KB UTF-8 per CSV, max 30 descriptions. Notes ≤500 chars. Browser memory/storage constraints still apply.
- Cache API explicitly retains worker, factory and WASM; Transformers.js caches model assets. After a successful online run, fresh-worker inference **in the already-open page** works fully offline. Offline navigation or reload is not promised: no service worker/app-shell cache. Eviction/private mode may require redownloading; clear browser site data to remove caches. Model files are not checked into Git.
- Cancel terminates the worker; partially cached downloads can remain. Input changes invalidate runs. Job IDs guard late worker/source-download responses; separate file-read tokens guard delayed imports. 180-second timeout and network/runtime/schema errors surface actionable retry messages without substitute output.

## Formats and use

Use quoted CSV fields for commas/newlines and exact displayed headers. Units are positive integer counts in a single consistent additive measure. CSV string fields starting with formula characters are apostrophe-prefixed for spreadsheet safety, including multiline values; JSON preserves exact source text. Units remain numeric. Exports derive from the latest reviewed/applied state, not examples. To restore from JSON, its `original.orders` / `original.profiles` arrays can be converted to the displayed CSV schemas; direct JSON reimport is not offered.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app deploy scripts remain in package.json, but do **not** deploy this app alone: use root `npm run predeploy` then root `npm run deploy` to preserve the whole gallery. Vite base: `/daily-app2/20261107-16/`.

See [VALIDATION.md](VALIDATION.md) and machine-readable browser/core/asset/deployment reports for observed outcomes and tested scope. `browser-test.cjs` runs the actual production bundle with real inference; fault injection is used only for failure cases. It expects the workspace Playwright install and Chrome. `python3 serve-test.py` serves local production paths on 6196, including the existing shared WASM. `node core-check.mjs` parses downloaded artifacts and verifies the ledger/packing constraints. Third-party licenses are in `licenses/` and `THIRD_PARTY_NOTICES.md`.
