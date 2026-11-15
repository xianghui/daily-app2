# Bench Reserve

For a small operations coordinator repeatedly maintaining a skills register and proposing cross-training. Import/paste JSON, set a training-hour budget and per-person capacities, run actual local AI, independently verify every person/procedure link, approve or hold evidence, apply the worksheet, inspect current and hypothetical coverage, then export. Notes are source evidence, not instructions to the application.

## Real AI and privacy

`Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0) via Transformers.js 4.3.2 / ONNX Runtime Web WASM CPU produces normalized mean-pooled 384-dimensional vectors. Cosine ranks procedure descriptions against evidence notes. No fixed response, keyword classifier or fake fallback. This is retrieval, not qualification validation. Unrelated/negated evidence still receives a nearest match; hold it or correct the link. No confidence percentages.

Runtime sources/licenses: [Transformers.js](https://github.com/huggingface/transformers.js) (Apache-2.0) and [ONNX Runtime](https://github.com/microsoft/onnxruntime) (MIT). React, Vite and Papa Parse are MIT.

First use requires internet, roughly 23 MB quantized model files plus 27 MB WASM and worker code. Downloads originate from Hugging Face/CDN and this static site; user text stays in worker/browser memory. No uploads, analytics, credentials, remote inference or content persistence. Use pseudonymous IDs. Cache API stores model/runtime assets, not evidence. Cache eviction/private browsing may redownload. Fresh-worker offline inference is supported only in an already-open page after an online run; offline navigation/reload is not promised.

Uses the immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/assets. Worker protocol accepts `{id,texts}` and emits progress/batch or `{id,type:'result',vectors}`; batches four texts and truncates at 256 tokens/text. No user-controlled tools, endpoints or code execution. Reuse avoids duplicating runtime bytes in this near-capacity Pages collection.

Current desktop Chrome with WebAssembly SIMD, module workers and several hundred MB available RAM tested. WebGPU is not required. Physical phones and other browsers unverified. Network/runtime errors block output with actionable retry; cancellation terminates the worker, input changes invalidate runs, and a 180-second timeout bounds loading. Embedding count, dimension, normalization and finite values are validated.

## Inputs and reviewed outputs

JSON: `budget` integer 0–200 hours; 2–6 `procedures` (`id`, `label`, `description`, importance `weight` integer 1–20); 2–8 `people` (`id`, training-hour `capacity` integer 0–200); 1–32 `records` (`id`, `person`, `description`); 0–16 unique `options` (`person`, `procedure`, `hours` integer 1–100). IDs ≤40 characters, labels ≤100, descriptions ≤300, source ≤30,000 characters. JSON imports ≤2 MB and may be exported audit envelopes; only original input is restored, never approvals. See the two built-in wholly synthetic examples. Options and constraints are edited in source; doing so clears old reviews.

Every record starts pending; person, procedure and multiline verification notes are editable. Approve means you independently verified qualification; hold excludes evidence but preserves it. Undo restores prior review state. Review changes invalidate export snapshots until reapplied. Duplicate evidence for the same person/procedure counts once. Held evidence marks partial coverage.

JSON retains all original input, all reviews, baseline/current/optimized coverage and selection. Evidence CSV preserves every original row and reviewed fields. Training CSV preserves all supplied offers (eligible, selected, baseline status), including unselected offers. Markdown is a complete human checklist and evidence audit; copy matches current reviewed output. CSV text cells beginning with formula-like characters are escaped; actual numeric hours remain numeric. JSON retains exact text. All output is local; no people are contacted or accounts changed.

## Deterministic planning and limitations

Two distinct verified people qualify a procedure for this narrow absence-resilience measure. Exact subset enumeration maximizes the sum of importance weights of procedures with ≥2 people after hypothetical training, then minimizes hours. Ties keep first source-order subset. Every selected training must fit total budget and each person's hour capacity. Only supplied offers are considered; already-qualified pairs and procedures with no current qualified person are ineligible (no internal instructor). All selected training is hypothetical and assumed successful; current register never gains unverified skills.

Cheapest-first baseline scans eligible offers by hours/source order and adds those fitting both limits, even when a third person adds no resilience. Comparison is conditional importance points, not measured risk/time savings or likelihood. No trainer-hour limits, prerequisites, calendars, correlated absence, competence decay or simultaneous operating capacity modeled. No guarantee of staffing adequacy, certification or safe operation. A no-offer/zero-budget or all-held input legitimately produces no training. Missing evidence is not proof of inability.

## Run and publish

React + Vite: `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261115-9/`; per-app gh-pages scripts retained as required, but publish ONLY through root combined workflow. See root README. `VALIDATION.md` reports observed tests and untested limits; build alone is not inference proof.
