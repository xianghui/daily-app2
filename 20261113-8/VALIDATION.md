# Observed validation — Role Accord

Synthetic-only checks, 2026-11-13 Asia/Singapore. Production Vite bundle served at the real deployment base, Chrome headless CPU (`--disable-gpu`). No mocked successful inference.

## AI outcomes

| Fixture | Intended roles | Observed real MiniLM roles | Matches |
|---|---|---|---|
| Release handoff | R, A, C, I | I, A, C, I | 3/4 |
| New starter guide | R, A, C, I | R, A, C, I | 4/4 |

After mandatory role correction/review, each fixture has one covered deliverable and one missing A/R: 1/2 coverage and two follow-ups. The literal-word baseline recognizes zero notes and covers 0/2. This is a tiny supplied-example comparison **including human corrections**, not a measured quality/time improvement. The release contributor misclassification demonstrates the limitation. An unrelated instruction-like note proposed I and stayed pending; a human held it. No commands or credential actions resulted.

A third, materially different conflict fixture uses two competing final approvers and an update recipient: real inference proposed A/A/I as intended. Mandatory review produces zero covered deliverables and four warnings (including the separate completely missing task). It does not silently pick a final owner.

## Checks

- `npm run predeploy` passes. `core-test.mjs`: 3,000 generated independent person/role-set oracle cases, conservation, missing tasks, duplicates, multi-accountability, follow-up task identity, pending/invalid review guards, malformed embedding shape/normalization.
- Real browser: both inputs, apply blocked while pending, edits/holds/undo, duplicate and multiple-accountable warnings, multiline owner/note, immutable originals, current copied Markdown, actual JSON/CSV/Markdown downloads, audit originals reimport.
- Four-text inference batches, maximum 40-row input, maximum audit reimport, all-held matrix and no lost rows.
- Empty/malformed/oversize JSON, empty arrays, duplicate IDs/people, unknown references, invalid reviewed owner, unsupported file extension and oversized file.
- Real model-host download cancellation/retry; changed input and delayed file/worker downloads; fault-injected worker ignores terminate and emits late valid vectors, old results ignored.
- Download failure/recovery, worker-download failure, unsupported module workers, actual worker WebAssembly-unavailable guard, malformed vectors, accelerated timeout and worker error. Fault injection only for these defensive cases; no fallback output.
- Actual fresh-worker inference while context completely offline after online warmup. Scope: already-open warmed page only, not offline app startup/reload.
- Traced network from page load through inference: no model host requests before explicit loading; all observed requests GET without bodies; no source text in URLs. Built text credential-pattern scan plus source review found no credential integration/upload path.
- Actual downloaded CSV independently parsed in Python; every original row and current reviewed role/person/deliverable retained, multiline/quotes/commas/emoji preserved, spreadsheet-formula text escaped. Markdown contains current review and task-linked follow-up checklist. A missing follow-up task ID caught in initial phone screenshot was fixed and a semantic oracle assertion added.
- 1440, 390 and 320px layout: no horizontal overflow, visible results, labeled form fields, keyboard focus and ≥44px buttons. Emulated iPhone touch performs real inference, undo/apply/download. Screenshots inspected. Physical phones/non-Chrome engines untested.

Reports: `browser-validation.json`, `core-validation.json`, `artifact-validation.json`, `defensive-validation.json`, `stale-result-validation.json`, `stale-import-validation.json`, `model-cancel-validation.json`, `touch-validation.json`, `asset-validation.json`.

## Collection and publication

Gallery script compilation, exact-once new entry and preservation of all baseline entries/categories are recorded in gallery reports. Combined-site publishing only. Public status/asset hashes and public real-AI workflow results will be recorded after deployment in `publication-status.json`, `public-asset-validation.json`, and `public-browser-validation.json`.

Public verification passed on Pages commit `3d0f56fcfad377b8518768a637e4dd10a725fdcb` (built): all app/worker/runtime files and the shared WASM byte-match local production assets; the complete 633-entry working-tree gallery byte-matches. Both built-in AI fixtures and the third conflicting-signoff fixture, full workflow, offline fresh-worker inference, export/reimport, privacy trace and responsive public checks passed. Public artifacts were independently parsed again. Source commit/push is tracked by repository Git history.
