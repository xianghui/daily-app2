# Criterion Canvas — UNPUBLISHED DRAFT


**Not published.** Three GitHub Pages builds succeeded but deployments timed out during file synchronization. The new public URL remained HTTP 404, so public inference/assets could not be verified. This tested draft is excluded from the completed gallery and restored combined deployment. See [publication status](publication-status.json), [attempts](hosting-attempts.json) and [observed validation](VALIDATION.md). Fix hosting, rebuild without the draft banner and repeat all public asset/inference/gallery checks before promotion. The candidate added only 887,438 bytes and already reuses shared WASM; reducing its model cannot fix the observed provider synchronization failure without removing unrelated existing apps.

A private decision-matrix worksheet for community project coordinators comparing venues, newsletter tools or other low-stakes alternatives. Rough notes rarely repeat the formal criterion title: real local AI retrieves a likely criterion, while the user supplies and verifies all options, ratings and preferences. The output is a traceable weighted comparison, completeness audit, equal-weight baseline and leave-one-criterion-out sensitivity sheet—not an automated verdict.

## Workflow

1. Load either synthetic example, paste JSON or import a JSON audit. Define 2–8 options and 2–8 criteria, each with a positive integer weight (1–100), an explicit definition and a comparable anchored 0–10 **higher-is-better** score scale. Each source note includes an explicit option ID and integer score 0–10. AI never invents a rating.
2. Explicitly select **Load AI & reconcile evidence**. Review each original excerpt, ranked criterion definitions and cosine similarities. Correct the option, criterion or score; approve or hold every note. Scores and weights are user judgments, not AI measurements. Negated/unrelated evidence must be manually corrected or held.
3. Apply the reviewed worksheet. Exactly one approved note per option–criterion cell is required for ranking. Missing and duplicate evidence blocks comparisons rather than silently filling zeros or averaging. Consolidate competing evidence in the original JSON if necessary and rerun. Every edit invalidates applied exports; undo restores the prior review layer. Original input never changes through review edits.
4. Compare exact integer weighted numerators/denominators, equal-weight scores and scenarios omitting each criterion. Ties retain all leaders. These are additive, compensatory preference calculations, not predictions, probabilities, safety judgments or objective supplier quality. Translate raw cost into a higher-is-better benefit score yourself; raw costs and mixed scales are unsuitable.
5. Download complete JSON, complete row-level CSV or Markdown containing the matrix, blocked cells, comparisons and every source note. Copy exports that same current Markdown. JSON audit import restores original inputs only; it deliberately does not silently restore approvals. Export before closing: user content stays in memory.

## Real model and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 quantized ONNX. Original [sentence-transformers model card](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Dependencies and runtime licenses remain those of their respective packages (Transformers.js Apache-2.0, ONNX Runtime MIT, React MIT, Papa Parse MIT).
- Transformers.js 4.3.2 / ONNX Runtime Web performs genuine feature extraction: 384-dimensional, normalized mean-pooled embeddings, four texts per batch, first 256 tokens. Finite vector count, dimension and approximate unit norm are validated before cosine ranking. No mock, keyword classifier, canned result or deterministic substitute exists on failure.
- Model input is note text and criterion title + description. Option IDs, weights and scores are **not inferred**. Literal-title baseline hits and human-confirmed AI links quantify reconciliation coverage, not model accuracy or measured time savings.
- First load needs internet and approximately 23 MB model/tokenizer downloads from `huggingface.co` / `*.hf.co` plus approximately 27 MB same-origin WASM. Runtime code and module worker are bundled locally. The exact byte-identical shared WASM lives at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older build. `asset-validation.json` records its hash and build size.
- Tested default runtime: current desktop Chrome, WebAssembly SIMD, module workers, Cache API; CPU only, no WebGPU or API key needed. Physical phones, other browsers and memory-constrained devices are unverified. Desktop browser narrow viewports are layout checks, not device-inference claims.
- Worker source, runtime factory and WASM are explicitly cached via Cache API, while Transformers.js caches weights/tokenizer. Only **fresh-worker inference inside an already-open, successfully cached page** is tested offline. Offline reload/navigation is not promised. Storage eviction/private mode can require another download.

## Privacy, controls and limits

No remote inference, analytics, API integration or credentials. Network traffic downloads code/model files; source notes are never sent in request bodies or URLs. Downloads are not content uploads. Imported text is data, not executable instructions. App exports are local downloads/copies; it does not send messages, purchase services or change accounts.

Input: JSON only; 1–64 notes, 400 characters per note/definition, 100 per title/name, 30 per ID. Original payload ≤40 KB and imported audit ≤1 MB. IDs must be unique within each list. Scores 0–10 and weights 1–100 are integers. Context truncates after 256 tokens; keep definitions concise and English. 180-second timeout, visible download/inference progress, cancellation terminating the worker, retry, stale-run rejection and input-change invalidation. Import reads share the run identity. Worker construction/runtime/model/network/malformed-vector failures produce explicit errors and no fabricated results.

All records (including holds), original scores/options and edited review values survive JSON/CSV/Markdown. CSV quotes multiline/Unicode content and prefixes formula-like text (`=`, `+`, `-`, `@`, tab, CR) with an apostrophe. Numeric scores remain numeric. Markdown escapes user-provided syntax. No external actions are applied.

## Validation and development

See [observed validation](VALIDATION.md), `browser-validation.json`, `core-validation.json`, `network-validation.json` and `artifact-validation.json`. Successful build alone is not inference validation. Synthetic-only fixtures; no personal documents or secrets.

`npm install`; `npm run dev`; `npm run predeploy`. Keep required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only through the root combined-site workflow**. Root README specifies Pages verification. Local production fixture server: `python3 serve.py` (port 6344); browser suite: `node browser-test.cjs`; independent arithmetic: `node core-test.mjs`; runtime audit: `python3 asset-test.py`.

Known limitations: nearest semantic proposal is never guaranteed relevant; negation, multiple criteria within one note, closely overlapping criteria and evidence truth need human judgment. Tiny synthetic known-answer checks are not universal accuracy. One consolidated note per cell is deliberate; this tool does not reconcile inter-rater scores or choose rating anchors. Removing one criterion is a limited scenario, not exhaustive weight sensitivity. An apparent winner does not prove a good real-world decision.
