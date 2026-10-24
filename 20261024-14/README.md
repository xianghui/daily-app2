# Cone Accord

A browser-based parametric four-part conical friction-clutch fidget studio. Hold the cup rotor, press its upper cone into the seat to couple turning through friction, then manually lift for independent rotation. This is not a toothed ratchet, indexed cam, spring-return plunger or ordinary spinner. Generated parts: palm/spindle, cup rotor, cone rotor and friction-plug retaining cap.

## Run and build

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app deploy scripts are included as requested; the public collection is published ONLY by the root monorepo deploy flow. Base: `/daily-app2/20261024-14/`.

React / Vite, Three.js + OrbitControls, manifold-3d WASM for robust unions/subtractions and fflate ZIP export are bundled locally. No CDN, API, account or paid service. Generation and STL preflight run in a worker; file size, mesh and image complexity are bounded. The only sample requests are for this app's bundled synthetic fixtures. Personal files never leave the browser and are never committed.

## Controls and units

All physical lengths are **millimeters**. Rotor radius 18–24; cone depth 3–5; radial bearing gap 0.20–0.45; release lift 0.6–1.4; cap peg radial interference 0.04–0.12; palm dimples 0–0.6. Rotor floors and palm are 2.4 mm. The spindle outer radius is 3 mm, bore radius 1.8 mm and wall 1.2 mm. Both nominal cone slopes are 45°; a 0.0001 mm radial numerical allowance on the female surface avoids exact coincident CSG faces, not a printable tolerance prescription.

Three model-generated thumbnails correspond to genuinely different parameter sets (Small Pair, Cone Accord, Wide Chorus). Variations remain in supported ranges. Shape, Mechanism, Surface, Import and Print tabs provide paired numeric and slider input, advanced fit guidance, undo/redo, preview palette, source preview, model selection, touch orbit/pinch, fit/reset/zoom and dimensions. Modeling history coalesces edits over 450 ms; allow the geometry to settle between undoable edits.

Assembled preview flips the upper cone and cap into their real orientations. The turn and lift sliders visualize free-motion poses, not a torque or friction simulation. Lift 0 has a 0.06 mm near-contact clearance to avoid faceted collision. After printing, close the gap by gentle pressure; do not expect automatic return. Export always uses the **separate bed-flat layout**, never the assembled pose. Download combined binary STL, any individual part, or a ZIP containing all four STLs and the assembly guide. Preview and STL share the exact final meshes; selected preview colours are not encoded in STL.

## Image import: real 2D-to-relief geometry

PNG and JPEG, validated by header/content and browser decoder, 16 bytes–2 MB, at most 12 MP and 6,000 px per side. Synthetic `mark.png` and `waves.jpg` fixtures are bundled; no personal uploads needed. Before normalization, header dimensions are checked to avoid decoding excessive inputs.

The image is normalized to at most 500 px per side for portable storage, composited over white, and sampled to a bounded 20 × 20 luminance grid. Fit/contain or fill/crop and ±25% X/Y crop shift control sampling. Rec.709-weighted luminance becomes either a thresholded height (`pixel < threshold ? depth : 0`) or grayscale height (`depth * (1 - pixel/255)`). Threshold 1–254, relief depth 0.4–3 mm. A triangulated continuous 0.4 mm backing, boundary walls and outward bottom close the height surface. Transition pixels form sloped facets; this is raised silhouette relief on a backing, not a collection of disconnected pixel boxes and **not automatic full 3D reconstruction from a photo**. Empty relief is rejected.

Footprint 4–7 mm, rotation ±180°, X ±1.5 mm and Y ±2 mm are editable. The patch base overlaps the palm well floor by 0.15 mm and is robustly unioned with the stationary palm solid. Every resulting vertex must stay within a 6.5 mm radius protected zone. Offset/rotation combinations outside that zone are rejected. No image geometry reaches the spindle or moving cones. Source and sampled-grid previews show what the process uses.

## STL import: bounded verified grip integration

ASCII and binary STL, ≤2 MB and ≤1,500 triangles, exactly one connected outward-wound closed solid. Each source dimension must be 0.2–250 mm, coordinates finite and ≤10,000 mm absolute. Validate syntax, facet completeness, binary length, nondegenerate faces, welded edge incidence, directed winding, connectivity, positive volume and triangle intersections. **STL contains no units**: the user must explicitly confirm the displayed dimensions mean millimeters before generation/export.

This deliberately supported subset is a convex, broad flat-bottom grip whose XY projections lie inside its bottom footprint (bottom hull area ≥25% of bounding footprint). Concavity, overhangs, touching/self-intersecting meshes, inverted normals, thin branches, disconnected shells, open/nonmanifold or excessive meshes are rejected with actionable messages; there is no claimed automatic repair. Reorient/decimate or close the mesh in a modeler first. Planar source bottom faces and this convex/no-overhang contract allow reliable support-free union into the pad.

XY is proportionally fit to 4–7 mm, Z independently to 0.6–5 mm, with a minimum fitted XY span of 1.2 mm. Rotate in Z, center/reset, offset, replace/remove and return to defaults. A source preview and original dimensions remain visible. Actual transformed triangles, not a proxy box, are unioned into the palm well. They must form one connected manifold solid and stay inside the safe zone. Imported shapes and transforms survive to final STL.

## Save/open and privacy

JSON designs contain bounded portable source payloads: normalized image PNG plus conversion settings, or verified STL vertices/indices. Opening revalidates payloads and regenerates geometry. Missing image data is reported with an explicit reattachment instruction; it is never pretended restored. JSON limit 2 MB. Normal modeling stays local; saving/downloading happens only on user action. Rejecting a file pauses exports and preserves recoverable controls; remove/replace or Reset all recovers.

## Printing, assembly and calibration

Use PLA or PETG, 0.4 mm nozzle and 0.2 mm layer height as starting settings. Four independent bed-flat parts; no supports or external hardware. Female seat and male cone are 45° self-supporting slopes. Print the male cone pointing UP, then flip it cone-down during assembly. Keep contact faces dry, remove stringing and inspect the slicer before printing. Dimples cannot breach the minimum 1.6 mm palm well floor.

Print **Small Pair** first as a full-size calibration specimen. Check each bore slides freely on the spindle. Test cap hold before final assembly. Fit presets are FDM starting points, not universal fit guarantees. If the cap peg is too tight, reduce radial interference; if it does not retain after calibration, do not use that print. It is a friction plug, not a positive snap lock; tug-check and stop if it loosens.

1. Place cup rotor cavity up on palm spindle; its floor rests on the annular thrust shoulder.
2. Flip upper cone into the cavity, cone down.
3. Flip cap, peg down, and press into the spindle bore without force. The intentional peg/shaft interference is a fixed assembly fit, not fused moving geometry.
4. Hold the lower rim and gently press/turn the upper rotor for coupled friction, then lift manually for release. Do not expect guaranteed torque, indexing, automatic return or bearing-like free spin. Stop for wear, seizures or loose retention. Small parts, not for children.

No bearings, magnets, fasteners, glue or other hardware are required. Numerical retention overlap is 3.05–3.30 mm beyond rotor bores; actual holding force is material/printer dependent. No physical print, friction torque, retention force, wear or fatigue tests have been performed.

## Validation

`validate.mjs`: independent binary STL parser checks every welded edge has exactly two oppositely directed faces, finite coordinates, normalized normals, nonzero areas, positive volume per connected component, and independent mm bounds. Final generation repeats manifold/winding/volume checks in the browser worker and uses Manifold robust CSG. 78 parameter cases include all 64 endpoint corners and representative variations; 24 source-derived cases include both STL fixtures and both image methods. Mechanical checks cover 21 sampled turn/lift poses, nonintersecting moving bodies and printable layout, actual bore probes, cone near-contact with 0.001 mm numerical separation, wall thickness and retention overlap, and import isolation from rotor/shaft geometry. Fixed plug/shaft interference is intentionally excluded from moving-collision rejection. Discrete triangle faces may require a few microns of axial seating at arbitrary angles; preview clearance exceeds that discretization envelope.

Playwright scripts exercise browser file pickers, PNG/JPEG and ASCII/binary imports, actual STL downloads and parsed mesh checks, changes in image pixels/threshold/depth/crop and imported scale/rotation/placement, preview/export fingerprints, malformed/excessive/open/nonmanifold/unsupported input, min/max, replace/remove/reset, safe zone, all presets/variations, portable save/open, undo/redo, individual and ZIP exports, drag/drop, phone touch orbit/pinch, responsive controls and reachable export. See generated JSON reports and VALIDATION.md for actual execution results. Numerical checks do not establish physical performance.

## Design reference and samples

Reference: https://vaseverse.org/ — inspected its public page for warm studio colour direction and model-first editing concepts. Original branding, copy, geometry, UI and fixture art; no copied assets or source. Existing collection import/viewer infrastructure is adapted, but the clutch mechanism and its geometry/checks are new. The archived `/daily_app/` gallery was read only for prior ideas and not modified. The four synthetic fixtures are reused from this collection and generated for testing, with no third-party/personal assets.
