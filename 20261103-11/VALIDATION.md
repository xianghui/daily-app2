# Validation — Reverse & Time

Run 2026-11-03. **No physical print, assembly, timing, friction, stability, strength or fatigue test.** All checks below are computational/browser checks. Both pivot options are reversible compound-pendulum demonstrations, not equal-period calibration or a g measurement.

## Actual reference evidence

Fresh public STL downloaded and parsed with trimesh; SHA-256, mm-assumed bounds, triangle/component counts, defective source faces, socket loops, Z planes and rejected local candidates recorded in `reference-measurements.json`. Actual mesh cross-sections at .1/.5/1.59 mm were generated and visually inspected before final design. Measured source/default 1.6 mm sheets and 4.5 × 1.7 mm sockets map into the real generator. Proposed tolerances/redesign are separate in `reference-analysis.json` and README. Source mesh not redistributed or repaired.

## Geometry: `npm test`

36 cases: all three presets, independent low/high bound of every parameter, combined minimum/maximum, all three silhouettes, ASCII/binary imported meshes at default and changed transforms, threshold and grayscale image-derived geometry. Impossible combinations must block; report distinguishes any blocked case. In this run all 36 cases generated valid models.

Each connected card and all three clean parts serialized to actual binary STL. Independent byte parser checks length/triangle count, finite coordinates, nondegenerate triangles, normalized normals aligned with winding, mm bounds, Z=0 bed alignment, welded 1e-5 mm edge incidence exactly two/oppositely directed, adjacency components and positive signed volume for every component. Combined de-tabbed plate verified as three separate components. CSG kernel also checks single connected solids. Per-edit worker performs final mesh manifold/winding checks before enabling export.

Every geometry case passes independent Manifold intersections in **30 poses**, fifteen −35°…35° samples for each of the two mounting bores. Transforms match Three.js intrinsic XYZ convention: local Z rotation then X tilt. Both bores stay coaxial with the tower hole, with nonintersecting base/tower/blade and conservative base clearance. Checks include 21 vertical tower-insertion positions, 11 axial blade-removal positions after external nut removal, actual blade bores, source-fit socket openings, tongues, apron backing, printed-part layout intersections, declared card envelope and upper cross-section support inside bed footprint. Twelve real tabs connect all parts to carrier; simulated safe cuts produce carrier plus three undamaged parts. Tabs avoid functional tongue edges. Uniform-density blade centroid lies strictly between both bores; physical mass distribution is unverified.

## Production browser imports/downloads: `node browser-test.cjs`

Tested actual built assets under `/daily-app2/20261103-11/`, not only Vite development. Real file-picker PNG/JPEG and ASCII/binary STL inputs, explicit mm confirmation, downloaded actual STL bytes, UI/preview signature vs downloaded signature and exact Node regeneration from downloaded portable JSON. Each imported output passes the same independent mesh and mechanism checks as built-ins.

Pixel content, threshold, depth, grayscale mode, fit/crop and scale alter exported geometry. Both STL samples differ from default; scale, rotation, placement and depth survive export. Reset transforms reproduces original imported bytes; remove/reset reproduces no-import bytes. Tested individual-part downloads and min/max UI settings. Malformed SVG/image, truncated STL, open/nonmanifold/concave STL, excessive bytes/pixels/triangles/dimensions, empty white silhouette, invalid/empty transforms and protected-zone violations block export and recover through replace/remove/reset. Remote generation requests: zero. No browser runtime errors.

Touch-enabled 390 px phone: actual touch orbit and pinch changed canvas captures; real PNG and STL uploads and downloads worked. 320 px exports reachable, no horizontal overflow.

## Studio behavior

- `node studio-test.cjs`: every preset downloaded/validated; three silhouettes, text/icon/SVG personalization; portable image and original mesh JSON round trips; named designs across reload; missing payload explicitly blocked; undo/redo; actual ZIP decompressed and every included STL checked; views/ghost; saved dark theme; keyboard focus, collapsible sections, reduced motion; 374 px left rail/right preview, 320 px preview-first phone; intentional production-worker abort blocks export and reload recovers.
- `node orientation-test.cjs`: real Z/Y/−Z STL import, explicit mm confirmation, changed dimensions, exact Node/browser exports and all mesh/mechanism checks.
- `node stale-test.cjs`: three rapid dimension edits and three rapid threshold edits immediately disable stale exports; only latest state becomes exportable; invalid transform recovery.
- `node presentation-test.cjs`: assembled/card/exploded/de-tabbed/isolated views, visually checked ghost, no print-signature change, every editor tab at 320/390 px without overflow. Inspected captured assembled view.
- `node icons-drop-test.cjs`: all six bundled icons change real solid geometry and pass per-part mesh/mechanism checks; actual PNG drag/drop.
- `node hole-check.mjs`: browser-imported ring SVG's bright central hole keeps unengraved solid, dark ring becomes actual Boolean recess, continuous backing independently probed.
- `node kit-ui-test.cjs`: real direct per-part buttons/downloads, swing and alternate-pivot pose visibly change assembly but not print bytes, span/weight/inset/bore edits change export, excessive span blocks and reset recovers.

Reports and screenshots are beside scripts. Synthetic fixtures only; source attribution in `public/samples/ATTRIBUTION.txt`.

## Gallery and publication

`node gallery-test.cjs`: every inline script compiled with Node `new Function`, new entry exactly once/newest/area stl, all **406** prior entries preserved exactly, **407** cards rendered without runtime errors, STL Generators first and search works. Root deployment stages the combined gallery and all apps; staging and public checks are recorded separately after execution. Public `public-test.cjs` checks exact built HTML, worker/WASM, real PNG import/download and gallery entry. Physical testing remains unperformed regardless of deployment success.

Publication completed: root `npm run predeploy` staged **407 apps, zero failed/skipped**, with exact root/new-app HTML and every gallery app present (`root-build-validation.json`). The full real-import/download browser suite was rerun on the combined staged site (`staging-validation.json`) and staged gallery passed. Root `npm run deploy` reported Published. GitHub Pages workflow [41550836809](https://github.com/xianghui/daily-app2/actions/runs/41550836809) completed successfully after normal propagation. Public URL returned HTTP 200 with exact built HTML; real public PNG file import, WASM/worker, downloaded manifold STL/signature and root gallery entry verified (`deployment-validation.json`). Public accessibility is from the combined root deployment, not individual app deploy.

An additional in-range but impossible small-card/large-spacing/sheet combination was exercised in the browser and correctly blocked with “Card too small,” then recovered on reset (`kit-ui-validation.json`).
