# Scarf & Slide — validation record

## Reference evidence

Actual reference binary STL and two local candidates parsed in this run. Public source README/license verified. Direct Printables retry returned HTTP 403; accessible prior local public download was re-read and SHA-256 checked. See `reference-analysis.json`, `reference-analysis-raw.json` and `evidence/reference-sections.svg` for measurements and source anomalies. Raw source mesh is NOT redistributed. No reference project, old gallery tree or source Git history/dependencies modified/copied wholesale.

## Completed computational checks

- `npm run predeploy`: Vite production build passes; local WASM/fonts/modules emitted under `/daily-app2/20261106-6/`.
- `npm test`: **37 cases**, defaults/three presets/three shapes, each control extremum, all-min/all-max and default/min/max image/STL variants. Every card and individual/clean-plate binary STL checked independently for finite coordinates, nondegenerate faces, normalized consistent normals, 1e-5 mm welded two-face opposite edges, positive volume per component and expected mm dimensions.
- Geometry/mechanism: one connected card; three clean closed parts; no part overlaps; card envelope respected; sampled upper footprint is bed-supported. All twelve tab cuts yield precisely the carrier plus three undamaged pieces. Sleeve aperture stays clear in the connected card and clean part. **81 tail-to-tail sleeve travel positions** and **seven vertical insertion positions** are collision-free. Scarf gaps probed at five X locations. Deliberate displaced upper/lower beams hit sleeve roof/floor, verifying transverse capture while centered. There is **no axial lock**, deliberately disclosed.
- Production browser: **26 actual STL downloads**, including PNG/JPEG and ASCII/binary STL file-picker imports, threshold/depth/crop/grayscale/scale/rotation/placement changes, defaults/extrema and phone imports. Download bytes match the exact UI geometry signature and Node generation from the downloaded JSON. Every reconstructed import variant is run through the same mesh/mechanism checks. **Ten malformed/unsupported input cases**, empty image, invalid dimensions and bad transforms block export and recover through replacement/reset.
- Feature browser: **16 model cases** including presets, outlines, text, SVG/icon/background conversion, four portable asset round trips, up-axis and latest-edit state. Undo/redo, named designs persisted across reload, real per-part downloads, actual ZIP unzipping/STL validation, print/assembled/exploded/isolated views, saved dark theme, preview-colour neutrality, drag/drop, collapsible sections and keyboard focus pass. ZIP is labelled ZIP, not 3MF.
- A startup undo snapshot race was found and fixed by immediate initial-history capture. A JPEG re-decode drift was found and fixed by restoring the authoritative bounded saved height grid alongside the image payload. Both regression paths pass.
- Dedicated tests confirm the SVG ring center stays unengraved while the ring band changes the final solid; all six searchable bundled SVG icons alter geometry; worker script abort blocks export and reload recovers; stale asynchronous imports cannot overwrite newer ones; late ResizeObserver callbacks after preview disposal are harmless; missing image payload/wrong app/invalid parameters/transforms reject saved files recoverably.
- Touch-enabled **320 / 390 px** contexts: preview first, all editor tabs and expanded instructions without document/viewport overflow, reachable STL/JSON actions, real touch orbit and pinch screenshots differ, reduced motion respected. Desktop left panel 372 px and right viewer verified. Desktop/phone/assembled/ghost/exploded screenshots inspected/saved.
- Root gallery: inline script compiled using `new Function`; new entry exactly once, STL first, correct link; **476 prior entries unchanged / 477 total**. Root predeploy builds/copies **477 apps, zero failed/skipped**, root index exact, all gallery folders present and new dist bytes match combined deploy. Combined-gallery browser loads new production worker without runtime errors. Combined-production import/download report is saved separately.

## Reproduce

```sh
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node mobile-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node resize-cleanup-test.cjs
```

Browser scripts use installed Chrome (`channel: 'chrome'`), not an assumed Playwright-downloaded version. For combined deployment, run root predeploy, `node serve-combined.cjs`, `node gallery-browser.cjs` and `TEST_BASE=http://127.0.0.1:6006 TEST_REPORT=combined-browser-validation.json node browser-test.cjs`.

## Unperformed physical checks

**No physical print, real sleeve/scarf fit, friction, force, strength, fatigue, durability or user testing performed.** Computational closed solids and assembly paths do not establish these. Calibrate clean sleeve/tips with your own printer/material. This is a loose end-to-end splice demonstration, not a secure or structural joint.

## Publication verified

Root `npm run deploy` succeeded. GitHub Pages build/deploy [42110655517](https://github.com/xianghui/daily-app2/actions/runs/42110655517) completed successfully for gh-pages SHA `b4ff6968f44af2160044c125954749d77d089323`. Initial public 404s occurred while Pages was building, then cleared. Public app returns HTTP 200 with the exact latest bundle; default, PNG, JPEG, ASCII STL and binary STL workflows downloaded real checked geometry. Public gallery retains all 477 entries and its newest link loads valid worker geometry with no runtime errors. See public-validation.json, public-gallery-validation.json and pages-deployment-validation.json.

Source commit `fe4f6ecc` pushed to main. Pre-existing unrelated untracked `20261105-7/` was preserved and excluded from this run’s commit.
