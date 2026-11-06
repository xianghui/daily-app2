# Test Loom

A local-AI regression planning desk for release coordinators. Paste/import release changes and a regression-test catalog, set a testing budget, match descriptions with actual in-browser embeddings, review selected/deferred tests and durations, apply the reviewed plan, then export a complete QA handoff. This is not a test runner and never contacts the system under test.

## Run/build

```sh
npm install
npm run dev
npm run predeploy
```

React + Vite; base `/daily-app2/20261106-21/`. The per-app `deploy` script is retained for the collection contract but **publish only through the root combined-site predeploy/deploy**. App publication must not replace the collection. No API credentials or server are used.

## What AI does

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX weights, MIT. Derived from [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), English-focused sentence embeddings. Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT) run it on WASM CPU in a dedicated worker.
- Every change/test description is embedded, normalized and mean pooled. Each embedding must contain 384 finite numbers. Batch size is four descriptions; at most 50 descriptions per run. Context is truncated to 256 tokens; keep descriptions short (400-character input limit is separate from token limit).
- AI connects paraphrases beyond exact keyword matches. No hard-coded sample model responses, generated text or heuristic fallback exist.
- Subsequent deterministic steps: cosine matrix; threshold filter; choose tests by highest **new priority-weighted coverage per minute**, breaking ties by input order, until nothing improves coverage within budget. Greedy selection is not a global optimum. Duration is user-supplied, not measured.
- Comparison: catalog-order first-fit baseline uses original durations, the same budget and the same semantic links. Displayed coverage/weighted coverage and minutes are computed, not accuracy, measured saved time or invented confidence percentages. Baseline selection does not use AI ranking; its coverage evaluation does use the shared semantic matrix.

## Workflow, limits and formats

1. Try either entirely synthetic release fixture or paste/import CSV with exact ordered headers:
   - Changes: `id,description,priority` (1–20 records; priority integer 1–5).
   - Tests: `id,description,minutes` (1–30 records; minutes integer 1–120).
   - Each file at most 30 KB; text at most 30,000 characters; description 1–400 characters; unique IDs per list, 1–32 alphanumeric/underscore/hyphen characters. Quoted commas, escaped quotes and multiline CSV fields supported. Unsupported file types/headers, duplicate IDs and invalid numbers are rejected.
2. Set budget (1–480 whole minutes) and cosine threshold (0.2–0.8; default 0.45). A threshold is not a confidence level. Select **Load AI & plan tests**; observe downloads/batch progress or cancel. First load needs internet.
3. Inspect every change/source/score. Check/uncheck test suggestions, edit estimated minutes and handoff notes. Undo restores the last edit (30 snapshots). Original source lists are retained. Changes to source or constraints invalidate old results and terminate the old worker; stale messages/file reads cannot replace current work.
4. Over-budget/invalid-duration reviews cannot apply. Apply the reviewed plan, then download JSON, CSV or Markdown, or copy Markdown. Every review edit invalidates the applied export snapshot.
5. JSON (`test-loom/v1`) retains all original changes/tests, all semantic links and scores, selected/deferred reviewed tests, notes, gaps, constraints and metrics. CSV retains all tests (including deferred), selections, suggested selections, minutes, linked change IDs and notes. JSON is the complete source-preserving artifact. Markdown is a selected/deferred checklist plus all change statuses. These are actual reviewed artifacts, not a live external integration; importing exported plans is not supported. Spreadsheet-formula-like CSV text is prefixed with an apostrophe; JSON preserves original strings.

## Download, privacy, cache and device requirements

- Before first inference: approximately 23 MB q8 model plus 27 MB WASM runtime (transfer compression can reduce network bytes), plus small configuration/tokenizer files and app/worker JS. Allow roughly 300 MB free memory. Exact build file sizes are in `asset-audit.json`.
- Model/config downloads originate from `huggingface.co` and its `*.hf.co` content delivery endpoints (observed host list in browser report). App JS, worker, WASM binary and WASM module factory are bundled/served under this app's static base. No runtime CDN JS or fonts are used.
- No model-host request occurs until the user starts processing. Default user content stays in page/worker memory and is never uploaded, logged or included in model download URLs. No analytics, optional provider or remote inference is implemented. No accounts or agent credentials are involved. Browser caches hold runtime/model files, not the source lists or reviewed output. Closing/reloading loses input/review state.
- Current Chrome, Edge, Firefox or Safari with Web Workers + WebAssembly, Cache API for offline caching; WASM CPU, one thread, no WebGPU requirement. Tested on actual desktop Chrome; other browsers and physical phones are untested. Small phones may be slow or fail due to memory. Failure shows an actionable error, never mock results. Worker timeout is 180 seconds; retry can use already-cached files. Model download can be cancelled by terminating the worker; partially downloaded files may need retry.
- Transformers.js caches model files. Worker source, the WASM module factory and binary are explicitly cached using Cache API where available. **Tested offline scope: fresh worker and real inference in the already-open page after a successful online run with all network disabled.** Offline app-shell startup/reopening is not claimed; there is no app-shell service worker. Browser storage eviction or private mode can require another internet download. No cache-management button is provided; clear site data in browser settings to remove downloaded assets.

## Known limitations

Semantic overlap is not actual test coverage. Negation, missing conditions, numerical requirements, domain-specific jargon and similar clinical wording can produce wrong links. At an exploratory 0.35 threshold, the clinic appointment test spuriously linked a billing change (cosine ~0.399). The more conservative 0.45 default rejects that link but is not universally calibrated. An initial inventory paraphrase scored ~0.239 and was missed; the example was clarified to explicitly name inventory reduction. This is not evidence that the model understands every inventory phrase. Keep generic descriptions specific; inspect source scores, change the threshold or reject unsuitable tests. Missing tests remain gaps—no test cases are fabricated. A release must never be approved solely from these counts.

The plan assumes independent, sequential tests. It does not model test prerequisites, shared setup, staff availability or actual execution, and can leave unused budget after all inferred changes are covered. Include setup in estimates. Human edits can deliberately select tests without semantic links; all decisions survive export. The change map is still computed from semantic links, not a manual certification field. Model weights use the host's current revision (not a pinned content hash); observed scores can vary with future runtime/model updates. Small synthetic fixtures are not a representative benchmark.

## Validation

See [VALIDATION.md](VALIDATION.md), `browser-test.cjs`, `core-test.mjs`, browser report JSONs and export parser. Real inference is exercised on two unrelated synthetic domains and the 50-description batch limit. Fault injection is used only for defensive schema/runtime/timeout/stale-message checks, not for successful AI claims. Browser exports are reopened with Python's independent CSV/JSON parser. Public deployment checks compare production assets byte-for-byte and rerun real inference at the public URL.
