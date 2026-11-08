# Locale Relay

Translation-memory retrieval and reviewed XLIFF release for English → French UI localization editors. This is not a translator or chat wrapper: MiniLM semantic inference finds the closest English source in a user-provided bilingual memory, including paraphrases missed by exact-string lookup. The French draft is copied from that memory, and must be adapted by a human. No external publishing/sending occurs.

## Workflow

1. Paste/import JSON with `memory: [{id, source, target}]` and `records: [{id, source}]`, or load either synthetic fixture. Language pair fixed en → fr. IDs unique in each list, using only A–Z/a–z, digits, underscore, dot, colon or hyphen. Plain text only; no XML/HTML or ICU plurals. Supports simple `{name}` placeholders including repeated occurrences.
2. Explicitly load AI and retrieve. Inspect cosine ranks and original source/target evidence. Similarity is not confidence, equivalence or translation quality. The closest entry is always proposed; unrelated inputs need hold or substantial human rewriting.
3. Select another memory, edit French targets, approve or hold each string, add rationale/owner. Memory/target changes reset approval; undo restores previous reviews. Originals remain intact.
4. Apply the reviewed plan. Deterministic guards require all decisions, valid XML text, nonempty approved targets, exact placeholder-name/count parity and no missing/reordered source records. Any edit invalidates exports.
5. Download JSON complete audit, CSV all reviewed records, or XLF (XLIFF 2.0 approved plain-text units only). Copy XLIFF uses the same reviewed result. Holds remain in audit only; an all-held XLF is an empty group marker. JSON reimport restores originals, not review decisions, and requires new inference. Formula-like CSV cells receive a leading apostrophe, including multiline content.

## Real AI and static runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Quantized q8 ONNX, mean-pooled normalized 384-dimensional embeddings. Repository default model revision is used (not pinned); future host changes may alter results. The browser suite records observed outputs.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread. No WebGPU or server. Browser worker and factory are locally bundled. Byte-identical ~26.9 MB WASM is shared at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that deployed asset. Hash audit in asset-audit.json.
- Initial ~23 MB model plus ~27 MB runtime and app code. Model/tokenizer files download from Hugging Face and its CDN. Current Chrome/Edge/Firefox/Safari with WebAssembly, Cache API and workers. Only desktop Chrome actually tested, including emulated phone widths, not physical phones or other browsers. No universal phone performance promise.
- 2–12 memory entries, 1–24 new strings, ≤500 characters per string, IDs ≤64 chars, JSON ≤200 KB. Four-text model batches, ≤256 tokens per text; long tokens may be truncated. Finite, normalized 384-vector count/schema checked before ranking. CPU inference may be slow; 180-second timeout with retry, progress and worker termination on cancellation/input changes.
- Successful worker/runtime/model caches allow fresh-worker inference in the already-open page with all network blocked; tested. App-shell offline reload/startup is NOT promised. Eviction/private browsing/storage policy can require redownload. No service worker. Cancel may leave partial model downloads cached.

## Privacy / boundaries

No remote inference, API integration, agent credentials or keys. User texts stay in browser memory and worker postMessage. Only static runtime/model GET requests were observed; no user content in URLs or request bodies. Cache API contains runtime/model files, not input. Exported artifacts deliberately contain supplied source/target text; users choose whether to download/share. Fixture data is synthetic. Imported instructions have no tool authority; this encoder only yields numeric vectors.

## Baseline and limitations

Exact-source lookup count is compared with AI candidate count, NOT translation accuracy or measured time savings. Semantic retrieval always produces a candidate; candidate availability does not mean suitability. Fixture nearest-memory results: 6/6 intended matches over two domains, exact-source baseline 0/6. Both seeded placeholder mismatches blocked release until manual repair. A negated deletion request still matched the deletion memory: similarity is not entailment, and copied French can have the opposite meaning. Humans must review every translation. Placeholder checks cannot verify grammar, correct meaning, language, localization policy or approved phrasing.

## Development and deployment

`npm install`, `npm run dev`; production `npm run predeploy`. Base `/daily-app2/20261108-17/`. Per-app gh-pages scripts exist as required but do not deploy this app separately. Root predeploy assembles the collection, root deploy publishes it. Root README governs Pages head/build verification.

## Validation

See VALIDATION.md and committed browser/network/artifact/asset reports. Run `node core-test.mjs`; `python3 serve-test.py` serves production paths at localhost:6257, then `node browser-test.cjs`, `node network-test.cjs`, `python3 artifact-test.py`. Playwright resolves from the automation workspace install. Successful AI tests use the actual model; mocked Workers only exercise defensive failure paths. Public suite is separately recorded after Pages build.
