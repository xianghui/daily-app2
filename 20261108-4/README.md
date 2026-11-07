# Sense Margin

A local-AI acronym disambiguation desk for technical editors. A mixed-domain document can use API for a software interface and a pharmaceutical ingredient. Blind find/replace chooses one sense everywhere; this app embeds each occurrence's sentence and compares it to your approved glossary descriptions before human review.

## Workflow

1. Load either synthetic example, paste JSON, or import `.json`.
2. Supply `document` and `senses: [{id, term, expansion, description}]`. These approved definitions constrain the choices. Reorder/add glossary senses to fit your publication; there is no external glossary lookup.
3. Explicitly **Load AI & resolve meanings**. Review every sentence and ranked definition. Choose a meaning, edit the expansion, then accept or hold. Holds retain original terms. Undo restores the last review edit (40 snapshots).
4. **Apply reviewed expansions** only after all decisions are resolved. Accepted spans become `expansion (TERM)`; every other source character is unchanged. Review edits invalidate the applied snapshot.
5. Export UTF-8 TXT (applied document), JSON (original input, exact offsets, rankings, decisions, notes, metrics, output), CSV (every occurrence including holds), or copy CSV. JSON reimport loads originals, not review decisions. JSON/TXT are exact; CSV prefixes formula-like text with an apostrophe for spreadsheet safety.

## Actual AI and deterministic steps

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX. Upstream sentence-transformers/all-MiniLM-L6-v2. No pinned revision: upstream changes may change results.
- Runtime: locally bundled Transformers.js 4.3.2 (Apache-2.0) / ONNX Runtime Web (MIT), WASM CPU, one thread; **no WebGPU or API key**. Model returns normalized mean-pooled 384-dimensional embeddings in batches of four. Vector count, dimensions, norms and finite values are validated.
- AI embeddings materially rank the possible senses using local sentence context, unlike first-listed-sense replacement. Exact case-sensitive term detection, cosine scoring, offsets, review application and exports are deterministic. No LLM generation, hard-coded inference outputs, remote provider integrations, or fallback fake AI.
- Imported text never changes authority: it is input to a feature-extraction model, not executable instructions. No tool actions, network sending, filesystem changes or account actions are offered.

## Downloads, privacy and offline scope

First inference downloads approximately 23 MB quantized model plus tokenizer/config from Hugging Face and its CDN/Xet bridge. Runtime binary is 26,861,777 bytes, served from this same collection's immutable shared asset: `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Factory, worker and app code are local site assets. Preserve that older app when deploying. Vite rewrites the duplicate binary reference to this byte-identical shared asset.

User text stays in browser memory. Only file-download GET requests are used by the default path; user content is not uploaded. Browser Cache API stores model/tokenizer files and runtime/worker code, not documents. No keys, analytics or optional provider integration. Closing/reloading loses work; export first. Clear site storage to remove cached assets.

Internet is required initially. Once inference has succeeded, **another real run with a fresh worker works offline in the already-open tab** (tested with all browser network blocked). Offline app reopening/navigation is not promised; there is no service worker. Cache eviction, private mode and insufficient storage can require another download. Network errors show an error without invented results; retry explicitly. Cancel terminates the active worker and input changes invalidate stale responses; file reads and worker-source fetches are identity-guarded. Runs time out after 180 seconds.

## Devices and limits

Current desktop Chrome tested, including production bundle and public deployment. Current Edge/Firefox/Safari with WebAssembly, module workers and Cache API are intended but untested. Approximately 300 MB working memory; actual device needs vary. Physical phones untested; layouts/actions tested at 320px and 390px. No GPU requirement. Unsupported runtime errors require enabling WASM or choosing a supported browser; not switching to heuristic inference.

- Original JSON ≤60,000 characters; JSON import ≤500 KB, allowing audit-file round trips.
- Document ≤6,000 characters; 2–24 senses with unique IDs; ≤48 exact occurrences.
- Terms 2–12 ASCII letters/digits/hyphens, beginning with a letter, case-sensitive. Detection uses word boundaries; punctuation/hyphens may delimit terms. No fuzzy recognition, plural/case folding or unknown acronym discovery.
- Expansion ≤120, description ≤400, notes ≤500 characters. Around each occurrence, context ends at sentence punctuation/newline, clipped to 220 characters either side. Each embedding has at most 256 tokens; long/unusual tokenizations truncate.
- All candidate senses for that term are compared. Scores and small-margin (<0.04) cues are not probabilities. One supplied sense means no actual ambiguity comparison for that term.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), browser reports, downloaded synthetic artifacts and reproducible test scripts. Two simple cross-domain fixtures: 8/8 expected meanings observed, versus 4/8 for the first-sense baseline. This is a tiny known-answer check, not general accuracy. The UI displays differences from the baseline, not claimed improvement or time saved. **Negation challenge failed:** “not an ingredient in a drug; it is software” ranked medicine. A bare acronym is underdetermined, but the model still ranks something. Mandatory human review and hold are essential. No fact-checking or definition correctness guarantee.

Validation includes real inference, 48-occurrence batching, 24 senses, original conservation, review/edit/hold/undo, exported artifacts parsed independently, cache/offline fresh workers, stale runs/file reads, network failures/retry, malformed-vector/runtime/timeout defensive injection, privacy requests, and desktop/narrow layouts. Success inference checks are never mocked; fault injection is defensive-only. Screen-reader audit and other browser engines remain untested.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. Vite base is `/daily-app2/20261108-4/`. App scripts retain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish only via root combined workflow**, not the individual deploy command.

For production-bundle local checks: `python3 serve-test.py`, then `node browser-test.cjs`, `node core-test.mjs`, `node extra-test.cjs`, `node bounds-test.cjs`. Playwright scripts use this workstation's installed browser automation package; adapt its path on another machine. Node tests do not replace browser inference. Export fixtures are entirely synthetic.
