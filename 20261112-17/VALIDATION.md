# Observed validation — 2026-11-12

## Production-bundle checks

Actual default MiniLM q8 CPU inference ran in desktop Chrome against the production build on two materially different synthetic batches:

| Fixture | Intended / actual task IDs | Required additions | Raw-lumen baseline | Missed areas under baseline |
|---|---|---:|---:|---:|
| Community workshop | storage, desk, craft, packing / all four matched | 10 | 1 | 3 of 4 |
| Repair cooperative | circulation, assembly, inspection, dispatch / all four matched | 28 | 8 | 4 of 4 |

Workshop budget 12 is feasible; repair budget 8 is insufficient. These are computed lighting scenarios, not measured illumination, time savings or broad model accuracy.

A negated sewing description incorrectly matched storage; unrelated credential-request text matched craft. Both remained pending, then held; no sizing released. Similarity is not task truth, standards compliance or measurement.

- Real 24-area maximum batch processed; originals and every review survived exported JSON/Audit CSV and JSON reimport with renewed pending decisions.
- Fresh worker recreated with network fully offline after warm inference; real inference passed. No offline reload/navigation claim.
- Downloaded JSON/CSV/Markdown and copied Markdown reflected edited area 17 and an escaped multiline quoted spreadsheet-formula-like note. Independent Python CSV parser checked every record and required fixture counts.
- Undo, task-change target reset, holds, invalidated exports, pending block, empty/malformed/oversized JSON, unsupported file formats, numeric boundaries, input edits and cancellation/retry passed.
- Real model-host download was intercepted, cancelled, and retried on a changed fixture; real inference succeeded with no stale overwrite.
- Delayed import and delayed worker-download stale guards passed. Fault-injected late old valid vectors could not replace new input.
- Network failure + real retry, worker-download error, unsupported worker runtime, actual-worker WebAssembly unavailable, malformed vectors, worker error and accelerated timeout all gave errors without fake output or exports. Fault injection is confined to these defensive checks.
- 3,000 independent BigInt oracle cases checked integer minimum fixture counts, exact whole-count inequalities, existing-count preservation, baseline counts and budget feasibility; schema and bounds passed.
- Additional real-AI browser boundary scenario: zero existing fixtures and zero budget, unity loss factors matching the raw-lumen baseline, and invalid lux target blocking passed.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts had no horizontal overflow; all input controls had explicit labels and focus worked. Physical mobile hardware and non-Chrome browsers untested.
- Browser startup through inference: no model requests before explicit loading; requests were public-file GETs without bodies or source content in URLs. No API/provider integration exists. Built-asset secret scan recorded separately; a pattern scan is not a universal proof.

Public publishing and asset checks are recorded below after deployment; local build success alone is not the release criterion.


## Public release

The first combined deployment reached GitHub Pages `built` at gh-pages commit `cd2496c1fc0136610698234dc6642130b7740a41` (workflow 43180379782). Public app, worker, module factory, shared WASM and complete gallery were byte-matched against local production output. Both real-AI fixtures and the full browser workflow suite—including warmed-page fresh-worker offline inference, downloads, review/undo, maximum batching, input guards, privacy requests and narrow layouts—passed at https://xianghui.github.io/daily-app2/20261112-17/ . Public gallery retained all 617 prior working-tree entries/categories and contains 618 entries with Lumen Ledger first. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json`. Physical device illumination and non-Chrome runtime behavior remain untested.
