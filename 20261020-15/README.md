# Corner Keeper

A browser-only parametric 90° assembly jig for aligning frames, drawers and small cabinet parts. A single L-shaped rail solid with optional two bench-mount through-holes. Built with React + Vite and locally bundled Three.js (ExtrudeGeometry, OrbitControls, STLExporter). No APIs, CDN imports, keys, or runtime network services.

## Parameters (millimeters)

| Parameter | Range | Default |
|---|---|---|
| X arm length | 40–200 | 100 |
| Y arm length | 40–200 | 80 |
| Rail width | 10–32 | 18 |
| Z height | 6–40 | 20 |
| Screw bore | 3–10 | 5 |
| Diametral bore clearance | 0–1 | 0.4 |

Final bore diameter = screw bore + clearance. Bore centers are at `(X-width, width/2)` and `(width/2, Y-width)`. The two bores are vertical, not countersunk; choose suitable screws/washers. Material beside a bore must be ≥2.5 mm. Both arm lengths must be ≥2 × rail width + 8 mm. Nonfinite, empty, out-of-range, short-arm, and insufficient-wall inputs are blocked with a visible error and disabled export. Hole dimensions are ignored for geometry when holes are disabled. Presets and Reset are provided.

## Preview and STL

Drag to orbit, scroll/pinch to zoom, two fingers to pan. Fit to view and zoom buttons are available. Size readout is final X/Y/Z extents in mm. One-click Download STL saves a named binary STL. STL is unitless; import as mm in your slicer.

Preview and export share the **same geometry instance**, with no export-only transforms. Invalid states hide the preview and block export. An explicit simple L outline is triangulated and extruded with clockwise circular hole contours, no bevels, one depth segment, and 48 segments per bore. Default 412 triangles; solid variant 20 triangles. No CSG union or overlapping component meshes are used; the footprint is simple, bores cannot touch one another or the perimeter under the validation constraints. Geometry generation is synchronous and bounded, comfortably small enough not to need a worker.

## Run and build

```
npm install
npm run dev
npm run predeploy
```

Vite base: `/daily-app2/20261020-15/`. Per-app `deploy` uses gh-pages on dist; public monorepo publishing is performed from the repository root, not this command.

## Validation

`node validate.mjs` checks all 128 min/max corner combinations, including holes enabled/disabled: 64 valid solids and 64 blocked combinations. Every valid exported binary STL is independently parsed for nonempty faces, finite vertices, positive face area, normal/winding agreement, positive signed volume, analytic expected volume, and exact expected mm bounding dimensions. Vertices welded at 1e-5 mm tolerance must give exactly two oppositely directed incidents per undirected edge. Expected L-prism volume minus the two polygonal bores detects unexpected internal faces/volume.

`browser-test.cjs` exercises actual browser STL downloads at defaults, all presets, valid extrema, solid variant, slider changes, and invalid states. Desktop and 390px touch-screen screenshots and JSON results are included. Tests verify changing preview, touch orbit and pinch zoom, no horizontal overflow, reachable touch Download, and parsed mobile export. Set PLAYWRIGHT_PATH if Playwright is installed outside this folder. Test requires dev server at port 5175. Gallery and production checks are also recorded. This is software validation, not a physical print test.

## Printing and use

Print flat with the L footprint on the bed, shown Z up. Vertical bores and straight walls require no supports. Start with a 0.4mm nozzle, 0.2mm layers, four perimeters and 25–40% infill. PLA is suitable for indoor alignment; PETG is tougher. Print a short bore test and calibrate shrinkage/tolerance before a large jig. Check bed capacity (up to 200 × 200 mm) and actual squareness before use. Layer texture may need light cleanup. Use gentle clamping; this is an alignment aid, not a structural/load-bearing bracket. Keep away from hot tools.
