# Buffer Estuary

A private replenishment-review worksheet for stockroom planners: informal stock descriptions → real local semantic reconciliation → human review → empirical lead-time demand buffers → usable exports. React + Vite, no API key or server.

## Workflow and formats

1. Paste/import JSON or choose **Repair store** / **Studio supplies** (synthetic).
2. Supply `name`, integer `targetPercent` (50–99), 2–6 catalog products and 1–24 stock notes. Catalog fields: `id`, `title`, `description`, `leadDays`, `dailyDemand`. Each history contains 5–90 consecutive complete whole-unit daily demands, **including zero-demand days**. Lead time is integer 1–min(30,history length). Stock notes contain `id`, `text`, `onHand`, `onOrder`, `backorders`; quantities are integers 0–1,000,000. Daily quantities use the same bound. All records assigned to one product must be disjoint locations, not repeated snapshots, and share a unit basis. Edit histories, lead times and percentile in JSON before processing.
3. Explicitly load the model. Inspect source snippets, catalog evidence and cosine rankings. Correct the proposed product and quantities, add review notes and approve or hold every record. Undo reverses edits; originals remain intact. Input changes terminate inference and clear results.
4. Apply the reviewed worksheet. Any hold blocks its assigned product; absent approved stock records also block a product. Other results remain provisional: verify every held identity before relying on other products. No orders or account modifications occur.
5. Download current JSON, Audit CSV, Product CSV or Markdown, or copy Markdown. Review edits invalidate exports until reapplied. Audit import restores original inputs only, not untrusted old approvals or computed outputs.

Original JSON ≤18,000 characters; JSON/audit imports ≤1 MB. Unique IDs ≤40 characters, names/titles ≤80, source descriptions and reviewer notes ≤400. Only JSON input; CSV/PDF import is not supported. All-record audit exports retain held records, originals, proposed mappings and current review decisions. Product CSV retains all catalog products, including blocked ones with blank position/top-up. JSON schema identifier: `buffer-estuary/v1`. CSV quotes commas/newlines/quotes and prefixes formula-like text; signed numerical results remain numbers. Markdown includes the worksheet and every reviewed source record. Exported records reflect current applied review, never stale defaults.

## Real AI and deterministic calculations

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), **Apache-2.0**, q8 ONNX, via bundled **Transformers.js 4.3.2** / ONNX Runtime Web. CPU WASM produces normalized mean-pooled 384-dimensional embeddings. Four-text chunks, maximum 256-token context. Cosine similarity ranks supplied catalog descriptions against stock notes, materially reconciling paraphrases that exact-title matching leaves unresolved. Similarity is not confidence; a nearest candidate always exists, even for unrelated text. Negation is unreliable. Imported instructions are embedded as data, not executed. AI never invents stock values, lead times, demand, quantities or forecasts. Model downloads use the host default revision; later upstream changes can change results.

After inference and review everything is deterministic:

- Sum every contiguous `leadDays`-long demand window (no wraparound or padding).
- Empirical reorder point = sorted window sum at nearest rank `ceil(targetPercent × windowCount / 100)` (one-based).
- Mean baseline = `ceil(sum(window sums) / windowCount)`.
- Inventory position = approved on-hand + on-order − backorders, aggregated across disjoint stock notes.
- Top-up gap = `max(0, reorderPoint − position)`; baseline gap uses the mean point.
- Historical coverage = observed windows at or below the corresponding point, shown as exact counts. The above-mean buffer is `max(0, point − baseline)`; percentile can be below the mean on skewed histories.

Arithmetic stays within JS safe integers at all bounds. Unit sums across unlike products are workload counts, not monetary value. The top-up only restores a historical target: it is **not EOQ, an order-size recommendation accounting for future consumption, a delivery schedule, or a continuous-review execution policy**. Verify arriving orders and timing separately. Overlapping windows are dependent and descriptive. Tiny or censored histories, stockouts, seasonality, changing demand, lead-time variation, critical spares and carrying costs need separate treatment. The percentile is not a future service guarantee; no measured stockout-reduction, elapsed-time or accuracy claim.

## Download, privacy, cache and devices

Initial model/runtime download is approximately **50 MB**: ~23 MB model/tokenizer/config from `huggingface.co`, `hf.co` and their CDN; ~27 MB same-origin WASM, plus local bundled JS. An internet connection is needed initially. Weights download **to** your device; stock content is **not uploaded**. No analytics, provider integration, credentials, remote execution or persistence of inputs. Inputs/reviews disappear when the page closes unless exported.

Requires WebAssembly SIMD and module workers, several hundred MB available RAM, and Cache API for offline reuse. Uses CPU; WebGPU is not required. Desktop Chrome was tested; physical mobile devices and other browsers are unverified. Narrow responsive layouts are tested separately, not proof of phone inference. Network/worker/runtime errors and 180-second timeout give actionable errors; no fake AI fallback. Cancellation terminates the worker. Run IDs protect against late results, delayed worker downloads and delayed imports.

Worker source, WASM factory and binary use Cache API; Transformers.js caches model assets. After an online warm-up, **fresh-worker inference offline works inside the already-open page**. This exact scope was tested with network disabled. Offline navigation/reload/app-shell startup is not claimed. Cache eviction/private browsing can force redownload. The immutable shared WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must be preserved during combined publishing. Its byte equality/hash is recorded in `runtime-assets.json`; factory and worker are bundled locally under this app base.

## Development and publishing

`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261112-4/`. Required app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish **only through the repository root** combined workflow; individual publishing replaces the collection. See `VALIDATION.md` for observed tests, quality limitations and publication checks.
