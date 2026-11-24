# Accept Atelier

A local-first media negotiation QA worksheet for API integration testers. Client handoff notes often say “for the terminal” or “data feed” rather than specifying an exact Accept contract. Real MiniLM semantic inference proposes the contract; mandatory human review and exact bounded media negotiation produce usable test fixtures. This is distinct from request preconditions, encoding conversion, cache simulation or retry-budget allocation.

## Use / input / output

1. Choose **Client handoff** or **Release probes** (synthetic data only), paste JSON or import `.json` ≤1 MB. Source shape: `{plans:[{id,description,accept}],records:[{id,context,raw}]}`. `raw` is JSON text such as `{"offered":["text/html","application/json","text/plain"]}`. Edit the contract descriptions and Accept fields to set goals/constraints before running.
2. Explicitly **Load AI & reconcile**. AI embeds the English client descriptions and contexts, not the offered lists. Normalized cosine similarities propose a contract and expose alternatives. Nearest similarity is not confidence or verification of requirements. Negation can misroute.
3. Review the original context, proposed contract, ordered offered types and effective per-type quality/specificity witness. Correct contracts or case JSON; add multiline reviewer notes. Approve or hold every case. Contract/case edits reset approval. Any edit invalidates the applied export. Undo retains up to 100 preceding review edits; originals are immutable.
4. **Apply reviewed scenario** validates every record. Malformed approved cases become blocked; held cases remain in audits. A valid 406 expectation is useful, not malformed input.
5. Download JSON/CSV/Markdown complete audits or **Release JSON** with only approved valid fixtures: exact Accept, offered list, expected media (null for 406) and expected status. Copy Markdown works in secure contexts. CSV protects formula-leading cells with an apostrophe; JSON preserves exact text. Audit reimport restores originals only, requiring new AI and review. CSV is export-only.

No endpoints, files, accounts or server settings are changed. No executable requests are generated.

## Real AI / runtime / licensing

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; upstream sentence-transformers/all-MiniLM-L6-v2. Model host Hugging Face and its redirect/CDN domains. Model revision currently uses host `main`; upstream availability/change is a limitation.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web CPU/WASM, MIT. Mean-pooled normalized 384-value embeddings, actual four-text inference chunks. Shared pipeline passes `max_length:256`, but feature extraction ignores that setting; tokenizer's effective `model_max_length` is 512. App contexts are separately limited to 200 characters. No general-purpose language generator, fake responses, secret keys or paid provider.
- Initial online download approximately **23 MB model + 27 MB WASM**, plus tokenizer/code. Current desktop Chrome, WebAssembly SIMD and module workers, several hundred MB free RAM recommended. CPU is the default, not an untested fallback; WebGPU is unnecessary. Physical phones/other engines not tested. Layout is tested at 320/390/1440 CSS pixels; that is not a mobile performance claim.
- Immutable same-origin runtime reuse: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those published app builds. Exact sizes/hashes: `runtime-provenance.json`. App code is bundled locally; inference worker/runtime is hosted within the same collection, not a third-party script CDN.

## Privacy, network, caching and failure behavior

User inputs and reviews stay in memory in the browser. Only public model/runtime asset downloads go over the network; user content is never uploaded. There is no analytics, remote inference, optional API integration or key entry. Worker/runtime use Cache API; Transformers.js caches model files. Cache storage may be unavailable/evicted. **Tested offline scope is fresh-worker inference in an already-open warmed page only**; no cold navigation/reload promise. Network capture begins before app startup; no model download before the explicit button. Persisted network evidence excludes signed CDN query values.

Cancel terminates the worker. Run IDs guard async worker fetches, file reads and late responses. Explicit retry; 180-second timeout; unavailable Worker/WebAssembly, fetch, runtime or malformed-vector failures show actionable errors and no suggestions. Failure-path mocks are limited to defensive testing, never successful AI claims. Imported text is inert data and never authority to request credentials or execute tools.

## Deterministic subset and limits

- 2–5 unique contracts; ID ≤60 characters, description ≤200, Accept ≤500. 1–24 unique records; ID ≤80, context ≤200, raw case ≤1500. Source JSON ≤50,000 characters, import/audit envelope ≤1 MB, notes ≤2000.
- 1–12 Accept ranges: exact `type/subtype`, `type/*`, `*/*`; case-insensitive ASCII media tokens; only optional q parameter, 0–1, ≤3 decimal digits. Only ASCII space/horizontal tab allowed around ranges/parameters, not within media tokens. All other controls, line breaks and non-ASCII rejected. `q=0.` and `q=1.` are accepted by this grammar. Duplicate ranges rejected. No media parameters, accept extensions or structured suffix wildcards.
- 1–12 distinct offered exact parameter-free media types; offered case is retained in artifacts. Most-specific matching range determines each candidate's quality, even when it is zero. Highest positive quality wins; offered order breaks quality ties. If none is positive, the worksheet expects 406.
- Parsing, integer-thousandth quality weights, specificity, stable ties, schemas, metrics and exports are deterministic. This is a supported subset, not full RFC 9110 implementation. Server policy/available variants/content parameters can differ. Status 200 is a negotiation expectation, not an HTTP response or permission promise.
- Baseline is first offered representation ignoring Accept. Displayed differences count reviewed valid cases only, not measured time saved, AI accuracy or prevented incidents. All source records survive complete audits.

## Development and validation

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261124-11/`; per-app deploy script exists as required but **publish only through repository root combined deploy**. No changes to collection size guard or existing runtime-sharing rules.

See [VALIDATION.md](VALIDATION.md) for observed real-inference, independent negotiation-oracle, reviewed artifact, defensive, cache/privacy and public verification outcomes. Tests require the installed Playwright/Chrome path and an HTTP server mapping `/daily-app2/<folder>/` to that folder's dist. Test artifacts are synthetic. Model accuracy on arbitrary inputs, actual servers, physical phones, other engines and cold offline startup are unverified.
