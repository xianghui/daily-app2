# Swatchform Desk

A private rectangular flat-knitting worksheet for knitters with a measured swatch library. Project notes are semantically matched to washed swatches; the knitter checks every match, gauge and pattern repeat, then exports cast-on/row counts and an area-based yarn estimate. Synthetic samples only; no equipment, account, purchasing or publishing controls.

## Real AI and distinct process

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8; Transformers.js 4.3.2 / ONNX Runtime Web, WASM CPU. A real model produces normalized mean-pooled 384-dimensional embeddings, four short texts per chunk. Cosine retrieval links each project note to a swatch description. That selection changes gauges, repeat constraints and yarn density, and therefore the actual panel worksheet. No key, external inference, paid service, canned responses or deterministic fallback.

AI **does not** measure gauge, parse prose measurements, create stitch instructions or judge yarn suitability. Numeric values are explicitly supplied/reviewed. The nearest candidate can be unrelated; negation may fail. Similarity is not confidence. Source descriptions and ranked cosine evidence are inspectable. Correct the link or hold the panel rather than trusting a suggestion.

Both complete gallery arrays were parsed and their name/description pairs searched for related objectives; the original collection remained read-only. Warpwise Desk concerns woven warp take-up, motif repeats and loom capacity; Swatchform concerns flat-knit stitch/row congruences, washed gauge, finished rectangular dimensions and reserved yarn. Neither repeats an earlier game's/STL's knitting-loom output.

## Workflow and formats

1. Choose **Warm & ribbed** / **Lace & texture**, paste source JSON or import .json source/audit.
2. Explicitly choose **Load AI & match swatches**. Before this action there are no model downloads. Watch loading/chunk progress; cancel terminates the worker. Retry reuses caches where available. Timeout 180 seconds.
3. Review profile links and evidence; change swatch, edit all numeric assumptions, add multiline notes, approve or hold each panel. Relinking resets measurements and approval. Undo retains 40 review states. Original inputs remain intact.
4. Apply the reviewed scenario. Pending/invalid values prevent apply; any edit or new input invalidates applied results/exports.
5. Download lossless JSON, complete Audit CSV or Markdown; copy the current Markdown. All-ready **Panel CSV** is blocked by holds, dimensional failures or yarn shortfalls. No external action occurs.

Source: `{title, profiles, records}`. Title ≤100 characters. Unique string IDs ≤40 in each list. 2–8 profiles, 1–12 records. Source ≤30,000 characters. Notes/descriptions ≤200 characters; controls and lone surrogates rejected. Maximum 20 short texts / five model chunks. Tokenizer model_max_length 512 is the actual cap; a pipeline max_length option is not relied on to impose a smaller cap. Vector count, 384 dimensions, finite values and normalization validated.

Profile fields: id, description; stitchGauge 2–100 washed stitches/10 cm; rowGauge 2–150 washed rows/10 cm; mass 0.1–100 g/100 cm²; repeatStitches and repeatRows integers 1–40; edgeStitches total extra edge stitches integer 0–20. Record fields: id, note; width and height 2–200 cm; tolerance 0–5 cm on each axis; extraPct 0–100% yarn allowance; stock 0–10,000 g **reserved for this panel alone**. Do not double-reserve shared physical stock. Numeric fields finite; fractional values allowed except three integer pattern fields.

Audit schema `swatchform-v1` retains originals, all reviews, candidates, held/infeasible records, plans and summary. Up to 8 MB import restores originals only, never trusts old approvals or derived plans. Audit CSV retains every source row and reviewed parameter. Panel CSV includes every ready record's profile, cast-on, rows, finished dimensions, yarn and reviewer note; a worksheet, not a knitting-machine format. CSV escapes commas, quotes and embedded newlines; formula-like string cells beginning =,+,-,@,tab/CR receive a leading apostrophe. Signed numeric dimensional errors remain numbers. JSON preserves exact strings. Imported text is rendered as text, never HTML or tool instructions.

## Deterministic contract and baseline

Enumerate horizontal repeats n≥1 with cast-on = edgeStitches + n×repeatStitches ≤2,000; vertical repeats m≥1 with total rows = m×repeatRows ≤2,000. Predicted width = cast-on×10/stitchGauge; height = rows×10/rowGauge. Independently choose minimum absolute deviation on each axis; ties within 1e-10 cm prefer smaller counts. This also minimizes separable squared size error; no multi-panel resource optimization is claimed. Both deviations must be within tolerance (+1e-10 cm numerical comparison allowance). Otherwise status infeasible; never silently call the closest out-of-tolerance result ready.

Raw mass = predicted width×height×mass/100. Required whole grams = ceiling(raw mass×(1+extraPct/100), with 1e-10 g arithmetic snap). Gap = max(0, required−reserved). Size-feasible panels with gap>0 remain shortfall. Summary yarn includes all approved panels, including size-infeasible ones, never held panels. No pooled-yarn allocation or yarn-length conversion.

Baseline rounds target×gauge/10 to integer counts while ignoring repeats. The displayed comparison counts how many approved panels already satisfy the exact repeat and count-cap constraints; it does NOT claim baseline sizing accuracy, AI accuracy, time saved, yarn saved or physical productivity. Values are computed from the current reviewed scenario; held panels excluded consistently.

Only constant-gauge rectangular flat fabric. Effective washed gauge must represent the intended edges too. Row repeats cover all rows; no special edge-row, cast-on/bind-off yarn, seam shaping, circular garment, negative ease, size grading or stitch-pattern instructions are modeled. Area-based mass is an estimate and can miss yarn used by edges and handling; allowance is user-controlled, not a guaranteed safety margin. All default measurements synthetic. Make and wash a representative swatch in the same yarn/needle/pattern. Physical dimensions and consumption have not been tested.

## Download, privacy, runtime and offline requirements

Initial internet required: ~23 MB model/tokenizer/config from Hugging Face / hf.co CDN, plus ~27.5 MB same-origin worker/factory/WASM (UI conservatively says ~29 MB). Model downloads are not content uploads. No telemetry, server calls, credentials, autosaved documents or optional provider integration. Inputs live in browser memory; no user content is sent to model hosts. Network evidence captures GET-only asset downloads with no bodies and no source-note values in URLs. Persisted reports retain host/path/query-key names only, not signed CDN values.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB RAM recommended. Tested with GPU disabled: no WebGPU required. Physical phones, other engines and low-memory hardware unverified. Unsupported browser/worker construction/runtime, network/model failures, malformed model messages, timeout and cancellation show errors/no result, never fake recommendations. Run IDs also guard delayed file imports and stale worker events.

Byte-identical immutable collection runtime (hashes/bytes in runtime-provenance.json; preserve originating apps):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Worker protocol inspected: feature-extraction, device wasm, dtype q8, normalized mean pooling, chunks of four; bounded texts. Cache API explicitly retains worker/factory/WASM; Transformers.js retains model assets where supported. Tested offline scope is fresh-worker inference in an **already-open, online-warmed page** with every network request disabled. Cold offline app-shell navigation/reload is not implemented or promised. Browser eviction/private mode may require downloads again. Model main revision is not frozen by the shared runtime; future model-host changes need revalidation. Runtime paths themselves hash-audited. Transformers.js Apache-2.0; ONNX Runtime Web MIT.

## Build, deployment and validation

React + Vite; base `/daily-app2/20261127-17/`. `npm install`; `npm run predeploy`. Required per-app gh-pages dependency and exact predeploy/deploy scripts retained, but publish only with repository ROOT deployment so the full collection survives. Root README explains Pages commit/build verification.

See VALIDATION.md and machine-readable reports. Real production-bundle browser tests run both different fixtures and the 12-panel/8-swatch maximum, test review/edit/hold/undo/export/reimport, real offline CPU inference, privacy and 1440/390/320px layout. Fault injection is used only for failure handling, never to establish successful AI. Independent Python Fraction replay scans valid integer counts for 603 cases; separate Python CSV parsing reopens downloaded current artifacts and verifies record conservation, escaping, formulas and planner invariants. Tiny synthetic retrieval results do not establish general accuracy, knitting quality or physical yarn use.

Public release verified: matching built Pages commit `913973402101bff70de64ac478f9dce4c2fdf632`, successful workflow `45963429508`, nine exact public file matches, both real-AI fixtures and full review/export/max-batch/offline/privacy suite, **570** independent public artifact assertions, public recovery/stale/import safeguards and all **917** gallery cards. Combined site **824,678,382 bytes**, below unchanged guard; runtime-sharing rules untouched. No digest sent.
