# Thread & Poise — Balance Kit-Card Studio

A local React + Vite parametric generator for a **five-part cord-suspended miniature balance sculpture**, held in a real connected breakaway card. Not a weighing instrument or load-bearing product. No physical print, knot, load, fatigue or assembly-force test has been performed.

## Reference-first reconstruction

Local STL files under `/Volumes/ExternalHD/3d_printing_apps/` were searched first. Read `fidget_fabric_generator/README.md` and inspected available clicker/slider/link collections; those interfaces are inappropriate for flat sheet/card construction. Used the publicly downloadable **White Cat Kit Card**, Mike Kasberg, Printables 865769, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Its README, LICENSE, `kit_frame.scad` and `white-cat-kit-card.scad` were downloaded and read. This original reconstruction changes both the parts and assembly; it does not redistribute the raw source STL. Attribution applies to the adapted carrier construction. Full reference licence is in `REFERENCE-LICENSE.txt`.

Actually downloaded and parsed binary mesh: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, 1,530,884 bytes, **179.819997 × 178.019994 × 3.190000 mm**. Millimeters are an assumption corroborated by the OpenSCAD thickness; STL has no unit metadata. Welded edge-adjacency gives two components. Source contains coplanar/nonmanifold artifacts; it is a **design reference, not repaired or passed off as printable output**.

`reference-analysis.py` parses vertices/edges/components and makes actual Z cross-sections at 0.1, 0.5 and 1.59 mm. `reference-analysis.json`, `reference-sections.svg` and `.png` record the evidence. The cross-sections visibly distinguish low bridges from full-thickness sheet and perimeter. A Y=100 mm rail section measures a 1.6 mm rail; the Z histogram has sheet planes 0/1.6 and bridge levels 0.21/0.22 mm.

Concrete mapping:

- Source **1.6 mm sheet** → default sheet 1.6 mm; redesigned range 1.6–2.4 mm.
- Source **1.6 mm perimeter rail** → stronger original 2.4 mm perimeter and four transverse runners.
- Source **0.21/0.22 mm low bridges** → twenty original accessible 0.4–0.6 mm high, 0.8–1.4 mm wide breakaway tabs. Four per part; not decorative loose layout.
- Entire beam, mast, slotted foot, pans, hole locations and suspension scheme are **new designs**. Mortise clearance 0.15–0.45 mm and thread dimensions are proposed/calibratable, not measurements from the source. No switch socket, source convex hull, or arbitrary substituted mesh.

## Studio and customization

Three real presets (Pocket Poise, Studio Balance, Long Arms), three coordinated beam/pan silhouettes, paired sliders/numeric millimeter inputs, bounded variations, local Fredoka/Rubik fonts, light/dark persistence, tactile buttons, collapsible sections, undo/redo, six named browser designs and portable JSON. Desktop has a 374 px left control panel/right viewer; phones have preview/export first and stacked controls. Orbit, touch/pinch, zoom and fit. Connected card, assembled, exploded, de-tabbed print plate and isolated-part views share the exact same solid meshes.

The visual/interaction reference was read-only `keycap_generator2`: README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, `worker.ts`, `geometry/stl.ts`, `export.ts`, and image tracing/import integration code. Adopted its labelled maker sections, small paired dimension controls, checkerboard source/cutout comparison, explicit imported-source transforms, raised selected controls, live worker status and part-centric exports. This is not a keycap clone. Shared local studio/parser/export infrastructure was adapted from earlier Daily Object Lab apps; the five-part balance and carrier/joint layout are newly constructed here.

## Parameters (all lengths mm)

| Parameter | Supported range |
|---|---|
| Card X / Y | 120–160 / 280–320 |
| Beam length / depth | 64–84 / 20–28 |
| Mast anchor height (local) | 64–76 |
| Sheet | 1.6–2.4 |
| Total mortise allowance | 0.15–0.45 |
| Carrier rail | fixed 2.4 |
| Tab width / height | 0.8–1.4 / 0.4–0.6 |
| Part row offset | 0–1 |
| Decorative dimples | 0–0.4 deep |
| Artwork footprint | 4–7 |
| Artwork X / Y | ±1.5 / ±2 |
| Artwork Z rotation | ±180° |
| Image relief | 0.4–3 raised; 0.4–0.6 engraved |
| Imported STL height | 0.6–3 |

Beam center/end thread holes are 2.8 mm diameter, pan holes 2.4 mm. Foot mortise is sheet+allowance by 12+allowance. Mast tongue is 12 mm wide and one sheet thick, with real shoulders; its lower end rests on the table at full insertion. The maker adjusts clearance for material, printer and elephant foot. No universal friction/snap fit is claimed. Engraved floor stays at least 0.8 mm. The 6.5 mm radius artwork zone remains at least 1.1 mm from the nearest suspension-hole edge even at the minimum beam depth.

## Image and SVG → real printable geometry

Use file picker or drag/drop; samples are included. Actual PNG/JPEG header validation runs before decoding: **2 MB, ≤12 MP, ≤6,000 px per side**. Portable images are normalized locally to ≤500 px. Simple SVG is locally sanitized, rejecting scripts, external resources and unsupported active content, then rasterized at 256 px. No SVG file is executed as document content.

Fit/cover, X/Y crop, light-background removal or dark inversion, threshold 1–254, grayscale relief, raised/engraved style, depth, physical scale/rotation/placement. Images are sampled to an exact **20×20 luminance grid**. Threshold uses foreground `luminance < threshold`; grayscale uses `depth × (1 − luminance/255)`. Adjacent grid vertices are triangulated, closed with sidewalls/bottom and Boolean-unioned into, or subtracted from, the beam. It is a bounded piecewise-linear **2D-to-relief/silhouette conversion**, not automatic full 3D reconstruction or exact contour tracing. White/transparent holes remain unraised/unengraved above a continuous solid backing. Checkerboard shows the actual sampled cutout; dark background uses inverted luminance. Empty images fail recoverably. Text (8 characters) and six searchable bundled SVG icons use this same real geometry path. Decorative features below nozzle resolution can blur; they are not load-bearing walls.

## STL → integrated beam geometry

Actual **ASCII and binary** STL content; ≤2 MB, **≤1,500 triangles**, each axis **0.2–250 mm**, finite bounded coordinates. Requires a single closed outward-wound convex solid, broad flat bottom (≥25% footprint), no overhang outside that bottom footprint. Original input triangles are preserved as a solid and unioned; **no convex hull is substituted**. Concave, hollow, disconnected, inverted, open, nonmanifold, degenerate or self-intersecting input is rejected with actionable guidance. Automatic repair is not claimed.

Select Z-up, Y-up or upside-down before attaching. Source 3D preview/dimensions/encoding/triangle count are shown. Explicitly confirm millimeters, then normalize XY proportionally to chosen footprint and independently fit Z to chosen height. Rotate, move, center/reset, replace or remove. The current transformed mesh is actually Boolean-integrated into the beam's protected central medallion, not simply displayed or re-exported. Imported geometry stays away from suspension holes and the mast joint. Unsupported/off-zone transforms block export.

## Printing and assembly

1. Print **either** connected card **or** the five loose parts flat, PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls. No supports intended. Full card requires a bed that fits its actual **280–320 mm height**; individual exports fit smaller beds. STL units are mm, at 100%; preview colours are not stored.
2. Snip twenty low tabs at their accessible necks, 2 mm outside nonfunctional edges. Trim nubs; discard carrier. Mast tabs are on broad shoulder edges, not its tongue sides/mortise surfaces. Adult cutting, small parts, not a toy.
3. Seat mast vertically through foot mortise, shoulders above foot and tongue on the table. Print foot/mast first, calibrating allowance in 0.05 mm increments and compensating elephant foot.
4. **Required external material:** about 1 m of 0.3–0.6 mm nonstretch thread plus scissors/knots. Tie center loop from mast anchor hole to beam center hole, with approximately 12 mm vertical hole separation.
5. Tie three equal pan cords from each pan's three holes to a common knot at its beam-end hole; target 32 mm vertical hole-to-pan-face drop. Route thread outside the beam's front face/bottom edge, not through solid material. Exact thread lengths include knots and routing; trim in place rather than treating preview segments as cut lengths.
6. Match knots and level empty pans. Beam mass center is below its center suspension hole; the identical empty pans are symmetric. Imported marks or unequal knots shift balance. This is decorative, **not a calibrated scale**; do not load it. It has no captive joints. The straight preview lines are illustrative thread endpoints, not thread-contact simulation, manufacturing geometry or printed parts. Actual knot positions/angles vary.

All five printable solids are disjoint assembled. Mast insertion is checked through the complete vertical path and its shoulders stop downward travel. Small manual beam-tilt checks are geometric only, not a dynamic, strength or fatigue simulation. No magnets/screws/bearings. There is no fully bed-flat hardware-free substitute for the flexible thread suspension in this design.

## Export, privacy and restoration

Prominent current-card STL, six part/card STL buttons, and Everything ZIP (six STLs plus numbered `ASSEMBLY.txt`). Binary STL carries geometry only. All parts use Z=0 printable orientations; source imports and artwork change actual STL bytes. Live Manifold WASM geometry runs in a debounced Web Worker; generation IDs and state signatures block stale export, including conversion/parse and worker errors. Last-valid preview is explicitly labelled when export is blocked.

No API key, server, CDN or remote generation. Fonts, Three.js, Manifold WASM and ZIP library are bundled. Local named designs and JSON include bounded actual image/mesh payloads; missing image payloads request reattachment rather than pretending restoration. Nothing is uploaded. Bundled samples are original synthetic CC0 fixtures, not user files or the third-party reference mesh.

## Run and reproduce

```
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# in another terminal:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node studio-layout-test.cjs
```

Production test server: `http://127.0.0.1:5437/daily-app2/20261028-7/`. Individual scripts: `predeploy` = `npm run build`; `deploy` = `gh-pages -d dist`. Public publication uses the ROOT monorepo deploy flow, not this individual deploy command.

Dependencies: React/ReactDOM, Vite/react plugin, Three.js, manifold-3d (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for browser tests. No inherited Git history/dependency trees copied.

## Verification boundaries

See `VALIDATION.md` and saved JSON reports/screenshots. Independent binary-STL checks cover finite coordinates, exact length/count, positive volume per component, normalized normals, outward consistent winding, nondegenerate faces, welded edge incidence two/opposite, topology and expected mm bounds for **every part and card**. Parameter extremes/presets, image and STL-derived outputs run the same checks. CSG checks verify card containment, twenty cuts yielding carrier + five parts, assembly collision/insertion/shoulders, open cord holes, identical pans, beam centroid and limited geometric tilt. Browser tests download real STLs/ZIPs and independently regenerate JSON to match preview/export hashes. PNG/JPEG/ASCII/binary imports, pixel/threshold/depth/scale/placement effects, malformed/unsupported sources, reattachment errors, reset, portable roundtrips, undo/redo, saved designs, dark theme, focus, section collapse, worker failures and stale results are tested. 320/390 px phones include real touch orbit/pinch and reachable exports.

Computational mesh and fit checks are not physical print or assembly testing, knot security, dynamic equilibrium, material strength or weighing calibration.
