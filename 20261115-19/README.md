# Offer Orchard

A local-AI placement discussion utility for community program coordinators. Unlike single-sided skill assignment or appointment scheduling, it reconciles **ranked applicant wishes** to a catalog and produces **two-sided stable, capacity-bounded placements** under supplied program priorities. No offers, reservations, messages or account changes.

## Workflow

Choose Neighborhood placements / Volunteer rotations or paste/import JSON. `cards` contain `id,label,description,capacity,priority`; priority is a best-first array of applicant IDs. `people` contain `id,name`. `records` contain `id,person,text,rank` (1 is best). Edit program capacities and priorities in source; omitted applicants are ineligible. Load AI explicitly, inspect source snippets and cosine evidence, correct program/applicant/rank and approve or hold every preference. Apply, compare both plans and blocking pairs, then export current JSON, audit CSV, placement CSV, Markdown or copy the worksheet. Undo restores review edits; every edit invalidates the applied snapshot. Source/audit imports restore originals only, requiring fresh inference and approval.

MiniLM meaningfully links paraphrases such as “The placement mending broken bikes” to Repair workshop, where literal exact-name lookup has no match. Ranks, eligibility, capacity and priorities always come from the user, never AI. Nearest similarity is not confidence or proof of relevance; hold unrelated or ambiguous notes. Embedded instructions remain text data, never commands.

## Real AI, devices and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-vector embeddings, 256-token bound; four texts/batch.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). No WebGPU required. First download approximately 23 MB model/tokenizer plus 27 MB CPU runtime and JavaScript. Hugging Face/CDN hosts public model files; user text stays in the worker on-device. No remote inference, API credentials, analytics or uploads.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating builds. Protocol and full runtime dependency paths were inspected and actual inference tested.
- Cache API stores public model/runtime/worker assets, not notes. Tested offline scope: fresh-worker inference in an **already-open warmed page** following online inference. No promise of offline startup/reload or cache permanence. Eviction/private mode may require download.
- Requires current browser supporting WebAssembly SIMD, module workers, Cache API, several hundred MB RAM. Desktop Chrome CPU tested with GPU disabled; physical phones, low-memory devices and Safari/Firefox untested. Phone layout tested at 320/390 CSS pixels.

## Limits and deterministic matching

2–12 applicants, 2–8 programs, capacities 0–12, 1–48 preference notes, fields 1–300 characters, original JSON ≤50,000 characters, file envelope ≤2 MB, review notes ≤1,000 characters. Integer applicant ranks 1–8 may have gaps but no ties or duplicate program for one approved applicant. Priority IDs must be known and unique; omitted IDs mean unacceptable. All notes must be approved or held; held choices stay in audit but do not participate. Missing preferences are unacceptable; no approved choices means unmatched.

Applicant-proposing deferred acceptance lets each applicant propose in preference order, each program retaining its highest-priority eligible applicants within capacity. Rejected applicants try the next choice. At most one proposal per approved choice. Strict responsive program preferences yield an applicant-optimal stable match. A blocking pair is an applicant preferring a program to their assignment (or unmatched) where the program would accept them into a vacancy or displace someone lower-priority. Capacity-zero and ineligible pairs cannot block. FIFO places people in source-person order at their first available eligible choice. Both plans use identical reviewed lists. Counted first choices, matched people and blocking pairs are exact worksheet metrics, not measured time savings or an accuracy benchmark. Stability is not maximum first choices, maximum placements, or an endorsement of supplied priorities. No ties, couples, quotas, lower bounds or priority fairness modeled.

Runtime/network errors, unsupported workers/WASM, malformed vector schemas and 180-second timeouts produce explicit errors, never fake AI. Cancellation terminates workers. Run identities guard messages, worker-source fetching and file imports against stale overwrites. Empty/oversized/invalid formats are rejected.

## Artifacts and publication

JSON preserves all original notes, people, programs, every review, ranked evidence, both assignments and blocking pairs. Audit CSV retains every source record including holds; placement CSV includes **every applicant**, including unmatched. String formula-like cells are apostrophe-prefixed; quotes/newlines escaped. Markdown contains both plans and every reviewed note. Exports use current applied results only; JSON reimports original input for renewed review.

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261115-19/`. Required per-app gh-pages scripts exist, but publish only via **root combined predeploy/deploy** to preserve the collection. See [VALIDATION.md](VALIDATION.md) for observed tests and limits. All fixtures are synthetic.
