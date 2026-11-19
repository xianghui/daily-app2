# Richness Field — reviewed equal-effort survey comparison

For community nature-survey coordinators who receive inconsistent organism-group names in count sheets. AI reconciles labels against a supplied register, not photos or biological taxonomy. Reviewed counts then support exact individual-based rarefaction, unlike quota audit sampling or semantic-diversity selection.

## Workflow and formats

Choose Garden pollinators or Pond organisms, paste JSON or import a source/audit `.json`. Supply a context, 2–8 canonical `groups` (`id`, `description`), 2–4 `sites` (`id`, `description`), a positive integer `draw`, and 1–16 `logs` (`id`, `site`, `groupText`, `count`). Counts are disjoint observed individuals, not repeated sightings. Use comparable methods and group granularity. Set goals and limits by editing the JSON.

Click **Load AI & reconcile inputs** explicitly. Inspect ranked source-group cosine evidence. Edit group/site/count, approve or hold every row, add multiline notes. **Apply reviewed plan** computes a snapshot; any subsequent review edit disables exports until reapplied. Undo restores the preceding review state. A held row, missing site evidence or common draw greater than any site total blocks comparison rather than silently changing denominators.

Download complete JSON (originals, reviewed rows, status, per-site calculations and every group's count/detection), spreadsheet-safe audit CSV (all rows, originals and edits), or Markdown worksheet (all sources/reviews and results). Copy exports the current Markdown. JSON reimport restores originals only, requiring fresh AI and human review. No external actions. Data stays in volatile memory; download before closing. CSV protects formula-like text with a leading apostrophe; JSON preserves it exactly.

## Real local AI and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8; [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU single-thread. Real neural 384-dimensional normalized mean-pooled embeddings reconcile informal group labels. No hard-coded classifications or heuristic fallback. Similarity is not confidence, identification or proof of taxonomic equivalence. The closest group may be irrelevant or negated; mandatory review/hold is essential.

Preserve the same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Reused to meet collection size limits. The worker accepts `{id,texts}` and emits progress, four-text batches, vectors or errors. Finite normalized 384-dimensional vectors and exact count are validated before matching. The tokenizer's actual model ceiling is 512 tokens (the feature pipeline's `max_length:256` is not a stricter guaranteed cap); descriptions are additionally bounded to 300 characters. No model generation or tool execution is involved.

## Download, privacy, caching and devices

First explicit load needs internet: about 23 MB model files from Hugging Face/CDN plus 27 MB CPU runtime and local JS. Progress, cancellation, retry and 180-second timeout are shown. No WebGPU required; CPU WASM is the default tested path, not an untested fallback. Requires module workers, WASM SIMD, Cache API and several hundred MB RAM. Headless desktop Chrome/macOS with GPU disabled tested; 320/390px UI widths tested, not physical phones. Other browsers/devices unverified.

Only static GET downloads occur: user text is never in request URLs or bodies. No analytics, shared keys, provider integration or backend. Cache API stores model/runtime downloads, not input data. A fresh worker in the already-open warmed page was tested with all network disabled. Offline app navigation/reload is **not promised**. Eviction/private storage requires redownload. All data can be lost on page close. Worker/fetch/file-read run identities and cancellation guard late results; unsupported runtime/network/malformed output/timeouts return actionable errors with no fabricated results.

## Deterministic method and limits

For site N individuals, group count n, common draw k without replacement: detection = `1-C(N-n,k)/C(N,k)`. Expected richness sums detection across groups. Stable log-products avoid huge combinations; absent groups contribute zero and guaranteed detections one. The baseline is observed groups at each full (potentially unequal) sample size, not a guessed accuracy or time saving. Expected richness cannot exceed observed richness; no counts or rows are lost. No ranks or automatic habitat-quality decisions.

Source ≤50,000 characters; file ≤2 MB (separate audit allowance); descriptions/context 1–300 characters; IDs unique alphanumeric/underscore/hyphen ≤40 characters. Each tally count integer 1–10,000, up to 160,000 overall; common draw integer 1–160,000, no larger than each reviewed site. At most 24 model texts in chunks of four; notes ≤1,000 characters. Unknown formats, empty/invalid/oversized data, duplicate IDs and invalid numeric fields are blocked. Imported instructions remain inert data.

This interpolates observed individual counts, not unseen species, sample completeness, future discoveries or habitat worth. Assumes disjoint individuals, comparable methods and consistent taxonomic resolution. No confidence intervals, abundance estimation, detection-bias correction or conservation certification. Synthetic coarse-group examples are deliberately simple, not species-identification benchmarks.

## Build and publication

`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261119-15/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` are retained, but publication must use the **root combined workflow**. See [VALIDATION.md](VALIDATION.md) and machine-readable browser, defensive, artifact and arithmetic reports for actual outcomes and limits. Public release requires successful Pages build plus public inference/runtime byte audits.
