# Heatfield Scout

**Temperature-led field scouting, with real local AI crop matching.**

For small field-trial coordinators who repeatedly turn crop notes, temperature logs and reference assumptions into inspection dates. This is not a crop diagnosis, growing recommendation or weather forecast.

## Workflow

1. Choose a synthetic example or paste/import JSON. Edit the title, crop profiles, stage heat targets and fixed-day assumptions, daily weather, field notes and accumulation start dates. All fields in one run share the supplied weather log; split runs for different weather stations.
2. Explicitly click **Load AI & match crop notes**. Real MiniLM neural embeddings compare each note with supplied crop descriptions. Review the ranked source descriptions/cosine similarities, choose another crop, edit the start, add a multiline reviewer note, approve or hold every field. Undo restores the previous review. Originals remain unchanged.
3. Apply the reviewed snapshot. The deterministic heat engine calculates daily heat, first threshold-crossing dates, remaining heat and below-zero field-days. Held fields remain in audits but not heat totals. Any edit invalidates results/exports.
4. Export complete audit JSON, spreadsheet-safe Audit CSV, Daily CSV, Markdown, or the complete reviewed Plan CSV. Copy Markdown. The JSON envelope reimports its **original input**, not an implicitly approved prior review. Re-review it. CSV exports prefix formula-leading text with an apostrophe; JSON preserves exact strings. Hold-free Plan CSV may contain unreached thresholds explicitly labeled not reached, never fabricated dates.

## Input contract and calculation

JSON object: `title`, `profiles`, `records`, `weather`. See the in-app synthetic fixtures or `examples` in `src/core.js`.

- 2–8 profiles: unique `id`, `description`, `baseC` (-5…30), `capC` (0…50, greater than base), 1–4 `stages` with unique `name`, strictly increasing integer `targetGDD` (1…3000) and integer `baselineDays` (1…366).
- 1–24 records: unique `id`, `note`, ISO `start` inside the supplied log.
- 1–90 consecutive, ascending, unique weather dates: `date`, `minC`, `maxC` (-30…60°C, min ≤ max). Temperature inputs support at most one decimal.
- Dates 2000–2099, UTC date-only. Start day is included. 200 characters per neural text, 60,000 source characters. JSON file import up to 8 MB permits larger exported audit envelopes; extracted original still obeys the source bound. IDs ≤40 chars, title ≤100, reviewer notes ≤500.

For each daily extreme, clamp separately to `[baseC,capC]`. GDD = (clamped min + clamped max)/2 − base. Internally sum integer twentieth-degree-days; first cumulative sum reaching a stage target gives its **inspection prompt**, not an observed biological stage. Remaining heat also uses integer units. No extrapolation beyond the supplied weather. Calendar baseline is start + baselineDays − 1; positive date delta means later than the baseline. Baseline disagreement counts are calculated comparisons of assumptions, not accuracy or productivity gains. Below-zero field-days count the same weather date separately for each active field; they do not assess crop injury.

The capped-min/max method differs from average-only clamping and hourly/sine methods. It ignores photoperiod, chilling/vernalization, water stress, soil temperature, pests, crop damage and cultivar variability. Every example threshold is synthetic, deliberately not agronomic guidance. Supply locally validated references and actually inspect plants.

## Real AI, model and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, 384-dimensional mean-pooled L2-normalized embeddings. [Upstream model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU or API key required. Shared immutable worker runs the real `feature-extraction` pipeline, four texts per chunk, no classifier or sample-response fallback.
- Effective tokenizer cap is 512 tokens from tokenizer configuration. The worker passes max_length 256 but this installed feature-extraction pipeline does **not** forward that override; we do not claim a 256-token cap. The app independently bounds every neural text at 200 characters. Vector count, 384 dimensions, finite values and normalization are validated before ranking.
- Cosine similarity is not confidence. Nearest-neighbor matching always forces a candidate, including for unrelated or negated notes. Never interpret it as verified crop identity, stage, suitable base/cap or threshold. Imported instructions have no authority; no tools or credential requests are exposed to model output.

### Download, device and offline scope

Before first run the UI discloses roughly 50 MB: ~23 MB quantized weights plus 26,861,777-byte WASM and small tokenizer/config/runtime files. Internet required for model downloads from Hugging Face and its CDN (`huggingface.co`, `hf.co`/`xethub.hf.co`). Model download progress, chunk progress, cancel, 180-second timeout and retry are visible. Current desktop Chrome/Edge with WebAssembly SIMD, module workers and Cache API is recommended. Physical phones/other engines are unverified. Unsupported runtimes fail visibly without fake output.

The app reuses byte-audited, same-origin collection assets rather than duplicating WASM:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older deployments. `bundle-audit.json` records current hashes. Worker source, runtime factory/binary and model files use Cache API. Tested offline scope is **fresh-worker inference in an already-open page after one successful online run**. Cold offline navigation/reload is NOT promised. Eviction/private browsing may require download again. The page shell is not a service-worker offline app.

## Privacy and robustness

All field content, review and inference stay on-device in memory; downloads fetch model/runtime files, not user content. No API credentials, remote inference option, analytics, accounts, uploads or irrigation/farm controls. Closing the tab loses unsaved edits; download an audit first. Explicit run IDs, terminated workers and guarded file reads prevent cancelled/stale results replacing a newer run. Model/network/schema/timeouts fail visibly; retry requires real inference again.

## Develop / publish

`npm install`; `npm run dev`. Production base `/daily-app2/20261127-4/`. Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist` as the collection contract requires, but **publish only through the repository ROOT combined workflow**, never the per-app deploy command.

`python3 serve-built.py --port 7834` serves production assets with true collection paths. `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node core-test.mjs`, `python3 independent-test.py`, `python3 artifact-test.py` document reproducible checks. `APP_URL` and `PREFIX` target public runs. See [VALIDATION.md](VALIDATION.md) for observed results and limitations.
