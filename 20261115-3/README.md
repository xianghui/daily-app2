# Handoff Harbor

A local-AI transition audit for service-operations analysts reconciling recurring case handoff tallies. Distinct from event-log prerequisite audits and funnels: this worksheet permits return loops, computes absorbing-state outcomes and expected transitions from each transient start, and compares those with direct next-step outcomes.

## Workflow

1. Paste source JSON, import `.json`, or choose either synthetic example. Define 3–6 stages with `id`, `label`, `description`, `terminal` boolean. Define 1–32 tallies with `id`, `fromDescription`, `toDescription`, positive integer `count`, `owner`. Counts mean observed transitions, not distinct cases. Counts are bounded to 100,000 per row.
2. Explicitly press **Load AI & match handoffs**. The real model embeds both endpoint descriptions and supplied stage descriptions. Normalized dot products propose nearest stages with inspectable source definitions. Similarity is not confidence, and unrelated inputs always have a nearest neighbor.
3. Verify both endpoints, positive integer counts, owners and notes. Approve or hold every row. Repeated endpoint pairs sum; check that they are independent tallies, not duplicate observations. Undo is available. Source edits invalidate AI output; any review edit invalidates applied exports.
4. Apply reviewed worksheet. Terminal outgoing observations, missing transient outgoing evidence and closed nonterminal classes block the model. All-held reviews produce no model. Holds remain in every audit and are excluded from calculations.
5. Inspect eventual terminal probabilities and expected transitions to any terminal, compared with a direct one-step probability baseline. Export complete JSON, all-row CSV, or a Markdown follow-up worksheet; copy Markdown. Reimport of an audit restores original input only, requiring fresh AI and review.

## Real AI, runtime and license

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, 384 dimensions, normalized mean pooling. Model files use the host's current revision; upstream changes may affect outputs.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread; no WebGPU dependency. Exact installed versions are in package-lock.json.
- Approximately 23 MB model + 27 MB WASM, plus local worker/factory. First use needs internet. Files download from Hugging Face/its CDN and this Pages collection. No mandatory API service, key or agent credential.
- The immutable shared WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` is byte-identical to the installed runtime. Keep that earlier deployment intact. The module factory and worker are bundled locally and explicitly cached.
- Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM is recommended. Chrome CPU with GPU disabled was tested. Physical phones, Safari, Firefox and low-memory devices were not tested.
- Four texts per batch, maximum 70 texts (6 stages plus 64 endpoints), 256 tokens per text, 300 characters per description, 30,000 source characters, import envelope ≤2 MB, 180-second timeout. Cancel terminates workers; run identities guard delayed worker downloads, imports and results.

## Privacy / offline

Content stays in browser memory; no uploads, analytics, external inference, credentials or account actions. Model-download requests are downloads, not content uploads. Imported instructions have no authority. Cache API stores weights/runtime files, not your source/reviews. Exports intentionally contain the source and review notes: share them deliberately. Formula-like text cells are escaped for spreadsheets; JSON remains lossless.

After one successful online run, fresh-worker real inference was tested with all network disabled in the same already-open page. Offline reload/navigation is **not promised**. Cache eviction/private browsing may require another download. Loading, network/runtime failures, cancellation and retries have visible states; there is no fake fallback.

## Deterministic method and limits

Approved tallies are aggregated by reviewed endpoints. Normalize outgoing counts into probabilities; partition into transient Q and terminal R. Partial-pivot Gauss–Jordan solves `(I−Q)B=R` and `(I−Q)t=1`. Each terminal is absorbing. Expected transitions include the final handoff, not time, unique visits or distinct cases. Every transient must have evidence and a path to a terminal. Numeric near-singularity and invalid probability totals block output.

Assumptions: complete representative transition observations, stationary memoryless routing and genuinely absorbing terminal outcomes. Different case mix, incomplete capture, time-varying staffing or history-dependent routing invalidate extrapolation. Held evidence changes the distribution. These are conditional retrospective planning scenarios—not forecasts, causal intervention effects, SLA guarantees or accuracy improvements. AI does not extract counts or verify these assumptions. The one-step baseline uses the same approved observations; no invented time savings are reported.

## Build / publication

`npm install`, `npm run predeploy`. Vite base `/daily-app2/20261115-3/`. Required per-app deploy script is retained but **publish only from the collection root** using its combined `deploy/` workflow, never this app's deploy script.

See [VALIDATION.md](VALIDATION.md) for observed checks and limitations. Synthetic fixtures only; no private datasets or secrets.

Collection size maintenance: root deploy-only geometry reuse additionally preserves the shared WASM at `20261028-24/assets/manifold-BE4c7gO-.wasm` for two earlier apps. Keep that immutable older asset; affected workers/exports were retested.
