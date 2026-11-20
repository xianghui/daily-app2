# Climate Ledger

A local-AI daily energy-review worksheet for small-building analysts. Informal diary descriptions often disagree with canonical meter names; MiniLM links each daily observation to the relevant site. Review every link/measurement, hold uncertain rows, fit separate before/after lines and compare daily energy at a common observed degree day. Export the reviewed worksheet, not a live control or verified-savings claim.

## Use

1. Choose Heating diaries or Cooling diaries (all data synthetic), paste JSON, or import source/full-audit `.json`.
2. Set site descriptions, HDD/CDD, temperature base and reference degree day. Supply **daily** kWh and degree days, a date, before/after period and source note. Same meter boundary and base must apply in both periods.
3. Explicitly click **Load AI & reconcile**. Inspect cosine-ranked source descriptions. Correct site/degree/kWh, approve or hold **each** observation and optionally add multiline notes. Undo restores previous review edits. Nothing is approved automatically.
4. Apply reviewed checks. Any source edit cancels inference and removes old suggestions; any review edit invalidates exports until reapplication.
5. Download full JSON, complete Audit CSV, per-site Summary CSV, or Markdown; Copy worksheet copies current Markdown. Audit JSON import restores originals only, requiring fresh inference/review. No external actions are performed.

## Real AI and deployment

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. Quantized q8 ONNX, mean-pooled normalized 384-dimensional neural embeddings. Notes and site descriptions are embedded; cosine nearest-site retrieval proposes identities, with a user-supplied minimum similarity. Scores are **not confidence**; unrelated or negated prose can match incorrectly. English short descriptions work best. AI neither extracts readings nor certifies identity.
- Browser runtime: Transformers.js **4.3.2**, WASM CPU, one thread, four texts/batch. No WebGPU or API keys. The shared tokenizer ceiling is **512 tokens** (verified in installed tokenizer config); the shared worker's `max_length:256` feature-extraction argument is not an enforced 256-token limit. Inputs restrict every description/note to 300 characters.
- Preserve immutable same-origin assets: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Worker contains the full bundled Transformers runtime; no runtime CDN imports. These existing apps must remain published. Asset hashes and dependency audits are recorded separately.
- Initial internet requirement: about **23 MB model + 27 MB WASM**, plus ≈550 KB bundled worker and small tokenizer/config/factory downloads, from Hugging Face/CDN and this site. Model `main` revision is unpinned and may change. Loading exposes progress, cancel, explicit errors/retry and a 180-second timeout. No deterministic/fake model fallback exists.
- Current secure-context browsers need module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. Desktop Chrome CPU was tested. Phone viewport layout was tested, **not** physical phones or other engines. Unsupported runtime gives an actionable error, not fabricated output.
- Worker source, factory, WASM and model files use Cache API; eviction/quota/browser privacy settings can remove them. After one successful online run, **fresh-worker inference in an already-open warmed page** was tested with all network disabled. Offline reload/navigation is not promised: no app-shell service worker is installed.

## Privacy and limits

User notes/readings stay in local worker memory. Explicit model loading downloads files; it does not upload content. No analytics, remote-inference provider, account integration or credentials. Nothing saves automatically. Downloaded audits contain original notes and reviewer comments; keep them according to your data policy. Imported instructions are text data, never executable commands or tool authority.

Source: ≤50,000 characters, context ≤300 chars, 1–6 sites, 1–80 uniquely identified records. IDs are bounded safe alphanumerics/underscore/hyphen. Dates must be real ISO days. Notes/site descriptions ≤300 chars; review notes ≤1,000 chars. Daily degree days 0–60, kWh 0–1,000,000, temperature base −20 to 40 °C. JSON files ≤2 MB, allowing a maximum-size audit to restore its bounded original input. CSV import is not supported; CSV exports are spreadsheet-safe (formula-like text gets a leading apostrophe), while JSON preserves exact original strings.

## Deterministic method

For each reviewed site and period, ordinary least squares fits `daily_kWh = intercept + slope × daily_degree_days`. At least four approved observations and nonconstant degree days are required. A negative fitted intercept or slope marks a site unsuitable; no silent clipping. Duplicate approved site/day observations block apply. Reference must lie in **both** observed period ranges; no extrapolation. A site lacking evidence remains an explicit recheck, while complete audits preserve all records including held ones.

**Raw baseline** is before mean kWh minus after mean kWh, at their actual weather mixes. **Same-weather reduction** is fitted before minus after at the supplied reference degree day. Positive means lower after use, negative means higher. Equations, observations, common support and in-sample RMSE are inspectable. Sites/energy boundaries are never summed. RMSE is descriptive fit error, not forecast accuracy. No invented improvement percentages or timing claims.

These are descriptive regressions, **not causal or verified savings**. Occupancy, production, meter/fuel changes, seasonal loads, chosen balance temperatures, omitted cooling/heating, nonlinear relationships, autocorrelation and outliers can invalidate interpretation. No uncertainty interval, out-of-sample validation, change-point detection or weather API is provided. Data frequency and consistent bases are human checks; software cannot establish those from values. Use this to prepare a review/recheck worksheet, not to release savings claims.

## Development & publication

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite base `/daily-app2/20261120-23/`. Required per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` are retained; **publish only from repository root** via combined `deploy/`, never individual deploy.

See VALIDATION.md and generated reports for observed tests/limitations. Browser scripts use the locally installed Playwright/Chrome; synthetic fixtures and independent Python CSV parsing check artifacts. Fault injection is used only for defensive failures; successful model checks always execute real CPU inference.

Combined-site size maintenance: the unchanged <1 GB guard required extending existing byte-verified deploy-only legacy geometry WASM sharing to `20261028-3` → `20261028-24`. Original source builds and JS compatibility URLs remain; real geometry worker, PNG import and checked STL export were retested against the assembled site. See `legacy-runtime-validation.json`; public recheck is required before release.
