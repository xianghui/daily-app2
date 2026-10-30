# Film & Frame

A local browser studio for a **six-part soap-film dipping cage kit card**: two open collars and four double-ended, shouldered posts. Print one connected card, snip24 runners, calibrate eight sheet/socket joints and bond the frame. Dip it in bubble solution and observe spanning films. No membranes are fabricated in preview; no physical film formation is promised.

## Run and build

Node22.12+; React + Vite. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app `deploy` is `gh-pages -d dist`; public publication uses the monorepo ROOT deploy flow, not this script. Base `/daily-app2/20261031-3/`.

Dependencies are installed independently and bundled: React, Three.js/OrbitControls, Manifold3D WASM (Apache2), fflate (MIT), local Fredoka/Rubik fonts (OFL). No CDN, server generation, API key or paid service. Modern WebGL, Web Workers, WASM and File APIs required. The studio/import infrastructure is adapted from the lab's earlier apps; collar/post geometry, placement, assembly and checks are newly implemented.

## Reference-first evidence and attribution

Local candidates inspected first: Keycap Studio README, styles, App/Viewer, worker, STL, image and export modules; its actual `clicker_template2.stl` was parsed (944 triangles,3 components,15.2×15.2×43.1 mm), but switch interfaces are unsuitable for this kit. Weave README and actual `diamond-link.stl` were inspected (5940 triangles,7.981×9.241×8 mm,1 component), also unsuitable for a sheet kit. Reference trees remain read-only.

Selected design reference: **White Cat Kit Card**, Mike Kasberg, [source and README](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). License included as `reference-LICENSE.txt`. This independent reconstruction changes the subject, geometry, part arrangement and assembly; it adapts measured sheet/socket and carrier structure, not spacecraft appearance. Raw third-party mesh is NOT redistributed.

Freshly downloaded binary mesh: SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;30,616 triangles;179.820×178.020×3.190 mm. STL has no units; mm assumed and corroborated by source sheet dimensions.27 edge-adjacent components including24 tiny two-face fragments; source is NOT watertight. Used as design evidence only, not claimed repaired. See `reference-inspect.py`, `reference-measurements.json`, `reference-analysis.json` and actual mesh sections in `evidence/reference-sections.png`. Re-run the inspector with `/tmp/kit-analysis-venv/bin/python` after downloading the documented URL to `/tmp/film-frame-reference.stl`; trimesh/numpy/matplotlib required for evidence only, not browser operation.

Measured sheet planes0/1.6 mm, four4.5×1.700012 mm sockets at Z1.59, low carrier detail planes.21/.22 mm. Tongue4.4×sheet1.6 with .10 TOTAL allowance reconstructs that opening; .15 default and .10–.35 range are proposed FDM allowances, not measured universal tolerances. New runner thickness.4–.6 improves first-layer practicality; differs deliberately from source.

Visual reference applied concretely:374px left scrollable controls, sticky brand/theme header, collapsible numbered sections, paired mm sliders/numerics, tactile keys/pink selected states, lavender-grey desk/white panels/dark ink/coral accent, gradient live viewer, checkerboard conversion, current-result gating. Phone puts preview, dimensions and exports BEFORE controls. Dark theme persists. Rounded fonts are local.

## Parameters and assembly

All physical dimensions are **mm**. Card200–230×200–230; X/Y post spans32–42; shoulder-to-shoulder height28–44; collar thickness2.4–3.2; post sheet1.6–2; tongue width4.4–5.2; total socket allowance.10–.35; part spacing3.5–4; runner width.8–1.4/thickness.4–.6. Three genuine presets and square/rounded/chamfered collar profiles alter solids, preserving joints. Invalid values or insufficient envelope disable exports.

Top/bottom collars have matching open apertures (span−8 mm) and four through sockets each. Four posts stand on lower collar shoulders; top collar lowers vertically onto upper shoulders. Lower/upper tongues end .05 mm short of opposite collar faces; shoulder overlap≥1.025 mm. Eight seats require water-resistant adhesive: not snap-fit, not positively captured without glue. Clearances must be calibrated to material/printer. Test one post+collar; deburr elephant foot, never force. No bearing, magnet or fastener required.

Card is one actual Boolean-connected solid containing24 accessible bed-level runners. Four runners per part contact solid flanks away from tongues/sockets. Six clean individual parts export separately and lay flat on Z0. Assembled/exploded/isolated/de-tabbed views share exactly these meshes, differing only by rigid transforms. Exploded separation is explanatory only. Fit tests verify vertical insertion, seated shoulders, eight clear sockets and no assembled intersections; not strength, adhesive or wetting behavior.

## Local imports and real geometry

File picker works on desktop/phone; drop one source in Import. Synthetic `public/samples/`: PNG mark, JPEG waves, SVG ring, ASCII wedge and binary gem. These original synthetic fixtures are CC0. No personal inputs are in the repository. Replace/remove/reset returns to reproducible defaults.

PNG/JPEG: actual header verification before decoding; max2MB,12MP,6000px side. Normalized local PNG≤500px for portable save. Fit/cover crop,±25% panning, light-background removal or dark inversion. Resample20×20 grayscale; threshold1–254 or grayscale relief; continuous triangular height-field cutter subtracts an engraved mark. Depth.4–.6 with≥1.8mm backing. Bright holes remain unengraved; checkerboard shows selected sampled pixels. This is **2D-to-relief**, not automatic full3D reconstruction or exact SVG-outline tracing. SVG intentionally accepts only bounded simple paths/shapes, no external resources or script; rasterized locally to256px then same height field. Unsupported SVG is rejected.

STL: binary AND complete ASCII; max2MB/1500 triangles, each source axis.2–250mm. Parse original triangles, weld at1e-5mm, require exactly two opposite incident faces per edge, single component, finite/nondegenerate triangles, positive outward volume, no detected triangle self-intersections. Deliberate bounded contract: one **convex broad-flat-bottom solid**, bottom footprint≥25% of XY bounding box, no overhang outside bottom footprint. Concavities, hollow shells, multiple parts/open/nonmanifold/self-intersecting inputs are explicitly rejected. No repair, silent convex hull or concavity discard. Bottom convex polygon is used only to validate contact, never as replacement output geometry.

Confirm **millimeters**, because STL stores no unit metadata; Z/Y/−Z up selection (changing axis asks for reattachment), footprint4–7mm, proportional XY scaling and independent depth.4–.6mm, rotation±180°, offsetX±1.5/Y±2mm, center/reset. Source dimensions, unit confirmation and separate source preview shown. Exact imported triangles become a Boolean engraving cutter in the outboard top-collar grip; final geometry is different from both source and default. Grip radial safe zone6.5mm prevents mechanism obstruction. Thin engraving XY<1.2mm or unsafe transforms rejected.

Text(up to8 characters) and six searchable bundled icons use the same physical cutter workflow, not texture overlays. Raised marks deliberately unsupported to preserve flat printable geometry. Preview colors are NOT saved in STL.

## Responsiveness, persistence, export

Manifold WASM runs in a Worker; bounded20×20 height field, debounce and sequence IDs prevent stale results. Pending imports/conversions, invalid state, worker errors or last-good/current-key mismatch disable ALL mesh exports. Last-good preview is labeled when invalid; no silent stale export. Preview/download use identical checked mesh, with diagnostic fingerprint. Portable versioned JSON and six local named saves include bounded mesh/image payloads; missing imported payload errors request reattachment. Undo/redo restores geometry and assets.

Download binary connected-card STL or any per-part STL; Everything ZIP includes all7 STLs and numbered `ASSEMBLY.txt` with current fit report. Not a3MF; STL contains no color or unit metadata. Dimension readout reflects chosen export geometry. Orbit/zoom/fit work with touch; every export is independent of assembled preview pose. No external upload or file-processing service: all files remain local to the browser.

## Validation and printing

`npm test`: independent binary serializer checks (finite coordinates, exact byte count, nondegenerate triangles, stored normals,1e-5mm welded opposite edge incidence, positive volume per component, mm bounds); every part,3 presets,3 profiles, individual parameter extremes and combined min/max, plus image/STL-derived outputs. Independent Manifold intersection tests check all15 part pairs, vertical assembly, actual shoulder contact,8 socket probes, disjoint print layout,24 safe cuts→7 components and bed-supported cross-sections. `hole-check.mjs` probes real bright holes/dark recess/backing; `import-extremes.mjs` repeats all checks at combined extrema.

Browser scripts test production WASM paths, real PNG/JPEG/SVG/ASCII/binary picker inputs, actual STL/ZIP downloads parsed by independent checks, parameter/source changes vs default, export/current fingerprint and portable JSON exact regeneration, transforms/reset/removal, malformed/open/nonmanifold/concave/excessive input and empty art rejection, recoverable errors, worker abort/reload, named saves, undo/redo, presets/views/themes/focus/collapse, mobile320/390px no overflow and CDP touch orbit/pinch. See generated reports and `VALIDATION.md` for performed results, not promises.

Print flat,100%,PLA/PETG,.16–.20 layers,3 perimeters; no supports intended. Clip only runners outside part flanks and trim nubs. Calibrate and dry-fit, bond lower posts first then upper ring; cure all8 joints. Adhesive/filament must tolerate mild soap solution. Dip into separate dish, lift by marked grip, gently re-dip. Do not ingest/blow into solution. Rinse/dry. Small craft parts: keep away from children. No physical printing, assembly, strength, adhesive durability, wetting or soap-film testing has been performed; computational geometry cannot guarantee bubble behavior.
