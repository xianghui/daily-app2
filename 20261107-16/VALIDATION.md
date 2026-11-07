# Pack Relay — observed validation, 2026-11-07

## Production-bundle browser validation

Actual installed desktop Chrome via Playwright, not the Vite dev server. See `browser-validation.json` and `browser-test.log`.

- Real MiniLM WASM inference on two materially different synthetic manifests: food/consumer dispatch and laboratory supplies. Expected profile labels were written into the test before running: all 12 of 12 matched. This is a tiny, deliberately clear fixture, not general accuracy or safety evidence.
- Food manifest: 6 orders / 18 units, capacity 6. Source-order baseline 5 waves; best-fit consolidation 3 waves. Same reviewed classifications in both plans. No units lost, duplicate orders or mixed procedures per wave. This is not a measured labor reduction.
- Full batch: 24 orders plus 3 profiles, seven actual embedding chunks, 48 units preserved. Every wave within capacity; 9 waves observed. No claim of global packing optimality.
- Reject all to HOLD: all 6 source rows exported, zero packed waves. Restoring with Undo recovered real model suggestions. Edited notes and a manually held order survived apply, JSON download, CSV download and clipboard copy. Every edit removed stale export buttons until reapplied.
- CSV downloaded in a real browser and parsed independently against JSON. Quoted commas, quote characters, multiline instructions/notes and formula-leading IDs/notes survived with documented CSV-only spreadsheet neutralization; numeric units unchanged. `core-check.mjs` also checks normalization/schema errors, capacity, units, reviewed flags, bad profile IDs and exact baseline/consolidation counts.
- Cancellation during model downloads and subsequent processing, retry, input-change invalidation, delayed file import, late cancelled responses and worker-source-fetch guards. Defensive injection is isolated from real successful inference checks.
- Empty/malformed CSV, too many records, oversized fields/files, duplicate IDs, missing fields, noninteger/zero/overcapacity units, reserved HOLD profile, bad capacity and unsupported file extensions rejected. Originals remain untouched.
- Model-host failure, runtime download failure and recovery tested. Worker absence, WASM absence, worker construction/error, malformed vectors and 180-second timeout branches tested (defensive injection for environment/schema/timeouts). No fake successful result appeared.
- No model-host requests before explicit Load AI. Recorded external requests during the default workflow were only model/config/tokenizer GET downloads with no request bodies; user content remained local. Production asset credential-pattern scan was empty; manual review found no provider integration, API keys, telemetry or upload path. Pattern scans are not a general proof against all secrets.
- Successful online inference followed by blocked-all-network fresh-worker real inference in the already-open page passed and preserved the expected labels. Cached online reload added no remote model downloads. Offline navigation/reload is expressly not promised or tested.
- Desktop 1440, emulated 390 and 320 CSS-pixel layouts: no horizontal overflow; screenshots retained. Phone-sized edit/apply/download and keyboard focus checks passed. Native controls have explicit labels, minimum touch sizes and focus outlines. Physical phones, assistive technology, Firefox and Safari not tested.

## Scope limitations

Only three profiles and clear single-requirement English instructions were quality-tested. Mixed needs, unfamiliar terminology and negation can fail: users must inspect sources and may hold any row. No safety/compliance, shipment dispatch or geographic routing validation is implied. Model host default revision can change in future; observed network resolver revision was `751bff37182d3f1213fa05d7196b954e230abad9`.

## Publishing

Root gallery script compilation/preservation, combined deploy structure and public Pages commit/asset checks are recorded in the gallery, deployment and public-evidence reports after publishing. Public inference must pass before this is counted completed.

## Public verification completed

Combined root deploy succeeded: 509 apps built/copied, 0 failed, 0 skipped. All inline gallery scripts compiled; the new entry appears once, and all 508 previous entries remain intact. Public gallery render, category order, total count and search passed. GitHub Pages reports `built` for `cb5b24041145cc6111c4d29816af7d6d6db92ced`, exactly matching the remote gh-pages branch. Every new public asset and the shared WASM byte-match local SHA-256 hashes.

The full browser suite then passed again at https://xianghui.github.io/daily-app2/20261107-16/: real inference on both fixtures (12/12 expected labels), all 24-order batch records preserved, actual offline fresh-worker inference, review/hold/undo/edit/copy/download, CSV/JSON round-trips, narrow layouts and defensive failure/retry checks. `public-evidence/browser-validation.json`, `public-evidence/export-roundtrip-validation.json`, `public-gallery-validation.json` and `deployment-validation.json` retain results. Source-only lint also passed. No untested physical-device or safety claim is implied.
