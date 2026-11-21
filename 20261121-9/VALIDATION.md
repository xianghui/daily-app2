# Observed validation — Pinpoint Commons

## Production-bundle workflow
- Actual Chrome WASM CPU MiniLM inference, no mocked success path. Both synthetic six-record batches matched all 12 known package identities; first-package baseline 4/12. This tiny fixture is not a general accuracy estimate.
- Notebook batch selected NumPy 1.26.0, pandas 2.1.0, matplotlib 3.8.0. Reviewed direct bounds passed 3/3 versus 0/3 for newest-only supplied candidates.
- Web batch selected requests 2.31.0 and pytest 8.0.0; Pillow had an empty intersection with r3/r2 witnesses. Reviewed candidates passed 2/3 versus baseline 0/3; pin export blocked. Editing Pillow upper bound to 11.0.0 and reapproving enabled the expected 10.0.0 pin. Supplied versions/bounds are synthetic, not real support claims.
- Maximum 48 records / 12 catalog packages / 15 chunks inferred; all records/catalog packages survived audit export and reimport. Uncovered packages blocked pins. Reimport resets approvals and restores originals.
- Reviewed multiline formula-like note, hold, undo, input invalidation and current-only export controls tested. Actual downloaded JSON/CSV/Markdown/TXT parsed independently; every original and current reviewed bound survived. Pins satisfied all approved constraints. Clipboard exactly matched current Markdown.
- All network disabled after warming; fresh worker performed real inference successfully. Offline reload/navigation is not claimed.
- Cold model download cancellation/retry, failures and stale-response checks recorded separately. Defensive tests inject faults only; real success checks use the actual model.
- Desktop 1440 and phone-width 390/320 checked for no horizontal overflow, labeled editors and ≥44 px visible controls. Normal viewport hero/review/results screenshots recorded; desktop hero and phone hero/review/results visually inspected. Physical phones, other engines and exhaustive assistive-tech testing not performed.

## Numerical and failure checks
- Strict numeric three-part versions; tuple ordering, lower-inclusive/upper-exclusive boundaries, empty/overlapping-no-candidate distinctions, oldest/newest policy, complete review requirement, record conservation and all-held pin gate.
- 300 seeded interval/candidate property cases checked against independent integer-domain enumeration.
- Empty, malformed, null, oversized, bad-version and unknown-policy JSON; unsupported/oversized/malformed imports; invalid reviewed bounds.
- Worker download/network failure, WebAssembly unavailable, unsupported worker construction, malformed result vectors/envelopes, timeout, worker crash and late cancelled/input-changed messages. No fake output and exports disabled; network failure recovery executes real inference.
- A delayed real old result is delivered after a newer real batch; newer identities remain. Source edits terminate prior work and invalidate applied exports. A deliberately delayed file read could not overwrite a newer selected source; keyboard focus reached an interactive control.

## Privacy and assets
No model-host requests before explicit loading. Production-startup-through-inference request audit checks download-only GET traffic without bodies and no synthetic note text in external URLs. Reports sanitize temporary CDN query values. Source reviewed for upload/provider/key paths; built HTML/JS/CSS scanned for common credential patterns (not an exhaustive proof of arbitrary secret absence). Runtime worker/factory/WASM bytes and tokenizer ceiling inspected. Shared dependency hashes are recorded in `runtime-dependency-audit.json`.

## Publication
Combined gallery, root build, public Pages commit/assets and real public workflow checks are recorded in accompanying reports when complete. No standalone per-app deployment is used.

## Observed model limitation
A negated mixed-topic challenge (“not the HTTP request client”, photograph manipulation) incorrectly selected requests instead of Pillow. Mandatory source review is essential; no confidence percentages or general accuracy claims are made. See `input-stale-validation.json`.

## Completed public verification
Published through root `npm run deploy`; Pages commit `5ea055e3988512ff4e3cf4bcb71923674623e651` reached `built` with successful workflow 44842007792. Nine public gallery/app/worker/factory/WASM files matched assembled SHA-256 bytes. All 766 gallery cards rendered, with earlier categories and search intact. The full public real-model suite passed both fixtures, reviewed/held/edited downloads, clipboard, maximum batch, cancellation/retry, offline fresh-worker inference and 320/390/1440 layouts. Public artifacts were reparsed independently. Root assembly is 999,915,089 bytes, below the unchanged conservative 1 GB guard; no extra legacy sharing or scheduler/config changes were needed.

Pre-existing unrelated root README/gallery edits and untracked older drafts were preserved, not included in this app’s source commit. The public gallery preserves the entire working collection, including its pre-existing entry.
