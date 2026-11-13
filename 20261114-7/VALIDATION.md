# Observed validation — Tax Weave (2026-11-14)

## Local production-bundle checks

- `npm run predeploy` passed with actual emitted worker and same-origin runtime references; no server API or development-only inference.
- Chrome headless, WASM CPU, GPU disabled: Studio purchases matched supplies/books/postage/supplies; Workshop purchases matched tools/training/food/tools. **8/8 intended identities on two tiny synthetic fixtures**, not a general accuracy estimate. Studio: net 22,800 + tax 4,100 = gross 26,900 cents; all-exclusive baseline 29,405. Workshop: net 18,500 + tax 2,340 = gross 20,840; baseline 23,062.
- 8,004 random/boundary line calculations independently checked with Python Fraction; exact half-up tax, inclusive gross preservation, exclusive net preservation and group/line conservation passed. BigInt is used for arithmetic intermediates. This validates the stated formulas, not jurisdiction compliance.
- All nine browser workflow groups passed: actual inference; mandatory review; category rejection; amount/basis edits; multiline formula-like owner/note; hold/undo; copied Markdown; JSON audit originals reimport; zero/changed rates; invalid/empty/oversized/duplicate inputs; 32-record batch; cancellation/retry and stale source edits; held-only and instruction-like unrelated inputs; desktop/390/320 widths, labels/touch/focus/no overflow.
- Unrelated instruction-like text still received a nearest candidate and remained pending; holding it produced no approved amount. Similarity cannot establish tax treatment. Negation, ambiguity and real-world invoices are unverified.
- All six defensive injections passed: failed model download then real retry, worker download failure, unsupported workers, malformed vector output, accelerated timeout and worker error. Injected success was never used to establish AI functionality.
- Browser network disabled after warming: a fresh worker performed real inference in the already-open page. Offline reload/navigation is not claimed.
- Actual browser-downloaded JSON/CSV/Markdown reopened independently; 13 JSON artifacts preserve record identity, originals, reviews, null held amounts and exact totals. CSV comma/quote/newline escaping and spreadsheet formula guards passed, including 32-row last-record retention. Edited export snapshots are invalidated immediately.
- Captured browser requests were GET with no bodies, only documented static/model downloads. No model requests before explicit loading; no source text in URLs. Built text credential-pattern scan found no hits. Source has no optional provider integration or credentials. A pattern scan alone is not exhaustive secret detection.
- Runtime factory matches installed ONNX module; shared WASM SHA-256 and worker base paths checked. Source and generated app content contain synthetic examples only.

## Limits of evidence

Headless desktop Chrome and simulated narrow viewports only, not physical phones, Safari/Firefox, assistive-technology user testing or low-memory hardware. No claims about tax law, eligibility, invoice-level rounding, broad semantic accuracy or realized time savings. Uses model host main revision; upstream changes/cache eviction can affect availability. No app-shell service worker/offline startup.

## Publication

Root predeploy and root deploy passed with 656 apps, zero failed/skipped. Pages run `43516674606` built the matching gh-pages head `00a33cd42d7d2e1fb47523a1e36cc08cd28ce30b`. Every public app/runtime/worker asset and the immutable shared WASM byte-matched the production build. The public URL passed both real-AI fixtures, all nine workflow groups (including warmed-page fresh-worker offline inference), actual reviewed exports and the complete 656-entry gallery with old categories/search preserved. Public network captures remained static GET/no content bodies. See public-browser-validation.json, public-asset-validation.json and public-gallery-ui-validation.json. Physical devices and offline navigation remain unverified.
