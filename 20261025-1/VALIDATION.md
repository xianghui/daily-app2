# Pinch Passage verification — 2026-10-25

- App `npm run predeploy`: passed. Vite reports bundled chunk size and Node-specific manifold module externalization warnings; actual browser/worker/WASM execution is tested, not inferred from compilation.
- Geometry: 142 cases (all 128 seven-parameter range corners, default/minimum/maximum, three presets, eight bounded variations) and 24 image/STL-derived cases passed exported triangle, finite coordinate, normal/winding, welded closed-manifold, positive component volume, component-count and mm-bounds checks.
- Mechanism: all cases passed three separated printable parts, nominal unpinched axial motion nonintersection, intentional cap/stem seat overlap, analytic whole-stroke flange clearance/retention and isolated import checks. Deformed TPU response is not simulated.
- Browser file picker: PNG, JPEG, ASCII STL and binary STL exercised; exported geometry compared against no-import output, threshold/depth/crop changes, size, rotation and placement. Downloads match preview fingerprint and regeneration of saved settings.
- Errors: wrong format, fake image, truncated STL, open/nonmanifold mesh, concavity, excess bytes/pixels/triangles, extreme dimensions, empty silhouette, blank transform and unsafe placement reject recoverably and block export.
- Presets/variations, undo/redo, portable save/open of each import type, replacing/removing/reset, sample buttons, drag/drop, actual per-part and three-part ZIP exports passed.
- 320/390 px phone checks: no horizontal clipping, usable preview, touch orbit/pinch zoom, PNG/STL file imports, actual downloads, collapsible controls and all tabs, fixed reachable export.
- Gallery inline scripts compile; new entry exactly once/newest/area stl, STL category first, all 128 prior entries retained; 129 cards render without runtime errors.
- Root predeploy: deploy/index.html matches root gallery, all 129 app folders contain index.html; zero failures/skips.

Evidence: geometry-validation.json, browser-validation.json, extra-validation.json, mobile-sheet-validation.json, gallery-validation.json, root-deploy-validation.json and screenshots. The built production app also passed the full browser suite: 25 actual STL downloads and 10 malformed/unsupported file cases, with zero runtime errors and zero external requests. See production-browser-validation.json. Live GitHub Pages app, local worker/WASM, real PNG/STL sample integrations and STL downloads, and the 129-entry public gallery passed; see public-validation.json. GitHub Pages build 40109927432 completed successfully from gh-pages /.

No physical print, pinch-force, friction, cap pullout, fatigue or wear tests performed. This is a geometry/nominal kinematic preflight, not a tested performance certification. TPU collar and PLA/PETG plunger/cap require material and fit calibration.
