# Glyph Budget

A text-field handoff worksheet for content operations. **Real local MiniLM** retrieves a field contract from destination context; reviewers verify UTF-8 byte, UTF-16 unit or grapheme-cluster budgets before exporting usable copy. Unlike Glyph Ledger normalization, Text Quay byte decoding or Segment Post SMS sizing, this checks raw field limits and offers an explicitly adopted whole-grapheme prefix, never silently truncating text.

## Workflow

1. Choose either synthetic example, paste source JSON or import `.json` ≤1 MB. Schema: `{plans:[{id,description,unit,limit}],records:[{id,context,raw}]}`. Units: `utf8`, `utf16`, `grapheme`; limits integer 1–2000. Edit descriptions and limits directly before running.
2. Explicitly **Load AI & reconcile**. First-run internet download: approximately **23 MB model + 27 MB CPU runtime**, plus code. Progress/cancel and a 180-second timeout are exposed.
3. Review original context/text, ranked similarities and the inferred contract. Edit text and notes, select another contract, approve or hold. Over-budget text shows a safe-prefix candidate: **Adopt safe prefix** explicitly changes the review layer and resets approval. No automatic adoption. Undo retains 100 review states. Originals are immutable.
4. **Apply reviewed scenario** computes lengths, release blockers and the `string.length` baseline. Approving an over-budget record does not bypass its limit. Held/invalid/oversized records never enter ready releases.
5. Export complete **JSON/CSV/Markdown**, copy Markdown, or ready-only **Release JSON** (`{format,records:[{id,text,contract,unit,limit,length}]}`). Exports use the latest applied reviews; any edit invalidates them. Audit reimport restores originals only and requires renewed inference/review. No automatic external action.

2–5 contracts, unique IDs ≤60 and descriptions ≤200 characters. 1–24 records, unique IDs ≤80, context ≤200, raw text ≤1,200 UTF-16 units; source JSON ≤50,000 characters, notes ≤2,000. Audit files allow 1 MB envelopes but extracted originals retain the stricter bounds. Empty/blank text, unpaired Unicode surrogates and C0/DEL controls other than tab/CR/LF block release. JSON preserves exact strings; CSV quotes multiline/comma/quote cells and apostrophe-prefixes formula-leading text. CSV is a review worksheet, not an exact-original reimport format.

## Real AI, runtime and privacy

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; **Transformers.js 4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). Single-thread WASM CPU; normalized mean-pooled 384-dimensional embeddings, cosine nearest-contract ranking. Descriptions and destination contexts are embedded, not the raw text being shortened. No hard-coded responses, heuristic fallback, remote inference or credentials. Imported content is inert data, not tool authority. The worker processes four texts per chunk; validates output count, dimension, finite values and near-unit norms. Its pipeline supplies max_length 256 but the tokenizer's actual limit is **512 tokens**, verified in the shared runtime. Each embedding input is bounded to 200 characters.

The model materially determines the budget: the same three developer emoji are blocked under storage/legacy contracts but pass the editorial contract after real context-only routing changes. AI is not rewriting or guaranteeing the correct destination. Negation and out-of-domain notes can misroute; the observed competing-negation probe chose storage instead of intended editorial. Mandatory human review/hold is essential; six simple fixture matches do not establish general accuracy.

Runtime is same-origin, reused immutably from `20261115-6/assets/ai.worker-lkOoPoq8.js`, its `runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these builds/paths. Hashes in `runtime-provenance.json`. Model/tokenizer download from Hugging Face and its CDN hosts; upstream `main` is not pinned, so future changes can alter results. Requests download weights/runtime, not user content. No content upload, analytics, server, provider key or persistent source storage. Data lives in page memory and explicit user exports. Closing the page loses unsaved reviews.

Current desktop Chrome with module workers, WASM SIMD, Cache API and Intl.Segmenter; several hundred MB free RAM recommended. CPU is the tested default, not a WebGPU-dependent path. Physical phones, other engines and low-memory devices untested. Cache API stores worker/factory/WASM; Transformers.js caches model files. Offline claim is limited to **fresh-worker inference in an already-open warmed page** after a successful online run. Cold offline navigation/reload is not supported/tested; cache eviction/private mode may require internet. Cancel terminates the worker, stale input/file/model responses are ignored; failure requires explicit retry and never produces fake results.

## Deterministic semantics and comparison

UTF-8 length is `TextEncoder` over well-formed raw text, without BOM; UTF-16 is JS code-unit length; grapheme boundaries use this browser's `Intl.Segmenter('en',{granularity:'grapheme'})` Unicode data. The safe prefix is the longest whole-grapheme prefix fitting the selected additive budget; it may be empty if one cluster exceeds the limit. It may cut a word or change meaning: inspect it before approval. No ellipsis, Unicode normalization, HTML parsing, escaped payload sizing or visual-width estimate. Limits must reflect the actual receiver; server normalization or line-ending conversion can change counts.

Baseline: compare JS `string.length <= reviewed limit` against the reviewed contract's actual accept/block. Metrics count disagreements on valid approved texts, not general AI accuracy, correctness of semantic meaning, time saved or percentage improvement. Held and malformed records are excluded. All source records remain in full audits; only approved valid text goes into Release JSON. There are no remote writes, uploads, sending, publishing or destructive file changes.

## Development and observed checks

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261124-6/`; required per-app gh-pages scripts retained. Publish only through the root combined deployment, never per-app deploy. See [VALIDATION.md](VALIDATION.md) for actual results, limitations and public verification. All fixtures are synthetic; no personal data or credentials are shipped.
