# Crossleaf Calm

An original browser-based **offset crossed-leaf rocking fidget** studio. Hold the stationary palm landing and gently yaw the right thumb bridge in the XY plane. Two diagonally crossed bending leaves connect the rigid anchors at different Z heights. They create an approximate virtual pivot without an axle or rubbing crossing. This differs from a torsion bar, pin linkage, compressive spring or diaphragm. The studio composition takes UX inspiration from Vaseverse's model-first editor, not its branding, assets, source or vase geometry.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, locally bundled Three.js/OrbitControls, manifold-3d WASM CSG and gh-pages. Playwright is a development/test dependency. No remote APIs, keys, CDN imports or generation server. Geometry runs in a module worker. Only synthetic bundled sample fixtures are fetched from the app's own origin. Binary STL uses the exact validated final mesh shown by the preview, not a simplified or stale representation. One connected printable solid: complete and individual-part exports are equivalent; no multipart ZIP is necessary. Object preview is static and undeformed; print layout merely translates that same solid to positive XY and Z=0. Preview colours are not stored in STL.

## Controls and ranges

All physical dimensions are **millimeters**; rotations are explicitly degrees.

| Parameter | Range | Meaning |
|---|---|---|
| Pivot span | 26–38 | Anchor center separation in X |
| Half anchor spacing | 8–12 | Diagonal anchor Y offset |
| Leaf bending thickness | 0.9–1.4 | Width normal to each diagonal in XY |
| Vertical crossing gap | 2–3 | Air gap between complete leaf Z intervals |
| Leaf vertical height | 2.4–3.6 | Each blade's Z section |
| Palm dimple depth | 0–0.6 | Subtracted stationary tactile dimples |

Long Whisper, Balanced Cross and Wide Anchor are distinct valid geometries with actual generated model thumbnails. Variations stays in bounded ranges. Every edit updates the worker mesh without reload; invalid values pause export. Shape/mechanism/surface/import/print tabs, fit/reset/orbit/zoom, active object selection, explicit final XYZ dimensions, undo/redo, JSON save/open and touch-accessible exports are included. Phone controls can collapse; export remains fixed and accessible.

## Local image workflow

Picker or drop **PNG/JPEG**, 16 bytes–2 MB, ≤12 MP and ≤6,000 pixels per side. Header dimensions are checked before decode and compared with decoded dimensions. Browser decoding rejects corrupt content. Source is normalized locally to at most 500 pixels per side, then fitted or cropped to a **20×20** square grid. White fills transparent/outside pixels. Crop shifts are ±25%. Luminance is 0.2126R + 0.7152G + 0.0722B.

Threshold mode maps luminance below threshold (1–254) to chosen relief depth; remaining points have zero relief. Grayscale mode maps darkness linearly to height. A triangulated continuous height-map surface, walls and bottom make a closed solid on a 0.4 mm backing. Grid cells interpolate linearly; this is not a vector trace or automatic reconstruction of a full 3D object from one photo. Depth 0.4–3 mm; footprint 4–7 mm. The backing overlaps the stationary well floor by 0.15 mm and is **boolean-unioned** to the body. Empty relief is rejected. Source and conversion previews show both the original and actual grid. Replace/remove/reset controls are real. `mark.png` and `waves.jpg` are synthetic local fixtures.

## STL workflow and limitations

Both **ASCII and binary STL** are parsed locally. Limit: 2 MB, 1,500 triangles, every original axis 0.2–250 mm, bounded finite coordinates. STL has no units: the user must explicitly confirm millimeters before generation/export. The source 3D preview and dimensions are shown.

Deliberately supported subset: **one connected, outward-wound, convex, watertight solid with a broad flat Z-bottom and no overhang beyond that bottom footprint**. The bottom must cover at least 25% of the XY bounding area. Concave/hollow/open/nonmanifold/intersecting/disconnected/reversed-winding/degenerate meshes are rejected with actionable messages; no repair is claimed. Pairwise triangle intersection and convexity checks run off the main thread. Use a mesh editor to simplify, orient and re-export unsupported artwork.

The source is centered, XY-scaled proportionally into a 4–7 mm footprint, independently Z-scaled into a 0.6–5 mm grip height, optionally rotated around Z ±180°, and offset X ±1.5 mm/Y ±2 mm. Minimum fitted XY dimension is 1.2 mm. All vertices must remain within the stationary 6.5 mm radius safe zone. The normalized bottom is sunk 0.15 mm into the 3.2 mm well floor and robustly unioned. It is a real integrated thumb grip, not an unchanged mesh re-export or overlapping shell. Arbitrary tilt is intentionally unsupported to preserve the broad flat-bottom contract. Center/reset, replace and remove are available. `wedge-ascii.stl` and `gem-binary.stl` are synthetic bundled fixtures.

## Privacy and portable designs

No user file is uploaded, sent to a service or stored in the repository. Saving JSON is an explicit local download: it contains the bounded normalized PNG payload and conversion settings, or the validated bounded STL vertex/index payload and transforms. Opening validates content and regenerates the final mesh. A missing image payload triggers an explicit reattachment error, never a pretend restoration. Undo/redo retains bounded snapshots only in memory.

## Mesh validation and mechanism checks

Manifold-3d performs actual CSG unions/subtractions, not overlapping visual meshes. Every final model must pass engine status, nonempty one-component decomposition, finite coordinates, nondegenerate faces, positive signed volume, closed edge incidence (after 0.00001 mm vertex welding) and opposing neighboring edge winding. Invalid integration disables downloads. Independent tests parse the **downloaded binary STL**, inspect normalized normals, component count, orientation, volume, welded edges and millimeter bounds against the preview parameters.

Mechanism checks cover minimum leaf sections, vertically disjoint crossing slabs, import isolation, continuous material samples along both leaves, and a CSG air probe between the crossing leaves. Conservative representative ±1° endpoint sweeps bound displacement under 0.4 mm; even an isotropic displacement bound leaves the crossing and frames separated. This is **not nonlinear elastic analysis**: force, strain concentration, fatigue, exact pivot location, out-of-plane behavior and return accuracy are not verified. No physical print test has been performed.

Run `npm test` for 78 built-in/min/max/corner/preset/variation cases, 24 image/STL-derived cases and invalid-input rejection. Browser tests select actual PNG/JPEG/ASCII/binary files, download and parse actual STLs, compare geometry signatures, exercise controls, malformed inputs, import transforms, save/open, undo/redo, palette invariance, presets, variations and touch orbit/pinch. See `VALIDATION.md` and generated JSON reports.

## Printing and calibration

- **One part; no hardware, assembly, captive joint or running-fit clearance.** The crossing gap is not a bearing tolerance.
- Start with TPU 95A. Rigid PLA is not a recommended repeat-flex material. Start with a 0.4 mm nozzle and 0.16 mm layers; inspect at least two continuous extrusion paths across each 0.9–1.4 mm blade.
- Both rigid anchor feet and the landing sit at Z=0. **Removable bed supports are required below both raised leaves.** Inspect slicer access through open sides and the crossing gap. TPU support removal may be difficult; if supports cannot be removed without damage, do not use the print.
- Print **Long Whisper as a full-size material/support coupon** first. Tune support gap for your machine and material; there is no universal setting. Remove all supports without cutting leaves.
- Hold only the left landing; gently rock the right bridge in-plane, initially below ±1° (under 0.4 mm endpoint travel). Do not squeeze frames together, pull apart, or twist vertically. No physical travel stops are claimed.
- Stop at permanent set, whitening, cracks or delamination. Do not assume a particular force, service life or precise remote pivot. This is a prototype requiring physical testing, not a certified toy or safety part.

## Publishing

Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`. Public combined collection deployment is owned by the parent monorepo: its root `npm run predeploy` copies the gallery and every app into `deploy/`, followed by root `npm run deploy`. The archived `daily_app` tree is read-only.
