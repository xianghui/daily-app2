# Dough Atlas

A formula-preparation utility for small bakeries. Rough ingredient names are a repeatable reconciliation bottleneck: local semantic inference proposes catalog identities, humans verify them, then deterministic arithmetic solves a target-mass/target-hydration dough formula.

## Workflow

1. Load **Milk loaf** or **Enriched buns** (synthetic fixtures), paste source JSON, or import a source/audit `.json` file.
2. Set `targetGrams` and `targetHydrationBP` in the source. Supply 2–8 ingredient profiles with `id`, `label`, `description`, `flour` and `waterBP`. `waterBP=8700` means 87% water by mass. Exactly one non-flour profile must be pure water (10000).
3. Supply 1–40 records with unique `id`, descriptive `note`, integer `grams` and `owner`. Source schema is illustrated by the editable examples in `src/core.js`.
4. Explicitly load AI. Review each proposed identity, its cosine-ranked source descriptions and weight. Correct selections, add evidence notes and approve or hold each ingredient. Pending reviews block application; holds block a recipe but remain exportable. Undo reverses the last 100 review edits.
5. Apply reviewed ingredients. Examine the whole-gram formula, exact target total, actual rounded hydration and its deviation. Infeasible hydration, missing flour and duplicate water records produce explicit blockers instead of a partial formula.
6. Download current JSON, CSV or Markdown, or copy the checklist. Edits invalidate exports until reapplication. Reimporting an audit intentionally restores **originals only**, requiring new AI and review, not trusted historical approvals.

JSON includes every original/review and the full plan or blockers. CSV includes every source record and any new `calculated-water` addition. Formula-like text is prefixed with an apostrophe; numeric fields stay numeric. Markdown contains the formula and complete source-linked reviews. A no-water source gets a distinct calculated-water line; it is never presented as an original ingredient. At most one approved pure-water record is allowed; consolidate duplicate source water notes first.

## Real AI, runtime, licenses and requirements

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, mean pooling, normalized 384-dimensional embeddings. Description-to-note cosine ranking is the AI-driven step; no model output is hard-coded.
- Browser runtime: `@huggingface/transformers` **4.3.2**, Apache-2.0, with ONNX Runtime Web (MIT). Worker bundled by Vite; runtime factory served locally. Model repository revision follows the runtime's default main; upstream changes could alter results. See package-lock.json for resolved dependencies.
- First explicit run downloads approximately **23 MB model/tokenizer** from Hugging Face and its CDN (`huggingface.co`, `hf.co`, `xethub.hf.co`), plus **27 MB WASM** from the same GitHub Pages origin. Initial app assets add about 0.9 MB. No model-host downloads before the button is pressed.
- CPU/WASM path, no WebGPU requirement, API key, backend or mandatory paid service. Requires modern browser WebAssembly SIMD, module workers and several hundred MB free memory. Tested in desktop Chrome headless with GPU disabled, not all browsers or physical phones.
- Worker batches four texts, context bounded to 256 tokens. Notes/descriptions ≤300 characters; source ≤40,000 characters; import envelope ≤2 MB. Masses 1–1,000,000 g; target 100–1,000,000 g; target hydration 10–200%. 180-second timeout, actionable errors, cancellation terminates the worker. Model, worker and runtime failures never switch to canned or heuristic output.
- Cache API stores the worker, factory, WASM and model downloads. Tested offline scope is **fresh-worker inference in an already-open warmed page**. Offline reload/startup is NOT promised. Disabled storage/cache eviction requires internet again. Clear site data in browser settings to remove cached assets.
- To avoid duplicating 26,861,777 runtime bytes in this collection, Vite reuses immutable same-origin `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that older build. App code and worker are local; asset hashes are checked before/after publication.

## Privacy and data flow

Only assets download. Input notes and review data remain in browser memory; default inference does not upload them or automatically save them. No remote AI integration or credentials are used. Downloaded artifacts are user-initiated local files. Imported instructions are embedded as plain data, not executed or given tool authority. Run tokens guard stale file reads and worker messages; cancelled or replaced inputs cannot overwrite newer work.

## Deterministic formula and limitations

Flour uses the conventional baker denominator; its **native moisture is excluded** (`flour=true` requires `waterBP=0`). Other water fractions must come from user-verified ingredient composition. Example milk/egg/butter fractions are illustrative assumptions, not measurements. Model ranking cannot authenticate ingredients, detect allergens or supply nutrient/composition values. Unrelated notes still get a nearest match and require holding or an added profile.

Exclude original pure-water mass from non-water mass M. Let F be total flour and W the modeled water carried by non-water ingredients, h be target hydration as a ratio, and T be target dough mass. Solve:

- non-water scale `s = T / (M + hF − W)`
- pure-water addition `s(hF − W)`

A negative required addition is infeasible; raise hydration or revise the wet ingredients. This preserves non-water ingredient ratios **before rounding**. BigInt rational arithmetic and largest-remainder apportionment produce whole-gram masses summing exactly to T. Ties use original order, with any generated water line last. Actual rounded hydration and deviation are recomputed, not asserted equal to the target. A tiny target that rounds away all flour is blocked. Zero-gram planned lines remain visible.

The baseline is original added-water-only hydration; the AI-reviewed composition-aware original hydration includes milk/egg/butter water. This is a bookkeeping comparison, not measured savings, accuracy or better baking performance. Scaling does not model absorption, flour protein, fermentation, salt effectiveness, mixing losses, temperatures, food safety or baking results. Not a mixer control or production instruction service.

## Build and publication

React + Vite, base `/daily-app2/20261113-17/`.

```sh
npm install
npm run predeploy
```

Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are present. **Do not invoke per-app deploy for this collection.** Publish with root `npm run predeploy` then root `npm run deploy`, preserving the complete gallery and other apps. The root README describes legacy Pages build verification.

## Validation

See [VALIDATION.md](VALIDATION.md) and observed JSON reports. Browser tests use the production bundle, real MiniLM inference for all successful workflows, and synthetic fixtures only. Fault injection is confined to defensive tests. Independent Python Fraction-oracle tests check 3,000 formulas; downloaded artifacts are reopened using Python's CSV/JSON parsers. Full browser tests run locally, in the assembled collection and at the public URL before completion. Not tested: physical baking, physical phones, offline page startup, all browsers, or arbitrary-recipe identification quality.
