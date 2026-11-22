# Causal Lantern — observed validation

Date: 2026-11-22. Synthetic fixtures only. Local production bundle, assembled collection and public checks are recorded separately; no mocked successful inference.

## Real AI and quality
- Actual Xenova/all-MiniLM-L6-v2 q8 WASM CPU inference in headless desktop Chrome, GPU disabled. No keys. Both fixture runs produced finite normalized 384-component vectors.
- Checkout: expected/observed service labels `stock, payment, gateway, gateway, payment, stock` — 6/6. Applied graph: 11 ordered and 4 concurrent pairs, 5 reversed source-order pairs.
- Editorial round trip: `editor, image, editor, image, image, editor` — 6/6. Applied graph: 14 ordered and 1 concurrent pair, 9 reversed source-order pairs.
- These are 12 small synthetic labels, not a general accuracy estimate. Unknown/negated instruction-like text still picked a nearest service and remained pending. Holding it withheld the whole worksheet; it did not alter authority, request credentials or execute instructions.
- Changing one reviewed service/order in checkout changed concurrent pairs from 4 to 0. This confirms reviewed neural identities materially affect the resulting dependency worksheet.
- Maximum 8-service/32-event run processed 40 real embeddings in 10 chunks, then a reviewed all-local scenario preserved 32 events and all 496 pairs (48 ordered, 448 concurrent). Synthetic numbered service labels were manually verified/corrected; no maximum-batch accuracy claim.

## Deterministic constraints and artifacts
- Independent Floyd–Warshall oracle on 160 seeded randomized traces: all pair relations agree; witness edges are supplied graph edges; vector-clock order agrees with reachability. Every event appears exactly once in the linearization and every pair once in the pair worksheet.
- Cycle, duplicate local sequence, unmatched/duplicate send/receive, same-service message, pending review and malformed vector cases blocked. Holds retain complete originals/reviews and withhold causal output.
- Browser-downloaded JSON/event CSV/pair CSV/Markdown independently parsed with Python. Seven audit variants cover both fixtures, reviewed multiline formula-like note, hold, maximum batch, identity edit and unknown-note hold. All originals survive, all pair counts reconcile, and multiline/comma/quote/formula guarding survives CSV. Maximum JSON audit reimport restores exact originals. Copy uses the current reviewed worksheet.
- Review edits invalidate exports immediately; undo restores edits. Missing-message and duplicate-position errors expose no downloadable stale scenario.

## Browser, offline, privacy and defensive behavior
- Real successful online run followed by worker termination, browser network disabled and fresh-worker actual inference in the already-open warmed page passed. Cache API retains worker source, factory, binary and model assets. Cold offline navigation/reload was NOT claimed/tested.
- No model-host request before explicit run. Successful workflow request capture contains GET-only public asset downloads, no request bodies or user notes in URLs. Reports store only hosts/paths and query-key names, never signed CDN parameter values. Source/integration inspection: no provider keys, remote inference, telemetry, account access or server actions. Built credential-pattern scan clean; that scan alone is not a privacy proof.
- Model-host failure → useful error/no fake output → actual real-inference retry succeeded. Worker-download failure, unavailable WASM, throwing worker constructor, worker error, malformed vectors/envelope and accelerated 180-second timeout all produce errors with exports disabled. Only defensive failures use injected faults.
- Cancellation during intercepted initial model-weight download exposed progress, discarded the cancelled result and succeeded on a real retry. Delayed result after cancel/input change ignored. Delayed file read and worker fetch cannot overwrite newer input. A new actual real-inference result survives a delayed prior-run error.
- Empty, invalid, null, missing and oversized source; unsupported/oversized file inputs handled. Desktop 1440 and phone-width 390/320 CSS pixels: no horizontal overflow; labeled fields, visible focus and ≥44px visible button/select/input targets checked. Normal viewport hero/review/results screenshots saved; narrow hero/results visually inspected.
- Physical phones, memory-constrained hardware, Safari, Firefox and assistive-technology user sessions untested. Similarity can confuse similar or negated service descriptions. Logical clocks cannot prove log completeness or wall-clock chronology.

## Assembly and publication
- Required individual `npm run predeploy` passed. Vite base `/daily-app2/20261122-20/`; required gh-pages dependency and exact lifecycle scripts retained.
- Root predeploy passed: 800 apps assembled, 0 failed/skipped. Every 799 older published gallery entry preserved exactly; AI Utilities first and legacy categories/search still render. Every inline gallery script compiles with Node `new Function`; new entry appears exactly once with correct area/folder.
- Assembled site: 999,324,028 bytes, below unchanged conservative 1,000,000,000-byte guard. Immutable shared worker/factory/WASM hashes verified. Source builds preserved. No new deploy-only sharing rule needed.
- Unrelated existing recovery changes remain in the working tree and are excluded from the publication/commit; scoped ownership is documented in `source-ownership.json`.
- See `assembled-browser-validation.json`, `pages-watch.json`, `public-asset-validation.json`, `public-browser-validation.json` and `publication-status.json` for final production/public evidence. No completion claim is based solely on branch push.

## Completed public verification

Root deployment reported Published. GitHub Pages workflow `45015966165` completed successfully and Pages reports built for matching gh-pages commit `5c55a8310e0513f0984167bb4538821b5083deb1`. Nine live gallery/app/JS/CSS/shared-worker/factory/WASM assets byte-match the assembled files. The full public-browser suite passed real CPU inference on both fixtures (12/12 simple service labels), maximum-batch inference, reviews/edits/holds/undo, actual downloads and copy, reimport, fresh-worker offline inference, cancellation/retry, privacy checks and desktop/phone widths. Public gallery rendering/search retains all 799 older entries and shows 800 total. Public-phase downloaded artifacts were independently parsed again. No digest sent.
