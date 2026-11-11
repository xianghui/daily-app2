# Observed validation — Horizon Folio

## Local production bundle

- React/Vite `npm run predeploy` passed with bundled worker and local WASM factory, immutable shared WASM path.
- Actual Chrome CPU/WASM MiniLM inference: workshop 4/4 intended project links; library 4/4. Naive first-project identity baseline 2/4 each. This is a tiny synthetic check, not universal accuracy.
- Workshop selected solar, NPV 20861.678004535148 cents, outlay 100000 within budget 140000. Library selected both, NPV 23553.719008264452 cents, outlay 150000. Both tie nominal-greedy selection on these simple data.
- Timing challenge gives both projects 10000-cent outlays and 10000 budget, solar year-10 30000 cents, insulation year-1 20000 cents, 10% rate. Discounted selection chooses insulation, nominal-greedy chooses solar. Observed selected NPV 8181.81818181818 cents versus baseline 1566.298682885943 cents. See exported exact computed comparison.
- Negation challenge mislinked roof-insulation text containing negated solar to solar. Unrelated instruction-like text also linked solar. Both held; zero selected projects, no external action. Mandatory review/hold is essential.
- 1,800 generated independent two-project subset-oracle cases passed: signed flows, years 1–10, varied rates/outlays/budgets, holds, optimal NPV, budget conservation and baseline objective bound.
- Maximum 6-project / 24-flow inference batched four texts at a time; all 24 records conserved; JSON original-input round-trip and renewed approvals passed. This boundary fixture repeats workshop flows; six-way identity accuracy is not established.
- Review edit, undo, hold blocking, copy, JSON/CSV/Markdown downloads and export invalidation passed. Independent Python CSV parser preserved every row, signed negative numbers, quotes and multiline formula-like reviewer text. Complete Markdown audit inspected.
- Fully offline fresh-worker actual inference passed with Playwright context offline after warm online inference. **Already-open page only; no offline reload promise.**
- Empty, malformed, oversized and unsupported input, invalid numeric fields, file limits, delayed imports, cancellation/retry and source edits passed. Deliberately late terminated-worker output could not overwrite a newer run.
- Defensive fault injection only: failed model-host download/recovery, worker download failure, worker construction failure, actual worker missing WebAssembly, worker error, malformed vectors and accelerated timeout all showed errors and no fake output. Fault injection is not used for successful AI checks.
- Network capture observed no model downloads before explicit loading; only GET requests/no bodies; no synthetic user notes in URLs. No provider integration/keys exist. Built-asset credential-pattern scan recorded separately; not a general security proof.
- Desktop 1440, narrow 390 and 320 viewport widths: no horizontal overflow, labels/focus and usable exports. Screenshots inspected. Physical phone performance, assistive-technology review and other browsers untested.

## Assembled and public verification

See assembly/public/browser/gallery reports and publication-status.json for the final release outcome. Build success alone is not inference validation. Public completion requires byte-matched app, worker, factory and shared WASM plus real public inference and preserved gallery.

Combined deployment preparation: 591 apps assembled, zero failed/skipped; deploy-only WASM reuse leaves 926,264,866 deployed bytes. Every new app file matches its production dist, shared WASM SHA-256 verified. Complete assembled-site real-inference suite and root gallery browser checks passed. All 590 previous gallery entries/order/categories preserved; inline scripts compile and exactly one new AI-utility entry exists.

Public release: first combined Pages deployment `1b2e82cf4b1d5054a616649bef7263a82a4c2038` reached built. Public app HTML, bundled worker, JS/CSS, local runtime factory and shared WASM matched local SHA-256 hashes. Both public real-AI fixtures, the timing challenge, full public browser workflow suite including maximum batching/offline fresh-worker/exports, and public root gallery/layout checks passed. Public gallery byte-identical with 591 entries; earlier categories preserved. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`.
