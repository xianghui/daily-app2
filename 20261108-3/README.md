# Scale Compass

A local-AI scoring-codebook assistant for research operations. Survey analysts often receive mixed forward/reverse-worded items and response matrices; missing a reverse key changes descriptive totals. Scale Compass compares each item against two user-written opposing construct anchors, requires an explicit human scoring decision for every item, then exports a reproducible scoring register. It does not validate a psychological instrument or infer clinical meaning.

## Workflow

1. Choose **Workplace trust** (1–5) or **Digital confidence** (0–6), paste JSON or import a `.json` file.
2. Set the construct, opposing forward/reverse descriptions and scale endpoints in the JSON editor. Supply `items: [{id, text, responses}]`; response positions represent the same respondents across items. Null means missing. Do not include respondent names.
3. Explicitly click **Load AI & inspect directions**. No inference/download occurs on startup. Review each source item, both anchor cosine similarities and its suggested direction. Margins below 0.04 are review cues, not calibrated confidence.
4. Change a direction, accept it, or hold the item. A changed direction resets its decision to pending. Add notes; undo restores up to 40 edits. All original data remains intact. Resolve every item before applying.
5. **Apply reviewed scoring** creates the current export snapshot. Forward values remain unchanged; reverse = min + max − original. Held and missing values remain null. JSON includes original input, semantic evidence, reviewed cells and descriptive partial respondent sums. Long-form CSV includes every original cell and its reviewed score/direction/decision/note. Copy or download the actual reviewed CSV. Edits invalidate exports until reapplied. Importing an exported JSON restores its original input, not its human decisions.

## Real AI and deterministic steps

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized `q8` ONNX; MiniLM / ONNX conversion Apache-2.0. Model revision follows the upstream default branch, not a pinned commit; future model changes may change suggestions. Upstream weights are downloaded, not committed.
- Runtime: bundled Transformers.js 4.3.2 and ONNX Runtime Web, WASM CPU, one thread, module worker. Feature extraction produces 384-dimensional normalized mean-pooled embeddings. Up to four texts per inference call, 256-token truncation. Real semantic comparison handles paraphrases; no regex or hardcoded example answers stand in for AI.
- Deterministic: vector count/dimension/finite-number validation, cosine comparison, direction choice, small-margin cue, response validation, reverse formula, hold/missing handling, baseline comparison, totals and serialization.
- This is an aid to reviewing a key, not automatic instrument scoring authority. MiniLM is not trained as a negation/polarity classifier. A tested double-negative item (“I do not distrust my coworkers”) was misclassified; the two simple four-item fixtures matched 8/8 keys, but the harder negation pair matched only 1/2. Double negatives, ambiguous constructs, mixed domains and non-English items can mislead it. **Use the official instrument key.** No clinical cutoffs, scale reliability or psychometric validity are claimed.

## Downloads, privacy and offline scope

Approximately 23 MB model weights + 27 MB runtime plus tokenizer and JavaScript files on first use; internet required initially. Model/tokenizer files download from Hugging Face and its CDN (`huggingface.co`, `cas-bridge.xethub.hf.co` or current signed redirect host); app/worker/runtime download from the collection origin. ONNX WASM is shared byte-identically with `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; keep that earlier app when deploying. Runtime factory is bundled under this app's `runtime/`.

No user text, responses or keys are sent to a provider. No remote inference, tracking or provider integrations. Content remains in tab memory; no documents go into local storage. Model files use the Transformers browser cache; the worker/factory/WASM also use named Cache API caches. Clear site storage to remove them. Caches may be evicted; network requests disclose download metadata, not input content. No API key needed or supported.

After one successful online run, fresh-worker inference works with all network disabled **in the already-open tab**, as tested against the production bundle. Offline reopening/reload of the app is not supported or promised: there is no app-shell service worker. Cached model assets alone do not guarantee offline navigation.

Use a current desktop Chrome, Edge, Firefox or Safari with WebAssembly/module workers and Cache API, roughly 300 MB available memory; actual validation was desktop Chrome. No WebGPU needed. WASM CPU is the sole inference path, not an untested GPU fallback. Physical phones and other engines were not tested.

## Bounds and failures

Original input JSON ≤60,000 compact characters; exported audit JSON/import ≤500,000 characters (larger audit files preserve the same bounded original input), 2–32 items, unique IDs ≤50 characters, construct/anchor/item text 1–450 characters, scale integer endpoints 0–10, 1–100 equally aligned responses per item, values integer within bounds or null. AI gets only anchors/items; numeric responses never enter the model. Text is treated as data and cannot change authority or request credentials.

Progress reports file status/download percent and embedding batch counts. Cancel terminates the worker. Input changes cancel ongoing work and invalidate exports. Run IDs also protect asynchronous file/worker fetches and prevent stale results. Worker exceptions, malformed embeddings and a 180-second timeout fail with actionable errors; retry is explicit. No canned/deterministic fallback replaces inference. No external sending, deletion or account actions.

## Outputs and comparisons

JSON schema `scale-compass/1` includes `input`, `analysis`, `records`, `totals` and `metrics`. CSV is long-form: item ID/text, respondent ordinal, original value, reviewed score, direction, decision and note. Missing/held scores are blank in CSV and null in JSON. CSV formula-like strings receive an apostrophe; JSON is lossless. Partial sums must be read with scored/missing-or-held item counts; totals across differing completeness are not directly comparable.

The baseline assumes every item forward. `changedCells` counts non-null reviewed cells whose value differs from original; midpoint reversals therefore do not count as changed. Reverse/held item counts and sums are computed from the current applied review. No time savings, accuracy percentage or quality uplift is claimed.

## Build and publication

`npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261108-3/`. Per-app scripts retain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but collection publishing must use the **root** predeploy/deploy flow so earlier apps remain intact. See [observed validation](VALIDATION.md) and parent README.

## Validation

`node core-test.mjs`, `python3 serve-test.py`, then `node browser-test.cjs`; `node extra-test.cjs`, `python3 validate-artifacts.py`, `python3 audit-assets.py`. Test success paths use real model inference; fault injection is confined to defensive tests. No real/personal survey data or credentials are included.
