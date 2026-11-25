# Observed validation — Mentor Grove (20261125-9)

All data is synthetic. Chrome headless on this Mac, real production Vite bundle, WASM CPU with GPU disabled for the full workflow suite. No mocked model was used for successful inference checks. Defensive fault injections are separately identified.

## Real inference and workflow

- Community skills: all **6/6** learner first-choice domains matched the known fixture; all **3/3** mentor first-choice backgrounds matched. All six learners matched; stable and input-order plans both had zero blocking pairs. **No improvement claimed** for this fixture.
- Technical office hours: **6/6** learner first choices and **3/3** mentor first choices matched. Three seats, three matches, three unmatched records retained. Input-order baseline had **3** independently checked blocking-pair witnesses; the reviewed stable plan had **0**. This is a computed fixture comparison, not a measured program outcome or general AI accuracy estimate.
- A separate paraphrase without the literal SQL label retrieved the intended database mentor. One negation probe also retrieved its intended photography mentor; a single passing probe does not establish reliable negation reasoning or suitability.
- Real inference at 24 learners, including quotes/newlines/formula-like IDs. Largest supported 8-mentor/24-learner run processed **64 texts**, with maximum 200-character descriptions and 500-character notes. Dense exported audit **273,561 bytes** successfully reimported canonical originals. Empty mutual lists retained all learners as unmatched without inventing a pairing.
- Human approval requirement, review list reordering/removal, duplicate/unknown/malformed-list rejection, capacities, learner/mentor holds, undo, multiline notes, applied-snapshot invalidation, clipboard and actual Chrome JSON/CSV/Markdown downloads exercised.
- Model cache: after an online real run, all network was disabled and a **new worker** performed real inference inside the already-open warmed page. Cold offline reload/navigation is not supported or claimed.

## Independent deterministic and artifact checks

- `core-test.mjs` generates 300 bounded synthetic strict-preference cases.
- `independent-test.py` uses direct Python blocking predicates and exhaustive legal-assignment enumeration, not the JS solver. **3,707 assertions** check mutual acceptability, seat capacities, all original learners, baseline witnesses and learner-optimality against all stable solutions for rosters up to five active learners.
- `artifact-test.py` independently reopens actual browser downloads with Python JSON/CSV parsers, checks every record/field and spreadsheet escaping, including commas, quotes and multiline notes/IDs. Exact counts are in each `*-artifact-validation.json`; the local run includes dense envelope validation.

## Defensive checks

Real worker download abort and real Hugging Face model-host abort both produced visible failures without suggestions; removing the model-host block allowed a fresh real inference retry. Injected unsupported Worker/WASM, worker construction exception, worker error, malformed vectors, accelerated 180-second timeout and delayed stale response produced no fabricated output. Cancelling during delayed worker fetch prevented late construction; late File.text could not overwrite new source. Empty/bad/oversized envelopes, invalid capacity/data types, unsupported files and oversized imports failed visibly.

## UI, privacy, assets and collection

- Desktop 1440px and narrow 390px/320px viewport runs passed labels, minimum 44px controls and no horizontal overflow. Normal viewport input/review/result screenshots were visually inspected. A focus-dependent source-editor height originally intercepted a mobile button click; the dynamic height rule was removed and the full browser suite rerun successfully.
- Requests captured from startup through real inference were static GET downloads only, with no bodies or entered content in URLs. No model-host download before explicit user loading. Committed network logs contain only host/path/query-key names, not temporary CDN token values.
- No keys, provider integrations, remote inference, analytics or external fonts. New production text assets pass credential-pattern scanning, supplemented by source review. Runtime source hashes/protocol checked against `runtime-provenance.json`.
- All gallery inline scripts compiled with `new Function`; new entry exactly once, ai-utility first; **all 860 previous cards preserved**, 861 total. AI Utilities and old STL categories retained; narrow gallery no overflow.
- Root predeploy copied **861 apps**, failed/skipped **0**, using unchanged deployment rules and the unchanged 1 GB guard. Combined tree **999,900,403 bytes**, below the guard. No runtime-sharing changes were needed. The original gallery was inspected read-only (3,595 names); no equivalent two-sided mentor workflow was found. Original collection untouched; unrelated pre-existing recovery edits preserved and excluded from source staging.
- Seven assembled app/shell/shared-runtime/root asset byte matches passed. Full real inference/workflow/offline/export suite rerun against the assembled combined tree; reports carry the `assembled-` prefix.

## Publication

Public release **passed**. Verification is recorded in `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json` and related reports. A gh-pages branch push alone is not treated as success.

## Untested / not claimed

Physical phones, other browser engines, cold offline startup, uncached memory-constrained devices, live participant data, actual mentor suitability, eligibility, fairness, consent, invitations and eventual relationship success. English semantic similarity is only a proposal aid. Human review is essential, especially where goals are unrelated or descriptions contain negation. No participants were contacted.


Public release verified: matching built Pages commit `25a5f3b1161a18c925daecf047f00eebcb62fad3`, successful workflow `45516357941`, seven exact public app/runtime/root asset matches, both real-AI fixtures, separate semantic probe, full reviewed/export/offline/24-learner suite, 8-mentor/64-text dense round trip, **434** independent public artifact assertions and all 861 gallery cards. Combined site **999,900,403 bytes** remains below the unchanged guard; no sharing rules changed. Physical phones, other engines, cold offline startup and real participant outcomes remain untested. Unrelated recovery edits preserved and excluded from source staging. No digest sent.
