# Validation — Jansen & Stride

Computational and browser validation, not a physical print test.

- `npm run lint`: passed, advisory hook/style warnings only; no errors.
- `npm run predeploy`: passed; production-local worker/WASM/fonts bundled under the real base path.
- `npm test`: **17 model/export cases** covering defaults, all three presets, three silhouettes, global minima/maxima, threshold/grayscale images, transformed ASCII and binary STL inputs. Each of 11 exports per case checked for closed manifold topology, winding, positive component volume, finite nondegenerate triangles, bed-supported sections and mm dimensions. De-tabbed plate has ten closed components. The connected card stays within declared width/height/sheet thickness; all 40 cuts release ten unchanged parts plus carrier. Ring-image center remains uncut.
- `browser-test.cjs`: real browser-selected PNG/JPEG/ASCII/binary uploads and actual downloaded STL parsing (33 downloads and 10 rejected invalid fixtures). Pixel/threshold/depth/crop/scale/placement changes alter exports; remove/reset restores default bytes. Current preview signature matches downloads and independent portable JSON regeneration. Malformed/truncated/open/nonmanifold/concave/oversized inputs, blank images and invalid dimensions/transforms block export and recover. 320/390 px phone, real touch orbit/pinch and phone image/STL downloads passed. No remote generation requests or runtime errors.
- `studio-test.cjs`: presets and shape variation; text/icons/SVG; exact ZIP inventory and every contained STL; image/STL JSON and local named design restoration; missing payload rejection; undo/redo; assembled/exploded/card/de-tabbed views; saved dark theme; keyboard focus; collapsible controls; reduced motion; 374 px desktop left rail; phone preview-first; worker abort/loading failure and reload recovery. Passed against final production build.
- `icons-drop-test.cjs`: all six marks affect checked solid geometry; actual drag/drop PNG works.
- `orientation-test.cjs`: Z/Y/−Z source orientation, explicit mm confirmation and final-part checks passed.
- `stale-test.cjs`: immediate rapid parameter/image edits disable stale exports; only latest request becomes current; invalid transform recovery passed.
- `isolated-test.cjs`: ten isolated 3D views plus actual per-part STL downloads parsed successfully.
- `mobile-layout.cjs`: all five editor tabs plus expanded assembly guide fit both 320 and 390 px with no horizontal overflow, preview first and exports reachable; screenshots stored in `evidence/`.
- `motion-test.cjs`: **216 mesh poses** across three presets; conservative hardware cylinders (6.5 mm OD, 3 mm beyond incident plate faces) do not intersect nonincident solids. Actual 90/180/270° preview poses change while print geometry signature remains constant. Analytic closure/hardware calculations inspect 360 phases for every live valid result. Independent posed part intersections, all hole-center transforms, two foot/socket insertion paths and plastic-only center-of-mass support margins also pass.
- `gallery-test.cjs`: inline scripts compile with `new Function`, missing scripts fail; new entry exactly once/newest/area `stl`; STL category first; browser search/rendering passes; all **428 previous entries preserved**, **429 total**.
- Root `npm run predeploy`: **429 built, 0 failed, 0 skipped**. Root deploy folder contains the gallery and every app; new production assets match individual dist.

Reference evidence: fresh downloaded STL hash, parsed dimensions/components, measured socket loops, inspected upstream README/source, three real mesh cross-sections, and explicit measured-versus-redesigned decisions are in `reference-analysis.json`, `reference-measurements.json` and `evidence/reference-sections.png`.

The 16 mm exploratory crank was rejected for a hardware collision; supported 13–15 mm unscaled range is intentional. JS coordinates/angles are quantized at 1e-7 before CSG to keep Node/Chromium triangulation reproducible. A chassis/foot center-plane offset found by assembly intersection tests was corrected and all relevant checks rerun.

No physical printing, assembly-force, friction, wear, fatigue, walking, load or stability tests were performed. External hardware mass is excluded from the plastic-only center-of-mass estimate. Seven M3 joints, sleeves/washers and adhesive are required. The leg remains raised: no locomotion claim.

Public verification: GitHub Pages deployment [41711049454](https://github.com/xianghui/daily-app2/actions/runs/41711049454) completed successfully. `public-smoke.cjs` passed on https://xianghui.github.io/daily-app2/20261104-6/ : HTTP 200; default/image/STL real downloads parsed; current preview signatures match; production worker/WASM/assets accessible; all 429 gallery cards and newest-entry search render without runtime errors. Initial smoke attempt was deferred/retried while Pages propagation returned 404, then passed after the deployment completed.
