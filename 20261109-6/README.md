# Privilege Quilt

A local-AI access-planning desk for small-team onboarding coordinators. Turn natural-language duties into verified permission needs, then find a bounded role bundle. No account, directory or external service is connected or modified.

## Workflow

1. Load either synthetic example or paste/import JSON (schema `privilege-quilt/v1`). Needs and permissions have unique `id`/`text`; roles have unique IDs and lists of permission IDs. Set `maxExtra` (0–12) and `forbidden` permission IDs.
2. Explicitly choose **Load AI & match needs**. Review source definitions and cosine evidence. Change incorrect permission links, then approve each or hold it. Every link change resets approval; notes, holds and originals survive exports. Undo restores the previous review state.
3. Apply the reviewed bundle. All needs must be reviewed. A deterministic exhaustive search over at most 4,096 role subsets rejects forbidden permissions and extra-access cap violations, then minimizes distinct extra permissions first and role count second. Ties use input role order. Required permissions are the union of approved needs; holding a need does not revoke privileges incidentally included in a role.
4. Inspect every granted and extra permission. Export JSON, CSV or Markdown, or copy the report. Any review edit invalidates the applied export snapshot. Reimporting an audit restores original inputs for fresh inference/review, not prior approvals.

## Real AI, runtime and licensing

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. Real learned 384-dimensional embeddings, mean pooling, normalized vectors, cosine ranking across the supplied permission definitions. No canned answers, remote inference, API key or deterministic fallback.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.30 (MIT), bundled worker and factory. CPU WASM; no WebGPU requirement. React + Vite and Papa Parse. Package lock fixes the installed runtime.
- Inference uses four-text batches and a maximum 256-token context. Count/dimension/finiteness/normalization validation precedes ranking. Limits: 16 needs, 12 permissions, 12 roles; 300 characters per passage; 40-character IDs; 50 KB workflow payload, JSON import file under 1 MB. English intended. Instructions inside imported text remain data, with no tool/credential authority.
- Baseline counts trimmed case-insensitive exact-text need/permission matches. AI proposal count, reviewed count and extra-permission count are computed, not accuracy, measured time saved or confidence. This reduces manual catalog lookup and makes unnecessary privileges visible, but does not prove access is appropriate.

## Download, devices, privacy and cache

First run requires internet: approximately 23 MB model weights + 27 MB WASM, tokenizer/config and under 1 MB app/worker/factory. Model/config download from Hugging Face and its CDN; app/runtime are same-origin. Loading displays file/batch progress; cancel terminates the worker, stale IDs cannot overwrite a new run, and 180-second timeout allows retry. Network, worker, runtime and malformed-vector failures produce errors, never fake suggestions.

The WASM is byte-identical to the collection's immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root deploy must preserve that older app. `asset-audit.json` records hashes and byte identity. Factory/worker are app-local, built for `/daily-app2/20261109-6/`.

User duties and catalogs stay in React/worker memory and intentional exports. Only static model/runtime files download; no analytics, credential fields, provider integration or content upload. Model/runtime caches store no duty content. Worker/factory/binary use Cache API; Transformers.js caches model assets. After a successful cached run, a fresh worker performs real inference with all network blocked in the **already-open page**. Offline navigation/reload is not promised. Cache eviction, private mode or site-data removal may require redownload.

Current browser with WebAssembly required; Cache API recommended. Desktop Chrome tested at desktop and 390/320px viewports. Physical low-memory phones, Safari, Firefox, assistive technology and real IAM integrations are untested. If memory fails, close other tabs or use a desktop. No WebGPU-only dependency or hidden server requirement.

## Outputs

- JSON: every original need, permission, role and constraint; all inferred evidence, reviewed links/holds/notes; complete granted/extra bundle and metrics. Original inputs round-trip.
- CSV: every duty with source, AI proposal, reviewed permission, decision, note and top cosine. Formula-leading strings are prefixed with an apostrophe, including multiline text. No duty rows are dropped.
- Markdown: manually actionable role/permission checklist, all held/approved duties and notes. Text escaped; no scripts or grants executed.

## Validation and known limitations

See [VALIDATION.md](VALIDATION.md), `browser-validation.json`, `network-validation.json`, `edge-validation.json`, `artifact-validation.json`, and `asset-audit.json`. Six simple synthetic known-answer mappings matched expectations across two unrelated domains, versus zero exact-text baseline matches. A negated deletion request wrongly matched deletion: topical similarity is **not negation reasoning, policy judgment or entitlement**. The forbidden-permission gate blocked that proposal; human hold produced an empty bundle.

Real least privilege also depends on resource scope, identity, policy, conditional/time-bound access, composite roles and separation of duties. None are inferred or certified here. Supplied catalog errors, similar permission text and missing permissions may yield unsafe proposals; verify every mapping and real role definition. Optimization is exact only for the finite provided catalog and reviewed required IDs. This utility is a planning checklist, not an access-control engine.

## Reproduce and publish

`npm install`; `npm run predeploy`; `python3 serve-test.py` (production bundle, port 6296). Then `node core-test.mjs`, `node browser-test.cjs`, `node network-test.cjs`, `node edge-test.cjs`, `python3 artifact-test.py`, `python3 asset-audit.py`. Browser tests use workspace Playwright and installed Chrome; all fixtures are synthetic. `TEST_URL`/`REPORT` run the browser suite against the public app.

Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Do not deploy the individual app.** Publish combined collection via root `npm run predeploy` and `npm run deploy`. Verify actual Pages build, public worker/factory/shared WASM hashes and real public inference, then commit/push main. No builder digest.
