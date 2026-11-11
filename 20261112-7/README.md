# Margin Weft

Crossed-margin feedback weighting for workshop evaluators. Unlike one-axis weighting, this worksheet iteratively balances *both* delivery format and experience margins while preserving the observed joint-table association. Source cohort reconciliation uses real local AI; all estimation is deterministic and requires review.

## Workflow

1. Choose either synthetic fixture or paste/import JSON. Specify `rowTargets`, `columnTargets`, a complete crossed `catalog`, disjoint `records` with explicit `members` and mean `rating`, and `maxWeight`.
2. Click **Load AI & reconcile reports** after reviewing the download notice. Inspect candidate descriptions and cosine similarities, correct both-axis cell assignments, counts and ratings. Approve or hold every record; undo is available.
3. Apply the reviewed worksheet. Inspect raw and row-only means, both-margin residuals, candidate weights and Kish effective N. Impossible/slow fits and weight-guard failures expose diagnostics but release no fitted estimate. Held cohorts make output provisional.
4. Download current complete JSON, audit CSV or Markdown; copy Markdown. Editing invalidates the worksheet. JSON reimport restores original inputs only, not old approvals. No external sending or account actions.

## Real AI / static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Model cards and upstream licenses remain authoritative.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), CPU WASM SIMD. Model creates normalized mean-pooled 384-dimensional embeddings; cosine retrieval ranks crossed catalog descriptions for each cohort. Similarities are not confidence. It does not generate counts, ratings or representative-population claims.
- ~23 MB model/tokenizer downloads from huggingface.co / hf.co and their download CDN plus ~27 MB WASM. First load needs internet, module workers, WASM SIMD and several hundred MB RAM. No WebGPU or key required. Desktop Chrome tested; physical phones/other browsers not tested.
- Runtime factory is bundled under `runtime/`; worker locally bundled. Byte-identical shared WASM is reused at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that immutable earlier build.
- Cache API caches worker/factory/WASM; Transformers.js caches weights. Fresh-worker offline inference was tested **only inside an already-open warmed page**. Offline reload/navigation is not promised. Eviction/private browsing may require redownload. Cancel kills the worker; run IDs guard late file reads/downloads/results. Timeout is 180 seconds. No fake fallback.

## Privacy / limits / format

No remote inference, provider credentials, analytics, or user-content uploads. Only model/runtime files download after explicit processing. Content and review state are in memory; exports are user-initiated. Use aggregate nonpersonal cohorts; fixtures are synthetic. Imported instructions are data, not authority.

Original JSON ≤18,000 characters; audit envelope ≤1 MB. Two or three groups per axis, at most six crossed cells (2×2, 2×3 or 3×2), 1–24 cohorts. Text ≤400 characters; model context 256 tokens and batches of four. Respondents and positive target counts 1–1,000,000; ratings 1–5; maxWeight 1–100. Unsupported CSV/PDF imports are rejected. CSV export quotes multiline fields and guards spreadsheet-like text, keeping numeric fields numeric. JSON retains all originals, held rows, target margins, candidate evidence and reviewed values.

## Deterministic fitting / caveats

Normalize each target axis separately. Start from approved sample shares and alternate row/column scaling. Stop when every absolute margin error ≤1e−8, or after 1,000 rounds. Empty cells remain zero. No observations in a positive target group, nonconvergence or a relative weight over `maxWeight` blocks the released mean and effective N. Candidate diagnostic shares are clearly labeled and exports include `fit.usable`. A missing cell may force a boundary solution that converges too slowly; this conservative tool blocks it rather than claim infeasibility is mathematically proven. Held cohorts do not contribute.

Mean = sum(fitted cell share × reviewed cell mean). Relative weights = fitted/sample share; Kish N = total approved N / sum(sample share × weight²). The baseline scales only row groups; the raw baseline applies no weights. Combined L1 error sums absolute residuals across both margins. Targets matching is not accuracy, fairness, bias elimination or measured time saved. No confidence intervals, variance estimation, causal effect or significance claims. Counts must be disjoint and survey scales consistent; the app cannot detect duplicate respondents.

Joint-cell MiniLM inference is imperfect: on eight deliberately paraphrased fixture cohorts it suggested five intended cells, confusing some delivery/day distinctions. Mandatory review corrected the three errors. Unrelated/negated content still receives a candidate: hold it. Do not use unverified AI identities or synthetic population targets in reporting.

## Development / verification

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Required individual deploy script exists but **publish only through the collection root**. Base `/daily-app2/20261112-7/`. See VALIDATION.md and machine-readable reports for actual checks, not universal guarantees.
