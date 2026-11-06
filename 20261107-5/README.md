# Retrieval Bench

**Publication status: UNPUBLISHED DRAFT — local real-AI validation passed; three GitHub Pages deployments timed out and the public URL remained HTTP 404. Public runtime verification could not be performed. This folder is excluded from the gallery and combined deployment. Do not count as a completed published app.**

A search-operations utility for help-center maintainers and knowledge-base owners running repeatable retrieval regression checks. Import a short corpus and query test set, compare real semantic retrieval with a transparent lexical baseline, inspect source passages, make human relevance judgments, apply the review and export a reusable ledger/qrels file. It does not generate answers or automatically label truth.

## Run / deploy

`npm install` then `npm run dev`. `npm run predeploy` builds the React + Vite production app with base `/daily-app2/20261107-5/`. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; publish through the **parent collection's root deploy workflow only**, never this individual deploy command.

The bundled runtime factory matches locked onnxruntime-web. The Vite build references the byte-identical shared 26,861,777-byte WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that older app in the combined deployment. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.

## Real AI and deterministic processing

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0, derived from sentence-transformers/all-MiniLM-L6-v2 (Apache-2.0). Transformers.js Apache-2.0 + ONNX Runtime Web MIT execute neural feature extraction on WASM CPU in a Web Worker, one thread. Mean-pooled normalized 384-dimensional embeddings of document title + passage and each question capture semantic similarity despite different vocabulary. Input batches contain four texts; max 256 tokens per text. Token truncation can lose meaning even within character bounds, especially non-English input. Intended for short English passages.

Subsequent steps are deterministic: finite normalized vector validation, dot-product/cosine ranking, tie-breaking by document ID, unique lowercase alphanumeric shared-term count for keyword baseline, ranking/expected-hit counts and output serialization. Neither similarity nor rank is a confidence percentage. No generated text, hard-coded inference response, server call or heuristic masquerading as AI.

## Workflow and bounds

- Documents CSV exact header `id,title,text`: 1–40 documents.
- Queries CSV exact header `id,text,expected_id`: 1–8 questions. An empty expected_id means unlabeled; otherwise it must identify a corpus document. One known answer per query, not a complete relevance set.
- IDs are unique within each file, 1–40 ASCII letters/digits/underscore/hyphen, ensuring portable qrels identifiers.
- Required cells are nonempty, every cell at most 300 characters. CSV supports quoted commas/newlines. Paste max 40,000 characters, import `.csv` max 40,000 bytes; PDF/DOCX unsupported.
- Top K integer 1–5. When fewer than K documents exist, all are ranked.
- Maximum 48 model texts, 12 chunks, 320 query-document pairs. Every pair and original is retained.

Use the synthetic Help-center or Garden fixtures, or paste/import both CSVs. Set K, explicitly load AI, then inspect semantic top K and keyword IDs. Expand remaining documents to review any pair. Set Relevant, Irrelevant/reject or Unjudged and edit notes (300 characters). Initial grades are always Unjudged, even when expected answers are provided. Undo preserves 30 review edits. Inputs/K changes invalidate all previous results and terminate active workers. Async file reads, worker loading and inference use run identities to prevent stale writes. Cancel terminates the worker, not a fake result; retry reloads cached assets. Runtime/construction/network errors, malformed vectors, unsupported Worker/WASM and 180-second timeouts are surfaced without substitute outputs.

Apply reviewed ledger snapshots the current review. Any edit or undo invalidates exports until reapplied. Downloads and clipboard reflect only this applied snapshot. No email sending, external updates or destructive transformations.

## Comparison and exports

Displayed semantic and keyword expected-hit counts @K are measured against user-provided expected IDs; unlabeled queries are excluded. At most one expected document is considered per query. This is a small test-set check, not universal accuracy or a claim of percentage improvement. Keyword ties by ID can yield a hit by coincidence when every score is zero. The concrete workflow benefit is evaluating multiple queries against the whole corpus in one reviewable ledger instead of repeating manual searches; no time-savings claim.

JSON includes schema/model, original documents and queries, K, every pair with both ranks, similarity, keyword count, judgment, note and computed metrics. CSV contains every pair plus original query/title/text, with standard quoting and an apostrophe prefix for text starting = + - @ tab or carriage return for spreadsheet safety. JSON is the exact-original archive; CSV intentionally prefixes those unsafe fields. Scores/ranks remain numeric.

TREC-style qrels export contains **only human-judged pairs** as `query_id 0 doc_id relevance`, relevance 1 for relevant and 0 for irrelevant; unjudged pairs omitted, download disabled when none judged. Never treat omissions as negative judgments. Empty/unjudged data is still preserved by JSON/CSV. Copy JSON copies the reviewed applied ledger. JSON/CSV outputs are portable review records, not an input format for this app; original corpus/query CSV inputs remain available in JSON.

## Downloads, privacy and offline scope

No API key, optional provider, backend, telemetry or shared credential. Corpus/questions exist in browser memory only. The model receives data only locally; imported text cannot invoke tools, alter authority or request credentials. Nothing personal is included in synthetic examples. Downloads are public asset GET/HEAD requests to huggingface.co and its CDN; no user content in URLs/bodies.

Before load the UI discloses ~23 MB model weights plus tokenizer/config, and ~27 MB local runtime/WASM, internet requirements and limitations. App/worker/factory/WASM are same-origin. Worker source, factory and binary use Cache API; model assets use Transformers.js caching. No user documents are persisted. Current desktop Chrome with Web Workers and WebAssembly SIMD and approximately 300 MB free memory tested. No WebGPU required. Browser/phone resource limits vary; actual Safari/Firefox/physical phones are untested.

After one successful inference a fresh worker in the **already-open page** can run with all networking disabled (tested). No service worker, no guarantee of offline reopening/navigation/reload. Cache eviction/private mode/low storage may force downloads; caching failures can remove offline availability. Model name is not an immutable revision, so upstream changes require revalidation.

## Validation

`node core-test.mjs` checks schema guards using synthetic vectors only, not as evidence of inference. `python3 serve-test.py` serves the actual production bundle at its deployment base. `node browser-test.cjs` drives actual Chrome/Playwright real model inference, two materially different fixtures, full 48-text batch, review/export/copy, offline fresh worker and cache reuse, cancellation/retry, stale input/file/worker responses, invalid inputs, network failures and retry, responsive layouts and injected malformed/unsupported/timeout/worker errors. Only defensive tests use fault injection.

`python3 export-roundtrip.py` independently parses actual downloaded CSV/JSON and qrels. VALIDATION.md and browser reports document observed outcomes and untested devices. Public production runtime hashes and inference are checked after root deployment.

## Publication blocker

Three successful Pages builds were followed by deploy timeouts: workflow runs 42285881030, 42288304249 and 42290066829. First remained syncing_files; the second reached finished_file_sync and the third exposed blank status near timeout. None became public. The failed-job rerun also exposed an inconsistent ghost queued state (zero jobs; cancel endpoint considered it completed). Fresh legacy build requests did not fix synchronization. No shared AI credentials were used and no local AI/runtime check failed.

Further shrinking/changing the already-small browser app/model cannot fix the provider finalization state: weights download separately and this app already reuses the collection WASM. Altering unrelated historical apps or Pages source settings merely to reduce the existing collection would introduce unvalidated regression risk without evidence it fixes this provider state. Kept the complete, real-AI draft rather than substituting a fake or keyword-only workflow.

To promote: restore the proposed APPS entry, run the app and root predeploy/deploy contract, wait for a matching successful Pages deployment, run verify-deployment.py and public-test.cjs plus the public gallery check, then update publication-status.json and remove this draft marker. validate-gallery.cjs intentionally expects the candidate entry and is a promotion check, not expected to pass while this draft is excluded. The current public-test scripts are prepared but were NOT run successfully against a public app (HTTP 404).
