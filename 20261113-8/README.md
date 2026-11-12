# Role Accord

A local-AI responsibility handoff worksheet for small-team project coordinators. Paste/import informal responsibility notes with explicit people and deliverables; MiniLM proposes RACI roles; review every assignment or hold; apply coverage checks; copy/download a usable matrix, unresolved-issues checklist and complete audit. No invitations, messages, task creation or external actions.

## Run and build

```sh
npm install
npm run dev
npm run predeploy
```

React + Vite, deployment base `/daily-app2/20261113-8/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Publish the collection only through the repository ROOT workflow**, never this app's deploy script. Root predeploy copies all gallery builds into deploy/. The original daily_app collection is untouched.

## Workflow and schema

1. Load a synthetic example or supply source JSON. Edit `project`, `tasks: [{id,name}]`, `people: [name]`, and `records: [{id,note,task,person,owner}]`. Include deliverables with no notes: otherwise the app cannot find omitted deliverables. Owner is a follow-up contact label, not an automatically appointed person. All identities are supplied by you.
2. Explicitly click **Load AI & suggest roles**. Download/load progress and batch counts appear; cancel terminates the worker. A 180-second timeout offers retry. Source changes invalidate suggestions, reviews and exports.
3. Inspect the original note, ranked role descriptions and cosine scores. Correct role, person, deliverable, owner or multiline review note. Approve every usable record, hold uncertain/unrelated/mixed statements. Undo restores the preceding review; original records never change. There is intentionally no bulk approve control.
4. Apply reviewed roles. Each listed deliverable requires exactly one distinct A, at least one R, and no repeated person/deliverable rows. Multiple A, no A, no R and duplicates produce explicit follow-ups. Warnings do **not** block export: this is a worksheet for resolving issues, not a readiness certificate. Held records remain in exports but not matrix counts.
5. Download current JSON (originals, every review, evidence, matrix, baseline, checklist), CSV (every original row and reviewed fields), or Markdown (matrix, checklist and source/review audit); copy Markdown. Review changes disable exports until reapplied. Reimport audit JSON restores originals only and requires fresh inference/review. CSV is a handoff table, not a source import format; formula-like text gains a protective apostrophe. No spreadsheet formula calculation is performed.

Limits: 1–12 deliverables, 2–12 unique people, 1–40 unique records. Notes ≤300 characters, names ≤100, IDs ≤60, owners ≤150, review notes ≤1000. Source ≤40,000 characters; JSON import envelope ≤300,000 bytes. All source deliverable/person references must exist; wrong formats, empty or oversized values, duplicates and unknown identities are rejected. Four inference texts/batch and 256 tokens/text bound model context. This simplified RACI uses **one role per person per deliverable**; dual A/R arrangements must be agreed/documented outside this version. It does not invent or validate people's authority, consent, availability or skill.

## Real AI and deterministic boundary

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized `q8` ONNX; the repository's normal model revision is used, not an immutable pinned revision.
- Runtime: `@huggingface/transformers` 4.3.2, Apache-2.0; ONNX Runtime Web, MIT, with single-thread WASM CPU. No WebGPU dependency or remote inference. Model loading explicitly selects `device: wasm`, `dtype: q8`.
- Mean-pooled, normalized 384-dimensional sentence embeddings represent four role descriptions and every source note. Dot-product cosine ranking proposes the closest role. Outputs must contain exactly the expected number of finite normalized 384D vectors. There is no canned response or deterministic substitute if inference fails.
- Deterministic operations: schema checks, ranking, mandatory review gating, unique-person counts, coverage rules, duplicate detection and artifact formatting. Imported text is encoded as data; no tools, credential prompts or model-generated code are executed.
- The baseline recognizes a source note only if exactly one literal English word `responsible`, `accountable`, `consulted`, or `informed` occurs. Its coverage is compared with **reviewed** semantic assignments, including human corrections. This is not an accuracy claim or measured saving.

## Downloads, devices and privacy

Initial internet download is approximately **50 MB** (~23 MB model/tokenizer from huggingface.co and documented Hugging Face CDN/xethub redirects; ~27 MB same-origin WASM). App/worker/model factory are local bundled files. Runtime binary reuses immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this older app asset when publishing. The local runtime module factory is copied from the installed ONNX runtime. No CDN JavaScript is imported.

Needs WebAssembly SIMD and module workers, Cache API for promised caching, and several hundred MB free RAM recommended. Tested with desktop Chrome CPU, GPU disabled, plus Chrome mobile viewport/touch emulation. Physical phones, Safari, Firefox and low-memory hardware untested. The same WASM path works without WebGPU. Missing worker/WASM/runtime, download failures, bad vectors and timeouts show actionable errors with no fabricated output. Cancellation/retry and stale input/download/worker-response guards are implemented.

There are no keys, providers, analytics or uploads. Network traces check GET-only static asset requests with no request bodies and no source content in URLs; no model request occurs before explicit loading. Content remains in browser memory until the user downloads/copies. Worker, WASM binary/module factory and model files use Cache API. **Tested offline scope: a fresh worker in an already-open page after an online warmed run. Offline reload/startup is not promised.** Browser eviction/private mode can remove caches; lack of caching requires internet and may prevent offline processing.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), machine-readable reports and test scripts. Tests use synthetic records only. `core-test.mjs` checks 3,000 independent coverage cases; `browser-test.cjs` runs genuine model inference, review/edit/undo, limits, exports, offline inference and responsive layout. Defensive mock workers are used **only** for failure/stale-result checks, never for successful AI validation. `artifact-check.py` independently parses actual browser downloads and checks conservation, current reviewed fields, escaping and task-linked follow-ups.

The final tiny fixtures matched 7/8 intended roles, not a general accuracy estimate: the release-checklist contributor was misclassified as I. Correct it to R before approval. Negation, mixed duties and unfamiliar languages can fail; nearest semantic ranking cannot abstain reliably. An unrelated instruction-like note was still assigned a nearest role, remained pending, and was held in validation. Read the source, consult actual team members, and hold uncertainty. Coverage is structural only; real agreement is external to the utility. No automatic commitments, messages or authority assignments occur.

Public app: https://xianghui.github.io/daily-app2/20261113-8/ — verified real public CPU inference, reviewed workflow, exports and runtime assets; see publication-status.json.
