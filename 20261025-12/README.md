# Tilt & Catch

A local **tilting-washer friction-clutch fidget** maker, built with React + Vite. Level a loose washer to glide along a straight post, gently tip it until its bore edges approach contact, then level it to release. This is a distinct edge-bind interaction, not a pinched flexible collar, threaded slider or ratchet. Whether it holds by friction depends on the actual printed surfaces. **No physical print testing or friction simulation has been performed. Do not use it to carry loads.**

The new and archived galleries were inspected for prior interactions. Keycap Studio's README, styles, editor, viewer, worker, image and STL modules were inspected read-only: this app follows its 374 px left control panel, right gradient viewer, tactile controls, paired millimeter inputs, saved light/dark themes, source preview and print export patterns. Shared local-only import/editor scaffolding comes from earlier daily-app2 studios; the washer mechanism and its tests are new. No reference Git history, dependency tree or personal input files were copied.

## Run and dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Dependencies: React, Three.js/OrbitControls, Manifold WASM, fflate; Fredoka/Rubik locally bundled through Fontsource (SIL OFL). Generation and export require no CDN, service, key or paid API. Vite base: `/daily-app2/20261025-12/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; publish the combined site from the **root monorepo deploy flow**, not the individual app script.

## Parts, fit and printing

Three single connected closed solids: `post-palm`, `thumb-washer`, `stop-cap`. Individual STL buttons, an all-part print plate STL, and **Everything STL + notes ZIP**. ZIP is not 3MF. STL does not store preview colours.

Print all three in their exported flat-bottom orientation: upright post, washer on broad face, cap closed-face down/socket up. PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, at least three perimeters as starting settings. No supports, hardware or glue. Small components: not for children. Clean seams/elephant-foot without enlarging precision interfaces unpredictably.

1. Slide the washer over the bare post.
2. Gently friction-seat the cap's chamfered mouth over the final 5 mm of post. Its flange prevents the washer passing the top **only if the friction seat is secure**. Do not force it.
3. Hold the post upright; level the washer to slide, gently tip until first contact and relax back to level. Never force past contact or trap fingers.
4. Rotate/pull the cap straight off to remove the washer. Parts are deliberately removable, not permanently captive.

**Pocket Glide** is the full-size calibration coupon: zero nominal cap interference and generous bore clearance. First calibrate cap fit, bore sliding and contact behaviour on your printer/material. Clearance/interference values are not universal. A loose cap must be held in place until a suitable fit is established. No compliant hinges are used; minimum rigid floor is 2 mm and washer wall exceeds 6 mm.

All lengths are **millimeters**:

| Control | Range |
|---|---|
| Palm diameter | 22–28 |
| Post working length | 28–44 |
| Washer outer radius | 11–15 |
| Radial running clearance | 0.25–0.55 |
| Washer thickness | 2–3 |
| Palm dimple depth | 0–0.6 |
| Cap radial interference | 0–0.1 |
| Imported XY footprint | 4–7 |
| Imported STL Z height | 0.6–5 |
| Imported X/Y placement | ±1.5 / ±2 |
| Imported Z rotation | ±180 degrees |
| Raised image depth | 0.4–3 |
| Engraved image depth | 0.4–0.6 |

Post diameter is 8; washer bore is `8 + 2 × radial clearance`. For bore D and thickness h, first geometric contact solves `D cos(theta) - h sin(theta) = 8`. Assembled preview tilts around the washer midplane and stops at 85% of that angle. This predicts contact, not static friction, deformation, strength or guaranteed self-locking. Height and tilt controls explain fit only. Exploded and isolated views are also provided; **all exports always use the exact checked meshes in separated print layout**, not the assembled pose.

## Image workflow and exact conversion

PNG/JPEG and simple SVG are processed locally. Choose a file or drag/drop, or try/download synthetic samples. Source and checkerboard cutout previews show the real conversion. PNG/JPEG headers are checked before decoding: maximum 2 MB, 12 MP and 6,000 px per side, normalized to at most 500 px. SVG supports only simple filled shapes/paths (at most 2,000 elements), no external references, scripts, effects or fonts; it is rasterized locally to 256 px.

The source is fit/cropped and shifted into a **20 × 20 grayscale grid**. Light/transparent or dark/inverted background controls determine luminance. Threshold mode gives each grid vertex either 0 or the selected relief depth; grayscale mode uses `depth × (1 - luminance/255)`. Adjacent height samples form triangle facets, with side walls and a closed flat backing. Bright holes remain unraised/unengraved **inside the continuous backing**; this is sampled relief, not exact contour tracing, through-hole silhouette extrusion, or automatic full 3D reconstruction from one photo. Thin details below grid resolution disappear.

The resulting solid is raised-unioned or shallowly subtracted into the isolated palm well using real Manifold CSG. Text (8 characters) and six searchable bundled glyph marks use the same local conversion. Scale, rotation, placement, depth, threshold and pixel content change exported triangles. Empty silhouettes are rejected. Reset conversion, replace/remove source and return to built-ins are provided.

## STL workflow and limits

Accepts actual ASCII and binary `.stl`, 2 MB / 1,500 triangles maximum, 0.2–250 mm per source axis. Select Z-up, Y-up or inverted Z before attaching; changing axis asks for reattachment. Source mesh viewer, source dimensions and triangle/format labels precede **explicit millimeter confirmation**, because STL has no unit metadata. XY scales proportionally to the selected footprint; Z independently scales to grip height, then center/rotate/place controls integrate the actual mesh into the palm via a real solid union. Concavities are never silently replaced by a hull.

The deliberately bounded supported input is **one convex, consistently outward-wound, watertight flat-bottom solid with no overhang beyond its bottom footprint**. Checks reject open/nonmanifold, disconnected, inward, degenerate, self-intersecting/touching or concave solids, inadequate bed contact and excessive coordinates/size. No automatic repair is claimed. Reorient, simplify or remodel unsupported geometry in a local mesh editor, then reattach. A broad flat-bottom wedge/gem works; hollow sculptures do not. The bottom contact hull is used only to validate bed support, never to replace source geometry.

The imported part must fuse into one connected palm body. A 6.5 mm safe radius and minimum transformed XY dimension reject unsafe placements/thin grips before export. The post, washer, socket, working gaps and cap remain unchanged by personalization. Independent mesh-difference probes verify this isolation.

## Responsiveness, state and privacy

Manifold WASM runs in a Web Worker with 100 ms debounce and request IDs/stale-result guards. Status is real: building, current-valid or error. Preview may retain a labelled last-good result while editing, but stale/invalid exports are blocked. Worker load failure blocks exports and gives recovery guidance. Every output part is validated again after Float32/export layout conversion.

Three real presets with geometry thumbnails, bounded variations, three palm outlines, undo/redo, up to six named local designs and JSON save/open. Designs contain bounded normalized image or mesh payloads, not misleading local file paths. JSON restoration revalidates meshes; missing image payload requests reattachment. Only browser localStorage and explicit JSON download save user designs; no file upload/network service is involved. Repository fixtures are synthetic and personal-file-free.

Desktop: sticky brand/theme header, collapsible labelled sections, tactile accessible buttons. Phones: preview, dimensions and exports first, then stacked controls; 320/390 px layout, touch orbit/pinch, focus and reduced-motion styles. Reset/fit and zoom controls supplement touch orbit.

## Verification (not a physical print test)

`npm test` generates 132 default/preset/extreme cases and 35 image/STL-derived cases. Actual binary STL checks: finite coordinates/normals, nonzero triangles, no degenerates, welded edges incident exactly twice with balanced directions, each connected component positive volume, expected Euler genus (one washer bore), dimensions and Z=0 bed contact. Individual parts are checked separately.

Mechanism tests use actual Manifold intersections: nine free height/tilt poses, no ring/post/base/cap collisions before contact, interference beyond predicted contact, cap flange retention overlap, minimum walls, isolated import differences and separated print plate. Nominal press-fit cap overlap is intentional only at the static mating seat; it is not a moving-body collision. Fit/friction/strength remain experimental.

Browser scripts exercise actual PNG/JPEG/SVG and ASCII/binary STL file pickers, changed pixel/threshold/depth/scale/placement exports against defaults, source replacement/removal/reset, invalid/truncated/nonmanifold/concave/excessive files, bad dimensions, empty silhouettes, presets, text/icons, JSON asset roundtrips, history/named storage, views, theme, focus, worker failure/stale guards, part STL and ZIP download. Download bytes must match the live preview fingerprint and regenerate from the exact saved parameters. Phone tests include real touch orbit/pinch and reachable exports. Reports and screenshots are included. No physical specimen, force measurement or fatigue/retention test has been performed.
