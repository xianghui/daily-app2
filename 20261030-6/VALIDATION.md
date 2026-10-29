# Slit & Flicker validation

## Computational geometry

- `npm test`: 8 built-in cases (three presets, minimum, maximum, all foot silhouettes) and 8 imported cases (ASCII/binary meshes with transforms, threshold/grayscale, raised/engraved).
- `node extreme-check.mjs`: 15 additional image/STL minimum, maximum and mixed cases, including thinnest/tallest and lowest/widest wheel assembly.
- All 31 cases validate connected card plus five clean parts independently after float32 binary STL serialization: finite vertices, correct byte counts/normals, nondegenerate faces, 1e-5 mm welded edges with exactly two opposite incidents, closed connected components, consistent orientation, positive volume and expected mm dimensions.
- CSG checks: 25 full-turn positions per model, tower insertion into foot, rear axle insertion, front wheel and keeper loading, rear shoulder bearing, both axial wheel stops, real slit holes and backed dot engravings, disjoint flat parts, twenty snips avoiding functional parts and exactly six post-snip components (five clean parts plus carrier).
- `hole-check.mjs`: actual Boolean probes establish unraised and unengraved image holes; backing retained. Analytical radial/axial clearances complement sampling.
- First implementation errors found and corrected: tower thickness centre was offset relative to foot slot; axle runner landings were too near the narrow blade. Reran checks after centering the tower and placing axle runners on outer shoulder wings. No failed geometry was published.

## Real production browser workflows

`browser-test.cjs` and `studio-test.cjs` exercise actual file-picker uploads, PNG/JPEG, ASCII/binary STL, source transforms, confirmation of unit assumptions, replace/remove/reset, threshold/depth/crop/grayscale, malformed/truncated/open/nonmanifold/concave/excessive inputs, empty images and invalid numeric values. Invalid edits disable export. Actual downloaded STLs are independently parsed, compared with the exact preview fingerprint and regenerated from the current portable JSON; all parts/mechanical checks rerun for import-derived models.

Studio checks cover all presets and actual model thumbnails, all foot silhouettes, text/icons/SVG, saved payload JSON round trips, six-entry local design persistence and missing-image-payload reattachment errors, undo/redo, all part downloads and unzipped actual ZIP meshes, all views, persistent dark theme, keyboard focus, collapsible sections, reduced motion and worker-failure recovery. `motion-check.cjs` proves that explanatory wheel rotation changes the actual 3D view while printable geometry remains unchanged, and exploded/assembled arrangements differ.

Desktop left rail measured 374 px. Touch contexts at 320/390 px checked preview-first stacking, no horizontal overflow and reachable exports. CDP touch orbit and pinch changed actual rendered canvas; actual phone image/STL imports and downloads passed. Screenshots were visually inspected. No remote requests from the app, and no JS runtime errors in tested flows.

## Combined publication checks

Root inline gallery script compiled with `new Function`; missing/empty script fails nonzero. New entry exactly once, newest first, correct `stl` area and folder. All 278 previous entries preserved. Root predeploy built/copied 279 apps, zero failures and zero skips. Every route has an index; root gallery bytes and all 47 new-app output assets match source build. Combined local root/app browser testing includes real production worker and WASM paths. Machine-readable reports are saved next to this file.

## Explicitly unperformed

No physical print, optical/stroboscopic effect, adhesive strength, bearing friction, wear, material fatigue, stability or child-safety test. Sampling and mesh validity are not proof of physical performance. Mirror, marker contrast and assembly calibration are empirical. Requires adhesive at tower/foot, axle shoulder and keeper; wheel must remain unbonded. Do not imply friction retention or high-speed suitability.
