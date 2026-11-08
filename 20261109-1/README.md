# Coverage Loom

A local-AI two-axis requirements/scenario traceability desk for QA coordinators. Input: short requirements, required scenario kinds and test-case descriptions. It reveals missing success/failure cases even when a feature already has tests. Unlike earlier evidence mapping or budgeted regression selection apps, this maintains explicit requirement × scenario obligations. Bottleneck: differently worded tests make manual coverage reconciliation tedious. Output: an explicitly reviewed many-to-many traceability matrix and actionable missing-evidence checklist. It neither executes tests nor certifies their adequacy.

## Workflow

1. Choose either synthetic example, paste JSON or import a `.json` file. Supply `requirements` (`{id,text,kinds:[]}`), `tests` (`{id,text}`), `kinds` (`{id,text}` scenario descriptions), and a numeric cosine `floor` from 0.2 to 0.9. Edit the floor and scope before running.
2. Explicitly click **Load AI & map tests**. Inspect download/batch progress; cancel terminates the worker. Retry is a fresh worker.
3. Read each original test and candidate requirement snippets/cosines. Toggle feature links, correct the scenario-kind selection, add an assertion/follow-up note, then approve or hold each test. An approved empty link set is an orphan. Feature links AND kind determine coverage of each user-required cell. All cells must be linked for scenario completion; a feature link alone is insufficient. Link/kind changes reset approval; every edit invalidates applied exports. Undo restores the preceding review state. Originals are unchanged.
4. Apply the reviewed audit. Only approved tests count toward feature links and requirement/scenario cells. Inspect gaps, orphans and held tests.
5. Download JSON, CSV or Markdown, or copy the report. JSON reimport restores original inputs for fresh inference, not prior approval. No external systems change.

Example format:
```json
{"floor":0.35,"kinds":[{"id":"success","text":"A valid request completes successfully."},{"id":"failure","text":"An invalid request is rejected with an error."}],"requirements":[{"id":"R1","text":"Users can reset their password by email.","kinds":["success","failure"]}],"tests":[{"id":"T1","text":"Request recovery and open the emailed reset link."}]}
```

## Real AI and deterministic work

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized `onnx/model_quantized.onnx` (q8). The default Hugging Face main revision is used; future upstream changes may change results. Runtime: `@huggingface/transformers` 4.3.2 and locked `onnxruntime-web` 1.31.0-dev.20260914-8d85527a0. Mean-pooled normalized 384-dimensional embeddings execute in a local WASM CPU worker; no WebGPU or keys. MiniLM is a semantic embedding model, not a language-model agent. The same real embeddings also classify each test against the supplied scenario-kind anchors. It improves feature retrieval across paraphrases; it does not reason about assertions or execute test steps.

Deterministic stages: finite/unit-vector schema checks, cosine ranking, floor filtering, mandatory review validation, approved-link and scenario-cell coverage/gap counts, all-required-cell completion, exports. Every test can link to multiple requirements and vice versa. No fabricated confidence or accuracy is displayed. The simple exact-text baseline counts requirements whose text exactly matches a test after trimming/lowercasing; candidate and reviewed counts use the same denominator. This deliberately narrow baseline is not another semantic model or a claim about industry practice.

## Downloads, privacy and devices

First run needs internet: approximately 23 MB weights plus 27 MB ONNX WASM and app/runtime code. Model/tokenizer/configuration files download from `huggingface.co` and its CDN (observed `us.aws.cdn.hf.co`). App/worker/runtime assets are same-origin and locally bundled. The byte-identical shared WASM is at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older deployed app. Its SHA-256 is recorded in `asset-audit.json`.

Current WebAssembly-capable desktop Chrome/Edge/Firefox/Safari are intended. Actual real inference was tested in desktop Chrome, with 320/390px viewport layouts, not on physical phones or every browser. Low-memory devices may fail/perform slowly; no automatic fake fallback exists. WebGPU is unnecessary. Initial download failure, worker errors and a 180-second timeout display errors and allow retry; cancellation kills workers and run IDs reject late responses.

All supplied content remains in local browser memory/worker. The only default network requests are static asset/model downloads; no provider integration, analytics, upload, credentials or server inference. Imported instructions stay inert text. Worker/runtime Cache API and Transformers.js model caches retain downloaded assets, not documents. After a successful run, a fresh worker can infer fully offline in the **already-open page**, verified with the actual production bundle. Offline navigation/reload is NOT promised (no app-shell service worker). Cache eviction, private mode/storage limits or upstream model changes can require internet again. Clear this origin's browser storage to remove cached files; unsaved inputs disappear on reload.

Limits: 1–24 requirements and 1–24 tests, plus 1–3 user-described scenario kinds; every requirement declares a nonempty subset of those kind ids; simple unique ids within each list (≤30 characters), nonempty text ≤300 characters, payload ≤100 KB; audit imports ≤1 MB. Up to 51 embeddings; four-text inference batches, max 256 tokens per text (token truncation possible). English intended. Unsupported JSON structure, empty/oversized records, duplicate ids and unsupported file types fail visibly. Do not paste secrets or assume models detect them.

## Outputs

- `coverage-loom.json`: `coverage-loom/v1`, original input, every requirement/test, original feature/kind suggestions, similarity ranks, current reviewed links/kinds/notes, all required cells and current metrics. No lost held/orphan rows.
- CSV: all requirement rows, every requirement/scenario cell and all test rows, with `kind,id,source,links,decision,note,scenario`. Semicolon-separated linked ids; quoted commas/newlines and formula-leading fields escaped for spreadsheets. A protective apostrophe is intentionally added to dangerous leading text.
- Markdown: complete requirement checklist, every required scenario cell and every test/kind/decision/note. Line breaks in fields are flattened and Markdown controls escaped. It is a readable handoff, not the lossless format.

Known limitations: semantic relatedness is not entailment, correctness, adequacy or evidence a test passed. At the default floor the library fixture produced four extra cross-topic links requiring removal; a negated password test still matched the opposite requirement. Scenario kind matched only 4/6 expected fixture labels: a successful password reset and successful reservation were wrongly classified as failure. Naively approving proposals falsely filled 6/8 library cells; explicit correction reduced this to the intended 3/8 cells with five missing scenarios. Every candidate, kind and missing link requires human inspection. No safety, compliance, accuracy, release-readiness or measured time-saving claims. No private inputs in fixtures.

## Develop, validate, publish

`npm install`; `npm run dev`; `npm run predeploy`. Per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but publish the collection only from the repository root with its combined `deploy/` workflow. Production Vite base: `/daily-app2/20261109-1/`.

Production bundle testing: `python3 serve-test.py` (port 6291), `node browser-test.cjs`, `node network-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`, `python3 asset-audit.py`. Playwright comes from the existing workspace test installation; no test mocks are used on successful inference paths. Defensive-only fault injection covers malformed vectors, unsupported runtime, crash, timeout and stale messages. See `VALIDATION.md` and machine-readable reports for observed results and public deployment verification.
