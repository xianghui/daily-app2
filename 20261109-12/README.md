# Round Circuit

Facilities coordinators paste/import a small checkpoint map and free-text inspection batch, explicitly load local AI, verify each semantic checkpoint suggestion, hold uncertain checks, apply a closed walking round, then download JSON/CSV/Markdown or copy the checklist. No external actions or location tracking.

## Real AI and privacy

`Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2 / ONNX Runtime Web, quantized q8 WASM CPU, mean-pooled normalized 384-dimensional embeddings. Cosine ranks supplied checkpoint definitions against inspection text; this is semantic retrieval, not a physical-location guarantee, confidence estimate, instruction following or generative planning. Human review is required. No credentials or remote provider integrations.

First explicit run downloads approximately 23 MB weights/tokenizer/configuration from Hugging Face/CDN and 27 MB same-origin WASM plus bundled JS. User content stays on-device and is not put in requests, URLs, logs or persistent input storage. Synthetic fixtures only. Imported text is data, never executable authority. Runtime and worker assets are bundled; the byte-identical WASM is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (preserve that collection path). See bundle-audit.json for exact hash/size.

Current module-worker browser with WebAssembly SIMD required; WebGPU is not used. Desktop Chrome tested; physical phones and other engines unverified. Cache API stores worker/runtime/model assets. A fresh worker inside an already-open cached page was tested with all network disabled. Offline reload/navigation is NOT promised. Cache eviction or denied storage requires internet again; clear site storage to remove downloads. Worker termination cancels loading/inference, and monotonically increasing run IDs reject stale responses. A 180-second timeout and visible errors allow retry; no fake results.

## Input / review / output

JSON `{name,depot,locations:[{id,description}],edges:[[from,to,metres]],records:[{id,text}]}`. Edges are undirected positive integer metres. 2–8 checkpoints, 1–28 unique edges, connected graph, 1–24 checks, unique bounded IDs, descriptions ≤300 characters, checks ≤500, payload ≤50 KB. File imports accept JSON under 1 MB before payload validation. Batches contain four texts and context is truncated at 256 tokens. English intended.

Select a checkpoint and approve or hold every check. Changing checkpoint resets its approval. Review notes are editable; undo preserves earlier review states. Apply computes the route only after every decision. Every edit invalidates prior exports. JSON contains all originals, ranking evidence, reviewed records, routes and metrics; reimport restores originals and requires fresh inference/review. CSV retains all checks including holds, guarding formula-leading text including multiline notes. Markdown lists checks in service-stop order plus held follow-ups. Clipboard equals current Markdown export.

## Deterministic route / limitations

Floyd–Warshall finds shortest paths through supplied corridors. Exhaustive permutation search finds a shortest closed service-stop order (at most seven non-depot stops), starting/ending at depot. Duplicate-location checks are serviced together. Corridor transit can pass through another checkpoint before its service stop; the expanded walk includes these intermediate nodes. Depot checks are serviced at departure. Held checks remain in every audit but are excluded from walking. All held means zero-distance depot-only plan.

Baseline uses first appearance of approved locations in input order on the exact same graph and returns to depot. Displayed saved metres are computed planning differences, not measured time savings or accuracy. Map correctness is entirely user-supplied. No live obstacles, stairs/accessibility constraints, one-way corridors, time windows, worker allocation or emergency navigation. Semantic similarity fails on negation/ambiguity: the observed negative cafe instruction still ranked cafe first. Human verification is essential.

## Build / verification

`npm install`, `npm run predeploy`; base `/daily-app2/20261109-12/`. Required per-app deploy script remains, but publish ONLY via root combined `npm run predeploy` / `npm run deploy` to avoid replacing the collection.

See VALIDATION.md and JSON reports for actual outcomes. `python3 serve-test.py` serves production bundle at port 6312. `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`, `node audit.mjs` reproduce checks (browser scripts use the installed workspace Playwright/Chrome). Fault injections test defensive paths only; all successful functional fixture runs use real model inference.
