# Session Harbor

A local-AI activity-log reconstruction desk for project coordinators. Match informal timestamped work notes to a supplied project catalog, verify every suggestion, then export traceable project-specific activity sessions. This is **not a timesheet, productivity score or labor-hours estimator**.

## Workflow

1. Paste JSON, import a `.json` source/audit, or use either synthetic example.
2. Set `first` (canonical project descriptions), `idleMinutes` (1–240) and `minSimilarity` (0–1). Records contain `id`, `actor`, `text` and `at` in exact UTC `YYYY-MM-DDTHH:mm:ssZ` form. Edit the JSON before running.
3. Explicitly click **Load AI & reconcile**. Initial download is approximately 23 MB model plus 27 MB WASM binary, tokenizer/config and a 0.55 MB worker. First load requires internet.
4. Inspect exact source notes, proposed identity and ranked project descriptions/cosines. Correct project, actor or timestamp; approve or hold every event. Cosines are not confidence. Multiline review notes, per-edit undo and immutable originals are retained. Identity/time edits require renewed approval.
5. Apply reviewed sessions. Any subsequent edit invalidates exports. Held events remain in the complete audit and break continuity for the reviewed actor; they do not disappear from the source.
6. Download complete JSON, event-audit CSV, session CSV or Markdown; copy the Markdown worksheet. CSV strings beginning with spreadsheet formula triggers are prefixed with an apostrophe. JSON preserves the exact text. Audit reimport restores originals only, never inherited approvals; rerun AI and review again.

## Real AI, runtime and static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Neural sentence embeddings, mean pooled and normalized, q8 ONNX on WASM CPU. Semantic retrieval reconciles paraphrases that an exact-label baseline would miss; it does not infer timestamps, fabricate notes or determine whether work happened.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). No WebGPU needed; CPU WASM is the default, not a simulated fallback. Runtime hashes and observed model revision: `runtime-dependency-audit.json`. The model host's `main` revision is not pinned; future downloads can change. The per-call max_length is ignored by this feature-extraction pipeline: actual tokenizer ceiling is 512 tokens, with a separate 300-character field limit. Four texts per batch.
- Same-origin immutable worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these existing collection assets. Shared reuse avoids pushing a nearly-full collection beyond its 1 GB size guard.
- App is React + Vite, base `/daily-app2/20261120-8/`. Local code, model processing and session logic work on GitHub Pages; no backend, account or API key. Per-app deploy script is retained only for contract compatibility: **publish the combined site from the repository root**, never run this app's deploy script to publish the collection.

## Privacy, caching, devices and failures

Notes remain in browser memory. The only external requests are GET/HEAD public model/config/weight downloads from Hugging Face and its CDN; content is not put in URLs or request bodies. No external providers, credentials, analytics, billing, sending or account changes. Public runtime/model files are cached with Cache API; your notes and reviews are not. Downloads only begin after explicit loading. Browser network validation records sanitized hosts/paths without CDN tokens.

After a successful run, real inference with a **fresh worker in an already-open warmed page** is tested with all network disabled. Offline reload/navigation is **not promised**. Cache eviction, disabled caches, fresh profiles or a changed model revision require internet. Current secure-context Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB RAM tested; other browsers and physical mobile devices unverified. Phone-width layout emulation is not physical-device inference testing.

Cancellation terminates the worker; IDs guard source fetches, file reads and late results. Timeout 180 seconds; retry starts a fresh worker. Invalid inputs, unsupported formats, unavailable workers/WASM, failed model downloads, malformed vectors and runtime errors show actionable failures, not fake output. No automatic remote fallback. Imported instructions are inert data.

## Limits and deterministic method

Source ≤60,000 characters; JSON file ≤2 MB. 1–8 projects, 1–96 events. Descriptions 1–300 characters. IDs 1–40 ASCII letters/digits/underscores/hyphens. Review notes ≤1,000 characters. Strict real UTC dates (no timezone inference, local timestamps, impossible dates or fractional seconds). Missing/invalid times must be fixed before inference. No CSV/PDF import.

Validate finite normalized 384-dimensional vector count before ranking. Below-threshold matches remain unassigned. Every event requires human approval or hold, and approved projects must exist. Then sort by reviewed actor, timestamp, ID for ties. Start a new session on project switch, gap **strictly greater** than the threshold, or an intervening hold. Equality stays together; midnight is not a boundary. Hold barriers use the reviewed actor. Each approved event appears exactly once; different actors may overlap, but an actor's sessions never overlap except at equal endpoints.

Baseline: identical reviewed approved events and hold barriers, same idle threshold, but no project-switch splits. Report baseline mixed-project group count, session counts and observed first-to-last spans. Those are computed diagnostics, **not estimated time saved, active work, engagement or causal performance**. Single-event sessions have zero span. Frequent switching may overfragment real multitasking; nearest-project similarity can be wrong or unrelated, especially negation, short notes and out-of-domain text. Human corrections are essential. No claims of universal accuracy.

## Validation and development

See `VALIDATION.md` and machine-readable reports for observed checks. All fixtures are synthetic. `npm install`, `npm run predeploy`; `python3 serve-test.py` serves production code at `http://127.0.0.1:7035/daily-app2/20261120-8/` with referenced collection assets. Browser scripts use the installed workspace Playwright and Chrome; tests are sequential with root assembly/publishing because root lifecycle rebuilds `deploy/`.
