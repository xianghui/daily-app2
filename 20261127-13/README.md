# Scanfolio Desk

A local-AI intake preflight for archive digitization coordinators. Paste/import synthetic or your own job JSON, supply approved capture standards and scanner/storage limits, explicitly load AI, review every proposed standard and physical assumption, apply a checked worksheet and export it. This is not an image scanner or a generic chatbot.

## What real AI does

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2) (Apache-2.0), quantized q8, produces normalized mean-pooled 384-dimensional neural embeddings through Transformers.js 4.3.2 and ONNX Runtime Web CPU/WASM. Cosine retrieval matches informal job notes to supplied standard descriptions, proposing minDpi, featurePixels, bits and channels. These are real inference results, not hard-coded example responses. Review candidates and source snippets, edit assumptions, change the standard, approve or hold; undo is available. Standard changes reset approval. No confidence percentages.

AI cannot inspect scans, measure marks, verify optical scanner resolution, guarantee legibility or certify archival policy. Unrelated notes always have a nearest standard and can be wrong; instructions in notes confer no authority. Synthetic profiles are illustrative, not institutional standards. Use short English descriptions and inspect actual test scans.

## Deterministic workflow

Set scanner maxDpi, maxMP per page and budgetMiB for the entire batch in the source JSON. Minimum requested resolution is the smallest 25-dpi step satisfying both the reviewed standard floor and featurePixels × 25.4 / feature-mm. Width/height pixel counts round up. Packed row bytes round up widthPx × channels × bits / 8; total = rowBytes × heightPx × pages. A fixed-300-dpi shortcut with identical reviewed encoding supplies a transparent comparison: failed checks and raw bytes, not measured accuracy/time savings. Held jobs have unknown capture size and are excluded from byte sums, explicitly labeled. DPI and pixel failures remain visible; any hold/failure/over-budget state blocks operational manifest export. Audit exports retain every source and reviewed job.

Raw byte estimates omit TIFF/container headers, row alignment, compression, metadata, filesystem allocation and backups. They are not full disk provisioning estimates. Whole-page capture, no cropping or image uploads. DPI means requested pixels per inch, not printer dots. Real hardware may not support a proposed setting or true optical resolution.

## Formats and bounds

Source JSON: `title`, `maxDpi` (25–2400, multiples of 25), `maxMP` (1–200), `budgetMiB` (1–1,000,000), `profiles` (2–8), `records` (1–12). Profile fields: unique id, description ≤200 chars, minDpi (25–2400, step 25), featurePixels (integer 1–30), bits (1/8/16), channels (1/3; bitonal only one channel). Record fields: unique id, note ≤200 chars, width/height (10–2000 mm), feature (0.05–20 mm), pages (integer 1–10,000). Source limit 30,000 chars. Runtime embeds four texts per batch; 20 texts maximum, five chunks; actual tokenizer caps at its 512-token model limit (the feature pipeline's max_length argument does not lower that). Reviewer notes ≤500 chars, multiline allowed. Forbidden control characters and lone surrogates are rejected in source text.

Exports reflect only the current applied snapshot; edits invalidate all exports. Complete JSON (`scanfolio-v1`) preserves originals, review, evidence, calculations and summary. Audit CSV retains all jobs and is formula-safe for leading =,+,-,@,tab/CR string cells. Markdown is a full operator handoff. Field CSV is the complete approved feasible scan manifest; it is blocked unless every job and batch budget passes. JSON audit import (≤8 MB) restores original source only, deliberately requiring fresh AI and review. CSV imports and image files are not supported. JSON/Markdown preserve exact text; spreadsheet CSV deliberately prefixes formula-like strings with an apostrophe. Clipboard failure offers Markdown download instead.

## Runtime, network and privacy

First explicit load needs roughly 50 MB: ~23 MB model/tokenizer from huggingface.co and its hf.co/CDN hosts, ~27 MB same-origin WASM/runtime. No model requests before the load button. Default path sends no user content: downloads are GET-only without note data in URLs/bodies. No analytics, server API, provider keys, credentials, paid services or optional remote inference. Nothing controls scanners, changes files or publishes user data.

Current desktop Chrome/Edge with WebAssembly SIMD, module workers and Cache API recommended; WebGPU is not used. Tests run real Chrome with GPU disabled. Physical phones, other engines, constrained-memory devices and universal model accuracy are unverified. Download/progress statuses and a cancel control are visible. Cancellation terminates workers and aborts worker-source fetches; run identities reject late callbacks, input edits and async file-read races. Timeout is 180 seconds. Runtime, malformed-vector, network and unsupported-feature failures are explicit; retry never fabricates AI.

App JS/CSS is bundled locally. To avoid duplicate runtime bytes in the collection, immutable same-origin dependencies are shared:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older builds/paths. See runtime-provenance.json for verified hashes. Worker source, factory and WASM are Cache-API cached; Transformers.js caches model assets. Real fresh-worker inference was tested offline in an **already-open warmed production page**. Offline navigation, cold startup/reload and survival of browser cache eviction are not promised. Internet may be needed again after eviction. User documents/notes are not persisted by the app; browser exports are explicit user actions.

## Build and publication

React + Vite; base `/daily-app2/20261127-13/`. `npm install`, `npm run predeploy`; per-app deploy script/dependency retained as required, but **publish only from the root combined-site workflow**. Use root `npm run predeploy`, then root `npm run deploy`; verify matching Pages commit and public inference/assets. Never publish this app alone over the collection.

## Validation

See VALIDATION.md and machine-readable reports. Browser scripts exercise real inference, review/edit/undo, exports, maximum batch/reimport, cache/offline, network failures, malformed messages, unsupported runtime, cancellation/retry/stale results, invalid inputs and responsive layouts. `oracle-test.py` independently replays sampling and row packing using 50-digit Decimal, not the app's inverse. `artifact-test.py` uses Python's independent JSON/CSV parsers. Model quality fixtures are tiny synthetic checks, not representative accuracy estimates.
