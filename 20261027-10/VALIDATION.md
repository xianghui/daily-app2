# Validation — Accord Squeeze / 20261027-10

## Passed computational checks

- Individual `npm run predeploy` production build.
- 68 built-in/preset/parameter-extrema cases; 35 image/STL-derived cases. Each part and translated float32 plate checked independently: nonempty binary STL, exact byte count, finite coordinates, nondegenerate triangles, unit normals matching winding, millimeter bounds, welded edge incidence exactly two with opposite directions, and positive enclosed volume for every connected component. Four separate solids per plate.
- Sampled full opposing stroke with all-pair solid intersections, vertical assembly/release paths and separated export plates. No unwanted intersections. End stops block over-travel; separate deliberate-contact tests confirm tooth transmission and both lateral guide walls for every preset and dimensional extrema.
- 26 actual production-browser STL downloads, including PNG/JPEG, ASCII/binary STL, transformed/threshold/depth/crop variations, resets, part exports and phone imports. Download signatures equal visible final-model signatures and independently regenerated JSON geometry. Ten malformed/oversized/nonmanifold/concave fixtures rejected; empty silhouette, bad dimensions and invalid transforms block export recoverably.
- 20 feature-output cases: all presets, bounded variations, ergonomic shapes, text/icon/SVG, engraving and inverted backgrounds, image/STL JSON restoration, named-save persistence, undo/redo, per-part STL and genuine four-STL ZIP contents.
- Exact solid probes verify the SVG ring's hole remains unraised/unengraved; not only a texture test.
- All six bundled icons produce different export geometry. Delayed older image decoding cannot overwrite a newer import. Aborted production worker blocks export; reload recovers. Invalid edits cannot export last-good geometry.
- Desktop left panel 374 px/right viewer, phone preview-first and no overflow at 320/390 px, real touch orbit/pinch, reachable exports/file pickers, saved dark theme, collapse/focus/reduced motion, assembly/exploded/isolated/plate views and preview-only colour/pose neutrality.
- Gallery inline script compilation, new STL entry exactly once, newest first, all 194 prior entries unchanged, category order and browser rendering/search.
- Root predeploy stages 195 apps with zero failures/skips. Root index and every new production asset are byte-identical in the combined deployment bundle.

See machine-readable `*-validation.json` reports and screenshots for exact cases and counts. Root-stage browser checks repeated all 26 downloads and 10 invalid-file cases on the combined staging site. Live Pages returned HTTP 200, loaded the production worker/WASM, downloaded an STL matching the checked default mesh, and showed the new gallery entry first. Reports: `root-browser-validation.json` and `public-validation.json`.

## Not tested physically

No physical prints or measured force, friction, wear, fatigue or durability tests. Clearance presets require printer/material calibration. Moving parts are non-captive and must be held level; the preview is ideal kinematics, not dynamics.
