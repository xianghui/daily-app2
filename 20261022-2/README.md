# Face Tide — axial face-cam fidget studio

A React + Vite, client-only parametric STL editor. Lightly press and rotate a retained dial: opposing three-to-six-lobe sinusoidal **axial** face cams lift and settle it repeatedly. Hand pressure provides preload, not a spring. This is distinct from the collection's radial eccentric cam, ratchet and barrel-cam groove mechanisms. Three printed parts: stationary palm cam and integral axle, inverted turning cam, and friction-seat cap. No bearings, magnets or purchased hardware.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
```

The slim-header, model-first canvas, grouped parameter rail, variations, clay palette, and persistent exports interpret https://vaseverse.org/ as a UX reference. No reference branding, assets or source are used. Preset thumbnails render each real generated model. Mobile has touch orbit/pinch, section tabs, a collapsible control region, and a fixed export area. Object selection highlights the actual part; fit and zoom controls remain available.

Download STL always exports the **print layout**, never the assembled preview pose. Each component has its flat back on Z=0, with cam waves or cap socket facing up. Individual-part binary STL and a ZIP containing all three parts and assembly notes are available. Preview and STL use the exact same final generated meshes. Colours are preview-only; STL contains geometry, not colour. Undo/redo records modeling actions; JSON save/open includes bounded portable import payloads, not missing-file placeholders. No cloud account or API is used.

## Geometry and mechanism

Locally bundled `manifold-3d` WASM performs real boolean unions/subtractions, not interpenetrating render shells. A worker generates the final meshes and preflights STL input. Three.js renders those meshes; `fflate` packages ZIP files. React, Vite, gh-pages and Playwright provide UI, build, publishing and tests. No CDN imports or remote generation dependencies.

Cam annuli use 240 angular segments. Their nominal top heights are `plate + 0.2 + rise*(1+cos(lobes*theta))/2`. Contact annuli share radial limits 6.5 mm to `dialRadius-3 mm`; a 0.2 mm continuous foundation prevents tangent/sliver union boundaries at the valleys. Nominal opposed-cam elevation is `baseThickness + rotorThickness + 0.4 + rise*(1+abs(cos(lobes*angle/2)))`. The assembled **inspection preview adds 0.15 mm axial gap** to show clearances despite triangulation; hand pressure closes this gap. Physical faceted contact height differs slightly from the continuous formula. Nominal axial stroke is the selected rise. No force, fatigue or friction simulation is claimed.

The shaft is Ø6 mm. The rotor bore has adjustable radial running clearance. A Ø12 mm cap radially overlaps the rotor bore by at least 2.5 mm; its friction socket seats on the shaft end. At maximum inspection elevation it leaves 0.4 mm headroom (at least 0.55 mm after nominal contact). The cap/shaft friction fit intentionally permits a small static interference, never a moving-part intersection. Retention depends on calibrating the cap seat; a loose cap must be reprinted tighter. There is no universal fit guarantee.

The outboard palm tab receives the custom grip. Its 13 mm diameter safe zone remains at least 5 mm outside the rotor envelope, regardless of imports. It is stationary but mechanically useful: hold/rub it while rotating the dial. Imports cannot alter the axle, cam faces or retention cap.

## Parameters — millimeters unless stated

| Parameter | Supported range |
| --- | --- |
| Dial diameter | 42–58 mm |
| Palm plate thickness | 3–5 mm |
| Cam rise / nominal stroke | 0.8–1.6 mm |
| Rotor plate thickness | 2.4–3.6 mm |
| Pulses per revolution | 3–6, whole numbers |
| Cap socket radial allowance | −0.08 to +0.08 mm |
| Rim groove depth | 0–0.6 mm |
| Axle radial running clearance | 0.2–0.5 mm |
| Imported grip footprint | 4–7 mm |
| STL grip height | 0.6–5 mm |
| Import Z rotation | −180 to +180 degrees |
| Import offsets X / Y | ±1.5 / ±2 mm, subject to safe zone |

Every edit updates real geometry without reload. Invalid/nonfinite settings or unsafe import placements pause export with recoverable feedback. Randomization stays in supported ranges. Cam slope at the inner contact radius is screened below 45 degrees; minimum plate thickness is not changed by texture.

## Image workflow

PNG and JPEG, 16 bytes–2 MB, at most 12 megapixels and 6,000 pixels per side. Magic bytes, dimensions and decoded size are checked before conversion. Files are downsampled locally to a portable image up to 500 px per side, then resampled to a 20×20 grid after contain/cover fit and ±25% crop shifts. Transparent pixels composite over white. Luminance is `0.2126R + 0.7152G + 0.0722B`.

Threshold mode raises dark samples by selected depth (threshold 1–254); grayscale mode raises by `depth*(1-luminance/255)`. Depth is 0.4–3 mm. The triangulated grid is a continuous height field on a closed 0.4 mm backing, embedded 0.15 mm into the solid palm tab and boolean-unioned. Threshold boundaries interpolate between samples, not a sharp vector trace. Empty conversions are rejected. Source image and the exact conversion grid are shown beside the live final model. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photograph**. Changing image pixels, threshold, depth, fit or scale changes exported geometry.

## STL workflow and bounded support

ASCII and binary `.stl`, 40 bytes–2 MB, at most 1,500 triangles. The parser checks finite coordinates, triangle area, welded edge incidence and opposite neighboring winding, connectedness, positive volume, dimensions 0.2–250 mm in each axis, and triangle intersections. Only one outward-wound **convex solid with a broad flat Z-bottom** is supported. All XY projections must lie inside its bottom footprint; bottom area must cover at least 25% of the XY bounding rectangle. Concave, open, nonmanifold, hollow, disconnected, overhanging, degenerate and truncated meshes are rejected with guidance. No repair is claimed or attempted.

STL has no unit metadata. The user must confirm millimeter coordinates before integration. Source dimensions and a separate source 3D preview are shown. XY is proportionally scaled to footprint; Z is independently scaled to the height control. Z rotation, center/reset and XY placement are editable; final fitted XY spans must remain at least 1.2 mm. The grip is fused into the stationary palm tab with a real boolean operation. A disconnected result or unsafe placement is rejected. Arbitrary imported shapes are deliberately not supported.

Both workflows have replacement, removal and transformation reset. Synthetic local fixtures (`public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`) are generated test artwork/geometry, require no attribution, and contain no personal files. All files are processed locally, never uploaded. JSON explicitly includes the bounded source mesh or normalized image for portable reopening. Browser tests verify no external requests.

## Printing, assembly and calibration

1. Slice the **print layout** or individual STLs flat backs down. All cam faces and the cap socket point up. Base axle prints vertically. No supports are intended for generated parts or accepted convex, flat-bottom grips. Confirm orientation in your slicer.
2. PLA or PETG; start with a 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Minimum rotor plate 2.4 mm, base plate 3 mm and cap roof 1.5 mm. Clean strings and deburr without removing bearing dimensions.
3. Calibrate using the actual rotor and cap first (individual exports). Start radial axle clearance at 0.3 mm; 0.2 mm is snug, 0.45 mm roomy. Adjust for your printer/material.
4. Invert the turning cam onto the base shaft, wave faces facing. Turn a full revolution by hand before installing the cap.
5. Invert and friction-seat the cap until its roof reaches the shaft end. Never clamp or glue the turning rotor. Cap allowance starts at 0; reduce in 0.02 mm steps if loose, increase if too tight. Reprint a loose cap rather than pretending it securely retains the rotor.
6. Hold the tab, apply light thumb pressure and turn. The dial can lift freely when pressure is removed; this is intentional. Remove cap to disassemble. Do not force a binding fit.

No physical print, wear, force or long-term retention test has been performed. Digital geometry checks do not certify material behavior. Nominal stroke and fit are starting dimensions, not precise slicer time or fatigue predictions.

## Validation

`node validate.mjs` exports and reparses defaults, every preset, minimum/maximum, all 256 min/max parameter corners and eight deterministic variations: 270 cases. It checks all three solids separately and in print layout: finite/nondegenerate triangles, normals, welded two-face edge incidence (1e-5 mm tolerance), consistent winding, positive volume per component and millimeter dimensions. It screens cam elevation and cap clearance at 73 angular samples. Full solid intersection tests at 24 angular positions cover default/extremes and each of 24 image/STL/preset-derived cases; static friction-seat interference is bounded separately. Lowering the inspection-pose dial by 0.3 mm must create cam contact at each tested angle, bracketing actual contact within that interval. Print-layout bounding boxes are checked separately for nonintersection. Invalid parameters, empty images and unsafe/unconfirmed imports are rejected.

`TEST_BASE=http://127.0.0.1:5211 node browser-test.cjs` uses real browser file pickers and actual STL downloads for PNG/JPEG/ASCII/binary STL. It compares output fingerprints to the no-import model and checks changed threshold, depth, pixels, scale, rotation and placement. It tests malformed/truncated/open/nonmanifold/oversized/concave meshes, excessive pixels/triangles/dimensions, empty silhouettes, recovery, reset/remove, min/max controls, individual exports and phone widths 390/320 with actual touch orbit/pinch.

`extra-browser.cjs` tests all presets, variations, undo/redo, all four portable save/open import round trips, ZIP contents, drag/drop and colour neutrality. JSON reports and screenshots record performed checks, not physical print evidence. Root gallery tests compile every inline script, preserve prior entries, verify the new entry exactly once, and render/filter it in a browser. Final production tests run against the combined deployment artifact before publication.
