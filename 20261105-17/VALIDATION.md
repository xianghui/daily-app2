# Tau & Array — validation record

## Computational geometry, not physical testing

`npm test`: **43** cases passed: default, three presets, paired minimum/maximum corners, each individual parameter bound, all three end silhouettes, ASCII/binary STL fixtures with transforms, threshold/grayscale image solids, and image/STL-derived parameter corners.

For every case:

- Independently parse actual float32 binary STL for the connected card, each of seven clean parts, and their translated loose plate.
- Require exact byte length, nonempty finite triangles, nondegenerate faces, normalized stored normals agreeing with winding, two opposite-directed incident faces per welded edge (1e−5 mm welding), positive signed volume separately for each connected component, expected mm bounds, and Z=0 bed alignment.
- Verify one connected carrier, 28 real runners, cutting them releases exactly **carrier + seven parts**, no runner fragments and no part damage.
- Intersect parts to require nonoverlapping clean plate and assembled solids; test 105 bar vertical-insertion positions and all ten cross-lap apertures in clean parts AND the connected card.
- Check supported upper-layer XY footprint against the bed footprint, card X/Y/Z envelope, shortest-bar end webs ≥2.4 mm, .15 mm vertical relief, and exact geometric-progression bar lengths/stations.

See `geometry-validation.json` and reproducible `validate.mjs`. Kernel tolerances/simplification .001 mm are below printable feature size, followed by independent serialized-mesh validation; degenerate faces are never silently dropped to claim a pass.

## Actual production-browser tests

`browser-test.cjs`, using the real Vite production base path, passed:

- Real file picker PNG/JPEG and ASCII/binary STL; source-unit confirmation gates mesh integration.
- Actual downloaded STL is independently checked, its signature equals the UI's exact current mesh, and portable JSON regenerates the same bytes in Node.
- Compare default against imported pixel contents, threshold, depth, grayscale, crop, scale, STL scale/rotation/placement; reset restores original bytes.
- Verify all final parts and assembly constraints for each imported result, not only defaults.
- Wrong content, truncated STL, open/nonmanifold/concave meshes, too many triangles/pixels, excessive size/dimensions, empty images and invalid/unsafe transforms block exports and recover via reset/removal.
- 320/390 px touch phone imports/downloads, actual CDP touch orbit and pinch with changed canvas screenshots, reachable exports and no horizontal overflow. No app runtime errors or external app requests.

`feature-test.cjs`: all real presets and end profiles, undo/redo, text, SVG with holes, inverted JPEG, portable image and mesh round trips, named design storage across reload, all eight ZIP STLs parsed, per-part downloads, assembled/exploded/card/loose/isolated views, preview-only colour, saved dark theme, drag/drop, Y-up STL, collapsible sections, keyboard focus, latest worker result and invalid-state export blocking.

`hole-test.cjs`: independent final-solid probes confirm the ring's white centre keeps backing and its dark band cuts actual geometry.

`resilience-test.cjs`: deliberately abort production worker loading; export remains disabled; reload restores it. All six original bundled icons change geometry and have distinct signatures.

`portable-errors-test.cjs`: missing image payload, bad transforms, wrong app and invalid dimensions reject, disable export and reset cleanly.

`stale-import-test.cjs`: intentionally delay first image normalization 1,200 ms; later selected image cannot be overwritten.

`mobile-test.cjs`: all five tabs at 320/390 px, instructions expanded, no widened layout viewport, preview-first stacking, exports and real JSON-save reachable, reduced-motion honored, desktop 374 px left control/right viewer, preview bar lift changes rendered positioning without changing printable mesh.

## Reference evidence

The actual newly downloaded source STL was parsed before final design selection. Hash, units, dimensions, connected-component anomalies, section loops, measured sheet/receivers and redesigned fits are recorded in `reference-analysis.json` and `evidence/reference-sections.png`. CC BY 4.0 license and original author attribution included. Raw reference meshes are not redistributed. Local reference trees and old `daily_app` were not modified.

## Combined site

App `npm run predeploy` passed. Gallery inline scripts compiled with `new Function`, new entry exactly once, area `stl`, correct folder and newest first; **all 463 prior entries unchanged**. Root predeploy produced **464 app folders, 0 failures, 0 skips** and an exact root index copy. Combined-production browser checks and deployment reports accompany the app.

## Not performed

No physical print, fit, strength, stability, adhesion, durability, material-force or RF tests. This is a gravity-seated mathematical sculpture/assembly, not a captive fidget or functioning antenna. The .10–.30 mm allowance requires calibration for the actual printer/material. Lift-out joints intentionally permit removal; optional adhesive can make a permanent display.

## Publication verified

Root `npm run deploy` published the combined `deploy/` tree successfully. After GitHub Pages propagation (the first cached gallery still showed 463 entries), public checks passed: gallery **464** entries, new link loads valid geometry, HTTP **200**, production worker/WASM, real local PNG/JPEG/ASCII/binary file-picker imports and downloaded binary STLs matching exact UI geometry signatures with closed-manifold meshes. See `public-gallery-validation.json`, `public-browser-validation.json`, and `public-validation.png`.

Public URL: https://xianghui.github.io/daily-app2/20261105-17/
