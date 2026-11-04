# Computational validation — Impulse & Five

No physical print, impact-transfer, thread-knot strength or stability test has been performed.

- Actual public reference downloaded, SHA-256/units/dimensions/components recorded; three measured sections rendered and visually inspected. Source license checked against upstream GitHub LICENSE (identical SHA-256).
- `npm run predeploy`: passed, locally bundled production worker/WASM/fonts. No external runtime generation services.
- `npm test`: 75 successful geometry/assembly cases; defaults, three presets, shapes, per-control limits, joint limits, imports and transformed imports. All separately exported solids and float32 plate checked for manifold edges, finite/nondegenerate faces, normals, per-component positive volume and mm bounds.
- Geometry-specific checks: connected carrier; 32 cuts leave carrier + eight intact parts; disjoint flat layout; valid envelope; supported bed footprint; four clear sockets and insertion paths; 15 thread eyes clear in card; equal-volume bobs; correct tangent/trial gaps; six outer-bob swing positions clear; protected engraving backing.
- `extra-validation.mjs`: both import kinds across all three presets; Boolean probes prove bright central image hole keeps material while dark ring cuts actual final solid.
- `browser-test.cjs`: real production PNG/JPEG/ASCII/binary file pickers and downloaded STLs. Source pixel content/threshold/depth/crop/scale/rotation/placement change exported geometry; preview signature equals downloaded bytes and Node-regenerated portable state. Replace/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive inputs, empty silhouettes, invalid dimensions/transforms and recovery checked. Real per-part downloads parsed. 320/390 px checks, touch orbit/pinch and phone image/STL downloads passed. No runtime errors or external file-upload requests.
- `studio-test.cjs`: actual preset downloads, text/icon/SVG geometry, portable image/mesh round trips, missing payload rejection, local named save/reload, undo/redo, every ZIP mesh parsed, layouts, dark persistence, keyboard focus, collapsible sections, reduced motion and production worker abort/reload recovery passed.
- `personalization-test.cjs`: all six built-in icons downloaded as actual changed meshes; independently parsed and assembly checked.
- `advanced-test.cjs`: Z/Y/−Z source orientation, source preview, background conversion, rapid stale edits, impossible card packing, all isolated parts, distinct view screenshots, preview-only swing and STL color distinction passed.
- `mobile-layout.cjs`: no document/layout viewport overflow for every tab and expanded instructions at 320/390 px; preview first, actual JSON save and reachable STL controls.
- `gallery-test.cjs`: every inline script compiled with `new Function`; new entry exactly once, STL category first, all 441 prior entries unchanged; all 442 cards and search rendered without runtime errors.
- Root `npm run predeploy`: **442 built, 0 failed, 0 skipped**; every gallery app route exists in `deploy/`. Root index matches and all 20 new production files byte-match the browser-tested app `dist/`.
- Root `npm run deploy`: **Published**. Per-app deploy was not run. The combined site is published from root `deploy/` as required.

Reproducible scripts, JSON reports and screenshots are committed beside this file. Initial .01 mm simplification produced microscopic section bevels around portal eyes; .001 mm tolerance resolved them, and all final-mesh/support checks passed. One early browser test crossed a production rebuild and detected a changed signature; rerunning against the stable final build passed. No unsupported source was silently repaired or replaced with a hull.

Public verification: GitHub Pages build completed successfully; the public app URL returned HTTP 200. A real public-browser session loaded the bundled production WASM worker, generated/downloaded a card STL, matched its preview signature and independently validated its mesh. The public gallery rendered all 442 cards with the new entry first and no runtime errors. See `publication-validation.json` and `public-test.cjs`.
