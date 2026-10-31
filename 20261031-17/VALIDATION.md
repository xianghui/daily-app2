# Validation — 2026-10-31

## Executed locally against this app, not inherited reports

- `reference-inspect.py /tmp/rise-meniscus-reference.stl`: freshly downloaded public source parsed, SHA-256/dimensions/component topology recorded, actual cross-sections rendered; two local candidate STLs parsed/rejected. Reference defect disclosure and parameter mapping recorded separately.
- `npm run predeploy`: passed, static `/daily-app2/20261031-17/` build with local worker/WASM/fonts.
- `npm test`: passed **34 built-in cases + 18 import-derived cases + 27 bounds rejections**. Includes all presets, three silhouettes, individual extremes/all-min/all-max, final per-component STL topology/normal/volume/bounds, exact card envelope, real tab/frame connectivity, 12 accessible snips → three parts + frame, bed support, all assembled pair collisions, guide insertion/removal, external glass insertion at both slot limits/center, prong and ledge continuity, three drain holes. Reports: validation-report.json.
- `node browser-test.cjs`: production file picker PNG/JPEG/ASCII/binary imports and actual downloaded output; source pixel, threshold, depth, crop, scale, rotation and placement changes; byte comparisons to default; exact preview fingerprint and JSON-regeneration equality; replace/remove/reset; invalid/truncated/open/nonmanifold/concave/oversized/empty and bad transforms rejected; individual STLs parsed; 320/390 px no-overflow, real touch orbit/pinch and phone imports/downloads.
- `node studio-test.cjs`: every preset, silhouettes, text/icon/SVG changes, actual ZIP all-STL parsing, imported-image and mesh JSON restoration, local named-save/reload, missing payload blocked, undo/redo, views, theme persistence, focus and collapsible sections, reduced motion, desktop 374 px left rail, phone preview-first, worker-abort/export-block/reload recovery.
- `node axis-test.cjs`: Y-up and negative-Z mesh fixtures orient to the same final exact STL; axis changes clear source.
- `node personalization-test.cjs`: text, all six icons and SVG receive full final-mesh/kit-assembly validation.
- `node hole-check.mjs`: actual Boolean probes verify bright central hole remains unengraved, dark annulus is cut and backing is continuous.
- `node stale-test.cjs`: immediate export blocking during rapid parameter/image edits; latest-generation-only result, bad-transform recovery.
- `node final-production-test.cjs`: actual direct per-part downloads match current exact geometry; 320 px touch orbit/pinch, no overflow or runtime errors.

Browser/import/studio/direct-export tests were also run against **the actual combined root deploy tree** on port 5619, not just app dist. `combined-check.cjs` byte-compares all 43 new app production assets and verifies all 321 gallery routes have index files. Root `npm run predeploy`: **321 built, 0 failed, 0 skipped**. `gallery-check.cjs`: every inline script compiled with new Function; one correctly routed newest STL entry; all 320 earlier entries unchanged. `gallery-browser-test.cjs`: root gallery renders all 321 cards and the new app worker/WASM load without runtime errors.

Screenshots and machine-readable reports are saved alongside source. No raw third-party reference STL, private uploads, or personal images were included. Browser fixtures are synthetic CC0.

## Scope of evidence

These are computational geometry and browser tests only. **No physical print, glass fit, adhesive strength, assembly, water wetting or capillary-rise experiment was performed.** Nominal glass-gap play is explicitly disclosed; ideal water-rise estimate is educational context, not measurement or simulation. Calibrate print joints and glass slots first. Requires external glass, tray, water and water-resistant adhesive. See PRINTING.txt for assembly sequence and material notes.

## Publication

Root `npm run deploy` completed with `Published`; Pages workflow 41175354377 completed successfully for gh-pages commit `6dd6501aa051d2fcc2a64714c6643c4930bb8162`. Two checks before Pages finished saw temporary 404s; after workflow completion `node public-test.cjs` passed on the normal public URL: HTTP 200, bundled worker/WASM loaded, actual default STL downloaded and byte-matched to the local checked model, fixture attribution and exactly one gallery entry verified. See pages-deployment.json and public-validation.json.
