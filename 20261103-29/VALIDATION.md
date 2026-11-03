# Validation — Residue & Scatter

Computational/browser checks performed for this app. **No physical printing, socket fit, adhesive strength, sound scattering, diffusion/absorption or room-acoustic test was performed.**

## Reproduce

```sh
npm test
node import-extremes.mjs
npm run predeploy
python3 serve.py --port 5829
# separate terminal, same app directory:
node browser-test.cjs
node studio-test.cjs
node presentation-test.cjs
node stale-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node isolated-test.cjs
node gallery-check.cjs
node gallery-browser.cjs
```

For combined staging: `python3 serve.py --staged --port 5830`, then `TEST_BASE=http://127.0.0.1:5830 TEST_REPORT=staged-browser-validation.json node browser-test.cjs` and the presentation/gallery tests with that TEST_BASE. `public-smoke.cjs` verifies the published Pages worker/WASM and actual built-in/PNG/STL downloads.

## Mesh and assembly

- **34 geometry cases**: three presets, each of ten scalar endpoints, simultaneous minima/maxima, all three cheek silhouettes, two source STL types with two transformations, and threshold/grayscale images.
- Independent binary-STL byte-count, finite coordinates, nondegenerate faces, normalized stored normals, consistent outward winding, welded edge incidence exactly two with opposite directions, positive volume per connected component and millimeter bounding dimensions. Weld tolerance 1e−5 mm. Every clean part, connected card, and translated clean plate receives these checks. No dropped-face repairs.
- **13 separate clean solids**; connected-card component count 1; real **52 runner cuts** yield 14 components: carrier plus all 13 uninjured parts. Card envelope and sampled bed footprint verified; no unintended flat-layout overlap.
- **78 assembled solid pairs**, no collisions; **34 tongue/socket centers** align (17 per cheek); exact residue depths `[0,1,4,4,1] × unit +3`; .2-mm floor side gaps; ≥1-mm backing and complete protected apron below sockets.
- Rear cheek tested at seven straight approach offsets; all eleven interior parts independently approach the front cheek at five offsets without collision. No moving joints, retention force or acoustic simulation is claimed. Straight tongues require adhesive.
- Image/STL-derived simultaneous minima/maxima receive the same mesh and assembly checks. Probe volumes confirm a bright center hole remains solid, dark annular pixels actually engrave, and continuous backing remains below.

Reports: `geometry-validation.json`, `import-extremes-validation.json`. Actual reference sections and measured interfaces: `reference-measurements.json`, `reference-analysis.json`, `evidence/reference-sections.png`.

## Actual browser actions

- File-picker PNG/JPEG, simple SVG and ASCII/binary STL; actual downloaded STL bytes independently parsed and compared to exact displayed mesh signature and a Node regeneration from saved JSON.
- Changed image pixels, threshold, depth, crop, grayscale and scale alter export. STL scale, rotation, placement and engraving depth alter export; reset restores byte signatures. Explicit mm checkbox gates integration. Z/Y/−Z orientations independently checked.
- Recoverable rejections: truncated/open/nonmanifold/concave/too-complex/oversized/bad-dimension STL; fake/oversized-pixel/empty image; malformed SVG; invalid transforms and unsafe artwork placement. All invalid states disable export.
- Real presets/silhouettes, text, six searchable SVG icons and actual SVG ring affect exported geometry. Drag/drop works. Undo/redo, named-design reload, image and mesh JSON round trips, and missing-payload rejection checked.
- All **13 isolated views and per-part downloads** exercised. Actual ZIP decompressed; all **14 contained STLs** independently checked and numbered instructions/design JSON verified. Assembled/exploded/card/de-tabbed views differ; front cheek ghost affects real view alpha.
- Desktop **374 px left rail / right viewer**. At **320/390 px**, preview is first, all tabs and expanded instructions avoid horizontal overflow, exports/JSON remain reachable. CDP touch orbit and pinch visibly change canvas. Focus, tactile selected states, collapsible sections, reduced-motion mode, saved dark theme checked.
- Worker abort/reload tested; rapid parameter/image edits immediately block stale exports and newest result matches exact Node geometry. No runtime errors or remote asset/file requests in the local production import tests.

Reports: `browser-validation.json`, `studio-validation.json`, `presentation-validation.json`, `stale-validation.json`, `orientation-validation.json`, `icons-drop-validation.json`, `isolated-validation.json`. Screenshots under `evidence/` plus desktop/mobile images. Repeated import/download preflight runs against the **combined staged production tree**, report `staged-browser-validation.json`.

## Gallery and deployment

Gallery inline scripts compiled with `new Function`; missing/empty scripts cause failure. **421 previous entries** preserved unchanged, new folder exactly once with `area:"stl"`, STL category remains first, correct link/search rendering without runtime errors. Root predeploy staged **422 apps, zero failures/skips**. Root index and all 29 new-app production files are byte-identical to their staged equivalents. See gallery and staged reports. Root deployment is used; not an individual-app publication.
