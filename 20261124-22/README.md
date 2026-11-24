# Basecamp Links

A local AI-assisted relative-link handoff tool for documentation editors working across multiple publishing sites. Input site descriptions, absolute base URLs, cross-origin constraints and notes paired with URL references. The bottleneck is identifying the intended publishing site from informal notes, then correctly resolving path-, root-, query- and fragment-relative links. This is not sitemap matching, redirect generation or query canonicalization.

## Workflow

1. Paste source JSON or import a `.json` source/full audit. Try the two synthetic examples.
2. Edit `plans`: unique site ID, English description, absolute `base`, boolean `allowCrossOrigin`. A trailing slash matters. Edit `records`: ID, English `context`, original reference `raw`.
3. Explicitly select **Load AI & reconcile**. Download progress and batch progress appear; cancel terminates the worker and pending fetch. Wait for genuine inference—there are no pre-filled/canned predictions.
4. Inspect ranked cosine evidence, the proposed site, base and resolved reference. Edit site/reference, add multiline review notes, approve or hold every record. Editing the site/reference renews approval. Undo reverses review edits.
5. Apply the reviewed scenario. Invalid or disallowed references are blocked, held records are retained in the audit. Export full JSON/CSV/Markdown or approved-only Manifest JSON; copy Markdown. Any review edit invalidates the export snapshot. Original input is always retained. Reimport full audits restores originals, not past approvals.

## Real AI / static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, approximately 23 MB weights; English semantic feature extraction, normalized mean-pooled 384-dimensional embeddings. It ranks the note against the supplied descriptions; it does **not** invent links, check reachability, or grant access. Cosine similarity is not calibrated confidence.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 Apache-2.0 / ONNX Runtime Web MIT, WASM CPU with one thread, four texts per chunk. The shared worker passes a 256-token hint, but this pipeline uses tokenizer `model_max_length=512`; do not interpret that hint as an enforced 256 cap. Descriptions/notes are additionally bounded to 200 characters.
- Same-origin immutable shared worker: `20261115-6/assets/ai.worker-lkOoPoq8.js`; factory: `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (~27 MB). Preserve those published apps/assets. Byte hashes in `runtime-provenance.json`.
- First use requires internet for model/tokenizer downloads from Hugging Face and its CDN/Xet hosts plus same-origin runtime downloads. Several hundred MB free RAM and current desktop Chrome with WebAssembly SIMD, module workers and a secure context recommended. No WebGPU required. Physical phones/other engines untested. Code and UI use bundled React with no remote fonts.
- The app caches worker source with Cache API; shared worker caches WASM/factory and Transformers caches model assets. Storage is subject to eviction. Tested offline claim is **fresh-worker inference inside an already-open page after a successful warm run**. Cold offline navigation/reload/app shell is not supported or claimed.
- No provider integration, account, paid service, API key, uploads, analytics, link requests or external actions. Requests are model/runtime downloads; input/review text stays in browser memory except user exports/clipboard. Do not paste credentials or token-bearing private URLs into an export intended for sharing. Imported text is data, not instructions.

## Deterministic validation and limits

2–5 sites; 1–24 records; source ≤50,000 characters, import ≤1 MB; site ID ≤60, record ID ≤80, context/description ≤200, base/reference ≤1000, note ≤2000. Vectors must have finite 384-dimensional normalized values with the exact expected count. 180-second timeout; cancellation/input changes invalidate the run ID before terminating the worker, so old results/file reads cannot overwrite new work. Network/device/model/malformed results fail visibly, with no fake output.

Resolution uses the browser's WHATWG `URL` API. HTTP(S) only, no embedded credentials, controls/raw whitespace/backslashes, malformed %HH escapes or unpaired surrogates. Bases must be absolute and have no query or fragment. Unicode host normalization and percent encoding may change the serialized URL; exact original text survives the audit. Cross-origin policy compares normalized scheme/host/port, not registrable domains. A path may leave its base directory while staying same-origin: there is no directory-containment claim. This is not a comprehensive sanitizer, security review, authorization or existence check.

Raw base+reference concatenation is the deliberately simple baseline. The app counts ready records whose resolved URL differs from this shortcut. Held/blocked records do not enter the comparison. Counts are actual computed string disagreements, not accuracy percentages or measured time saved. AI mistakes, especially negation/overlapping sites, require human correction.

Full JSON includes originals, all reviews/evidence/checks and computed metrics. CSV retains all records, quotes embedded commas/newlines and prefixes formula-leading text; JSON preserves exact values. Manifest contains only approved valid links, with source IDs, site, base, reviewed reference and resolved URL. JSON/CSV/Markdown are distinct audit exports; manifest is a separate JSON artifact. No HTML link preview executes imported content.

## Run and publish

```sh
npm install
npm run predeploy
npm run dev
```

Vite base `/daily-app2/20261124-22/`. Per-app `predeploy` and `deploy` scripts are retained, but **publish only through the repository root combined-site workflow**. Root README specifies Pages verification. See `VALIDATION.md` for observed checks, limitations, actual artifacts and publication status.
