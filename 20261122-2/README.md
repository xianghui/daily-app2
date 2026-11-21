# Voice Orchard

A participant-balanced topic shortlist for small workshop facilitators. Rough nominations become reviewed topic approvals; exact **proportional approval voting (PAV)** chooses a fixed number of topics with diminishing returns per participant. This is a planning worksheet, not a binding election, scheduling system or consent record.

## Workflow

1. Start with **Repair café** or **Archive skills**, or paste/import JSON using the same structure. Supply 2–10 topic descriptions, the complete roster of 1–32 people, 1–64 nomination lines (one intended approval per line), 1–5 slots and optional pinned topic IDs. Each nomination references one roster member. People with no nominations remain visible.
2. Read the download/device disclosure, then explicitly click **Load AI & reconcile**. No model requests occur before that action. Wait for download and four-text inference progress. Cancel terminates the worker; retry starts a new one.
3. Inspect the literal nomination, every candidate's cosine similarity and the proposed topic. Correct the dropdown, approve the intended approval or reject an unsuitable nomination. Nothing counts without review; topic edits reset approval. Use multiline notes and undo. Rejecting never removes a source record.
4. Apply the reviewed scenario. Compare PAV with top-approval totals under identical slots/pins. Inspect each participant's selected and original approvals, missing representation, repeated approvals and tied optima.
5. Download **JSON**, **Audit CSV**, **Coverage CSV**, or **Markdown**; copy the current Markdown worksheet. Every review edit invalidates the applied export until reapplied. Reimporting JSON restores originals only, never old model authority or approval decisions. No invitations or external changes occur.

## Real AI, source and runtime

Default: `Xenova/all-MiniLM-L6-v2`, quantized ONNX q8, Apache-2.0. Source/model card: https://huggingface.co/Xenova/all-MiniLM-L6-v2 ; original model: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 . Transformers.js 4.3.2 / ONNX Runtime Web performs actual normalized mean-pooled, 384-dimensional embeddings on **single-thread WASM CPU**, without WebGPU or API keys. Each nomination links to the highest cosine similarity topic description, so paraphrases such as “fixing a flat bicycle tire” can resolve to the bicycle-maintenance topic without a literal match. Similarity is **not confidence**, endorsement or participant intent.

The app reuses immutable same-origin collection dependencies (hashes in `runtime-dependency-audit.json`):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` — bundled Transformers.js worker, `{id,texts}` → progress / batch / result vectors.
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` — CPU factory.
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` — CPU binary.

**Preserve those originating apps/assets.** No CDN-loaded JavaScript; app code, workers, factory and WASM are same-origin. Model files download from Hugging Face/CDN, approximately 23 MB model plus 27 MB runtime and smaller tokenizer/config files, plus the worker. Initial internet is required. HTTPS or localhost, module workers, WebAssembly SIMD and several hundred MB available RAM required. Actual desktop Chrome CPU path tested; no promise on every phone. Unsupported runtime, download failure, malformed messages/vectors and the 180-second deadline show actionable errors, never fake results.

Four texts per chunk, at most 74 texts / 19 chunks. Each text is ≤300 characters; tokenizer `model_max_length` is 512. Feature-extraction `max_length` is not relied upon to enforce a stricter cap. Result vectors must have exactly the expected count, 384 finite values and unit norm tolerance. Input JSON ≤60,000 characters; source/audit file ≤2 MB; IDs ≤40, title ≤200, review notes ≤2,000. Imports validate schema and retain only known fields. Input text is data and has no tools, credentials or instruction authority.

## Deterministic method and comparison

After review, deduplicate approved `(person,topic)` pairs. Every listed person counts equally, regardless of how many nominations they submitted. Rejects remain in the audit but contribute no approvals. For each feasible exact-k subset containing every pin, calculate `sum_person H(number of selected approved topics)`, with `H(j)=1+1/2+...+1/j` and `H(0)=0`. Integer units of 1/2520 avoid floating score ties for this ≤10-topic domain. Enumerate at most 252 fixed-size subsets (not a greedy approximation). On equal score select the first numeric topic bitmask in catalog order and report all tied optima. This is deterministic, not a claim the tie choice is substantively better.

Baseline: fill the same pins and remaining slots with descending unique-person approval totals, ties in catalog order. Show both harmonic scores and represented headcounts. **PAV optimizes harmonic utility, not headcount directly**: headcount can tie or decrease. Scores are subjective approval-coverage metrics, not accuracy or measured time savings. Inputs, pins, roster completeness and participant-equality assumptions matter; no automatic population inference or voting-rights assurance.

## Privacy, cache and offline scope

All content, review state and computation stay in browser memory by default. Only topic descriptions and nomination text enter the local model; participant IDs do not. Model downloads are GET requests for static assets, **not uploads**. No remote inference, analytics, shared secrets, paid service or provider integration. Exports intentionally contain source text and participant identifiers: share them deliberately. Page reload loses unsaved work; use JSON export for preservation.

Cache API stores worker source, module factory, WASM and model files when storage permits. Tested: complete an online inference, terminate worker, block all network, create a **fresh worker** and run real inference in the **already-open warmed page**. Offline app navigation/reload is not supported or claimed. Private mode, cache eviction or denied storage can require redownloading. Browser site-data controls clear caches. Failed/cancelled runs and late file reads/worker-source fetches are run-ID guarded so they cannot replace newer input or results.

## Formats

- Input/source JSON: `title`, `slots`, `pinned`, `topics:[{id,description}]`, `people:[id]`, `nominations:[{person,text}]`. See UI examples. Unsupported file formats fail explicitly. Split compound nominations manually; this model matches one topic per line.
- JSON audit schema `voice-orchard/1`: every original input, all proposals/evidence/decisions/notes, exact selection, baseline, duplicate counts and full participant coverage. Round-trip restores originals and requests fresh inference/review.
- Audit CSV: every nomination, original person/text, AI/reviewed topics, decision, note, topic-selection membership and participant representation. `selected_topic` describes whether the linked topic is on the shortlist, **not whether a rejected nomination counted**; `decision` determines counting.
- Coverage CSV: every roster member, all deduplicated approved topics, selected approvals, representation and baseline selected approvals. Topic lists are JSON arrays inside quoted CSV cells.
- Markdown: shortlisted topic descriptions, computed comparison, every participant, complete source-linked reviews and original worksheet. It is data, not executable HTML.
- CSV uses RFC-style double-quote escaping and CRLF. Formula-like text beginning with `= + - @ tab CR` is apostrophe-prefixed, including multiline cells; JSON is lossless. Notes support actual line breaks. No source rows or roster members are discarded.

## Validation and limits

See [VALIDATION.md](VALIDATION.md) and saved machine reports. Two materially different real-model synthetic fixtures, known-answer links, exact algorithm oracles, browser downloads parsed independently in Python, max batch, review/edit/reject/undo, privacy, runtime/network/malformed/timeouts, cancellation/stale races, warm-page offline fresh-worker inference and 1440/390/320 layouts are exercised. Individual and assembled production bundles, then public Pages assets/inference, must pass before publication is considered complete.

Observed negation challenge: “Do not offer bicycle puncture repair; I dislike bikes and want sewing repairs” mislinked to `bike` instead of `sew`. Mandatory human review is essential. Tiny positive fixtures do not establish general accuracy. No real people/data, real workshop efficacy study, screen-reader audit, physical-phone performance, non-English reliability or offline startup tested. This does not replace conversation with participants.

## Build and deploy

React + Vite. `npm install`; `npm run predeploy`. Base `/daily-app2/20261122-2/`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but publish **only through the repository root combined deploy workflow** to preserve the collection. Local production tests use `python3 serve-test.py` (port 7221), `node browser-test.cjs`, `node defensive-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`; these require collection runtime builds and local Playwright/Chrome installation. No production test hooks are shipped.
