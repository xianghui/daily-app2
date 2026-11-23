# Query Quay

A local-AI URL migration worksheet for web operations analysts. Mixed handoff lists often combine public campaign links, catalog searches and signed downloads. Removing all queries collapses distinct resources; rewriting a signed URL can invalidate it. This tool matches **context to explicit policies**, requires review and exports a collision-checked manifest. It never fetches source URLs or modifies websites.

## Workflow and formats

1. Choose either synthetic example, paste JSON or import source/audit `.json` ≤1 MB. Input has 2–5 `plans` and 1–24 `records` (schema below). Edit policy goals/constraints in the JSON.
2. Explicitly select **Load AI & reconcile**. Initial download is approximately **23 MB model + 27 MB CPU runtime**, plus code, requiring internet. Progress and cancellation are visible. No model-host traffic occurs before loading.
3. Inspect source context, original URL, policy and cosine scores. Edit URLs, choose a different policy, add notes, approve or hold every row. Similarity is not confidence or proof of URL equivalence. Instructions embedded in imported text have no tool authority.
4. **Apply reviewed scenario** runs deterministic validation/canonicalization and collision checks. Every row sharing a canonical URL is marked collision and excluded from release; hold a duplicate or change its reviewed URL/policy, then reapply. Identical repeats also collide. Held/invalid rows stay in the audit. A collision with a held/invalid row is not checked; the manifest concerns released records only.
5. Download complete **JSON/CSV/Markdown**, ready-only **Manifest JSON**, or copy Markdown. Any edit invalidates the applied snapshot. Policy/URL edits reset approval. Undo restores the last review edit (100 edits). Originals are retained. Audit reimport restores originals only and requires renewed inference/review.

```json
{"plans":[{"id":"catalog","description":"Product catalog filters: preserve all values; sort names only","mode":"form","drop":[],"sort":true},{"id":"signed","description":"Signed download links: preserve exact URL bytes","mode":"opaque","drop":[],"sort":false}],"records":[{"id":"item-1","context":"Secure expiring asset download whose signature covers exact URL bytes","raw":"https://example.test/file?z=2&a=%2f&sig=abc"}]}
```

Records: unique `id` ≤80 characters, `context` ≤200, string `raw` ≤600. Policies: unique `id` ≤60, `description` ≤200, `mode` form/opaque, boolean `sort`, `drop` list of ≤12 distinct exact case-sensitive ASCII field names (letter first, letters/digits/underscore, ≤40). Opaque policies require empty drop and sort=false. Source JSON ≤24,000 characters; review notes ≤2,000. Larger audit import envelope has a separate 1 MB bound, while extracted originals still meet source limits.

## Real AI, not a heuristic classifier

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), normalized mean-pooled 384-dimensional embeddings on single-thread **WASM CPU**. Context and policy descriptions become embeddings; cosine ranking proposes the closest policy. Raw URLs are not passed to the model. Vectors are validated for count, dimension, finite values and unit norm. Four-text batches; context/description ≤200 characters; actual tokenizer maximum 512 tokens (the feature-extraction pipeline ignores supplied max_length 256). Upstream revision is main, not immutable, so future model changes may affect rankings.

AI materially selects which transformation is proposed: identical URL bytes paired with campaign context yield tracking removal/form encoding, while signed-download context yields byte-preserving output. Tests exercise this with real weights. Parsing, sorting, pair conservation, collisions, human gating, comparisons and exports are deterministic. There is no generated text, canned response, silent heuristic fallback or optional remote provider.

AI cannot determine actual server semantics, policy suitability, access authorization or signature validity. Unrelated text always has a nearest policy. Negation, competing purposes and missing context may misroute; verify with source-system documentation and hold uncertain rows. The tiny fixtures are not an accuracy benchmark.

## Exact supported URL semantics

Only absolute lowercase `http://` or `https://` ASCII URLs ≤600, without credentials, literal whitespace/control characters, backslashes or malformed percent escapes. Percent-encode Unicode/spaces. No relative URLs, other schemes or remote validation. Invalid rows fail closed; reviewed edits remain reversible.

- **Opaque**: after basic validation, canonical output is the original reviewed string byte-for-byte, including query order, escape case, empty query markers, host spelling and dot paths. UTF-8 query decoding is not required. Evidence pairs use browser parsing for inspection only.
- **Form**: browser WHATWG URL host/port/path normalization, strict percent-encoded UTF-8 query validation, application/x-www-form-urlencoded decode/serialize (`+` means space). Drop only exact approved names. Optional stable lexicographic field-name sort (ASCII names follow code-unit order); repeated values retain source order. Empty values remain, keys without `=` serialize with it. Escape spelling normalizes. Fragments remain. Empty separators/empty query delimiters are not preserved. No case folding of field names, speculative tracking inference, duplicate-value sorting, merging or deduplication.
- Deterministic checks prove retained query pairs round-trip and kept+removed pair counts equal originals. Opaque check proves byte identity. This does not establish that form normalization preserves a particular server's behavior. Do not select form mode for signatures, order-sensitive endpoints or byte-sensitive query parsers.
- Collision scope is exact canonical string equality within approved valid records, not resource identity across servers. Fragments intentionally distinguish strings. No security, cache-poisoning, deduplication or redirect correctness guarantee.

## Privacy, runtime and offline scope

No keys, paid services, analytics, agent credentials or user-content uploads. User URLs, contexts, vectors and reviews remain in browser memory. Only public model/runtime files are downloaded from Hugging Face/CDN and this collection. User-requested exports are browser downloads; no source URL is navigated or fetched. Avoid putting secrets into URLs or committing real lists. All examples are synthetic `.test` hosts.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB available RAM is tested. **No WebGPU is required**; WASM CPU is the default, not an untested fallback. Other engines, physical phones and low-memory hardware are untested. Responsive emulation is not phone inference certification.

Immutable same-origin shared assets are reused to keep the collection below its existing size guard:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve originating builds. `runtime-provenance.json` contains inspected hashes. Worker protocol `{id,texts}` → `{id,type,vectors/info/done/total/error}`. Worker source cache: `query-quay-worker-v1`; factory/WASM: `circuit-cove-runtime-v1`; model: Transformers.js Cache API. Actual test: successful online run, terminate worker, disable all network, create fresh worker and run real inference in **already-open warmed page**. Offline navigation/reload is not claimed. Cache eviction, private browsing and storage policies can force redownload.

Cancellation terminates workers. Run IDs protect pending fetches, file reads and late results. Timeout 180 seconds; explicit retry. Missing WebAssembly/workers, network/runtime failures and malformed vectors show actionable errors, never fabricated suggestions.

## Artifacts and comparison

Complete JSON is lossless and includes originalInput, reviews, checks, collision witnesses and metrics. CSV quotes commas/quotes/newlines and prefixes formula-leading text (`= + - @ TAB CR`) with an apostrophe; JSON retains exact values. Markdown includes escaped JSON text, not rendered user markup. Manifest JSON contains only ready rows: `{id,source,canonical,policy}`. Every released canonical string is unique within that manifest; blocked/collision/held rows remain in complete audits. Reimport does not apply historical reviews automatically.

Baseline is browser-normalized URL with **entire query removed**, keeping fragment. Displayed `lostDistinctions` counts pairs of approved valid records with equal baseline but unequal reviewed canonical URLs. `changed` counts altered valid URLs (including collisions), not measured savings. `exactChecks` counts deterministic byte/pair checks including collisions. These are recomputed batch statistics, not model confidence, universal correctness or productivity percentages.

## Build and publication

React + Vite, base `/daily-app2/20261124-2/`; `npm install`, `npm run dev`, `npm run predeploy`. Required scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. Publish only through the **root combined-site workflow**; individual deploy would replace the collection.

See VALIDATION.md and machine-readable reports for actual checks. Collection size maintenance extends existing deploy-only byte-identical legacy geometry reuse to `20261029-30`, retaining source builds and compatibility JS URLs; preserve shared `20261028-24`. The affected legacy worker/import/export/restoration is regression-tested. No guard increase or deletion of old gallery entries.

Public release verified: matching built Pages commit `423e1b2f578184d1521209ca8194438381fdd753` and successful workflow `45224243940`. Nine public app/gallery/runtime asset byte matches, both real-model fixtures, context-only AI impact, collision hold/undo/policy correction, reviewed exports, 24-record batching, fresh-worker offline and privacy checks passed. Public downloads independently passed 411 artifact assertions; all 831 gallery cards remain intact. Five affected legacy asset matches and actual import/export/restoration regression passed. Combined site **999,608,808 bytes**, below the unchanged guard. Physical phones, other engines, cold offline startup and server equivalence remain untested. No digest sent.
