# Layered Hush

A local browser maker studio for a **sequential-contact TPU leaf stack**. Gently squeeze the upper distal thumb pad toward a fixed lower stop. Three initially separated cantilevers engage progressively, adding leaves to the load path. This is a single bed-flat compliant part, not a ratchet, independent pluck comb or guaranteed clicker. No hardware, supports or assembly.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`. React/Vite, locally bundled Three.js/OrbitControls, Manifold WASM, fflate, Fredoka and Rubik (Fontsource/OFL). No CDN, service, paid API or key. Individual `deploy` uses gh-pages for the required app script; actual public publication is the parent monorepo root deployment.

## Studio

Reference-inspired 374 px left rail, collapsible labelled controls, tactile pressed buttons, numeric/range pairs and right-side orbit viewer. On phones, preview, dimensions and export precede stacked controls. Saved light/dark themes, focus indicators, reduced motion, actual model-thumbnail presets, bounded variations, undo/redo, six local named designs and portable JSON. JSON includes bounded normalized image/mesh payloads; there are no fake restored file paths. Files never leave the browser. Synthetic sample PNG, JPEG, SVG, ASCII STL and binary STL are bundled with no personal data.

Rest/interaction, whole-solid and print-plate views show the exact same undeformed solid. Ghost view reveals the open gaps. There are no separately moving rigid parts, so exploded views are inapplicable. The preview deliberately does not simulate nonlinear TPU deformation. Current valid worker geometry is shared by preview and export; stale builds, invalid edits, worker errors and rejected imports block downloads.

## Parameters (all lengths in millimeters)

| Control | Range |
| --- | --- |
| Palm diameter; round/hex/oval | 22–28 |
| Leaf span from common root | 28–44 |
| In-plane leaf thickness | 1–1.6 |
| Open stage gap | 0.8–1.4 |
| Leaf depth in print Z | 3–5 |
| Palm dimple depth | 0–0.6 |
| Circular root flare | 0.4–0.8 |

Three equal-length leaves share one rigid spine. A broad paddle extends from the upper distal tip, and a fixed opposing rail lies below the lower leaf. Gaps remain open throughout the free span. Root overlaps are deliberate solid unions. Effective conservative bending span = leaf-span − 3 − root-flare. Approximate total closure travel = three gaps; estimated outer-fiber strain = 1.5 × thickness × total travel / effective span², bounded below 2.5%. This is a small-deflection screening estimate, not a nonlinear contact, force, fatigue or return prediction. First, second and third idealized tip-contact thresholds occur at one, two and three gaps respectively; real contact depends on printing and material. Final X/Y/Z bounds are displayed explicitly in mm.

## Image and SVG workflow

File picker and drag/drop accept PNG/JPEG and a restricted, resource-free simple SVG subset. Input limit 2 MB; image headers must match the extension; at most 12 megapixels and 6,000 px on either side. Decode is bounded before processing; normalize to at most 500 px, then sample a **20 × 20 grayscale grid**. Fit/crop, X/Y crop shift, light/dark background inversion, threshold and relief depth are real inputs.

Threshold mode samples dark foreground as raised heights; grayscale mode uses inverse luminance. Heights form a triangulated continuous top surface over a 0.4 mm solid backing and are solid-unioned into the palm. Bright holes stay unraised on that backing; this is **2D-to-relief**, not exact outline tracing or full 3D reconstruction of a photograph. Checkerboard displays the actual sampled cutout. Engraving uses a real solid subtraction; 0.4–0.6 mm depth protects the floor. Raised relief supports 0.4–3 mm depth. Empty results are rejected. SVG is locally sanitized, rasterized at 256 px, then uses the same conversion (including holes). External resources, scripts, effects and non-shape elements are rejected. Text and six searchable bundled Unicode marks rasterize locally with bundled fonts and use this same geometry path.

## STL workflow

Binary and ASCII STL, at most 2 MB and 1,500 triangles. Units are absent from STL: explicitly confirm the oriented source dimensions represent **millimeters**. Select Z/Y/−Z up before attachment; changing it requests reattachment. Source 3D preview and X/Y/Z dimensions are shown. Coordinates must be finite, source dimensions 0.2–250 mm per axis. Validate welded edges, outward winding, positive volume, connectivity, triangle intersections, convexity and broad flat bottom before CSG. Open, nonmanifold, disconnected, concave, hollow, degenerate and unsuitable contact geometry is unsupported and rejected with guidance; there is no automatic repair or convex-hull replacement.

The actual source triangles are proportionally scaled in XY to a 4–7 mm footprint and independently fitted in Z to 0.6–5 mm grip height. Rotate ±180°, place X ±1.5 mm and Y ±2 mm, reset transforms, replace or remove. The model is fused using Manifold into the recessed palm landing with 0.15 mm overlap. A minimum 1.2 mm XY extent and 6.5 mm radial safe zone are enforced. A disconnected result is rejected. The isolated landing cannot cut into or fuse the cantilever leaves. Import scale, placement and shape measurably survive STL export.

## Generation and export

Debounced Web Worker owns Manifold WASM and robust solid union/subtraction. Stale-result IDs and exact input signatures gate downloads. Bounded resolution and source complexity keep work finite. Final component checks include manifold status, one connected component per part, finite coordinates, nonzero triangle areas, consistently opposed welded edge incidence and positive enclosed volume, also after Float32 print placement. Download the whole binary STL, its per-part STL button, or a real ZIP containing the STL and print notes. STL does not contain preview colours; no 3MF is advertised.

## Printing and calibration

Print the broad XY face down exactly as exported. Start experimentally with TPU 95A, a 0.4 mm nozzle, 0.2 mm layers and three perimeters; **do not use brittle PLA for these flexures**. One continuous part requires no release or assembly. Clear strings between leaves without cutting or nicking them. Gently press the raised upper pad toward the fixed lower rail, feel neighboring leaves engage, then release. Avoid hard overtravel; stop if force rises excessively, leaves whiten, or layers separate.

**Pocket Stack** is a full-size small calibration coupon. Print it first, check that all gaps are open, then try tiny motions. Gaps and flex response depend on printer, slicer, filament, temperature and age; no universal fit or compliance is promised. TPU still creeps and fatigues. Imported grips and image relief use the same material as the palm unless the maker deliberately changes their print process. No hardware, magnets or glue.

## Verification

`npm test`: 132 default/preset/extreme configurations and 35 image/STL-derived outputs. Parse actual binary STL; verify finite vertices, nondegenerate faces, normalized outward normals, welded two-face edge incidence, oriented neighbors, positive connected-component volume, genus, exact millimeter bounds and bed alignment. Independent solid intersection probes verify three free stage gaps and three leaf cross-sections on representative extremes and every imported-output case. Solid-difference checks prove imports remain confined to the palm, away from the leaf mechanism. Geometry checks cannot validate elastic behavior.

Dev server: `npm run dev -- --host 127.0.0.1 --port 5291`. `TEST_BASE=http://127.0.0.1:5291 node browser-test.cjs`, `node feature-test.cjs`, and `node resilience-test.cjs` exercise real PNG/JPEG/SVG/ASCII-STL/binary-STL uploads and actual downloaded geometry; threshold/depth/pixel/scale/placement differences; malformed/open/nonmanifold/concave/excessive inputs; all presets, variations, text and icons; saved theme, undo/redo, portable asset JSON and named-design round trips; real per-part and ZIP exports; stale-result gating and failed-worker recovery; 320/390 px layouts, touch orbit and pinch zoom. Reports record actual outcomes in JSON and screenshots. Production and gallery checks run separately.

**No physical print testing performed.** Rest geometry, intersection probes and approximate strain screening do not establish real force, progressive contact performance, fatigue life or print quality. These require a printed calibration trial.
