# Observed validation — Reserve Relay (20261111-3)

## Local production bundle

- `npm run predeploy` passed. Real headless desktop Chrome loaded the built worker, local WASM CPU runtime and actual q8 MiniLM model, not a mock.
- Two materially different clean synthetic fixtures: Workshop supplies **6/6** product links; Community equipment **6/6**. Literal-title baseline **0/6** in both. These tiny fixture results are not general accuracy or measured time savings.
- Workshop: paper target deficit **7 → 0**, 7 units moved, 23 supplied route-cost points; soap **9 → 0**, 9 units, 13 points. Community: books **8 → 0**, 8 units, 28 points; balls **9 → 2**, 7 units, 23 points. All stocks conserved; donors retained target reserves. Remaining shortages are explicit.
- Challenge: sports wording with negated books linked to balls; unrelated instruction-like astronomy text also linked to balls. No relevance rejection is learned; all challenge rows held, transfers blocked. Input instructions caused no authority/credential action. Human review remains essential.
- `core-test.mjs`: **1,600** generated cases compared with an independent exhaustive enumeration of all feasible integer donor/recipient edge flows. Maximum covered deficit and minimum route cost matched; stock conservation, donor reserves, recipient ceilings, cost sums and deficits passed. Input/review/confirmation/hold/duplicate guards passed.
- Real browser: edit resets approval and invalidates export, undo, holds, unconfirmed blocking, CSV/JSON/Markdown downloads and clipboard equality, current edited values, 24-row chunking with duplicate-cell blocking, audit-original roundtrip, empty/invalid/oversized/unsupported input, cancel/retry and changed-input stale protection passed.
- Fresh-worker real inference succeeded with all network disabled **inside an already-open warmed page**. Offline navigation/reload is not claimed.
- Desktop 1440 and narrow 390/320 CSS pixels: no horizontal overflow, labeled inputs/focus, working review/results/export. Physical phones and other browser engines not tested.
- Network inspection from startup through inference: no model-host request before explicit run; all observed external requests were file GETs without request bodies or source text in URLs. No remote integration or credentials exist. Built text assets scanned for common credential patterns; scan is not a universal proof, and source/data-flow inspection supplements it.
- Downloaded current JSON/CSV artifacts independently parsed using Python. All originals, edits, decisions and multiline quoted/formula-like reviewer note survived; Markdown equals actual clipboard text. Unit and cost arithmetic rechecked.

## Defensive and extended checks

See `defensive-validation.json`, `stale-import-validation.json`, `max-validation.json`, `artifact-validation.json` and `browser-validation.json`. Network/model failure followed by real retry, worker-download failure, unsupported module-worker constructor, unavailable WebAssembly inside the actual worker, malformed output, worker error and accelerated timeout were tested without fabricated results. Delayed import/worker fetches cannot replace newer inputs.

- Extended real-model run: four products × four sites (16 complete cells) matched **16/16** expected links and conserved units; product/site corrections reset approvals and undo restored them. Maximum **28-text / 24-row** inference completed, and duplicate cells correctly blocked planning.
- The assembled 581-entry collection passed the full production-browser workflow again; runtime/worker paths and shared WASM hashes matched, gallery scripts compiled, and all 580 prior entries/order/categories remained intact.

## Publication

Public release is not verified until the appended release record and `publication-status.json` say so. A branch push alone is not proof of a working public app. See root README for combined assembly and Pages workflow contract.


### Final hosting outcome: unpublished draft

All three candidate Pages builds succeeded, but deployment timed out during file synchronization/finalization (workflows 42871882327, 42873939397, 42876069409). The candidate branch commit was `2dbbd772d098ed8ba4a86ec75468e9834a128642`. Public app remained HTTP 404. Public worker/runtime hashes, inference and public app UI **could not be tested**. The tested draft has been removed from APPS and the restored combined deployment; it is not a completed public app. The candidate adds under 1 MB and already shares immutable WASM; simplifying a successfully tested model cannot fix provider file synchronization while retaining the collection. Resolve hosting and rerun public checks before promotion. Local and assembled evidence remains valid.

The original 580-entry public gallery was independently byte-verified against the pre-run working snapshot, rendered in real Chrome at 1440/320 CSS pixels, and retained AI Utilities plus older categories without the draft. Restored combined assembly passed (580 apps, zero failures); root deployment republished a branch excluding the candidate. Restored gh-pages root index and absent draft directory were verified directly against GitHub. Its new Pages build is not claimed verified; the existing public gallery already remains intact.
