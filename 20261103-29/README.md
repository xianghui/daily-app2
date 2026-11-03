# Residue & Scatter

A browser-local **13-part flat-pack kit-card generator** for a five-well quadratic-residue acoustic scale model. Snip the actual connected carrier, seat six equal-height dividers and five floors between two socketed cheeks, and bond the joints. All five floors are identical; their **socket heights**, not cosmetic textures, produce depths `3 + [0,1,4,4,1] × unit` mm. This construction differs from earlier Fresnel-zone panels, resonators and moving linkage kits.

**Physical printing, fit, adhesive strength and acoustic performance have not been tested.** This small, leaky educational model is not rated room treatment, a certified diffuser or an absorber. No sound-field simulation is provided.

## Run / build

```sh
npm install
npm run dev
npm test
node import-extremes.mjs
npm run predeploy
```

React + Vite; Three.js/OrbitControls; Manifold WASM CSG in a Web Worker; fflate; bundled Fredoka/Rubik fonts (SIL OFL); gh-pages. Playwright is test-only. Runtime/font license notices are included in `public/licenses/` and deployed with the app. No CDN, paid service, API key or file-upload service. All generation/export dependencies are local bundles. `vite.config.js` uses `/daily-app2/20261103-29/`. App scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; public monorepo deployment uses the ROOT `deploy/` flow.

## Reference first: real mesh, not a listing image

Read-only local candidates were inspected first, including Keycap Studio's three-part switch template and Weave's diamond link. Their structures are inappropriate for a flat sheet/socket carrier. Mesh dimensions, hashes and rejection reasons appear in [reference-measurements.json](reference-measurements.json).

The suitable reference is **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. The upstream README/license were retrieved and the actual binary STL freshly downloaded and parsed this run. Attribution/license text is retained locally. No endorsement is implied.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- 30,616 triangles; bounds about **179.82 × 178.02 × 3.19 mm**. STL has no unit metadata; millimeters are assumed from the source sheet dimensions.
- **27 edge-adjacent components**, including degenerate/tiny duplicate artifacts; reference is **not globally watertight**. It is measured evidence, not an automatically repaired export.
- Measured sheet planes **0 and 1.60 mm**; actual section loops **4.50 × 1.700012 mm**; low runner tops around **0.21–0.22 mm**. Sections at Z=.10/.50/1.59 mm were plotted and visually inspected in [evidence/reference-sections.png](evidence/reference-sections.png).
- Reconstruction preserves the **4.50 mm tongue long dimension** and default **1.60 mm sheet**, but deliberately proposes **.10–.30 mm total socket clearance on both axes**: default **4.65 × 1.75 mm**. Tongues extend through one sheet thickness and seat at shoulders. Not claimed identical to the source's fit.
- A new four-shelf carrier holds **13 original parts with 52 horizontal bed-contact runners**; proposed runner thickness .4–.6 mm is greater than measured source runner tops. No cat geometry or raw source STL is bundled or published.
- New geometry: 2 cheeks, 6 divider walls and 5 stepped floor placements. Each cheek has twelve vertical divider sockets and five horizontal floor sockets. The protected front-cheek apron is a redesign, not source geometry.

[reference-analysis.json](reference-analysis.json) maps measurements to implemented parameters and distinguishes proposed fits. Reproduce measurement with `reference-measure.py /path/to/downloaded.stl` in an environment with trimesh, numpy and matplotlib.

The read-only **keycap_generator2** README, styles, App, Viewer, worker, import tracing/STL and export modules supplied concrete interaction patterns: 374-px left rail, sticky compact header, labelled collapsible sections, paired sliders/mm inputs, tactile selected buttons, source/cutout previews, bounded local import editor, worker/current-result export gating, saved theme and preview-first phone layout. No reference project history/dependencies were copied wholesale. Shared Daily App Lab import/serialization/editor infrastructure is adapted; this app's well geometry, socket arrangement and assembly checks are new.

## Supported parameters (all dimensions mm)

| Parameter | Range / default |
| --- | --- |
| Card width / height | 220–280 / 260–320; default 240 × 280 |
| Clear well width / span | 8–12 / 24–40; default 10 / 30 |
| Residue depth unit | 3–6; default 4 |
| Sheet | 1.6–2.4; default 1.6 |
| Part spacing | 3–5; default 3.5 |
| Runner width / thickness | .8–1.2 / .4–.6; default 1 / .6 |
| Socket TOTAL clearance | .10–.30; default .15 |
| Front-cheek corner cuts | soft 1.5, deep chamfer 4, octagonal 3 |

Three actual mesh-thumbnail presets, bounded variations, undo/redo, six local named designs and portable JSON save/open are included. Imported assets are serialized in bounded payloads; missing image payloads require reattachment, never imaginary restoration. Themes persist separately. Geometry colors are preview-only, never implied to be stored in STL.

## Image / SVG / text personalization

Desktop/phone file picker and desktop drop zone support actual PNG/JPEG and simple SVG. PNG/JPEG: **2 MB**, **12 megapixels**, **6,000 px side** limits checked from content before decoding. Source normalizes to ≤500 px and is sampled to a **20 × 20 luminance grid**, with contain/cover, crop shifts ±25%, light/dark background, threshold 1–254 or grayscale, and .4–.6 mm depth. A closed heightfield is mirrored through Z and **Boolean-subtracted** from the front cheek's upward print face. White/transparent holes stay unengraved with continuous backing; the checkerboard shows removed background. This is sampled **2D-to-relief**, not automatic 3D reconstruction or exact vector tracing. Fine features below grid resolution may disappear.

Simple SVG supports local filled paths/shapes only, no scripts, external references, filters, text or effects, at most 2,000 elements; it rasterizes locally to 256 px, then uses the same documented grid method. Text (up to 8 characters) and six searchable bundled SVG icons use this same geometry path. Replace/remove/reset and original/final cutout previews are provided.

Artwork footprint 4–7 mm, rotation ±180°, X ±1.5 mm / Y ±2 mm offsets, with a **6.5 mm keep-in radius centered at (0,10) on the front cheek**. It is below all functional sockets, leaves **≥1 mm backing**, and cannot reach tongue interfaces. Raised marks are deliberately unsupported: recess-only protects the sheet envelope and well geometry. Impossible placements and empty images block export.

## STL integration

Actual **ASCII and binary STL**: 2 MB, ≤1,500 triangles, each dimension .2–250 mm, finite coordinates within ±10,000 mm. Weld tolerance 1e−5 mm; reject degenerate faces, open/nonmanifold/inconsistently wound meshes, disconnected shells, nonpositive volume and self-intersections. Accepted contract is deliberately limited to **one closed convex broad-flat-bottom solid** (bottom footprint ≥25% of XY bounds), with no XY overhang beyond the bottom. Concave, hollow, branched or unsupported geometry is explicitly rejected; never substituted with a convex hull or silently repaired. Hull calculations only validate contact, not replace source geometry.

Choose Z/Y/−Z up before attachment; source dimensions are displayed and **explicit millimeter confirmation is required** because STL stores no units. XY scales proportionally into the 4–7 mm footprint; Z independently scales into .4–.6 mm engraving depth. Scale factors are displayed. Rotation/placement/center/reset controls alter the **actual input mesh**, which is Boolean-subtracted from the protected cheek apron. Narrow features under 1.2 mm XY are rejected. Both source 3D and final model previews are available. Axis changes request reattachment. Bounded actual mesh arrays travel in JSON/named saves and are revalidated on restoration.

User files never leave the browser and are not repository assets. Only synthetic sample PNG/JPEG/SVG and ASCII/binary STL fixtures are bundled; their local authorship is documented in `public/samples/README.txt`.

## Export / assembly / acoustics

Connected card, clean de-tabbed plate, exact assembled and illustrative exploded views, isolated parts, cheek ghost, orbit/zoom/top/front/fit. Every export uses the exact current checked worker result; last-good preview may remain visible after invalid edits, **but all exports are blocked until current inputs are valid**. Debouncing, request IDs and current-state keys reject stale results. Worker failures give a reload error.

Prominent binary STL exports for card, each of 13 parts, clean plate, and an Everything ZIP containing **14 STL files** (connected card + 13 clean parts), bounded design JSON and numbered assembly instructions. No fake 3MF. Card and clean parts all begin at bed Z=0. The declared card envelope is respected. Default card needs 240 × 280 mm bed area; export individual parts on smaller printers.

1. Print flat at 100% mm scale in PLA/PETG, .4 mm nozzle, .16–.20 mm layers, at least 3 walls. No supports intended; inspect your slicer.
2. Snip **52 runners**, about 1.8 mm outside part edges; smooth stubs without cutting functional tongues or sockets. Discard carrier.
3. Print cheek + divider as a fit pair first. Adjust TOTAL socket clearance for your printer/material; no universal fit claim.
4. Seat six divider front ends in the front cheek's twelve vertical sockets; two tongues per wall, centers at Z=23 mm and 6 mm below rim.
5. Seat five floor front tongues in the horizontal slots. Floors are identical; sockets determine their heights. Depths viewed left-to-right from the engraved front: **3, 3+u, 3+4u, 3+4u, 3+u mm**.
6. Bring rear cheek straight along span onto **all seventeen rear tongues**. Seat every shoulder, check square and parallel, then bond joints using plastic-compatible adhesive; cure fully. No snap-lock or hardware is claimed. Keep five wells open.

The relative depth sequence is `n² mod 5`. Added common 3 mm depth preserves relative phase path differences. At assumed sound speed 343 m/s, nominal QRD relation is **f = 343000/(2 × 5 × unit_mm) Hz**: 8.575 kHz at default, 5.717–11.433 kHz across supported units. Finite width/span, thin plastic, side gaps/leakage, reflections and fabrication affect actual scattering. This educational construction is **not validated acoustic treatment**. No fatigue, strength, stability, absorption or diffusion result is claimed. Small parts are not for children.

## Validation evidence

See [VALIDATION.md](VALIDATION.md), reproducible Node/Playwright scripts, JSON reports and screenshots. Independent binary-STL checks verify exact byte count, finite nondegenerate faces, normalized outward stored normals, opposite-directed two-face welded edges, positive volume **for every connected component** and expected millimeter dimensions. Each part, card and float32-translated clean plate are checked separately. CSG uses .001 mm modeling tolerance/simplification; no bad faces are merely deleted.

Assembly checks are separate from mesh validity: one connected card, 52 removable cuts yielding carrier + 13 uninjured parts, no flat/assembled overlap, bed footprint, card bounds, 34 aligned tongue/socket centers, exact five residue depths, .2-mm floor side gaps, protected full backing, and collision-free rear-cheek approach plus individual front insertions. Computational geometry is not physical printing or acoustic testing.
