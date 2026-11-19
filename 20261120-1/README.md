# Cover Calendar

A local-AI leave-planning worksheet for small-team coordinators. Informal staff descriptions are reconciled with an approved directory by real MiniLM embedding inference, then humans verify identities, dates and organizer priority points. An exact deterministic subset planner chooses whole requests while maintaining every team's minimum present on every workday. No HR system changes, messages or approvals are sent.

## Workflow

1. Choose either synthetic fixture, paste source JSON, or import a source/audit `.json` (≤2 MB). JSON fields: `context`, inclusive horizon `start`/`end`, `holidays`, `teams[{id,minimum}]`, `staff[{id,text,team}]` and `records[{id,text,start,end,priority}]`.
2. Edit the horizon, holidays and team minima in source; dates/priorities may also be edited in review. Click **Load AI & reconcile requests** to explicitly download/load the model. Progress shows downloads and four-text inference chunks. Cancel terminates the worker; retry starts a new run. Nothing runs before this click.
3. Inspect each suggested staff identity and its profile/cosine evidence. Correct the identity, dates and priority; approve the request or hold an uncertain identity. Similarity is not confidence or proof of identity. No request receives automatic approval.
4. **Apply reviewed requests** creates a reversible in-app draft. Compare exact selection with source-order feasible greedy under identical rules. Use **Pin grant** or **Force defer** on any reviewed request, then reapply; overlapping or capacity-breaking pins block allocation. Undo restores review edits. Any review/input change invalidates old exports.
5. Download complete audit **JSON**, all-request **CSV**, a daily/team **Coverage CSV**, or a **Markdown** worksheet; copy Markdown as an alternative. These reflect the current applied review only. JSON preserves every original and review, including held/blocked requests. Reimport intentionally restores originals only and requires fresh inference and renewed approvals. Text CSV cells starting `= + - @ tab CR` get a leading apostrophe to reduce spreadsheet formula interpretation. Numeric fields remain numeric; ISO dates and all multiline notes survive export.

## Real AI and static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX model approximately 23 MB plus tokenizer/configuration; model source revision resolved during validation: `751bff37182d3f1213fa05d7196b954e230abad9`. Host uses `main`, not a pinned revision: a future host update may require revalidation. No generative responses or remote model API.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread, normalized 384-dimensional mean-pooled embeddings. No WebGPU dependency. It computes staff and request vectors; deterministic cosine ranking proposes a profile. The selected worker's feature extraction implementation passes tokenizer `padding/truncation` but ignores per-call `max_length`; the real tokenizer model ceiling is 512 tokens, not the worker call's nominal 256. Descriptions are bounded to 300 characters. Four texts are processed at a time, at most 24 texts total.
- Preserve these **immutable same-origin** collection dependencies when assembling the site:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js` (548,645 bytes)
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` (53,057 bytes)
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes)
  Their complete paths, text/vector protocol and source implementation were inspected; hashes are in `runtime-dependency-audit.json`. Reuse avoids duplicating a large runtime within the Pages collection. This app's React assets are built locally with the real Vite base. There is no hidden server component.
- Current desktop Chrome on WASM CPU tested with GPU disabled. Needs WebAssembly SIMD, module workers, Cache API/secure context, internet for first download and several hundred MB free RAM. Modern desktop browser recommended. Physical phones, Safari/Firefox/Edge and low-memory devices are unverified; responsive layout was checked at 320/390 CSS pixels. No oversized general language model is promised.

## Privacy, caching and offline scope

The app has **no API keys or provider integrations**. All source content, embeddings, review decisions and planning remain in browser memory. Requests download model files from `huggingface.co` and its AWS CDN; they do not upload staff/request text. The local shared worker, module factory and WASM binary use same-origin assets. The worker source is cached explicitly under `cover-calendar-worker-v1`; factory and WASM use shared `circuit-cove-runtime-v1`; Transformers.js caches model/tokenizer files. Cache API stores public model/runtime assets, never the input JSON. Exports are user-initiated local files. Reload clears unsaved content.

After a successful online run, a terminated worker can be recreated for **real inference with all network disabled in the already-open page**; this was tested against production bundles locally and publicly. **Offline navigation/reload/app-shell startup is not promised.** Evicted/disabled caches require internet. Downloads still disclose normal network metadata to the file host, not the input content. A failed load shows an actionable retry/device/network error, never fake AI results.

## Exact planning and limits

- 2–12 full-time staff, 1–4 teams, 1–12 whole-day requests, inclusive horizon of 1–31 calendar days, years 2000–2099. Each team has staff and a minimum integer present from 0 to headcount. Every request must include at least one workday. At most 31 unique shared holiday dates inside the horizon.
- All staff work Monday–Friday. Shared holidays/weekends do not consume leave or require coverage; this is not a shift system. One team per person, no skills/part-time/half-day/entitlement/legal-policy model. No fairness guarantee: organizer points maximize a supplied objective, not employee merit.
- Source ≤50,000 characters; import envelope ≤2 MB; ASCII IDs 1–40 characters, context/descriptions 1–300 characters; review notes ≤1,000. Reviewed dates and integer priorities 1–100 are validated independently. Text is inert data, never tool authority or a credential request.
- Human holds and forced deferrals are not candidates. Pinned reviewed grants must be included. Enumerate up to 4,096 subsets; maximize sum of priority points, then prefer fewer person-days; equal ties retain stable enumeration order. At every day/team, headcount minus granted absences must meet minimum. Overlapping grants for one person are forbidden even if headcount would permit them. Requests are indivisible; no partial leave is invented.
- Baseline starts with the same pins and adds remaining eligible requests in original order whenever feasible. Displayed points/person-days are computed from supplied dates and priorities, not elapsed-time savings, inferred importance or accuracy claims.
- Input changes/cancellation increment the run identity and terminate workers. All asynchronous worker fetches, file reads and message handlers check identity. Runtime failure, malformed/nonfinite/mis-sized vectors, unsupported workers/WASM, network failures and 180-second timeout leave no fabricated suggestions. Strict output shape validation precedes any use.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Two materially different tiny synthetic fixtures matched all 6 intended identities. Workshop points 6 versus greedy 4; service desk points 9 versus 2, with all daily minima preserved and two person-days granted each. Sixty independent exhaustive random subset oracles matched the planner. This **does not establish general model accuracy**, identity verification, legal eligibility, fairness or operational fitness. Ambiguous equal-topic profiles in the maximum-batch fixture needed manual correction; unrelated/instruction-like text still picks a nearest profile, so humans must hold it. Dates/priorities are entered by humans, never inferred from prose. Verify actual availability and entitlements before acting.

Build: `npm install && npm run predeploy`. App keeps required `predeploy: npm run build` and `deploy: gh-pages -d dist`, but publication must run **the repository-root** combined workflow (`daily_app2` package), never this app's deploy command. The root gallery and shared assets must ship together. Test scripts use the workspace Playwright installation and local Chrome; `serve-test.py` serves production builds at port 7010, `serve-assembled.py` serves assembled deployment at port 7011. No test script needs private documents or model-provider credentials.


### Combined-site size guard

Initial root assembly exceeded the existing conservative 1 GB budget (1,000,204,680 bytes). The existing deploy-only, byte-identical geometry-sharing rule was extended by one app: `20261028-14` now references immutable `20261028-24/assets/manifold-BE4c7gO-.wasm` (541,470 identical bytes). Original source builds and old JS URLs remain intact; worker/shell references are query-versioned. Preserve shared host `20261028-24`. Assembled site: 999,663,415 bytes, 734 gallery entries. Real old-app default, PNG and binary-STL imports produced three distinct, closed, outward-wound valid STL downloads; see `legacy-runtime-validation.json`. This is collection maintenance, not the new app’s workflow.


Public release passed on the first deployment: Pages commit `aee7e95d00c777c77380f52f598823c54a429f96` reached `built`, matching a successful build/deploy workflow. All 13 public app/gallery/runtime/affected-legacy asset byte checks, both real-AI known fixtures, the full review/export/privacy/offline/max-batch browser suite, independent artifact parsing, preserved 734-card gallery and older-app import/export checks passed. No public page errors. Source staging excludes unrelated pre-existing edits; no digest sent.
