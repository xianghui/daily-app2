# Coverage Desk

A local-first evidence mapping desk for operations leads preparing a readiness checklist. Unlike a support-answer matcher, this produces a **human-reviewed coverage/gap ledger with evidence citations, owners and follow-up actions**, not generated replies or automatic compliance judgments.

## Workflow

1. Paste 1–16 requirements (one per line) and 1–32 evidence passages (blank-line separated), or import UTF-8 `.txt` files ≤30 KB. Try Security and Kitchen synthetic examples.
2. Explicitly click **Load & map evidence**. It downloads the real model and runs CPU inference in a module worker. All items initially stay **unverified**.
3. Inspect original evidence and cosine ranking. Choose any source, mark human-verified covered, leave unverified, or reject as a gap. A gap requires a next action; owner is optional. Undo reverses the last 30 field edits. Changing source resets its decision to unverified.
4. Apply the reviewed ledger, then download JSON/CSV or copy JSON. Every requirement survives, including gaps and unverified items. Any subsequent edit invalidates applied exports. Original input is retained in JSON. Export before closing; no user content is persisted.

## Real AI / deterministic boundary

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0, source https://huggingface.co/Xenova/all-MiniLM-L6-v2 (sentence-transformers/all-MiniLM-L6-v2 family).
- Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web, MIT; q8 ONNX encoder, WASM CPU, one thread. License notices accompany locally bundled runtime.
- AI creates normalized 384-dimensional semantic embeddings from checklist items and passages. No LLM/API credentials or remote inference are used. Similarity retrieves paraphrases; it does not prove entailment or compliance.
- Deterministic: cosine top-1/all-candidate ranking, exact-word Jaccard baseline, review schemas, row preservation, gap-action checks and export serialization.
- The displayed metric counts differing top-1 choices vs keyword Jaccard. It is NOT an accuracy or improvement percentage. Only human-reviewed decisions contribute to covered counts.

## Download, devices, cache and privacy

Initial model weights are about 23 MB plus tokenizer/config (~0.7 MB) from Hugging Face/CDN (`huggingface.co`, `*.hf.co`). WASM is 26,861,777 bytes (~25.6 MiB) before transfer compression, plus ~0.55 MB worker and a local runtime factory from this site. Current Chrome/Edge/Firefox/Safari with WebAssembly and module workers; modern desktop recommended. No WebGPU requirement. Tested in actual desktop Chrome; physical iOS/Android and other browsers are not certified. Slow devices may exceed the 180-second timeout.

Runtime code and WASM ship locally in the production bundle. Model files use Transformers.js Cache Storage; the runtime factory has an explicit Cache API entry. Cache availability/eviction is browser-dependent. **An already loaded app can run new inference offline after caching**, while its loaded worker remains alive. This is tested; after cancellation or a runtime failure, reconnect before retrying. Reopening the whole site offline is NOT guaranteed: no service worker is installed. Internet is required initially or after cache eviction. Cancel kills the worker and ignores stale message IDs. Retry is the same explicit run button, never a fake fallback.

User text is sent only to a same-origin local worker in memory, never in model requests, URLs, logs or storage. Requests download model assets; this is not document uploading. Imported content is data, never tool instructions. No telemetry, external action, key form or remote-provider integration exists.

## Limits / failure handling

English-oriented semantic retrieval. Max 10,000 checklist / 22,000 evidence characters, 16/32 records respectively, 600 characters and 100 whitespace-separated words per chunk. Encoding caps at 256 model tokens; rare token-heavy text may truncate for ranking, but original passages remain intact. Four chunks per inference batch, at most 48 chunks. Input changes cancel pending work and clear obsolete exports. Model output must contain exactly the expected count of finite, normalized 384-value embeddings. Invalid/empty/oversized input, unsupported files, worker/network/model errors and timeouts show actionable errors without fabricated results.

Negation, numerical criteria, authenticity, dates, contradiction and missing evidence are not solved by similarity. A highly similar passage may say the opposite of a requirement. Users must inspect it. There is no minimum similarity masquerading as confidence or automatic approval. No legal/compliance certification is implied. CSV contains original text; treat imported free text as untrusted in spreadsheet tools (prefer JSON for automated processing).

## Development and deployment

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite, base `/daily-app2/20261106-13/`. Required per-app deploy script exists, but publish only through the root combined gallery workflow. Never deploy this app alone over the collection.

## Validation

See [VALIDATION.md](VALIDATION.md), `browser-test.cjs`, `browser-validation.json` and screenshots for actual production-bundle checks. Error-only worker fault injection is explicitly separate from real successful inference. Fixtures contain synthetic data only.

Browser tests: `node browser-test.cjs`, `node cache-test.cjs`, `node combined-test.cjs` use the dev dependency `@playwright/test` with installed Chrome (`channel: chrome`). Run `npm run preview -- --port 6133` for the default app test URL; `python3 serve-test.py` serves root `deploy/` on port 6134 for combined tests. `TEST_URL` and `GALLERY_URL` may target the published site. Only `core-test.mjs` uses synthetic vectors; all successful browser tests run the real encoder.
