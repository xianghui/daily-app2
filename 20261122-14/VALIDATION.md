# Observed validation — Token Passage

## Production app, real AI
- Real default q8 MiniLM inference in desktop Chrome with GPU disabled, on the assembled production bundle. Two-resource trap: 16/16 intended arc identities; editorial handoff: 8/8. These are tiny synthetic known answers, not general accuracy. Negated/unknown input still selects a nearest place and stays pending; hold is required. No fake fallback.
- Reviewed resource fixture: 9 reachable markings, 1 non-goal terminal deadlock after `A-pick → B-pick`; shortest completion 4 firings. Initially 2 actions enabled and no initial deadlock: initial-only checks miss the later trap. Editorial fixture: 4 reachable markings, no terminal deadlocks, completion in 3 firings despite a revision loop. No universal-completion/livelock claim.
- Core known-answer checks and 250 independently enumerated random finite systems agree on reachable states and terminal deadlock counts. A separate state-bound stress case explores all 6,560 nonempty markings of 6,561 possible; full pretty JSON audit 2,912,372 bytes. Token capacities preserved.
- Maximum browser batch: 8 places, 16 actions, 48 arcs; 56 neural embeddings in 14 chunks. Human correction used for the deliberately indistinguishable stage labels. All original actions/arcs retained, counts within capacities, full downloaded audit reimported as originals.

## Workflow and defenses
- Actual downloaded JSON, quoted CSV, state/path CSV and Markdown independently parsed using Python; counts, reviewed places, notes, markings and paths preserved. Multiline formula-like reviewer note with comma/quotes survived lossless JSON and apostrophe-escaped CSV. Clipboard contained current reviewed text. Import restores originals, not previous approvals.
- Pending approval blocks analysis; holds retain every review and withhold whole analysis. Place/count edits reset approval and invalidate exports; notes invalidate exports; undo restores previous edits. Source changes clear results. Actual cancellation then real inference retry passed.
- Fresh-worker real inference with all network offline succeeded in an already-open warmed production page. This does not test cold app-shell reload and is the only offline claim.
- Defensive tests inject malformed vectors/envelopes, missing WASM support, unsupported worker construction, worker errors, download failure and shortened timeout. Network model failure followed by actual model retry passed. No fabricated result released.
- Delayed worker response after cancel/input change ignored. Async file-read and worker-source-fetch races ignored. A newer real inference survives a delayed prior-run error. Cold model download progress/cancellation followed by real retry passed.
- Empty/invalid/oversized source, unsupported file extension and oversized file handled without suggestions/exports. Input field, batch and vector schema bounds exercised.
- Network capture from startup through real inference: no model request before explicit load; download GETs only, no request bodies or source text in URLs. Credential-pattern scan of built JS/CSS/HTML clean; source contains no remote provider/key integration. This is observed traffic plus integration review, not an exhaustive security proof.

## Presentation and collection
- 1,440 / 390 / 320 px: no document overflow, visible field labels, 44 px minimum button/input/select/summary targets, keyboard focus and working input/review/export. Normal viewport hero/review/results screenshots inspected. Physical phones and non-Chrome browsers untested.
- Inline gallery scripts compiled with Node new Function; 794 existing entries preserved and one new entry exactly once; 795 rendered cards. AI Utilities first, old STL/game categories and legacy search preserved.
- Root predeploy succeeded; every gallery app present, new app/shared-runtime bytes match source builds; no source dist rewritten by runtime sharing. Combined site 999,718,378 bytes under unchanged 1 GB guard (see assembly report).
- Additional deploy-only byte-identical geometry reuse for existing `20261029-11`, using immutable `20261028-24` runtime. Real legacy worker generation, image and STL imports, triangle-valid binary STL exports and portable JSON roundtrip passed. Compatibility JS paths preserved.

Machine-readable reports and test scripts accompany the source. Publication is verified separately in `publication-status.json`, public asset and public browser/gallery/legacy reports; build success alone is not publication proof. No digest sent.

## Public release

Pages commit `2f76e336964fd07e1c2e4f7defcca59fca9fb401`, matching workflow `44988145491`: built/success. Seven public asset byte matches. Full real-AI workflow suite rerun at the public URL, including both fixtures (24/24 simple links), actual reviewed downloads/clipboard, maximum batch, warmed-page fresh-worker offline inference, privacy and responsive checks. All 795 gallery cards and public legacy worker/image/STL import/export regression passed. Public asset reports include the affected legacy shell/worker/shared geometry. No physical-device or cold offline-shell claim. Source main push is recorded by the automation’s final repository check.
