# Verification — 2026-11-01

- `npm run predeploy`: passed production build at `/daily-app2/20261101-12/`; local worker/WASM loads.
- `npm test`: **43 mesh/assembly cases passed**, **40 invalid parameter/input combinations rejected**. Every card and six separate parts are checked as actual binary float32 STLs. Finite coordinates, nondegenerate faces, outward unit normals, positive component volumes, 1e-5 mm welded edge incidence/opposite winding and expected millimeter bounds.
- Actual 24-runner cuts yield **seven connected components** (six parts and carrier). Six printed parts are mutually nonintersecting in plate and assembled poses. Twenty-five sampled roof and wall insertion positions; sixteen actual mating-tongue probes; cavity and aperture probes; bed-supported upper sections; nominal acoustic formula independently recomputed.
- `browser-test.cjs`: actual production-browser PNG/JPEG and ASCII/binary STL picker imports, actual downloaded mesh differences for threshold/depth/pixels/scale/rotation/placement, independent per-output mesh/assembly validation, exact displayed signature and JSON regeneration, replace/remove/reset, parameter extrema, truncated/open/nonmanifold/concave/excessive/bad-dimension inputs, empty silhouettes, recoverable errors and stale export blocking. Actual touch orbit and pinch; actual phone image/STL downloads.
- `studio-test.cjs`: three real presets, all silhouettes, text/icon/SVG geometry, image and STL portable JSON, named browser save/reload, missing-payload blocking, undo/redo, downloaded ZIP with every STL independently parsed, desktop 374 px panel, collapsible sections/focus, persisted dark theme, failed production worker and reload recovery.
- `mobile-regression.cjs`: actual configured **320/390 px** viewports remain unchanged across all tabs, expanded assembly instructions and actual JSON download. Preview precedes controls; exports reachable.
- `orientation-test.cjs`: actual Z/Y/−Z source uploads and saved final geometry/assembly verified.
- `rapid-test.cjs`: changed spacing changes STL, rapid invalid edit cannot enable late worker result, exact reset, background polarity changes geometry, every dedicated per-part button downloads the correct checked mesh.
- `icons-drop-test.cjs`: all six icons validated as actual solids; actual desktop file drop.
- `visual-test.cjs`: all views show different actual renderings; roof lift and see-through material change preview; control IDs unique with image attached. Desktop screenshots visually inspected.
- Gallery: all inline scripts compile with `new Function`; exactly one newest `stl` entry with correct path; **343 entries**, previous **342 preserved unchanged**. Browser rendering and search verified.
- Root `npm run predeploy`: **343 built, 0 failed, 0 skipped**, with root gallery and all app directories under `deploy/`. Combined production browser import/export checks repeated against the actual deploy tree.

Issues found and fixed before publication: duplicate chamber/image depth control ID (renamed chamberDepth); centered packing initially cancelled spacing edits (parts now use explicit minimum edge spacing). Tests rerun after fixes.

Reference STL actually parsed and source/license/hash/dimensions/components recorded; actual mesh cross-sections inspected. See reference analysis and measurement JSON. Final solids are original CSG reconstruction; no raw private/third-party reference mesh bundled or silently hulled/repaired.

**Not physical testing:** no printed specimen, actual assembly, adhesive bond, airtightness, acoustic response/pitch, durability or force measurement. Adhesive and tape required; predicted resonance is approximate, not measured or guaranteed. Computational watertightness alone does not prove resonance or printer fit.

## Publication

Root `npm run deploy` published the complete `deploy/` tree. Initial new-URL 404s were GitHub Pages propagation, not an app error; the Pages build completed successfully. `live-test.cjs` then passed against the public URL: actual default/PNG/binary-STL downloads, worker/WASM loading, independent mesh/assembly checks, preview signatures, JSON regeneration and the 343-entry gallery. See `live-validation.json`. A final assets-only deployment includes font/library/reference redistribution notices; generation code and checked mesh signatures are unchanged.
