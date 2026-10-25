# Snail’s Pace — validation record

Run: 2026-10-25. No physical print was performed.

- Production Vite build passed. Browser tests served real `dist/` at `/daily-app2/20261025-25/`, with bundled worker, WASM and fonts; no runtime errors or external data requests.
- Independent binary-STL parsing passed 132 parameter cases (all 128 field-range corners plus default and three presets), each part and combined float32 plate. Checked finite vertices, nondegenerate faces, unit normals, outward winding, welded edge incidence, positive per-component volumes, intended bore genus, disjoint component count and analytic XY plate dimensions.
- 35 imported-output combinations passed the same mesh and mechanism checks: ASCII wedge, binary gem, threshold relief, grayscale relief and engraving across defaults/presets/extrema.
- Kernel collisions sampled 193 full-rotation phases, checking all three part pairs, for default/presets, representative parameter corners and every imported-output case. Twenty sampled follower/cam lift-release paths checked; no unintended intersections. Rail overlap and protected import isolation independently bounded. These are geometric checks, not physical friction/force tests.
- Browser-selected PNG/JPEG and ASCII/binary STL downloads parsed and compared to UI fingerprints and independently regenerated JSON models. Changed image pixels, threshold/depth/crop/scale, STL source/scale/rotation/height/placement measurably changed exported geometry. Remove/reset reproduced the original signature.
- Malformed, truncated, open, nonmanifold, concave, excessive-size/triangle/dimension sources, white empty images, unsafe placements and invalid transforms blocked export with recoverable errors. Millimeter confirmation required for STL. Worker-load failure and malformed/missing-payload JSON blocked export; reload/reset recovered.
- Presets, bounded variations, all shapes, text, searchable heart icon, SVG ring holes in raised and engraved final meshes, background inversion, named saved designs, portable JSON asset round trips, undo/redo and drag/drop passed.
- Real ZIP unzipped and each of its three STL files validated. Dedicated part downloads passed.
- Assembled/exploded/isolated/print views preserved the print signature. Cam sweep visibly changed pose (quarter-turn checks avoid identical full-cycle endpoints). Saved dark theme, swatches, keyboard focus, collapsible sections and reduced-motion checks passed.
- Desktop: 374 px left controls / right viewer; phone: preview first, exports before stacked controls. No horizontal overflow at 320/390 px. Actual touch orbit/pinch changed canvas output; phone image/STL import and downloads passed.
- Gallery inline scripts compiled; new entry exactly once, area `stl`, correct URL; all 152 previous entries preserved. Browser rendered 153 entries, STL first, working search, zero runtime errors.

Reproduce with README commands. Evidence: geometry/browser/feature/hole/resilience/interaction/gallery JSON reports and screenshots in this folder. Root build/publication checks are recorded separately in `root-build-validation.json` and `publication-validation.json`.

Limitations: deliberately convex, single-solid, broad-flat-bottom STL inputs only; sampled 20×20 image height fields, not full-object reconstruction. Moving pieces are intentionally removable. No automatic spring return, retention, friction simulation, force/fatigue prediction or universal fit claim.
