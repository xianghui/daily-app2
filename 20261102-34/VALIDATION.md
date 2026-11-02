# Validation — 2026-11-02

Computational tests only. No physical print, external slicer, adhesive-strength, friction, wear or real-world stability test performed.

## App build and model

- `npm run predeploy`: passes. Vite production bundle contains local worker, Manifold WASM, Three.js, fonts and export dependencies. Nonblocking chunk-size warning only.
- `npm test`: **39 variants pass**: three presets, all three base silhouettes at combined minima/maxima, every field endpoint, invalid endpoint rejection, threshold/grayscale/depth/bright-hole images, ASCII/binary STL and transformed imports. Card and all eight clean parts checked separately; de-tabbed plate has eight components.
- `node corner-check.mjs`: **8 additional worst-case variants pass** with minimum card, maximum plank dimensions/support height/spacing, extreme sheet and harmonic fraction, narrow runner height and loose sockets.
- Independent binary parser checks exact file length/count, finite coordinates, nondegenerate triangles, normalized consistent normals, welded edges with exactly two opposite-directed incident faces (1e-5 mm), positive volume for every component, expected millimeter bounds and Z=0 bed placement. Both separately exported pieces and float32 translated plate verified.
- Actual source STL downloaded and parsed, SHA-256/components/bounds measured, representative Z=.10/.50/1.59 cross-sections inspected. Read-only local candidate meshes measured and rejected as incompatible with a flat sheet kit. Reference-analysis maps measured 1.60 mm sheet / 4.50 mm sockets to actual parameters; stronger runner/gap choices explicitly proposed, not measured or physically proven.

## Assembly rather than only watertightness

- One genuinely connected card,32 actual low runners; clipping them in CSG gives nine components (carrier + eight released parts), preserving all eight clean solids.
- Independent actual exported-mesh mass/centroid integration verifies five equal-volume planks and upper-stack centres inside every contact support polygon at **11 retraction poses**. Default top reach41.10mm, right stability margin6mm. Whole assembly COM inside base footprint. This assumes identical solid infill/material and no added loads.
- True Boolean pairwise intersections show no unintended assembled-part collisions. Four source-derived tongue/socket fits, flush tongue tips, shoulder seating, vertical support insertion and bottom-up plank lowering paths checked.
- Bed footprints compared to upper slices: no floating first layers/unintended unsupported XY regions. Card declared envelope and thickness verified.
- All these checks rerun on image-derived and STL-derived outputs, as well as every preset and tested variation. Engravings cannot reach joints or alter uniform plank mass.

## Real browser production tests

- `node browser-test.cjs`: actual PNG/JPEG/ASCII/binary file-picker imports and **31 STL downloads**, independently parsed; imported output compared against built-in geometry, changed threshold/depth/crop/pixels/scale/rotation/placement survive export; removal/reset restores original signature. UI current-geometry fingerprint equals downloaded STL and independent Node regeneration from downloaded portable JSON. Full assembly checks rerun on imported outputs.
- Malformed/truncated/open/nonmanifold/concave/oversized/excess-pixel/excess-triangle/excess-dimension inputs, empty images and invalid transforms rejected with disabled exports and usable recovery. No silent convex-hull substitution/repair.
- `node studio-test.cjs`: three real presets, silhouette/text/icon/SVG geometry changes, image and STL portable JSON round trips, named saves across reload, missing portable payload errors, undo/redo, actual ZIP unzipped and every STL checked, views/ghost/fit, saved dark theme, visible keyboard focus, collapsible controls, reduced motion,374px left panel/right stage and320px preview-first layout. Forced worker-script abort disables exports; reload recovers.
- `node orientation-test.cjs`: Z/Y/−Z input orientations, mm confirmation and exact final geometry/assembly verified.
- `node stale-test.cjs`: rapid geometry/image edits immediately block stale exports; only final latest result becomes available; invalid transform and reset recovery checked.
- `node icons-drop-test.cjs`: all six searchable bundled marks alter solid geometry and pass mesh/assembly tests; actual PNG drag-drop.
- `node presentation-test.cjs`: assembled/exploded/card/loose/isolated views; visible offset sweep and ghost opacity; print signature unaffected by view selection; no overflow in all tabs at320/390px. Real mobile file-picker uploads, actual downloads, CDP touch orbit/pinch and reachable exports pass. No runtime errors or remote service requests.
- Screenshots inspected: desktop assembled and full phone import/export workflow. Views show the actual five loose planks, both supports and fixed signature base.

## Gallery and combined staging

- Root inline scripts all compile with `new Function`; missing scripts/assertions fail nonzero. New entry exactly once, area=stl, correct folder, newest first; **391 prior entries unchanged**. STL Generators remains first category.
- Root `npm run predeploy`: **392 built/copied,0 failed,0 skipped**.
- `node deployment-check.cjs`:392 entrypoints exist; root index and42 current-app assets byte/hash match source production dist.
- Combined gallery browser and full real-import/download suite rerun on ROOT deploy assets before publication; see staged-browser-validation.json and gallery-browser-validation.json.
