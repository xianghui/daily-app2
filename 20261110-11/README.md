# Flow Caliper

**Browser-local AI time-study reconciliation for office-process coordinators.** Input stage definitions, current parallel servers, single-unit observed timings, daily demand and productive seconds per server/day. Real semantic inference links rough observation descriptions to stages; a human approves, corrects or holds every observation. Deterministic arithmetic produces stage means, current capacity bounds, minimum mean-load staffing and a proposed worksheet. This is distinct from crew dispatch or job scheduling: it reconciles timing measurements and sizes sequential process stages, without assigning people or dates.

## Use

1. Try **Claims desk** or **Studio desk**, or paste/import synthetic-compatible JSON with the same schema. A JSON audit reimport restores `originalInput` only; approvals never return silently.
2. Review network/device requirements and explicitly select **Load AI & reconcile notes**. Cancel works during loading/inference; retry creates a fresh worker.
3. Verify the selected stage against its definition and the original source. Inspect candidate cosine similarities (not confidence). Correct the integer seconds and add a review rationale. Approve or hold each observation. Undo restores the preceding review state.
4. Apply the reviewed register. Any edit invalidates exported snapshots until applied again. Missing approved data for any stage blocks whole-process capacity; partial stage rows remain visible.
5. Download complete JSON, observation-audit CSV or worksheet + source-audit Markdown, or copy Markdown. JSON retains every original, candidate, held record, review and calculation. CSV escapes spreadsheet-formula prefixes, including multiline fields. Inputs/reviews are memory-only: export before closing.

## Real AI, runtime and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT. The exact dependency tree is in package-lock.json.
- Actual 384-dimensional mean-pooled normalized embeddings compare each observation with each supplied stage title/description. Cosine ranking is deterministic *after real model inference*. No canned responses, regex fallback, remote inference, API key or provider integration.
- ~23 MB model/tokenizer download from `huggingface.co` and Hugging Face `*.hf.co` CDN; ~27 MB same-origin WASM plus <1 MB app/worker/factory. Internet is required initially. Runtime JS/worker is locally bundled. The collection shares the immutable byte-identical WASM at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve it. See asset-validation.json for SHA-256 equality.
- Tested desktop Chrome on macOS with module workers, WebAssembly SIMD, Blob URLs and Cache API. Single-thread WASM CPU is the default, not an untested WebGPU fallback. Physical phones, Safari/Firefox and low-memory devices are untested. Unsupported runtime, worker errors, bad outputs and network errors stop explicitly without simulated results.
- Model/runtime/worker use Cache API where available. Tested: complete online run, terminate worker, block all network, create a fresh worker, complete actual inference in the **already-open cached page**. Offline page reload/startup is **not** claimed. Private mode, eviction, version changes and host availability may require internet again. Browser site-data controls remove caches.
- User content remains in worker/page memory. Downloading model weights does not upload observations. Production-browser request tracing observed GET-only app/runtime/model file requests, no payload uploads or text in URLs. No analytics or external actions. Imported instructions are data, not authority.

## Input/schema limits

JSON object: `name` (1–100 chars), `availableSeconds` integer 1–86400, `demand` integer 1–10000, `stages` (1–12) and `notes` (1–24). Each stage has unique `id` ≤30 chars, `title` ≤100, `description` ≤400, `servers` integer 1–100. Each note has unique `id` ≤30, `text` ≤400, `seconds` integer 1–86400. Original payload ≤40 KB; import/audit ≤1 MB. No PDF/CSV input. Four texts per embedding batch, 256-token maximum (long tokenizations can truncate); 180-second timeout. Vector count, 384 dimensions, finite numbers and approximate unit norms are validated. Run identities guard file reads, worker loading and callbacks; cancellation terminates workers so stale runs cannot replace newer results.

## Arithmetic and boundaries

Every finished unit must pass through **every stage once**, each observation must time **one full unit at one stage**, and each stage's parallel servers must be independent and equally productive. Availability is per-server productive seconds/day, already net of breaks. Do not import multi-unit batches or waiting/queue durations. Stage mean = sum approved seconds / approved samples; capacity = floor(available × servers × count / sum); required servers = ceil(demand × sum / (count × available)); additions = max(0, required − current). Proposed staffing never removes current servers. Process capacity is the minimum stage capacity only if every stage has approved data.

These are steady-state **mean-load bounds**, not observed throughput, queue predictions or service-level guarantees. No variance, warm-up/flow lead time, shared workers, sequence, batching, branching, rework, setup, material constraints, fatigue or confidence intervals. Tiny samples may be unrepresentative; repeated observations are samples, not production totals. No individual worker-performance or high-stakes staffing judgment. Needed servers can exceed practical resources; this utility does not optimize a staffing budget. It never claims a statistical improvement.

Comparison: current supplied staffing versus proposed max(current, required), using the same reviewed means. Literal-title baseline counts observations containing full stage titles; AI-confirmed links measure reviewed coverage, not accuracy. Seconds conservation compares reviewed approved + held observations, not daily labor totals.

## Observed validation

See [VALIDATION.md](VALIDATION.md), machine-readable reports and reproducible test scripts. Two different tiny fixtures matched 8/8 intended stage links; capacity scenarios were 72→133 and 40→80 units/day with one extra server each. Negated and unrelated text still gets unsuitable nearest-stage suggestions: hold it. Never treat similarity as proof that an activity happened. No universal accuracy claim.

## Build / publishing

`npm install`; `npm run predeploy`. React + Vite base `/daily-app2/20261110-11/`. Required per-app scripts remain present, but **publish only from the collection root** via `npm run predeploy` then `npm run deploy` to preserve older apps. Publication state and public verification are recorded separately; successful local build/inference does not imply completed Pages publication.
