# Validation — 2026-11-02

## Reference

Actual local candidate STLs parsed first, followed by fresh download and parse of Mike Kasberg's CC BY 4.0 White Cat Kit Card. SHA-256, 30,616 triangles, assumed-mm bounds, 27 edge-adjacent components and measured 1.6 mm sheet / 4.50×1.700012 mm sockets recorded. Actual Z=.1/.5/1.59 mm cross-sections viewed. Source defects are disclosed; no raw source STL redistributed or silently repaired. Original CSG reconstruction preserves measured tongue width/default sheet, proposes calibrated clearances and stronger runners.

## Geometry

`npm test`: **16 passing cases** across all three presets, three silhouettes, asymmetric and symmetric angle extremes, all-min/all-max dimensions, threshold/grayscale image rings and transformed ASCII/binary STL imports. Each case validates all six individually exported STLs plus combined de-tabbed plate. Exact binary lengths, finite vertices, nonzero triangles, normalized outward normals, positive per-component volumes, expected mm bounds, directed edge incidence and component topology pass (weld tolerance 1e−5 mm).

Independent kernel tests: every assembled part pair has zero unwanted intersection; all four removable pieces clear all other parts at nine vertical insertion/removal heights; board shoulders and sector floor contacts are supported; real sockets remain open; fourteen outboard cuts do not hit parts and release exactly five parts plus carrier. Connected-card envelope is width×height×(2×sheet). Sampled upper slices stay within the bed footprint. Triangle angles derived from vectors agree with the three sector parameters and total 180°. Default and representative min/max cases pass. Artwork backing ≥1 mm. Ring probes confirm actual engraved dark pixels and uncut bright centre.

## Production browser

`browser-test.cjs`: **28 actual STL downloads**, including connected/default/image/STL/transformed/reset/min/max and six per-part outputs. Browser file pickers exercise PNG, JPEG, ASCII and binary STL; source pixels, threshold, relief depth, crop, image size, STL scale/rotation/depth/placement change exported geometry. Download fingerprints match UI mesh and regenerated portable JSON. Each imported model is checked by the same manifold and assembly validators. Ten malformed/excessive/unsupported fixtures rejected, plus empty silhouettes and invalid dimensions/transforms; export disabled and recovery works. No external requests during local generation or runtime errors.

`studio-test.cjs`: all rendered presets, actual silhouettes, text/icons/SVG, portable image and mesh JSON, local named saves after reload, missing-payload failure, undo/redo, all ZIP STLs parsed, views, saved dark theme, keyboard focus, collapsible controls, reduced motion, desktop 374 px left rail and phone preview-first layout; worker script abort blocks export and reload recovers.

`orientation-test.cjs`: Z/Y/−Z source dimensions, explicit mm confirmation, exact resulting geometry and assembly.

`phone-views-test.cjs`: 320 px all-tabs and expanded assembly no-overflow checks; reachable real JSON downloads; JPEG and ASCII pickers; background inversion changes geometry; all five primary layouts.

`presentation-test.cjs`: all five isolated parts, three primary views and invalid numeric input recovery. Screenshots inspected: desktop live assembled studio, actual source reference cross-sections and 390 px preview-first mobile view.

`stale-test.cjs`: three rapid geometry edits and three rapid threshold edits immediately disable stale exports; only latest Node-equivalent result becomes exportable. Invalid transforms recover.

`icons-drop-test.cjs`: six bundled marks each regenerated and independently mesh/assembly-checked; actual file drag/drop succeeds. PNG/JPEG/ASCII/binary imports also used on touch phones; CDP touch orbit and pinch change the rendered view at 390 px, export remains reachable at 320 px.

## Gallery and root deployment

`npm run predeploy` passes for the individual app. Root `npm run predeploy`: **378 built, 0 failed, 0 skipped**. `deploy-check.mjs`: root index exact, every app index present, 41 new production files byte-identical to individual dist. All inline gallery scripts compile with `new Function`; missing-script assertion is active. New entry occurs exactly once, area stl, newest first and correct folder. All **377 prior entries unchanged**; “STL Generators” remains first category.

Combined production server real-prefix smoke tests pass for app/worker/WASM, actual PNG/ASCII imports and STL downloads, current preview/export identity and complete 378-card gallery. Live GitHub Pages smoke passed: HTTP 200 app and gallery, worker/WASM, real PNG/ASCII uploads, three actual STL downloads matching UI and portable JSON, manifold/assembly checks and all 378 gallery cards. Results in `public-validation.json`.

## Not performed

No physical print, fit, force, snipping, glue strength, durability or classroom trial. No force/fatigue/material simulation. Computational geometry and nominal fit do not establish those results. Sectors are deliberately loose and board joints require adhesive; no snap-fit performance is claimed. Fit is printer/material dependent; calibrate first.
