# Liftlink Turn

A browser-based parametric, hardware-free **lift-out idler gear clutch fidget**. Turn either outside wheel to turn the other in the same direction. Raise the middle idler to disconnect the drive, independently turn the outside wheels, then gently rock a wheel to align the teeth and lower the idler to reconnect. This is a new engagement/disengagement mechanism, not a recoloured spinner or keycap.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node additional-test.cjs
node resilience-test.cjs
node hole-test.cjs
node stale-import-test.cjs
```

Production is served at `http://127.0.0.1:5340/daily-app2/20261026-23/`. The root monorepo publishes the combined site; this app still has the requested `predeploy: npm run build` and `deploy: gh-pages -d dist` scripts. Generation/export has no backend, API keys or CDN imports.

## Studio

The read-only Keycap Studio reference informed the concrete studio design: lavender-grey desk, white left panel, locally bundled Fredoka/Rubik fonts, coral raised buttons, paired sliders/mm fields, collapsible sections, sticky brand and persisted dark theme. Three real model-thumbnail presets, bounded random variations, undo/redo, six named local designs and portable JSON save/open are implemented. The desktop sidebar is 374 px. Phones stack toolbar/preview, dimensions, feedback and export before the controls. Three.js orbit, touch pinch, zoom and fit work on both.

Views: assembled lift clutch, exploded, print plate, palm only, moving gears and each isolated gear; optional see-through palm. Lift and turn are **preview-only configurations**, never an assembled-overlap export. The free-mode preview illustrates independent outer rotation and is not an automatic tooth-alignment or contact simulation. Hold level: all gears are deliberately **non-captive**, removable vertically; there are no hidden snap fits or impossible assembly paths.

## Parameters, all physical lengths in millimeters

| Control | Supported range |
|---|---|
| Palm diameter | 22–28 mm; round, hex or oval |
| Equal gear pitch radius | 12–14 mm |
| Gear face thickness | 4–6 mm |
| Bearing radial running clearance | 0.3–0.6 mm per side |
| Tall lift guide reserve | 6–8 mm |
| Palm dimple depth | 0–0.6 mm |
| Personalized footprint | 4–7 mm maximum XY dimension |
| Imported STL height | 0.6–5 mm (independent Z scaling) |
| Personalization rotation | −180° to 180° |
| Palm placement | X ±1.5 mm; Y ±2 mm, bounded circular keep-out |
| Image depth | Raised 0.4–3 mm; engraved 0.4–0.6 mm |

Each 16-tooth involute gear uses a 20° pressure angle and module = pitch radius/8. Neighbor center spacing is twice pitch radius + 0.1 mm. Tooth flank allowance is one quarter of the selected running clearance (0.075–0.15 mm), keeping tooth tips at least 0.829 mm wide throughout the supported range. The through bores are 4 mm plus twice the radial clearance. Hubs have at least 3.4 mm radial walls. The 5 mm palm has a 0.8 mm well; maximum engraving retains 3.6 mm solid floor. The extra-tall central post guides an idler lift of face thickness + clearance (4.3–6.6 mm); it does not latch the gear raised. Palm imports remain at least 17 mm away from the nearest gear sweep.

## Local image → actual printable relief

PNG, JPEG and a strict safe subset of SVG are supported by both file picker and drag/drop. Source and checkerboard conversion previews are shown. Files must be 16 bytes–2 MB; PNG/JPEG headers must describe at most 12 MP, at most 6,000 px per side. Decoded dimensions must match. Images are normalized locally to at most 500 px; SVG is locally rasterized to 256 px, allows at most 2,000 simple filled elements, and rejects scripts, external references, text, effects and unsupported elements.

The source is fit/contained or fill/cropped, shifted ±25%, composited on a light/dark background and resampled into a bounded **20×20 luminance grid**. Threshold 1–254 converts dark samples into raised heights; grayscale mode uses `depth × (1 − luminance/255)`. Samples form a closed triangulated height-field on a 0.4 mm backing. That backing is embedded in the recessed palm floor and boolean-unioned (or the height-field is reflected and subtracted for engraving). Bright internal holes remain unraised/unengraved, not filled with a convex hull. The exact grid cutout appears on a checkerboard. This is sampled relief with interpolated slopes, **not exact vector outline tracing or reconstruction of a complete 3D object from one photo**. White-only silhouettes are rejected. Size, depth, style, threshold, background, crop, rotation and placement all affect exported geometry. Bundled text and six searchable original SVG icons use this same real geometry path.

## Local STL → integrated palm grip

Accepts actual binary and ASCII STL, ≤2 MB and ≤1,500 triangles; each source dimension must be 0.2–250 mm. Select Z/Y/−Z up before attachment; changing it clears the source and asks for reattachment. An interactive source preview, original oriented XYZ dimensions, triangle count and detected format are displayed. **Explicit millimeter confirmation is required: STL has no unit metadata.** XY scales proportionally to the requested footprint and Z independently to the height; rotation, X/Y placement and center/reset are available.

Supported geometry is intentionally limited to a **single outward-wound, closed, convex solid with a broad flat bottom and no unsupported overhang footprint**. The flat base must occupy at least 25% of the XY bounding rectangle and contain all projected vertices. The original triangles are used in Manifold boolean union into the actual palm; they are not replaced by a hull or merely re-exported. Open, nonmanifold, self-intersecting, inward-wound, disconnected, concave, excessively thin, oversized or unsupported meshes fail with actionable guidance. No mesh repair is claimed. All import vertices must stay in the radius-6.5 mm palm keep-out zone and the final palm must remain one closed connected solid.

## Privacy and restoration

All files are processed in the browser, never uploaded. Only original synthetic fixtures are bundled: `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`. No personal input assets are in the repository. JSON and named designs embed bounded normalized image data or validated mesh arrays; missing image payloads require reattachment instead of pretending the design was restored. JSON is limited to 2 MB; portable image dimensions are at most 250,000 pixels and STL payloads are re-parsed and revalidated. Named designs and theme live only in localStorage.

## Geometry, worker and exports

Manifold WASM performs solid modeling in a local module Web Worker. Bounded tessellation, 100 ms debounce, generation IDs and exact current-state keys keep editing responsive and prevent stale export. Parser/import errors, invalid settings, pending conversion or worker errors block **all** export actions. The last valid preview is labelled while blocked. Preview and binary STL share the same checked meshes; a geometry fingerprint is exposed for reproducible browser/download comparisons.

One-click binary STL is available for the separated print plate and every part, plus Everything ZIP with four independent STLs and assembly notes. STL stores no preview colour; no fake 3MF is offered. Every part is placed with its flat bed at Z=0 and print-plate pieces are separated by 6 mm. Final dimensions are shown for the selected export. The single-row combined plate can exceed a 220 mm printer bed; use the individual-part STLs or re-arrange the separate ZIP parts in your slicer. Worker checks validate finite coordinates, nondegenerate triangles, outward winding, positive volume and two opposite-directed faces per edge after 0.00001 mm welding, including float32-translated plate parts.

## Printing and use

Print **all four parts flat, hubs and posts UP** in PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, 25–35% infill. No supports or additional hardware are intended. Print **Gentle Start as a full-size calibration set**; try it before increasing size or reducing clearances. Tolerances depend on your printer, material, slicer and elephant-foot compensation. Deburr bores and tooth edges, never force meshing, and keep fingers clear of tight tooth gaps. Place outside gears on their short posts, central idler on the tall post, align teeth gently. Lift the idler at least the shown disengagement distance and hold it there while turning freely. Lower only after alignment. To disassemble, lift gears fully off their posts. Parts are not captive: use level and do not shake upside down.

Computational mesh/kinematic checks do **not** establish friction, wear, force or real FDM fit. **No physical print or durability testing was performed.** See [VALIDATION.md](./VALIDATION.md) and machine-readable reports for checks actually run.

## Dependencies and licenses

React/Vite, Three.js (MIT), Manifold-3D (Apache-2.0), fflate (MIT), gh-pages (MIT), Fontsource Fredoka/Rubik (SIL OFL fonts), Playwright test tools (Apache-2.0). All runtime dependencies and fonts are bundled locally. Shared generic import/editor utilities come from earlier apps in this repository; the new gear clutch geometry and mechanical validation are app-local. The reference and archived gallery were read only and were not built, deployed or modified.
