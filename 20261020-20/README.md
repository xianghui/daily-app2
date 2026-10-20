# Shuttle Loop — captive linear fidget STL generator

React + Vite, local Three.js preview and client-side binary STL export. No API, CDN, account or hardware. A thumb spool slides back and forth through a closed racetrack. This is a three-part assembled fidget, **not** print-in-place. It is distinct from the gallery's rotating ring, palm roller, squeeze spring and rocking saddle.

## Run and export

`npm install` then `npm run dev`. `npm run predeploy` builds `dist/`. The app has the required per-app gh-pages deploy command, but public publication is through the repository root combined deploy flow. All production imports are bundled locally. Seven numeric/range controls, presets, reset, touch orbit/zoom and fit-to-view work on phones/desktops. Export all three nonintersecting solids or individual parts. Preview and export consume the same final vertex/face arrays; STL dimensions are millimeters. The preview is the print layout, not assembled positioning. It reports layout X/Y/Z and assembled X/Y/Z separately.

## Parameters (all mm)

| Parameter | Range | Default |
|---|---|---|
| Track length | 44–84 | 64 |
| Slot width | 12–20 | 14 |
| Frame wall | 3–6 | 4 |
| Frame thickness | 2.4–5 | 3 |
| Running clearance, radial and per axial face | 0.2–0.6 | 0.35 |
| Cap bore radial adjustment | −0.15–0.20 | −0.05 |
| Edge grip scallop depth | 0–0.8 | 0.45 |

Length − 2 × wall − slot must be at least 14 mm; impossible or missing/nonfinite values block export. Resolution is fixed at 128 angular segments per thumb part and 130 boundary points per track loop (3600 triangles total). Generation is small enough to run synchronously. Frame is a nested simple racetrack extrusion; thumb parts are simple revolved profiles with integrated scallops, not overlapping visual shells or un-unioned textures. No CSG needed.

## Mechanism and assembly

Print Z up as displayed, all flat bases on the bed, cap bore upward, no supports. Use PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, 4 walls, 30% infill as a starting point. Deburr elephant foot. Push the base's stem through the slot; invert the cap and press onto the 6 mm diameter × 2 mm peg until the cap meets the shoulder. Support the base underneath, not the track. The cap has a blind bore 2 + clearance mm deep, so it seats on the shoulder before bottoming out. No bearings, magnets, screws or adhesive required.

The shoulder gives track thickness + 2 × running-clearance between the pads. Stem radius = half slot − clearance. Pad radius = half slot + 3, less up to 0.8 scallop depth, giving at least 2.2 mm lateral retaining overlap. The closed frame limits linear travel to length − 2 × wall − slot + 2 × clearance. The model checks 101 positions across that interval, including rounded end stops. No intended compliant elements; cap floor ≥1.4 mm, base pad 3 mm, cap 4 mm, frame wall ≥3 mm.

### Calibration guidance

No single tolerance is universal. Print the individually downloadable base and cap first. Test mating away from the track. Increase bore adjustment by 0.05 mm if too tight; decrease if loose. Negative is radial interference, positive is radial clearance; bore diameter is 6 + 2 × adjustment mm. A positive adjustment is exploratory and may not retain: do not use a cap that slips. Choose 0.35 mm running clearance first, 0.5 mm for rougher printers, then tune for material and machine. A worn press fit can release; inspect before use. Removal may damage the fit. Separate small parts are not for children.

## Validation performed

- `node validate.mjs`: parsed binary exports at all 128 range corners (112 valid, 16 rejected). Checks finite coordinates, nonzero area, stored normals, dimensions within 0.001 mm, welded edge incidence exactly two at 0.00001 mm tolerance, opposed edge directions, connected components and positive signed volume **per solid**, including individual downloads.
- Analytic mechanism checks: clearances, walls, flange overlap, cap floor, insertion depth and swept stem containment at 101 positions. Pairwise print-layout bounding boxes have ≥6 mm separation. Simple nested/radial construction excludes geometric self-intersections and internal duplicate surfaces; these are digital design checks, not a physics simulation or proof of long-term retention.
- `node browser-test.cjs`: real headless Chromium controls, all presets, min/max/mixed combinations, invalid input blocking, exact browser-export bytes versus generator output, every individual part download, preview image changes, fit, 320/390 px viewport overflow, phone download, real touch orbit and pinch zoom. Results in `browser-validation.json` and screenshots.
- `node gallery-test.cjs`: inline script compilation, unique new entry, preservation of all 19 existing entries, runtime rendering, STL category ordering and search.

**No physical print, force, wear, retention or durability tests have been performed.** Calibrate before assembly; do not force a tight fit. Digital watertightness is not a promise of practical fit.

Dependencies: React, React DOM, Three.js; Vite and React plugin for build; gh-pages for required deploy script. Browser tests use the host's installed Playwright and are not a production dependency.
