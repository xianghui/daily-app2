> **Publication blocked (2026-11-07):** all three Pages builds passed, but their deployments timed out. Public app returned 404, so public inference/assets remain unverified. Excluded from the gallery and combined deployment; not a completed published app. Local real-AI and workflow validation passed. See publication-status.json and hosting-attempts.json.

# Alias Calendar — UNPUBLISHED DRAFT

A room-booking reconciliation utility for facilities coordinators, not an autonomous scheduler. Incoming systems often use different descriptions for one shared space; exact name matching misses those aliases and their double bookings. This app uses real local semantic inference to propose canonical rooms, then exact time-overlap checks to block conflicted exports.

## Workflow

1. Paste/import two UTF-8 CSV files, or choose **Office bookings** / **Community bookings** synthetic examples.
2. Room directory headers: `id,name,description`. Incoming booking headers: `id,title,room,start,end`. Quote commas/newlines. Include informative room descriptions, not unexplained codes.
3. Explicitly press **Load AI & reconcile**. No model downloads occur before this action. Inspect ranked candidates and their source descriptions. Cosine scores are not confidence.
4. Review each assignment. Edit rooms, UTC start/end and resolution notes; reject individual suggestions with Unassigned or reject all to the exact-name baseline. Undo restores previous review states. Original data stays unchanged. Every edit clears approval and invalidates exports.
5. Resolve every same-room overlap; adjacent intervals are allowed. Mark every booking reviewed and apply. No unassigned, invalid or overlapping booking can be applied.
6. Download the complete JSON audit, reviewed CSV or valid UTC iCalendar `.ics`, or copy JSON. Export current reviewed values only. Import ICS into a separate calendar; importing repeatedly may duplicate/update events depending on your client. IDs generate stable UIDs; use unique IDs across batches to avoid collisions. Nobody is notified and no calendar account is connected.

## Real AI, source, license and deterministic boundary

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0, based on sentence-transformers/all-MiniLM-L6-v2; approximately 23 MB weights/tokenizers/config.
- Transformers.js 4.3.2 / ONNX Runtime Web WASM CPU; real mean-pooled normalized 384-dimensional embeddings. Four texts per inference batch; 256-token truncation. Room name plus description is embedded against the incoming free-text room value, **not the booking title**, to avoid mistaking activity for confirmed venue identity.
- Deterministic finite-vector/dimension/norm validation, cosine rankings and nearest-room selection; stable source order breaks ties. Deterministic UTC interval intersection, schema checks, reviewed snapshot and export formatting. No language-model generated actions or fake fallback.
- Always proposes a nearest room, even for an unrelated alias; no calibrated threshold. Human verification is mandatory. English short descriptions work best. Negation, restricted spaces, identical equipment and unexplained venue abbreviations may be misunderstood. Similarity never proves identity or booking authorization.
- Exact case-insensitive canonical room-name matching is the baseline. UI computes baseline/current unassigned counts and current conflict pair count from all records. Baseline conflicts ignore unassigned aliases, so fewer baseline conflicts is not proof of a better plan. No accuracy, time-saving or percentage improvement claims beyond the documented small fixture outcomes.

## Static hosting, downloads and offline scope

React + Vite, `/daily-app2/20261107-19/`. App, worker and matching WASM factory are local. The byte-identical 26,861,777-byte runtime binary is reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`); preserve that build in root deployment. Approximately 50 MB first-run weights/runtime plus app code. Hugging Face and its weight-CDN redirects host public model assets. These are downloads, not uploads of your booking data.

Current desktop Chrome/Edge with Workers, WASM, Cache API and sufficient memory recommended. CPU is the actual tested path: no GPU requirement or untested fallback. Physical phones, Safari, Firefox and low-memory devices are untested. Responsive layout tests are desktop Chrome emulations, not hardware performance certification.

Worker source, WASM factory and binary are explicitly cached using Cache API; Transformers.js caches model assets. After a successful run, real inference in a **fresh worker with all network disabled in the still-open page** is tested. Offline reload/navigation/startup is **not** promised (no service worker). Private browsing, cache eviction and storage restrictions may require another download. Clear site data to remove caches. Cancellation terminates the worker; downloaded asset fragments may remain.

## Privacy and trust

No remote inference option, API keys, telemetry, content POST or automatic external action. User content is retained only in memory. Public-model downloads do not upload that content. Asset caches contain code/weights, not booking data. Imports are data and cannot change tool permissions or ask for credentials. Only synthetic data is committed. Exported artifacts may contain your sensitive content; download them deliberately.

## Limits and defenses

1–24 bookings; 1–8 rooms; each input CSV ≤24,000 UTF-8 bytes; unique nonempty IDs ≤50 characters; all remaining fields ≤350; notes ≤500. Strict headers/order and CSV errors are validated. Dates: real minute-resolution UTC strings `YYYY-MM-DDTHH:mmZ`, 2000–2099, positive duration ≤24 hours. No recurring events, timezone conversion, room capacity, equipment allocation, travel buffers or live existing-calendar lookup. Conflict checking covers only this imported batch, not bookings outside it.

Generation tokens guard worker fetch/results and file reads; cancellation terminates workers; source changes invalidate review state. Network/runtime/worker errors, unsupported Workers/WASM, 180-second timeout and malformed embeddings display actionable errors without substitute AI. Reject/undo retain all originals. Apply requires complete reviewed, valid, conflict-free rows. The importer trims surrounding whitespace in fields; raw pasted/imported text remains in the source editors for the open session. JSON preserves exact parsed originals and reviewed fields; CSV prefixes formula-like text with an apostrophe for spreadsheet safety (intentional change); ICS escapes text, uses CRLF and folds to ≤75 UTF-8 octets. Export JSON for an exact lossless round-trip of parsed values; retain your raw CSV if surrounding whitespace is significant. No state persists after reload.

## Build, test and publish

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `deploy: gh-pages -d dist` is retained but **publish only the combined collection from the root**, per root README.

`python3 serve-test.py` serves the production bundle at port 6199 and shared binary at its real deployment path. `node browser-test.cjs` uses installed workspace Playwright/Chrome for real model and defensive tests. `node core-test.mjs` and `node bounds-test.mjs` test deterministic constraints and serialization. `export-roundtrip.py` independently parses downloaded artifacts with Python CSV/icalendar (`pip install icalendar` in a temporary virtual environment). Public browser evidence is stored separately. See VALIDATION.md for actual outcomes and scope; fault injections only test failure handling, never successful AI paths.

### Resuming this draft

Do not run the per-app deployment. First resolve Pages synchronization, re-add the `20261107-19` AI utility gallery entry, run candidate `validate-gallery.cjs`, rebuild and publish the combined root tree, then verify the exact served Pages commit/assets and rerun the browser suite against the public URL. Current `gallery-test.cjs` expects the candidate 512-entry gallery; the final restored draft exclusion is recorded in `draft-gallery-validation.json`. Never treat the prepublication candidate evidence as successful public delivery.
