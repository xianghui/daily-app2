# Ellipse Ease

A local React + Vite parametric **physical fidget STL studio**. Two shoes slide along perpendicular guides while a rigid bridge constrains their separation. An off-centre thumb pad follows an elliptical **arc**, then reverses. This is a limited-sweep trammel, not another freely rotating wheel, independent XY slide or full-turn ellipsograph.

## Make and use

Export four parts: **palm-guides**, **elliptic-bridge**, **x-shoe**, **y-shoe**. The two shoes share geometry but both are required. Everything ZIP contains individual binary STLs and assembly notes; the combined STL uses a separated, nonintersecting print plate. No 3MF or colour storage is claimed.

Print broad flat surfaces down as exported, shoe posts upward. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, supports off, 100% millimetres. Place shoes into the blind channels, then lower the bridge bores onto their posts. Hold the palm and guide the bridge pad back and forth. Lift the bridge and shoes to release. **Parts intentionally lift apart; not captive and not for inverted carrying.** No bearings, magnets, screws, adhesive or other hardware required. Small loose parts: not for children.

Nominal motion sweep is **25–65°**. Pocket end clearance permits a little fit-dependent overtravel to the physical stops; never force the stops. The guides are separate so neither shoe crosses the other. With pivot distance L and thumb distance D from the X pivot, the thumb centre is x=(L−D)cos(theta), y=D sin(theta), relative to the guide origin. The preview illustrates geometric motion, not forces, friction or measured performance.

Start with the **Small Arc** preset as a full-size fit calibration coupon: deburr, verify both shoes glide and that the bridge lifts freely. Increase clearance if binding; reduce if excessively loose. Tolerances depend on printer, material, shrinkage and slicing. Do not bend these rigid parts.

## Parameters (all physical lengths in mm)

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 |
| Pivot spacing L | 28–36 |
| Bridge thickness | 3–4.5 |
| Side and radial running clearance | 0.30–0.60 |
| Thumb distance D from X pivot | 9–14 |
| Palm dimple depth | 0–0.6 |
| Gap beneath bridge | 0.25–0.50 |

Round, hexagonal and oval palm/thumb shapes; three actual geometry presets with live model thumbnails; bounded variations. Fixed 2 mm pocket floors, 3 mm shoe thickness, 2 mm end walls and minimum 2.4 mm bridge bore rims. Imported geometry stays within a radius-6.5 mm palm keep-out, over 30 mm from the guide envelope. No moving surfaces are fused. Final printable X/Y/Z dimensions are shown below the viewer for the chosen export selection.

## Image to real geometry

PNG, JPEG and restricted filled SVG files are processed **locally**. File chooser on desktop/phone and single-file drag/drop. Synthetic samples are in `public/samples/`; they contain no personal uploads. `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl` and `gem-binary.stl` were procedurally authored for these studios; no third-party model attribution needed. Six original filled SVG icons are bundled in `src/icons.js`.

Images: maximum 2 MB, 12 megapixels and 6,000 px per axis. Verify signature and dimensions before decoding, normalize to at most 500 px for portable storage, then fit/crop onto a bounded **20 × 20 luminance height grid**. Light/transparent background removal or dark/inverted background; threshold 1–254, grayscale mode, depth 0.4–3 mm, crop shift ±25%. Checkerboard shows the foreground mask; source image remains visible alongside it. Thresholded heights or grayscale heights are triangulated into a closed height-map solid and Boolean-unioned/subtracted from the palm. **This is sampled 2D-to-relief, not exact vector tracing or full 3D reconstruction from a photograph.** Bright holes retain the palm floor, not raised fill; holes do not cut through the underlying solid. Engraving is limited to 0.4–0.6 mm, preserving at least 3.6 mm floor. SVG is rasterized to 256 px first; only simple filled path/shape elements are supported, no external URLs, scripts, fonts, effects or resource references. PNG/JPEG conversion settings affect real STL vertices, not preview textures.

Text up to eight characters and six searchable icons use the same geometry conversion. Fredoka/Rubik fonts are bundled locally. Import footprint 4–7 mm, Z rotation ±180°, placement X ±1.5 mm and Y ±2 mm. The actual transformed vertices must remain inside the safe circle; some combined maximum transformations are deliberately rejected. Reset transformations, replace/remove source or reset all to recover. The unraised image background is seated flush at the palm well floor.

## STL to an integrated grip

Accepts complete **ASCII and binary STL**, 40 bytes–2 MB, at most 1,500 triangles; each source dimension 0.2–250 mm. STL has **no unit metadata**: explicitly confirm that source coordinates are millimetres. Oriented source dimensions, format and triangle count plus a separate source 3D preview are shown. Select Z-up, Y-up or −Z-up before import; changing axis clears the source and requests reattachment. XY scales proportionally to the selected footprint, Z independently to 0.6–5 mm grip height. Rotate/centre/place controls alter the actual unioned palm solid. This is not unchanged-mesh re-export.

Deliberately bounded supported input: **one closed, outward-wound, convex solid with broad flat bottom and no overhang outside that bottom footprint**. Bottom contact must cover at least 25% of its XY bounding box. Concave/hollow/open/nonmanifold/disconnected/self-intersecting/inward meshes are rejected with actionable errors; nothing is silently repaired, filled, convex-hulled or discarded. Very slender scaled footprints below 1.2 mm are rejected. Weld tolerance 0.00001 mm; all coordinates, faces, directed edge incidence, connectedness, signed volume, dimensions, convexity and bottom contact are checked before CSG. A real solid union integrates the grip with a 0.15 mm root embed. Original supported mesh shape, scale, rotation and placement survive into the exported palm. Imported decoration cannot obstruct channels or moving bridge parts.

## Studio, storage and privacy

Read-only Keycap Studio reference informed the concrete visual patterns: 374 px left control panel, sticky compact brand/theme header, collapsible sections, paired sliders/mm inputs, raised tactile controls, soft pink selections, lavender-grey desk, rounded gradient viewer on the right, warnings/dimensions/export beneath. Phone layout is preview-first followed by reachable exports and stacked controls. Saved light/dark theme, keyboard focus, reduced motion, touch orbit/pinch, fit and zoom, print plate, assembled, exploded and four isolated-part views, see-through base. Preview-only motion pose never changes print orientation or exported geometry; STL does not store preview colour.

Debounced Manifold WASM generation runs in a Web Worker with generation-ID and exact-state guards. Invalid settings, import errors, worker failure or pending conversion disable export even when the last valid model remains visible. Preview and export share the exact current checked final solid; a fingerprint is exposed for automated comparison. Resolution and import complexity are bounded.

Undo/redo (35 snapshots), up to six named local designs and portable JSON save/open include bounded normalized image data or validated mesh payloads. Missing image payload requires explicit reattachment; no broken path is pretended restored. JSON maximum 2 MB; normalized PNG data maximum 1.8 million characters and 250,000 pixels; restored STL is reparsed with the same strict validation. Only synthetic test fixtures and reports are committed. No API, key, upload, CDN or remote generation is used; all user files remain in the browser/on this device. App dependencies and fonts are bundled locally.

## Develop and verify

Node 22.12+ recommended.

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
# in another terminal, while the production server is running:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node additional-test.cjs
node interaction-test.cjs
node stale-import-test.cjs
node resilience-test.cjs
```

React/Vite, Three.js (orbit preview), Manifold WASM (robust solid operations), fflate (ZIP), Fontsource Fredoka/Rubik, Playwright for validation. Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined-site deployment is performed from the parent monorepo, **not** the individual deployment script.

`validate.mjs` independently parses float32 STL bytes: exact byte count, finite coordinates, nonzero faces, unit normals matching winding, welded edges with exactly two opposite incident triangles, component-wise positive volume and expected millimetre dimensions. Every intended component and translated print plate is checked. A 128-corner parameter grid plus defaults/presets and representative imported-image/STL/extreme combinations are covered. Independent mechanism tests use Manifold intersections at 81 poses per tested sweep, exact ellipse/pivot equations, plate separation, vertical release paths, floor/channel probes and import keep-outs. These are computational geometry checks, **not a physical print, friction/force, fatigue or durability test**. Final reports, production browser scripts and screenshots are saved alongside the app. See `VALIDATION.md` for actual results.

## Licences

React, Vite, Three.js and fflate are MIT-licensed; Manifold is Apache-2.0. Bundled Fredoka/Rubik fonts are SIL Open Font License 1.1 through Fontsource. Original bundled icons and synthetic test models/images were authored for this studio collection.
