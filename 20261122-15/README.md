# Address Quilt

A local-AI IPv4 documentation workroom for network coordinators who repeatedly reconcile informal device-purpose notes and address allocations. It does **not** connect to devices or generate executable firewall rules.

## Workflow

1. Paste source JSON or import `.json` (up to 4 MB), or choose either synthetic fixture. Supply a title, 2–8 `purposes` with unique IDs/descriptions, and 1–32 `ranges` with unique IDs, purpose notes and explicit inclusive `start` / `end` IPv4 addresses.
2. Read the download notice, then explicitly **Load AI & reconcile**. Real MiniLM embeddings compare range notes with your purpose descriptions. Top cosine similarities are evidence, not confidence or permission.
3. Review **every** mapping and both endpoints. Edit boundaries/purposes and add multiline notes. Such edits reset approval. Reject/hold uncertainty; undo restores the last review edit (100-step history). Original inputs never change.
4. **Apply reviewed scenario**. Any hold withholds the whole plan. Different-purpose overlaps expose exact source-pair intersection witnesses and block the plan. Correct the inputs or review, not the warning.
5. For collision-free reviewed ranges, deterministic interval union and greedy aligned power-of-two covering produce a minimum exact CIDR cover per purpose. Reconstructing all CIDR intervals must equal every reviewed union exactly. Compare the smallest single encompassing subnet per purpose and its extra unrequested address count.
6. Download current reviewed JSON, CSV audit, CIDR Plan CSV or Markdown; copy the worksheet. Any edit invalidates exports. JSON/Markdown preserve originals, evidence, reviews and witnesses. Audit CSV has every source record; Plan CSV lists CIDRs and contributing source IDs. Reimport restores originals only and requires fresh inference/review. No automatic persistence: download before closing.

Example shape:
```json
{"title":"Synthetic example","purposes":[{"id":"print","description":"Printing equipment"},{"id":"guest","description":"Guest wireless devices"}],"ranges":[{"id":"r1","note":"Laser printer devices","start":"192.0.2.4","end":"192.0.2.7"}]}
```

## Real AI and static deployment

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized ONNX `q8`, Apache-2.0. Approximately 23 MB model files on initial load.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU, approximately 27 MB binary plus worker/factory. No WebGPU required or attempted; the CPU path is the default, not a fake fallback.
- Normalized mean-pooled 384-dimensional vectors; validate count, dimensions, finite values and near-unit norms. Four texts per chunk, at most 40 texts / ten chunks. The shared feature-extraction tokenizer caps at **512 tokens**; the pipeline's `max_length:256` argument is not the effective cap. Input descriptions are independently bounded to 200 characters.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its `/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both originating app builds. SHA-256/byte audits in `runtime-dependency-audit.json`.
- HTTPS/localhost, module workers, WebAssembly SIMD, Cache API for offline reuse and several hundred MB free RAM recommended. Desktop Chrome tested with GPU disabled; actual phones, Firefox, Safari and low-memory devices are not tested. Unsupported runtime/model failures are actionable errors, never canned responses.
- The app runs on GitHub Pages with no backend, no API keys, optional providers or paid services. Root collection deployment only; per-app gh-pages script is retained but must not replace the collection.

## Privacy, network and offline scope

Only after explicit loading, the local worker downloads public weights/tokenizer/config from Hugging Face and its CDN; same-origin worker/factory/WASM are downloaded from the collection. No user content is sent in URLs, bodies or telemetry. Imported strings are model data, never instructions or authority. No credentials are requested. App data remains in browser memory; caches contain public model/runtime assets, not worksheet records.

Cache API caches the worker source, runtime factory/binary and runtime-managed model files. Tested offline claim is **fresh-worker real inference inside an already-open, previously warmed page with all network blocked**. Cold offline navigation/reload is not promised. Cache eviction/private-mode limitations require internet again. Loading status/progress, cancellation, 180-second timeout, model/network errors and retry are exposed; run IDs protect late messages, file reads and worker fetches.

## Bounds and semantics

Source ≤60,000 characters; import envelope ≤4,000,000 bytes; IDs ≤50 characters; descriptions/source notes ≤200; reviewer notes ≤2,000. Unique nonblank IDs. Canonical IPv4 only, no leading zeros, signed octets or reversed ranges. Full `0.0.0.0`–`255.255.255.255` is representable without enumerating individual addresses. Integer arithmetic uses exact JavaScript numbers below 2³².

Every inclusive address counts, including network/broadcast-looking `.0` / `.255`. This is **not usable-host sizing**, a routing model, security advice, permission inference, allow/deny precedence or policy enforcement. No IPv6, ports or physical inventory discovery. Same-purpose duplicates/overlaps merge; cross-purpose overlaps block. A valid cover proves arithmetic equality only, not that ranges or purposes are correct. MiniLM can misclassify negation and unknown devices; mandatory human review remains essential.

CSV text beginning `= + - @ tab CR` receives an apostrophe against spreadsheet formulas, including multiline cells; quoted commas/newlines round-trip. JSON remains lossless. Source IDs in Plan CSV are JSON arrays, not delimiter-concatenated strings.

## Validation

See [VALIDATION.md](VALIDATION.md) for observed local/public results and limitations. `node core-test.mjs`, `node browser-test.cjs`, `python3 artifact-test.py` and defensive/race suites are runnable validation artifacts. Successful inference uses the real model; mocks are used only to inject malformed/late errors. Serve local production paths with `python3 serve-test.py`; after root predeploy, use `python3 serve-test.py --assembled --port 7354`. Set `APP_URL` for the workflow/influence suites and `GALLERY_URL` for gallery checks when targeting another server or the public site.

`npm run predeploy` builds the individual Vite app at `/daily-app2/20261122-15/`. Publish via **root** `npm run predeploy` and `npm run deploy`, not this directory's deploy script. No digest is sent by this builder.
