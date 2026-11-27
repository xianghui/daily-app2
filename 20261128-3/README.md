# Exposure Folio — 20261128-3

A collections assistant’s light-budget worksheet. Local AI reconciles informal object descriptions with supplied sensitivity profiles, followed by reviewed cumulative-exposure accounting and a bounded daily-duration plan. It is not a chatbot, material identifier or conservation clearance.

## Workflow

1. Choose **Gallery rotation** or **Store-to-display review** (synthetic fixtures), paste source JSON or import `.json`. Supply institutional profiles, object notes, already-used exposure and the proposed display.
2. Explicitly **Load AI & match profiles**; watch download and four-text chunk progress. Cancel terminates the worker; the same button retries.
3. Inspect ranked descriptions, cosine similarities (not confidence) and original assumptions. Correct profile links and all six numeric fields, add multiline notes, approve or hold each object. Profile or numeric changes reset approval. Undo retains the last 30 review changes. Originals are never overwritten.
4. **Apply reviewed worksheet**. See cumulative misses that a peak-lux-only check overlooks, and the largest equal daily duration in quarter-hours within supplied limits. All edits invalidate the applied/export snapshot.
5. Export complete JSON, Audit CSV or Markdown, copy the handoff, or download Plan CSV only when every object is approved and feasible. Reimported audits restore original source only; saved recommendations/approvals are not trusted.

## Real AI and static runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Real neural inference makes normalized, mean-pooled 384-dimensional vectors for profile descriptions and object notes; cosine ranking suggests a policy link. A watercolor paraphrase can link to the paper policy without literal ID matching. The link selects peak and cumulative limits, which humans must verify.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web **1.31.0-dev.20260914-8d85527a0**, MIT. Shared origin package/lock: `../20261115-6`. Default one-thread WASM CPU: WebGPU is neither needed nor used. No server, API key, paid service or optional remote provider.
- Same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; CPU factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps and these URLs. Byte sizes and SHA-256 are in `runtime-provenance.json`; sharing avoids 27 MB duplication.
- Worker protocol inspected: `{id,texts}` → progress/batch → result vectors. Inputs limited to 20 short texts, four per chunk; count, finite 384 dimensions and near-unit normalization validated before ranking. Shared tokenizer actually caps at 512 tokens. Do not rely on the pipeline’s `max_length:256` option as an enforced limit; every embedded note/description is ≤200 characters.
- First load needs about **50 MB**: ~23 MB model/tokenizer + ~27 MB WASM and bundled worker/factory. Internet to this site, Hugging Face and its CDN; a current browser with WebAssembly SIMD, module workers and several hundred MB free memory. Tested desktop Chrome with GPU disabled. Physical phones and other browser engines are untested.
- Cache API retains worker, factory, binary and model files when permitted. Tested scope: **fresh-worker real inference, network disabled, in an already-open warmed production page**. Offline cold navigation/reload is not supported. Cache eviction/private-mode restrictions require redownload. The shared model revision is unpinned and may change upstream.

## Privacy, failures and authority

Only model/runtime files download; notes are processed within the browser worker and never uploaded. Input/review are in memory except explicit file exports. No analytics, credentials, account access or light/equipment controls. Text cannot change runtime URLs, gain tool authority or ask for credentials. Reports retain external paths/query-key names, never signed CDN query values.

Run identities, aborted fetches, terminated workers and guarded file reads prevent stale/cancelled work from winning. Empty/bad/oversized input, invalid schemas/numbers, unsupported runtime, network/model errors, malformed vectors, worker errors and 180-second timeout fail visibly without fabricated AI results. Retry is explicit. The build is credential-pattern scanned alongside code and browser-request inspection, not an absolute secret-detection guarantee.

## Source and output schemas

Source JSON `{title, profiles, records}`; examples in `src/core.js`.

- Title 1–100 characters. Source ≤30,000 characters; file ≤1 MB, including metadata-rich audit envelopes. Profile count 2–8; object count 1–12. IDs unique within each list, 1–24 letters/digits/hyphen/underscore. Notes/descriptions 1–200 characters; reviewer notes ≤1,000. Unsupported control characters and malformed Unicode rejected. Strings are not silently coerced to numbers.
- Profile `{id,description,maxLux,annualLuxHours}`. Peak cap 1–2,000 integer lux; period budget 1–1,000,000 integer lux-hours.
- Record `{id,note,usedLuxHours,lux,days,requestedHours}`. Used exposure 0–1,000,000 integer lux-hours; proposed lux 1–2,000 integer; days 1–366 integer; hours 0.25–12 in quarter-hour increments. All dates/days and used exposure must belong to the same accounting period; the app does not infer a period or roll budgets forward.
- `exposure-folio-v1` JSON preserves source, all review rows/candidates, calculations and summaries. Audit CSV preserves every occurrence with its source note and reviewed assumptions. Full original numeric values remain in JSON. CSV quotes commas/quotes/newlines and uses CRLF; formula-like strings beginning `= + - @ tab CR` gain an apostrophe, while numeric fields remain numeric. Markdown retains all objects/statuses and reviewer notes.
- Plan CSV is gated on approval and feasibility for **every** source record; it includes ID, profile, lux, days, daily hours, planned dose and period total. Holds/infeasible objects stay in complete audits and block release, rather than being silently dropped.

## Deterministic calculation and honest baseline

Remaining budget `R = annualLuxHours − usedLuxHours`; requested dose `D = lux × days × requestedHours`. Requested pass requires `lux ≤ maxLux` and `D ≤ R`.

For passing peak illuminance and positive headroom, maximum equal daily quarter-hours `Q = min(48, floor(4R / (lux × days)))`. Proposed quarter-hours are `min(Q, 4 × requestedHours)`; otherwise zero. All multiplication/division operands for this decision are bounded integers, avoiding an epsilon-based budget waiver. A valid plan needs at least one quarter-hour/day. This independently maximizes each object's daily duration no greater than the request; it does not allocate shared rooms or choose calendar slots. If lux exceeds the peak cap, shortening duration cannot fix that cap.

Peak-only baseline checks only `lux ≤ maxLux`. “Cumulative misses” counts its false passes against the full requested-exposure check. “Removed object-hours” sums `days × (requestedHours − plannedHours)` over **all audit objects**, including holds and infeasible cases; this is an arithmetic planning difference, not saved staff time, fading reduction or measured accuracy. These formulas use current reviewed assumptions. Review can change outcomes.

## Limits

Mandatory review: the model can confuse materials, miss negation and always chooses a nearest profile even for irrelevant text. A specific negated marble-versus-watercolor challenge selected PAPER, incorrectly. Four easy fixture links passing is not general accuracy. Supply expert-approved profiles: synthetic example values are not universal safe limits.

The budget model assumes constant measured lux, complete exposure history and one accounting period. It does not model ultraviolet, spectral distribution, reciprocity failure, material condition, pigment sensitivity, conservation damage, peak fluctuation, opening-hours scheduling or light-controller behavior. Equal daily hours need not be operationally available. No inferred material, displayed calculation or exported worksheet certifies an object safe for display.

## Build, reproduce and publish

React + Vite, base `/daily-app2/20261128-3/`. `npm install`; `npm run predeploy`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained. **Publish only through root combined-site commands**, not this app's deploy.

Tests: `node core-test.mjs`; `python3 serve-local.py`; `node browser-test.cjs`; `python3 artifact-test.py local-`; `node defensive-test.cjs`; `node recovery-test.cjs`; `node import-race-test.cjs`; `node model-cancel-test.cjs`; `python3 security-audit.py`. Browser tests use installed Chrome and workspace Playwright. `APP_URL`/`PREFIX` select assembled/public bundles. Fault injection is defensive-only; successful workflow/offline checks execute real inference. See `VALIDATION.md` for observed checks and `publication-status.json` for hosting state.
