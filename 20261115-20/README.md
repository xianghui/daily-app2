# Cache Orchard

For knowledge-base and service-cache maintainers who have ordered, informal access notes rather than clean object identifiers. Paste/import a small synthetic or local trace, semantically reconcile each access to an object, verify every link, replay byte-bounded caches, and export a capacity-planning worksheet. No server configuration is read or changed.

## Use

1. Choose **Community reference desk** or **Volunteer knowledge shelf**, or paste source JSON using that schema. `cards` contain `id`, `label`, `description`, `sizeKiB`; ordered `records` contain `id`, `text`. Set `capacityKiB` and `targetHitPercent` explicitly.
2. Read download/device requirements and click **Load AI & reconcile accesses**. Loading is explicit; no model-host request occurs on page startup. Cancel stops downloads/inference by terminating the worker; retry starts a fresh run.
3. Inspect source snippets, candidate descriptions and cosine scores. Correct the object or hold an unsuitable access. Every suggestion starts pending. Approve or hold every row; source order is preserved. Edit source JSON to change object sizes, ordering, target or capacity, then rerun inference. Undo restores the prior review layer.
4. **Apply reviewed worksheet** to replay LRU and FIFO and find the smallest integer-KiB LRU capacity meeting your target on this trace. A held access is omitted and prominently marks a partial trace.
5. Download complete JSON, spreadsheet-safe quoted CSV, or Markdown; copy Markdown if clipboard permissions allow. Exports are disabled immediately after any review edit until reapplied. JSON includes all originals, reviews, candidate evidence, both event replays, capacity-search results and holds. Importing an audit reloads only its originals and requires fresh inference/review, never trusts old approvals.

## Real AI and static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized `q8` ONNX, normalized mean-pooled 384-dimensional embeddings, four texts/batch, truncation at 256 tokens/text. English short descriptions are the intended use.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM SIMD CPU with one thread. WebGPU is not needed or used. AI embeds supplied object descriptions and access notes; cosine nearest-neighbor retrieval proposes object identities. Ordinary exact-name comparison is shown only as a baseline, not AI.
- First download: approximately 23 MB model plus 27 MB WASM runtime (plus about 1 MB worker/runtime JS). Internet and several hundred MB free RAM required. Public weights/tokenizer/configuration files download from `huggingface.co` and Hugging Face's CDN (`*.hf.co`); no paid account or API key needed.
- To remain under the collection's 1 GB guard, this app reuses an immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`. It accepts `{id,texts}` and emits `{id,type:'result',vectors}`, progress, batch progress or errors. Its dependencies are `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older apps and immutable files. Byte sizes and SHA-256 hashes are in `asset-audit.json`.
- The application explicitly caches worker source in Cache API; the shared worker explicitly caches module factory/WASM and Transformers.js caches model assets. **Tested offline scope only:** after successful online inference, an already-open warmed page can terminate the worker and perform new real inference in a fresh worker with all network blocked. Offline navigation/reload/app-shell startup is not promised; no service worker is installed. Cache eviction, private browsing and browser storage policies can require redownloads.
- Chrome desktop with GPU disabled is tested. WebAssembly SIMD, module workers and Cache API required. Physical phones, Safari/Firefox/Edge and low-memory devices were not tested. Responsive phone-width screenshots do not certify phone inference. Failures are explicit and do not substitute fake AI.

## Privacy / authority

Default user text stays in browser memory and is sent only to a same-device worker. Public model-file downloads are not uploads of your content. No backend, remote inference, analytics, credentials, provider integration, accounts, cookies for app state, sending, deletion or automatic server changes. Imported instructions are embedded as inert data; they cannot invoke tools or request credentials. Public model/runtime bytes are cached; user notes are not intentionally persisted by this app. Exporting is user-controlled and can contain sensitive originals. Only synthetic fixtures are committed.

## Deterministic replay and honest comparison

Each approved row is one sequential, complete-object request in source order. Start empty. A hit refreshes recency in LRU, not FIFO. A miss fetches the full supplied object size; if it fits, evict oldest recency/admission entries until it fits. An oversized object bypasses **without evicting** residents. No TTL, invalidation, compression, concurrency, prefetch, latency or partial-object reads. KiB means 1024 bytes.

For both policies, report hits, first-access/repeat misses, bypasses, miss KiB and peak resident KiB; every event lists evictions and residents. Miss KiB is modeled full-object fetch volume, not measured network traffic. The independent baseline is FIFO on the exact same reviewed trace. It can beat LRU; no universal improvement is asserted.

Capacity recommendation exhaustively replays every integer KiB from zero through the sum of supplied object sizes, selecting the smallest that meets the observed hit target. Variable-size LRU is not assumed monotonic. Cold first accesses limit achievable hits; unreachable targets and all-held traces have no recommendation. This is trace replay, **not future performance prediction**. No accuracy, time-saving or percentage-improvement claims.

Nearest semantic similarity is not identity, confidence, authentication or relevance. Negation, similar descriptions, changing content and unrelated requests can mislink. Humans must verify every access and the completeness/ordering/sizes. Holds change the workload and make the replay partial.

## Bounds / defensive behavior

2–8 objects; 1–48 access notes; 1–300 characters per description/label/note; unique safe IDs; integer object size 1–1024 KiB; integer capacity 0–8192 KiB; target 0–100%. Source JSON at most 50,000 characters; imported JSON/audit file at most 2 MB; review notes at most 1000 characters. Unsupported formats/invalid JSON/numeric bounds/duplicates are rejected. Review IDs/counts are checked; only normalized finite 384-vectors of the exact expected count are accepted. Pending reviews block apply.

Run identities guard worker fetch, file reads and messages. Source changes and cancellations terminate workers and prevent late results replacing newer work. Runtime/download failures, malformed AI results and a 180-second timeout yield explicit errors with retry, never fabricated output. CSV quotes commas/quotes/newlines and prefixes potentially formula-leading strings with an apostrophe; JSON is lossless.

## Development / publication

React + Vite, base `/daily-app2/20261115-20/`. `npm install`; `npm run dev`; `npm run predeploy` builds. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only from the collection root** with its combined-site deployment. Standalone hosting must also provide the documented shared worker/runtime paths.

See [VALIDATION.md](VALIDATION.md) for actual observed checks and limitations. Gallery identity/deduplication comparison is in `distinctness.json`.
