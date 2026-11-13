# Restore Harbor

A point-in-time backup evidence review utility for a small-team IT reviewer. Import/paste a synthetic or local JSON inventory, set system recovery-point (RPO hours) and recovery-time (RTO minutes) targets, run real local AI system matching, review/edit each link and evidence field, approve or hold, apply, then download the current JSON/CSV/Markdown checklist or copy Markdown. Undo reverses review edits. Changing input cancels work and clears stale reviews; editing reviews invalidates exports until reapplied.

## Real AI and static hosting

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX feature extraction. Transformers.js 4.3.2, ONNX Runtime Web, WASM CPU (no WebGPU or API key required).
- Actual normalized mean-pooled 384-dimensional model embeddings encode supplied system descriptions and informal backup notes. Cosine ranking supplies reviewable candidate links and evidence scores. This is semantic inference, not keyword matching or a generative answer. Scores are not confidence probabilities; the highest match may be wrong, even for unrelated text.
- Approximately 23 MB model/tokenizer downloads from huggingface.co and its hf.co CDN, plus 26,861,777 bytes same-origin WASM and the bundled runtime/app. Download begins only after explicit Load AI. No content uploads, remote inference, provider keys, analytics or backend. Model host sees file requests/IP, not the submitted report text. No content persistence beyond downloads selected by the user.
- Runtime factory is bundled under public/runtime. Worker is bundled locally. Byte-identical WASM reuses immutable `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` in the collection; preserve that app/path. Hash recorded in asset-validation.json.
- Modern WebAssembly SIMD/module-worker browser, several hundred MB free memory recommended. Chrome on desktop CPU tested. Phone-sized viewports tested, not physical phones; other browsers/devices unverified. No WebGPU requirement. Worker errors and missing WASM/module workers produce errors, not deterministic pretend inference.
- Initial internet required. Worker, module factory and WASM cached through Cache API; model/tokenizer cached by Transformers.js. Real offline fresh-worker inference passed with all network blocked inside an already-open warmed page. Offline app-shell navigation/reload/startup is NOT promised. Browser eviction or inaccessible Cache API needs internet. Close the tab to release in-memory reports; clear browser site cache to evict model/runtime.

## Data contract and limits

Source object: `{project, asOf, systems, records}`. See the two synthetic buttons for complete editable examples. asOf is a valid exact UTC timestamp (`YYYY-MM-DDTHH:mm:ssZ`); all ages refer to that frozen snapshot, never automatically age forward.

2–8 systems: unique `id`, `label`, `description` ≤300 chars, integer `rpoHours` 0–8760, integer `rtoMinutes` 1–43200. 1–40 backup records: unique `id`, `note` ≤300 chars, integer `ageHours` 0–87600 (round conservatively upward), integer `restoreMinutes` 1–43200, boolean `tested` and `jobOk`, nonempty `owner` ≤150 chars. Source ≤40,000 characters, imports `.json` ≤300 KB, batches of 4 texts, truncation ≤256 tokens/text, timeout 180 seconds. No CSV/PDF/binary-backup import. Bad/empty/oversized input is blocked. Unknown duration requires holding evidence rather than inventing test data. Review notes ≤1000 chars. Inputs cannot change authority or request credentials.

Review every record explicitly, including holds. Editable age, duration, tested/job-success flags, identity, owner and multiline notes are preserved separately from immutable originals. Cancel terminates the worker; run tokens guard late responses and delayed file reads. Retry starts fresh. Outputs validate finite normalized vectors and expected count/dimensions; no malformed model result is applied.

## Deterministic checks and useful comparison

A reviewed copy passes exactly when jobOk AND tested AND ageHours ≤ system RPO AND restoreMinutes ≤ system RTO. A system passes if ANY SINGLE approved copy passes all four checks; partial passes from different copies cannot be combined. Every system remains in coverage, including systems with zero reviewed evidence. Holds remain in complete exports and make the audit partial. Per-copy reasons give refresh, failed-job, restore-test or restore-speed follow-ups with reviewed owners. All-system follow-up exposes missing inventories.

Baseline counts systems with ANY approved successful job, ignoring age, tests and restore duration. The stricter evidence comparison exposes an actual review bottleneck—successful jobs are not necessarily target-meeting restores. It is not a claim of measured risk reduction, accuracy, saved time or production resilience. AI suggests system identities only; all targets, evidence and decisions require verification.

Restore duration must cover the scope relevant to RTO. No dependency recovery analysis, detection delay, malware validation, offsite/immutable protection, test freshness validation or compliance certification. No account access, job changes, external sends or restore execution. Multiple-system jobs should be split into explicit per-system records before import. This is a snapshot worksheet, not a monitoring system.

## Exports and round trip

JSON: originals, current reviews, every system, approved plans and counts. Reimport restores ORIGINAL inputs only and requires renewed inference/review (it intentionally does not trust imported approvals). CSV: every backup including holds, followed by one `record_type=system` row per target, so missing systems survive. Formula-like text is apostrophe-escaped; original values remain intact in JSON. Markdown: all-system checklist plus every reviewed backup/source/owner/note. Download/copy only enables after applying current reviews; edits invalidate the snapshot.

## Build and validation

`npm install`, `npm run predeploy`; Vite base `/daily-app2/20261113-11/`. Per-app `deploy` exists as required but DO NOT use it to publish the collection. Publish only using root predeploy/deploy.

See [VALIDATION.md](VALIDATION.md) for observed checks, fixtures and explicit limitations. Tests use synthetic data only. Browser tests use an installed Playwright/Chrome path in this workstation; adapt that path elsewhere. Fault-injected workers are restricted to failure/stale-result tests, never used to demonstrate successful AI.
