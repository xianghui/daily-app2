# Crown Catch

A local browser maker studio for a **positive face-dog clutch fidget**. Press the upper wheel down at any of four quarter-turn indexes to couple it to the lower wheel. Lift above the dogs to freewheel independently, align and reseat. This is positive flank engagement, not a friction clutch, ratchet or powered transmission. Wheels are intentionally **not captive**. Three separately printable solids; no hardware or supports intended.

## Run and build

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the app at `/daily-app2/20261026-15/`. Per-app `npm run deploy` exists as requested; the combined published site is deployed only from the monorepo root.

React/Vite, Three.js/OrbitControls, Manifold 3D WASM for real unions and differences, fflate for ZIP. Fredoka and Rubik fonts are bundled through Fontsource (SIL OFL). Six original simple SVG marks are bundled. No CDN, keys, paid API, cloud modeling or file uploads. Synthetic fixtures live in `public/samples`.

The read-only Keycap Studio reference informed the 374 px left editor, collapsible sections, paired millimeter fields, raised tactile buttons, saved light/dark theme, source/cutout previews, imported mesh editor, right-hand live viewer and phone preview-first layout. No reference switch sockets or history/dependencies were copied. Shared local studio plumbing is adapted from the earlier daily app; this clutch geometry and its mechanism checks are new.

## Parameters and units

All modeling dimensions are millimeters; preview turn is degrees and preview withdrawal is a dimensionless phase.

| Control | Range |
|---|---|
| Palm diameter | 22–28 mm; round, hexagonal or oval |
| Clutch pitch diameter | 32–40 mm |
| Dog radial length | 3–5 mm |
| Running fit | 0.3–0.6 mm per side |
| Dog height | 2–3 mm |
| Palm dimple depth | 0–0.6 mm |

Four 4 mm wide dogs, 4 mm wheel plates, 5 mm base floor, 3 mm spindle radius. Slots are expanded by selected fit on every radial/tangential side. Axial face gap equals fit. Minimum engagement is 1.4 mm; slot walls stay above 3 mm. An integral 15.9 mm exposed spindle guides the upper wheel throughout the preview withdrawal. Its top is open for vertical removal; there is no retaining cap. Engaged wheels rotate together; fully withdrawn upper wheel can rotate independently. Intermediate poses keep both aligned. No physics/dynamics simulation.

Three presets include distinct actual model thumbnails. Bounded variations, undo/redo, six named local designs and portable JSON save/open are implemented. Restores include bounded image or mesh payloads, not local paths. Missing image payloads explicitly request reattachment. Unsupported/invalid state disables export; a visible last-good preview cannot be exported as the current edit.

## Image → real solid geometry

PNG and JPEG content is inspected before decoding. Limit 2 MB, 12 MP, 6,000 px per side. Normalize to at most 500 px, then sample a 20 × 20 grayscale grid with contain/cover crop, ±25% shifts and light/dark background removal. SVG supports bounded simple shapes/paths with no external references, scripts, text or filters; it rasterizes locally to 256 px and enters the same image pipeline. This is **2D-to-height-relief**, not full 3D reconstruction or exact outline tracing.

Threshold converts grayscale to either zero or chosen height; grayscale mode varies height continuously. Height samples form a closed triangulated height surface, with side walls and backing; Manifold unions it with the palm or subtracts an inverted version for engraving. Bright holes remain unraised/unengraved over the continuous solid floor; they are not through-holes. Source and checkerboard cutout show the actual sampled cells; interpolation produces sloped boundaries. Raised depth 0.4–3 mm, engraving 0.4–0.6 mm. Minimum remaining floor 3.6 mm. Text (up to eight characters) and searchable original icons use this same real geometry conversion.

Art footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. All transformed vertices must stay within the 6.5 mm radius palm safe zone, far from the spindle and clutch. Replace/remove, reset image settings, center/reset transforms and built-in defaults are available.

## STL → integrated grip

Both complete ASCII and binary STL are supported, up to 2 MB / 1,500 triangles, dimensions 0.2–250 mm on every source axis. Select Z up, Y up or inverted Z before attaching. The oriented source dimensions, source mesh and format are shown; explicitly confirm millimeters because STL has no units. XY is proportionally scaled to the requested footprint and Z independently to a 0.6–5 mm grip height, then rotated/placed in the palm well and **solid-unioned** with it. It is not simply displayed/re-exported.

Checks reject invalid coordinates, degenerate faces, open/nonmanifold or inconsistent winding, disconnected/inward components, self-intersections, unsupported concavities, slender transformed grips, and insufficient flat bed contact. Supported integration is deliberately restricted to a convex solid with a broad flat base and no unsupported XY overhang. Concavities are rejected explicitly, never replaced by a hull. No automatic repair is claimed. Up-axis changes clear the source and request reattachment. Round trips revalidate saved mesh payloads. Original personal files are never saved to this repository or sent off-device.

## Export and printing

Preview and download share the exact validated worker result; a current-state key, generation ID and import/conversion guards prevent stale export. Each part downloads as binary STL; Everything is a separated bed-flat STL plate or a ZIP with all three part STLs plus assembly notes. STL does not store preview colors or units. No fake 3MF.

Print PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls and 20–35% infill. Broad flat faces down; dog projections and through-slots face upward. Deburr spindle, bore and slots; remove elephant foot. Print **Gentle Start** first as the full-size calibration coupon. Clearance is a starting point, not universal. Fit depends on printer, material and slicer. Do not scale parts independently in a slicer. Drop lower wheel onto spindle dogs up, align upper slots, then lower gently. Do not force between indexes. Pinch the upper rim to withdraw. Hold level and catch loose parts; not for children.

## Verification

`npm test` independently parses serialized float32 binary STL, welds at 0.00001 mm, checks exact byte length, finite coordinates, unit normals, nonzero faces, opposite-oriented two-face edge incidence, each connected component's positive enclosed volume and expected millimeter bounds. Every part and combined plate is checked.

Mechanism tests are separate: robust solid intersections sample the entire withdrawal, shared rotations, a full independent upper-wheel revolution when disengaged, vertical removal and separated plate layout. Deliberate misindexing is checked to collide with dog flanks (a positive stop, not an authorized assembly pose). Analytical checks cover bore/slot gaps, engagement, wall thickness, guidance and imported-geometry isolation. All presets, 64 parameter corners, and image/STL-derived outputs at preset/min/max settings are exercised.

`npm run test:browser` serves the actual production bundle at its real base path. Playwright uses actual file pickers and downloaded STL/ZIP/JSON, compares downloads to regenerated saved state and the preview signature, checks PNG/JPEG/ASCII/binary and invalid inputs, threshold/depth/transform changes, replace/remove/reset, all presets, icons/text/SVG holes, views, saved designs, undo/redo, worker failure/stale edits, theme/focus, 320/390 px touch orbit and pinch, and reachable exports. Reports and screenshots are stored beside the app. Root gallery and staged monorepo tests run separately.

**No physical print testing, force/torque, wear, fatigue, friction or durability measurements have been performed.** Computational geometry checks do not establish real-world print fit or safety.
