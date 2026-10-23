# Observed software validation — 2026-10-24

- `npm run predeploy` builds the React/Vite editor and local worker/WASM.
- `npm test`: 78 cases (default, min/max, 3 presets, all 64 parameter corners, 8 deterministic variations) and 24 imported-source cases. Independently parses binary STL; checks finite coordinates, nondegenerate triangles, normalized outward normals, exact millimeter bounds, positive volume of every component, welded edge incidence two and opposite winding. One connected solid per output.
- Mechanism: final-mesh uniform-density center of mass, crown/table clearance, resting-foot escape angle, restoring torque at 12/18/25 degrees in 24 azimuths. Baseline parameter cases have a minimum conservative 12-degree lever of 0.668 mm; tested imported-source cases ≥0.993 mm. These values are software results, not measured print behavior.
- CSG solid probes verify base/neck/crown backing. Exact differences against no-import output confirm customization cannot alter the rolling sole or neck.
- `node browser-test.cjs`: real file-picker PNG/JPEG and ASCII/binary STL, actual downloaded binary STL, geometry signatures match preview, changed threshold/depth/crop/image pixels, STL scale/rotation/offset/height, replace/remove/reset, per-body output. Rejects malformed, truncated, nonmanifold/open/concave meshes, huge inputs, invalid dimensions, empty silhouettes and unsafe transforms. 320/390px phone layouts, touch orbit/pinch, real phone imports/downloads, no remote requests/runtime errors.
- `node extra-browser.cjs`: all presets, four real random variations, undo/redo, drag/drop, every portable imported-source JSON save/open round trip, preview colour neutrality. Mesh and mechanical validation also run on imported exports and presets.
- `node mobile-sheet.cjs`: 320×740 bottom sheet, collapse/expand, all tabs, readable guidance, export in viewport.
- Desktop and mobile screenshots visually inspected: model dominates, actual preset thumbnails, warm rail, reachable export. JSON reports contain exact observed outputs.

This is not a physical print test, slicer simulation, friction measurement, or certified stability assessment. Solid uniform-density infill and support removal are essential. The studio states PLA/PETG, 100% infill, removable supports beneath curved sole and crown, full-size River Stone calibration, 12–25-degree exploratory nudges, and no hardware/assembly. There is no multi-part ZIP because only one body is required.

Root gallery/build/deploy and public checks are recorded in their generated validation reports after publication.

## Publication checks

Root gallery inline scripts compiled with Node `new Function`; exactly one newest STL entry, all 105 earlier entries retained, search/rendering passed without runtime errors. Root predeploy assembled all 106 app folders plus the matching root index; zero failed/skipped builds. Root `npm run deploy` reported Published. Full browser import/export suite also passed against the built production bundle (`production-browser-validation.json`).

Public GitHub Pages verification passed after propagation: app and gallery render without runtime errors or failed requests; the public app loads a local sample image and downloads a closed-manifold, outward-wound, positive-volume STL. See `public-validation.json`.
