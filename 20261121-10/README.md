# Span Meadow

A local-AI path-reopening worksheet for community space and event coordinators. Rough endpoint notes are often inconsistent: “wristband gate” and “ticket entrance” can mean the same place. Real neural semantic matching proposes known location IDs; mandatory human review precedes an exact minimum-estimated-work connectivity forest. No account changes, work orders, geocoding or actual route opening.

## Use

1. Choose **Festival paths** or **Archive corridors**, paste source JSON, or import source/audit `.json`.
2. Supply a location catalog, candidate undirected paths, estimated integer work minutes and mandatory flags. Use the visible example schema. Missing physical routes are never invented.
3. Read the download/device notice, then explicitly **Load AI & reconcile**. Model files download; your notes do not upload. File progress and four-text chunk counts appear; cancellation terminates the worker.
4. Inspect each original endpoint and cosine-ranked location evidence. Correct both endpoints, minutes and mandatory flag; approve, hold for verification or exclude. Cosine similarity is not confidence. Review every path before applying.
5. **Apply reviewed paths**. Mandatory approved edges are fixed; required cycles and approved self-links block output. Kruskal adds cheapest non-cycling approved edges. Components include isolated places; a disconnected forest is prominently incomplete. No backup-route, safety, terrain, access, walking-time or capacity assessment is supplied.
6. Compare with mandatory-first, source-order, cycle-avoiding selection on the exact same approved graph. Minutes and differences are computed from supplied estimates—not measured time savings, AI accuracy or elapsed time.
7. Export current **JSON**, complete **Audit CSV**, selected **Plan CSV**, or **Markdown**; copy the worksheet. All originals/holds/exclusions survive audit exports. Edits invalidate exports until reapplied; undo restores the previous review state but also requires reapplying. Source changes discard stale reviews. Audit import restores originals only and requires renewed inference/review.

## Real model and runtime

- [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Approximately 23 MB first model download (plus approximately 27 MB CPU runtime). Model host/CDN: Hugging Face and its download CDN; no API key or paid service.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), feature-extraction on **WASM CPU**, normalized mean pooling, 384-dimensional embeddings. Four texts per chunk; each text ≤300 characters. The actual tokenizer ceiling is 512 tokens; the feature-extraction pipeline does not enforce its nominal per-call `max_length:256` argument. Model `main` is unpinned; observed revision and hashes are recorded in `runtime-dependency-audit.json`.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating app paths. Worker source and its settings were inspected; dependency hashes independently recorded. App code/CSS are bundled locally. No server-only inference.
- AI materially chooses endpoint identities from semantic descriptions. Deterministic steps: finite normalized vector validation, cosine ranking, editable review schema, mandatory-cycle/self-link checks, exact minimum spanning forest, baseline, artifact generation. No hard-coded AI responses or fake deterministic inference fallback.

## Privacy, devices, cache and failures

No user-content requests, telemetry, credentials, optional remote provider or private fixtures. Sources/reviews live in memory until users download them. Imported text is data, not tool instructions. Successful production-browser network capture showed only external model-file GET downloads with no bodies; model requests start only after explicit loading. Public audit reports omit signed download query values.

Requires a secure context, module workers, WebAssembly SIMD, Cache API for cached operation, and several hundred MB free RAM. No WebGPU required; tested in desktop Chrome with GPU disabled. Physical phones, other engines and memory-constrained devices are unverified. First use needs internet. Cache API stores worker source, factory, binary and model assets. **Tested offline scope:** after a successful run, a fresh worker in the same already-open warmed page can run another actual inference with the entire browser context offline. Offline navigation/reload/app-shell startup is **not** promised. Eviction/private mode may require downloads. Cancel terminates worker; source and file-read/run IDs prevent stale results; 180-second timeout. Network, unsupported runtime, malformed model data, timeout and worker errors leave no fake result; fix device/network and explicitly retry.

## Formats and bounds

Source JSON: 1–60,000 characters. Import `.json` ≤2,000,000 bytes (audit envelope may exceed original-input bounds). Context 1–300 chars. `nodes`: 2–12 `{id,text}` entries; `paths`: 1–36 `{id,from,to,minutes,required}` entries. IDs unique within each list, start with a letter, then letters/digits/underscore/hyphen, ≤40 chars. Each description 1–300 chars. Minutes integer 1–100000; `required` boolean. All source paths retained; at most 84 texts / 21 model chunks.

Review decisions: pending, approve, hold, exclude. Notes ≤1000 chars with multiline support. Known location IDs and finite bounded minutes required. Every row must be reviewed; approved self-links and mandatory cycles block output. Parallel paths are allowed. The optimizer spans each approved connected component exactly and selects `locations − components` paths. Holds/exclusions do not contribute connectivity. There is no inferred physical path between components.

JSON `span-meadow/v1` includes originals, complete reviews/evidence, forest, baseline and estimated difference. Audit CSV includes all original and reviewed fields, notes, decisions, selected flags and neural evidence JSON. Plan CSV includes selected reviewed links and explicit connected/incomplete status. Markdown includes complete source review and components. CSV quoting preserves commas/newlines; formula-leading text is prefixed with apostrophe; genuine numeric minutes remain numeric. JSON is lossless for original strings; CSV sanitization is intentional.

## Development and deployment

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261121-10/`. Per-app gh-pages dependency and `predeploy: npm run build`, `deploy: gh-pages -d dist` retained, but **publish only through repository-root combined `npm run predeploy` / `npm run deploy`**, never per-app deploy.

The unchanged conservative 1 GB combined-site guard required extending existing deploy-only byte-identical Manifold WASM sharing to **Scene & Slot (`20261028-28`) → `20261028-24`**. Original app builds remain unmodified; compatibility JS URLs preserved, references query-versioned. Its real geometry worker, actual PNG and STL imports, exact preview/export fingerprint and valid closed-mesh exports are checked locally and publicly. No older app removed.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports/test sources. Two small synthetic workflows matched 18 known endpoint keys. A negated mixed-topic probe mapped the reception phrase to cold storage incorrectly: these fixtures do not establish general accuracy. Similar locations, vague text, multilingual shorthand and negation require independent human review. Minutes are user estimates, and the tree has no redundancy. Not navigation, accessibility, evacuation, construction or safety guidance. This utility proposes a reviewed worksheet only.
