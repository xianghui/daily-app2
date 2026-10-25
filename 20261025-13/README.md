# Facet Cadence

A private-by-default browser maker studio for a **gravity-indexed hexagonal barrel** and open palm runway. Rock from a broad face toward its leading corner, feel the center of gravity rise, and settle onto the next face. Unlike a smooth roller, the polygon has discrete gravitational rest positions. Two separately printed, intentionally lift-out parts; no axle, hardware, magnets, supports or glue.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. React/Vite, locally bundled Three.js/OrbitControls, Manifold WASM, fflate, Fredoka and Rubik (Fontsource/OFL). No CDN, service, paid API or key. Individual `deploy` uses gh-pages for the required app script; actual public publication is the parent monorepo root deployment.

## Studio

Reference-inspired 374 px left rail, collapsible labelled controls, tactile pressed buttons, numeric/range pairs and right-side orbit viewer. On phones, preview, dimensions and export precede stacked controls. Saved light/dark themes, focus indicators, reduced motion, actual model-thumbnail presets, bounded variations, undo/redo, six local named designs and portable JSON. JSON includes bounded normalized image/mesh payloads; there are no fake restored file paths. Files never leave the browser. Synthetic sample PNG, JPEG, SVG, ASCII STL and binary STL are bundled with no personal data.

Assembled, exploded, runway-only, barrel-only and separated print-plate views use the current geometry. See-through guide explains clearance. Assembly pose is explanatory: it includes 0.1 mm hover to reveal contact, and no dynamics or friction simulation. Preview edits do not alter printable geometry. Every STL and ZIP uses the current worker-validated result; pending/invalid edits, failed imports or worker errors disable export. Last-good preview is explicitly labelled when export is paused.

## Parameters (millimeters)

| Control | Range |
| --- | --- |
| Palm diameter; round/hex/oval | 22–28 |
| Barrel corner diameter | 28–44 |
| Rail height above floor | 5–8 |
| Total axial running allowance | 0.25–0.55 |
| Barrel axial width | 8–12 |
| Palm dimple depth | 0–0.6 |
| Floor reinforcement above 3 mm | 0.15–0.35 |

Rails are 3 mm thick. Runway inside width = barrel axial width + allowance. Runway length = barrel corner diameter + 24 mm. Current X/Y/Z export bounds are shown in mm. Palm shape, marks and imports affect exported geometry, not just materials.

## Image and SVG workflow

File picker and drag/drop accept PNG/JPEG and a restricted, resource-free simple SVG subset. Input limit 2 MB; image headers must match the extension; at most 12 megapixels and 6,000 px on either side. Decode is bounded before processing; normalize to at most 500 px, then sample a **20 × 20 grayscale grid**. Fit/crop, X/Y crop shift, light/dark background inversion, threshold and relief depth are real inputs.

Threshold mode samples dark foreground as raised heights; grayscale mode uses inverse luminance. Heights form a triangulated continuous top surface over a 0.4 mm solid backing and are solid-unioned into the palm. Bright holes stay unraised on that backing; this is **2D-to-relief**, not exact outline tracing or full 3D reconstruction of a photograph. Checkerboard displays the actual sampled cutout. Engraving uses a real solid subtraction; 0.4–0.6 mm depth protects the floor. Raised relief supports 0.4–3 mm depth. Empty results are rejected. SVG is locally sanitized, rasterized at 256 px, then uses the same conversion (including holes). External resources, scripts, effects and non-shape elements are rejected. Text and six searchable bundled Unicode marks rasterize locally with bundled fonts and use this same geometry path.

## STL workflow

Binary and ASCII STL, at most 2 MB and 1,500 triangles. Units are absent from STL: explicitly confirm the oriented source dimensions represent **millimeters**. Select Z/Y/−Z up before attachment; changing it requests reattachment. Source 3D preview and X/Y/Z dimensions are shown. Coordinates must be finite, source dimensions 0.2–250 mm per axis. Validate welded edges, outward winding, positive volume, connectivity, triangle intersections, convexity and broad flat bottom before CSG. Open, nonmanifold, disconnected, concave, hollow, degenerate and unsuitable contact geometry is unsupported and rejected with guidance; there is no automatic repair or convex-hull replacement.

The actual source triangles are proportionally scaled in XY to a 4–7 mm footprint and independently fitted in Z to 0.6–5 mm grip height. Rotate ±180°, place X ±1.5 mm and Y ±2 mm, reset transforms, replace or remove. The model is fused using Manifold into the recessed palm landing with 0.15 mm overlap. A minimum 1.2 mm XY extent and 6.5 mm radial safe zone are enforced. A disconnected result is rejected. The isolated landing cannot cut into or fuse the barrel/rails. Import scale, placement and shape measurably survive STL export.

## Generation and export

Debounced Web Worker owns Manifold WASM and robust solid union/subtraction. Stale-result IDs and exact input signatures gate downloads. Bounded resolution and source complexity keep work finite. Final component checks include manifold status, one connected component per part, finite coordinates, nonzero triangle areas, consistently opposed welded edge incidence and positive enclosed volume, also after Float32 print placement. Download each part, a separated binary STL plate, or real ZIP containing both STLs and assembly notes. STL does not contain preview colours; no 3MF is advertised.

## Printing and calibration

Print runway floor-down with rails upward, barrel on a hexagonal end with axis vertical, exactly as exported. Start with PLA/PETG, 0.4 mm nozzle, 0.2 mm layers and three perimeters. Remove elephant foot and rough seams, lay barrel sideways between rails and use on a horizontal surface. No assembly force is required; lift out at any position. **Not captive.** Pocket Rock is a full-size calibration coupon: tune clearance before larger prints. Allowance is total extra axial width, half on each side when centered; it is not a universal tolerance.

A regular hexagon of circumradius R has a stable face height √3R/2 and tip height R, giving an analytical gravity barrier R(1−√3/2). Preview rolls about the leading contact corner through ±30° with a labelled hover. It demonstrates corner-to-face motion but does not predict friction, auto-settling or print performance. Side rails guide axial placement; avoid forcing or pinching. Small loose parts: not a children's toy.

## Verification

`npm test`: 132 default/preset/extreme configurations and 35 image/STL-derived outputs; parse actual binary STL, welded two-face edge incidence, oriented neighbors, normalized STL normals, individual positive volumes, genus, independent Z bounds and bed alignment. Check 13 representative assembled poses by real solid intersection for representative extremes and all imported-output cases, import-difference isolation and separated plate bounds. Reject malformed inputs and empty image geometry.

`node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs` against dev server port 5290 exercise actual uploads/downloads, pixel/threshold/transform changes, PNG/JPEG/ASCII/binary files, invalid files, controls, presets, views, persistence, JSON payloads, named designs, ZIP, phone orbit/pinch and export, themes, stale-result gating and worker failure recovery. JSON reports and screenshots record actual outcomes; see VALIDATION.md.

**No physical print testing performed.** Geometry/mechanism calculations and browser checks are not a physical durability, friction, material or printer validation.
