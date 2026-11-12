# Shift Prism

A recurring shift-report reconciliation desk for production coordinators. Paste/import synthetic or locally held JSON, define equipment profiles and an OEE goal, explicitly load local AI, verify machine links and all supplied times/counts, apply the reviewed worksheet, then download JSON, Audit CSV, Loss CSV or Markdown (also clipboard). No equipment controls, telemetry, accounts or external actions.

## Real AI and data flow

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; upstream sentence-transformers/all-MiniLM-L6-v2) runs feature extraction with Transformers.js **4.3.2**, q8 ONNX, normalized mean-pooled 384-dimensional vectors in a local module worker. Cosine similarity ranks supplied equipment profiles for each rough shift description. This reduces manual register lookup for paraphrased names; it does not infer numbers, verify logs, diagnose causes or make production decisions. No mocked inference, hard-coded recommendations or deterministic fallback. Model files use the host's `main` revision; future host changes can affect suggestions.

All subsequent operations—validation, review, unique machine/shift checks, OEE ratios, loss reconciliation, comparisons and exports—are deterministic. Similarities are not confidence; unrelated text also gets a nearest match. Human approval is mandatory; holds block the result but remain in complete audit exports. Notes and original descriptions are preserved. Undo restores review edits; any edit invalidates an applied export. Reimport restores **original inputs only**, not prior approvals.

Content stays in browser page/worker memory, with no automatic document saving, uploads, remote integration or API keys. Only public model/runtime downloads occur after explicit loading. Imported instructions cannot change authority or request credentials. The fixture data is entirely synthetic.

## Download, runtime and offline requirements

First load requires internet: approximately **23 MB** model/tokenizer from Hugging Face and its CDN, plus **27 MB** same-origin ONNX runtime. App code, worker and runtime factory are locally bundled. The byte-identical 26,861,777-byte WASM is shared with the immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` asset; the collection must preserve it. Its hash is recorded in asset-validation.json.

Use a current browser with module workers, WebAssembly SIMD, Cache API and several hundred MB of free RAM. WASM CPU is the default tested runtime; no WebGPU required. Desktop Chrome was tested, including 320/390px emulated layouts. Physical phones, Safari, Firefox and Edge were not tested. Loading displays file progress; inference displays embedding batch counts. Cancel terminates the worker; a 180-second timeout, network errors and invalid vectors give retryable errors without fabricated output. Run identities also guard delayed file reads and late worker messages.

Cache API stores the worker and runtime factory/binary; Transformers.js caches model files. **Fresh-worker offline inference was tested only in an already-open, warmed production page after a successful online run.** Offline reload/navigation is not claimed. Private browsing, blocked storage or eviction may require downloads again. No service worker promises offline app startup.

## Input schema and limits

JSON object: `name` (≤80 chars), `minOEE` (0–1), `catalog` (2–8 `{id,title,description}` profiles), `records` (1–24 shifts). Records have unique safe `id`, `text` ≤400 chars, `shift` ≤40 chars, `planned` and `run` minutes, `ideal` seconds/unit, and integer `total` and `good` units. See both UI examples or `src/core.js`.

Original input ≤24 KB; JSON import/audit envelope ≤1 MB. Four texts per inference batch, 256-token limit. Planned minutes 0.01–1440; run >0 and ≤planned; ideal seconds 0.001–3600; total 1–10 million; good 0–total. Ideal×total must not exceed run seconds (tiny floating tolerance). Empty/negative/nonfinite values, impossible performance and duplicate IDs are rejected. Each reviewed machine/shift pair must be unique. Full-idle/zero-production shifts are unsupported; use this worksheet only for positive-production segments. Assign distinct IDs to genuine nonoverlapping product-change segments; human verification must catch overlap and semantically duplicate reports. JSON only—CSV, spreadsheets and PDFs cannot be imported.

## Calculation and review

For every shift, ideal total minutes = ideal×total/60, ideal good minutes = ideal×good/60. Pool sums before calculating:

- A = run / planned; P = ideal total / run; Q = ideal good / ideal total.
- OEE = A×P×Q = ideal good / planned.
- Stop = planned−run; speed = run−ideal total; reject = ideal total−ideal good.
- Stop + speed + reject + ideal good = planned minutes.

For mixed cycles, Q is **ideal-time-weighted**, not a raw good-count fraction. Machine-level summaries keep equipment separate; overall values are aggregate equivalent productive minutes, not an interchangeable-output count or plant throughput metric. Absent catalog machines show no estimate. Baseline is the unweighted mean of shift OEE values, which can differ because long and short shifts receive equal weight. A second exact-title lookup baseline measures naming coverage, not accuracy. Targets are user-supplied; no universal benchmark, time saved, causal diagnosis, forecast or productivity improvement is asserted.

Verify time basis, cycle standards, good/reject definitions and complete/nonoverlapping coverage. These are descriptive numbers, not validated operational evidence. Rounded displays retain full precision in JSON. Approve every row or hold uncertain links, then Apply. There is no bulk approval shortcut in the product.

## Actual artifacts

JSON preserves all originals, reviewed values, decisions, semantic evidence and released or blocked calculations. Audit CSV preserves every shift including holds. Loss CSV is enabled only for released snapshots and contains pooled plus machine summaries. Markdown includes all reviewed records and the pooled result. Text CSV cells beginning with spreadsheet formula characters are apostrophe-escaped, including multiline text; numeric columns remain numeric. Reimport JSON reruns matching from originals and requires fresh approval. CSV/Markdown are handoff artifacts, not import formats.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. Vite base is `/daily-app2/20261112-23/`. Per-app `predeploy` and `deploy` scripts exist as required, but **publish only from the repository root** via its combined `deploy/` workflow. Do not deploy this app alone over the collection.

Validation: `node core-test.mjs`, real production-browser `node browser-test.cjs` (Chrome/Playwright path is local environment-specific), `node defensive-test.cjs`, stale/import/download suites, `python3 artifact-test.py`, asset scan and gallery tests. See [VALIDATION.md](VALIDATION.md) and machine-readable observations for actual outcomes and scope.
