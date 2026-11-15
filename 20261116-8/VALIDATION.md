# Observed validation — 2026-11-16

## Real production-bundle CPU inference

`node browser-test.cjs` used installed Chrome with GPU disabled against the built Vite app, not dev-mode inference. All successful AI runs used the real shared MiniLM worker/model, not a stub.

- Product priorities: 8/8 known identities; 6 item pairs, 5 concordant, 1 reversed, tau-b 0.6666666667. Overlap baseline: all 4 items shared, hiding the reversal.
- Library priorities: 6/6 identities; 3 pairs, 2 reversed and 1 tied only A, tau-b −0.8164965809. Overlap: all 3 items shared; reversal limit 1 exceeded.
- Maximum complete comparison: real inference matched all 16 source identities for 8 distinct items; all 28 pairs reversed, tau-b −1. `max-ready-test.cjs` records this separately.
- All-tied fixture: tau-b null/Undefined, 3 both-sided ties, no reversals.
- Maximum 8 canonical items + 24 observations / 32 text embeddings processed through four-text batches. All 24 original records and final multiline note survived audited JSON/CSV. Duplicates intentionally blocked the comparison. Full audit imported and processed again.
- Fresh worker after an online run completed genuine inference with the browser context fully offline in an already-open warmed page. This does not verify offline startup/reload.
- Unrelated instruction-like source still gets a nearest candidate; recorded challenge is explicitly held. No semantic relevance or instruction-following guarantee is claimed.

## Review, data and error behavior

Mandatory per-row review, hold/blocked reports, undo, item/list/rank changes, reapproval, current export invalidation, preserved original ranks, duplicate/missing list blocking, empty/zero/fractional/oversized ranks, JSON reimport, clipboard and downloaded JSON/CSV/pair CSV/Markdown passed. Independent Python CSV parsing verifies record IDs, descriptions, original/current ranks and item links, pair counts and directions, quoted commas/newlines, multiline formula-escape protection and current Markdown. `artifact-test.py` / `artifact-validation.json` record outcomes.

Empty/null/malformed/oversized source, no items/observations, duplicate IDs, oversized description, invalid reversal limit and list, unsupported PDF, malformed JSON and >2 MB files all blocked with actionable errors. Cancel/retry and editing input during real inference leave no stale suggestions. Delayed worker download, delayed file read and an injected late old result cannot replace newer input/completed results.

`defensive-test.cjs` injects failures **only for negative testing**: unavailable network (then real retry), missing WASM, worker-download failure, Worker construction failure, malformed vectors/envelope, timeout and worker error. All show errors, no review rows or enabled exports, and no fake deterministic output. Real success evidence is separate in browser-validation.json.

`oracle-test.mjs`: 1,000 seeded independent sign-vector dot-product comparisons verify tau-b, reversal counts, pair conservation, swap symmetry and monotone-rank invariance; strict vector-shape/finite/normalization validation and mandatory review/hold tests pass. No accuracy, speed or percentage-improvement extrapolation.

## Privacy, layouts and publication

Browser traffic from production startup through inference: no model-host access before explicit load; all requests GET with no bodies; fixture text absent from full URLs; only app origin, Hugging Face and hf.co downloads. Saved request URLs strip signed query values. Built text credential-pattern scan and manual no-provider integration inspection pass. Model/runtime shared dependencies are byte-audited.

Desktop 1440 and narrow 390/320 px: no horizontal overflow, all form controls have labels, touch buttons ≥44 px, source-to-import keyboard tab focus, working review/export. Phone-size overview, review and results screenshots visually inspected. Other browsers, physical phone RAM/performance, screen readers and offline navigation/reload remain untested.

Root combined build: 705 apps, zero failures/skips, 999,831,521 published bytes after existing byte-verified runtime deduplication. No deployment script or older source builds changed. All 704 pre-existing gallery entries and categories are preserved; every inline script compiles; new entry appears exactly once with area ai-utility. Gallery search/render and narrow layouts pass.

Release status and public checks are recorded in publication-status.json and public-asset-audit.json after root combined-site deployment. Build success or a gh-pages branch push alone is not considered a verified release.

## Verified public release

Matching Pages commit `8915a65238da8849727d149ebdf74d21a9142bf4` reached built on the first deployment. Public byte matching covers app HTML/JS/CSS plus shared worker/factory/WASM. The complete real-AI workflow suite, both fixture sets (14/14 identities), 32-text batching, human review/undo, fresh-worker fully offline inference, artifact parsing, GET-only privacy assertions and 705-card gallery all passed at the public URL. Maximum complete 8-item comparison independently matched 16/16 identities and all 28 reversals (tau-b −1). Main source staging excludes unrelated pre-existing edits. No digest sent. `npm run lint` and individual/root predeploy also passed.
