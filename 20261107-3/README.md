# Notice Atelier

Local English → French draft translation and review for visitor-service coordinators. Input is a batch of short operational notices; the bottleneck is creating a first French draft while retaining the original, checking key facts and recording approval. This is not a chat interface and never publishes notices.

## Workflow

1. Paste/import UTF-8 CSV with exactly `id,english`. Synthetic Visitor notices and Service updates are included.
2. Optionally set up to ten comma-separated case-sensitive protected terms. These are deterministic validation constraints, **not model steering**.
3. Explicitly click **Load AI & translate**. See loading/file progress, per-notice progress and Cancel. Retry is the same button.
4. Review the full source and untouched AI draft. Edit the French, approve/pending/reject each notice and add review notes. Numeric-token mismatch or missing protected terms blocks approval. Edit resets approval to pending. Undo retains up to 30 review states; changing source/settings clears prior results. Run IDs, guarded file reads and worker fetches, terminated workers and 300-second timeout prevent stale overwrites.
5. Apply the current review to an in-app snapshot, then download CSV/JSON or copy CSV. Every source record survives, including pending/rejected records and records hidden by the status filter. Any edit invalidates the snapshot. Rejected French is blank in CSV; JSON keeps the rejected draft for audit. Pending French is explicitly labeled, not publication-ready. CSV guards spreadsheet-formula-like text; JSON preserves exact text.

## Real AI and runtime

- Model: [Xenova/opus-mt-en-fr](https://huggingface.co/Xenova/opus-mt-en-fr), revision `28726206f80896b90035bd99cccd5cc1e151f916`, ONNX q8 conversion of [Helsinki-NLP/opus-mt-en-fr](https://huggingface.co/Helsinki-NLP/opus-mt-en-fr) (Apache-2.0). Upstream model card and license checked; conversion card references the source without a separate license declaration.
- Task: actual encoder–decoder neural translation, English source to French target. `MarianTokenizer`, `AutoModelForSeq2SeqLM`, `TranslationPipeline` from Transformers.js 4.3.2; local ONNX Runtime Web WASM CPU, one thread; no WebGPU, API key, paid provider or server.
- Downloads: q8 encoder 50,090,398 bytes + merged decoder 57,381,512 bytes, tokenizer/config files and approximately 27 MB same-origin collection WASM/runtime. Budget roughly 140 MB and 1 GB free memory. No model-host requests before explicit processing.
- Sequential one-notice chunks, greedy decoding (`num_beams:1`, no sampling), maximum 192 new tokens. 1–12 notices, 1–350 characters each, at most 192 model tokens; 24 KB input, unique 1–80 character IDs. Output schema requires one nonempty bounded translation per input, maximum 1,500 characters. Unexpected counts/types fail without fabricated drafts.
- Source-token overflow is rejected, not silently truncated. Output token cap can still produce incomplete translations; human review is essential.
- Current desktop Chrome is tested. Requires Worker, Cache API for offline reuse, WebAssembly SIMD and adequate memory. Other browsers and physical phones are untested; low-memory phones may fail. Use desktop and fewer/shorter notices if slow or out of memory.

## Privacy, caching and offline scope

All source notices, drafts and review notes stay in browser memory. No analytics, personal fixtures, saved content, keys, remote inference or optional provider integration. Imported text is data for translation, not instructions with tool authority. Network traffic is public asset GET/HEAD downloads from the static host, huggingface.co and its model CDN. Content is never put in model-download URLs or bodies. Downloads are not uploads.

The immutable WASM binary is shared from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Its bytes equal this app’s pinned ONNX Runtime binary. Vite rewrites internal fallback references and omits the duplicate binary from this app, saving 26,861,777 bytes in the combined collection. This is a same-origin static dependency, not a server or external inference path. Root deployment preserves that earlier app. The local test server maps the shared binary for production-bundle tests. Runtime factory, binary, worker source and tokenizer use explicit browser Cache API; weights/config use Transformers.js cache. Pinning and explicit tokenizer constructors avoid unpinned registry discovery. Cache API availability, browser eviction/private mode and storage limits affect reuse. After a successful online run, **fresh-worker real inference in the already-open page with the browser fully offline** is tested. Offline initial navigation/reopening is not promised; no app-shell service worker is installed. Close/reload does not persist your private input. Browser site-data settings remove cached public assets.

Model download, worker construction, unsupported runtime, malformed results and timeouts surface actionable errors. No fake model, heuristic fallback or canned response exists. Cancellation terminates computation/download ownership; existing cached files can be reused on retry.

## Deterministic quality controls and limits

Numbers are compared as sorted multisets of numeric tokens, including decimal/time punctuation. Formatting differences can generate false alarms. Protected terms are checked exactly and case-sensitively only when present in the source. These checks cannot verify meaning, negation, grammar, units, names, safety or completeness. Human approval does not turn these checks into a professional translation guarantee.

Baseline: copy English unchanged into the French column. The UI computes the number of drafts differing from this baseline, approved counts and preserved source count. These are **not** translation accuracy or time saved. No confidence percentages or performance claims are shown. Read `VALIDATION.md` for observed tests, including handwritten semantic checks on two different batches and recorded actual model output.

Use only English input. Proper names, jargon, negation and courtesy can be wrong. Transformers.js explicitly warns its Marian fast-tokenizer approximation may slightly differ from the upstream tokenizer. A fluent French reviewer must approve each notice. Do not use for safety-critical, medical or legal instructions.

## Development / deployment

React + Vite, base `/daily-app2/20261107-3/`.

```sh
npm install
npm run predeploy
node core-test.mjs
python3 serve-test.py # production dist on 127.0.0.1:6179
node browser-test.cjs
python3 export-roundtrip.py
python3 audit-assets.py
```

Browser tests use locally installed Playwright and desktop Chrome. For public verification, set `TEST_URL=https://xianghui.github.io/daily-app2/20261107-3/` and `REPORT=live-browser-validation.json`. Public assets are independently byte-compared by `verify-deployment.py`. Root gallery compilation/preservation and browser rendering checks are recorded separately.

Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained as required, but publication uses the **root combined workflow**, never the individual app deploy. See the repository root README for Pages build verification. The original daily_app tree is untouched.
