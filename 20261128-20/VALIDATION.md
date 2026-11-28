# Observed validation — Crossfade Folio

## Local production bundle

- `npm run predeploy`: passed (React/Vite production build, correct collection base).
- Desktop Chrome headless, CPU/WASM with GPU disabled. Real downloaded MiniLM q8 inference matched both independent example batches: ROOM/DIALOGUE and FOREST/MUSIC, 4/4 simple seeded identities. This is a tiny fixture result, not universal accuracy. A negated-room/forest challenge matched FOREST in this run; negation remains an unsupported reliability assumption.
- Inference changes which measured correlation/RMS/peaks feed each edit; both batches have distinct resulting gain envelopes. No canned/fallback results.
- `node core-test.mjs`: 1,090 checks including formula grid (rho −0.95..1, gain and peak caps), exact target-power endpoints, maximal-target bound witnesses, numeric/schema errors, malformed embeddings, complete source count and audit reimport.
- Both seeded batches met reviewed minimum RMS. Uncorrected equal-power baseline misses were 2/2 for ROOM/DIALOGUE and 1/2 for FOREST/MUSIC; the uncorrelated forest pair needs no correlation correction. Comparison uses the same achieved target. This is calculated stationary-power deviation, not measured sound improvement.
- Browser downloaded actual JSON/audit CSV/Markdown/envelope CSV. Python standard CSV parser plus independent math recomputation passed **8,249 assertions**: all original IDs/notes survive, all approved control-point times/gains/powers/peak bounds match, maximal target and both baseline counts recompute, held edits are excluded only from envelope CSV, multiline quoted reviewer text survives, and formula-like strings are spreadsheet-prefixed.
- Max 8 pairs/8 edits (16 texts, four inference chunks), all records retained, exported maximum audit restored and rerun successfully.
- Warm open page → offline browser context → fresh terminated/recreated worker → real inference passed. Offline cold load/reload/navigation NOT tested or claimed.
- No model-host requests before explicit run. Observed default-path traffic: only GET downloads, no bodies; note strings absent from URLs. Audit paths omit CDN query values. No credential/provider path implemented.
- Review approval/hold, pair correction and field restoration, empty numeric rejection, export snapshot invalidation, clipboard, undo, below-minimum export blocking, repeated input/run changes, cancel/retry and delayed import identity passed.
- Empty/broken/oversized JSON, empty/duplicate/too-many IDs, input length, invalid extension, >1 MB import, malformed Unicode/control input tested through browser/core checks. Instruction-like note remained inert with no credential prompt or upload.
- Ten defensive browser checks: actual worker-download and model-host aborts, unavailable Worker/WASM, worker construction/error, malformed vectors, accelerated timeout, late old-run response and cancellation during pending worker-source fetch. Separate same-page real retry, newer-run identity and cancellation during a real pending model download all passed. Fault injection is used only for defensive tests, never successful AI fixtures.
- 1440, 390 and 320 CSS-pixel layouts: no horizontal overflow; labeled controls, ≥44 px targets and keyboard focus tested. Normal viewport screenshots of input/review/result/hero captured; desktop hero and narrow review visually inspected.

## Collection and publication

Gallery inline scripts compile with `new Function`; new entry exactly once in `ai-utility`; all 943 previous entries/categories preserved in original order. Assembled/public verification reports and release status are recorded alongside this document after execution.

## Limits / not tested

No physical phones, non-Chrome engines, live customer data, actual audio listening/rendering, DAW import, continuous-time interpolation or acoustic/perceptual verification. Model similarity is not confidence or identity proof. Operator measurements must describe the same aligned stationary mono overlap. Conservative peak bounds are checked only at exported control points. Physical signal behavior can differ. No offline app-shell startup claim. Tests do not establish engineering/audio suitability for arbitrary material.


## Assembled production bundle

Root `npm run predeploy` assembled all **944** gallery apps with 0 failed/skipped, totaling **831,840,608 bytes**, below the unchanged collection guard. At the actual assembled production paths, the full real-AI browser workflow, both fixtures, offline fresh-worker inference, maximum batch/audit reimport, review/export checks, ten defensive scenarios, real recovery, stale-run/import races and real model-download cancellation/retry all passed. Independent Python artifact verification again passed **8,249 assertions**. Eight current/shared public-runtime assets matched expected bytes/SHA-256; credential-pattern scan found no matches (in addition to manual no-provider integration review). Gallery browser rendered every card, preserved every category and passed old/new searches and 1440/320 widths.


## Public release

The root combined deployment published `gh-pages` commit **0b5dc0a67386e8913b109f503d2d18d115ea21cc**. GitHub Pages reports that exact commit **built**; workflow [46138480885](https://github.com/xianghui/daily-app2/actions/runs/46138480885) completed successfully. No fallback rebuild or republish was needed.

At [the public app](https://xianghui.github.io/daily-app2/20261128-20/), the complete real-AI two-batch workflow passed, including review/edit/hold/undo, maximum record batching, audit restoration, current artifact downloads, clipboard, offline fresh-worker inference and mobile layouts. Public JSON/CSV artifacts passed **8,249 independent Python assertions**. All **eight** current/shared runtime assets matched exact source bytes/SHA-256. The public gallery rendered all **944** cards, old/new search and all categories. Ten defensive scenarios plus real failure recovery, stale-run identity, input guards, delayed file import and cancellation during an actual model download with successful real retry passed again. See the `public-*-validation.json` evidence files.

No real audio or DAW session was exercised; these remain statistical gain-control worksheets under the documented assumptions. No physical phone or cold offline app-shell claim. No digest sent; pre-existing unrelated drafts were preserved and excluded.
