# Axis & Filter — computational validation, 2026-10-31

The final product is a crossed-polarizer film-window kit. An initial scrape interaction was rejected after a late duplicate-description audit found Ridge Whisper; final geometry, screenshots and reports were regenerated. No scrape mechanism is present in the final app.

## Geometry and fit

`npm run predeploy`: production build succeeds. Nonfatal Vite bundle-size/Manifold Node-branch externalization warnings; production browser worker/WASM tests are the loading gate.

`npm test`: **39 built-in cases**, **18 image/STL-derived cases**, **28 parameter-bound rejections**. Covers all presets, minimum/maximum settings, each field endpoint, three profiles crossed with minimum/maximum apertures. Final card and all three clean-part STLs checked independently for exact binary count, finite float32 vertices/normals, nondegenerate faces, winding-consistent unit normals, two opposite incident faces per welded edge (1e−5 mm), positive volume per connected component and expected millimeter bounds. Default envelope **210 × 150 × 3.8 mm**, one connected card, three clean parts.

Kernel intersection checks in every case:

- All assembled part pairs free of unintended intersections; tower vertical insertion at 17 sample heights.
- Two 6 mm-wide mounting tongues, source-derived sheet/socket clearance, shoulder stops and flush undersides.
- Complete analyzer rotates by hand in front of deck/tower through 180° at 17 positions without collisions. It is freely handheld, not a captive joint. Preview hand positions are illustrative.
- Two external .25 mm film discs fit actual .4 mm-deep pockets; independent total diametric allowance .2–.5 mm; annular support shelves remain ≥1.2 mm thick. Pocket insertion and unobstructed cylindrical sight apertures are probed in both frames. Tape retention is disclosed, not modeled as a snap fit.
- Twelve snip cutters do not touch clean parts; cutting releases exactly three parts plus carrier. Card envelope, no clean-part overlaps, bed footprint support sampled at eight heights per solid. Deck engraving stays clear of both mounting interfaces.

`node hole-check.mjs`: actual Boolean intersection probes show the bright ring center remains unengraved, dark ring is recessed and continuous backing remains.

## Browser / production checks

`node browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file-picker imports; binary STL downloads independently parsed and exact bytes matched to visible current fingerprint plus Node regeneration from saved JSON. Changed pixel content, threshold, relief depth, crop, scale, rotation and placement measurably change final exported solids. Default/remove/reset reproduces exact baseline. Every imported case also passes final-part mesh and assembly/film checks. Invalid/truncated/open/nonmanifold/concave/excessive/mismatched files, pixel limits, bad dimensions, empty silhouette and transforms disable export and recover.

`node studio-test.cjs`: all three presets/profiles, text/icon/SVG geometry, portable bounded image/mesh JSON, local named designs after reload, missing-payload rejection, undo/redo, actual ZIP decompression and mesh checks of all four STLs, all views, dark theme persistence, visible focus, collapsible controls, reduced motion, 374 px desktop left panel, phone preview-first ordering, worker-script abort failure and reload recovery.

`node personalization-test.cjs`: six icons, text and SVG outputs regenerated and pass full mesh/fit checks. `node stale-test.cjs`: immediate stale-export gating under rapid parameter/image edits and invalid transforms; latest valid result matches Node. `node optical-test.cjs`: actual analyzer mesh rotates with preview slider while printable geometry remains unchanged; film-pocket allowance modifies real exported solids; fit and apertures rechecked.

Phone widths **320 and 390 px**: no horizontal overflow; real touch orbit and pinch screenshot changes, PNG/STL picker imports and downloads, reachable export controls. Desktop and phone screenshots inspected. All processing stays local; isolated browser tests observe no remote runtime dependency requests.

`node axis-test.cjs`: actual Y-up and negative-Z mesh fixtures reorient and engrave identically to Z-up; changing up-axis clears source and explicitly requests reattachment.

Root gallery checks: compile every inline script via `new Function`; exactly one newest `area:"stl"` entry, all **318 earlier entries** unchanged, STL category/focus tagline retained. Combined root build contains index plus all **319 app routes**, zero failed/skipped. Combined gallery/browser tests load correct app/worker/WASM without errors; every direct part button downloads exact final part bytes. Phone touch checks rerun against combined production output.

Reproducible scripts, synthetic fixtures, JSON reports and screenshots are included. `public-test.cjs` checks live GitHub Pages app, worker/WASM, exact default STL bytes and gallery route after propagation. deployment-validation.json records publication state.

## Not performed

No physical printing, physical assembly, adhesive strength, film cutting/axis alignment, optical transmission/contrast measurement or fatigue testing. No protective-eyewear, universal-fit, calibration, child-safety or physical-validation claim. Use purchased linear-polarizing film, tape and adhesive; never view sun/laser/intense sources. Optical outcome depends on film quality/alignment/illumination. Hand-angle preview does not simulate brightness or promise retention. Unsupported STL subsets are rejected, never repaired/hulled. Image conversion is bounded sampled 2D engraving, not exact outline tracing or full 3D reconstruction. STL stores no colors/units.
