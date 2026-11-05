# Validation — Viviani & Sum / 20261106-3

## Passed before publication

- `npm run predeploy`: production build succeeds, local worker/WASM/fonts bundled under the correct base path. Initial scaffold-edit syntax error was corrected. Engraved-dash positions were rounded to 1e-6 mm after exact Node/Chromium regeneration caught cross-engine trig noise; final downloaded and portable-regenerated mesh fingerprints agree.
- `npm test`: **35 cases**: defaults, all three presets, all outlines, every endpoint, combined minima/maxima, image-derived and imported-STL-derived default/min/max. Independent binary STL checks cover each card/part and translated clean plate: finite/nondegenerate triangles, normals/winding, exact dimensions, welded edges exactly two/opposite, positive volume for every component.
- Mechanical/assembly checks: **one connected card, five clean parts, twenty real runners**. Simulated snips release exactly carrier + five undamaged parts with no runner fragments. No flat-layout overlap; sampled upper slices stay within bed footprint. Blind floors and whole pockets are checked in both boards and card. Both actual assemblies and vertical insertion/removal are collision-free. Independent cross-product side distances, perpendicular feet and measured exported bar dimensions verify `sum(bar lengths)+12 = altitude`.
- `browser-test.cjs`: **28 actual STL downloads** and **10 malformed/unsupported file rejection fixtures**. PNG/JPEG file pickers, threshold/depth/crop/grayscale/scale variations; ASCII/binary STL unit confirmation, scale, rotation, placement/depth, reset/remove/replacement. Every checked download matches the visible mesh signature and Node-regenerated saved JSON, and passes mesh/assembly checks. Empty image, invalid dimensions/transforms, protected-zone overflow and stale exports are blocked with recovery. Phone file-picker exports, touch orbit and pinch verified; zero page errors/remote service requests.
- `feature-test.cjs`: **16 generated model states** independently rechecked. All presets and outlines, text, SVG ring, searchable icons, background polarity, undo/redo, named local saves after reload, portable image/STL JSON round trips, per-part downloads and Everything ZIP containing six valid STLs plus assembly map/JSON/instructions. Assembled/exploded/Compare sum/card/clean/isolated views; saved theme, geometry-neutral preview colour, drag/drop, Y-up STL, keyboard focus/collapse and invalid/latest-edit gating.
- `mobile-test.cjs`: 320/390 px all tabs and expanded instructions, no document/layout viewport overflow, preview before controls, reachable exports/JSON, reduced motion; desktop 372 px left rail/right viewer.
- `hole-test.cjs`: actual final SVG ring band is engraved while its central hole retains backing.
- `resilience-test.cjs`: production worker script abort disables export; reload recovers. All six icon choices produce distinct real meshes.
- `portable-errors-test.cjs`: missing image payload, invalid transform, wrong app and bad dimensions reject and reset recovers.
- `stale-import-test.cjs`: delayed older image normalization cannot overwrite newer source.
- `resize-cleanup-test.cjs`: forced late ResizeObserver callbacks after STL-source preview replacement do not cause page errors.
- Reference parsed and sectioned afresh; source/hash/dimensions/components and measurements are recorded. Rendered sections visually inspected; source anomalies disclosed. No raw source mesh redistributed.
- `gallery-test.cjs`: every inline script compiled with `new Function`; **474 entries**, new entry exactly once/area stl/correct folder/newest first; all **473 prior entries unchanged**, STL category first.
- ROOT `npm run predeploy`: **474 built/copied, 0 failed, 0 skipped**. Every gallery app entrypoint exists, root index matches, and new app deployment files equal dist.
- Combined production: gallery browser renders 474 entries and new link loads the worker; the full real-browser import/download/error/mobile suite also passes against root `deploy/` at `/daily-app2/20261106-3/`.

Evidence: generated JSON reports, test scripts/logs and screenshots beside this file. Rejected oloid-candidate output is not used as evidence for this final kit.

## Not performed

No physical print, printer/material fit calibration, handling/durability or dimensional-accuracy test. No dynamics simulation, snap retention, hardware, glue or measurement precision claimed. Bars are gravity seated. Printed bars omit 4 mm each at the common point; the **12 mm correction is required**, shown in UI, engravings and instructions.

Publication and public smoke results are recorded separately in the deployment/public reports once completed.

## Publication verified

ROOT `npm run deploy` completed with `Published`. GitHub Pages deployment run **42082578269** finished successfully for gh-pages commit `a37df90c4e76c2ec6b4aebbdc56a0da6b3b0b425` (see `pages-deployment-validation.json`). Initial public 404s occurred while Pages was still deploying; public checks were retried after successful completion.

`public-smoke.cjs` passed on https://xianghui.github.io/daily-app2/20261106-3/: exact current production script, worker/WASM, default and real PNG/JPEG/ASCII/binary STL file-picker imports, distinct valid downloads matching visible fingerprints, zero page errors. Public gallery browser test passed: all **474** entries, newest link working, prior **473** retained. Public JSON reports and screenshots are included. Physical print testing remains unperformed.
