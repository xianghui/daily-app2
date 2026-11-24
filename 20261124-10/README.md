# Precondition Desk

Local-first API handoff preflight for integration engineers and content tooling maintainers. Informal “save this edit”, “publish new” and “replace existing” notes often omit the intended existence/version protection. Real browser MiniLM embeddings propose a write-intent contract, then exact HTTP precondition checks expose differences from unconditional PUT. Every proposal requires human review.

## Workflow and data

1. Choose **Editorial sync** or **Asset handoff**, paste source JSON or import source/audit `.json` ≤1 MB. Shape: `{plans:[{id,description,mode}],records:[{id,context,raw}]}`. Modes: `version` (If-Match saved ETag), `create` (If-None-Match *), `exists` (If-Match *). Edit descriptions/modes to set goals before loading.
2. `raw` is a JSON-encoded snapshot object: `{path,exists,currentTag,savedTag}`. `exists` is boolean; both tag keys are mandatory, each a quoted ETag string or null. Example decoded snapshot: `{ "path":"/pages/intro", "exists":true, "currentTag":"\"r7\"", "savedTag":"\"r7\"" }`.
3. Explicitly **Load AI & reconcile**. AI embeds intent descriptions and record contexts only; it does not read snapshots, inspect endpoints or infer a current ETag. Normalized semantic vectors rank candidates. Inspect all similarities, original notes and editable snapshot; verify the intended mode. Similarity is not confidence and there is no automatic trustworthy cutoff.
4. Correct the intent, snapshot or multiline reviewer note; approve each worksheet entry or hold it. Intent/snapshot edits reset approval. Any review edit clears the export snapshot. Undo restores up to 100 preceding review edits. Original input is never modified.
5. **Apply reviewed scenario** validates the full batch. Approved malformed snapshots are blocked, held records are retained, and valid entries receive exact headers and a predicted precondition result. “Valid worksheet” does NOT mean its precondition passes. A failed precondition is a useful worksheet result, not invalid input.
6. Download complete JSON/CSV/Markdown audits; **Release JSON** contains approved valid dry-run entries, including predicted failures, with method PUT, path, headers and observed snapshot. Held/blocked rows remain in full audits only. No body, origin, shell commands or executable request is generated. Copy Markdown is available in secure contexts. Audit reimport restores originals only and requires fresh inference/review. CSV is not an import format. Formula-leading CSV cells get an apostrophe; JSON preserves exact text.

## Exact scope and limitations

This is a bounded single-ETag, independent-snapshot PUT precondition model following [RFC 9110 If-Match](https://www.rfc-editor.org/rfc/rfc9110.html#section-13.1.1) and [If-None-Match](https://www.rfc-editor.org/rfc/rfc9110.html#section-13.1.2). Strong comparison requires both validators strong and opaque strings exactly equal. Weak tags never satisfy If-Match. If-Match * tests existence only; If-None-Match * tests absence only. Failed PUT preconditions predict 412; passing indicates only that the selected condition holds on the supplied snapshot—not HTTP success or authorization. “version” requires a saved ETag and, for an existing resource, a current ETag; missing evidence blocks evaluation instead of guessing. Absent representations must have currentTag null. Tags use case-sensitive W/, quoted visible ASCII excluding embedded double quotes; commas/backslashes inside the opaque tag are literal. Empty opaque values are allowed. Non-ASCII obs-text, lists, date validators, GET/HEAD cache validation, multiple interacting conditions, request bodies, authentication and server-specific processing are outside scope. No actual API is contacted.

2–5 unique contracts (IDs ≤60, descriptions ≤200 characters); 1–24 unique records (IDs ≤80, context ≤200, raw ≤1500); source JSON ≤50,000 characters; notes ≤2000. Root-relative paths ≤200 ASCII characters from A–Z/a–z/0–9/underscore/dot/slash/tilde/hyphen, no double-leading slash, query, fragment, dot/dot-dot segments or encoded paths. Snapshots are independent, not a sequential replay. The model can misread negation and competing intents: the observed negation challenge selected existence-only instead of create-only. Contract descriptions can also be misleading; human verification is mandatory.

The baseline is unconditional PUT, with no existence/version precondition. Counts show valid reviewed snapshot rejections absent from that baseline. They do not measure actual prevented overwrites, time savings or AI accuracy. Held/blocked entries do not enter comparisons. Server state can change after a snapshot; sending a reviewed conditional request would still need separate authorization and real server checks, outside this app.

## Real AI/runtime and requirements

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. Normalized mean-pooled 384-dimensional vectors; finite values/count/dimension/unit norm validated before ranking. Four texts per inference chunk. Worker supplies max_length 256, but feature-extraction's actual tokenizer cap is 512 tokens; app text inputs are ≤200 characters. English intent prose recommended. Model main revision is unpinned; upstream updates may alter results. No fake responses or deterministic fallback on model failure.

Initial download approximately 23 MB model + 27 MB WASM plus code/tokenizer files. Internet needed initially; several hundred MB free RAM recommended. Tested on current desktop Chrome with module workers, WebAssembly SIMD and Cache API. CPU default requires no WebGPU. Physical phones, low-memory hardware and other browser engines untested. Download/file and chunk progress, cancellation and explicit retry are shown. Worker construction/runtime/network errors, malformed vectors and 180-second timeout fail closed.

Immutable same-origin shared assets, verified in runtime-provenance.json (preserve originating builds):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Complete runtime is bundled on this site, not a runtime CDN. Worker source/factory/WASM use Cache API; Transformers.js caches public model files. Cache eviction/private browsing may require redownload. **Tested offline scope: fresh-worker real inference in an already-open, successfully warmed page only.** No offline app-shell navigation/reload or persistent content storage claimed. Run IDs guard pending fetches, imports and late messages; cancellation terminates workers.

## Privacy

Inputs/reviews remain in page memory and user-initiated downloads/clipboard. Only public model/tokenizer files download from Hugging Face/CDNs; runtime/code downloads from this site. No user-content request bodies, content-bearing URLs, endpoint requests, analytics, API keys, remote inference or optional provider integration. Text is inert data, never authority, executable instructions or credential requests. All fixtures are synthetic. No sending, account changes or database writes.

## Validation and deployment

See VALIDATION.md and machine-readable reports. Two real inference batches matched eight intended intents and all eight known snapshot outcomes; this tiny set is not a general accuracy claim. A context-only change with identical ETags changes the real proposed intent and condition result. Tests exercise max-24 chunking, invalid data, edit/hold/undo/blocked entries, actual downloads parsed independently, warmed offline inference, network/runtime faults, cancellation and stale async protection, desktop/320/390px layouts.

React + Vite base `/daily-app2/20261124-10/`; `npm install`, `npm run predeploy`. Per-app scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish through repository ROOT combined deploy workflow only**, never this app's deploy script. The unchanged 1 GB guard requires one more byte-identical deploy-only legacy geometry runtime reuse: `20261031-27` → `20261028-24`; source builds/compatibility URLs retained and actual import/export/restoration regression checked. This legacy sharing does not change AI behavior.

Public app: https://xianghui.github.io/daily-app2/20261124-10/ — matching built Pages commit, successful workflow and actual public inference/assets/artifacts verified; see publication-status.json.
