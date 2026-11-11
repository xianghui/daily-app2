# Observed validation — 2026-11-11

## Real AI on the production bundle

Actual headless desktop Chrome, Transformers.js 4.3.2 / q8 MiniLM / single-thread WASM CPU. No mocked successful inference. Transit expected/predicted: timing, timing, access, access, fare, timing, fare, fare (8/8). Garden: water, water, compost, compost, tools, tools, water, compost (8/8). Exact-title baseline resolved/matched 0/16 because annotations paraphrase descriptions. These two tiny synthetic fixtures are not a general accuracy claim.

Each fixture had four paired units, three agreements and one seeded disagreement: observed .750, expected .3125 and kappa 7/11 ≈ .636. Transit unit T3 and garden G4 appeared in the adjudication queue with both original annotation IDs. Independent row/column counts reconciled exactly. No statistics certify true/correct coding or automatically pass a dataset.

Negation probe **failed**: “Not late buses. This is about ticket fares and payment refunds.” was mapped to timing, not fare. Unrelated instruction-like Jupiter text was forced to access. Both were held; no complete pair or statistics survived. Demonstrates why human review and excluded coverage matter; no tool authority or credential requests were triggered.

## Workflow, artifacts, privacy and devices

- Real production worker, local factory and shared immutable WASM loaded. No model-host request before explicit loading. All captured requests were GET/no body and did not contain tested source content; integration inspection found no off-device-content inference or telemetry. Built credential-pattern scan clean, not exhaustive proof.
- Fresh-worker real inference with network completely disabled passed after an online run, in the already-open warmed page. Offline reload/navigation NOT claimed or tested.
- Maximum six-category/twelve-annotation input: eighteen embeddings in four-text chunks, every annotation/pair retained. Audit JSON reimport restored original data and required renewed AI and approvals; repeated matrix matched.
- Human code correction, undo, notes, pending-approval blocking, hold/exclusion, all-held no-pair state, missing partner, all-one-code undefined kappa, exact-title baseline with case/whitespace normalization, discard and stale-export invalidation exercised.
- Actual downloaded JSON/CSV/Markdown and clipboard validated. Independent Python CSV parser confirmed every original/reviewed field and record in reviewed/max/phone exports, formula-like multiline quoted note escaping, edited code, complete Markdown register and independent pair/matrix counts. JSON round-trip preserved originals and matrix. Tests retain only synthetic examples.
- Empty/invalid JSON/null/oversized/schema errors, duplicate unit/rater, unsupported coder/file type, oversized file and text are rejected. Cancel/retry and input-change stale runs pass. Delayed file-read/download tests confirm old responses cannot replace newer source; retry performed real inference.
- Fault injection only for defensive paths: model-host network abort followed by actual inference recovery; worker-download abort; missing Worker; actual worker WebAssembly unavailable; malformed vector; worker error; accelerated 180-second timeout. No fake records or enabled exports on errors.
- Node oracle enumerated 1,701 paired categorical cases, independently checking expected agreement using all cross-coder pair combinations and observed/kappa/matrix/queue invariants. Additional holds, missing pairs, no-pair, pending, duplicates, tampered source IDs and malformed-vector guards passed.
- Additional real-inference boundary fixture: six 40-character category IDs at 320 px, maximum batch, discard/reapply, and a formula-like quoted multiline original source independently parsed from downloaded CSV.
- 1440/390/320 px real browser layouts: no horizontal overflow; all inputs/selects/textareas labeled, focus functional, buttons ≥44 px. Download/copy actions worked. Phone screenshot visually inspected. Physical mobile devices, screen readers, other browsers and reload-offline behavior unverified.

## Gallery and publication

Gallery inline scripts compiled with Node `new Function`, new entry exactly once and all 597 prior entries/order preserved. AI Utilities remains first, historical STL/Mini Games/SaaS categories retained. Separate reports record combined assembly, public byte-matched assets/runtime/WASM, actual public real inference and public gallery rendering. Public status is not inferred from a branch push.

Combined production assembly contains 598 app indexes, with new app assets and shared WASM byte-identical to the validated individual build. The complete real-AI/browser workflow suite passed again against that assembled bundle. Gallery browser checks confirmed AI Utilities and the new app first, with legacy categories and no overflow at 1440/320 px.

Public release verified on the first deployment: Pages workflow `43017783775` successfully built/deployed `f8bf8df0ec8bf923401ecd7319cd94bb46d66bf3`. Public app, worker, local factory and shared WASM hashes match the local production build. The public gallery is byte-identical to current workspace source, with 598 entries, the new app first and historical categories intact. The complete real-browser workflow suite passed at the public URL, including both real-model fixtures (16/16 intended mappings), offline fresh-worker inference, maximum batching, review/edit/undo, downloaded artifacts, clipboard and 1440/390/320 px layouts. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `publication-status.json`. Source publication preserves unrelated pre-existing workspace changes.
