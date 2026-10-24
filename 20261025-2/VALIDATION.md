# Validation — Seam Ritual / 20261025-2

## Passed

- `npm run predeploy`: production React/Vite build, locally bundled worker/WASM and dependencies.
- `npm test`: 142 parameter cases (defaults, min/max, all 128 range corners, three presets and eight deterministic variations); 24 image/STL-derived cases across defaults, extremes and presets.
- Every final solid: finite triangles, nonzero area, welded edge incidence two, opposite adjacent winding, normalized outward stored normals, per-component positive enclosed volume, expected independent millimeter bounds and Z=0 bed placement.
- Mechanism: nominal engaged solid intersection is empty; all five lateral undercuts are 1 mm; head-face gaps and neck side clearances within limits; two exported parts do not intersect; source changes isolated from tooth interfaces.
- `browser-test.cjs`: actual PNG/JPEG and ASCII/binary file picker imports, actual binary STL downloads, pixel content / threshold / depth / crop changes, STL scale / rotation / placement / height changes compared with no-import exports. Every downloaded model re-generated independently from its saved source and parameters and checked for exact preview/export fingerprint, mesh and mechanism consistency.
- Rejection: invalid types/content, truncated/open/nonmanifold/concave meshes, excessive sizes/pixels/triangles/dimensions, invalid parameters/transforms, empty white silhouette and unsafe placement. Errors block export and recover through replace/remove/reset.
- `extra-browser.cjs`: all presets and four real Variations downloads, undo/redo, JSON save/open exact geometry round trips for all four fixture formats including portable payloads, per-part exports, two-part ZIP and guide, drag/drop, assembled/layout switching and colour/geometry separation.
- Phone: 390px and 320px viewports, touch orbit and pinch zoom, PNG/STL phone imports/downloads; collapsible controls, every tab and reachable fixed export; no horizontal overflow.
- Production bundle: full browser import/download/rejection/mobile suite rerun via Vite production preview, zero runtime errors or off-origin requests.
- Gallery: all inline scripts compiled with `new Function`; new entry exactly once, area `stl`, correct folder, newest first. Existing entries preserved; browser rendering/search and STL Generators first category checked without runtime errors.
- Root `npm run predeploy`: 130 apps, zero failed/skipped; exact root index and every gallery app present in `deploy/`.

## Corrections during development

The initial head-gap setting affected only assembled placement. It now changes the return rail's tooth reach in exported geometry. All geometry tests and browser export checks passed again after the correction. An auxiliary browser run interrupted by live source editing was rerun cleanly and passed all portable restoration checks.

## Publication

Root monorepo `npm run deploy` returned Published (130 apps). Initial public request returned a transient 404 while GitHub Pages propagated; the next HTTP request returned 200. Public browser/download verification is recorded in `public-validation.json`.

## Not performed / not claimed

No physical print, TPU force, retention, peel-force, wear, fatigue or cycle tests. No elastic FEM or deformed release-path simulation. The engaged pose is collision-free and has intentional undercuts; snap-through and peeling require flexible TPU. Fine Stitch is the full-size calibration starting design, not a universally proven fit. Only the explicitly documented convex flat-bottom STL subset is accepted, with no automatic repair claim.

Evidence: `geometry-validation.json`, `browser-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `root-deploy-validation.json` and screenshots.
