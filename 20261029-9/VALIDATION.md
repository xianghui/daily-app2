# Chord & Pluck — validation record

## Passed computational checks

- Actual reference binary STL inspected, hash verified, 30,616 faces and 27 edge-adjacent components recorded; representative mesh sections inspected. Fresh public URL returned HTTP 403, so existing verified downloaded bytes were used. Raw source not republished.
- `npm test`: 27 accepted built-in configurations (default, all presets, min/max, mixed extrema), 35 accepted image/STL-derived configurations. Three mixed extrema rejected for insufficient card packing width. Explicit dimension/transform/unit/empty-image/truncated-file rejections passed.
- Every independently serialized part and connected-card STL: binary byte length, finite vertices, nonzero face area, unit stored normals matching winding, expected mm dimensions, closed two-face edges welded at 1e−5 mm, opposite neighboring directions, positive signed volume per component.
- All assembled pairs have intersection below 0.001 mm³; frame and tool sampled over 70 mm insertion/removal paths, shoulder seat and lateral tongue guides checked. Cord bores cut through, cord aperture paths clear, bounded hole-edge walls and spacing verified. No tension, pitch, elasticity or knot retention simulation claimed.
- Twelve accessible runner snips do not cut into usable parts; subtraction leaves four components: one carrier and three parts. No unintended overlaps of printable parts. Real connected-card CSG, not a loose plate plus rectangle.
- Image ring-hole solid probes and actual wedge integration; unsupported concavity rejection.
- Development and real production/base-path browser runs: **39 downloaded-output cases, 16 workflow checks each**. Real PNG/JPEG/SVG, ASCII/binary STL file pickers; source dimensions, unit confirmation, scale/rotation/placement; settings alter exported geometry. Each download fingerprint matches the UI and independently regenerated portable JSON state.
- Replace/remove/reset, threshold/depth/grayscale/engraved/crop, text/icon marks, all presets/views, undo/redo, portable image/STL JSON, named designs, missing payload requests, real per-part STLs and unzipped ZIP member validation.
- Recoverable invalid/truncated/open/concave/excess-byte/excess-pixel/excess-triangle/invalid-SVG/empty-image/invalid-transform checks; blocked stale exports and worker abort/reload recovery.
- Desktop 374 px left controls/right viewer; saved light/dark theme, collapse/focus/reduced-motion. Real 320 and 390 px touch orbit/pinch, preview-first stacked layout, file imports/downloads, no horizontal overflow. Screenshots inspected.
- Eight actual randomized browser STL downloads independently regenerated from portable JSON and validated; rapid invalid→valid edits exported only the current valid state.
- Combined gallery inline script compiles using `new Function`; new entry exactly once, area `stl`, category first; prior entries retained; runtime without page errors. Root predeploy copied **250 apps, 0 failed, 0 skipped**, with matching root and all gallery output folders.

Reports: `geometry-validation.json`, `extra-validation.json`, `browser-validation-dev.json`, `browser-validation.json`, `production-preflight.json`, `variation-validation.json`; reproducible scripts adjacent. Evidence screenshots under `evidence/`.

## Explicit limitations

**No physical print, cord-tension, sound, adhesive, fatigue or stability testing.** Requires soft cord and glue; loosely laced loops only, no tuned-instrument or force claim. Clearanced frame seats require adhesive; shuttle is removable and rests on desk. Tolerances require material/printer calibration. Computational mesh/insertion checks do not establish strength or acoustic performance. Preview grey cord paths and exploded offsets are illustrative only; not STL geometry.
