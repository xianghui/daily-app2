# Rack Ritual · 026

A local React + Vite parametric **rack-and-pinion fidget studio**. Turning a sixteen-tooth involute thumb wheel translates a retained straight rack; pushing the rack back-drives the wheel. This is rotary-to-linear gearing, not a free spinner, barrel cam, or decorative reskin. Four hardware-free separately printed parts: palm base, rack, wheel and keeper lid. A witness window reveals the teeth.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

The per-app `predeploy` builds `dist`; `deploy` is `gh-pages -d dist`, retained for the app contract. **Public monorepo publication uses the root `/Volumes/ExternalHD/daily_app2` predeploy/deploy flow**, not the individual deploy. Vite base: `/daily-app2/20261021-26/`.

Download STL emits geometry-only binary STL in millimeters. The main export is the separated, bed-down four-part print layout; individual-part downloads and a ZIP with four STLs plus assembly instructions are available. The assembled motion preview is **not** the exported layout. Preview and export consume the same generated vertex/index arrays, not approximations. A preview colour never changes the STL. Dimensions beside the canvas are the current export selection's exact X/Y/Z bounds.

## Studio

Large orbit/touch canvas, fit/reset view, zoom buttons, selection highlighting, real model preset thumbnails, Shape / Mechanism / Surface / Import / Print tabs, ivory/sand/clay materials and a fixed mobile export bar. Three presets: Pebble, Pocket and Long sweep; variations stay inside supported mechanical ranges. Shape, gap, texture, source and import-transform edits regenerate real CSG in a worker. Undo/redo retains 35 modeling snapshots (debounced 450 ms). Save/Open JSON includes bounded normalized image pixels and source preview or the verified STL vertices/indices, **not just a filename**. Restored STL is parsed and validated again. Corrupt or oversized saved designs are rejected. Presets leave the active import in place; Reset all returns to built-in geometry.

Vaseverse was consulted for the model-first editor hierarchy and warm restrained palette. No reference branding, assets, text or source code is used.

## Local PNG/JPEG workflow

Use the file picker (desktop/phone), drop a file, or try `mark.png` / `waves.jpg`. Original and converted-source previews appear alongside the final 3D model.

1. Check actual PNG/JPEG signature and dimensions **before decoding**. File limit 2 MB, up to 12 megapixels, at most 6,000 px per side. Invalid content, mismatched extension and truncated files are rejected.
2. Composite transparency on white and normalize to at most 500 px longest side for a portable local payload. Reopening uses that exact normalized raster, avoiding false restoration or changed sampling.
3. Draw to a bounded **20 × 20** grayscale grid. Contain preserves the full image; cover fills and crops. X/Y crop shift is ±25%. Luminance is `0.2126 R + 0.7152 G + 0.0722 B`.
4. Threshold mode gives each vertex either zero or the selected relief depth. Grayscale mode gives `depth × (1 − luminance/255)`. Triangulate adjacent cells, close the outer perimeter and flat bottom, and retain a continuous **0.4 mm backing**. Silhouette boundaries are sloped between sampled vertices, not exact vector tracing.
5. Scale/rotate/offset this closed solid onto the raised wheel hub; sink its backing 0.15 mm and perform a real Manifold union. No floating decorative shells. The image changes the final printable wheel, not a texture or preview-only decal.

Threshold 1–254; depth 0.4–3 mm; footprint 4–7 mm; rotation ±180°; XY placement bounded to ±1.5/±2 mm and a circular **6.5 mm radius safe zone**. Empty all-white relief is blocked. Source, threshold, depth, fit, crop, scale, rotation and placement change exported vertices. This is **2D-to-relief/silhouette conversion, not automatic 3D reconstruction from a photograph**. The small height map has deliberately limited resolution; sub-grid image details are not reproduced.

## Local ASCII/binary STL workflow

Use `wedge-ascii.stl` / `gem-binary.stl` as synthetic fixtures. Source preview reports dimensions, encoding and triangle count. Explicitly confirm that source coordinates mean millimeters: **STL contains no unit metadata**. Integration is blocked before confirmation.

Strict input contract: one connected outward-facing convex watertight solid, broad flat base oriented downward in Z, no cavities, overhangs outside its bottom footprint, or thin branches. This is intentionally not a general arbitrary-mesh repair service. Reorient/decimate/repair in your modeler before import if necessary.

Limits: 2 MB; 1–1,500 triangles; dimensions 0.2–250 mm on every axis; finite coordinate magnitude ≤10,000 mm. Binary byte count must exactly match header facet count. ASCII facets must be complete. Preflight checks degenerate triangles, quantized welded edge incidence and neighbor winding (1e-5 mm), one connected component, positive enclosed volume, triangle intersections, convexity and bed contact. Bottom hull must cover at least 25% of XY bounding rectangle and contain every projected vertex. There is **no claimed automatic repair**. Open/nonmanifold, self-intersecting, inward, disconnected, unsupported concave or overhanging meshes receive actionable errors.

Verified geometry is centered, proportionally fitted in XY to the 4–7 mm footprint, independently fitted in Z to 0.6–5 mm grip height, rotated around Z and placed on the hub. Source dimensions remain visible. Fitted XY spans must each remain at least 1.2 mm. A safe-zone test prevents obstruction of the keeper, teeth or bearing. Real solid union at the grip base must produce **one connected closed solid**; otherwise export is disabled. Replacement, removal and transform reset are provided. Image and STL are alternative grip sources, not simultaneous layered imports.

## Parameters and mechanical construction

All lengths in **mm**, rotations explicitly degrees.

| Parameter | Supported range |
|---|---|
| Pinion pitch diameter | 24–28 |
| Rack half stroke | 5–8 (total travel 10–16) |
| Tooth face height | 4–6 |
| Running clearance | 0.25–0.50 |
| Rack length | 44–50 |
| Palm edge grooves | 0–0.5 |
| Keeper hole radial allowance | −0.08 to −0.01 |

Sixteen teeth, 20° pressure angle. Module = pitch diameter / 16 (1.5–1.75). Gear teeth are sampled true involute flanks with radial root extension; the rack has conjugate straight 20° flanks. Tooth half-width at pitch is reduced by half the selected gap on both gear and rack; the rack is additionally offset by the gap for FDM backlash. Nominal theoretical contact ratio is >1.6; this is not a measured friction/backlash result. Travel maps `rack x = −pitch radius × wheel angle`; hard walls limit translation before loss of engagement.

3 mm palm floor; 2.5 mm keeper; 8 mm rack backing; radius-3 axle; 7 mm radius raised hub. Running gap applies to the axle radially, above/below moving bodies axially, behind the rack, and around keeper openings. Rack shoulders and wheel teeth are larger than their respective keeper openings; fixed lid retains them. Four radius-2 posts press into holes of radius `2 + fit`; their intentional interference is excluded from collision tests. Keeper seats on stationary guide/end walls, not moving parts. The relief/mesh sits above the keeper, on a solid hub roof above the axle. An image-derived solid or accepted mesh cannot extend into tooth clearances.

## Printing and assembly

No hardware. Print all parts flat from the separated layout; PLA or PETG, 0.4 mm nozzle, 0.16–0.2 mm layers, four walls, ~25% infill as starting guidance. The hub roof has a short bridge over the axle bore. No supports normally needed for built-ins or accepted flat-bottom imports. Inspect first-layer expansion and bridge sag; deburr rather than forcing the fit.

Use the **first complete set as a calibration trial**, checking bearing/rack motion before seating the lid. Close (0.25 mm) and loose (0.5 mm) fit buttons are starting points, not universal tolerances. Drop wheel onto axle, center the rack tab and mesh teeth, then press keeper gently onto its four posts until seated on the fixed walls. Turn the wheel to sweep the rack, or push the tab to back-drive. Stop if teeth skip or lid lifts. Keep fingers clear of the witness window/teeth. Do not force end stops or pry the rack sideways. Negative fit allowance controls keeper interference, not running clearance. No compliant-part fatigue limit is asserted because there are no intended flexures.

**No physical print, tactile feel, retention-force, durability or slicer-time tests have been performed.** Digital checks are not certification that a particular printer's fit will work. Reprint/calibrate if tight or loose; a press-fit lid is not a child-safe fastener.

## Validation

`validate.mjs` parses actual generated binary STL. Checks: nonempty triangles, finite coordinates and normalized normals, nonzero face area, stored normal/face agreement, welded edge count exactly two with opposite neighbor winding, one positive-volume connected component per intended part, and mm bounds agreement. All-parts layout must have four closed components and disjoint per-part bounding boxes. Manifold CSG provides solid boolean construction; overlapping preview shells are never used as a substitute for union.

The automated matrix includes default, minimum, maximum, all 128 parameter extrema, all three presets and five deterministic variations (**139 parameter cases**). Twelve derived cases cover threshold image, grayscale image, ASCII STL and binary STL at defaults/minimum/maximum. All receive mesh/dimension and analytical mechanism checks. Defaults/extremes/presets/variations and all derived cases additionally receive **33 sampled motion positions**, testing moving/fixed solid intersections with only the designed keeper-post press fits excluded. These are digital samples, not exhaustive swept-volume or physical tests.

`browser-test.cjs` uses actual Chromium file-picker imports and downloads. Tests PNG/JPEG, ASCII/binary, changed pixel content/threshold/depth/scale/rotation/placement against baseline, remove/replace/reset, empty images, invalid dimensions/transforms, truncated/open/nonmanifold/concave/oversized files, pixel/triangle limits, individual STLs, exact preview/export fingerprint and dimensions, touch orbit/pinch, reachable exports and 320/390 px layouts. `extra-browser.cjs` tests every preset, random variations, undo/redo, portable JSON round trips for all four fixture types, ZIP, drag/drop and colour-neutral geometry. `production-test.cjs` repeats exports and larger-image save/open against the built worker/WASM. JSON reports and screenshots record observed results. Gallery checks compile every inline script, preserve all previous entries, verify entry uniqueness and category order, and exercise rendering/search.

## Privacy, dependencies and fixtures

All file processing occurs locally in browser memory. No upload, server/API key, paid service, remote model, CDN import or analytics. Saving a design downloads a local payload; no personal files are committed. Generation and STL preflight run in a worker. Dependencies bundle locally: React/React DOM, Vite, Three.js with OrbitControls, Manifold-3D (local WASM), fflate, gh-pages; Playwright is development validation only. Dependency licenses remain their own.

All bundled sample PNG/JPEG/STLs are synthetic project fixtures, not personal uploads or third-party assets. They may be used freely to try import paths. The old `/Volumes/ExternalHD/daily_app` gallery is read-only and was not modified or deployed.
