# Validation — 2026-11-03

- `npm run predeploy`: passed, production worker/WASM and local fonts bundled.
- `npm test`: **40 cases passed**. Each card and clean part: closed, consistently wound, finite nondegenerate triangles, positive component volumes, dimensions and boundaries. Loose plate has four separately closed solids.
- All cases: 16 actual runners; snips release carrier + four intact panels, no assembled or flat-panel collisions, 164 outward-normal insertion samples, tapered bed footprints outside bounded small engraving bridges, backing >=1 mm, inner window walls >=1.6 mm.
- Real production browser PNG/JPEG/ASCII/binary STL uploads, downloads and transformations passed. Actual bytes compared to exact preview fingerprint and Node regeneration of saved JSON. Changed pixels/threshold/depth/scale/placement change exports; remove/reset restores baseline.
- Rejections: truncated/open/nonmanifold/concave/malformed/oversize meshes, bad image contents/pixels, empty silhouettes, bad transforms/dimensions. Errors disable export and recover through replace/remove/reset.
- All presets, window silhouettes, text, six icons, SVG hole preservation and drag/drop checked. Independent solid probes verify bright holes remain unengraved and dark ring recesses exist with continuous backing. STL recess depth independently probed at exactly .5 mm after lead-in adjustment.
- JSON image/STL payload round trips, named-design reload, missing-payload error, undo/redo, all five views/isolated parts, per-part STLs and real ZIP contents passed.
- Stale edits immediately block export; newest result matches Node. Worker script abort blocks export, reload recovers.
- Desktop 374 px left controls/right viewer, tactile controls/focus/collapses, saved dark theme and reduced motion checked. Phones 320/390 px: all tabs and expanded guide no horizontal overflow, preview first, touch orbit/pinch changes view, reachable STL and real JSON/download/import actions.
- Gallery inline scripts compiled, new STL entry exactly once/newest first, all 412 existing entries retained; browser search/render checked without runtime errors. Root staging built 413 apps with 0 failures/0 skipped. Staged gallery/production imports/downloads passed.

Evidence: geometry-validation.json, browser-validation.json, studio-validation.json, presentation-validation.json, orientation-validation.json, icons-drop-validation.json, hole-validation.json, depth-validation.json, stale-validation.json, gallery-validation.json, staged-validation.json and screenshots under evidence/.

**No physical print, seam fit, adhesive strength, optical effect or handling test performed.** Computational assembly checks are not strength or printer certification. Tape and adhesive are required.
