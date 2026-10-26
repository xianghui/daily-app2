# Toggle Dwell

A local-only React/Vite maker studio for an **eight-part, spring-biased over-center knee-toggle fidget**. Two equal rigid links move a guided slider against a removable TPU compression ring. Gently push the knee through straight dead center and into the opposite ±30° dwell. The slider's left stop bounds both dwell positions. Unlike a crank-slider, this is a bounded, spring-biased two-dwell interaction, not continuous rotation.

**Experimental printable design; no physical print, snap-force, friction, strength, fatigue or retention tests have been performed.** Geometric checks do not establish how a particular TPU/printer combination will feel. This is a low-force fidget, not a functional clamp. Small parts and pinch points: not for children.

## Studio

- Keycap Studio-inspired lavender-grey desk, 374 px left control rail, white panels, coral raised/pressed controls, locally bundled Fredoka/Rubik, saved dark theme and reduced-motion support.
- Preview-first phone layout, touch orbit/pinch, zoom/fit, assembled/exploded/print plate and isolated-part views; see-through stationary base.
- Three real preset thumbnails, round/hex/oval palm profiles, bounded variations, paired millimeter sliders/numeric inputs, text and six searchable bundled vector marks.
- Undo/redo, six locally named designs and portable JSON save/open. Normalized images and bounded STL vertex payloads are embedded, not omitted. Missing image payloads explicitly require reattachment. Local-storage failure is recoverable with JSON export.
- Debounced Manifold WASM worker with generation identifiers and current-state export gating. Invalid input may leave a visibly labelled last-good preview, but **cannot export** it. Abort/reload tests cover worker loading failure.

## Run and export

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds the production app at `/daily-app2/20261026-26/`. `npm test` runs independent mesh/mechanism checks. `node serve-production.cjs` serves the production bundle on localhost:5366. Run `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs`, `node additional-test.cjs`, `node hole-test.cjs`, and `node stale-import-test.cjs` against that server. These tests use synthetic fixtures only.

Export individual **binary STL** parts, a separated print-plate STL or an **Everything ZIP** containing eight STL files and assembly notes. STL has no unit metadata, preview colours or material assignments. Split a combined STL in the slicer, or use per-part files; print the TPU part separately. Preview/export share identical final validated geometry; only assembled positioning and spring envelope deformation are preview-only. The UI reports the selected export's X/Y/Z dimensions in mm.

The per-app `deploy` command is provided as required, but this app is published through the **root monorepo** `npm run predeploy` / `npm run deploy`, preserving all earlier apps.

## Image → geometry

PNG, JPEG and simple SVG are accepted through file picker, drag/drop and synthetic sample buttons. All processing stays in the browser; no APIs, CDN imports, API keys or uploads. Network access is only for bundled static app assets/sample fixtures.

Raster limits: **2 MB, 12 megapixels, 6,000 px per side**, checked from PNG/JPEG headers before decoding. The decoded dimensions must match. Images normalize to a maximum 500 px side for portable storage, then sample into an exact **20×20** luminance grid. Fit/cover and crop offsets ±25% affect the sampled image. Transparent pixels are composited over the selected light/dark background. Threshold 1–254 generates binary relief heights; grayscale mode uses `depth × (1 − luminance/255)`. Light/dark background inversion, threshold, physical footprint, rotation, placement and depth all change the solid. Source and exact sampled cutout are shown on a checkerboard.

Grid points form a triangulated height surface with a 0.4 mm backing and closed sides/bottom. Manifold union integrates raised relief into the palm recess; reflected/subtracted relief creates engraving. Bright ring interiors remain unraised/unengraved over the continuous palm backing, verified with geometric probes. This is **2D-to-relief/silhouette conversion, not automatic full-3D reconstruction from one photo**, nor exact vector-outline tracing. Sampling bounds fine detail; bold high-contrast artwork works best.

Raised depth: 0.4–3 mm; engraved depth: 0.4–0.6 mm. The 4 mm palm has a 0.8 mm recess, so engraving retains at least **2.6 mm** floor. Simple SVG shapes/paths rasterize locally to 256 px; scripts, external references, text, effects, >2,000 elements and oversized dimensions are rejected. Text and bundled icons use the same tested relief path. All samples and the six path-based marks are synthetic/original fixtures reused from this collection; no personal uploads are included. Fredoka and Rubik are bundled via Fontsource under SIL OFL.

## STL → integrated grip

ASCII and binary `.stl`, **2 MB / 1,500 triangles**, one connected outward-wound watertight solid; each source axis 0.2–250 mm. Choose Z-up, Y-up (+90° X) or upside-down before attaching. Source preview reports oriented source dimensions, format and triangle count. Explicitly confirm **millimeters** because STL does not encode units. Changing up axis requests reattachment rather than pretending an old transform was applied.

Parser checks finite coordinates, triangle area, 0.00001 mm welding, edge incidence and opposite directions, connectedness, positive volume, triangle intersections, convexity, broad flat bottom (≥25% XY bounding area), and no XY overhang outside the bottom footprint. **Concave, hollow, branched, disconnected, open/nonmanifold, inward-wound and unsupported meshes are rejected with guidance. No convex-hull substitution, arbitrary repair or discarded concavities.** The convexity/flat-base contract is deliberately limited, but integrates the actual original accepted mesh.

XY scales proportionally to a 4–7 mm footprint, while Z independently maps to a 0.6–5 mm grip height. The resulting minimum XY thickness must be ≥1.2 mm. Z rotation ±180°, X ±1.5 mm, Y ±2 mm, center/reset, replace/remove and return to defaults are available. The transformed solid must remain inside a 6.5 mm radial palm keep-out boundary and unions 0.15 mm into its floor. A connected-component check prevents a floating import from becoming a purported fused body. The palm sits 30 mm behind the fixed pivot, maintaining at least 19.3 mm isolation from the moving-link envelope. Default/imported outputs are compared bytewise and tested using the same mesh and mechanical checks.

## Parameters — millimeters unless stated

| Parameter | Supported range |
| --- | --- |
| Palm diameter | 22–28 |
| Each equal toggle link length | 17–20 |
| TPU compression-ring wall | 1.2–1.6 |
| Link thickness | 3–4 |
| Axial / slider-lane clearance | 0.3–0.6 |
| Pivot radial clearance | 0.25–0.45 |
| Friction-cap radial fit | −0.06 to +0.06 |
| Palm dimple depth | 0–0.6 |
| Knee preview angle | −30° to +30° |

Spring free envelope is 30×14×3 mm with two 2×8 mm flat end pads. A 0.8 mm preload is applied at each dwell. Slider travel is `2L(1 − cos30°)`, 4.56–5.36 mm, so maximum geometric spring shortening is below 21% of free length. **This is not a material-strain/force prediction.** The assembled spring uses an explicitly labelled scaled envelope (X shortening, estimated Y expansion), not a flexural simulation; all exports contain its actual undeformed closed geometry. Its 24 mm bay leaves geometric envelope room for expansion. Minimum slider guide engagement is >2.6 mm even at dead center. Geometric checks establish a maximum in a qualitative positive-stiffness spring-energy proxy at dead center, not calibrated snap force or real-world bistability.

## Printing, calibration, assembly and release

Eight bed-flat solids, intended support-free and hardware-free. Print **only the spring in TPU 95A**, with at least three extrusion lines at the selected 1.2–1.6 mm wall; do not use brittle PLA/PETG for the spring. Print the other seven parts in PLA/PETG with pins up, 0.4 mm nozzle, 0.16–0.20 mm layers, 3–4 walls; slow small pins and use a brim if needed. No bridges are needed over the open spring bay. For a hardware-free single-rigid-material alternative, omit the spring and hand-guide the freely folding toggle; this deliberately removes spring bias.

Use the full-size **Gentle Start** preset as a calibration set before the final design. Tolerances depend on printer, material and slicer, not universal claims. Caps have 2.4 mm blind sockets and 1 mm roofs. Positive/zero cap fit is calibration-only and may be loose; the UI warns explicitly. Adjust and reprint until caps hold securely without splitting and links move freely.

1. Seat the slider between the short guide cheeks, flat face down.
2. Put lower link on the fixed O pin with its knee pin up.
3. Put upper link over the knee and slider pins; fit O/knee/slider caps to their socket roofs, without squeezing moving links.
4. Gently compress the TPU ring into its open bay, with broad end pads facing slider/end wall. It is intentionally lift-out, not captive.
5. Nudge the knee in-plane between dwell stops. Do not force or overcompress. Stop if the ring lifts, binds, cracks or fails to recover.
6. **Release:** hold the slider at a dwell stop, remove knee/slider caps, lift the upper link straight up, then lift out the ring. Remove O cap/lower link, then slider. Removing the upper link first clears the spring's vertical path.

The linkage, not the spring, retains the slider through three calibrated caps. Removing a cap defeats retention. Do not assume a loose fit is functional.

## Dependencies and verification

React/Vite, Three.js/OrbitControls, `manifold-3d` WASM, `fflate`, locally bundled Fontsource fonts; Playwright for tests and `gh-pages` for the required deployment scripts. No remote generation dependencies.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Independent STL checks validate exact binary length, finite nondegenerate triangles, normals, millimeter bounds, welded two-opposite-face edge incidence, positive volume per connected component and intended component counts. Separate CSG tests cover representative full-stroke poses, guide stops, cap interference confined to pin sockets, reverse assembly, separate print layout, and imported-geometry isolation. Contact volumes below 0.0001 mm³ are treated as float32 boundary-rounding noise; no material penetration of meaningful scale is allowed. Every current build also runs closed-manifold/winding checks on both original and float32-translated plate geometry.

Computational geometry checks do **not** replace real print fit, physical flexure deformation, contact force, fatigue, friction, safety or retention testing. None of those physical tests are claimed.
