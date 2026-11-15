# Discovery Ledger

A local-AI multiple-testing reconciliation worksheet for experiment analysts and research operations. Match paraphrased result summaries to a **predefined complete hypothesis register**, verify identities and supplied p-values, then compare raw findings with Benjamini–Hochberg (BH) and Holm adjustments. No experiment connections, uploads, scientific certification or automated launches.

## Workflow

1. Choose a synthetic example or paste/import JSON. Supply `alpha` (strictly between 0 and 1), `families` (`id`, `label`), `hypotheses` (`id`, `family`, `label`, `description`), and `observations` (`id`, `description`, `p`). Families and the complete register must be defined BEFORE inspecting results.
2. Explicitly select **Load AI & match test summaries**. Real neural embeddings propose a hypothesis for each summary and show two source descriptions with cosine evidence. This resolves wording differences; AI does not generate p-values, validate an analysis or define families.
3. Review every identity and p-value. Approve or hold; edit identities/p-values to reset approval, add multiline follow-up notes and undo edits. Originals are preserved. Nearest-neighbor similarity is not identity, confidence or evidence of significance.
4. Apply the worksheet. Each registered hypothesis requires exactly one approved observation. Missing, duplicate or held observations block the ENTIRE affected family. No denominator silently shrinks; blocked families show no corrected results. Other complete families may be inspected separately. The full predefined register is included in export, even if blocked.
5. Export complete JSON, observation CSV, registered-hypothesis CSV or Markdown, or copy Markdown. Any review change invalidates exports until reapplied. Reimport restores original data only, not prior approvals.

## Statistical calculations and interpretation

For each ready family of m registered tests, sort p-values ascending. BH adjusted p at rank i is `min(1, min[j>=i](m*p[j]/j))`. Holm adjusted p at rank i is `min(1, max[j<=i]((m-j+1)*p[j]))`. All indices in these formulas are one-based. Compare adjusted values with the supplied alpha; the baseline uses unadjusted p <= alpha. Ties use a stable ID tie-break; adjusted values remain monotone. Zero and one are accepted supplied p-values; this app cannot verify whether zero is rounded/underflowed or scientifically valid.

BH controls expected family false-discovery proportion under independent or suitably positively dependent valid p-values, not arbitrary dependence. Holm controls family-wise error under arbitrary dependence for valid p-values. These are alternate procedures, not an invitation to select the more favorable result. Adjusted p-values are rejection thresholds, NOT posterior probabilities that a hypothesis is false. No practical-importance, power, effect-size, equivalence or causal claim follows. Nonsignificance does not establish absence of an effect. Stopping rules, missing planned tests, p-hacking, invalid individual p-values or data-dependent families invalidate interpretation; AI cannot detect these from summaries. Separate families have separate guarantees; summary counts across ready families do not establish a collection-wide error guarantee. A qualified analyst must choose an appropriate procedure before examining results.

## Real model, runtime and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, Q8 ONNX, mean-pooled normalized 384-dimensional embeddings. English intended. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT).
- No API key, backend, paid service, telemetry or optional remote provider. Inputs/reviews/results stay in page memory. Closing the page loses unsaved work. Imported text is data, never executable instructions or credential authority.
- First-use download approximately 23 MB weights + 27 MB WASM + 0.6 MB runtime/worker. Internet required to Hugging Face / hf.co CDN for model files; app/runtime are same-origin. Downloading weights does NOT upload user content. No model request occurs before explicit loading.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating builds. Hashes are recorded in `asset-audit.json`. This existing text/vector worker only embeds text and reports progress/errors; it has no content-upload tool or provider credentials.
- Worker source, WASM factory/binary and model files are asset-cached. Tested offline scope: fresh-worker inference inside an already-open warmed page with browser networking disabled. Offline navigation/reload/startup is NOT promised; cache eviction/private mode can require redownload.

## Supported devices and limits

Desktop Chrome with GPU disabled is tested; WebGPU is unnecessary. Requires WASM SIMD, module workers, Cache API and several hundred MB free RAM. Physical phones, low-memory devices and other browsers are unverified. Desktop Chrome layouts at 1440, 390 and 320 px are tested.

1–4 families; 2–12 registered hypotheses; 1–24 observations; descriptions/labels 1–300 characters; 50,000 source characters; 2 MB `.json` imports (larger audit envelope allowance). Four texts per batch, up to 36 texts. Actual tokenizer ceiling 512 tokens; the worker's pipeline `max_length:256` is not relied on as an enforced lower limit. Characters are bounded instead. Runtime setup inspection and tokenizer configuration checks are recorded separately.

Visible model progress, cancellation, 180-second timeout, download/runtime failure messages and retry. Cancel terminates the worker; monotonic run IDs guard downloads, imports and responses so late work cannot replace current input or a newer result. Invalid vector count/dimension/nonfinite/unnormalized outputs are rejected. No fake inference fallback.

## Exports and round trips

- `discovery-ledger.json`: `discovery-ledger/v1` envelope containing `originalInput`, ordered complete `reviews`, family statuses, tests, adjusted values and computed counts. Lossless originals and current review text.
- `discovery-ledger.csv`: every observation's original description/p and reviewed identity/p/decision/note. Quoted CSV handles commas, quotes and newlines. Spreadsheet-formula-leading text is apostrophe-prefixed; genuine numeric p-values stay numeric text. JSON preserves unmodified text.
- `discovery-register.csv`: EVERY planned hypothesis, family, source IDs, corrected values/flags for ready families or blocking reasons for blocked families. No missing hypothesis is hidden by dropping a source row.
- `discovery-ledger.md`: comparisons, all source/review records and an interpretation checklist. Clipboard uses the same current reviewed snapshot.

## Development and publication

React + Vite, `/daily-app2/20261116-3/`. `npm install`, `npm run dev`, `npm run predeploy`. Required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Do not deploy this app alone: root `/Volumes/ExternalHD/daily_app2` predeploy/deploy publishes the combined collection. Serve at the collection base to resolve shared dependencies. `serve.cjs` serves production builds locally (`PORT=6913 node serve.cjs`; `COMBINED=1` serves assembled deployment).

All fixtures are synthetic. See [observed validation](VALIDATION.md) and machine-readable audits for actual results and untested scope.
