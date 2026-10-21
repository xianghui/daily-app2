# Cross Current — image / STL-customized two-axis fidget generator

Trace rectangles and loops with a thumb pad on **two perpendicular dovetail slides**. This is an orthogonal translation mechanism, distinct from a single-axis shuttle or rotating leaves. Seven parts: palm rail, cross carriage, thumb carriage, four friction-fit travel stops. No springs, magnets, fasteners or bearings.

## Development and deployment

React + Vite. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261021-21/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish the combined site using **root** predeploy/deploy. Locally bundled dependencies: React, Three.js + OrbitControls, manifold-3d WASM; Vite build tool, Playwright tests, gh-pages deployment. No CDN/API key/paid service. STL preflight and boolean geometry run in a browser worker; image rasterization is bounded to 400 samples.

## Local imports and supported subset

File picker on mobile and desktop, plus single-file drag/drop. All user file bytes stay in browser memory, never uploaded, persisted or added to this repository. Only synthetic original fixtures are bundled: `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`, original repository fixtures reused from Page Tide; no external artwork or personal files. Download or load them using the on-screen sample controls.

**PNG / JPEG:** real signatures and image headers checked before decoding; decoded dimensions must match. Maximum 2 MB, 12 megapixels, 6,000 px per side. Transparent pixels composite over white. Fit or center-crop, with ±25% X/Y pan. Rec.709 luminance samples a fixed 20×20 grid. Threshold (1–254) assigns dark samples depth and other samples zero. Grayscale relief assigns `depth × (1 − luminance/255)`. Depth 0.4–3 mm. A piecewise-linear triangulated height field has a continuous 0.4 mm backing and closed side/bottom surfaces; it is not an exact pixel-contour extrusion. Empty artwork is rejected. This is **2D-to-relief/silhouette conversion, not reconstruction of a complete 3D object from one photograph**. Source and conversion-grid previews are shown.

**Binary and ASCII STL:** 40 bytes–2 MB, ≤1,500 triangles, 0.2–250 mm on every axis, finite coordinates within ±10,000. STL has no units: source dimensions and a mesh preview are shown, and explicit **millimeter confirmation** is required. Only a single closed, outward-wound, connected **convex, broad flat-bottom solid** is supported. Bottom contact must be ≥25% of bounding XY area and contain all projected XY vertices. Open/nonmanifold, degenerate, self-intersecting, disconnected, concave, inverted, unsupported overhang or thin meshes are rejected with actionable messages. No arbitrary repair is attempted or claimed. Reorient, simplify and repair externally, then re-export if rejected.

STL XY scales proportionally to a 4–7 mm footprint; Z scales independently to 0.6–5 mm. Rotate about Z ±180°, translate X ±1.5 mm / Y ±2 mm, center/reset transforms, replace/remove imports or reset all to the built-in grip. Image footprint and placement use the same bounds. A fitted STL XY span under 1.2 mm is rejected. Every transformed vertex must stay within the upper pad's safe zone: ±(width/2 − 4) mm in X and ±8 mm in Y. Extreme width/rotation/placement combinations can be invalid; export is blocked with a clear safe-zone error.

Both paths sink the import 0.15 mm into the **thumb carriage only** and perform a robust Manifold boolean union. Every part must remain one connected solid. No overlapping shells are exported as a fake union. This changes the actual exported grip; it is not unchanged re-export. The thumb pad is above both dovetail tracks. Imports never enter a track or bridge moving interfaces. Pending/invalid inputs disable download rather than exporting stale geometry.

## Parameters and integration

All physical lengths in **millimeters**; rotation degrees. Defaults and ranges:

| Control | Range | Default |
|---|---|---|
| Thumb pad width | 18–24 | 22 |
| Palm rail length | 50–64 | 56 |
| Thumb pad thickness | 2.4–3.2 | 2.8 |
| Running clearance | 0.25–0.50 | 0.35 |
| Pad / palm corner radius | 2–4 | 4 |
| Side grip groove depth | 0–0.5 | 0.3 |
| Stop peg radial allowance | −0.08–+0.04 | −0.03 |

Finite supported ranges are enforced; preset fits are starting points, not universal printer tolerances. Palm rail is 30 mm wide × 8 mm high; its track floor is 3 mm, channel bottom width 10 mm, top mouth 6 mm, depth 5 mm. Lower carriage male length 14 mm and upper male length 12 mm. Cross plate is 24 × 40 × 8 mm; thumb plate has a 16 mm Y length. Male profile is inset by 1.5×clearance on each side and lifted clearance above its channel floor, giving normal sloping-face gap `1.1×clearance / sqrt(1.16)` (approximately 1.02×clearance). The plate bottom also clears the receiving rail top by clearance. Minimum retention lip overlap is `2−1.5×clearance`, at least 1.25 mm.

Lower stops are centered at X ±(rail length/2−4). Upper stops at Y ±16. Stop heads are radius 2.3 mm × 3 mm high, pegs radius `1.5−allowance` × 3 mm long. Bores radius 1.5 mm pass through the 3 mm channel floors. Default diametral interference 0.06 mm is intentional, excluding these **stationary** mating surfaces from moving collision checks. Positive allowance can be loose: only use if calibration proves retention. Replace loose pins; do not use the fidget without all four retained stops.

Travel X = ±(rail length/2−13.3) mm; Y = ±7.7 mm. Dovetail lips prevent vertical escape, heads prevent end escape. Contact limits have zero head clearance at the travel extremes, not penetrations. There are no intentionally flexible parts, so there is no compliant-wall promise. Imported surfaces are on the exposed top face, above all tracks and stops. Only that solid changes.

Print-layout and assembled full-travel envelope X/Y/Z are shown in mm. Preview uses the **same final geometry arrays** as the binary STL exporter. Export the seven-part layout or any individual part. Assembly preview positions are illustrative; exports remain separated, bed-oriented solids. Orbit/zoom with touch or mouse, zoom buttons and Fit view.

## Printing and calibration

**Localized supports are needed under both carriage pad wings** (approximately 2–16 mm horizontal overhang depending on axis). Exported orientation: rail floor down, carriages male face down, stop head down/peg up. Do not generate support on the sloping running faces. Remove supports completely and inspect the flat bearing surfaces. The inward-sloping female walls are 68° above the bed and do not need overhead bridges. Imported relief remains upward and support-free within the accepted source subset. A support-free whole-mechanism claim is intentionally not made.

PLA/PETG, 0.4 mm nozzle, 0.16–0.2 mm layers, four walls, 30% infill. Inspect slicer toolpaths for all thin details. First export and print the palm rail, cross carriage and **one** stop as a full-scale fit trial; no separate miniature coupon is required. Check smooth travel and pin retention gently, then print the upper carriage and remaining stops. Increase clearance if binding; increase peg allowance if too tight, decrease if too loose. Printer/material, elephant-foot and support-removal quality influence fits.

Deburr without thinning the dovetail lips. Slide the cross carriage into the open palm-rail end, then the thumb carriage into the perpendicular track. Flip the four printed stops and insert their pegs from above into the channel floor bores. Heads remain inside tracks, touching the floor. Install both end stops on both axes. Pull stops gently for disassembly. No hardware/glue. Hold the rail; thumb the pad along either axis or combine axes into loops. Avoid slamming stops and keep fingers away from closing gaps. Small removable parts: not a child-safe product.

## Validation performed

`npm test` writes geometry-validation.json. **131 parameter cases** (default/min/max and all 128 range corners), plus **12 imported-output cases** (threshold image, grayscale relief, ASCII STL, binary STL at default/min/max). Parse exported binary STL and verify exact length, finite vertices/normals, nondegenerate faces, stored normals matching winding, edge incidence exactly two with opposite winding after 1e−5 mm welding, seven separately connected positive-volume solids and measured millimeter bounds. Check individual imported parts as well. Manifold robust booleans create connected solids, not interpenetrating decorative shells.

Mechanism checks measure axial/sloping gaps, ≥1.25 mm dovetail retention, 3 mm floor, stop dimensions, travel limits and disjoint print layout. For default/min/max and every imported case, a 3×3 Cartesian grid includes both travel extremes, totaling 81 moving-body CSG intersection tests per case: rail/carriages, both carriages and their appropriate stops. Fixed press-fit peg interference is expected and excluded. Translational prismatic profiles, vertical separation and end stops analytically preserve clearance between samples; no friction, tilting or wear simulation is claimed.

`node browser-test.cjs` uses real browser file pickers and downloads actual STL for PNG, JPEG, ASCII/binary STL. Geometry signatures differ from built-in defaults and change with source pixel content, threshold/depth, scale/rotation/height/placement; remove/reset reproduces baseline. Export signature matches final preview geometry; UI dimensions match parsed downloads. It checks replace/remove/reset, malformed/truncated/open/nonmanifold/concave/oversized inputs, excess pixels/triangles, dimensions, empty silhouettes, unsafe/NaN transforms and disabled invalid export. Phone widths 320/390 include touch orbit, pinch zoom, imports/downloads and no overflow. `TEST_BASE` and `TEST_REPORT` can target the packaged production build.

Gallery tests compile every inline script, verify one new STL entry, preserve every previous entry and exercise gallery rendering/search. Additional browser checks cover fixture buttons, drag/drop and assembly preview. Reports and synthetic screenshots are kept beside the source; personal inputs are not.

**Digital checks only. No actual physical print, friction, wear, fatigue or load test was performed.** Inspect the slicer and calibrate your printer before relying on retention. Arbitrary meshes outside the documented supported subset are rejected, not falsely repaired or certified printable.
