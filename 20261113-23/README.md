# Stream Steward

A local-AI bin audit and re-sort planning utility for workplace sustainability coordinators. Rough waste descriptions are a semantic identity bottleneck; count-only audit tallies ignore item/lot mass. The app provides reviewed material matching, exact mass accounting and minimum-whole-record-touch separation checklists. It neither directs hazardous-waste disposal nor certifies compliance.

## Workflow

1. Load either synthetic fixture or paste/import JSON. Supply `project`, integer `limitPercent` (0–50), 2–6 `materials` with id/label/description, 1–6 `bins` with id/label/accepted material ids, and 1–40 `records` with id/bin/note/positive integer grams/owner.
2. Explicitly load AI. Inspect the proposed material and all cosine-ranked candidate descriptions beside each original note. Scores are semantic similarity, not confidence. Verify identity through actual inspection.
3. Correct material/bin/mass, write multiline owner and follow-up notes, then approve or hold each record. Undo restores the prior review state. Every review edit invalidates the applied snapshot. Any held item blocks complete mass summaries, while preserving audit export.
4. Apply reviewed audit. Compare incompatible record fraction with incompatible mass fraction. The count baseline counts weighed lots, not objects. Their difference is descriptive, not an accuracy gain.
5. Export current applied JSON (originals + all reviews + plan), properly escaped CSV, or Markdown checklist; copy the checklist. JSON reimport restores originals only and requires fresh inference and review. No source records are dropped, including holds. No external sending, disposal or account operations occur.

## Real AI / runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; sentence-transformer base [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Transformers.js 4.3.2, ONNX Runtime Web, q8 CPU/WASM inference; normalized mean-pooled 384-dimensional embeddings, cosine material ranking. Batch size four, max context 256 tokens. Strict finite normalized vector/schema validation. This is inference, not regex classification or a canned demo.
- First explicit load needs internet: approximately 23 MB model/tokenizer from Hugging Face/CDN plus 26,861,777-byte same-origin WASM and bundled runtime/worker. Several hundred MB working memory recommended. Module workers and WebAssembly SIMD required; no WebGPU required. Desktop Chrome CPU validated, physical phones/other engines unverified. Progress, cancel, network errors, timeout (180 seconds) and retry are visible. Failure never switches to heuristic output.
- Collection WASM is byte-identical to `../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Production worker references `/daily-app2/20261107-2/assets/…`; preserve that deployed app. Factory and worker bundle are app-local. Asset hashes are in asset-validation.json.

## Privacy and offline scope

Content stays in the browser. Only static runtime/model GET downloads occur; no content POST, remote inference, telemetry, keys or agent credentials. No optional provider integration. Imported text cannot invoke tools, authorize actions or request credentials. Worker is terminated at cancellation/input changes; run identities prevent stale writes. File reads use the same identity guard. No automatic content persistence; downloads contain only user-chosen current data. Worker/factory/WASM use Cache API and model runtime caches weights. An already-open warmed page passed fresh-worker inference with all network blocked. Offline navigation/reload is not promised; cache eviction or blocked storage requires internet again.

## Deterministic planning and limits

For each bin, incompatibility is membership in the supplied accepted-material set. All masses remain integer grams (1–1,000,000,000 per item); sums and threshold comparisons stay within exact safe integer ranges at the 40-record bound. Count baseline = incompatible records / records. Mass audit = incompatible grams / total grams.

When over the supplied limit, sort incompatible records by descending mass (ties by id). Remove whole records until `100 * residual <= limitPercent * remaining`. This minimizes count of whole-record touches, NOT removed mass, real labor, destination safety or total cost. Every feasible k-record removal is no heavier than the k largest incompatible records, so this greedy order reaches the threshold using the smallest possible k. Empty bins and completely emptied bins have undefined percentages, explicitly shown as no evidence/empty rather than a certified clean stream. Zero/equality limits are supported. Original measurements are retained alongside edits.

Maximum source 40,000 characters; source descriptions ≤300; project ≤100; owner ≤150; review note ≤1,000; JSON import ≤2 MB (audit envelope has a separate limit). Only JSON import is supported. Duplicate ids, unknown bins/materials, empty/oversized data, invalid masses and malformed embeddings are rejected. Mixed materials must be separately weighed; the model cannot infer coatings, contamination, hazards or local rules. Ambiguous/unrelated/negated descriptions can still receive a wrong nearest match; hold them. Synthetic fixture results are not general accuracy estimates.

## Build / deployment / validation

React + Vite, base `/daily-app2/20261113-23/`. `npm run predeploy` builds; per-app gh-pages dependency and `deploy: gh-pages -d dist` remain present to meet the collection contract, but **publish only from repository root** using its combined deploy directory. See [VALIDATION.md](VALIDATION.md) and saved browser/oracle/artifact/asset reports for observed outcomes. No real personal documents or credentials are included.
