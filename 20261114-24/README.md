# Hub Orchard — local-AI pickup hub planning

For cooperative collection planners: reconcile free-text neighborhood demand notes with supplied zones, then choose among candidate pickup sites. Distinct from routing or appointment scheduling: this is discrete single-hub location evaluation with a maximum service radius.

## Workflow

1. Load either synthetic example or paste/import source JSON. Set zone descriptions/coordinates, candidate hubs, demand weights and radius.
2. Explicitly click **Load AI & match demand**. No model downloads occur before this action.
3. Inspect original notes and ranked cosine evidence. Edit zone, integer demand, owner and multiline follow-up. Approve or hold every row; undo restores the last review edit. Originals are retained.
4. Apply the reviewed worksheet. All candidate scores, first-candidate baseline and minimum feasible candidate are computed. A held row is excluded from scoring, not deleted. If none is feasible, no hub is recommended.
5. Download current reviewed JSON, formula-escaped CSV, Markdown or copy the worksheet. Any edit invalidates exports. Reimport an audit JSON restores original inputs only and requires fresh inference/review.

## Real AI / default no-key inference

`Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2 / ONNX Runtime Web (MIT) quantized q8 WASM CPU feature extraction. Normalized mean-pooled 384-dimensional embeddings compare notes with user zone descriptions; this semantic reconciliation materially changes which coordinates receive each demand weight. It does not geocode, infer quantities, verify identity or reason reliably about negation. Similarity is not confidence. No fake AI, hard-coded responses or external providers.

First use: approximately 23 MB model plus 27 MB WASM and app/runtime code; internet to this collection, Hugging Face and its file CDNs. Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB available memory recommended. No WebGPU needed. Actual headless desktop Chrome CPU tested; physical phones, Safari/Firefox and low-memory devices untested. Cancel terminates workers; bounded 180-second timeout, retry and explicit errors. No silent fallback.

Worker/module factory/WASM use Cache API; Transformers.js caches downloaded model files. A fresh worker in the same already-open warmed page was tested with browser networking disabled. Offline navigation/reload is NOT promised; no service worker. Eviction/private-mode restrictions may require redownloading. Shared byte-identical WASM is hosted at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`); preserve that older app. Runtime factory and worker are bundled locally.

## Privacy / input limits

User content stays in browser memory, never uploaded. Only model and runtime file GETs were observed. Cache stores runtime/model, not user documents; explicit exports save user data locally. No keys, analytics, geocoding, account actions, messages, remote calls or private samples. Imported instructions remain inert data; AI has no tools/credentials.

Source JSON: `radius` 0–10,000 km; `rules` 2–6 zones with unique `id`, `label`, `description`, `x`, `y`; `hubs` 1–12 unique `id`, `x`, `y`; `records` 1–32 unique `id`, `description`, integer `weight` 1–100,000 and `owner`. Coordinates are finite local-grid km ±10,000, NOT latitude/longitude. Descriptions ≤300 characters, labels ≤100, owners ≤150. Source ≤30,000 characters; JSON import/audit envelope ≤2 MB. Inference batches four texts, 256 tokens/text. Finite normalized embedding dimensions/count are validated. Empty/malformed/oversized inputs and unsupported file/device/runtime paths fail explicitly. Run identities guard input edits, late worker downloads, delayed file reads and cancelled runs.

## Deterministic calculation / limits

For each approved row, use reviewed zone coordinates and compute Euclidean distance to each candidate. Score = sum(reviewed demand × distance), in demand-km. Feasible means every approved row is within the supplied radius. Choose the lowest-score feasible candidate; supplied hub order breaks ties. Baseline is first supplied candidate, even if infeasible. No approved demand means no recommended hub. All original rows and holds survive audit/CSV.

This is not route optimization, road distance, capacity planning, rent analysis, accessibility certification or measured travel/time savings. A zone centroid approximation can misrepresent individual households. Verify complete demand coverage, road access, hours, accessibility and consent before selecting sites. No external actions occur.

## Build / publishing

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261114-24/`. Per-app gh-pages scripts retained as required; **publish only through root combined-site predeploy/deploy** so the collection survives. See VALIDATION.md for observed tests and publication status.
