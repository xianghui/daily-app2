# Dependency Lens

A local-AI task-prerequisite review tool for project coordinators. Unlike the collection’s agenda grouping, role handoffs or semantic sampling apps, this utility builds directed deliverable dependencies, rejects cycles, propagates unknown inputs and computes dependency-only earliest starts.

## Workflow
Choose either synthetic example or paste/import task JSON under 100 KB (reviewed audit envelopes up to 1 MB). Define 1–24 tasks with unique safe IDs, titles (120 characters), output descriptions (300 characters), estimated integer working hours (1–160) and 0–2 required input descriptions (300 characters). Set a cosine candidate floor 0.2–0.9. Click **Load AI & find dependencies**. Inspect ranked deliverables, select the actual producer or explicitly confirm external availability, then approve or hold every input. Unknown inputs block the consumer and downstream tasks. Apply the reviewed audit. Download JSON/CSV/Markdown or copy Markdown. Changing any review invalidates exports; Undo restores prior review state. Editing source cancels inference and clears old results. Reimporting an audit restores original inputs, not old approvals. All source tasks and input decisions survive exports.

## Real AI
`Xenova/all-MiniLM-L6-v2`, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 (upstream sentence-transformers/all-MiniLM-L6-v2). Quantized q8 ONNX via Transformers.js 4.3.2 and ONNX Runtime Web, single-threaded WASM CPU. Mean-pooled normalized 384-dimensional embeddings, max 256 tokens/text, four-text batches, max 72 texts. This is actual semantic inference, not a chat API or regex classification. Finite normalized vector schema checked before ranking. Model currently resolves the host’s main revision rather than pinning a commit, so cached model/version changes can change results.

Initial approximately 23 MB weights plus 27 MB WASM plus app/runtime code. Requires internet initially. Model files download from Hugging Face and its CDN, runtime/worker from this site. WebAssembly and modern workers required; no WebGPU or key. Tested headless desktop Chrome; other current browsers are intended but not device-tested. Phones may run out of memory or be slow. 180-second timeout; Cancel terminates the worker, retry creates a fresh worker. No fake fallback.

The immutable shared WASM is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; Vite replaces the byte-identical bundle reference to avoid duplicating 27 MB. Preserve this older app when deploying. Its hash and local runtime hashes are in asset-audit.json.

## Privacy and offline
No user content leaves the browser. No provider integration, keys, analytics, or remote actions. Downloading model weights is not uploading content. Browser Cache API/Transformers caches hold model/runtime/worker files, never task inputs. Worker source and WASM factory/binary are explicitly cached when allowed. After successful online inference, a fresh worker can run offline in the already-open page while caches remain (validated against the production bundle). Offline navigation/reload is **not** supported or promised. Caches can be evicted; private browsing may prevent caching. There is no automatic data persistence; exports are local downloads and may contain the user’s sensitive task data.

## Deterministic planning and limits
Self-links excluded. Cosine ranking generates candidates above your floor, not verified prerequisites. Every input requires human review. Directed graph cycle checking rejects cycles instead of breaking them. Held inputs propagate blocked status transitively. Approved blank provider means the human confirmed external/already-available input. Approved dependencies are AND requirements. Earliest start is max predecessor finish, assuming all roots start at hour zero and unlimited parallel resources. Durations are user estimates. No staff calendars, capacities, lags, dates, constraints on scarce resources or real-world time-saving claims. Blocked tasks have null timing and are excluded from both time comparisons. The sequential sum versus longest finish is a lower-bound comparison only. Exact-description matching is a candidate-coverage baseline, not a measured accuracy baseline.

Negation, topical similarity, mismatched versions and implied dependencies can fool MiniLM. A nearest deliverable does not prove availability, completeness, permission or causality. The user must supply explicit inputs, review all links and confirm external items. Inputs cannot grant authority or trigger external actions.

## Artifacts
JSON schema `dependency-lens/v1`: originalInput, tasks, requirements, topological order and computed metrics. CSV uses explicit task/requirement record kinds, all rows retained and formula-leading text escaped. Genuine numeric hours remain numeric. Markdown lists every task, handoff decision, held work and assumptions; text is escaped. JSON reimport starts a fresh run. No destructive external transformations.

## Run and publish
`npm install`; `npm run dev`; `npm run predeploy`. Vite base `/daily-app2/20261108-23/`. Per-app gh-pages and required scripts retained, but publish only through the collection root `npm run predeploy` / `npm run deploy`, preserving older app assets.

See VALIDATION.md and machine-readable validation reports for actual checks and limitations. Synthetic fixtures only.
