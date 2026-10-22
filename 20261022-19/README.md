# Scissor Sway

An original browser-based parametric fidget studio for two rounded crossed paddles. Pinch/spread the outer ends through a bounded 20–70° scissor sweep. This is not a cutting tool. A central axle supports rotation; an off-center pin in a circular sector slot limits travel. Three independently printable, hardware-free solids: lower paddle with axle and stop pin, upper paddle with bore and curved slot, and interference-fit keeper cap. Not print-in-place, spring-return, or physically print-tested.

## Run and build

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite; Three.js preview, locally bundled Manifold WASM robust solid unions/differences, fflate ZIP. The root monorepo deploy publishes this app under `/daily-app2/20261022-19/`. No API keys, CDNs or online generation services. PNG/JPEG/STL processing happens locally, in a bounded modeling worker where appropriate. Only bundled synthetic fixtures are stored in the repository.

## Parameters — millimeters unless stated

- Arm web width 9–12; pivot-to-thumb center 25–34; paddle thickness 3–5.
- Outer thumb pad radius 7–9; edge groove depth 0–0.5.
- Radial/axial running clearance 0.25–0.5 (0.35 default).
- Cap-hole radial allowance −0.08 to −0.01 (−0.03 default); interference on a Ø4 stem. Central running axle Ø6, stop pin Ø3.6, slot center radius 12, central disc radius 16, cap radius 6 and thickness 2.5.
- Fixed nominal opening 20–70°, plus clearance play at the endpoints. Slot polygons have 0.5° sampling and rounded endpoints. Slider motion demonstrates assembly, not physical simulation. Stops are not load-bearing handles.

Three distinct size/feel presets have real generated model thumbnails. Variations remain inside the supported ranges. Shape, Mechanism, Surface, Import, and Print tabs expose numeric/range pairs. Undo/redo snapshots coalesce edits; JSON save/open includes bounded import data. No missing original file is silently assumed restored. Preview colors are presentation only: STL stores geometry, not color. The geometry shown in printable layout is exactly the exported mesh; the assembly view rigidly positions those same parts.

## Image workflow

Choose/drop PNG or JPEG (16 bytes–2 MB, at most 12 MP, 6000 px per side). Headers are checked before decoding; source is normalized to a maximum 500 px side for portable save/open. The user can fit/contain or fill/crop, shift ±25%, choose threshold 1–254 or grayscale height mapping, and set relief depth 0.4–3 mm.

A local canvas composites transparency on white, then samples a fixed **20×20 grayscale grid** using Rec.709 luma. Threshold mode maps dark samples to relief depth and bright samples to zero; grayscale maps darkness linearly to height. A continuous triangulated surface with a 0.4 mm backing, closed sides and bottom is constructed. It is sunk 0.15 mm into the upper outer thumb pad and **boolean-unioned**, not merely overlapped. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photo**. Source image and exact conversion grid are visible. Empty white conversions are rejected. Scale (4–7 mm footprint), rotation ±180°, offsets X ±1.5/Y ±2 mm and depth change actual exported geometry. Features must stay within the pad's radius-6.5 mm safety zone relative to its thumb center, clear of all joints. Replace/remove/reset restores a real built-in grip.

## STL workflow and intentionally supported subset

ASCII and binary STL, 40 bytes–2 MB, at most 1500 triangles, each axis 0.2–250 mm. **STL has no unit metadata; explicitly confirm source coordinates are millimeters** before integration. The source gets its own orbitable preview and reported dimensions/format/triangle count. Only one closed connected outward-wound **convex, broad flat-bottom support-free solid** is accepted. The bottom must occupy at least 25% of its XY bounding footprint and contain every XY vertex projection. Open, nonmanifold, inverted, concave, hollow/disconnected, degenerate, intersecting, overhanging, excessive, truncated and badly scaled inputs are rejected with recoverable guidance. No automatic repair is claimed.

Source vertices are centered, XY proportionally scaled to footprint 4–7 mm, Z independently fitted to height 0.6–5 mm, rotated around Z, and placed on the upper outer thumb pad. Minimum fitted X/Y span is 1.2 mm. The transformed mesh is boolean-unioned with the upper paddle; exactly one resulting solid is required. The safe zone prevents imported features blocking moving interfaces. Tilt is deliberately unsupported; orient a flat base down in your modeler. Replacement, removal and transform reset are available. Synthetic original `mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are bundled with provenance in `public/samples/` for both picker and sample-button paths.

## Export and printing

Primary binary STL download is always reachable, including on narrow phones. Select all parts (nonintersecting bed-flat layout) or an individual part; ZIP contains all three STLs and assembly notes. Filenames identify parameter values and source type. Displayed X/Y/Z millimeter bounds describe the selected export, not a fake print-time estimate.

Print every part on its broad bottom face. Bores/slot are vertical; built-in and accepted imported grips rise upward without intended unsupported overhangs. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers and four walls are starting points. No compliant elements, bearings, magnets, screws or glue are required.

**Calibrate first:** download the cap socket coupon and trial on the lower paddle's Ø4 stem. Fits depend on printer, material and shrinkage; the defaults are not universal. Slip the upper paddle's slot over the stop pin while placing its center bore on the lower axle, at about 45°. Press the cap onto the narrower stem until it seats against the Ø6 shoulder. This shoulder leaves axial running clearance above the upper paddle. The cap must stay seated securely, but must not clamp rotation. Adjust fit/reprint if loose or tight. Remove by gently rocking the cap. Keep skin clear of the central overlapping joint and use the outer rounded pads gently; do not force the travel stops. Small removable parts are not for young children.

## Validation and evidence

`npm test` checks defaults, all presets, supported range corners, individual field edges, and deterministic variations, plus both STL fixtures and image-derived relief/threshold outputs. Binary export is reparsed: nonempty finite nondegenerate triangles, normalized normals, consistent neighboring winding, positive volume for each component, mm bounds, bed-flat placement, exact closed edge incidence after 0.00001 mm welding, and disjoint export layout. Each part must be a single Manifold solid. Digital mechanism checks cover inner/outer slot ligaments, axial gaps, keeper overlap, import safety and sampled assembled intersections across the full travel; only the intentional fixed cap-stem interference is excluded. Endpoint overtravel checks verify the stop pin encounters a wall beyond the intended arc.

`node browser-test.cjs`, `node extra-browser.cjs` and `node roundtrip-test.cjs` exercise actual browser file pickers, PNG/JPEG/ASCII/binary STL imports, changed geometry versus no import, transforms/threshold/depth/crop, errors/recovery, per-part binary downloads, ZIP, presets/variations, portable JSON restoration, undo/redo, color neutrality, drag/drop, dimensions, desktop and 320/390 px phone layouts, touch orbit/pinch and accessible export. `production-test.cjs` checks the built worker/WASM bundle. Reports and screenshots record observed results. These digital checks are **not physical print testing**; friction, wear, grip ergonomics and cap retention remain to be verified on your printer.

Visual direction: quiet warm model-first studio inspired by the interaction principles of vaseverse.org; no source, text, assets or branding copied.
