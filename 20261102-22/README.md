# Lune & Proof

A four-part **flat-pack kit-card STL generator**. Clip sixteen real runners and stand three framed, cut-through mathematical apertures in a socketed signature base. Hippocrates’ two lunes have the combined area of the associated right triangle. They are shown at the same physical scale. The surrounding plaques are structural, **not area-equivalent dissection tiles**.

## Reference first

Local candidates were inspected before selecting the design: Keycap Studio’s clicker template is a switch interface, and Weave’s diamond link is an 8 mm interlocking link, neither a flat-sheet carrier. Candidate hashes/dimensions/components and rejection reasons are in `reference-analysis.json`. Keycap Studio README, CSS, App, Viewer, worker, export, image tracing and STL modules were read as a **read-only visual/interaction reference**: 374 px scrollable left studio rail, preview-first phone layout, tactile pink-selected controls, locally bundled rounded fonts, current-result worker gating and checkerboard cutout.

**Actual mesh source:** Mike Kasberg, [White Cat Kit Card / Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), CC BY 4.0. The downloaded binary STL SHA-256 is `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Actual bounds are about 179.820 × 178.020 × 3.190 mm. STL has no unit metadata: mm is an assumption corroborated by its 1.600 mm sheet and 4.500 × 1.700 mm slots. Read-only parsing found 30,616 triangles and 27 edge-adjacent components, including degenerate source artifacts: **the source is a design reference, not an automatically repaired export**. `reference-measure.py`, measurements and Z=.1/.5/1.59 mm cross-section evidence record inspection. Source README/license are archived; the raw mesh and spacecraft artwork are not redistributed.

New original CSG reconstruction retains the **1.60 mm default sheet and 4.50 mm tongues**. Sockets are deliberately redesigned to sheet + 0.10–0.35 mm total clearance and tongue + the same gap. Source low runners become stronger .4–.6 mm **bed-aligned** removable tabs. Lune/triangle apertures, ergonomic frames, packing, signature engraving and studio code are new or adapted from this monorepo’s shared maker-studio infrastructure. No reference code, history or dependency tree was copied wholesale.

## Local development / publishing

```
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fredoka/Rubik via Fontsource. Runtime dependencies, fonts, WASM and fixtures are bundled locally; no CDN, API key, backend or uploads. App base `/daily-app2/20261102-22/`. Per-app deploy is `gh-pages -d dist`; public monorepo publication must use the **root** predeploy/deploy flow.

## Real geometry and bounds (millimeters)

- Triangle legs A/B 24–36; frame rim 4–7; panel separation 5–10. Three silhouettes: soft, square and clipped corners. Three working presets generate live model thumbnails.
- Sheet 1.6–2.4; total socket clearance .10–.35. Six 4.50 mm tongue joints require adhesive. No snap/friction retention claim. Print a panel/base fit first; tolerance depends on material, printer and slicer.
- Card 185–220 × 140–180; part spacing 3–5; runner width .8–1.2, thickness .4–.6. Unsupported combinations are blocked, never silently repacked outside the envelope.
- Manifold cross-sections compute the leg disks minus the hypotenuse circumdisk, then Boolean-subtract these regions through the respective panels. The triangle is an exact polygon. Circles use 256 segments. The UI reports actual polygonal areas and their sum error; a >.1% equality error blocks generation. Negative apertures protect theoretical tips with a continuous frame.
- Same solids drive connected-card, de-tabbed plate, assembled, exploded and isolated views. Assembled transforms are deterministic sheet/tongue seating, not a physics simulation. See-through base and preview colors do not affect STL.
- New geometry is generated in a debounced Web Worker with request IDs and current-state keys. Invalid/loading/stale states disable **all** exports; there is no silent last-good download. Every part is checked for closed edges, winding, finite coordinates, nondegeneracy and positive volume in the worker.

## Both import workflows

All files stay on the device. Picker works on phones and desktops; drag/drop supported. Synthetic fixtures are linked and bundled under `public/samples/` (our generated test assets, not personal files).

**PNG/JPEG/simple SVG**: <=2 MB; raster images <=12 MP, <=6,000 px per side, normalized to <=500 px for portable design payloads. SVG accepts only simple self-contained paths/shapes, no active or external resources, <=2,000 elements. It is rasterized locally. Images are sampled to a **20×20 grayscale surface**, with threshold or grayscale height, light/dark background, crop/contain/cover, pan and checkerboard conversion preview. Transparent/bright areas remain unengraved, including holes. This is bounded **2D-to-relief**, not exact contour tracing or full 3D photo reconstruction. Height-field patches form one closed tool and Manifold subtracts it from the base; not intersecting visual shells. Relief depth .4–.6 leaves >=1 mm backing. Text (up to eight characters) and six searchable bundled SVG icons use the same working geometry path. Engraving only is deliberate; raised art would change the declared uniform sheet envelope.

**ASCII/binary STL**: <=2 MB / 1,500 triangles; source extents .2–250 mm per axis. Source dimensions, format, triangle count and preview appear. Explicit mm confirmation required (STL carries no units). Select Z/Y/−Z up before attaching. The strict parser checks finite coordinates, dimensions, degenerate faces, edge incidence/opposite winding, single connected positive-volume solid, triangle intersections, convexity and broad support-free flat-bottom contact. Open, concave, nonmanifold, hollow, branched, self-intersecting and unsupported overhanging meshes are **rejected with guidance**, not hull-converted or claimed repaired. This documented narrow integration contract is intentional. The actual accepted mesh is scaled and used as a Boolean recess tool in the protected base apron, not merely displayed or unchanged re-exported. XY footprint 4–7, depth .4–.6, Z rotation ±180°, offsets X±1.5/Y±2; keep-in radius 6.5 prevents socket interference. Scale factors are displayed, reset/replace/remove work. Changing axis requests reattachment explicitly.

JSON save/open and six local named designs carry bounded image/mesh payloads. Missing payloads request reattachment. Imported meshes are revalidated on JSON restore; undo/redo snapshots retain real payloads. Local storage errors offer portable JSON. Personal input files are not saved in this repository.

## Export / making

Prominent current-result binary STL, per-part buttons and Everything ZIP. ZIP includes connected-card, signature-body and three panels plus numbered `ASSEMBLY.txt`. De-tabbed plate contains four **separate** printable parts. No fake 3MF/color promises.

Print flat at 100% scale, PLA/PETG, .4 mm nozzle, .16–.20 mm layers and three walls. Supports/hardware not intended; snips, file and compatible adhesive required. Clip runners 1.5 mm outside clean edges, file stubs, identify 1/2/3 dot panels, lower their paired tongues into left/middle/right sockets, and bond all six joints with shoulders seated. Do not load the kit. Small-part/snipping eye protection caution.

## Validation scope

`node validate.mjs` independently parses float32 STL bytes: length/count, finite coordinates, nondegenerate normals, outward winding, welded 1e-5 mm two-face edges, per-component positive volume, expected component counts and mm bounds. Defaults/presets, all field extrema, all silhouettes and image/STL-derived solids use these checks. Separate kernel checks cover six open sockets, collision-free seated panels and vertical insertion paths, tab connectivity/release with clean parts preserved, plate nonintersection, card envelope, upper-section bed support and actual aperture areas. Ring probes verify bright image holes leave backing.

Browser scripts exercise actual PNG/JPEG/ASCII/binary picker uploads, image settings and mesh transform changes, actual STL/ZIP downloads, preview/export signature equality with Node regeneration, rejection recovery, all presets, icons/text/SVG, JSON/local design round trips, worker failure and stale edits, theme/focus, layout, phone uploads and touch orbit/pinch. Reports/evidence are written only after the respective checks pass. `VALIDATION.md` summarizes executed checks.

**No physical print, adhesive strength, real fit, fatigue or optical accuracy testing has been performed.** Computational checks are not a claim of physical validation.
