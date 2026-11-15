# Cutset Lantern

A local AI-assisted **shared-event fault-tree review desk** for reliability analysts preparing exploratory design worksheets. The bottleneck is reconciling informal failure-evidence labels with a named event register, then avoiding double-counted independence assumptions when the same basic event appears in multiple branches.

## Workflow

1. Choose Cooling outage or Archive access (synthetic only), paste bounded source JSON, or import `.json` originals/a prior audit (under 2 MB).
2. Set `title` to the top failure and a common time horizon. Define 2–10 named `events` (`id`, `label`, `description`), a supplied AND/OR `tree`, and 1–48 evidence `records` (`id`, `description`, `probability` in 0–1). The tree is an event-ID string or `{op:"AND"|"OR",children:[...]}`. Repeated IDs refer to one shared event. All declared IDs must appear. Gates have 2–6 children; at most 63 nodes and depth 8. Source ≤30,000 characters; descriptions ≤300 characters; IDs ≤40 characters.
3. Explicitly select **Load AI & match events**. Download progress, text-batch progress, cancellation and retry are exposed. No model traffic occurs before this action.
4. Inspect source notes and ranked cosine evidence; correct event identity and probability, add multiline follow-up notes, then approve or hold **every** record. Nothing is automatically approved. Undo restores the last review edit. Changes invalidate applied exports. Changes to source/import cancel old inference and require a new review.
5. Apply the reviewed worksheet. Exactly one approved record is required per basic event. Missing or duplicate approvals block numerical calculation and expose reconciliation issues; they are never silently averaged. All held evidence remains in the audit. Adjust the tree in source and rerun if needed.
6. Inspect exact top-event exposure, the leaf-independent baseline, structural minimal cut sets and pivotal sensitivities. Download reviewed JSON, full-record CSV, cut-set CSV or Markdown; copy Markdown. Export actions do not send messages or control equipment.

JSON audit reimport restores originals only, never old approvals. Exports always reflect the current applied review; any edit disables them until reapplied. CSV is RFC4180 with textual formula-prefix neutralization (leading apostrophe); numeric probabilities remain numeric. Cut-set IDs are JSON arrays inside escaped CSV cells. JSON retains unchanged originals, every review and the supplied tree.

## What is real AI?

The no-key default uses [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), an Apache-2.0 open-weight sentence encoder, through Transformers.js 4.3.2 and ONNX Runtime Web WASM CPU. Four texts per batch, 256-token truncation, quantized q8 ONNX weights, normalized mean pooling, 384-dimensional embeddings. Ranked dot products propose named basic-event identities from user-supplied descriptions. This handles paraphrases such as “electricity feed blackout” versus “mains supply fails”; it is not a regex/sorting demo. The app validates finite normalized vector count/dimension before creating suggestions.

AI **does not infer probabilities, causal logic, independence, authenticity or the time horizon**. No generative response parser or prompt-controlled tools exist. Nearest matches are always returned, even for nonsense/negation; cosine is not confidence. Mandatory human review is essential. Two tiny known-answer fixtures are not broad accuracy evidence.

## Transparent deterministic calculation

Distinct named basic events are assumed independent; repeated leaves refer to the same Boolean variable. Enumerate all 2^n assignments (≤1,024), multiply independent state weights and sum the weights where the supplied monotone tree is true. The baseline recursively multiplies AND children and complements OR children, treating repeated occurrences as independent. It is only a deliberately naive comparison and can err in either direction.

Minimal cut sets are inclusion-minimal true-event sets. Every event in a cut set must fail; any one complete set is sufficient. They can overlap and their probabilities MUST NOT be added. Pivotal sensitivity is P(top|event=true) − P(top|event=false), not causal inference or model confidence. This is an exploratory static model, not a safety certification or measured reliability result. Distinct-event dependence, repairs, temporal order and uncertain probability distributions are not modeled. Probabilities must concern the same horizon.

## Runtime, privacy and offline scope

First use requires internet: approximately 23 MB weights/tokenizer/config plus 27 MB CPU WASM and about 1 MB bundled worker. Several hundred MB RAM, current browser with WebAssembly SIMD, module workers, Cache API and HTTPS/localhost recommended. WebGPU is not required; desktop Chrome CPU tested with GPU disabled. Physical phones, Safari and Firefox remain unverified.

App React code is bundled locally. To avoid duplicating a large runtime in a near-limit collection, the app uses the immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its WASM factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both originating apps and these paths. Asset audits record byte hashes.

The worker accepts `{id,texts}` and returns progress, batch and `{id,type:'result',vectors}` messages. It downloads model files from Hugging Face/CDN and performs local embedding inference. The worker/module factory/binary are explicitly stored in Cache API; Transformers.js caches model files. Browser network inspection confirmed GET-only asset/model downloads, no content bodies/URLs, no analytics or remote inference. No keys or optional providers exist. Content stays in browser memory, apart from files users explicitly export/copy; it is not persisted by this app. Third-party model hosts see download requests, not input text.

After one successful online use, **fresh-worker inference works without network inside an already-open warmed page**. This was tested using browser offline mode. Offline navigation/reload/app-shell installation is NOT promised. Cache eviction/private mode can require downloads again. Cancel terminates the worker; an in-flight asset fetch may finish/cache, but run identities prevent it starting stale inference. Imports have the same stale-read guard. Model loading/inference has a 180-second timeout. Network/worker/unsupported runtime/malformed-vector failures expose actionable errors without canned outputs or deterministic substitutes.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite, base `/daily-app2/20261115-12/`. Required per-app `deploy: gh-pages -d dist` exists but **do not invoke it for collection publishing**. Use root `/Volumes/ExternalHD/daily_app2` predeploy/deploy to preserve all gallery entries. `serve.cjs` serves production app builds and shared assets for tests (`PORT=6870 node serve.cjs`; `COMBINED=1` serves root deploy). Browser suites require the local Playwright installation documented by their import path, not a runtime app dependency.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed checks, including inference, arithmetic, downloaded artifacts, fault injection, browser layout and public assets. Shared-runtime reuse is an intentional deployment dependency, not an external inference service.
