# Nipkow & Scan

A browser-based parametric **three-part scanning-disc kit card**, not a static STL download. Snip twelve real low runners, bond a bearing upright into a blind plinth socket, and mount a one-turn spiral-aperture wheel on external M3 hardware. Change the actual hole count, radii, diameter, sheet/socket fits, card and breakaway tabs. Image and STL imports engrave real Boolean geometry into the protected plinth apron.

This is an educational hand-turned scanning-disc assembly, **not a complete television or camera**. Physical printing, hardware fit, free rotation, stability and optical performance have not been tested. No motor, sensor or electronics are included. It differs from earlier colour/flicker discs: the actual through-aperture radii form a discrete Archimedean spiral and sweep different radial bands, rather than applying a cosmetic surface pattern.

## Run and publish

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; base `/daily-app2/20261105-6/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. The public combined gallery is published using the parent repository’s root predeploy/deploy flow, not the individual app deploy command.

## Reference-first evidence and attribution

Local files were inspected first: Keycap Studio `public/templates/clicker_template2.stl` (944 triangles, three components; overall 15.20 × 15.20 × 43.10 mm) and Weave `public/templates/diamond-link.stl` (5,940 triangles, one component; 7.98 × 9.24 × 8 mm). Their READMEs explain MX switch interfaces and interlocking fabric links respectively; neither is a suitable planar kit-card joint. The read-only Keycap Studio README, styles, App, Viewer, worker, STL, engine/import, image-tracing and export modules were inspected. No reference project was modified, deployed, or copied wholesale with its dependencies/history.

Selected STL: **White Cat Kit Card**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Its upstream README and license were freshly retrieved in `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`. Attribution applies to the measured design-reference adaptation; no raw source STL or fan-art silhouette is redistributed.

- Actual source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: 30,616 triangles; approximately 179.82 × 178.02 × 3.19 mm. Millimeters are assumed because STL carries no units.
- 27 edge-adjacent components include degenerate/zero-volume pseudo-components; the complete source is **nonmanifold**. This app is an original reconstruction, not a claimed repair/re-export.
- Actual source sections at Z=.10, .215 and 1.59 mm reveal repeated 4.50 × 1.70 mm receiving sockets, a 1.60 mm sheet plane, and .21–.22 mm runner tops. See `reference-analysis.json`, reproducible `reference-analysis.py`, and `evidence/reference-sections.png`.
- Preserved measured design decisions: 1.60 mm default sheet, 1.70 mm default receiving width, enclosing carrier with low removable runners. Default total socket allowance .10 mm is 1.70−1.60 mm; it is a starting value, not universal printer fit.
- Explicit redesigns: socket length changes from measured 4.50 mm to 6 mm + allowance; engagement is 3 mm with a sheet-thickness floor. Runners are strengthened to .4–.6 mm. The spiral disc, stand, blind socket, silhouettes, layout and artwork protection are original. No switch socket or fabric interlock is imposed on this unrelated mechanism.

The visual reference is Keycap Studio: locally bundled Fredoka/Rubik, lavender-grey `#e7e9f1` desk, white panels, dark `#1f2233` ink, coral `#e2557a` accents, raised/pressed tactile buttons, a 374 px left rail, paired numerical/range fields, labelled collapsible sections, a large gradient Three.js viewer, and preview-first stacked phones. Saved dark mode, visible keyboard focus, generous touch controls and reduced-motion CSS are included. Reusable local studio/import infrastructure is retained; the spiral geometry, assembly and checks are new.

## Parameters and actual construction

All physical dimensions are **mm**; angles are degrees; aperture count is integer.

| Parameter | Supported range |
|---|---|
| Card width / height | each 160–220 |
| Disc radius | 28–36 |
| Spiral aperture count | 12–24 |
| Radial scan width | 8–14 |
| Aperture diameter | 1.2–2.0 |
| M3 clearance bore | 3.2–3.8 |
| Disc / upright sheet thickness | 1.6–2.4 |
| Total socket clearance | .10–.30 |
| Part spacing | 3–5 |
| Breakaway tab width / height | .8–1.2 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Artwork XY translation / rotation | ±1.5, ±2 / ±180° |

For aperture i=0…N−1, angle is `2πi/N`, radius is `R−5−scanWidth + scanWidth*i/(N−1)`. The scan pitch is `scanWidth/(N−1)`. Pitch smaller than aperture diameter makes overlapping sampled radial bands; no false independent-resolution claim is made. A minimum 1.2 mm web is enforced between every pair of holes. Some small-radius / dense / large-aperture combinations are invalid and explicitly block export.

The plinth is 64 × 36 × (sheet+3), with round, clipped and scalloped silhouettes. Its socket at Y=8 is `(6+clearance) × (sheet+clearance) × 3` deep. A 6 × 3 tongue enters vertically; the shoulder seats on the plinth. The upright’s axle centre is R+8 above the plinth top, giving 8 mm minimum disc/base separation. The nominal disc/upright face gap is 3 mm; actual washers increase it. Printed bodies are checked through a whole revolution. Assembly/exploded/isolated/card/clean-plate views share printable meshes; exploded shifts and wheel-angle inspection are preview-only.

The card is one genuinely connected solid, not loose pieces beside a decorative frame. Upper row holds plinth and upright; lower row holds the disc. Four accessible runners per part attach outside functional holes and socket. Cutting all twelve runners must yield exactly the carrier plus three unharmed parts. Parts and carrier remain inside the declared X/Y envelope; everything exports bed-flat at Z=0.

## Image, SVG, text and icon conversion

Local picker and drag/drop accept actual PNG/JPEG and simple SVG. Limits: 2 MB; raster headers ≤12 MP and 6,000 pixels per side checked before decoding; normalized portable source ≤500 px longest side. SVG permits simple filled paths/shapes (≤2,000 elements); scripts, external resources, text and effects are rejected. SVG is locally rasterized at 256 px, preserving rendered holes.

Fit/crop, XY crop shifts, threshold, light/dark-background selection and depth create a bounded **20 × 20 sampled height grid**. Thresholded silhouette or continuous grayscale heights become a closed solid, Boolean-subtracted from the apron. This is **2D-to-relief/silhouette conversion, not automatic full 3D reconstruction from one photo**, and is sampled rather than exact vector tracing. A checkerboard shows the actual converted cutout; bright holes keep full original backing. Eight-character text and six searchable bundled icons use the same pipeline. Replace/remove/reset, rotation, placement and physical scale affect STL geometry. Only engraving is supported, keeping the assembly envelope intact; raised/inlay modes are not falsely advertised.

Artwork is confined to a 5.8 mm-radius keep-in disc centred at plinth (−18,−6), away from socket and edges. Maximum .6 mm depth leaves ≥4 mm backing at minimum sheet thickness. Synthetic CC0 sample files exercise all supported formats; no personal files are stored in the repository.

## STL import contract

Both binary and ASCII STL parse locally in the worker. Content, size (2 MB), complexity (1,500 triangles), finite coordinates, .2–250 mm oriented dimensions, 1e−5 mm welded edge incidence, winding, single positive-volume connected component and nonadjacent triangle intersections are checked. Choose Z up, Y up or inverted Z; changing orientation requests reattachment. The source preview shows oriented dimensions; users must explicitly confirm **millimeter units**, because STL has no unit metadata.

The supported integration contract is narrow and explicit: **one closed outward-wound convex broad flat-bottom solid, without XY overhangs**. Concave, hollow, branching, open, nonmanifold, disconnected, self-intersecting and unsupported meshes are rejected with actionable guidance. No repair is claimed. A footprint hull is used only to validate bed contact, **never to replace source triangles or discard concavities silently**.

XY scales proportionally to the footprint; Z independently scales to engraving depth; exact factors are shown. The original triangles are rotated, placed and Boolean-subtracted into the plinth, not simply displayed or unchanged re-exported. Scale/placement/rotation visibly change the final STL. Unit confirmation, protected-zone and backing checks gate export. Mesh payloads round-trip portably in JSON.

## State, performance and privacy

All generation, imports and exports run locally in the browser; no API keys, paid service, CDN generation modules or external upload. Heavy Manifold WASM CSG lives in a bundled Web Worker. Bounded resolution, 100 ms debounce, build IDs, import IDs and exact state-key gating prevent stale-result exports. An old preview is explicitly labelled when invalid; export remains disabled. Worker failure surfaces a recoverable error; reload restarts it.

Three real thumbnail presets, three plinth silhouettes, undo/redo (35 states), six locally named designs, JSON save/open, import replace/remove/reset and explicit missing-payload reattachment errors are supported. JSON is capped at 2 MB and stores bounded normalized PNG or validated mesh payloads—not nonexistent local paths. Fonts and all runtime dependencies are bundled locally. STL preview colours are not encoded in STL; ZIP is not labelled 3MF.

## Printing, calibration and assembly

Download the connected card **or** three clean parts, not both. Binary STL buttons exist per part and for a no-tab plate. Everything ZIP contains four STLs (card + three parts), current portable design JSON and numbered `ASSEMBLY.txt` with current dimensions/fits.

1. Print bed-flat Z=0 in PLA/PETG, .16–.20 mm layers, .4 mm nozzle. Supports not intended. Calibrate tongue/socket and bore on clean parts before the complete card; tolerance depends on printer/material.
2. Snip twelve runners outside clean edges; trim scars and keep apertures/socket clear.
3. Seat the upright tongue vertically until shoulders meet the plinth. Bond square and allow adhesive to cure. No snap/friction retention is guaranteed.
4. Required: one **M3 × 20 mm bolt**, **two M3 nuts**, **three M3 washers (≥6 mm OD)**, **rigid 3 mm-long M3 clearance spacer**, adhesive. Rear-to-front order: bolt → upright → washer → spacer → washer → disc → washer → two nuts. Lock nuts against each other with .3–.6 mm wheel endplay; do not clamp the disc. Verify bolt length against your actual washer/nut stack; use longer hardware if necessary.
5. Turn slowly by the rim. Optional diffuse low-voltage backlit card and external narrow viewing slit are separate materials. No sun/laser/motor demonstration. The preview omits hardware and uses a nominal 3 mm gap; real washers increase separation.
6. Hardware-free alternative: export only the wheel and hold/turn by its rim; this does not claim stand capture. A complete imaging system would require additional optics/light/synchronization not supplied here.

Physical printing, fit, rotation, stiffness, wear, stability and optical performance remain **untested**. Computational manifold/collision/assembly checks are not a physical print test.

## Dependencies and reproducible validation

React, Vite, Three.js/OrbitControls, Manifold WASM (Apache-2.0), fflate, gh-pages; local Fontsource Fredoka/Rubik (SIL OFL). Playwright is test-only. Exact versions are in package-lock.json.

`validate.mjs` independently reads actual float32 binary STL: byte length, finite/nondegenerate triangles, unit stored normals, matching outward winding, 1e−5 mm welded edge incidence, opposite edge directions, positive volume **for each component**, expected component counts, dimensions and Z=0. It checks defaults/presets, limits/corners, imported-image and imported-STL variants. Separate Manifold checks cover snip connectivity, no part damage/fragments, no packing overlap, declared bounds, support-free bed footprints, socket floor, every optical aperture/bore, backing, vertical/axial insertion and 24 complete-revolution positions. Unsafe parameter combinations must fail rather than export.

Browser scripts use real file pickers/downloads on the production build under its real base prefix. They compare downloaded bytes to the UI fingerprint and independently regenerate saved JSON in Node, then run mesh and assembly checks. PNG/JPEG/ASCII/binary imports, pixel/threshold/depth/transform changes, malformed/unsupported files, empty art, replace/remove/reset, presets, icons/text/SVG holes, ZIP contents, portable payloads, undo/redo, worker failure, themes, focus, collapsible sections, touch orbit/pinch and 320/390 px layout are exercised. Exact reports and screenshots accompany `VALIDATION.md`.
