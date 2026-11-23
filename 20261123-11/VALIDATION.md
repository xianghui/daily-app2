# Observed validation — Serial Compass

## Real default AI and workflow

- Production Vite bundle in real desktop Chrome, GPU disabled. Actual MiniLM q8 WASM CPU inference, not a mock. Both materially different known-answer fixtures matched **6/6 stream identities each (12/12 total)**. First fixture: forward wraps, stale arrival, half-range undefined. Second: ambiguous first value, replay duplicates and forward progression. See `browser-validation.json` and exports. Small synthetic fixtures are not general accuracy.
- Deterministic replay fixture statuses: `newer,newer,newer,newer,stale,ambiguous` and `ambiguous,newer,stale,duplicate,duplicate,newer`. Modular forward counts **4 vs 2 numeric baseline**, then **2 vs 0**. Numeric and modular references evolve independently on exactly the same reviewed inputs; neither count is an accuracy or packet-loss claim.
- **2,000 independent BigInt modulo comparison cases**, boundary probes for all four widths, holds gating entire streams, invalid-width preservation, original conservation and schema guards pass (`core-test.mjs`, `core-validation.json`). Python independently replays exports using signed circular distance.
- Maximum **8 profiles / 24 records / 32 embeddings** in eight chunks passes; all 24 records exported and full audit reimport restores originals. Review stream/value edits, approval reset, multiline formula-like reviewer notes, original values, undo, holds, copy and JSON/CSV/Markdown/forward-only CSV downloads pass.
- Independent Python CSV/JSON parsers reopen seven actual downloaded audit variants and their companion artifacts, checking all records, escaping, reviewed values, source retention, exact replay witnesses, stream final references and forward-only output (`artifact-test.py`, `artifact-validation.json`).

## Defensive, privacy and offline

- Empty/invalid/null/unknown-schema/oversized JSON, unsupported extension and >16 MB file rejection tested in browser. Core rejects malformed bounds, duplicate IDs, invalid bit widths and numeric types.
- Fault-injected malformed vectors/envelope, worker construction/error, unavailable WASM, model/network and worker-download failure, 180-second timeout, late canceled/input-changed messages: no fake results or enabled exports. Network failure followed by actual real-model retry passes (`defensive-validation.json`). Fault injection only tests defensive paths; successful inference tests use the real model.
- Cold download progress and cancellation while the weight request is delayed, followed by real retry pass (`cold-cancel-validation.json`). Asynchronous file-read/source-fetch races and a late old malformed worker message during newer real inference are ignored (`async-race-validation.json`, `superseded-run-validation.json`).
- Real fresh-worker inference with all browser-context networking disabled passes **in the already-open warmed production page**. Worker source, factory, WASM and model dependencies are available from caches. Cold offline startup/reload is **not claimed or tested**.
- Network capture begins at startup: no model-host requests before load; inference-path requests are GET-only public-file downloads, no user text in URLs or bodies. Reports store host/path/query-key names without signed token values. Built credential-pattern scan and integration review pass (`bundle-privacy-audit.json`); scans alone are not an exhaustive secret proof.
- An instruction-like negated note remains pending human review and may semantically misroute; it cannot change authority or request a key. Its actual proposed label is recorded in `browser-validation.json`, and a reviewer hold gates its stream. This is not an identity, authentication or reset detector.

## UI, gallery and assembly

- 1440/390/320px browser viewports: no horizontal overflow, labeled controls, visible focus and ≥44px touch controls. Screenshots of hero/review/results inspected; a separate fresh 390px navigation screenshot avoids Chrome resize screenshot artifacts (`fresh-phone.png`). Physical phones and non-Chrome browsers untested.
- Every nonempty inline gallery script compiled with Node `new Function`; a missing script fails. New entry appears exactly once, newest, `area:"ai-utility"`; all **815 earlier entries** preserved. Real gallery renders all **816 cards**, AI Utilities first, old STL/Games categories retained, search/link works.
- `npm run predeploy` passes for app. Root `npm run predeploy` assembles **816 apps**, failed/skipped **0**, all shells present. Combined **999,857,643 bytes**, below unchanged **1,000,000,000-byte** guard. New app build byte-matches assembled copy. No new deduplication rule or legacy runtime changes.
- Shared worker/factory/WASM byte hashes are verified in `runtime-dependency-audit.json`; immutable originating apps preserved. Existing unrelated recovery work remains untouched and is excluded from this app's source commit.

## Publication

Root combined deployment succeeded. Matching Pages commit `4ebc6a55744f5e28aaef3d3f511ba588c46cd011` built successfully; workflow `45098679291` completed successfully. **Nine public gallery/app/worker/factory/WASM assets byte-match** assembled output. Both real-model fixtures and the full reviewed/export/maximum-batch/offline/privacy/responsive suite passed at the public URL. Independent Python parsing of actual public downloads and the complete 816-card gallery passed. See `publication-status.json`, `pages-build.json`, `pages-workflow.json`, `public-asset-audit.json`, `public-browser-validation.json`, `public-artifact-validation.json` and `public-gallery-validation.json`.

## Limits not tested or assured

No physical device/packet ingestion, real reset detection, actual radio/network loss, integrity/authenticity, other browser engines, physical phones, cold offline navigation, or general semantic accuracy. Modular ordering needs a trusted initial reference, known width, stable epoch and less-than-half-range true progress. No external actions or digest.
