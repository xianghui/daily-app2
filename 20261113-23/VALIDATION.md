# Observed validation — 2026-11-13

## Production bundle / real inference

- `npm run predeploy` passed. Real desktop Chrome headless CPU inference (not a model mock), app served under its production deployment base and actual worker/WASM paths.
- Office fixture: paper/plastic/plastic/paper, 4/4 expected material identities. Paper bin: 1,000 g gross, 200 g incompatible; count baseline 66.67%, mass fraction 20%. At 10% limit, separate O2 (120 g); remaining 880 g with 80 g incompatible (9.09%).
- Kitchen fixture: food/glass/glass/glass, 4/4 expected identities. Organics: 1,100 g gross, 200 g incompatible; 5% limit requires K2 and K3 (200 g); remaining 900 g. These eight easy synthetic observations do not estimate real-world accuracy.
- 40-record real-inference batch and lossless audit-envelope reimport passed; runtime processes batches of four. Every source retained.
- Fully offline fresh-worker inference passed on an already-open warmed page. Offline reload/startup not claimed or tested.

## Review, defensive checks and exports

- Pending approvals block application; hold blocks complete totals but preserves all audit records. Corrections to mass and bin change the applied worksheet. Multiline owner/review notes, undo, export invalidation and clipboard/download actions passed.
- Downloaded JSON envelopes parsed; CSV parsed independently with Python csv. 52 CSV records checked against reviewed ids, materials, gram values and multiline edits. Formula-like text is prefixed in CSV; JSON retains exact text. Markdown contains current edited notes. Maximum-batch reimport restores originals and resets decisions to pending.
- Empty/invalid/oversized inputs, duplicate ids, invalid acceptance lists, fractional/out-of-range masses, unsupported import, input edits during runs, cancellation/retry, stale-run rejection passed.
- Cold model download cancelled then retried with real inference. Network/model and worker-download failure, unavailable workers, worker error, malformed vector output and accelerated timeout surfaced actionable errors with no fake results. Fault injection used only for defensive modes; successful inference used the real model.
- Instruction-like unrelated text received a pending proposal only; no authority or automatic approval. Held challenge blocked summary. Nearest-neighbor output on irrelevant data is not trustworthy classification.

## Independent deterministic checks

- 400 seeded small cases compared proposed minimum-touch plans with every subset of incompatible records; all matched the exact minimum feasible record count. Mass conservation checked per case. Empty/all-incompatible, zero-limit and threshold equality checked.
- All applied browser exports reconciled original/review row counts and per-bin gross = moved + remaining; incompatible = moved + residual. No source records silently lost.

## Privacy, assets and accessibility

- Production browser request capture from page load through inference: only GETs without bodies; known local/model-host download paths. No model requests before explicit load, no content uploads. Source reviewed: no external inference integration or credentials. Built credential-pattern scan is a supplemental check, not a security proof.
- Shared WASM exact byte comparison and bundled local factory paths audited. See asset-validation.json.
- 1440, 390 and 320 px widths checked for horizontal overflow, labels, keyboard focus and ≥44 px buttons; saved overview/review/results screenshots. Narrow results and a fresh-page 390 px overview visually inspected; fresh-page capture confirmed a resize screenshot artifact was not duplicated page content. Physical mobile devices and assistive-technology navigation untested.

## Publication

Local checks above completed before gallery inclusion. Root combined assembly, gallery preservation and public Pages verification results are recorded in the adjacent reports; publication-status.json is authoritative for final hosting status.

### Completed public verification

Root predeploy assembled all 648 apps with zero failures/skips; deploy-only WASM reuse kept the combined site at 975,884,334 bytes. Root `npm run deploy` published the combined site. Pages commit `9c606c1d00876cc348908c181987872cb954cb6b` reached `built`. Public app, JS/CSS/worker/factory and immutable shared WASM byte-matched the production assets. The complete browser suite passed again on the public URL, including both real CPU fixtures, 40-record batch, review/export/cancel/stale-input checks, warmed-page offline fresh-worker inference and 1440/390/320 px layouts. Public gallery rendered all 648 entries with both legacy categories preserved. See public-asset-validation.json, public-browser-validation.json and public-gallery-ui-validation.json. No known failing checks remain; devices/assistive technologies and offline reload not explicitly tested remain unverified.
