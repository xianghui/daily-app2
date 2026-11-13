# Observed validation — 2026-11-14

## Production-bundle checks

- `npm run predeploy`: passed React/Vite production build.
- Real MiniLM q8 inference in headless installed Chrome on WASM CPU with GPU disabled. Print jobs: fabric/paper/fabric/paper; packing jobs: chill/dry/chill/dry. **8/8 intended links** on these tiny synthetic fixtures, not an accuracy estimate. A separate four-note indirect paraphrase challenge also matched 4/4 intended families (`paraphrase-validation.json`); this is not evidence of general accuracy.
- Print: 29 processing + 12 setup = 41 planned elapsed minutes, versus FIFO 29 + 64 = 93 and two late jobs. Packing: 30 + 9 = 39 versus FIFO 30 + 48 = 78 and two late jobs. Planned queues have zero late jobs and preserve all jobs. Results reflect assumptions, not measured savings.
- An unrelated instruction-like note still receives a nearest family. It stays pending; holding blocks scheduling and retains the source. This shows a retrieval limitation, not prompt execution.
- 600 independently generated scenarios with 1–7 jobs and asymmetric setup checked against a separate recursive enumeration of all feasible permutations. Optimal completion/infeasibility, exact totals, no overlap, all deadlines and job conservation passed. Maximum 10-job inference/scheduling/export/reimport also passed.
- Review required before apply; multiline formula-like owner/notes survive JSON, escaped CSV and Markdown. Duration/family/deadline edits alter plans; zero duration rejected; impossible deadline produces a complete blocked audit. Hold/undo/reimport and clipboard tested. Independent Python CSV/JSON parsers checked four real browser-downloaded batches, positions/times and all sources.
- Empty/malformed/oversized/duplicate inputs, bad matrix/start state and unsupported PDF rejected. Cancellation/retry, stale input, model/network abort recovery, worker-download failure, unsupported worker construction, malformed embeddings, worker errors and 180-second timeout handling passed. Defensive fault injections are separate from successful real-model runs.
- No model downloads before explicit loading. Captured default-path traffic is GET-only with no bodies, limited to same-origin runtime and documented model hosts. Source inspection finds no uploader/provider integration. Built-text credential-pattern scan found no hits; this is not a universal secret detector.
- Online warmup followed by network-disabled **fresh worker** real inference passed. Scope is the already-open warmed page only; offline reload/navigation NOT tested/promised.
- 1440/390/320 px layouts, no horizontal overflow, labels, keyboard focus, 44px minimum buttons and working actions checked. Desktop and 320px result screenshots visually inspected. No physical phone inference or non-Chrome browser tests.

Evidence: `browser-validation.json`, `defensive-validation.json`, `oracle-validation.json`, `artifact-validation.json`, `asset-validation.json`, and `model-cancel-validation.json`. Test scripts/fixtures are synthetic. Publication verification is recorded separately; a build or branch push alone is not a public-release claim.


## Verified public release

Root predeploy/deploy passed (650 apps; no failed/skipped builds). Pages commit `893a17d1bd8931b19619b42b5d3c810b820167b5` reached `built`. All public app files, worker, local factory and shared WASM were byte-matched to production files. Both real-AI fixtures and all nine public workflow groups passed, including fresh-worker offline inference, 10-job round-trip, review/undo, downloads/clipboard and desktop/phone layouts. Public gallery rendering/search retained all 649 previous working-tree entries and earlier categories. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-ui-validation.json`, `combined-assembly-validation.json` and `publication-status.json`. No physical-device inference or offline reload/startup claim.
