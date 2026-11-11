# Severity Ledger

A local-AI failure-mode reconciliation and priority-review desk for maintenance workshop coordinators. Input rough issue notes and an agreed catalog; AI retrieves likely modes, a person verifies every match/rating, and deterministic rules create an exportable action worksheet. No equipment control, notifications or external execution.

## Workflow

1. Open **Packing workshop** or **Office continuity**, or paste/import JSON. Set `slots` (1–24) and `severityGate` (1–10).
2. Supply 2–6 catalog modes (`id`, `title`, `description`, integer `severity` 1–10) and 1–24 issue records (`id`, `text`, integer `occurrence`, `detection` 1–10). Larger detection rating means harder to detect. Use your own agreed rubric; fixture ratings are illustrative.
3. Explicitly load AI. Inspect all candidate descriptions/cosines. Review mode, severity, occurrence, detection, decision, owner and follow-up action. Mode changes reset severity to the new catalog default; override it if appropriate. Approve or hold every note; no bulk automatic approval.
4. Apply reviewed priorities. Gate-reaching issues precede others, ordered by severity descending then RPN; other issues sort by RPN, ID breaks ties. RPN = S × O × D. Both this shortlist and the plain-RPN baseline have the same slot limit. Held issues are excluded, never discarded. A warning counts gate-reaching issues outside capacity.
5. Edit/undo/reapply or discard the worksheet. Every edit disables stale exports. Download JSON, Audit CSV or Markdown, or copy the current worksheet. CSV contains every approved/held/deferred record. JSON includes immutable originals, candidates, review, ranking and both shortlists. Reimport restores originals only; AI and approvals must be renewed.

This is a custom severity-first workshop rule, **not an industry action-priority table**, validated FMEA system or safety certification. Multiplication of ordinal ratings is a heuristic, not quantified risk. AI does not determine consequences, occurrence, detectability or actions. Similarity is not identity or confidence. Do not treat deferred/held issues as resolved. No incident-reduction or time-saved claim.

## Real AI, static hosting and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), [Apache-2.0](https://huggingface.co/Xenova/all-MiniLM-L6-v2/blob/main/LICENSE), q8 ONNX. Transformers.js **4.3.2** / ONNX Runtime Web; default is real WASM CPU inference, not WebGPU or a server. Model artifacts use upstream `main` via Transformers.js (not revision-pinned); a future upstream change requires revalidation.
- Normalized mean-pooled 384-dimensional embeddings drive cosine mode retrieval. Catalog severity is copied from the chosen mode. Validation requires finite normalized vectors of the expected count/dimension before suggestions appear. Ranking, RPN, capacity, gate and comparisons are deterministic and explained in the UI.
- First explicit run requires internet and approximately **50 MB**: ~23 MB model/tokenizer from huggingface.co / hf.co and their CDN, ~27 MB same-origin WASM. App/runtime factory/worker are local bundled assets. Shared immutable byte-identical WASM is at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; retain that earlier app in combined deployments. Exact asset sizes/hashes: `runtime-assets.json`.
- Modern browser with WebAssembly SIMD, module workers, Cache API for persistent caching, and several hundred MB working memory. Tested headless installed desktop Chrome. No GPU required. Other browsers and physical phones are unverified. Responsive viewport checks are not physical-device tests.
- No API keys, remote AI integration, analytics or content uploads. Network audit from startup through inference found download-only GET requests without user text/bodies. No model-host traffic before explicit load. Pasted instructions remain inert data. Real personal data/credentials are not in fixtures.
- Model cache uses Transformers.js Cache API; worker/factory/WASM also explicitly cached. After a successful online run, a **fresh worker with all network disabled inside the already-open page** can infer. Offline reload/navigation is not promised. Private browsing, eviction, blocked storage or upstream changes may require redownloads. No user content is persisted by app code; content exists in memory and explicit user downloads/clipboard only. Browser file controls can show selected filenames.

## Bounds and failure handling

Names ≤80, IDs ≤40, descriptions/notes ≤400 characters, original JSON ≤18,000 characters; audit envelope ≤1 MB. Input/import is JSON only, not CSV/PDF/office documents. Four texts per model chunk, 256-token maximum context, 180-second timeout. Result schema `severity-ledger/v1`. Cancel terminates the worker; run identities also discard delayed imports/worker downloads/results. Network/model/worker/WASM errors have actionable retry messages; there is no fake fallback. Unsupported formats, duplicates, invalid ratings, oversized inputs and malformed vectors are blocked. Similarity always selects a nearest candidate even for unrelated/negated text: human holds are essential.

CSV applies leading formula-character protection, including multiline values. JSON is the lossless original/review archive; CSV intentionally adds a quote before formula-like text. Markdown escapes table cells and includes every issue. Text is rendered by React without HTML execution.

## Build / deploy / checks

`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261112-2/`. Per-app `deploy` is retained by contract but **do not invoke it**: publish only the repository root combined `deploy/` workflow.

Run `node core-test.mjs`; serve built assets with `python3 serve.py`; run `node browser-test.cjs`, `node defensive-test.cjs`, `node stale-result-test.cjs`, `node stale-import-test.cjs`, `python3 artifact-test.py`, `python3 audit.py`. Test tooling uses the host Playwright install; application has no test-host dependency. See [observed results](VALIDATION.md). Successful browser checks use the real model; mocks occur only in explicitly labelled defensive/stale-result fault injections.
