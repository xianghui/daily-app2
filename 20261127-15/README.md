# Framecadence Desk

A reviewed time-lapse capture worksheet for documentary makers and small studio operators. Informal shoot briefs are the bottleneck: scene choice sets a cadence constraint, while window length, desired playback, exposure spacing and card capacity must agree. Input a scene catalog plus 1–12 shoots; real local AI retrieves a candidate scene; review/edit all assumptions; apply a deterministic interval plan; export usable capture cards plus complete audits. No media uploads, camera control, account access or external actions.

## Real AI and deterministic work

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8, Transformers.js 4.3.2 / ONNX Runtime Web. Actual CPU WASM inference computes normalized mean-pooled 384-dimensional text embeddings. Cosine retrieval matches each shoot note to a supplied scene description. The proposed scene supplies the maximum interval; therefore inference changes the capture plan, not merely its decoration. Numeric inputs are supplied by the operator, never extracted or invented by AI. No API keys, paid service, fake responses or deterministic AI fallback.

MiniLM is an English-oriented semantic retrieval model, not an instruction-following generator or camera expert. It forces a nearest match even for unrelated text and can fail negation. Cosine values are not confidence. Every shoot requires approval or hold; inspect candidate descriptions, change the scene and cadence, verify exposure and overhead, or hold the entire shoot. Example cadence values are illustrative assumptions, NOT manufacturer advice or visual-quality guarantees. Test a physical sequence.

This process is distinct from existing Longlight/Focusfield photographic worksheets (single-exposure timing/depth of field), Frame Harbor (crop geometry) and Timecode Quay (edit timecode). It sizes whole-second time-lapse intervals under competing frame-count, capture-window, spacing and storage requirements. The complete 432-entry prior utility gallery was parsed for objective/name review before selection; older entries remain unchanged.

## Planning contract

All exposures have fixed duration and begin at t=0, interval, 2×interval, etc. Every exposure must finish at or before the supplied shoot window. Overhead occupies spacing between exposures; no overhead is required after the final exposure. Window seconds, interval seconds and playback FPS are whole numbers; exposure/overhead are whole milliseconds.

Let `span = duration*1000 − exposureMs`, `required = fps*minPlayback`, `lower = ceil((exposureMs+overheadMs)/1000)`. For required >1, the slowest interval that meets the count is bounded by `floor(span/((required−1)*1000))`. Intersect this upper bound with the reviewed scene maximum interval. If the upper bound is below lower, or exposure exceeds the window, no integer-second interval exists. Otherwise choose the upper bound. Frame count is `floor(span/(interval*1000))+1`. Because count is nonincreasing with interval, this minimizes files among all allowed integer-second intervals; ties use the slowest interval. Check count × estimated frame KB against this shoot's storage budget. A failed budget cannot be repaired by a shorter interval. Infeasible worksheet values are diagnostic, not operational instructions.

Final exposure end = `(frames−1)*interval*1000 + exposureMs`. Playback seconds = frames/fps. Fractional playback values are display-rounded only; source/result JSON retains numbers. KB/GB use decimal units. Storage is a constant-size estimate, no filesystem reserve or card-performance guarantee. Budgets belong to individual shoots; there is no shared-card allocation. Battery, card write speed variance, camera limits, exposure ramping, blur, trigger jitter and subsecond intervals are not modeled.

The computed baseline uses a fixed 60 s interval with the same exposure/window frame count, and checks ALL reviewed constraints. The display counts approved shoots that pass that shortcut versus all compared approved shoots. Holds are excluded and labeled. This is not measured visual quality, elapsed-time savings or accuracy. Summary frame/storage totals include only ready shoots. Complete audits retain held/infeasible shoots; Capture CSV is disabled unless all are ready.

## Workflow, formats and bounds

1. Choose a synthetic example, paste source JSON or import `.json` (source or a full audit).
2. Explicitly load the model. Loading/batch progress, cancellation and retry are available; 180 s timeout gives actionable errors.
3. Review each scene candidate, edit numeric constraints and multiline reviewer notes, approve or hold. Relinking resets approval and resets maximum interval to that scene's default. Undo restores the last 40 review states. Any edit/input/run invalidates applied exports.
4. Apply the reviewed scenario. Pending rows or invalid numeric values block application. Holds remain in the audit and block operational output.
5. Download complete JSON, Audit CSV, Markdown or approved Capture CSV. Copy the current Markdown handoff; download works if clipboard permission fails.

Source object: `title` ≤100 characters, `profiles` (2–8) and `records` (1–12). Unique IDs ≤40 characters. Profile: `id`, `description` ≤200, `maxInterval` 1–3600 s. Record: `id`, `note` ≤200 plus:

| Field | Integer limits | Meaning |
| --- | --- | --- |
| duration | 1–86400 | Window seconds |
| fps | 1–60 | Playback frames per second, not capture rate |
| minPlayback | 1–1200 | Minimum playback seconds |
| frameKB | 1–100000 | Estimated decimal KB/frame |
| storageKB | 1–1000000000 | Per-shoot decimal KB budget |
| exposureMs | 1–3600000 | Fixed exposure milliseconds |
| overheadMs | 0–60000 | Additional inter-frame milliseconds |

Source ≤30,000 characters. Control characters/lone surrogates rejected. Source descriptions/notes bounded to 200 characters; worker batches four texts, at most 20 texts/five chunks. Actual model tokenizer caps at 512 tokens; pipeline max_length does not enforce a smaller cap. Vector count, 384 dimensions, finite numbers and normalization are validated before ranking. Imported prose is data, cannot invoke tools, alter authority or request credentials.

JSON schema `framecadence-v1`: original, review, candidates, jobs and summary. Up to 8 MB full audit import restores **original inputs only**, requiring fresh inference/review; it never trusts imported approvals. Audit CSV has one row per original including all reviewed numeric fields, source note, decision, result, baseline and reviewer note. Capture CSV has one row per original ready shoot: scene, interval seconds, frame count, final start/finish milliseconds, playback seconds, estimated KB and reviewer note. No proprietary intervalometer format is claimed; transfer verified settings manually. CSV preserves commas/quotes/newlines and adds an apostrophe to formula-like string cells beginning =,+,-,@,tab/CR. Signed numeric fields remain numeric. JSON/Markdown preserve text verbatim.

## Privacy, device/runtime and cache requirements

App code/CSS and the shared runtime are bundled same-origin. Explicit first load downloads ~23 MB weights/tokenizer/config from huggingface.co and its hf.co/CDN hosts, plus ~27.5 MB same-origin CPU runtime (~29 MB conservative UI allowance). Model downloading does not upload user notes. Default content stays in browser memory. No remote inference option, credentials, telemetry, analytics or autosaved documents. Request audits check GET-only asset downloads and no source notes in URLs/bodies; reports persist only host/paths/query-key names, not signed CDN tokens.

Modern desktop Chrome with WebAssembly SIMD, module workers and Cache API is the tested target. WebGPU is NOT required (real tests disable GPU); several hundred MB RAM recommended. Physical phones, other browser engines and low-memory devices are unverified. Unsupported-feature, worker construction/error, network, malformed results and timeout failures are shown without invented results. Cancellation terminates the worker/aborts worker download. Run identities also guard asynchronous file imports and late worker messages.

Immutable shared runtime dependencies — preserve these earlier app builds:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

`runtime-provenance.json` records exact bytes/hashes. These are the existing same-origin feature-extraction worker, CPU factory and binary; the worker was inspected for normalized mean pooling/q8/four-text batches and exact asset paths. Worker/factory/WASM use explicit Cache API; model files use Transformers.js caching. After an online warm-up an **already-open warmed page** can terminate and recreate a worker for real offline inference. Cold offline navigation/reload is not implemented or promised. Private browsing/eviction may force downloads again. No worker/runtime originals were modified.

## Build and validation

React + Vite; base `/daily-app2/20261127-15/`. `npm install`, `npm run predeploy`. Required per-app gh-pages scripts/dependency retained, but publication uses ONLY the root combined-site workflow; never publish this app alone over the collection. Read root README for Pages verification.

See `VALIDATION.md` for actual outcomes and limitations. `core-test.mjs` independently enumerates integer intervals and counts exposure starts. Browser suites use actual model inference on production builds; fault injection is used only for failure/stale safeguards. `artifact-test.py` parses downloaded CSV/JSON with independent Python arithmetic. Layout is checked at 1440/390/320 px with normal-viewport screenshots. Synthetic examples are not representative accuracy evidence or physical-camera validation.
