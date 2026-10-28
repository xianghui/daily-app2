# Validation — Veil & Shift

Computational checks only. **No physical print, optical/perception, friction, adhesive, stability or strength test.**

## Reference and geometry

- Downloaded and parsed actual CC BY 4.0 White Cat Kit Card mesh; SHA-256, bounds, two edge-connected source components, source defects and measured sections recorded in reference-analysis.json. Inspected three-section PNG. No raw reference redistributed.
- `npm test`: **23 valid built-in/preset/extreme configurations and 35 image/STL-derived configurations** passed; seven impossible mixed-extreme carrier layouts were rejected clearly. All five outputs (card + four parts) checked independently per case.
- Float32 binary STL length/count, finite/nonzero triangle geometry, normalized stored normals, outward winding, positive per-component enclosed volume, 1e-5 mm welded edges with exactly two opposite faces, one component per output, bed Z=0, expected millimeter bounds.
- Manifold intersections: seated pairwise overlap <0.001 mm³; vertical screen insertion 0–25 mm; floor support on both feet; guide lateral walls; 25 front-slide poses across ±3 mm; no collisions with rear import/feet. Both feet grounded. Front deliberately lift-out, not captive.
- Both gratings contain real through apertures. Projected solid-overlap area varies with front phase. This verifies geometry, **not optical perception/performance**.
- Card envelope equals declared width/height. Flat parts do not overlap. Sixteen accessible snips miss all functional parts and yield exactly five solids: four parts plus carrier.
- Zero-volume tangent window cutters skipped, avoiding a zero-volume CSG artifact found at maximum rear-pitch settings. Re-ran full geometry suite successfully.

## Browser production checks

`browser-test.cjs`: **27 actual STL downloads**, including default, PNG, JPEG, changed threshold/depth/crop/grayscale/scale, ASCII STL and binary STL transformed/reset, minimum/maximum, all individual parts, and phone imports. Each download independently parsed and matched exact current UI fingerprint, dimensions and JSON-regenerated geometry. Same assembly/mesh tests run on imported outputs.

Ten malformed file fixtures rejected: invalid SVG, truncated STL, open mesh, duplicated/nonmanifold facet, oversized file, fake PNG, excessive pixels, excessive triangle count, excessive dimensions, and concave geometry. Also checked empty silhouettes, invalid dimensions/transforms, protected-zone violations, unit confirmation, reset recovery and stale export blocking.

`feature-test.cjs`: all three presets and three silhouettes, three bounded variations, undo/redo, text, searchable icon, SVG, raised/engraved modes, inverted JPEG, four portable imported-asset round trips, saved named design, actual ZIP containing five independently validated STLs plus instructions, per-part download actions, assembled/exploded/card/loose/isolated views, saved dark theme, preview swatches, drag/drop, Y-up STL, collapsible section, keyboard focus and latest-edit worker state.

Additional scripts:

- `hole-test.cjs`: tiny boolean probes confirm SVG-ring white hole and dark ring in actual raised and engraved solids.
- `resilience-test.cjs`: intentionally abort production worker; error blocks exports, reload recovers. All six bundled icons yield distinct geometry.
- `named-import-test.cjs`: image and STL assets restore exact geometry after reload from named designs.
- `portable-errors-test.cjs`: missing asset requests reattachment; invalid transforms, app identifier and dimensions block export and recover.
- `stale-import-test.cjs`: delayed older image normalization cannot overwrite newer selection.
- `studio-layout-test.cjs`: 374 px left panel, right viewer, isolated views, reduced motion, preview-first 320 px layout without overflow.
- `pose-test.cjs`: actual phase/insertion preview changes while print-mesh signature remains unchanged.
- Touch-enabled 390 px and 320 px contexts: picker imports, reachable exports, no horizontal overflow; CDP touch orbit and pinch visibly change preview.

No browser page errors or off-origin requests during production import/download tests. Tested screenshots and JSON reports are adjacent to scripts. Native file pickers exercised with `setInputFiles`; real downloads captured with Playwright download events.

## Build, gallery and publication

`npm run predeploy` passed. Gallery scripts compiled with Node `new Function`; entry exactly once, correct folder/area, newest first, all **244** previous entries preserved. Root staging/browser/deploy checks and publication results recorded in adjacent reports. A first gallery browser check used the app-only server and correctly returned no gallery; rerun against the root staging server.

Dependencies installed independently; local WASM/fonts loaded from real production base path. Root monorepo predeploy/deploy is the authorized public publication path, not the app deploy script.

## Combined-site result

Root `npm run predeploy`: **245 built/staged, 0 failed, 0 skipped**. All previous 244 gallery entries retained; exactly one new entry. Root inline scripts compile, gallery renders/searches correctly, STL category first. Current app assets byte-identical in root staging. `combined-browser-validation.json`: repeated all 27 download and import/rejection/touch paths against combined production output, zero page errors/off-origin requests. The local staging helper initially omitted directory index resolution; fixed it and reran successfully. Final production favicon is locally bundled.

Root `npm run deploy` completed successfully (`Published`); combined site sent to the gh-pages branch.
