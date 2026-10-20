# Wedge Works

A local, browser-based parametric door-wedge STL generator built with React and Vite. Adjust a tapered wedge with transverse V-shaped grip grooves. No API, server, CDN or credentials are required. Bundled Three.js provides the preview and OrbitControls.

## Parameters

All geometry coordinates and dimension inputs are millimeters; groove count is unitless.

| Parameter | Range | Default |
| --- | --- | --- |
| Length X | 60–180 mm | 110 |
| Width Y | 20–70 mm | 36 |
| Heel height Z | 10–45 mm | 22 |
| Toe thickness | 1.2–6 mm | 3 |
| Grip groove count | 0–16 integers | 8 |
| Groove depth | 0.4–2 mm | 0.8 |

When grooves are enabled, toe minus groove depth must be at least 1.2 mm. Invalid/nonfinite dimensions and fractional groove counts block preview and download with a clear error. Zero grooves ignores groove depth. Presets: Everyday, Low clearance and Wide grip; Reset restores the default. Fit is determined by actual door clearance, not a mating tolerance: select a toe thinner than the gap and a heel taller than it. These are loose door wedges, not precision press fits.

## Geometry and export

The X/Z roof is an ordered, single-valued piecewise-linear profile extruded along Y. Each span is triangulated directly into the *external* surface; there are no overlapping solids, internal caps, CSG seams, or unions of disconnected preview meshes. Increasing X, positive minimum thickness and nonoverlapping groove intervals exclude profile self-intersections. All roof and underside spans share the same boundaries with side caps. Maximum complexity is 396 triangles, so synchronous generation is bounded and a worker is unnecessary.

Download STL exports binary STL from the exact BufferGeometry displayed in the preview, with X/Y/Z dimensions in the filename. Invalid inputs hide the preview rather than showing stale geometry. STL has no unit metadata: import into the slicer as millimeters. Rotate with one-finger drag, pinch with two fingers to zoom, or use desktop drag/wheel. Fit to view resets the camera.

## Run and publish

```
npm install
npm run dev
node validate.mjs
npm run predeploy
```

The app base is `/daily-app2/20261020-13/`. The required per-app `deploy` script uses `gh-pages -d dist`, but publication of this collection uses the **root monorepo** `npm run predeploy` and `npm run deploy`, preserving all apps.

## Validation performed

- `node validate.mjs`: 50 valid combinations (including the default and all valid corners of the six-parameter range) passed binary-STL parsing, finite vertices, nonzero face areas, outward normal agreement, consistent directed-edge orientation, positive enclosed volume, and expected mm bounding boxes. Weld tolerance: 0.00001 mm. Every undirected edge had exactly two incident triangles. Computed volumes match the exact profile-extrusion volume. 19 invalid combinations were rejected.
- Actual Chromium browser downloads for default, Low clearance preset, minimum valid configuration, maximum configuration, and a phone-edited 125 mm wedge passed the same STL checks. Preview and export use one shared geometry object; reported dimensions and exported bounding boxes match.
- A 390×844 touch viewport passed horizontal-overflow, real touch-orbit and pinch-zoom checks (rendered canvas changed), numeric input editing, and a reachable, tappable download button. Desktop screenshot at 1440×1000. No browser page errors.
- Evidence: `geometry-validation.json`, `browser-validation.json`, `desktop-validation.png`, `mobile-validation.png`.
- Build: `npm run predeploy`. No physical prints have been tested.

## Printing tips

Print with the flat underside on the bed and grooved face upward. Start with 0.2 mm layers, 3–4 walls, and 25–40% infill; no supports are expected because the body grows narrower toward the top. Tune to your printer and material. TPU generally provides better floor grip than rigid PLA, but geometry alone does not guarantee grip. Measure the gap first, test placement, and avoid fire doors, security uses, lifting, or load-bearing duties. A longer wedge makes a gentler slope. Printer/material tolerances affect fit; print a small trial before relying on it.
