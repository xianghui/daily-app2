# Order Canopy

A local-AI workflow for research coordinators preparing repeated usability sessions. Rough task cards often describe the same study conditions in different language; match and review those identities before generating counterbalanced participant protocols. Distinct from topic interleaving or parallel-event scheduling: this app balances positions and **directed immediate carryover pairs** in repeated within-participant sessions.

## Workflow

1. Use Library study or Travel study (entirely synthetic), paste JSON or import a `.json` source/audit. Conditions contain `id,label,description`; task records contain `id,description,instructions`; participants are ordered unique pseudonymous ID strings. Set condition definitions, roster and instructions here.
2. Explicitly click **Load AI & match conditions**. The real MiniLM model embeds condition definitions and task descriptions. Nearest normalized cosine match proposes each task's condition, with all candidate source descriptions and similarities available for review. This is learned semantic matching, not keyword sorting or a prefilled demo.
3. Verify each condition, edit multiline instructions/verification notes, then approve or hold every card. Undo restores the previous review edit. Originals remain unchanged. Input changes clear all reviews; review edits invalidate applied exports. Nearest-match AI can be wrong or match unrelated text: there is no confidence percentage or automatic approval.
4. Apply the worksheet. Exactly one approved task per condition is required. Holds remain in the audit; missing/duplicate conditions block **all** session protocols rather than silently dropping a condition. Export the blocked audit to reconcile it.
5. Inspect participant orders, exact position and pair counts and the fixed-order baseline. Export complete JSON, every-card audit CSV, participant-by-position Protocols CSV or Markdown instructions. Copy Markdown is also available. Exports use the current applied review only. JSON reimport restores original inputs, deliberately not old approvals.

## Real model, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, mean pooling, normalized 384-dimensional embeddings. Transformer input bounded at 256 tokens per text; four texts per batch. No generative model or instruction following.
- Browser runtime: Transformers.js 4.3.2 with ONNX Runtime WASM CPU. No WebGPU required. Shared immutable collection worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; binary: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these published app assets. SHA-256 hashes and exact sizes are in `asset-audit.json`. The existing worker text/vector protocol is used without modification; this avoids duplicating a ~27 MB runtime.
- First explicit load needs internet: ~23 MB quantized model plus ~27 MB runtime and small tokenizer/code downloads. Models come from Hugging Face and its CDN; runtime/code from this static site. Nothing downloads from model hosts before explicit invocation.
- No content uploads, remote inference, analytics, API credentials or paid service. Input and review content stays in browser memory unless you export it. Cache API stores model/runtime files, **not documents**. Model downloads are GET file requests, not inference uploads; sanitized network traces record hosts/paths without temporary signed URL values.
- Cache behavior: after one successful online run, a new worker in the already-open warmed page can perform real inference with all network disabled. Tested. **Offline navigation/reload of the app shell is not promised.** Browser eviction, private browsing or blocked storage may force online downloads. Model URLs follow the existing worker's model repository revision behavior; upstream availability/change remains a dependency.
- Tested in desktop Chrome with GPU disabled. Requires module workers and WebAssembly SIMD; several hundred MB free memory recommended. Other browsers and physical mobile hardware unverified. Responsive phone viewport tests are not physical-device inference claims.

## Deterministic protocol design

For N conditions, start with indices `0,1,N−1,2,N−2,…`, and rotate indices modulo N for N sequences. For odd N also include each reversed sequence, yielding 2N sequences. Complete Williams blocks balance each condition across every position and every ordered distinct-condition adjacent pair. Every participant receives every condition once. Participants are assigned sequences in source roster order, repeating whole blocks; **this is not randomization**. Independently randomize the source roster if required and retain your provenance. Incomplete final blocks are flagged and exact counts are shown.

Baseline repeats the source condition order for all participants. Maximum position spread is the largest within-condition max-minus-min across position counts. Directed-pair spread is max-minus-min across **all** N(N−1) possible distinct-condition adjacent pairs, including zeros. Lower counts/spread are computed design properties, not an estimate of measured bias reduction. Balance is not a guarantee of task equivalence, random assignment, counterfactual validity or improved study outcomes. Learning, fatigue, attrition, higher-order carryover and washout periods are not modeled. No bookings, invitations or external actions.

## Limits, failures and formats

2–6 conditions, 1–16 task cards, 1–48 participants; IDs ≤40, labels ≤100, descriptions ≤300, instructions/review notes ≤1000 characters; source JSON ≤30,000 characters; source/audit imports ≤2 MB. Maximum inference batch is 22 texts in six chunks. Imported text is data only. Empty/malformed/oversized sources, duplicate IDs, unsupported file types, invalid reviewed instructions, malformed/nonfinite/wrong-shaped embeddings, worker/runtime/network errors and 180-second timeouts are surfaced without fake outputs. Cancellation terminates workers. Run identity guards cover downloads, imports and results so late operations cannot overwrite newer input. Retry is explicit.

JSON retains original inputs, every review, sequence assignment and computed counts. CSV uses standard comma/quote/newline escaping and prefixes spreadsheet-formula-like text with an apostrophe; genuine original values remain lossless in JSON. Protocol CSV contains one row per participant per condition, with the current reviewed multiline instructions. Markdown renders user angle brackets as text. No calendar times are fabricated.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261115-8/`; required individual `deploy: gh-pages -d dist` retained but **publish the collection from the root**, never this app alone. The shared worker means dev tests must use the production-path server (`node serve.cjs`) or the combined collection, not just an isolated Vite origin.

See `VALIDATION.md` and machine-readable validation reports for actual checks and remaining limitations. This is a reviewed planning worksheet, not autonomous research design.
