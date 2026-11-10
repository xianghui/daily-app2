# Failure Folio — UNPUBLISHED DRAFT

A low-stakes office-process FMEA desk: paste/import a failure-mode library and observed issue notes with team-supplied severity/occurrence/detection ratings. Local AI retrieves candidate modes by meaning. Review each link and rating, write an action/owner, approve or hold, apply a stable RPN-ranked worklist, then download current JSON/CSV/Markdown or copy Markdown. Every edit invalidates the applied snapshot; undo restores review edits. Original inputs are never changed. Holds remain in every audit.

## Real AI and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 feature extraction via Transformers.js 4.3.2 / ONNX Runtime Web (Apache-2.0 / MIT). Normalized mean-pooled 384-dimensional embeddings; cosine note-to-title/description retrieval. Four texts per batch, 256 tokens. No language generation or AI risk scoring.
- First explicit load needs internet: roughly 23 MB model/tokenizer from huggingface.co / hf.co and 26,861,777-byte same-origin WASM (~50 MB total). Code, worker and factory are bundled locally. Shared WASM is byte-identical to the installed runtime: `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this immutable collection dependency.
- Content stays local. No backend, analytics, API keys or remote inference. Downloading weights does not upload observations. Text is passed only into the local worker; imported instructions have no tool authority.
- Chrome desktop with module workers, WebAssembly SIMD and Cache API tested; no WebGPU required. Other browsers and physical mobile hardware untested. Cached model/runtime/worker support fresh-worker inference in the **already-open page**, verified with all network disabled. Offline reload/navigation is not promised. Cache eviction, private mode or quota restrictions may require re-download. No input persistence: export before closing.

## Data and interpretation

JSON inputs: `name`, integer `threshold` 1–1000, `modes` (1–12 unique IDs, titles and descriptions), `notes` (1–24 unique IDs, text and integer `severity`, `occurrence`, `detection` 1–10). Built-in Dispatch and Editorial fixtures demonstrate the schema. Text/description ≤400 characters, title/name/owner ≤100, ID ≤30, action ≤500; original payload ≤40 KB, JSON/audit import ≤1 MB. No PDF/CSV input. A downloaded JSON audit can be reimported to restore **original inputs only**, not approvals.

Higher detection rating means harder to detect. Use one consistent team rubric; 1 is low, 10 high, not calibrated probability. AI never assigns these ratings. Deterministic validation requires finite unit vectors and complete review decisions. RPN = S×O×D; sort descending, preserving source order on ties. Observations remain separate even if they share a mode: no incident-frequency inference, deduplication or RPN summation. The attention threshold is a user filter, not a safety boundary. High-severity observations may deserve action regardless of RPN.

Projected RPN holds severity constant and uses user-entered projected O/D. Any reduced rating requires an action and owner. Projections are assumptions, never achieved savings or measured risk reduction. RPN multiplies subjective ordinal scales; it is not expected loss, failure probability or safety certification. Do not use this tool for safety-critical decisions.

The literal-title baseline and confirmed AI links are computed coverage counts, not comparable accuracy estimates or measured time savings. The app also shows how many approved records change position from input order and the current/projected threshold counts.

## Failure handling and exports

Explicit load/download/batch status, cancellation by worker termination, run IDs, stale file-read guards, 180-second timeout, model/network/runtime errors, malformed-vector rejection and retry. There is no fake fallback. Out-of-domain/negated notes still receive nearest candidates and should be held. Review can edit mode, ratings, action and owner. Exports preserve all original records, held decisions and current reviews; JSON also contains evidence and the original payload, CSV includes spreadsheet-formula guarding, Markdown has both priority list and complete audit. No email, deletion or external account actions.

## Build and validation

`npm install`; `npm run predeploy`. Per-app deploy scripts are required but **publish only through the parent collection** with root `npm run predeploy` / `npm run deploy`. Vite base `/daily-app2/20261110-10/`.

See [VALIDATION.md](VALIDATION.md) and machine-readable test outputs. Browser tests use the production bundle, not Vite dev or mocked success. Fault injection is restricted to defensive tests. No claim of general classification accuracy or universal browser support.

## Publication blocked

All three Pages builds passed but deployment failed: two synchronization timeouts and one immediate cancellation. Public URL remained HTTP 404. Public AI/worker/runtime tests were not performed; this draft is excluded from the gallery and combined deployment. See `hosting-attempts.json`, `hosting-failure-*.log` and `publication-status.json`. Do not count it as completed. Resolve hosting before promotion and rerun public checks.
