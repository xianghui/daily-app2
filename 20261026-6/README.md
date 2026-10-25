# Elliptic Tempo — a soft noncircular friction fidget

Turn two eccentric elliptical rollers for an alternating quick/slow, opposite-direction tactile rhythm. Each roller turns about a focus, not its geometric center. This is a **five-part print-and-assemble mechanism**, not print-in-place: one rigid palm/axle base, two TPU rollers and two rigid friction caps. No metal bearings, magnets, screws, glue, API keys or server are required. Friction can slip: it is not a positive geared transmission.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base is `/daily-app2/20261026-6/`. Per-app `predeploy` is exactly `npm run build`, `deploy` is `gh-pages -d dist`; public monorepo publishing uses the ROOT deploy flow. A binary STL button exports the separated print plate or selected individual part. Five prominent individual-part buttons and an Everything STL + notes ZIP are included. Files sit bed-flat at Z=0, including caps with roof down/socket up. STL stores neither millimeter metadata nor preview colour. The UI reports current selection X/Y/Z millimeter bounds and a reproducible mesh fingerprint shared with the download tests.

## Mechanism and bounded parameters

All physical values are **mm**, except rotations in degrees and crop shifts in percent.

| Parameter | Range |
|---|---|
| Palm diameter / silhouettes | 22–28; round, hex, oval |
| Ellipse semi-major axis a | 14–18 |
| Focus offset c | 2–4; eccentricity e=c/a |
| Roller thickness | 4–6 |
| Axle radial **and** axial running gap | 0.25–0.50 per side |
| Total intentional TPU rim overlap | 0.10–0.30 |
| Cap radial socket allowance | −0.06 to −0.01 |
| Palm dimple depth | 0–0.60 |

Axes are spaced 2a. Semi-minor axis is `sqrt(a²−c²)`. Nominal pitch outlines use 256 inscribed samples, expanded outward by half the selected overlap with Manifold's parallel offset. Each core is at least 7 mm thick radially from bore to nearest outer edge; caps retain with at least 1.8 mm radial overlap. Axial running gaps exist above and below each roller. Each cap has a 2.5 mm blind socket and 1.2 mm roof; an integral post/roof stop sets cap height. Cap friction contacts are intentional, not running bearings.

The **ideal no-slip** pose law is `β = −2 atan2((1−e) sin(θ/2), (1+e) cos(θ/2))`. Its ratio `−dβ/dθ=(1−e²)/(1+2e cosθ+e²)` varies between `(1−e)/(1+e)` and its reciprocal. This is a preview-only synchronization estimate. Real TPU deformation, traction, slip, force and infill are not simulated. The preview deliberately displays undeformed soft-rim overlap, not invisible rigid clearance. Exact exported undeformed meshes are used in every view.

Three real presets have generated model thumbnails: Light Tempo (small calibration pair), Elliptic Tempo, Deep Cadence. Bounded variation, undo/redo, six local named designs and portable JSON save/open are implemented. Light/dark preference persists locally. Assembled, exploded, print-plate and isolated base/driver/follower views, see-through base, orbit, touch pinch, fit and zoom buttons are available. On phones preview/export precede stacked controls; desktop uses a 374 px left studio panel and large right viewer.

## Image → real relief geometry

Accept PNG, JPEG and simple self-contained SVG. Every file is processed locally. Max file 2 MB, image 12 MP and 6,000 px per side. Header dimensions are checked before decoding. A local normalized PNG (≤500 px side) is carried in portable saves. SVG is restricted to ≤2,000 simple shapes/groups/paths, with no scripts, references, fonts, effects or external resources; it is rasterized locally at 256 px. SVG effects/unsupported elements are rejected, not silently approximated.

Images are composited over a selectable light/dark background, fit/cover-cropped and shifted ±25%, then sampled to a bounded **20×20 luminance height grid**. Threshold 1–254 chooses dark regions; grayscale uses `depth×(1−luminance/255)`. Heights are linearly triangulated over a continuous solid backing, then boolean-unioned into the palm or subtracted for engraving. This is **2D-to-relief**, not full 3D reconstruction or exact outline tracing. White holes stay unraised/unengraved over the backing; there are no through-holes in the structural palm floor. A checkerboard shows removed background alongside the source preview. Node CSG probe tests verify ring-hole preservation in raised and engraved output.

Raised depth: 0.4–3.0. Engraved depth: 0.4–0.6 to protect the floor. Footprint: 4–7; placement X ±1.5, Y ±2; Z rotation ±180°. All relief vertices must remain within the 6.5 mm radius stationary palm safe zone. An empty silhouette, excessive transform or disconnected solid blocks export. The text mark (≤8 characters) and six searchable bundled original vector icons use the same geometry workflow.

## STL → integrated grip geometry

Accept both complete ASCII and exact-length binary STL; max 2 MB and **1,500 triangles**. STL has no units: explicitly confirm source coordinates are millimeters before generation/export. Oriented source dimensions, triangle count/format and a separate interactive source mesh preview are shown. Select Z up, Y up (+90° X), or −Z before attachment. Changing axis requests reattachment rather than pretending the old asset changed.

The parser checks finite coordinates, dimensions 0.2–250 per axis, nondegenerate faces, welded closed edge incidence, consistent outward winding, connectedness, positive volume, triangle self-intersection and a conservative supported-solid contract. **Only convex closed solids with broad flat bottom (≥25% of XY bounding area) and no footprint overhang are supported**. Concave, hollow, open, nonmanifold, disconnected and unsupported meshes are explicitly rejected with guidance; no hull substitution or repair is performed. The original accepted mesh is preserved, normalized in XY to a 4–7 mm footprint and independently in Z to 0.6–5 mm height, rotated/translated, and **solid-unioned** into the stationary palm landing. A minimum imported XY section and safe-zone guard prevent slender/obstructing grips. It is not just viewed or re-exported unchanged. Source dimensions and final export dimensions are distinct.

Replacing/removing sources, center/reset transforms, image reset and Reset all work without reloading. Drag/drop and ordinary file pickers are supported. Synthetic PNG, JPEG, ring SVG, ASCII wedge and binary gem STL fixtures can be downloaded or applied with one tap. These original synthetic fixtures and original icons have no third-party personal content. No personal file is in the repository.

## Local state, worker and export correctness

Manifold WASM, Three.js, fflate, React and Fredoka/Rubik font files are bundled locally. No CDNs, API calls or user-file uploads. Geometry and heavy mesh checks run in a module Web Worker with a local WASM URL; edits debounce 100 ms and both generation and import work have stale-result guards. Worker failures, invalid edits, conversion work, import errors and missing units confirmation **disable every export**, even if the last-good preview remains visible. Named designs/JSON carry bounded image/mesh payloads. Missing image payloads ask for reattachment; imported mesh payloads are revalidated, not trusted. JSON limit is 2 MB; named designs retain up to six entries; undo history up to 35 states.

## Printing and assembly

Print **both rollers in TPU 95A**; the soft outer contact is intentional. Never substitute rigid PLA for these rollers at overlapping settings. Print base/caps in PLA or PETG. Start at 0.4 mm nozzle / 0.16–0.20 mm layers, 3+ walls, 20–35% roller infill. All parts lie bed-flat and need no intended supports. Clean elephant foot and burrs without enlarging axle bores indiscriminately.

Start with **Light Tempo**: 0.50 mm bearing gap, 0.10 mm rim overlap, −0.01 cap allowance. Print one cap first as a full-size fit coupon. These fits depend on printer/material, not universal tolerances. If binding, reduce overlap or increase gap; never force a brittle socket. Fit rollers with long ends left as in the zero-angle assembled preview. Invert caps, socket down, and seat roofs gently on post tops. Hold the palm, turn the crown pads and hand-guide if slipping. Disassemble by pulling caps straight off before lifting rollers. Stop at stress whitening, cracks, resistance or cap looseness. Small removable parts are not child-safe toys.

## Validation, not physical certification

`npm test` runs independent binary-STL parsing (exact byte length, finite float32 coordinates, normals/winding, nonzero faces, mm bounds, 1e−5 mm vertex-weld edge incidence, triangle adjacency and positive volume **per connected component**), individually and on the actual separated float32 print layout. All supported parameter corners, presets and shape variations are checked. Image-derived and STL-derived outputs pass the same checks. Independent CSG sweeps verify ideal pitch ellipse nonintersection, outer-rim-only soft contact, cap-only friction interference, no unintended part intersection, plate separation, bearing gaps, retention dimensions, cap release and import isolation; the conjugate speed law is checked against focal radii and numerical derivatives.

Reproducible Playwright scripts use the **production Vite output at the real base path**, actual file-picker imports, actual STL/ZIP downloads and portable JSON snapshots. They compare downloaded byte fingerprints with preview and regenerated Node meshes; test changed image pixels/threshold/depth, mesh scale/placement, replace/remove/reset, malformed files, all presets, text/icons/SVG, saves/undo/redo, worker failure/stale work, theme/focus, 320/390 px phones and real CDP orbit/pinch. See VALIDATION.md and machine-readable reports for the exact executed results. Browser source fixtures only, no remote requests during local tests.

**No physical prints, traction, retention strength, fatigue, wear or cycle tests have been performed.** Geometry validity and an ideal kinematic check do not establish actual frictional performance.

## Dependencies / reference

React + Vite, Three.js (MIT), Manifold 3D (Apache-2.0), fflate (MIT), gh-pages, @fontsource Fredoka/Rubik (OFL font licenses in installed packages). Playwright is a dev dependency. Rounded local fonts, lavender-grey desk, white/dark panels, coral accents, tactile key controls and left-panel/phone-preview-first composition follow the read-only Keycap Generator 2 reference. No reference source, dependency tree, Git history or deploy commands were copied; this studio adapts shared prior daily-app infrastructure with a new model and mechanism validation.
