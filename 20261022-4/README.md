# Offset Ritual

A local-first React + Vite parametric STL studio for a hardware-free **Oldham coupling** fidget. Turn either scalloped rotor: two parallel offset axes rotate together while a floating cross slides in perpendicular grooves. This differs from a Scotch yoke, slider-crank, gear pair or two-axis thumb slider. The cross center traces a circle of radius half the axis offset, twice per revolution.

## Studio

Large Three.js model preview, orbit/pinch/zoom/reset-fit, assembled animation and separate printable layout, exact millimeter export bounds, active-part picking, warm matte palette, model-generated preset thumbnails (Balanced, Wide orbit, Pocket turn), valid-range variations, paired numeric/range controls, undo/redo, portable JSON save/open, collapsible phone controls and a fixed reachable export area. Preview colors are not encoded in STL. The visual direction is an original quiet model-first studio informed by vaseverse.org; no reference assets, text, branding or source code are copied. Shared editor/import infrastructure from earlier Daily Object Lab studios is reused.

## Five parts and assembly

1. Palm frame with lower spindle, two raised bridge seats and an isolated custom grip tab.
2. Lower grooved rotor.
3. Floating cross-disc with perpendicular upper/lower tongues.
4. Upper grooved rotor (same geometry as lower, flipped in assembly).
5. Bridge lid with upper spindle and two static friction sockets.

The fixed bridge captures the rotor/cross stack axially. The tongues stay engaged throughout rotation. Static bridge sockets must hold firmly: calibrate and reprint loose sockets tighter. They are not compliant snap fits; no retention-force claim is made. No bearings, magnets, screws or other hardware. Parts remain separate, and the STL never fuses moving joints. All-part download uses a separated bed-flat row; individual-part STL and ZIP with every part plus assembly notes are also available. Preview and export share the exact generated meshes.

## Local image import

File picker and desktop drag/drop support PNG/JPEG, with bundled synthetic `mark.png` and `waves.jpg`. Up to 2 MB, 12 megapixels, 6,000 pixels per side. Content headers and dimensions are verified before decoding. The browser normalizes images to a maximum 500-pixel preview side and composites transparency over white. Fit/cover, ±25% crop shifts and Rec.709 luminance produce a bounded **20 × 20** height grid. Threshold mode raises dark samples below the adjustable 1–254 threshold; grayscale mode maps darkness continuously to height. Relief depth is 0.4–3 mm above a continuous 0.4 mm backing. The backing is sunk 0.15 mm into the fixed tab and robustly boolean-unioned, not left as an overlapping shell. Empty white conversions are rejected. This is 2D-to-relief conversion, **not full 3D reconstruction from a photograph**. Sharp changes become small triangular ramps between grid samples.

Image source and exact conversion-grid previews are provided. Footprint is 4–7 mm, rotation ±180°, local X ±1.5 mm and Y ±2 mm. A 6.5 mm radial safe zone protects the moving mechanism; invalid combined transforms disable export. Replace, remove, reset image settings, center/reset transformations and return to built-in defaults are supported. Different pixels, thresholds and depths change real exported geometry.

## Local STL import

ASCII and binary STL are parsed in a worker. Bundled synthetic fixtures: `wedge-ascii.stl` and `gem-binary.stl`. Limit: 2 MB, 1,500 triangles, 0.2–250 mm per source axis, finite coordinates within ±10,000 mm. STL has no unit metadata: the user **must explicitly confirm millimeter source units** before integration. Source dimensions, format, triangle count and a separate source mesh preview are shown.

Only one convex, connected, closed, outward-wound, non-self-intersecting solid is supported. Triangle edge incidence and directed winding are checked after welding at 0.00001 mm. Degenerate faces, zero/inverted volume, open/nonmanifold/disconnected shells, concavity and unsupported overhangs are rejected. The flat bottom hull must cover at least 25% of the XY bounding area and contain every projected vertex, so pointed-bottom or overhanging meshes are not supported. **No automatic repair is performed or claimed.** Use a mesh editor to orient a broad flat base down in Z, decimate and export a single convex solid.

XY is proportionally fitted to 4–7 mm maximum footprint; Z independently fits a 0.6–5 mm height. Minimum fitted XY span is 1.2 mm. Z rotation and XY placement preserve bed orientation. The transformed mesh must stay inside the fixed tab's protected safe zone. It is sunk 0.15 mm and boolean-unioned into the actual palm frame, changing the exported frame; unchanged source re-export is not the workflow. Integration must result in one connected solid. Scale/rotate/placement changes survive STL export. Imported decoration never touches the sliding grooves or spindles.

## Units, controls and mechanical bounds

All model dimensions are **millimeters**; rotation is degrees and image crop is percent. Supported ranges:

| Parameter | Range |
|---|---|
| Rotor diameter | 36–48 mm |
| Rotor thickness | 6–8 mm |
| Axis offset | 2–4 mm |
| Groove depth | 2–3 mm |
| Cross disc thickness | 2.4–3.6 mm |
| Bridge socket radial allowance | −0.08–+0.08 mm |
| Rim scallop depth | 0–0.6 mm |
| Side running clearance | 0.20–0.50 mm |

Tongues are 4 mm wide. Groove width is 4 + 2 × clearance. Tongue height is groove depth − clearance; the total axial stack slack equals the selected clearance, distributed across four clearance/4 gaps in the preview. Even if all this slack collects at one disc face, groove engagement = tongue height − total slack = groove depth − 2 × clearance (at least 1 mm). This worst-case axial check prevents the tongues disengaging by lifting the cross. Rotor socket depth is 2 mm; the wall between socket and groove is at least 1 mm. The cross-disc body is at least 2.4 mm thick. Short tongue ends allow full ±offset travel without striking rotor rim scallops. Bridge posts are outside the whole swept envelope. The import remains outside the full rotor sweep. Invalid dimensions and nonfinite/out-of-range transformations disable export.

## Print and calibration

- Print frame and rotors with their exported bases down; bridge sockets up.
- **The floating cross needs removable supports below its disc overhang**, with its lower tongue touching the bed as exported. This is a separately assembled mechanism, not a support-free/print-in-place claim. Clean supports carefully from the lower tongue and disc underside. Do not scale just one part in the slicer.
- Rotor underside sockets bridge 6.4–7.0 mm. Inspect them in the slicer; support/bridge tuning depends on printer.
- PLA or PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. No intentional flexure.
- First print a rotor and cross as full-size groove trials, then test the rotor on the frame spindle. Start with 0.30 mm side clearance; 0.20 snug / 0.45 roomy are optional starting points, not universal tolerances. Adjust by printer/material.
- Seat lower rotor on frame spindle, cross lower tongue in its groove, then upper rotor groove-down perpendicular to lower groove. Align its axis with the offset bridge spindle. Seat bridge sockets evenly onto frame post pins. Shoulder stops define axial spacing. Do not force or glue moving joints.
- Turn through a complete revolution. If binding, clean support scars and recalibrate. Loose static bridge sockets must be reprinted tighter using 0.02 mm radial allowance changes. Pull bridge evenly upward to disassemble. Small removable parts: not a child's toy.

No physical print, strength, wear or retention-force test has been performed. Digital checks do not prove material durability. No fake print-time estimates or unconditional ready-to-print badges.

## Privacy and portability

Generation, conversion, parsing, validation and downloads happen locally in browser JavaScript/WebAssembly. All dependencies and WASM are bundled locally; no runtime CDN, remote modeling API, key or paid service. Sample fixture fetches are same-origin static requests. No personal files enter the repository or leave the browser. JSON save explicitly includes the bounded normalized image payload / validated STL vertex data and import settings, so reopening restores a real source rather than pretending a missing upload exists. JSON limit 2 MB. History stores a bounded 35 snapshots locally in memory.

## Development / exports / verification

`npm install` · `npm run dev` · `npm run predeploy` · `npm test`.

Dependencies: React/ReactDOM, Vite + React plugin, Three.js (view), manifold-3d (robust union/subtraction in local worker), fflate (ZIP), gh-pages (per-app deploy command), Playwright (browser verification). Main binary STL exporter writes normalized face normals and final triangle coordinates. Robust solid operations use Manifold; all final parts must each decompose to exactly one valid solid. No interpenetrating shells are treated as unions.

`validate.mjs` checks all 256 low/high range corners, default/min/max, every preset and representative variations. It parses generated binary STL, verifies finite coordinates, face area, normalized normals, directed winding, welded closed edge incidence, positive volume per connected component, five separated components and millimeter dimensions. Every part is checked separately. Image-derived and STL-derived cases use the same checks. Analytic 145-position kinematics checks perpendicular tongue alignment, allowable slide and circular cross orbit; exact Manifold intersection checks at 36 angles verify the default/extreme mechanisms and imported variants. Static bridge friction seats are the only permitted bounded overlap. Export layout bounding boxes must be separated by at least 6 mm.

`browser-test.cjs` exercises real browser file pickers, PNG/JPEG and ASCII/binary STL, threshold/depth/crop/transform effects versus no-import output, exact mesh/export signatures, rejection/recovery, every individual part, phone orbit/pinch, phone imports/downloads and 320/390-pixel widths. `extra-browser.cjs` exercises presets, variations, undo/redo, portable import save/open, ZIP, color neutrality and drag/drop. Reports and desktop/phone screenshots document executed checks. Gallery scripts and the production WASM/worker are separately browser-tested. Root monorepo predeploy/deploy publishes the combined site, not the per-app command.

The combined print layout is a long row. On smaller beds, use individual exports or import the multi-part STL as separate objects and auto-arrange in the slicer without rescaling. A regression found and eliminated a tangent edge contact between the image grip and a fixed bridge post: the tab is now isolated beyond the full post envelope. Actual image-import exports are welded-edge checked, not just accepted based on CSG status.

Retention regression: total stack axial slack is bounded to the selected 0.20–0.50 mm running fit, not four times that value. Analytic checks include the worst case where all slack collects at either cross-disc face; exact solid intersections additionally sample both axial extremes at four quadrature angles. Minimum remaining engagement is 1 mm throughout the range.
