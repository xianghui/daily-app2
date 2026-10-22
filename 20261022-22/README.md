# Slope Sonata

A local-first React + Vite studio for a six-part, hardware-free **inclined swashplate and rocking follower fidget**. Turn the sloped rotor while resting a thumb on the follower: the rotating plane lifts and settles a transverse rocker. This is rotary-to-angular contact motion, not a free spinner, axial sliding face-cam pair, polar cam shuttle or previous linkage reskin. Gravity maintains contact; the follower is retained on its axle but can lift off the plate. Hold the base level.

The warm, model-first UX references https://vaseverse.org/ without copying its branding, source, assets or text. The reusable local editor/import shell originates in this repository; the swashplate, rocker, geometry, contact solver and checks are specific to this app.

## Run and build

```sh
npm install
npm run dev -- --port 5240
npm test
node browser-test.cjs
node extra-browser.cjs
node roundtrip-test.cjs
npm run predeploy
```

Browser tests require Playwright Chromium. Default URL: `http://127.0.0.1:5240/daily-app2/20261022-22/`. Production test uses a Vite preview server; gallery test uses root server at 5246. Public publishing uses **root monorepo** predeploy/deploy, not the standalone per-app deploy script.

Dependencies: React/React DOM, Three.js/OrbitControls, Manifold WASM for actual boolean solid modeling, fflate for ZIP, Vite/React plugin, gh-pages and Playwright. Generation runs in a worker. Runtime dependencies and WASM are bundled locally; no CDN, API, key, paid service or file upload.

## Units and controls

| Control | Range / default |
|---|---|
| Swashplate diameter | 36–48 mm / 42 |
| Follower reach offset | 4–6 mm / 5; total lever reach is rotor radius plus offset |
| Swash angle | 6–12 degrees / 9 |
| Running radial/axial clearance | 0.25–0.50 mm / 0.35 |
| Palm-tab radius | 7–9 mm / 8 |
| Palm groove depth | 0–0.5 mm / 0.3 |
| Socket radial allowance | −0.08 to −0.01 mm / −0.03 |
| Assembled preview | 0–360 degrees plate rotation |
| Imported footprint | 4–7 mm longest XY dimension / 6 |
| Imported STL height | 0.6–5 mm independently fitted Z / 3 |
| Import rotation / placement | Z ±180 degrees; X ±1.5 mm; Y ±2 mm |

All model dimensions and exported bounds are millimeters. Degrees and threshold intensity are explicitly labeled. Three actual presets change diameter, slope, lever reach and palm ergonomics; thumbnails use generated geometry. Variations stay in validated ranges. Undo/redo retains up to 35 modeling snapshots. Save/Open JSON includes bounded portable image or STL payloads, not a pretend missing source. Invalid numbers, files, pending generation and unsafe placements gate export. Preview colours are geometry-neutral and are not stored in STL.

## Local import contract

Use the desktop/mobile file picker or drag one file onto Import. Replace/remove/reset return cleanly to built-in geometry. Four synthetic sample fixtures are bundled under `public/samples`: PNG mark, JPEG waves, ASCII wedge and binary low-poly grip. These are generated test shapes, not personal uploads; no external artwork attribution is needed.

Files stay in browser memory and are not uploaded, sent to services or saved into the repository. Only explicit **Save JSON** writes a local portable design. Limits are checked before expensive processing: 2 MB/file, image ≤12 MP and ≤6,000 px/side, STL ≤1,500 triangles and 0.2–250 mm per axis, bounded finite coordinates. Source and final previews are both visible. Integration is on the stationary palm tab, entirely left of the plate/rocker sweep.

### PNG / JPEG → solid relief

Validate signature and dimensions before decoding, normalize a portable source preview to ≤500 px/side, composite transparency onto white, then fit or crop and shift onto a **20 × 20** luminance grid. Luminance is `0.2126 R + 0.7152 G + 0.0722 B`. Threshold mode raises nodes darker than the chosen 1–254 threshold by the selected 0.4–3 mm depth. Grayscale mode sets node height to `depth × (1 − luminance / 255)`. A triangulated piecewise-linear continuous relief covers a 0.4 mm solid backing with closed sides and bottom. The backing penetrates the palm tab by 0.15 mm and is **boolean-unioned** into it, with no internal overlap shells. Threshold mode is a raised silhouette on backing, not a cutout mesh. All-white/empty results are rejected. Fit/crop, threshold, depth, physical footprint, rotation and placement affect the actual STL. This is **2D-to-relief conversion, not automatic reconstruction of a full 3D object from one photo**.

### ASCII / binary STL → integrated palm grip

Strict parser checks file completeness, finite vertices, nondegenerate triangles, welded edges with exactly two opposite directed incident faces, connectedness, outward winding, positive volume, bounding dimensions, triangle intersections, convexity and broad flat Z-down bed contact. Only **one convex, watertight, flat-bottom solid** whose XY projection stays within its bottom footprint is supported. Hollow, open/nonmanifold, concave, disconnected, self-intersecting, excessively detailed, tilted or overhanging shapes are rejected with guidance; **no automatic repair is claimed**. Bottom contact must cover at least 25% of XY bounding area; fitted XY spans must remain ≥1.2 mm.

Source dimensions and triangle count are displayed. **STL has no units:** explicit confirmation of millimeter coordinates gates integration and export. The source is centered, XY-fitted proportionally to footprint, independently Z-fitted to selected height, rotated about Z and placed on the palm tab. The bottom overlaps the tab by 0.15 mm, then Manifold performs a real solid union. A 6.5 mm radius safe-zone test rejects outlying placements; the final palm part must remain one connected valid solid. Imports are not merely displayed or re-exported unchanged. Arbitrary axis tilt is deliberately unsupported because it would break the verified support-free flat-bottom integration contract.

## Preview and export

Three.js provides touch orbit/pinch, zoom, fit/reset, matte materials, shadows, a 10 mm grid, part selection, colour palette and assembled versus printable-layout views. Each view uses the **same final part vertices and parameter snapshot** as export; the motion slider only changes assembled rigid transforms. Export is paused during pending or failed computation, unconfirmed units or invalid files/settings; stale valid geometry never enables export for invalid current settings.

Download binary STL for all six parts laid flat in a separated row, or choose an individual part. ZIP includes six individual STL files and assembly notes. X/Y/Z bounds of the chosen export are displayed. The single row is intentionally easy to inspect; rearrange individual parts in the slicer if it exceeds the printer bed. A socket coupon is available under Mechanism → FDM calibration. No fictitious print-time estimates or fake 3MF/AR/cloud controls.

## Mechanism, printing and assembly

Six parts: palm base, inclined rotor, rocking follower, rotor cap, cross axle, axle cap. Print each broad-bottom down; rocker prints flat on its side, then stands on edge in assembly. No supports intended; the yoke's Ø4.5–5 mm transverse bores require short bridges, so inspect for droop/stringing. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls are starting suggestions, not verified print settings. The toe is 1.2 mm wide; keep three perimeter lines across it. Minimum yoke/pivot radial wall is 1.5 mm, rotor hub wall 2.5 mm, rotor wedge minimum thickness 3 mm. No compliant parts or hardware.

1. Trial the rotor socket coupon on a Ø4 mm peg; the axle socket uses the same allowance on a Ø3 mm peg. Tune fit for your machine/material; no tolerance is universal. The coupon is under Mechanism → FDM calibration.
2. Slide the rotor over the vertical base spindle, flat side down. Seat the rotor cap firmly on its shoulder peg, leaving the flat hub free to rotate. Minimum radial cap retention overlap is 1.5 mm.
3. Stand the rocker between the two yoke towers, narrow toe toward the plate. Pass the cross axle through tower, rocker and second tower. Seat the axle cap on its shoulder peg; neither end should clamp the towers. Tower-to-head/cap axial clearance equals the running clearance.
4. Hold the base level, rest the follower toe on the plate and turn it slowly. Feel one rising/settling cycle per revolution. The follower intentionally lifts off if inverted or pulled; there is no captured cam groove or spring. Do not press hard, force it past its ordinary contact range, or trap fingers.
5. Pull caps gently for service. Loose retention requires fit tuning/reprinting. Do not glue moving interfaces. Small detachable parts are not for young children.

### Contact and retention model

Let `r = diameter/2`, `s = tan(swashAngle)`, rotor angle `a`. The top plane is `z = rotorZ + 3 + r*s + s*(x*cos(a) + y*sin(a))`, with a flat cylindrical hub added around the central bore. The follower pivots at `(r+15, 0, pivotZ)` on a horizontal Y axle. Its toe center at rocker angle `b` is `(pivotX − D*cos(b) − 4*sin(b), 0, pivotZ + D*sin(b) − 4*cos(b))`, where `D=r+reachOffset`. The radius-2 mm cylindrical toe has width 1.2 mm along Y. Its exact support against the plane is `2*sqrt(1+(s*cos(a))^2) + 0.6*abs(s*sin(a))`. Bisection solves the zero-gap contact branch inside −60…15 degrees; valid models remain well inside these bounds. A polygonal toe approximates the analytic circle with 96 segments; tiny nonpenetrating discretization gaps are expected, not hidden intersections.

The flat-bottom wedge rotates on a Ø6 mm vertical spindle with specified radial/axial gaps. Its added hub has a horizontal top; a shoulder-seated cap retains it without touching the sloping face. The cross axle is printed vertically as its own solid then rotated into assembly. Its two ends retain it through the yoke with running clearances. Only the two cap/peg pairs have intentional interference. Custom imports stay on the stationary tab, away from every swept/contact surface.

## Validation and limitations

`npm test` parses actual binary STL, welds coordinates at 1e−5 mm, checks nonempty finite nondegenerate triangles, normalized outward normals, exactly two oppositely wound faces per edge, positive volume per connected component, correct part counts, bed-flat layouts and millimeter bounds. Manifold validates each part as one connected closed solid after robust boolean operations. All 128 parameter corners, defaults, min/max, three presets, eight variations and image/ASCII/binary-derived outputs are checked. Contact equations are sampled every degree, with toe/hub/plate margins, retaining overlaps, gaps and separate print-layout bounds checked. CSG collision tests sample 49 full-turn positions, excluding only the two intentional cap interference seats, including import variants.

Browser tests use real PNG/JPEG/ASCII/binary file pickers and actual downloaded STL. They compare geometry fingerprints against defaults and exact preview parts, test pixel content, threshold/depth/fit/crop and mesh scale/height/rotation/placement changes, replace/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive inputs, empty silhouettes, invalid dimensions and unsafe transforms. Presets/variations, undo/redo, portable JSON round trips, individual and ZIP exports, coupon, drag/drop and geometry-neutral preview colours are exercised. Desktop plus 390/320 px mobile layouts, touch orbit/pinch, controls collapse/expand and reachable downloads are checked. Production worker/WASM and the root gallery are tested before deployment. Machine-readable reports accompany the app.

**No physical print has been tested.** Digital mesh/contact/collision checks do not prove print quality, friction, wear, press-fit force, gravity following under finger pressure or long-term retention. Print a fit trial and assess these before repeated use. Do not claim a spring action when inverted. Image conversion is deliberately low-resolution; unsupported arbitrary STL geometry is rejected, never silently repaired.
