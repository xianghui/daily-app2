# Validation — Fagnano & Bounce

## Computational geometry (not physical prints)

`npm test` exercised **46 parameter cases**: **43 valid builds** and **3 correctly blocked unsafe fence/vertex combinations**. All three published presets built successfully. Cases include every numeric endpoint, all triangle base/altitude/offset corners, combined minimum/maximum, all deck silhouettes, binary/ASCII STL sources with transformed fits, and image threshold/grayscale sources.

For every valid case, each of the five separately downloadable solids and the four-part de-tabbed plate were serialized as real float32 binary STL and independently parsed. Checks: exact byte/triangle count, finite coordinates, nonzero triangle area, normalized stored normals consistent with winding, welded 1e-5 mm edge incidence exactly two/opposite directions, triangle adjacency, positive volume of **every** connected component, bed Z=0 and expected millimeter bounds. Every connected card has one component; the loose plate has four.

Independent Manifold intersection/slice checks cover support-free upper footprints, four nonintersecting assembled parts, **63 direct vertical insertion samples**, actual inner fence planes on triangle edges, actual open sockets and seated tongue height, positive total allowance, Boolean backing under imports, flat-part separation and declared card envelope. Cutting all sixteen runner middles produces exactly five components (carrier plus four released parts), preserving all functional-part volumes. Independent vertex projections and reflected vectors verify all three mathematical reflections; maximum residuals are near numerical floating-point epsilon. These do not measure real material friction, strength, optics or tactile behavior.

The first wide preset failed the vertex-clearance bound in the browser, was redesigned to altitude 48 mm / offset −3 mm / 22 mm fences, then rerun successfully. Unsafe parameter combinations remain recoverably blocked rather than silently clipping parts.

## Production browser / import / export

`browser-test.cjs`: real file-picker PNG, JPEG, ASCII STL and binary STL. Actual downloaded STL bytes are independently validated, their signatures match the live preview, and portable JSON is rebuilt in Node with the identical signature. Every imported model passes the same full part/assembly checks. Changes to image pixels, threshold, depth, crop, footprint, mesh source, scale, rotation and placement measurably change exported triangles. Replace/remove/reset restores the default signature. Minimum/maximum combinations download and validate. Each per-part download is parsed independently.

Recoverable rejection fixtures cover extension/content mismatch, invalid SVG, truncated STL, open/nonmanifold STL, oversized file, excessive triangle count, excessive mesh dimensions, unsupported concave solid, fake image, oversized image header, empty silhouette, empty numeric fields, invalid dimensions and art leaving the protected engraving zone. Export is disabled while invalid; reset/replacement recovers.

`studio-test.cjs`: all three real presets with downloads; all three silhouettes; actual text, searchable icon and SVG engravings; portable JSON and named local designs across reload; missing-payload reattachment message; undo/redo; real Everything ZIP whose every STL is parsed; numbered instructions; all assembly/print/isolated views; see-through fences; saved dark theme; keyboard focus; collapsible sections; 374 px left rail; preview-first phone; intentional worker abort disables export and reload recovers. `stale-test.cjs` tests immediate gating through rapid parameter/image edits and bad transforms.

`orientation-test.cjs`: Z, Y and −Z up source fixtures, measured dimensions, explicit millimeter confirmation and exact downstream geometry. `icons-drop-test.cjs`: all six bundled icon outputs independently validated plus real synthetic file drag/drop. `hole-check.mjs`: probes the browser-imported ring's final Boolean solid; bright central hole stays full-height, dark ring is a real recess, backing remains continuous.

Phone tests use **320 and 390 px** touch contexts. Real CDP gestures change the canvas for orbit and pinch zoom. PNG/STL file import and STL download run on the phone. `presentation-test.cjs` checks every editor tab and expanded full instructions against the configured viewport width (not a possibly widened layout viewport), actual JSON-save taps, reachable STL actions, and desktop/card/exploded/de-tabbed/isolated screenshots. Preview colour changes do not change STL signatures.

Browser runs record **zero runtime errors and zero external processing/CDN/font requests**. The final production worker and WASM are local built assets. Vite's Node-module externalization notice is a nonblocking conditional-module warning; actual production WASM/import/download operation was exercised.

## Reference and root site

Actual fresh reference STL parse, hash, component measurements and cross-sections are in `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png`. Source defects and all proposed deviations are explicit. No raw/private reference meshes were redistributed. Reference trees and old daily_app remained read-only.

`gallery-test.cjs` requires at least one inline script, compiles all with `new Function`, compares every preexisting APPS record exactly, verifies the new record once and newest-first with area stl, checks category label/order and real gallery runtime/search. `staging-test.cjs` verifies every gallery path is present in root deploy and every new production asset matches dist byte-for-byte. Root build and final staged-browser reports are kept separately.

## Limits

**No physical print, assembly, adhesive-strength, dimensional accuracy, optical, cord, or tactile test was performed.** This is a geometric display kit with clearance-fit fixed fences, not captive retention, a moving fidget, a rolling-ball track or a calibrated optical instrument. Adhesive is required for a permanent rigid display. Optional cord/film/LED materials are external and untested. Printer/material tolerances are starting points only.
