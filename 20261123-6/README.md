# Window Concord

A local-AI shared maintenance-date worksheet for coordinators bundling vendor checks into the same shutdown day. Unlike Cadence Loom's individual recurring reminders, this app intersects **several fixed-day availability patterns per group**, explains impossible non-coprime phase combinations, and removes explicit blackout dates. It neither books vendors nor changes calendars.

## Workflow

1. Paste JSON, import source/audit JSON, or choose either synthetic example.
2. Set a common `anchor` (day zero), inclusive `start`/`end` horizon and global `blackouts`. Supply `calendars` with unique IDs, descriptions, `period` in days and `phase` offset. A date is available exactly when `(date − anchor) mod period == phase`.
3. Supply each requirement as `{id, group, note}`. Every requirement sharing a group must be satisfied on the same date. Click **Load AI & reconcile** after reading download/device information.
4. Real MiniLM proposes calendar identities from informal notes. Read source/evidence, change identities, approve or hold each requirement, and add editable multiline reviewer notes. Identity edits reset approval. No fabricated confidence scores.
5. **Apply reviewed scenario**. Exact arithmetic scans dates, removes blackouts and detects incompatible phase pairs using their periods' greatest common divisor. Holding even one requirement withholds its entire group; it does not silently remove a constraint. Compatible patterns with no unblocked date in the horizon are distinct from mathematically incompatible patterns.
6. Download lossless JSON, audit CSV, complete Markdown or a group Window CSV; copy the current worksheet. Review edits invalidate exports. Undo restores the previous edit, and source originals remain unchanged. Reimport restores originals only, requiring new inference/review.

Schema examples are in `src/core.js` and the UI. Extra fields, duplicate IDs, invalid dates, out-of-range numbers and unsupported formats are rejected. 2–8 calendars, 1–32 requirements, at most 16 groups. Periods 1–90 days; phase 0 through period−1. Horizon ≤366 inclusive days, anchor within 3,660 days of start, 0–366 unique blackout dates, date years 2000–2099. Source ≤60,000 characters; source/audit JSON imports ≤16 MB. Description and requirement notes ≤200 characters; reviewer notes ≤2,000.

## Real AI and deterministic work

**Xenova/all-MiniLM-L6-v2**, q8 on WASM CPU, produces normalized mean-pooled 384-dimensional embeddings. Cosine similarity ranks supplied calendar descriptions for each requirement note, avoiding repeated manual alias lookup across a batch. No generated dates, regex-based AI, canned responses or remote model call. Vector count/dimension/finiteness/norms are validated. At most 40 texts, four per inference chunk; tokenizer `model_max_length` is 512, verified during this run. The worker's pipeline `max_length` argument is not relied on for a stricter cap.

Nearest-neighbor retrieval always proposes something: it cannot verify real availability, understand all negations, or prove the note belongs in this catalog. Unknown, negated and multilingual notes need human holds. Every suggestion starts pending. Imported instruction-like text is embedding input only; it cannot change tool authority, execute code or ask for credentials.

After review, all calculations are deterministic. For two calendars, phases differing modulo `gcd(period1, period2)` prove no common date exists. Otherwise exact date intersections determine the available dates inside the horizon; the combined pattern's cycle length is the least common multiple. Enumeration is bounded, and offsets before the anchor use nonnegative modulo. Groups are independent, with no global shared-capacity constraints. Dates are date-only, not time-zone instants. **No monthly/weekday rules, durations, live calendars, automatic holidays, vendor guarantees or bookings.** Enter known closures explicitly as blackouts. Verify the calendar semantics with providers before relying on a worksheet.

## Runtime, licenses, downloads and privacy

- Model/source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 — Apache-2.0. Approximately 23 MB model/tokenizer/config; runtime resolves model `main`, not an app-pinned revision. Observed revision and tokenizer audit are in `model-runtime-audit.json`.
- Transformers.js 4.3.2 — Apache-2.0: https://github.com/huggingface/transformers.js.
- ONNX Runtime Web — MIT: https://github.com/microsoft/onnxruntime. CPU WASM approximately 27 MB, worker approximately 549 KB and factory approximately 53 KB.
- First run needs internet to this static site and Hugging Face/redirected CDN file hosts. No model-host requests before explicitly clicking Load AI. **No API key, provider integration, agent credentials, telemetry, uploads or remote inference.** User content stays in volatile page/local-worker memory; downloaded exports stay on the user's device.
- Bundled app code reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/paths; `runtime-dependency-audit.json` records verified hashes.
- Requires HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM. WASM CPU is the default, no WebGPU required. Tested desktop Chrome with GPU disabled; physical phones, Safari/Firefox and screen readers untested.
- Cache API retains public model/runtime/worker files where available. Eviction or disabled caching needs internet. **Tested offline scope:** new worker and actual inference in an already-open warmed page with all network disabled. Cold navigation, reload, installable/PWA startup or permanent offline use are not promised.
- Run IDs guard worker-source fetches, messages and asynchronous imports. Cancel terminates the worker. A 180-second timeout, unavailable workers/WASM, network/runtime failures and malformed results produce actionable errors; no deterministic/fake inference fallback.

## Outputs and comparison

`window-concord/1` JSON contains original input, every reviewed requirement, original AI suggestion/evidence, reviewer notes, computed groups, source-linked incompatibility witnesses and shared dates. Audit CSV retains all requirements; Window CSV retains every group, including held/incompatible/no-window groups with empty first dates. Arrays inside CSV fields use JSON encoding. Markdown includes the worksheet and complete JSON audit. CSV text fields guard leading spreadsheet formula characters; use JSON for exact formula-like strings.

The baseline takes the **latest individual next date** without rechecking all calendars; the app counts how many fully reviewed groups fail their other patterns, horizon or blackouts on that date. Held groups are excluded from this comparison. This is a conditional worksheet check, not accuracy, vendor reliability, measured time savings or guaranteed improvement. Both small fixtures expose the shortcut failure in two groups; the exact method finds one ready group and one incompatible group each. No invented percentages or timing claims.

## Build, checks and publication

React + Vite, base `/daily-app2/20261123-6/`. `npm install`, `npm run predeploy`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`, but publish **only with the root combined-site predeploy/deploy**. Existing 1,000,000,000-byte guard and runtime-sharing rules remain unchanged; this app adds no legacy sharing rules.

Production checks: `python3 serve-production.py 7376` (7377 serves assembled `deploy/`); `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node async-race-test.cjs`, `node cold-cancel-test.cjs`, `node superseded-run-test.cjs`, `python3 artifact-test.py`. After root assembly: `python3 assembly-test.py`, `python3 bundle-audit.py`, `node gallery-syntax.cjs`, `node gallery-test.cjs`; use APP_URL/REPORT_FILE/GALLERY_URL/PREFIX for assembled/public runs. Browser harness uses the existing workspace Playwright installation; no mocked inference on successful paths. Read `VALIDATION.md` and `publication-status.json` for observed outcomes, rather than interpreting a build as proof of inference/publication. Only synthetic fixtures are committed.
