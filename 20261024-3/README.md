# Tread Soft — radial flex wheel studio

A local React + Vite parametric STL editor for a **TPU nonpneumatic palm wheel**. Roll the tread across a palm or desk, or gently pinch opposite sides: six swept spokes bend successively and return. This is a radial-compression rolling mechanism, unlike a rigid roller or an axial hub spring. One connected solid, no bearings, hardware, assembly, separate moving joints or release procedure. Individual-part export is the same single wheel; no ZIP is necessary.

## Studio

Model-first orbitable Three.js preview, matte clay palette, 10 mm grid, reset/fit and zoom, final X/Y/Z dimensions, object/print layout, source previews, three actual generated preset thumbnails, valid-range variations, undo/redo, portable JSON save/open and persistent binary STL download. Geometry edits run locally in a bounded worker. The undeformed preview and STL use the **same final geometry**. Preview is not deformation or force simulation. STL contains geometry, not preview colour, material or slicer settings.

Original UI guided by the editor composition at https://vaseverse.org/: large model canvas, compact tabbed right rail, slim header, restrained warm palette and reachable export. No reference branding, assets, text or source code used. Mobile has a generous touch-orbit/pinch preview, collapsible controls, file picker and fixed export area.

## Parameters (millimeters)

| Control | Range | Purpose |
| --- | --- | --- |
| Outer radius | 24–32 | 48–64 mm outer diameter |
| Wheel depth | 8–12 | Z depth before grip |
| Spoke thickness | 1.2–1.8 | Swept radial flexure width |
| Tread wall | 2.4–3.6 | Continuous ring thickness |
| Spoke sweep offset | 3–6 | Centerline angular sweep = offset / 10 radians |
| Tread dimple depth | 0–0.6 | Top-face tactile dimples |

Hub radius is 10.5 mm. Six sampled Archimedean strips overlap hub and tread, are unioned in 2D and extruded. A 0.8 mm deep hub well accepts a safe central grip. Manifold performs true solid boolean unions/subtractions: interpenetrating display shells are never exported as a fake union. Roots overlap by at least 0.7 mm. Intended radial compression is **at most 0.5 mm**, not a universal tested limit. An elementary beam strain estimate is screened below 3.5%; this is not a nonlinear finite-element or fatigue analysis. Independent sampled adjacent-centerline gaps subtract both spoke half-widths and twice the displacement, checking a conservative no-contact envelope. There is no mating clearance, captive retention or fit tolerance because all bodies are permanently joined by flexures.

## Image workflow

PNG/JPEG, actual content/header validation, at most **2 MB, 12 MP, 6,000 px per side**. Input is normalized locally to at most 500 px on its longest side. Fit/contain or cover/crop, ±25% pan, physical footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm and Y ±2 mm placement. Threshold 1–254 or grayscale relief, 0.4–3 mm relief depth. Transparent pixels composite on white.

Exact conversion: draw to a white 20×20 Canvas grid; luminance = round(0.2126R + 0.7152G + 0.0722B). Threshold mode assigns depth to luminance below threshold, zero otherwise. Relief mode assigns depth × (1 − luminance/255). Two triangles per grid cell interpolate the top surface over a continuous 0.4 mm backing with closed walls and bottom. Embed the backing 0.15 mm into the hub floor, then solid-union it. This is **2D-to-relief / raised silhouette**, not full 3D reconstruction from one photo. Empty relief is blocked. The source and exact conversion grid are shown alongside the final model.

## STL workflow

ASCII and binary STL; explicit **millimeter confirmation** is required because STL has no unit metadata. Show source dimensions and mesh preview before integration. At most **2 MB / 1,500 triangles**, one connected closed outward-wound convex solid, 0.2–250 mm on every source axis. Supports broad flat-bottom, support-free convex grips only: no concave/hollow/branched models, disconnected components, unsupported overhang footprints or self-intersections. Bed contact must cover at least 25% of the XY bounding rectangle; all XY projections must lie inside the bottom convex hull. No arbitrary mesh repair is claimed or attempted.

XY scales proportionally to the chosen 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. Rotate around Z, center and place in the hub well. Fitted XY spans below 1.2 mm are rejected. The transformed source is fused by Manifold into the real wheel; final connectivity must remain exactly one component. All imported vertices must stay within the 6.5 mm radius protected hub zone, leaving 4 mm to the flexures. Imports cannot bridge sectors, stiffen spokes or change the rolling tread. Unsafe settings disable export with recoverable guidance. Replace/remove, reset image controls, reset transforms and return to built-in defaults are available.

### Privacy and portable files

All input processing occurs locally. No APIs, uploads, API keys or generation CDNs. Dependencies and WASM are bundled. Synthetic examples (`public/samples`) are original local geometric fixtures: PNG mark, JPEG sine waves, ASCII wedge and binary frustum, with attribution notes. No personal input is committed. Save JSON intentionally includes the bounded normalized image data/pixels or verified indexed STL payload. Reopening revalidates mesh payloads; missing image payloads explicitly require reattachment rather than pretending restoration succeeded. JSON limit: 2 MB.

## Print and calibration

**TPU 95A only**, not PLA/PETG for this mechanism. Flat Z=0 face down, 0.4 mm nozzle, 0.2 mm layers, at least three perimeter lines and 100% infill in flexures. All built-in and accepted import geometry is bed-up/support-free. Clean strings from the six sectors. No supports, hardware, joint release or assembly. Print **Soft Six** first as a full-size calibration of filament, extrusion and tactile response. Begin below 0.5 mm radial compression; stop if roots whiten, tear, or take a permanent set. No force, fatigue lifetime or universal tolerance is promised. Imports affect the rigid hub only. Physical print testing has **not** been performed.

## Validation and development

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Build warnings about a bundled large Three.js chunk and externalized Node-only module paths in Manifold are expected; real browser generation checks ensure the browser/WASM path works. Main dependencies: React, Three.js, manifold-3d; development: Vite, React plugin, Playwright; deployment: gh-pages. No server at runtime.

- Per-edit worker preflight: finite vertices, nondegenerate triangles, welded edge incidence two, opposite neighboring edge direction, positive volume, one connected Manifold solid and mechanical bounds.
- Independent exported-binary-STL checks: normalized consistent normals, triangles/finite coordinates, positive volume per connected component, bounds in mm, outward winding and closed welded edges. Euler genus must be six (six open spoke sectors).
- `validate.mjs`: defaults, minima/maxima, all 64 range corners, three presets and deterministic variations; both STL fixtures and synthetic image modes on defaults/extremes/presets. CSG probes verify spoke material, sector voids and import isolation outside the hub.
- `browser-test.cjs`, `extra-browser.cjs`, `mobile-sheet.cjs`: real PNG/JPEG/ASCII/binary file picker imports, geometry-sensitive downloads, threshold/depth/content/scale/placement, malformed/excessive/unsupported inputs, undo/redo, portable JSON round trips, colours, presets/variations, drag/drop, phone orbit/pinch and reachable exports.
- `gallery-test.cjs`: inline JavaScript compilation and runtime gallery preservation.

See generated JSON reports and `VALIDATION.md` for observed outcomes. Geometry/topology and conservative mechanism checks do not prove real-world motion, user safety or fatigue performance. A material calibration print is still required.

## Publishing

App Vite base `/daily-app2/20261024-3/`; app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined site must be published from the **root** `npm run predeploy` and `npm run deploy`, never from this app's independent deploy script.
