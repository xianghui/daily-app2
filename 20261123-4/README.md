# Segment Post — 20261123-4

A local-first SMS preparation desk for operations coordinators. AI retrieves approved short templates by draft meaning; humans verify/edit every body; exact encoding accounting checks an explicit per-message segment cap before worksheet export. No messages are sent.

## Workflow

1. Start with **Visits & parcels** or **Classes & maintenance**, or paste/import source JSON.
2. Supply `title`, `maxSegments` (1–6), 2–8 approved `templates` (`id`, English `purpose`, `body`) and 1–32 `records` (`id`, `draft`, `values`). Bodies may use simple `{lowercase_key}` placeholders. Each supplied exact value must occur in its original draft. Template placeholder keys must equal the selected record's value keys; otherwise manually edit a complete replacement or hold the record.
3. Explicitly click **Load AI & reconcile**. Review every original, ranked cosine evidence and selected template source. Edit copy, select another template, approve, keep the original, or hold. Identity/body edits reset approval. Notes and bodies use multiline editors; undo restores review edits.
4. **Apply reviewed scenario**. Missing values, unresolved braces, empty eligible bodies or over-cap messages block the Message CSV; full audits remain available. Holds stay in all audits and retain an explicit empty-body HELD row in the message worksheet. Keeping the original does not bypass the cap.
5. Download lossless JSON, all-record audit CSV, reviewed Message CSV or complete Markdown; copy the worksheet/audit. Edits invalidate exports until reapplied. Reimport source/audit JSON restores originals only and requires a fresh run/review.

A reference input is provided by `examples` in [src/core.js](src/core.js). This is not a CSV importer or a carrier integration. CSV exports use quoted cells and spreadsheet-formula guards; formula-like strings gain a protective apostrophe. Use JSON for byte-faithful values. Message CSV is a review worksheet, not a provider-ready send command.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 quantized ONNX, Apache-2.0. Approximately 23 MB initial model/tokenizer downloads. Default registry revision follows the existing shared worker's model host configuration; weights are not bundled or pinned by this app.
- Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU with one thread, normalized mean-pooled 384-dimensional embeddings. No WebGPU, server or API key required.
- AI compares template purpose embeddings with the first **400 characters of each draft**. It proposes the nearest template with ranked source evidence, not generated copy. All original text survives. English-oriented similarity is not factual/intent equivalence, confidence, consent or compliance verification. Unknown or negated text still receives a candidate and must be held when unsuitable.
- Batch: four texts at a time; ≤40 embeddings per run. Existing tokenizer `model_max_length` is 512; the worker's pipeline `max_length:256` option is not relied on as an enforced feature-extraction cap. This app bounds purpose text to 200 and embedded draft prefixes to 400 characters. Vector counts, dimensions, finiteness and norms are validated before any proposal.
- Deterministic: exact placeholder substitution and value presence, review gates, encoding choice, segment accounting and exports. No AI is simulated when inference fails.

## Encoding scope and limitations

The common 6-byte concatenation UDH scenario uses 160 GSM-7 septets for a single SMS or 153 per multipart SMS; Unicode uses 70 UTF-16 units or 67 multipart units. GSM extension characters consume two septets. Extension pairs and surrogate pairs are not split at boundaries; 153 carets require **3**, not `ceil(306/153)=2`, parts under this conservative pair-safe packing. Emoji consume two UTF-16 units and require provider support. Unpaired surrogates are rejected. No silent transliteration is applied.

National language tables, different concatenation headers, carrier transformations, emoji policies, actual prices, sender IDs, destinations, opt-out wording and legal requirements are outside scope. Required value checks are literal substring presence only: they cannot verify relationships, all facts or completeness. The user supplies approved templates and must compare the full wording. This is a conditional segment worksheet, never a billing quote or a sending service.

The comparison uses **the same non-held records** before and after review; all-original totals and held counts are separately displayed. No accuracy, time-saving or carrier-charge claim is inferred from segment counts.

## Downloads, privacy and offline behavior

Before model loading, the app shows approximately 23 MB model + 27 MB WASM runtime (plus ~0.55 MB shared worker and ~0.05 MB module factory). Public app/runtime downloads are from this static site; model/tokenizer weights download from Hugging Face and its CDN. Drafts/values never appear in network bodies or URLs: they stay in page memory and a local worker. No provider keys, remote inference, analytics or server endpoints exist. No content is persisted except user-requested exports; only public model/runtime files enter Cache API.

The immutable same-origin worker is reused from `20261115-6/assets/ai.worker-lkOoPoq8.js`; its module factory is under `20261115-6/runtime/`, and its byte-identical shared WASM is `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both older apps and these URLs. [runtime-dependency-audit.json](runtime-dependency-audit.json) records exact byte counts and SHA-256 hashes. Worker source is cached by this app, then loaded as a module blob. The shared worker explicitly caches factory/WASM via Cache API and models through Transformers.js caching.

Tested offline scope: successful online warmup, terminate worker, block all network, then execute real inference in a fresh worker **inside the already-open page**. Offline cold navigation/reload is NOT promised; there is no service-worker app-shell installation. Eviction/private browsing/cache unavailability requires internet again. Source/review state is volatile; export before leaving.

## Device, bounds and failures

Use HTTPS or localhost, module workers, WebAssembly SIMD, Cache API where available, several hundred MB RAM and a current desktop browser. Tested with Chrome, including GPU-disabled CPU inference. Physical phones, other browsers, slow-memory devices and carrier delivery are untested. Phone-width UI was exercised at 390 and 320 CSS pixels; that does not prove phone inference performance.

Source limit: 100,000 characters. Import file limit: 16 MB for an audit envelope, still enforcing original-source bounds. 2–8 templates, 1–32 records; purpose ≤200 characters, draft/body/reviewer note ≤2,000 UTF-16 units, template ≤1,000, up to eight values ≤100 each. Unsupported formats, duplicate IDs, invalid JSON/keys, oversized input, malformed Unicode and malformed embeddings are rejected. Run IDs protect input changes and delayed file/worker fetches; cancel terminates the worker. Network/model/worker failures and a 180-second timeout show errors without fabricated results; retry explicitly.

## Development and publication

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261123-4/`. Per-app gh-pages scripts are retained as required but **publish only from repository root** using its combined deployment workflow. No source/model credentials are included. The original collection remains untouched.

## Validation

See [VALIDATION.md](VALIDATION.md), test scripts and machine-readable reports. Only tiny synthetic fixtures and defensive fault injections are used; successful inference is always the real downloaded model.
