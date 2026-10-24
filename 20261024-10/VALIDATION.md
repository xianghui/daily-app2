# Validation record

## Executed before publication

- Individual `npm run predeploy`: passed.
- `npm test`: 78 parameter cases and 24 image/STL-derived cases passed independent exported-binary-STL checks (finite nondegenerate faces, normalized normals, welded-edge incidence two, opposing edge directions, positive component volume, connected components, bed orientation and mm bounds, including independent analytic X/Y/Z bounds derived from parameters and imported relief/mesh height).
- Mechanism checks: rib gaps ≥0.4 mm, tongue thickness 0.8–1.6 mm, free tongue length 17 mm, imports separated from ribs by ≥4.3 mm; separate printable parts, five collision-free **hover** poses, intentional rigid contact at a crest, and CSG isolation of import changes from the contact track.
- Browser file-picker tests: PNG, JPEG, ASCII STL and binary STL; actual downloads inspected. Pixel content, threshold, depth, crop, source shape, fitted scale, rotation and placement affect exported geometry; downloads equal final-preview mesh fingerprints.
- Recoverable rejections: malformed image, wrong extension, truncated STL, open/nonmanifold/concave meshes, excessive bytes/pixels/triangles/dimensions, empty silhouette, nonfinite/out-of-range parameters, invalid transforms and safe-zone violations. Invalid export disabled.
- Presets and four browser variations: exported mesh and mechanism checks passed. Portable save/open round trips for all four bundled fixtures, undo/redo, drag/drop, remove/replace/reset, individual part exports and ZIP checks passed. Preview colours do not change geometry.
- Touch orbit and pinch, image/STL phone imports and downloads, 320/390 px widths, no horizontal overflow, all tabs and collapsible controls, export within viewport: passed. Desktop and phone screenshots inspected.
- Gallery: every inline script compiled with `new Function`; exact-one newest STL entry, existing entries preserved, STL category first, search/render with no runtime errors.
- Root `npm run predeploy`: 114 built/copied, zero failed/skipped. All 114 deployed app indexes exist; root gallery and this app's deployed assets equal their source build.

Machine-readable reports: `geometry-validation.json`, `browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `root-deploy-validation.json`. The complete browser import/export/rejection/touch suite also passed against the built root deploy assets; see `production-browser-validation.json`. Root `npm run deploy` published successfully. The public GitHub Pages app loaded, imported the bundled PNG locally, exported a verified two-component manifold STL, and showed the new app first in the public gallery with no runtime or failed-request errors; see `public-validation.json`.

## Test-harness correction

The first mesh run used an overly strict expected print-layout gap (10 mm). The minimum-width board has a correctly separated **9.5 mm** layout gap; the assertion was corrected and all cases rerun successfully. A development browser run was interrupted by Vite reloading after the page title changed; rerunning the completed editor tests passed. These were not bypassed app failures.

## Not performed

No physical print, friction, sound, force, elastic-response or fatigue tests. The working pose intentionally hovers 0.4 mm and is not deformation simulation. Actual scraping intentionally makes contact and depends on material, surface finish and pressure. Geometry checks do not establish tactile feel or durability. There is no precision mating fit or captive retention in this design.
