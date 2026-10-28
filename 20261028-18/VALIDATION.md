# Saddle & Sway — validation, 2026-10-28

## Completed before publication

- `npm run predeploy`: passes. Real production base path `/daily-app2/20261028-18/`; worker and local WASM exercised in browser.
- `npm test`: **14 parameter cases +30 imported cases**. Default, three presets, minimum/maximum and eight cross-extremes. Every connected card and all four de-tabbed parts checked independently.
- Binary STL tests: exact byte/triangle count, finite coordinates, nondegenerate triangles, stored unit normals matching winding,1e-5 mm welded edge incidence exactly two/opposite directions, positive component volume and expected millimeter bounds. One connected card / one connected solid per exported part.
- Kit/assembly checks:16 accessible cuts produce **five components** (four parts + carrier); card bounds match declared width/height; no unintended flat or assembled intersections; seat/horse straight insertion paths sampled13 positions; all part meshes contained in card solid.
- Default mesh:2756 triangles,180×230×3.05 mm. Max assembled/insertion overlap3.18e-7 mm³, below3e-4 numerical threshold. Equal-density COM [0.0818,0.0231,25.0322] mm, curvature center85 mm, static vertical margin59.9678 mm. Runner half-arc32.76°, intended rocking±10°. Ground-clearance sampling minimum0 mm, no penetration at checked poses. Imports and extrema receive the same checks.
- `browser-test.cjs`: **27 actual downloaded STL variants**,10 malformed/unsupported file rejections; actual file-picker PNG/JPEG/ASCII/binary imports; transformed geometry compared to default and snapshot regenerated in Node; UI dimension/signature match. Replace/remove/reset, threshold/depth/crop, scale/rotation/placement, empty image, excessive input, units confirmation and export blocking pass.320/390 px no overflow; real CDP touch orbit/pinch changes canvas; phone image/STL downloads pass. Zero runtime errors and remote requests.
- `feature-test.cjs`: all presets and three bounded variations; shapes, text, SVG/icon, raised/engraved/inverted images, exact JSON/import round trips, persisted named designs, undo/redo, every per-part download and actual ZIP contents, source up-axis, live latest-state guards, dark-theme persistence, geometry-neutral preview colors/views, drag/drop, keyboard focus and collapsible sections pass.
- `hole-test.cjs`: boolean probe volumes in final saddle mesh verify SVG ring's white hole remains unraised/unengraved; dark ring becomes real raised/engraved solid geometry.
- `resilience-test.cjs`: intentionally aborted worker disables export, reload recovers; all six original icons change geometry.
- Named image/STL designs reload with exact saved signatures. Missing payload, wrong-app JSON, invalid transforms and dimensions reject recoverably. Delayed older image normalization cannot overwrite newer selection.
- Desktop374 px left controls/right viewer; mobile preview-first stacked layout, reachable exports, reduced motion, isolated views and theme screenshots recorded.
- Reference mesh freshly downloaded, hashed, parsed and sectioned; source dimensions/components/defects, measured sheet/rail/bridges and original redesign map in `reference-analysis.json`. Source STL not redistributed.
- Gallery inline scripts compiled via `new Function`;229 earlier entries preserved, one new STL entry newest first; all230 browser cards render and search recovers without runtime errors.
- Root `npm run predeploy`:230 built,0 failed/skipped. `root-stage-check.cjs`:230 app folders present, root index identical,43 new app files hash-identical; actual staged PNG/STL imports and mesh downloads pass.

## Limits and unperformed tests

These are computational geometry/browser tests, **not a physical print test**. No physical print, joint-force, strength, fatigue, friction, child-safety or dynamic rocking certification. Calibrate runner/seat joints, trim elephant foot and tab nubs; fixed joints may need glue after calibration. Adult desk miniature; not a ride-on toy. Rock gently under±10° on level surface, no hard stops.

Supported imported STLs are deliberately limited to one closed outward-facing convex flat-bottom solid. Concave/hollow/open/nonmanifold/disconnected/overhanging models reject explicitly; no convex hull substitution or automatic repair. Images are20×20 sampled height relief, not full3D reconstruction or exact vector tracing; bright holes preserve unraised saddle material rather than piercing it. STL does not store preview colors.

## Publication confirmation

ROOT `npm run deploy` published the combined230-app `deploy/` tree. GitHub Pages build reports `built`; public app returns HTTP200. `public-smoke.cjs` exercised the public worker/WASM, actual local PNG import and binary STL download, checked closed/wound mesh plus exact preview/export signature, and verified all230 gallery cards with the new entry first. Initial public404 was Pages propagation while the build was running; successful retest after completion. Main implementation commit `c4535f2` pushed to origin/main. No digest sent.
