# Form Pruner validation

## Production bundle, real CPU inference

Local Chrome/Playwright tests ran against Vite `dist`, not a dev runtime. No fake successful model path exists. `browser-validation.json` records actual vectors' cosine-derived decisions and downloaded artifacts.

- Event fixture: E2 removed as paraphrase of protected E1 (cosine ~0.887). E3/E4 speakers/presenters was **missed** at 0.75: cosine ~0.593; both retained. 6 → 5 questions; input estimates 165 → 145 seconds, exceeding advisory 120-second target. No forced removal.
- Workplace fixture: W2 → W1 (~0.904), W4 → W3 (~0.874); 6 → 4 questions, 185 → 125 estimated seconds. Unique protected concerns and office-space item retained.
- Known-answer scope: 11/12 expected per-question keep/drop decisions; 3/4 intended paraphrase pairs detected, all eight expected keep decisions preserved. Small synthetic fixture observations only, not general accuracy.
- 24-question maximum: six real inference batches, three protected unique anchors retained, all 24 originals preserved. Core safeguards separately verify nontransitive A–B–C similarity never deletes C via removed B, multiple protected questions remain, and different response types cannot substitute.

## Actual browser checks passed

Online model download, progress, cached reload (no repeat model requests), offline all-network-disabled fresh-worker inference in open page; no offline navigation claim. All off-origin requests were public model-file GET/HEAD without user content or request bodies. Runtime failure, model-host failure and recovery; cancellation during download/inference and retry. Changed input invalidates active runs; late cancelled worker messages and delayed file reads cannot overwrite newer choices.

Empty, wrong headers, short/oversized/duplicate/broken CSV, unknown response types, bad seconds/protected flags, invalid threshold/budget, PDF and oversized imports all rejected. Fault-injected unavailable Workers/WASM, malformed vectors, timeout, worker construction/error events produced actionable errors without results. These injected cases are defensive tests, not evidence of successful inference.

Review required before apply; protected controls disabled; manual override, keep-all rejection, undo, editable wording/note, invalid replacement blocking and snapshot invalidation tested. Clipboard JSON read back; browser downloads saved and reopened. Independent Python CSV parser compares every original/reviewed text and note including quoted commas, embedded quotes/newlines, formula-like text; numeric seconds preserved. JSON includes every row and original input; Markdown retained questions parsed by assertions against edited wording and removals.

Desktop 1440px and narrow 390/320px layouts have no horizontal overflow; keyboard focus and source label verified; narrow-layout edits/exports work. Screenshots visually inspected. Real touch hardware and assistive technology behavior not certified. No universal AI quality or runtime performance claim.

`npm run predeploy`, deterministic `core-check.mjs`, asset credential-pattern scan, `browser-test.cjs` and `export-roundtrip.py` passed. Scan is supplemented by source/network inspection, not claimed exhaustive secret detection.

## Public verification

Published and verified at https://xianghui.github.io/daily-app2/20261107-17/ . Pages build `a4e0391581f7aca65c25351a2c78217174c99494` matches the gh-pages head. All seven app assets plus the shared WASM were fetched publicly and SHA-256 matched against the production build. The public gallery renders 510 cards, AI Utilities first, with the new card exactly once and working search.

The entire browser suite was rerun at the actual public URL, including real AI on both different fixtures, six-batch maximum, offline fresh worker, privacy observations, review/undo/edit, download/copy, phone layouts and all defensive failure/retry checks. The observed fixture limitation was identical to local: 11/12 keep/drop decisions, missing the speakers/presenters pair. Public downloaded CSV/JSON artifacts were independently reparsed. See deployment-validation.json, public-gallery-validation.json and public-evidence/browser-validation.json plus public-evidence/export-roundtrip-validation.json. Root predeploy assembled all 510 apps with zero failures; root deploy published the combined site. No unrelated pre-existing files were included.
