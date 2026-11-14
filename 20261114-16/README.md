# Alert Orchard

A repeatable QA worksheet for analysts auditing alert detectors (message filters, duplicate-bill rules). Rough tally descriptions often use different names for the same detector. Local semantic inference proposes the rule; the analyst verifies identities, actual/alerted labels and counts. The reviewed worksheet exposes precision/recall and the false-alert workload hidden by accuracy.

## Workflow and formats

Choose a synthetic example or paste/import source JSON. Set `volume` (population per rule, 1–10,000,000) and assumed `prevalencePpm` (0–1,000,000; 10000=1%). Define 2–6 rules with ID, label, description. Supply 1–32 mutually exclusive tally records with ID, description, boolean `actual`, boolean `alerted`, integer `count` (1–10,000,000) and owner. Descriptions ≤300 chars, source ≤30,000 chars. Files must be JSON ≤2 MB; audit envelopes can exceed source limits but their extracted originals must satisfy them.

Click **Load AI & match rules**. Inspect ranked source definitions and cosine similarities; these are not calibrated confidence. Change assignments to reject suggestions, edit labels/counts/owners/notes, approve or hold every row. Undo restores the previous review edit; originals never change. Apply reviewed evaluation. Edits invalidate applied exports. JSON retains originals, every review/evidence and computed metrics; CSV retains every tally including holds and formula-protects text cells. Markdown is the handoff worksheet. Copy is available in supported secure contexts. Audit reimport restores originals only and requires new inference/approval. No live integrations or external actions.

## Actual AI, runtime and privacy

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, through @huggingface/transformers 4.3.2 / ONNX Runtime Web WASM CPU. The quantized q8 ONNX weights (~23 MB plus tokenizer/config) generate normalized, mean-pooled 384-dimensional embeddings. Cosine retrieval compares each note to the supplied rule definitions. This resolves wording beyond literal label matching, not event truth or arithmetic. Four texts per batch; 256 tokens per text. Vectors must have the expected count, dimension, finite values and unit norm. Review/schema checks, confusion counts, baselines and projections are deterministic.

Internet is required initially. Model files download from Hugging Face and its delivery CDN, app/worker/runtime from this GitHub Pages collection. No keys, telemetry, uploads, provider integrations or external inference. Only synthetic fixtures are included. User content remains in browser memory and is not added to Cache API. Runtime factory is bundled; the byte-identical ~27 MB WASM is shared at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`); preserve this path. Cache API stores worker/runtime and Transformers.js caches model downloads. An already-open warmed page supports offline fresh-worker inference after an online run. Offline reload/navigation is **not** promised or tested. Cache eviction/private-mode restrictions can require another download.

Current desktop Chrome, module workers, WebAssembly SIMD and several hundred MB RAM recommended. CPU inference works without WebGPU (tested with GPU disabled). Physical phones and other browsers unverified. 180-second timeout, cancel terminates worker, run IDs prevent late worker/import/fetch writes; network/runtime/schema failures leave no fabricated output. Imported instruction-like text is data, not executable authority.

## Method and limitations

TP/FP/TN/FN are sums of approved case counts. Precision=TP/(TP+FP), recall=TP/(TP+FN), false-positive rate=FP/(FP+TN), accuracy=(TP+TN)/N. The always-negative baseline accuracy=(TN+FP)/N. Missing denominators are null/—, not zero. Projection uses supplied volume V and prevalence p: true alerts=V·p·recall; false alerts=V·(1−p)·FPR; missed=V·p·(1−recall). Both positive and negative evaluation support are required; otherwise no projection. Fractional counts are expectations, not measured events. No interval estimates, causal conclusions, production accuracy or time-saving claims.

Verify independent/nonoverlapping tallies, definitions and label quality yourself: the app cannot detect duplicate cases hidden inside aggregate counts. Holds exclude tallies and mark partial results. Missing rules show no support. A rule with high accuracy may be worse than the all-negative baseline for some purposes; accuracy alone is not an adoption rule. Scenario rate transfer and prevalence are assumptions, not forecasts. Nearest-neighbor AI always proposes a candidate for unrelated text and struggles with negation; mandatory review/hold is essential. Not a medical tool or automatic decision-maker.

## Build, deployment and validation

React + Vite, base `/daily-app2/20261114-16/`. `npm install`; `npm run predeploy`. Required per-app gh-pages scripts are retained but publishing must use the repository **root** `npm run deploy` combined-site workflow. See [VALIDATION.md](VALIDATION.md) and saved test reports for observed outcomes and remaining limits.
