# Whorl — a little momentum

A private, browser-based parametric STL generator for a **one-piece fingertip spinning top**. Pinch the integral fluted stem, twist, and release on a level smooth tray. This is a rigid-body free-spin interaction, not a captive ring, roller, ratchet, or simulated browser game. The wide concentric rim supplies rotational inertia. No hardware, assembly, fitted joints, print-in-place release, or compliant parts.

## Run / build / export

- `npm install`, then `npm run dev`.
- `npm run predeploy` builds with Vite and the `/daily-app2/20261021-11/` base.
- One-click **Download STL** creates binary STL in the browser. Units are **millimeters** (STL itself is unitless); import as mm in the slicer.
- The 30 mm tip trial retains your tip, stem diameter, waist and texture but sets the rim depth to 3 mm and stem height to 8 mm.
- Per-app `deploy` is `gh-pages -d dist`, as required; production publication uses the **root monorepo** predeploy/deploy instead.

## Parameters

| Control | Supported range | Default |
|---|---|---|
| Rim diameter | 30–64 mm | 46 mm |
| Rim depth | 3–7 mm | 4 mm |
| Pinch-stem height | 8–16 mm | 12 mm |
| Stem diameter | 6–10 mm | 7 mm |
| Ergonomic waist | 0–20% radial reduction | 12% |
| Flute depth | 0–0.6 mm radial recess | 0.35 mm |
| Contact-tip diameter | 0.6–1.6 mm | 0.8 mm |

The conservative minimum stem core bound is `grip × (1 − waist/100) − 2 × texture ≥ 4.0 mm`. Incompatible combinations, blank fields, out-of-range numbers and nonfinite values block generation/export with an explanation. There are Everyday, Pocket and Long coast starting designs, numeric fields and sliders, plus Reset.

Final X/Y = rim diameter. Z = `1.4 + (diameter/2 − 2) × 1.1 + rim depth + stem height`; default size **46 × 46 × 40.5 mm**. Dimensions are shown live. The rim is circular; twelve evenly spaced recessed stem flutes preserve rotational symmetry. The contact foot is a tiny flat, not an infinitely sharp vertex. It prioritizes printable geometry, not any promised spin time.

## Geometry and dependencies

React, React DOM and Vite; locally bundled Three.js with OrbitControls. gh-pages handles publishing; @playwright/test is a development dependency. No APIs, CDN assets, remote fonts, accounts or keys are used by the app. Geometry is bounded to 144 angular sectors and 26 profile rings (7,488 triangles); generation is small enough to run synchronously. There are no boolean unions or overlapping primitive shells: the indexed outer boundary joins star-shaped coaxial radial sections and closes both ends with fans. The top annulus connects the rim to the stem as a single boundary. A positive-radius, fixed-angle radial graph in ordered nonoverlapping height slabs has no self-intersections. The inward-only coplanar top transition is an annulus, not an internal cap.

The **same `generate()` result** supplies the Three.js mesh and binary STL exporter. Export positions are float32, like the preview buffer. Orbit, pinch, wheel zoom, Fit view and large explicit zoom buttons work on touch/desktop. Resolution is fixed and bounded, with no server-side generation.

## Printing and calibration

- Starting material: PLA; PETG is an alternative. This is not a flexible design. No material-independent tolerance claims are made.
- **Tip down, stem up**, as exported. 0.4 mm nozzle, 0.16–0.20 mm layers, 3–4 perimeters, 25–40% symmetric infill. Use a **6–10 mm brim** because the contact foot has very little adhesion area. Use a clean bed and a tuned first layer. These are starting points, not tested guarantees.
- Outward conical slopes are at most 45° from vertical. No supports are designed in; inspect your slicer preview and printer capability. If the trial fails, enlarge the tip foot and tune the brim, rather than forcing a full-size print.
- Print the 30 mm trial first to assess adhesion, tip smoothness and stem feel. Actual clearance/fit coupons are not needed: there are no separate moving interfaces.
- Remove the brim carefully. Deburr the foot evenly without making it off-center. Uneven sanding or infill can cause wobble. Spin gently on a smooth level sacrificial tray, not a precious tabletop.
- No assembly, retention caps, bearings, magnets, screws or joint release. Grip core bound is 4 mm. No compliant-part thickness requirements apply.
- This is a small object with a narrow contact tip; keep away from young children. Do not over-tighten the stem or drive it with tools.

## Validation (not physical print testing)

`node validate.mjs` tests defaults, all presets, minimum/maximum values, the tip trial, and every valid corner of the seven-dimensional parameter box. **119 valid cases**, **16 incompatible corner combinations blocked**. Binary STL is reparsed, not just checked before serialization. Checks include finite coordinates, nonempty exact binary length, positive nonzero triangle areas, expected mm bounding box, normals consistent with winding, positive enclosed volume, center of mass bounds, exact two-triangle undirected edge incidence after 0.00001 mm vertex welding, opposite directed edge incidence, one connected component, and Euler characteristic 2.

Mechanical checks verify positive-radius ordered cross-sections, inward-only coplanar annulus, concentric tip/rim, 12-fold stem symmetry, outward unsupported slope ≤45°, and conservative 4 mm grip core. There are no collision-prone moving bodies, retention/track limits or assembly steps. Surface self-intersection avoidance is checked by the radial/slab construction invariants, not a general triangle-pair intersection engine.

`node browser-test.cjs` exercises real Chromium downloads for defaults/presets/extremes/slider/trial/phone, reparses each actual downloaded STL and compares its bytes with the selected final geometry. It checks invalid fields/combinations, live preview changes, dimensions, runtime errors, no remote requests, 320/390 px overflow, reachable download, touch orbit/pinch, and explicit view controls. Run against `npm run dev -- --host 127.0.0.1 --port 5191`. Results and desktop/mobile screenshots are saved in this folder.

**No physical prototype has been printed or spin-tested.** Geometry/manifold checks cannot establish achievable spin time, bed adhesion, fatigue strength or print balance. Material, first layer, slicer infill, printer and surface finish all matter.

`node gallery-test.cjs` compiles all root inline scripts, checks the new entry exactly once and first under STL Generators, and compares all 33 original entries to HEAD before this run. `node production-test.cjs` serves the actual root `deploy/` directory and exercises its gallery and downloaded STL. `PUBLIC_SITE=1 node production-test.cjs` checks the live GitHub Pages deployment. Validation reports distinguish local/browser/build/public checks.
