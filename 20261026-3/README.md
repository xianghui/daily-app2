# Oloid Wander

A local React/Vite maker studio for a **physical oloid rolling fidget**, with a personalized palm runway. A solid convex hull spans two equal circles in perpendicular XY/XZ planes whose centers are one radius apart. Gently roll/tumble it between open palms or on the runway: shifting circular-edge contacts are distinct from the conical surfaces of a sphericon. The roller is deliberately loose, not captive and not self-returning. No physical print or rolling behavior has been tested.

## Use / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. All dependencies are bundled locally: React, Vite, Three.js, Manifold WASM, fflate, Fontsource Fredoka/Rubik (OFL). No API key, server-side conversion, CDN generation dependency or paid service. Local HTTP hosting is needed for module workers/WASM. Base path: `/daily-app2/20261026-3/`. Publication uses the parent monorepo `deploy/`, not this app's standalone deploy script.

## Maker studio

374 px left controls / large right viewer on desktop; preview, dimensions, export then controls on phones. Collapsible labeled sections, paired numeric/range controls, tactile raised buttons, searchable bundled marks, preview swatches, keyboard focus and reduced-motion support. Saved light/dark mode; three actual 3D model preset thumbnails; bounded variations; undo/redo; six local named designs; portable JSON save/open. All measurements are millimeters except explicitly marked rotations, percentages and thresholds. Assembled contact pose, exploded, print plate and isolated-part views; see-through runway, orbit, pinch/zoom and fit.

### Dimensions / bounded parameters

| Parameter | Range (mm) |
|---|---|
| Palm diameter | 22–28 |
| Oloid circle radius | 10–16 |
| Oloid overall envelope | 3r × 2r × 2r |
| Runway floor | 2.5–4 |
| Extra runway margin per side | 8–14 |
| Runway corner radius | 3–7 |
| Palm dimples | 0–0.6 |
| Imported footprint (longer XY axis) | 4–7 |
| Imported STL Z height | 0.6–5 |
| Import XY offsets | X ±1.5, Y ±2 |
| Raised image depth | 0.4–3 |
| Engraved image depth | 0.4–0.6 |

The runway is `(3r+2 margin) × (2r+2 margin)`. A 6.5 mm radial safe zone protects imports; out-of-zone transforms are rejected. Palm well floor is 4.2 mm; engraving retains at least 3.6 mm. Roller uses 96 samples per circle (192 procedural hull points); maximum chord sag <0.009 mm. Rounded coordinates make portable regeneration deterministic. The intentional hull applies ONLY to built-in circle points, never imported meshes.

## Image → actual geometry

Desktop/mobile file pickers and drag/drop accept actual **PNG, JPEG and simple SVG**. At most 2 MB; PNG/JPEG headers are checked before decoding: ≤12 MP and ≤6,000 px per side, normalized to ≤500 px. Simple SVG must have ≤2,000 elements and ≤6,000 px dimensions; only local filled shapes/paths, no scripts, external resources, text, effects or references. SVG is rasterized locally to 256 px. Bundled synthetic `mark.png`, `waves.jpg` and `ring.svg` are usable examples.

Fit/cover, crop pan ±25%, light/dark background, threshold 1–254, grayscale relief, physical footprint, depth, rotation and placement alter exported geometry. A **20 × 20 luminance grid** is triangulated into a closed height-field solid and boolean-unioned into the palm (or subtracted for engraving). Dark samples get depth, white/transparent samples stay at the original well floor. Bright holes remain unraised/unengraved, not through-holes. Triangle interpolation creates small ramps at pixel boundaries: this is sampled **2D-to-relief**, not vector outline tracing and not automatic reconstruction of a full 3D object from one photo. Checkerboard cutout and original image previews show the local conversion. Text and six searchable original bundled SVG marks follow this same geometry path.

## STL → meaningful grip integration

Both **ASCII and binary STL**, 40 bytes–2 MB, ≤1,500 triangles; each dimension 0.2–250 mm. Content, complete facets/length, finite coordinates, degeneracy, welded closed edge incidence, winding, connected positive volume, self-intersection, convexity and broad flat-bottom contact are checked in the worker. Only a **single closed convex, support-free flat-bottom grip** is supported: concavities, hollow shells, branches, touching/disconnected solids and projected overhangs are explicitly rejected. No automatic repair and no convex-hull substitution. The original triangles are fed into Manifold and fused to the palm with 0.15 mm overlap, then checked again for connectivity/manifoldness.

Select Z-up, Y-up or inverted-Z before attaching (changing orientation clears the source and requests reattachment). Source dimensions, format and triangle count are shown next to an interactive source preview. Explicitly confirm **millimeters**: STL contains no unit metadata. XY scales proportionally to the entered footprint; Z independently fits the entered grip height. Rotate ±180° about Z, center/nudge or reset transformations. Replace/remove/reset returns to generated defaults. `wedge-ascii.stl` and `gem-binary.stl` are synthetic examples.

All user-file processing stays in this browser; no input is uploaded or committed to the repository. JSON/named designs contain bounded normalized PNG or verified mesh payloads. Missing image payloads require explicit reattachment. Personal files are never stored in source control.

## Exact geometry / exports

Heavy solid generation and STL validation run in a module Web Worker with locally bundled Manifold WASM. Debounced requests, monotonically increasing IDs and exact state-key matching reject stale results. A last-valid preview may remain visible, but invalid/pending edits disable export; there is no silent last-good export. Preview and binary STL serialize the same current checked meshes. Signature visible in the stage data attribute enables byte comparison. Printable layout separates the two components by 8 mm; each part is also individually downloadable. Everything ZIP contains the two real binary STLs and assembly/printing notes. STL has no colour; swatches affect only preview. No fake 3MF or cloud functions.

## Print / contact calibration

- PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, ≥3 walls; choose consistent infill and seam placement.
- Print runway bed-flat, no supports. **Whole oloid requires removable supports** on its curved underside; trim/sand support scars gently without flattening the contact edges.
- Support-free alternative: split ONLY the roller horizontally at its mid-height in your slicer, print cut faces down, align and bond the halves with a thin cyanoacrylate film (one adhesive application). Do not glue it to the runway. Whole supported roller needs no adhesive/hardware.
- Start with **Pocket Oloid** for a low-material contact/support calibration. Surface friction, support scars, infill and layer lines change the tactile result. There is no fitted bearing; runway margin is travel space, not a universal tolerance.
- Hold level over a table; it is free to roll off. To release/disassemble, lift the roller. No compliant sections or hidden moving joints.
- The contact-pose viewer rotates the final solid and places its lowest vertex on the runway. XY placement is explicitly illustrative, **not a no-slip rolling dynamics simulation**; no physical trajectory is promised.

## Validation

`node validate.mjs` checks defaults, all presets, all 64 corners of the six-parameter domain, every ergonomic silhouette, image relief/engraving and imported-STL outputs. An independent binary STL parser checks size/count, finite coordinates, nonzero faces, unit normals/winding, welded opposite edge incidence (1e-5 mm), connected-component positive volumes and mm bounding boxes, both individual parts and float32-separated print plates. Kernel intersection tests check representative contact poses, complete rotation about Y with three cross-tilts, supported floor contact, lift removal and import keep-out. These are geometry/contact-envelope checks, not proof of real rolling performance.

Browser tests use the **production base path**, real file pickers/downloads, malformed/open/nonmanifold/concave/excessive input, replaced pixels, threshold/depth/scale/transforms, exact export hashes, portable JSON, ZIP contents, undo/redo, themes, live views and touch-enabled 320/390 px screens. See JSON reports and screenshots beside the sources. No physical print, force, balance, wear, fatigue or rolling experiment was performed.

## Provenance

Independent mechanism kernel and tests. Reuses local studio/file-validation infrastructure from earlier Daily App Lab generators. Visual/interaction reference inspected read-only: Keycap Studio (`keycap_generator2` README, styles, App, Viewer, worker, STL/export modules): lavender-grey desk, white panels, coral keycap controls, paired millimeter inputs, imported-base editor, live worker status and export-focused layout. No reference dependencies/history copied wholesale, no reference files changed. All sample art/meshes are synthetic local fixtures; fonts via Fontsource (OFL), Manifold Apache-2.0, Three.js/React/Vite MIT, fflate MIT.
