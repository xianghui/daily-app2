# Observed validation

Production React/Vite build passed. Real headless desktop Chrome, CPU/WASM (GPU disabled), no mocked success inference:

- Water workshop: 2/2 protocol links matched known answers. For 140 samples, plans use pool sizes 8 and 3; modeled expected assays 53.6061252949; worst case 166.
- Materials workshop: 2/2 links matched. For 78 samples, sizes 6 and 1; expectation 34.8494571482. High positivity correctly chooses individual testing.
- These four simple matches are not general accuracy. Irrelevant instruction-like text still gets a nearest suggestion (resin); the fixture is held. No credential request, upload or action occurs.
- 1,380 independent exhaustive-outcome checks enumerate every positivity outcome for n=1–10, five rates including 0 and 1, caps 1–8. All candidate expectations, worst cases and enumerated optima match the independent oracle.
- 32-text maximum / four-text model chunks; 24 batch records survive download/reimport. Mandatory approval, hold blocking, edit/remap, undo, multiline review notes, clipboard, JSON/CSV/Markdown downloads and independent Python CSV parsing pass. Spreadsheet formula-like multiline text safely escaped; originals unchanged.
- Empty/malformed/oversized/unsupported inputs, duplicate IDs, rates/caps/counts fail visibly. Model host/network failure and recovery, worker download failure, disabled WASM, unsupported module workers, malformed vectors/envelopes, timeout and worker error are fault-injected defensive tests, never success evidence. They produce no fake suggestions.
- Cancellation then real retry passes; changed input invalidates running work. Delayed stale model replies cannot replace a completed newer run (fault-injection-only test), and delayed file reads cannot replace newer source.
- Explicit load required before model-host traffic. Observed requests are GETs without bodies, no fixture text in full URLs; only same-origin runtime and documented Hugging Face/CDN hosts. Runtime asset byte and credential-pattern scans recorded separately.
- Real fully offline fresh-worker inference succeeds on an already-open warmed production page. Offline reload/navigation not tested or promised.
- 1440/390/320px layouts, labels, keyboard focus and 44px+ buttons pass; normal-viewport screenshots inspected. Physical phones and browsers other than Chrome untested.

Final assembled/public-bundle checks and byte audits are recorded in the corresponding JSON reports after publishing. A build alone is not considered AI validation.

## Final public verification

Pages commit `042b264eec9811b9cb09b5322bc002830a2aaafe` reached `built`, matching remote gh-pages. All public app/worker/factory/WASM bytes match local production assets. The full public real-AI, maximum-batch, privacy, review/export and fresh-worker offline suite passed; downloaded artifacts were independently reparsed. Public gallery rendered all 710 cards with the 709 previous entries and categories preserved. GitHub compare confirms no older app assets changed. Assembled site: 999,979,853 bytes, below the existing conservative 1 GB guard. Source staging excludes unrelated pre-existing edits. No digest sent.
