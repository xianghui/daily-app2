# Folder Ferry validation — 2026-11-07

## Real production-bundle workflow

Chrome headless, actual built React/Vite app under `/daily-app2/20261107-8/`, real public MiniLM q8 weights, Transformers.js 4.3.2, ONNX Runtime Web WASM CPU. Successful model runs are not mocked. Defensive tests inject faults separately.

- Studio office: 3/3 intended routes (Finance, Finance, Help); Field station: 3/3 (Safety, Safety, Kitchen). Identical basenames retained as `scan.pdf` / `scan (2).pdf` and `report.pdf` / `report (2).pdf`. Known-answer scope is only these six synthetic records.
- Additional zero-overlap paraphrases at threshold .20: password-recovery paraphrase routed to Help (cosine ~.469), while abstract “settle the outstanding balance for our advisory engagement” scored ~.085 and remained in its original path, rather than correctly routing to Finance. **1/2** correctly routed in this harder fixture. The baseline assigned neither. This actual miss is retained in `quality-validation.json` and demonstrates the need for reviewer overrides. No universal accuracy claim. Threshold 1 kept both originals, as required.
- Computed comparison: Studio office lexical baseline assigned 1/3 versus AI 3/3 above threshold; two differing suggestions. Field station metrics remain in the complete report. These are candidate counts, not a population accuracy estimate.
- Full batch: 60 files, 10 folder purposes, 18 embedding chunks; all 60 records and unique final paths preserved, 59 collisions resolved. Exact same-purpose ties select first folder deterministically.
- Apply disabled until every file reviewed. Route override/rejection, original preservation, notes with quotes/newlines, undo, applied snapshot invalidation, download and clipboard all exercised. JSON/CSV downloaded by the browser and independently parsed with Python csv/json; reviewed note and every original/output record reconciled, including formula-leading multiline strings. Case-insensitive final destinations unique.
- Seven invalid-input browser cases plus threshold bounds, PDF import and oversized file rejection. Core tests add duplicate sources, traversal, absolute/Windows unsafe paths, reserved device names, missing rows, malformed vectors, missing review rows and invalid destinations.
- Real-model cancel/retry, source edits during load, cold model-download cancellation/retry, model-host network failure/retry, WASM asset failure/retry. Fault injection verifies unsupported Workers/WASM, malformed tensor schema, 180-second timeout, worker construction/error, cancelled late response, stale File.text completion. None fabricate routes.
- No model-host requests before explicit load. Captured traffic: public asset GET/HEAD downloads only, model hosts huggingface.co and us.aws.cdn.hf.co; no document bodies/URLs. No remote inference integration or key fields. Production text assets scanned for credential patterns; none found. Scan is supplemental to source/network inspection.
- After online inference, block all network and launch a fresh worker in the already-open page: another real inference and export succeed. Online reload uses cached model without extra model-host requests. Offline reload/navigation is not claimed or tested.
- Desktop 1440px and narrow 390/320px layouts: no horizontal overflow, screenshots retained, phone review/apply/export and keyboard focus tested. Screenshots visually inspected. No page errors. Physical mobile devices and Firefox/Safari remain untested.

## Commands / evidence

`npm run predeploy`, `node core-test.mjs`, `node browser-test.cjs`, `node quality-test.cjs`, `python3 export-roundtrip.py`, `python3 audit-assets.py`, `node validate-gallery.cjs`, `node gallery-test.cjs`.

Reports: `browser-validation.json`, `quality-validation.json`, `export-roundtrip-validation.json`, `asset-audit.json`, `gallery-validation.json`, `local-gallery-validation.json`; screenshots `desktop.png`, `phone-390.png`, `phone-320.png`. `smoke.cjs` is an initial real-model smoke test, not a replacement for the full suite.

## Publication

Publish through root predeploy/deploy only. Public verification is recorded separately in `deployment-validation.json`, `public-browser-validation.json` and `public-gallery-validation.json` when completed. Do not treat these local results as proof of public hosting before those reports exist.

## Completed public verification

GitHub Pages revision `b2ef34e16bef61826d73c0096dbac62455b78df8` reached built and its workflow deployment succeeded. Every public app asset and the shared WASM fetched and hashed identically to the local production build. The actual public app ran real MiniLM inference on both materially different fixtures (6/6 intended routes), resolved basename collisions, completed fresh-worker inference with all networking disabled, downloaded edited reviewed JSON/CSV, passed independent public CSV/JSON field checks and rendered without overflow at 390/320px. Asset-only model downloads and no content uploads observed. Public gallery rendered 502 cards, preserved older categories, and found Folder Ferry exactly once; search passed. See `deployment-validation.json`, `public-browser-validation.json`, `public-export-roundtrip-validation.json` and `public-gallery-validation.json`.
