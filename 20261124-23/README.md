# Selector Desk

A local-first CSS regression handoff utility for frontend engineers and QA reviewers. Informal bug reports rarely use the element IDs found in code. Real neural semantic retrieval links those reports to a supplied element catalog, then a deliberately bounded deterministic CSS cascade produces source-linked expected-style fixtures. This is not a chat wrapper, a website inspector, or a full CSS engine.

## Workflow

1. Choose **Checkout bugs** or **Library bugs** (synthetic), paste source JSON, or import a `.json` source/audit under 1 MB.
2. Define `plans` (2–5 described elements), `rules` (1–48 ordered declarations), and `records` (1–24 reports). Each element supplies `id`, English `description`, lowercase `tag`, `elementId` (possibly empty), and up to 12 unique simple `classes`. Each rule supplies `selector`, `property`, `value`, `important`. Each report supplies unique `id`, English `context`, and `raw` property name. Edit these inputs to set the exact scenario and constraints.
3. Explicitly choose **Load AI & reconcile**. Watch model file download/progress and four-text inference chunks; cancel terminates the worker. Worker/network failures never substitute deterministic or canned AI suggestions.
4. Review the element match and actual source description, cosine rankings (not confidence), requested property, winning declaration and all matching rules. Correct the element/property, leave a multiline note, approve or hold every report. Edits invalidate applied results; element/property edits renew approval. Undo restores the preceding review. Original input remains unchanged.
5. **Apply reviewed scenario** creates an in-app result snapshot with every original report accounted for: ready, held, or blocked. Export current JSON, CSV, Markdown, or ready-only Fixtures JSON; copy the Markdown worksheet. Reimport an audit to restore its originals, not old approvals.

No website is contacted, no account modified and no code patch automatically applied. The exported fixtures are a QA handoff, not executable browser automation.

## Real AI and download/runtime requirements

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, approximately **23 MB** weights plus tokenizer/configuration files.
- Runtime: [Transformers.js](https://github.com/huggingface/transformers.js) **4.3.2**, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. Approximately **27 MB** WASM plus ~0.6 MB bundled JS/factory. First load needs internet to Hugging Face and its model-file/CDN hosts. No API key, provider account, paid mandatory service or WebGPU required.
- Mean-pooled normalized 384-dimensional feature vectors rank the report context against every element description. Count, dimension, normalization and finite-value checks precede ranking. This materially controls which actual element enters the cascade calculation; a tested context-only intervention changes the final style with unchanged rules/property.
- Immutable same-origin shared assets: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating apps. Hashes and sizes are in `runtime-provenance.json`. No runtime CDN JS is required.
- Use current desktop Chrome with WebAssembly SIMD, module workers, secure origin, Cache API and several hundred MB free memory. CPU execution is the default, not an untested GPU fallback. Unsupported Worker/WASM, construction/network/model errors, malformed vectors and 180-second timeout produce actionable errors. Other browser engines and physical mobile hardware have not been tested.
- Inputs: source ≤50,000 characters; context/descriptions ≤200 characters; raw property ≤40; reviewer note ≤2,000; file/audit envelope ≤1,000,000 bytes. Four-text model batches; underlying tokenizer's model cap is 512 tokens (not the worker's nominal max_length 256 argument, which feature extraction does not enforce). Short English contexts fit this bounded use, not long document analysis. Run identity guards cover file reads, worker fetches and messages; source changes/cancel cannot apply late output.

## CSS subset and deterministic constraints

Author declarations only, one unlayered origin. Simple compound `type#id.class` selectors, `*`, and comma lists with up to five branches. For each rule, use the greatest specificity among **matching** branches, not unrelated branches. Compare `important`, then the three-component specificity tuple, then declaration source index. Repeated classes contribute to specificity. All matching declarations and the chosen branch are exported as evidence.

Supported properties: `color`, `background-color` (#RRGGBB only), `font-size` (integer 1–200px), `font-weight` (100–900 in 100 increments), `display` (`none`, `block`, `inline`, `inline-block`, `flex`, `grid`). At most one #id per compound, no escapes or namespaces, simple bounded ASCII IDs/classes. Unsupported selectors/values are rejected. No inheritance, initial/default style prediction, shorthand expansion, CSS variables, pseudo/attribute selectors, combinators, layers, inline styles, animation, transitions, shadow trees, quirks or external stylesheets. Missing explicit declarations block a report rather than fabricate a style.

Baseline: select the last matching declaration without specificity or !important. The metrics count **computed winning-value disagreements** only among approved valid cases. This is not measured accuracy, elapsed-time savings or a performance claim. Each result retains all reports; holds and invalid properties/missing matches are explicitly omitted from the ready-only fixture artifact, not the complete audit.

## Privacy, caching and offline scope

User data stays in JS memory and the local worker; inference does not send reports, selectors, descriptions or notes to a model provider. Only documented code/model file GETs occur. No credential fields, telemetry, remote inference or supplied-key storage exist. Imported text is inert data, never tool instructions; imported HTML/CSS is not rendered. The default UI only displays escaped text.

Cache API stores worker/factory/WASM; Transformers.js caches model downloads. Browser storage eviction/private modes can require re-download. **Tested offline claim is fresh-worker real inference within an already-open warmed page**, with the entire browser context offline. Cold offline app startup/reload/navigation is not supported or claimed. Content persists only if the user exports/downloads it; model caches are not document backups.

## Formats and validation

JSON audit contains `originalInput`, `reviews`, `checks`, computed `metrics`; Fixture JSON contains complete original `rules` and ready-only cases with the reviewed element, property, expected value and winning rule index. CSV includes every report, original/reviewed property, decision/status, result and note. RFC-style double-quote/CRLF escaping and formula-leading text protection are used; JSON preserves exact strings. Markdown includes complete input and per-report review/check data using JSON string escaping. CSV formula protection intentionally prefixes risky text with an apostrophe.

See [observed validation](VALIDATION.md), executable browser/defensive/recovery/oracle/artifact tests and their JSON reports. Six simple known-answer neural links passed; a negation challenge mislinked (checkout instead of shipping). This model is not an entailment verifier: similarity ranks every description even when none fits. Human correction/holds are mandatory. The small fixture results are not general accuracy estimates.

## Development and collection publication

```
npm install
npm run dev
npm run predeploy
```

React + Vite base `/daily-app2/20261124-23/`. Per-app `predeploy` and `deploy` scripts and gh-pages dependency exist as required, but **publish the combined collection from the repository root**, never run this app's deploy script. Source/dist builds of older apps and shared runtime dependencies must remain intact. No new runtime-sharing rules or size-guard changes are needed for this release.
