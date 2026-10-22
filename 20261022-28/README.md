# Watt Whisper — local fidget design studio

An eight-part, hardware-free **Watt crossed-link midpoint fidget**. Hold its stationary palm tab and guide the raised floating thumb pad along an approximately straight, slightly wandering stroke. Two grounded rockers and a floating coupler constrain motion; no track, gears, spring return or detents. The chord is oblique in the palm plane, not precisely vertical. This is not precision or load-bearing guidance.

## Run / build

`npm install`, `npm run dev`, `npm run predeploy`. Base URL: `/daily-app2/20261022-28/`. Per-app deploy script is available, but publication uses the parent monorepo deploy flow. All modeling, preview and export dependencies are bundled locally: React, Vite, Three.js, manifold-3d (WASM solid Boolean engine), fflate. Playwright is a development-only browser test dependency. No API key, CDN or backend. A worker performs solid generation and STL checking; image processing is bounded on the main thread.

## Modeling

All geometry dimensions are **millimeters**. Rocker radius 28–34; coupler pivot spacing 24–30; center thumb radius 4.8–6; palm tab radius 7–9; edge grooves 0–0.5; radial and axial bearing gap 0.25–0.50; socket radial allowance −0.08 to −0.01. Shoulder journals are Ø5 and cap pegs Ø3.6. Negative socket allowance gives a press fit. Ground pivot separation is `2*sqrt(L²−(R/2)²)`. Preview sweeps the input ±12° around `asin(R/(2L))`, using exact circle-intersection closure. This is a working stroke, **not an angular hard-stop guarantee**: do not force beyond it. Layered links prevent crossing collisions; cap shoulders preserve the selected axial gap.

Presets give distinct proportions and stroke lengths. Variations stay within the same validated ranges. Controls regenerate real manifold solids. Three-dimensional presets use the actual model generator. Orbit, zoom, fit, part selection, assembly/print layout, preview colours, undo/redo and local JSON open/save are available. STL has no colours; palette choices affect preview only.

## Image import

PNG/JPEG, 16 bytes–2 MB, ≤12 million pixels, ≤6000 pixels per side. Signatures and header dimensions are checked before decoding. Alpha is composited on white. Sources are normalized to at most 500 pixels per side for portable saves, then fitted/cropped/panned into a **20×20 grayscale grid**. Luminance uses 0.2126 R + 0.7152 G + 0.0722 B. Threshold mode raises dark samples by the relief depth; grayscale mode raises proportional to darkness. A triangulated continuous height field with closed sides and bottom creates a **solid backing 0.4 mm thick**, Boolean-unioned 0.15 mm into the stationary palm tab. Threshold transitions are sloped between grid samples, not traced vertical pixel contours. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction**. White/empty relief is rejected.

Controls: threshold 1–254, depth 0.4–3, fit/cover crop, X/Y pan ±25%, footprint 4–7, Z rotation ±180°, X placement ±1.5, Y placement ±2. The protected radial 6.5 mm tab zone rejects features leaving its boundary. Image resolution limits fine-detail fidelity; inspect the grid preview and slicer. Relief is integrated into a rigid stationary tab, never into bearing interfaces.

## STL import

ASCII and binary STL accepted, ≤2 MB, ≤1500 triangles, source dimensions 0.2–250 on each axis. **STL stores no units: explicit millimeter confirmation is required before integration**. Parser checks finite vertices, degeneracy, welded edge incidence and winding, positive enclosed volume, connectivity, self-intersection, convexity, and broad flat-bottom containment. Only one outward-wound convex flat-bottom solid without overhangs is supported. Open, nonmanifold, concave, hollow, disconnected or unsupported meshes are rejected with guidance; there is **no automatic repair**. Repair or simplify in a real mesh editor and re-export a watertight outward-wound convex grip.

XY scales proportionally to a 4–7 mm footprint; Z independently fits 0.6–5 mm height. Minimum fitted XY span 1.2 mm. Z rotation, XY placement and center/reset controls affect the final Boolean union. The source remains visible separately with dimensions, triangle count and format. Final source-to-tab union must form exactly one connected solid. Arbitrary meshes are deliberately unsupported rather than silently exported as overlapping shells.

## Privacy / portable files

Files are processed entirely in the local browser; no uploads or external services. JSON saves explicitly include bounded normalized PNG or validated STL mesh payloads. Reopening reconstructs and validates imports; no missing-file restoration is pretended. Replace/remove/reset are available; invalid import feedback blocks export until corrected or removed. Only locally synthesized sample fixtures are bundled: `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`. No personal uploads belong in the repository. Samples are original synthetic fixtures inherited from this project's local import test suite; no third-party asset attribution required.

## Export / printing / assembly

Primary Download STL is a client-side **binary STL** of the exact generated preview solids and current parameters, always in printable bed-flat layout rather than animated assembled pose. Select an individual part, or download ZIP with all eight parts and assembly instructions. The combined strip is intentionally widely separated and may exceed a printer bed: use separate parts and arrange in the slicer. UI reports selected-export X/Y/Z in mm.

Start with PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Flat faces down, pins up; no supports intended. No hardware or compliant parts. Test the socket coupon on a Ø3.6 mm peg. Suggested gaps 0.25/0.35/0.45 mm are calibration starting points, not universal fits. Tune socket allowance instead of forcing caps.

1. Seat left-rocker on the lower left ground journal, right-rocker on the taller right journal.
2. Point free ends inward: left above the center line, right below it.
3. Bridge the free journals with thumb-coupler, raised pad up.
4. Press four caps onto their narrow shoulder pegs without clamping the moving faces. Verify retention and free movement.
5. Guide the pad gently within the previewed stroke; no powered operation. Pull caps off for service. Small removable parts are unsuitable for young children.

## Verification

`npm test` checks binary STL triangles, finite coordinates, nondegenerate faces, stored normal agreement, welded edges with exactly two incident faces and balanced winding, component positive volumes, expected dimensions, connected components, bed-flat separated layout, link-length closure, approximate midpoint path, journal/retaining wall margins, and sampled solid intersections. Only intentional socket/peg press-fit pairs are excluded from collision checks. Default, all parameter-range corners, presets, variations and image/STL integrations are covered. `browser-test.cjs` exercises real PNG/JPEG and ASCII/binary STL file selection and downloads, transformations, empty/malformed/unsupported inputs, source removal/reset, preview/export fingerprints, mm dimensions, 320/390 px phones, touch orbit/pinch and phone exports. `extra-browser.cjs` checks presets, variations, JSON imported-source round trips, undo/redo, ZIP/per-part/coupon export and drag/drop. JSON reports record actual completed checks, not physical print results.

**Digital geometry/kinematic validation is not physical print or tactile testing. No physical print has been performed.** Layer adhesion, fit, wear, cap retention and print artifacts must be assessed on your printer. Inspect fine relief in your slicer. The approximate-line working envelope has no dedicated hard stops.
