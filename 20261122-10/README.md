# Index Canopy

An order-preserving binary runbook/menu designer for service-desk leads. Short free-text lookup tallies often name the same destination differently; a count-balanced directory also ignores very uneven usage. This utility reconciles those tallies with **real local neural inference**, then designs an optimal ordered binary menu from the reviewed counts.

## Workflow

1. Enter source JSON or load **Helpdesk directory** / **Library service desk** (synthetic). `destinations` are in the fixed order you want retained. Each has `id` and `description`. `tallies` have unique `id`, rough `subject` and nonnegative integer `count` (frequency, not money). Supply a title. Import source or previous audit JSON; audit import restores originals only.
2. Explicitly click **Load AI & reconcile**. MiniLM embeds each subject and destination description. Cosine similarity proposes a destination and shows alternatives, never an automatic approval or confidence percentage.
3. Review/correct **every** destination and count, approve or hold, and optionally enter multiline notes. Correcting identity/count resets approval. Undo restores review edits. Source/review changes invalidate all applied exports. Holding any row withholds the whole menu; no row silently disappears.
4. Apply the review. Frequencies aggregate by destination. Exact interval dynamic programming minimizes the total frequency-weighted number of binary branch choices over all full binary trees retaining destination order. Zero-frequency destinations remain as leaves. The baseline splits intervals at their midpoint without looking at frequency.
5. Inspect the nested runbook, leaf depths and computed comparison. Download JSON, CSV or Markdown, or copy the worksheet. Markdown includes a nested usable menu and complete audit; JSON preserves originals, neural evidence, current review and full trees; CSV retains each original tally, reviewed count/destination, note and route. Formula-like strings receive an apostrophe in CSV; JSON is lossless. Reimport JSON to restore original input, then run and review anew.

Nothing is sent, posted or changed outside the app. No live ticket connections, accounts, provider keys or remote inference. Save JSON before closing; user content is not persisted.

## Real AI, licenses and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, via Transformers.js **4.3.2** (Apache-2.0) / ONNX Runtime Web (MIT). Actual feature extraction uses WASM CPU, mean pooling and normalized 384-dimensional vectors. This reconciles semantic wording, not just IDs, regex or sorting. Every vector count, dimension, finite value and approximate unit norm is validated. Unknown or negated text still has a nearest neighbor: review is mandatory. No fake fallback or canned model responses.

The exact tree construction, tally aggregation, path verification and baseline are deterministic after review. For interval [i,j], cost = sum(weights[i..j]) + min over split k of cost[i,k] + cost[k+1,j]; leaf cost is zero. O(n³) time and O(n²) states. Independent exhaustive full-tree enumeration verifies small systems. Weighted leaf depth equals reported cost; optimized cost cannot exceed the feasible balanced baseline. Expected choices = weighted cost / reviewed total. These are **conditional computed estimates**, not observed time savings, prediction or model accuracy.

This differs from arbitrary-order Huffman prefix compression and diagnostic question-tree selection: every branch must divide a **contiguous interval of the supplied directory order**, and the output is a human runbook navigation worksheet. It does not reorder the directory or infer diagnostic causes.

## Downloads, privacy, devices and offline scope

Before load, UI discloses approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus ~0.55 MB worker and app code. Internet is initially required. Public files come from this site, `huggingface.co`, and its CDN (`cas-bridge.xethub.hf.co` / HF redirect hosts). No subject, count, reviewer note or original content goes in request URLs or bodies. Only public file GETs are used. Model revision follows the host's current files, not a pinned revision.

Requirements: HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB available RAM. No WebGPU requirement; actual tests use desktop Chrome with GPU disabled. Other browsers, physical phones and low-memory devices are untested. Unsupported devices, download errors, malformed worker output and a 180-second timeout produce errors, not deterministic substitutes.

Worker/model/runtime downloads use Cache API when supported. Eviction or private browsing may force redownload. **Tested offline scope: new worker inference in an already-open warmed page, with all network disabled. Cold offline app navigation/reload is not promised.** Content stays in browser memory/local worker; no analytics, secrets, optional remote provider or uploads.

Byte-verified shared immutable same-origin assets avoid duplicating large files:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve those published apps/paths. Hashes and sizes are in `runtime-dependency-audit.json`. Worker cache: `index-canopy-worker-v1`; runtime cache: `circuit-cove-runtime-v1`; model cache is managed by Transformers.js. Four texts per neural chunk. The worker feature-extraction `max_length` option is not relied upon to enforce 256 tokens: tokenizer model context is 512; descriptions are character-bounded to 200. Runtime source was inspected and production inference/offline tests use these exact dependencies.

## Limits and safeguards

- 2–12 destinations, unique IDs ≤50 characters, descriptions ≤200. Order is array order, not inferred alphabetical sorting.
- 1–40 tally rows, unique IDs ≤50, subjects ≤200; integer original/reviewed count 0–1,000,000; positive total required. ≤52 texts / 13 chunks.
- Source ≤60,000 characters; source/audit `.json` files ≤4 MB; review notes ≤2,000. Only original input is restored from audit envelopes under the stricter source validation. Unsupported formats rejected.
- Worker source fetches, file reads and worker responses are guarded by run IDs. Cancel terminates worker; cancelled/stale results cannot replace a new run. Errors clear exports. Imported instructions are inert text, with no tool or credential authority.
- All original rows and destinations, even zero-weight destinations and held tallies, survive JSON/Markdown. CSV is a row worksheet, not the full audit; use JSON for lossless restoration.

## Interpretation and limitations

Assumes successful lookup of a known destination, equal-cost binary branch choices, stable supplied frequencies and meaningful fixed ordering. No unsuccessful-query cost, uncertainty bounds, reading effort, accessibility testing with humans or real usability/time study. A tree optimal under these assumptions need not be the easiest actual menu. Counts may reflect biased samples. Negation, aliases and out-of-scope subjects can mislink. Inspect the source, correct or hold. No universal accuracy claim, secret requests, external actions or automatic deployment of a menu.

## Development and publication

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261122-10/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but **publish the collection through root `/Volumes/ExternalHD/daily_app2`**, never individual deploy. Root assembles all apps under `deploy/` with root gallery. Existing 1 GB guard and sharing rules remain unchanged. See `VALIDATION.md` and JSON reports for observed outcomes. No digest is sent by this builder.
