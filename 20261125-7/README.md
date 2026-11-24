# Member Sentinel

A local-first JSON intake desk for integration analysts preparing mixed-system import batches. Informal handoff descriptions often fail to identify a contract clearly; MiniLM retrieves the most semantically relevant supplied contract. Reviewers confirm its required keys, correct raw payloads or hold them. A deterministic source-aware scan catches loss that ordinary JSON.parse accepts before producing approved payload artifacts. No endpoint is called and no import is executed.

## Use

1. Choose a synthetic example or paste/import a source envelope. `plans` contains 2–5 `{id, description, target}` contracts. `target` is a JSON **string** such as `"{\"required\":[\"sku\",\"quantity\"]}"`. `records` contains 1–24 `{id, context, raw}` records; `raw` must be a JSON **string**, not an already-parsed object (otherwise duplicate members and numeric precision may already be lost).
2. Explicitly click **Load AI & reconcile**. Inspect cosine-ranked contract evidence and source text; similarity is not confidence.
3. Review/edit each contract and raw payload. Confirm approval or hold for every record. Edits to contract/text renew approval; every review edit invalidates prior exports. Undo is available (last 100 edits). Source changes discard old inference/reviews.
4. Apply the reviewed scenario. See duplicate-member JSON Pointer witnesses, source offsets (zero-based UTF-16), number tokens and missing required keys. Offsets refer to the reviewed string. The first duplicate offset is shown too.
5. Download JSON (complete original/review/audit), CSV (every row, spreadsheet formula guards), Markdown (worksheet), or Fixtures (only approved, check-passing payloads as exact raw strings plus parsed convenience objects). Copy Markdown also works. Audit reimport restores **original inputs only**, deliberately not approvals. Nothing is auto-corrected; explicitly edit and reapprove a payload to repair it.

## Real AI and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0. Approximately 23 MB weights, tokenizer/config extras. First explicit load requires internet to Hugging Face and its redirected model CDN. No API key or paid service.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web CPU WASM (MIT), approximately 27 MB WASM plus ~0.6 MB bundled worker/factory. Mean-pooled normalized 384-dimensional embeddings rank English record context against supplied contract descriptions. Records processed in four-text chunks. Runtime tokenizer cap is 512 tokens; the older worker also passes max_length 256, but feature extraction does not enforce that option. Application descriptions/context are independently limited to 200 characters.
- No generated JSON or invented evidence. AI supplies vectors only; count, dimension, finite values and normalization are validated. Contract descriptions are user-provided, not an embedded classifier list. Similar contracts/negation may misroute. The UI requires human review. A context-only test with unchanged raw payload changes selected required keys and release eligibility, demonstrating material AI influence.
- Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older builds. Exact hashes in `runtime-provenance.json`; source/protocol inspected and real production inference tested. This app's own React/Vite shell is bundled locally. No runtime CDN imports.

## Deterministic checks and honest limits

JSON syntax is checked, then a bounded lexical walk examines decoded object-member names per object and exact number tokens without allowing JSON.parse's last-key-wins behavior to hide duplicates. Unicode-escaped equivalent keys collide; same names in different objects do not. Numeric magnitude is compared exactly to 2^53−1 with BigInt; nonfinite conversions, underflow to zero and negative zero also block release. Required top-level keys use own-property checks; prototype-like names are treated as data. Numeric flags recommend agreeing an exact string representation, never silently changing a value.

This is **not a complete JSON Schema validator**. All payloads must have top-level objects; required fields may be null. Field types, email formats, business correctness, decimal rounding below the safe magnitude bound, Unicode normalization and authenticity are not validated. Fractional numbers such as 0.1 retain ordinary binary floating behavior. Raw source strings are exported unchanged, including whitespace and escape spellings; parsed convenience objects do not promise byte-equivalent reserialization. No schemas/URLs are fetched. Imported text never changes authority or requests credentials.

The displayed baseline accepts anything JSON.parse parses; false-pass counts are actual checks on current approved data, not AI accuracy or time-savings estimates. A separate tiny known-answer retrieval comparison uses first-contract selection (2/6) versus real model retrieval (6/6). Neither is a general accuracy benchmark.

Bounds: source envelope ≤50,000 UTF-16 units; unique contract IDs ≤60, record IDs ≤80; descriptions/context ≤200; raw payload ≤2500; notes ≤2000; target JSON ≤1500, 1–12 distinct required keys ≤60; payload depth ≤24 and ≤1000 values; import envelope ≤4 MB. There is no automatic coercion or fallback fake model. Parse/scan failures remain blocked and originals survive. Envelope itself is normal JSON; put exact payload source in `raw` to retain lexical evidence.

## Privacy, devices, caching, failures

Inputs/reviews stay in memory and are not uploaded. No analytics, keys, provider integration or remote inference path. Model downloads are GET requests for weights/configs, not content uploads. Exported audits can contain sensitive user data: store them appropriately. Fixtures are synthetic, with example.test addresses.

Recommended: current desktop Chrome, secure origin, WebAssembly SIMD, module workers, Cache API and several hundred MB available RAM. WASM CPU is the default, tested with GPU disabled; WebGPU is not required. Physical phones and other browser engines are untested. Touch/phone layouts are tested with browser viewports, not physical-device inference.

Worker source, WASM factory and binary use Cache API; model files use Transformers.js browser caching. Caches can be evicted or disabled. Tested offline scope is **new worker inference in an already-open warmed page** after a complete online run, with all networking disabled. Cold offline startup/reload is not supported or claimed. The model is not preloaded before explicit action. Cancel terminates the worker and aborts worker-source download; run IDs guard late worker messages/file reads. 180-second timeout and visible failures enable retry. Network/download, unsupported runtime, malformed vectors and worker errors never produce made-up results.

## Build and collection publishing

React + Vite. `npm install`; `npm run predeploy`; Vite base `/daily-app2/20261125-7/`. Required app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Do not publish this app in isolation.** Use root `/Volumes/ExternalHD/daily_app2` predeploy/deploy to preserve the collection.

See [VALIDATION.md](VALIDATION.md) for observed checks and publication status. Test scripts are reproducible and actual browser-download artifacts are retained. No personal data or provider credentials were used.

### Reproduce local checks

From this app folder, run `python3 validation-server.py` (port 7587, serving each collection app's production dist), then `node core-test.mjs`, `python3 independent-number-test.py`, `node browser-test.cjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, and `node async-race-test.cjs`. Browser scripts use the workspace's installed Playwright and local Chrome. Full workflow accepts `APP_URL` and `PREFIX` for assembled/public testing. Asset/gallery scripts target the assembled collection on port 7588 and require a completed root predeploy. No fixtures contain real user data.
