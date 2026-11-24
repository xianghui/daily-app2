# Collation Desk

A local-first ordered-list handoff utility for catalog editors, digital asset librarians and multilingual directory maintainers. Informal audience/purpose notes often lose the intended numeric or locale order. Real MiniLM semantic retrieval proposes a supplied sorting contract; a human reviews it before stable deterministic collation produces a source-linked ordered manifest.

## Workflow

1. Choose a synthetic example, paste source JSON or import source/audit `.json` ≤1 MB. Format: `{plans:[{id,description,locale,numeric,sensitivity}],records:[{id,context,raw}]}`. `raw` is a JSON-encoded string array. Edit contract descriptions and options before loading. Supported locales: en, sv, de; numeric boolean; sensitivity base or variant.
2. Explicitly click **Load AI & reconcile**. The model embeds contract descriptions and context notes, not list strings. Cosine similarity ranks descriptions; it is not confidence. Inspect all ranked candidates and the original strings. AI does not sort, translate or rewrite list items.
3. Change a contract, edit the multiline item-array JSON or reviewer note, then approve or hold every record. Contract/item edits reset approval. Every edit invalidates exports. Undo restores the preceding review snapshot (up to 100). Originals remain unchanged in page memory.
4. **Apply reviewed scenario** uses Intl.Collator (usage sort, punctuation significant) and source-index tie breaks. Each occurrence retains its zero-based index in the reviewed item array. Equivalent collation keys are not identity duplicates and are never merged. Invalid lists fail closed; held and blocked records cannot enter release outputs.
5. Download complete JSON, CSV or Markdown audits, or approved-only **Release JSON** with ordered occurrences, contract and resolved runtime options. Copy Markdown is also available in secure contexts. Audit reimport restores originals only, requiring new AI/review. CSV is an audit format, not an import format. Formula-leading CSV cells receive an apostrophe; JSON preserves exact text including commas/newlines.

## Boundaries and comparison

2–5 unique contracts (IDs ≤60, descriptions ≤200 characters), 1–24 unique lists (IDs ≤80, context ≤200, raw array JSON ≤4000), 1–30 nonblank strings/list (≤100 characters each), source JSON ≤50,000 characters. Imports ≤1 MB, with originals still subject to source bounds. Review notes ≤2000 characters. Numbers/objects/nested arrays and unsupported locales/options are rejected. Some invalid raw arrays are retained for review and blocked at application rather than dropping their source records.

The baseline is stable JavaScript UTF-16 code-unit order, **not Unicode code-point or linguistically correct order**. The app counts pairwise ordering disagreements with the reviewed contract, adjacent collator-equal pairs, records and occurrence totals. These are computed descriptive counts—not universal sorting errors, time savings or AI accuracy. Identical occurrences retain their original order. ICU/browser upgrades can alter collation; exports retain resolved options but not the entire ICU version. This is not version-number sorting, a language detector, transliteration, filesystem renaming or deduplication.

## Actual AI/runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. Normalized mean-pooled 384-dimensional embeddings; count/dimension/finite-value/unit-norm validation before suggestions. Four texts per chunk. Worker passes max_length 256, but feature-extraction's effective tokenizer maximum is 512 tokens; application texts are bounded to 200 characters. English audience/purpose descriptions are recommended; selecting a collation locale does not make the embedding model multilingual or detect an item’s language. Model main revision is unpinned; upstream updates may change output. No canned responses or deterministic fallback on AI failure.

Approximately 23 MB weights + 27 MB WASM, plus code/tokenizer files, on initial load. Internet needed initially; several hundred MB free RAM recommended. Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and locale data is the tested environment; no WebGPU is required. Other engines, physical phones and low-memory devices are untested. UI shows requirements before loading, download/file and chunk progress, cancel and explicit retry. 180-second timeout, worker/network/runtime/malformed-output errors fail closed without fabricated results. Cancellation terminates the worker; run identities guard pending fetches, file reads and stale messages.

## Privacy and cache

Default content stays on-device in page memory and explicit downloaded artifacts. Only public model/tokenizer weights download from Hugging Face/CDNs; runtime assets download from this site. No API key, remote inference, analytics, user-content request bodies, content-bearing URLs or automatic content persistence. Imported text is inert data, not instructions, tool authority or credential requests. No optional provider integration exists.

Immutable same-origin shared assets (preserve originating builds):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Worker accepts `{id,texts}` and emits progress/batch/result vectors. Its complete browser runtime is bundled, not fetched from a runtime CDN. Hashes/bytes in runtime-provenance.json. Worker source, factory and WASM use Cache API; Transformers.js caches model files. Cache eviction/private mode can require downloads again. **Tested offline scope is fresh-worker real inference in an already-open, successfully warmed page only**, not cold navigation/reload. No offline app-shell service worker is claimed.

## Observed validation

See VALIDATION.md and machine-readable browser/core/artifact/defensive reports. Both fixtures matched 6/6 intended contracts and all six known ordered arrays; this tiny synthetic set is not general accuracy. A competing-negation probe selected Swedish for a German intention: human verification is mandatory. Context-only changes (same strings) selected different real contracts and changed their order. Maximum 24×30 occurrences were conserved. Edits/holds/undo, actual parsed downloads, warmed offline fresh-worker inference, cancellation/retry, races, network/device faults and phone-width layouts were exercised. No hardware phone or cross-engine validation.

## Build/publish

React + Vite; base `/daily-app2/20261124-9/`. `npm install`, `npm run predeploy`. Per-app scripts `predeploy: npm run build` and `deploy: gh-pages -d dist` retained as required; publish only via repository ROOT combined-site workflow, never individual deploy. All fixture data synthetic; no real documents or credentials.

Public app: https://xianghui.github.io/daily-app2/20261124-9/ — Pages/workflow and actual public inference/assets/artifacts verified; see publication-status.json.
