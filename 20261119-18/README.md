# Cutline Desk

A local-AI handoff-network reconciliation and capacity worksheet for small operations coordinators. Review messy lane descriptions, locate a downstream bottleneck and compare separate one-lane expansions. No dispatch, external messages or account actions.

## Workflow

1. Paste/edit source JSON or import `.json` (original source or exported audit). Two wholly synthetic fixtures are included.
2. Define canonical nodes, distinct intake/completion IDs, directed lane notes, integer capacities for the same week, and a single-lane extra-capacity scenario.
3. Explicitly **Load AI & reconcile inputs**. Real local MiniLM neural embeddings compare each lane's origin and destination with canonical descriptions. This resolves paraphrases beyond exact-name lookup; it does not infer numbers or verify direction. No canned responses or deterministic fallback.
4. Inspect both sets of cosine-ranked source evidence (similarity, not confidence). Correct endpoints/capacities, add multiline notes and approve or hold every row. Originals remain intact. Edits invalidate applied exports; undo restores the preceding review state.
5. Apply reviewed plan. Holds, self-links, lanes into intake or out of completion block release without silently dropping rows. Zero-capacity and disconnected networks return honest zero flows.
6. Inspect maximum throughput, one verified minimum cut, all lane flows and separate expansion gains. Download complete JSON/CSV/Markdown or copy the worksheet. Reimporting JSON restores originals only and requires renewed AI/review.

## Real AI, runtime, downloads and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX, normalized mean-pooled 384-dimensional embeddings. Transformers.js 4.3.2 / ONNX Runtime WASM CPU. Intended for short English descriptions.
- First explicit load downloads approximately 23 MB model/tokenizer from Hugging Face/CDN, 27 MB same-origin WASM, ~549 KB worker and ~53 KB runtime factory. Downloading weights is not uploading content. No model requests before loading. No keys, optional remote inference, analytics or content uploads.
- Same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these existing app assets in the combined deployment. Reuse avoids duplicating large runtimes near the Pages size budget.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. WebGPU is not required; WASM CPU is the tested default, not an untested fallback. Desktop Chrome tested; physical phones, other browsers/OS not verified.
- Model/runtime files are cached, not user inputs. Content remains in memory and explicit clipboard/downloads. Fresh-worker inference works offline **inside an already-open warmed page**. Offline navigation/reload is not promised. Cache eviction requires internet.
- Progress, cancellation/worker termination, retry and 180-second timeout. Run tokens cover worker-source fetches, late messages and file imports. Failure never creates substitute AI suggestions. Imported text has no tool authority and cannot request credentials or execute instructions.

## Input, limits and schema

See `src/core.js` synthetic examples. Source JSON fields:

- `context`: 1–300 characters.
- `nodes`: 2–8 `{id, description}` objects, unique bounded alphanumeric/underscore/dash IDs; descriptions 1–300 characters.
- `source`, `sink`: distinct registered IDs.
- `extra`: integer 1–1,000 cases/week added to one lane at a time.
- `logs`: 1–24 `{id, fromText, toText, capacity}` records. Unique IDs; each note 1–300 characters; capacity integer 0–10,000 cases/week.

Source ≤50,000 characters; imports ≤2 MB (audit metadata allowed); review notes ≤1,000 characters. At most 56 neural texts in four-text chunks. The shared pipeline tokenizer has a 512-token model ceiling; the supplied feature-extraction max_length option is not relied on as a stricter limit. Descriptions are character-bounded. Incoming vectors must have exact count, finite normalized 384-dimensional values. Unsupported formats and malformed inputs are rejected.

## Deterministic analysis and assumptions

Edmonds–Karp augmenting paths operate on distinct forward/reverse residual edge objects, preserving parallel and antiparallel lanes. Integer capacities yield integer flows. Flow conserves cases at intermediate nodes. Residual reachability from intake identifies one minimum cut; its crossing-capacity sum equals computed maximum throughput. Each extra-capacity scenario reruns this solver with exactly one lane increased; the scenarios are independent, not additive. At most 25 tiny eight-node/24-lane solves.

The baseline sums intake-outbound capacities without downstream limits: an explicitly optimistic shortcut, not an achieved schedule. The computed difference measures that shortcut's overstatement in this supplied static network—not measured improvement or forecast accuracy. Expansion gains are hypothetical cases/week, not financial benefits; no expansion costs or joint-expansion optimization.

All cases must be interchangeable with the same period and compatible processing. Lanes are independent, lossless handoffs; no travel time, queueing, shared staff, internal node bottlenecks, case-specific eligibility or demand cap is inferred. Model finite node capacity explicitly with an in/out split if needed. Parallel rows must be separate capacities, never duplicate descriptions of the same lane. Static throughput is an upper bound, not a service promise or staffed operational plan. Alternative minimum cuts and optimal flows can exist; a saturated edge alone is not a proven bottleneck. Semantic matching can misread negations, similar names and irrelevant text; every row needs human review.

## Exports

- JSON `cutline-desk/v1`: all original inputs, reviews/evidence/holds, issues, flow/cut results, scenarios and summary.
- CSV: one record per original lane, original endpoint notes/capacity, current endpoints/capacity/decision/note, modeled flow/cut membership and that lane's expansion result. Quoted commas/newlines and leading spreadsheet-formula-like strings are escaped.
- Markdown: complete source-linked worksheet, all records, node register, scenarios, assumptions and checklist.

## Development / publishing

React + Vite, `npm install`, `npm run dev`, `npm run predeploy`; base `/daily-app2/20261119-18/`. gh-pages and exact per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` retained. **Publish through root predeploy/deploy only**, never the individual deploy, to preserve the collection.

Validation: `node core-test.mjs` (independent exhaustive cut oracle); `node browser-test.cjs` (actual Chrome neural inference, reviewed artifacts/offline/privacy/UI); defensive/race scripts (fault injection only for failures); `python3 artifact-test.py` (independent downloaded-artifact parsing). Playwright uses the installed workspace package. See `VALIDATION.md` for observed results and untested scope.
