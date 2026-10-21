# Diamond Breath

A browser-based parametric **compliant rhombus squeeze fidget**, not a game or static STL. Squeeze the wide opposing end pads: four reinforced diagonal links rotate through eight compliant neck regions and the side knuckles open outward. A split central post limits total compression. Release gently for an elastic return. One connected solid, no hardware or assembly. Preview is the exact **undeformed** export geometry, not a simulation.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js + bundled OrbitControls, Manifold WASM robust solid modeling, gh-pages. Playwright is a development-only browser test dependency. Everything required for modeling/export is bundled locally; no CDN, API key, server-side generation or paid service. The worker parses STL and performs CSG away from the UI thread. Per-app deploy scripts are present; public publication uses the parent monorepo's `deploy/` flow.

## Local imports

File picker works on phone/desktop; drop one file into Your source where drag/drop is available. Use Try sample buttons or download synthetic fixtures from `public/samples/`: mark.png, waves.jpg, wedge-ascii.stl, gem-binary.stl. These are original synthetic geometric fixtures, no third-party attribution required. No personal input files are included. Files are processed in browser memory only, never uploaded, persisted to storage, or included in the repository. Sample retrieval is same-origin only.

### PNG / JPEG → printable relief

Maximum 2 MB, 12 megapixels and 6,000 pixels per side; header dimensions are checked before decoding and verified afterward. Canvas composites transparency onto white. Fit-entire or fill/crop plus X/Y pan (±25%) maps the image to a bounded 20×20 grayscale grid using luminance 0.2126R+0.7152G+0.0722B. Threshold mode raises dark grid samples by the selected depth; grayscale mode uses depth × (1 − luminance/255). A triangulated continuous height surface is closed with walls and a flat bottom, including a 0.4 mm backing. It is sunk 0.15 mm into the rigid upper pad and **CSG-unioned**, not left as overlapping shells. Thresholded edges are interpolated between samples, not traced vector outlines. This is **2D-to-relief/silhouette conversion, not automatic reconstruction of a full 3D object from a photo**. Empty all-white conversion is rejected. Source and conversion previews appear alongside the final 3D preview.

Threshold 1–254; relief depth 0.4–3 mm; footprint 4–7 mm. Image pixel content, crop, threshold, mode and depth change exported triangles. Reset image settings, replace/remove source or reset all are available.

### ASCII / binary STL → integrated grip

STL has **no unit metadata**. Source coordinate dimensions are shown and explicit millimeter confirmation is required before integration. Maximum 2 MB / 1,500 triangles. Each original axis must measure 0.2–250 mm. Only a **single connected, outward-wound, closed convex solid with a broad flat Z-down bottom and no overhanging XY projection** is supported. Bottom hull must cover ≥25% of the XY bounding rectangle. Concave, hollow, open, nonmanifold, self-intersecting, disconnected, tiny or excessive meshes are rejected with guidance. No automatic repair is claimed or performed.

Source preflight checks exact binary length or complete ASCII facets, finite/bounded vertices, nondegenerate faces, welded edges at 0.00001 mm (two incidents, opposite winding), connectivity, positive volume, triangle intersection broad/narrow phases, convexity and flat-bottom footprint. Input triangles are normalized to center XY, proportionally scaled in XY to a 4–7 mm footprint, independently scaled in Z to 0.6–5 mm, rotated about Z ±180°, and offset ±1.5 mm X / ±2 mm Y. Tilt is intentionally unsupported. Fitted narrow XY span below 1.2 mm is rejected. Transform reset recenters the source.

The verified solid is sunk 0.15 mm into the upper pad and robustly unioned. The result must remain one connected solid. A conservative upper-pad safe zone excludes linkage necks and the post; placements leaving it are blocked, not clipped silently. Arbitrary unsupported STL geometry is not marketed as printable. Scale and offsets are physical millimeters; rotation is degrees. Original and integrated 3D previews are separate. Defaults can be restored without a reload.

## Parameters (mm unless noted)

| Control | Range | Default |
|---|---|---|
| End pad width | 18–26 | 22 |
| Diamond half-height offset | 22–30 | 26 |
| Corner flexure thickness | 0.8–1.2 | 1 |
| Squeeze stop clearance | 0.6–1.2 | 0.8 |
| Pad corner radius | 2–4 | 4 |
| Grip groove depth | 0–0.5 | 0.3 |

Half-height Q = offset + 10; half-width R = pad width + 6. Overall rest dimensions are X = 2R + 4, Y = 2Q + 16. Body Z = 3; decoration raises final Z. Default built-in output is 60 × 88 × 4.65 mm. Final X/Y/Z are measured from the same triangles used in preview and export, not just nominal formulas. Reinforced middle 30% of each diagonal is 3.2 mm wide; neck regions stay within 0.8–1.2 mm. Rounded pads add ergonomic comfort; top/bottom groove controls add texture. Numeric inputs and sliders, balanced/soft/firm PETG starting presets, reset and recoverable errors are included. Invalid or nonfinite parameters disable export.

## Export and geometry

One-click binary STL, useful source/width/neck filename, complete solid or individually named solid selection. All output is in millimeters. Preview and export use the identical generated Manifold mesh, not separately reconstructed geometry. Every primitive is properly unioned/subtracted; internal interfaces are removed. Manifold status, nonempty result and exactly one connected component are checked before delivery. Source placement cannot cross the protected pad region or fuse the mechanism's central gap. Export is disabled while generating, parsing or reporting errors.

## Printing / calibration

Print flat at Z=0 with the custom grip upward. PETG recommended for repeated small deflection; PLA is for gentle geometry trials and can fatigue sooner. Start with a 0.4 mm nozzle, 0.16–0.2 mm layers, 3–4 walls and 30% infill; inspect the necks to ensure solid continuous toolpaths. No supports intended for supported inputs. Cool before removal. Clear stringing/elephant foot at the stop, never cut the necks. No magnets, bearings, screws, glue or other hardware.

Use the undecorated built-in complete model as the **full-size calibration trial**. Start at 0.6 mm stop clearance; verify a visibly open gap in the slicer and print. Increase only if cleanly separated. Longer links / thinner necks soften return. No printer/material tolerance is universal. Pinch only the wide end pads, keep fingers out of the openings, never pull apart or bend out of plane. Stop at whitening, cracking or permanent set. Not for young children; breakage can create small parts.

## Validation / limitations

`npm test` checks 67 parameter cases (default, min/max and all 64 parameter-range corners) and 12 imported-source cases (both STL fixtures plus threshold/relief across default/min/max). Exported binary STL is reparsed to check finite vertices, normalized outward normals, nondegenerate triangles, welded edge incidence exactly two, opposite edge winding, connected component, positive enclosed volume and millimeter bounds. Manifold robust CSG provides the closed-solid construction; arbitrary overlapping shells are never exported as a union.

Analytical mechanism checks sample 49 squeeze positions per model using ideal constant-length rhombus kinematics, ensure split-stop nonpenetration, small lateral opening, link/post separation and conservative end-neck bending strain proxies. Minimum free-neck length includes rigid pad footprint and a root margin. This is **not FEA**, nonlinear motion validation or fatigue certification. The stop limits inward compression only, not outward misuse. Connected perimeter retains the pads without loose moving bodies.

`node browser-test.cjs` against the development server tests actual file pickers for PNG/JPEG and ASCII/binary STL, actual STL downloads, content/threshold/depth/crop changes, source shape/scale/rotation/placement changes, exact preview/export signatures, millimeter dimensions, replace/remove/reset and malformed/truncated/open/nonmanifold/excessive/concave inputs. All-white images, invalid transforms and safe-zone violations are blocked recoverably. Phone checks at 390 and 320 px include touch orbit, pinch zoom, file inputs, downloads and no horizontal clipping. Reports and screenshots are saved for review. Production build receives the same browser suite. Gallery tests compile all inline scripts and verify new/previous entries and browser rendering/search.

**No physical print, fatigue test or durability test was performed.** Digital mesh/manifold and analytical kinematic checks do not establish real-world fatigue life or a universally suitable fit.
