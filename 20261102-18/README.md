# Corners & Concord

A React + Vite, local-browser **five-part flat-pack kit-card generator**. Snip fourteen real runners, bond a matching triangle upright behind a semicircular tray, then gather three removable corner sectors to compare A + B + C with 180°. This is a physical assembly kit, not a browser game or an unchanged STL re-export. It differs from the collection's Pythagorean trays, projection rings and optical boards: two independent triangle angles drive three loose annular sectors and their matching pickup-ear notches.

## Run and build

Node 22.12+. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base: `/daily-app2/20261102-18/`. Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publication uses the ROOT monorepo `predeploy` / `deploy` flow, not individual app deploy. `node serve.mjs` serves the actual production build at http://127.0.0.1:5718/daily-app2/20261102-18/.

Bundled dependencies: React, Three.js/OrbitControls, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (OFL). Playwright is used for browser validation. No CDN, API key, paid service, server-side modeling, or network upload is required. User files stay in browser memory/local storage. Repository fixtures are synthetic, not personal uploads.

## Reference-first evidence

The local reference trees were searched first. Keycap Studio's actual three-component switch template and Weave's 8 mm interlocking link were parsed and rejected as unsuitable flat-sheet carrier references; hashes, dimensions and reasons are in `reference-measurements.json`. Their README files were inspected. A suitable public reference was then downloaded and parsed: **Mike Kasberg, White Cat Kit Card / Printables 865769**, [source](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README and license are recorded beside this file. `reference-analysis.json` contains the exact STL download URL.

Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; assumed mm, **179.819997 × 178.019994 × 3.190000**. Independent read-only parsing and cross-sections at Z=.10/.50/1.59 mm are reproducible with `reference-measure.py` (Python trimesh/numpy/matplotlib/networkx/scipy). Actual cross-section views were inspected; see `evidence/reference-sections.png`. The source has 27 edge-adjacent components including degenerate artifacts, not 27 intended parts; it is not globally watertight. No repair is claimed and its triangles are not used as final output.

Measured source sheet is **1.60 mm**, socket sections **4.50 × 1.700012 mm**, low carrier planes **.21–.22 mm**. This original reconstruction retains **two 4.50 mm board tongues** and defaults to the measured sheet. Real Boolean sockets are `(4.50 + running) × (sheet + running)`. The **.10–.35 mm TOTAL clearance** is a proposed printer/material-dependent fit, not a source measurement. Fourteen **.8–1.4 mm wide × .4–.6 mm thick** bed-aligned runners deliberately strengthen the source's low webs. The base has a sheet-thick floor plus a sheet-high semicircular rim; the board and sectors are one sheet thick. No source artwork or raw third-party STL is bundled.

Read-only visual reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`; inspected README, styles, App, Viewer, worker, export, imageTrace and STL modules. Concrete patterns: 374 px left rail/right gradient live preview; phone preview-first stack; collapsible sections, tactile selected buttons, paired slider/numeric inputs, checkerboard/source comparison, saved theme, portable designs and worker/current-result export gating. Studio plumbing is adapted from the earlier local daily studio. Geometry, tray ear alignment, angle checks and assembly tests are new for this kit; no reference Git history or wholesale dependencies copied.

## Parameters and actual assembly

All linear dimensions are **millimeters**, angles degrees.

| Parameter | Range |
| --- | --- |
| Card width / height | 190–240 / 195–240 |
| Triangle base | 54–68 |
| Corner A / B | 35–65° independently |
| Corner C | computed 180−A−B, 50–110° |
| Sector radius / inner radius | 20–26 / fixed 5 |
| Sheet / total fit clearance | 1.6–2.4 / .10–.35 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art rotation / X / Y | ±180° / ±1.5 / ±2 |

Three rendered presets and three ergonomic base silhouettes change real geometry. Bounded variation, reset, undo/redo (35 snapshots), six local named designs and portable JSON save/open are implemented. Unsupported values block export, not silently clamp. Bed-flat connected card, de-tabbed plate, assembled, exploded and every isolated-part view use the same current solids. Preview colors are not STL colors.

The triangle apex is computed from the two base angles. Its three corners are trimmed .8 mm along their edges to remove needle points; long angle-bearing edges are unchanged. The matching sector polygons share a 5 mm central opening, with half-clearance edge insets and permanent pickup ears. Three angle-dependent rim notches allow straight vertical insertion/removal. One/two/three engraved dots match lower-left/lower-right/apex corners. Gaps are intentional and the object is not a precision angle gauge. The sum is for planar Euclidean triangles, not curved surfaces.

The board's two tongues lower vertically into rear through-sockets. Shoulders seat on the base floor; **compatible adhesive is required in both joints**, no untested friction retention. Sectors remain loose: A at right, then B and C counterclockwise. No hardware, snap joints or artificial moving-joint controls. Fourteen runners attach to base sides, board sides away from tongues, and sector pickup ears; snip outboard and file nubs. Carrier bounds, physical separation, removal paths, shoulders/floors, and snip locations are checked computationally.

## Image, text, icons and SVG personalization

PNG/JPEG picker and drag/drop: **2 MB**, **12 MP**, max **6,000 px per side**. Headers are checked before decode; normalize to ≤500 px, fit/crop into a **20×20 luminance grid**, optional dark-background inversion, threshold 1–254 or grayscale relief. Crop pan ±25%, depth .4–.6 mm, physical footprint/rotation/placement change exported geometry. A closed piecewise-triangular height field is Boolean-subtracted from the front apron at Y=−28 mm. Source and actual sampled checkerboard cutout are shown. Empty silhouettes fail recoverably. This is **2D-to-engraved relief, not automatic full-3D reconstruction**, nor exact vector tracing. Bright sampled holes preserve the solid backing; geometric probes verify the ring fixture's central hole stays unengraved.

Simple SVG filled paths/shapes are sanitized (no scripts/references/external resources/effects, ≤2,000 elements), rasterized locally at 256 px and fed to the same bounded height conversion. Small details under the grid pitch are not guaranteed. Text (up to eight characters) and six searchable bundled original vector marks use the same real geometry path. Only engraving is offered, protecting a flat sheet and ≥1 mm backing. Raised/through art is deliberately unsupported rather than a fake control. The 6.5 mm radius keep-in zone is separate from tray and sockets.

## Imported STL integration

Actual **ASCII and binary STL**, 2 MB / **1,500 triangles**, each axis .2–250 mm. Oriented source dimensions and explicit **millimeter confirmation** are shown: STL contains no unit metadata. Choose Z/Y/−Z up before attaching; changing orientation requests reattachment. Proportional XY scale targets footprint, independent Z scale targets engraving depth; Z rotation and XY placement are supported. Source and final geometry previews differ because the actual transformed source solid is Boolean-subtracted from the apron, not simply displayed or re-exported.

Deliberately supported subset: **one convex, watertight, consistently outward-wound, positive-volume, broad-flat-bottom solid without overhang footprint**. Invalid/truncated, open, nonmanifold, self-intersecting, inward, disconnected, excessively thin or concave/cavity/branching meshes are rejected with actionable errors. No silent convex hull replacement or automatic repair. Convexity is validated before integration; original accepted triangles reach the Boolean kernel. A 2D bottom hull is used only to validate bed support, never to replace geometry. Minimum scaled XY footprint is 1.2 mm. Safe-area and backing checks block mechanism interference and cut-through.

Replace/remove/reset return to built-in geometry. JSON/named saves contain bounded normalized image data and original accepted mesh payloads; missing image payloads explicitly request reattachment. Restored STL payloads are parsed and validated again. No user file is copied to this repository or uploaded.

## Worker, export and validation

Heavy CSG/parsing runs in a Web Worker, 100 ms debounce, bounded resolutions, request IDs and exact current-state key. Pending/invalid edits immediately disable all exports. A visible last-good preview is explicitly not exportable as current state. Worker loading failure blocks exports and explains reload recovery. Preview and binary-STL export share the exact current checked mesh; browser downloads are fingerprinted against both UI state and independently regenerated portable JSON.

Primary Download STL offers connected card, de-tabbed plate and individual parts. Per-part buttons and **Everything ZIP** include six STLs (card + five clean parts) and numbered assembly/current-fit instructions. STL contains geometry only, no color; no fake 3MF. All STL orientations are bed-flat, not overlapping assembled transforms. Final X/Y/Z is displayed for the export selection.

`npm test` checks 16 preset/shape/extreme/image/STL cases, all individual parts and float32 print layouts: exact binary length, finite coordinates, nondegenerate faces, normalized outward normals, positive volume per connected component, welded edges (1e−5 mm) with exactly two opposite-directed faces, expected bounds/components and Euler consistency. Independent Manifold intersections test every assembled pair, nine insertion heights for each removable part, board shoulders, sector floor seating, carrier inclusion, fourteen safe snips releasing five parts plus carrier, sockets, bed support at sampled heights and triangle angles derived independently from vertices. These are **computational geometry checks, not physical testing**.

Browser scripts: `browser-test.cjs`, `studio-test.cjs`, `orientation-test.cjs`, `phone-views-test.cjs`, `presentation-test.cjs`, `stale-test.cjs`, `icons-drop-test.cjs`. They use production assets under the real base prefix, actual file pickers/downloads and synthetic fixtures, compare default/imported/transformed output, and validate exported solids/assembly again. They cover PNG/JPEG/ASCII/binary/SVG, text/icons, thresholds/depth/crop/scale, all presets/views, malformed/excessive/empty inputs, disabled invalid export, replace/remove/reset, portable assets, named saves/reload, undo/redo, ZIP payloads, request gating and failed worker recovery. Phone 320/390 px checks include all tabs, long instructions, reachable save/export, no overflow, touch orbit/pinch; desktop rail/theme/focus/reduced-motion verified. Reports and screenshots are included. `personalization-check.mjs` probes actual Boolean holes; gallery/deploy scripts check retained entries and byte-identical assets.

## Printing

Print 100% mm scale, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, bed-flat; no supports intended. Base Z=2×sheet, other parts=sheet. Calibrate socket/tongue before the full card; clearance is not universal. Snip fourteen runners at least 1.5 mm outside clean boundaries and file nubs, especially pickup ears. Bond only the two board sockets; sectors remain loose. See `ASSEMBLY.txt` and the in-app numbered guide.

**No physical print, fit, snipping-force, adhesive-strength, durability or classroom-use test was performed.** Mesh validity and simulated clearances cannot establish those results.
