# Validation — Lattice Breath / 20261023-16

Executed locally on 2026-10-23.

- App `npm run predeploy`: passed.
- 78 parameter cases, 24 image/STL integration cases, 128 seeded variation exports: passed.
- Every exported component checked for finite vertices, nondegenerate triangles, normalized outward normals, consistent winding, positive volume, exact mm bounds and two incident faces per welded edge.
- Mechanism checks: 40 connected node sites, 64 struts, collar dimensions, static bore/cell air and isolated import zone; CSG material and air probes.
- Minimum conservative cell air: 3.293 mm; minimum open bore: 20.400 mm; minimum import isolation: 11.700 mm.
- Browser: 23 actual STL downloads, PNG/JPEG + ASCII/binary inputs, changed pixels/threshold/depth/crop, mesh scale/rotation/placement, replacement/removal/reset and rejected malformed/oversized/open/nonmanifold/unsupported inputs. Exact preview/export signature and UI millimeter bounds matched.
- All three presets, four browser variations, image/STL portable JSON round trips, undo/redo, drag/drop and colour neutrality: passed.
- 320/390 px phone layouts, touch orbit/pinch, both image/STL imports, downloads, collapsed/expanded controls and all tabs: passed without horizontal clipping.
- Gallery: 1 inline script(s) compiled with `new Function`; 95 prior entries preserved; 96 entries now. New STL entry appears exactly once, newest first. Browser render/filter: passed without runtime errors.
- Root `npm run predeploy`: 96 apps, zero failures or skips; root index and new app present in deploy/.

## Numerical issue resolved

Cylinder/sphere intersections at a few parameter combinations produced near-coincident final vertices that failed welded-edge checks. Replaced those struts with convex-hull capsules using shared node profiles. Re-ran the parameter matrix, seeded variations and browser suites successfully. No validation was disabled.

## Limits

Geometry checks are not physical validation. No print, spring force, dynamic deformation, FEA, fatigue or durability test was performed. Sleeve uses TPU and requires removable support under its upper collar; physical squeeze calibration begins at only 0.5 mm. No universal travel or fit is claimed.

Machine-readable geometry, variation, browser, mobile and gallery reports accompany this file. Production/public reports record their separate executions.

## Publication

Root `npm run deploy` completed successfully (96 apps). Production-bundle browser suite passed. After GitHub Pages propagation, the public app loaded without failed assets or runtime errors, imported the synthetic PNG and exported a manifold STL; public gallery newest-entry verification passed. See `production-browser-validation.json` and `public-validation.json`.
