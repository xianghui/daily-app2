# Firstpass Atlas

A private, static React + Vite inspection-handoff utility for a process-quality reviewer. Import/paste a **complete linked unit × station cohort**, run local AI outcome interpretation, check every source note and ranking, edit/approve or hold outcomes, apply the reviewed cohort and export a usable audit.

## What AI actually does

`Xenova/all-MiniLM-L6-v2` ([model source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0) runs through the collection's Transformers.js 4.3.2 (Apache-2.0)/ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT) WASM CPU worker. Normalized mean-pooled 384-dimensional embeddings compare notes with nine curated synthetic reference notes (three per outcome); the best cosine similarity for each outcome proposes **first**, **recovered**, or **failed**. Reference notes are visible in the review evidence. Similarity is not confidence. This is actual neural inference, not keyword matching, a canned response or a chat wrapper. The initial three-description approach performed poorly; the final multi-reference method matched 14/16 fixture notes, with two assembly-rework misses. Human verification is essential. Reference phrases were manually authored; this small synthetic check is not a benchmark or general accuracy estimate.

All identity checks, complete-grid validation, approved-outcome counts, station reconciliation, observed joint yield and baseline calculations are deterministic. AI never invents unit/station identities or missing observations. Source text is inert data; no text can grant authority, request credentials or invoke external tools.

## Input, review and output

Choose **Correlated corrections** or **Distributed corrections**, or provide JSON:

```json
{"title":"Closed cohort","stations":["assembly","test"],"records":[{"unit":"u1","station":"assembly","note":"Assembly accepted at its first inspection."},{"unit":"u1","station":"test","note":"Electrical test failed, repaired and passed on repeat testing."}]}
```

Limits: 2–4 unique station IDs; up to 12 unique units and 24 records; exactly one observation for every pair; IDs 1–32 ASCII letters/digits/underscore/hyphen; title ≤100 and notes ≤200 characters; source ≤60,000 characters; import ≤8 MB with a separately validated bounded original envelope. The fetched tokenizer configuration has model_max_length 512; these bounded English notes fit it. Source inspection confirmed Transformers.js feature extraction ignores the worker’s max_length:256 argument, so 256 is not claimed as an enforced cap (see tokenizer-audit.json). AI text batches contain four texts, maximum 33 texts / nine chunks including references. Timeout 180 seconds; cancel terminates the worker and aborts pending worker fetch. Run IDs reject stale responses; source edits invalidate the current run and all exports.

Review each suggestion against the immutable original. **First** means initial acceptance without correction. **Recovered** means initial failure followed by an actual passing retest after correction. **Failed** means no passing outcome recorded. Missing initial-attempt evidence should be held. Approve explicitly; any hold blocks cohort rates but still permits a complete audit. Outcome/note edits invalidate the applied snapshot. Undo restores the previous review state. Apply again before exporting.

- JSON: original inputs, review decisions/evidence and complete computed results. Reimport restores originals, not approvals.
- CSV: every observation, original source note, reviewed outcome, decision and reviewer note. Quoted CRLF CSV; formula-leading text is apostrophe-prefixed. No records silently discarded.
- Markdown/clipboard: observed metrics and a source-linked human-readable handoff for every observation. Markdown is plain review text; do not treat imported notes as trusted executable markup.

Observed first-pass = units with `first` at every station / total units. Final-pass baseline = units with no `failed` station / total. Product of station first-pass proportions is explicitly an **independence scenario**, not measured linked-cohort yield. For fixtures, observed 2/4 in both; final pass 3/4 and 4/4; independence scenarios 37.5% and 56.25%. These comparisons expose rework/dependence, not savings or causal effects.

## Runtime, download, privacy and offline scope

No key, backend, paid service, provider integration, telemetry or content upload. First use downloads approximately **50 MB**: roughly 23 MB q8 ONNX weights + 26,861,777-byte WASM plus tokenizer/JS. Weights/config download from Hugging Face and its CDN (including xethub.hf.co); runtime is same-origin. Load is explicit, cancellable, reports progress and visible actionable failures. No model-host requests before loading. User data remains browser memory. No persistence of documents, no remote inspection release or ledger writes.

Recommended: current desktop Chrome/Edge with WebAssembly SIMD/module workers, Cache API and enough memory for a small transformer. Tested desktop Chrome headless with GPU disabled; WASM CPU is the tested default, **not an untested WebGPU fallback**. Other browsers and real phones are untested. Narrow layouts were tested in desktop browser emulation.

Preserved immutable runtime dependencies (see `runtime-provenance.json`):
- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Worker source and factory/WASM explicitly use Cache API; Transformers.js caches model files. **Fresh-worker inference in the same warmed open page** works offline and is tested with all network disabled. Offline page reload/navigation/startup is not promised. Eviction/private browsing may require another download. No content is sent to older apps; their immutable files are reused to limit collection size.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261126-15/`. Per-app gh-pages dependency and deploy script are retained, but publish **only through repository root combined predeploy/deploy**; an individual deploy would replace the collection. Original `/Volumes/ExternalHD/daily_app` is untouched.

## Validation and limits

See `VALIDATION.md` and machine-readable browser/artifact/core/defensive reports. `node core-test.mjs && python3 independent-core.py` checks 81 exhaustive small grids with independently computed Python Fraction baselines. `node browser-test.cjs` exercises the actual production bundle/model; `python3 artifact-test.py local-` independently parses downloads. Browser tests accept `APP_URL` and `PREFIX` for assembled/public repeat runs. Successful AI checks use real inference; fault injection is confined to defensive tests.

This is a closed-cohort audit, **not** a throughput forecast, defect Pareto tool, repeated-attempt analyzer, statistical sampling estimator or automated release decision. All units must actually have observations at all checkpoints; no skipped, not-yet-tested or censored stations. Small English embeddings can confuse negation, time order, repair language and jargon. A passing final note alone does not prove a first-pass result. No universal accuracy, physical device, causal independence or accounting claims.
