# Pebble Vault — captive rolling-ball fidget STL studio

React + Vite application. Bundle-local Three.js, OrbitControls and Manifold WASM; no API, account, server-side modeling or CDN. Rotate/zoom the printable layout, customize dimensions and download the identical final geometry as binary STL in **millimeters**.

## Mechanism and assembly

A loose sphere rolls under your thumb through four cage windows and a smaller lid opening. Unlike the earlier spindle/ring/slider/flexure mechanisms, rotation is unconstrained about all axes. Export contains four mutually separated, closed solids: cage, lid and two hemispheres. Print hemispheres equator down, bond their equators, cure completely and smooth the seam. Insert ball into cage, dry-fit and test rolling, then bond lid to top rim with its locating ring down. **Adhesive is required for permanent retention; friction is not a lock.** Supplies: small amount of material-compatible plastic adhesive (two thin bond films), abrasive paper. No bearings, magnets or fasteners. No print-in-place claim.

Keep adhesive away from all moving surfaces. Do not force a tight locating ring: sand it first. Positive lid fit is radial clearance; negative fit is nominal radial interference requiring sanding or a printer-specific fit calibration. Follow adhesive cure instructions. Small parts; not designed or tested for children.

## Parameters (all mm)

| Control | Range | Default |
|---|---|---|
| Ball diameter | 20–32 | 24 |
| Running radial and per-end axial clearance | 0.4–1.2 | 0.7 |
| Wall | 2.4–4 | 2.8 |
| Base / lid flange thickness | 2–3.2 | 2.4 |
| Window width | 10–20 | 14 |
| Groove depth | 0–0.6 | 0.4 |
| Lid radial allowance | −0.05 to +0.30 | +0.15 |

Window must be no wider than 65% of ball diameter and must leave at least 6 mm ball-minus-window retention margin. Grooves must leave >=2 mm wall. Out-of-range, empty, NaN and invalid combinations block export with an error. The previous valid preview remains visible, explicitly marked invalid. Presets and Reset are provided, with both numeric and slider controls.

Let r=D/2, I=r+clearance, R=I+wall, H=D+2*clearance+floor. Assembled bounds are 2R × 2R × (H+floor). Print-layout bounds are (4R+5) × (3R+r+5) × H. The UI shows both, in X/Y/Z order. Lid hole diameter is 0.56D; locating ring is 1.2 mm thick and 3 mm deep. Mesh circular resolution is fixed at 64 segments. Sphere radial faceting error is bounded conservatively by r*(1-cos(pi/32)); nominal sphere radius is its outer envelope.

## Printing and calibration

PLA or PETG, 0.4 mm nozzle, 0.16–0.2 mm layers, >=3 perimeters, 20–30% infill. Cage base and lid flange flat on plate; both ball equators flat on plate. No compliant elements. No supports normally needed, but window headers bridge 10–20 mm: inspect slicer bridges, slow bridges/narrow windows or use local support if your machine requires it. Hemisphere domes avoid whole-sphere underside overhangs. Inspect first-layer elephant foot and seam alignment before bonding.

Running clearance of 0.4 / 0.7 / 1.2 mm is a printer/material-dependent starting range, not universal. Coupon export has a 5 mm ring and gauge separated on the plate, with the selected XY radial gap. Insert gauge after printing. It does not certify Z play, sphere seam quality, bridge sag or lid fit. Print the separate lid to check its locating ring against the unbonded cage. Individual cage, lid and hemisphere downloads are available; print the hemisphere twice.

## Development / deployment

```
npm install
npm run dev
npm run predeploy
npm run deploy
```

Per-app deploy is provided as required, but public monorepo publishing uses ROOT `npm run predeploy` then ROOT `npm run deploy`, with all apps and root gallery under root `deploy/`. Vite base is `/daily-app2/20261021-2/`.

## Validation performed (not physical print testing)

- `node validate.mjs`: all 128 endpoint combinations checked; 72 valid and 56 deliberately blocked. Binary STL is reparsed: finite coordinates, nonempty triangles, nondegenerate faces, normal agreement, opposing edge winding, 1e-5 mm welded edge incidence exactly two, positive volume of each connected component. Four separate components in all-part export, two in coupon and one per individual export. Bounds checked against independent analytical layout formulas.
- Manifold CSG subtracts the chamber, windows and grooves and unions the flange with its thin locating ring. Not overlapping visual meshes. Closed component topology plus robust solid modeling avoids internal visual-only faces.
- Analytical mechanism checks: window/lid opening smaller than ball; minimum wall; locating-ring bore clears sphere including radial motion; full sphere-envelope containment at 48 representative translational extremes and any orientation; nonintersecting print-layout AABBs. Ball clearance is analytical geometry, not friction/adhesive/strength simulation. The intended equator bond and lid-rim contact only occur during assembly.
- `node browser-test.cjs`: actual Chromium downloads at default, presets, valid min/max, changed slider, phone, coupon and individual parts; exported bytes match final geometry for selected parameters. Invalid settings blocked. Preview changes, fit control, 320/390 px layouts, touch orbit and pinch zoom exercised. Runtime errors: zero. Uses workspace-installed Playwright solely as validation tooling, not an app dependency.
- `node gallery-test.cjs`: compile every root inline script; ensure exactly one new STL entry, correct destination, STL category first, all 24 earlier entries preserved, runtime rendering and search checked.
- Production preview receives the same browser/export checks after final build; reports and screenshots stored alongside source.

**No physical printing, tactile-force, wear, adhesive-strength or product-safety test was performed.** Watertight geometry and clearance checks do not guarantee print success or long-term retention.
