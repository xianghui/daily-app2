# Frame Harbor

A local-AI crop-handoff preflight desk for content producers. Rough destination notes are often inconsistent (“full-screen mobile cover”, “shop tile”, “web masthead”). Real local MiniLM embeds those notes and supplied preset descriptions to propose a destination; it does not inspect pixels. Review every preset, source dimension and manually identified subject box. Deterministic geometry then exports feasible crop/resize recipes, never silently cutting the supplied subject or upscaling.

## Workflow

1. Use either synthetic example, paste source JSON, or import `.json` (source or complete audit).
2. Set destination descriptions and target pixel dimensions in `profiles`; enter upright source dimensions, context notes and subject boxes in `records`.
3. Explicitly select **Load AI & reconcile**. Inspect model progress; cancel terminates the worker. Failures show actionable errors, not sample classifications.
4. Inspect cosine evidence (similarity, **not confidence**), correct the preset and geometry, add multiline notes, and approve or hold every record. Geometry/preset edits reset approval. Undo restores the prior review edit.
5. Apply reviewed scenario. A purple crop and amber subject diagram shows each feasible recipe. Compare exact center-crop box failures with the shifted planner and inspect blocked cases.
6. Download current complete JSON/CSV/Markdown, approved-feasible release CSV, or copy the worksheet. Editing invalidates applied exports. Reimport restores **originals only**, requiring fresh inference and reviews. No files, accounts or publishing services change.

## Input, output, and exact rules

Source JSON is `{title, profiles:[{id,description,width,height}], records:[{id,note,width,height,box:{x,y,width,height}}]}`. All coordinates are integer pixels relative to top-left of an already-upright source; `width/height` on profiles define the target. Rectangles use half-open bounds `[x,x+width)` and `[y,y+height)`. Enter a single bounding box containing all essential subjects. Images are neither imported nor analyzed.

2–8 profiles, 1–24 records, source ≤60,000 characters, import ≤16 MB. Unique bounded IDs, description/note ≤200 characters, reviewer notes ≤2000. Source dimensions 1–20,000; target dimensions 1–8,000. Subject boxes must be positive integer rectangles wholly inside sources. Invalid source data blocks inference; invalid review data blocks application. At most 32 model texts, chunks of four; finite unit-length 384-dimensional outputs are validated. Shared tokenizer has a 512-token context; 200-character inputs keep requests small.

The deterministic planner reduces target ratio to `a:b`, chooses maximum `k=min(floor(W/a),floor(H/b))` and crop `ak × bk`. It refuses targets larger than that crop. Feasible origin intervals are intersected with the subject containment bounds; the centered integer origin is clamped into those intervals. This maximizes exact-ratio integer crop area and minimizes Manhattan shift from the centered crop. A subject too large for the maximum crop cannot fit a smaller exact-ratio crop and is blocked. Resize dimensions retain the preset ratio exactly. No pixel processing or color/compression/orientation metadata handling occurs.

Complete `frame-harbor/v1` JSON retains originals, reviews, evidence and plans; audit CSV contains all records and nested geometry; Markdown preserves those records as explicit JSON lines. Release CSV columns: `id,crop_x,crop_y,crop_width,crop_height,resize_width,resize_height`, approved feasible rows only. Formula-leading CSV text is prefixed with an apostrophe (including multiline fields); JSON is the lossless text format. Use a media editor to apply recipes and verify actual composition. The baseline uses the same reviewed preset, maximum exact-ratio crop and no upscale rule, but does not move its center to retain subjects. Upscale blocks and holds are excluded from that comparison; box-impossible cases are counted as withheld, never successful crops. Metrics are computed counts, not accuracy, aesthetics or productivity claims.

## Real AI, downloads, and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0. Mean-pooled normalized feature embeddings; cosine-ranked preset retrieval. Not generative vision or an LLM command executor.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU single-thread mode. No WebGPU requirement, server, credentials, analytics, remote provider or fake fallback.
- Initial download: approximately **23 MB model plus 27 MB WASM**, plus JS/tokenizer/config files. Internet required initially; weights/config download from Hugging Face/CDN. Only notes and descriptions enter the local model. User content never enters download requests.
- Reuses immutable same-origin `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` and its runtime factory; WASM under `20261107-2`. Preserve these collection assets. Exact paths/hashes in `runtime-dependency-audit.json`; no source asset changes.
- Worker source, factory and WASM are explicitly cached via Cache API; Transformers.js caches model artifacts. After a complete online run, **fresh-worker inference in an already-open warmed page** is tested offline. Offline reload/cold navigation is **not** supported or promised. Cache eviction/private modes may require internet.
- HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM needed. Desktop Chrome CPU with GPU disabled tested; physical phones, other engines and low-memory devices untested. 180-second timeout; cancel, input change and file-read/run tokens prevent stale results. All text is data, not authority or credential requests.

## Limitations

Nearest embedding similarity can misunderstand negation, unknown destinations or subtle editorial requirements. Human review is mandatory. This does not detect subject bounds or certify aesthetic composition, image rights, resolution sharpness, multiple-subject spacing or text safe areas. No image files are altered. Supplied bounds and upright dimensions must be verified in your editor. Exact integer ratios can discard more edge pixels than a floating-point crop. No upscaling means some useful low-resolution drafts are intentionally withheld.

## Development and observed checks

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app deploy script exists but **publish the collection only through root predeploy/deploy**, never this app’s deploy script.

See [VALIDATION.md](VALIDATION.md) for observed real inference, independently parsed artifacts, exhaustive geometry oracles, defensive checks, production/public bundle checks and untested scope. Fixture outcomes do not establish general AI accuracy.
