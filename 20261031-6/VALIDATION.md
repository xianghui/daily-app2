# Drop & Grade validation

## Completed computational checks

- `npm run predeploy`: production React/Vite worker/WASM build passed. Expected dependency externalization/chunk-size advisory warnings are not runtime failures.
- `npm test`:36 built-in cases (three presets, combined min/max, all profiles, each parameter endpoint) +8 image/STL import cases. Every card/clean-part binary STL independently checked for finite nondegenerate triangles, unit normals consistent with winding, positive volume per component, welded1e−5mm closed opposite-directed edge incidence, expected dimensions/Z=0. No physical test claimed.
- Every generated model is checked inside the worker as well as in independent Node tests. Validated8 separately printable parts, one connected card,32 runners, six tongue/socket/shoulder seats,28 disjoint assembled pairs, horizontal side-insertion poses, three accepted token/gauge passage combinations across full shelf thickness, three actual catch overlaps, open-front retrieval trajectories, print-layout disjointness, safe snips producing8 parts+carrier, and sampled upper-layer support footprints.
- `node import-extremes.mjs`: image and STL integrations at both combined extrema passed identical complete mesh/mechanism/card checks.
- `node hole-check.mjs`: actual Boolean probes confirm unengraved bright center, engraved dark ring and continuous backing in image-derived solid.
- `node axis-test.cjs`: Y-up and −Z source reorientation preserve exact expected engraving/export; changing axis clears the asset for reattachment.
- `node browser-test.cjs`: real production-page file-picker PNG/JPEG/ASCII/binary STL import, source dimensions/mm confirmation, changed pixels/threshold/depth/crop/grayscale/scale/rotation/placement versus default export. Downloads parsed and independently regenerated from exact JSON state; preview byte fingerprints match. Replace/remove/reset, unit gate, bad dimensions, overlarge pixels/bytes/triangle counts, invalid/truncated/open/nonmanifold/concave sources, empty images and unsafe transforms rejected recoverably with export disabled. Every selected per-part STL downloaded/parsed.390px phone PNG/STL imports/downloads, touch orbit and pinch alter rendered canvas;320px no horizontal overflow and reachable exports. No app runtime errors or remote requests.
- `node studio-test.cjs`: all real presets/profile variations; text, searchable icons, SVG; exact portable image/STL JSON and local named-design reload; missing payload rejected; undo/redo; real ZIP with each member STL parsed; numbered assembly instructions; assembled/exploded/card/de-tabbed/isolated/ghost views; dark theme persistence, keyboard focus, collapsible sections, reduced motion,374px left panel and320px preview-first layout; worker script abort/export gate/reload recovery.
- `node stale-test.cjs`: three rapid valid parameter edits and three image threshold edits immediately disable stale export; newest result matches independently built bytes; invalid transform recovery passed.
- `node variation-test.cjs`: four UI-generated bounded variations pass full mesh/assembly/snipping checks.
- `node gallery-check.cjs`: root inline script compiled with `new Function`; exactly one newest STL entry,309 earlier entries preserved byte-for-byte as objects, STL Generators ordered first.
- ROOT `npm run predeploy`:310 built,0 failed,0 skipped. `node check-combined.cjs`: all310 folders present, root gallery exact and43 app files SHA-256 match current `dist`.
- Combined production browser checks and direct button checks are recorded in `combined-browser-validation.json`, `gallery-browser-validation.json`, `final-production-validation.json`. Live publication verification is recorded separately in `public-validation.json` after deployment.

## Corrections found during validation

1. Early card runner landing was adjacent to a functional tongue; an independent snip-damage intersection test caught it. Runner landings now use shelf sides at ±26% of depth, away from tongues. All parameter/image/STL tests rerun after correction.
2. A duplicate HTML input ID between shelf depth and image relief depth was caught by strict browser selectors. Shelf depth uses unique `shelfDepth`; all browser import/control tests rerun.
3. Adapted rapid-edit test initially used the previous mechanism's invalid pitch values. Replaced with valid16/22/19 mm and verified newest exact signature. This was a test adaptation, not relaxing supported model ranges.

## Not physically tested

No printed prototype, adhesive bond, physical assembly, drop/bounce/friction, sorting reliability, wear or dimensional-accuracy test. Accepted/caught class tests assume **flat, manually centered tokens**. Computational watertightness/clearances are not a dynamic simulation, print certification or precision calibration. Actual FDM fit depends on printer, filament, first-layer expansion and slicer. Three small loose tokens are choking hazards: adult demonstration only, away from children and pets. Fixed seats require adhesive; tokens are intentionally not captive.
