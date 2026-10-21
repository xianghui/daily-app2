# Crank Quiet — slider-crank fidget studio

An original browser-based parametric physical fidget generator built with React + Vite. Turn a grooved crank wheel to sweep a thumb slider through a 16–24 mm reciprocating stroke. A pivoted, constant-length connecting rod changes angle throughout the turn: this is not a Scotch yoke or crossed slide. Nudge the slider to back-drive the crank, except at its two dead centers; use the wheel to cross those positions. Eight separately printed parts, no purchased hardware.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
TEST_BASE=http://127.0.0.1:5213 node browser-test.cjs
TEST_BASE=http://127.0.0.1:5213 node extra-browser.cjs
```

The model-first canvas, warm clay palette, compact parameter rail and persistent export area interpret https://vaseverse.org/ as a UX reference. No reference branding, assets, wording or source are copied. Phone controls use tabs, a collapsible sheet and fixed reachable exports. Touch orbit/pinch, fit/zoom, part selection, undo/redo, three actual-model preset thumbnails, bounded variations and portable JSON save/open are functional. STL contains geometry, not preview colours.

The primary Download STL always exports the **print layout**, even in assembled inspection mode. Individual part downloads and a ZIP with all eight STL files plus assembly notes are offered. The single-row combined layout may exceed your printer bed: arrange the separately closed parts in your slicer, or use individual downloads. Preview and export use exactly the same generated meshes. Assembly position changes do not change export geometry.

All user files are processed locally in a worker/browser; there are no uploads, API keys, paid services or generation APIs. Dependencies are bundled locally: manifold-3d WASM performs real solid booleans; Three.js renders those final solids; fflate creates ZIPs; React/Vite provide the UI/build and Playwright tests real browser interactions. No CDN imports are used. Synthetic samples are original generated art and meshes, with no personal data or external attribution needed.

## Mechanism and dimensions

For throw `e`, rod length `L` and wheel angle `a`, crank pin is `(e*cos(a), e*sin(a))`; slider X is `e*cos(a)+sqrt(L²-e²*sin(a)²)`. The rod is oriented from the crank pin to the slider pin. The supported range ensures `L > 2e`; total stroke is exactly `2e`. The guide slot extends from `L-e` to `L+e`, with semicircular ends and a Ø5 mm stem plus radial running clearance. A Ø12 mm keeper flange below the plate prevents upward removal once friction-seated into the slider socket; the Ø12 mm slider above the plate prevents downward removal. Radial retention overlap is at least 3 mm on both slot edges. No intentionally moving body is boolean-unioned to another.

The crank turns on a Ø6 mm integral base axle. A friction-seat Ø10 mm cap retains it with 0.5 mm axial headroom. Ø4 mm pins on crank/slider carry the 2.4 mm connecting rod; small caps retain it with 0.1 mm axial headroom. The rod plane is 5 mm above the crank plate, leaving 1.3 mm over the main axle cap. The crank throw starts at 8 mm, keeping its rising pin clear of the center cap. The assembled toy extends below its palm plate: hold it above the table so the lower keeper can slide freely. It is not a table-standing mechanism.

The stationary palm-tab safe zone is Ø13 mm, centered at `(0, -palmWidth/2-10)`, outside all moving envelopes. Imported features only alter this grip, never the slot, pins, bores or caps. CSG uses real unions; each required component must remain one closed connected solid. No interpenetrating visual-shell export is used.

| Parameter | Range |
| --- | --- |
| Palm width | 42–58 mm |
| Palm plate thickness | 3–5 mm |
| Crank throw | 8–12 mm, stroke 16–24 mm |
| Crank plate thickness | 2.4–3.6 mm |
| Rod center spacing | 36–44 mm |
| Static cap/keeper socket radial allowance | −0.08 to +0.08 mm |
| Crank rim groove depth | 0–0.6 mm |
| Moving radial/axial clearance | 0.2–0.5 mm |
| Imported grip footprint | 4–7 mm |
| STL grip height | 0.6–5 mm |
| Z rotation | −180 to +180 degrees |
| Import X/Y offsets | ±1.5 / ±2 mm, constrained by safe zone |

All dimensions are millimeters unless degrees/pixels are shown. Nonfinite/out-of-range settings and unsafe import placements pause export. Static friction-fit intersections are intentional only between caps/axles and keeper/slider, never at moving interfaces. Their success depends on printer/material calibration, not digital validation alone.

## Image workflow

PNG and JPEG, 16 bytes–2 MB, at most 12 megapixels and 6,000 pixels per side. Magic bytes, dimensions and decoded size are checked before conversion. Files are downsampled locally to a portable image up to 500 px per side, then resampled to a 20×20 grid after contain/cover fit and ±25% crop shifts. Transparent pixels composite over white. Luminance is `0.2126R + 0.7152G + 0.0722B`.

Threshold mode raises dark samples by selected depth (threshold 1–254); grayscale mode raises by `depth*(1-luminance/255)`. Depth is 0.4–3 mm. The triangulated grid is a continuous height field on a closed 0.4 mm backing, embedded 0.15 mm into the solid palm tab and boolean-unioned. Threshold boundaries interpolate between samples, not a sharp vector trace. Empty conversions are rejected. Source image and the exact conversion grid are shown beside the live final model. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photograph**. Changing image pixels, threshold, depth, fit or scale changes exported geometry.

## STL workflow and bounded support

ASCII and binary `.stl`, 40 bytes–2 MB, at most 1,500 triangles. The parser checks finite coordinates, triangle area, welded edge incidence and opposite neighboring winding, connectedness, positive volume, dimensions 0.2–250 mm in each axis, and triangle intersections. Only one outward-wound **convex solid with a broad flat Z-bottom** is supported. All XY projections must lie inside its bottom footprint; bottom area must cover at least 25% of the XY bounding rectangle. Concave, open, nonmanifold, hollow, disconnected, overhanging, degenerate and truncated meshes are rejected with guidance. No repair is claimed or attempted.

STL has no unit metadata. The user must confirm millimeter coordinates before integration. Source dimensions and a separate source 3D preview are shown. XY is proportionally scaled to footprint; Z is independently scaled to the height control. Z rotation, center/reset and XY placement are editable; final fitted XY spans must remain at least 1.2 mm. The grip is fused into the stationary palm tab with a real boolean operation. A disconnected result or unsafe placement is rejected. Arbitrary imported shapes are deliberately not supported.

Both workflows have replacement, removal and transformation reset. Synthetic local fixtures (`public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`) are generated test artwork/geometry, require no attribution, and contain no personal files. All files are processed locally, never uploaded. JSON explicitly includes the bounded source mesh or normalized image for portable reopening. Browser tests verify no external requests.

## Printing, assembly and calibration

1. Print all parts with flat bases down as exported, cap sockets up. The slider's underside socket requires a roughly 5 mm bridge; inspect your slicer. No supports are intended for generated parts and accepted convex flat-bottom grips.
2. PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Minimum base 3 mm, crank/rod 2.4 mm, cap roofs 1.2 mm. Clean strings without changing bearing dimensions.
3. First print the crank wheel and axle cap as Ø6 mm fit trials; test the guide stem/slot using the slider keeper. Running-clearance starting presets: snug 0.20, standard 0.30, roomy 0.45 mm. These are not universal tolerances. Static socket allowance starts at 0; adjust in 0.02 mm steps. Reprint loose caps or a loose keeper tighter.
4. Place the crank over the base axle. Place the slider above the guide slot, insert its keeper upward through the slot into the underside friction socket, and seat fully. The keeper flange remains below the plate with the selected running clearance.
5. Invert and friction-seat the main axle cap. Place the rod over the raised eccentric pin and slider pin; invert and seat their smaller caps with roofs against pin ends. Do not clamp or glue any moving interface.
6. Hold the palm plate above the table and turn a complete revolution by hand. Check for binding, loose retention and strings before use. Turn the wheel to cross back-drive dead centers. Disassemble by pulling friction-seat parts apart, not bending pins.

No compliant springs, bearings, magnets, screws or other purchased hardware. Small removable parts are not a child's toy. **No physical print, strength, fatigue, friction, wear or retention test has been performed.** Digital geometry/motion checks do not guarantee material fit or longevity.

## Validation performed

`node validate.mjs` generates defaults, all three presets, min/max, every one of 256 parameter-range corners and eight deterministic variations: 270 cases. Each part and combined print layout are exported and reparsed. Checks include finite coordinates, nonzero triangles, stored normals, consistent outward winding, positive volume of every connected component, welded edge incidence exactly two (1e-5 mm tolerance), expected millimeter bounds, bed-flat origins and separated print-layout bounding boxes.

Kinematic endpoint/slot-limit checks sample 145 angles per case. Defaults, extremes and 24 image/STL/preset-derived models also receive actual solid-intersection checks across 36 poses, pairwise across all eight parts. Only bounded static friction-fit intersections are allowed. This checks geometry and clearance, not stresses or physical print behavior. Threshold/height-map images and both supported STL formats must change output geometry relative to the built-in grip. Invalid dimensions, nonfinite transforms, unsafe placements, unconfirmed units, empty images and malformed content are rejected.

`browser-test.cjs` uses real browser file inputs and actual downloaded STL bytes for PNG, JPEG, ASCII STL and binary STL. It compares geometry to defaults and exercises threshold/depth/pixel/crop/scale/rotation/placement changes, replace/remove/reset, excessive or malformed files, open/nonmanifold/concave meshes, excessive triangle/pixel/dimension inputs, safe-zone violations and invalid settings. Download hashes must equal the final preview geometry signature. Individual part exports are validated. Phone widths 390 and 320 check no horizontal clipping, reachable export, real touch orbit/pinch and image/STL picker downloads.

`extra-browser.cjs` exercises every preset and four variations, undo/redo, all four portable imported-source JSON round trips, ZIP contents, drag/drop and geometry-neutral preview colours. Geometry/browser/gallery JSON reports and desktop/phone screenshots document executed checks. Root scripts are compiled with `new Function`; gallery entries are preserved, the new entry is unique with area `stl`, and browser rendering/filtering is checked. Production smoke tests use the final combined deployment folder before publication.
