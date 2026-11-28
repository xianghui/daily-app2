# Stringscale Desk

Local-AI plain-string gauge review for **instrument-workshop coordinators**. It turns informal material handoffs and supplied catalogs into an auditable set worksheet: semantic material retrieval → human identity/measurement review → offered-gauge selection → total modeled string-load check → actual exports. This is not a chat wrapper, tuning analyzer or instrument controller.

## Workflow

1. Choose **Nylon & steel** or **Fluoro & gut**, paste JSON or import a `.json` source/audit ≤1 MB. All shipped fixtures are synthetic. Edit catalogs, per-string constraints and `totalCapN` in the source.
2. Explicitly **Load AI & match profiles**. No model-host request occurs before this action. Observe download/chunk progress; cancel or retry using the same controls.
3. Inspect every material description and cosine score (similarity, **not confidence**). Correct the profile, density, speaking length, fundamental, tension band or old diameter. Numerical/profile edits require reapproval. Add multiline review notes; approve or hold every record. Undo retains 30 edits.
4. **Apply reviewed worksheet**. Complete JSON/CSV/Markdown preserve every original, held and infeasible row. Gauge CSV unlocks only if every row is approved and feasible and the modeled set total is within the supplied cap. Any edit invalidates exports. Copy uses the current applied Markdown.
5. Audit reimport restores **original inputs**, not past approvals. State remains in memory: export before closing.

## AI model, runtime and limits

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 quantized ONNX; normalized mean-pooled 384-dimensional sentence embeddings. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread CPU WASM/module worker.
- AI embeds only material descriptions and notes, then ranks supplied profiles by cosine. It materially reconciles informal terminology with catalog data; density/gauges are copied from supplied data, never generated. Vector count/dimension/finite values/normalization are checked. Calculations, decisions, guards and exports are deterministic. There are no canned model responses or fake fallbacks.
- First explicit load ≈50 MB: ~23 MB model/tokenizer from Hugging Face/CDN + ~27 MB same-site runtime. Internet required initially. Upstream `main` is used; observed resolved model revision is in browser request paths, not promised immutable.
- Current WebAssembly SIMD/module-worker browser and sufficient free memory required; no WebGPU, API key, account or paid service. Desktop Chrome with GPU disabled tested. Physical phones, low-memory hardware and other engines unverified.
- 2–8 profiles and 1–12 records, ≤20 texts in chunks of four; notes/descriptions ≤200 characters. The inherited tokenizer context applies; the worker's pipeline max_length option is not advertised as a separately enforced token limit.
- Run identities, abortable worker fetch, terminated cancelled workers, asynchronous import identities, visible network/runtime/schema failures and 180-second timeout. A failure never supplies deterministic demo classifications. Imported instructions are inert data and cannot ask for credentials or grant tool authority.

## Static assets / privacy / offline scope

Code/CSS are bundled locally. Shared immutable same-origin dependencies (preserve their originating apps):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

`runtime-provenance.json` records exact bytes/hashes. Inspected protocol: `{id,texts}` → progress/batch/error or `{id,type:'result',vectors}`. The worker explicitly caches WASM factory/binary; app caches worker source; Transformers.js caches model assets. Sharing avoids duplicating ~27 MB per app.

**User content stays on-device.** Only GET downloads occur on the default path; no analytics, remote inference, optional provider, credentials, instrument APIs or uploads exist. Downloading weights is not sending notes. Persisted network reports omit signed CDN query values. Built-text credential-pattern scans supplement manual integration review, not exhaustive secret detection.

Tested offline scope: after successful online inference, terminate the worker, disable all network, create a fresh worker and run real inference in the **same already-open warmed page**. Offline navigation/reload is not supported or claimed; no service-worker shell. Cache eviction/disabled storage requires internet again.

## Source schema / output

`{title,totalCapN,profiles,records}`. Source ≤30,000 characters; import envelope ≤1 MB; `title` 1–100 chars. Unique simple table IDs `[-A-Za-z0-9_]{1,24}`. `description`/`note` 1–200 chars. No forbidden controls or broken Unicode. Review notes ≤1,000 chars.

Profiles: `id`, `description`, `densityKGm3` (500–20,000 integer kg/m³), `gaugesMM` (2–12 distinct offered diameters, .05–3 mm in .01 steps). Only plain, homogeneous, circular cross-sections are modeled. Use actual supplier data, not these illustrative densities/gauges.

Records: `id`, `note`, `lengthMM` (speaking length 50–1,500 integer mm), `frequencyHZ` (20–2,000 Hz, .01 steps), `targetMin`, `targetMax`, `preferredN` (1–300 N, .01 steps; min ≤ preferred ≤ max), `currentMM` (.05–3 mm, .01 steps). `totalCapN` 1–3,600 N in .01 steps. This is the total of the entered strings; omitted strings are not included.

JSON retains source, reviews, candidates, every offered-gauge calculation and current summary. CSV quotes all fields, doubles quotes and uses CRLF; multiline text survives. Formula-like string fields starting `= + - @ tab CR` receive an apostrophe, including multiline fields; genuine numeric values remain numeric. Markdown is copied/downloaded text, never rendered imported markup. Gauge CSV is a planning artifact, never machine instructions.

## Deterministic objective and baseline

For an ideal flexible homogeneous string:

`linear density = densityKGm3 × π × (diameterMM/1000)² / 4`

`tensionN = (2 × lengthMM/1000 × frequencyHZ)² × linear density`

For each reviewed string, enumerate only offered gauges, retain those within its tension band, minimize absolute distance from preferred tension, and break ties toward thinner diameter. Full precision drives feasibility and exports; displayed numbers are rounded. No offered feasible gauge means blocked. After selection, sum ALL records (including holds); require the complete selected total ≤ supplied cap for Gauge CSV.

This is **per-string optimization plus a whole-set guard, not a global constrained rebalancing solver**. A cap failure blocks export even if other lower-tension offered combinations could fit; revise targets explicitly. No hidden retargeting. Baseline preserves the old diameter on the same reviewed material/length/frequency; report catalog/band violations and baseline total, not invented time or accuracy gains. Tiny fixtures each have one old-gauge violation. Selected totals are about 134.6755 N and 113.6725 N.

## Limitations

Similarity always proposes a nearest material, including irrelevant/negated notes. The negation challenge retrieves the explicitly rejected nylon profile; human review is mandatory. Four simple fixture matches do not establish general classification accuracy.

No wound/composite strings, stiffness correction, creep, humidity/temperature adjustment, knots, break strength, sound-quality prediction, tuning measurement or structural analysis. Total axial string tension is NOT bridge downforce or a safety limit. Actual instrument/supplier guidance and an instrument maker's review are required independently. No physical installation trials, purchases, external actions or instrument controls.

## Build / validation / publishing

React + Vite, base `/daily-app2/20261128-14/`. `npm install`, `npm run predeploy`. Required per-app gh-pages/scripts retained; **publish through repository ROOT only** to preserve the combined gallery.

Checks: `node core-test.mjs`; `python3 serve-test.py`; `node browser-test.cjs`; `node defensive-test.cjs`; `node recovery-test.cjs`; `node model-cancel-test.cjs`; `node import-race-test.cjs`; `node input-guard-test.cjs`; `python3 artifact-test.py local-`; `node asset-audit.mjs`; gallery scripts. Set APP_URL/PREFIX/SITE_ORIGIN/GALLERY_URL for assembled/public bundles. Independent Python Decimal checks use mass-per-length physics and independently parsed CSV downloads. See VALIDATION.md for observed outcomes and untested scope.
