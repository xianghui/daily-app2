# Role Mosaic

A static React + Vite workshop utility for access-review facilitators. It reconciles informal grant notes to an explicit capability dictionary, then designs reusable roles which reconstruct the reviewed permission matrix with **zero additional and zero missing cells**. It never reads or changes real accounts.

## Workflow

1. Paste source JSON, import a `.json` source/audit, or select either synthetic example.
2. Define a complete small roster and capability dictionary. Every grant contains one listed person and one informal description. Edit these in the source before inference.
3. Explicitly click **Load AI & reconcile**. Initial download is about 23 MB model plus 27 MB CPU runtime (and ~0.6 MB worker/factory). Internet is required the first time.
4. Inspect original notes and AI cosine rankings. Edit the capability, add a multiline review note and explicitly approve or hold every record. No suggestions are automatically authorized. Undo restores the last review edit.
5. Apply the reviewed matrix. Any hold withholds all role recommendations. Duplicate grant evidence remains in the audit but counts once as a permission.
6. Inspect role members/capabilities, computed baseline, optimality status and exact conservation. To reject a suggestion select hold; to revise a role design change its underlying grant mapping or source, then apply again. Every review/source edit invalidates exports.
7. Download complete JSON, complete audit CSV, Markdown worksheet or role CSV; copy the current Markdown. Reimporting an audit restores originals only and requires new inference/review.

## Real AI and why it helps

Default AI: `Xenova/all-MiniLM-L6-v2`, quantized q8, Apache-2.0. Source/model card: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Observed main revision at validation: `751bff37182d3f1213fa05d7196b954e230abad9`. Main is **not pinned**. The learned encoder maps both capability definitions and informal notes to normalized, mean-pooled 384-dimensional vectors; cosine ranking retrieves paraphrased capability meanings. This is neural inference, not keyword sorting or canned output. It does not establish authorization or resolve negation reliably.

Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No key, paid provider, WebGPU, or backend. Current desktop Chrome CPU tested; needs HTTPS/localhost, WebAssembly SIMD, module workers, and several hundred MB free RAM. Physical phones, Safari/Firefox and low-memory devices unverified. Narrow phone *layouts* tested, not phone inference hardware.

Immutable same-origin runtime reuse avoids ~27 MB duplicate deployment. Preserve these collection assets:
- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes)
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes)
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes)

See `runtime-dependency-audit.json` for verified SHA-256 values. Worker protocol: `{id,texts}` input; progress/batch messages; `{id,type:'result',vectors}` output. Four texts per chunk, ≤42 texts. Descriptions ≤300 characters; actual tokenizer ceiling 512 tokens (the feature pipeline's per-call max_length is ignored). Finite normalized vectors and exact dimensions/counts are validated before ranking.

## Deterministic design and baseline

Enumerate each nonempty subset of ≤6 people, intersect its approved capabilities, and close membership to all people sharing those capabilities. These maximal safe rectangles suffice for minimum role-count cover: any safe role can be enlarged to one of them without introducing a forbidden matrix cell. Deduplicate rectangles, seed a feasible greedy cover, then branch-and-bound over uncovered cells with memoized covered sets. Stop after 200,000 search nodes; if exhausted, label the feasible incumbent **not proven optimal**. Otherwise the minimum role COUNT is proved within the reviewed matrix. This is not a minimum-membership objective. Roles can overlap.

Baseline is one role for each nonempty person, including their approved capabilities. Displayed role counts and extra/missing permission counts are computed, not time/accuracy estimates. Reconstruction uses exact union equality; a failed equality blocks export. Every source grant, including duplicate evidence, remains in JSON/audit CSV.

## Formats and limits

Source object: `{title, people, capabilities:[{id,text}], grants:[{id,person,description}]}`. See `src/core.js` for two synthetic fixtures. Bounds: title 1–120 characters; 1–6 distinct people, names 1–60; 1–6 capabilities; 1–36 grant records; unique alphanumeric/underscore IDs ≤40 characters within each list; descriptions 1–300. Source paste ≤60,000 characters; .json source/audit file ≤2 MB. Invalid, empty, oversized and unsupported inputs are rejected. Audit imports cannot bypass original source bounds.

JSON includes exact originals, model rankings, reviews and the applied analysis. Audit CSV has one row per source grant. Role CSV expands the reviewed role/person/capability combinations; overlapping roles may duplicate matrix cells. With holds this export has its header only, never a partial role blueprint. CSV quotes commas/quotes/newlines and prefixes spreadsheet formula-leading text with an apostrophe; JSON preserves exact text. Markdown documents roles, baseline, original notes and review decisions. No executable provisioning artifacts.

## Privacy, caching and failures

The app sends no user content off-device: only static GET downloads from this site and Hugging Face/CDNs after explicit loading. Content lives in page/worker memory, not persistent storage. Cache API stores **model/runtime files**, not source data; eviction/private browsing may require redownloads. No remote provider integrations, analytics, credentials or telemetry. Imported text is data, not executable instructions.

Offline claim is limited to fresh-worker inference in an already-open, warmed page with model/runtime caches intact, tested with all browser network disabled. No service worker or offline reload/startup claim. Worker source/factory/WASM are cached explicitly; model caching is handled by Transformers.js.

Cancellation terminates the worker; run IDs guard late worker messages, file reads and worker-source fetches. Input changes clear stale suggestions/snapshots. 180-second timeout. Download/model errors, worker construction/runtime failure, malformed envelopes/vectors and unsupported runtime produce actionable errors and no fake results; retry is explicit.

## Validation and limitations

`VALIDATION.md` records actual checks and artifact files. Known-answer fixtures are simple synthetic grant paraphrases, not production accuracy measurements. Negation, ambiguous multi-capability text, compound permissions and out-of-vocabulary requests can be wrong: approval is mandatory. No deny rules, resource scopes, time/context, separation-of-duties, hierarchy or policy validation. Unlisted cells are forbidden only in this blueprint, not proof of real access denial. Use a complete roster and verify actual authorization semantics before separately implementing roles.

## Build / publication

`npm install`; `npm run predeploy`. Vite base `/daily-app2/20261121-18/`. Per-app scripts retain `predeploy: npm run build` and `deploy: gh-pages -d dist` as required, but publish **only from repository root** using its combined deployment workflow. Run `node core-test.mjs`, `python3 serve-test.py`, then browser/defensive tests. Playwright uses the local workspace installation and Chrome. Public verification reuses `browser-test.cjs` with `APP_URL` and `REPORT` overrides. Python's csv/json independently parses downloaded artifacts.
