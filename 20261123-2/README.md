# Fragment Desk

A network-operations worksheet for a repeatable bottleneck: MTU handoff spreadsheets use informal path names, and simple payload division misses IPv4 fragment alignment and repeated headers. This is not a live networking tool, the collection’s prefix-route checker, token-bucket simulator, or document-packet auditor.

## Workflow

1. Choose **Mixed office paths** or **Field network paths**, paste JSON, or import `.json` source/audit. All examples are synthetic. Audit imports restore originals only and require fresh inference/review.
2. Edit the catalog’s effective IPv4 MTUs, datagram `pathNote`, `payloadBytes`, `count` and boolean `dontFragment`. Supply your own constraints; the app never probes MTU.
3. Explicitly click **Load AI & reconcile**. Download progress, chunk progress, cancel, retry and a 180-second timeout are available. No inference occurs until invoked; no fake fallback.
4. Inspect source snippets and cosine-ranked candidate paths. Correct identities, verify MTU/bytes/quantity/DF, approve every group or hold it. Changing identity resets approval; a hold withholds the entire worksheet while retaining all originals. Multiline review notes and undo are supported.
5. **Apply reviewed scenario** computes fragment templates, offsets, MF flags, byte totals and DF-blocked payloads. A repeated group uses one template with its explicit quantity rather than duplicating every physical packet.
6. Download complete JSON, audit CSV, Fragments CSV or Markdown, or copy the current worksheet/audit. Review changes invalidate all exports. Original source is never overwritten.

## Real AI and runtime

Real normalized mean-pooled 384-value neural embeddings from [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0. AI semantically compares informal path notes with supplied catalog descriptions, reducing repeated alias lookups. It does not infer MTUs, packet sizes or network behavior. Cosine scores are similarity, not confidence. Unknown/negated notes still have a nearest candidate; human review and holds are essential. Six simple fixture matches do not establish general accuracy.

Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU requirement, paid service, key or agent-provider credentials. Current Chrome with GPU disabled tested; physical phones, Safari/Firefox and low-memory devices untested. Requires HTTPS/localhost, WebAssembly SIMD, module workers, initial internet and several hundred MB RAM. Cache API is required for the documented offline reuse.

Initial download approximately **23 MB model/tokenizer/config + 27 MB WASM**, plus app/worker/factory code. Only public files come from this site and Hugging Face/CDN redirect hosts. Model revision is unpinned: upstream changes are a reproducibility limitation. The 512-token tokenizer context is not a promise that a supplied pipeline max_length=256 is enforced; this app separately bounds each text to 200 characters. At most 40 embedding texts in chunks of four. Every output vector count, dimension, finite value and normalization is validated before suggestions.

### Immutable shared same-origin assets

To keep the existing combined deployment below its unchanged 1 GB guard, preserve:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Sizes/hashes are recorded in `runtime-dependency-audit.json`. The browser caches worker source, factory and WASM explicitly; Transformers caches model files. Deploy-only byte-identical geometry sharing additionally covers older apps `20261029-16` and `20261029-17`; their source builds/compatibility URLs are preserved and actual worker/image/STL workflows are regression-tested locally and publicly. This utility itself has no geometry features.

## Deterministic algorithm and limitations

Initially unfragmented IPv4 only; fixed 20-byte headers, no options. `payloadBytes` excludes that header. A datagram fitting `payload + 20 ≤ MTU` remains a single packet, even if its payload is not a multiple of eight. Otherwise DF means blocked, with no output packets. When fragmentation is allowed, each nonfinal fragment uses `floor((MTU − 20) / 8) × 8` payload bytes; the last fragment contains the remainder. Byte offsets advance contiguously, offset units are bytes/8, and MF is true except on the final fragment. The original payload total is exactly reconstructed. Each fragment carries another 20-byte IPv4 header.

The baseline `ceil(payload / (MTU − 20))` ignores eight-byte alignment; it is computed on the same deliverable groups and multiplied by quantity, excluding DF-blocked groups explicitly. This can undercount: 2958 bytes over MTU 1499 requires three packets, not two. Extra header bytes compare actual delivered packets with one header per delivered original datagram. Metrics are conditional calculations, not measured latency, throughput, time savings or model accuracy. Delivered payload + blocked payload = original payload. Blocked records remain in all complete audits and receive a blocked row in Fragments CSV.

No IPv6, downstream refragmentation, IP options, loss, retransmissions, transport segmentation, link-layer overhead, ICMP behavior or live path-MTU discovery. For tunnels, the user must supply effective inner IPv4 MTU. Catalog descriptions do not prove a real network path. No packet data is generated or transmitted and no configuration is changed. “Wire bytes” in internal output refers only to summed IPv4 bytes, not physical Ethernet traffic.

## Privacy, caching and failures

Content stays in page memory and a local worker. Network traffic is public-file GET downloads, not document uploads. No telemetry, remote inference, credentials or accounts. Public model/runtime files may persist in browser caches; user content is persisted only through explicitly requested downloads/clipboard. Imported text is data and cannot change authority or ask for keys.

Tested offline scope: **fresh-worker real inference in an already-open page after an online warm run**, with browser networking disabled. Cold offline navigation/reload is not supported or claimed. Cache eviction/disabled storage may require internet again.

Run IDs invalidate late worker messages, delayed worker-source fetches and asynchronous file reads. Cancellation terminates the worker and a newer run cannot be overwritten by older responses. Missing runtime support, worker/model/network failures, malformed outputs and timeout yield visible errors and no invented suggestions. Retry is explicitly invoked.

## Formats and limits

Source JSON only:

- `title`: nonblank ≤200 characters.
- `paths`: 2–8 objects with unique `id` ≤50, nonblank `description` ≤200, integer `mtu` 68–65535.
- `records`: 1–32 objects with unique `id` ≤100, `pathNote` ≤200, integer `payloadBytes` 1–65515, integer `count` 1–10000, boolean `dontFragment`.

Source ≤60,000 characters. JSON source/audit file ≤16 MB: larger than the source limit to support maximum-batch audit envelopes with expanded fragment evidence. Reviewer notes ≤2,000 characters. Unknown keys, missing fields, duplicate IDs, invalid numbers, malformed JSON and unsupported files are rejected.

- JSON: `fragment-desk/1`, every original, review/evidence and ready/held analysis.
- CSV: one audit row per group, original bytes/count/DF, AI/reviewed paths and notes. Formula-like strings are apostrophe-guarded, including multiline text; numeric fields remain numeric.
- Fragments CSV: one template row per fragment with quantity, byte/unit offsets, MF, payload/total bytes; a DF-blocked group has a blocked row with its untransmitted payload. Disabled when held.
- Markdown: readable worksheet plus full JSON audit. Clipboard: current worksheet plus full JSON.

## Build and observed checks

React + Vite. `npm install`, `npm run predeploy`. Required per-app `predeploy` and `deploy` scripts are present; **publish only through collection-root `npm run predeploy` / `npm run deploy`**, never the individual app deploy script. Base `/daily-app2/20261123-2/`.

See [VALIDATION.md](VALIDATION.md) and the JSON/log reports for actual outcomes. Production-browser tests use the real model; mocked workers are confined to defensive failure checks. Independent Python parsing reopens browser-downloaded CSV/JSON/Markdown, including multiline review edits, formula guards and maximum batches. A separate 1,000-case feasibility oracle checks byte conservation and minimum counts. Publication is complete only after public asset hashes and real browser inference are verified.
