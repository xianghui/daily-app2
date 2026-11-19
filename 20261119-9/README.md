# Replica Compass — 20261119-9

A local-AI planning worksheet for small-system architecture reviews. Classify rough workload notes into read/retrieve versus write/modify groups, review the counts, enumerate replica quorum pairs under intersection and offline-node constraints, then export a complete advisory worksheet. No servers are queried or configured.

Distinct from Quorum Canopy (proxy attendance chains), Circuit Cove (no-wait call-pool sizing), and Search Ladder (sequential document lookup order). This utility models overlapping replica acknowledgements, not votes or ordered searches. An early ranked-ballot experiment was discarded after discovering Ballot Bridge; it is not included in this release.

## Run and publish

React + Vite: `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261119-9/`. Required app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish **only from the collection root** with its combined `deploy/`; per-app deploy would replace the collection.

## Workflow / formats

1. Load a synthetic example, paste source JSON or import `.json` under 2 MB. Shape: `{context, failures, nodes:[{id,latency}], observations:[{id,description,count}]}`. `latency` is assumed round-trip acknowledgement milliseconds. Edit node assumptions and tolerated offline count in source.
2. Explicitly **Load AI & reconcile inputs**. Neural embeddings classify each note against supplied fixed read/write anchors. No inference runs before this action.
3. Review each source and cosine evidence, correct the operation, edit counts/notes, approve or hold. Mixed read/write descriptions should be split in source or held. Every identity/count edit resets approval. Undo restores the previous review. Any hold blocks the whole-cohort plan, rather than silently removing operations.
4. **Apply reviewed plan** snapshots current review and computes every integer R/W pair. All source records remain. Further edits clear the snapshot and disable exports.
5. Download actual JSON (lossless original input, evidence, reviews, all quorum pairs and selected plan), CSV (every workload original/review), Markdown (all pairs, source/review audit, nodes and verification checklist) or copy Markdown. CSV preserves quotes/newlines and prefixes formula-leading strings with an apostrophe; JSON is lossless. CSV is a workload audit, not the full node/quorum workbook: use JSON/Markdown for that.
6. Reimport a JSON audit to restore **originals only**. Prior approvals or edited counts are not trusted automatically. To reuse edits as a new cohort, explicitly put them in source.

Bounds: 3–9 nodes; unique 1–40 ASCII alphanumeric/underscore/hyphen IDs; finite node latencies 0.01–100,000 ms; offline count integer 0..N−1; 1–24 workload groups, integer counts 1..1,000,000; context/descriptions 1–300 characters; source ≤50,000 characters; notes ≤1,000 characters; JSON imports ≤2 MB. Audit envelopes have their own file bound, followed by the stricter original-source bound. PDF, CSV and other input formats are unsupported with an error.

## Actual AI / runtime / privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled 384-dimensional neural embeddings. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU one thread. No WebGPU required.
- Up to 26 texts in four-text chunks. Tokenizer model ceiling is 512 tokens; the feature-extraction pipeline ignores the supplied `max_length:256`, so it is **not** an enforced 256-token limit. Character limits bound input. Finite normalized vector count/dimension is validated before classification.
- First load: approximately 23 MB weights plus 27 MB WASM and runtime/tokenizer files; internet required. UI discloses this before loading, shows model/file and chunk progress, cancellation/retry and a 180-second timeout.
- Immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older apps/paths. This avoids deploying duplicate runtime bytes. Byte hashes are recorded in asset audits.
- Model/tokenizer downloads use Hugging Face and its CDN/Xet hosts. Model revision follows upstream main, not an immutable pin. No user content is sent in requests; only static GET/HEAD downloads observed. No API keys, optional remote provider, telemetry, source persistence, personal fixtures or agent credentials. Imported instructions stay inert data.
- Cache API stores worker, factory/binary and model assets, not content. Tested offline claim: **fresh-worker real inference in an already-open warmed page with all network disabled**. No offline app-shell startup/reload/navigation promise. Cache eviction/private mode may require downloading again.
- Requires WebAssembly SIMD, module workers, Cache API and several hundred MB RAM. Tested desktop Chrome with GPU disabled and emulated 320/390px layouts. Physical phones, Firefox, Safari, low-memory devices, screen readers and degraded-node execution are untested. Runtime/download failures show errors with no fake AI fallback. Run IDs guard file reads, worker fetching/replies; input changes/cancel terminate workers and late callbacks cannot replace newer results.

## Deterministic planning assumptions

For fixed N replicas, enumerate R,W ∈ 1..N. Require R+W>N for read/write overlap and 2W>N for write/write overlap. To tolerate **any** f offline replicas by count, require R≤N−f and W≤N−f. No feasible pair produces an explicit infeasible report, not an unsafe substitute.

Sort supplied all-online node acknowledgement latencies. Parallel requests complete at the Rth fastest read acknowledgement and Wth fastest write acknowledgement. Minimize `(readCount × readLatency + writeCount × writeLatency) / totalCount`. Exact ties favor smaller R+W, then smaller R. Compare with R=W=N on the same workload. The baseline has zero offline tolerance and is explicitly labeled when it fails the target; latency and availability are different axes.

These are **assumed all-online latency scenarios**, not measured speedups or failure-mode latency forecasts. Intersection alone does not establish linearizability or a real implementation's consistency. Version-aware reads, a fixed membership and any-quorum protocol are assumed; no sloppy quorums, transactions, read repair, timeouts, client overhead, concurrent membership changes or latency distributions. Independent engineering review is essential.

AI classification is not semantic truth or intent verification. Two tiny fixtures matching all six groups do not establish general accuracy; irrelevant text still receives a nearest label. Human holds are required for unsuitable data.

## Validation

`python3 serve-built.py` serves the actual production bundle with production base and shared assets at localhost:6961. Run `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node newer-run-test.cjs`, `node import-stale-test.cjs`, `python3 artifact-test.py`. Browser tests use locally installed Playwright at `/Users/hsianghui/.openclaw/workspace/node_modules/playwright`; adjust for another installation. Browser suite accepts `APP_URL`/`REPORT` for assembled/public runs. Fault injection is used only for defensive/race cases, not successful AI evidence.

`node gallery-test.cjs` compiles every inline gallery script and checks exactly one new AI entry plus every prior entry unchanged. `gallery-ui-test.cjs` accepts `GALLERY_URL`/`GALLERY_REPORT`; `asset-audit.py` accepts `ASSET_BASE`/`ASSET_REPORT` and compares against the assembled root `deploy/`. Do not rebuild `deploy/` concurrently with tests against it.

See [VALIDATION.md](VALIDATION.md) and JSON reports for observed results and publication verification. No digest sent; original collection remains read-only.
