# Mention Atlas

A local-AI **entity indexing and fact-check preparation** utility for editors reviewing batches of short English article excerpts. Bottleneck: collecting names across sources and reconciling aliases into a traceable register. Real contextual BERT recognition proposes mentions; you review labels, consolidate aliases and attach verification notes. This is not a fact verifier, automatic identity resolver, redaction tool or generic chat interface.

## Workflow

1. Paste text or import UTF-8 `.txt`; separate excerpts with blank lines. Newsroom and Science desk examples are synthetic.
2. Optionally enter known names, one per line, for a literal-match baseline. Read the visible ~136 MB initial-download notice and click **Run local AI**.
3. Inspect every original excerpt and exact mention offsets. Reject false positives; correct type (PER/ORG/LOC/MISC/MANUAL); edit canonical labels and verification notes. Same **case-sensitive canonical label AND type** consolidate into one index entry. Different people sharing a name require distinct labels. No semantic identity merge is performed automatically.
4. Add missed exact phrases manually if needed. This human-directed literal matching is explicitly not AI. All non-overlapping occurrences are added. Review even excerpts with zero detected entities.
5. Mark every excerpt reviewed; **Apply reviewed index**. Undo restores up to 30 prior review states. A review edit reopens its excerpt and invalidates applied exports. Source changes cancel/invalidate old results.
6. Download JSON, CSV or Markdown, or copy reviewed JSON. No external accounts, sending or deletion is supported.

## Real model and runtime

- **Xenova/bert-base-NER**, q8 `onnx/model_quantized.onnx`, derived from **dslim/bert-base-NER**, cased BERT trained on English CoNLL-2003. Both cards declare **MIT**. Source: https://huggingface.co/Xenova/bert-base-NER ; https://huggingface.co/dslim/bert-base-NER . Snapshot inspected by the collection: `8e892123e8b7c2c0c2bd1dcb598b7d244c4e53aa`. Runtime downloads `main`; upstream changes can alter results. No weights are committed. Model card/license are in `licenses/`.
- **Transformers.js 4.3.2**, Apache-2.0, and **ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0**, MIT; bundled worker/module factory; one-thread WASM CPU. No WebGPU or API key required. `package-lock.json` pins dependency resolution. See `THIRD_PARTY_NOTICES.md` and `licenses/`.
- Weights: **108,952,255 bytes (~109 MB decimal)**; local WASM: **26,861,777 bytes (~27 MB)**, plus small tokenizer/config and client assets. First-run internet required. Model downloads use Hugging Face/CDN; runtime files use this static site. ~1 GB free memory recommended, not a measured minimum.
- The collection reuses byte-identical WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve this older app/asset in combined publishing. Vite rewrites the emitted asset URL; worker and factory remain app-local.

**AI does:** contextual token classification producing person, organization, location and miscellaneous labels. **Deterministic steps:** exact source-token alignment (all O/B/I tokens), joining BIO wordpieces, literal-list comparison, reviewer-directed alias grouping, counts, validation and exports. Imported instructions are inert data, never tool authority. There is no generative credential-request path. The model does not verify claims, identities, dates, emails or all possible named things. No confidence percentages are displayed.

## Privacy, caching and device requirements

Inputs, notes and review state stay in tab memory. No backend, analytics, remote AI, shared credential or content upload. Static model/runtime GET/HEAD downloads are distinct from inference; only file URLs leave the device. Cache API stores model/runtime files, not excerpts. No app persistence of source content. Close the tab to discard content; browser restore, downloaded files and clipboard are outside app control. Exports include original source text and should be handled accordingly.

After one successful online run, another real inference with a **fresh worker in the already-open tab** works offline if caches remain. Worker source, factory and WASM are explicitly Cache-API cached; Transformers.js caches model/tokenizer files. This exact scope was tested with all network disabled. Offline app-shell reopening/navigation/reload is **not promised** (no service worker). Private mode, eviction or clearing site data can require downloads again. Clear site data in browser settings to remove caches.

Modern Web Workers + WASM SIMD required. Desktop Chrome tested; WebGPU not requested. Phone-width layout tests are desktop emulation, not physical-device performance tests. Safari, Firefox, low-memory phones and screen readers have not been certified. Runtime/worker/download failures show an error and retry; there is no fake AI or heuristic fallback. Cancellation terminates the worker; a 240-second timeout stops a stuck run.

## Limits, schemas and exports

- 1–12 nonempty excerpts, <=400 UTF-16 characters each, <=8,000 UTF-8 bytes total, `.txt` only. LF and CRLF separators and originals preserved. One excerpt per inference chunk. Full token alignment is required; silent truncation is rejected.
- Raw model output: one token array per excerpt, with increasing integer token index, word string, O or BIO PER/ORG/LOC/MISC label and finite score in [0,1]. Invalid count/schema/coverage stops without applying results. Unknown/unusual normalized tokens may fail strict alignment; simplify/shorten text rather than expecting guessed offsets.
- Reviewed mention: exact excerpt/start/end/original, selected flag, canonical label (1–100 nonempty characters), kind, note (<=300 characters) and origin. Source and global offsets are UTF-16, end-exclusive. Manual additions avoid overlapping existing mentions. Run identities guard worker responses, worker-source fetches and asynchronous file reads.
- **JSON `mention-atlas/1`:** original batch, all excerpt texts/offsets, all mentions including rejected ones, review flags, grouped accepted index with aliases/references/notes, model, baseline terms and computed metrics. This is the lossless audit format, including zero-entity excerpts.
- **CSV:** all neural/manual mentions, including rejected ones; id, excerpt, original, kind, canonical, selected, start, end, note, origin. RFC-style quoting via Papa Parse; formula-like strings are apostrophe-prefixed for spreadsheet safety. Zero-entity excerpts are retained in JSON/Markdown, not fabricated as CSV mentions.
- **Markdown:** accepted entity index with aliases, source references, verification notes and all source excerpts. Markdown metacharacters escaped. No raw HTML rendering of imported content.

## Quality and comparison

The supplied two datasets yielded **14/14 expected exact entity spans and types** across four excerpts in real browser inference. This is a tiny fixture observation, not universal precision/recall. Newsroom yields 6 neural mentions vs 1 literal baseline occurrence for the initial list `Sarah`; these cover different sets and can overlap, so the UI reports counts, not improvement/accuracy percentages or estimated time saved. Canonical indexing reduces repeated source browsing by placing every accepted mention under its reviewed label, with direct excerpt/offset references. The repeated-name fixture verifies two Sarah mentions consolidate with both references preserved. A third real-model fixture verifies reviewer consolidation of the distinct surfaces `Sarah Jones` and `Sarah`: 4 mentions become 3 index entries without losing either alias/reference.

The model can miss people, organizations and places, misclassify unfamiliar names, and split phrases. Automatic initial grouping is exact surface/type grouping, not proof of identity; reviewers must separate homonyms and consolidate genuine aliases. Every label is a candidate until reviewed; even reviewed labels are not independently verified facts.

## Validation and publishing

```sh
npm install
npm run predeploy
node core-check.mjs
python3 serve-test.py  # localhost:6191; production bundle + shared WASM
node browser-test.cjs
python3 export-roundtrip.py
python3 audit-assets.py
```

Tests use the installed workspace Playwright and Chrome (not app runtime dependencies). Successful model tests use real BERT. Only defensive error tests inject faults. `TEST_URL` selects the deployed app; `PUBLIC_ONLY=1` skips repetitive fault-injection cases for public verification. See `VALIDATION.md` and JSON reports for observed checks.

Vite base `/daily-app2/20261107-11/`. Per-app required scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not run the per-app deploy**. Publish from root with the combined `deploy/` workflow. Verify matching built Pages commit, public asset hashes, gallery and actual public inference before calling complete. No builder digest is sent.
