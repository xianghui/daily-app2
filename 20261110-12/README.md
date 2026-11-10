# Process Ribbon

An exploratory measurement-monitoring utility for process improvement analysts. Unlike a time-study staffing app, it reconciles instrument-reading narratives with monitored characteristics and produces **frozen-baseline individuals / moving-range (I–MR) charts**. No instrument connections or external process adjustments.

## Workflow

1. Select Packing bench or Print bench, or paste/import synthetic-style JSON. Define a name, `baselineCount` (3–25), `streams` with ID/title/description/exact unit, and `notes` with ID/text/numeric value/unit/sequence. Sequence represents equally spaced readings within the eventual stream, not import order.
2. Explicitly load the real AI. It matches each note's **meaning** to supplied characteristic descriptions. It does not extract measurements or convert units.
3. Inspect cosine rankings and source definitions. Verify/edit the stream, value, unit, order and rationale; approve or hold **every** reading. Edits reset the decision and invalidate exports. Undo restores the prior review. Holds preserve originals but exclude readings from charts.
4. Apply the register. Approved readings are ordered per stream; first k freeze the baseline; later readings are checked against fixed limits. Missing data, duplicate order, gaps or zero baseline variation block the affected stream. Unit mismatch blocks application until corrected or held.
5. Export the current reviewed JSON, CSV or Markdown, or copy Markdown. JSON retains every original, candidate, review, hold and calculation. CSV preserves every record and labels signals/phase where charted; it escapes formula-like text without converting signed numeric values to text. Markdown contains chart numbers, signals and full source audit. JSON audit reimport restores **original inputs only**, never approvals. Export before closing: no user data persistence.

## Actual AI / runtime / license

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX feature extraction, normalized mean-pooled 384-dimensional embeddings. Four texts/batch, maximum 256 tokens. Longer tokenized text can truncate even within the character limit.
- Transformers.js **4.3.2** (Apache-2.0) with ONNX Runtime Web (MIT), bundled local worker and local module factory. CPU WebAssembly SIMD is the default and tested path; no WebGPU required or silent deterministic substitute.
- Before explicit loading, no model-host requests. First load requires internet: approximately **23 MB** model/tokenizer/config from `huggingface.co` and its `hf.co` download infrastructure, plus approximately **27 MB** same-origin WASM and under 1 MB app/runtime JS. Progress, cancel and 180-second timeout are visible. Size is approximate, not a measured device-download claim.
- Runtime binary reuses immutable collection file `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; do not remove it. `asset-validation.json` records byte identity and SHA-256. The per-app build rewrites emitted paths; root deployment must preserve the collection.
- Tested in desktop Chrome through real production-bundle Playwright sessions. Requires module workers, WebAssembly SIMD, secure context and sufficient memory/storage. Physical phones, Safari and Firefox are **not tested**; mobile widths are tested desktop emulation. WebGPU availability is irrelevant to this CPU path.
- Cache API stores worker/factory/WASM; Transformers.js caches model files. **Tested offline scope:** a fresh worker can perform real inference inside an already-open, fully cached page with networking disabled. Offline navigation/reload is not promised; cache eviction, private mode and denied storage may require internet again. No service-worker app-shell promise.

## Privacy and authority

Weights download to the device; **note content is not uploaded**. No remote inference, credentials, analytics or optional provider integration exists. Network capture through model execution verifies GET-only asset downloads with no bodies or fixture content. Imported text is embedding data, not executable instructions or a source of tool authority. Only synthetic examples/fixtures are included. Runtime failure produces an actionable error, never fake suggestions.

## Deterministic calculations and limits

After mandatory human review, first k approved readings (unique consecutive sequence, consistent exact unit) supply mean `center` and average absolute adjacent difference `MRbar`. I-chart limits are `center ± 2.66 × MRbar`; MR upper limit is `3.267 × MRbar` (conventional rounded moving-range n=2 factors). Monitoring starts after baseline; the first later moving range includes the final baseline reading. Strictly outside limits signals; equal limits do not. Later readings do not refit limits. I and MR flags can overlap. Exact numbers and flags are exported and shown alongside an accessible I-chart with a textual reading list.

Assumptions: independent, equally spaced single measurements from one unchanged process; consistent units and instrument resolution. Holding an interior reading blocks a chart for a sequence gap. Do not conceal omissions by renumbering. Baseline anomalies are not automatically screened. No run rules, capability indices, specification/tolerance checking, defect probabilities, causal diagnosis or automatic adjustments.

**Small baseline warning:** operational control charts normally need at least 20–25 representative baseline observations. This bounded worksheet supports reconciliation and investigation; baselines under 20 observations give preliminary, unstable limits. Even with a longer baseline it is not quality certification or production release authority.

Limits: 1–8 streams, 1–64 notes, 400-character notes/descriptions, 100-character titles/name, 30-character IDs, 20-character units. Finite numeric values ±1,000,000; integer sequence 1–1,000,000. Original JSON ≤40 KB, imported audit ≤1 MB; no CSV/PDF input. Per-run IDs, terminated workers and guarded file reads prevent stale runs from replacing current inputs. Review rationale ≤500 characters. No real personal datasets or secrets.

## Comparison and validation

Literal-title hits are a simple reconciliation baseline. Human-confirmed AI proposals measure reviewed link coverage, **not confidence, measured accuracy or time savings**. Both tiny synthetic examples have zero literal-title hits and ten confirmed links; each repeats two note phrasings across five readings. This is **four unique phrasings**, not twenty diverse cases.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed tests and limitations, including negation/unrelated failures. Export checks independently parse downloaded artifacts in Python. Build commands: `npm install`, `npm run dev`, `npm run predeploy`; required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish only via root combined-site workflow**, never this app's deploy script. Vite base is `/daily-app2/20261110-12/`.
