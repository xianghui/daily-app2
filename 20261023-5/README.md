# Contour Twice — Möbius Fidget Studio

A local React + Vite editor for a rigid, half-twisted thumb-tracing loop. Follow the broad face: one circuit reaches the other face, two circuits return home. Unlike a roller, spring or ordinary worry stone, the interaction is a continuous face-flipping path. It does **not** simulate or require flexing the band.

## Use

`npm install`, `npm run dev`; `npm test` runs numerical geometry tests. `npm run predeploy` builds the individual app. Its configured base is `/daily-app2/20261023-5/`. Publish the complete collection through the parent repository's root predeploy/deploy flow, not the individual deploy script.

## Geometry and parameters (all lengths in millimeters)

- Circuit centerline diameter: 44–64 mm; band width: 8–12 mm.
- Band thickness: 2.4–4 mm; landing rise: 0.8–2 mm; landing radius: 8–10 mm.
- Landing dimple depth: 0–0.6 mm. Dimples are subtractive geometry, not visual textures.
- A 192-section rectangular sweep rotates its cross-section by 180 degrees. The last section identifies opposite corners at the seam. Positive radial exclusion prevents swept sections from self-contacting. The widened landing is boolean-unioned with the band, then its source well is subtracted. The well is 0.8 mm deep, above a solid pedestal. No overlapping shells are exported as a union.
- Three presets have actual model thumbnails: Ribbon, Palm and Broad. Variations remain inside supported bounds. Inputs update worker-generated geometry, with undo/redo and local portable JSON design files.

## Image workflow

PNG and JPEG, 16 bytes–2 MB, up to 12 megapixels, maximum 6,000 px per side. Header dimensions are checked before image decoding. Transparent areas become white. A bounded local copy (longest side 500 px) is saved only when the user explicitly downloads a design JSON.

Choose contain/cover fit, crop X/Y shifts ±25%, threshold 1–254 or grayscale relief, and relief depth 0.4–3 mm. The fitted image is sampled on a 20×20 grid. In threshold mode darker samples receive the selected depth; in grayscale mode height is proportional to darkness. The grid is triangulated over a continuous 0.4 mm backing with closed walls/base and fused 0.15 mm into the landing floor. This is **2D-to-relief/silhouette conversion, not reconstruction of a full 3D object from a photo**. Empty relief is rejected. Source, conversion grid and final-model previews are separate. Physical footprint is editable from 4–7 mm.

## STL workflow and deliberately restricted input contract

Both ASCII and binary STL are parsed locally in a worker. Limits: 2 MB, 1,500 triangles, one connected convex, consistently outward-wound closed solid, each dimension 0.2–250 mm. Dimensions are displayed; users must explicitly confirm millimeters because STL has no unit metadata.

The parser checks finite coordinates, degeneracy, welded edge incidence at 0.00001 mm, orientation, volume, connectivity, triangle intersections, convexity and broad flat-bottom support. All XY points must project inside the bottom footprint, whose area must be at least 25% of the bounding rectangle. Concave, open, nonmanifold, tilted, hollow, self-intersecting and unsupported overhanging models are rejected with guidance. No mesh repair is claimed or performed. Orient a convex low-poly grip with a broad base down in your modeler before importing.

XY scale preserves proportions (4–7 mm footprint); Z is independently fitted to 0.6–5 mm. Z rotation ±180°, X placement ±1.5 mm, Y placement ±2 mm. Every final imported vertex must remain within the protected 6.5 mm radial landing zone; fitted XY spans must each remain at least 1.2 mm. A robust Manifold boolean union must produce one connected solid. Shape, scale, height, rotation and placement measurably change the exported geometry. Center/reset, replace, remove and return-to-default controls are provided.

## Privacy, fixtures and persistence

All user file handling, mesh validation, conversion, modeling and export happen in the browser. No upload, API, key or CDN is involved. Dependencies, including WASM, are bundled. Synthetic fixtures in `public/samples` were generated locally: two image marks and two closed convex STL grips, in ASCII and binary. They contain no personal content and require no third-party attribution. File-picker and drag/drop paths are supported. A saved JSON contains the bounded normalized image payload or validated mesh vertices/indices; reopening revalidates that payload. Missing image data causes an explicit reattachment error, never fake restoration.

## Export and preview

Orbit, zoom, reset/fit and touch gestures; final X/Y/Z dimensions in mm; subdued preview palette. Colours are preview-only: STL contains geometry, not colour. The preview and binary STL exporter read the same final worker mesh. Object preview uses the design origin; Print layout translates XY positive without changing orientation. The complete STL and named-part STL contain the same single connected solid. A ZIP is unnecessary because there is only one required part. An independent worker preflight also checks the final mesh for finite/nondegenerate faces, welded two-face edge incidence, neighboring winding and positive volume on every edit. Export is disabled for invalid source, pending generation, stale parameters, unconfirmed units or invalid transforms.

## Printing and mechanism guidance

**Supports are required.** This loop is not support-free. Print upright in the displayed Z orientation with organic/tree supports below suspended band regions and a brim. Start with PLA or PETG, 0.4 mm nozzle, 0.16–0.2 mm layers and at least three walls. Check the slicer rather than relying on a print-time estimate (none is invented here). The minimum 2.4 mm band is rigid; do not treat it as a compliant hinge. Remove supports only after cooling, deburr and sand all finger-contact edges and support scars. Use Ribbon as the smaller support-release/tactile calibration specimen before printing a larger design. Exact support settings depend on printer and material.

There are no hardware, mating fits, captive bodies, assembly steps or sliding clearance to tune. Trace lightly instead of squeezing or twisting the physical loop. Imported details stay on a landing isolated from the opposite band by at least 28 mm. Two laps return to the original face. Not a child-safe or chew toy.

## Validation performed

`validate.mjs` parses actual binary exports and checks nonempty finite nondegenerate triangles, normalized normals, welded two-face edge incidence, opposite neighboring winding, per-component positive volume, connectedness, dimensions and topology. 78 parameter cases cover defaults, all 64 endpoint combinations, presets and eight variations. 24 image/STL output cases cover defaults, minima, maxima and all presets. Mechanism checks verify half-twist seam identification, rigid thickness, positive radial exclusion and protected landing separation. The sweep's distinct positive-radius angular planes prevent nonadjacent cross-sections from crossing; solid integration uses Manifold CSG. Import fixtures are independently checked before union.

Browser scripts exercise real PNG/JPEG and ASCII/binary file imports, download and parse real generated STL, compare exact preview/export fingerprints and UI dimensions, and verify scale/placement/threshold/depth changes. Invalid inputs include truncated, oversized, nonmanifold, open, concave and empty silhouette files. Other checks cover bounds, replace/remove/reset, presets, variations, sample buttons, drag/drop, portable JSON round trips, undo/redo, colour neutrality, phone touch orbit/pinch, 320/390 px layout, collapsible controls and reachable export. JSON reports and screenshots accompany the source.

**Digital geometry and mechanism checks are not physical print, comfort, durability or fatigue tests. No physical print has been tested.**

## Dependencies and visual direction

React/React DOM, Vite/React plugin, Three.js, Manifold-3D (WASM), gh-pages; Playwright for browser verification. Warm editor-first composition draws UX inspiration from Vaseverse's model-first studio, without copying its brand, assets, text or source. No remote fonts.
