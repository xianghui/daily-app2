# Grain & Rain

A local browser parametric **three-part kit-card** generator for a tiny dry-grain rain cassette. Snip twelve real breakaway runners, bond a slotted lid to a baffled trough, fill through the square opening, then bond its plug. Gently invert end-for-end to route grains through alternating passages. This is an original enclosure and grain-routing assembly, not another pulley, open ball maze or cosmetic clone. **Sound, grain flow and physical printing are untested.**

## Run / publish

Node 22.12+; `npm install`, `npm run dev`. `npm test` verifies geometry and assembly. `npm run predeploy` builds the app. Base path: `/daily-app2/20261031-16/`. Per-app `deploy` is installed as requested; publication uses the repository root's combined deploy directory, not the per-app deploy command.

React/Vite, Three.js + OrbitControls, locally bundled Fredoka/Rubik fonts, Manifold WASM worker, fflate ZIP. No CDN, server generation, API keys or paid services. User files are processed locally and never uploaded or checked into this repository. Named design saves stay in this browser; JSON downloads are portable.

## Reference-first evidence

See REFERENCE-SOURCE.md, reference-analysis.json, reference-measurements.json and evidence/reference-sections.png. The public attributed CC BY 4.0 White Cat Kit Card mesh was downloaded and actually parsed after inspecting local candidates. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; assumed mm dimensions 179.820 × 178.020 × 3.190. It contains 27 edge-adjacent components and source defects, not a repaired printable template. Measured 1.6 mm sheet and 1.700012 mm socket thickness inform `sheet + fit`; default .15 mm allowance is a proposed printer-dependent deviation from measured .10 mm. Tongue length is redesigned 4.5 mm. Source carrier architecture informs low removable runners, with redesigned .4–.6 mm thickness. The rain chamber, baffles, plug and carrier layout are new CSG. Raw reference mesh is not bundled.

Read-only Keycap Studio provided concrete layout/control patterns (documented in REFERENCE-SOURCE.md), not switch sockets or keycap geometry. This app reuses local maker-studio infrastructure from earlier daily apps, with a new model builder and independent mechanism tests.

## Parameters (all dimensions mm)

| Parameter | Supported range |
|---|---|
| Connected card width / height | 136–150 / 136–154 |
| Cassette width / length | 34–42 / 78–90 |
| Internal channel depth | 5–7 |
| Alternating passage | 4–6 |
| Baffle pitch | 9–13 |
| Floor / lid-and-wall sheet | 2–2.6 / 1.6–2 |
| Total key/socket allowance | .10–.30 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Three presets have real model thumbnails. Square, soft and clipped rear landings alter the solid. Baffle count derives from length/pitch; last baffle is kept clear of rear key supports. Four 4.5 × sheet tongues enter (4.5+fit) × (sheet+fit) lid holes. Baffles meet the lid with zero intended top bypass. Plug stem is 4 mm square; fill hole is 4+fit. Printed seats are clearance fits requiring adhesive, not snap locks. Minimum personalized landing backing is 1.4 mm across supported settings. The default carrier is 140 × 144 × 10 mm. Card envelope includes the tallest key; no parts extend outside its stated XY rectangle.

## Image, SVG, text and icons

PNG/JPEG ≤2 MB, ≤12 megapixels, ≤6000 px per side; validate headers before decoding, normalize to ≤500 px, then sample a 20×20 luminance grid. Simple SVG ≤2 MB, ≤2000 allowed elements, no active/external resources; rasterize locally to 256 px, then same conversion. SVG text/effects must be flattened first. Bundled icons and short text are rasterized locally using the same pipeline.

Thresholded dark silhouette or grayscale heights form a **closed triangulated heightfield**, Boolean-subtracted into the exterior rear landing. White image holes remain unengraved inside a continuous backing; this is not through-cut outline tracing, and not full 3D reconstruction from one photo. Source and actual threshold/cutout previews are shown on checkerboard. Fit/crop, background light/dark inversion, threshold 1–254, depth .4–.6 mm, crop shifts ±25%, footprint 4–7 mm, rotation ±180° and X/Y placement alter exported geometry. A 6.5 mm circular safe zone blocks transforms entering interfaces; unsupported combinations produce recoverable errors. Engraved-only personalization protects the chamber.

## Imported STL

ASCII and binary STL, 40 bytes–2 MB, ≤1500 triangles, each dimension .2–250 mm. Units are explicitly confirmed as **millimeters**, since STL has no metadata. Select Z up, Y up or −Z up before attaching; changing axis clears the source and asks for reattachment. Original source dimensions, triangle count, format and source 3D preview are displayed. XY is scaled proportionally to 4–7 mm footprint, Z independently to .4–.6 mm cutter depth; scale factors are shown. Rotate, place and reset transforms, replace/remove and return to defaults.

The actual imported mesh is transformed and Boolean-subtracted into the landing, not displayed/re-exported unchanged. This bounded integration supports one outward-wound, watertight **convex solid with broad flat bed contact and no XY overhang**, no hollow shells, thin branches or disconnected solids. Unsupported concavities are rejected, never replaced with a hull. Edge incidence, orientation, finite/bounded vertices, degeneracy, positive volume and self-intersection checks precede CSG. No automatic repair is claimed. All accepted imported outputs undergo the same final mesh checks. Samples in public/samples are synthetic, not private/third-party source meshes.

## Studio and exports

Saved light/dark theme; desktop left controls/right preview; phone preview first with exports above controls. Tactile states, keyboard focus, 44 px targets and reduced-motion support. Orbit, zoom, fit, ghost lid and assembled/exploded/connected-card/de-tabbed/isolated views all use current actual meshes. No fake grain simulation. Undo/redo, six local named designs and JSON save/open carry bounded image/mesh payloads; missing images explicitly require reattachment.

Worker-owned Manifold solid operations, 100 ms debounce and request/current-state guards prevent stale export. Invalid edits keep a labelled last-good preview, with exports disabled. Preview and binary STL share the same current valid model; UI fingerprint is checked against downloads. Every solid must have finite coordinates, nondegenerate faces, opposite-directed edge pairs, positive volume and exactly one connected component. Per-part STLs and Everything ZIP include the connected card, three clean parts and numbered assembly/printing notes. ZIP is not 3MF; STL contains no preview colours or units. Every exported part is bed-aligned, never exported in assembled overlap.

## Printing and assembly

See PRINTING.txt (also in the app and export ZIP). PLA/PETG, .16–.20 mm layers, three walls, 100% scale. Trough open-side up, lid top up, plug cap down. All are intended support-free; inspect in your slicer. Snip at accessible runners 1.6 mm away from parts, trim nubs. Test one tongue/socket region first with your material/printer.

Bond empty trough perimeter, keys and baffle tops to lid. Cure, then add a small pinch of dry 1.5–2.5 mm grains through the fill port (under 10% cavity fill). Bond plug and cure. Adhesive, optional exterior tape and dry grains are external consumables, not included. Do not claim a sealed vessel without testing seams; operate over a tray. Not food-safe, watertight, pressure-rated or a young-child toy. Gently invert, no vigorous shaking. Flow/sound may vary or jam; geometric passage tests do not establish physical granular dynamics.

## Validation

`npm test`: all presets, three silhouettes, simultaneous min/max and every single-field boundary (34 built-in cases); 18 threshold/relief and exact imported-STL cases; invalid parameter and empty-image rejection. Independent binary STL parser checks byte lengths, finite triangles, normals, bounds, manifold oriented edges, connected-component positive volume and Euler characteristic. Actual CSG checks assembled pair collisions, vertical lid/plug insertion, 2.5 mm zig-zag grain-path probes, floor continuity, baffle-to-lid contact, separate card layouts, safe cutting, released component count (three parts plus frame) and sampled upper sections within bed footprints.

`node browser-test.cjs`, `studio-test.cjs`, `personalization-test.cjs`, `axis-test.cjs`, `stale-test.cjs`, `hole-check.mjs` exercise actual production worker/WASM, real PNG/JPEG/SVG/ASCII/binary pickers and downloaded STL, source/threshold/depth/scale/placement differences, exact preview/JSON/export identity, malformed/open/nonmanifold/concave/excessive input recovery, presets, text/all six icons, true Boolean hole preservation, undo/redo, portable/local saves, ZIP contents, worker failure/stale results, touch orbit/pinch, 320/390 px phones, layout/theme/focus/collapsibles. Reproducible reports/screenshots are retained beside the app. Gallery and root combined build are checked separately before publication.

**Computational validation is not a physical print, adhesive strength, sealing, grain-flow or acoustic test. None of those physical tests has been performed.**
