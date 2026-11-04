# Golomb & Span — validation record

All checks below were performed on this app, not inferred from the reference or a previous app. Reference meshes and original gallery were read-only. No physical prints, fit tests, strength/durability or measurement calibration were performed.

- `reference-analysis.py`: freshly parsed selected public STL and two local candidate meshes; SHA-256, dimensions, connected fragments and actual Z=.100/.215/1.590 cross-sections recorded. Source defects are disclosed; no raw reference mesh redistributed.
- `node validate.mjs`: **51 cases** across presets, parameter endpoints, joint extrema, silhouettes, imported ASCII/binary STL and threshold/grayscale image tools. Every final part/card/clean plate independently checked for float32 finite coordinates, nonzero area, normalized normals, opposite edge incidence after 1e-5 mm welding, positive per-component volume, Z=0 and expected dimensions.
- Assembly checks in every case: seven clean solids, one connected card, 28 cuts give carrier plus seven unharmed parts, no loose/assembled intersections, 21 assembled pairs, 30 sampled vertical assembly/release positions, real unblocked slots in both card and rail, sampled support-free footprints, protected backing and actual Golomb marker centres/15 unique differences.
- `node browser-test.cjs`: real production file-picker PNG/JPEG and ASCII/binary STL uploads and real binary downloads. Source pixels, threshold, depth, crop, image scale, STL scale/rotation/placement change exported signatures. Exact bytes match UI fingerprint and Node regeneration of saved browser JSON. Defaults, extremes and every separately exported part parsed; phone uploads/downloads, CDP touch orbit/pinch, invalid files, open/nonmanifold/concave meshes, bad dimensions, excessive pixels/triangles, empty silhouettes, reset/remove/replace and transform recovery pass.
- `node studio-test.cjs`: all three presets and profile choices, actual text/icon/SVG geometry, image/mesh portable JSON, missing asset failure, local named-design reload, undo/redo, parsed ZIP member meshes, all views, saved dark theme, keyboard focus, collapsibles, reduced-motion and aborted-worker recovery pass.
- `node interaction-test.cjs`: marker lift visibly changes preview but not printable signature; bounded variations and all five sample buttons work.
- `node stale-test.cjs`: immediate stale export gating during rapid parameter/image edits; newest result matches Node; invalid transform disables export and reset recovers.
- `node image-hole-test.mjs`: actual solid Boolean probes prove uncut backing inside synthetic and browser-imported SVG ring holes, while the dark ring is engraved.
- `node icons-drop-test.cjs`: six actual icon geometries pass independent mesh/assembly checks; real drag/drop PNG works.
- `node orientation-test.cjs`: Z/Y/-Z oriented source dimensions, unit confirmation and resulting solids verified.
- `node isolated-test.cjs`: seven isolated views rendered and actual per-part downloads checked.
- `node mobile-layout.cjs`: every editor tab and expanded guide fit the configured 320/390 px widths; JSON download after reading guide works; STL actions reachable. Saved desktop assembled/card and phone screenshots inspected.
- `node gallery-check.cjs`: every inline script compiled with `new Function`, nonempty scripts required; new `stl` entry exactly once, correct folder and category ordering; all earlier entries preserved.
- `GALLERY_URL=http://127.0.0.1:5874/daily-app2/ node gallery-browser.cjs`: actual gallery rendering, prior entry count, first category, link and search checked with zero runtime errors.
- App `npm run predeploy` passed; production WASM/worker loads were used for browser tests, not a dev-only server.

Machine-readable reports and reproducible scripts are beside this file. Assembly and mesh checks are computational evidence, not proof of physical printing, seating friction, accuracy or service life. The marker fit is explicitly removable gravity seating, never claimed captive or press-fit.

## Combined publication

Root `npm run predeploy` built/copied 437 apps with 0 failures and 0 skipped. All gallery folders exist under `deploy/`; the root index and every final new-app asset were byte-compared with their sources. The complete real import/download/mobile suite passed again against a server serving the combined `deploy/` tree (`combined-browser-validation.json`). Root `npm run deploy` completed with `Published`. An immediate live-gallery check initially saw the preceding 436-entry Pages version during propagation; live checks are retried after the new app becomes available.

Live retry passed: the public app loaded its bundled worker/WASM, imported PNG and binary STL through real file inputs, downloaded manifold STLs with changed signatures, and reported no runtime errors (`public-validation.json`). The propagated public gallery then rendered all 437 entries, with the new app first, the correct link/search and preserved prior entries (`gallery-browser-validation.json`). Physical tests remain unperformed.
