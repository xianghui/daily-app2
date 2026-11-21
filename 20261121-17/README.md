# Cloze Orchard

A local-AI source-to-study-card workbench for educators and self-learners. **Real BERT named-entity recognition** proposes exact answer spans in short English passages. Review what is worth learning, correct answer boundaries, reject unsuitable candidates and export Anki Cloze TSV. Unlike entity indexing/redaction or recall schedulers, the deliverable is a batch of source-faithful, review-gated retrieval-practice notes.

## Workflow

1. Paste text or import UTF-8 `.txt`. Separate passages with blank lines. Two notebook examples are synthetic.
2. Set a maximum-card budget (1–60). Read the download/privacy notice, then **Load AI & find answers**. Nothing is approved automatically.
3. Keep/reject every candidate. Correct exact start/end UTF-16 offsets if needed; inspect the original passage. Add missed literal answers manually (explicitly not AI). Add optional back-of-card notes.
4. Verify every passage, including those with no candidates. An edit unchecks its passage and disables all previous exports. Undo restores up to 80 prior review snapshots. Source/import changes cancel and invalidate old work.
5. **Apply reviewed cards**. Every kept answer produces one note per passage; duplicate identical answers merge, and every case-sensitive literal occurrence in that passage is hidden together with c1. Different answers/passages remain separate. Exceeding the budget blocks, rather than silently dropping records. Near-synonyms/alternative answer clues are not detected: inspect leakage manually.
6. Preview cards, reveal answers, download or copy actual current outputs. Reimport JSON to restore originals only and renew AI/review. No account actions, sending, publishing decks or remote file changes.

## Anki importing and artifacts

- **Anki TSV:** UTF-8, tab-delimited Text / Back Extra / Tags. Header declares separator, HTML and tags column. In Anki’s import dialog select **Cloze** note type, map the fields and inspect the preview. Every note uses c1. Actual Anki desktop import was not tested; the file was independently parsed, cloze markup reconstructed, and all reviewed answers/source text compared. No `.apkg` generation or Anki connection is claimed.
- **JSON `cloze-orchard/1`:** complete original text, all passage text/offsets, every neural/manual candidate including rejections, review flags, budget, generated cards and computed counts. This is the lossless audit/reimport format.
- **Audit CSV:** explicit source records for **every** passage (including zero-entity passages) plus every candidate with offsets, kind, decision and note. RFC-style quoted cells, CRLF rows; formula-like string starts are apostrophe-prefixed for spreadsheet safety. It is a complete audit, not an Anki import file.
- **Markdown:** kept card answers/source references/notes plus full original input. Plain downloadable text; no imported HTML executes in the app. Treat downloaded Markdown as untrusted text when using external renderers.

The TSV HTML-escapes all source/note text, braces, colons, tabs and line breaks; only generated `{{c1::...}}` syntax is live. Text is wrapped in a div so a source-leading `#` cannot become a TSV comment. No raw HTML is rendered from user content. Exports include source content; handle them accordingly.

## Real AI and runtime

- **Xenova/bert-base-NER**, quantized q8 ONNX, derived from **dslim/bert-base-NER** (both model cards MIT). English, cased BERT trained on CoNLL-2003. https://huggingface.co/Xenova/bert-base-NER and https://huggingface.co/dslim/bert-base-NER . Model `main` is unpinned; inspected collection snapshot `8e892123e8b7c2c0c2bd1dcb598b7d244c4e53aa`. Upstream changes may change behavior. Model weights are not committed.
- **AI task:** contextual per-token PER / ORG / LOC / MISC / O BIO classification. Predictions must have valid token schemas, finite scores and increasing indices. All model tokens including O must align exactly to literal source text; BIO continuations join named spans. Unknown, normalized, malformed or truncated tokens fail closed. No guessed offsets or hard-coded model responses. Scores are not displayed as confidence or importance.
- **Deterministic work:** source-token alignment, manual literal additions, exact answer deduplication, repeated-answer masking, review/budget validation, HTML encoding, metrics and exports. BERT does not generate wording, verify facts, resolve identities or grade learning.
- **Transformers.js 4.3.2** (Apache-2.0), **ONNX Runtime Web** (MIT), one-thread WASM CPU. No WebGPU or API key. Reuses the immutable same-origin NER worker and factory hosted by Mention Atlas (`20261107-11`) and WASM from Pulse Ledger (`20261107-2`). Preserve these assets in combined deployments. See `runtime-dependency-audit.json` for hashes and paths and the source model/runtime notices in `../20261107-11/licenses/` and `THIRD_PARTY_NOTICES.md`.
- First download: **108,952,255 bytes (~109 MB) model weights**, **26,861,777 bytes (~27 MB) WASM**, tokenizer/config plus client assets. Requires initial internet from this site and Hugging Face/CDNs. Download progress, cancel, network failure and retry are visible. Model timeout 240 seconds.

## Privacy, caching and devices

Your content/notes remain in tab and worker memory. No backend, remote inference, credentials, analytics or content uploads. External requests are static model downloads, not document submission. Imported instructions are data and cannot change tools or request credentials. The app does not persist content, though browser restore/clipboard/downloads are outside its control.

Cache API stores worker source, module factory, WASM and model/tokenizer files. After one successful run, **fresh-worker inference in an already-open warmed page** was tested with all network disabled. Offline reload/navigation/startup is not promised (no service worker). Caches may be evicted; private mode or cleared site data may require redownload. Clear browser site data to remove cached assets.

HTTPS/localhost, module workers, WebAssembly SIMD and substantial free memory required (~1 GB recommended, not measured minimum). Current desktop Chrome on CPU tested with GPU disabled. Phone-width layouts are desktop emulation, not physical-phone performance verification; other browsers and screen readers are unverified. No hidden WebGPU requirement, heuristic fallback or mandatory paid service.

## Bounds and defensive behavior

1–12 passages, each ≤400 UTF-16 characters; batch ≤8,000 UTF-8 bytes. One passage per inference chunk; tokenizer ceiling 512 tokens. Full token coverage is checked so truncation cannot silently lose source text. Up to 240 candidates and 60 output cards. Reserved source cloze braces `{{` / `}}` are rejected. Answer length ≤100; note ≤1,000 characters. `.txt` / audit `.json` imports ≤2 MB with the same stricter original-input limits. Unsupported file types and audit schemas are rejected.

Cancellation terminates workers. A monotonically increasing run identity guards worker events, worker-source fetches and async imports; stale/cancelled runs cannot overwrite newer results. Worker creation/errors, missing runtime, model/network errors, malformed predictions and timeouts show errors and keep exports disabled. No fake results on failure. Editing starts/ends changes only the review layer; original inputs never change.

## Quality and comparison

Two tiny synthetic notebooks yielded **14/14 intended exact entity spans** in real browser inference, producing 14 expected reviewed cards. This is fixture coverage, not universal precision/recall or learning gains. A separate repeated-name fixture yields 4 kept neural spans → 3 distinct cards, avoiding 1 duplicate vs one-note-per-kept-span and masking both Sarah occurrences. A zero-entity passage remains in the complete audit without invented cards.

BERT recognizes named entities, not all learnable concepts; dates, technical terms and common nouns may be missed. Names can be misclassified, split or unhelpful. Strict alignment can reject unusual symbols or scripts. Repeated hiding is literal/case-sensitive and can match a substring in a longer word; review the preview. One blank may be answerable from other context, or a passage may be too ambiguous. No educational effectiveness, accuracy percentage or time-saving claim is made. Card count, duplicate notes avoided, rejects and source coverage are computed from the current review, not estimates.

## Validation and deployment

```sh
npm install
npm run predeploy
node core-test.mjs
python3 serve-test.py
node browser-test.cjs
node defensive-test.cjs
node edge-test.cjs
node cold-cancel-test.cjs
python3 artifact-test.py
```

Tests use workspace Playwright/desktop Chrome (not frontend dependencies). Successful model checks execute real BERT; fault injection is used only for defensive paths. See `VALIDATION.md` and structured reports for actual outcomes and untested scope.

Vite base `/daily-app2/20261121-17/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` remain. **Publish only from root** using the combined `deploy/`; per-app publishing would replace the collection. Require matching built Pages commit, public asset byte hashes and real public inference before marking published. No builder digest.
