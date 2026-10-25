# Differential Drift

A local, parametric maker studio for a **three-member planetary differential fidget**. A 16-tooth sun, one 16-tooth planet, and a 48-tooth internal ring blend two independent thumb turns into carrier motion. Unlike the collection's fixed-sun orbit or fixed-ring straight-line tracer, the sun, ring and carrier are all free: **sun + 3 × ring = 4 × carrier**. Hold ring for 4:1 reduction; hold sun for ¾-speed carrier motion; hold carrier for opposing 3:1 input turns. This is gentle hand-guided interaction, not a power-transmission device.

## Run / build

Node 22.12+; `npm ci`, `npm run dev`. `npm run predeploy` creates `dist/` with base `/daily-app2/20261026-2/`. App-specific `deploy` is provided as requested, but public publication uses the parent monorepo's root `predeploy` / `deploy` flow. No backend, API keys, CDN dependencies or uploads. React/Vite, Three.js/OrbitControls, Manifold WASM in a module worker, fflate ZIP, and locally bundled Fredoka/Rubik fonts. Involute profiles are 20-degree sampled curves with explicit backlash. All geometry is solid-modeled using Manifold, never merely overlapping shells.

## Geometry and controls — millimeters

| Parameter | Supported range |
|---|---|
| Palm diameter | 22–28 mm; round, hexagonal or oval |
| Gear module | 1.4–1.8 mm |
| Gear thickness | 3–5 mm |
| Running / backlash clearance | 0.30–0.55 mm |
| Carrier web | 9–11 mm |
| Palm dimple depth | 0–0.6 mm |
| Cap radial allowance | −0.08 to −0.01 mm (negative = interference) |

Three real presets with live model thumbnails, bounded variation, undo/redo, named local designs (six maximum), portable JSON save/open, saved light/dark theme, text and searchable built-in marks, and preview-only colours. Views: assembled, exploded, isolated cradle/sun/ring/carrier, and separated print plate. Sun/ring preview controls demonstrate the ideal kinematic relation, not friction or dynamics. The assembly shows explicit designed axial gaps; real bodies settle against thrust faces. Dimensions below the viewer describe the selected export, X × Y × Z in mm. Drag/orbit, zoom, fit and touch pinch are supported. Desktop has a 374px left editor and right preview; phones show preview, dimensions and export first.

## Image → printable relief

Use file picker, drag/drop or synthetic examples. PNG and JPEG headers must match contents. Maximum 2 MB, 12 megapixels, 6000 pixels on either side. Images normalize locally to at most 500px and sample into a bounded 20 × 20 grid. Fit/contain or crop/cover and ±25% pan controls change the sampled pixels. Transparent pixels composite against the selected light/dark background. Light mode removes light pixels; dark mode inverts luminance. Threshold 1–254 selects dark samples; grayscale mode maps darkness continuously to height. Each grid cell is triangulated into a continuous height field with a closed 0.4mm backing, then robustly unioned into the recessed palm landing. Raised relief depth: 0.4–3 mm. Engraved relief depth: 0.4–0.6 mm to preserve the floor. Source and exact checkerboard cutout are both shown.

This is **2D-to-relief / sampled silhouette conversion**, not automatic reconstruction of a full 3D object from one photo and not smooth outline tracing. Holes such as the centre of an O remain unraised/unengraved above a continuous backing; they are not full-depth holes through the palm. A simple SVG path/shape file follows the same local raster-to-relief path at 256px; scripts, external resources, filters, text and complex effects are rejected. Simple SVG fills (including holes) rasterize as authored. Text and six bundled searchable marks are rasterized locally through the same geometry workflow.

## STL → integrated grip

Binary and complete ASCII `.stl` are parsed locally in the geometry worker. Limits: 2 MB, 1500 triangles, each source dimension 0.2–250 mm. The parser checks finite coordinates, triangle area, welded edge incidence and orientation, a single connected component, positive enclosed volume and unsupported self-intersections. No silent repair or convex-hull replacement. The intentionally conservative integration contract supports **one convex, outward-facing, closed solid with broad flat bed contact** (at least 25% of footprint), no overhang footprint beyond that base. Concave/cavity/branched/open/nonmanifold/disconnected inputs receive actionable rejection. Reorient and simplify in your modeler if necessary.

Select Z up, Y up or −Z up **before attaching**; changing axis requests file reattachment. Source dimensions/format/triangle count and an orbitable source preview are shown. Explicitly confirm millimeters: STL has no unit metadata. XY scales proportionally to 4–7mm footprint; Z independently fits 0.6–5mm grip height. Rotation ±180°, X ±1.5mm, Y ±2mm. Every transformed vertex must remain inside the 6.5mm-radius palm keep-out boundary. The actual mesh is unioned into the palm well with 0.15mm overlap, checked as one connected solid, never displayed/re-exported unchanged. Minimum XY grip width 1.2mm; the safe area cannot reach the mechanism. Replace/remove/reset are available. No imported personal assets are committed or uploaded.

Portable JSON includes bounded normalized PNG data and STL mesh data, not file paths. Reopened meshes are revalidated. Missing image payloads explicitly request reattachment and block export. Malformed/oversize JSON is rejected. All user asset processing and named-design storage remain in the browser.

## Export and print

Binary STL uses the exact current validated geometry shared by preview. Every individual part and the float32-translated combined plate are checked for finite vertices, nonzero triangles, closed opposite-wound welded edges and positive volume. Invalid inputs, pending imports, failed workers, stale results or incomplete units confirmation block every export; the last-good preview may remain visibly labelled. The UI provides per-part buttons, a combined separated-plate STL and an Everything ZIP containing seven real STLs plus assembly notes. STL has no colour or material metadata; ZIP is not 3MF. Files use meaningful parameterized names. Print layouts use 6mm spacing and pack into 208mm-wide rows; check actual reported bed dimensions before slicing.

Seven parts, **no purchased hardware**: palm cradle, carrier, sun, planet, ring, center cap, carrier handle. Print all flat as exported, 0.2mm layers, 0.4mm nozzle, three walls in PLA/PETG. Supports are not expected. Deburr bores/teeth. Fit carrier on centre axle, sun and planet on their respective axles, ring into outer guide, then fit centre cap and carrier handle. Cap seats are calibrated friction fits; do not force them. The carrier handle is on the planet axle, not the freely spinning planet. The ring is deliberately lift-removable, not captive; keep the toy level over a table. Remove caps vertically to disassemble. Do not glue moving interfaces.

Start with Pocket Sum as a complete fit calibration and the loosest −0.01mm cap allowance. Running clearance and interference are FDM starting ranges, **not universal tolerances**. Cradle floor 3mm; palm well floor 4.2mm before optional engraving; ring root wall ≥3mm before shallow external knurl; guide wall 1.8mm; moving fits remain separate. Small loose parts are unsuitable for children.

## Validation

`npm test`: defaults, all presets, all 128 parameter extrema combinations, three palm shapes, source-image thresholds/grayscale/engraving, both STL fixture formats, positive volumes per component, finite/nondegenerate faces, binary length/normals, expected mm dimensions, opposite-directed welded edge incidence (1e−5mm tolerance), separated final float32 export layout. Independent CSG motion sweeps check sun/planet/ring meshing, nonintersecting moving bodies, import isolation, retention overlaps, ring support and vertical release, and restrict deliberate cap interference to the stub region. No physical print, torque, wear, friction or fatigue testing has been performed. Computational geometry checks do not prove real print performance.

Production browser tests: `node serve-test.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs`, `node additional-test.cjs`, `node hole-test.cjs`. Reports and screenshots alongside these files document actual imports, downloaded STL bytes vs current preview fingerprint and regenerated saved state, JPEG/PNG/SVG conversion changes, binary/ASCII mesh transforms, bad inputs/export gating, undo/redo and named/JSON payload round trips, real per-part/ZIP downloads, worker load failure, two-input motion, dark theme, keyboard focus, collapsible controls, reduced-motion, desktop layout, 390/320px preview-first layout and touch orbit/pinch. `geometry-validation.json`, browser reports and logs are the reproducible evidence, not claims of physical testing.

## Provenance

The visual reference at `keycap_generator2` was inspected read-only: compact sticky brand header, scrollable maker controls, raised tactile buttons, lavender desk/white panels/pink selection, source editor and local worker/export patterns. No switch sockets are imposed on this non-clicker mechanism. Parser, bounded relief editor and studio infrastructure adapt existing local daily-app code; this app implements a new free-sun/free-ring differential, not a keycap clone. Samples are synthetic local art and meshes, no personal files. Fonts: Fontsource SIL OFL; Three.js/React/Vite/fflate: MIT; Manifold: Apache-2.0. See installed package license files for details.
