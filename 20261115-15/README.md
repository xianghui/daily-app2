# Station Loom

A paced-work balancing desk for small workshop line leads. A **reviewed planning worksheet**, not a production release or time measurement.

## Workflow

1. Paste/import JSON or try **Lamp workshop** / **Seed packet bench**. Supply distinct method cards, their standard seconds/prerequisites, rough task notes and cycleSeconds.
2. Explicitly click **Load AI & match tasks**. Real browser embeddings compare every note to every method definition. The nearest card is proposed and its supplied timing retrieved. No timing or prerequisite is inferred from text.
3. Verify identity, complete method, timing and prerequisites. Correct the card or seconds; approve or hold each note. Identity/time edits reset approval. Undo reverses review changes. Edit cycle/prerequisites in source and rerun. Originals remain intact.
4. Apply the reviewed worksheet. Duplicate approved cards, missing approved predecessors and indivisible tasks longer than the cycle block the plan. Exact subset optimization minimizes station count then total squared idle seconds. Compare source-order topological next-fit on identical approved tasks.
5. Download current applied JSON, complete review CSV, approved Stations CSV or Markdown; copy the handoff. Every edit disables exports until reapplication. Importing an exported JSON restores originals only, not old approvals.

## Real AI / static hosting

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX, normalized mean-pooled 384-dimensional embeddings. English descriptions recommended.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT; WASM CPU, no WebGPU or server requirement. 256-token cap, four texts per batch. Semantic matching replaces exact-name lookup, not human verification. Similarity is not confidence or equivalence.
- Immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`. Preserve originating app.
- Combined deployment shares byte-identical 26,861,777-byte WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve its originating app. Public and combined asset audits verify the actual dependency bytes.
- Approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus app/worker JS, downloaded on explicit loading. Internet/Hugging Face CDN access required initially; no keys, paid service, remote inference provider or optional provider integration.
- WebAssembly SIMD, module workers, Cache API for offline reuse and several hundred MB free RAM. Actual desktop Chrome CPU inference tested with GPU disabled. Physical phones/other browsers/low-memory performance unverified; responsive emulation is not device qualification.
- Download progress and batch counts displayed; cancel terminates the worker. Runtime/worker/model/network failures and a 180-second timeout give actionable errors, not canned results. Retry starts a new run. IDs guard input/file/download/message races.

## Privacy / caching

Only public model/runtime file GETs leave the browser. Task text stays in the local Web Worker; no analytics, user-content uploads, shared credentials or content persistence. Imported instruction-like strings are embedding data, with no tool authority. Export downloads contain only what the user chooses to export.

Cache API stores public worker/model/runtime assets, not task data. After a successful online run, fully offline **fresh-worker inference in an already-open warmed page** is tested. Offline startup/reload is not promised. Cache eviction/private browsing can require redownload. Model weights use the shared worker's public model revision; this utility does not pin a new revision.

## Source schema / bounds

```json
{
  "cycleSeconds": 10,
  "cards": [
    {"id":"frame","label":"Assemble frame","description":"Assemble the metal lamp housing","seconds":6,"after":[]},
    {"id":"inspect","label":"Inspect frame","description":"Check the assembled lamp frame for scratches","seconds":4,"after":["frame"]}
  ],
  "records": [
    {"id":"T1","description":"Put the metal desk light housing together"},
    {"id":"T2","description":"Check the assembled metal housing for scratches"}
  ]
}
```

2–12 cards, 1–12 notes; unique IDs per array, 1–40 characters. Labels ≤100 characters, descriptions ≤300. Seconds and cycleSeconds are integers 1–3600. `after` contains unique known card IDs, no self references/cycles. Source ≤40,000 characters. `.json` import ≤2 MB, including audit envelope with `originalInput`; extracted originals must meet the source bounds. Embedding results require the exact count of finite normalized 384-dimensional vectors.

## Deterministic planning

One repetitive cycle, each approved card appears once. Tasks are indivisible. Stations are identical, sequential, and can do all tasks. No tools, travel, setup, zoning, ergonomic, simultaneous-operation, learning, machine or staffing constraints. No external production changes. Prerequisites may execute earlier inside the same station or at a prior station. Missing/unapproved cards are prominently labeled incomplete scope. Holding a predecessor requires holding dependents or restoring it; all-held produces a zero-work incomplete worksheet, never a complete line plan.

For every completed-task subset, enumerate remaining task subsets fitting the cycle whose prerequisite union is contained in completed plus proposed tasks. A dynamic program minimizes station count, then sum of squared idle seconds, reconstructing a topological order inside each station. At 12 tasks, at most 3^12 subset combinations. Baseline: repeatedly choose the earliest source-order ready task, open the next station if it will not fit; no look-ahead to another ready task. Workload-only lower bound is ceil(totalSeconds/cycleSeconds), ignoring precedence. The exact planner may legitimately equal the baseline; differences are scenario counts, not measured productivity or AI accuracy.

## Exports

JSON `schemaVersion:1` includes all `originalInput`, ordered `reviews`, every assignment including holds, `missingCards`, approved/held counts, exact and baseline stations with sequential task start/end offsets, total seconds/lower bound and scope. CSV contains every source task and multiline review note. Stations CSV contains each approved task once with station load/idle and offsets; held tasks remain in the audit CSV/JSON. Markdown contains full reviewed notes and run sheet. String cells beginning with spreadsheet-formula characters receive an apostrophe in CSV only. Standard CSV quote/comma/newline escaping; JSON is lossless. Artifacts reflect current applied review, not defaults.

## Validation / known limitations

See VALIDATION.md and JSON reports. Synthetic data only. Two simple known-answer fixtures do not establish general accuracy. Closest-card matching always chooses something, even for irrelevant notes or near-identical method steps. The maximum-batch fixture deliberately has similar definitions and is manually corrected before planning. Mandatory review is essential. Whole-second standards are assumptions, not AI measurements. Literal full-ID/label matching is a coverage baseline, not semantic accuracy. A small exact solver cannot represent real factory constraints beyond those explicitly documented.

## Build / publish

React + Vite, base `/daily-app2/20261115-15/`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` and gh-pages dependency retained. **Publish only through the root combined-site workflow**, never the individual deploy. `node serve.cjs` serves production source builds at port 6892; `COMBINED=1 PORT=6893 node serve.cjs` serves assembled deployment. Shared originating apps must remain published.

The root deployment also extends its existing byte-verified geometry WASM reuse to older app `20261030-18` to stay under the 1 GB guard; source builds are unchanged, and its real worker/import/STL export is regression-tested. This is deployment maintenance, not Station Loom functionality.
