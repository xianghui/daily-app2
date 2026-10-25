# Contrary Calm

A local React + Vite maker studio for a **reverse-action compliant lever fidget**: pinch the two round pads nearest the palm to spread the two far pads, then release. A central palm spine grounds two opposing TPU bending necks. This inverts the input direction and varies the output/input displacement ratio; it is not a snap toggle or a reskinned tensile cell.

## Run / build

```sh
npm install
npm run dev -- --host 127.0.0.1
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261025-17/`. Per-app `deploy` uses `gh-pages -d dist`, but the public combined site is published **only through the repository root predeploy/deploy flow**.

## Studio

Keycap Studio was inspected read-only for its maker patterns: 374 px left control rail, sticky brand/theme header, labelled collapsible sections, paired slider/mm inputs, pink raised tactile controls, locally bundled Fredoka/Rubik fonts, checkerboard cutout, source-mesh editor and large right-hand orbit preview. Phones show the preview, dimensions and exports first, with controls below. Saved light/dark theme, three actual model-thumbnail presets, three palm silhouettes, bounded random variations, undo/redo, six named local designs, and portable JSON round trips are included. Import/export infrastructure is adapted from earlier apps in this monorepo; the reversing-lever geometry and its mechanical tests are new. The reference project and archived gallery were not modified.

## Geometry / parameters

All lengths are **millimeters**, Z up. Palm diameter 22–28; input arm 18–24; output arm 20–28; in-plane hinge thickness 1–1.4; print depth 3–5; palm dimples 0–0.6; total trial pinch 0.8–1.6. Rigid lever webs are 4 mm wide, pads 6.6 mm diameter, free neck length approximately 8 mm. The nominal lever pivot X is 45 mm; pad centerlines Y ±12 mm. Trial travel is guidance, **not a physical hard stop**. Exact current export X/Y/Z is displayed. Numerical inputs outside bounds block export rather than silently using an earlier result.

Manifold WASM unions intersecting construction primitives into a single solid and subtracts the palm well/dimples. It does not merely concatenate overlapping shells. Every build checks finite positions, nondegenerate faces, welded edge incidence exactly two, opposite neighboring edge direction, positive volume and one connected solid. The same worker result supplies preview and binary STL export; a request key, sequence guard, 100 ms debounce and explicit busy/error state block stale export. Worker load failures disable export until reload. Resolution is bounded.

## Image → real relief

PNG, JPEG and a restricted simple SVG subset are supported. Files stay local. Maximum 2 MB; PNG/JPEG dimensions checked from headers before decode: ≤12 MP, ≤6,000 px on either side, normalized to ≤500 px. SVG is parsed, resource/script/effect references rejected, limited to 2,000 simple elements, and rasterized locally at 256 px. This is **2D-to-height-map conversion, not full 3D reconstruction from a photo**.

Fit/cover and ±25% crop pan composite the image on the selected light/dark background, sample a 20×20 luminance grid and optionally invert for dark-background artwork. Threshold mode sets foreground sample height to the selected depth; grayscale mode maps `(1-luminance/255) × depth`. A triangulated top and closed sides/bottom make a solid tile with a 0.25 mm exposed backing under raised relief. Bright holes remain low/unraised on the continuous backing (not cut all the way through the palm); grid interpolation creates sloped boundary transitions. The checkerboard shows retained sampled foreground. Exact pixel-grid resolution is stated, rather than promising vector fidelity. Empty foreground is rejected. Text (up to eight characters), six searchable built-in marks and SVGs use this same real conversion pipeline.

Footprint 4–7 mm; depth 0.4–3 mm raised, 0.4–0.6 mm engraved; rotation ±180°, X ±1.5 and Y ±2 mm. Relief union/engraving is confined within the isolated 6.5 mm radius palm zone. Invalid placement blocks export. The palm's 4.2 mm well floor retains 3.6 mm below maximum engraving. Replacing/removing/resetting restores useful defaults.

## STL → integrated grip

Both binary and ASCII STL are parsed in the worker, with maximum 1,500 triangles, 2 MB and source dimensions 0.2–250 mm on every axis. STL has **no unit metadata**: explicit millimeter confirmation is mandatory. Select Z up, Y up or −Z up **before import**; changing axis clears the source and requests reattachment. The original oriented source is previewed with its dimensions and format.

Integration deliberately supports only one **convex, closed, consistently outward-wound, non-self-intersecting solid with a broad flat bottom**. Bottom support must cover at least 25% of its XY bounding rectangle and contain every projected vertex. Open/nonmanifold, inward, concave, disconnected, intersecting or overhanging meshes receive actionable errors; no convex-hull replacement or unverified repair is performed. Triangle tests are bounded and run off the UI thread.

XY is proportionally scaled to a 4–7 mm footprint; Z independently fits a 0.6–5 mm height. Rotation, offsets and reset controls genuinely transform the mesh before solid union with the well floor. Resulting XY thickness must remain ≥1.2 mm. All transformed vertices must remain within the palm safe radius, preventing imported features from touching a flexure or lever. Final connectivity/topology checks reject failed solid integration. Source and final model are both visible.

## Privacy / designs / exports

No API, CDN, paid service or user-file upload. Dependencies, WASM and fonts are bundled. Only synthetic fixtures are in `public/samples/` (see attribution); no personal input files are stored in the repository. Portable JSON includes bounded normalized PNG/pixel data or the verified mesh, not a nonexistent file path. Restored STL meshes are revalidated. JSON is limited to 2 MB; missing image payloads explicitly request reattachment. Local named designs use browser localStorage.

Download whole or individual-part **binary STL**, or a ZIP containing the STL and print notes. Because this product has one continuous part, assembled/rest and print views use the same rest geometry; exploded assembly is not applicable. ZIP is not 3MF; STL has no colour. Rest preview does not simulate elastic deformation.

## Printing and physical limitations

One bed-flat TPU 95A starting-material solid, no hardware/supports/assembly. Start with 0.4 mm nozzle, 0.2 mm layers and 3 perimeters. Remove strings from the open channels without damaging necks. Do not substitute brittle PLA. Print **Pocket Reverse** as a full-size calibration trial: hold the palm, begin below 0.4 mm total pinch of the near pads, check outward response of the far pads, and only then approach selected trial travel. Do not pinch pads all the way together. Stop for damage, whitening or excessive force. Stiffness, viscoelasticity, fatigue and fit depend on material/printer/slicer; no universal tolerance or lifetime is claimed. This is a small-parts desk fidget, not a load-bearing tool.

The nominal relation is `spread = pinch × outputArm/inputArm`; uniform-curvature hinge strain estimate is `thickness × asin(pinch/(2×inputArm))/(2×8)`. These are ideal, small-angle guidance. Rigid-web envelope sweeps test collision clearance at eleven trial positions, excluding the intentionally deforming necks. They do **not** validate nonlinear stress or material response. **No physical print was tested.**

## Verification

`npm test` covers 132 defaults/presets/min-max corners, 35 image/STL-derived outputs, independent binary-STL topology/dimensions/positive-volume checks, section and gap CSG probes, imported-feature isolation and rigid-web envelope sweeps. Browser scripts exercise real file pickers, PNG/JPEG/ASCII/binary STL downloads, pixel/threshold/scale/placement changes, invalid inputs, empty images, unsupported meshes, saved designs, portable assets, JSON, text/icons/SVG, view modes, worker failure/stale edits, light/dark, keyboard focus, mobile touch orbit/pinch, and export access at 320/390 px. Reports are saved alongside the scripts; see VALIDATION.md for completed results.

Dependencies: React, Vite and React plugin; Three.js/OrbitControls; manifold-3d (Apache-2.0); fflate; Fontsource Fredoka/Rubik (SIL OFL); gh-pages. Playwright is development-only.
