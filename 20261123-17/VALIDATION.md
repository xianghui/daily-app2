# Observed validation — Timecode Quay

## Local production bundle

- `npm run predeploy` passes. Real Chrome with GPU disabled ran MiniLM WASM inference: both materially different synthetic fixtures matched all 6 intended profiles. The seeded `00:01:00;00` nonexistent drop-frame cue was blocked, with 2/3 ready in fixture one and 3/3 in fixture two. Not a population accuracy claim.
- Note-only AI-impact probe held the numeric timecode label fixed while switching cinema/PAL context: profile and output changed (1440 versus 1500 frames). Negation/instruction-like probe intended PAL but selected cinema: known semantic limitation, not hidden or automatically accepted.
- 7,128 core checks passed, including all minute/frame labels at second zero, drop-frame boundaries, 24/25/30 rates, invalid separators/components and exact frame/seconds invariants. Known anchors: 17,982 frames/10 minutes, 107,892/hour, 2,589,407 at 23:59:59;29.
- Real browser: maximum 24-cue chunked inference, complete JSON reimport, review/edit/reject hold/undo, stale export disabling, multiline notes, formula escaping, clipboard and four downloads. Independent Python CSV/JSON parser used minute-by-minute omitted-label enumeration and `fractions.Fraction` to check every ready cue, every record and release membership in five artifact sets. Edited cue and quoted multiline notes survived.
- Fresh worker real inference succeeded with network fully offline in an already-open warmed page. Cold offline startup was not tested or claimed.
- Empty/malformed/oversized sources, unsupported/oversized files fail gracefully. Eight defensive checks cover real worker download abort and injected unavailable runtime, constructor/worker error, malformed vectors, timeout, stale response and cancel-during-worker-fetch. Separate delayed file-read race and actual Hugging Face network abort/recovery passed; successful inference is never mocked.
- Network audit: GET-only downloads, no source text in URL/body; no model-host traffic before explicit loading. Persisted request audit removes signed query values. Built text credential-pattern scan is supplemental, not exhaustive secret detection.
- 1440/390/320 CSS-pixel viewports: no horizontal overflow, labeled controls, ≥44px touch controls, input/review/results screenshots. Phone hero visually inspected. Phone hero, 320px review and desktop results screenshots visually inspected: no clipped labels or controls. Physical phones, other engines, cold offline reload and downstream NLE importers untested.

## Assembly/publication

Combined assembly passed at **999,964,632 bytes**, below the unchanged conservative 1 GB guard; no runtime-sharing rules changed. All 822 gallery cards, every older entry/category, and inline-script compilation passed. Seven exact asset byte matches include the app shell/bundle/styles and shared worker/factory/WASM. Full real-model workflow, offline fresh-worker, reviewed exports, independent artifact parsing, note-only AI-impact and responsive visual suites passed against the assembled production tree. Public publication remains pending until verified below.

### Public release verified

Pages commit `fdd030ca3e8825fd8dc44e05cbb8beb25a7ed83c` reached `built`; workflow `45136153880` completed successfully. Seven exact public byte matches, both real-model fixtures, full review/edit/hold/undo/export/clipboard/max-batch/offline/privacy suite, note-only AI-impact probe, all 822 gallery cards, fresh desktop/phone layouts and independent downloaded-artifact parsing passed at the public URL. No runtime-sharing or size-guard changes were needed. Pre-existing unrelated recovery files and root working-tree edits are preserved and excluded from this run's source commit. No digest sent.
