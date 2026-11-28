# Strandlight Bench

A static React + Vite utility for workshop instructors preparing low-voltage LED string worksheets from mixed parts notes. This is a teaching/planning tool, not hardware authorization.

## Workflow

1. Choose either synthetic example, edit source JSON or import `.json` (source or this app's audit).
2. Supply 2–8 LED catalog profiles, 1–24 lots, supply minimum/maximum, resistor tolerance and power derating, and 2–24 offered resistor values/ratings.
3. Explicitly click **Load AI & match LED lots**. Real local MiniLM inference retrieves the nearest catalog description for each note. Inspect ranked descriptions and cosine similarities (not confidence). It does not infer electrical ratings, inspect actual LEDs or identify part numbers from images.
4. Verify each identity, quantity, forward-voltage bounds and current window. Change a profile to reload its catalog specifications, edit the bounds, approve checked lots or hold uncertain ones. Original data never changes. Any specification edit resets that lot to pending; all edits invalidate exported snapshots. Undo restores the prior review (up to 30 actions).
5. Apply the complete review. Deterministic exhaustive enumeration tries uniform series counts 1–12 that exactly divide the lot quantity and every supplied resistor. A separate resistor belongs in **every** parallel branch. Choose minimum branch count, then minimum worst-case total current, then lowest rating and resistance as deterministic ties. This is optimal only in this explicitly bounded uniform-topology catalog; mixed string lengths are outside scope.
6. Download current JSON, Audit CSV, Markdown or **Worksheet CSV**; copy the Markdown worksheet. Worksheet export requires at least one approved lot and a feasible plan for every approved lot; held lots are excluded and retained in audits. No remote files, accounts, purchases or equipment are changed.

## Real AI / runtime / license

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; 384-dimensional normalized mean-pooled sentence embeddings, quantized q8 ONNX on WASM CPU, one thread.
- Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), using the existing immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its WASM module factory, and the shared binary from `20261107-2`. **Preserve those older app paths** when deploying the collection. Exact SHA-256/bytes: `runtime-provenance.json`.
- The worker's model repository revision is `main`, not a pinned model commit. Observed downloads resolved to model commit `751bff37182d3f1213fa05d7196b954e230abad9`; upstream changes or cache eviction can affect later results.
- Approximately **50 MB initially**: ~23 MB quantized weights, 26,861,777-byte WASM, worker/factory/tokenizer/config. Internet required initially. Model files come from huggingface.co and its CDN, runtime files from the same origin. The UI discloses this before loading. No model requests before explicit run.
- CPU path requires modern module workers, WebAssembly SIMD, Cache API for offline reuse and sufficient browser memory. Tested headless desktop Chrome with GPU disabled. No WebGPU or API key is required; no optional remote provider is implemented. Not tested on physical phones, Safari or Firefox.
- At most 32 short texts, each ≤200 characters, in chunks of four. The runtime tokenizer's model limit is 512 tokens; the pipeline's incidental `max_length:256` argument is not an enforced 256-token guarantee. No generative prompts or structured text parsing: we validate the returned count, 384 dimensions, finite numbers and normalized vector norms before ranking.

## Privacy, cache and failures

Default content stays in browser memory. No analytics, uploads, credentials or provider calls. The only remote traffic observed was model file downloading via GET; no source text in URLs/bodies. Imported prose is data, never a tool instruction. Runtime loading and processing show status/progress; cancel aborts source fetch and terminates the worker. A 180-second deadline, run identity and guarded async imports prevent stale runs from replacing current input or results. Download failures, worker errors, malformed vectors and unsupported capabilities produce visible errors, never canned AI results. Retry via Run.

Runtime worker/factory/WASM sources and model files are cached using Cache API/Transformers.js caches. After a full successful load, **another real inference with a fresh worker in the same warmed open page was tested with all network disabled**. This does **not** promise fresh offline navigation, installed PWA support or cold startup. Cache eviction and private browsing can require another download. Clear site data to delete cache. Inputs/reviews are not persisted automatically; download an audit to preserve them. Reimport restores original inputs only, and requires fresh AI/review rather than blindly trusting saved decisions.

## Bounds, equations and baseline

Source ≤30,000 characters; imported JSON ≤1 MB including audit envelope, with the restored source still subject to source limits. Unique simple IDs ≤24 characters, title ≤100, AI notes/descriptions ≤200, reviewer notes ≤1000 with no malformed Unicode/control codes. Catalog 2–8 profiles, lot count 1–24, quantity 1–240, voltage 3–30 V, Vf 0.5–5 V, min current 0.1–30 mA and max current up to 50 mA, resistor 10–100,000 Ω / 0.05–5 W, tolerance 0–20%, usable rated-power fraction 0.1–1.

For series count n, nominal R and tolerance t:

- Imin = max(0,Vmin − n·Vfmax) / [R·(1+t)].
- Imax = max(0,Vmax − n·Vfmin) / [R·(1−t)].
- Pmax = max(0,Vmax − n·Vfmin)² / [R·(1−t)].
- Require positive minimum headroom, current within the reviewed design band, and Pmax ≤ rated watts × derating. A numerical boundary tolerance of 1e-9 is used for comparisons in displayed mA/W units.
- Parallel branches = reviewed quantity / n; all LEDs are conserved. Total worst-case current sums branch counts × Imax across feasible approved lots. Partial totals are labeled and are not predictions for unplanned lots.

Baseline uses **one LED per branch**, selecting nearest offered R to the midpoint-supply/midpoint-Vf midpoint-current target, without considering tolerance or power in the choice; ties use lower power rating. Baseline bounds are subsequently evaluated with the same equations. Branch counts refer to the same approved lots only when all are feasible; there is no measured brightness/time/accuracy claim. In the simple fixtures the nominal baseline already passes all modeled bounds; the explicit gain is fewer modeled branches/resistors, not a fabricated safety improvement.

Constant bounded Vf is a simplified circuit model. Temperature dependence/coupling, dynamic resistance, brightness/flux, wiring drops, driver stability, thermal layout, actual equipment behavior and physical construction are not validated. Catalog ratings must be independently verified. Do not use for mains or high-power arrays. Semantic retrieval can mishandle negation: the deliberately negated red/blue probe retrieved the wrong identity; mandatory review corrected it.

## Formats and build

Complete JSON envelope: `format`, unchanged `source`, ordered editable `review`, computed `result`. JSON stays lossless. Audit CSV preserves all original rows, reviewed values, decisions and notes; formula-leading text receives a spreadsheet-safe apostrophe. Markdown is a human-readable worksheet, not HTML rendering. Worksheet CSV is a neutral per-lot topology list, not a device configuration; it includes approved feasible records only and is blocked if any approved lot is infeasible. Independent Python `csv.DictReader` and Decimal calculations check real downloaded artifacts, escaping, all records, exhaustive choices and sums.

```sh
npm install
npm run predeploy
# Do not run the per-app deploy: it would replace the combined collection.
cd /Volumes/ExternalHD/daily_app2
npm run predeploy
npm run deploy
```

Vite base `/daily-app2/20261128-23/`; per-app gh-pages dependency and exact predeploy/deploy scripts retained as required. Root combined deployment is authoritative.

Validation commands: `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node recovery-test.cjs`, `node model-cancel-test.cjs`, `node import-race-test.cjs`, `node input-guard-test.cjs`, `python3 artifact-test.py <prefix>`, `node asset-audit.mjs`. Browser suites take `APP_URL` and `PREFIX`; asset audit takes `SITE_ORIGIN`. See [observed validation](VALIDATION.md) and machine-readable reports. All fixtures and exported examples are synthetic.
