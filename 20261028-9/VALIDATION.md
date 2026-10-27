# Roll & Carry — validation record

2026-10-28. Computational and browser validation only; **no physical print, friction-force, load, fatigue or real assembly test performed**.

## Completed pre-publication checks

- `npm run predeploy`: production Vite build passed with local worker/WASM/fonts. Standard vendor chunk-size and Node externalization notices are informational; production execution was exercised.
- `npm test`: **14** default/preset/min/max/mixed-extreme cases and **30** threshold/relief/engraved/ASCII-STL/binary-STL cases passed. Each connected card and all eight separate parts passed independent float32 binary-STL byte count, finite/nondegenerate triangle, normalized outward-normal, 1e-5 mm welded opposite-edge incidence, connected positive volume and mm dimension checks.
- Independent Manifold intersections found no unintended assembled overlap or full-turn wheel/axle interference. Sampled rail, axle, wheel and keeper insertion paths are possible in the documented sequence. Installed keepers block outward wheel escape; rails block inward escape. Keeper heads stop on the axle. De-tabbed flat parts do not overlap; each is contained in the card. Cutting the 32 marked accessible tab locations yields nine components: eight parts and carrier.
- An initial maximum-tab-width failure left two keepers attached to the carrier after cuts. Inner carrier runners were moved beyond cutter lines; the entire parameter/import suite was rerun and passed. No failed geometry was published.
- `browser-test.cjs`: actual production PNG/JPEG/ASCII-STL/binary-STL file-picker uploads and real downloaded binary STLs passed; pixel/threshold/depth/crop/size/rotation/placement changes affect export. Download fingerprints match the exact preview, and saved JSON regenerated independently reproduces the same result. Actual downloaded parts were each parsed. Replacement/removal/reset, invalid/truncated/open/nonmanifold/concave/oversized/empty images, excessive triangles/dimensions and invalid transforms are recoverably blocked. 320/390 px mobile layout, real touch orbit/pinch and both phone import/export paths passed. No app runtime errors or remote service requests.
- `feature-test.cjs`: presets, three silhouettes, bounded variations, text, SVG/icon relief, raised/engraved and background handling, undo/redo, portable PNG/JPEG/ASCII/binary round trips, persisted named saves, actual nine-STL ZIP with assembly notes, per-part downloads, views, saved theme, drag/drop, Y-up STL import, collapsible controls, keyboard focus and stale/invalid export gating passed.
- `resilience-test.cjs`: production worker script intentionally aborted; export blocked; reload restored function. All six bundled SVG icons changed printable geometry.
- `hole-test.cjs`: small-volume probes of actual final solids confirm the ring center remains unraised/unengraved and the dark ring is actually raised/subtracted, on a closed continuous backing.
- `portable-errors-test.cjs`: missing image payload, wrong app, invalid dimensions and invalid transform reject or block, with recovery.
- `stale-import-test.cjs`: slow normalization cannot overwrite a newer import.
- `studio-layout-test.cjs`: 374 px desktop left editor/right viewer, isolated views, reduced-motion styling, 320 px preview-first layout and no overflow passed. Screenshots include desktop, phone, assembled, exploded, isolated parts, ghost and dark theme. Screenshots were visually inspected for studio layout and actual rolling-cart structure.
- `reference-analysis.py`: actual public CC BY 4.0 reference downloaded and parsed, hash/dimensions/components/source defects and representative cross-sections recorded. Cross-section image inspected. Local reference trees and the legacy gallery were not edited; no third-party raw STL was bundled.
- `gallery-validate.cjs`: all nonempty inline scripts compile with `new Function`; new entry exists exactly once, is first, has `area: "stl"` and correct folder/name. All **220** previous entries preserved.
- `gallery-test.cjs`: all **221** gallery cards render, STL Generators is first, search/reset work without runtime errors.
- Root `npm run predeploy`: **221 built, 0 failed, 0 skipped**. `root-stage-check.cjs` confirms all app indices exist, root index matches, and all **43** new-app production files are hash-identical. Actual image/STL imports and downloads from combined staging passed with current-result fingerprints and manifold checks.

## Reproduction and artifacts

Run commands in README. Reports are `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `resilience-validation.json`, `hole-validation.json`, `portable-errors-validation.json`, `stale-import-validation.json`, `studio-layout-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, and `root-stage-validation.json`. Publication smoke results, when complete, are in `public-validation.json`.

Fits are **proposed, printer/material-dependent** allowances, not source-measured cart interfaces or physically validated press fits. Wheels have intentional small radial/axial play. Keys are removable and may lift out if inverted; keep upright. Not a load carrier or child toy.

## Publication

Root `npm run deploy` completed (`gh-pages -d deploy`, “Published”). GitHub Pages subsequently reported `built` with no build error. `public-smoke.cjs` passed against https://xianghui.github.io/daily-app2/20261028-9/: HTTP 200, actual production worker/WASM, real PNG import, downloaded closed-manifold STL with exact preview fingerprint, and live gallery all 221 entries/newest card. The initial public 404 was Pages propagation while its build status was `building`, not an app runtime defect; smoke testing passed after `built`.

Additional final check: assembled-preview wheel-turn control visibly rotates a wheel while leaving the print-geometry fingerprint unchanged. Saved in `studio-layout-validation.json`.
