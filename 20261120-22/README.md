# Cohort Veil

A local, reviewed disclosure-draft worksheet for analysts preparing **small tabular extracts**. Not a data anonymizer or privacy certificate.

## Workflow

1. Load either synthetic example, paste JSON, or import a source/audit `.json` file. Describe what each column means and set a minimum group size `k`.
2. Read the download notice, then explicitly **Load AI & reconcile**. Real MiniLM embedding inference compares column descriptions with three disclosure-role definitions: direct identifier, quasi-identifier (indirect attribute), and analysis payload. It is semantic assistance beyond column-name keyword checks; no hard-coded responses or deterministic AI fallback.
3. Review the original sample cells, all three cosine scores and definitions. Correct each role and choose drop, exact keep, constant `*`, or numeric fixed-width bins. Confirm every column with approve or hold. **Direct identifiers cannot be kept; held columns are excluded.** At least one retained reviewed quasi-identifier is required. Payload may itself be identifying: inspect it, not just the schema.
4. Apply reviewed checks. Compare below-`k` row counts using the same quasi columns with exact values versus chosen generalizations. All rows in a generalized group below `k` are suppressed from the draft. Group size and the smallest retained group are calculated, not confidence, population uniqueness, or reidentification-risk estimates. No fabricated time savings or accuracy claims.
5. Inspect groups and draft preview. Download/copy **Draft CSV**. Review edits disable all exports until reapplication; undo restores the previous policy. Export before closing: no application data is auto-saved.
6. The optional **sensitive JSON and Audit CSV contain all original cells**, dropped identifiers and suppressed rows. Keep these private; they are not the draft. Markdown contains original column descriptions and review notes. Audit import restores originals only, never prior approvals.

No remote sharing, actual release, deletion, file mutation, account action or external sending is performed.

## Real AI and assets

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0, [model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), distilled from the Sentence Transformers MiniLM family.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web, MIT; CPU/WASM, `q8`, mean pooling and normalization; finite normalized 384-dimensional vectors validated before use.
- First download approximately **23 MB model plus 27 MB runtime**, with initial internet required. Some browsers need several hundred MB working RAM. No API key, paid service, WebGPU or backend. Default path is always local inference, never a silent heuristic/demo replacement.
- Shared, byte-audited immutable same-origin dependencies: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve the originating apps. Worker source was inspected for the text/vector protocol and complete dependency paths. Hashes and observed model revision: [runtime audit](runtime-dependency-audit.json).
- Four texts per inference batch. Maximum 15 texts (three roles + twelve columns), four batches. Descriptions ≤300 characters. Actual tokenizer `model_max_length` is **512**, rechecked remotely; the pipeline's supplied `max_length:256` is not an enforced feature-extraction token cap. No long-document or reasoning ability is implied.
- The model's `main` is unpinned and can change; observed revision is recorded, not claimed enforced. Similarity is not confidence. The model does not inspect cell content for identities or reliably interpret negation, language/domain nuances or malicious prose.

## Devices, network, caching and privacy

Requires a current secure-context browser with WebAssembly SIMD, module workers, Cache API for offline caching, and sufficient RAM/storage. Desktop Chrome CPU with GPU disabled was exercised. Physical phones, Safari, Firefox and low-memory devices were not tested; phone-width responsive views were tested on desktop Chrome.

Explicit AI loading fetches only static model files from `huggingface.co` and its CDN (currently `cas-bridge.xethub.hf.co`), and same-origin runtime assets. **Model download is not content upload.** Column descriptions are passed to a local worker; cell data never leaves the page. Request method/body/URL assertions found no data transmission. No analytics, remote AI provider integration, credentials or browser persistence for user records.

Worker source, runtime factory/binary and model files use Cache API, subject to eviction. Successfully warmed, **already-open page** fresh-worker inference was tested with all network disabled. This does not promise offline navigation, reload, installation or first load. A private-browsing session, eviction or cleared cache may require another download. No service worker is provided.

Loading displays per-file progress and inference batches. Cancel terminates the worker, input changes invalidate active work, and run identities guard late responses and asynchronous file/worker fetches. A 180-second timeout, worker construction/error handling, invalid vectors and download failures produce actionable errors without results. Retry reruns genuine inference. Imported instructions are inert data, not tool instructions.

## Formats and bounds

Source JSON: `context` (1–300 chars), `k` (integer 2–20), `minSimilarity` (0–1), `columns` (2–12 unique safe IDs, `description`, `type`), `records` (1–100 exact-schema objects). Types: `text` ≤300 chars per cell; `number` finite ±1 billion. No null, nested, extra or missing cells. Column IDs start with a letter, followed by letters/digits/underscore/hyphen, maximum 40 chars; prototype-related IDs are blocked. Source ≤50,000 characters overall. `.json` import ≤2 MB allows audit envelopes but reconstructed source must satisfy source limits.

Fixed-width numeric bins are anchored at zero, lower-inclusive and upper-exclusive. Width 10 maps 23 to `[20, 30)`, −1 to `[-10, 0)`. Width .001–1 billion; absolute value/width <1e12. JavaScript floating-point boundaries apply; avoid decimal-boundary cases without independent checks. Constant masking replaces the entire selected column with `*`. Dropping and holds remove a column from the draft. No cell values are automatically fabricated or edited.

Draft CSV contains current retained rows, in original relative order, and current approved/non-dropped columns only; **no source row index** is added. Audit CSV preserves every source record as exact JSON plus group size/status and transformed draft cells, including suppressed cells. Full audit JSON preserves originals, policy reviews, scores, transformed draft, groups and status for every row. CSV quotes commas, quotes and newlines; string cells beginning `= + - @ TAB CR` receive a spreadsheet-safe apostrophe, including multiline formula-like strings. Numeric negatives stay numeric. The exact original string is retained in audit JSON. Header-only Draft CSV is valid when all rows are suppressed.

## Method and limitations

After human review, equivalence groups are exact JSON tuples of retained quasi attributes. All members of a group with size less than `k` are removed from the draft; others retained. Generalization does not make exact duplicate tuples distinct. Baseline compares exact originals on **the same reviewed quasi columns**, not an unreviewed AI or legal benchmark. The comparison measures retained utility under the chosen rule, not safety.

This is not a complete anonymization, l-diversity, differential privacy, linkage, semantic-identification, legal compliance or disclosure-risk evaluation. A payload/free-text field may reveal identity or sensitive attributes. Missing quasi attributes, external information, homogeneous responses, population rarity and longitudinal linkage are not addressed. Masking all quasi attributes trivially makes one large group without proving privacy. Treat output as a draft for your actual disclosure process. Tiny synthetic fixture success is not universal model accuracy.

## Development and publishing

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app `deploy: gh-pages -d dist` remains present but **do not run it**: publish from root using the combined collection workflow. Vite base `/daily-app2/20261120-22/`. Shared runtime must be served alongside this app; `python3 serve-test.py` serves production builds and shared assets at port 7072.

See [observed validation](VALIDATION.md). Test fixtures and exported artifacts are synthetic only.
