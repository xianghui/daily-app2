# Serial Compass

A **telemetry/integration engineer's counter-log review desk**: reconcile informal mixed-stream notes with real local AI, review identities and values, then replay unsigned modular counters to expose wraps, duplicates, stale values and undefined half-range jumps. Export a source-linked forward-record worksheet plus complete audits. No device, ingestion service or remote storage is changed.

## Workflow

1. Try **Wraparound handoff** or **Replays and ambiguity** (synthetic). Paste/import JSON containing `title`, `profiles`, `records`. Profiles have unique `id`, semantic `description`, unsigned `bits` (8/16/24/32), trusted initial `start`. Records have unique `id`, informal context `note` and integer `value`, in observed global arrival order. Do not sort counters. One stable epoch per stream.
2. Read the download notice and click **Load AI & reconcile**. Real MiniLM embeddings match each note to a stream description. AI materially resolves paraphrased context across mixed logs; it does not infer widths, reset events or initial references. No model download happens before this action.
3. Review every proposed stream and source counter. Inspect cosine similarity (not confidence), correct only from verified evidence, approve or hold, and add multiline notes. Value/identity edits reset approval. Undo restores review state without changing originals. A hold withholds the entire assigned stream, because silently skipping its state transitions could mislead the replay. Other streams remain usable.
4. **Apply reviewed scenario**. Each approved stream is replayed from its own initial reference, preserving arrival order. Newer values advance reference; duplicates, stale, half-range and invalid-width values do not. Every edit invalidates exports. Change widths/start/order in source JSON and rerun AI.
5. Download complete **JSON**, **CSV**, **Markdown**, forward-only **Replay CSV**, or copy worksheet/audit. All source records, original values, model proposals/evidence, reviewed values, holds and comparison witnesses survive in complete audits. CSV quotes commas/quotes/newlines and prefixes formula-leading text with an apostrophe: JSON is the lossless authority. Reimport an audit to restore originals only, then rerun and renew reviews. Replay CSV is a planning artifact, never an executable replay command.

```json
{"title":"Synthetic mixed stream","profiles":[{"id":"sensor","description":"Environmental sensor temperature telemetry sample counter","bits":8,"start":250},{"id":"build","description":"Software pipeline build job execution event counter","bits":16,"start":65530}],"records":[{"id":"a","note":"Temperature environmental sensor sample telemetry","value":254},{"id":"b","note":"Sensor environmental telemetry sample","value":2}]}
```

## Real model and runtime

[`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; Transformers.js **4.3.2** Apache-2.0; ONNX Runtime Web MIT. WASM CPU, one thread, normalized mean-pooled **384-dimensional** embeddings in chunks of four. Finite vector count/dimension/norm validated before cosine ranking. Only descriptions and notes enter inference, never numeric counters. The inherited pipeline's `max_length:256` option is not relied upon as an enforced token cap: ≤200 UTF-16 code units per text bounds input below the tokenizer's 512 context.

No chat wrapper, fake sample model response, deterministic fallback or regex marketed as AI. Imported text is data and cannot change tool authority or request credentials. Nearest semantic match can misroute negations, unrelated descriptions or indistinguishable streams. Mandatory human verification; the tiny fixtures do not establish general accuracy.

## Exact arithmetic and limitations

For width `b`, modulus `M=2^b`, reviewed value `v`, current reference `r`: `d=(v-r+M)%M`. `d=0` is duplicate; `d=M/2` is undefined/ambiguous; `0<d<M/2` is newer; `d>M/2` is stale. Only newer values advance reference, including `v<r` forward wraps. All arithmetic stays exact within JavaScript integer precision even at 32 bits (no signed bitwise coercion).

This assumes **known width, trusted initial reference, stable epoch, and actual forward progress strictly below half the number space**. It cannot diagnose reset versus wrap, long outages, multiple unobserved wraps, integrity, authentication or actual packet loss. No packet contents, timestamps or devices are inspected. A forward count is not an ingestion authorization.

The baseline uses the same reviewed non-held streams, widths, starts and arrival order but advances its own reference only on strictly increasing numeric values. Out-of-width values advance neither replay. Displayed acceptance/disagreement counts are computed from those exact scenarios, not accuracy, elapsed time or productivity claims. More accepted records is not inherently better: compare the actual witnesses under the assumptions.

Limits: 2–8 profiles (ID ≤50, description ≤200, valid start within its width); 1–24 records (unique ID ≤100, note ≤200, integer 0–4294967295); title ≤200; source JSON ≤60,000 characters. Imported `.json` ≤16 MB, then strict original-source bounds apply. Other formats unsupported. Notes ≤2,000 characters. Unknown source fields rejected. Reviewed values outside the assigned width are retained as invalid, not truncated. Invalid unsigned values, malformed vectors/messages, runtime/network failure and a 180-second timeout never generate fabricated suggestions. Cancellation terminates workers; run IDs guard file reads, worker-source fetches and late messages.

## Download, privacy and offline scope

Initial **≈23 MB model + 27 MB CPU runtime**, plus app/worker code; internet required. Public model/tokenizer/config download from Hugging Face and its CDN. Same-origin shared immutable collection assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve their originating apps/paths. `runtime-dependency-audit.json` records SHA-256/size and protocol checks. Worker `{id,texts}` returns progress/batch/vectors or error. Worker source Cache API: `serial-compass-worker-v1`; factory/WASM: `circuit-cove-runtime-v1`; public model files: Transformers cache. After a complete online run, fresh-worker real inference in the **already-open warmed page with all network disabled** is tested. Offline cold navigation/reload is not promised. Cache eviction/private browsing may require internet again.

Content remains in page/worker memory. Only public runtime/model files enter caches. No API keys, provider credentials, remote inference, analytics or optional integrations. Browser network auditing begins at page startup; persisted request reports contain host/path/query-key names without signed CDN token values. All fixtures are synthetic. Downloads/copy are explicit local actions.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. WASM CPU works without WebGPU. Desktop Chrome tested headlessly with GPU disabled and 1440/390/320px layouts. Physical phones, other browsers and constrained devices remain untested.

## Development and publishing

React + Vite. `npm install`; `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261123-11/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish only through **root** combined-site workflow. Preserve unchanged collection size guard and shared assets. Never run individual deploy as the collection publish.

See [VALIDATION.md](VALIDATION.md) for observed results and remaining limitations. Original `/Volumes/ExternalHD/daily_app` stays read-only; scheduler/cadence unchanged; builder sends no digest.
