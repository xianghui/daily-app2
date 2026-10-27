# Slide & Stow — sliding-lid box kit-card studio

A React + Vite browser maker studio for a genuine connected six-panel kit card: floor, two mirrored blind-groove guide walls, tall rear wall, short front wall, and a removable personalized sliding lid. Twenty-four thin sacrificial tabs join the parts to a two-column, three-row carrier. This is an original box assembly, not a re-export of a source STL or a cosmetic replacement for a winding spool or tray. The slider is deliberately removable, not captive. No hardware required; optional adhesive on stationary floor tenons only after calibration.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. `npm run deploy` is available for the individual app; publication of this collection uses the parent monorepo deploy flow. Vite base is `/daily-app2/20261027-28/`.

Dependencies are npm-bundled React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, and Fontsource Fredoka/Rubik. No CDN, API key, external model fetch or server is needed to generate/preview/export. All image and STL processing is local. Browser tests use Playwright.

## Actual reference evidence / attribution

Local search was performed first under `/Volumes/ExternalHD/3d_printing_apps/`: clicker, telescoping-slider and interlinked-fabric meshes are not suitable sheet/card construction references. Kit-card source projects contain no STL suitable for inspection. The mandatory primary UI reference `keycap_generator2` README, styles, App, Viewer, worker, STL and export modules were read without editing the project. Concrete patterns applied: 374 px scrollable left rail, sticky compact brand, labelled collapsible controls, paired numeric/sliders, raised selection buttons, bounded local imported-base controls, worker status/export gating, local fonts, light/dark themes, and preview-first phone layout. Shared original collection studio/import/validation infrastructure was adapted; the box geometry and assembly checks are new.

**Geometry reference:** Mike Kasberg (mkasberg), [White Cat Kit Card / Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ . Repository README, LICENSE and `kit_frame.scad` were retrieved and inspected. Original author does not endorse this app. Raw source STL is **not redistributed**.

The actual downloaded binary STL was parsed afresh: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, 179.820 × 178.020 × 3.190 mm, two edge-adjacent components at 0.00001 mm weld tolerance. STL itself has no unit metadata; millimeters are corroborated by source sheet dimensions. The source has coplanar/nonmanifold artifacts; it is not treated as repaired or printable output. Three measured mesh cross-sections at Z=.1, .5 and 1.59 mm and a Y=100 rail section establish the 1.6 mm sheet/perimeter and very thin .21/.22 mm bridges. See `reference-analysis.json`, reproducible `reference-analysis.py` and actual-mesh `reference-sections.svg/png`.

**Preserved:** measured 1.6 mm sheet default, sheet carrier and accessible weaker sacrificial bridges. **Proposed/redesigned, not source measurements:** six box panels, floor mortises/tenons, two mirrored blind guide grooves, rear stops and removable lid; 2.4 mm carrier and .4–.6 mm-high × .8–1.4 mm-wide tabs; .15–.45 mm total fit allowance. Carrier width 2.4 and tab thickness are deliberately strengthened rather than claiming identical source mechanics. No spacecraft shapes or arbitrary switch sockets are used.

## Supported parameters (all millimeters)

| Control | Range |
|---|---|
| Card X / Y | 200–230 / 180–210 |
| Box length / inside width / wall height | 48–60 / 34–42 / 18–24 |
| Sheet H / total allowance g | 1.6–2.4 / .15–.45 |
| Runner offset / tab width / tab height | 8–12 / .8–1.4 / .4–.6 |
| Lid dimples | 0–.4 deep |
| Imported footprint / STL height | 4–7 / .6–3 |
| Rotation / center offsets | ±180° / X ±1.5, Y ±2 |
| Image raised relief / engraving | .4–3 / .4–.6 |

Three real presets and rounded, clipped and scalloped floor silhouettes modify exported solids. Tenons are 6 mm wide; floor slots are `(6+g) × (H+g)`. Lid guide vertical opening is `H+g`, with .8 mm outer backing and `H-g/2` roof. Lid engagement per side is `(H-g)/2`; the rectangular rear edge stops against intact guide ends at `x=-L/2+7`. Guide depth is `H-.8`. The marked central lid area has radius 6.5; all personalization remains outside the joint envelopes. A .2 mm recessed well and bounded engraving preserve at least .8 mm floor at H=1.6. Impossible dimensions/transforms are blocked, not clamped into a different model.

## Image / SVG → real geometry

PNG and JPEG content signatures and dimensions are checked before decoding: 2 MB file limit, <=12 MP, <=6000 px per side. Images are normalized locally to <=500 px for portable saves, sampled into a bounded 20×20 luminance grid using fit-entire or fill/crop plus ±25% pan. Choose light background removal or dark inversion. Transparency composites against the selected background. Threshold is 1–254; grayscale relief instead maps darkness continuously to height. The checkerboard shows the actual sampled cutout; source preview remains visible.

The worker constructs a triangulated solid height field with a .4 mm backing and correctly wound side/bottom faces, then uses **Manifold solid union or difference** against the lid. White holes remain unraised/unengraved on a continuous solid lid, demonstrated by final-solid probes; this is not a claimed through-hole contour trace. SVG simple paths/shapes (including even-odd holes) are locally rasterized to 256 px and enter the same image workflow; scripts, references, external resources, effects and text are rejected. Text and six searchable bundled original SVG marks use this same conversion, never texture-only decorations. This is **2D-to-relief conversion, not reconstruction of a full 3D object from a photo**. Resolution can soften fine lettering; use bold short marks. Empty silhouettes are rejected.

## STL → integrated lid grip

Both binary and ASCII STL are read, with explicit Z-up/Y-up/−Z-up orientation and **millimeter confirmation** before integrating (STL stores no units). Source dimensions and source 3D preview are shown. Limit 1500 triangles, one connected, closed, outward-wound, positive-volume solid, dimensions .2–250 mm per axis, finite nondegenerate coordinates and no self-intersections. Supported integration is deliberately limited to convex, broad flat-bottom grips with no overhang footprint. Concave, hollow, open/nonmanifold, disconnected, inverted or unsupported meshes are rejected with actionable errors, not silently convex-hulled or repaired. Convexity and a bottom footprint hull are used only for **input validation**, never to replace geometry.

The actual original mesh scales proportionally in XY to the footprint and independently in Z to grip height, rotates, centers and offsets; a .15 mm overlap into the well makes the final union one connected solid. Final footprint cannot leave the safe circle or reach either guide. Up-axis changes explicitly clear the source and require reattachment. File picker works on phones/desktops; drag/drop on supporting browsers. Replace, remove, reset transforms and reset all are available. Synthetic PNG, JPEG, holed SVG, ASCII wedge and binary gem fixtures are bundled; no personal files are stored in this repository.

## Views, state and export

Actual same solids are placed as connected card, de-tabbed plate, assembled box, exploded box, or isolated part. Lid-opening slider translates the actual lid; no physics/force simulation is implied. See-through is preview-only. Touch orbit/pinch, zoom buttons and fit view are available. Preview colours do not imply STL colours.

Heavy CSG and parsing run in a bundled Web Worker with 100 ms debounce, bounded tessellation, request IDs and stale-result guards. Exports require a state key equal to the current parameter/source/transforms, completed image conversion and successful final-solid checks. Invalid states may retain a labelled last-good preview but cannot export it. Worker loading errors block export and explain reload recovery.

Download binary **connected-card STL**, each of six parts, or **Everything ZIP** (seven STL files plus numbered assembly instructions). Individual files are in real print orientation at Z=0; assembled preview is never exported as overlapping shells. Dimensions explicitly display final selected export X/Y/Z in mm. No fake 3MF option.

Undo/redo retains 35 bounded snapshots; local named designs keep six entries. JSON save/open (2 MB) carries bounded normalized images and real validated mesh payloads; missing payloads ask for reattachment. Browser localStorage is the only persistence, never network upload. No personal image/mesh asset is saved to the repository.

## Printing / assembly / limitations

Print flat in PLA/PETG, .4 mm nozzle, .2 mm layers, three walls. One mirrored guide contains a short groove-roof bridge approximately H+g (1.75–2.85 mm); calibrate bridging/elephant-foot on one guide and lid first. No supports intended. Snip all 24 tabs 2 mm outside each part and trim the nubs. Seat guide walls in their three mortises per side; seat tall rear and shorter front walls. Dry-fit, optionally glue only stationary floor tenons. Slide lid from the open front, decoration upward, until rear guide stops engage. Pull forward to open/remove. Joints are removable slip fits, not structural latches. Do not invert or lift a filled box by the lid. Printer/material/slicer-dependent starting allowance is .30 mm total; change .05 mm at a time. Not load-rated or liquid-tight. Adult handling for cutters and small parts.

## Validation

`npm test`: default, all presets, min/max fields and six variations; actual image relief/engraving and both STL types across presets/extremes. Binary parsing checks exact length, finite coordinates, normalized normals, nondegenerate faces, mm dimensions, 1e-5 mm welded opposite edge incidence, per-component positive volume and genus. Kernel intersections independently check all 15 assembled pairs, wall seating paths, complete lid insertion/removal, rear/roof/lateral guide restraints, no flat overlaps and card inclusion. Cutting all 24 tab cut planes must yield exactly seven closed components (carrier + six panels).

Production-base-path browser scripts perform real file-picker imports and downloads, exact UI/STL fingerprints and JSON regeneration, changed pixels/threshold/depth/STL transforms, invalid file and state recovery, ZIP contents, portable/named design roundtrips, undo/redo, all presets/marks/shapes, worker loading failures/stale edits, SVG-hole mesh probes, keyboard/reduced motion, saved themes, phone 320/390 px layout and real touch orbit/pinch. Reports and screenshots live alongside source. Computational geometry and interaction checks **do not establish a physical print, dimensional fit, capacity, glue performance, strength or durability test; none was performed**.
