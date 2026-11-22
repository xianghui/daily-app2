# Linecraft Desk

Prepare batches of small monospaced notice cards: **purpose/copy input → real local AI profile retrieval → editable human review → exact word-wrap proof → SVG and complete audit exports**. Useful for library desks, shared workshops and community noticeboards. Not a chat wrapper or copywriting service.

## Use

1. Choose either synthetic example or import source JSON. Edit the catalog's purpose descriptions, `columns` and `maxLines`; add card IDs, purpose notes and copy.
2. Read the download/device notice and explicitly click **Load AI & reconcile**. First use needs internet and roughly 23 MB of model files plus 27 MB of CPU runtime; progress and cancellation are shown.
3. Inspect the purpose profile, cosine evidence and the entire copy. Change the profile, edit multiline copy, add a note, and approve or hold **every** card. Changing profile/copy resets approval; all review edits invalidate applied exports. Undo restores the preceding review edit. Original JSON is never overwritten.
4. Apply the reviewed scenario. Overlong words and too many lines block that card, not the audit. Holds do not print. Inspect greedy versus balanced layouts and actual SVG preview.
5. Download SVG (ready cards only), JSON/CSV/Markdown (every source/review/status) or copy the current worksheet. No printer, email, account, filesystem or other external action is performed.

## What AI actually does

[`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0, runs locally with Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT). It embeds catalog descriptions and each record's purpose note plus first 200 copy characters. Normalized mean-pooled 384-dimensional vectors drive cosine ranking; vector shape, finite entries, normalization and record counts are validated. This materially assists repeated purpose/profile lookup across paraphrased draft batches. It does **not** write, shorten, verify or approve text. Similarity is not confidence, and unknown/negated purposes may still select a nearest profile. Mandatory human review and holds are essential.

The model tokenizer context is 512; the inherited worker supplies `max_length:256`, which is not relied on as an enforced tokenizer cap. Inputs are bounded in characters (200-character descriptions, ≤401-character combined purpose/copy excerpts); full copy remains available for human review and layout.

### Deterministic processing and baseline

After human approval, dynamic programming minimizes **line count first**, then **the sum of squared unused columns over all lines**, including the last line. Greedy word wrapping under the **same reviewed profiles/copy** is the baseline. Both respect fixed-column width. Horizontal ASCII spaces normalize; explicit newlines are hard breaks, including blank lines. No word is silently split or lost. Long words and line-limit overflow block printable output. The objective is computed, not a readability score, AI accuracy percentage or measured time saving. SVG text uses monospaced 16px text and fixed per-line text lengths; inspect actual printer output. This is not proportional typography, hyphenation, translation or a certified signage/accessibility review.

## Input/output and limits

Source JSON schema is illustrated by the in-app examples:

```json
{"title":"Desk cards","profiles":[{"id":"welcome","description":"Welcome visitors to reception and check in","columns":25,"maxLines":6},{"id":"quiet","description":"Quiet reading room phone and noise etiquette","columns":20,"maxLines":5}],"records":[{"id":"card-1","note":"New visitor reception check in","copy":"Welcome. Please check in at reception."}]}
```

- 2–8 unique profiles; 12–72 columns, 1–16 lines each; profile IDs ≤50 and descriptions ≤200 characters.
- 1–24 unique records; IDs ≤100, purpose notes ≤200, copy ≤1,200 characters. Copy accepts **printable ASCII U+0020–U+007E and LF newlines only**. Non-ASCII copy, tabs and controls are rejected explicitly, not corrupted. Purpose descriptions/IDs/reviewer notes may contain Unicode; source metadata must be valid XML Unicode (invalid controls and unpaired surrogates are rejected), and SVG metadata is XML-escaped.
- Source ≤60,000 characters. JSON source/audit imports ≤16 MB (larger audit allowance), then original input is strictly revalidated. Imported audit restores originals only, not old approvals or AI evidence. No unsupported CSV/image import.
- Up to 32 embedding texts, chunks of four; 180-second model deadline. Workers terminate on cancellation/input changes; run identity also guards asynchronous imports and worker-source fetches. Retry explicitly reloads real inference; errors never fabricate outputs.
- Reviewed copy follows the same ASCII/length constraints; optional reviewer notes ≤2,000 characters. JSON retains exact originals and reviewed copy. CSV includes original/current text, evidence-selected/reviewed profile, status, line arrays and objective values; leading spreadsheet formula-like strings are prefixed with an apostrophe. Markdown includes full lossless JSON audit. SVG includes only ready cards. Non-ready records survive all audit formats.

## Runtime, dependencies, privacy and offline scope

No API keys, external inference, shared credentials, tracking or user-content uploads. Public model weights/tokenizer/config download from Hugging Face and its CDN; model content is open source. Input is passed to a local module worker and retained only in volatile app memory and user-requested downloaded artifacts. Cache API stores public files only.

To avoid duplicating runtime bytes in this nearly-full collection, this app depends on immutable same-origin collection assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (embedding protocol `{id,texts}`; replies progress, batch, result `{id,vectors}` or error).
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

**Preserve these apps/assets in combined deployments.** Actual sizes and SHA-256 hashes are recorded in `runtime-dependency-audit.json`. App code/worker/runtime are same-origin static files; no server API is needed. The worker uses WASM CPU, single thread; WebGPU is unnecessary. Requires HTTPS/localhost, module workers, WebAssembly SIMD, Cache API for offline support and several hundred MB available memory. Desktop Chrome tested headlessly with GPU disabled, including 320px/390px emulated phone layouts. Physical phones, low-memory devices and other browsers are not tested or guaranteed.

Initial loading needs internet. App cache `linecraft-worker-v1`, shared runtime cache `circuit-cove-runtime-v1`, and Transformers browser model cache permit **fresh-worker inference in an already-open, fully warmed page with all network blocked**, which is tested. Offline cold navigation/reload is **not** claimed. Browser eviction, private-mode restrictions or cleared caches may require downloading again. Worker caching and model/runtime errors are recoverable by restoring internet/device support and retrying.

## Development / publishing

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261123-8/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` are present, but **publish only through the collection ROOT** `npm run predeploy` and `npm run deploy`; individual deploy replaces the whole collection. See root README for Pages commit/build verification.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), browser/defensive/race reports, downloaded artifacts, screenshots and independent CSV/XML parsing. Two simple synthetic known-answer batches are not evidence of universal routing quality. A negation/instruction-like note still proposed the welcome profile and remained pending, demonstrating the limitation. No tools or credential requests are derived from imported text. Physical print fidelity and human readability have not been measured.
