# Dimple Dwell

A local React + Vite parametric STL studio for a hardware-free circular diaphragm thumb-press fidget. A curved, full-circumference membrane flexes under a gentle center press, unlike a bending beam, bellows or rotating joint. Its open underside allows removable supports. The rigid palm landing accepts actual PNG/JPEG relief or an integrated STL grip. No force, audible click, bistability or physical performance is guaranteed.

## Run / build

`npm install`, `npm run dev`, `npm run predeploy`. Per-app `deploy` uses gh-pages, but the public monorepo MUST be published from the parent with its root `npm run predeploy` / `npm run deploy`. Base: `/daily-app2/20261023-10/`.

## Shape and print ranges (millimeters)

- Membrane diameter: 24–36; rise: 3–6.
- Vertical membrane thickness: 1.2–1.6. Conservative normal thickness ≥0.848 mm at the maximum allowed slope.
- Rigid rim width: 3–5; rim height: 3.2–4.8.
- Landing dimple depth: 0–0.6; residual landing floor ≥2.4.
- Preview dimensions are computed from the final geometry. All linear dimensions are explicitly mm; rotation is degrees. STL has no unit metadata.

Three real geometry presets: Low Tide (broad/shallow), Round Rest (balanced), High Note (narrow/tall). Variations are bounded by these validated ranges. Controls regenerate a single connected closed solid using Manifold WASM CSG in a worker. Camera orbit/pinch, zoom/fit, preview colours, selection, model/print layout, undo/redo, JSON save/open and touch-accessible imports/export are supported. The object preview is static undeformed geometry, not an invented motion simulation. Print layout translates XY only; Z=0 remains bed-facing. Preview and exports use the same final mesh. STL does not contain preview colours.

## Image → printable geometry

Choose or drop PNG, JPG or JPEG; ≤2 MB, ≤12 megapixels, ≤6,000 pixels per side. Headers are checked before bitmap decode. The source is bounded to a 500-pixel preview. Fit entire image or fill/crop a square; shift X/Y ±25%. White composites transparent areas. Resample to a 20×20 grid, luminance `0.2126R + 0.7152G + 0.0722B`.

Threshold mode raises pixels darker than threshold (1–254); grayscale mode maps darkness to height. Depth 0.4–3 mm. Grid cells form a triangulated continuous height-field with a 0.4 mm backing, closed boundary and bottom, sunk 0.15 mm into the landing floor and truly CSG-unioned. This is **2D-to-relief**, not full 3D reconstruction from a photo. Empty silhouettes/reliefs are rejected. Source and exact conversion previews are visible. Scale footprint 4–7 mm; rotate Z ±180°; place X ±1.5, Y ±2 mm inside a 6.5 mm circular safe zone. Unsafe combinations block export. Changing image pixels, threshold, relief depth, crop or placement changes exported mesh geometry.

## STL → integrated grip

Both ASCII and binary STL are parsed locally in a worker. Limits: 2 MB, 1,500 triangles, one connected convex outward-wound watertight solid, 0.2–250 mm on each axis, finite bounded coordinates. Welded edges must have exactly two oppositely directed incident faces, no degeneracy or triangle intersections; positive enclosed volume required. Concave meshes, disconnected shells, open/nonmanifold meshes, inverted normals, cavities and overhanging XY projections are rejected, not silently repaired. Use a low-poly convex solid with a broad flat bottom facing down Z (at least 25% of footprint). This bounded integration contract deliberately does not accept arbitrary sculpture meshes.

Source preview shows dimensions, triangle count and file format. Explicit millimeter confirmation is required. XY is proportionally fitted to 4–7 mm; Z is independently fitted to 0.6–5 mm; smallest fitted XY span must be ≥1.2 mm. Rotate around Z and translate within the same protected landing zone. Bottom embeds 0.15 mm into the landing floor. CSG union must produce **one** connected valid solid; no interpenetrating shells masquerade as a union. Imports cannot reach the membrane or change its thickness. Replace/remove/reset returns to a built-in oval grip. Full orientation changes should be made in a mesh editor before import; arbitrary tilt is intentionally unsupported.

## Files and privacy

All personal files are processed in the browser, never uploaded or saved into this repository. There is no API, key, CDN, analytics, cloud storage or runtime remote dependency. Dependencies/WASM bundle locally. Four bundled fixtures in `public/samples` are original synthetic artwork/solids; see their attribution note. Saving JSON explicitly includes bounded image preview data/pixels or verified STL vertex payloads, so reopening does not pretend an unavailable source was restored. Saved payloads are revalidated; invalid/missing images require reattachment. Open JSON is bounded to 2 MB. Undo/redo retains up to 35 modeling snapshots locally in memory.

## Export / checks

The primary Download STL button stays reachable on desktop and fixed on narrow phones. Binary STL exports the full object or individual named part (there is only one required solid, so ZIP/assembly-part packaging is not needed). Worker preflight verifies finite coordinates, nonzero triangle areas, welded closed-manifold edge incidence, opposite neighboring winding, positive volume and one connected solid on every generation. Export is disabled during stale/pending generation, invalid import or invalid parameters. Dimensions and geometry fingerprint derive from this exact exported geometry.

`npm test` runs independent binary STL parse checks for defaults, 64 parameter corners, three presets and eight variations, plus PNG-like threshold/grayscale and ASCII/binary STL integration cases. It verifies each component, bounds, volume, winding, normal thickness, import isolation, actual empty underside access and actual wall sample containment in final CSG. A conservative initial 0–0.5 mm press envelope checks bed clearance; this is **not** FEA, elastic analysis or a claim that inversion was tested. Browser regression scripts exercise real file pickers and downloads, changed geometry fingerprints, malformed inputs, transform resets, presets/variations, portable JSON round trips, undo/redo, drag/drop, phone orbit/pinch, sheet tabs and export accessibility. Results are written to validation JSON files.

## Printing and use — not physically tested

TPU 95A is the starting material, not rigid PLA. Print rim/landing flat at Z=0. **Enable removable supports inside the dome from the bed.** The crown is not support-free; the open underside exposes support for removal. TPU support removal can be difficult, so print Low Tide as a full-size support/material calibration first. Start at 0.16 mm layers, 0.4 mm nozzle, verify ≥2 extrusion paths through the sloped membrane. Tune extrusion and support interface gap on your printer/material; no universal fit/force settings are claimed. Remove all support without tearing the shell. No hardware, assembly, captive interfaces or running clearance are involved.

Hold the rigid rim or palm landing. Begin with less than 0.5 mm center displacement and release. Do not force a snap-through/inversion or flatten the dome. Stop if whitening, cracks, delamination or residual deformation appears. This generator has passed digital geometry checks only: **no physical print, fatigue test or force measurement has been performed**.

## Dependencies / original design

React/React DOM, Vite/plugin-react, Three.js with OrbitControls, manifold-3d WASM, gh-pages; Playwright is test-only. Vaseverse was consulted as a model-first UX reference; no source code, branding, assets or copy was copied. Existing local import/preview utilities were adapted for a new circumferential diaphragm mechanism.
