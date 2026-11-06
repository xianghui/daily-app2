# Veil Desk

A local-AI redaction workbench for researchers preparing short **English interview excerpts**. Practical bottleneck: spotting names, organizations and locations across a batch before sharing notes. Real neural entity recognition produces source-linked candidate spans; a human reviews masks, adds missed exact phrases, rejects suggestions and exports actual reviewed text. This is **not certified anonymization**.

## Use

1. Paste text or import a UTF-8 `.txt` file. Separate excerpts with a blank line. Synthetic Interview and Field notes examples are provided.
2. Choose which entity types to preselect. Optionally enter known names, one per line, for a literal-match baseline.
3. Explicitly click **Load AI & find entities**. Review the download notice first. Loading/progress, cancellation, errors and retry are visible.
4. Inspect every original excerpt and candidate's source offsets. Uncheck false positives; edit replacement labels. Add missed names/contact details using **Add manual mask** (all non-overlapping exact occurrences). This manual step is deterministic and labeled as such. Review even excerpts with no detections. Undo restores the last 30 review states.
5. Mark every excerpt reviewed and **Apply reviewed redactions**. Any review edit invalidates the export snapshot and reopens the affected excerpt.
6. Download UTF-8 redacted TXT or copy the same current text. The optional, clearly labeled **sensitive audit JSON** contains originals and all decisions; keep it private. It is reversible, not anonymized. TXT does not include the audit mapping. No external sending/deleting is supported.

## Real AI, source and license

- Task: token classification / named-entity recognition, **Xenova/bert-base-NER**, q8 ONNX `model_quantized.onnx`, derived from **dslim/bert-base-NER**, a cased BERT trained for English CoNLL-2003 entity tags (PER, ORG, LOC, MISC).
- Model source: https://huggingface.co/Xenova/bert-base-NER ; upstream https://huggingface.co/dslim/bert-base-NER . Both cards declare **MIT**. Snapshot inspected: `8e892123e8b7c2c0c2bd1dcb598b7d244c4e53aa`. Runtime downloads main; an upstream main change can change predictions. No weights are checked into this repository. See `model-source.json`, `licenses/MODEL-CARD.md`, `licenses/MODEL-LICENSE.txt`.
- Runtime: Transformers.js 4.3.2 / ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0, bundled worker and module factory, **WASM CPU**, one thread, no WebGPU or API key required. Check `package-lock.json` for exact dependency resolution. Transformers.js Apache-2.0; ONNX Runtime MIT; notices in `licenses/` and `THIRD_PARTY_NOTICES.md`.
- Initial weights: **108,952,255 bytes (~109 MB decimal)**, plus **26,861,777 bytes (~27 MB)** local WASM and small tokenizer/config/client assets. Internet is needed on first load. Model files download from Hugging Face and its CDN. The runtime factory and JS worker are same-origin bundled assets. The byte-identical WASM is reused from the collection's immutable `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Do not remove that app/asset from the combined site.

The model materially supplies contextual entity labels; it is not an exact-name list or regex heuristic. The app deterministically aligns **every** returned token, including O labels, to exact source characters, combines adjacent BIO entity tokens, validates schemas/offsets and replaces selected spans in reverse order. It stops rather than guessing if a token cannot align. Exact literal-list counts, manual additions, review and output assembly are deterministic. Imported instructions are inert text; there is no generative tool execution or credential authority.

## Privacy, caching and devices

Default processing keeps excerpts in tab memory. There is no backend, analytics, provider credential, remote inference, or content upload. Network traffic is static model/runtime GET/HEAD downloads, not user text. Cache API stores model/runtime files, not content. Worker source and WASM factory/binary are explicitly cached, enabling **fresh-worker inference offline in an already-open tab after one successful online scan**, when caches remain. This scope was tested with all network disabled. Offline page reopening/reload is **not promised**; there is no app-shell service worker. Storage eviction/private browsing or clearing site data can require re-downloading. Clear site data to delete cached model files; close the tab to discard inputs (browser session restore/clipboard and downloaded artifacts are outside app control).

Tested: headless desktop Chrome with WASM CPU and production bundles, at desktop and 390/320 CSS-pixel widths. A modern browser with Web Workers and WASM SIMD is required. ~1 GB free memory is a recommendation, not a measured minimum. Physical phones, low-memory devices, Safari/Firefox/Edge and screen-reader behavior are not certified by these tests. Unsupported APIs, unavailable SIMD/runtime or downloads fail visibly with actionable retry guidance; no fake fallback. WebGPU is never requested.

## Limits and output schemas

- 1–12 non-empty excerpts, <=400 UTF-16 characters each, <=8,000 UTF-8 bytes total; blank-line-separated, LF or CRLF. Blank lines and original punctuation are preserved outside masks.
- One excerpt per inference chunk, at most 400 input characters (within the BERT 512-token context for ordinary text). Complete source token alignment is required, preventing silent truncation. A 240-second timeout ends a run; cancellation terminates its worker. Run identities reject old worker responses and stale file reads.
- Raw model result: one token array per excerpt; each token has string `word`, BIO/O `entity`, finite 0–1 `score` and increasing positive integer `index`. Scores are validated but not presented as calibrated confidence.
- Internal candidate: exact chunk/start/end/original, entity type, selected boolean, replacement (1–100 non-empty characters), origin. Overlapping selected spans are rejected.
- JSON: `schema: "veil-desk/1"`, model, original, redacted, baseline terms, chunks/offsets, review/entities/reviewed flags, computed metrics. This audit preserves all source excerpts, including no-entity excerpts and rejected detections. TXT is the applied redacted string, with no embedded originals or audit.

## Honest comparisons and limitations

Metrics count literal known-name occurrences, neural candidates, selected masks, reviewed excerpts and source characters masked. Duplicate baseline terms are deduplicated; matches are case-sensitive. The two candidate methods can overlap and cover different types: these counts are **not accuracy, privacy assurance or time-saving percentages**. On the supplied tiny known-answer fixtures the model returned 14/14 expected exact entity spans/types across four excerpts. This is a fixture observation, not evidence of universal recall.

The model can miss or misclassify people, pseudonyms, unfamiliar names and entities outside news-like English. It is not a detector for all emails, phone numbers, dates, street addresses or indirect identifiers. Unknown tokens/unusual symbols or tokenizer normalization can trigger exact-alignment errors; shorten or simplify input rather than expecting guessed redactions. Manual masks are literal, not semantic. Default `[PER]` labels do not preserve identity across names. Review the complete redacted text in context before sharing. Replacements are arbitrary user strings: reintroducing identifiers is possible. Even correctly masked direct identifiers do not establish anonymization.

## Build, test, deploy

```sh
npm install
npm run predeploy
node core-test.mjs
python3 serve-test.py  # localhost:6187; production dist and shared WASM
node browser-test.cjs
python3 export-roundtrip.py
python3 audit-assets.py
```

Browser tests use Playwright from the existing workspace and installed Chrome, not a runtime app dependency. `TEST_URL` selects a public URL and `REPORT` chooses a report file. Successful model checks use the real model. Defensive tests inject faults only for failure scenarios. See `VALIDATION.md` and machine-readable reports for actual results, untested scope and verification commands. Public Pages asset hashes, two-fixture real inference, offline fresh-worker inference and reviewed TXT export passed; publication details are in `publication-status.json`.

Vite base: `/daily-app2/20261107-7/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` remain present as required; **do not use individual deploy** to publish. Use root `npm run predeploy` / `npm run deploy` to publish the combined collection, then verify the matching Pages built commit and public runtime/inference. No builder digest is sent.
