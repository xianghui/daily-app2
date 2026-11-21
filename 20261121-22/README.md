# Lumen Terrace

Local-AI reconciliation of fixture offers followed by exact minimum-installed-cost **mixed-fixture** planning under a maintained-light target, hard rated-watt allowance and offer/total-unit limits. React + Vite, static GitHub Pages, no API key or backend.

## Who and why

For a community workshop coordinator comparing a small set of candidate luminaires for one initially empty room. Informal offer names do not reliably match a supplied fixture-profile library; MiniLM embeds both and proposes semantic matches. Correctly identifying the profile materially affects both usable lumens and rated watts. AI does not infer ratings, prices, availability or electrical suitability. Humans must verify product equivalence and all supplied values.

This differs from Lumen Ledger (`20261112-17`), which audits task-linked multi-zone shortfalls using one identical fixture type. Lumen Terrace chooses heterogeneous offer quantities with competing watt/cost efficiencies and hard constraints. An acoustic idea was discarded on duplicate discovery; no acoustic app is published here.

## Workflow

1. Load **Workshop circuit** or **Gallery refresh**, paste JSON, or import source/audit `.json` (originals only). All examples are synthetic, not products or specifications.
2. Set floor area, target average maintained lux, utilization and maintenance factors, rated-watt allowance, total fixture cap; define profile ratings and candidate offers. Initially installed fixture count is zero; existing fixtures are not modeled.
3. Explicitly click **Load AI & reconcile** after reading the first-download notice. Real local neural embeddings propose a fixture profile per offer; inspect source description, alternatives and cosine scores (not confidence).
4. Verify every profile and numeric assumption. Edit availability or installed cents per fixture, correct profile links, approve or hold each offer, add multiline notes, undo review edits. No bulk auto-approval. Change source to correct library ratings or room constraints and rerun.
5. **Apply reviewed scenario**. Every offer must be approved or held; any hold withholds the entire calculation. No row disappears. Inspect optimal mix, greedy baseline and infeasibility. Further review edits disable exports until reapplication. Profile/numeric edits reset that row to pending.
6. Download current JSON, Audit CSV, Plan CSV or Markdown; copy the same Markdown. All include current reviewed fields; JSON preserves originals/evidence/holds and full comparison. Audit reimport restores original inputs only, never trusted approvals. No orders, account changes or installation actions.

## Real model/runtime, downloads and licenses

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX weights ≈23 MB plus small tokenizer/config files. Normalized mean-pooled 384-dimensional feature extraction.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), **single-thread WASM CPU**, no WebGPU required. React 18.3.1 keeps the collection below its existing size guard.
- Immutable shared same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes), module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes), and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes). Preserve these originating builds. Hashes and protocol/source inspection in `runtime-dependency-audit.json`.
- About **50 MB first-use model/runtime download**, explicitly disclosed before loading. Worker/runtime download from this collection; weights from Hugging Face/CDN. Requires internet on first load, secure HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. Desktop Google Chrome CPU tested with GPU disabled; physical phones, Safari, Firefox, Edge and low-memory devices unverified.
- Model follows `main` (unpinned); current observed revision recorded in the dependency report. Four texts per chunk, maximum 16 texts / 4 chunks. App limits each description to 300 characters. The worker's per-call max_length is ignored by this feature-extraction pipeline; **actual tokenizer ceiling is 512 tokens**, independently inspected. Do not interpret its requested 256 as an enforced cap.
- Loading/progress/cancel/retry and 180-second timeout. Missing WebAssembly/module workers, network failures and malformed vectors produce errors, never deterministic or canned AI output.

## Privacy, caching and offline scope

Default and only path: local browser inference. User content is page/worker memory only and never uploaded; requests observed during production-bundle inference were static GET downloads without bodies to documented asset/model hosts. No provider credentials, remote inference option, telemetry, autosave or saved designs. Imported text is inert data; it cannot authorize tools or request secrets. Downloads/clipboard are explicit local artifacts.

Cache API stores worker source, runtime factory/binary and model assets, subject to eviction/private-mode policy. **Tested offline claim: fresh-worker real inference in an already-open warmed page with the entire browser context offline.** Offline startup/navigation/reload is NOT promised; there is no app-shell service worker. Cancellation terminates workers. Monotonic run identity guards asynchronous worker fetches, file reads and old responses against newer source/reviews.

## Bounded source and review schemas

Source JSON:

```json
{"title":"Synthetic room","area":30,"targetLux":300,"utilization":0.7,"maintenance":0.8,"wattCap":180,"stock":12,"profiles":[{"id":"panel","text":"LED panel light","lumens":3600,"watts":36}],"offers":[{"id":"offer1","description":"Flat LED ceiling panel","maxUnits":3,"costCents":6000}]}
```

- 1–8 profiles and 1–8 offers; unique alphanumeric/underscore IDs 1–40 characters within each list. Title 1–120 chars, descriptions 1–300, notes ≤2,000 (multiline).
- Area 1–10,000 m²; average maintained target 1–3,000 lux; utilization/maintenance each 0.05–1. Hard supplied watt allowance integer 0–100,000; total fixture cap integer 0–24.
- Profile rated lumens integer 1–100,000 and watts integer 1–10,000. Offer availability integer 0–3; installed cost integer 1–1,000,000 cents per fixture in one chosen currency. Max search space 4^8 = 65,536 combinations before hard-bound pruning.
- Paste ≤60,000 chars; source or audit `.json` envelope/file ≤2 MB, with stricter source validation inside. CSV/PDF/images and oversized/malformed inputs rejected. Imported numeric values are not guessed from prose.
- AI vector count must match all texts; each vector is finite, 384-dimensional, approximately unit-norm. Reviews must preserve original IDs/descriptions, reference known profiles, have valid quantities/costs and explicitly approve/hold before application.

## Deterministic method and baseline

For fixture quantities q, rated lumens L and rated watts W:

`estimated maintained average lux = Σ(q_i × L_i) × utilization × maintenance / floor area`.

Enumerate integer q_i from 0 to each offer limit, pruning mixtures exceeding total fixture cap or watt allowance. Among mixes meeting the estimated light target, minimize sum(q_i × installed cents_i). Ties prefer lower rated watts then fewer units; remaining ties use deterministic enumeration order. Every safe leaf is counted; this is not an AI confidence metric.

Greedy baseline repeatedly chooses the remaining fitting offer with most rated lumens per installed cent until estimated target or capacity exhaustion. A cheap watt-hungry offer can exhaust the allowance and miss a feasible mix. Compare costs only when both are feasible; otherwise show comparison unavailable, not invented savings. These are supplied-cost model comparisons, never achieved energy savings, measured lux or time improvements.

This is a **preliminary purchasing worksheet**, not photometric/electrical design. The shared-factor lumen method cannot model uniformity, glare, shadows, beam angles, mounting or fixture-specific utilization. Rated steady watts cannot certify circuit capacity, startup current, power factor, wiring or compatibility. Verify manufacturers and consult qualified design before installation. Text similarity cannot prove products are interchangeable; a negated fixture probe failed. The six easy known-answer matches are not general accuracy.

## Artifacts and reversibility

- JSON schema `lumen-terrace/1`: originals, every reviewed offer, AI evidence, notes, holds and full optimal/greedy results.
- Audit CSV: every offer, original text, AI/reviewed profile, available units, installed cents, decision and note.
- Plan CSV: every offer, profile ratings and optimal quantities, total lumens/watts/cents. If infeasible, all offer rows remain with blank planned quantities. If held, audit retains all rows and plan has headers only; calculation is withheld.
- Markdown: warning, full computed analysis and every reviewed source. Copy equals downloaded Markdown.
- CSV quotes/commas/newlines survive; formula-leading text is apostrophe-prefixed. Text exports are not executable configurations. New edits invalidate applied snapshots; undo restores reviews. Audit reimport restores originals only.

## Build and deployment

`npm install`; `npm run predeploy`. Vite base `/daily-app2/20261121-22/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish only through the repository ROOT combined-site workflow**; an individual app deploy would replace the collection. Reuse existing same-origin immutable runtime paths; root assembly preserves them. No additional runtime size-sharing rule or relaxed size guard.

See [VALIDATION.md](VALIDATION.md), scripts and observed reports for checks, exact fixture outcomes, public verification and untested scope. No builder digest sent.
