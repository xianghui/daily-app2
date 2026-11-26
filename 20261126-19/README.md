# Allowance Orchard

A private browser workbench for a small-team receivables reviewer preparing a scenario-weighted loss-allowance worksheet. **AI links informal exposure notes to supplied risk-segment descriptions. It does not predict defaults, infer rates/probabilities or assess individual creditworthiness.** No account access, uploads or postings.

## Distinct process

Unlike the earlier customer-identity aging report (Aging Harbor), this app links exposures to **risk segments**, combines supplied scenario-specific aging rates, compares an all-current shortcut and reconciles an aggregate allowance to every source line. Unlike incident reserve planning, it uses outstanding receivables, calendar due dates and a four-bucket provision matrix. The full gallery was parsed before choosing this objective; exact names, descriptions and nearby alternatives were checked. An expediting planner and early-payment planner were rejected as existing equivalents.

## Use

1. Choose either synthetic example, paste JSON or import a `.json` source/audit file.
2. Set the cutoff, scenario weights and each risk profile's rate matrices. Weights/rates are integer basis points (`100` = 1%; `10000` = 100%). Weights must total 10000. Each profile's `rates` contains one four-value array per scenario, **in scenario order**. Bucket order: current/not yet due; 1–30; 31–90; over 90 days overdue. Supply open principal in integer minor units (`100` = 1.00); one currency only.
3. Explicitly click **Load AI & match profiles** to download the model/runtime and run real semantic inference. No key needed. Cancel download/run or retry failures.
4. Inspect original note, ranked descriptions and cosine scores (not confidence). Correct profile, due date and exposure; add multiline reviewer notes; approve or hold each line. Undo restores prior review edits. A hold blocks the complete estimate, never silently removes a receivable. Rates are visible in the review's assumptions disclosure; change them in source and rerun.
5. **Apply reviewed allowance** to inspect scenario totals, the weighted estimate, all-current shortcut and source-linked cent allocation. Source edits clear review; review edits invalidate the export snapshot.
6. Download actual current JSON, audit CSV, Markdown or Worksheet CSV; copy Markdown. Audit reimport restores original assumptions/records, **not approvals or reviewed edits**. Refresh/close loses unsaved work.

## AI and deterministic boundary

Real q8 MiniLM feature extraction produces mean-pooled normalized 384-dimensional embeddings for profile descriptions and notes. Cosine ranking proposes the nearest risk segment. This handles reworded notes beyond exact labels but **always ranks something**, even for out-of-domain text. Negation can select the wrong segment. It does not verify customer facts, supply credit probabilities, estimate scenario rates or determine accounting compliance. Every source requires review.

Deterministic validation enforces schemas, dates, bounds, unique IDs and normalized finite vectors. Calendar aging is `max(0, cutoff − due)` at UTC midnight. Weighted loss per exposure is:

`exposure_minor × sum(weight_bps × bucket_rate_bps) / 100000000`.

BigInt preserves the exact numerator. Round-half-up the **aggregate** once, then allocate floor cents plus the largest fractional remainders; source order breaks ties. This conserves cents, keeps line net + allowance = exposure and avoids independently rounded line drift. Standalone scenario totals are separately rounded and are **not** used as rounded inputs to the weighted total. All-current baseline keeps profiles, exposures and scenario weights but substitutes each scenario's current-bucket rate. Differences are computed comparisons, not measured savings or accuracy. Rates need not increase with age; a negative aging difference is reported rather than hidden.

This is a simplified planning worksheet, not a standards-compliant expected-credit-loss implementation or advice. No collateral, recoveries, interest discounting, individual overlays, lifetime/stage transitions, multicurrency or forecasting/calibration. Supplied assumptions may be inappropriate. Hold unsupported cases and resolve with a qualified reviewer.

## Real model / runtime / download

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX open weights.
- Shared Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **WASM CPU**; no WebGPU requirement, paid service, provider credentials or optional remote integration.
- Initial download ≈**50 MB plus JS/tokenizer**: ≈23 MB model plus **26,861,777-byte** WASM. Internet initially required for Hugging Face / HF CDN redirects and same-origin runtime. Model uses **main**, not a pinned revision; upstream updates may change results.
- Four texts per embedding chunk; maximum 24 exposures + 6 descriptions = 30 texts / 8 chunks. Each note/description ≤200 UTF-16 code units. The shared pipeline passes `max_length:256`, but inspected feature-extraction implementation only forwards padding/truncation; actual tokenizer `model_max_length` is **512**. No 256-token hard-cap claim.
- Reuses immutable same-origin runtime, hash-checked in `runtime-provenance.json` / `bundle-audit.json`:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
- Preserve those earlier builds/URLs when deploying. Shared assets are local computation code, not a backend. Their source package/attributions remain in the collection. No duplicate 27 MB WASM added.

Current desktop Chrome/Edge with WebAssembly SIMD, module workers and available memory recommended. Actual testing: installed headless Chrome on macOS with GPU disabled. Physical phones, other browser engines and minimum RAM unverified. Unsupported environments, failed downloads, worker failures, malformed output and 180-second timeouts show errors with explicit retry, never canned AI. Cancel terminates workers and aborts worker-source fetch. Run tokens and file-read identities reject stale responses.

## Privacy and cache

Content remains in page/worker memory. All network operations on the default path are model/runtime file GETs, not content uploads. No API keys, analytics or persistent source/review storage. Imported instructions are data only and cannot request credentials or gain authority. Clipboard/downloads are user-initiated. All checked-in fixtures are synthetic; network reports retain host/path and query names only, not signed CDN token values.

Cache API stores worker source (`allowance-orchard-worker-v1`), shared factory/WASM (shared runtime cache) and model files (Transformers.js cache). **Tested offline scope: real fresh-worker inference in an already-open successfully warmed page.** Cold offline startup/reload is unsupported and not promised; no app-shell service worker. Eviction/private browsing/cache restrictions may force re-download. Download file/progress and processed-text counts are visible; cancellation works during model loading too.

## Formats and bounds

Both in-app examples are complete editable source schemas. Top-level fields: `title`, `cutoff`, `scenarios`, `profiles`, `records`. Scenario: `{id,label,weight}`. Profile: `{id,label,description,rates}`. Exposure: `{id,note,due,exposure}`.

- 1–24 exposures; 2–6 profiles; 1–3 scenarios; IDs unique within each list and `[A-Za-z0-9_-]{1,32}`.
- Title ≤100 chars; labels ≤80; notes/descriptions nonblank ≤200; reviewer notes ≤500. Input text rejects control codes except tab/CR/LF.
- Calendar dates must exist, years 1900–2199. Outstanding/reviewed exposure integer 1..100000000 minor units; rates integer 0..10000; scenario weights integer 1..10000 totaling exactly 10000.
- Source ≤60000 characters; source/audit file ≤8 MB. Imported audit envelope size is separate from the stricter original source bound.
- **JSON** (`allowance-orchard-v1`) preserves original source, all reviews/rankings/rows, exact numerators/denominators, computed summary and worksheet. Held reviews keep all originals and null the summary.
- **CSV** retains every original line, original/reviewed values, aging, decisions and reviewer notes; allowance blank if blocked.
- **Worksheet CSV** includes all complete reviewed exposures, rates, allocated cents, net values and exact fraction strings. Disabled if any held exposure. It is not a journal/import instruction.
- CSV uses quoted fields, CRLF and escaping; leading formula-like text is apostrophe-prefixed including multiline fields; genuine numeric values stay numeric. JSON remains the unmodified text audit.
- **Markdown/clipboard** contains computed comparisons, scenario totals and every original/review note. Intended as plain text, not execution or automatic HTML rendering.

## Build and verification

React + Vite; base `/daily-app2/20261126-19/`. gh-pages dependency installed. Per-app scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish **only through the root combined-site workflow**, never the individual deploy script.

```sh
npm run predeploy
python3 serve-built.py --port 7799
node browser-test.cjs
node defensive-test.cjs
node extra-test.cjs
node core-test.mjs
python3 independent-test.py
python3 artifact-test.py
python3 bundle-audit.py
```

After root assembly: `python3 serve-built.py --assembled --port 7797`; test using `APP_URL=http://127.0.0.1:7797/daily-app2/20261126-19/ PREFIX=assembled- node browser-test.cjs`, plus artifact/asset/gallery checks. Repeat real inference and asset-byte verification at the public URL. See [VALIDATION.md](VALIDATION.md) for actual observed outcomes and untested limitations.
