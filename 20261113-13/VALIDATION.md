# Observed validation — 2026-11-13

- Production Vite build passed. Real Chrome browser, headless CPU with GPU disabled, not mocked inference.
- Studio batch: 5/5 intended category matches. Day-rounded draft 13,500 cents versus per-entry baseline 16,500 cents. Billable actual 47 minutes; 60 day-rounded versus 75 entry-rounded.
- Consultancy batch: 5/5 intended category matches, materially different ordering/durations and entry rounding. Draft and baseline 9,900 cents; 42 rounded minutes. Fixture wording is simple and close to category meanings; no universal accuracy claim.
- Harder paraphrase probe: 3/4 intended matches. “Repaired the broken checkout screen and shipped the customer portal update” was incorrectly linked to advisory rather than delivery. Mandatory human review and manual category correction are therefore necessary; the 10/10 simple fixtures do not establish general accuracy. See paraphrase-validation.json.
- Irrelevant instruction-like text received a nearest category, illustrating the model's inability to abstain. It stayed pending, could be held, and produced no charge. Human review is mandatory.
- 240 independent BigInt charge-oracle checks over increments 1–60 and both aggregation modes. Minute conservation, rounding monotonicity, invalid calendar dates, bad modes and malformed embedding guards passed.
- Browser-downloaded JSON/CSV parsed independently in Python for both fixtures, multiline/formula-like edits and 40-record maximum batch. All source IDs, notes, durations and reviewed text survived. Markdown and clipboard include reviewed multiline notes. Full audit reimport renews approval rather than trusting previous decisions.
- Review blocking, category edits, minutes validation, hold, undo, export invalidation, empty/invalid/oversized input, bad extension, duplicate IDs, maximum batch, all holds, cancellation/retry and stale-input guards passed.
- Fresh worker performed real model inference with the browser network fully disabled after warming. Offline reload/startup is not claimed.
- Fresh isolated contexts: blocked model downloads and retry, blocked worker download, unsupported worker constructor, malformed model result, worker error and accelerated timeout all produced actionable errors and no exportable fake results. Fault injection used ONLY for defensive cases, not successful inference.
- Real model-host request was gated during download, cancelled, then released; a different input completed real inference without stale overwrite.
- Captured production browser requests: only GETs with no bodies to documented static/model hosts. No model-host request before explicit load. Built text credential-pattern scan passed; shared WASM matched exactly. This is not an exhaustive security audit.
- Desktop 1440px, narrow 390px and 320px: no document overflow, all form controls labeled, buttons ≥44px, keyboard focus works. Overview/review/results screenshots recorded; desktop overview and narrow results visually inspected. Physical phones and other browser engines untested.

See browser-validation.json, defensive-validation.json, model-cancel-validation.json, oracle-validation.json, artifact-validation.json, privacy-validation.json and asset-validation.json. Combined/public verification reports are saved separately after publication.

## Publication

Root predeploy/deploy assembled 638 apps, zero failed/skipped, and published combined gh-pages commit `1799bfa8099bfae6acbd90ee1300f209df647f5d`. Matching Pages build/deploy completed successfully. Every public app asset, worker, factory and shared WASM byte-matched the production bundle; public gallery byte-matched the complete working gallery. The full public-browser suite passed, including both real-AI fixtures, 40-record batches, review/undo/reimport, artifact downloads, clipboard, offline fresh-worker inference and responsive views. Public gallery verified at desktop/320px with preserved older categories.

Pre-existing unrelated root edits and untracked app folders were preserved. This run commits its own new app and root gallery/README additions only.
