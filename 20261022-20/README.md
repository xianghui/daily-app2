# Orbit Almanac

A local parametric **epicyclic fidget studio**. Hold a stationary palm tab and circle a planet gear: its carrier revolves around a fixed sun while the planet turns twice per circuit. Unlike fixed-axis coupled gears, this mechanism combines a revolving axle and continuous gear rolling. Five separately printed hardware-free parts: palm base/spindle, orbit carrier/pin, keyed fixed sun, planet gear, planet keeper cap. Not print-in-place. **No physical print has been tested.**

## Development and dependencies

`npm install`, `npm run dev`, `npm run predeploy`. React/Vite, Three.js, locally bundled Manifold WASM for actual solid unions/differences, and fflate for ZIP. Modeling and STL preflight run in a worker. All dependencies are bundled locally: no CDN, API, account or paid service. Root monorepo publishing serves `/daily-app2/20261022-20/`; app-level deployment scripts remain available but do not replace root publishing.

The warm model-first studio references vaseverse.org's interaction principles only. No source, branding, assets or text were copied. Desktop uses a large orbitable canvas and compact tabbed rail; phones use a generous preview, collapsible controls, and fixed reachable export area. Real generated thumbnails accompany three presets. Preview colours do not travel with STL.

## Supported parameters

All lengths in **millimeters**; rotations in degrees.

- Carrier web width 9–12; tooth module 1.2–1.6; gear thickness 3–5.
- Palm tab radius 7–9; palm edge grooves 0–0.5.
- Radial and axial running clearance 0.25–0.5, initially 0.35.
- Socket radial allowance −0.08 to −0.01, initially −0.03. Negative values mean intentional interference, not universal fit.
- Both gears have 16 teeth, 20° involute flanks, pitch radius `8 × module`, tip radius `9 × module`, root radius `6.75 × module`. Carrier radius is `16 × module + clearance`. Tooth thinning gives backlash; the raised center distance supplies additional running space.
- Base thickness 3, carrier thickness 3, main spindle Ø8, planet spindle Ø6, keeper peg Ø4, cap radius 6 and thickness 2.3. Fixed sun seats on a square 5 mm peg.

Numeric inputs/ranges change the actual mesh. Invalid fields pause export; variations stay within supported ranges. Undo/redo coalesces modeling actions. JSON save/open embeds bounded source pixels or accepted STL mesh; no missing source is silently declared restored. Assembled view rigidly positions the same geometry used for bed-flat individual/all-part binary STL and ZIP exports. Displayed X/Y/Z are the selected printable export bounds, not assembled-envelope or invented time estimates.

## Image → printable palm relief

Use picker or drag/drop for PNG/JPEG: 16 bytes–2 MB, ≤12 megapixels, ≤6000 px per side. Content headers and dimensions are checked before decoding. Transparency is composited on white. Source is normalized to a maximum 500 px side so portable JSON round trips remain exact.

A local canvas fits/contains or fills/crops the source with ±25% X/Y crop shift and samples a **20×20 Rec.709-luma grid**. Threshold mode maps samples below threshold 1–254 to raised material; grayscale mode maps darkness linearly to height. Depth is 0.4–3 mm. A continuous triangulated height surface, closed sides and bottom form a solid with 0.4 mm backing. It is sunk 0.15 mm into the stationary palm tab and **boolean-unioned** into the base, not exported as intersecting shells. Both source and conversion previews are visible. This is **2D-to-relief/silhouette conversion, not automatic full-3D photo reconstruction**. Empty conversions are rejected.

Set 4–7 mm footprint, ±180° Z rotation and X ±1.5 / Y ±2 placement. Every transformed vertex must remain inside the radius-6.5 mm tab safe zone, outside the entire moving planet envelope. Image pixel content, threshold, relief depth, footprint and placement measurably change the exported STL. Replace/remove/reset returns to the built-in raised oval.

## STL → integrated printable palm grip

ASCII and binary STL are accepted: 40 bytes–2 MB, ≤1500 triangles, 0.2–250 mm per source axis. **STL has no unit metadata: explicitly confirm source millimeters.** Source dimensions, triangle count, format and an independent interactive source preview are shown.

Deliberately bounded supported subset: one convex closed connected outward-wound solid with broad flat bottom facing Z=0, no overhanging XY projection. Bottom contact must occupy at least 25% of XY bounding area and contain every vertex's XY projection. Finite coordinates, nondegenerate faces, welded two-face edge incidence, neighboring winding, connectedness, positive volume, pairwise triangle intersections, convexity and bottom support are checked. Open/nonmanifold, concave, hollow, disconnected, inverted, self-intersecting, unsupported or excessive meshes are **rejected with guidance, never silently repaired**. Orient/rescale/decimate in your own modeler when necessary. Tilt is intentionally unsupported.

Centering normalizes the source bounds; XY is proportionally fitted to a 4–7 mm footprint, while Z is independently fitted to 0.6–5 mm height. Fitted X/Y span must be at least 1.2 mm. Z rotation and placement then apply. The source is sunk into and robustly united with the stationary base; the result must be exactly one connected solid. Safe-zone checks prevent importing into teeth or moving clearances. Transform reset, replacement and removal are available. JSON embeds the bounded accepted mesh, revalidating topology on open.

All files stay in this browser, never uploaded or automatically stored. Repository fixtures are original synthetic `mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`; see `public/samples/README.md`. No personal inputs are committed.

## Export, calibration, assembly

Primary Download STL remains reachable. Export all five parts in a separated, bed-flat layout, any individual part, or ZIP of all parts plus assembly notes. STL stores geometry in millimeter coordinates, not preview colour. Slicer import should use millimeters.

Print broad-bottom-down; vertical bores and gear faces point upward. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers and four walls are starting recommendations, not tested settings. No supports intended within accepted geometry. No hardware, magnets, bearings, fasteners or compliant parts are required.

**Calibrate before use:** print the cap socket coupon and trial it on the carrier's Ø4 peg. The fixed sun's square hole uses the same radial allowance but may fit differently; tune/reprint as needed. Printer/material/shrinkage determine real fit. The default is not universal.

1. Put the carrier over the base spindle.
2. Put the planet over its carrier pin.
3. Align the sun's square socket with the center square peg. Turn the planet until the teeth mesh, then seat the sun against the center shoulder. It retains the carrier with axial clearance underneath.
4. Seat the planet keeper against its pin shoulder. It retains the planet without clamping the gear faces.
5. Verify both fixed parts stay seated and both moving parts rotate freely. Adjust/reprint if loose or tight. Never glue moving interfaces. Rock the sun/cap off gently for service.

Hold the palm tab, turn the planet gently, keep fingers out of the tooth mesh, and never force binding. Small removable parts are not for young children. Wear, friction, ergonomic pinch behavior and press-fit retention require real print trials.

## Validation and reproducible evidence

- `npm test`: 142 parameter cases (defaults, presets, all 128 range corners and variations), plus 24 image/STL-derived cases. Exported binary STL is reparsed for finite nondegenerate faces, normalized normals, consistent neighbor winding, exact two-face edge incidence after 0.00001 mm welding, positive volume of each component, millimeter dimensions, bed-flat placement and disjoint layout. Every required part must be one closed connected solid.
- Mechanism checks: axial gaps, carrier pin wall, sun/cap retaining overlap, image/STL safe-zone separation; 65 positions through each tested full orbit and eight non-fixed part pairs per position. Only the two intentional fixed press fits are excluded from interference tests.
- `node engagement.mjs`: analytical involute contact ratio >1 at module/gap corners, positive tip/root radial clearance, and actual CSG blockage at wrong tooth phase. These supplement rather than replace collision checks.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary pickers and downloads; changed content, scale, placement, threshold/depth/crop vs no import; bad/truncated/nonmanifold/excessive/empty inputs; recovery/reset; each part; exact preview/export fingerprint and displayed bounds; desktop and 320/390 px phone widths; touch orbit, pinch and phone exports.
- `node extra-browser.cjs`, `node roundtrip-test.cjs`: all presets/representative variations validated, undo/redo, portable save/open of each format, random image save/open round trips, ZIP and coupon, colour neutrality and drag/drop.
- `node production-test.cjs`: built worker/WASM, assembly motion, phone control sheet, actual STL downloads and a larger synthetic image portable save/open.

JSON reports and screenshots record actual digital checks. **Watertightness and sampled mechanism checks do not constitute physical print testing.**
