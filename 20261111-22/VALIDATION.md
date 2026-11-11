# Observed validation — 2026-11-11

All inputs, source notes and downloadable artifacts are synthetic. Tests use the actual Vite production bundle and real current desktop Chrome (headless), not a development model stub. Fault injection is isolated to defensive tests only.

## Actual local AI

- **Print workshop:** 6/6 intended equipment links. Press P1/P2 overlap and union into 08:30–09:40; cutter touching intervals merge; binder is clipped to shift start; a post-shift note remains in the audit. Naive clipped sum **160 asset-minutes**, union **140**, removed double count **20**.
- **Community laundry:** 6/6 intended links. Nested washer report adds no downtime; dryer overlap merges; late iron interval is clipped; pre-shift note remains. Naive sum **180 asset-minutes**, union **150**, removed double count **30**.
- Exact equipment-title lookup resolved 0/6 in both fixtures. Real embeddings enabled the semantic proposals; these 12 simple links do **not** establish general accuracy. Human-reviewed agreement is not independent accuracy.
- **Negation failure observed:** “Not the offset printing press. It was the guillotine blade on the cutter.” was proposed as **press**, not intended cutter. Unrelated instruction-like Jupiter text also received press. Both were held. This model always chooses a nearest asset, so review/rejection is essential; there is no invented certainty or automatic safety threshold.
- Actual maximum **6 assets + 12 records**, 40-character IDs and 400-character descriptions/notes passed real inference, narrow layout, full JSON audit reimport and pending-review reset. Four-text batches and vector validation execute on all runs.

## Arithmetic and artifacts

- **2,400 independent randomized minute-grid oracle cases** checked window clipping, union durations, touching/nested merges, baseline sums, removed overlap, complement conservation, held and unobserved availability suppression. Review guard, invalid intervals and malformed embeddings also tested (`core-test.mjs`, `core-validation.json`).
- Every asset satisfies union downtime + complement minutes = reporting duration. Union never exceeds duration; naive − union = removed overlap. No availability is emitted for assigned holds or no approved observations.
- Downloaded **JSON/CSV/Markdown** parsed independently with Python standard JSON/CSV parsers. Every original and reviewed field checked; time edits preserve originals, quoted commas/newlines survive, multiline formula-like text is apostrophe-protected in CSV. Independent minute-grid totals agree with downloaded summaries (`artifact-validation.json`).
- Review edits invalidate old exports. Identity undo, time correction, all-held output, discard/reapply, JSON reimport and clipboard identical to downloaded Markdown passed. Audit reimport intentionally restores originals, not approvals.

## Defensive/browser checks

- Empty, malformed, null, oversized, duplicate-ID, bad interval and unsupported-format input blocked. Invalid reviewed times cannot be applied/exported.
- Cancellation/retry, changing input during processing, delayed file-read completion, cancelling a delayed worker-source fetch and then a real-model retry passed. Old source cannot replace the current input/results. A separate defensive worker that deliberately ignores termination and sends late valid vectors was also rejected by run identity (`stale-result-validation.json`).
- Fresh-context model network failure, worker-download failure, unavailable module workers, actual worker without WebAssembly, malformed vectors, worker error and 180-second timeout path (timer accelerated by test only) all show actionable errors, empty review/results and disabled exports. Network recovery retry runs the real model. No fallback output exists.
- Widths **1440, 390, 320**: no horizontal overflow, labelled forms, focusable input, ≥44px buttons and working artifact actions. Screenshots saved; physical phones, other browsers, screen-reader audit and low-memory hardware not tested.
- Initial page sends no model-host traffic before explicit run. Recorded production requests all GET with no bodies or source content in URLs. Hosts observed: app origin, huggingface.co, us.aws.cdn.hf.co. No credentials or remote inference path exists; built text asset credential-pattern scan passed. A scan is not a universal proof.
- **Offline scope actually tested:** after online inference, disable all network, terminate the worker and run another real inference in the already-open page. New-worker inference and export passed. Offline navigation/reload, cache eviction and private mode are not claimed.

## Deployment

Individual `npm run predeploy` passed. Root combined `npm run predeploy` assembled all **599** current gallery apps (0 failed, 0 skipped). Every entry has an index, new build assets and preserved shared WASM are byte-identical. Every inline gallery script compiles with `new Function`; entry is exactly once in `ai-utility`, with all **598** prior entries/order unchanged. Existing categories remain distinct.

Combined/public browser and asset checks are recorded separately in `combined-*-validation.json`, `public-*-validation.json` and `publication-status.json`. Publication is complete only after Pages serves the matching branch commit and public real inference/runtime checks pass. Tests and known limitations above are local observations, not claims of general uptime accuracy.


## Public release verified

First Pages deployment completed successfully for `4cb26e56ab360e1c33ae4989894107584905c695` (workflow 43026591417). An early readiness probe returned 404 while Pages was still building; after built status, every public app/worker/runtime asset and shared WASM matched local SHA-256 hashes, and the 599-entry gallery was byte-identical. The complete public real-model/browser suite passed, including both fixture mappings, reviewed artifacts, maximum batches, fresh-worker offline inference, responsive layouts and request privacy checks. Public gallery rendering preserved old categories and the newest-first entry. See `public-browser-validation.json`, `public-validation.json` and `public-gallery-validation.json`.
