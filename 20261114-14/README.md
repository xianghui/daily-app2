# Drift Orchard

An exploratory process-variation worksheet for workshop coordinators. Repeated notes use inconsistent names; real local AI reconciles those notes with supplied process definitions before a human verifies sequence and measurements. Unlike a spec-only register, the reviewed worksheet examines individuals and adjacent moving ranges.

## Use

1. Choose either synthetic example or paste source JSON. `features` (2–6) define `id,label,description,unit,center,tolerance` (positive specification half-width). `records` (1–32) contain `id,sample,description,a,b,owner`: `a` is a positive integer sequence and `b` is the numeric reading. Maximum 300 characters/description and 30,000 source characters. JSON file imports up to 2 MB accept source or an exported audit's `originalInput`.
2. Explicitly load AI. Review every proposed process, source snippet, cosine evidence, reading, sequence, unit and sample identity. Change a process to reject AI; approve or hold every row. Undo restores the previous review. Source changes cancel and invalidate the entire run.
3. Apply reviewed drift. Duplicate approved sequence or sample IDs within a process block application. Each represented process requires three approved readings (an arithmetic minimum, NOT sufficient study size). Holds remain in every audit and make it PARTIAL; retained observations bridge sequence gaps.
4. Download JSON (originals, reviews, evidence, ordered points and summaries), complete reviewed CSV, Summary CSV or Markdown; copy Markdown. Review edits invalidate applied exports. Audit imports restore originals only and require fresh inference/review. No external equipment changes, uploads or releases.

## Real AI / runtime

`Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.x (Apache-2.0) with ONNX Runtime Web (MIT), q8 WASM CPU, normalized mean-pooled 384-dimensional embeddings; four texts/batch, bounded 256 tokens/text. Model embeddings and cosine ranking match descriptions to definitions. Similarity is NOT confidence, truth, unit detection or numeric extraction. Even unrelated notes receive a candidate; mandatory human review/holds is essential. No generative instruction execution. No API keys or remote inference path.

First use requires internet: approximately 23 MB model files from Hugging Face/CDN, 27 MB same-origin CPU WASM plus local app/worker/factory code. Runtime code is bundled; immutable shared binary is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that published path. Current desktop Chrome with module workers, Cache API and WASM SIMD; several hundred MB available RAM recommended. No WebGPU required. Physical phones, other browsers and low-memory devices unverified. Failures never switch to fake results. A 180-second timeout, worker termination and run identities protect against cancelled/stale writes.

Cache API stores model/worker/runtime files, not input. An already-open warmed page was tested with network disabled and a fresh worker performing real inference. Offline reload/navigation is NOT promised. Cache eviction/private browsing may require downloads. User content stays in page/worker memory; downloads fetch only fixed model/runtime assets. No analytics, provider credentials, storage of inputs or uploads. Exported files are user-controlled.

## Deterministic calculation and limitations

Sort approved readings by sequence within each reviewed process. Mean MR is the mean absolute adjacent difference. Individuals limits = mean ± 2.66 × mean MR; MR limits = 0 to 3.267 × mean MR. Strictly outside a limit produces an investigation signal. Specification bounds are supplied center ± tolerance, independently defined. A spec-only baseline counts in-spec readings; the I-MR view can expose unusual variation inside specs. Displayed literal-label coverage measures wording only, not AI accuracy or time savings.

These limits are estimated from the SAME series, exploratory rather than validated monitoring limits. Collect an appropriate stable representative baseline (commonly at least 20–25 readings), verify sampling and investigate causes. Three-point examples demonstrate arithmetic only. Serial dependence, mixed processes, skew and changing conditions can invalidate interpretation; no stability guarantee, capability/Cpk, run-rule detection, certification or automated release. No unit conversion, timestamp inference or baseline training split. Plot uses equally spaced retained sequence order, with exact sequence numbers below. Means/ranges retain full precision in exports; screen values are rounded.

## Development / verification

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Required per-app deployment scripts exist, but publish ONLY via the collection root combined deployment. See [VALIDATION.md](VALIDATION.md) for measured results, tests, artifact checks and public verification status.
