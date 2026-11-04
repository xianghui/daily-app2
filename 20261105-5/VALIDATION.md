# Validation — Routh & Seven

## Reference evidence

The actual reference STL was freshly downloaded and parsed before choosing final geometry. Local switch/fabric candidates were parsed first and rejected as inappropriate to planar kits. Selected White Cat Kit Card: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, 27 edge-adjacent components (including degenerate pseudo-components), nonmanifold. Actual measured 1.60 mm sheet, 1.70 mm receiving width, .21–.22 mm runners; sections at .10/.215/1.59 mm saved and visually inspected. Upstream CC BY 4.0 licence fetched. No source mesh redistributed. New geometry is original reconstruction, not a repair/re-export.

## Completed checks

- `npm run predeploy`: production build passes; worker, WASM, fonts and fixtures bundled locally under the correct base path.
- `npm test`: **141** cases passed. Actual serialized STL checks cover finite/nonzero triangles, normalized stored normals, nondegenerate faces, opposite-directed incidence on every welded edge, positive volume for every component, correct dimensions and bed-flat Z=0. Checks include all exported individual parts and translated clean print plate.
- Every case checks one connected card, 32 accessible tab cuts releasing exactly carrier + 8 unharmed parts, card envelope, no print-layout/assembled intersection, 49 vertical insertion samples, seven usable release ports in card and tray, tile inset gap, continuous support-free footprint, art backing and independent shoelace partition/Routh identity. Includes all presets, scalar extremes, combined minimum/maximum, 96 silhouette/size/ratio corners, transformed image/STL imports and imported extremes.
- The first extreme-case runner layout had overlapping runner bands; separated their Y stations to 28% and 72% of each bay part height. The full final suite passes after this change. An independently checked Routh denominator convention was corrected before testing unequal divisions.
- `browser-test.cjs`: real browser file-picker PNG, JPEG, ASCII STL and binary STL imports, actual saved STL downloads, current-preview fingerprints, exact Node reconstruction from browser-saved JSON, independent mesh/assembly checks, threshold/depth/crop/grayscale/pixel-content and STL scale/rotate/placement changes, explicit mm confirmation, replace/remove/reset and min/max models pass.
- Browser negative fixtures: malformed SVG/image, truncated/open/nonmanifold/concave STL, excessive bytes/triangles/pixels/dimensions, empty silhouettes, invalid transforms and out-of-zone art all block export recoverably. No unsupported mesh is silently repaired or replaced with a hull.
- `studio-test.cjs`: actual preset STL exports, three silhouettes, text/icons/SVG, portable image and mesh JSON, named-design reload, missing payload rejection, undo/redo, every ZIP part parsed, assembled/exploded/card/clean views, saved dark theme, focus, sections, reduced-motion layout, 374 px left rail and phone preview-first ordering pass. Aborted production worker fails explicitly and disables export; reload recovers.
- `extra-test.cjs`: actual final-mesh probes show bright SVG hole retains the original face while dark pixels remove material; different PNG pixel content changes downloaded mesh, all isolated views work and rapid edits export exactly the final current mesh.
- `personalization-test.cjs`: all six bundled icons downloaded, mesh checked and assembly checked.
- `orientation-test.cjs`: Y-up and inverted-Z STL reattachments reproduce the exact integrated source result.
- `interaction-test.cjs`: real text/sample-button/background/pan-Y/drag-drop mesh outputs pass actual saved-byte and assembly checks.
- `mobile-layout.cjs`: all editor tabs plus expanded numbered guide fit configured 320/390 px viewports, no horizontal overflow, actual JSON save after guide scrolling and reachable exports. Main browser suite verifies real touch orbit/pinch using CDP and changed canvas captures, plus phone PNG/STL import and downloads.
- Desktop assembled, connected card, dark studio and phone screenshots saved; assembled/card/phone/reference section images visually inspected.
- Gallery: all inline JavaScript scripts compiled using `new Function`, 453 entries, new correct STL entry exactly once and first, all 452 previous entries unchanged, STL Generators first. Browser rendering/search passes with no runtime errors.
- Root `npm run predeploy`: **453 built, 0 failed, 0 skipped**; root index exact; all 20 new production files byte-match `dist`. All listed app index pages exist in combined `deploy/`.

Reports: `geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `extra-validation.json`, `personalization-validation.json`, `orientation-validation.json`, `interaction-validation.json`, `mobile-layout-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `combined-build-validation.json` and subsequent combined/publication reports.

No physical printing, actual printer/material fit, force, durability or load testing was performed. Computational geometry/assembly validation is not a physical print test. Tiles are gravity-retained only.

The complete real import/export browser suite was rerun against the root combined deploy folder and passed (`combined-import-validation.json`). Combined gallery rendering/search also passes (`combined-gallery-validation.json`). Root `npm run deploy` completed with `Published`, after another root predeploy: 453 built, 0 failed, 0 skipped.

ROOT publication: gh-pages commit `515e0faf36b36e9902dd519bc9aeed045b431940`; GitHub Pages [workflow 41904245097](https://github.com/xianghui/daily-app2/actions/runs/41904245097) completed successfully. An initial HTTP 404 occurred while deployment was still running; retry after workflow success passed. `public-test.cjs` confirmed HTTP 200, actual default/PNG/JPEG/ASCII/binary STL downloads with exact current-preview signatures, closed meshes, all 453 public gallery entries and no runtime errors (`publication-validation.json`).
