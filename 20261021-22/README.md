# Roller Ferry

A browser-based React + Vite parametric fidget STL studio. A captive barrel has a **cylindrical joint**: independent continuous spin and finite axial sliding on a headed spindle. This differs from the earlier dovetail shuttle, rotating race and free palm roller. Three separately printed, hardware-free parts: headed spindle, rolling barrel and friction-fit retaining cap. This design has not been physically printed or tested.

## Run / export

`npm install`, `npm run dev`; `npm test` checks geometry; `npm run predeploy` builds. Per-app `npm run deploy` exists as requested, but public releases use the repository root combined-site deploy. All geometry, preview, import parsing and binary STL writing run locally. No API, account, paid service, CDN or uploads. Dependencies: React, React DOM, Vite, Three.js + OrbitControls, Manifold WASM robust CSG; gh-pages for publishing; Playwright for verification. WASM and JS ship with the app.

The final Three.js print-layout preview and exporter share the exact same final vertex/index buffers. The assembly view changes only rigid-body placement. Download all three nonintersecting print-layout parts or any individual part. All dimensions are millimeters; rotation is degrees. STL itself contains no units. The UI reports assembled and exported XYZ envelopes.

## Real image import

File picker works on phones and desktops; drop one file into the source card on desktop. Actual PNG and JPEG signatures/dimensions are checked before decoding. Limit 2 MB, 12 megapixels and 6,000 pixels per side. Transparent pixels composite onto white. Choose contain or cover/crop and XY crop shifts ±25%. The image is sampled at a bounded **20 × 20 luminance grid**, using 0.2126R + 0.7152G + 0.0722B. Threshold mode maps values below the selected threshold (1–254) to depth; other samples to zero. Grayscale mode maps darkness continuously to depth. Relief depth is 0.4–3 mm. Adjacent grid samples form a triangulated height field over a continuous 0.4 mm backing, with closed side and bottom faces. This is a sampled 2D silhouette/relief conversion, **not automatic full-3D reconstruction from one photograph**. Very small image features are limited by the grid and nozzle.

The resulting solid is sunk 0.15 mm into the barrel shoulder, then genuinely Boolean-unioned using Manifold. Changing pixels, threshold, depth, footprint, rotation or placement changes the exported barrel. Source and exact conversion grid are visible. Empty conversions disable export. Replace/remove, reset conversion, reset transforms and return to built-in raised oval are supported.

## Real STL import

ASCII and binary STL are supported: 2 MB, 1,500 triangles maximum, each dimension 0.2–250 mm. The source preview shows the parsed mesh, dimensions and triangle count. Explicit confirmation of **millimeter source coordinates** is mandatory; STL has no unit metadata. Reorient a broad flat base down Z in your modeler first. This intentionally bounded importer accepts only one convex, closed, consistently outward-wound, positive-volume solid whose entire XY projection lies inside its broad flat bottom (at least 25% of bounding footprint). Concave, hollow, disconnected, thin-branch, overhanging, self-intersecting, open and nonmanifold meshes are rejected with guidance. There is no arbitrary-mesh repair claim or repair path.

Preflight checks finite and bounded coordinates, dimensions, nonzero triangles, 1e-5 mm vertex welding, exactly two opposite-directed incidents per edge, connectedness, positive volume, pairwise triangle intersections, convexity and flat-bottom projection. Heavy parsing/modeling runs in a local worker. Invalid imports or impossible placement disable export; replacing/removing is always available.

XY scales proportionally to a 4–7 mm footprint; Z scales independently to a 0.6–5 mm grip height. Rotate Z ±180°, offset X ±1.5 mm and Y ±2 mm relative to the shoulder center at `(barrel radius − 4, 0)`. Reset centers and restores fitted size. Minimum fitted XY span is 1.2 mm. Image and mesh geometry must remain inside the barrel radius minus 0.6 mm, outside an 8 mm radial exclusion zone, and within ±6.5 mm of the shoulder center. These checks happen on the transformed geometry before CSG. Union must yield exactly one closed connected barrel solid. No interpenetrating shells are exported as a union, and nothing is added to the moving bearing or shaft.

## Parameters / mechanical contract

| Control | Range, mm unless noted |
|---|---|
| Barrel diameter | 36–44 |
| Spindle length | 34–48 |
| Barrel height | 8–12 |
| Radial / axial running clearance | 0.25–0.50 |
| Flange radial overhang | 2–4 |
| 24 side-groove depth | 0–0.5 |
| Cap peg radial allowance | −0.08 to +0.04 |

Shaft diameter 6 mm. Barrel bore diameter = 6 + 2 × clearance. Axial travel = spindle length − barrel height − 2 × clearance. Base floor 3 mm; shaft tip bore radius 1.5 mm leaves 1.5 mm radial wall. Cap radius 7 mm gives at least 3.5 mm retention overlap at the sleeve bore. Cap peg is 5 mm long and its radius = 1.5 − allowance; bore depth is 5 mm at the shaft tip. The cap and shaft have an intentional press-fit mating interface, not a fused export. No compliant parts, universal tolerance promises or physical retention-force claims.

Three fit presets and reset are provided. First print the barrel and spindle as a full-size fit coupon; tune clearance until the sleeve both rotates and slides freely. Print/test the cap next. Default −0.03 mm allowance is 0.06 mm diametral interference. Positive allowance may fall out: reject any loose cap. Never force parts together.

## Printing and assembly

Print as exported: flange down, barrel bore upright, cap head down. Vertical walls and accepted inward-tapering grips need no supports. PLA or PETG; 0.4 mm nozzle, 0.16–0.2 mm layers, four perimeters, 25% infill. Control elephant-foot at the bore. Slide barrel over shaft; flip cap and press peg into shaft bore. Check secure retention and free motion before use; pull cap gently for disassembly. No hardware or glue required. Small removable part and pinch points: not a child-safe product.

## Verification and limits

`validate.mjs` writes `geometry-validation.json`: default, minimum, maximum and all 128 parameter-range corners; synthetic image threshold/relief and ASCII/binary STL imports at default/min/max. Every STL is parsed to verify finite coordinates, nondegenerate triangles, normalized consistent outward normals, welded closed edges (two faces), positive enclosed volume for each component and millimeter bounding dimensions. Imported outputs additionally check all parts separately. Manifold performs valid solid union/subtraction and validates one connected solid per part. Layout bounding boxes must be disjoint. A 36-pose (three travel positions × twelve rotation angles) Manifold intersection test verifies the barrel does not intersect either spindle or cap on default/min/max and every import case; designed stationary press-fit interference is excluded. Analytic clearance, wall and retention checks supplement sampled positions.

`browser-test.cjs` exercises real file-picker PNG/JPEG/ASCII/binary imports, actual downloaded STLs, comparison with built-in and changed thresholds/depth/transforms, exact preview/export fingerprints, replace/remove/reset, individual parts, invalid/truncated/nonmanifold/concave/excessive inputs, empty images and transforms, protected placement, minimum/maximum settings, 390/320 px layouts, touch orbit and pinch zoom and phone exports. Samples/drop and gallery tests have separate reports. Production build is tested too. Digital verification does not establish physical friction, strength, retention force, wear or durability. No physical print test has been performed.

## Fixtures and privacy

`public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are synthetic local test fixtures from this repository's earlier import studio, reused here; no third-party imagery, attribution obligations or personal data. Each can be tried or downloaded in the UI. Personal input files stay in memory on the user's device and are never stored in this repository, uploaded, or sent to another service.
