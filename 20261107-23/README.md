# Anchor Desk

A local-first internal-link planning workbench for editors. Import a small content inventory and exact anchor phrases, match phrases to relevant destination descriptions using **real browser inference**, review changes and export an editorial handoff. No crawling, publishing, network link checking or account changes.

## Workflow

1. Paste JSON or choose one of the two synthetic inventories. `anchors` contain `id`, `source`, `anchor`, `context`; `pages` contain `id`, `url`, `title`, `description`.
2. Set a 1–4 link budget per source URL and minimum suggestion cosine (0–1). Click **Load AI & suggest links** to explicitly download/load the model and run inference.
3. Inspect highlighted exact source phrases and proposed page descriptions. Change a destination, leave an anchor unlinked, add editorial notes, reject all, restore the AI plan or undo an edit. Manual links below the minimum similarity are allowed and labeled; self-links, duplicate destinations per source and budget overruns block application.
4. Confirm review and **Apply reviewed links**. The applied in-app preview powers Markdown download/copy and lossless JSON download. Every review edit removes the applied snapshot and requires review/application again.
5. Markdown contains each source context with its reviewed anchor link, or unchanged prose for an unlinked record. JSON retains every exact original anchor and page, all scores, notes, suggestions, baseline and current decisions. Importing an exported JSON **reloads the originals for a fresh inference run**, not the saved review decisions; keep the JSON audit for those decisions.

Example shape:

```json
{"anchors":[{"id":"a1","source":"https://example.org/intro","anchor":"feed the earth","context":"To feed the earth, compost vegetable scraps."}],"pages":[{"id":"compost","url":"https://example.org/compost","title":"Compost guide","description":"Turn food waste into nutrient-rich soil."}]}
```

## Actual AI and deterministic steps

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized `q8`, English-focused 384-dimensional sentence embeddings. Its Transformer inference, not regex or canned responses, drives meaning-based destination relevance.
- Runtime: `@huggingface/transformers` 4.3.2 / ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0, **WASM CPU**, one thread. Normalized mean pooling, up to four texts per batch and 256 tokens per text. WebGPU is not needed and no alternative fake inference exists.
- Inputs to inference: each anchor plus context and each page title plus description. A semantic cosine matrix is validated for record count, finite dimensions and normalized vectors.
- Deterministic greedy allocation tries highest-cosine pairs first, subject to user threshold, per-source budget, no self-links and no repeated destination per source. This is **not a globally optimal matching guarantee**. URL comparison canonicalizes trailing slashes; genuinely different URLs are not resolved through redirects.
- Baseline uses Jaccard overlap of anchor tokens with page title/description tokens, under the same budgets/guards. Both plans' cosine sums and link counts are computed from actual model output. Sums favor more links and are **not confidence, accuracy, SEO lift, measured time savings or proof of factual suitability**.
- Source anchors are treated only as data. The embedding model cannot invoke tools or act on imported instructions.

## Privacy, hosting and downloads

Static GitHub Pages app; no backend, mandatory service, API key or optional remote provider. User text and inventory URLs never leave the browser and inventory URLs are never fetched. Normal app requests go to GitHub Pages; model files download from `huggingface.co` and its Hugging Face/CDN redirect hosts only after the explicit load action. Browser model/file caches do not contain imported user text; this app does not persist input or editor decisions.

First run requires internet: approximately **23 MB quantized model**, **26,861,777 bytes WASM (~27 MB)** plus tokenizer/config, JS factory and app/worker code. Exact model host artifacts may change because this app uses the model repository's default revision. Cache API stores the worker source, WASM module factory and binary; Transformers.js caches model downloads. Caches can be evicted, blocked in private mode or unavailable. Failure is visible and retryable; no deterministic demo result is substituted.

The WASM binary is reused from the byte-identical, immutable collection asset:
`/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.
The current app bundles its own model worker and local ONNX module factory. Root assembly must preserve the referenced older app. No CDN JavaScript imports.

**Offline scope:** after one successful online inference, a fresh worker can run a different inventory with the network completely disabled in the same open page. Tested on the production bundle. Offline first visits, navigation/reopening and persistent cache survival are not promised; no service worker app shell is installed.

## Requirements and limits

Current desktop Chrome/Edge/Firefox/Safari with JavaScript, Web Workers, WebAssembly SIMD, secure origin and approximately 500 MB available memory recommended. Chrome on this macOS host was exercised; physical mobile hardware and other browser engines were not. The UI is tested at 1440, 390 and 320 CSS pixels. WebGPU absence is normal: all successful tests use CPU WASM.

- 1–24 anchors, 1–16 pages, max 40,000 pasted characters / 128 KB imported file.
- Context 450 characters, anchor 100, title 100, page description 330; URLs 240, IDs 40. IDs unique within lists; destination URLs unique after canonicalization. Source rows may share a URL.
- Absolute HTTPS URLs only, no embedded credentials, queries or fragments. Each exact case-sensitive anchor must appear **once** in its context; punctuation and whitespace are preserved in JSON.
- At most 40 embedding texts / 10 sequential batches. Runs time out after 180 seconds. Cancel terminates the worker; run IDs protect against late output and asynchronous file reads.
- English-focused semantic retrieval can miss negation, ambiguity, poor descriptions and subtle intent. It does not verify destination contents, claims, relevance for all readers, URL existence, ranking value or accessibility of the destination. Read the proposal before applying. The shortlist may be unlinked if threshold/guards exclude candidates.
- Markdown escapes syntax in prose and percent-encodes URL parentheses; render it through a trusted Markdown renderer. Separate records remain separate sections even when source URLs coincide. JSON is the exact, lossless audit.

## Development and validation

```sh
npm install
npm run predeploy
python3 serve-test.py
node core-test.mjs
node browser-test.cjs
```

Serve the production bundle at `http://127.0.0.1:6230/daily-app2/20261107-23/`; the test server also serves the shared WASM from the earlier app. Browser tests use the already-installed workspace Playwright and Chrome. `TEST_URL` runs the same test against the public site. See [VALIDATION.md](VALIDATION.md), `browser-validation.json`, downloaded synthetic `export-*.json` / `export-*.md`, screenshots, asset hashes and deployment evidence for actual results. Fault injection is used only to test error handling, never for successful AI checks.

Publish **only through the root combined workflow**, not this app's deploy command. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; Vite base is `/daily-app2/20261107-23/`.
