# Camber — local image / STL cam-fidget studio

React + Vite browser-based parametric **eccentric-cam and spring-follower fidget**. Rotate a thumb wheel to bend a standing cantilever smoothly once per turn. Three separately printed, hardware-free parts: spring-palm, eccentric-wheel and friction axle cap. Not print-in-place: assembly preserves the moving interfaces. This interaction is distinct from a ratchet, slider, bare roller or pivoting rocker.

## Run / build

```sh
npm install
npm run dev
npm run predeploy
npm test
node browser-test.cjs
```

Browser validation expects the dev server at `http://127.0.0.1:5197/daily-app2/20261021-15/`; `TEST_BASE` overrides origin. `create-fixtures.cjs` recreates the bundled original synthetic fixtures using a local browser and Manifold (no external image sources). This folder retains `gh-pages`, `predeploy: npm run build`, `deploy: gh-pages -d dist`; publish the combined gallery from the repository ROOT, not this folder.

## Real import workflows

Files stay entirely in browser memory. No API, key, server upload, analytics, CDN modules, remote fonts or personal input persistence. Browser fetch is only used for bundled synthetic sample files. Replacing/removing imports or resetting restores recoverable valid state. No user inputs are committed. File picker supports phones/desktops; the source card accepts one drag-and-drop file where supported.

### PNG / JPEG → relief

Actual file signatures and headers are checked before decoding: max 2 MB, 12 million pixels, 6,000 pixels per side. Decode must match header dimensions. PNG transparency is composited over white. A square **20 × 20** canvas samples luminance `0.2126 R + 0.7152 G + 0.0722 B`. Fit contains the whole source; fill crops it. X/Y crop shifts translate the raster by ±25% of the sampled square.

Threshold mode maps luminance below threshold (1–254) to relief depth, everything else to zero. Grayscale maps luminance `v` to `depth × (1 − v/255)`. A triangulated continuous heightfield has a 0.4 mm minimum backing; the entire solid sits 0.15 mm inside the wheel top and is robustly unioned into it. Thus background remains the backing, not an isolated disconnected silhouette. Relief depth is 0.4–3 mm. Empty silhouettes/zero relief are rejected. This is **2D-to-relief / raised silhouette conversion**, NOT automatic reconstruction of an entire 3D subject from one photograph.

The source image, exact conversion grid and final solid all have separate previews. Threshold, depth, fit/crop, physical footprint, Z rotation and wheel-top placement change actual exported geometry, not just appearance.

### Binary / ASCII STL → integrated grip

Max 2 MB and 1,500 triangles. Supports both exact-length binary STL and complete ASCII facets. Validates finite coordinates, nondegenerate faces, 0.2–250 mm original X/Y/Z dimensions, 1e-5 mm welded edge incidence (two faces, opposing winding), single connected component and positive signed volume. Triangle-pair SAT checks reject self-intersections/touching unsupported surfaces; triangles are shrunk 1e-6 about their centroids to avoid false intersections at shared topology. No automatic mesh repair is claimed or performed.

**Deliberately supported subset:** one outward-wound, convex, solid, broad-flat-bottom grip, Z-up. Bottom contact must cover ≥25% of XY bounding rectangle. All vertices' XY projections must lie within its bottom convex hull. Concave parts, cavities, branches, overhanging footprints, tilted bed contact and separate shells are unsupported and rejected with guidance. Re-export a low-poly convex flat-bottom object from a modeler rather than expecting arbitrary meshes to work.

STL contains no unit metadata. The source mesh preview and original dimensions are shown, and an explicit **millimeter confirmation checkbox** gates integration. XY is proportionally normalized to the chosen 4–7 mm footprint, centered on its bounding rectangle; Z is independently normalized to 0.6–5 mm grip height. Fitted XY dimensions must each be at least 1.2 mm. Z rotation is −180…180°, X offset ±1.5 mm and Y offset ±2 mm. Center/reset transforms is available independently of remove/reset-all. A flat contact surface embeds 0.15 mm in the wheel; Manifold CSG union must produce exactly one connected closed wheel solid or export is disabled.

All imported vertices must stay outside a 4.5 mm axle keep-out radius and inside radius `cam radius − eccentricity − 0.8 mm` from the pivot. Outer radial checks plus projected edge-distance checks protect continuous faces, not just sparse vertices; accepted convex STL solids and the image backing stay completely outside the axle keep-out. This prevents obstruction of the pivot cap and follower through a complete rotation. Unsafe transforms are rejected, never silently clipped or repaired. Original, transformed and final meshes are not merely overlapping visual shells.

## Controls / units

All physical dimensions are in **millimeters**; angles degrees, threshold /255, crop shift percent.

| Parameter | Range | Default |
|---|---:|---:|
| Cam radius | 14–19 | 16 |
| Eccentric offset | 0.60–0.95 | 0.80 |
| Spring thickness | 1.0–1.3 | 1.1 |
| Palm corner radius | 4–10 | 8 |
| Palm scallop depth | 0–0.5 | 0.25 |
| Radial / axial running gap | 0.25–0.60 | 0.40 |
| Cap diametral interference | 0–0.12 | 0.04 |

Numeric fields and sliders share bounded parameters. NaN/blank/impossible inputs disable exports. Presets: Gentle PLA, Long pulse, Loose PETG. Every generation is worker-based; stale responses are ignored and a checking state disables download while pending. Resolution is bounded before CSG. Heavy STL preflight runs in the worker. Image decoding is size-bounded, with a 400-sample conversion on the UI thread.

## Geometry / export

Locally bundled dependencies: React/React DOM, Three.js + OrbitControls, Manifold-3D WASM, Vite; gh-pages for deployment, Playwright for validation. No CDN dependencies.

Three.js orbit, wheel/pinch zoom, fit-to-view and accessible zoom buttons work with mouse/touch. Final preview and binary STL use identical indexed meshes. Released-assembly preview rotates the wheel 180° without simulating leaf deformation; it is NOT a physical dynamics simulation. Export always uses flat nonoverlapping part layout, or selected individual part at Z=0. UI shows assembled and exported X/Y/Z size. Useful filenames identify source kind, radius, gap and part.

Robust Manifold CSG unifies base/anchor/leaf and wheel/import; cap and wheel stay separate. Moving bore is `4 + 2 × gap`. Cap bore is `4 − interference`. Post diameter is 4; cap OD 7, thickness 2, blind bore depth 1.4, roof 0.6. Axial clearance is the chosen gap above/below the 4 mm wheel; cap insertion is 1.3 with a 0.1 mm blind-roof gap. Cap retention overlap is `1.5 − gap`, minimum 0.9. Preview and export are not alternate implementations.

## Print / assembly / calibration

Use PETG for repeated flexing, PLA for a firmer initial trial. 0.4 mm nozzle, 0.2 mm layers, 3–4 walls, 30% infill. Print all parts flat, axle up and cap bore down. Built-in/image geometries need no supports intended. Verify in slicer: 0.6 mm cap roof bridges about 4 mm; the 1.0–1.3 mm-wide standing spring starts directly on the bed in an open through-slot. No suspended leaf underside. Keep supports out of this slot. Imported accepted convex shapes stay within their broad bed footprint; inspect the slicer anyway.

Leaf is 49 mm long, 8 mm high, 1.0–1.3 mm thick, anchored at one end only. Anchor ends Y=−25; nominal cam contact Y≈0. Spring starts at Z=0 in the side-open cutout; the slot begins 1.5 mm inward from the spring and ends 3 mm past its free tip. Do not thicken the spring outside the allowed range or manually overbend it.

1. Print the individual cap and palm as a fit trial. Cap should seat without splitting and resist a gentle hand pull. Adjust interference by 0.02 mm, not force.
2. Print wheel. Remove strings/deburr bore and spring side-slot. Do not sever the spring root.
3. Lower wheel onto post with lobe pointing away from spring; friction-seat cap near its blind roof, maintaining the specified axial gap. No hardware/glue. Confirm full free rotation with no cap clamping.
4. Rotate slowly: the lobe loads/unloads the spring. Stop at binding, whitening, cracks or permanent set. Pry cap cautiously to disassemble. Never use a loose cap.

PLA 0.40 mm gap / 0.04 mm interference and PETG 0.60 / 0.02 are **starting points, not universal tolerances**. Printer, material, cooling, elephant foot and extrusion width affect fit, bridges, stiffness and fatigue. Friction retention is not a snap lock. Small parts: keep away from young children.

## Validation performed

`validate.mjs` checks 131 default/min/max/corner parameter sets plus 12 image and ASCII/binary import combinations at default/min/max dimensions. Binary STL is independently parsed: triangle count/length, finite values, nonzero areas, stored normal agreement, welded edge incidence, consistent neighbor winding, each component's positive enclosed volume, component count and mm bounds. Individual parts and combined print layout are checked. Robust solid modeling ensures valid unions without internal overlap shells.

Mechanism checks sample 361 cam angles × 401 contour heights. An ideal Euler–Bernoulli cantilever shape bounds follower displacement, theoretical outer-fiber strain (<0.65% within ranges), palm containment and contact envelope. Rigid CSG intersection checks sample 24 angles for wheel-to-palm/axle (excluding intended leaf contact) and wheel-to-cap clearance. Released wheel is checked against the undeformed spring. Retention overlap, roof clearance, assembly gap and disjoint print layout are verified. This is a geometric/ideal-beam envelope, **not stress/contact FEA, measured friction, fatigue or real-world retention testing**.

`browser-test.cjs` uses actual file picker PNG/JPEG/ASCII/binary imports and actual downloaded STL bytes; verifies import-vs-default geometry, threshold, depth, crop, grayscale, scale, rotation, placement, reset/remove/replace; tests invalid/truncated/open/nonmanifold/oversize/empty content; checks preview/export fingerprints and UI dimensions. Mobile widths 390 and 320 px, touch orbit, pinch zoom, reachable download and phone imports are tested. No remote requests/runtime errors are allowed. Reports and screenshots are included. `gallery-test.cjs` verifies inline scripts, preserved entries, one unique new STL entry and browser rendering/search.

**No physical print, material endurance or durability test has been performed.** Digital validity does not guarantee actual tactile feel, support bridging or safe cap retention. Inspect sliced layers and trial the fit before extended use.

## Fixtures / attribution

`public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl` are original synthetic fixtures generated for this app, dedicated to CC0. No private uploads or third-party personal imagery are bundled.
