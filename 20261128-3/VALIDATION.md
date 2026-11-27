# Exposure Folio — observed validation

## Real model and workflow

Production Vite bundle tested in installed desktop Chrome, headless, with GPU disabled. Default inference used the actual shared Transformers.js q8 MiniLM WASM worker; successful results were not mocked.

- Two materially different synthetic batches: watercolor/oil gallery rotation and silk/marble store-to-display review. All **4/4 simple known-answer profile links** matched. Resulting daily plans were **[3, 8]** and **[2, 8]** hours respectively. Each batch had one cumulative-budget miss hidden by the peak-only baseline. This is a tiny fixture result, not a general accuracy estimate.
- Negation challenge “Not a watercolor on paper. This is a solid carved marble sculpture with no paint.” incorrectly selected PAPER. An irrelevant instruction-like note also selected PAPER (nearest-class behavior); it did not request credentials or upload content. Human policy/material review is mandatory.
- Maximum batch: 12 objects, 8 profiles, five actual embedding chunks, no missing rows, complete downloads and audit reimport/rerun.
- All six numeric fields edited individually; changes reset approval and invalidate exports. Profile relinking copies caps and resets approval. Multiline formula-like reviewer text survived the applied audit, CSV and Markdown. Hold, undo, clipboard, complete audit and gated plan behavior tested. Empty numeric review blocks exports.
- Peak-cap violation, exhausted period budget and sub-quarter-hour headroom explicitly block Plan CSV without losing audit records.

## Independent arithmetic and artifacts

`node core-test.mjs`: **2,560** combinations matched an independent enumeration of all allowed daily quarter-hours. Covers max lux, period budget, prior exposure, days and requested duration; no feasible plan exceeds its budget. Malformed normalized vectors, pending/held release checks, source/control/Unicode rejection and source-only audit restore also checked.

`python3 artifact-test.py <prefix>` independently reopens actual browser downloads using Python’s CSV parser and `Fraction` arithmetic, recomputing the maximum allowed duration by enumeration. Each full suite produces **25 downloaded audit envelopes**, plus CSV/Markdown/plan artifacts where applicable. All original IDs/order/record counts and reviewed values are compared; quotes, commas, multiline formula-like notes and export gating verified.

## Runtime, failure and privacy checks

- Online model warming followed by network-disabled **fresh-worker real inference in the same open production page** passed. Offline cold navigation/reload, physical phone memory/performance and non-Chrome engines are not claimed.
- No model-host requests before explicit load. Observed requests were GET file downloads, without request bodies or source-note values in URLs; external requests were Hugging Face/CDN only. Persisted network reports strip signed query values.
- Real worker-fetch and model-host aborts yielded visible errors, no fake recommendations. Actual delayed model download cancelled cleanly and successful real retry followed. Same-page worker-download failure recovered with real inference.
- Fault-injection-only defensive tests covered missing Worker/WebAssembly, worker construction/error, malformed vectors and accelerated 180-second timeout. Delayed old schema-valid result/error after a newer real run could not replace its output or status. Delayed file import could not overwrite newer inputs. Cancelled worker fetch could not construct a late worker.
- 17 empty/invalid/oversized source cases plus invalid file extension, invalid JSON and >1 MB import checked.
- Credential-pattern scan of built text assets plus source and network inspection found no embedded credentials. Immutable worker/factory/WASM SHA-256 and byte lengths verified (`runtime-provenance.json`). This is bounded audit evidence, not absolute secret detection.

## Layout and gallery

1440, 390 and 320 px viewport checks: no horizontal document overflow, all form controls labeled, button/input/select touch targets ≥44 px, keyboard focus traversal and all workflow/export actions working. Normal viewport hero/input/review/result screenshots saved; desktop and 320 px images visually inspected. Actual physical phones, screen-reader behavior and every browser/device remain untested.

Gallery inline scripts compiled with `new Function`; entry count **927**, with the new AI utility exactly once/newest first. All **926** previous entries, descriptions and categories preserved. AI Utilities remains first. Gallery browser checks cover old/new search and desktop/320 px rendering.

## Assembly and publication

Root predeploy built/copied **927 apps, zero failed/skipped**, then preserved the existing deduplication/size guard: combined deployed bytes **827,361,730**, below 1,000,000,000. Source legacy builds were not modified. Production-path checks use the assembled tree after assembly, never during its deletion/rebuild. Local and assembled reports and browser-downloaded artifacts are retained alongside test scripts.

Publication state is tracked separately in `publication-status.json`. Completion requires the matching Pages build and successful public URL, exact runtime byte/hash checks and public real-inference/workflow tests. A branch push alone is not completion.
