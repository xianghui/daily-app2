# Chiral Hush — local twist-and-lift fidget studio

A three-strut **chiral compliant prism**: hold the lower disc and gently unwind the upper disc toward the lower anchors, allowing a small axial rise, then guide it back. Three same-handed inclined TPU struts bend together. This differs from the collection's continuous helical compression spring, diamond squeeze lattice, planar torsion spring and living hinge: the intended interaction is small coupled twist/axial motion between two discs.

**Experimental material behavior. No physical print, force, return, fatigue or durability test has been performed.** Digital geometry and idealized mechanism envelopes do not prove elastic response. Start at 2°; limit exploratory travel to ±4°, never a full rotation or forced squeeze. Stop on whitening, cracks, layer separation or poor return.

Both current and archived galleries were checked; the archived collection is read-only. UX reference: https://vaseverse.org/ — model-first editor, grouped controls, real presets, variations and accessible export. Original branding, geometry, text and local implementation; no reference-site assets or source copied.

## Run and build

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5270
npm run predeploy
npm test
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

Vite base: `/daily-app2/20261023-18/`. Individual scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`. The public collection is published through the **root** predeploy/deploy flow, not an individual app deploy.

Local bundled dependencies: React/React DOM, Three.js, manifold-3d WASM, Vite/React plugin and gh-pages. Playwright is development-only. Mesh generation/validation and STL parsing run in a worker; no remote APIs, CDN imports, accounts, keys or paid services. `gh-pages` 6.1.1 follows npm's recommended resolution of the 6.3.x transitive braces advisory. App npm audit reports zero vulnerabilities; installation still reports deprecated build-tool dependencies (glob/inflight). Build reports a large Three.js bundle and Node-module externalization; actual production browser paths are separately tested.

## Parameters

All coordinates and lengths are **millimeters**. Angles are explicitly degrees.

| Parameter | Range | Default |
| --- | --- | --- |
| Disc diameter | 32–42 | 38 |
| Free strut rise (disc face to face) | 18–30 | 24 |
| Strut diameter | 1.2–2 | 1.6 |
| Helical chord offset | 6–12 | 9 |
| Anchor edge inset | 3–5 | 4 |
| Thumb dimple depth | 0–0.6 | 0.3 |

Two 4 mm rigid discs. Anchor radius `R = diameter/2 − inset`; angular phase `2 asin(chord/(2R))`. Three capsule struts at 120° intervals connect Z=3.5 to Z=rise+4.5. Each centerline endpoint embeds 0.5 mm inside a disc. Sphere-hull capsules have rounded ends and are boolean-unioned into the discs, not exported as overlapping shells. Root edge material is at least 2 mm. The upper disc's center well is 0.8 mm deep, leaving 3.2 mm rigid backing. Dimples are 18 real solid subtractions outside the import zone.

Presets have actual generated model thumbnails: **Feather Prism** (small/tall/slender), **Quiet Twist** (balanced), **Deep Helix** (wide/short/thicker and larger phase). Variations stay in validated parameter ranges. Reset, real numeric/slider edits, undo/redo and bounded JSON save/open affect geometry. Colours are preview-only: **STL contains geometry, not selected colours**, and has no unit metadata.

## Mechanism and printing

Three skew struts provide distributed bending compliance; there is no sliding bearing, free spinner, loose captive body or assembly joint. Imported detail stays in the upper rigid disc and at least 3.5 mm radially from the struts. Minimum structural feature is the 1.2 mm strut, not the decorative relief. There are no running clearances or universal tolerance claims.

- **TPU 95A only** as a starting material for flexing. PLA/PETG may fracture and are not recommended for this interaction.
- Print lower disc flat at Z=0. **Removable supports required under the upper disc**, and wherever the slicer requires under inclined struts. This is not support-free or print-in-place with loose moving parts.
- 0.4 mm nozzle, 0.15–0.2 mm layers, solid struts; inspect all extrusion paths. TPU support removal is difficult. Use carefully tuned low-density/custom supports; leave all three side windows accessible. No hardware is required.
- Remove supports through the side windows without nicking roots. If safe removal is not feasible, do not print this design. No assembly/release operation beyond support removal.
- **Feather Prism is the full-size calibration trial** for material, layer bonding and support access. Begin at 2° with free axial movement. Verify return and inspect roots before increasing toward ±4°. These are exploratory limits, not validated elastic travel or allowable strain.
- Print force, fatigue, local stress, support quality and durability depend on printer/material and need physical testing. No invented print-time estimate.

## Image import: actual PNG/JPEG to relief

Picker on desktop/phone; drag/drop on supporting browsers. Synthetic `mark.png` and `waves.jpg` sample files are provided as buttons and downloads. No personal files are bundled; original synthetic art needs no outside attribution.

Before decoding: actual PNG/JPEG header matching extension; file 16 bytes–2 MB, ≤12 megapixels and ≤6000 px each side. Portable normalized image ≤500 px side, ≤250,000 pixels. Transparent pixels composite onto white. Source preview and exact conversion-grid preview are shown.

Conversion samples **20 × 20 luminance values**, `0.2126R + 0.7152G + 0.0722B`. Threshold mode raises samples below threshold (1–254); grayscale uses `depth × (1 − luminance/255)`. Depth 0.4–3 mm. Samples triangulate into interpolated surface heights over continuous 0.4 mm backing; sides/bottom close the solid. Entirely white/empty output is rejected. Fit entire image or cover/crop square with ±25% pan. This is **2D-to-relief/silhouette conversion, not reconstruction of a complete 3D object from one photograph**.

Footprint 4–7 mm, rotation about Z ±180°, offsets X ±1.5 and Y ±2 mm. Backing embeds 0.15 mm into the upper well floor and is CSG-unioned to the thumb disc. Every transformed vertex must stay in the radius-6.5 mm safe zone. Pixels, threshold, depth, crop, footprint and placement change the exported mesh. Invalid placement blocks export with recoverable feedback; center/reset, replace/remove and built-in defaults are real actions.

## STL import: binary and ASCII to integrated thumb grip

Synthetic `wedge-ascii.stl` and `gem-binary.stl` buttons/downloads. Parse ≤2 MB / ≤1500 triangles, each source axis 0.2–250 mm. Explicit **millimeter confirmation is required** because STL has no unit metadata. Source dimensions, format and triangle count plus an interactive source model preview are provided.

Supported subset is intentionally bounded: **one connected convex, closed, consistently outward-wound solid with broad flat Z-down base covering ≥25% of XY bounding area and enclosing the full XY projection**. Validation checks equal-vertex welded topology, outward volume, finite/nondegenerate faces, triangle-pair intersections, convexity and base footprint. Open/nonmanifold, inward, disconnected, concave/hollow, overhanging, self-intersecting, truncated and excessive meshes are rejected with guidance. No repair is claimed.

Proportional XY fit to footprint 4–7 mm; independently fit Z height 0.6–5 mm. Fitted XY span must remain ≥1.2 mm. Z rotation, center/reset and bounded XY offsets are offered; tilt is unsupported because it violates the bed-flat base contract. The transformed mesh must remain in the safe zone and unite into exactly one solid with the disc. The exported grip is not an unchanged re-export or merely a displayed source mesh.

## Editor, privacy and export

Warm ivory/clay studio: large live matte 3D model, soft lighting and contact shadows, 10 mm grid, slim header, compact right rail, Shape/Mechanism/Surface/Import/Print tabs. Orbit, zoom buttons, touch pinch/orbit, reset/fit, exact final X/Y/Z mm bounds and selected body state. Phones have a generous preview, collapsible tabbed controls and a fixed reachable primary Download STL area. One connected body: full and named-body binary STL exports; a separate-parts ZIP is inapplicable. Object and print layout are explicitly labeled **undeformed**, identical one-body coordinates, not a fabricated motion simulation.

Preview and export use exactly the same final mesh and parameters. Every edit runs CSG plus independent final mesh preflight in the worker. Export is disabled during work, invalid settings/imports, unconfirmed source units or stale model state. No page reload is needed.

All user processing is local in the browser: **no uploads, remote conversion, cloud persistence or personal files in this repository**. Saving JSON intentionally embeds bounded normalized PNG data or verified STL vertices so imports reopen portably. STL is revalidated on reopen; missing image payload explicitly requests original-file reattachment. JSON limit 2 MB. Undo/redo retains up to 35 local modeling snapshots in memory.

## Digital validation

`npm test` covers **78 parameter cases**: defaults, min/max, every 64 parameter-box corner, all three presets and eight seeded variations. **24 import-derived cases** include threshold/grayscale fields and both STL formats across six parameter/preset cases. Every exported STL is independently parsed for nonempty finite coordinates, normalized normals, nondegenerate faces, exact millimeter bounds, bed-flat min Z, positive volume per component, outward neighbor winding, and welded-edge incidence exactly two. One connected solid is enforced.

Mechanism checks verify root/strut material with CSG probes, open center/windows, disc and strut separation, radial root edge material and source isolation. Idealized constant-length straight-strut envelopes at −4/−2/0/+2/+4° estimate axial coupling. Conservative segment-distance bounds check nonintersecting strut envelopes and disc separation. **These envelopes are not deformed-beam calculations, collision proof for arbitrary real bending, FEA or physical testing.** Return force/root strain/fatigue remain unverified.

Real browser tests select PNG/JPEG and ASCII/binary STL files, download actual STL and independently validate it, compare pixels/threshold/depth/scale/rotation/translation against default geometry, verify exact preview/export signatures and UI dimensions, malformed/unsupported/excessive/open/nonmanifold/concave rejection, empty relief, transforms, reset/remove/replace, presets/variations, undo/redo, all portable source save/open round trips, drag/drop and colour neutrality. Phone tests at 320/390 px exercise touch orbit/pinch, file picker/import/export, tab labels, collapse/expand and always-reachable export. Production assets and the gallery are tested separately before publication.
