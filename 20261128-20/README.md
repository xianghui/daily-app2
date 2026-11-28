# Crossfade Folio

A local-AI utility for audio editors who receive informal transition handoffs and a separate catalog of measured source-pair overlaps. AI retrieves the intended pair; review its identity and statistics, compute a headroom-bounded correlation-aware crossfade, then export neutral gain control points. No DAW installation, audio rendering, microphone access or external actions.

## Workflow

1. Choose either synthetic example, paste source JSON or import a `.json` source/audit.
2. Replace the `setups` catalog with your measured overlap pairs. Each has a unique ID, descriptive context, correlation `rho`, linear full-scale `rmsA/rmsB`, `peakA/peakB`, desired `targetRms`, acceptable `minRms`, `maxGain`, `peakCap`, `durationMs` and integer `steps`. `records` holds unique edit IDs and informal `note` text. All measurements are operator-supplied, never inferred by AI. Use measurements from the same time-aligned overlap.
3. Explicitly choose **Load AI & match overlaps**. Inspect candidate descriptions and cosine similarities (not confidence). Correct the selected pair and numeric assumptions; approve or hold every edit. Profile changes reset approval. Originals remain untouched. Multiline reviewer notes, undo and explicit apply are supported.
4. **Apply reviewed envelopes** creates the exact export snapshot. Edits invalidate it. Held edits stay in complete audits, but not envelope CSV. Minimum-level misses block envelope export. JSON/CSV/Markdown audits still explain these cases.
5. Download JSON, audit CSV, Markdown or envelope CSV, or copy Markdown. Reimport JSON to restore original inputs and rerun review; imported audit recommendations are not trusted or automatically approved.

## What AI does

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0) runs real quantized q8 feature-extraction inference using Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT) on single-threaded WASM CPU. Mean-pooled normalized 384-D vectors encode the supplied descriptions and handoff notes; deterministic cosine ranking retrieves the nearest catalog pair. This avoids requiring exact names. No hard-coded model responses, API keys or deterministic fallback. AI cannot listen, measure signals, determine correctness or handle negation reliably. Every edit requires human review.

App bounds: 2–8 catalog pairs, 1–8 edits, 200 characters per description/note, 30,000 source characters, 1 MB import envelopes, up to 16 short texts in batches of four. The actual tokenizer's `model_max_length` is 512. The shared pipeline supplies `max_length:256`, but this is not relied on as enforced context truncation. Returned vectors must be finite normalized 384-D arrays in exact source count. No user-supplied text is executed or treated as tool instructions.

## Deterministic envelope and comparison

At each of 5–129 control points, `u=cos(πt/2)`, `v=sin(πt/2)`, `d=√(u²+v²+2ρuv)`. Unit-target gains are `(u/RMS_A,v/RMS_B)/d`. The largest common target RMS at or below the desired level is the minimum of the desired target, maximum gain divided by the largest unit gain, and peak cap divided by the largest unit conservative peak. This is optimal for this fixed discrete envelope family, not all possible fades. Actual target below the reviewed minimum blocks envelope export.

Expected power is `(gainA×RMS_A)²+(gainB×RMS_B)²+2ρ×gainA×gainB×RMS_A×RMS_B`. Conservative peak is `gainA×peakA+gainB×peakB`. No phase inversion is introduced. Correlations below −0.95, zero RMS, invalid peak/RMS relations, nonfinite numbers and noninteger interval counts are rejected. Bounds are enforced in the schema and again at apply time.

The comparison uses uncorrected cosine/sine equal-power gains at the **same achieved target**, not a louder baseline. A miss means >0.1 dB modeled RMS deviation or a gain/conservative-peak bound breach. Summary counts use approved edits only. They are computed checks, not accuracy, time saved, listening results or measured audio improvements. Corrected minimum-level misses are a different explicitly labeled constraint metric. No claimed percentage gains.

## Formats and limits

- Source JSON: `{title,setups:[{id,description,...numericFields}],records:[{id,note}]}`. Examples in `src/core.js` are fully synthetic and serve as the schema reference.
- Complete JSON (`crossfade-folio-v1`): originals, all reviewed edits including holds, candidate evidence, all control points, comparisons and counts.
- Audit CSV: one row per edit, with original note, pair, decision, levels, metrics and reviewer note. Formula-like text gets an apostrophe prefix; signed numeric fields remain numeric. Quoted commas/newlines round-trip with standard CSV readers.
- Envelope CSV: approved edits only, with `id,pairId,timeMs,gainA,gainB,expectedRms,conservativePeakBound`; one row per control point. All approved edits must meet minimum level. Gains are linear, not dB. It is a neutral automation worksheet, **not** a DAW-specific import/session file. Check your editor's units and interpolation before adoption.
- Markdown/copy: complete source-linked handoff notes and computed constraints.

No audio files are accepted or generated. This is for mono, zero-mean, aligned, stationary overlap statistics. Different channels, spectral balance, dynamic content, perceptual loudness, DC offsets, interpolated samples and actual clipping require independent audio review. Bounds apply only at exported control points, not continuous time. Listen and verify in your editor. All review actions are reversible in this page; reload clears user data.

## Download, runtime and privacy

Before explicit run the app shows ≈50 MB first-use downloads: ≈23 MB model/tokenizer from `huggingface.co` and its CDN (`us.aws.cdn.hf.co`) plus ≈27 MB same-origin WASM/runtime. No model-host request occurs before run. Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and sufficient memory was tested with GPU disabled. WebGPU is unnecessary. Physical phones/other engines were not tested. No oversized language model or remote provider is offered.

The default path keeps notes/measurements and vectors on-device. Only static file GET downloads occur; no user content in request URLs/bodies, no analytics or credentials. User content is held in React memory and explicit downloaded files/clipboard. Cache API may retain public model/runtime assets, not user inputs. No automatic design saving.

Loading shows file and batch progress. Cancel aborts pending worker source fetch and terminates inference workers; retry recreates them. Run and import IDs reject late responses. Model/network/runtime errors, malformed vectors and 180-second timeout are visible; no fabricated output is substituted. Cache eviction/private mode can require downloads again.

**Tested offline scope:** after one completed online run, a fresh worker performs real inference with the browser context offline in the same already-open page. Offline app-shell startup/reload/navigation is not claimed. The immutable same-origin worker, WASM factory and binary are reused to avoid duplicating ~27 MB in the collection:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve originating app paths. Worker source, factory and WASM are explicitly Cache-API-backed; model files use Transformers.js cache. `runtime-provenance.json` records exact bytes/hashes. App bundles contain no shared keys. Dependencies' licenses remain with their sources.

## Build and validation

React + Vite. `npm install`, `npm run predeploy`; base `/daily-app2/20261128-20/`. Required individual scripts are retained (`predeploy: npm run build`, `deploy: gh-pages -d dist`), but publish this collection through the **root** deploy workflow only.

See [observed validation](VALIDATION.md). `node core-test.mjs`, `node browser-test.cjs`, defensive/recovery/input/race/cancel suites, `python3 artifact-test.py <scope-prefix>` and `node asset-audit.mjs` document reproducible checks. Browser scripts use the host's installed Playwright and desktop Chrome; set `APP_URL`, `PREFIX` and `SITE_ORIGIN` for assembled/public scopes. Gallery checks compile all inline scripts, preserve every old entry/category and exercise both old/new search results.
