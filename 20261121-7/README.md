# Joint Signal

A local-AI paired-measurement recheck utility for workshop QA and data reviewers. It catches combinations that separate marginal checks can miss, without declaring defects or deleting observations.

## Workflow
1. Load either synthetic fixture or paste/import source JSON. Define 2–12 process groups, their X/Y units, independent reference readings and new check readings. Set a review radius and correlation shrinkage.
2. Explicitly **Load AI & reconcile**. Review each proposed group against original text and cosine evidence. Correct group, readings and reference/check role; approve or hold every row. Hold ambiguity and unrelated material.
3. Apply reviewed checks. Approved reference rows alone define means, sample SD and correlation. Check rows never train the baseline. Review joint-only cues alongside marginal checks, then investigate units, pairing and source evidence manually.
4. Download JSON, Audit CSV, Check CSV or Markdown, or copy the current Markdown worksheet. Edits invalidate the applied snapshot. Undo restores the last review state but requires reapplication. JSON imports restore originals only, never old approvals.

## Real AI and static runtime
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, mean-pooled normalized 384-dimensional embeddings. Main is unpinned; observed revision and hashes in `runtime-dependency-audit.json`.
- Transformers.js 4.3.2, ONNX Runtime Web WASM CPU, single thread. No WebGPU, server, paid provider or API key.
- AI proposes semantic process identities; it does **not** classify statistical defects, infer numeric readings, determine whether references are valid or execute imported instructions. Subsequent schema validation, ranking, review, covariance math and exports are deterministic.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/assets. The worker protocol is `{id,texts}` → progress/batch/result with normalized vectors or error. Source and complete dependency paths were inspected and revalidated.
- First explicit run needs internet for about 23 MB model weights/tokenizer plus 27 MB CPU runtime and ~0.6 MB worker/factory. Model-host GETs go to Hugging Face/CDN; user text goes only to the local worker, never network URLs or bodies. No telemetry or optional remote inference. Imported strings cannot request credentials or authority.
- Worker/factory/WASM are explicitly cached with Cache API; model assets use Transformers browser caching. An already-open, successfully warmed page was tested offline with a newly created worker. Offline reload/navigation is **not** promised; storage eviction/private mode may force downloads again. Source/reviews are memory-only until exported. Audits contain the original content: protect them appropriately.
- Modern secure-context browser with module workers, WASM SIMD, Cache API, several hundred MB free memory; headless desktop Chrome CPU tested. Physical phones, Safari/Firefox/Edge, assistive technology and all-device performance are unverified. Responsive Chrome widths 320/390/1440 tested. Unsupported runtime/network errors are explicit, with cancel/retry and no fake fallback.

## Schema and limits
JSON source up to 60,000 characters; `.json` import under 2 MB, including exported audit envelopes. `context`: 1–300 characters; `ridge`: 0.01–1; `radius`: 1–10. `groups`: 2–12 entries, each `{id,text,xUnit,yUnit}`; text ≤300 and units ≤30 characters. `records`: 1–48 `{id,text,x,y,role}`, where role is `reference` or `check`; finite numeric X/Y within ±1,000,000. IDs are letter-first ASCII letters/digits/underscore/hyphen, up to 40 characters, unique within each collection. Review notes up to 1,000 characters.

Four texts per model chunk; 60 texts maximum. Each text ≤300 characters; actual tokenizer model ceiling 512 tokens. The pipeline's `max_length:256` argument is ignored by this feature-extraction implementation, so it is **not** claimed as an enforced cap. A 180-second timeout, monotonically changing run IDs, guarded file/worker fetches and terminating workers prevent stale/cancelled responses replacing current results. Finite normalized 384-D vectors and evidence/row schemas are validated. Unknown formats, empty/oversized inputs and malformed vectors are blocked.

## Deterministic method and comparison
For each group, require ≥4 independent approved stable-process reference observations and nonzero variance on both axes. Standardize checks with reference means and sample standard deviations (n−1). Let r be reference Pearson correlation and ρ=(1−ridge)r. Then

`D² = (zx² − 2ρzxzy + zy²)/(1−ρ²)`.

Flag a joint recheck when `D² > radius²`. The baseline flags `max(abs(zx),abs(zy)) > radius` on exactly the same checks. Equality is not flagged. The joint-only count is computed, not an invented accuracy/time improvement. Means, sample SD, raw/shrunk correlations and individual distances are exported for inspection. Unavailable groups remain explicit rather than generating numbers.

This is an exploratory regularized Mahalanobis distance, **not** a calibrated probability, p-value, confidence interval, false-alarm rate, automatic fault detector or release criterion. Shrinkage prevents singular inversion but cannot repair contaminated, dependent or unrepresentative reference data. Small samples, repeated specimens, nonlinear patterns, outliers, mixed units and AI identity errors can mislead. Units are labels with mandatory review; there is no automatic conversion or duplicate-specimen detection. No causal or quality assurance claim.

## Artifacts and build
- JSON `joint-signal/v1`: original input, all reviews/holds, computed groups and complete point evidence.
- Audit CSV: every source and reviewed record; quoted commas/newlines, finite signed numeric fields, leading formula-like strings escaped for spreadsheet safety.
- Check CSV: every approved assessed check; unavailable/no-check groups have explicit sentinel rows, not fabricated readings. Held/reference originals live in JSON/Audit CSV.
- Markdown: source-linked review plus current distances/counts and limitations.

CSV formula-escaping intentionally changes dangerous string prefixes; JSON retains exact strings. Reimport audit JSON restores only original source fields. No remote modifications, messages or equipment access.

React 18 + Vite; React 18 keeps the new app under the existing near-full collection's unchanged 1 GB guard without removing earlier apps. `npm install`, `npm run predeploy`; per-app required deploy script retained but **publish only through the repository root combined deploy**. See `VALIDATION.md` for observed tests, not universal claims.
