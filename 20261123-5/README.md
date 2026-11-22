# Wallclock Desk

A local-first event-coordination utility: **venue notes → real semantic retrieval → human time review → UTC calendar worksheet**.

## Intended workflow

For coordinators repeatedly reconciling informal venue references in international event batches. Local start times alone do not identify an instant during a daylight-saving rollback, and may identify no instant during a spring-forward gap.

1. Load either synthetic example, paste source JSON, or import source/audit `.json` (originals only).
2. Supply 2–8 known venue descriptions with explicit IANA zones, 1–32 events with `venueNote`, `local` (`YYYY-MM-DDTHH:mm`) and `minutes` (elapsed duration). Set `preventOverlap` to require no overlapping resolved events at the same reviewed venue.
3. Explicitly click **Load AI & reconcile**. Inspect download and real inference progress; cancel terminates the worker, retry safely starts again.
4. Compare each full note with the proposed venue, inspect cosine evidence and zone. Choose earlier/later UTC for repeated times. Correct nonexistent dates in the source and rerun, or explicitly hold. Approve/hold every event.
5. Apply the reviewed scenario. Unresolved approved events and optional same-venue overlap constraints block usable calendar/schedule exports, but complete audit exports remain available.
6. Export UTC ICS, held-aware Schedule CSV, lossless JSON, complete audit CSV/Markdown, or copy the worksheet. No sending, invitations or calendar connection. Review changes invalidate applied exports; undo restores the last review edit. Reimport requires fresh inference/review.

Source shape is illustrated in `src/core.js` and the UI. Only the explicit schema is accepted; extra fields, invalid dates, duplicates, unsupported zones and out-of-bound values are rejected. JSON imports up to 16 MB allow larger audit envelopes; original source remains limited to 60,000 characters. Originals are never altered by review.

## What AI does (and does not)

Real **Xenova/all-MiniLM-L6-v2**, quantized q8, produces normalized mean-pooled 384-dimensional embeddings in a browser worker. Cosine ranking retrieves the supplied venue description closest to each informal venue note. This avoids repeated manual alias lookup across a batch; it is not string sorting, a regex classifier, generation or a canned response. All descriptions/notes are at most 200 characters, at most 40 embedding texts, four per inference chunk. The runtime tokenizer has `model_max_length: 512`; the pipeline's `max_length` option is not treated as a stricter guaranteed limit. Finite vector count/dimensions/norms are validated.

The model is English-oriented and similarity is not confidence, location verification or negation understanding. Unknown, negated or multilingual notes still get a nearest candidate. All suggestions start pending. Imported text is data supplied only to an embedding model, never tool instructions or credential requests. You supply the correct time zone and dates; the model does not infer either.

After review, **deterministic** time resolution exhaustively tests all UTC minutes within ±14 hours of the wall timestamp against exact `Intl.DateTimeFormat` wall components. The eight supported zones use minute-aligned offsets within the supported 2024–2035 dates. A zero/one/two-candidate result means gap/unique/fold. No silent “compatible” DST adjustment. Overlap checks use half-open UTC intervals per reviewed venue. Duration is real elapsed minutes, not nominal wall-clock duration across a transition. Future zone legislation and browser IANA-data freshness remain limitations.

Supported zones: America/New_York, America/Los_Angeles, Europe/London, Europe/Berlin, Australia/Sydney, Pacific/Auckland, Asia/Singapore, Asia/Kolkata. Dates 2024–2035, minute precision; duration 1–1,440 minutes. No recurrence, arbitrary time zones, travel allowance, attendee availability or actual calendar validation.

## Runtime, download, licenses and privacy

- Model/source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 — Apache-2.0, approximately 23 MB including q8 weights/tokenizer/config. Runtime uses repository `main` resolution, not an app-pinned immutable model revision. Observed resolution is recorded in `model-runtime-audit.json`.
- Transformers.js 4.3.2: Apache-2.0, https://github.com/huggingface/transformers.js.
- ONNX Runtime Web: MIT, https://github.com/microsoft/onnxruntime. CPU WASM binary approximately 27 MB; worker JS approximately 549 KB and factory approximately 53 KB.
- First inference requires internet to this static site plus Hugging Face/CDN (`huggingface.co` and its redirected file hosts). No model-host request before Load AI. No API keys, agent credentials, optional providers, uploads, telemetry or remote inference.
- App code is bundled locally. Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve both older apps and paths in combined publication. Exact dependency hashes: `runtime-dependency-audit.json`.
- HTTPS/localhost, module workers, WebAssembly SIMD, Intl IANA zones and several hundred MB available RAM required. Uses WASM CPU, not WebGPU; tested with GPU disabled in desktop Chrome. No oversized generative model promise for phones. Physical devices, Safari/Firefox and assistive-technology behavior are untested.
- Content stays in volatile page/worker memory; only public file downloads go over the network. Exports write to the user's chosen browser download location. Model/runtime/worker caches use Cache API where available; eviction or disabled caching requires internet.
- **Tested offline scope:** terminate/recreate the worker and run real inference with network disabled in an already-open warmed page. Cold navigation, reload, installation or permanent offline availability are not promised. Browser time-zone calculations need no network.
- Run IDs guard worker messages, worker-source fetches and file reads. Cancel terminates the worker. 180-second timeout, missing runtime/network errors, malformed vectors/envelopes and unsupported devices produce actionable failures, never deterministic “AI” fallback results.

## Artifacts and comparison

`wallclock-desk/1` JSON preserves original input, every pending-to-reviewed identity, reviewer notes, AI evidence, choices, held states, candidate instants and applied calculation. Audit CSV retains all source/review rows. Schedule CSV retains all IDs and marks holds with empty UTC cells. Markdown includes worksheet and complete JSON audit. CSV text fields guard leading spreadsheet formula characters; use JSON when exact formula-like text matters.

ICS contains only approved resolved VEVENTs, UTC DTSTART/DTEND, elapsed duration, stable source-based UID, reviewed title/location/notes and explicit DTSTAMP. No attendees or METHOD. Text escapes backslashes/newlines/commas/semicolons and UTF-8 lines fold at ≤75 octets without splitting code points. Held events are deliberately omitted from ICS, explicitly counted and retained in every audit. Blocking issues disable ICS/Schedule CSV.

The labeled baseline naively appends `Z` to all original local timestamps. The result counts how many reviewed resolved UTC starts differ, plus gaps/folds/holds/overlaps, for the same records. It is not a serious scheduling alternative, measured time saving, accuracy or performance claim. A UTC instant may equal the naive baseline during winter GMT, so the differing count is computed, not assumed.

## Build and publication

React + Vite; `npm install`, `npm run predeploy`. Base `/daily-app2/20261123-5/`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but **publish only through the root combined-site workflow**. The collection's 1,000,000,000-byte guard is unchanged. Deployment-only dedupe additionally shares `20261029-19`'s byte-identical geometry WASM with `20261028-24`; source builds and compatibility URLs remain intact, with affected older-app local/public regression checks.

Validation outcomes and publication status are in `VALIDATION.md` and `publication-status.json`. Synthetic fixtures only; no private documents, data or credentials. Independent CSV/ICS parser test uses Python `icalendar` installed outside the repo (`/tmp/wallclock-parser`); browser tests use the existing workspace Playwright installation.

## Reproduce checks

From this app folder, `python3 serve-production.py 7376` serves source builds with real deployed path prefixes (7377 serves the assembled `deploy/` tree). Run `node core-test.mjs`, `python3 timezone-oracle-test.py`, `node browser-test.cjs`, `node defensive-test.cjs`, `node async-race-test.cjs`, `node cold-cancel-test.cjs`, `node overlap-browser-test.cjs` and `python3 artifact-test.py`. Install independent parser if needed: `python3 -m pip install --target /tmp/wallclock-parser icalendar`. Set `APP_URL` and `REPORT_FILE` for public workflow runs; see test scripts for gallery/legacy options. Root assembly must finish before serving/testing it. No inference mocks are used on successful workflow checks.
