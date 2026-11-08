# Triplet Foundry

A local-AI hard-negative mining workbench for ML training-data curators. Distinct from a generic classifier or dataset-label audit: the usable artifact is a reviewed, split-isolated contrastive training set with an explicit negative-reuse constraint.

## Workflow

1. Paste/import JSON labeled texts, source groups and train/holdout designations. Two synthetic examples are included. Set `maxNegativeReuse` (1–8).
2. Explicitly load AI. Real MiniLM embeddings rank nearest same-label positives and similar differently labeled hard negatives. Deterministic, stable anchor-order greedy allocation respects negative reuse. This is not a globally optimal allocation.
3. Inspect source texts, labels, source groups and cosine evidence. Change positives/negatives, approve or hold each anchor, and add notes. A pair edit requires fresh approval. Bulk approval is a human action, not a quality guarantee.
4. Apply the reviewed snapshot. Train-only participation, three distinct source groups, matching positive label, different negative label and reuse cap are checked again. Holdouts and gaps must be held. Edit/undo invalidates the applied exports; reapply before downloading.
5. Export approved training JSONL (columns `anchor`, `positive`, `negative`) or copy it. Audit JSON/CSV contains every original record, holds and reviewed links. JSON includes row-order-corresponding triplets with IDs for traceability. No model training or external action is performed.

Original text and labels are never overwritten. Undo keeps the last 30 review edits. Input changes cancel inference and discard derived results. Audit imports restore `.input`, not old approvals. Imported text is inert data, not instructions; there are no tools or remote actions to authorize.

## Real AI / deterministic boundary

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; upstream sentence-transformers/all-MiniLM-L6-v2. Quantized ONNX `q8`.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT), one CPU thread; no GPU, server or API key. Lockfile pins dependencies. Model host files are not revision-pinned, so upstream changes can alter future downloads.
- AI computes normalized, mean-pooled 384-dimensional embeddings, four texts at a time with maximum 256 tokens per text. Deterministic cosine ranking, label/split/group filters and capped greedy selection turn those embeddings into candidates. Returned vector counts, dimension, finiteness and near-unit norms are validated. No canned answers or heuristic fallback exists.
- The first eligible positive is the closest same-label record in a different group. Negatives must have another label and be in neither the anchor's nor that positive's source group. Same/different labels are exact, case-sensitive comparisons; normalize your taxonomy before importing.
- Baseline: first eligible negative in input order, using the same AI-selected positive, filters, anchor order and reuse cap. This isolates the effect of semantic negative ranking; it is not a wholly AI-free end-to-end system. Displayed proposal/baseline mean cosine and pair counts measure similarity/difficulty only, not accuracy, time saved or learned-model performance. Reviewed mean cosine uses approved pairs. Different pair counts must not be compared as equivalent quality samples.

## Download, devices, caching and privacy

Before loading, the UI states an initial ≈23 MB model/tokenizer download from Hugging Face and its storage/CDN redirects, plus ≈27 MB same-origin WASM and app/runtime assets. No model-host request occurs until explicit loading. User content stays in browser/worker memory; file-download traffic is not a content upload. No optional remote inference, analytics, credentials or paid services.

Use a current desktop browser with WebAssembly and Cache API; approximately 300 MB free memory recommended. Chrome desktop was actually tested at desktop and 320/390px widths. Actual phones, Safari/Firefox/Edge and constrained hardware were not tested. No WebGPU requirement or untested GPU fallback. Worker/network/runtime failure or the 180-second timeout yields an actionable error with no fabricated results; cancel terminates the worker. Run IDs guard worker messages, delayed worker fetches and file reads against stale writes.

Transformers.js caches model files with Cache API. Worker source, WASM module factory and WASM binary are explicitly cached. Tested offline scope: after a successful online run, while the same page stays open, a fresh worker performs real inference with all network disabled. Offline navigation, page-shell reload, first use and persistent cache survival are **not** promised. Private mode, eviction or cache restrictions can require another download. No user data is intentionally persisted in browser storage. Exports are local files.

The Vite build reuses the identical immutable WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, saving 26,861,777 duplicate deployment bytes. Preserve that existing app asset. App worker/factory are locally bundled with base `/daily-app2/20261108-11/`. See `asset-audit.json` for installed/shared/runtime hashes.

## Input / output formats and limits

Input JSON: `{ "maxNegativeReuse": 2, "records": [{"id":"A1","label":"reset","group":"source1","split":"train","text":"I forgot my password."}, ...] }`.

3–48 records; input ≤50,000 characters; imported JSON file ≤50 KB; record text 1–500 characters; label/group 1–80; IDs unique, 1–40 ASCII letters/digits/underscore/hyphen. Splits are `train` or `holdout`. A source group cannot cross splits. Exact normalized duplicate text cannot cross splits, but semantic leakage and undisclosed shared provenance are not detected. Keep related sources in one correctly assigned group. Notes ≤500 characters. Unsupported formats and malformed schemas are rejected.

- **JSON audit:** lossless original input, all reviewed records, ranked cosine evidence, applied triplets with IDs, negative-use counts and computed metrics. Reimport restores input for a new review.
- **CSV audit:** all records, original text/label/group/split, decision, selected IDs, AI negative and note. Strings beginning with spreadsheet formula characters (including multiline strings) are apostrophe-prefixed. JSON preserves the unsanitized originals.
- **JSONL training:** one approved triplet per line, exactly `anchor`, `positive`, `negative` string columns. Preserves source text including commas/quotes/newlines via JSON escaping. Held and holdout records are deliberately excluded; retain the audit to track exclusions. Empty approved sets yield an empty JSONL. Configure your training library/loss to consume these three text columns; this utility neither trains nor measures a downstream model.

## Limits / actual validation

A nearest negative always exists when labels and constraints allow one, even if topics are unrelated. Similarity is not confidence, semantic equivalence or label truth. Coarse/overlapping labels, false negatives, wrong positives, contradictory statements, negation, rare terms, language mismatch and truncation require curator attention. Do not force approval just to maximize row count. Source-group separation and holdout exclusion are mechanical guards, not a comprehensive leakage guarantee. Negative caps can leave gaps; no optimality claim is made.

Two 8-anchor known-answer fixtures found all 16 intended sibling-topic negative labels, versus 8/16 first-eligible baseline. These tiny synthetic fixtures establish a functioning ranking path, not universal accuracy or training gains. A deliberately mislabeled positive was still proposed: annotation correctness is not inferred. See `VALIDATION.md` and observed browser/core/artifact reports for exact checks and limitations.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Required individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish only through root** combined workflow, never deploy this app over the gallery.

Local production validation: `python3 serve-test.py` (port 6251), `node browser-test.cjs`, `node extra-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`, `python3 asset-audit.py`. Browser tests use the installed workspace Playwright/Chrome; `TEST_URL` and `REPORT` allow public-bundle checks. Fault injection covers only defensive paths; successful inference uses the real downloaded model.
