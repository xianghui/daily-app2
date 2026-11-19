# Effort Grove

A no-key local-AI analog-effort worksheet for small-team coordinators. Completed jobs supply **observed** active minutes. Neural semantic retrieval finds analogous history for upcoming descriptions; deterministic donor medians propose **estimated**, never observed, minutes. Humans inspect sources, correct estimates or hold unsuitable jobs, then export a reversible worksheet. No quotes, schedules, assignments or messages are sent.

## Workflow and formats

1. Choose **Repair workshop** or **Publishing desk** (synthetic fixtures), paste JSON, or import a source/audit `.json` up to 2 MB. Source fields: `context`, `k`, `history[{id,text,minutes}]`, `records[{id,text}]`. All durations use active whole minutes, not queue time. Use comparable scope and units.
2. Set `k` to 1–3. **Load AI & find analogs** explicitly downloads/loads the model. Progress reports downloads and four-text inference batches. Cancel terminates the worker; retry starts over. A 180-second timeout reports failure without fabricated suggestions.
3. Each upcoming job shows selected donors, original descriptions, observed minutes, all candidate cosine scores, the median proposal and selected-donor min/max. The range is **not a prediction interval** and cosine is **not confidence**. Edit estimated minutes and multiline scope notes; approve or hold every job. Numeric edits reset approval. Undo restores the last review edit; history retains up to 100 snapshots.
4. Inspect the retrospective leave-one-out table: each observed job is predicted from other histories only. Its own observed minutes are excluded from both the donor set and the global-median baseline. MAE is the mean absolute error in minutes. Positive baseline-minus-analog differences favor the analog on this supplied sample only. Worse results remain visible. No independent future accuracy, time saved or universal improvement is claimed.
5. **Apply reviewed estimates** releases an in-app draft. Totals compare reviewed minutes, original analog proposals and the global-median baseline for the **same approved jobs**. Differences are not savings. Held jobs have no released minutes. Any input/review edit invalidates the snapshot and disables exports until reapplication.
6. Download complete **JSON** audit, all-job **CSV**, **Plan CSV** (all jobs, held minutes blank) and **Markdown**, or copy Markdown. JSON preserves every untouched history, original upcoming job, evidence, proposal, edit and hold. JSON reimport restores originals only and deliberately requires fresh inference and renewed approvals. Text CSV cells starting with `= + - @ tab CR` receive an apostrophe against spreadsheet interpretation; genuine numeric minutes remain numeric. Quoted commas/newlines survive export. JSON is the lossless audit; CSV text formula hardening is intentional.

## Real AI, license and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX approximately 23 MB plus tokenizer/config files. Hosted `main` is not pinned: future host revisions may require revalidation. Observed model-host revision during actual inference: `751bff37182d3f1213fa05d7196b954e230abad9`.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT; WASM CPU, single thread, normalized mean-pooled 384-dimensional embeddings. AI materially determines which historical jobs provide the estimate; it does not generate durations. Cosine ranking, stable source-order tie breaking, median/whole-minute rounding, validation, review, MAE, sums and exports are deterministic.
- 4–12 history jobs and 1–12 upcoming jobs, at most 24 texts in four-text batches. Actual tokenizer model ceiling is 512 tokens: the shared feature-extraction pipeline ignores its per-call nominal `max_length:256`. Descriptions are bounded to 300 characters. Returned vector count, dimension, finiteness and unit norms are validated before any use.
- Immutable **same-origin** collection dependencies (preserve all paths):
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` — 548,645 bytes.
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` — 53,057 bytes.
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` — 26,861,777 bytes.
  Their inspected protocol, settings and SHA-256 hashes are in `runtime-dependency-audit.json`. Reusing these assets avoids duplicating large runtime downloads in the nearly-full collection. React/Vite assets use `/daily-app2/20261120-2/`. No backend exists.
- Requires current browser with WebAssembly SIMD, module workers, Cache API/secure context and several hundred MB free RAM. No WebGPU requirement. Desktop Chrome WASM CPU was tested with GPU disabled. Physical phones, low-memory devices and Safari/Firefox/Edge inference remain **unverified**; responsive layout was checked at 320/390 CSS pixels.

## Privacy, downloads and offline behavior

No API keys, provider integration, analytics or content uploads. Descriptions, observed durations, vectors, estimates and reviews stay in browser memory. Only explicit loading downloads public weights/tokenizer files from Hugging Face and its CDN; same-origin static assets provide worker/runtime. Normal download network metadata reaches those hosts, but job text does not. Browser request checks found GET/HEAD only, no request bodies and no source descriptions in URLs. Inputs are inert text and cannot authorize tools or request credentials. Synthetic fixtures only; no personal documents or agent credentials are included.

Worker source is explicitly cached as `effort-grove-worker-v1`; factory and WASM use shared `circuit-cove-runtime-v1`; Transformers.js caches public model files. These caches never store job content. After one successful run, **fresh-worker real inference works with all network disabled in the already-open production page**. Offline reload/navigation/app-shell startup is not promised. Cache eviction/disabled caches require internet. Reload clears unsaved content; exported audits remain user-controlled files. Runtime/network failures show retry/device guidance, not a fake model path.

## Validation and limits

Source JSON 1–50,000 characters; import envelope ≤2 MB. IDs 1–40 ASCII alphanumeric/underscore/hyphen characters and unique within each collection; context/descriptions 1–300 characters; notes ≤1,000. Observed/proposed/reviewed minutes are integer 1–1440. Upcoming source records cannot have observed `minutes`: observations belong in history, preventing accidental relabeling. There is no extrapolation model, explicit quantity/complexity normalization, causal productivity analysis or scheduling optimizer.

A nearest analog always exists even for irrelevant, contradictory or instruction-like text. Similar descriptions do not establish equal scope, length, skill or working conditions. Hold weak analogs or enter a justified human estimate. Donor ranges are descriptive, not uncertainty calibration. Related history can inflate retrospective performance; do not tune k on a small sample and treat its error as prospective validation. Verify scope and actual availability before making commitments.

Run IDs protect all asynchronous worker fetches, file reads and messages; cancellation terminates workers. Malformed vectors/envelopes, worker failures, unavailable workers/WASM, model-host failure, timeouts and bad inputs leave no fake output. Detailed observed results, artifacts and known limitations are in [VALIDATION.md](VALIDATION.md).

Build with `npm install && npm run predeploy`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`, with gh-pages installed. **Publish only from the repository root** (`daily_app2` package) via its combined `deploy/` workflow, never the individual app deploy. Test scripts use workspace Playwright and installed Chrome; `serve-test.py` serves built bundles at port 7020. No private data or model-provider credentials are needed.

Combined-site assembly retained all 734 earlier gallery objects/categories, with 735 built apps and no failures/skips. Existing runtime-sharing rules are unchanged. Site size: 999,930,009 bytes, below the existing conservative 1 GB guard. Preserve the immutable shared paths above; the collection is nearly full.


Public release: matching Pages `a08245b5cbd6f8debfd2a816e09942f894ecdebd` reached `built` with a successful workflow on the first deployment. Seven public app/gallery/runtime asset byte matches, both real-AI fixtures, semantic-change sensitivity, the full reviewed-artifact/privacy/offline/max-batch suite and all 735 gallery cards passed. Source staging excludes unrelated pre-existing edits. No digest sent.
