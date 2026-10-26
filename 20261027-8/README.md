# Halfstep Roll

A local React + Vite parametric STL studio for a three-part **parallel-surface rolling speed-halver fidget**. Guide a thumb sled over a free drum on a fixed runway, then reverse. Unlike an axle roller, the drum translates and rolls between two surfaces: ideal no-slip center travel is half the sled travel. The archive and current gallery were inspected; this is distinct from the cylindrical-joint Roller Ferry, S-band guide, and orbital rolling bearing.

## Run

`npm install`, `npm run dev`, `npm run predeploy`. `npm test` runs computational geometry tests. Individual `deploy` uses gh-pages, but publication uses the parent monorepo's combined `deploy/` flow. No API key, network service, CDN import, or server-side generation. Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik fonts; Playwright for verification, gh-pages for publishing.

## Mechanism and printing

Three separately printable connected solids: **palm-runway** (PLA/PETG), **rolling-drum** (TPU 95A recommended for traction), **thumb-sled** (PLA/PETG). A rigid PLA drum is a hardware-free alternative but can slip more. No hardware, adhesives or supports intended. Print each individual STL flat at Z=0. The drum prints upright on a circular end and is turned onto its side for assembly. Suggested starting settings: 0.4 mm nozzle, 0.20 mm layers, three walls, 20–35% infill; TPU drum 40–60%. Remove elephant foot and smooth the two contact faces.

Put drum crosswise in runway center; lay sled on top between guides. Keep level and apply gentle downward thumb pressure. All moving pieces are **loose, not captive**. End walls bound motion; lift sled then roller to disassemble. No automatic return or positive drive is promised. The exact preview is an ideal rolling placement, **not a friction/elastic simulation**. Circular facets approximate a smooth rolling surface. Actual slip, TPU compression and traction depend on finish and material. Never force against a stop.

Let sled displacement be `s`, drum radius `r`: drum center displacement is `s/2`, drum angle is `s/(2r)` about the crosswise axis. Supported half-stroke is `(runwayLength-sledLength)/2-2-guideGap`. Independent checks sample both motion and vertical release using actual CSG intersections, contact-under-sled margins and end clearance. Surface contact itself is not a force prediction.

**Calibration:** Easy Roll is a full-size fit trial. Check free lateral movement before assembly, increase guide gap if binding, and reprint instead of forcing. Side gap 0.3–0.5 mm is only an FDM starting range, not universal. There are no compliant hinges or snap fits. **No physical printing, friction, traction, wear or fatigue testing was performed.** Small loose parts: not for children.

## Dimensions and controls

All physical units are millimeters. Palm diameter 22–28; runway length 40–48; sled length 18–24; guide clearance per side 0.3–0.5; drum radius 4–5; drum width 10–12; palm dimple depth 0–0.6. Three genuine presets: Easy Roll, Halfstep Roll, Short Sweep; round/hex/oval palm shapes, bounded random variations, paired numeric/sliders. Out-of-range/nonfinite inputs disable export. Final X/Y/Z shows actual print-plate or selected-part bounds. Prints are support-free in the provided orientation, not assembled positions.

Desktop uses a 374 px scrolling left studio rail, sticky brand/theme header and right live 3D stage. Phone stacks preview, dimensions and exports first, controls below. Locally bundled rounded fonts, lavender-grey desk, white panels, coral accents, tactile selected buttons, saved dark mode, focus outlines, collapsible sections, reduced motion. Orbit/zoom/fit and touch pinch; assembled, exploded, print plate and isolated views; see-through base. Undo/redo, six named local designs, portable JSON containing bounded assets. Preview colors never imply color in STL.

## Local image → real geometry

PNG/JPEG and restricted simple SVG; picker on desktop/phone and single-file drop. 16 bytes–2 MB; PNG/JPEG at most 12 megapixels and 6,000 px per side, content headers checked before decode. SVG permits only simple geometry, no scripts/external resources/effects, up to 2,000 elements; rasterized locally to 256². Images normalize to at most 500 px for portable storage.

Exact conversion: fit/cover and ±25% crop shift into a 20×20 luminance grid. Threshold mode sets heights to zero or selected depth; grayscale mode uses `depth*(1-luminance/255)`. Adjacent samples are triangulated into a closed height-field solid with backing, then solid-unioned into (or subtracted from) the palm's isolated center well. The image's bright/transparent holes remain unraised/unengraved above the continuous floor, **not through-holes**. This is sampled **2D-to-relief**, not exact outline tracing or full 3D reconstruction from a photo. Source and checkerboard cutout are shown. Background light/dark inversion, threshold 1–254, depth 0.4–3 mm raised or 0.4–0.6 engraved, physical footprint 4–7 mm, rotation ±180°, X offset ±1.5 and Y ±2 mm. Transformed geometry must remain within the 6.5 mm-radius safe well; protected mechanisms cannot be modified. Empty relief is rejected. Bundled searchable vector icons and text use the same real conversion pipeline.

## Local STL → integrated grip

Binary and ASCII `.stl`, at most 1,500 triangles / 2 MB, each source axis 0.2–250 mm. Content/coordinate/index/triangle checks precede heavy modeling. Welded directed edge incidence and positive outward volume checked; only connected, closed, outward-wound, convex, flat-bottom, supportable inputs are supported. **Concavities, holes/cavities, branches, disconnected shells, open/nonmanifold meshes and unsupported overhangs are explicitly rejected**, never replaced by a convex hull or falsely repaired. Reorient or remodel a supported flat-bottom grip before trying again. Original uploaded vertices/faces are retained and solid-unioned into the base.

Select Z/Y/−Z up axis before attaching. Inspect source preview/dimensions, then explicitly confirm source coordinates in millimeters: STL has no unit metadata. XY scales proportionally into 4–7 mm footprint; independent Z height 0.6–5 mm; rotate and place inside the isolated safe well. Minimum XY feature envelope 1.2 mm. Measurable import scale/rotation/placement changes survive export. Replace/remove, center/reset, image reset and full built-in reset are provided.

## Export, state and privacy

One binary STL for all parts on a separated, nonintersecting print plate; individual part buttons; Everything STL+notes ZIP (not 3MF). Preview and export share the exact current generated meshes and state key; a fingerprint is available on the stage. Worker generation is debounced with stale-result guards and visible build/error/ready status. Errors disable exports; a last-good preview is explicitly labelled and cannot silently export.

Portable JSON contains bounded normalized image data or mesh vertices, not nonexistent local paths; missing image payload requests reattachment. Named designs are local storage only. Files never leave the browser; no personal files are stored in this repository. Samples in `public/samples/` are original CC0 synthetic fixtures, with bundled font licenses in `public/FONT-LICENSES.txt`.

## Reproducible validation

`validate.mjs` independently parses binary STL: exact byte length, finite coordinates, nonzero faces, unit normals consistent with winding, 1e-5 mm vertex welding, two opposite incident triangles per edge, positive signed volume per connected component, expected dimensions and Z=0 bed orientation. Checks each intended part and float32-translated print plate. Defaults, three presets, 64 mixed parameter corners, and 35 image/STL-derived combinations undergo mesh and independent sampled mechanism checks. Per-sample intersections verify no unwanted overlap, contact under sled, end clearance, half-speed ratio, vertical disassembly, separated plate and import isolation. No physical validation is implied.

Production build served under its real `/daily-app2/20261027-8/` prefix by `node serve-production.cjs`. Run `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node resilience-test.cjs`, `node stale-import-test.cjs`. These test actual file-picker imports and downloaded STL, geometry fingerprints against preview and reconstructed JSON, PNG/JPEG differences, threshold/depth/crop, ASCII/binary STL unit confirmation and transforms, malformed/open/nonmanifold/excessive/unsupported files, replace/remove/reset, every preset, marks and SVG holes, real ZIP/per-part exports, saved state/undo/redo, production worker abort/recovery, stale inputs and 320/390 px touch orbit/pinch/downloads. Reports and screenshots are saved alongside scripts. Gallery validation preserves all earlier entries and compiles inline scripts with `new Function`; root stage checks byte-identical production assets.

## Reference and reuse

Read-only reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: inspected README, styles, App, Viewer, imageTrace, worker and STL/export modules. Concrete maker patterns adopted: tactile selection keys, left collapsible parameter rail, local source/cutout previews, explicit source dimensions/units, worker-owned solid builds and printable-part exports. No keycap sockets or switch templates imposed. Reuses established local studio infrastructure with a newly implemented rolling mechanism and independent mechanism-specific tests. The archived gallery and reference were not modified.
