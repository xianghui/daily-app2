# Grainshift Desk

A no-key, local-AI worksheet for furniture makers reconciling rough panel notes with a supplied material catalog. **Published and public real-inference/asset checks passed; see VALIDATION.md.**

## Workflow
1. Paste source JSON, import `.json`, or load either synthetic example. Edit supplied wood profiles, panel measurements, offered slot lengths and fixed-travel baseline.
2. Explicitly **Load AI & match panel notes**. Real MiniLM embeddings rank each note against profile descriptions; inspect cosine evidence (not probability/confidence).
3. Review species and both coefficients, choose radial/tangential axis, edit measured width/moisture and connection assumptions. Approve or hold every panel. Changing profile copies coefficients; numeric/profile/axis edits reset approval. Notes are multiline. Undo retains up to 30 edits.
4. Apply reviewed plan. Deterministic calculations produce seasonal widths, contraction/expansion and the smallest offered total slot length satisfying travel + fastener + extra clearance within the permitted maximum.
5. Download complete JSON, all-record CSV, Markdown, or gated approved-feasible worksheet CSV; copy Markdown. Any review/source edit invalidates exports. Reimporting an audit restores original source only, requiring fresh AI/review. Held records remain in audits, never silently disappear.

## Model, runtime, licensing and network
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 feature extraction; normalized mean pooling, 384-dimensional vectors; semantic rank, not generative extraction, identification from images or authoritative species identification.
- Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web (MIT), default **WASM CPU, one thread**. No WebGPU required. See the originating runtime lockfile in `../20261115-6/`.
- Around **50 MB** first download: approximately 23 MB model, 26.9 MB WASM, tokenizer and runtime. Internet required initially. Model files download from huggingface.co and its CDN. Model revision is host `main` (observed resolve commit in network audit); future upstream changes/cache eviction can alter results. No upstream hash pinning claim.
- Byte-identical same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these collection paths. `runtime-provenance.json` records exact hashes. App JS/CSS are bundled locally. No remote JavaScript/CDN dependency.
- Worker source uses explicit Cache API, as do factory/WASM/model downloads. Offline claim is limited to **another fresh worker in an already-open warmed page after a successful complete online run**. Tested with all network disabled. Offline cold reload/navigation is not claimed; there is no service worker. Clear site data to delete caches. Private browsing/storage eviction can remove caches.
- Requires modern module workers, WebAssembly SIMD, Cache API for offline scope, and enough memory. Tested desktop Chrome headless with GPU disabled. Narrow viewport checks are not physical-phone inference tests; other engines/devices are unverified.

## Privacy and bounds
Default user content remains in browser memory, passed to a local worker; no content uploads, telemetry, external inference, credentials or backend. Only model/runtime file GETs are needed. Model load happens only after Run. No keys or paid service integration. Imported text is data, not tool instructions; no external actions are available. Synthetic examples and audits only.

Source limit 30,000 characters; JSON import/audit up to 1 MB. 2–8 material profiles; 1–24 panels; 1–20 distinct offered slot lengths. AI descriptions/notes ≤200 characters each; four texts per batch (eight chunks at maximum). The originating pipeline supplies max_length 256, but feature-extraction does not enforce that option; tokenizer configuration enforces its **512-token model limit**, with truncation. Do not treat 256 as the actual cap. Review notes ≤1,000 characters. Unique simple per-list IDs. Finite numeric values and domain checks; vector count/dimension/norm validation. Run IDs guard fetches/results, file-import identities guard delayed reads. Cancel aborts pending worker fetch and terminates worker; model/runtime errors and 180-second timeout produce no fake outputs. Retry is explicit.

## Source contract and deterministic model
See `src/core.js` examples. All lengths mm; moisture is percentage points, not fractions. A coefficient 0.003 means fractional width change of 0.003 per moisture point. Example coefficients are **illustrative, not certified species data**. Profiles require `radial ≤ tangential`, each 0–0.01. Panel width 10–3000 mm; `0 ≤ lowMC ≤ referenceMC ≤ highMC ≤ 28`. Fastener 1–20 mm, extra total clearance 0–10 mm, slot limit 1–80 mm. No automatic unit conversion or moisture prediction.

`width(MC) = widthReference × [1 + coefficient × (MC − referenceMC)]`.
`travel = width(high) − width(low)`; required total slot = travel + screw diameter + extra clearance. Enumerate all offered lengths, keep those at least the requirement and no larger than the maximum, choose smallest. Comparisons tolerate 1e-9 mm floating noise; displays round to 0.001 mm, not a machining-tolerance claim. No feasible option stays explicitly unplanned, blocking worksheet release. Complete audits still work.

Baseline assigns the supplied fixed **total seasonal travel** allowance to each approved panel; count cases whose calculated low-to-high travel exceeds it. It is not comparing a gap at reference moisture with full travel. Counts are modeled constraint checks, not empirical improvements or AI accuracy.

Assumes uniform moisture and free linear below-fiber-saturation cross-grain movement, **one fixed edge**, no restraint. Radial/tangential are idealized axes; mixed grain, plywood, composite, longitudinal movement, stress, strength, washer/edge distances and structural attachment suitability are not modeled. Slots must follow movement and reserve both contraction and expansion at reference position. This worksheet is not connection engineering or tool authorization. Verify coefficients, moisture and real design independently.

## Outputs
- `grainshift-desk.json`: versioned source/review/result envelope, all original and held records preserved.
- `.csv`: every source panel plus reviewed values, result fields and multiline reviewer notes; quoted CRLF CSV; leading spreadsheet formula text escaped. JSON stays lossless.
- `.worksheet.csv`: approved feasible panels, contraction/expansion/travel, minimum and selected slot, spare clearance. Blocked for empty/all-held/unplanned sets.
- `.md`: human handoff including originals, every decision, reviewed inputs, baseline counts and limitations.

## Build, validation and publication
React + Vite; `npm install`, `npm run predeploy`. Required per-app `deploy` script exists but **do not use it to publish this collection**. Publish from root through root deploy/ workflow.

Actual browser/quality/outcome details are in [VALIDATION.md](VALIDATION.md), `*-browser-validation.json`, `*-artifact-validation.json`, screenshots and defensive/recovery logs. Test scripts need the workspace Playwright installation and desktop Chrome. Serve the actual production directory at `/daily-app2/20261129-2/` with immutable shared assets also available. Set `APP_URL` and `PREFIX` for local/assembled/public runs; `SITE_ORIGIN` for hash audit. `node core-test.mjs` and `python3 artifact-test.py <prefix>` independently check numeric/schema/artifact invariants. Fault injection tests only error paths, never successful inference.
