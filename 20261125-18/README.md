# Count Orchard — 20261125-18

A local-first reporting worksheet for analysts reconciling informal “how many?” handoffs. Real sentence embeddings propose a counting contract; mandatory human review precedes exact computation and export. This is not a chat wrapper, database client or automatic reporting authority.

## Workflow

1. Paste/import JSON, or choose either synthetic example. Specify 2–8 counting profiles with `id`, `description` and mode `rows`, `present` or `distinct`; provide 1–24 reporting requests with `id`, `context` and `rows` (`id`, `value`).
2. Explicitly click **Load AI & interpret count intent**. Local MiniLM embeds rule descriptions and request contexts, then cosine similarity ranks the rules. No data values go to the model. A worker processes four texts per chunk, maximum 32 texts/eight chunks.
3. Inspect source text, original values and semantic candidates. Select another rule where needed, add a multiline note, approve or hold each request. “Approve all checked rules” is a deliberate user action, not model approval. Undo restores the previous review. Source changes require fresh inference; review edits invalidate applied exports.
4. Apply reviewed counts. Inspect one witness per original row, exclusions and the truthy baseline. Held requests remain in the full audit but are not counted.
5. Download current JSON/CSV/Markdown/SQLite SQL, or copy the Markdown worksheet. Reimport an audit JSON restores original inputs, requiring new AI/review; it never trusts imported computed decisions.

## Exact contract and useful output

- `rows`: count every row (`COUNT(*)` semantics), including explicit nulls.
- `present`: count non-null values, preserving repeats, empty strings, false and zero.
- `distinct`: count each different typed non-null value once. Strings are case-sensitive, not trimmed or Unicode-normalized. `0`, `false` and `"0"` differ; negative zero equals zero. Null never contributes; empty groups count zero.
- Values are explicit null, boolean, safe integer or string ≤200 characters. Missing properties, floats, objects and arrays are rejected. Each request allows 0–40 rows; IDs are unique ASCII letters/digits/underscore/hyphen. Title/context/descriptions ≤200 characters. Original JSON ≤240,000 characters; imported audit/file ≤1.5 MB. Invalid Unicode/control characters are rejected (tab/newline/CR accepted).
- Baseline is JavaScript truthiness per row: it skips null, false, zero and empty strings but retains repeats. Row inclusion differences are computed, not estimates of time saved, model accuracy or universal improvement. A distinct result can differ because of both deduplication and falsey values.
- JSON contains all originals, reviewed settings, held records, witnesses and metrics. CSV includes all rows and an explicit empty-group marker. Values use JSON encoding and type columns. Spreadsheet-formula-like text gets a leading apostrophe; signed numeric values remain numeric. Markdown is plain-text review material, not sanitized HTML.
- SQL is approved-only, read-only SQLite CTE QA with `actual_count` and `expected_count`. It encodes typed identities into TEXT tokens, preventing SQLite from collapsing boolean/numeric/string identities; it is **not** a drop-in raw-column production query. Run in a scratch SQLite database. No database is contacted by the app.

## Real AI/runtime/downloads

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, normalized mean-pooled 384-dimensional sentence embeddings. Semantic ranking is not confidence or logical reasoning.
- Shared immutable worker uses Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT) WASM CPU, single thread. No API key, provider integration, backend or agent credentials.
- First use needs internet and approximately **50 MB**: 23 MB weights + 27 MB WASM, plus small tokenizer/JS files. Downloads come from Hugging Face and delivery hosts. Shared runtime/worker assets are same-origin.
- Requires module workers and WebAssembly SIMD; current desktop Chrome recommended. WebGPU is unnecessary and tests disabled GPU. Small phones can be slow or memory-limited. Real phone hardware, other engines and cold offline startup are untested.
- Descriptions and contexts are ≤200 characters. Pipeline passes `max_length:256`, but the feature extractor uses the tokenizer's own truncation limit (512); **256 is not an independently enforced token cap**. Short inputs avoid reliance on long-context behavior; unusual text may still truncate.
- Download/batch progress is visible. Cancel terminates the worker and invalidates the run token. Source edits, pending imports/fetches and stale callbacks cannot replace newer results. Timeout is 180 seconds. Network, worker/runtime and malformed vector errors are visible; no fake fallback.

### Immutable collection dependencies

Keep these apps/assets published. `runtime-provenance.json` records exact hashes:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The app code is bundled locally; sharing the already-published immutable CPU runtime avoids another 27 MB per app. No new deploy deduplication rules or size-limit changes are required.

## Privacy and offline scope

Content is held in page/worker memory and is not uploaded. Only descriptions/context enter the local model; imported instructions are data, not authority. No external actions, analytics or remote AI paths. Downloads explicitly save the current reviewed content to the user's chosen location.

Cache API retains public model/runtime/worker files where available. **Tested offline claim: a fresh worker can infer in an already-open warmed page.** Offline navigation/reload/app-shell startup is not promised. Private mode/cache eviction or unavailable storage can require new downloads; failures stay visible. Model host revision URLs are supplied by the shared runtime rather than pinned by this app.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), machine-readable reports and runnable scripts. Two real CPU inference batches matched 6/6 intended rules, but a separate negation challenge (“Do not deduplicate”) selected distinct rather than non-null counting. Human review is essential; these tiny fixtures do not establish general accuracy. Baseline differences establish count semantics only. No inference confidence percentage is shown.

Independent Python/SQLite validates exact counting and actual downloaded artifacts. Production-bundle checks cover max batch, preserved originals, schema/input errors, review/edit/hold/undo, copy/download/reimport, worker/network/model failure, unsupported runtime, malformed output, timeouts, cancellation/retry, late imports, stale callbacks, warmed-page offline inference, network privacy and desktop/320/390-pixel layouts.

## Build and publish

```sh
npm install
npm run predeploy
```

Vite base `/daily-app2/20261125-18/`; per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist` with gh-pages installed. **Publish only via root combined-site workflow**, never this app's deploy script. Root assembly preserves the existing collection and unchanged 1,000,000,000-byte guard. No digest is sent by this builder.
