# Crossover Cove

A process-trial worksheet for coordinators comparing two procedures on the same subjects in AB and BA orders. It reconciles rough method notes with a supplied two-method catalog, requires review of every observation, and separates descriptive method and period contrasts. Unlike a parallel-arm A/B test or counterbalancing schedule, this analyzes existing complete two-period crossover observations.

## Workflow
1. Choose a synthetic example, paste JSON or import original/audit JSON. Set method descriptions A/B, unit, context and minSimilarity. Preserve comparable units and subject IDs.
2. Explicitly click **Load AI & reconcile**. Inspect neural source similarities; they are not confidence. Correct method, subject, period or value; approve each observation or hold it. Nothing is approved automatically. Review notes support multiline text.
3. Apply reviewed pairs. Complete subjects need one approved A and B in distinct periods. Duplicate approved subject-periods block apply. Missing/held or same-method pairs are preserved but excluded. Both sequence groups are required for separated contrasts; otherwise the worksheet explains non-identifiability.
4. Download complete JSON/CSV/Markdown and pair CSV, or copy Markdown. Undo restores the previous review edit. Any review edit invalidates the export snapshot. Audit import restores originals only; rerun/review is mandatory. No files, accounts or experiments are changed externally.

## Real AI and device requirements
Default inference uses **Xenova/all-MiniLM-L6-v2**, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 through **Transformers.js 4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU/q8, normalized mean-pooled 384-dimensional embeddings. The neural model compares note meaning with user-defined procedure descriptions; ordinary rules do not fabricate AI outputs. Ranking, schema checks and worksheet calculations are deterministic.

First load requires internet: about **23 MB model plus 27 MB CPU runtime** and small tokenizer/config assets. Current secure-context browser with WebAssembly SIMD, module workers, Cache API and several hundred MB available RAM. Desktop Chrome CPU tested without WebGPU; no mandatory paid service or API key. Physical phones/other browsers are unverified. Model loading displays file progress and batch counts; cancellation terminates workers; retry available; 180-second timeout. No fake/demo fallback on errors.

Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` are reused; preserve their originating builds. Dependency hashes and actual model revision are in runtime-dependency-audit.json. The shared worker uses model `main` (not pinned); revision observed this run: 751bff37182d3f1213fa05d7196b954e230abad9. Feature-extraction ignores per-call max_length; actual tokenizer ceiling is 512 tokens. Descriptions are separately limited to 300 characters. Four texts per inference batch.

## Privacy and offline scope
No content upload, provider keys, analytics or optional remote integration. Public model files download from Hugging Face / documented CDN redirects; user notes are not sent in URLs/bodies. Source/reviews remain in page memory, except user-initiated downloaded artifacts/clipboard. Cache API stores public worker/factory/WASM/model assets, not user notes. After a complete online run, a fresh worker can run real inference with networking disabled **in an already-open warmed page**. Offline navigation/reload is not promised; cache eviction requires internet. No service worker is installed.

## Formats and limits
JSON object: `context`, `unit`, `minSimilarity` (0–1), `first:[{id:"A",text:"..."},{id:"B",text:"..."}]`, `records:[{id,subject,period:1|2,text,value}]`. IDs are 1–40 ASCII letters/digits/underscore/hyphen. 1–96 observations; descriptions/context/unit ≤300 characters; input ≤60,000 characters; file/audit import ≤2 MB; values finite within ±1,000,000. JSON schema is validated before inference and again before analysis; vectors must be finite normalized dimension 384 and correct in count. Malformed output, unsupported workers/WASM, download failure and timeouts produce no fabricated result. Run IDs guard model fetches, file imports, messages, cancellations and newer inputs.

JSON audit preserves originals, all review fields, neural evidence, held/excluded records, contrasts and pairs. CSV retains every record; pair CSV lists complete subjects and source IDs. CSV quotes commas/quotes/newlines; leading formula-like text is apostrophe-neutralized, while actual signed numbers remain numeric. JSON is the lossless reimport format. Markdown includes every source note and excluded subject. Exports always use the latest applied snapshot.

## Calculation and limitations
For mean changes dAB and dBA (second minus first), method B−A = (dAB−dBA)/2, period2−period1 = (dAB+dBA)/2. Naive baseline is mean within-subject B−A over the identical complete pairs, weighted by sequence sizes. Interpretation assumes common additive effects, comparable units, stable methods, no carryover and defensible sequence assignment. No significance tests, causal assurance, randomization/washout verification, forecast accuracy or measured time savings. A two-period design cannot separately resolve carryover. Not clinical/safety advice.

Real fixture results: archive notes **4/6** correct method suggestions; learning notes **6/6**. Two paper-archive phrases were wrongly matched to digital search. Tests explicitly correct those through the review UI before computing contrasts. Similarity can be wrong even for seemingly clear notes; negation/instruction-like/unrelated text requires human hold. Tiny separable fixtures are not universal accuracy estimates.

## Build and validation
`npm install`; `npm run predeploy`. Required per-app deploy script exists but **publish only via root combined-site workflow**, never individual deploy. Vite base `/daily-app2/20261120-9/`.

See VALIDATION.md and machine-readable reports for real browser fixture checks, maximum batches, exports, offline, network/privacy, responsive layout and defensive fault injection. Successful AI tests use real model downloads and inference; stubs only exercise failure/race guards. No real personal data or credentials are included. Builder sends no digest.
