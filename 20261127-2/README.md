# Compost Balance

Community-compost coordinators turn rough intake notes into a reviewed two-amendment batch recipe. Real local neural inference links notes to supplied dry-carbon/nitrogen references; a deterministic linear program then minimizes added wet mass while meeting moisture, C:N and stock bounds. This is not Dry Matter's inventory moisture normalization or Fiber Balance's whole-kg recycled-fiber costing: it jointly balances water and dry-element ratios, including explicit infeasibility.

## Workflow
1. Paste source JSON, choose either synthetic example, or import `.json` (source or exported audit). Set target bands, references and two amendment supplies in the source. Source changes cancel old work and invalidate exports.
2. Read the download notice; explicitly **Load AI & match intake notes**. No model downloads before this click.
3. Inspect source notes and ranked reference snippets/cosine evidence. Correct material, wet kg and measured wet-basis moisture; add multiline reviewer notes. Approve checked intakes or hold/reject suggestions. Undo up to 40 edits. Original inputs remain untouched.
4. **Apply reviewed recipe**. Pending rows block application. Held rows are retained but explicitly excluded from a partial scenario. Complete Recipe CSV is disabled for holds or infeasible targets. Review edits invalidate the applied snapshot.
5. Export current JSON, Audit CSV, Recipe CSV or Markdown, or copy Markdown. Audit reimport restores originals only and requires fresh inference/review; it does not silently approve old decisions.

## Input / output contract
- `title`: 1–100 characters; `minCN`/`maxCN`: ordered 1–100; `minMoisture`/`maxMoisture`: ordered fractions 0–0.95.
- `profiles`: 2–8 unique `{id,description,carbonDry,nitrogenDry}` references. Carbon and nitrogen are fractions of **dry matter**, bounded 0–0.65 and 0–0.2, sum ≤1. AI proposes identity, never estimates actual composition.
- `records`: 1–24 `{id,note,wetKg,moisture}` intakes; wet kg 0.001–10,000, wet-basis moisture 0–0.99 (0.8 = 80%). Review fields use the same bounds.
- `amendments`: exactly two `{id,description,moisture,carbonDry,nitrogenDry,maxKg}` options; moisture 0–1, supply 0–10,000 kg. Pure water can have zero dry carbon/nitrogen. Supplies are upper bounds, not mandatory additions.
- IDs: unique within each list; 1–32 ASCII letters/numbers/_/-. Notes/descriptions nonempty ≤200 characters. Finite JSON numbers only. Source ≤60,000 characters; file/audit envelope ≤8 MB. Only JSON import is supported. Source controls/malformed Unicode are rejected.
- JSON schema `compost-v1`: original source, all reviewed records and candidate evidence, complete flag, source-linked intake worksheet, baseline composition, feasible recipe or explicit failure, and linear constraint slack witnesses.
- Audit CSV retains every source row and hold; Recipe CSV contains each approved intake plus both amendment rows with wet/water/dry/carbon/nitrogen kg; complete feasible recipes only. Markdown/copy retains source notes, decisions and additions. CSV fields are quoted, quotes doubled, CRLF-separated; formula-leading textual fields are apostrophe-protected even with newlines. Numeric fields remain numeric. JSON is the lossless exchange format; CSV escaping intentionally changes spreadsheet-dangerous text. Markdown is a text handoff, not sanitized HTML.

## Real AI / static runtime
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0 model, q8 ONNX; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Normalized mean-pooled 384-dimensional embeddings rank material descriptions by cosine similarity. Similarity is **not confidence**; nearest matches are forced even for unrelated text and negation can fail. Mandatory source review is essential.
- WASM CPU, one thread; no WebGPU, API key, paid service, server inference or fake deterministic fallback. Up to 32 short texts in chunks of four; vector count, dimension, finite values and normalization are validated. Tokenizer maximum 512 with truncation. Inspected pipeline does not forward the worker's `max_length:256` argument; we do not claim a 256-token cap. Inputs are separately bounded to 200 characters per text.
- Roughly 50 MB initial download: ~23 MB weights + 26.86 MB WASM plus tokenizer/JS. Hugging Face/CDN serves model files; runtime is same-origin. Model revision uses upstream `main`, observed commit `751bff37182d3f1213fa05d7196b954e230abad9`; changes upstream may alter matches.
- Immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating builds. Hashes in `runtime-provenance.json`; protocol `{id,texts}` → progress/batch/result vectors/error inspected and retested.
- Current desktop Chrome/Edge with WebAssembly SIMD, module/Blob workers and Cache API recommended. Actual Chrome CPU path tested with GPU disabled. Phone viewport tests do not establish physical-phone, low-memory, Safari/Firefox or screen-reader compatibility.
- Progress, cancel, 180-second timeout and actionable download/runtime errors; cancellation aborts source fetch and terminates workers. Run identities guard stale results/errors and asynchronous file reads. Failed inference creates no fabricated classifications.

## Privacy / caching
Notes stay in browser memory and local workers. Only model/runtime file downloads contact servers; ordinary network metadata is exposed, not source text. No keys, telemetry, optional provider, imported URLs fetched, account changes or equipment controls. Imported text cannot grant tool authority. Exports contain your inputs and reviewer notes.

Cache API stores worker/runtime/model files, not user content. A fresh worker in a warmed already-open page was tested with all network disabled. **Offline reload/navigation is not supported**; no app-shell service worker. Eviction, site-data deletion/private mode may require downloading again. Caching failures never silently switch to fake AI.

## Transparent recipe calculation
For each approved intake: dry kg = wet kg × (1 − moisture); carbon/nitrogen kg = dry kg × supplied reference fraction. Aggregate baseline is the same reviewed intake **without additions**. Ratio = total carbon / total nitrogen; moisture = total water / total wet mass.

With additions x,y ≥0, the C:N lower/upper bounds become linear carbon-minus-ratio×nitrogen inequalities. Moisture bounds become water-minus-fraction×wet inequalities. Add two supply bounds; enumerate all pairwise boundary intersections, retain feasible points and minimize x+y. Bounded feasible polygons attain their minimum at a vertex. Validate the final ratios and supply constraints. Numbers are floating-point with tolerances, not laboratory precision; display rounding never changes exported weights. Zero-nitrogen solutions are blocked with an actionable error. Infeasible targets do not yield a pretend zero-addition recipe.

Computed baseline/recipe differences are scenarios, not measured environmental benefits, accuracy or time savings. References are illustrative synthetic assumptions. Validate actual material composition and moisture locally. No decomposition losses, bioavailability, aeration, structure, particle-size, mixing, temperature, maturity, pathogen, salt or contaminant modeling. Not suitable for hazardous/treated-wood/animal-waste or food-safety decisions.

## Validation / build
See [VALIDATION.md](VALIDATION.md), actual reports, synthetic downloads and screenshots. `npm run predeploy`; `python3 serve-built.py --port 7832` serves production at the real base. Run `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `python3 artifact-test.py`, `python3 bundle-audit.py`. Independent LP test requires SciPy (`python independent-test.py`); browser scripts require installed Playwright/Chrome at the documented local path.

Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish only via the root combined workflow** to preserve the gallery. Original daily_app tree remains read-only. No builder digest.
