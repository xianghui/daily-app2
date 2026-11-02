# Sag & Sphere — completed computational checks

## Reference and builds

- Downloaded actual licensed White Cat kit STL, read source README/license, parsed binary triangles, SHA-256, dimensions, 27 edge-adjacent components and measured sheet/socket/runner planes. Visually inspected three newly generated cross-sections. Local clicker/fabric candidates were separately parsed and rejected as unsuitable kit references. See reference-analysis.json and evidence/.
- Individual `npm run predeploy` passed. Worker and WASM bundled locally under `/daily-app2/20261103-4/`.
- Root monorepo predeploy: **400 built, 0 failed, 0 skipped**. Root index and all400 app entrypoints present. All42 new-app output assets matched staging byte-for-byte.
- Gallery: every inline script compiled using `new Function`, new `stl` entry first/exactly once, **399 previous entries unchanged**. Browser renders400 entries, STL category first, search/restore without runtime errors.

## Geometry and assembly

- **39 variants**: all three presets, three silhouettes at combined minima/maxima, each numeric control's two endpoints, threshold/grayscale/hole images and ASCII/binary-derived geometry with transforms.
- Every connected card/part and loose plate independently parsed from binary STL: exact byte length, nonempty triangles, finite coordinates/normals, nondegenerate faces, normal/winding agreement, millimeter bounds, welded1e−5mm two-opposite-face edge incidence, component counts and positive volume per component.
- Five individual parts closed; one connected carrier card. No overlapping clean/assembled parts.
- Three underside foot insertion paths clear; shoulders seat below deck and tongues end flush with deck top. Contact lands share foot-drop datum.
- Probe passes central socket at **33 positions across −4…+4mm**, remains accessible and inserts from above without deck collision. Not a captive probe; three fixed foot seats require adhesive. Physical friction/force not inferred.
- Support-free XY slice checks for all parts/card. Twenty actual runner cuts produce carrier + five undamaged parts. Probe runners redesigned laterally on the shaft to avoid point-tangency at the narrow tip; generated meshes pass strict checks, no arbitrary repair/hull substitution.
- Card envelope and Z sheet thickness verified; artwork backing≥1mm, final image bright-hole test retains full material. Sphere equation checked analytically; scale zero is footDrop+sheet from probe tip, read at deck top.

## Actual production browser interactions

- **28 downloaded STL outputs** independently parsed; fingerprints match preview and exact Node-regenerated portable JSON geometry.
- Real file picker: PNG, JPEG, ASCII STL, binary STL; image pixels/threshold/depth/crop/scale and mesh shape/scale/rotation/placement measurably alter export. Replace/remove/reset restore known bytes. Ten malformed/excessive/open/nonmanifold/concave input fixtures plus empty silhouettes/invalid settings reject recoverably and disable export.
- Z/Y/−Z orientations and explicit millimeter confirmation checked. Files stay local; no external app-generation requests.
- Three generated presets, three silhouettes, text, all six icons, SVG ring, desktop drag/drop; geometry and assembly preflight repeated on personalized outputs.
- Image/mesh portable JSON, named local design reload, absent-payload reattachment errors, undo/redo, every ZIP STL and numbered instructions verified.
- Worker script abort disables export and reload recovers; rapid parameters/image settings gate stale exports immediately.
- Assembled/exploded/card/clean plate/isolated parts, visible ghost toggle, probe pose at both limits, view-only geometry signature stability and ideal-radius readout verified.
- 374px left desktop panel/right viewer; saved dark theme, focus outlines, collapsible sections and reduced-motion CSS. 320/390px preview-first phone layouts have no horizontal overflow and reachable exports. Actual touch orbit/pinch changes canvas output; phone PNG/STL imports and downloaded solids pass the same checks.
- Staged ROOT deploy URL reran real PNG/JPEG/ASCII/binary imports and downloads plus geometry/assembly checks; all400 gallery entries rendered without errors.

Reports: geometry/browser/studio/orientation/icons-drop/stale/presentation/pose/gallery/gallery-browser/deployment/staged/staged-gallery `*-validation.json`; screenshots in evidence/.

**No physical printing, physical fit, friction, glue strength, calibration or measurement accuracy testing has been performed.** This is an educational curvature demonstrator, not calibrated metrology. STL has geometry, not preview colors. No 3MF claim.

## Public publication verified

Root `npm run deploy` published commit `620c74de4ef30865efe524c5b6131f6da52f267d` to gh-pages; GitHub Pages build status **built**. The first public attempt encountered the still-building 404; after the actual Pages deployment completed, the public browser run passed built-in plus PNG, JPEG, ASCII STL and binary STL imports/downloads, signatures, every associated mesh/assembly check and 390px layout. Public gallery renders all400 entries without runtime errors. See public-validation.json, public-gallery-validation.json and pages-build-validation.json.

Live app: https://xianghui.github.io/daily-app2/20261103-4/
