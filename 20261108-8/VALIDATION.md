# Observed validation — 2026-11-08

Production Vite bundle tested in real headless desktop Chrome (Playwright), not a dev mock.

- Real q8 MiniLM/WASM inference: product interviews top topics 5/5 expected, library interviews 4/4 expected. First-question baseline 2/5 and 1/4 respectively. This tiny synthetic set is not a general accuracy claim.
- Product plan includes four quotes from four participants, covers three questions, holds one redundant-participant quote. Library plan includes three quotes from three participants, covers three questions and holds one quote. All originals survive.
- Deliberate negation challenge **failed**: expected billing, observed login (cosines approximately 0.463 billing, 0.571 login). Documented UI/README limitation; human correction is essential. No automatic interpretation or findings are claimed.
- Additional real-browser review checks: participant cap and question quota violations blocked export; adopting the balanced proposal restored changed question links; a 0.9 cutoff correctly produced an empty board, and a deliberate human inclusion counted as a below-threshold override. See `capacity-validation.json`.
- Solver compared to independent exhaustive assignment enumeration on 150 seeded small score matrices: maximum count and total similarity matched each case. Both caps and original-record integrity rejected invalid reviewed states.
- Full 32-quote / six-question inference and four-text chunking; JSON export/import preserves originals and constraints. Fresh-worker real inference with all network disabled passed while page remained open. Offline reload is untested and not promised.
- Cancellation/retry, input invalidation, stale worker-source fetch rejection, empty/malformed/oversized/duplicate input, unsupported file, worker fetch failure/retry, model-host failure/actual recovery, malformed vectors, unsupported worker runtime, worker error and timeout passed. Fault injection used only for defensive cases; successful workflows execute the real model.
- Include/hold/edit, undo, snapshots and download invalidation checked. Independent Python parses actual browser CSV/JSON downloads, quoted commas/newlines and multiline formula-like cells. Markdown includes current reviewed source text; clipboard matches the downloaded board. No quote reuse or lost originals.
- Desktop and 320/390 CSS-pixel phone viewports: working edits/exports, no horizontal overflow and visible keyboard focus. Screenshots inspected. Physical touch devices, screen readers and other browser engines untested.
- Browser requests from startup through inference: GET-only, no request bodies or content uploads, no Hugging Face traffic before explicit run. Built text assets scanned for common credential patterns (zero hits); no optional remote provider integration exists. Shared WASM SHA-256 checked against current package binary; public asset verification recorded separately.

Evidence: `browser-validation.json`, `extra-validation.json`, `core-validation.json`, `challenge-validation.json`, `artifact-test.log`, `asset-audit.json`, browser screenshots. Test commands: `python3 serve-test.py`, `node browser-test.cjs`, `node extra-test.cjs`, `node challenge-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`.

Publication/public-origin checks are recorded in `publication-status.json` and public verification files, not inferred from a branch push.

## Public deployment verification

Combined root deployment published commit `f8262560d905e3bccccaeeb3f5ebd8c73ae504fd`; GitHub Pages run `42423792227` completed successfully and Pages API reported matching commit `built`. The full 14-check browser suite passed on the public HTTPS URL, including both actual model fixtures, 32-quote batching, fresh-worker fully offline inference, reviewed edits/undo/exports, phone layouts and defensive failure cases. Public downloaded artifacts were independently parsed again. Seven app files plus the shared WASM matched production SHA-256 hashes; the public gallery matched source exactly and rendered all 524 cards with existing categories preserved. No retry/rebuild trigger was needed. See `public-check/`, `public-assets-validation.json` and `public-gallery-validation.json`.
