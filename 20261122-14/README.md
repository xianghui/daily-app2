# Token Passage — workflow deadlock workroom

A local AI-assisted worksheet for operations analysts turning informal concurrent SOP sketches into a bounded token-flow model. Unlike route connectivity, this accounts for consumed resources, atomic actions and competing interleavings. No workflow execution, database access or external actions.

## Workflow
1. Paste source JSON or import source/audit `.json` (≤4 MB). Use **Two-resource trap** or **Editorial handoff** for synthetic examples.
2. Define 2–8 `places`: unique `id`, semantic `description`, `initial` tokens and `capacity` (1 or 2). Define positive goal counts on unique existing place IDs. Goals mean **at least** those counts.
3. Define 1–16 `transitions` with unique IDs and nonempty `consume` / `produce` arrays of `{place: informal description, count: 1 or 2}`. Maximum 48 total arcs. Token counts and rules are supplied, not generated.
4. Explicitly **Load AI & reconcile**. Review every inferred place and count using its original note and similarity evidence. Edit, approve, hold or undo. Counts/place edits reset approval. Any hold withholds the entire analysis.
5. Apply reviewed scenario. Read shortest terminal deadlock witnesses, blocking reasons, a shortest completion path, unreachable actions and all reachable markings. Change the source to evaluate a different acquisition policy; no real process changes occur.
6. Download current JSON, full arc CSV, state/path CSV or Markdown; copy Markdown. Source/review changes disable exports until re-applied. JSON/Markdown retain all originals/reviews, including held items. JSON reimport restores originals only, requiring fresh inference/review. Work stays in page memory; closing loses unsaved work.

## Real AI, not a canned response
Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX (~23 MB). Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT); single-thread WASM CPU, not WebGPU. Mean-pooled normalized 384-value embeddings match each source arc against all place descriptions via cosine similarity. Real inference batches four texts. Vector count, dimension, finite values and normalization are validated. Pipeline tokenizer config enforces 512 tokens; its supplied `max_length:256` is not claimed effective. Short descriptions ≤200 characters bound the practical context.

IDs ≤50 characters; title/descriptions ≤200; source ≤60,000 characters; review notes ≤2,000. No credentials, backend or optional provider integration. Similarity is not confidence; identical meanings, negation and unknown stages can mislink. Always review all arcs. Imported instructions remain plain embedding data and cannot invoke tools or request credentials.

## Exact deterministic step
After human review, breadth-first search enumerates reachable integer markings under supplied capacities, at most 3^8 = 6,561. A transition fires iff it can consume all required tokens and the resulting marking stays within every capacity. Repeated reviewed place IDs within one side are summed. Consume and produce on the same place operate atomically. Counts need not conserve total tokens. A non-goal state without any enabled action is a terminal deadlock; a goal terminal is not. Breadth-first parent paths give shortest witnesses by **number of firings**, not duration. All states including goal states are explored. Existence of a goal path is not universal completion.

The baseline only checks which actions are initially enabled. The full analysis can expose later traps despite a ready start. Displayed counts are computed from reviewed assumptions, not accuracy, timing or savings estimates. No time, fairness, inhibitor/reset arcs, unbounded places, livelock classification or hidden actions are modeled. Lack of a terminal deadlock does not guarantee eventual completion. This is not real-system safety certification.

## Hosting, devices and data flow
GitHub Pages static app, React + Vite. Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, WASM factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` **must remain published**. Runtime download ~27 MB plus worker/factory ~0.6 MB. First load requires internet to Hugging Face/CDN for public model files and same-origin runtime. No user content is uploaded. No models requested before explicit loading. No shared keys or agent credentials.

Current desktop Chrome on macOS with GPU disabled was tested. Requires HTTPS/localhost, module workers, WebAssembly SIMD, Cache API for persistent offline cache and several hundred MB available memory. Physical mobile devices and other browsers untested. Cancellation terminates workers; 180-second timeout and run identities guard stale results, including async file/source downloads. Errors never become fake suggestions. Retry after fixing network/device issues; no silent remote fallback.

Cache API caches worker, factory, WASM and model files. Offline **fresh-worker inference within an already-open warmed page** tested. Cold offline reload/app-shell navigation is not promised. Cache eviction/storage denial requires internet again. Model-host network downloads are distinct from content uploads. The default path only downloads public files.

## Artifacts and verification
JSON and Markdown are lossless full audits. Arc CSV preserves all arcs and reviewed counts/notes; state CSV includes every marking and shortest transition-path JSON. CSV quotes commas/quotes/newlines and apostrophe-escapes formula-like leading strings. Genuine numeric counts stay numeric. JSON is the lossless interchange. Import limit is independent of source limit; restored originals must satisfy the source schema.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual outcomes. `npm run predeploy` builds the app. Root `npm run predeploy`, then root `npm run deploy` publishes the combined gallery, never individual app deploy. Per-app scripts/dependency are retained per collection contract. Existing deploy-only byte-identical geometry sharing additionally covers `20261029-11`; source builds and compatibility JS URLs remain intact, and legacy imports/exports are regression-tested. The 1 GB guard is unchanged.
