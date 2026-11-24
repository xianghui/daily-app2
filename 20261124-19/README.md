# Cookie Trail

Local-first cookie-delivery QA workbench for frontend developers and integration testers.

**User → input → bottleneck → output:** a developer has mixed flow notes and synthetic cookie snapshots. Manually identifying the intended request context and tracing domain/path/SameSite exclusions is error-prone. Real local AI retrieves a request context, then deterministic checks produce an editable, source-linked delivery manifest and reusable QA fixtures. This is distinct from Origin Ledger's response-access/CORS checks: Cookie Trail plans outbound cookie delivery and duplicate-name witnesses, not response access permission.

## Workflow

1. Choose either synthetic batch, paste source JSON or import a previous audit JSON (originals only).
2. Edit `plans`: ID, English description, canonical request URL, explicit `crossSite`, `topNavigation`, `method`. Review site relationship yourself; it is a supplied constraint, not guessed from hostnames. Each record has ID, context and a `raw` string containing an array of synthetic cookie objects.
3. Explicitly click **Load AI & reconcile**. Review similarities, selected contexts, original snapshots, inclusion/exclusion reasons and duplicate names. Choose a different context or edit the snapshot if needed.
4. Approve or hold every record. Context/snapshot edits reset approval. Notes are multiline. Undo restores prior reviews; any edit invalidates exports. Source changes terminate inference and invalidate reviews/results.
5. Apply the reviewed scenario. Download audit JSON/CSV/Markdown, release JSON fixtures or copy the worksheet. No URLs are requested and no cookies are read/set/sent/deleted by the app.

`src/core.js` contains both complete synthetic source examples. Cookie object: `{name,value,domain,hostOnly,path,secure,sameSite}`. The snapshot order represents oldest-first creation order. Use **synthetic values only**, not actual session cookies.

## Real AI, runtime and licenses

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction. English short-text semantic retrieval, normalized mean-pooled 384-dimensional vectors; cosine ranking is not confidence.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; [ONNX Runtime](https://github.com/microsoft/onnxruntime) Web WASM CPU, MIT. No WebGPU required, no remote model API or key path.
- Immutable same-origin shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both older apps in combined deployments. Hashes/bytes are in `runtime-provenance.json`; worker source is `../20261115-6/src/ai.worker.js`.
- Worker protocol: `{id,texts}` → progress, batch, error or `{id,type:'result',vectors}`. Four texts/chunk. Tokenizer `model_max_length=512`; the pipeline's supplied `max_length:256` is **not** documented as an enforced cap. We constrain semantic descriptions/contexts to 200 characters. Only these texts, not cookie values/URLs, enter inference. Vector count, finite values, dimension and normalization are validated before ranking.
- Initial download approximately 23 MB model + 27 MB WASM + tokenizer/code. Internet to Hugging Face and its download CDN is required initially. Model files use the host's default `main` revision; upstream revision availability can change. Byte auditing covers the same-origin runtime, not permanent model-host availability.

## Privacy, cache and devices

All user data stays in browser memory. App code, worker, WASM and tokenizer/model files are downloaded; user content is not uploaded. No analytics, backend, shared secrets, agent provider credentials, remote inference or external actions. Imported text is inert data, never an instruction to tools or credential requests. No automatic downloads start before explicit model invocation other than normal app code.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB available RAM was tested in headless CPU mode (`--disable-gpu`). Phone-sized layouts were tested, not physical phone inference. Other browsers are untested; failure gives actionable retry/device guidance. Worker/model errors, malformed outputs and timeout never substitute canned results.

Cache API stores worker/runtime; Transformers.js caches model assets. Best-effort browser storage can be evicted or unavailable. **Tested offline claim only:** real inference in an already-open warmed page, with a newly created worker and all network disabled. Cold offline navigation/reload is not supported or promised. Cancel terminates the worker; run IDs protect later input/newer results against stale fetches, file reads and worker responses. Timeout is 180 seconds.

## Supported cookie model and boundaries

- 2–5 contexts, 1–24 records, unique IDs. Descriptions/contexts ≤200 characters. Each cookie JSON string ≤3500, source JSON ≤50,000 characters. Import source/audit `.json` ≤1 MB, with independent original-source bounds. Snapshot array: 0–8 cookies.
- Already-accepted, unexpired, unpartitioned cookies only. Explicit SameSite `Strict`, `Lax`, `None`. `None` requires Secure; `__Secure-` and `__Host-` prefix invariants checked. Cookie name token ≤60, cookie-octet value ≤100, lowercase ASCII DNS domain ≤180 without leading dot, ASCII absolute path ≤180. Duplicate name/domain/path storage keys are blocked; duplicate names on distinct scopes are retained.
- Request URL must be canonical HTTP(S) with DNS host and explicit path, without query, fragment, port, credentials or IP host. GET/POST methods only. URLs are data, never fetched. Domain matching is exact for host-only cookies, otherwise exact or dot-delimited suffix. Path matching is case-sensitive encoded-path equality or a slash-boundary prefix; `/cart` does not match `/cartoon`.
- Secure cookies require HTTPS. Strict excludes cross-site requests. Lax permits same-site requests or cross-site top-level GET navigations. None adds no SameSite restriction. A cross-site POST is not a Lax exception.
- Header order: descending path length, then original snapshot order. Exports preserve repeated names; the app does not guess which one a server will use. Servers must not depend on ambiguous duplicate-name behavior.
- Out of scope: setting/accepting cookies and public-suffix checks, expiry/clock rules, omitted/default SameSite and its grace period, partitioned cookies, HttpOnly/JS visibility, browser third-party blocking/storage access, redirects, site derivation, actual traffic and server parsing. HttpOnly does not change network delivery. Privacy controls can block additional cookies. This is a bounded fixture planner, not a full browser emulator, authorization check or security certification.

## Outputs and honest comparison

Audit JSON has all original source, reviews, checks and metrics. Reimport restores originals and requires fresh inference/review. CSV protects formula-leading text with an apostrophe and properly quotes commas/newlines; JSON retains exact values. Markdown is a readable complete worksheet. Release JSON contains **only approved valid cases**, including expected header, original cookie indices, duplicate names and supplied request context. Held/blocked records remain in audits and never disappear silently. Empty stores are valid and yield an empty header.

The baseline emits every stored cookie in snapshot order without applying scope or SameSite. Metrics count header differences, included/withheld cookies and duplicate-name cases in approved valid snapshots. These are computed decisions, not accuracy or time savings. Evidence similarity is not a confidence probability.

## Development / combined publication

```sh
npm install
npm run dev
npm run predeploy
```

Standalone `npm run dev` previews the UI but does not serve the two shared sibling runtime folders. For full inference locally, first run root `npm run predeploy`, then `python3 serve-production.py` here and open `http://127.0.0.1:7559/daily-app2/20261124-19/`. The production-bundle test server serves the combined collection with the real shared paths.

React + Vite; base `/daily-app2/20261124-19/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` retained. **Publish from the collection root only** with `npm run predeploy` and `npm run deploy` so older apps remain present. This app deliberately reuses validated immutable runtime assets to stay below the collection's unchanged 1 GB guard.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Real model inference, real browser-cookie delivery oracle, independent downloaded artifact parsing, cancellation/races/failure handling, runtime byte checks and layout screenshots are covered. The negation probe incorrectly selected `embedded` for an intended `checkout` flow: semantic retrieval can be wrong and requires human confirmation. Tiny synthetic fixtures do not establish general accuracy. No claim of real-device mobile support, cold offline startup or live-site correctness.
