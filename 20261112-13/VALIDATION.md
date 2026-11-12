# Observed validation — 2026-11-12

## Production build and real local inference

`npm run predeploy` passed after correcting JSX braces in input-help text. Desktop Chrome / Playwright loaded the actual q8 MiniLM model through the production Vite worker on WASM CPU. No successful AI path was mocked.

- Workshop supplies: expected and observed `paper, paper, gloves, soap` (4/4).
- Garden stores: expected and observed `seed, paint, bike, seed` (4/4).
- These are eight tiny synthetic known-answer links, not an accuracy estimate. The negated glove request correctly linked to gloves in the challenge, but an unrelated musical-concert note linked to soap. A closed catalog is not an out-of-domain detector. All suggestions remain pending; holds/corrections are essential.
- All plans preserve annual demand and per-product order caps; base-tier and all-tier costs are computed, not measured savings.

## Cost arithmetic and artifact checks

2,400 seeded random cases spanning demand up to 240,000, caps up to 5,000 and integer cent inputs passed 4,800 exact optimum comparisons. Independent Python Fraction oracle uses convex per-tier stationary points plus interval boundaries, rather than the application's enumeration. Both chosen quantity (smallest tie) and rational cost match. Schema/invalid tiers, zero holding, duplicate IDs, holds/pending blocks, malformed vectors and original-input round trips passed. See core-validation.json.

Actual browser downloads were parsed independently with Python csv/json: all four reviewed rows survive, edited annual demand 17 survives, formula-like multiline quoted note survives safely in CSV, Markdown includes every original text, and all 24 maximum-batch rows/IDs survive. JSON preserves originals and current review separately. Reimporting originals resets approvals by design.

## Lifecycle, cache, failure and privacy

- Real model loading and four-text chunking, 24-record batching, download cancellation followed by changed-input real retry passed.
- Input edit during processing, late valid results from a worker ignoring termination, delayed worker download and delayed file import cannot overwrite newer inputs.
- Undo, product/demand editing, holds, pending blocking, applied-export invalidation, clipboard and artifact downloads passed.
- Empty, malformed, oversized and unsupported import; empty/fractional/out-of-range reviewed demand; worker download failure; model-host network failure with real retry; worker constructor/runtime failure; malformed vector output and timeout passed. Fault injection is used only for these defensive paths, not positive inference.
- The actual worker's WebAssembly-unavailable path produces actionable errors with no fake output. WebGPU is not used. Physical unsupported devices were not tested.
- After online inference, all network disabled and a fresh worker still ran real inference on the already-open warmed production page. Offline reload/navigation is not claimed.
- Production-startup-to-inference network observation found GET-only file downloads, no request body/content in URLs and no model host traffic before explicit load. Only documented model/runtime hosts were observed. Built text scan found no credential patterns; code has no provider/API-key integration. This is not an exhaustive security audit.
- Shared WASM and bundled factory byte-match the installed runtime; SHA-256 is in asset-privacy-validation.json.

## UI

Desktop 1440 and narrow 390/320 CSS widths passed no-document-overflow, form label, focus and input/export checks. Initial viewport screenshots visually inspected. Very long full-page Chromium captures showed tiling artifacts; separate fresh-context viewport captures are the reliable visual evidence (`initial-*.png`). Physical phone/browser testing, assistive-technology audits, real purchasing data, supplier terms, offline app-shell startup and measured productivity/accuracy are untested.

## Publishing

Combined assembly, preserved gallery, Pages build/commit, public worker/runtime hashes and real public AI workflow checks are recorded in the adjacent reports. Publication is only considered complete once those checks pass.


Observed fixture costs (annual model estimates, not measured savings):
- Workshop supplies: base-tier minus all-tier cost = $1202.56. Quantities (base → all): paper 274 → 800, gloves 147 → 300, soap 61 → 61.
- Garden stores: base-tier minus all-tier cost = $1398.36. Quantities (base → all): seed 200 → 250, paint 30 → 30, bike 110 → 250.

Public release passed on the first Pages deployment: matching gh-pages commit `dd55ed4b72b2478ea24e966b14dc07bd30a1ff45`, successful workflow 43153008410, byte-matched app/worker/runtime/shared WASM and exact 614-entry gallery. Both public real-AI fixtures, full public workflow suite (review/export/max batch/offline/phone widths), independent public-export parsing and public gallery/category checks passed. See publication-status.json and public-*-validation.json.
