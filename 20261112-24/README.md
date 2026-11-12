# Counter Folio

For building/campus coordinators reconciling recurring cumulative meter rounds. Real local AI matches informal descriptions to a supplied meter register; mandatory human identity/numeric review precedes deterministic consumption arithmetic. Unlike load estimates or tank planning, this app reconciles actual supplied counter intervals and explicitly reviewed rollovers.

## Workflow
1. Try **Campus meters** / **Building meters**, paste JSON, or import `.json`.
2. Configure catalog `id,title,description,unit,modulus,multiplier,maxRate`. Modulus is the wrap boundary (e.g. 1000 for counters 0–999), multiplier converts integer register ticks to stated units; maxRate is your investigation threshold in units/hour.
3. Provide readings `id,text,hour,value,mode`. Hours share one reference, range 0–8760; integer counters are nonnegative and below the matched meter modulus. Mode normal/rollover describes the interval **ending** at that reading. First readings must be normal. Supply baselines and at least two readings per used meter.
4. Explicitly select **Load AI & match readings**. Review every match, hour, number and mode, inspect source profiles/cosine scores, correct or hold and optionally annotate. No bulk automatic acceptance. Cancel terminates the worker; retry is explicit.
5. Apply reviewed readings. Any hold, missing baseline partner, duplicate meter/hour, out-of-range counter, unverified decrease or impossible rollover blocks the consumption worksheet. Held source audits remain exportable. Undo restores the preceding review; any edit invalidates exports.
6. Download complete JSON, Audit CSV, Markdown or released Interval CSV; copy Markdown. JSON retains original input, reviews, semantic evidence, issues and meter intervals. Reimport restores originals, not approvals. No file/remote device is changed.

## Real AI, runtime & downloads
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized ONNX q8 feature extraction, mean-pooled normalized 384-dimensional vectors. Transformers.js **4.3.2** with ONNX Runtime Web, WASM CPU, one thread, 256 tokens and batches of four. No WebGPU, API key, account, server or paid service.
- AI materially supplies semantic identity retrieval where exact titles fail. Cosine ranking is not confidence, extraction or truth verification. It always proposes a nearest profile—even unrelated text needs holding. Numeric values and rollover evidence are user-supplied, never fabricated by AI.
- Before loading, UI discloses approximately **50 MB** first download: ~23 MB model/tokenizer from `huggingface.co` and its CDN, ~27 MB same-origin runtime binary. Internet required initially. Model download progress, batch progress, cancellation, network/runtime errors and a 180-second timeout are visible.
- App JS, worker and module factory bundle locally. Byte-identical WASM is shared from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes). Preserve that immutable older app asset during root publishing; Vite removes the duplicate. Asset validation records its SHA-256.
- Requires module workers and WebAssembly SIMD; several hundred MB available RAM recommended. Tested desktop Chrome (CPU with GPU disabled) and emulated 320/390px layouts. Physical mobile devices, other browsers and memory-constrained devices not tested.
- Cache API stores worker/factory/WASM; Transformers.js caches model assets. **Tested offline scope: another inference with a fresh worker in the same already-open warmed page**. Offline reload/navigation not promised. Cache eviction or disabled storage requires redownload.

## Privacy & limits
All content stays in page/worker memory; no automatic content persistence, uploads, remote inference or optional provider. Public model asset downloads do not contain input. Browser request audit observed GET-only asset requests, no request bodies or content in URLs, and no model host contact before explicit loading. Imported instructions are data and confer no authority. Synthetic examples/fixtures only; no credentials used. Credential-pattern scan is a bounded check, not a universal security proof.

2–8 profiles, 1–24 readings, original JSON ≤24 KB, exported import envelope/file ≤1 MB, text ≤400 chars, identifiers ≤40 chars. JSON only (no PDF/CSV input). All originals survive; exports must be explicitly applied after review. Run identities protect async file reads, worker download and late worker messages. Unsupported runtime, bad vector dimensions/nonfinite values, model errors and timeouts yield errors, never fake AI.

## Deterministic rules and honest comparison
Within each verified meter, sort by hour and calculate `(current − previous + modulus if verified single rollover) × multiplier`. Divide by elapsed hours for interval-average rate and compare to supplied maxRate. Sum intervals only within that meter. Baseline is simple last-minus-first × multiplier, which misses wraps. Exact-title baseline counts recognizable notes; coverage is not accuracy. No invented improvement/time/confidence percentages. Counters/meter units are never pooled across meters. Display rounds to three decimals; JSON retains precision.

Resets/replacements require separate register segments, each with its own baseline. Multiple hidden wraps cannot be detected; a visually plausible rollover still needs independent verification. No missing-data interpolation, leak diagnosis, tariff/billing calculations, peak demand, meter controls, guarantees or outbound actions.

## Build / validation
`npm install`, `npm run dev`, `npm run predeploy`. React + Vite base `/daily-app2/20261112-24/`. Required per-app `predeploy` / `deploy` scripts retained; **publish only via root combined-site workflow**, never per-app deploy.

See [VALIDATION.md](VALIDATION.md) and machine-readable validation files for observed browser inference, known-answer results, exported artifacts, defensive fault injection and publication verification. Browser tests use the host's installed Playwright/Chrome, not a production dependency.
