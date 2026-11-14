# Window Weave

A local-AI appointment waitlist worksheet for community repair desks and library help coordinators. Unlike a FIFO queue, the planner can reserve a narrow-window slot for a constrained request while placing a flexible request later. It never makes bookings or sends messages.

## Workflow

1. Choose **Repair clinic** or **Library help** (synthetic data), paste JSON, or import source/audit `.json` up to 2 MB. Edit service descriptions, available slots and request constraints in source JSON.
2. Explicitly click **Load AI & match requests**. First use downloads approximately 23 MB of model/tokenizer data and 27 MB of CPU runtime. No model-host requests occur before that click. Progress names the current file and inference batches; Cancel terminates the worker.
3. Inspect service descriptions and cosine evidence. Review each service, integer availability window, required minutes, priority and follow-up owner; approve or hold every request. Unrelated text still gets a nearest suggestion, so do not approve blindly. Undo reverses review edits.
4. Apply the reviewed worksheet. Exact deterministic matching first maximizes count, then supplied priority sum. Compare with FIFO's earliest-compatible-free-slot allocation. Holds are excluded from both, visibly retained, and metrics describe only the approved subset.
5. Download current JSON, CSV or Markdown, or copy Markdown. Every review edit invalidates the applied export. JSON includes original services/slots/requests, evidence, reviews, both plans and outcomes. CSV includes all requests, original record JSON, reviewed fields, assignment and actual slot start/end minutes. Markdown is an actionable follow-up checklist. JSON reimport restores originals only; renewed inference and review are required.

## Actual AI / runtime / license

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized `onnx/model_quantized.onnx`, via `@huggingface/transformers` 4.3.2 (Apache-2.0) and ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT).
- Real WASM CPU feature extraction with mean pooling and normalized 384-dimensional embeddings, four texts per batch, at most 256 tokens/text. Cosine ranking matches request meaning against supplied service definitions; it is not confidence, validated eligibility or urgency inference. AI does not extract numeric fields.
- Embedding shape, finite numbers, count and unit length are checked before any suggestion. No model failure is replaced by canned responses or heuristics.
- Runtime JS, app code and worker are locally bundled. The identical 26,861,777-byte WASM is shared at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that immutable asset. Runtime and model licenses are in dependencies/upstream sources. Model repository revision is not pinned; upstream changes/cache eviction can alter behavior or availability.

## Devices, internet, caching and privacy

Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB of available memory recommended. No WebGPU required: CPU is the tested default. Other browsers and physical phones are unverified; 320/390 CSS-pixel layouts were tested in desktop Chrome. Runtime/network errors give retry guidance and never fake results. A 180-second timeout bounds loading/inference.

Only Hugging Face and its download CDNs receive model-file GET requests; the collection serves app/worker/runtime GET requests. Requests, constraints and edits remain in browser memory; there are no uploads, analytics, API keys, remote providers, external actions or stored user documents. Exported files are user-triggered local downloads. Imported instructions cannot grant tool authority or request credentials: the model only embeds supplied text.

Cache API retains model files plus explicit worker source, WASM binary and module factory. A fresh worker can infer with all networking disabled **inside an already-open page warmed by online inference**; this was actually tested on local and production bundles. Offline navigation/reload/app-shell startup is NOT promised. Evicted/disabled caches require internet again. No user content is put in caches.

## Schema, limits and scheduling assumptions

Source object: `project`, `rules`, `slots`, `records`. See examples in `src/core.js`.

- 2–6 rules: unique nonempty `id`, `label` ≤80 chars, `description` ≤300 chars.
- 1–10 slots: unique `id`, existing rule `kind`, `start` and `end` in integer minutes since midnight. Start 0–1439, end 1–1440, start < end. All slots must be nonoverlapping, including slots with different services.
- 1–32 records: unique `id`, `description` ≤300 chars, `earliest` 0–1439, `latest` 1–1440 (earliest < latest), `minutes` 1–240, `priority` 1–9, `owner` ≤150 chars. Source text ≤30,000 chars. IDs ≤40, project ≤150, review notes ≤1,000 chars. Missing, empty, duplicate and unsupported inputs are rejected.
- One desk, one day, one request per slot and at most one slot per request. Service must match; the **entire** slot must lie inside the availability window, and its duration must meet required minutes. Short requests reserve the whole slot.
- Slot-mask DP processes approved requests once, retaining the best score per used-slot set. Score is `289 + priority` per placement, so count dominates every possible priority sum (≤32 × 9). At most 1,024 masks. Stable source/slot order resolves ties.
- No dates/timezones, parallel desks, travel, linked attendees, fairness guarantee, clinical triage, automatic availability verification or live calendar integration. Supplied priorities and times are unverified. A held or waitlisted request is retained, not discarded. Verify consent and availability before booking elsewhere.
- CSV prefixes formula-leading text with an apostrophe, including multiline cells. Numeric time/duration/priority fields remain numeric. JSON is the lossless audit source.

## Development / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds with `/daily-app2/20261114-23/` base. The required per-app `deploy` script exists but **do not use it for collection publication**. Use root `npm run predeploy` and root `npm run deploy` to preserve the combined gallery.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and checked-in observed reports. Two tiny synthetic inputs test expected identities, not general accuracy. Negation and out-of-domain requests can misclassify; required review is essential. Allocation objectives are computed planning metrics, not measured time savings or guaranteed attendance. Fixture tests use real inference; fake workers are used only to inject malformed/late/unsupported faults.
