# Polar & Scroll

A local maker studio for a **five-part flat-pack spiral-follower kit**. Turn a radial slotted arm over an Archimedean guide; a shared M3 pin moves outward as the arm turns. This is an original slot-pair interaction, not a keycap, unchanged STL re-export or recoloured previous kit. The guide, radial arm, finger cap and two trestles are held to a real connected carrier by **twenty removable runners**.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik (Fontsource). Generation, import validation, solid differences/unions and final mesh preflight run in a worker with a 100 ms debounce and request-ID/current-state guards. No CDN, paid service, upload or API key. Source files remain read-only. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public monorepo publication uses the ROOT deploy flow, not the per-app deploy command.

Choose a preset or edit paired numeric/range controls. All physical distances are **millimeters**; sweep is degrees. Three actual edge profiles, three real model thumbnails, text and six searchable vector marks, saved light/dark theme, undo/redo (debounced snapshots), six named local designs, portable JSON and individual-part isolation are implemented. Export actions remain beside the viewer on phones; preview is first and controls stack below. Preview colours do not survive into STL.

Assembled, exploded, connected-card, clean plate and isolated-part views use the same final model. The follower progress changes only the explanatory rigid assembly pose (8–92% stroke), not printable geometry. Blue pin-axis marker is preview-only, not a printed pin or complete hardware model. External bolts/washer/nuts are omitted and must be supplied. Download binary STL for the connected card, clean parts or individual parts. Everything ZIP contains six STLs (card plus five clean parts), portable JSON and numbered instructions. **Print card OR clean parts, not both.** No 3MF claim.

## Reference-first evidence

Local candidates were inspected before choosing geometry: the keycap template's three MX socket/stem components and the 8 mm interlocking fabric link do not provide planar kit-card interfaces. Their hashes, dimensions and component counts are in `reference-analysis.json`. The current visual/interaction reference was inspected read-only: `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL parser and export module. Concrete patterns adapted: 374 px left control panel, compact sticky brand, disclosure sections, paired mm controls, tactile pressed keys, pale lavender workspace, white panels/coral selections, checkerboard cutout/source previews, imported-mesh orientation/units, fitted orbit preview, explicit export status and print instructions. Its source, dependencies, Git history and deploy scripts were not copied.

Selected construction reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** (upstream LICENSE downloaded and verified). The actual binary STL was freshly downloaded, parsed and sectioned. `reference-analysis.py` reproduces inspection using trimesh/numpy/matplotlib; `reference-analysis.json` records URL, SHA-256, units, dimensions, edge-connected components, source defects and section measurements. `evidence/reference-sections.png` shows actual mesh sections at Z=.10/.215/1.59 mm. Source has duplicate/degenerate pseudo-components; its global nonmanifold condition is documented, not passed off as a validated output. We reconstruct original solids rather than distributing the raw source.

Measured: **1.60 mm sheet, 4.50 × 1.70 mm receiver sockets, .21–.22 mm runner tops**. Preserved: default sheet and receiver widths; accessible bed-flat removable carrier. Redesigned: independent polar slot pair, M3 pin clearances, two-tongue trestles and finger cap, stronger .4–.6 mm runners. Socket length remains 4.50 mm; tongue length is 4.50 minus .10–.30 total allowance. Source's .10 mm sheet-width allowance is the default, not a universal fit. Running clearances, pivot gap, support height, spiral geometry and artwork keep-in zone are **proposed design dimensions**, not source measurements. No MX socket is imposed on this unrelated mechanism. The source's cat/spacecraft outline and raw mesh are not bundled.

## Parameters and fit

| Parameter | Range |
|---|---|
| Card width / height | 210–280 / 180–250 mm |
| Inner spiral radius | 12–16 mm |
| Radial travel | 16–24 mm |
| Spiral sweep | 210–290° |
| M3 diametral running clearance | .30–.60 mm |
| Sheet/socket total clearance | .10–.30 mm |
| Sheet | 1.6–2.4 mm |
| Part spacing | 3–5 mm |
| Runner width / height | .8–1.2 / .4–.6 mm |

`r(θ)=innerRadius+travel×θ/sweep`; 100 bounded chord segments define a closed, round-ended through-slot. Straight radial slot extends 2 mm beyond the analytic radial endpoints. The guide's outer half-width is inner+travel+11 mm, with sufficient wall around all source-inspired sockets and a safe art corner. Two 8 mm trestles elevate the guide for access to bolt heads. The 1 mm spacing washer keeps the arm clear of guide top and tongue tops. Running bodies remain separate. Glue is required to keep trestles seated: these are not snap joints. Bolts, large washers and locknuts positively retain the pivots; locknuts must leave axial free play.

### Required external materials and assembly

- 2 × M3×20 fully-threaded bolts; 2 × M3 locknuts.
- 4 × 3.2 mm ID / 7 mm OD / .5 mm washers.
- 1 × 3.2 mm ID / 7 mm OD / 1 mm spacing washer (central pivot only).
- Adhesive for four trestle tongues and cursor-cap/upper washer.

Print flat, Z=0, PLA/PETG, .4 mm nozzle, .16–.20 mm layers; no supports intended. Snip four accessible low runners per part and trim scars. Bond guide onto the two trestles, then fit central pivot: head → washer → guide → 1 mm spacer → arm → washer → locknut. Follower: head → washer → spiral slot → 1 mm air gap → arm slot → washer → finger cap → locknut. Cap underside sits .65 mm above arm top in the rigid view (.5 mm washer plus .15 mm proposed axial gap). Bond its upper washer to cap only; never bond moving sheets together. Let all glue cure. Leave running play and turn gently; stop at the slot ends. Numbered detailed guide is visible in-app and included in ZIP. Hardware-free conversion is not offered.

Print guide and arm first as full-size calibration; material, layer expansion, thread crests and slicer compensation change fits. Computational clearances cannot predict friction or force. **No physical printing, assembly, motion, durability or material tests were performed.**

## Image workflow: actual relief, not photo reconstruction

PNG/JPEG/simple SVG via desktop/phone file picker or drag/drop. Actual file content, size ≤2 MB, dimensions ≤6000 per side and ≤12 MP are checked before decoding. Image is normalized to ≤500 px and sampled to a bounded **20×20** grid. SVG supports simple paths and shapes; scripts, links, external resources, effects, fonts and embedded rasters are rejected. Use converted outlines for SVG text.

Choose light/transparent background removal or dark/invert, thresholded silhouette or grayscale relief, fit-entire/crop-fill, crop shifts, physical footprint, rotation and offsets. A checkerboard shows the actual cutout beside the source. Threshold sets grid heights; grayscale maps luminance to depth. A closed triangulated height cutter is Boolean-subtracted from the protected guide corner. Bright holes retain full backing; this is sampled height geometry, **not exact vector tracing**. Engraved only, .4–.6 mm depth; at least 1 mm of unbroken backing remains. Raised mode is intentionally unsupported so the flat kit's declared thickness is preserved. This converts **2D to relief**, not a full 3D object from one photo.

Text (up to eight characters) is rendered with bundled Rubik then follows this same local conversion; six bundled SVG icons follow the same path. Small lettering is limited by the 20×20 grid; use short bold marks and inspect the actual result.

## STL workflow and explicit limits

Both binary and ASCII STL are parsed locally; no unit metadata exists. Source preview shows oriented dimensions, triangle count, format and explicit **confirm millimeters** checkbox. Select Z-up/Y-up/−Z-up before attachment; changing it clears the old source and requests reattachment. XY scales proportionally to footprint, Z independently to engraving depth. Rotation, XY placement, center/reset, replacement, removal and return to defaults affect actual mesh integration, not a texture.

We use the original verified triangles as a **mesh-shaped solid cutter in the guide body**, not a convex hull or unchanged re-export. Supported input is deliberately bounded: one closed connected outward-wound **convex** broad flat-bottom solid, 1–1500 triangles, .2–250 mm per axis, 2 MB. Reject open/nonmanifold, degenerate, negative-volume, disconnected, self-intersecting, concave, hollow, narrow-contact, overhanging or nonfinite input with actionable errors. Concavities are never silently discarded or repaired; prepare a supported closed solid in a modeler. Source bottom footprint must cover at least 25% of XY bounds and support all projected points. This narrow integration contract makes engraving floors and keep-outs verifiable. Footprint 4–7 mm, depth .4–.6 mm, rotation ±180°, offsets X±1.5/Y±2 mm; keep-in radius 5.8 mm is checked after transformation. Invalid combinations disable export.

## Privacy and persistence

Personal files are processed only on-device. No remote fetch except user-selected bundled synthetic fixtures. No personal source files in the repository. Portable JSON and named designs include bounded normalized image/mesh payloads, not inaccessible local paths; missing image payloads demand reattachment. JSON is limited to 2 MB and restored STL payloads are reparsed. Saved names and theme use localStorage. Undo/redo stores up to 35 debounced snapshots. Invalid or unfinished edits block all STL/ZIP actions immediately; a visible last-good preview is labelled and cannot be silently exported.

## Computational validation

`validate.mjs` independently parses exported float32 binary STL: nonempty faces, finite coordinates, correct length, normalized normals, nondegenerate triangles, dimension bounds, bed alignment, welded edges with exactly two oppositely directed incidents, connected-component count and positive signed volume for every component. It checks all presets, edge profiles, simultaneous minimum/maximum settings, individual field extremes, image and imported-mesh variants. Additional tests cut all twenty runner corridors and require carrier plus five unharmed released pieces, no floating fragments, no print-plate overlap, all bed footprints supported, exact card envelope and accessible open sockets.

Mechanism checks are independent of watertightness: sampled complete stroke including endpoints, no printed-body intersections, 3 mm pin clear in both slots/cap, central pivot hardware keepout, real 7 mm retaining washer lands, sheet clearance, 1 mm axial spacing and vertical guide insertion over all trestle tongues. These are geometric checks, not force/dynamic testing. Browser suites exercise real PNG/JPEG/ASCII/binary file uploads and download/parse actual STLs, source/threshold/depth/transform changes, invalid input recovery, presets, shape/text/icons/SVG holes, per-part/ZIP content, portable round trips, named persistence, worker-abort/recovery and stale-result blocking. Mobile suites check 320/390 px, preview-first stacking, controls/export reachability, actual touch orbit/pinch and overflow. Production tests run at the actual Vite base path. Results/screenshots are saved alongside this README. Physical testing remains unperformed.

## Attribution and code

Manifold Apache-2.0; Three.js/React/fflate MIT; bundled Fontsource Fredoka/Rubik SIL OFL. Six simple original vector marks in `src/icons.js`. Synthetic sample image/mesh fixtures are project-generated. Studio import/history/view/export scaffolding adapts the existing daily-app studio; the spiral-guide, radial arm, follower math, trestles, fit checks, assembly instructions and interface are new, not a copied earlier mechanism. Third-party construction source is attributed above under CC BY 4.0; no source STL is redistributed.
