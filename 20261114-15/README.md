# Budget Beacon

A local-AI SLO review worksheet for service coordinators reconciling recurring reliability exports. Rough notes use inconsistent service names; semantic inference links them to supplied definitions. Human review then enables request-weighted budget accounting, a window-average baseline and a source-linked follow-up checklist. It does not connect to monitoring systems or page anyone.

## Workflow / formats

1. Choose **Shop reliability** or **Media reliability** (synthetic) or paste/import source JSON. `project`, `periodMinutes` (1–44,640), `burnThreshold` (1–100× latest-window burn). `services` (2–6) specify `id,label,description,targetPpm` (900000–999999 good requests per million; 990000 means 99%). `records` (1–32) specify `id,description,start,end,calls,errors,owner`. Times are integer minute offsets, half-open [start,end); requests 1–10,000,000 and integer errors 0–requests. IDs unique, descriptions ≤300 characters, source ≤30,000 characters. Source or audit JSON file ≤2 MB; audit import restores `originalInput`, not approvals.
2. Explicitly **Load AI & match services**. Inspect original snippets, all service definitions and cosine rankings (not confidence). Correct any service and numeric fields. Edit owner/next-action note. Approve or hold every window; no automatic acceptance. Undo review edits. Changing input cancels the worker and clears stale reviews/results.
3. **Apply reviewed budget**. Overlaps within one approved service block application, as do invalid counts, times or pending reviews. Disjoint complete period coverage is checked per service. Holds, gaps or empty services mark the entire worksheet PARTIAL; missing data must not be treated as full-period compliance.
4. Download complete reviewed CSV, lossless JSON (originals/reviews/evidence/points/summary), Summary CSV, or Markdown follow-up checklist; copy Markdown. Edits invalidate applied exports. Every record, including holds, survives audits. Reimport restores originals and requires fresh AI/review. Spreadsheet formula-like text is escaped in CSV; JSON preserves exact original text.

## Real AI and devices

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), quantized q8 WASM CPU; normalized mean-pooled 384D embeddings, cosine service ranking, four texts/batch, 256 tokens/text. Embeddings materially reconcile paraphrased service descriptions before per-service calculations. No generated text, keyword fallback, hard-coded AI answers, API keys or remote provider path. AI does not extract/verify counts, determine truth or diagnose incidents. Negation and unrelated text can match the wrong service; every proposal requires review.

First run: internet, about 23 MB model files from Hugging Face/CDN plus 27 MB same-origin WASM and bundled worker/runtime code. Current desktop Chrome, module workers, WebAssembly SIMD, Cache API and several hundred MB available RAM recommended. WebGPU is not needed. Physical phones, Safari/Firefox and low-memory devices unverified. Failures expose actionable errors; 180-second timeout, worker termination and run IDs prevent stale writes. Model progress and batch counts are visible; cancel/retry supported.

The immutable shared binary is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve it when publishing. Worker and WASM factory are bundled locally; Cache API explicitly bridges fresh-worker offline loading. An already-open warmed page was tested with all network disabled and a new worker doing real inference. Offline reload/navigation is NOT promised; private mode/cache eviction may require redownloads.

## Privacy

Model/runtime downloads are file GETs, not content uploads. Source and reviews stay in page/worker memory; no analytics, content persistence, backend or optional remote inference. Cache stores assets only. Exports are user-controlled local downloads and may contain their source content. Imported instruction-like text has no tool authority and cannot request credentials. No real personal datasets or provider credentials are fixtures.

## Deterministic method / limitations

For each reviewed service, sum disjoint approved window requests and bad requests. Observed-request allowance = requests × (1 − target); remaining = allowance − bad requests. Fractional allowances are intentionally retained. Aggregate burn = bad-request fraction / allowed fraction. Exactly 1× spends the observed allowance; ≥1× prompts investigation. Separately compare latest-window burn with the supplied threshold. Missing coverage prompts collection before an SLO conclusion. Equal-window baseline averages each window's bad-request fraction and gives a quiet window the same influence as a busy one; it is intentionally a simple comparator.

This is an observed-request budget, NOT a fixed calendar budget or projected future allowance. Additional good traffic changes the denominator. No time-to-exhaust estimate, multiwindow alert policy, latency SLI, incident causality or live monitoring. All counts must use the same request/error definition within a service. Coverage only verifies minute intervals, not completeness of requests or source accuracy. Latest means highest ending interval after non-overlap validation. Screen figures are rounded; exports retain full calculation precision. Literal-label coverage is wording coverage, not AI accuracy/time savings. No claimed productivity percentage.

## Development / checks

React + Vite, base `/daily-app2/20261114-15/`. `npm install`, `npm run dev`, `npm run predeploy`. Required individual gh-pages scripts exist, but publish ONLY from collection root using the combined deploy directory. See [VALIDATION.md](VALIDATION.md) for actual fixtures, limitations, artifacts, defensive checks and public verification.

Validation commands: `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node stale-test.cjs`, `node import-stale-test.cjs`, `node edge-test.cjs`, `python3 artifact-test.py`, `python3 asset-test.py`. Browser scripts use the installed workspace Playwright and local Chrome; serve the production build at the script's URL (including the shared WASM app), or set `APP_URL` where supported. `gallery-test.cjs` uses the captured pre-edit gallery as its preservation baseline. Browser artifacts and screenshots are retained as observed test evidence.
