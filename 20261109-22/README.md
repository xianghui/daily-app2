# Assembly Ledger

A local-AI bill-of-materials review desk for makers preparing nested kits and short production runs. Rough descriptions often differ from catalog names; an incorrect link multiplies through subassemblies. Real MiniLM embeddings retrieve likely components, then a human-reviewed graph expands build demand into a stock-aware raw-parts buy list.

## Workflow

1. Load either synthetic example or paste/import JSON. Specify catalog parts, nested component lines and demand. Edit stock and quantities in the source before running.
2. Explicitly choose **Load AI & match components**. Inspect source descriptions, proposed catalog descriptions and all cosine-ranked candidates. Verify specifications and units yourself.
3. Correct links, add notes and approve or hold **every** line. Changing a link resets its approval. Undo restores the last review edit. Originals remain untouched; each edit invalidates the applied export.
4. Apply reviewed BOM. Approved cycles anywhere in the graph block the plan. Approved links produce components-first build quantities and consolidated raw requirements. Raw stock is netted once across all assembly demand. Only raw stock is supported; assemblies must have stock zero.
5. Held demanded branches are explicitly unresolved. These exports are marked **PARTIAL PLAN**, quantities are lower bounds and are not a complete procurement list. Unreachable held lines remain in the audit without falsely marking demanded branches unresolved.
6. Download JSON (complete original input, AI evidence, review layer, quantities and unresolved branches), CSV (every BOM line) or Markdown (buy/build/review handoff), or copy Markdown. Reimport the JSON audit restores original input; rerun AI and review again. No files move, stock changes, orders or external actions.

## Input schema and limits

```json
{
  "title": "Synthetic kit",
  "parts": [
    {"id":"kit", "text":"Writing kit", "kind":"assembly", "stock":0},
    {"id":"pen", "text":"Blue ink ballpoint pen", "kind":"raw", "stock":2}
  ],
  "lines": [{"id":"L1", "parent":"kit", "text":"Ballpoint writing pen", "quantity":3}],
  "demands": [{"part":"kit", "quantity":4}]
}
```

1–10 catalog parts, 1–16 BOM lines, 1–8 demand entries; unique IDs per parts/lines collection; 40-character IDs, 100-character title, 400 characters/description. Every assembly needs at least one BOM line. Parent/demand IDs must exist. Raw stock integer 0–1,000,000; line quantity integer 1–100, demand integer 1–1,000. Repeated demand entries sum. Duplicate component lines intentionally add (do not use duplicates unless intended). Expanded part quantities capped at 1 billion. Workflow payload 50 KB, JSON audit import 1 MB. CSV/PDF import unsupported. No conversion between units, scrap, lead times, assembly stock, substitutions, cost optimization or manufacturing safety checks. Each ID must represent exactly one item and one consistent quantity unit.

## What AI does

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 model license; quantized q8 ONNX.
- Runtime: `@huggingface/transformers` **4.3.2** (Apache-2.0) with ONNX Runtime Web (MIT). WASM CPU, one thread; normalized mean-pooled 384-dimensional embeddings. Four texts per batch, truncation at 256 tokens.
- Rank candidate catalog parts by cosine similarity to each line, excluding its own parent. Model outputs must contain exactly one finite 384-number vector per source description. Similarity is not confidence, compatibility or entailment.
- Deterministic validation, cycle detection, topological demand accumulation, multiplication, consolidation, stock deduction and export follow human review. No canned model responses, heuristic fallback, generation or external AI service.
- English intended. Negation, specialist part numbers, mixed descriptions and tiny technical differences can fail. The synthetic negation challenge still picked the explicitly unwanted pen. Human verification is mandatory. Tiny fixture results are not universal accuracy claims.

## Downloads, devices, privacy and offline scope

Before loading, the UI discloses approximately **50 MB first download**: ~23 MB model/tokenizer from `huggingface.co` and its `*.hf.co` delivery hosts, plus 26,861,777 bytes of same-origin WASM. App code, worker and factory are bundled in this static app. The byte-identical immutable binary is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older build during collection deployment. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.

Current browsers with module workers, WebAssembly SIMD and sufficient memory are required. WebGPU and API keys are not required. Desktop Chrome was tested; physical phones/other engines and screen-reader use were not. Responsive layouts were tested at 320/390px.

Model files download; **user content never uploads**. Text goes to a local module worker via `postMessage`. No keys, analytics, server endpoints, optional providers or persistence of input content. Imported text is data, not tool instructions. Exported audits can contain the user's inputs; save/share appropriately.

Cache API caches worker source, WASM factory/binary and model assets. After one successful online run, actual inference with a fresh worker was tested under fully offline network conditions in the already-open production page. **Offline reload/navigation/app-shell startup is not promised.** Storage eviction/private mode can require another download; clear site data to remove caches. Progress includes file downloads and embedded-description counts. Cancel terminates the worker; input changes invalidate run identity and pending file reads. Timeout at 180 seconds, explicit network/runtime/schema errors and retry; never silently substitute fake AI.

## Comparisons and validation

Exact-description catalog lookup is the simple baseline. The UI computes AI and baseline agreement against approved review, not independent accuracy. Gross raw units (ignoring-stock baseline) vs net buy after stock is a computed accounting comparison; unlike units are added only for reconciliation, not cost/time savings. Source row counts and held/unresolved branches remain explicit.

See [VALIDATION.md](VALIDATION.md), fixture JSON exports, `browser-validation.json`, `artifact-validation.json`, `core-test.log`, `asset-audit.json` and public publication reports. Tests run against the actual Vite production bundle, including real default-model inference on two different inputs; defensive fault injection is distinguished from real inference.

## Build and collection deployment

```sh
npm install
npm run predeploy
```

React + Vite; base `/daily-app2/20261109-22/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages installed. **Publish only through the ROOT** `/Volumes/ExternalHD/daily_app2` workflow (`npm run predeploy`, `npm run deploy`) so the gallery and older apps remain intact. Do not use the per-app deploy command to publish this collection.
