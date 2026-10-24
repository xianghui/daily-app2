# Peel Cadence — validation record

## Geometry

- `npm run predeploy`: production build passed. Bundler reports large Three.js chunk and Node-only `node:module` externalization inside Manifold; browser worker/WASM paths are verified separately, not assumed working from compilation.
- `npm test`: 78 parameter cases (all 64 endpoint combinations, min/default/max, three presets, eight deterministic variations); 24 image/STL-derived cases (threshold and grayscale, ASCII and binary; six designs each).
- Independently parsed binary exports have finite coordinates, normalized outward normals, nondegenerate triangles, positive component volumes, exact two-face welded edge incidence and opposing edge winding, with independent millimeter dimensions.
- Two components per whole export; one per individual part. Four socket holes remain open through the socket strip (the surface surrounding each hole is closed/manifold).
- Snap mechanism checks: 0.15–0.35 mm intended radial interference; ≥0.55 mm seated neck clearance; ≥0.4 mm axial freedom below flare; >4 mm socket edge walls; ≥6 mm between heads; protected import region ≥11.5 mm from stud roots. Actual CSG intersections prove disjoint print layout and exploded alignment, no seated neck/base intersection, and no residual intersection after lifting above heads. Intermediate release contact is confined to stud heads and is explicitly intentional elastic interference.
- Difference solids confirm imports change only the isolated palm region, never studs or sockets. No arbitrary interpenetrating shell export or silent mesh repair.

## Browser

- Development and production browser suites passed actual PNG, JPEG, ASCII STL and binary STL picker imports and generated downloads.
- Pixel content, threshold, relief depth, crop, footprint, mesh type, rotation, height and placement affect STL. Undo/redo and portable save/open restore geometry; replace/remove/reset recover defaults.
- Truncated, wrong-content, oversized, excessive-pixel/triangle/dimension, open, nonmanifold, concave, empty-image and invalid-transform cases produce recoverable errors and disable export.
- Preview/export fingerprint equality; UI millimeter dimensions match parsed downloads. Preview palette does not alter STL geometry. All three presets and representative variations validated.
- ZIP contains two closed part STLs and guidance; both individual exports validated.
- 320/390 px phone layouts: no horizontal overflow, touch orbit/pinch works, all tabs and collapsible controls work, persistent download remains reachable. Zero page runtime errors; local suites observed no off-origin requests.
- Gallery: inline script exists and compiles with `new Function`; new entry exactly once, area `stl`, correct folder, first category “STL Generators”; all 115 earlier entries preserved, 116 total rendered without runtime error.
- Root predeploy: 116 built/copied, zero failed/skipped; identical root gallery, every app packaged, new deploy folder matches current dist.

Machine-readable details: `geometry-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `root-deploy-validation.json`. Screenshots show actual browser output. `public-check.cjs` records published-site verification separately in `public-validation.json` after Pages propagation.

## Physical testing boundary

**No physical print, insertion-force, retention-strength or fatigue tests performed.** Closed meshes and analytic clearances do not establish snap feel or lifetime. TPU 95A, Soft Start first, one station at a time, with interference/thickness reduction if tight. No universal tolerance, repaired mesh, material simulation, print-time estimate or guaranteed support-free/print-ready claim.
