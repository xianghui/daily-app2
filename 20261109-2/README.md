# Rater Bridge

A research-operations utility for reconciling two independently named qualitative coding schemes. Unlike a label-error detector, this aligns entire codebook definitions one-to-one and measures how that human-reviewed crosswalk changes the disagreement queue for paired judgments. It does not determine which annotation is correct or compute reliability.

## Workflow

1. Choose either synthetic fixture or paste/import JSON with `left` and `right` codebook arrays (`id`, `text`) and `pairs` (`id`, `text`, `left`, `right` code ids). Edit definitions to set scope. Exported JSON audits can be reimported for fresh inference; approvals are deliberately not restored.
2. Explicitly load AI. Inspect all cosine scores and original definitions; approve, change, mark unmatched, or hold each right-hand code. Correct a choice with undo. Mapping changes reset approval.
3. Apply the crosswalk after reviewing every code. Duplicate approved targets are blocked. Every source pair remains in the result, including unresolved and disagreeing pairs.
4. Download JSON (lossless input, crosswalk, scores, review, all pairs), formula-safe CSV (all pairs and reviewed fields), or Markdown (complete discussion checklist). Copy uses the same current Markdown. Any review/input change invalidates exports.

Inputs: JSON only; 1–8 codes each side, 1–80 pairs, 300 characters per definition/excerpt, simple unique ids ≤30 characters, workflow ≤100 KB; file/audit ≤1 MB. Each excerpt has exactly one code per rater. Many-to-one/multi-label schemes are not supported. Unmatched/held codes do not count as agreements or disagreements.

## Real AI / runtime / licenses

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized `q8` feature extraction via `@huggingface/transformers` 4.3.2, normalized mean pooling, 384-dimensional embeddings. Four-text batches, 256-token truncation. Definitions are embedded; source excerpts are **not** embedded.
- Transformers.js Apache-2.0; ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 WASM CPU (installed package version in lockfile); bundled worker and factory. No WebGPU or key. License copies in `licenses/`; see third-party notices. Exact installed versions can be inspected with `npm ls`.
- Initial internet download: ~23 MB model weights plus ~27 MB WASM runtime, tokenizer/config and app code. Hugging Face and its CDN deliver model files. The collection delivers runtime files. No provider integration exists.
- Runtime WASM is byte-identical to and reuses `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; do not remove that older build. `asset-audit.json` records hashes. Worker/factory bundled locally, never loaded from a JavaScript CDN.
- Current WebAssembly-capable browsers required; desktop Chrome tested. CPU-only path does not require WebGPU. Other browsers, physical phones and low-memory devices untested and may fail. Errors recommend retry/device checks; failures never substitute fake inference.

AI provides definition embeddings. Cosine and exact maximum-total-score partial one-to-one assignment are deterministic (bitmask DP, unmatched score zero). Similarity is **not confidence or equivalence**. Overlapping, negated or differently granular definitions can be misleading. All recommendations require review. Matching definitions does not prove paired judgments correct. Raw code equality versus reviewed-normalized equality is a descriptive comparison, not accuracy, improvement percentage, measured time saved, kappa, or a reliability claim.

## Privacy, caching, failures

Inputs remain in React memory and a local worker. No uploads, analytics, server inference, API credentials or external actions. User text is never placed in URLs or request bodies. Downloads contain only synthetic/your reviewed data; protect exported audits yourself. Imported instruction-like text is inert data. Caches retain model/runtime/worker files, not inputs. Model files come from the documented host; weights are not included in Git.

Explicit load shows download and batch progress. Cancel/input changes terminate the worker and increment the run identity. Late callbacks and async imports are ignored; failures clear suggestions. Timeout is 180 seconds. Schema/size/vector/output checks and worker errors surface actionable alerts. Retry creates a fresh worker. Cache API may be unavailable or evicted. After successful loading, fresh-worker inference in the **already open page** was tested with all networking disabled. Offline navigation/reload is **not promised**; no service worker caches the app shell.

## Development / deployment

`npm install`, `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261109-2/`. Per-app gh-pages scripts exist for contract compatibility; publish **only from collection root** using root predeploy/deploy so older apps remain.

## Validation

See [VALIDATION.md](VALIDATION.md), browser/network reports, source tests and asset hashes. Fixtures are synthetic. Known-answer links are intentionally clear and small, not a general accuracy study.
