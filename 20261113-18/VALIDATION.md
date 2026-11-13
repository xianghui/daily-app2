# Observed validation — 2026-11-13

## Real inference / task quality

Actual production-bundle MiniLM q8 CPU inference ran in headless desktop Chrome with GPU disabled. No inference mocks were used for successful workflow tests. Both materially different synthetic surveys matched all 8/8 intended identities (4/4 each): row-house walls/glazing/roof/slab perimeter; annex door/lintel/wall/roof. Tiny, deliberately clear fixtures are not a general accuracy estimate. Unrelated instruction-like text still received a candidate and remained pending: holding it blocked the total. No truth/negation/construction verification is claimed.

Known-answer reviewed calculations:

| Survey | Area-only current W | Bridge-aware current W | Scenario W | Current annual kWh | Scenario annual kWh |
|---|---:|---:|---:|---:|---:|
| Row house, ΔT 20 K, 2200 HDD | 4140 | 4320 | 1140 | 11404.8 | 3009.6 |
| Studio annex, ΔT 25 K, 1800 HDD | 2207.5 | 2287.5 | 527.5 | 3952.8 | 911.52 |

Both scenario caps were met. These are computed transmission estimates only. A 1 W cap correctly failed; zero degree days yielded zero annual estimates. Switching a reviewed surface to a linear bridge reset supplied coefficients and changed the result/units.

## Independent arithmetic and artifacts

3,000 random bounded 1–40-record cases matched Python Fraction-oracle H, current/scenario watts, bridge loss, degree-day estimates and exact cap comparison. Schema/invalid embeddings/pending/holds/coefficients validated separately. Browser-downloaded JSON/CSV were independently parsed with Python, checking every original/reviewed row, unit, dimension, coefficients, watts and conservation. 40-record JSON reimport and fresh inference retained every original and reset approvals. Multiline quotes, commas, Unicode, formula-like reviewer/evidence content survived JSON/Markdown and safe CSV escaping. Held and all-held outputs retained sources without fabricated totals. Clipboard matched current reviewed content.

## Interaction, privacy and resilience

Nine browser workflow groups passed: both fixtures; multiline edit/undo/hold/artifacts/reimport; offline fresh-worker inference; empty/invalid/oversized/duplicate/unsupported inputs; cancel/retry/stale-input/max batch; unit/cap/climate edges; instruction-like data; desktop/narrow layouts. Six defensive cases passed: model-host network failure with successful real retry, worker-download failure, unsupported Worker construction, malformed embeddings, accelerated 180-second timeout, worker crash. Only defensive cases use fault injection. Separate gated actual model-download cancellation followed by new-input real inference passed. Delayed file import and a fault-injected worker ignoring termination could not overwrite replacement input; correcting an identity changed the computed plan and undo restored it. Touch-emulated 320px inference, review, apply, download and undo passed; physical phones were not tested.

All observed requests from startup through inference were GETs without bodies to same-origin assets or documented model/CDN hosts. No model-host request occurred before explicit invocation. Built text credential-pattern scan found no matches; source integration review confirms there is no provider-key/remote inference path. Pattern scanning is not a universal secret detector.

Runtime/factory/shared-WASM paths and byte hashes passed. Network-blocked fresh-worker real inference passed in the warmed page. This does not establish offline reload/startup. Worker runtime errors never create deterministic substitute suggestions. Normal viewport screenshots inspected at 320px and desktop; automated 320/390/1440 overflow/labels/touch-target/focus checks passed. Initial prototype browser harness had an incorrect annex expected value (531.25 W); independent manual arithmetic corrected the test to 527.5 W, then the full suite passed. No application formula change was needed.

## Publication

Local validation passed. Combined collection and public validation status will be appended after root deployment; a branch push alone is not proof of a public release.


Combined root predeploy/deploy succeeded: 643 apps, no build failures/skips. Pages commit `aa69b29f4943931eb90399f48e751a1d478434d4` reached built; matching workflow succeeded. All public app/worker/factory/WASM files and root gallery byte-matched production. Both real-AI fixtures, all nine workflow groups including warmed-page fresh-worker offline inference, reviewed artifacts, and complete preserved 643-entry gallery passed at the public URL. Public downloaded artifacts independently reparsed afterward. Source commit is recorded in Git history.
