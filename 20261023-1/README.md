# Line & Orbit

A browser-based parametric **Tusi rolling-couple fidget**. A 16-tooth external planet rolls inside a stationary 32-tooth internal ring. Its pitch-circle thumb pip follows a straight diameter while the carrier orbits. Hold the palm tab, guide the pip and reverse freely; nudge the carrier at dead centers. Five separately printed parts; no hardware. Unlike external epicyclic gears, the 2:1 internal mesh reverses the planet and produces a linear thumb path.

## Studio

React + Vite with a large live matte Three.js preview, touch orbit/pinch, zoom/reset-fit, millimeter dimensions, three actual model thumbnails, valid random variations, undo/redo, portable local design JSON, PNG/JPEG and ASCII/binary STL imports, individual and all-part binary STL, five-part ZIP and a socket calibration coupon. The assembled preview is distinct from the separated bed-flat export layout. Preview colours do not exist in STL. Geometry and preview share the same generated mesh. Dependencies, WASM and fixtures are bundled locally: no API, CDN, upload, credentials or paid service.

Visual direction: https://vaseverse.org/ was fetched and inspected for the requested model-first composition and warm studio palette. This is an original fidget studio, not a vase generator. No branding, assets, text or source code from the reference is included. Import/editor infrastructure is adapted from earlier local studios; the internal gear mechanism and geometry are new. Samples are synthetic locally authored CC0 fixtures.

## Parameters — millimeters unless noted

- Carrier web width: 9–12; gear tooth module: 1.2–1.6; planet thickness: 4–6.
- Journal radial clearance: 0.25–0.50; palm-tab radius: 7–9; palm groove depth: 0–0.5.
- Cap socket radial allowance: −0.08 to −0.01 (negative means interference; not universal).
- Fixed 20° pressure angle; 16/32 teeth, center distance `8*module`, ring pitch radius `16*module`. Thumb stroke `32*module` = 38.4–51.2 mm. Carrier is 3 mm thick; base is 3 mm. The ring top is approximately 1 mm below the raised thumb arm.
- External involute uses addendum `module` and dedendum `1.25*module`; internal tooth flanks flare toward the outer root. Each member's pitch tooth thickness is reduced by the running-clearance parameter, giving `2*gap` total pitch-line backlash. The planet teeth are phased half a tooth relative to its thumb arm. Both flanks are sampled into bounded closed polygons and extruded using Manifold.
- Planet phase `-theta`, orbit center `(r*cos(theta),r*sin(theta))`; thumb point relative to planet `(r,0)` gives `(2*r*cos(theta),0)`. The ideal path is straight; printed backlash produces lateral play. This is not a force-amplifying actuator and has two dead centers.
- Base and imported grip form one robustly unioned solid; moving parts remain separate. Caps retain the carrier and planet on Ø3.6 / Ø3.2 mm press-fit pegs. The cap shoulders are clear of moving surfaces.

## Local image import

PNG and baseline/progressive JPEG, 16 bytes–2 MB, ≤12 MP, ≤6,000 px per side. Header is checked before browser decode. Input is reduced to a ≤500 px working bitmap; local preview and a 20×20 conversion grid are shown. Fit/cover, X/Y crop shifts ±25%, threshold 1–254, depth 0.4–3 mm, footprint 4–7 mm, rotation ±180° and placement X ±1.5 / Y ±2 mm are editable. Transparency is composited onto white.

Luminance uses 0.2126R + 0.7152G + 0.0722B. Threshold maps darkness to raised height (not a fully cut-out border); grayscale maps `(1-luminance/255)*depth`. The triangulated height field sits on a continuous 0.4 mm solid backing. Its bottom is embedded 0.15 mm into the stationary palm tab, then robustly unioned. White/empty conversions are rejected. This is **2D-to-relief / raised-silhouette conversion, not automatic full 3D reconstruction from one photograph**.

## Local STL import

ASCII and binary STL, 40 bytes–2 MB, ≤1,500 triangles; one closed outward-wound connected convex solid, 0.2–250 mm in each axis. STL has no units: explicit millimeter confirmation is required. Rejects nonfinite coordinates, degenerate triangles, open/nonmanifold edges, inconsistent winding, negative volume, disconnected solids, triangle intersections, concavity and unsupported overhangs. No automatic repair is claimed. Reorient/reduce/repair unsupported files in a real modeler before retrying.

Supported grips require a broad flat bottom (≥25% XY footprint), with all projected vertices inside that bottom. XY is proportionally scaled to a 4–7 mm footprint; Z independently to 0.6–5 mm height. Minimum fitted XY span is 1.2 mm. Rotate around Z, center/reset, and shift X/Y within bounded limits. Source mesh preview and original mm dimensions appear beside the final studio preview. Imported geometry replaces the default oval grip and is unioned into the stationary palm tab, never the moving gears or caps. Every transformed vertex must stay within its 6.5 mm radial safe zone; unsafe placement blocks export. Replace/remove/reset is available.

All user files stay in browser memory; no upload, external service or automatic persistence. Explicit JSON save includes bounded source mesh or reduced PNG payload and source settings; opening revalidates imported STL. Personal input files are not bundled in this repository.

## Manufacturing and assembly

PLA or PETG, 0.4 mm nozzle, 0.16 mm layers, four walls as starting settings. Print base bed-flat, carrier with axles upright, planet gear flat and pip up, both caps socket down. **Use local support beneath the outer thumb pip/arm overhang and inward ring teeth where bridging is unsupported.** Inspect the slicer; do not treat this as a support-free or print-in-place model. Import grips are restricted to support-free convex broad-bottom solids, but the mechanism itself needs the stated support.

Remove support, strings and elephant-foot burrs. Print the socket coupon and try it on a Ø3.6 mm peg; the smaller cap uses Ø3.2 mm and should be checked independently if necessary. Fit carrier over base journal, press the larger center cap onto its shoulder, align carrier right and planet pip right, mesh the teeth and lower planet onto its axle, then press the smaller cap. Confirm both caps seat on stationary shoulders, retain securely and do not rub rotating faces. Do not glue across moving interfaces. Increase clearance/reprint if tight; never force. Check cap retention before each use. No external hardware is required; small removable parts are not for young children.

Hold the stationary palm tab and guide the raised pip back and forth. Near the line's ends, nudge the exposed carrier to continue around the dead center. This is a deliberate two-motion hand interaction, not a powered linkage.

## Development and validation

`npm install`; `npm run dev`; `npm test`; `npm run predeploy`. App base `/daily-app2/20261023-1/`. Per-app deployment scripts exist as required, but public combined publication uses the **root** `npm run predeploy` and `npm run deploy`.

Dependencies: React, Three.js, manifold-3d WASM (robust solid booleans), fflate ZIP; Vite and Playwright for development/validation; gh-pages for publishing, not browser geometry. All heavy Manifold work and strict STL parsing run in a worker. Finite limits bound image grids, mesh complexity and memory. Unsupported import geometry is rejected, not silently repaired.

`validate.mjs` parses real binary exports and checks file length, finite vertices, unit normals, nondegenerate triangles, welded edge incidence exactly two, consistent winding, positive volume per connected component, expected mm dimensions, single-solid parts and separated bed layout. Mechanical checks verify 2:1 kinematics, straight-line thumb path, journal clearance, retaining overlaps, free carrier sweep and actual solid intersections over sampled poses (only intentional cap/peg interference is excluded). Reports cover parameter extremes, presets, deterministic variations, image relief and both STL formats. Browser tests exercise real PNG/JPEG/ASCII/binary file pickers and actual downloads, content/threshold/depth/crop changes, transformations, replacement/removal/reset, invalid inputs, preview/export signatures, undo/redo, save/open, individual parts, ZIP, mobile tabs, touch orbit/pinch and reachable export.

**Digital geometry and mechanism checks are not physical print testing. No physical print, durability or tactile testing has been performed.** Fit varies with printer and material; calibrate first.
