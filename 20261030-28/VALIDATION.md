# Validation — Link & Close

## Passed computational checks

- `npm test`: **34 built-in configurations + 8 image/STL-derived configurations**. Includes every preset, all three return profiles, combined minima/maxima and each parameter endpoint. Every card and clean part passed independent binary-STL checks: exact length, finite vertices, nonzero faces, normals/winding, welded closed edges, positive volume per connected component, expected millimeter bounds and bed alignment.
- Every configuration also passed 15 assembled pair intersections, 65 sampled open-link/closure insertion poses, shoulder seating, two analytic adjacent interlink conditions, nonadjacent spacing and closure-to-rail clearance. The ideal alignment is collision-free. **Full freely draped chain motion is not simulated.**
- Carrier: one connected solid before cutting; 24 safe snips produce six distinct clean parts and one carrier. Snip cutters do not intersect functional parts. Eight upper cross-sections per exported solid remain within their bed footprint (56 section checks per configuration). Exported card bounds match the declared envelope.
- `node hole-check.mjs`: probes in the actual Boolean solid confirm that bright image holes remain unengraved while surrounding dark pixels remove material.
- `node browser-test.cjs`: real production-browser file-picker PNG, JPEG, ASCII STL and binary STL, geometry changes from pixels/threshold/depth/crop/scale/rotation/placement, unit confirmation, reset/remove/replace, source and output previews, actual downloaded STL signatures/bounds and per-part validity. Invalid/truncated/open/nonmanifold/concave/excessive/empty inputs block export and recover. Default and min/max are also generated/downloaded through UI.
- `node studio-test.cjs`: real preset thumbnails and outputs, text/icons/SVG, all views, undo/redo, portable image/STL JSON, named designs/reload, missing payload rejection, actual Everything ZIP with every STL parsed, saved dark theme, visible keyboard focus, collapsibles, reduced motion, 374 px left rail, 320 px preview-first phone and worker failure/recovery.
- `node axis-test.cjs`: synthetic Y-up and negative-Z STL uploads reorient, integrate and download identically to the Z-up original. Changing source axis clears the asset and requests reattachment.
- Touch-enabled 390/320 px: no horizontal overflow, preview-first stacking, reachable exports, phone PNG/STL downloads. Actual CDP orbit/pinch gestures changed the canvas image.
- Root gallery inline script compiles with `new Function`; one newest `stl` entry, **all 300 earlier entries exactly preserved**, STL Generators category first. Combined root predeploy: **301 built, zero failures/skips**. All 47 new-app production files hash-match the combined output. Combined gallery and app worker/WASM load with no runtime errors. Full import/download checks are rerun against the combined production route.

## Evidence

`reference-measurements.json`, `reference-analysis.json`, `evidence/reference-sections.png`; `validation-report.json`, `hole-validation.json`, `browser-validation.json`, `studio-validation.json`, `axis-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `combined-build-validation.json`, `combined-browser-validation.json`; desktop/mobile and dark/combined-site screenshots.

## Not performed / limits

No physical print, assembly, adhesive, force, fatigue, friction or durability testing. Requires six glued fixed seats. No load rating. The assembled pose is ideal and non-freestanding; not a full motion simulation. Source mesh defects are documented, not repaired or redistributed. STL import deliberately rejects unsupported concave/hollow/open/overhung geometry and never replaces it with a convex hull. Image conversion is bounded 2D height relief, not full-photo 3D reconstruction.
