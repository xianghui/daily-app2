# Toggle Passage

A local React + Vite parametric STL studio for an **orientation-selective oblong toggle**. Align its long button with an oblong eye, lower through from above, turn crosswise beneath the eye, gently pull against the underside, then lower, realign and lift free. This is not a bayonet channel, ratchet, spring detent or permanently captive closure. No hardware required.

## Studio

Large live Three.js model, orbit/pinch/zoom/reset-fit, 10 mm ground grid, millimeter dimensions, active-part picking, matte colour palette, right-hand tabs and collapsible phone controls with fixed export. Three actual mesh thumbnails/presets (Pocket Eye, Toggle Passage, Long Button), bounded variations, undo/redo and portable local JSON save/open. The default preview is a separated bed-flat print layout; assembled rotation and aligned lift are illustrative rigid poses, not contact/force simulation. Exports always use the same worker-generated final geometry, not a second export-only model. STL stores geometry, **not preview colour**.

UX direction: https://vaseverse.org/ — model-first controls, presets, local settings, restrained warm studio. No copied branding, assets, text or source code. Shared local import/export infrastructure adapted from the earlier Daily Object Lab studios; the button-and-eye solid mechanism and tests are new.

## Local imports

Use a picker on desktop/phone, or drag one file onto Import. Replace/remove and reset transforms are supported. All data remains in browser memory; no upload, cloud API, API key, paid service or CDN. Synthetic bundled fixtures are documented in `public/samples/README.md`; no personal files are committed.

**PNG/JPEG:** maximum 2 MB, 12 megapixels, 6,000 pixels per side. Actual signature/dimensions checked before decoding. Images normalize to at most 500 px on the long side, then sample to a 20×20 luminance grid after contain/cover and ±25% crop shifts. Luminance = .2126 R + .7152 G + .0722 B, transparency composited over white. Threshold mode gives dark samples the chosen depth and others zero; grayscale gives depth × (1 − luminance/255). Triangulated interpolated heights sit on a continuous 0.4 mm backing, sunk 0.15 mm into the recessed palm floor and Boolean-unioned with the body. Empty relief is rejected. This is **2D-to-relief**, not reconstruction of a complete 3D object from a photo. Source and exact sampled-grid previews are shown alongside the final model. Depth .4–3 mm; threshold 1–254; footprint 4–7 mm.

**ASCII/binary STL:** maximum 2 MB and 1,500 triangles; source dimensions each .2–250 mm. STL has no unit metadata: explicit millimeter confirmation is mandatory. Parser checks complete facets, finite coordinates, welded edge incidence and winding, positive volume, connectedness, degenerate faces and triangle intersections. Deliberately supported subset: one convex solid with a broad flat Z-bottom (at least 25% of footprint) and all XY projections inside that bottom footprint. Open/nonmanifold, concave, hollow, disconnected, inverted or overhanging sources are rejected with guidance; no repair is claimed. Simplify and orient your model externally first. Source 3D preview/dimensions remain visible. XY scale proportionally fits 4–7 mm; Z independently fits .6–5 mm. Rotate around Z ±180°, X offset ±1.5 mm, Y ±2 mm, or center/reset. Fitted XY minimum span 1.2 mm. Boolean union must produce exactly one closed palm component. Every transformed vertex must remain within the 6.5 mm palm safe radius. Moving toggle and eye interface cannot be modified by imports.

JSON contains a bounded normalized image PNG plus controls/pixels, or a bounded validated mesh payload. Opening reruns validation and restores the portable import; missing image payload is explicitly rejected with a reattachment message. JSON maximum 2 MB. Save files contain the chosen source; save only when you intend to preserve it.

## Parameters (millimeters)

| Parameter | Range | Effect |
|---|---|---|
| Toggle major length | 26–34 | Button/eye long axis |
| Eye frame width | 3–5 | Structural rail surrounding eye |
| Toggle minor width | 8–10 | Button/eye short axis |
| Per-face passage clearance | .25–.55 | Slot expansion around button |
| Free stem height | 4–6 | Axial turning space |
| Palm dimple depth | 0–.6 | Real shallow subtractive texture |

Eye and button thickness 2.4 mm, stem diameter 5.2 mm, upper knob diameter 16 mm. The knob grows from the stem at 45° before its cap. Computational checks enforce minimum rail, stem space, crosswise overlap, upper-knob overlap and import isolation. Every numeric field is paired with a slider. Invalid values disable exports instead of silently clamping geometry.

## Print, export and assembly

Download binary STL as both separated solids or either individual part; ZIP contains both individual STL files and assembly guide. Filename includes mechanism/source/size/selection. X/Y/Z dimensions follow selected export. Print palm eye broad-face down and toggle long button down, exactly as exported. PLA/PETG, .4 mm nozzle, .2 mm layers, ≥3 perimeters; no supports intended for the 45° knob, but printer overhang quality must be calibrated. No flexure or extra hardware. Deburr passage edges gently, never force a diagonal button through. Pocket Eye is the full-size fit coupon; .25 snug/.4 balanced/.55 loose per-face clearances are only starting points and vary by printer/material.

Keep the knob above the eye during assembly. Rotate only once the button is fully below the eye. Crosswise tips resist upward pull; aligned button deliberately comes free. The top knob prevents downward loss. This is a fidget, not a load-bearing lock. Small removable part; not for children.

## Dependencies and commands

Runtime: React/React DOM, Three.js, local `manifold-3d` WASM for robust solids, `fflate` ZIP. Development: Vite, React plugin, Playwright. All generation is bounded and runs in a local Web Worker; no remote imports.

```sh
npm install
npm run dev
npm test
npm run predeploy
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

Browser tests use local dev port 5280; `TEST_BASE` supports a locally served production deployment. Root monorepo `npm run predeploy` / `npm run deploy` publishes the combined collection. Individual `predeploy` and `deploy` scripts remain configured as requested.

## Validation scope

Independent binary-STL parser checks triangles, finite coordinates, nonzero face area, stored normals, outward winding, closed edges after welding at 1e-5 mm, positive volume per component, component count, Euler characteristic and millimeter bounds. Every edit also receives worker-side final-solid checks before export. Tests cover defaults, all 64 parameter corners, presets, representative variations, image relief/threshold and both STL fixtures, transform/content differences, malformed/excessive files, empty silhouettes and recoverable errors. Solid intersections probe the entire 90° below-eye turn, aligned passage, crosswise pull-through obstruction, knob retention, separated export parts and import isolation. Browser tests compare downloaded STL to the exact preview fingerprint, exercise save/open, undo/redo, ZIP/individual exports, phone touch orbit/pinch and controls at 320/390 px.

These are geometry and kinematic checks, **not actual print, force, friction, wear or cycle tests**. Calibration and a physical print are still required. See generated validation JSON and VALIDATION.md for observed run results.
