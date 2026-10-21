# Orbit Pebble

A React + Vite browser parametric STL generator for a **ball-and-socket thumb swivel**. Hold the cup and trace small circles on a raised thumb pad. A single spherical bearing allows tilt in any direction and stem-axis rotation, unlike the collection's earlier pinned gimbal, cylindrical slider and hinge mechanisms. Three separately printed, hand-assembled solids: socket cup, ball-thumb, retaining collar. **No physical print or durability test has been performed.**

## Run and export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app deploy scripts are present, but publishing is through the repository root combined-site deploy. Dependencies are React / React DOM, Vite, Three.js / OrbitControls, Manifold WASM CSG, gh-pages and Playwright (tests). All runtime dependencies including WASM are bundled locally, without CDN imports, APIs, keys, paid services or user-file uploads.

The final print-layout preview and binary STL export use the identical final mesh buffers. Assembly view only changes rigid-body poses. Download the three disjoint parts together or individually. Numeric bounds show export XYZ dimensions in millimeters; assembled envelope is the upright design envelope. STL has no unit metadata. Preview provides touch/mouse orbit, pinch/scroll zoom, zoom buttons, fit-to-view and upright/left/right assembly poses.

## Image workflow

Desktop/phone file picker and drag-and-drop accept actual PNG and JPEG content, up to 2 MB, 12 megapixels, 6,000 pixels per side. Header dimensions are checked before decoding; transparency composites onto white. Choose contain or cover/crop, with X/Y crop shifts ±25%.

Images are sampled onto a bounded **20 × 20 luminance height grid** using 0.2126R + 0.7152G + 0.0722B. Threshold mode raises samples below threshold (1–254) by the selected depth; grayscale mode uses depth × (1 − luminance/255). Depth is 0.4–3 mm. Adjacent grid samples make a triangulated height field over a continuous 0.4 mm backing, closed with sides and a bottom. This is **2D-to-relief / sampled raised-silhouette conversion, not full 3D reconstruction from one photograph**. Source and exact grid previews are visible; empty reliefs are rejected. Small image details are bounded by grid and nozzle resolution.

The relief is sunk 0.15 mm into the top thumb pad and Boolean-unioned into the ball-thumb solid. Changed pixels, threshold, depth, footprint, Z rotation and placement affect the actual exported solid, not a texture. Replace/remove, reset image settings, reset transforms and built-in oval-grip defaults are available.

## STL workflow and deliberate limits

Binary and ASCII .stl: up to 2 MB / 1,500 triangles; every original dimension must be 0.2–250 mm. The source preview reports dimensions, triangle count and format. Explicit confirmation that source coordinates represent **millimeters** gates integration. STL contains no unit metadata.

Only one **convex, closed, outward-wound solid with a broad flat bottom** is supported. All XY projections must lie inside its bottom footprint, with flat contact area at least 25% of bounding footprint. Reorient a broad bottom down in Z before import. Concave, hollow, disconnected, overhanging, self-intersecting, open and nonmanifold inputs are rejected with actionable guidance; there is no arbitrary-mesh repair claim.

Preflight checks content, bounded finite coordinates, nonzero faces, 1e-5 mm vertex welding, two oppositely directed incidents per edge, connectedness, positive volume, pairwise triangle intersections, convexity and bottom projection. Parsing / CSG execute in a local worker. Generation is bounded and reports modeling/checking status; errors remain recoverable and disable invalid export.

XY fits proportionally to a 4–7 mm footprint, Z independently to 0.6–5 mm height. Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. Center/reset restores transforms. Fitted minimum XY span is 1.2 mm. All transformed image/mesh vertices must stay within the **6.5 mm radius** safe zone centered on the 7 mm-radius thumb pad. Invalid combinations are blocked rather than clipped silently. The source is sunk into the pad and robustly unioned; exactly one connected valid solid must result. Nothing modifies the spherical bearing, retention interface or moving clearance.

## Parameters and mechanism

All lengths below are millimeters, angles degrees.

| Parameter | Range |
|---|---|
| Ball diameter | 22–28 |
| Stem extension | 6–10 |
| Thumb pad thickness | 2–4 |
| Spherical running clearance | 0.25–0.50 |
| Socket wall allowance | 3–5 |
| 24 palm groove depth | 0–0.5 |
| Collar radial allowance | −0.08 to +0.04 |

Let ball radius be R. Socket center Z = R + 3; cup top T = Z + 0.30R; cup outer radius = R + wall allowance + 2. The spherical cavity radius is R + clearance. The minimum floor is 3 − clearance (at least 2.5). The annular seat has at least 1.46 mm of outer wall after palm grooves (2 − collar allowance − groove depth), at least 1.2 mm collar lip radial width (wall allowance − 1.8), and at least 1.3 mm of inner wall to the spherical cavity. Stem diameter 6; thumb pad diameter 14, with a 45° transition from the stem. The ball's circular faceting is bounded at 96 segments. A 3 mm collar flange and 2 mm downward annular locating lip seat in an annular cup recess, clear of the spherical cavity. Its curved opening matches the bearing clearance and has a minimum central cylindrical relief of 0.7R. The collar throat passes the thumb pad but is smaller than the ball: analytically verified throughout the parameter range. It retains the ball only while its press-fit seat remains secure.

Supported preview / usage tilt is **±15°** in any direction. The socket has no hard stop calibrated to 15°; do not force or lever past that range. Ball/cup and ball/collar intersections are tested digitally at 40 representative poses (5 tilt angles × 8 azimuths). Ball axial rotation is also kinematically permitted by the spherical bearing. The stationary collar/cup mating surfaces intentionally have a press-fit allowance, and are not a fused body. No elastic or compliant parts.

FDM presets are starting points, **not universal fits**. Print a full-size ball and cup first as the fit trial; remove supports / deburr and tune clearance until gentle tilts are free without excessive rattle. Then print the collar: −0.03 allowance means 0.06 diametral interference in its annular seat. Positive allowance can be loose; do not use a loose collar. Tune in small steps; never force a binding fit. Collar pull-out force and friction require a real print, not just a manifold mesh.

## Printing and assembly

- Cup base down; collar flange down, lip up, as exported: no supports needed.
- **Ball-thumb requires supports beneath its lower spherical hemisphere.** Use build-plate-only organic supports, around 0.2 mm interface Z gap; remove carefully, then smooth high spots without reshaping the bearing. A tangent sphere is not a stable support-free bed contact.
- PLA or PETG, 0.4 mm nozzle, 0.16–0.2 mm layers, four walls and 25% infill are starting recommendations. Support settings and finish affect clearance.
- Drop the deburred ball into the cup. Slide the collar over the thumb pad, locating lip down, and press into the annular seat. Check firm retention and smooth gentle tilting before use. Pull the collar to disassemble. No bearings, magnets, fasteners, glue or other hardware.
- Small removable parts and pinch points: not a child-safe product. No physical friction, wear, strength, retention-force or durability tests have been performed.

## Validation

`npm test` / `validate.mjs` writes `geometry-validation.json`: defaults, minimum, maximum and all 128 range corners (131 parameter cases), plus threshold/grayscale image and ASCII/binary STL sources at default/min/max (12 import cases). Exported STL is reparsed to verify finite coordinates, nondegenerate faces, normalized consistent normals, exactly two incident triangles per welded edge, consistent winding, positive volume for **each** of three connected components, and millimeter bounds. Each imported-output part is additionally checked independently. Manifold CSG validates each connected solid. Print layouts must be disjoint. Analytic floor, clearance, assembly-pass-through and retention inequalities supplement 40-pose solid-intersection checks on defaults/min/max and all imported cases. Sampling is evidence for the documented range, not a claim of a physically tested mechanism.

`browser-test.cjs` uses real PNG/JPEG and ASCII/binary STL file inputs, downloads and parses actual binary STL, compares pixel/conversion/transform changes against no-import geometry, and checks exact preview/export fingerprints and UI dimensions. It exercises replace/remove/reset, individual part downloads, invalid/truncated/open/nonmanifold/concave/excessive input, empty silhouettes, invalid dimensions/transforms/safe-zone placement, min/max settings, 390/320 px phone layouts, touch orbit, pinch zoom and phone downloads. `extra-browser.cjs` covers sample buttons, drag-and-drop and assembly preview; `gallery-test.cjs` covers inline script compilation, unique correct new entry, preserved earlier entries, STL category ordering and runtime/search. Production build is also browser-tested.

Digital verification and manifold meshes do **not** establish physical printability on every printer or validate support finish, tactile quality, collar holding force or durability. No physical print has been performed.

## Fixtures and privacy

`public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are synthetic locally generated fixtures reused from this repository's earlier studios. They contain no personal or third-party imagery, require no external attribution, and are available through sample buttons and download links. User files remain only in browser memory; no uploads, external services, persistence, analytics or personal repository fixtures.
