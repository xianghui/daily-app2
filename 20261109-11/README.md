# Clock Harbor

A local-AI response-clock review desk for service coordinators. Paste/import a synthetic or your own JSON batch containing a policy catalog, fixed UTC working calendar and requests; run real semantic policy retrieval; inspect the source definitions, edit proposed policies and approve or hold each request; apply and export a complete deadline register. No ticket updates, emails or alarms are created.

## What AI improves

`Xenova/all-MiniLM-L6-v2` supplies real normalized mean-pooled 384-dimensional sentence embeddings. Cosine similarity retrieves response policies for differently worded request descriptions, beyond an exact-description baseline. It does not extract dates, infer budgets, interpret contracts, establish applicability or understand negation reliably. Mandatory human review separates retrieval from the deterministic clock.

- Model/source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 (Apache-2.0); quantized `onnx/model_quantized.onnx` via Transformers.js 4.3.2 and ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (Apache-2.0 / MIT).
- Default path needs no API key. No remote-provider integration or analytics exists.
- First explicit load downloads approximately 23 MB of model/tokenizer/config from Hugging Face and its CDN plus 27 MB of same-origin WASM, approximately 50 MB total. Downloads need internet; no content is uploaded. Bundled worker and runtime factory are local.
- CPU/WASM SIMD, single thread, module worker; no WebGPU requirement. Current desktop Chrome tested through Playwright. Other engines, physical phones and low-memory devices unverified. Memory usage can exceed download size.
- Model, worker, factory and WASM assets use Cache API. Real fresh-worker offline inference is tested **only inside an already-open successfully cached page**; offline navigation/reload is not promised. Browser eviction/private-storage limits may require another download. Clear browser site data to remove cached assets. User input/results stay in React memory, except explicit downloads or clipboard.
- The WASM binary is reused byte-identically from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier app during combined deployment. `bundle-audit.json` records its SHA-256.

## Inputs and constraints

Use either example button to see the full schema. Import `.json`, not CSV/PDF. A previous `clock-harbor/v1` audit restores original inputs, not prior approvals. Every rerun needs fresh review.

- `name`, `asOf` UTC minute timestamp, `calendar`, `policies`, `records`.
- Calendar: unique JS weekdays (0=Sunday … 6=Saturday), integer `openHour`/`closeHour` UTC with 0 ≤ open < close ≤ 24; up to 30 explicit holiday dates. No timezones, DST, automatic holidays or multiple daily shifts.
- 1–8 policies: unique `id`, `description` (≤300 characters), `minutes` (1–2400 whole working minutes).
- 1–24 requests: unique `id`, `text` (≤500 characters), `created`, `pauses` (up to ten ordered, non-overlapping `{start,end}` intervals). Input timestamps are real UTC minute dates in 2000–2099. Creation must be within 366 days of asOf; future scheduled requests allowed. Pauses must begin after creation, end by asOf and total at most 30 wall-days.
- Payload ≤50 KB; four-text model batches; 256-token truncation; 180-second loading/inference timeout; finite normalized vector schema checks. English intended. Imported text is inert model data, never instructions or authority.

## Clock semantics

After human policy approval, consume the supplied budget only inside open-day/hour intervals, excluding listed holidays and the union of supplied pause intervals. Due can equal closing time exactly. A pause overlapping only nonworking hours adds no extra delay. Future/ongoing pauses are unsupported; a closed pause extending past a provisional due is still excluded according to the explicit interval. This is an agreed paused-clock planning convention, not validation that a particular SLA permits pauses. Fix source inputs and rerun if dates, calendar or budgets are wrong. No resolution/reopen or contract-tier logic is inferred.

The result is evaluated at the **fixed supplied asOf**, not the live machine clock. Due ≤ asOf is due/overdue; future-created requests are scheduled. Held requests have null due/budget/baseline fields, not invented deadlines. Original record order is preserved; this is not automatic dispatch.

The deterministic wall-clock baseline adds the same approved budget to creation without calendar/pause exclusion. `calendarAdjusted` counts approved dates that differ; `excludedWallMinutes` equals due-minus-created in minutes minus the budget. Neither is measured accuracy or a productivity estimate. Exact-description match coverage and human policy-change counts are computed separately.

## Review and artifacts

Every request must be approved or held. Changing a policy resets its approval; undo restores prior review state. Any edit invalidates the applied snapshot and disables export until reapplied. Cancel terminates the worker; monotonic run IDs prevent late callbacks or asynchronous imports from replacing newer input/results. Network/model/runtime failures give visible errors and retry; never fabricated suggestions.

Download JSON (complete originals, definitions, rankings, notes, decisions and all deadlines), CSV (all requests, pauses, reviewed policies, due/baseline/status) or Markdown (complete source-linked-by-ID checklist). Copy report matches Markdown download. JSON is lossless; CSV text beginning with spreadsheet formula characters is apostrophe-guarded. Every format retains held requests. No ICS export: this app does not imply that a deadline creates a scheduled staffed appointment.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish only through the collection root** so the gallery is not replaced. Base is `/daily-app2/20261109-11/`. Root `npm run predeploy` assembles every gallery app into `deploy/`; root `npm run deploy` publishes the combined site.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed tests and limitations. Run `node core-test.mjs`; serve production with `python3 serve-test.py`; then `node browser-test.cjs`, `node network-test.cjs`, `node cancel-download-test.cjs`, `python3 artifact-test.py` and `node audit.mjs`. Browser scripts expect the installed local Playwright/Chrome environment. Defensive injected failures are distinct from the successful real-model inference tests.
