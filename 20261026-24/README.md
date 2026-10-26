# Knee Cadence

A local, browser-based parametric STL maker for a **two-loop six-bar gait fidget**. Turn a thumb crank to fold a rigid-link knee and trace a narrow dipping toe loop; reverse whenever you like. This is a hand-held motion ritual, not a walking robot, exact straight-line tracer, or physically tested mechanism. The 13 separately printable solids are a palm frame, five moving links and seven blind-socket friction caps. No bearings, magnets, fasteners, springs, APIs or paid services.

## Studio and reference

React + Vite, Three.js OrbitControls, Manifold WASM CSG in a module worker, fflate ZIP. Rounded Fredoka/Rubik fonts are bundled from Fontsource (SIL OFL). Manifold is Apache-2.0; Three.js/React/Vite are MIT; fflate MIT. Synthetic fixtures and the six simple SVG icon marks are project-generated; no personal uploads are included.

The read-only Keycap Studio reference's README, styles, App, Viewer, worker, STL and export modules were inspected. Concrete patterns used here: 374 px left editor, sticky compact brand/theme header, grouped collapsible sections, raised/pressed key-like buttons, pink selection, lavender desk, paired mm ranges/numbers, source editor, checkerboard cutout, fit toolbar, separate assembled/exploded/isolated/print views and prominent per-part/ZIP exports. Phones stack preview and export before controls. Dark theme is saved locally. Existing Daily App Lab studio infrastructure is reused for import/state/export; **the six-bar kinematics, links, layered pivots and checks are new**, not the previous three-gear lift clutch. The reference and archived collection were not modified.

## Run

```sh
npm install
npm run dev
npm run predeploy
node serve-production.cjs  # actual dist at http://127.0.0.1:5350/daily-app2/20261026-24/
```

Vite base is `/daily-app2/20261026-24/`. Per-app `deploy` is installed as requested, but public publication uses the root monorepo's predeploy/deploy flow. All code, fonts, worker and WASM are local bundle assets; no CDN imports. User files are never uploaded.

## Geometry and kinematics

In units of crank radius `a`, ground points are O=(0,0), P=(3,0), Q=(3,-3). A rotates around O at radius 1. Circle intersection B satisfies AB=3 and PB=2.5, using the continuous upper branch. Rigid coupler ABD has D=(1.5,-1.2) in its local A→B frame. E satisfies DE=3 and QE=2.5 on the lower branch. Toe F extends along DE to DF=5.1. Thus this has **two coupled closed linkage loops and a moving ternary coupler**, rather than a single extended four-bar. Circle closure has a strict positive margin throughout 360°. There is no solver branch flip, powered movement or elastic simulation.

Crank and upper rocker share layer 1; coupler, toe leg and lower rocker occupy progressively higher layers. Integral pins point up and enter a larger running bore in the next link. A closed-roof cap socket seats over each pin. Layer spacing reserves the cap height plus two axial gaps. The tall Q post is 3.2 mm diameter; print slowly with cooling and do not side-load it. The palm well is 48 mm left of O, isolated from every moving sweep.

## Supported parameters

All lengths are **millimeters**; Z rotation is degrees. Invalid values block export, not silently clamp to stale geometry.

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 |
| Crank radius | 10–12 |
| Link width | 6.5–7.5 |
| Link thickness | 3–4 |
| Axial gap | 0.3–0.6 |
| Radial running clearance | 0.25–0.45 per side |
| Cap radial fit | −0.06 to +0.06; negative is interference |
| Palm dimple depth | 0–0.6 |
| Import footprint | 4–7 |
| STL height | 0.6–5 |
| Image relief | 0.4–3 raised; 0.4–0.6 engraved |
| Import rotation | −180° to +180° |
| Import offset X / Y | ±1.5 / ±2, additionally checked against 6.5 mm safe radius |

Round, hexagonal and oval palms; Gentle Start, Knee Cadence and Long Step presets have live generated thumbnails. Variations stay in the supported range. Every geometry field affects exported bytes. Undo/redo, six local named designs, portable JSON save/open, replace/remove/defaults and transform resets are functional. JSON embeds normalized bounded images and mesh arrays; missing image payloads explicitly request reattachment. No pretend asset restoration.

## Image / SVG → real geometry

PNG/JPEG files: 16 bytes–2 MB, header validation before decoding; ≤12 MP, ≤6,000 px per side. Normalize locally to ≤500 px, then composite against selected light/dark background with fit/cover and crop shifts. A **20×20 luminance grid** drives a closed height-map solid. Threshold 1–254 converts selected dark pixels to constant-height relief; grayscale mode varies height continuously. Adjacent samples are triangulated, so boundaries have small sloped transitions, not exact vector outlines. White/transparent holes stay unraised or unengraved above a continuous solid palm backing. A source preview and checkerboard of the actual sampled cutout make this explicit. Empty images fail recoverably.

Simple SVG shapes/paths rasterize locally to 256 px then use exactly that grid method. Up to 2,000 elements; unsupported filters, fonts, references, scripts and external resources are rejected. Bundled searchable marks and text use this same real relief path. Text is limited to eight characters. This is **2D-to-relief/silhouette conversion, not automatic full 3D reconstruction from one photo**. These features change final CSG/export geometry, not a preview texture. Engraving is limited to preserve a 3.6 mm palm floor. Sample ring holes are checked with Boolean probes in final raised and engraved geometry.

## STL → integrated grip

Real ASCII and binary `.stl`; ≤2 MB, ≤1,500 triangles, each source dimension 0.2–250 mm. Choose Z-up, Y-up or −Z-up before attaching, inspect oriented source dimensions and mesh preview, and **explicitly confirm millimeter scale**: STL carries no unit metadata. Changing orientation clears the source and requests reattachment. XY scales proportionally to footprint, Z independently to grip height; rotation, centering and X/Y placement affect the actual result. Original vertices are retained through transformation and Manifold solid union with the palm well. There is no convex-hull replacement or unmodified re-export.

Supported input is **one closed outward-facing convex solid with a broad flat bottom**, ≥25% footprint contact, no overhang beyond that footprint. Open/nonmanifold/inward/disconnected/degenerate/self-intersecting, concave, hollow or excessively slender geometry is explicitly rejected with guidance. Convexity is a documented bounded integration contract, not a claim to repair arbitrary meshes. Header/content/type, pixels, triangles, bounds, finite transforms, winding, edge incidence, connectedness, volume, self-intersections and footprint are checked before heavy CSG. Imports cannot reach the mechanism. No automatic repair is performed.

Try/download synthetic `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl` and `gem-binary.stl` from Import. These exercise both core workflows without personal files.

## Export and responsiveness

The worker performs CSG, closed-solid integration, per-part final mesh checks and float32 plate checks. A 100 ms debounce and request IDs discard stale results. Asynchronous file normalization has independent stale-selection guards. Busy, loading, invalid, unconfirmed, failed-worker or mismatched-state results disable **all** STL/ZIP export paths. A visible last-good result is explicitly labelled and cannot be exported after an invalid edit.

Preview and binary STL share exact final mesh/state; the UI exposes a fingerprint compared with actual downloads by browser tests. Per-part exports are broad-side-down at Z=0; Everything is a nonintersecting separated print plate. ZIP contains thirteen individual STLs plus assembly notes. STL stores neither preview colours nor units; use millimeters at 100% in your slicer. No fake 3MF export is offered.

## Print and assemble

PLA or PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, three walls and 25–35% infill. All broad sides down and all integral pins up; no supports intended. Deburr elephant foot, pin and bore sides. Print **Gentle Start as a full-size fit coupon** before a final set. These clearances are starting values, not universal tolerances.

1. Base posts: O is left, P upper-right, Q lower-right. Put crank on O, upper rocker on P, A/B pins up. Seat O/P caps without compressing a moving joint.
2. Seat the rigid triangle on A/B, with offset D toward the toe/lower side; add A/B caps.
3. Seat the extended toe leg on D, E pin up, broad toe beyond E; add D cap.
4. Seat lower rocker between Q and E; add Q/E caps.
5. Gently turn through a full cycle. A cap that slips or splits is unusable: adjust fit and reprint. Positive cap fit can be loose and is for calibration only. Friction caps are not snap locks; no retention force is guaranteed.
6. **Disassemble in reverse:** Q/E caps and lower rocker; D cap and toe leg; A/B caps and triangle; O/P caps and remaining links. Lower caps may lie under upper links. Do not try to lift them first. Withdraw exposed caps vertically. Never force a seized joint.

Keep fingers out of pinch gaps. Small loose parts, not for children. Support-free intent and computational checks do not establish physical printability on every printer. No physical print, force, fatigue, wear, fit-retention or durability test has been performed.

## Reproducible validation

```sh
node validate.mjs
node browser-test.cjs
node feature-test.cjs
node additional-test.cjs
node resilience-test.cjs
node hole-test.cjs
node stale-import-test.cjs
```

Run browser tests against the production server above. These validate real PNG/JPEG/ASCII-STL/binary-STL file pickers and downloaded binary STL, content/threshold/depth/scale/rotation/placement differences vs default, reset signatures, invalid sources and dimensions, unsupported concavities, portable JSON/named designs, all presets, text/icons/SVG, ZIP contents, worker abort/recovery/stale protection, touch orbit/pinch, 320/390 px layouts, keyboard focus, themes and view modes. `validate.mjs` independently parses float32 STL: exact length, finite coordinates, nondegenerate triangles, consistent normals, positive volume for every connected component, edge incidence=2 after 1e−5 mm welding, dimensions and print-bed alignment. All thirteen parts and the separated plate are checked. Motion tests use Manifold intersections around a full turn; intended cap interference must remain confined to its own pin region, while every other pair has zero volumetric collision. Reverse-order cap withdrawal and separate print layouts are checked. Tests distinguish these computational results from unperformed physical tests. JSON reports and screenshots live beside the source.
