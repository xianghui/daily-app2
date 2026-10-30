# Executed validation — 2026-10-30

## Reference

Fresh public STL download, SHA-256, binary parsing, triangle/component/bounds analysis and Z=.10/.50/1.59 mesh sections. Local keycap/fabric candidates were parsed and rejected for sheet-kit use. All reference trees read-only. See reference-measurements.json and reference-analysis.json; raw mesh excluded.

## Computational model checks

- `npm test`: 32 built-in configurations and 8 image/STL configurations.
- `node import-extremes.mjs`: 6 additional image/ASCII/binary extreme configurations.
- `node hole-check.mjs`: actual Boolean solid probes confirm unengraved interior image hole.
- Independent actual binary STL checks: exact byte length, finite coordinates, nondegenerate faces, unit outward normals, 1e-5 mm welded edges with exactly two opposite faces, component-wise positive volume, expected mm dimensions and bed alignment.
- Every connected card and each of its three de-tabbed parts tested separately.
- Each configuration: one connected card; 12 safe cuts release 3 parts plus carrier; flat/assembled parts nonintersecting; one source-fit socket gauge; shoulder stop; 25 blade insertion poses; 225 ring descent poses, with target tilts −20/0/+20 degrees leveling near the paddle and X offsets −1/0/+1 mm; both actual cord eyes open; minimum backing/eye walls; 32 sampled column-support checks.

## Production browser checks

- `node browser-test.cjs`: PNG/JPEG, ASCII/binary STL file-picker imports; actual STL downloads checked and compared with preview hash and independent JSON regeneration; image threshold/depth/crop/pixels and STL scale/rotation/placement change geometry; replace/remove/reset; both coordinated extrema; each part downloaded; unsupported/invalid files, empty images, excessive pixels/triangles/dimensions and unsafe transforms block exports recoverably; 320/390 px overflow/reachable exports, real touch orbit and pinch.
- `node studio-test.cjs`: all three presets, capsule/octagon/tapered silhouettes, text/searchable icon/SVG, portable image/mesh JSON and local design reload, missing-image reattachment error, undo/redo, every view, STL ZIP extraction and validation, saved theme, keyboard focus, collapsed section, reduced-motion context, desktop 374 px left rail, phone preview-first, worker abort/recovery.
- `node axis-test.cjs`: Y-up/negative-Z source reorientation exports identical expected geometry; axis change clears attachment.
- `node preview-test.cjs`: screenshots of assembled/card/exploded and phone layout; final screenshots inspected.
- App predeploy passed. Root predeploy: 290 built/copied, 0 failed, 0 skipped.
- Root gallery inline scripts compiled with new Function; one new STL entry, newest first; all 289 earlier entries preserved; 47 production app files compared byte-for-byte to combined output.
- Combined gallery and new app rendered with no runtime errors and locally loaded worker/WASM.

Machine-readable JSON reports and synthetic-only screenshots are stored alongside the app. Live publication result is recorded separately in publication-validation.json after root deployment.

## Not performed

No physical print, real catching motion, fatigue, knot/adhesive strength or material calibration test. The cord route and suspended ring height are estimated preview-only. These checks establish computational mesh integrity and supported assembly/pass-through paths, not physical product certification.
