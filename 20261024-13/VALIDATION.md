# Curl Current validation

Completed 2026-10-24. These are computational/browser checks, **not a physical print test**.

- `npm run predeploy`: production build passed; local worker/WASM and all runtime libraries bundled.
- `npm test`: 78 parameter cases (64 range corners, defaults, presets, eight variations) and 24 image/STL cases passed final binary STL validation: finite coordinates, nondegenerate faces, outward consistent winding, exactly two incident faces per welded edge, positive per-component volume, one connected solid and independent millimeter dimensions.
- Every generated model also runs final-solid and dimensional/mechanism preflight in the worker before export is enabled.
- Mechanism checks: three serial webs; bounded surface-strain estimate at 15° per stage; tunnel roof/floor, inscribed-circle cord clearance, cord moment arm and free lead above the palm; conservative rigid-corner clearance. Seven representative actual rigid-stage bend configurations checked with CSG intersection, including ±15° on every hinge. Actual through-tunnel probes are clear. Import CSG differences are restricted to the palm well.
- Browser tests on the **root deploy production build**: real file-picker PNG/JPEG/ASCII/binary imports and actual STL downloads. Source content, threshold, depth, fit/crop, scale, height, rotation and placement change output vs defaults. Download fingerprint matches exact preview state and the independently regenerated saved state; mesh and mechanism checks rerun on every tested full download.
- Invalid extensions, mismatched content, truncated/open/nonmanifold/concave STL, too many triangles, excessive byte/pixel/dimension limits, empty silhouette, invalid sizes and unsafe transformations rejected with recoverable errors/export disabled.
- Replace/remove/reset, all three presets, random variations, undo/redo, four portable import JSON round trips, drag/drop, single-body STL and ZIP contents passed.
- Mobile 320/390 px: no horizontal clipping, real touch orbit and pinch zoom, image/STL file selection and exports; bottom controls collapse/reopen, all tabs accessible, export in viewport.
- Local production requests never contacted external services; no browser runtime errors.
- Root gallery: all inline scripts compiled with `new Function`; all 116 prior entries preserved; new entry exactly once, newest, area `stl`; STL Generators first; 117 cards render and search resets correctly.
- Root predeploy: 117 apps copied, zero failures/skips; every gallery folder exists under deploy; root index byte-for-byte matches.

Evidence: `geometry-validation.json`, `production-browser-validation.json`, `extra-validation.json`, `mobile-sheet-validation.json`, `gallery-validation.json`, `root-deploy-validation.json`, desktop/mobile screenshots. `public-validation.json` records post-publish checks.

The palm cord entrance initially failed a tunnel probe; its CSG cut was corrected and the full geometry suite rerun. A later lead-in review raised minimum segment height to 5.2 mm to guarantee 0.1 mm nominal clearance above the palm for 1 mm cord; all final production checks reran afterward. One browser-test bounds assumption was corrected to compare transformed imports against their **actual saved state**, not the default body height.

No flexure FEA, insertion/return force, cord-friction, wear/fatigue, physical material strain or printed-part test was performed. Rigid collision sampling does not simulate web elasticity. There is no hard travel stop. Start with the Soft Start calibration specimen and inspect the sliced layers/tunnels before use.
