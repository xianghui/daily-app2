# Wanderform — sphericon fidget generator

React + Vite + locally bundled Three.js. No CDN, API key, server-side generation or paid dependency. `npm install`, `npm run dev`; `npm run predeploy` builds. App base: `/daily-app2/20261021-8/`. Individual scripts include predeploy/build and gh-pages deploy, but publication uses the parent monorepo deploy.

## Interaction and controls
A sphericon trades between two perpendicular half-cone surfaces to produce a weaving roll across a level desk or palm. Unlike the existing axial roller or circular-sole rocker, the contact axis alternates. Classic shape 1.00 and zero recess is the mathematical cone profile. Softened/texture variants change the path and smoothness; physical performance is untested.

- Overall diameter: 30–70 **mm** (default 48). Overall whole-model bounds are diameter × diameter × diameter.
- Profile softness: 1.00–1.45, dimensionless superellipse exponent; default 1.00.
- Recessed grip depth: 0–0.45 **mm**, default zero. Texture is an inward displacement, not overlapping meshes.
- Grip bands: integer 4–12, default 8.
- Presets, reset, synchronized numeric/range inputs, fit view, orbit and touch pinch zoom.
- Outputs: whole solid; identical flat-backed half (print twice); 24 mm tactile trial using current shape/texture.

Invalid, blank, out-of-range and fractional band counts block export with an inline error. Current X/Y/Z bounds are displayed in mm. STL does not encode units: import as millimeters. Preview and binary STL use the same final vertex/face arrays. Export filename identifies mode and size. Mesh resolution is bounded at 96 angular × 48 axial intervals per half (~18k triangles whole), so generation is synchronous and responsive without a worker.

## Print and assembly
Easier route: export half, print twice broad planar face down. Start with PLA/PETG, 0.4 mm nozzle, 0.20 mm layers, three walls and 15–25% infill. Slice first; brim or local tip supports may help. Sand mating faces flat. Rotate one half 90 degrees in the mating plane to cross the cone axes, match the four boundary corners, then bond with a thin material-compatible adhesive layer. Remove squeeze-out and cure fully. No press fit, snap latch or moving seam is implied. Adhesive is required for the split route; no bearings/magnets/fasteners.

Adhesive- and hardware-free alternative: whole solid with tip-down orientation, brim and supports under lower curves. Support removal and surface finishing are required. Viewer orientation is not automatic build orientation. Preview is not a rolling simulation.

No moving interfaces or clearance dimensions exist. No minimum compliant-wall constraint applies: the envelope is a filled solid, not a thin spring. Use the 24 mm trial to assess support scars, texture and rolling feel. Very shallow recesses may not resolve with a 0.4 mm nozzle. Printer/material-specific calibration is essential; no universal fit tolerance is claimed. Small trial is not suitable for children/pets.

## Geometry construction and verification
Each half is a monotonic axial stack of positive semicircular radial graphs. Grip relief vanishes at the mating plane and poles. The seam superellipse is invariant under a quarter turn. Whole output contains only external half surfaces, welded at the matching seam; no overlapping closed halves or internal mating faces. Half export closes that seam with a planar triangle fan, then rotates the planar face to Z=0. Whole half interiors occupy disjoint X halfspaces; no intended moving bodies can collide or fuse.

`node validate.mjs` validates 16 endpoint parameter combinations in all three modes (48 exports): binary structure; finite coordinates; nonzero triangle areas; STL normals agreeing with winding; positive volume; millimeter bounding box; connected component; genus-zero Euler characteristic; after 0.00001 mm welding, every edge has exactly two triangles with opposite directions. Seam symmetry, positive half geometry and explicit halfspace separation are checked. The constructive radial graph / halfspace argument rules out unintended surface intersections; it is separate from a physical motion test.

`node browser-test.cjs` exercises real Chromium STL downloads, compares exact bytes against generated geometry, checks defaults, minimum/maximum, presets, all output modes, slider changes, invalid input blocking, preview changes, 320/390 px layouts and touch orbit/pinch and mobile download. `node gallery-test.cjs` compiles all inline root scripts, verifies the new entry exactly once and preserves every prior entry, then checks rendered gallery/search with no page errors. JSON reports and screenshots accompany the source.

**No physical print, glue assembly, or real-world roll has been tested.** Mechanical geometry validation is not a guarantee of finished rolling behavior, surface finish or adhesion. No dynamic motion simulation is claimed.
