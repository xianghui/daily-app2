# Fuse & Focus — validation

## Geometry and assembly

`npm test` passed 8 built-in cases (three presets, minimum, maximum, all three deck silhouettes) and 8 imported cases (ASCII/binary with transforms; threshold/grayscale, raised/engraved). `node extreme-check.mjs` passed 15 additional image/STL extreme and mixed cases. Each of these 31 models checks the connected card and all four clean parts after float32 binary STL serialization: nonempty finite coordinates, byte count, nondegenerate faces, unit normals, 1e-5 mm welded edges with exactly two opposite-directed incident triangles, outward winding, positive enclosed component volumes, bed Z=0 and expected millimeter dimensions.

Real CSG checks establish disjoint assembled parts, 13 samples of independent top-down insertion for each vertical part, three shoulder stops, no flat-layout overlaps, .8 mm minimum material surrounding every socket, same-eye sightline corridors and an opaque central crossing barrier. Boolean probes check both real eye apertures, every engraved target dot and its backing. Six socket allowances are explicit; fixed-joint retention requires adhesive, not a claimed friction seat.

Sixteen accessible snip cuts avoid functional part geometry; the resulting card has exactly five components (four removable parts plus carrier). `node hole-check.mjs` probes actual Boolean solids to establish unraised/unengraved image holes over solid backing. Reference sections were rendered and visually inspected from the actual parsed STL; source/hash/dimensions/components and measured/proposed fit mapping are documented separately.

## Production browser

`browser-test.cjs` downloads actual generated binary STLs for PNG/JPEG, ASCII/binary STL, threshold/depth/crop/grayscale, scale/rotation/placement, resets and extremes. Each download is compared to the current preview fingerprint and independently regenerated from the exact portable JSON state; all final-part and assembly checks apply to import-derived models too. Truncated, open, nonmanifold, concave, excessive, malformed and empty files, bad dimensions/transforms and missing payloads block exports and recover with replace/remove/reset. No silent hull substitution or repair.

`studio-test.cjs` verifies actual model presets/thumbnails, three silhouettes, text/icons/SVG, image/STL JSON round trips, local named saves/reload, undo/redo, current geometry after imported assets, ZIP contents with every contained STL parsed, all views, persistent dark theme, keyboard focus, labelled collapsible sections, reduced-motion preference and aborted worker recovery. `motion-check.cjs` verifies assembled/exploded renderings differ; this fixed kit has no fake motion control.

Touch contexts at 320/390 px verify preview-first stacking, no horizontal overflow, reachable exports and file inputs. CDP orbit and pinch change the rendered canvas, and actual phone image/STL import/download succeeds. Desktop rail is 374 px left of the viewer. Tested flows report zero JavaScript runtime errors and no external app requests. Screenshots of assembled kit, phone, dark studio and reference sections were visually inspected.

## Combined site

Gallery inline scripts compile via `new Function`; missing/empty scripts fail validation. New entry exactly once, area `stl`, newest first and correct folder; 279 earlier entries preserved. Root `npm run predeploy` copies/builds 280 app routes with zero failures/skips. Root HTML and all 47 new-app production assets are byte-compared. Combined-route browser tests exercise real worker/WASM and actual imports/downloads under `/daily-app2/20261030-7/`. Reports are saved beside this file.

## Unperformed

No physical print, optical/stereoscopic effect, near-focus comfort, vision benefit, adhesive strength, material performance, durability or stability test. Computational mesh/fit/sightline checks are not physical testing. Small eye holes may need printer calibration; small apertures improve depth of field but are not lenses. Six joints require cured adhesive. Stop viewing on discomfort; never sun-view. Adult desk craft, not a medical or precision optical instrument.
