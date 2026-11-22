# Shard Shelter

A local-AI failure-domain placement workroom for storage stewards. Informal location notes obscure correlated failures: having parity shards is not sufficient if too many live in one outage boundary. This app reconciles the inventory, audits every specified domain outage and constructs a minimum-cost **final-state** placement worksheet.

## Workflow

1. Paste/import source JSON or start with **Campus archive** / **Regional snapshots**. Declare independent failure domains and equal-shard-slot capacities, stripe data/parity counts, an up-to-domain-outage target, and every shard's location note, nonnegative integer move cost and boolean pin. All sample data is synthetic.
2. Explicitly select **Load AI & reconcile**. Real local neural embeddings compare location notes with domain descriptions. Top cosine matches and all alternatives appear for mandatory human review. Model download progress, inference chunk counts, cancellation and retry are provided.
3. Correct current domains, approve or hold **every** shard, and add multiline notes. Changing a domain resets approval. Undo restores the last review edit. Source and review changes invalidate applied exports. A held location withholds the entire plan, never silently removes a shard.
4. Apply the reviewed scenario. The no-move baseline enumerates all nonempty failed-domain subsets up to the target. A stripe with data k and parity m survives iff at most m shards are lost, assuming an ideal maximum-distance-separable erasure code. All loss witnesses, capacity usage and unsafe stripes are shown.
5. Exact bounded assignment searches all capacity/pin/outage-feasible final layouts, minimizing sum of supplied per-shard relocation costs; ties minimize number of moves. Branches exceeding capacity, parity or current best objective are pruned. Zero-cost moves are allowed. Pins stay in the reviewed current domain. Infeasible inventories receive no partial “safe” plan. Planned occupancy, every shard's origin/destination and all final outage cases are retained.
6. Download current **JSON**, **CSV** or **Markdown**, or copy the worksheet. JSON/Markdown preserve originals, neural evidence, reviews and full analysis. CSV keeps one row per original shard, including held/infeasible cases, current reviewed domain, note and proposed destination/cost. Formula-like strings are prefixed with an apostrophe for spreadsheets; JSON remains lossless. JSON audit reimport restores originals only and requires renewed AI/review.

No storage system is contacted, encoded, copied, deleted or configured. This is not an executable migration plan. Copy-before-delete order, temporary capacity and transient fault tolerance require separate operational planning.

## Real AI and deterministic boundaries

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 quantized ONNX; Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT), single-thread WASM CPU. Mean-pooled normalized 384-dimensional embeddings materially reconcile different location wording with supplied domain descriptions. No hard-coded answers, fake AI fallback, external provider, API keys or backend. Cosine similarity is **not confidence**. Nearest-domain inference always picks something, even for irrelevant, negated or unknown notes. Human verification is essential; semantic similarity does not prove physical independence.

After human review, subset enumeration, stripe-loss counting, exact cost optimization and invariant checks are deterministic. Current-layout safe-stripe count and supplied-unit move cost are computed comparisons, not measured speed/accuracy improvements. Exact-name matching is a transparent mapping-coverage baseline, not a quality guarantee.

All vector counts, 384-dimensional shapes, finite values and approximate unit norms are checked before suggestions. Worker envelopes/errors are checked. Run IDs protect worker fetches, late results and asynchronous file reads. Cancellation terminates the worker. A 180-second timeout fails clearly without fabricated output. Sources are data, not instructions or tool requests.

## Download, device and privacy requirements

- Explicit first load needs internet: approximately **23 MB model/tokenizer plus 27 MB WASM runtime**, plus a ~0.55 MB neural worker. Files download from this site, `huggingface.co` and its CDN (including `cas-bridge.xethub.hf.co` / HF CDN redirects). Model metadata follows the model host's current revision; not pinned.
- HTTPS/localhost, module workers, WebAssembly SIMD, Cache API for offline reuse, and several hundred MB available RAM. Single-thread **CPU** inference does not need WebGPU. Desktop Chrome tested with GPU disabled; physical phones, other browsers and low-memory devices untested. Failures show actionable requirements; no automatic fake mode.
- Only public runtime/model files travel over the network. All location descriptions, review notes and input records remain in browser memory/local worker. No content uploads, accounts, analytics, credentials or optional remote inference.
- Cache API retains worker/model/runtime files when supported. Private browsing, blocked storage or eviction can force another download. **Fresh-worker inference with all network blocked in an already-open warmed page is tested. Cold offline app navigation/reload is not promised.** Input/review data is not persisted; save JSON before closing.
- Immutable shared same-origin dependencies avoid duplicating large runtime files: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/paths. Byte hashes and protocol are in [runtime dependency audit](runtime-dependency-audit.json). Worker cache: `shard-shelter-worker-v1`; runtime cache: `circuit-cove-runtime-v1`; model cache managed by Transformers.js.

## Bounds and formats

- Source JSON ≤60,000 characters, title ≤200; source/audit JSON files ≤4 MB. Unsupported formats rejected. Audit envelopes restore their `originalInput` under the stricter source schema/limit.
- 2–4 unique failure domains, ID ≤50 and description ≤200 characters; integer capacity 0–10 equal-shard slots per domain.
- 1–3 unique stripes, 1–4 data and 1–4 parity shards, ≤6 shards per stripe. Exactly data + parity shard records per stripe.
- 1–10 total shards, unique ID ≤50; existing stripe ID, location ≤200 characters, integer moveCost 0–100000, boolean pinned. No bytes/variable-size packing or destination-specific transfer costs.
- Target 1–2 simultaneous failed domains, strictly fewer than the domain count. Every subset with 1 through target failures is checked; at most 10 subsets.
- At most 14 semantic texts, chunked in fours. Tokenizer `model_max_length` is 512; the worker's feature-extraction max_length argument is not relied upon to enforce a smaller limit. Short character-bounded English descriptions are intended; multilingual quality is untested.
- Notes ≤2,000 characters. Explicit pins/capacities/coding parameters are never inferred. Raw values survive JSON; CSV is spreadsheet-protected rather than byte-identical to raw strings.

## Limitations and interpretation

Independent whole-domain failures and ideal MDS coding are assumptions, not discovered facts. Racks in the same vulnerable building may **not** be independent domains. No latent corruption, compromised credentials, encryption, repair times, network costs, transfer limits, real-code decoding or durability probability is modeled. Outage safety is only the supplied finite scenario. If a location is unknown, hold it rather than trusting a plausible neural match. Plans require professional operational review; the app has no live-system access or external actions.

See [observed validation](VALIDATION.md) for actual fixture outcomes, defensive tests, independent optimizer checks and public deployment evidence. Build alone is not AI validation.

## Development / publishing

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261122-9/`. Required per-app `deploy: gh-pages -d dist` is retained **but must not be used to publish this collection**. Publish from root `/Volumes/ExternalHD/daily_app2` using its predeploy/deploy workflow, then verify Pages commit and public runtime bytes. Root deployment's existing conservative 1 GB guard is unchanged; deploy-only byte-identical geometry reuse was extended to `20261029-9`, preserving original sources and legacy JS URLs. Its real worker/PNG/STL import/export regression is checked separately. No digest is sent by this builder.
