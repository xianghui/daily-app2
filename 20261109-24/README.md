# Panel Ledger

A local-AI planning desk for research coordinators and community workshop organizers selecting a small, experience-balanced pilot panel. Input is a JSON brief with experience groups, seat minima/maxima, anonymous candidate bios and organizer-supplied priorities. The bottleneck is interpreting differently worded bios and checking whether a proposed panel actually meets representation bounds.

## Workflow

1. Try either synthetic example, or paste/import JSON. Define `name`, `goal`, `size`, `groups` (`id`, `name`, `description`, `min`, `max`) and `candidates` (`id`, `bio`, `priority`). Edit quotas/goals directly in the JSON before loading.
2. Explicitly click **Load AI & match experience**. Real embeddings retrieve the nearest experience-group description for each bio, with all candidate scores and source descriptions available for inspection.
3. Verify every suggestion, select one primary group, edit priority/notes and approve or hold. Holding excludes someone from this plan, not from the audit. Undo reverses review edits; changing input discards all inference and approvals. Any review edit invalidates exports until reapplied.
4. **Apply reviewed panel** searches all permitted subsets for exactly `size` seats, respecting every group minimum/maximum and maximizing the sum of priority points. Equal optima prefer earlier input candidates. Infeasibility blocks applying/exporting a partial panel. Add eligible candidates or revise the source constraints and rerun. Reserves retain original input order, not ranked waitlist order.
5. Export current JSON, CSV or Markdown; copy Markdown. All include selected, reserve and held records. JSON preserves original inputs, original priorities, model proposals/rankings and human reviews. Reimport uses the original input only: rerun and re-review, never silently trust historical approvals. CSV is an audit, not an import format, and escapes spreadsheet formula-like text.

## Real AI, model and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; based on sentence-transformers/all-MiniLM-L6-v2. Quantized q8 ONNX, English intended.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), CPU WASM. Normalized mean-pooled 384-dimensional embeddings, cosine bio/group ranking. No WebGPU, API key, paid provider or backend.
- Initial download approximately **50 MB**: ~23 MB weights/tokenizer/config from `huggingface.co` and its `*.hf.co` delivery hosts, plus ~27 MB runtime from the same collection origin. These are approximate decimal file sizes, not a transfer measurement.
- Runtime factory, browser worker and application JS are locally bundled/hosted. The byte-identical 26,861,777-byte WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this prior app when assembling deployment. SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.
- Requires a modern browser with module workers, WebAssembly SIMD and sufficient memory. Cache API enables offline reuse. Tested in installed desktop Chrome via Playwright, including WASM CPU inference with no WebGPU requirement. Physical phones and other browsers untested.
- Four texts per inference batch; each capped at 256 tokens. 180-second timeout. Download progress and completed text counts are displayed. Cancellation terminates workers; run identity guards worker/source/file awaits and late callbacks. Retry starts fresh. Errors never substitute demo or heuristic results.

## What is and is not AI

AI performs semantic retrieval from supplied practice descriptions, which can connect paraphrases without identical terms. It does **not** verify experience, infer demographics, assess competence, decide eligibility or prove group membership. Every bio receives a closest-group proposal even if unrelated. Scores are cosine similarity, not probability/confidence. Negation and mixed experience are known failures; hold unsuitable candidates. Goal text is planning context, not a model prompt. Imported content is data, with no tool or credential authority.

Schema validation, exact quota-constrained subset search, priority arithmetic, comparisons, review requirements and export formatting are deterministic. There are no generated biographies, hardcoded model responses, remote calls or automatic outreach. Use this for low-stakes pilot/workshop planning, not hiring, admissions or access to essential services. Groups should describe practical experience, not demographic traits. One primary group per person; no multi-axis quota claim.

## Computed comparison

The baseline is the first `size` approved candidates, using the **same reviewed groups and priorities**. Quota-deviation units sum seats missing below minima plus seats exceeding maxima across groups; this can double-count a misplaced seat intentionally and is not number of rejected people. The optimized panel must have zero deviation. Priority sums are also shown; a baseline with higher points can still be infeasible. These are computed objective/constraint checks, not time savings, fairness certification or accuracy. Human/model agreement is not ground truth. Actual known-answer outcomes and challenges are in [VALIDATION.md](VALIDATION.md).

## Privacy, caching and limits

All user data remains in browser memory; no content is intentionally persisted or transmitted. App code, worker, WASM factory/binary and model assets cache locally. No analytics, credentials, optional remote provider or external actions. Only GET file-download traffic was observed during production-bundle validation; no user text in model-host requests. Explicitly saved exports may contain all original bios; protect them appropriately.

After a successful online run, a **fresh worker inside the already-open page** can perform real inference with network disabled. This scope was tested on both local production and public deployment. Offline navigation/reload/app-shell startup is **not promised or tested**. Cache eviction/private mode/storage restrictions can require internet; clear site data to remove cached models/runtime. Original inputs and approvals are not auto-saved.

Limits: 1–18 candidates, unique IDs ≤30 characters, bios ≤400; 2–6 groups with descriptions ≤400 and names ≤80; panel size 1–12; integer priorities 0–10; integer group bounds 0–size with min ≤ max; workflow name ≤100, goal ≤400, notes ≤500. Payload ≤40 KB; JSON audit import ≤1 MB. Plain text/PDF/CSV imports unsupported. Cancelled/stale runs cannot overwrite a newer result. No feasible panel means no partial result is applied.

## Development and publication

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds the production app at `/daily-app2/20261109-24/`. Individual `predeploy: npm run build`, `deploy: gh-pages -d dist` remain present, but **do not run individual deploy**: root `npm run predeploy` / `npm run deploy` assembles and publishes the entire collection.

Tests: `node core-test.mjs`; serve production with `python3 serve-test.py`, then `node browser-test.cjs`, `node network-test.cjs`, `node runtime-test.cjs`, `node cancel-download-test.cjs`, `python3 artifact-test.py`. Browser scripts use the installed local Playwright/Chrome path; adjust on another machine. Fault injection is confined to defensive tests; success/quality/offline/public checks use the real model. `node gallery-test.cjs` compiles all inline gallery scripts and checks preservation. `public-test.cjs` compares public asset hashes; `TEST_URL=... REPORT=... node browser-test.cjs` runs the full suite against Pages. See validation JSON/logs for observed outcomes.
