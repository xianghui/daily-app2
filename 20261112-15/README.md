# Learning Loom

A local-AI labor-estimation worksheet for workshop coordinators handling repetitive manual work. Informal batch notes often use different language from the task catalog: MiniLM proposes the profile, a human verifies it, then deterministic Crawford unit-time arithmetic estimates labor against a no-learning baseline and supplied effort budget.

## Use

1. Choose Print studio or Community kitchen (synthetic fixtures), paste JSON or import a `.json` file.
2. Supply 2–8 catalog profiles (`id`, `title`, `description`, `firstMinutes`, `ratePercent`), 1–24 independent records (`id`, `text`, `priorUnits`, `units`), `name` and `availableMinutes`.
3. Explicitly load AI. Review every task, first-unit time, rate and count. Change profile to reset its numeric defaults; edit those defaults as needed. Cosine scores are similarity, never confidence.
4. Approve each batch or hold it. Holds preserve all rows but block aggregate estimates. Undo restores the previous review edit. Any input change cancels work and invalidates reviews; any review edit invalidates applied exports.
5. Apply the reviewed plan, inspect the effort budget, then download complete JSON, audit CSV, batch-estimate CSV or Markdown; Markdown can also be copied. JSON reimport restores **original inputs only**, not approvals or reviewed edits. Current reviewed values are retained in exported `reviews`; deliberate reapproval is required on rerun.

## Real AI, runtime and data flow

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 (model card/license). Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web, MIT.
- Quantized q8 384-dimensional mean-pooled normalized sentence embeddings on **WASM CPU**, not server inference, not a generative model and not a heuristic substitute. Four texts per batch, 256-token bounded context. Model-host default revision is not immutable; future host updates may affect behavior.
- Initial internet download approximately 50 MB: ~23 MB model/tokenizer from `huggingface.co` and its CDN (`us.aws.cdn.hf.co` observed), plus ~27 MB same-origin CPU runtime. Bundled worker/runtime JS is served locally. The byte-identical WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root deployment must preserve it.
- No API key, paid service, remote inference, user-content upload or telemetry integration. Only public asset GET requests were observed. Source data is sent solely to a local module worker, kept in memory and explicitly exported by the user. Import text is inert and cannot request tools or credentials. Public model/runtime files use Cache API/Transformers.js cache; user data is not automatically persisted.
- Modern module workers and WebAssembly SIMD required; several hundred MB available RAM recommended. No WebGPU required. Desktop Chrome on this host tested. Other browsers and physical phones unverified; responsive phone viewports tested.
- After successful online inference, **fresh-worker inference in an already-open warmed page** was tested with all network offline. Offline reload/navigation/app installation is NOT promised. Private browsing, cache eviction or model-host changes can require downloads again. Cache API failures may disable offline use.
- Loading progress, text-batch progress and cancellation are visible. Cancel terminates the worker; run identities discard delayed worker fetches, imports and results. A 180-second timeout, worker/network/device failures and malformed finite-vector/norm schemas produce explicit errors, not fake matches. Retry starts fresh.

## Arithmetic and limits

Crawford **unit-time** curve: `time(n) = firstMinutes * n^log2(ratePercent/100)`. Sum units `priorUnits+1` through `priorUnits+units`. At 80%, time for unit 2 is 80% of unit 1; time for unit 4 is 64% of unit 1. This is not a cumulative-average curve. Baseline is `firstMinutes * units`; the difference is a modeled assumption comparison, not measured savings. Float precision is retained in JSON/batch CSV; UI and Markdown round for display.

Each record represents an **independent** learning history, even if task profiles match. No pooling, crew transfer, calendar scheduling, resource optimization, setup, fatigue, forgetting, plateau, quality loss or overhead modeled. Add overhead separately or use 100% for no learning. `availableMinutes` is aggregate labor effort, not a deadline. No staffing actions or external systems are connected.

Original JSON ≤18 KB; file/envelope ≤1 MB; text ≤400 characters; safe unique IDs ≤40 characters. First minutes integer 1–10000; rate integer 70–100%; prior units 0–10000; new units 1–10000; labor budget 1–10000000 minutes. 24×20000 unit evaluations are bounded. CSV preserves quoted multiline content and prefixes formula-like textual fields with an apostrophe for spreadsheet safety. JSON is lossless.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable test reports. Eight simple known-answer links passed; the negated shipping note selected binding instead of packing, and an unrelated instruction-like weather note selected screen printing. The model always retrieves a nearest profile; it does not prove relevance, equivalence, safety, skill or an appropriate learning rate. Mandatory review/holds are part of the process, not an optional safety net. Tiny fixtures are not an accuracy benchmark.

Build: `npm install`, `npm run predeploy`. App base `/daily-app2/20261112-15/`. Per-app `deploy` exists to satisfy collection convention, but **publish only from root** via its combined `deploy/` workflow. Original collection remains read-only.
