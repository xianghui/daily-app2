# Link Drift — articulated fidget STL studio

Client-only React + Vite generator for an articulated palm chain: finger-walk, drape and meander a sequence of rigid rounded links. A different physical interaction from captive sliders, spinners or elastic squeeze toys. No API, CDN, external fonts, server, purchased hardware or paid service. All preview/export geometry is generated locally with Manifold WASM, bundled by Vite; Three.js renders the same triangle arrays passed to the binary STL writer.

## Run / export

`npm install`, `npm run dev`; production: `npm run predeploy`. Vite base is `/daily-app2/20261021-3/`. The required per-app `deploy` uses gh-pages, but the public collection is published **only by the repository root deployment**. `npm run deploy` at root publishes its combined `deploy/` folder.

Download binary STL exports the whole separated print layout: N links, N−1 flanged pins, N−1 cap rings. Individual-part downloads support replacements. The fit coupon includes one full link, pin and cap; print a second link for testing a two-layer pivot. STL coordinates are millimeters. There are no fused moving interfaces, intentional internal shells, or overlapping bodies in the print layout. Preview shows actual print parts, not an assembled animation.

## Parameters

| Control | Supported range | Default |
| --- | --- | --- |
| Number of links | 3–8, integers | 5 |
| Eye-center spacing | 24–36 mm | 28 mm |
| Link width | 11–16 mm | 12 mm |
| Link thickness | 2.4–4 mm | 3 mm |
| Side scallop depth | 0–0.8 mm | 0.45 mm |
| Radial running gap / total axial slack | 0.2–0.6 mm | 0.30 mm |
| Cap radial interference | 0–0.12 mm | 0.06 mm |

Presets: Balanced, Pocket, Flow, Loose FDM. Reset restores defaults. Numeric fields and sliders share state; invalid, empty and nonfinite values block export. Combinations leaving less than 2 mm conservative eye wall are blocked: `width/2 − 2.4 − gap − scallop >= 2`. Wall is conservative because scallops are on the central body, away from the hole centers. Geometry remains bounded: cylinders have 48 radial segments; largest kit has 22 closed solids. Generation is synchronous and bounded rather than worker-based; browser tests cover largest settings.

Post radius 2.4 mm; link bore radius `2.4 + gap`; flange and cap radius 4.8 mm. Pin tip has a 0.5 mm lead-in taper from 2.4 to 2.1 mm radius. Cap is 3 mm tall with a through bore radius `2.4 − interference`. Positive cap interference is an **intended assembly interference fit**, not a moving interface. At zero interference retention may be inadequate. Calibrate and pull-test. Default complete print layout X/Y/Z: 69.8 × 80.0 × 11.3 mm. Straight assembled envelope: 152 × 12 × 11.3 mm. Both envelopes update on screen.

## Print, calibrate and assemble

- PETG recommended. PLA may serve as a gentle prototype, but a tight cap can crack. No compliant flexure is used or required. Minimum link thickness 2.4 mm and minimum conservative eye wall 2 mm.
- Print in supplied orientation: links and rings flat on bed; pins flange-down. No supports. Start at 0.4 mm nozzle, 0.2 mm layers, 4 walls, 30% infill. Thin pin posts benefit from adequate layer cooling and a slow outer wall.
- First print the coupon and an extra link. Remove elephant foot and bore burrs. A 0.30 mm radial gap is a tuned-FDM starting point, 0.50 mm a looser trial. The faceted hole's inradius reduces nominal clearance by less than 0.007 mm across supported settings. No fit value is universal across printers, filament or shrinkage.
- Overlap adjacent eyelets, alternating links between lower and upper layers. Insert each pin from below. Use a removable shim matching the chosen axial slack between the two links and press a cap over the top 3 mm of post. Do not clamp links together. Withdraw the shim and verify free rotation. No glue or purchased bearings, magnets, screws or fasteners.
- A 0.06 mm radial cap interference means 0.12 mm diametral compression. Lower it if insertion is too tight; raise it if the cap slips. Caps are friction-retained, not positive-lock snaps. At least 1.8 mm radial flange/cap overlap retains the eyelet geometrically once a cap is seated. Grip and pull-test each cap before use.
- Gentle articulation about ±70° per joint from straight is advised. There are **no hard travel stops**; this is not a constrained infinity hinge. At more folded configurations non-neighbor links may touch. Do not force links through each other or a full 180° fold. A long chain can self-contact even when individual joint angles are moderate.
- Release/replacement: hold the pin flange and gently pull/twist the cap off, or cut a damaged cap for replacement with appropriate care. Do not glue a pivot bore. Small detachable parts: not a toy for young children.

## Validation performed

`node validate.mjs` parses binary STL independently, welds equal vertices at 1e-5 mm, verifies finite vertices and normals, nondegenerate triangles, exact two-face undirected-edge incidence, opposite directed-edge winding, positive signed volume **for each connected component**, expected component count, millimeter bounds and nonintersecting export-layout AABBs. It exercises all 128 endpoint combinations: 112 valid, 16 blocked for insufficient wall. It also checks each individual-part export and the three-solid coupon. Default has 7,940 triangles and 13 closed components.

Mechanical checks are distinct from mesh checks: minimum eye wall, flange overlap, running fit including polygon inradius, full cap seating length, export separation, and capsule-envelope separation for same-plane non-neighbor links in straight, 20° incremental arc and ±35° zigzag configurations. Adjacent links occupy different Z layers with an explicit axial gap; round bore/post fit is rotation-invariant. These analytical checks do not prove all possible global chain configurations or cap retention strength. Do not force self-contact poses.

`node browser-test.cjs` uses Playwright and real Chromium: actual default, preset, slider, minimum and maximum STL downloads; binary equality with the exact chosen parameter geometry; independent STL parsing; blank/invalid blocking; all individual downloads and coupon; changed canvas; screenshots; zero runtime errors; 390 and 320 px no-overflow phone layouts; CDP touch orbit and two-finger pinch; phone STL export. Results are stored in `geometry-validation.json`, `browser-validation.json` and screenshots. `node gallery-test.cjs` compiles every nonempty inline script with `new Function`, asserts scripts exist, verifies exactly one new STL entry, all older entries unchanged, correct link/category ordering, search and browser render.

**No physical print, pull force, durability or material fatigue test has been performed.** Geometric validity and representative clearance calculations are not a substitute for a coupon and hands-on fit/release testing.

## Dependencies

React / React DOM; Vite and React plugin; Three.js and OrbitControls; manifold-3d for robust closed-solid CSG; gh-pages for required deployment scripts; @playwright/test for browser validation only. All runtime JS and WASM ship under the app's built assets. See package-lock.json for pinned transitive versions.
