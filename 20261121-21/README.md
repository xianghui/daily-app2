# Reserve Passage

Local-AI completion-safety worksheet for small shared-equipment pools. **Not a booking system, live allocator or guarantee against real-world deadlocks.**

## Workflow

1. Paste source JSON, import a `.json` file, or load one of two synthetic examples. Define resource totals, existing per-job allocations, maximum total claims and additional proposed requests. Totals INCLUDE allocated units; maximums INCLUDE allocations.
2. Explicitly load AI. Real MiniLM embeddings reconcile rough resource descriptions with your dictionary, improving paraphrase reconciliation beyond literal labels. AI never supplies quantities or authorizes grants.
3. Verify every source snippet, ranked cosine evidence, resource and numeric field. Edit, approve or hold; undo any review edit. Resource/quantity edits reset approval. Missing job/resource cells mean zero. Duplicate reviewed cells must be explicitly merged in source, never silently summed.
4. Apply. Deterministic Banker safety checks find a completion witness for the original state and for each job's proposed additional grant **independently**. Compare immediate-fit candidates with completion-safe candidates. A fit-now grant can leave every job unable to finish.
5. Inspect free/remaining-need/released-resource vectors. Download current JSON, complete audit CSV, independent-candidate plan CSV or Markdown; copy the same Markdown. Any edit invalidates applied exports. Holds preserve every record but withhold all calculations.

Audit JSON reimport restores `originalInput` only, not prior reviews/approvals; fresh AI and review are required. It is not a review-state backup. No remote actions, bookings, account changes or actual equipment assignments occur.

## Model, source, runtime & licenses

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX weights ≈23 MB. Mean-pooled normalized 384-dimensional embeddings; deterministic cosine nearest-resource ranking after real inference.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU, API key, paid service or server inference. Default path only; there is no optional remote provider integration.
- Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes), factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes), binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes). Preserve these originating apps/assets. Hashes/current model host revision are recorded in `runtime-dependency-audit.json`.
- Model `main` is unpinned; upstream changes can change results. Four texts per inference chunk. Feature-extraction ignores the worker's per-call max_length option; actual tokenizer ceiling is **512 tokens**, rechecked from tokenizer config. App separately limits every description to 300 characters.
- React 18.3.1 + Vite React stack; React 18 keeps this small worksheet below the existing collection size guard without removing older apps or changing runtime-sharing rules.

## Downloads, privacy, devices & offline scope

Before first load the UI discloses ≈23 MB weights plus ≈27 MB CPU runtime, internet requirement, progress, cancel/retry, 180-second timeout and device requirements. Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB available RAM. Desktop Chrome CPU was tested (GPU disabled in real inference tests); physical phones, Safari/Firefox/Edge and constrained-memory devices were not tested. Unsupported devices fail with an actionable error; no deterministic or canned “AI” fallback.

Only after explicit loading, static worker/runtime files are downloaded from this collection and model files from Hugging Face/CDN. User text remains in page/worker memory; it is never uploaded. No analytics, remote inference, credentials, autosave or content persistence. Imported text cannot change tool authority or request secrets. Artifacts exist only when the user copies/downloads them.

Cache API stores worker source, runtime factory/binary and model assets, subject to eviction/browser policy. Tested offline scope: **fresh-worker real inference in an already-open warmed page with the browser network disabled**. Offline app startup/reload is NOT promised. No service worker/app-shell offline installation is provided. Storage-disabled first-use requires internet again. Cancellation terminates workers; monotonic run IDs guard delayed worker fetches, file reads and responses from overwriting newer inputs.

## Schema, limits & artifacts

Source: `{title, resources:[{id,text,total}], claims:[{id,job,description,allocated,max,request}]}`.

- 1–8 resources, 1–32 claims, 1–16 jobs; text ≤300 chars, title 1–120; IDs strings matching `\w{1,40}` and unique within each list.
- Integer totals 1–1,000; integer claim counts 0–1,000; `allocated ≤ max`, `request ≤ max − allocated`. Applying also requires maximum ≤ supply and aggregate allocations ≤ totals. All reviewed claims must have distinct job/resource pairs.
- Paste ≤60,000 characters; source/audit `.json` import ≤2 MB (bounded source inside envelope); unsupported files rejected. Maximum batch is 40 texts / 10 chunks. Notes ≤2,000 characters, multiline editable.
- JSON schema `reserve-passage/1` preserves every original/review/hold plus complete matrices, candidate requests, sequences and witness steps. Audit CSV retains every claim; plan CSV contains every NONZERO independent job request (not a combined plan). Markdown includes full analysis and all reviewed records. Text CSV fields quoted/escaped; formula-leading text prefixed with an apostrophe; literal newlines/quotes/commas survive. Downloads and clipboard reflect the current applied review only.

## Deterministic method, baseline & assumptions

Let total pool be T, allocation A, maximum M, free vector W = T − ΣA. Repeatedly choose the first unfinished job with M_i − A_i ≤ W componentwise, append it to the witness, and set W ← W + A_i. This simulates acquiring the remaining need and releasing its entire maximum: the net increase is its existing allocation. If every job can finish, a sequence exists. If none can advance, remaining jobs are blocked under declared maximums. Greedy choice is exact here because completing a feasible job never reduces the available vector.

For each NONZERO proposed job request Q, first check Q ≤ free. If it fits, add Q to that job's allocation and rerun safety. Each candidate uses the ORIGINAL matrix, not previously proposed grants. Baseline counts all immediately fitting requests; safety-aware count excludes requests with no full witness. These are computed counts, not accuracy, confidence, achieved time savings or predictions.

Resources must be reusable interchangeable units; every job releases all units on completion, needs no more than its declared maximum, and has no unmodeled dependency. No preemption, timing, failures, expiry, priorities, outside holders or resource conversion is modeled. **Never combine the independently safe grants without recomputing a new state.** A safe state only proves a possible completion order under assumptions; unsafe is not proof of an existing deadlock. A zero-request job is displayed but not counted as a candidate. Held rows withhold the whole calculation. No automatic claims or grant changes.

Tiny easy fixtures are not general AI accuracy. The negation challenge mislinked projection equipment to a camera; mandatory human review matters. An unsuitable resource can rank first. Model similarity cannot validate a count, equipment compatibility or future maximum demand.

## Build & collection publishing

`npm install`; `npm run predeploy`. Base `/daily-app2/20261121-21/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish ONLY with root combined-site predeploy/deploy**. Individual deploy would replace the collection.

See [VALIDATION.md](VALIDATION.md), scripts and observed JSON reports for actual checks and untested scope. All fixtures are synthetic. No digest sent.
