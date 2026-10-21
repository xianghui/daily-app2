# Spoke Still — axial leaf-spring fidget studio

A local React + Vite editor for a **one-piece radial spider spring**. Hold the circular rim above the table, gently push the central pad perpendicular to its face, and release. Four, six or eight radial leaves bend axially. This is an elastic-return worry toy, not a ratchet, torsion spring, snap dome or rigid slider. No hardware or assembly is required.

The model-first ivory/clay studio takes broad layout inspiration from Vaseverse, without its branding, assets, text or source. The editor and final download use the same Manifold-generated solid. All length values and STL coordinates are **millimeters**. Colours are preview-only: STL carries geometry, not colour.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base is `/daily-app2/20261021-27/`. Per-app deploy scripts are retained as requested, but the public combined site must be built and published from the repository root (`npm run predeploy`, `npm run deploy`). React, Three.js/OrbitControls, Manifold WASM and fflate are bundled locally; no CDN, paid services, keys or modeling APIs are used. Geometry generation and STL parsing run in a dedicated worker.

## Real geometry controls

| Parameter | Range |
| --- | --- |
| Outer diameter | 72–88 mm |
| Rigid center-pad diameter | 16–20 mm |
| Leaf thickness | 0.8–1.2 mm |
| Leaf width | 2–3 mm |
| Leaves | 4, 6 or 8 |
| Rim-groove depth | 0–0.5 mm |
| Suggested axial stroke | 0.3–0.6 mm |

Rim width is 4 mm; pad and rim height are 4 mm. The minimum grooved rim radial thickness is 3.5 mm. Each spoke is joined with rounded planar root lobes. Every underside sits on Z=0: no suspension bridges or support material are needed. The built-in thumb grip and imported details are fused above the rigid center, not onto the flexures. Suggested stroke is also recorded geometrically as the length of a shallow rim witness recess (length = 2 + 8×stroke mm). It is **not** a mechanical travel stop.

Presets change leaf count, thickness, free span and width, rather than just changing colours. Variations stay within the documented ranges. Numeric inputs, undo/redo, reset, orbit/zoom/fit, local JSON save/open, drag/drop and touch file picking are implemented. Preview shows undeformed rest geometry; there is no decorative physics animation or claim of a deformation simulation. Object/bed-layout views differ only by coordinate placement because this design has one solid.

## Image import — PNG and JPEG

Limits: actual PNG/JPEG content, at most 2 MB, 12 megapixels and 6,000 pixels on either axis. Headers are inspected before decoding. Imported images are normalized to a maximum 500-pixel side for a bounded portable local payload. The source and exact 20×20 conversion preview are shown.

The conversion is **2D height-map / raised-silhouette relief, not single-photo full-3D reconstruction**:

1. Composite alpha over white. Contain or cover the square, with ±25% crop/pan.
2. Sample 20×20 luminance values (`0.2126R + 0.7152G + 0.0722B`).
3. Threshold mode assigns depth to samples darker than threshold (1–254), zero otherwise. Grayscale mode assigns `depth × (1 − luminance/255)`.
4. Triangulate a continuous height field on a 0.4 mm backing, close its sides and bottom, rotate/translate it, then **Boolean-union** it into the rigid pad with 0.15 mm overlap.

Depth is 0.4–3 mm; footprint 4–7 mm. Grid interpolation makes sloped transitions, not independent overlapping voxel shells. White/empty conversion is rejected. Pixel-scale relief may be finer than a 0.4 mm nozzle resolves; use bold marks, not tiny text. Fit, crop, pixel content, threshold, depth, scale and placement change the exported solid.

## STL import — ASCII and binary

Limits: 2 MB, 1,500 triangles, one connected closed consistently outward-wound convex solid; each source dimension 0.2–250 mm. Source dimensions, triangle count, format and a separate 3D source preview are shown. **STL has no units:** the user must explicitly confirm millimeters before integration/export.

Preflight checks finite/bounded coordinates, nonzero triangles, welded edge incidence and orientation, connectedness, positive volume, triangle intersections, convexity and broad flat bottom contact. The bottom footprint must occupy ≥25% of XY bounds and contain the entire mesh's XY projection. Concave, hollow, open, nonmanifold, disconnected, inward-wound, self-intersecting, overhanging or point-bottom meshes are intentionally rejected. There is no silent repair. Reorient/repair/decimate in your modeling software, then export one convex flat-bottom solid.

XY is scaled proportionally to 4–7 mm footprint; height is separately scaled to 0.6–5 mm. Rotate around Z (±180°), center/reset and place X (±1.5 mm), Y (±2 mm). Fitted XY spans must each be ≥1.2 mm. All transformed vertices must stay within a 6.5 mm radius centered safe zone. The miniature is sunk 0.15 mm into the center pad and robustly unioned; final integration must remain one connected solid. Unsupported placement disables export. This changes the actual fidget grip, rather than re-exporting an untouched source mesh.

Replace/remove/reset are available for either workflow. The bundled original synthetic `mark.png`, `waves.jpg`, `wedge-ascii.stl` and `gem-binary.stl` let both workflows be tried without personal uploads; see `public/samples/README.md`. No third-party attribution is needed for these original fixtures.

## Privacy and portable designs

Files are processed locally, never uploaded or stored in the repository. Save JSON explicitly embeds the bounded normalized image and conversion state, or the bounded validated STL mesh, with parameters/transforms. Opening revalidates saved STL data. Imported files are really restored, not replaced with a fake placeholder. The JSON file remains on the user's device. Undo history stays in session memory; no cloud persistence exists.

## Export and validation

One primary binary STL download remains reachable on desktop and phones. An individual-solid export and ZIP containing the same solid plus print notes are also offered. All-solid and individual exports have matching dimensions but different XY origin. No assembled interpenetrating moving shells exist: the object is a Boolean-unioned connected compliant solid.

Engine checks reject invalid parameters, unsafe imports, empty/disconnected solids and nonzero Manifold errors. The external validation harness parses **actual exported binary STL** and checks:

- Nonempty triangles, finite coordinates, nondegenerate faces and normalized stored normals.
- Every welded undirected edge has exactly two incident triangles and opposing direction.
- A single connected component, consistent winding, positive enclosed volume and Euler genus matching the radial window count.
- Expected millimeter bounding dimensions, independent diameter bounds, bed-flat Z=0 and same preview/export fingerprints.
- Minimum leaf/rim sections, protected import zone and angular separation of spoke roots.

Mechanism screening uses an intentionally shortened beam span: `free = outerRadius − 4 − padRadius − 2×(0.8×leafWidth)`, accounting for root lobes. It samples the clamped-guided axial profile `w(u)=stroke×(3u²−2u³)` and screens nominal strain `3×thickness×stroke/free² ≤ 0.8%`. In this layout each spoke stays in its own radial sector, center translation is axial, and no rigid second body lies underneath. Spoke-root/pad/frame junctions are intended material continuity, not collision interfaces. No slider clearances or retention hardware apply.

**This is a linear beam screening calculation, not FEA or a fatigue/safety certification. Root stress concentration, material anisotropy, creep and print quality are not predicted. No physical printing, tactile-force, durability or cycle-life tests were performed.** There is no hard stop; do not force the stroke.

`geometry-validation.json` records 142 default/minimum/maximum/corner/preset/variation cases and 24 image/STL integration cases. Browser suites exercise actual PNG/JPEG and ASCII/binary file pickers, downloaded STL, import changes, invalid content, empty silhouettes, bounds, replace/remove/reset, all presets, variations, undo/redo, portable imports, per-solid/ZIP exports, colour neutrality, source previews, drag/drop and 320/390 px mobile views with touch orbit/pinch. Browser evidence and production results are stored alongside the source. `gallery-test.cjs` compiles every inline gallery script and checks unique new entry, all old entries, category order and browser rendering.

## Printing and calibration

Print bed-flat at 0.16–0.2 mm layers with a 0.4 mm nozzle. Four perimeter walls, solid thin leaves, and ~25% infill in thicker regions are starting settings. PETG or polypropylene is preferable for repeated flex; PLA is only a cautious initial feel trial. No supports, fasteners, bearings, magnets, glue or post-print release are needed. Remove strings carefully; do not nick leaves.

Start with a full-size 0.8 mm-thick trial, hold the rim free of the table and gently press the pad within the advised stroke. Increase thickness in 0.1 mm increments only if the material tolerates it. Fit presets are not appropriate here: there are no mating sliding parts. Material/printer response is not universal. Avoid torsion, folding, overtravel and pressing against a flat surface. Stop at whitening, cracks or permanent set; keep fingers out of gaps. This is not a chewing toy or suitable for small children.
