# Orbital Hush

A local React + Vite maker studio for a **cage-free rolling-element fidget bearing**. Turn an annular race while three soft rollers orbit a fixed hub, then reverse. This is rolling friction between concentric surfaces, not a toothed planetary gear, sliding ring, roller nip feed, or self-wedging sprag. Five separately printable solids: frame, annular race and three TPU rollers.

## Studio / reference

Read-only visual reference: `keycap_generator2` README, App, Viewer, styles, worker, tracing, solid engine, STL and export modules. Concrete patterns retained: 374 px left studio panel, compact sticky identity/theme header, collapsible controls, paired numeric/range inputs, raised short-shadow buttons with pressed selection states, lavender desk/white panels/coral accent, locally bundled Fredoka/Rubik, source checkerboard and mesh previews, large orbit viewer, build status, dimensions and reachable exports. Phone layout places preview/toolbar, status and exports before stacked controls. Saved light/dark theme, keyboard focus, generous touch targets and reduced-motion handling. No switch sockets are used in this unrelated mechanism.

The prior daily studio's local importer/persistence/viewer/export infrastructure is reused; the bearing geometry, parts, motions, mechanical contract and collision checks are new. No reference source, Git history or dependency tree is copied wholesale.

## Parameters (millimeters unless stated)

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 |
| Fixed hub radius | 8–12 |
| Roller radius | 5–7 |
| Outer race-guide radial clearance | 0.3–0.6 |
| Race wall | 2.4–3.6; scallops remove at most 0.2 |
| Roller diametral squeeze | 0.1–0.2 |
| Palm dimples | 0–0.6 deep |
| Fixed frame floor | 4 |
| Unloaded roller height | 6 |
| Race height | 7 |

Three real presets include generated 3D thumbnails: Gentle Roll (calibration set), Orbital Hush and Broad Orbit. Round, hexagonal and oval palm silhouettes; bounded variation, reset, undo/redo. Built-in grip, text (8 characters) and six searchable bundled original SVG marks all produce real geometry. Preview colors are not STL colors.

## Local imports and actual geometry

File picker works on desktop and phone; drag/drop also supported. Synthetic fixtures are bundled under `public/samples/`: PNG, JPEG, ring SVG with a hole, ASCII wedge STL and binary gem STL. These are original synthetic test data, no personal assets.

**All processing is local**. No API key, CDN runtime dependency, server generation or upload. Import limits: 2 MB/file, PNG/JPEG at most 12 MP and 6,000 pixels per side, normalized to at most 500 pixels per side for portable saves. SVG accepts only simple paths/shapes, at most 2,000 elements, rasterized locally to 256 px; scripts, references, effects and external resources are rejected.

### Image conversion

PNG/JPEG (and rasterized simple SVG) are fitted/cropped onto a **20 × 20 luminance height grid**, with light/transparent or dark/inverted background handling and ±25% crop offsets. Threshold 1–254 produces a thresholded **silhouette relief**; grayscale maps luminance continuously to height. Neighboring samples form a triangulated top surface with closed side and bottom faces. The bounded solid is rotated/placed and boolean-unioned into the recessed palm well. Engraving subtracts the same bounded solid with reflected Z. This is sampled **2D-to-relief conversion, not automatic full 3D reconstruction or exact vector outline tracing**.

Bright internal holes remain unraised/unengraved over the continuous backing, not through-holes in the frame. Checkerboard shows the actual sampled cutout; source and final result are displayed separately. Raised depth 0.4–3 mm; engraved 0.4–0.6 mm to protect the 3.2 mm well floor. Footprint 4–7 mm, ±180° rotation, X ±1.5 mm, Y ±2 mm, and a 6.5 mm circular safe-zone check. Empty images and unsafe transforms block export. Reset conversion, reset placement, replace, remove and return to built-in defaults are supported.

### STL integration

Both ASCII and binary STL are parsed locally in the worker. STL has **no unit metadata**: source dimensions are shown in millimeters and a checkbox must explicitly confirm that interpretation before integration. Select Z, Y or −Z up before attachment. XY scales proportionally to a 4–7 mm footprint, Z independently fits a 0.6–5 mm grip height; rotate ±180° and place within the same safe well. The original mesh is converted to a solid and boolean-unioned into the frame with 0.15 mm penetration. It changes the exported part, not just a display mesh or unchanged re-export.

Deliberately bounded contract: one connected, closed, outward-wound **convex, broad flat-bottom, support-free grip**; 1–1,500 triangles, each dimension 0.2–250 mm. Require finite coordinates, nondegenerate triangles, two opposite edge incidences after 1e-5 mm vertex welding, positive volume, no self-intersection, broad bottom area and no projected overhang. Concave, hollow, branched, disconnected, open and unsupported meshes are rejected with actionable feedback. **No convex-hull substitution or claimed automatic repair.** At least 1.2 mm final XY dimension; actual safe-zone and solid connectivity checked after transform. Orientation changes clear the old source for reattachment.

## Modeling / live result / export

Manifold WASM does solid booleans in a bundled worker; images are bounded to 400 samples and round primitives are bounded to 128 segments. 100 ms build debounce, request-id and exact state-key guards; stale results cannot enable export. Import normalization also uses a cancellation sequence. Last valid preview can remain visible with an explicit warning; invalid/currently building state disables all mesh downloads. Worker failure shows reload guidance and disables export.

Three.js touch/mouse orbit, zoom and fit; print plate, assembled, exploded, all moving parts and every isolated part. Ghost frame explains fit. Preview positions are **estimated**: rollers are equally spaced and uniformly compressed into ellipses with a 0.015 mm radial tessellation guard; ideal no-slip orbit angle is race angle × inner-race radius / (2 × orbital radius). This is not physical deformation, pressure, friction, force, fatigue or slip simulation. Unloaded circular rollers are the actual print geometry.

Preview and export share the exact current generated meshes. Binary STL for the separated print plate or each individual part; ZIP contains five true STLs and assembly notes, not a mislabeled 3MF. Current geometry fingerprint is exposed for independent download checks. Plate X/Y/Z and selected-part dimensions are shown in mm. A combined plate may exceed a small bed: use per-part exports and arrange in your slicer. STL does not preserve colors or units.

Named local designs (up to six), undo/redo, JSON save/open (2 MB) preserve bounded normalized image data and indexed STL payloads; topology is revalidated on mesh restore. Missing image payload requests reattachment rather than pretending it restored. Storage failure recommends portable JSON.

## Print / assemble / calibrate

Print frame/race in PLA or PETG, **rollers in TPU 95A only**, flat faces down at Z=0. Start 0.4 mm nozzle, 0.20 mm layers, three walls; trial 30–50% infill for TPU softness. No hardware or supports intended. Do not use rigid rollers in this intentional interference fit. Lower the three rollers equally spaced around the hub, then lower the race inside the outer guide. Turn and reverse gently. If force is required, stop, reduce squeeze, or recalibrate TPU dimensions/softness.

The Gentle Roll preset is a full-size fit coupon. Diametral TPU squeeze 0.1–0.2 mm is divided between the two contacts; guide clearance 0.3–0.6 mm is separate. Fits are not universal. Slow TPU printing, printer dimensions, layer direction, hardness, infill and friction all matter. Rollers have no cage and may slip, drift or bunch. Lift the race and redistribute them. Hold level: parts are **not vertically captive**. Low outside wall guides lateral drift, not vertical retention. Lift race first, then rollers to release; no snap fits, fasteners or destructive release needed. Small loose parts, not for children.

**No physical print, traction, force or fatigue tests have been performed.** Computational checks cannot establish tactile quality or successful assembly on a particular printer.

## Reproducible validation

```
npm install
npm run predeploy
npm test
node serve-production.cjs
# In another terminal, against the actual dist /daily-app2/20261027-4/ base path:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
```

Mesh checks independently parse final float32 STLs, validate byte length, finite coordinates, nondegenerate faces, normalized/outward normals, per-component positive volume, dimensions and two opposite incident faces on every welded edge. Check every part and separated combined plate. 36 parameter cases and 35 imported-output cases include presets and representative extrema.

Separate mechanical checks use solid intersections over representative full-turn poses, guide wall and floor bounds, roller separation, import isolation, unloaded intentional TPU interference, estimated compressed-preview nonintersection, vertical release paths and nonintersecting print layout. These are geometric checks, not material/traction or print testing.

Browser tests select real PNG/JPEG/ASCII/binary files, download actual STLs, regenerate saved state independently and compare fingerprints, validate geometry and compare imports/threshold/depth/scale/rotation/placement against baseline. Also cover invalid files, empty silhouettes, excessive dimensions/complexity, unsupported concavity, open/nonmanifold meshes, unsafe transforms, recovery/reset, phone 320/390 px overflow, touch orbit/pinch, persistent theme, focus, sections, all presets/shapes/marks, JSON round trips, named saves, undo/redo, ZIP contents, worker failure and stale imports. Ring probes check actual raised/engraved hole preservation. Reports and screenshots are saved alongside scripts.

## Dependencies / publish

React + Vite; Three.js; Manifold-3D WASM; fflate; locally bundled Fredoka/Rubik; Playwright for validation; gh-pages for deployment. Production generation has no remote imports. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public site is published by the **root monorepo** predeploy/deploy flow, not the individual app deploy command. Archived gallery and reference remain read-only.
