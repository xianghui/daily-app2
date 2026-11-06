# Redirect Desk

A website-migration utility for content editors: map old pages to a replacement sitemap by **meaning**, not URL spelling. Review every candidate before handing the plan to an engineer. Nothing changes on a web server.

## Workflow and formats

Paste or import two UTF-8 `.txt` sitemaps, one `/path | descriptive title or summary` per line. Use 1–24 unique paths per side, 1–400 characters per description, 18,000 characters per text area, 80 KB per imported file. Only same-site absolute paths are accepted; queries, fragments, whitespace, traversal and protocol-relative paths are rejected. Paths are identifiers, not links the app fetches. English descriptions recommended.

Choose a minimum cosine similarity (default 0.35), explicitly load AI, inspect ranked candidates and source descriptions, edit destinations/notes or reject matches. Every original row remains represented, including unresolved mappings. Multiple sources can share a destination. Identical source/destination paths are deterministic **keep** decisions. Undo restores up to 30 prior review edits; original inputs remain untouched. Changing inputs/threshold cancels running work and resets review. Apply the reviewed snapshot, then export JSON, CSV or copy JSON. Further edits invalidate the snapshot until re-applied. Exports contain the currently reviewed choices, original descriptions, notes, initial AI suggestions and reasons. CSV uses quoted fields and escaped quotes; import untrusted text columns as text in spreadsheet software. JSON schema identifier: `redirect-desk/v1`.

## Real AI, no key

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, derived from sentence-transformers/all-MiniLM-L6-v2.
- Runtime: locally bundled Transformers.js 4.3.2 and ONNX Runtime Web. Single-thread CPU/WASM; WebGPU is not required or used. No optional provider or credentials.
- Neural inference encodes descriptions into normalized 384-dimensional vectors in batches of four, with a 256-token bound. Character limits reduce, but do not universally prevent, truncation.
- Subsequent cosine ranking, threshold gating, identical-path keep decisions, schema checks, destination allowlisting and exports are deterministic. Vector count, dimensions, finite values and normalization are checked before any result is accepted.
- Computed exact-path baseline and current assigned/unresolved counts are displayed. These are operational counts, not measured accuracy, percentages or estimated time savings.

## Device, downloads, privacy and offline

Initial internet required: approximately 23 MB quantized model plus 26.9 MB uncompressed WASM and smaller runtime/tokenizer files. Model downloads use Hugging Face and its CDN; JavaScript, worker, WASM and factory module are hosted locally with the app. Loading status exposes file progress and inference batch counts. Cancel terminates the worker. Runs have a 180-second deadline; error messages allow an explicit retry. No canned or deterministic fallback is substituted for inference failures.

Modern browser with JavaScript, module workers, WebAssembly SIMD and adequate free memory. Desktop recommended; no universal phone performance claim. Tested in desktop Chrome with desktop and phone-size viewports, not physical phones, Safari or Firefox.

User content stays in browser memory, never sent off-device by the default AI path. Only GET/HEAD model/runtime requests occur. No analytics, backend, API keys, content uploads, content-driven tool invocation or external actions. Treat imported descriptions as untrusted data, not instructions. Inputs disappear on reload. Browser caches retain completed model/runtime downloads when storage allows; clear site data to remove them.

Offline inference is supported on an **already-loaded page after a successful cached run**, including a new worker. Online reload can reuse cached model files without model-host requests. Offline navigation/reopening is **not** promised; no app-shell service worker. Partial downloads and private-mode/storage restrictions can prevent offline use. Runtime assets are bundled; factory module text has a Cache API bridge for worker reuse.

## Limitations

Semantic similarity does not establish that a redirect is factually correct or SEO-safe. Short titles, negation, specialized terms, changed intent or missing target pages can produce poor matches. There is no AI-generated text, factual verification, crawler or automatic server configuration. Human review remains required. Exact paths override semantic ranking only to preserve unchanged URLs. Reasons always describe the **initial** AI suggestion, including after manual edits.

## Develop, validate, deploy

`npm install`, `npm run dev`, `npm run predeploy`. Required individual `deploy` script exists but collection publishing must use the root predeploy/deploy workflow. Vite base `/daily-app2/20261106-16/`.

`node core-test.mjs` checks schemas, constraints and parsing. `python3 serve-test.py` serves production dist on port 6166; `node browser-test.cjs` runs the real-model production-browser suite (installed workspace Playwright, Chrome channel). `TEST_URL`/`REPORT` redirect the same suite to the public deployment. See VALIDATION.md and JSON reports for actual observed outcomes, not universal accuracy claims.
