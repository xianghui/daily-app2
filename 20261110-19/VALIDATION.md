# Observed validation — Resolution Tide

## Local production bundle

- `npm run predeploy`: passed. Runtime/worker code is locally bundled; MiniLM is actual q8 browser WASM inference, not a mock. New production build is 889,105 bytes excluding the shared immutable 26,861,777-byte WASM.
- Real Chrome ran **Office requests** and **Workshop jobs**, 12 observations each with different process vocabularies. All 24 intended stream proposals matched; literal stream-title substring baseline matched zero notes. These tiny friendly fixtures are not general accuracy estimates. Both streams in both examples have completed-only median 4 days, Kaplan–Meier median 6 days and estimated completion by day 5 of 0.375. No observed productivity/time improvement is claimed.
- Negation challenge correctly selected reimbursement, but unrelated instruction-like astronomy text still received a nearest stream. It neither changed authority nor requested a credential. Human holds are essential; similarity is not membership validation.
- `core-test.mjs`: **1,800 generated cases**, independent direct risk-set/product recomputation, median and horizon checks, record removal/conservation, tied event/censor order, zero durations, all-censored samples, incomplete streams, holds, missing assumption confirmation, malformed vectors and original-input audit reimport passed.
- Browser workflow: mandatory per-record review; corrected duration/state; approval invalidation; undo; held audit; no-analysis guards; all-open medians remain null; target beyond follow-up remains null; max 64 observations batched four texts at a time; original-input roundtrip; no lost records.
- Actual JSON, CSV and Markdown downloaded; clipboard equals current Markdown. Independent Python CSV parser checked all 12 current IDs, original and edited numeric/state fields, sources, decisions, streams, quoted multiline Unicode notes and formula-safe text. JSON max-64 roundtrip preserves originals, not approvals. Python independently recomputed exported risk sets. Held items survive complete blocked audits.
- Cached online worker terminated; browser network disabled; **fresh-worker real inference passed** in the already-open production page. Offline reload/startup is untested and not claimed.
- Empty, invalid, null, oversized, duplicate IDs/streams, bad durations/horizon, over-64 batches and unsupported file inputs showed errors with no fabricated results.
- Actual model-host failure showed an actionable error; unblocking and real retry passed. Cancellation during an intercepted real weight request and real retry passed. Delayed file reads and worker downloads cannot overwrite changed inputs.
- Defensive injection only: malformed vectors, unsupported module-worker constructor, missing WebAssembly error, timeout and post-cancel stale callbacks. All were rejected; restored real inference succeeded. Successful AI fixture tests never used injection.
- Request audit: startup through model inference has no model requests before explicit action; every observed request is GET with no body, only same-origin assets, Hugging Face downloads and local blob workers. No input content in URLs. Built-text credential-pattern scan had no matches; inspected source has no remote provider or credentials. This is not a claim of exhaustive secret detection.
- Desktop 1280 px and narrow 390/320 px Chrome viewport checks: no document horizontal overflow, all inputs/selects/textareas labeled, focus works, primary controls ≥44 px, current reviewed exports work. Screenshots captured and inspected. Real physical phones, other browsers, screen-reader behavior and constrained-memory devices remain untested.

See machine-readable `browser-validation.json`, `core-validation.json`, `artifact-validation.json`, `network-validation.json`, `cancel-download-validation.json`, `import-stale-validation.json`, `asset-validation.json` and screenshots.

Additional boundary check: six streams and 64 items (six distinct repeated descriptions) ran real inference; all 64 proposals matched intended streams, all records survived six analyses, and the applied 320 px result had no overflow. This is a boundary fixture, not 64 independent language-quality examples. See `boundary-validation.json`.

## Combined collection and public release

Combined-site and public verification outcomes are recorded separately below and in `publication-status.json`. A successful branch push alone is not a verified public release.

Root predeploy and npm deployment lifecycle both assembled **575** entries with no failed/skipped builds. New app and root gallery were byte-identical to the individual validated build/source; combined size **912,164,716 bytes**, below the existing 1,000,000,000-byte guard. The full real-inference/review/export/defensive suite was rerun against the assembled production paths. Rendered gallery counts, newest entry, AI Utilities first, older STL/game categories, oldest-app search and new link passed.

### Public release — verified

GitHub Pages workflow [42796663114](https://github.com/xianghui/daily-app2/actions/runs/42796663114) completed successfully for gh-pages commit `44059d21660463e0d9ececc85e7a48f9a624f5d5`; Pages reports built for the same commit. [Public app](https://xianghui.github.io/daily-app2/20261110-19/) HTTP 200. Every public built file, worker/factory and shared WASM matched local bytes/hashes; public gallery matched current source. Both public real-AI fixtures again matched 24/24 links. The complete production browser suite, offline fresh-worker check, 64-item batching, review/edit/undo/holds, downloads/clipboard, mobile layouts and defensive failures passed on the public URL. Public 575-entry gallery, old categories/search and new link passed. No retries were needed. See `public-asset-validation.json`, `public-browser-validation.json`, `gallery-ui-validation.json` and `hosting-attempts.json`.
