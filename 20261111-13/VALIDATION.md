# Watt Folio — observed validation

## Real AI and quality (production bundle)

Installed desktop Chrome headless via Playwright; actual Transformers.js MiniLM q8 WASM CPU. No mocked pipeline for any successful inference checks.

| Synthetic fixture | Expected / actual profile sequence | Current / proposed kWh | Reduction kWh | First-profile baseline kWh |
|---|---|---|---|---|
| Office day | computer, computer, light, light: 4/4 | 33.600 / 24.000 | 9.600 | 57.600 |
| Community room | fan, fan, heater, heater: 4/4 | 198.000 / 103.500 | 94.500 | 24.000 |

8/8 tiny known-answer links matched vs 4/8 always-first-profile links. This is not a population accuracy estimate, measured electricity reduction or meter validation. Targets in the supplied examples intentionally remain unmet (20 kWh and 100 kWh); tested target equality, zero and just-over boundaries in independent core checks. Model suggestions materially changed assigned wattages and energy outputs. Known adverse result: “Not a laptop computer. This is an electric desk lamp.” incorrectly selected computer. Irrelevant instruction-like prose also selected computer rather than abstaining. Both challenge rows were explicitly held; no network/credential action occurred. Mandatory review is essential; semantic similarity does not establish identity or safe power draw.

## Browser workflow and constraints

- Production build, locally assembled bundle and public checks have separate machine-readable reports.
- Maximum 6 profiles / 24 appliance records processed in four-text batches. All 24 IDs and rows conserved; JSON reimport restored originals and required renewed review. Exact current = planned + saved integer watt-minutes and target comparisons independently checked for every approved record and total.
- Core checks cover maximum numerical dimensions, identity/order mismatch, duplicate IDs, bounds, all-held, no-reduction, malformed vectors, target thresholds. Energy sums remain safe integers; costs are labeled fractional-cent estimates.
- Review profile changes copy supplied watts and renew approval; edits disable exports; undo restores snapshot. Wattage edits, multiline quotes and formula-leading notes survived independent Python CSV parsing. Complete JSON/CSV downloads retain all rows including holds. Markdown download equals copied clipboard text.
- Real fresh-worker inference succeeded with all browser networking disabled in the already-open page after online cache warmup. Offline page reload/navigation NOT claimed or tested.
- Fresh-page network capture: no model-host download before explicit load; all observed requests GET without bodies. Only local/blob assets and documented model/CDN downloads occurred. User text never appeared in request URLs/bodies; no provider integration exists. Built text asset credential-pattern scan passed; not an exhaustive security proof.
- Empty/malformed/oversized JSON; invalid reviewed watts/counts/minutes/settings; wrong file type and >1 MB import all blocked.
- Model-host network abort and real retry, worker-download abort, worker construction/error, malformed worker output, accelerated timeout and unavailable WebAssembly all produce errors without fake results. Fault injection is used only for defensive tests, never evidence of real AI quality.
- Real cancel/retry and input-change tests plus intentionally late terminated-worker messages, delayed file reads and delayed worker fetches verify identity guards prevent stale state writes.
- 1440, 390 and 320 px layouts: no document horizontal overflow; every form field has a label; keyboard focus verified; controls have 44 px minimum size. Physical phones, screen-reader usability and browsers other than installed Chrome are untested.

## Build / collection

`npm run predeploy` passed. A source syntax error found during initial implementation was fixed; an initially incorrect hand-calculated test expectation was corrected against independent arithmetic, not by changing application output.

Gallery inline script compiled using Node `new Function`; exactly one `20261111-13` entry in AI Utilities; all 589 baseline entries/objects/order preserved, now 590. AI Utilities appears first; old STL, game and SaaS categories remain. Root predeploy: 590 built/copied, 0 failed, 0 skipped. Combined site approximately 925 MB after existing runtime deduplication. Assembled app files match dist byte-for-byte and immutable shared WASM SHA-256 matches documented hash.

See `browser-validation.json`, `combined-browser-validation.json`, `defensive-validation.json`, `core-validation.json`, `artifact-validation.json`, `late-result-validation.json`, `stale-import-validation.json`, `assembly-validation.json`, `gallery-validation.json`, `combined-gallery-validation.json` and `secret-scan.json`.

## Publication

Publication outcome, actual Pages commit/status and public AI/runtime checks are recorded in `publication-status.json` and `public-*-validation.json` / `public-validation.json`. A branch push alone is not public verification.

Final outcome: **published and public-AI verified** at https://xianghui.github.io/daily-app2/20261111-13/ . Root `npm run deploy` published commit `3af00dbce6868006d6e95746be522bc6ad2c158a`; Pages reports `built` for that exact commit. Public production browser suite passed both real-inference fixtures, fresh-worker offline inference, review/edit/undo/hold/export, maximum batching, cancellation and responsive checks. Public worker, runtime factory, app assets and immutable shared WASM hashes matched local production bytes; public gallery matched assembled source exactly and retained all categories. One early verification request while deployment was still in progress returned 404; verification was retried only after Pages reached built and then passed. No rebuild trigger or repeated republish was needed.
