# Cursor Lantern

A local-AI pagination QA workbench for API/data-export maintainers. Rough handoffs refer to datasets inconsistently; real semantic inference ranks the supplied dataset descriptions. A human reviews every link and pagination setting. Deterministic compound-key pagination then creates complete expected page fixtures and shows records lost by a strict single-key cursor. No database connection or endpoint request is made.

## Use

1. Load either synthetic example, paste JSON, or import a source/audit JSON.
2. Read download/device notice, then explicitly press **Load AI & match datasets**.
3. Check every dataset link and its source records. Edit feed, page size, direction and multiline notes. Approve or hold every request. Undo supports the last 50 edits.
4. **Apply reviewed fixtures** to create the in-app page map. All edits invalidate exports until reapplied.
5. Download complete JSON audit, CSV page visits, Markdown worksheet, or approved-only QA JSON; copy the worksheet. Original inputs, held requests and all feeds remain in the audit. Audit reimport restores originals only and requires new AI/review.

## Real AI, model and runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; mean-pooled normalized 384-dimensional q8 sentence embeddings. Model download approximately 23 MB including tokenizer/configuration files. Semantic cosine ranking is not calibrated confidence, entailment or policy verification.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT); initial runtime approximately 27 MB. Requires module workers, WebAssembly SIMD and enough memory. Desktop Chrome tested with GPU disabled. No WebGPU, server, key, paid service, optional provider or agent credentials.
- Byte-verified immutable same-origin worker reused from `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those published apps. `runtime-provenance.json` records bytes and SHA-256. Local React/Vite app code is bundled here; no runtime CDN imports.
- Model files download from Hugging Face (`huggingface.co` and its file-delivery hosts). Shared worker uses four-text batches, WASM single thread, 512-token tokenizer cap. A pipeline `max_length:256` request does not enforce a smaller tokenizer cap in this installed feature-extraction runtime; documentation uses the actual model tokenizer cap. Each text is limited to 200 characters; no unbounded documents are fed into the model.
- Loading/download status, file progress, batch progress, cancellation, visible network/runtime errors and a 180-second timeout are implemented. Cancelling terminates the worker. Run identities guard fetches/results and async imports against newer inputs. Finite normalized vector count/dimension validation rejects malformed output. Errors never switch to canned or heuristic AI results.

## Privacy, cache and offline scope

Descriptions are processed in a local worker. Inputs, notes and record snapshots are not uploaded and are not automatically persisted. Model/worker/factory/WASM files are cached using Cache API; downloads are not content uploads. Network capture during the production workflow confirmed GET-only asset traffic, no request bodies and no synthetic context in URLs. No shared API credentials or external inference path exists. Synthetic examples only; imported text has no tool authority.

First use needs internet. After a successful online run, fresh-worker real inference in the **already-open page** passed with networking disabled. Offline reload, app-shell startup and persistent storage across browser eviction are **not promised**. If storage is unavailable or evicted, downloads may be needed again. Exports contain supplied snapshots and may be sensitive; nothing is sent automatically.

## Input contract and bounds

JSON object: `title` (1–200 chars), `feeds` (2–8), `requests` (1–24). Source at most 60,000 characters; JSON files at most 1.5 MB, allowing larger audit-envelope reimport. Unknown input fields, duplicate IDs, malformed JSON, control codes and lone surrogates are rejected.

Feed: `{id, description, records}`. Feed ID 1–60 characters, description 1–200. Each feed contains 1–40 `{id, key}` records. Record IDs unique within feed, 1–80 chars; key is a safe integer between -1,000,000,000 and +1,000,000,000. Request: `{id, context, pageSize, direction}`; unique ID 1–60 chars, context 1–200 chars, page size integer 1–20, direction `asc` or `desc`. Reviewer notes support 0–500 chars including line breaks. Maximum real inference: 32 texts in eight chunks.

## Deterministic semantics and artifacts

Sort by numeric key then exact UTF-16 string ID. Reverse **both** fields for descending. The next page uses a strict tuple comparison after the last emitted record. Transparent fixture cursor = Base64 of UTF-8 JSON `[key,id]`; it is not encrypted, signed, secret or a secure production authorization token. Terminal page has null next cursor. Page simulations assert every selected snapshot record appears once per approved request.

The baseline uses the same reviewed link, size and direction but filters only `key > lastKey` (or `<` descending). It skips ties at a page boundary. Metrics count record **visits per request**, so repeated requests count the same dataset again. This is a supplied-snapshot correctness comparison, not measured latency, time saved, production loss or AI accuracy.

- JSON (`cursor-lantern/v1`): originals, full reviews, source context, candidate similarities, held cases, plans and computed metrics.
- QA JSON (`cursor-lantern-qa/v1`): approved cases, source records, order contract, page size/direction, expected IDs, current/next cursor and baseline witness. Intended as reusable test fixtures, not executed tests against a service.
- CSV: one row per approved record visit and one per held request, with source context, reviewer note, settings, sort key and cursors. Standard quoted CSV preserves commas/quotes/newlines. Formula-like **strings** are apostrophe-prefixed; numeric negative sort keys stay numeric. Exact strings remain in JSON.
- Markdown: reviewed checklist with source links by request/feed identity and page expectations. Clipboard failure offers a download alternative.

## Limits and validation

These are immutable local snapshots only: no concurrent inserts/deletes, NULL keys, mixed types, custom collations, database isolation, signed cursor validation or actual endpoint performance. Database string order may differ from UTF-16; adapt the tested contract before using fixtures. Semantic similarity can confuse close or negated descriptions, and does not verify that the correct snapshot was supplied. Human approval is mandatory; holding excludes only the approved QA release, not the complete audit.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Build alone is not AI validation. Desktop Chrome and 1440/390/320 CSS widths tested; actual phones, Firefox, Safari, assistive-technology behavior and production database implementations are not tested.

## Build / publish

React + Vite. `npm install`, `npm run predeploy`; base `/daily-app2/20261125-13/`. Per-app `gh-pages` and exact `predeploy: npm run build`, `deploy: gh-pages -d dist` retained as required. **Publish only via repository ROOT `npm run predeploy` / `npm run deploy`**, never individual deployment, which would replace the collection. This app's new deployed payload is approximately 254 KB; model/runtime dependencies are shared with preserved older apps.
