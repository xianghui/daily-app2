# Evidence Split — observed validation

Production Vite bundle, real installed Chrome headless, WASM CPU, 2026-11-08. See machine-readable reports and reproducible scripts. Local validation passed before promotion; public evidence is recorded separately after deployment. No mock/model substitute was used for successful AI/workflow tests.

## Actual AI fixtures

| Synthetic input | Expected pairs | Actual above-threshold pairs | Non-pair edges | First-N crossing cues | Reviewed crossing cues |
|---|---:|---:|---:|---:|---:|
| Support snippets (6 rows) | 3 | 3 | 0 | 2 | 0 |
| Research abstracts (6 rows) | 3 | 3 | 0 | 2 | 0 |

Each fixture produced 3 groups of 2, a 2-row evaluation set and 4 training rows at target 33%. All six expected paraphrase pairs across both small fixtures were linked; none of the 24 non-pair comparisons across both sets exceeded threshold 0.65. These fixture-specific outcomes do not measure general accuracy or guarantee leakage prevention. AI changes groups relative to singleton rows and removes the displayed baseline crossings through group-preserving allocation.

**Known challenge:** opposite instructions “Reset the password for the customer account.” and “Do not reset the password for the customer account.” were grouped at cosine **0.8776974323**. This is an observed overmerge, not hidden as a successful semantic-equivalence decision. Human review/group overrides are essential. Transitive components and truncated context have additional risks.

## Workflow and constraints

- 40-row real inference in chunks of 4; all unique record IDs, original text/labels and rows conserved. No group crosses train/evaluation in the accepted result. JSON reimport reproduces input and reruns real AI.
- Pending decisions block apply. One-group unsplittable allocation blocks exports. Rename/reject groups, hold rows, note edits, undo and export invalidation verified. Held rows preserved in audit, omitted from train/evaluation.
- Independent exhaustive subset enumeration: 25 combinations of group sizes/target values matched the subset-sum nearest nonempty split objective; indivisible group integrity checked. This core logic test uses controlled vectors only for deterministic unit checks, not as AI evidence.
- Empty/malformed/oversized JSON, 41-row bound, duplicate IDs, text length, target range and unsupported file extension rejected.
- Cancel/download cancellation, input-change stale-result prevention and real retry passed. Worker construction error, worker failure, malformed vectors and accelerated 180-second timeout tested with fault injection; all left no fake suggestions.
- Actual model-host ONNX download aborted in a fresh browser context; no results shown. Removing the abort allowed real inference. Separate worker download abort and recovery passed.

## Cache, privacy and artifacts

- Online inference followed by network-offline **fresh-worker** inference in an open tab passed. Worker source, factory, shared WASM and model were usable from browser caches. No offline reopening/reloading claim.
- Browser request recording from production startup through tests: all GETs, no request bodies. No Hugging Face downloads before explicit run. User content was not in external requests. Model/CDN download query strings omitted from saved reports. No user-configured remote provider or API credentials.
- Built assets hashed and scanned for common credential patterns; source paths reviewed. No matching secrets. Runtime shares byte-identical immutable WASM from prior app, with local worker and factory.
- Actual JSON/CSV downloads independently parsed using Python JSON/csv. Every original field/record survives. Reviewed group/decision/note fields survive, computed counts agree with records, group integrity holds. Quoted commas, multiline text/notes and formula-like strings round-trip with documented CSV apostrophe sanitization. Clipboard matches downloaded reviewed CSV exactly.
- Desktop and 320/390 CSS-pixel phone layouts exercised. No horizontal overflow, working edited exports, visible labeled controls, focus styling and 44px minimum buttons. Screenshots visually inspected. Physical phones, Safari, Firefox, screen-reader navigation and actual assistive technology not tested.

## Build/gallery/publication

`npm run predeploy` passed. Root inline scripts compile with Node `new Function`; new entry occurs exactly once as `ai-utility`, newest first, all older gallery entries unchanged. Root predeploy/deploy and public runtime checks are recorded in deployment reports. Public browser inference must pass before this run is marked complete; branch push alone is not proof.
