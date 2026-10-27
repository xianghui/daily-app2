# Spool & Snip

A browser-local parametric **winding spool kit-card generator**. Snip sixteen accessible breakaway tabs, cross two opposite-slotted core webs, then slide two cross-mortise flanges over the end tongues. This is a genuine connected carrier STL, not loose parts beside a decorative frame. Four bed-flat part STLs and an Everything ZIP (including numbered assembly instructions) are also available.

## Run

`npm install`, `npm run dev`; production: `npm run predeploy`. The configured public base is `/daily-app2/20261027-27/`. The individual `deploy` script exists as requested, but publication uses the **parent monorepo root deploy/** flow.

## Reference first: provenance and adaptation

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first (33 mesh files excluding dependencies). Local robot/animal kit-card projects contain no suitable reference STL. Slider, switch and articulated-link meshes do not supply sheet/card interfaces, so they were not imposed on a kit card.

Inspected downloadable source: **Mike Kasberg, White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Repository README, LICENSE and `kit_frame.scad` were read, and the actual binary STL downloaded and parsed. Attribution and changes are retained here, in the UI and assembly ZIP.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles, 1,530,884 bytes; assumed mm (STL lacks unit metadata), corroborated by OpenSCAD sheet thickness.
- Bounds approximately 179.820 × 178.020 × 3.190 mm. Welded edge-adjacency yields **two components**, with source nonmanifold/coplanar artifacts; this is **not** claimed to be a validated printable input.
- Mesh sections at Z=0.1, 0.5 and 1.59 mm, vertex-Z histogram and measured rail section are recorded in `reference-analysis.json` and `reference-sections.svg`. The sheet has planes at 0/1.6 mm, perimeter rail is 1.6 mm wide, and bridge faces include .21/.22 mm heights.
- Preserved construction principles: bed-flat sheets inside a real carrier, thin sacrificial bridges, separate assembly interfaces. Default sheet thickness remains measured 1.6 mm.
- Original redesign: crossed core webs, opposing axial half-laps, crossed flange mortises, winding space, flanges, four-part card layout and sixteen cutter-accessible tabs. The carrier is reinforced to 2.4 mm and bridges to .4–.6 mm thickness. These are **proposed design choices**, not source measurements. All spool joints and .15–.45 mm total slot allowances are redesigned.
- No raw third-party or private source mesh is bundled. This is an original parametric reconstruction from measured construction principles, not an unchanged re-export or convex-hull substitution. Reproduce inspection with `python3 reference-analysis.py /path/to/downloaded/reference.stl`.

### Maker-studio interaction reference

Read-only inspection of `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, image tracing and STL/export modules informed the concrete studio patterns: 374 px left scroll panel, sticky brand/theme header, raised tactile controls and pressed selections, labelled collapsible sections, paired range/mm inputs, cutout checkerboard, explicit imported-mesh orientation and millimeter confirmation, current-result worker gating, large right viewer and export panel. Phone layout puts preview/export before stacked controls. Bundled Fredoka/Rubik, lavender-grey desk, pink accents and saved dark theme follow that reference. No switch sockets, keycap templates, reference deployment scripts or Git history were copied. Shared parser/import/editor infrastructure is adapted from our existing daily studios; the spool solids and assembly checks are new.

## Parameters (all physical lengths mm)

| Parameter | Supported range |
|---|---|
| Card width / height | 180–210 / 160–190 |
| Core diameter / winding length | 16–22 / 30–44 |
| Flange diameter | 46–56; oval is 1.1× as wide |
| Sheet thickness | 1.6–2.4 |
| Total slot allowance | .15–.45; start at .30 and calibrate |
| Runner offset | 8–12; changes cell placement |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Dimple depth | 0–.4 |

Three genuine presets have model thumbnails; round, octagonal and oval flange solids affect export. Bounded variation, undo/redo, six local named designs and JSON save/open are implemented. Core tongues are core diameter minus 4 mm wide, project sheet thickness + 1 mm, and seat on 2 mm shoulders. Slots are sheet thickness plus the stated **total** allowance, with half that allowance on each side. Opposing half-laps have half-allowance axial relief. Unsupported parameters block exports rather than clamp silently.

## Local image-to-geometry

File picker on phones/desktops and single-file drag/drop: PNG, JPEG and simple SVG. File content/type is checked, maximum 2 MB, PNG/JPEG maximum 12 MP / 6,000 px per side before decoding. Portable PNG payloads normalize to at most 500 px, and the **20×20** geometry sampling is deliberately bounded. SVG supports simple filled geometry, with ≤2,000 elements, no scripts, links, effects or embedded resources; it is rasterized locally to 256 px.

Fit/cover, crop shift ±25%, remove light / invert dark background, threshold 1–254, grayscale relief and raised/engraved controls drive actual mesh geometry. Threshold converts dark sampled values to a raised height; grayscale maps darkness proportionally. The grid is triangulated into a watertight height solid with .4 mm backing, then solid-unioned with or subtracted from a shallow flange well. **This is 2D-to-relief, not full 3D reconstruction from a photo or exact vector contour tracing.** White/transparent holes remain unraised/unengraved on a continuous solid backing; SVG ring holes are checked by solid probes. Checkerboard shows the actual sampled conversion, and original image preview remains available. Features below sampling/printing resolution may disappear.

Relief depth .4–3 mm; engraving .4–.6 mm preserves at least .8 mm floor at minimum sheet thickness. Text (up to eight characters) and six searchable bundled original SVG marks use the same real geometry path. Preview colours are not stored in STL.

## Local STL-to-geometry

Both binary and ASCII STL, ≤2 MB and ≤1,500 triangles, source dimensions .2–250 mm per axis. Choose Z, Y or inverted-Z up **before attaching**; changing orientation clears the source and requests reattachment. Source dimensions, triangle count, format and interactive source preview are shown. **Explicit millimeter confirmation is required** because STL has no units.

Supported integration contract: one outward-wound, closed, convex solid with broad planar bottom (≥25% of XY bounding area), no branches, cavities, concavities or unsupported overhangs. Edge incidence/winding, connectedness, positive volume, finite coordinates, degeneracy and triangle intersections are checked in the worker. Unsupported geometry is rejected with actionable feedback; no mesh repair or replacement convex hull is performed. Convexity is a supported-input restriction, not an algorithm that discards imported detail.

Actual source vertices are proportionally scaled in XY to 4–7 mm footprint and independently in Z to .6–3 mm, with rotation ±180° and offsets X±1.5 / Y±2 mm. At least 1.2 mm XY extent is required. The transformed solid must remain inside a 6.5 mm radius diagonal medallion keep-out region outside both mortises. It embeds .15 mm into the well and is **solid-unioned** into the flange. Source shape, scale, height, rotation and placement survive into exported geometry. Invalid placement disables export. Replace/remove/reset are recoverable; returning to defaults reproduces the original mesh signature.

Personal input files never leave the browser or enter the repository. Synthetic fixtures in `public/samples/` were made in-house: `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`. JSON/local saves carry bounded image/mesh payloads; missing/invalid payloads are rejected and require reattachment rather than pretending restoration succeeded.

## Modeling, preview and export

Manifold WASM performs real solid booleans in a Web Worker, debounced 100 ms with request-id and exact-current-state export gates. Invalid edits may retain a clearly labelled last-good preview but **cannot export it**. Worker failures disable export and explain reload recovery. Every generated part undergoes closed-edge/outward-winding/finite/nondegenerate/positive-volume checks. Three.js shares these exact final meshes with binary STL export, and UI/export fingerprints are checked in browser tests. Assembled, exploded, connected-card, de-tabbed layout and all isolated views use those same solids. The flange insertion control is a preview-only separation along the checked axial assembly path, not a simulation or alternate export geometry. Fit/zoom/orbit, touch orbit and pinch are supported.

Dependencies are installed locally: React, Vite, Three.js, Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL). No API, key, remote generation, CDN runtime or paid service. Playwright is a development-only validation dependency.

## Print and assembly

1. Print the connected card or four individual parts face-up at Z=0, mm at 100%. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls; no supports intended. Minimum tabs are two layers high.
2. Snip all 16 sacrificial bridges at least 2 mm outside each part, trim nubs and discard carrier. Do not cut functional tongues/half-laps/mortises.
3. Hold core A/B perpendicular, openings facing; slide along their long axes until midpoints align.
4. Slide the plain flange onto bottom crossed tongues to the shoulders, then marked flange onto the top, decorated face out.
5. Wind craft thread/ribbon around the crossed core. Slip joints remain **removable/non-captive**, not snap-locked; optional adhesive after calibration makes a permanent bobbin. No hardware required.
6. Calibrate both cores and one flange first. Increase total allowance in .05 mm steps if tight. Fit depends on printer/material/first-layer expansion. Never force thin sheets.

Computational geometry/assembly checks are **not physical print tests**. No physical print, fit, strength, load, winding-capacity or fatigue test has been performed. Not a powered reel. Adult handling of cutters and small parts.

## Reproducible validation

`npm test` checks defaults, three presets, all-parameter extrema and variations, plus threshold/grayscale/engraved image and ASCII/binary STL-derived outputs. Binary exports are independently parsed, welded at 1e-5 mm, and checked for edge incidence two, opposite edge direction, positive component volumes, normals, finite coordinates, nondegenerate triangles and expected bounds. Every intended part is checked separately. Kernel intersection tests cover six assembled pairs, full core insertion and flange assembly paths; carrier inclusion, non-overlap, sixteen tab cuts → exactly five components, shoulder/lateral constraints and import keep-outs are tested independently.

Serve actual built output with `node serve-production.cjs`, then run `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs`, `node studio-layout-test.cjs`, `node portable-errors-test.cjs`, `node stale-import-test.cjs`, `node hole-test.cjs`. Reports/screenshots reside beside these scripts. `VALIDATION.md` records executed results. No unperformed physical testing is implied.
