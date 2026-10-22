# Coin Current

A browser-based parametric **rim-rolling coin fidget studio**, not a game. A loose flat coin with an eccentric thumb pip rolls or slips inside a circular cup. A broad annular lid retains it. Reverse rim-following circles or sweep toward the center. No gears enforce rolling; preview orientation is illustrative no-slip motion, not simulated friction. Three separately printed hardware-free parts.

## Run and dependencies

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React/Vite, Three.js/OrbitControls, locally bundled manifold-3d WASM for solid operations, fflate ZIP; Playwright development tests. No remote API/CDN/key. Base `/daily-app2/20261022-15/`; publish using the root monorepo deploy flow, not an individual folder deploy.

## Editor

Large matte-clay live canvas, 10 mm ground grid, orbit/pinch/zoom/fit, explicit X/Y/Z export millimeters, compact five-tab controls and collapsible phone controls with fixed accessible export. Soft orbit, Wide current and Pocket eddy are three real model thumbnails/presets. Random variations stay bounded. Assembled and separated printable layouts are distinct. Primary binary STL, individual parts and all-parts ZIP, plus annular seat coupon. Preview and export use the same final meshes; colors do not appear in STL. Undo/redo retains 35 debounced snapshots. Save/open JSON embeds a bounded normalized image or verified mesh and revalidates it; no missing local file is pretended restored.

## Parameter ranges / millimeters

- Coin radius: 16–20; disk thickness: 3; eccentric pip radius: 2, offset: 3, exposed height: 4.9.
- Nominal orbit travel radius: 4–7. Let R = coin radius + travel radius.
- Palm floor thickness: 3–5; tactile groove depth: 0–0.6, leaving ≥2.4 floor.
- Running radial and axial clearance: 0.20–0.50.
- Static lid seat radial allowance: −0.04–0.08. Negative values deliberately mean interference fit, not a moving overlap.

Race inner radius is R + running clearance. The 128-sided race has ≥0.19 mm minimum faceted gap at nominal maximum travel. Its lower wall and recessed upper seat are distinct: the outer recess leaves ≥1.92 mm wall. The lid underside clears the coin top by running clearance. Its skirt clears lower wall by ≥0.4 mm and is outside every moving coin position. Lid opening radius = coin radius −3; hence the coin cannot pass through, even when shifted or tilted within its low-height chamber. The eccentric pip stays ≥1 mm within the lid opening at every nominal pose. The fixed imported palm grip remains outside the race, with ≥6.5 mm separation from the coin swept footprint. No imported feature changes the running surfaces.

## Image workflow — PNG/JPEG

Picker on desktop/phone, drag/drop, replace/remove/reset and original plus conversion previews. Maximum 2 MB, 12 megapixels, 6,000 px/side, content signatures/dimensions checked before decoding. Decode errors reject truncated content. Normalize to at most 500 px for portable saves. White-composite transparency, contain/cover fit and ±25% X/Y crop shift, then sample a **20×20 luminance grid** (0.2126R + 0.7152G + 0.0722B).

Threshold 1–254: dark samples rise by the chosen depth. Grayscale mode: height is depth × (1 − luminance/255). A continuous triangulated top with closed side walls and a flat base makes a solid height field on 0.4 mm backing. Relief depth 0.4–3 mm. This is **2D-to-relief / raised silhouette conversion, not automatic full 3D reconstruction from one photo**. Empty conversions block export. Image content, threshold, depth, crop and physical placement change actual exported triangles.

## STL workflow — ASCII/binary

Maximum 2 MB, 1,500 triangles; each source dimension 0.2–250 mm. Show source mesh, source dimensions, triangles and format. **STL carries no units: explicit millimeter confirmation is required.** Accept only one outward-wound connected, closed, convex solid, with a flat bottom covering ≥25% of bounding footprint and all XY projections inside that bottom hull. Deliberately reject arbitrary open/nonmanifold/inward/concave/self-intersecting/disconnected meshes, excessive content, overhangs, thin branches and invalid dimensions. No repair is performed or claimed. Reorient, simplify or re-export in a mesh editor when rejected.

Fit XY proportionally to 4–7 mm footprint; independently set Z height 0.6–5 mm. Rotate ±180° around Z, translate X ±1.5 mm/Y ±2 mm, center/reset. X/Y tilt deliberately unsupported to retain verified flat bed-facing contact. Narrow fitted XY dimension must be ≥1.2 mm. Every transformed vertex must remain within a 6.5 mm radial safe zone on the palm tab. Unsafe/empty transforms disable export, with recoverable feedback.

For either import, sink the flat bottom 0.15 mm into the fixed palm tab and **Boolean-union** the solid, replacing the built-in grip. Require one connected final solid for each part; never export overlapping shells as a union. The input is not merely displayed or re-exported unchanged. Transforms affect the fixed grip only and cannot touch the axle or fuse the joint.

All user-file processing is local, in the browser; parsing/intersection preflight and modeling use a worker. Bounds limit resolution and complexity. Progress and actionable errors are visible; invalid export is blocked. No user files are uploaded or saved in the repository. Only explicit design saving downloads source payloads. Bundled `public/samples/` fixtures are original synthetic geometric art and closed wedge/frustum meshes, not personal/third-party files.

## Printing and assembly

Print cup floor-down, coin pip-up, lid broad flange-down/skirt-up; export arranges all bed-flat without overlap. No supports intended: no ceiling/bridge, only flat bases, vertical walls and open annuli. PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. No compliant/fatigue-critical flexures, bearings, magnets or fasteners.

Start at 0.30 mm running clearance and zero static lid allowance; **these are not universal fits**. Print the annular seat coupon and lid first, then trial the actual coin/cup fit. The coupon reproduces the upper seat diameter and is open underneath; it tests only the static radial seat, not running clearance. Remove burrs/elephant foot. Drop coin into cup, flip lid skirt-down and press outer rim into recess. Verify lid retention and free movement. Increase allowance if tight, decrease if loose. Optional adhesive only on the outer static skirt, never inside the race. Lift unbonded lid evenly for disassembly. Hold flat and nudge the pip in circles. Keep small parts away from children.

## Validation, not a physical print claim

`validate.mjs` reparses binary STL for finite/nondegenerate triangles, normalized normals, outward neighbor winding, positive volume per component, two incidents per welded undirected edge, bed orientation and expected millimeter dimensions. Tests defaults, extrema, each parameter endpoint, all presets and eight deterministic variations. Threshold/grayscale and ASCII/binary imports receive the same per-part checks across six parameter sets. Three connected components in layout; one for each individual part. Manifold CSG produces connected closed solids, never overlapping shells called a union.

Mechanical validation checks minimum walls, faceted running gap, pip-to-aperture margin, lid skirt/lower-wall clearance, coin retention, separated print layout and 16 angles × 5 radial positions with actual moving/static Boolean intersections. The intended static seat interference is excluded. These are geometry checks, not proof of physical feel.

`browser-test.cjs` uses real PNG/JPEG/ASCII/binary pickers and downloads, exact preview/export hashes, pixel/threshold/depth/transform changes versus defaults, replace/remove/reset, invalid content, truncated/open/nonmanifold/concave/excessive meshes, dimensions, unsafe transforms and empty relief. Phone widths 320/390, actual touch orbit/pinch and reachable export. `extra-browser.cjs` tests every preset, random variations, undo/redo, portable JSON for every import format, ZIP/coupon, drag/drop and geometry-neutral colors. `production-test.cjs` checks built worker/WASM, pose controls, phone sheet, a larger normalized image round trip. Reports and screenshots record observed results. Gallery checks preserve existing entries and compile all inline scripts.

**No physical print has been tested.** Trial fits, lid retention, friction, wear and tactile feel remain unverified. Vaseverse.org informed only warm model-first studio composition; no branding/assets/source copied. Synthetic original sample fixtures only; no personal files are committed.
