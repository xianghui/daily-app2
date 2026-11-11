# Observed validation — Sieve Folio

## Local production bundle

- `npm run predeploy` passed. Real q8 MiniLM inference executed in installed desktop Chrome via WASM CPU, not mocks.
- Aggregate bench: intended `sand, gravel, sand, gravel` all matched. Mass-only baseline passed 3/4 samples, full envelope passed 2/4; one additional grading flag and one recovery block. Sand sample A3 passes mass recovery but misses supplied passing bands.
- Seed cleaning bench: intended `sunflower, millet, sunflower, millet` all matched. Mass-only baseline passed 4/4; full envelope passed 3/4; one additional grading flag. Tiny synthetic fixtures are not representative accuracy estimates.
- Challenge: “Not fine silica sand for mortar. This is coarse crushed stone gravel.” incorrectly selected `sand`. Unrelated instruction-like astronomy text also selected `sand`. Both were held with no verdict. No out-of-distribution rejection or negation guarantee is claimed.
- Maximum 6-spec/12-sample batch executed real inference across four-text chunks; all exact-description identities matched. Exported audit reimport preserved all originals and grading after renewed review.
- 2,400 independently generated arithmetic cases compared against suffix-mass sums and BigInt cross-product envelope oracles. Inclusive boundary and zero-recovery guards passed.
- Review/edit masses and spec, undo, holds, apply/discard snapshots, original immutability and export invalidation passed. Downloaded JSON/CSV/Markdown were reopened with independent Python parsers; quoted multiline formula-like note escaped, edits and every source survived. Clipboard equalled the current Markdown.
- Fresh worker under fully offline browser context performed real inference after an online run. Only the already-open page is covered; offline reload/startup not claimed.
- Captured requests from initial app load through workflows were GET downloads only with no bodies; no model-host fetch before explicit run; no sample strings in request URLs. Built-text credential pattern scan plus source inspection performed. This is not a proof against every possible secret.
- Empty/invalid/oversized inputs, duplicate IDs, bad mass shapes/counts, unordered sieves, increasing envelope bounds, unsupported file and oversized import blocked. Negative reviewed mass blocked; corrected retry worked; zero recovery produced null percentages and no verdict.
- Cancel/retry, input invalidation, late old valid vectors ignoring termination, delayed file import and delayed worker download were checked. Network failure then real retry, worker fetch failure, unavailable module worker, actual-worker unavailable WASM, worker error, malformed vectors and accelerated timeout produced no fake output. Fault injection is used only for defensive behavior, never to establish successful AI.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts had no horizontal overflow, all controls labelled, keyboard focus worked and buttons were ≥44px. Screenshots visually inspected. Actual physical phones, screen readers, other browsers and low-memory devices untested.

## Publication

Root gallery/assembly and public runtime/inference results are recorded in adjacent reports after publication. A branch push alone is not counted as successful hosting.

Public verification passed on the first deployment: matching gh-pages commit `a5b2a83bcca8e971b09e55c230311721ddcbe884` reached Pages `built`. Every app file, runtime factory, worker and shared WASM matched local SHA-256. Public gallery byte-matched source with 601 entries and all 600 prior working-tree entries preserved; AI section/new app first and older categories intact. The full production browser suite reran at the public URL with both real-AI fixtures, maximum batching, current reviewed downloads/clipboard, offline fresh-worker inference, input/cancel/invalid/review/undo checks and desktop/phone layouts. Public downloaded artifacts were independently reopened. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `artifact-validation.json`. Unrelated pre-existing working-tree changes were preserved, not included in this app’s source commit.
