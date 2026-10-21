# Helix Tide — barrel-cam fidget studio

A React + Vite browser-based parametric STL editor for a **twist-and-rise barrel cam**. A thumb collar follows a closed helical groove via a printed radial follower. A nominal half-turn produces 5–9 mm of lift; reversing lowers it. This is a coupled rotary/axial cam, not a free slider, screw thread or eccentric radial cam. Three separately printable, hardware-free parts: barrel/base, thumb collar and headed follower. No external APIs, accounts, paid services or CDN dependencies.

## Studio

Large Three.js live model, orbit/pinch/zoom/fit, matte preview palette, millimeter export dimensions, assembled-motion and nonintersecting print-layout views, selectable parts, parameter rail and phone tabs with a fixed export bar. Three actual model-thumbnail presets (Pebble, Long rise, Pocket), bounded variations, real palm grooves, undo/redo, portable local JSON save/open, combined binary STL, individual-part STL and ZIP with assembly notes. Preview colours are not encoded in STL. Preview and exports share exactly the final worker-generated triangle data; the pose slider is an assembly illustration, never an export pose.

## Imports — local only

File picker on desktop/phones and drag/drop. Replace/remove/reset and center/transform controls are provided. Samples in `public/samples` are synthetic original Daily Object Lab fixtures, reused from the local collection with no third-party or personal assets: mark.png, waves.jpg, a flat-bottom ASCII wedge and a binary hexagonal frustum. Sample buttons fetch only these bundled files. User files are never uploaded, added to the repository or sent to services.

**PNG/JPEG → relief**: header dimension preflight, native local decoding, normalize to a portable ≤500 px preview (also used on reopening), composite transparency onto white, contain/cover and ±25% crop shifts, sample to a **20 × 20 luminance grid** (0.2126R + 0.7152G + 0.0722B). Threshold mode maps values below the 1–254 threshold to the selected depth, others to zero; grayscale mode maps darkness continuously to depth. A triangulated height field sits on a closed 0.4 mm backing, embedded 0.15 mm into the outer collar pad and robustly Boolean-unioned. Sample spacing is footprint/19 mm. Raised silhouette edges are linearly triangulated, not vector traced. Source and exact conversion previews are shown. Relief depth 0.4–3 mm; physical footprint 4–7 mm. This is **2D-to-relief**, not 3D reconstruction from one photograph. Empty relief is rejected.

**ASCII/binary STL → grip**: preflight validates full content, triangle count, finite vertices, bounds, nondegenerate triangles, welded edge incidence/winding, connectedness, positive volume, pairwise triangle intersection and convexity. For reliable supported integration, only one convex solid with a broad flat Z-bottom, no XY projection beyond that footprint, and no cavities is accepted. No mesh repair is claimed or performed. Reorient, simplify, close or make a convex grip in a modeler if rejected. STL has **no unit metadata**: explicit millimeter confirmation gates integration/export. Source dimensions and interactive preview are shown. XY is proportionally fitted to a 4–7 mm maximum footprint (both fitted spans must be ≥1.2 mm); Z is independently fitted to 0.6–5 mm. Rotate about Z ±180°, offset X ±1.5 mm and Y ±2 mm or reset to center. Safe-zone validation requires every transformed vertex to remain within a radius of 6.5 mm around the outboard pad center. The transformed mesh is embedded 0.15 mm then Boolean-unioned into the collar, measurably changing its exported solid. Tilt is intentionally unsupported.

Limits before expensive processing: **2 MB/file**, images ≤12 MP and ≤6,000 px/side, STL ≤1,500 triangles, 0.2–250 mm per source axis, coordinate magnitude ≤10,000 mm. Parsing and CSG run in a worker; decoding/conversion uses bounded browser canvas. Errors remain recoverable and disable exports, as do pending model edits and unconfirmed units. JSON files are ≤2 MB and explicitly include bounded imported mesh/pixel/source-preview payloads, not an absent-file placeholder. Reopened meshes are revalidated.

## Parameter ranges

All lengths are **millimeters**; rotations are degrees.

| Parameter | Range |
|---|---|
| Barrel diameter | 20–26 |
| Axial travel over nominal 180° | 5–9 |
| Collar height | 8–10 |
| Running radial clearance | 0.25–0.50 |
| Palm radius | 20–23 |
| Palm groove depth | 0–0.5 |
| Follower radial allowance | −0.08 to −0.01 |

The barrel has a solid ≥7.5 mm core radius. Palm floor 4 mm; collar radial wall 4 mm. No flexible beams. The groove is a closed parametric radial band 2.5 mm deep, with a 100-step angular discretization and sloping walls. Its vertical half-width compensates for the cam slope at the smallest groove radius plus a 0.05 mm chord allowance. Closed radial end walls extend ~10° beyond each nominal stroke end to provide run-out pockets. The 3 mm nose engages the groove by 1.65 mm with 0.85 mm core clearance. The 4 mm shaft seats with adjustable interference in the collar, while the broader head limits insertion. Imported grips are on the opposite outboard pad and cannot reach the cam interface. The collar slides freely over the barrel before the pin is inserted. Inserting the nose into the closed groove retains it axially; retention depends on the pin staying seated.

## Printing and assembly

1. Export separated layout or ZIP. Do **not** print the assembled view. Every part is bed-down; follower prints head-down. Confirm dimensions in a millimeter-configured slicer.
2. PLA or PETG, 0.4 mm nozzle, 0.16–0.2 mm layers, four walls, ~25% infill are starting settings, not tested guarantees. The groove has a 2.5 mm radial roof overhang; inspect for sag and use removable accessible supports if needed. The collar's horizontal 4 mm bore requires a short bridge. Clear all debris/supports from the track and bearing surfaces.
3. Use a first full set as the **calibration trial**: the collar must slide smoothly on the barrel before pin insertion. Inspect the groove with the loose pin. Adjust clearance and follower allowance to suit the printer/material. Do not hammer a tight pin or enlarge a retention bore casually.
4. Slide collar down over barrel, align the follower bore with the lower end of the groove, then press the pin until its head seats outside. Narrow nose enters groove. Gently turn through the nominal half-turn and return. Do not force the stops. Stop using if the pin loosens.

No hardware, bearings, magnets, fasteners or glue. No physical prints or force/durability/feel/retention-force tests have been performed. Numerical clearance and manifold checks are not evidence of a successful physical print. Small removable pin and pinch interfaces are inherent to this prototype.

## Development and validation

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public deployment uses the **root monorepo** `predeploy` / `deploy` flow, with base `/daily-app2/20261021-25/`.

Dependencies: React/React DOM, Vite/plugin-react, Three.js/OrbitControls, Manifold WASM for solid operations, fflate for ZIP, gh-pages; Playwright for browser validation. All generation/runtime dependencies are bundled locally.

`validate.mjs` validates all 128 min/max parameter corners plus defaults, extrema, three presets and five representative variations (139 parameter cases), plus threshold/grayscale and ASCII/binary derived grips at default/min/max (12 import cases). Every STL is parsed again to verify finite coordinates, normalized normals, nondegenerate faces, welded closed edge incidence at 1e-5 mm, consistent neighboring winding, positive enclosed volume per component, exactly three separated components or one for individual parts, and expected bounding dimensions. Each printable part is checked individually. Mechanism validation checks wall/core dimensions, radial/axial clearances, end-stop margins, pin engagement and disjoint print-layout bounds. Exact Boolean solid intersection checks sample 25 positions from 0–180° for all non-press-fit pairs. The single intentionally interfering collar/shaft pair is excluded; running pin/barrel and collar/barrel pairs must be collision-free. Manifold CSG constructs solids rather than exporting intersecting visual shells.

`browser-test.cjs` exercises actual file-picker PNG/JPEG/ASCII/binary imports, exported binary downloads and geometry signatures, threshold/depth/pixel-source/scale/placement changes, replace/remove/reset, invalid and truncated files, empty silhouettes, excessive bytes/pixels/triangles/dimensions, open/nonmanifold and concave meshes, unsafe placement, individual STL, min/max controls, phone 320/390 px layouts, touch orbit/pinch and real phone imports/downloads. `extra-browser.cjs` covers preset/variation exports, undo/redo, all four portable import save/open round trips, ZIP contents, preview-colour neutrality and drag/drop. Browser requests are checked to ensure no remote runtime dependencies. JSON reports and desktop/mobile screenshots record results; none claim physical print testing. `gallery-test.cjs` compiles every root inline script, checks unique newest entry/category/link, preserves all baseline entries and verifies gallery rendering/search without runtime errors.

`production-test.cjs` additionally checks built production worker/WASM execution, actual STL downloads, phone dimensions and exact portable round-trip of a synthetic 1001 × 701 PNG normalized to the saved preview; changing its relief depth changes the downloaded geometry.
