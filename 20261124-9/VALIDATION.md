# Observed validation — Collation Desk

## Production bundle, current desktop Chrome / WASM CPU

- `npm run predeploy`: passed React/Vite production build.
- Real model, no mock success path: both materially different fixtures matched all **6/6** intended sorting-contract links; every known-answer ordered array matched. This is a tiny synthetic fixture set, not an accuracy estimate.
- Same four strings + changed audience note: real inference changed Swedish ↔ German contract and resulting order. No hard-coded AI response or deterministic fallback.
- Competing-negation challenge: intended German, actual Swedish. Documented limitation; explicit human review required.
- Initial fixture: 3 approved lists, 13 retained occurrences, 7 pairwise differences from UTF-16 baseline, 1 adjacent collation tie. Counts calculated, no invented confidence/time claims.
- Stable occurrences: duplicate strings and natural numeric ties retain source-index order; base-sensitivity ties tested; no implicit deduplication. Invalid arrays, empty lists, overlimits, nested/numeric cells rejected. Approved invalid lists blocked; pending reviews prevent application; holds excluded only from release, retained in audits.
- Actual downloads reopened by independent Python JSON/CSV parsers. All originals, current reviewed arrays, multiline quotes/commas/formula-leading notes and occurrence indexes survived; release entries match reviewed snapshots. Independent UTF-16 baseline inversion recomputation matches displayed values. Markdown and clipboard exercised.
- Maximum **24 lists ×30 occurrences =720** conserved through inference chunking, review, exports and audit reimport. Reimport restores originals, not old approvals.
- Edits invalidate export; contract/item edits reset approval; undo and holds tested. Explicit cancel/retry with actual inference succeeds. Late valid injected result cannot replace newer actual inference. Pending worker download and file-read races cannot overwrite newer input.
- Network-aborted real worker and Hugging Face model downloads fail closed, model-host retry with real inference succeeds. Unsupported Worker/WebAssembly, worker constructor/error, malformed vector output and accelerated timeout fault injection yield no suggestions. Missing locale data fails with actionable error. Fault injection tests defensive paths only, never stands in for successful AI inference.
- Startup-through-inference network observation: GET-only static/model asset traffic, no body, no context content in URLs and no model-host traffic before explicit model loading. Stored network audit omits signed URL query values. Built text credential-pattern scan found none; no remote provider path exists.
- Real inference succeeds with **fresh worker while all network is blocked**, after warming the current open page. This does not test or claim offline cold navigation/reload.
- 1440, 390 and 320px layouts: no horizontal overflow, labeled forms, ≥44px controls; keyboard focus order checked. Normal-viewport hero/review/results screenshots inspected. Physical phones and other engines untested.

## Collection and publication

- Gallery scripts compiled via Node `new Function`; new utility appears exactly once; all 837 prior entries preserved. Gallery renders 838 cards, keeps old categories and works at narrow width.
- Root `npm run predeploy`: 838 built, zero failed/skipped; combined size **999,820,325 bytes**, below unchanged 1,000,000,000-byte guard. No new deduplication rule or legacy asset changes needed.
- Assembled production bundle and all three immutable shared worker/factory/WASM assets byte-checked; nine assets including gallery exact-match local hashes. Full real browser workflow rerun on assembled deployment; machine reports record results.
- Public Pages checks and pushed main status are appended after publication; branch push alone is not considered verification.

Public release verified: Pages commit `e3f27fdf6b008823b25ee61f78f605b54ec0c3fc`, workflow `45294587912`, built/success. Nine exact public asset matches, real-AI fixtures, complete review/edit/undo/export/720-occurrence/privacy/offline/phone-layout checks, independently parsed public downloads and all 838 gallery cards passed. Negation misroute remains documented; physical phones/other engines/cold offline reload remain untested. Combined site 999,820,325 bytes; no guard changes or new legacy sharing rules.
