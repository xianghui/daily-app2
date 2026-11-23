# Checkline Desk

A batch intake workbench for library cataloguers and equipment-desk coordinators: **source identifiers/context → real local AI checksum-profile retrieval → editable review/repair → exact checks → valid-only release plus complete audits**. No remote catalogs, account actions or file modifications.

## Workflow

1. Choose Library intake or Equipment desk (synthetic), paste JSON or import a source/audit `.json`. Edit profiles with a meaningful context description and `scheme` (`isbn10`, `gtin13`, `luhn`), and supply each record's `id`, `note`, `value`.
2. Read the first-use/download notice; explicitly click **Load AI & reconcile**. AI matches source notes to supplied profiles. No model download starts before this action.
3. Inspect cosine evidence and verify each scheme against the source. Edit the identifier or explicitly use a deterministic repair candidate. Nothing auto-applies: changing value/profile resets approval. Approve or hold every record, add multiline review notes, or undo an edit. Originals never change.
4. Apply the reviewed scenario. Invalid approved identifiers remain blocked. Holds remain in audits but not releases. Compare format-only passes with checksum passes for exactly the same approved reviewed records. Counts are computed, not model accuracy or time-saving claims.
5. Download complete JSON/CSV/Markdown, valid-only **Release CSV**, or copy the worksheet/audit. Import CSV identifiers as **text** to preserve leading zeros; JSON preserves them losslessly. Audit reimport restores originals only and requires fresh inference/review.

Example source:

```json
{"title":"Synthetic intake","profiles":[{"id":"books","description":"ISBN ten digit book identifier for library catalog","scheme":"isbn10"},{"id":"products","description":"EAN thirteen digit retail product barcode","scheme":"gtin13"}],"records":[{"id":"sample-1","note":"Older book ISBN ten digit library catalog","value":"0-306-40615-2"}]}
```

## Real AI, not a branded heuristic

[`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0, runs in a local worker through Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), normalized mean-pooled 384-dimensional embeddings on **WASM CPU**, one thread. Cosine ranking of each source context against supplied profile descriptions drives scheme proposals; it reduces repeated manual context/rule lookup for mixed batches. It does **not** infer digits, generate identifiers, verify assignment or approve repairs. Similarity is not confidence: unrelated/negated notes still receive a nearest profile; mandatory human review and holds are essential.

At most 32 texts in chunks of four. Each note/description ≤200 characters. The model tokenizer context is 512; inherited `max_length:256` is not relied on as an enforced tokenizer cap. Finite vector dimension, norm and count are validated before proposals are shown. Imported text is data, never tool authority or credential instructions.

## Deterministic checks, limits and outputs

- ISBN-10: nine digits plus digit/X check character; weighted modulo 11. GTIN/EAN-13: thirteen digits with alternating 1/3 modulo-10 check. Generic Luhn: **12–19 digits**, not a payment-card or account verifier.
- Only ASCII spaces/hyphens are stripped; x becomes X. Other characters are not silently normalized. Exactly one `?` enumerates all checksum-consistent completions. Complete well-shaped invalid values enumerate replacement final digits. More than one `?`, bad lengths and inappropriate X placement stay blocked. Candidates never auto-apply. Checksum consistency does not prove the original digits; no external assignment/authenticity/ownership validation is performed. Schemes can miss particular multi-character/transposition errors.
- 2–8 unique profiles (IDs ≤50, description ≤200); 1–24 unique records (IDs ≤100, note ≤200, identifier ≤60 characters of digits/X/?/spaces/hyphens). Source ≤60,000 characters. JSON files ≤16 MB, followed by strict original-input validation. CSV/images unsupported. Reviewer notes ≤2,000 characters.
- 180-second timeout; progress, explicit cancel and retry. Run identity guards worker-source fetches, file reads and results. Workers terminate on input changes/cancel. Bad messages, malformed vectors, worker/runtime/model/network failures produce errors, **never fake outputs**.
- Complete JSON/CSV/Markdown preserve every source, original and reviewed value, AI-selected/reviewed profile, cosine evidence (JSON), reviewer notes, holds, blocks and unapplied candidates. Markdown includes the lossless JSON envelope. CSV quotes fields/newlines and prefixes formula-leading text with `'`; signed values are not relevant to identifier fields. Release CSV contains only valid approved codes. Applied exports are invalidated after every edit; undo restores review state but still requires reapply.

## Downloads, privacy, devices and offline

First use: approximately **23 MB model + 27 MB CPU runtime** plus app/worker code, internet required. Public model/config/tokenizer downloads use Hugging Face and its CDN. App/worker/runtime are same-origin; content stays in page/worker memory, and only public files enter caches. No API key, provider integration, analytics, telemetry, content uploads or server inference. User-requested artifacts are local downloads. Requests are audited as GET-only file downloads; signed CDN query values are deliberately not saved in audit reports.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. No WebGPU needed. Desktop Chrome tested headlessly with GPU disabled, plus 1440/390/320px layouts. Physical phones, other browsers and constrained devices are untested.

To avoid duplicating runtime bytes in this nearly-full collection, preserve these immutable shared assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Worker `{id,texts}` protocol returns download/batch progress, finite vectors or error. Sizes/hashes are in `runtime-dependency-audit.json`. Worker cache `checkline-worker-v1`, shared runtime cache `circuit-cove-runtime-v1`, and Transformers model cache allow **fresh-worker real inference in an already-open fully warmed page offline**, tested with all network disabled. Offline cold navigation/reload is not promised. Eviction/private browsing/disabled Cache API can require internet again.

## Development and publication

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261123-9/`. Required app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` remain, but publish **only through root** combined-site predeploy/deploy. See root README for Pages build/commit/public-runtime verification. No changes to the original daily_app tree, existing apps, cron or size guard.

## Observed validation

See [VALIDATION.md](VALIDATION.md) and machine-readable real-browser/defensive/artifact reports. Small known-answer fixtures are not a universal accuracy claim. Baseline counts use reviewed records, not assumed AI correctness. No personal identifiers, private documents, user datasets or credentials are included. Checksum examples use illustrative/publicly documented numbers in synthetic records; an example number may coincide with an assigned product.

Checkline Desk public release verified: matching Pages commit `54ea83eb898623e0dbacd7a55cb98671a8e7dc39` and workflow `45087101906` succeeded. Seven public gallery/app/runtime assets byte-match assembled output; both real-model fixtures, full review/repair/export/maximum-batch/offline/privacy suite, independently parsed public artifacts and all 814 gallery cards passed. Combined size **999,867,068 bytes** remains below the unchanged guard. No new sharing rules; unrelated recovery work preserved and excluded from this source commit. Physical phones, cold offline startup and catalog clients remain untested. No digest sent.
