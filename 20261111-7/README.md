# Audit Orchard

Operations auditors paste a small complete record frame and process-stratum descriptions. Real local AI proposes the most semantically similar stratum for each narrative, reducing repeated lookup. The auditor approves/corrects every link or holds uncertain records. A deterministic quota planner then draws a reproducible cross-process sample and exports a usable checklist plus the complete audit frame. No compliance decisions, remote actions or risk scores are inferred.

## Distinct workflow

Earlier Queue Mosaic chooses meaning-diverse support tickets using farthest-point similarity and reviewer assignments. Audit Orchard instead requires a complete, human-labeled process frame, allocates explicit minimum/proportional quotas and uses stable seeded within-stratum selection. It measures represented-stratum counts, not embedding coverage. The reviewed strata and quota manifest are substantive new outputs, not a renamed sampling screen.

## Run / use

`npm install`, `npm run dev`; production: `npm run predeploy`. Vite base `/daily-app2/20261111-7/`. Per-app `deploy` exists for the collection contract but **publish only through root predeploy/deploy** or the gallery would be replaced.

1. Try Office operations or Community library (synthetic), or paste/import JSON with `name`, `strata: [{id,title,description}]`, `records: [{id,text}]`, `sampleSize`, `minimum`, `seed`.
2. Explicitly select **Load AI & propose strata**. Download progress, batching, cancellation and actionable errors are shown. No model host requests occur before this action.
3. Review source evidence and cosine-ranked alternatives, correct assignments and approve/hold every record. Notes support multiple lines. Editing an assignment/note resets that record's approval; any review/settings change invalidates exports. Undo restores review edits. Original source text remains untouched.
4. Adjust sample size, minimum per nonempty stratum and seed. Apply the reviewed sample. Any hold, oversized sample or infeasible minimum blocks an actionable draw (complete audit export still available).
5. Download JSON, CSV, Markdown or copy the current checklist. JSON preserves all originals, reviewed records, candidates, settings, computed quotas and baseline. CSV preserves every record and selected status. Markdown contains selected checklist and full frame. Importing an audit restores **originals only**, not approvals or revised settings; renew review and set the desired sampling parameters.

## Real AI / runtime / privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, approximately 23 MB with tokenizer/config. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev (MIT), CPU WASM; normalized mean-pooled 384-dimensional embeddings. Similarity ranks your descriptions; no hard-coded inference outputs or fallback heuristics. Generic model task only—this is not audit-specific training.
- Initial download approximately 50 MB: model/tokenizer from huggingface.co / hf.co and its CDN, approximately 27 MB runtime from same-origin collection. Code, worker and module factory bundled locally; immutable byte-identical WASM reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Preserve this asset when publishing.
- Content remains in browser memory until explicitly exported/copied. Model-download GETs do not upload text. No keys, telemetry, remote inference integration or backend. Source text cannot request credentials or change tool authority.
- Tested: headless desktop Chrome with WASM SIMD/module workers, several hundred MB available memory. No WebGPU needed. Current Chrome/Edge likely suitable; other browsers and physical phones unverified. 320/390px emulated layouts tested, not inference performance on actual phones.
- Worker source, WASM binary/factory and Transformers.js model assets use Cache API. Verified fresh-worker real inference with all network disabled **in an already-open successfully loaded page**. No service worker/offline navigation/reload guarantee. Cache eviction/private browser restrictions require internet again. Model upstream revision is not pinned: future host changes may affect reproducibility; sample reproducibility assumes identical reviewed strata, IDs, settings and implementation.
- Four texts per inference batch; first 256 tokens. 180-second model/run timeout. Cancel terminates workers and invalidates run IDs; stale worker/file/download callbacks cannot replace a newer run. Network/unsupported WASM/worker/malformed-vector failures leave no fake result.

## Bounds / validation

1–6 strata, 1–24 records; descriptions ≤400 characters; IDs 1–40 ASCII letters/numbers/underscore/hyphen, unique within each list; titles/name ≤80; original JSON ≤24 KB, audit import ≤1 MB. `sampleSize` integer 1–24; `minimum` integer 0–4; nonempty seed ≤80 characters. Unsupported CSV/PDF imports rejected. All model vectors must be finite, normalized, 384-dimensional and match the exact expected text count. Every record must have a valid reviewed stratum/decision before applying.

## Deterministic allocation and comparison

For every nonempty stratum reserve `min(minimum, population)` seats. If this exceeds the sample size, block. Each remaining seat goes to the eligible stratum with largest `sampleSize × stratumPopulation / totalPopulation − currentQuota`; ties use stratum ID. Quotas cannot exceed populations. Select within each stratum by ascending unsigned FNV-1a hash of `seed + NUL + recordID`, then ID. This is reproducible selection without replacement, **not cryptographic randomness, design-based probability sampling, a significance test, fraud detection or statistical assurance**. Change the seed to vary the draw; do not cherry-pick seeds to manufacture a conclusion. Stable IDs, not source order, drive selection.

The first-N baseline uses original order and the same requested size. Both baseline/sample represented-stratum counts are computed, not estimated accuracy. Minimum zero may omit small strata. Literal-title-match count is a separate transparent lookup baseline in JSON. Coverage can improve while labels remain wrong; mandatory human review is essential. All rows survive—including held and unselected records. Formula-like CSV strings are prefixed with an apostrophe for spreadsheet safety; JSON remains lossless.

## Observed validation / limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Two three-stratum synthetic fixtures matched all 12 known links. Their sample covered 3/3 strata versus first-N baselines 1/3 and 2/3. Expanded six-stratum/24-record fixture exposed confusion: hotel summit text ranked catering above business travel (3 repeated rows). This test verifies batching/conservation, not universal classification accuracy. A negated hotel/plumbing challenge ranked repairs; unrelated instruction-like text still got a forced nearest candidate, so use hold. No automatic out-of-domain rejection or confidence percentages.

A sample only represents the supplied frame. Missing records, overlapping process descriptions, incorrect human approvals and hash collisions can bias selection. No external system data is accessed, and no statistical sample-size recommendation is made. Human auditing remains necessary.
