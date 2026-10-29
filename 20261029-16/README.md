# Thread & Span

A local browser **cord-suspended miniature bridge kit-card generator**. Snip twenty real runners, seat two portal towers in two feet, pass a personalized deck through the windows and tie four separate soft cords. Five printed parts form a static architectural assembly. This differs from the gallery’s rigid trestle/arch and hinged bridges: the deck is supported by user-tied cords, with no rigid deck-to-tower joint.

## Run and stack

```sh
npm install
npm run dev
npm test
node extra-validation.mjs
npm run predeploy
npm run preview -- --host 127.0.0.1 --port 5296
node browser-validation.mjs
```

React + Vite; Three.js / OrbitControls, Manifold WASM, fflate, local Fontsource Fredoka/Rubik (SIL OFL). Node 22.12+. No API, backend, CDN runtime, key or paid service. All personal files and modeling stay in the browser. Production base `/daily-app2/20261029-16/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publication uses the root monorepo deploy flow, not the per-app deploy.

## Reference-first construction evidence

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first, including switch templates, slider/fabric references and kit-card projects. Read relevant local README files; no suitable local sheet/carrier STL existed. Switch sockets and link lattices are not interchangeable with sheet kits.

Selected public construction reference: **White Cat Kit Card**, **Mike Kasberg**, Printables **865769**; source <https://github.com/mkasberg/white-cat-kit-card>, listing <https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card>, **CC BY 4.0**, <https://creativecommons.org/licenses/by/4.0/>. README, license and frame SCAD were inspected read-only. **Fresh STL download succeeded in this run**, stored outside the repository at `/tmp/threadspan-reference-download.stl`. The mesh was parsed, measured, sectioned and its actual section image visually inspected before final design. Raw source STL is not redistributed.

- Binary STL, **30,616 triangles**, SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**.
- Bounds **179.820 × 178.020 × 3.190 mm**. STL has no units metadata; source SCAD corroborates millimeters, 1.6 mm sheet and 179.8 × 178 mm perimeter.
- Main measured sheet planes Z=0/1.6 mm; rail ray at Y=100/Z=.5 measures **1.600 mm**. Bridge vertex planes include **.21/.22 mm**. Source `wire()` uses a .6 mm width and .2 mm one-layer neck.
- Actual sections at **Z=.1/.5/1.59 mm**, 150/191/180 section loops: [reference sections](evidence/reference-sections.png).
- **27 edge-connected components**, including 25 two-triangle artifacts; source is **not watertight**. It is a structural design reference, not reused as printable input or claimed repaired.

**Measured vs redesigned:** retain measured 1.6 mm sheet as default; strengthen measured 1.6 mm rail to **2.4 mm**, source low bridges to **.4–.6 mm** runners **.8–1.4 mm** wide. Preserve genuine perimeter/carrier/low-tab construction. Three braced bays hold a deck, two towers and two feet with four accessible side runners each. Bridge outlines, mortises, tongues, cord eyes and all clearance values are **original parametric reconstruction**, not source-measured fits. No spacecraft profiles, hinges or clips copied; no endorsement implied. Full provenance and measurements: [reference-analysis.json](reference-analysis.json). `reference-inspect.py /path/to/source.stl` reproduces analysis with trimesh/numpy/matplotlib; raw mesh remains outside the app.

**Read-only visual reference:** keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, worker, geometry/STL, export and imageTrace modules were inspected. Concrete patterns applied: sticky compact header, 374 px scrollable left rail, labelled collapsible sections, paired slider/number mm inputs, raised tactile selected buttons, locally bundled rounded fonts, right gradient viewer, source preview and explicit units, saved light/dark theme, mobile preview-first stacked controls and reachable exports. No unrelated switch socket imposed. Proven editor/import/export infrastructure is adapted from an earlier daily studio; bridge geometry, cord routes and assembly validation are new.

## Parameters and assembly geometry

All linear values are **millimeters**, rotations degrees. Unsupported combinations are blocked, never silently clamped into a different export.

| Parameter | Supported range |
|---|---|
| Card width / height | 215–250 / 160–200 |
| Tower stance width / height | 54–66 / 48–64 |
| Deck length / target elevation above shoulders | 90–120 / 16–26 |
| Cord-eye radius / foot depth | .9–1.5 / 22–30 |
| Tongue width / total slot allowance | 4–5 / .10–.35 |
| Sheet / part spacing | 1.6–2.4 / 4–7 |
| Breakaway width / thickness | .8–1.4 / .4–.6 |
| Decorative dimple depth | 0–.4 |
| Import footprint / STL height | 4–7 / .6–3 |
| Artwork rotation / X / Y | ±180° / ±1.5 / ±2 |

Deck width = stance width − 26. Tower outer width = stance width − 8; window width = deck width + 4, leaving **2 mm nominal clearance each side**. Window extends from local height 8 to tower height − 8; tower legs are 7 mm wide. Three actual deck profiles: rounded corners, chamfered corners and waisted sides. Rose Crossing, Long Chamfer and Pocket Waist are mechanically bounded presets with generated thumbnails. Bounded variation uses a full-sized card. Undo/redo, six named local saves and portable JSON include bounded imported payloads; missing images explicitly request reattachment.

Each tower has two tongues, engagement **sheet − .15 mm**, with shoulders bearing on its foot. Four through mortises add selected **total** allowance to tongue width and sheet thickness. Tongue tips stop .15 mm above the bottom. **Adhesive required at all four seats**: clearance seats are not captive. Calibrate a tower/foot first; fits are printer/material-dependent, never universal.

Tower stations are Y=20 and deck length − 20. Feet are not connected/anchored. Four deck eyes are **sheet/2 + 2 mm in front of tower centre planes**, at X=±(deck width/2 − 4). Tower eyes share X and are 4 mm below tower top. Minimum eye-to-edge web is 2.5 mm. Offset deck eyes let threads clear the crossbar front face. The preview route goes from deck-eye centre to .6 mm in front of the tower face at eye height, then through the bore to .6 mm behind. Tests sweep a **.8 mm diameter cord envelope** along these ideal routes against every printed solid. This verifies geometric clearance, not knot security, forces or actual cord behavior.

Target elevation is an assembly choice: changing it alters the assembled target/cord guidance, **not the deck STL**. Other size/shape/eye/seat controls change physical geometry. Centre-deck imports remain in a radius-6.5 mm medallion, far from all eyes and joints; even maximum relief clears the windows. Do not load or lift by the deck. No anchored feet, safety-rated suspension or strength claim.

## Image, text, icon and SVG imports

Desktop/phone file picker and single-file drag/drop. **All user data stays in the browser**; no upload or personal file repository storage. PNG/JPEG headers verified before decoding, **2 MB**, **12 MP**, **6000 px per side** limits; normalized to ≤500 px. Simple SVG ≤2000 elements, no external resources/scripts/text/effects, rasterized locally to 256 px. Synthetic public samples are bundled with attribution notes.

Conversion is a documented **20 × 20 sampled grayscale height map**, not exact vector tracing or full 3D reconstruction from one photo. Fit entire image or cover/crop, pan ±25%, composite alpha against light/dark background and optionally invert. Luminance `.2126R + .7152G + .0722B`; threshold gives a selected height below threshold, relief uses `depth*(1−luminance/255)`. A closed bottom, sides and continuous triangulated top form a genuine solid for boolean union/difference. Threshold boundaries interpolate between sample vertices. Source preview and actual conversion mask appear on checkerboards. Bright enclosed holes remain unraised/unengraved above continuous backing—not cut through the deck.

Raised relief .4–3 mm; engraving .4–.6 mm preserves at least .8 mm backing at minimum sheet. Text up to eight characters and six searchable bundled icons use this same actual geometry path. Physical scale, rotation and placement change exported geometry. Fine marks may be below nozzle resolution; use bold marks and inspect slicer layers. Replace, remove, reset transforms and reset conversion controls are functional.

## STL import and bounded support

Actual **ASCII and binary STL** parsing in a worker; **1500 triangles**, **2 MB**, **.2–250 mm per axis**. Weld tolerance 1e−5 mm; finite coordinates, nondegenerate faces, exactly two opposite-wound faces per edge, one closed component, positive volume and self-intersections checked. Explicit **millimeter confirmation** is required because STL stores no unit metadata. Choose Z up, Y up (+90° X) or −Z before attaching; changing axis clears the source for reattachment. Show oriented dimensions, triangles, format and original 3D source preview.

Supported inputs are intentionally **one convex, broad flat-bottom, support-free grip**. Concave/hollow/multishell/branching/overhanging meshes are rejected, not silently replaced by a convex hull or claimed repaired. A bottom 2D hull only validates support, never replaces the source mesh. Original accepted triangles are scaled proportionally in XY, independently in Z, rotated and positioned, then genuinely Manifold-unioned **.15 mm into** the deck medallion. Minimum transformed XY extent 1.2 mm. The circular radius-6.5 mm keep-in region prevents damage to seats or card bounds. Original mesh, scale/placement and actual final result are all visible. Invalid transforms disable export. Portable STL payloads are revalidated on restore.

## Worker, views and real exports

Heavy CSG and STL input checks run in a local WASM Web Worker with bounded complexity, 100 ms debounce, generation IDs and exact state keys. Current-invalid inputs, pending file conversion or worker failure block every export; a last-good preview is labelled and cannot be exported as current. Final solids have finite vertices, positive volume, nondegenerate triangles and welded closed edges checked in the worker.

Connected card, de-tabbed print plate, exact target assembly, exploded insertion and five isolated parts share generated triangles. See-through deck explains eyes; four brown cord routes are **preview only**, supplied cord is required. Exploded elevations are explanatory, not simulated motion. Rotate/zoom/fit with mouse or touch; 10 mm grid. Binary STL and UI share exact current geometry and fingerprint. STL contains no preview colour. Everything ZIP contains the connected-card STL, all five clean part STLs and numbered `ASSEMBLY.txt`; this is ZIP, **not 3MF**. Real boolean-unioned card is one solid. Cutting twenty tabs gives five separate parts plus a connected waste carrier. Individual exports omit runners entirely.

## Print and assemble

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls, bed-flat marks up; no supports intended. Check bed envelope or export parts. Thin decorative dimples can be below nozzle resolution; functional sheet and interfaces are thicker. Inspect slicer layers at 100% mm scale.
2. Print a tower and foot to calibrate .10–.35 mm total allowance; adjust for material and elephant foot. No forced press fit.
3. Adult: snip twenty low runners; pare nubs without damaging eyes, tongues or slots. Discard carrier.
4. Seat both towers into feet, shoulders down. Square and glue all four seats; allow to cure. Set tower centre-plane spacing to deck length − 40 mm.
5. Pass deck end-first horizontally through both windows above the bottom sill. Its source relief also clears this path. Support at chosen elevation.
6. Supply **four .5–.8 mm cotton threads, ~80 mm each** (320 mm starting total). Tie each between a deck eye and corresponding tower eye; level before securing knots. No printed knot/cord, captive joint or structural anchorage. Optional adhesive may secure tied knots; do not glue the deck to towers.
7. Preview lines are ideal routes through bores, not a knot or tension simulation. Feet are free-standing; this is a static architectural miniature. No loads, aggressive swinging or lifting by deck. Small parts, cord, cutters and adhesive require adult handling and separation from children/pets.

**No physical printing, cord/knot-strength, adhesion, stability, load, fatigue or durability testing performed.** Computational geometry/assembly checks are not physical validation.

## Reproducible checks and evidence

- `npm test`: 18 valid built-in configurations plus 35 imported-output configurations; default, all presets, min/max and mixed extremes, both STL formats, threshold/grayscale/engraved image paths. Four unsupported card layouts are rejected. Independent binary parser validates byte length, finite/nondegenerate triangles, stored normals, mm bounds, positive volume **per component**, opposite-wound two-face edges welded at 1e−5 mm. Each card and each separate part tested.
- Assembly validation: no unintended solid intersections, tower vertical insertion, horizontal deck pass-through (including actual imported geometry), four open slots, shoulder bearing, .15 mm bottom recess, eight real eyes, .8 mm cord-envelope clearance, card bounds and part separation, twenty accessible snips and six post-snip components. Cord sweeps exclude knots and do not establish real strength.
- `extra-validation.mjs`: raised/engraved ring-hole solid probes preserve backing; unsupported concave source rejection; sixteen additional mixed configurations and insufficient-card rejection.
- `browser-validation.mjs`: actual production build/worker/WASM, 39 real download cases with independent mesh/assembly checks; PNG/JPEG/SVG and ASCII/binary STL pickers; changed content/threshold/depth/crop/transforms, source/mesh preview, replace/remove/reset; text/icons, presets/views, named and portable saves, undo/redo, each part and ZIP, invalid/oversize/empty/open imports, worker failure/reload. 320/390 px phone no-overflow preview-first layout, reachable imports/exports and actual CDP touch orbit/pinch screenshot changes; desktop sidebar, saved dark theme, collapse and focus.
- `production-preflight.mjs`: inline root script compilation, unique gallery entry and preservation of every older entry, combined deploy folders and gallery runtime; concave/nonmanifold/excess-complexity rejection, invalid transforms and rapid current-state edits, variation and reduced-motion recovery.

Reports and screenshots are retained beside this README. Tests are computational/browser tests only.
