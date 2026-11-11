# Flow Balance

A local-AI occupancy reconciliation and spare-seat worksheet for community-service coordinators. Input: informal completed-visit notes, station descriptions, arrival/departure minutes and available seating. Bottleneck: inconsistent names hide which station experienced overlapping visitors. Output: reviewed visit audit, exact occupancy intervals and a budget-bounded historical seating plan. This is not a staffing scheduler or a queue-time forecast.

## Use

1. Load either realistic **synthetic** example or paste/import JSON. No real personal data is included in the repository.
2. Set station definitions, observation-window minutes, existing seats, extra-seat budget and completed visit intervals. Minutes are offsets from the start of one window, not clock strings. Each record is a single station visit; multi-station cases must be split into distinct visit IDs.
3. Explicitly click **Load AI & match stations**. Wait for actual model inference; loading and batch progress are visible, with cancellation and retry.
4. Inspect the source note, candidate station descriptions and cosine similarities. Edit assignments/times, approve every visit or hold ambiguity. Undo reverses review edits. Settings remain editable. Any review or settings edit invalidates the applied result.
5. **Apply reviewed capacity plan**. Held rows remain in the audit but block a complete allocation. All-approved rows release occupancy statistics and an exact extra-seat allocation.
6. Download JSON (lossless originals, reviews, settings, per-station intervals and metrics), CSV (every source/reviewed visit), or Markdown (plan plus every visit). Copy produces the current Markdown. Importing an exported JSON restores originals only and renews approvals, not prior edits.

No external orders, bookings, file changes, messages or account operations are performed.

## Real AI and deterministic work

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; `q8` ONNX, normalized mean-pooled 384-dimensional embeddings. The model ranks supplied station descriptions against free-text visit notes by cosine similarity. Learned semantics, not keywords or sample answers, drive the proposed station identity. Similarity is **not confidence**. A top result always exists even for unrelated text; human hold is essential.
- Runtime: bundled `@huggingface/transformers` 4.3.2, Apache-2.0; ONNX Runtime Web WASM CPU (MIT), one thread. WebGPU is not required. Runtime factory and worker are same-origin. Reuses the byte-identical 26,861,777-byte WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve that collection asset.
- First explicit load: approximately 50 MB, including ~23 MB weights/tokenizer from `huggingface.co`, `hf.co` and CDN redirects (observed `us.aws.cdn.hf.co`), plus ~27 MB same-origin runtime. Requires internet before caching; actual transfer depends on browser cache.
- Default content stays in browser memory. Requests are model/runtime GET downloads, not content uploads. No remote inference option, API keys, analytics or paid service. Imported instructions cannot execute tools or obtain credentials.
- Deterministic: half-open interval sweep counts occupancy; person-minutes equal the sum of durations. Exhaustive integer allocation minimizes excess occupancy person-minutes under the budget, then seats used. Equal-objective ties beyond that are deterministic in supplied station order. A baseline puts the same entire extra-seat budget at the first input station. Neither measures future outcomes. Existing-seat overflow is also shown.
- All completed visits must lie fully within the same observation window. For this finite dataset, mean occupancy = visits/window × mean visit. This arithmetic identity is not evidence of stable demand or a statistical Little's-law estimate. Capacity changes do not alter service rate or visit duration. Seats mean waiting/occupancy spaces, not workers.

## Supported devices, caching and limits

Tested: real desktop Chrome in Playwright, WebAssembly SIMD + module workers, several hundred MB free memory, localhost and public production bundle. WASM CPU is the sole default path. Physical phones, other browser engines and low-memory devices are unverified; the layout is tested at 1440, 390 and 320 CSS pixels. Runtime errors provide retry/device guidance, never fake results.

Model files use Transformers.js Cache API. Worker source, runtime module factory and WASM are explicitly cached and recreated through blob URLs. Tested offline scope: after a successful online run, a fresh worker can perform real inference in an **already-open page** with browser network disabled. Offline navigation/reload is not implemented or promised. Browser caches may be evicted; private browsing or disabled cache can prevent offline reuse.

Bounds: original JSON ≤24 KB; imported/exported JSON ≤1 MB; 1–4 stations; 1–24 visits; descriptions/notes ≤400 characters; model context first 256 tokens; four texts per embedding batch; 180-second load/run timeout. Window 1–1440 integer minutes, existing seats 0–24, extra budget 0–8. Arrival/departure must be integer offsets with `0 ≤ start < end ≤ window`. IDs are unique within each list. CSV/PDF/office documents are unsupported. Finite normalized vector dimensions/counts are validated before classification. Cancellation terminates the worker, and run identities also protect asynchronous imports/downloads and late replies.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable browser/core/artifact/defensive reports. Two real known-answer sets contain 16 notes in unrelated service domains. This is a tiny English-only fixture check, not a general accuracy claim. The model is not an identity authority and can confuse negation, unseen terminology, mixed services or unrelated notes; review is mandatory. Complete logs are a user assumption: missing visits, duplicate real-world visits with different IDs, or censored boundary visits cannot be detected reliably. Holding any row blocks full capacity comparison. The plan replays history only; no promised savings, crowding prediction, occupancy safety certification or causal benefit is asserted.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261111-10/`. Required per-app scripts are retained, but **do not use per-app deploy to publish this collection**. Publish via root `npm run predeploy` and root `npm run deploy`, then verify Pages and public inference/assets. `python3 serve.py` serves production dist with the shared collection asset at localhost:6430. `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node late-result-test.cjs`, `node stale-import-test.cjs`, `python3 artifact-test.py` reproduce checks. `TEST_URL`/`REPORT` select combined/public browser targets.
