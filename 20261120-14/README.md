# Replicate Commons

A local-first, **nonclinical prototype-study worksheet**: informal measurement notes → real AI specimen retrieval → mandatory review → equal-independent-specimen comparisons → usable JSON/CSV/Markdown. Unequal technical repeats should not silently give one specimen extra weight. This is distinct from binary inspection-lot rates, crossed operator variance studies and paired-instrument agreement.

## Use

1. Try **Textile prototypes** or **Workshop objects**, both synthetic. Edit/paste JSON or import original/audit `.json`. Register genuinely independent specimens, reference/trial groups, common unit and a repeat-range recheck tolerance. Choose descriptive identities that are semantically distinguishable; the model cannot reliably distinguish identical numbered specimens.
2. Read the download/device notice, then explicitly **Load AI & reconcile**. Model-download and four-text inference batches show progress. Cancel terminates the worker. Retry after actionable network/device errors; timeout 180 seconds. No fake/demo inference fallback.
3. Inspect original text/value, neural proposal and ranked source descriptions/cosine scores. Correct identity/value, approve or hold every row, and add multiline evidence notes. Identity/value edits reset approval. Undo retains the last 100 edits. Original input stays unchanged.
4. **Apply reviewed comparison**: inspect per-specimen means, repeat ranges, sources, group coverage, equal-specimen versus pooled-reading means and trial-minus-reference contrasts. Missing specimens block the affected equal-specimen group mean and contrast, not the visible partial pooled baseline. Single readings are explicitly unassessed for repeat range. Inspect leave-one-unit-out contrasts as descriptive sensitivity scenarios, never confidence intervals or recommendations to discard units.
5. Download **JSON** (complete originals/reviews/evidence/results), **CSV** (all original/reviewed readings), **Specimens CSV** (the entire registered roster, including missing units) and **Markdown**; copy the worksheet. Every edit invalidates exports until reapplication. Audit reimport restores **original input only**, not reviewed edits/approvals: retain the audit to preserve review history.

## Input and result contract

```json
{"context":"Synthetic independent object scores","unit":"score","rangeTolerance":2,"minSimilarity":0.15,"first":[{"id":"bowl","text":"Stainless steel mixing bowl kitchen cookware","group":"reference"},{"id":"lamp","text":"Electric desk lamp lighting","group":"trial"}],"records":[{"id":"r1","text":"Metal kitchen mixing bowl","value":5},{"id":"r2","text":"Electric reading lamp for a desk","value":12}]}
```

- 2–8 unique specimen IDs, at least one per `reference` and `trial` group; groups are explicit user data, not inferred. One row per independent specimen, not one per measurement.
- 1–96 unique reading IDs. IDs: ASCII letters/digits/underscore/hyphen, 1–40 characters. Descriptive text/context/unit: nonempty, ≤300 characters. Original JSON ≤60,000 characters. Imported `.json` ≤2,000,000 bytes; restored originals separately bounded. Other formats unsupported.
- Readings finite ±1,000,000 in a common scalar unit, one observation per row. Do not input batch means as technical readings. `rangeTolerance`: 0–1,000,000; `minSimilarity`: 0–1. Review notes ≤1,000 characters. Equality to range tolerance does not flag (`>` only).
- Result `replicate-commons/v1`: all original IDs preserved in order with exactly one review; every approved reading contributes to exactly one registered specimen. Held readings preserved but excluded. No reading deduplication or destructive transformation.
- Neural schema: exactly one finite normalized 384-dimensional vector per source description/reading. Invalid output rejected. No generated JSON or tool instructions are interpreted.
- CSV fully quotes/escapes commas, quotes and newlines; formula-like text beginning `= + - @ tab CR` gets an apostrophe. Genuine signed numeric readings stay numeric. JSON preserves exact text. Empty numeric cells mean missing, never zero.

## Real AI and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), **Apache-2.0**, quantized ONNX `q8`, **Transformers.js 4.3.2**, ONNX Runtime Web **WASM CPU**, one thread. Normalized mean-pooled neural embeddings retrieve specimen descriptions by semantic meaning; cosine is not confidence. Below-threshold rows remain unassigned. No regex classifier, canned sample response, API key, server-only inference or paid service. AI materially reduces manual label reconciliation but cannot certify identity, independence, readings, units or appropriateness of weighting. Negation, jargon, unrelated inputs and indistinguishable numbered specimens are difficult; every link needs review.

Maximum 104 texts, 26 batches of four. Actual tokenizer ceiling **512 tokens**; the shared feature-extraction pipeline ignores per-call `max_length:256`. App text fields independently bounded to 300 characters. Model `main` is unpinned; this run observed revision `751bff37182d3f1213fa05d7196b954e230abad9`. Future model-host updates can change output.

Reuses immutable same-origin assets (preserve these builds):

- `20261115-6/assets/ai.worker-lkOoPoq8.js`
- `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The worker protocol, batching, model configuration and dependency byte hashes were inspected/rechecked in `runtime-dependency-audit.json`. App code is locally bundled; shared runtime avoids duplicating ~27 MB in the collection.

## Deterministic work and baseline

For each specimen, average all approved readings. For each **complete** group, average its specimen means with equal weight, regardless of replicate count. Contrast = trial group mean minus reference group mean. Baseline averages all approved readings in each group, giving more-measured units more weight; it may describe a partial roster and is labeled accordingly. Weighting gap = equal-specimen contrast − pooled-reading contrast, not a measured improvement or bias estimate. Each specimen's range = maximum − minimum; single readings do not establish repeatability. Omitting one unit recalculates the equal-unit contrast only if at least one unit remains in that group. No significance testing, SE, independence estimation, randomization checks or causal effects.

Textile fixture: reference unit means 10/30, trial 20/40; equal contrast **10**, pooled baseline **20**. Two repeat ranges are 4 > tolerance 2. Workshop fixture: reference means 5/15, trial 12/12; equal contrast **2**, pooled baseline **4.5**. Both fixtures matched all 16 intended neural links. The challenge “This is not a linen towel. It is a rubber bicycle tire.” incorrectly linked to linen, not rubber. These illustrate unequal repeat weighting and a model limitation, not universal accuracy or time savings. Equal unit weighting is only appropriate when registered units should have equal importance under a common measurement protocol. Missing/held records and nonindependent units can bias summaries. Never use this as a clinical, safety or experiment-release decision system.

## Privacy, downloads, cache and devices

Before the first explicit load: ≈23 MB model/tokenizer download from **huggingface.co** and its CDN (**hf.co / us.aws.cdn.hf.co**), ≈27 MB runtime plus worker/factory from this collection. Internet and several hundred MB RAM required initially. No model request before user initiation. Default content and edits stay in browser/worker memory. Only public asset GET/HEAD requests; no content uploads, analytics, provider integration or credentials. Imported instruction-like text is inert data. No external actions or messages.

Cache API stores worker (`replicate-commons-worker-v1`), shared runtime bridge and Transformers.js model files where permitted. **Tested offline scope:** after an online run, terminate old worker, disable networking and run real inference using a new worker in the **already-open warmed page**. Offline reload/navigation/app-shell startup is **not promised**; no service worker. Cache eviction/denial requires reconnection.

Secure-context current browser with WebAssembly SIMD, module workers, Cache API and sufficient RAM. **No WebGPU required.** Tested desktop Chrome CPU with GPU disabled. 320/390px layouts are emulation, not physical-phone inference. Other browsers, physical phones, low-memory devices and screen readers unverified. Network, worker and WASM errors show actionable retry states with no fabricated suggestions. Run identities guard late inference, worker-source downloads and asynchronous file reads.

## Build and publish

React + Vite base `/daily-app2/20261120-14/`; `npm install`, `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Never use individual deploy for publication:** root `/Volumes/ExternalHD/daily_app2` predeploy assembles all apps into `deploy/`; root deploy publishes the combined collection. Original `daily_app` remains read-only. No digest sent.

See [VALIDATION.md](VALIDATION.md) for observed checks. `node core-test.mjs`; `python3 serve-test.py`; `node browser-test.cjs`; `node defensive-test.cjs`; `python3 artifact-test.py`. Tests use installed workspace Playwright/Chrome. Fault injection is limited to failure/race testing; successful AI fixtures always load the real default model.
