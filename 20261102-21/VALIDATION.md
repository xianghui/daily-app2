# Validation — Cycloid & Race (2026-11-02)

## Reference evidence

Downloaded and independently parsed the attributed Mike Kasberg CC BY4.0 STL; source, SHA-256, triangle counts, bounds, all edge-adjacent components, sheet/socket measurements and three actual mesh sections are recorded. Local candidate meshes were also parsed and rejected for mechanism mismatch. Reference trees and the old daily_app tree were not modified. No raw third-party STL redistributed.

## Performed computational checks

- `npm run predeploy`: production bundle succeeds with local worker/WASM/fonts.
- `npm test`: 38 variants cover defaults, all three presets, each parameter min/max, combined extrema for every silhouette, image-derived outputs and both STL fixture formats/transforms. Every part and connected/de-tabbed export independently parsed as float32 STL: correct byte length, finite coordinates, nondegenerate triangles, normalized outward normals, opposite winding, welded edge incidence2, positive volume per connected component and expected mm dimensions/Z=0.
- Every card is one connected solid. Clean layouts have five nonintersecting solids. Twenty specified snip cuts yield six components (carrier + five parts), preserve all clean-part volumes, and stay away from tongues/rolling edges. Card envelope/thickness verified.
- Eight receiving sockets are open; pairwise assembly intersections zero within .001 mm³ allowance. Vertical rail insertion sampled at seven heights. Total slot fit and >=1 mm engraving backing checked. Upper cross-sections above runner height and at sheet top remain inside first-layer footprints.
- Finite-radius external ball checks at25 positions per lane: cycloid t=.4..π and full straight path,48-segment sphere, disclosed .015 mm numerical contact lift, <.002 mm³ obstruction allowance. Presets/extremes have zero observed intersection. Same checks applied to image/STL-derived outputs. Balls remain deliberately loose at exit; no retention, release synchronization or timing simulation claimed.
- Actual solid probes confirm bright centre holes remain unengraved and dark ring pixels make Boolean voids.

## Browser and production tests

Reproducible scripts and JSON reports are kept beside this file:

- `browser-test.cjs`: 22 checked full-card downloads; PNG/JPEG actual picker imports; binary/ASCII STL, explicit mm gate; threshold/depth/crop/grayscale/image size, STL size/rotation/placement changes survive export. Each download fingerprint equals UI preview and regenerated JSON mesh. All parts revalidated; reset/remove restores exact baseline. Invalid/truncated/wrong-content/excessive/open/empty/nonmanifold/unsupported inputs block export and recover. Every individual part downloaded and parsed. 320/390 px mobile, real CDP touch orbit/pinch and phone imports/downloads.
- `studio-test.cjs`: all three presets and silhouettes, text/icons/SVG, portable image/mesh JSON, missing payload guard, named save/reload, undo/redo, ZIP extraction and validation of each actual STL, all views, persisted dark theme, collapsible sections, keyboard focus/reduced motion, desktop374 px left rail, phone preview-first layout, deliberately aborted worker and reload recovery.
- `orientation-test.cjs`: Z/Y/inverted-Z source paths, explicit units and final solid checks.
- `icons-drop-test.cjs`: six bundled icons change solid geometry and actual drag/drop import works.
- `phone-views-test.cjs`: every phone tab/expanded guide, reachable JSON and exports, JPEG/ASCII picker, dark background changes mesh, all assembly views with no overflow at320 px.
- `presentation-test.cjs`: all five isolated parts/main views; excessive, zero and empty numeric inputs disable exports and recover.
- `stale-test.cjs`: rapid geometry/image edits immediately block stale export; final current mesh matches Node; invalid transform feedback/reset recovers. An inherited test initially used the previous app's span values17–20; corrected to this app's supported68/80/76. No product workaround needed.
- `personalization-check.mjs`: dark-ring and bright-hole Boolean probes.
- Combined root build:381 app indexes present, root index identical, all41 new app deployment assets byte-identical to local dist, zero failed/skipped apps. Complete real import/download suite repeated under combined deployment prefix, not just app development server.
- Gallery: inline scripts compiled with Node `new Function`; new entry exactly once and area stl, first section STL Generators; all380 previous entries preserved byte-for-byte in parsed data. Browser runtime errors zero.

Screenshots show desktop, connected card, exploded assembly, phone and public/combined site. Logs distinguish test outputs and checked geometry from UI screenshots.

## Not performed / limitations

No physical print, rolling, timing, glue-strength, snip-force, fatigue, friction or durability tests. Two identical external6–8 mm balls, adhesive, snips and catch tray required. Ideal point-mass brachistochrone timing does not describe finite balls exactly;64-segment approximation and manual release further limit comparison. There is no guarantee which ball finishes first. Convex-only STL subset is explicitly rejected outside its contract, not repaired or replaced with a hull. SVG/image conversion preserves holes only at20×20 sampling resolution. Engraved-only customization protects rail/sheet interfaces. Computational geometry is not a certification of physical performance.
