# Validation — Pull & Whirr / 20261028-24

## Completed computational checks

- `npm run predeploy`: successful React/Vite production build with bundled worker/WASM, fonts and dependencies. The Manifold Node fallback emits a browser-externalization build warning; browser worker/WASM loading is actually tested successfully.
- `npm test`: **20 built-in parameter/preset/extreme cases**, plus **35 imported-output cases** (ASCII STL, binary STL, threshold, grayscale and engraving, across presets and representative extremes). Every individual part and combined translated plate is inspected independently.
- Export checks: nonempty binary byte length/count, finite coordinates, nondegenerate faces, unit normals consistent with winding, 1e−5 mm welded undirected edges with exactly two opposite-directed incident triangles, adjacency-based positive volume per component, millimeter bounds and bed-flat Z=0. Exactly **three** plate components; one per separate part.
- Independent mechanical/assembly checks: safe bore-to-edge and between-bore walls, actual 1.2 mm cord clearance through both handle eyes and rotor bores, one connected eye/palm solid per handle, rigid-part separation across representative full-turn/separation inspection poses, nonintersecting print layout, and half-turn rotor symmetry. Imports alter only the nonrotating personal handle, never the rotor's geometry or balance.
- Reference: actual 20,396-triangle binary source parsed and hashed, original/transformed dimensions and component topology recorded, five actual mesh cross-sections inspected. Measured cord-eye radii/wall/thickness map to actual generator constants; flattened cross-section and new rotor mechanism are explicitly identified as redesigns.

## Production-base-path browser tests

All run against built `dist/` at `/daily-app2/20261028-24/`, not merely the dev server:

- `browser-test.cjs`: actual file-picker uploads and downloaded STL bytes for PNG/JPEG/ASCII/binary STL; changed image pixels, thresholds, depth, crop, relief, scale/rotation/placement affect exported meshes. Compare default/no-import output and remove/reset signatures. Saved JSON regenerates exact downloaded and preview fingerprints in Node; independent mesh/mechanism checks also run on these actual import outputs.
- Recoverable rejections include malformed SVG/image signatures, empty white silhouettes, truncated/open/nonmanifold/concave meshes, excessive bytes/pixels/triangles/dimensions, missing unit confirmation, invalid parameters and transforms. Invalid/currently-building exports stay disabled; no stale last-good export or hull substitution.
- `feature-test.cjs`: every preset, bounded variations and silhouettes; actual text, SVG ring, icon and engraved/grayscale/inverted-image geometry; undo/redo; portable asset JSON round trips; named save/reload; actual per-part STL and ZIP contents including plate; all views, saved dark theme, geometry-neutral preview colours, drag/drop, Y-up STL, collapsibles, focus, latest-worker-state and invalid-export gating.
- `hole-test.cjs`: actual solid probes verify the SVG ring center remains unraised/unengraved while its dark annulus adds/removes real material.
- `resilience-test.cjs`: abort production worker file, confirm failure blocks export, reload recovery; six bundled icons each have distinct generated geometry.
- `stale-import-test.cjs`: deliberately delayed earlier image normalization cannot overwrite a newer source.
- `portable-errors-test.cjs`: missing image payload, invalid transform, wrong app and bad dimensions are rejected and reset recovers.
- `named-import-test.cjs`: imported PNG and binary STL named designs restore exact geometry after reload.
- Phone **320 / 390 px**: no horizontal overflow, preview/export before controls, file imports and actual STL downloads; CDP touch orbit and pinch change rendered canvas. Desktop has exactly **374 px** left rail and right viewer. Reduced-motion styles, focus, selected states and collapsibles checked. Screenshots were visually inspected.
- No unexpected page errors or external network requests in the browser suite.

## Combined deployment checks

- Root gallery inline scripts compiled via `new Function` (nonzero failure on missing/empty scripts or syntax errors).
- **234 previous entries preserved**; new entry exactly once, correct folder, `area: stl`, newest first; “STL Generators” first category; search/rendering retains all **235** cards without runtime errors.
- Root `npm run predeploy`: **235 built/staged, zero failed, zero skipped**. Root `deploy/index.html` matches gallery; every indexed app's deploy index exists; every file of the new app matches its local production output.
- Combined-root browser smoke uses actual production worker/WASM, PNG/binary STL file imports, downloaded plate checks and preview/export fingerprints. See `root-browser-validation.json`.
- `production-manifest.json` records final local asset SHA-256 hashes. Publication and main push are performed through the root monorepo flow; public checks are reported separately when completed.

## Evidence limits

These are **computational geometry, browser and deployment tests**, not physical print tests. Flexible cord motion, knot security, twist dynamics, pull forces, rotor speed, friction, eye fatigue and cord wear are not simulated or physically verified. Inspection poses/cord lines are illustrative and exports remain bed-flat. The known button-whirligig principle does not guarantee the performance of this unprinted reconstruction. No slicer verification, physical print, force/speed, endurance or safety certification is claimed.

## Public publication verified

Root `npm run deploy` completed with `Published`; GitHub Pages build reached `built`. Live browser verification at **https://xianghui.github.io/daily-app2/20261028-24/** passed default + actual local PNG/binary-STL imports and generated downloads, closed component checks and exact preview/export signatures. Public gallery shows all 235 cards, with Pull & Whirr first, working search and no runtime errors. See `public-validation.json` and `gallery-browser-validation.json`. Initial 404 responses occurred while Pages reported `building`; live verification was performed after its build completed.
