# Shelfspan Desk

A private, no-key library-intake utility for community reading rooms. Paste a book manifest, semantically match short summaries to your own subjects, review each book and export a measured shelf placement worksheet. Not a chat wrapper, cataloging authority, or a tool that changes a catalog or moves files/books.

## Workflow

1. Load either **synthetic** example, paste source JSON, or import a `.json` source/audit (≤1,000,000 bytes). Source JSON ≤30,000 characters.
2. In `shelves`, set equal internal `widthMm` (100–2000 integer), growth `reserveMm` (0–1000 integer, strictly below width), and available `count` (1–8). Subtract bookends/dividers from internal width yourself.
3. Supply 2–8 `setups`: unique simple `id` and `description` (1–200 characters). Their array order is the desired subject order. These are **collection subjects**, not numerical device profiles.
4. Supply 1–24 `records`: unique `id`, book `title` (≤120 characters), surname-first sort `author` (≤120), **measured** spine `widthMm` (integer 1–150), and short subject `note` (≤200 characters). IDs are 1–24 ASCII letters/digits/underscore/hyphen. Nonempty text, valid Unicode, no forbidden controls.
5. Explicitly click **Load AI & match subjects**. Inspect ranked source descriptions and cosine similarities. Confirm/correct subject, title, author and width; approve or hold every record. Similarity is not confidence. Every content/width/subject edit resets that book to pending; reviewer notes do not.
6. Apply the exact reviewed plan. Any later review edit invalidates all exports. Undo retains up to 30 previous review states. Original inputs remain unchanged.
7. Export JSON, audit CSV, Markdown or copy the worksheet. A separate **Placement CSV** is available only when at least one approved book fits within available shelves. Holds remain in complete audits, not the placement release. Blocked plans export complete diagnostics but blank placement columns in audit CSV.
8. Reimport an audit to restore original inputs, **not** silently reinstate approvals. Run AI/review again. Nothing is persisted automatically.

## Real AI and static runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX (`q8`), normalized mean-pooled 384-dimensional embeddings. Underlying sentence-transformer model: [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), WebAssembly CPU/SIMD, one thread. No WebGPU dependency or credential path.
- AI receives only supplied subject descriptions and book-summary notes in an on-device worker. It ranks semantic similarity beyond exact-string lookup; it does not generate titles, guess physical dimensions, verify contents, infer authoritative call numbers or execute instructions in text.
- Up to 32 texts, in batches of four. App text cap 200 JS characters; tokenizer `model_max_length=512` was inspected. The shared pipeline ignores its legacy `max_length:256` option; this app does **not** claim a 256-token cap. Tokenizer truncation is enabled.
- Initial explicit loading needs internet: 22,972,370-byte weights (~23 MB) plus tokenizer/config, ~26.9 MB WASM and ~0.6 MB worker/factory, approximately 50 MB total. Download hosts are `huggingface.co` and its documented CDN (observed `us.aws.cdn.hf.co`), with same-origin runtime assets. Download size varies with host revision; model `main` is not pinned. Observed resolved revision: `751bff37182d3f1213fa05d7196b954e230abad9`.
- Runtime code is reused from immutable same-origin assets in `20261115-6`, WASM from `20261107-2`. See `runtime-provenance.json` for exact paths, bytes and hashes. **Preserve those older app assets in the combined collection.** No external JavaScript CDN at runtime.
- Requires modern module workers, WebAssembly SIMD and enough free memory (desktop Chrome CPU was tested). Memory-constrained phones may fail; no claim of universal phone inference. Errors explain how to try a supported desktop browser. No fake/deterministic replacement when inference fails.
- Explicit model loading, per-file progress, chunk progress, cancellation, 180-second timeout and retry. Cancellation terminates workers and aborts the worker fetch. Run IDs guard every asynchronous result/fetch/file import against stale overwrite. Finite, normalized vector shape/count is validated before recommendations.

## Deterministic planning and honest comparison

After approval, order books by supplied subject-array position, then English `Intl.Collator` (`numeric:true`, `sensitivity:'base'`) author/title, with original input order as stable tie-break. Enter surnames first yourself; punctuation, authorship conventions and other locales are not standardized here.

Exact dynamic programming chooses **contiguous** shelf breaks in that fixed order, minimizing lexicographically:

1. number of shelves;
2. boundaries splitting one subject across adjacent shelves;
3. sum of squared unused usable shelf width (a balancing tie-break, not extra shelf capacity).

Usable width = internal width − per-shelf growth reserve. No spine is split. Capacity is enforced on every shelf. All approved records and their total measured width are conserved. If a spine exceeds usable width or minimum required shelves exceed available count, placement export is blocked. Proposed extra shelves remain diagnostics only.

The baseline is pasted-order next-fit under the same usable width. Displayed shelf counts, same-subject split boundaries and adjacent topic changes are independently recomputed from actual exports. Collection order may require **more**, not fewer shelves than arbitrary packing. This optimizes ordered shelving, **not unconstrained bin packing**. No fabricated time savings or accuracy percentages.

Width-only planning ignores height, depth, weight/load, book lean, handling clearance and access. The schematic does not represent book heights. Verify those independently. This is not Dewey/Library of Congress classification, an accessibility assessment, or a structural shelf design.

## Privacy, formats and reversible output

Default content stays in browser memory/worker messages. Model download requests do not contain book summaries. No remote inference, analytics, API keys, uploads or external actions. Browser/model host can observe ordinary download metadata (e.g. IP). Cache API stores runtime/model files, not intake content. Clear site data to remove cached weights; it will require a new download.

- JSON: `shelfspan-desk-v1`, original `source`, every `review` record and candidate evidence, computed `result` and optional diagnostic partitions. Import restores original source only.
- Audit CSV: every source ID/note/original title, reviewed title/author/subject/decision/width/note and actionable location if valid. Placement CSV: approved books only, exact shelf number and left-to-right position. UTF-8, quoted CRLF CSV; quotes/newlines are escaped, formula-leading text is prefixed with `'` for spreadsheets. JSON remains lossless; numeric widths stay numeric. The prefix intentionally changes spreadsheet-facing text, not JSON.
- Markdown: human placement checklist when ready, otherwise explicit block; includes complete original-note/reviewer audit. It is exported/copied plain text, never interpreted as trusted HTML.

### Offline scope

Tested: after one successful online run, turn network fully off **without closing/reloading the open page**, terminate/recreate the worker, and run real model inference on another batch. Worker source, WASM factory/binary and model cache allow this warm-page use. Cache failures/eviction need internet. **Cold offline navigation/reload/app-shell startup is not supported or claimed.** No service worker caches the app shell.

## Build and validation

```sh
npm install
npm run predeploy
node core-test.mjs
# Serve production bundles with shared collection dependencies:
python3 serve.py
# In another terminal, same directory:
node browser-test.cjs
python3 artifact-test.py local-
node defensive-test.cjs
node recovery-test.cjs
node model-cancel-test.cjs
node import-race-test.cjs
node input-guard-test.cjs
SITE_ORIGIN=http://127.0.0.1:7897 PREFIX=local- node asset-audit.mjs
```

Tests use the existing local Playwright/Chrome installation, not a public app dependency. See [VALIDATION.md](VALIDATION.md) for actual observed outcomes/known failures. Tests inject faults **only for defensive paths**; all successful AI workflow checks use actual weights. No mocked response establishes success.

Vite base `/daily-app2/20261128-21/`; React + Vite. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained as required. **Publish only through the root combined-site workflow**, not the per-app deploy script, which would replace the collection.
