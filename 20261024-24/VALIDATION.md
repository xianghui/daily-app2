# Orbit Unfurl validation — 2026-10-24

- `npm run predeploy`: passed; production JS, worker and Manifold WASM bundled locally.
- `npm test`: **142 parameter cases**, including default, extrema, all 128 parameter corners, three presets and eight representative variations. **24 image/STL-derived cases**. Eight engine rejection cases.
- Independently parsed actual exported binary STL: finite coordinates, positive enclosed volume per component, nondegenerate faces, normalized/outward normals, consistent neighboring winding, welded two-face edge incidence, seven intended components, and independently calculated millimeter dimensions.
- Every intended component checked separately. All 21 print-layout part pairs nonintersecting. Independent arm folds sampled across complete turns with varying yoke angles; circular envelope inequalities checked across all parameter cases. Only three explicitly intentional stationary cap/shaft friction-seat intersections permitted. Bearing radial/axial play, cap roof/engagement and retention overlaps checked.
- Image/STL modifications restricted to the stationary palm. Moving-part STL fingerprints unchanged; Boolean differences outside the import zone empty. Preview and export fingerprint match current settings exactly.
- Browser file-picker PNG, JPEG, ASCII STL and binary STL imports; **29 actual STL downloads** per main suite. Threshold/depth/pixels/crop and STL shape/scale/rotation/placement measurably change output; reset/remove restore the built-in output.
- Ten malformed/excessive/open/nonmanifold/concave browser inputs rejected recoverably; additional empty-silhouette, invalid dimensions/transforms and unsafe-placement checks block export. Missing JSON import payload explicitly requests reattachment and recovers after removal.
- Three actual preset thumbnails; every preset and four real Randomize outcomes downloaded and mesh/mechanism-validated. Undo/redo, all four portable import save/open round trips, individual-part STL and seven-part ZIP with guide, drag/drop, colour neutrality and both assembled rotation/folding previews passed.
- 320/390 px phone widths: no horizontal overflow, actual touch orbit/pinch, image/STL picker downloads, collapsible sheet, every tab and always-in-viewport export passed. Desktop and phone screenshots inspected.
- Full main suite repeated against the compiled production bundle; extended preset/roundtrip/ZIP suite also passed there. No browser runtime errors or external modeling/file-upload requests.
- Gallery: all inline scripts compiled with `new Function`; newest entry exactly once with area `stl`; 127 prior entries unchanged, now **128**; STL Generators first; search/render checks passed.
- Root monorepo `npm run predeploy`: **128 built, 0 failed, 0 skipped**; root index matches, every app packaged beneath `deploy/`.

These are computational geometry, kinematic and browser checks, **not physical print tests**. Balance, cap pullout, friction, centrifugal opening, speed limits, wear and durability remain untested. Caps are friction seats, not permanent safety locks; use only slow guided motion after fit calibration.

Public verification: `https://xianghui.github.io/daily-app2/20261024-24/` returned HTTP 200. Browser verified production app/worker/WASM, local image and STL integration with real downloaded/reparsed exports, newest gallery position and all 128 entries, zero runtime errors and failed requests. See `public-validation.json`.
