# Glyph Ledger

A Unicode import-key preflight for **data stewards** moving mixed directory/inventory batches: source values and rough purpose notes → real local AI namespace/policy retrieval → editable human review → deterministic normalization/collision checks → noncolliding release keys plus complete audit artifacts. No automatic merging, database writes or account actions.

## Use

1. Start with **Directory migration** or **Warehouse intake** (synthetic). Paste/import JSON with `title`, `profiles`, `records`. Each profile has a unique `id`, meaningful purpose `description`, and `policy`: `nfc`, `nfkc-lower`, or `nfkc-upper`. A profile represents an independent destination namespace, not an arbitrary category. Records have `id`, `note` describing field purpose, and string `value`.
2. Read the download notice, explicitly click **Load AI & reconcile**. Model downloads do not begin before that action. MiniLM ranks profiles against each context note using real semantic embeddings. This materially helps route mixed-purpose fields with reworded labels without manually looking up every destination policy. It never generates a replacement spelling.
3. Inspect original source/code points, AI evidence and proposed normalized keys. Verify namespace/policy and whether loss of case/compatibility distinctions is permitted. Edit values only from verified evidence, approve or hold each record, and add multiline notes. A value/profile edit resets approval. Undo restores review state, never overwrites originals.
4. **Apply reviewed scenario**. All records in a same-namespace normalized collision are blocked; no arbitrary survivor is chosen. Hold uncertain records or correct from source and reapply. Edits invalidate applied exports. Raw duplicate-pair counts and normalized duplicate-pair counts use exactly the same approved, control-free, nonempty reviewed records and namespace assignments. They are actual batch comparisons, not AI accuracy or time savings.
5. Download complete **JSON**, **CSV**, **Markdown**, noncolliding **Release CSV**, or copy worksheet/audit. JSON preserves all original strings, reviews, AI evidence, holds and blocks. CSV quotes commas/quotes/newlines and prefixes formula-leading text with an apostrophe; it is spreadsheet-safe presentation, not a byte-lossless representation. JSON is authoritative. Reimport an audit to restore originals only, followed by fresh inference and review.

Example source:

```json
{"title":"Synthetic import","profiles":[{"id":"names","description":"Personal printed directory display name preserve case","policy":"nfc"},{"id":"logins","description":"Case insensitive account sign in login username","policy":"nfkc-lower"}],"records":[{"id":"a","note":"Account login username for sign in","value":"ＡＬＩＣＥ"},{"id":"b","note":"Case insensitive sign in username","value":"alice"}]}
```

## Real model/runtime

[`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0; Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). WASM CPU, one thread, normalized mean-pooled **384-dimensional** embeddings. Notes/profile descriptions, not identifier values, are embedded in chunks of four; finite count/dimension/norm validated before ranking. At most 32 texts. Notes/descriptions ≤200 UTF-16 code units bound context below the tokenizer's 512 context; the inherited pipeline's `max_length:256` option is NOT relied upon as an enforced token cap. Imported text is data and cannot change tool authority or request credentials.

The app uses cosine retrieval, **not a language-model chat wrapper**, deterministic response fixture or regex marketed as AI. No confidence percentages: nearest similarity can misroute negation, unknown purposes or near-identical profiles. Every proposal requires human verification. The small known-answer fixtures do not establish general accuracy.

## Exact deterministic semantics and limits

- All policies trim surrounding ECMAScript whitespace. `nfc`: NFC with case retained. `nfkc-lower` / `nfkc-upper`: NFKC then locale-independent JavaScript lowercase/uppercase. All finish with NFC. The browser's Unicode implementation determines results.
- Not full Unicode case folding (`straße` does not become `strasse` under lowercase), transliteration, homoglyph detection, IDNA, or an emulator of any particular database collation. Cross-script lookalikes remain different. Compatibility normalization can erase meaningful distinctions. Turkish/dotted-I and language-dependent case rules require separate destination validation.
- Empty normalized keys, control/format characters (`Cc` / `Cf`, including ZWJ) and lone surrogates (`Cs`) are blocked, not silently stripped. This deliberately rejects some valid names. Review original values/code points. Surrounding trim is explicitly part of the chosen policies.
- Collisions are exact normalized-string equality **within each reviewed profile namespace**. All involved approved records are blocked; held records are retained only in audits. Moving a record to another namespace can change collision findings and must reflect the actual destination. Unobserved records outside the batch are not checked. No identity/equivalence or security guarantee.
- 2–8 profiles; IDs ≤50 and description ≤200. 1–24 records; unique IDs ≤100, context note ≤200, nonempty string value ≤200. Title ≤200. Source JSON ≤60,000 characters; imported `.json` file ≤16 MB, followed by strict source validation. Other formats unsupported. Reviewer notes ≤2,000 characters. Unknown fields rejected.
- 180-second timeout, progress, cancellation and retry. Run IDs guard async worker-source fetches, file reads and result messages. Cancels/input changes terminate workers. Malformed vectors/envelopes, errors, unsupported devices, model/network failures never produce fake output.

## Downloads, privacy and offline scope

First use approximately **23 MB model + 27 MB CPU runtime**, plus app/worker code, internet required. Public model/tokenizer/config files download from Hugging Face and its CDN. Same-origin worker/runtime files are immutable shared collection assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve those apps/assets. `runtime-dependency-audit.json` records hashes/sizes. Protocol `{id,texts}` → progress/batches/vectors or error; no server calls for inference. Worker source cached under `glyph-worker-v1`, factory/WASM under `circuit-cove-runtime-v1`, model files in Transformers cache. After complete online loading, **fresh-worker real inference in the already-open warmed page with all network disabled** is tested. Offline cold navigation/reload is not claimed. Eviction, private browsing and disabled caches may require internet again.

User content stays in page/worker memory. Only public runtime/model files enter caches; no telemetry, provider keys, remote inference or optional integrations. GET-only public-file traffic is audited from app startup through inference; persisted reports contain host/path/query-key names, never signed CDN values. Exports are local user-triggered downloads. All fixtures are synthetic, not private records.

Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. No WebGPU needed. Tested headless desktop Chrome with GPU disabled and 1440/390/320px layouts; physical phones, other browsers and very constrained devices untested.

## Development and deployment

React + Vite. `npm install`; `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261123-10/`. Required app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; publish only via **root** combined-site workflow, never per-app deploy.

The collection is near its unchanged 1,000,000,000-byte size guard. Root deploy-only deduplication extends the existing byte-verified geometry-runtime rule to published `20261029-21`, reusing the identical immutable `20261028-24` WASM (541,470 bytes). Source builds and compatibility JS URLs remain untouched. Validate that older app's real worker/import/export publicly and locally when changing this rule.

See [VALIDATION.md](VALIDATION.md) for actual checks and limitations. No changes to original `/Volumes/ExternalHD/daily_app`, scheduler or cadence. No digest is sent by this builder.


Public release verified: Pages commit `0386f28c49f5436f85613e6b86949c4ba6ee87a0`, workflow `45092881555`, seven public app/gallery/runtime byte matches and four affected legacy asset matches. Both real-AI fixtures, maximum batch, review/edit/hold/undo, offline fresh-worker inference, privacy/network and exported-artifact checks pass on the public production site. Public gallery retains 815 apps. Combined assembly is **999,591,365 bytes**, below the unchanged size guard. Affected older app public real worker/import/export/JSON round-trip passed. No digest sent.
