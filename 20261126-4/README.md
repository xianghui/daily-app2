# Exit Ledger

A local-AI review utility for equipment-trial coordinators combining short status handoffs. Distinguish terminal failure, planned retirement (a competing terminal event), and still-operating right-censored follow-up; review every classification/day, then export a source-linked cumulative-incidence worksheet. No equipment connection, clinical interpretation, uploads or external actions.

## Workflow

1. Paste source JSON or import a `.json` source/audit. Two synthetic examples are supplied. Each independent unit has one last observation, a unique ID, a short note and elapsed whole-day string. All units share time zero.
2. Explicitly load AI. Real MiniLM embeddings retrieve each note's nearest supplied outcome profile, not a hard-coded keyword classifier. Inspect source notes, cosine alternatives and definitions. AI always returns a nearest match, even when unsuitable.
3. Correct outcome/day, annotate, approve or hold **every** unit. Set a reporting horizon. Undo reverses review edits, including the horizon. Holds exclude a unit from the entire calculation but never delete its source record. The interface warns about the changed cohort.
4. Apply the current review. The worksheet shows tied-day risk sets, failure/retirement source IDs, censoring, event-free probability and exact cumulative-incidence fractions. All edits invalidate exports until reapplied.
5. Download complete JSON, all-observation CSV, risk-set Curve CSV, Markdown or copy the current worksheet. Reimporting an audit restores its original source, not approvals. No real personal data is included.

## What AI does — and does not do

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0), q8 quantized ONNX, runs with Transformers.js **4.3.2** and ONNX Runtime Web, single-thread WASM **CPU**. Mean-pooled normalized 384-dimensional embeddings match paraphrased observation notes to described status profiles. Cosine is similarity, never a confidence percentage. Runtime batches four texts. AI does not verify equipment status, extract dates, enforce censoring assumptions, understand every negation or certify reliability. Human review is mandatory. One of 12 simple fixture links was wrong in observed inference; see VALIDATION.md.

The shared tokenizer's model maximum is 512 tokens; the pipeline's supplied `max_length:256` is not treated as a guaranteed shorter cap. Notes/profile descriptions are independently bounded to 200 characters. Unusual Unicode may still truncate. The model revision is not pinned; host updates can change results.

## Deterministic method and baseline

At each observed day, let `n` be the approved units at risk just before that day, `d1` failures, `d2` retirements and `S` prior event-free survival. Add `S*d1/n` to failure cumulative incidence and `S*d2/n` to retirement incidence; update survival by `S*(n-d1-d2)/n`; then remove both events and censored units. Tied terminal events occur before censoring. Reduced BigInt fractions avoid floating-point accumulation; UI percentage displays are rounded descriptive estimates, not accuracy.

Failure + retirement incidence + event-free survival equals exactly one at every step. Source IDs witness each risk set and exit. The baseline instead treats retirements as censored, computes target-event Kaplan–Meier, and displays `1-KM`: this answers a hypothetical no-competing-exit question, not observed failure probability. It is not necessarily wrong for every scientific estimand. Comparison uses the same reviewed cohort/times. No invented performance or time-savings claims. Reporting beyond the latest approved observation returns no estimate rather than extrapolating. At/before the supported horizon, the right-continuous step estimate is used.

Assumptions/limits: a small descriptive single cohort, independent units and non-informative censoring; no delayed entry, repeated/recurrent events, left/interval censoring, group comparisons, confidence intervals, causal claims or certification. One unit must not appear under several IDs. Independence and truthful event times cannot be verified here. Excluding holds can bias interpretation.

## Privacy, downloads, caching and devices

Default processing requires **no API key** and has no remote-inference option. Before explicit load, no model-host request. Approximately **50 MB** first load: ~23 MB model + **26,861,777-byte WASM**, ~0.55 MB shared worker, 53 KB WASM factory and tokenizer/config files. Hugging Face and its CDN serve model files; app/runtime assets are same-origin GitHub Pages files. Notes are sent only to a local worker, not in network URLs/bodies. No telemetry/storage of source documents. Review state is in memory until exported; refreshing loses it.

Current browser with WebAssembly SIMD, module workers, BigInt, Cache API and adequate memory. **WebGPU is not needed.** Desktop Chrome headless with GPU disabled is actually tested; phone-width layouts are tested by emulation, not physical phones. Other engines/devices unverified. No promise for every phone. Worker fetch/construction/errors, model download, malformed vectors, timeouts and unsupported APIs fail visibly, never with fake output. Cancellation terminates the worker and aborts pending fetches. Run IDs prevent stale responses from overwriting a new run. Timeout: 180 seconds. Retry reloads a fresh worker.

Cache API retains worker source, WASM factory/binary and Transformers model files when available. **Tested offline scope: a fresh worker in an already-open, successfully warmed page with all networking disabled.** Cold offline navigation/reload is not claimed. Cache eviction/private mode may require downloads. First load needs internet; no service worker app-shell cache is supplied.

### Preserved immutable same-origin runtime dependencies

- `20261115-6/assets/ai.worker-lkOoPoq8.js` — full browser AI runtime worker
- `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve these older app paths/builds in the combined collection. Hashes/byte counts are in `runtime-provenance.json`, validated by `audit-assets.mjs`. No model computation occurs server-side. Reuse avoids duplicating ~27 MB per utility.

## Input/output contracts

Source ≤60,000 characters; import envelope/file ≤1 MB; 2–6 profiles, 1–24 observations (maximum 30 inference texts, eight chunks). Each title ≤200 characters; each note/description ≤200; reviewer note ≤500. Unique ASCII IDs `[-A-Za-z0-9_]`, 1–40 characters. `profiles` entries: `{id,description,rule}` with rule `failure`, `retirement` or `censored`; `requests`: `{id,note,day}` with **string** day 0–36500, no signs/leading zeroes/fractions. `horizon` is an integer 0–36500. Different described profiles may share a rule. Unsupported formats, invalid controls/unpaired surrogates, empty/oversized values and duplicate IDs are rejected. Imported text never changes tool authority or executes.

Outputs are UTF-8 JSON/CSV/Markdown. JSON includes exact originals, reviews, held rows, horizon, full risk sets and reduced fractions. Observation CSV quotes embedded commas/quotes/newlines, retains all original/review fields and apostrophe-prefixes spreadsheet formula-like text (`=+-@`, tab/CR). Curve CSV carries exact fractions and source-ID lists. Genuine numeric day/count values remain numeric in the curve. JSON preserves full fidelity; CSV formula neutralization intentionally changes text presentation. Markdown preserves source text for reading, not trusted executable HTML.

## Build, validation, publication

React + Vite; base `/daily-app2/20261126-4/`. `npm install`, `npm run predeploy`; required per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Do not deploy this individual package:** publish the whole collection from the root via its root predeploy/deploy workflow.

`browser-test.cjs` runs actual production AI twice, maximum chunked input, review/edit/undo/holds, downloaded artifacts, clipboard, network privacy, fresh-worker offline inference and desktop/phone layouts. Defensive faults are explicitly injected only in `defensive-test.cjs`; `recovery-test.cjs` verifies real-model retry after failed downloads and late-response/import guards. `oracle-test.py` independently checks exact incidence against Python Fraction; `artifact-test.py` independently parses downloaded JSON/CSV/Markdown and recomputes risk sets. See VALIDATION.md for observed counts, failures and untested scope. Successful compilation alone does not prove AI functionality.
