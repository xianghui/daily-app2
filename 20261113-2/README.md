# Sample Signal

A local-AI inspection worksheet for quality coordinators who repeatedly reconcile informal lot descriptions, verify sampled-unit counts and compare defect proportions without averaging unequal lots equally. Distinct from defect-family Pareto ranking: this utility pools binary unit outcomes and exposes sampling uncertainty, not defect-cause priorities.

## Workflow
1. Choose either synthetic fixture or paste/import JSON. Supply 2–8 product profiles (`id`, `title`, `description`, `targetRate` in 0–1) and 1–24 records (`id`, `text`, `inspected`, `defective`). Counts must be integers, 1–1,000,000 inspected and 0 ≤ defective ≤ inspected. IDs must be unique within their type. Original JSON ≤24 KB; imported audit envelopes ≤1 MB; text ≤400 characters.
2. Explicitly load AI. MiniLM embeds product descriptions and source notes. Cosine ranking proposes product identities; its similarity is NOT calibrated confidence. The model does not extract/validate counts or understand sampling design. Unrelated/negated notes can map to the wrong nearest product. Imported instructions remain inert text.
3. Review every identity and count; approve or hold each sample. Edit notes, undo edits and inspect candidate evidence. Holds block statistical release but remain in complete audit exports. Original inputs never change. All edits invalidate applied exports.
4. Apply to calculate pooled defective-unit rate, an unweighted mean of lot rates, and a Wilson 95% interval. Compare interval endpoints against the supplied planning target and use the follow-up guidance to plan more representative sampling or investigation. No physical lot release, acceptance/rejection certificate or external action.
5. Download current JSON audit, CSV review rows or Markdown worksheet; copy Markdown. JSON reimport restores ORIGINAL inputs only and requires fresh inference and approvals. CSV escapes spreadsheet-leading formulas (including multiline notes); numeric counts remain numeric. No CSV/PDF import.

## Real AI, runtime and privacy
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Model/tokenizer about 23 MB from Hugging Face and its CDN. Runtime: bundled `@huggingface/transformers` 4.3.2 and ONNX Runtime WASM CPU. Four texts/batch, 256 tokens/text (long inputs may truncate).
- Before explicit loading, no model-host requests. First use needs internet: about 50 MB total, including the approximately 27 MB shared same-origin WASM. No API key, backend, WebGPU or paid provider. No remote inference path.
- Model downloads fetch files only. User content stays in page/worker memory; it is not uploaded or automatically persisted. Cache API retains model/worker/runtime assets, not documents. Downloads and clipboard are explicit local actions. No credentials are included.
- Modern browser needs module workers, WebAssembly SIMD, Cache API for offline reuse and several hundred MB memory. Desktop Chrome CPU inference tested; Chrome touch emulation is NOT physical-phone testing. Other browsers and low-memory devices unverified.
- Cache behavior: after a successful online run, a fresh worker can run actual inference offline inside the already-open warmed page. Offline reload/navigation/app-shell startup is NOT promised. Eviction/private browsing may require downloading again. Clear site data to remove cached model/runtime.
- Runtime factory bundled under this app; byte-identical WASM reused at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that immutable collection path. Worker/runtime cache names are app-specific.
- Visible download/batch progress, 180-second timeout, cancel terminates workers; run identities guard late workers, imports and downloads. Errors offer retry, never fake AI. Malformed vectors/counts, unsupported files/devices and oversized inputs are blocked.

## Deterministic statistics and limits
Pooled rate = total defective / total inspected. Baseline = unweighted mean of each lot's defective/inspected ratio. Wilson interval uses z = 1.959963984540054, with the standard score interval formula. Its 95% label is approximate frequentist coverage, not a confidence score for AI nor a 95% probability statement about the true rate. Zero defects still has a positive upper endpoint. Rounding is display-only; exports retain numbers.

Require independent, representative, non-overlapping units from comparable stable processes. Count defective units, not multiple defects per unit. IDs prevent duplicate records, not duplicated physical inspections. The app cannot verify sampling quality, bias, clustering, stationarity or unit identity. A threshold is a planning goal, not a legal standard. Intervals crossing the threshold mean inconclusive comparison, not evidence of equality. Do not claim measured improvement or time savings from synthetic scenarios.

## Build and validation
React + Vite, base `/daily-app2/20261113-2/`. `npm install`; `npm run predeploy`. Required per-app `deploy` exists but publishing must use the ROOT combined-site workflow, not this app's gh-pages command. See `VALIDATION.md`, browser evidence and test sources for observed results and untested scope.
