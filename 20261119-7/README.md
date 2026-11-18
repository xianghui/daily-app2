# Balance Bay — 20261119-7

A local-AI worksheet for exhibit and demo-counter planners reconciling informal prop notes to a weighed inventory, then reviewing a mass-weighted layout and optional one-prop moves. Not a structural or tipping-safety calculator.

## Workflow

1. Select a synthetic example or paste/import source JSON. Define deck width/depth, target center rectangle, inventory profiles with measured unit masses and individual prop descriptions with x/y center coordinates.
2. Read download/device information and explicitly load AI. The real neural embedding model matches each informal description to the nearest supplied inventory profile; the profile's mass is copied deterministically.
3. Inspect cosine evidence and source snippets. Review/edit identity, actual mass, center and multiline notes. Every record requires approve or hold. Holds block the full calculation rather than silently dropping mass. Up to 100 review edits can be undone.
4. Apply the reviewed layout. Compare Σ(mass × position)/Σmass with a baseline weighting each prop equally. Inspect the target rectangle and independent one-prop repositioning alternatives sorted by center displacement.
5. Optionally stage ONE proposed move into review, approve it and apply again. Staging invalidates the old result/export. Moves are not combined automatically. Nothing physically moves.
6. Download complete JSON, CSV or Markdown or copy the worksheet. Exports reflect the last applied, current review; any edit disables stale exports. Reimport an audit to recover ORIGINAL input only; AI and approvals must be renewed.

## Input and output

Units: kg and cm; same reference frame for every center. One observation = one prop, including repeated inventory identities. Input JSON shape is demonstrated in `src/core.js`: `context`, `deck:{width,depth}`, `target:{xMin,xMax,yMin,yMax}`, `items:[{id,label,description,mass}]`, `observations:[{id,description,x,y}]`.

Limits: 2–8 inventory profiles; 1–24 props; 1–300 characters per description/label/context; unique alphanumeric/dash/underscore IDs up to 40 characters; 50,000 source characters; .json imports under 2 MB including audit envelopes. Deck dimensions 1–1000 cm, centers inside deck; target has positive width/depth inside deck. Mass 0.01–10,000 kg per prop. Four-text inference chunks, at most 32 texts; runtime tokenizer model_max_length 512. Pipeline supplies max_length=256 but the inherited feature-extraction pipeline's actual tokenizer ceiling is 512, so no stricter token promise is made. Short character limits bound practical context.

JSON schema `balance-bay/v1` retains original input, every review/evidence/note, held counts, status, current centers and independent proposed alternatives. CSV is one row per original, with original positions, current identity/mass/positions/decision/note and optional candidate coordinates/distance. Text cells are quoted and leading spreadsheet formula characters are escaped; numeric values remain numeric. Markdown includes current composition, baseline, all alternatives, every original/review and follow-up checklist. Proposed coordinates are NOT applied coordinates.

## Real AI, license and static runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, about 23 MB including tokenizers. English semantic similarity; 384-dimensional normalized mean-pooled neural vectors.
- Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web WASM CPU (MIT), approximately 27 MB WASM plus bundled JavaScript. No WebGPU required and no server inference.
- Immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/assets. This app bundles its React/UI assets locally and reuses that tested embedding-only runtime to avoid duplicating large dependencies.
- Browser module workers, WebAssembly SIMD, Cache API and several hundred MB available memory required. Current desktop Chrome CPU tested. Physical phones, Safari/Firefox/Edge and constrained devices not verified. Phone-width UI tests are not physical-device inference tests.

Cosine nearest-neighbor matching proposes identity, NOT confidence, mass measurement, verification or geometry extraction. Irrelevant or negated text still gets a nearest neighbor; hold it. Subsequent mass lookup, numeric/schema validation, center calculation, equal-prop baseline and rectangle-intersection/projection optimization are deterministic. No hard-coded AI answers, hidden server or fallback heuristics.

## Privacy, downloads and offline scope

No API key, external provider integration, paid service, account or telemetry. Inference sends text only to the local worker. Network traffic consists of same-origin app/runtime files and explicit model downloads from Hugging Face and its CDN hosts; user content is not uploaded. Source/reviews stay in memory unless the user downloads/copies them. Imported instructions are text data and confer no authority.

First load needs internet. Model progress, processed-text counts, cancellation and a 180-second timeout are shown. Cache API stores worker/runtime and model assets; cache eviction/private mode/storage restrictions may force another download. Fully offline FRESH-WORKER inference is tested only in an already-open, warmed page. Offline reload, app-shell navigation, permanent cache retention and every browser are NOT promised. Cancel terminates the worker; run IDs guard fetch/import/result callbacks against stale overwrite. Failures clear outputs and offer explicit retry, never fabricated suggestions.

## Deterministic method and limits

Mass-weighted center uses measured prop-center coordinates. For each potential single move, transform the desired center rectangle into the moved prop's feasible-coordinate rectangle using total mass / prop mass, intersect with the deck, then project the existing point to the nearest feasible point. The shortest resulting Euclidean displacement is minimal among these one-prop point-center scenarios. A 1e-8 cm numerical tolerance handles floating-point boundary intersections. This is not multi-prop global layout optimization. If already within target, no move is suggested; if no single move can reach it, edit multiple props manually and reapply.

No inferred or certified safety: no center height, support reactions, base geometry, collisions, footprint overhang, friction, dynamics or measurement uncertainty. Include a weighed base as a separate prop if relevant. A center inside the chosen rectangle is a composition condition, not a stability guarantee. No remote actions, purchases, equipment control or physical moves.

## Development and deployment

`npm install`; `npm run predeploy`. Vite base `/daily-app2/20261119-7/`. Per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but publish ONLY through repository ROOT `npm run predeploy` / `npm run deploy` to preserve the collection.

See [VALIDATION.md](VALIDATION.md) for actual observed checks and limitations. All fixtures are synthetic; no private content or provider credentials are included.
