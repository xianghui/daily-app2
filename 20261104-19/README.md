# Impulse & Five

A reference-grounded React + Vite studio generating a **real connected flat-pack collision-pendulum kit**: one deck, two parallel suspension frames and five identical circular bobs, held in a carrier by **32 accessible removable runners**. After snipping, bonding four frame feet and tying five paired thread suspensions, lift an outer disk outward and release gently into its neighbors. This differs from earlier single-striker/serial-pendulum kits: five independent equal-length suspensions, actual tangent edge contacts and diameter-derived suspension pitch are the central assembly.

**Thread and adhesive required.** Printed disks have substantial impact damping; ideal steel Newton-cradle transfer, tuned sound and quantitative restitution are not promised. Physical printing, joint fit, knot retention, frame stiffness, stability and collision transfer have **not** been tested. The swing preview keeps disks upright as an explanatory geometric pose; it is not a dynamics simulation.

## Run, build, reproduce checks

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve-production.py
# Another terminal, testing the actual production build and Pages base:
node browser-test.cjs
node studio-test.cjs
node mobile-layout.cjs
node advanced-test.cjs
```

Base `/daily-app2/20261104-19/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined-site publication uses **root** `npm run predeploy` followed by **root** `npm run deploy`. Dependencies are locally installed React, Vite, Three.js, Manifold WASM, fflate and Fontsource Fredoka/Rubik; Playwright is development-only. No CDN, external generation service, API key or backend.

## Reference-first measurements and decisions

First inspected local STL candidates and project instructions under `/Volumes/ExternalHD/3d_printing_apps/`: Keycap Studio's MX clicker template (944 triangles; 3 components; 15.20 × 15.20 × 43.10 mm) and Weave's diamond link (5,940 triangles; 1 component; 7.981 × 9.241 × 8.00 mm). Neither contains appropriate planar kit interfaces; no switch socket or fabric link is imposed on this design.

Selected **White Cat Kit Card**, Mike Kasberg, Printables **865769**, [upstream](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source license and upstream README are retained as `REFERENCE-LICENSE.txt` and `REFERENCE-UPSTREAM.md`. The actual source STL was downloaded, parsed with Trimesh, split by edge adjacency and sectioned at Z=.1, .215 and 1.59 mm. `reference-analysis.json` records its download identifier, source, SHA-256, every component's bounds and representative section measurements; `evidence/reference-sections.png` shows the actual mesh sections and was visually inspected. Reproduce with `/tmp/golden-venv/bin/python reference-analysis.py` after downloading the documented source to `/tmp/impulse-five-reference.stl` (Python dependencies: trimesh, numpy, matplotlib).

- SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**.
- Source extents **179.820 × 178.020 × 3.190 mm**; **27 edge-adjacent components**. STL has no units; millimeters assumed from model context.
- **Measured:** sheet 1.60 mm; rectangular sockets **4.50 × 1.70 mm**; low runner tops at **.21–.22 mm**. These genuinely inform sheet/socket/carrier construction.
- **Proposed reconstruction:** the measured socket long dimension becomes nominal **4.50 mm tongue width**, not a claim that an original tongue was measured. New socket `(4.50+C) × (sheet+C)`; sheet **2–3 mm**; total C **.10–.35 mm**; runner height **.4–.6 mm**. The source .10 mm sheet/slot surplus informs the lower clearance choice. New thicker runners suit a smaller, removable-part assembly, with slicer/printer calibration required.
- **Original, not source measurements:** two tall paired suspension portals, five disk bobs, matching 1.8 mm thread eyes, diameter/contact-pitch relation, thread-length calculation, protected apron and all assembled transforms. Source cat imagery and clips are not copied. Source has nonmanifold/degenerate artifacts and is **inspection-only**: it is not reused, repaired, republished or bundled as an output. All printed geometry is reconstructed from genuine Manifold solids, differences and unions; no convex hull replacement.

Read-only visual/interaction reference `keycap_generator2`: inspected README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, image conversion, STL, export, worker and engine modules. Concrete patterns used: 374 px left control rail, sticky compact brand/theme header, labelled collapsible sections, paired sliders/numeric mm fields, tactile pink keycap controls, source editor, checkerboard conversion, isolated/assembled/exploded/print views, current-worker-result export gating and portable named designs. Light lavender desk and coherent saved dark theme; bundled Fredoka/Rubik fonts. Generic studio components adapted from previous Daily App Lab apps; this mechanism, generated parts and checks are original. No reference project edited or deployed, and no Git history/dependency tree copied wholesale. Old `/daily_app` remains read-only.

## Parameters and actual geometry (all mm)

| Control | Supported range |
| --- | --- |
| Card X / Y | 220–280 / 220–280 |
| Front/back suspension frame centre span | 26–40 |
| Bob diameter D | 14–18 |
| Vertical suspension drop V | 32–48 |
| Resting contact gap G | 0–.4 |
| Printable sheet S | 2–3 |
| Socket total clearance C | .10–.35 |
| Part spacing | 3–5 |
| Runner width / height | .8–1.2 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Artwork rotation / X,Y | ±180° / ±1.5, ±2 |

Pitch `P=D+G`; bob centres X=`[-2,-1,0,1,2]*P`. Portal width `W=4P+D+16`, height `H=V+D+8`. Deck `(W+12) × (span+36)`. Two frame tongues per portal fit four deck sockets, shoulders rest on deck top and tongue tips end flush underneath. Frame eyes at `(jP,H−4)` and bob eye at `(0,D/2−3)` have diameter **1.8 mm**. Bob eye top web **2.1 mm**, portal legs **6 mm**, upper beam **11 mm**. Bob bottoms hang **7 mm above deck top**. Each straight thread leg is `sqrt(V²+((span−S)/2)²)`; supply five lengths of at least twice that plus **60 mm knot allowance** each. Thread path lines are preview-only external items, not printed STL shells.

Three actual mesh thumbnail presets: Five impulses, Pocket collision, Long suspension. Rounded/small/broad-chamfer deck silhouettes alter the exported solid. Different sheet and suspension dimensions co-generate sockets, frame height, pitch, thread lengths and print layout. Packing too large for the declared card is rejected, never compressed or overlapped. Gap zero gives tangent disk contact; positive gap is explicitly a contact calibration trial, not guaranteed impact transmission.

Print one frame/deck first for fit calibration. Increase C .05 mm if tight. Clearance is total, not per side, and depends on material, first-layer expansion and printer. No universal tolerances or printed flexure fatigue claims.

## Imports change actual exported solids

File picker on desktop/phone plus single-file drag/drop. Replace, remove, reset image controls, reset transforms and return-to-defaults supported. All files processed **only locally**, without upload. Only synthetic CC0 samples in `public/samples` are committed, never personal input files.

### PNG / JPEG / simple SVG → bounded engraving

Max file **2 MB**, PNG/JPEG **12 MP**, **6000 px per side**. Actual content header, extension and decoded dimensions checked before normalization to at most **500 px**. Simple filled SVG shapes/paths limited to **2000 elements**, rejecting scripts, references, external resources and effects; rasterized locally at 256 px. Text (8 characters) and six searchable vector icons use this same conversion. Source and actual converted cutout shown separately on checkerboard.

**Exact conversion:** canvas contain/cover fit with ±25% crop translation; light/transparent background or dark/inverted background; luminance sampled to **20 × 20 vertices**. Threshold 1–254 produces depth-or-zero, or grayscale gives `depth*(1−luminance/255)`. Triangles interpolate grid values into a closed bounded relief tool, Boolean-subtracted from the protected deck apron. Bright/transparent holes retain full backing. This is low-resolution **2D-to-relief**, not exact vector tracing or automatic full 3D reconstruction from one photo. Crop/fit, background, pixel content, threshold, depth, physical footprint, rotation and placement change the exported mesh. Empty results rejected. Only **engraving** is offered to keep sheet/card thickness consistent, with **≥1.4 mm backing**.

### ASCII / binary STL → exact solid-shaped engraving

Oriented source preview and dimensions; explicit millimeter confirmation (STL is unitless), pre-attach up-axis Z/Y/−Z, proportional XY footprint scale, independent Z depth fit, Z rotation, X/Y placement, center/reset and removal. Changing axis clears the source and requests reattachment. Original mesh becomes a **real Boolean subtraction tool** on the deck, not an unchanged re-export or preview texture. Keep-in radius **6.5 mm** at deck apron Y=`−span/2−10`, away from sockets, hanging bobs and frame interfaces.

Deliberately bounded support: **one convex, outward-wound, closed connected solid with broad flat bottom and no overhang**, ≤**1500 triangles**, **40 bytes–2 MB**, **.2–250 mm each axis**. Strict parser checks byte/facet completeness, finite coordinates, degeneracies, 1e-5 mm welded edge incidence/winding, positive volume, connectedness, pairwise self-intersections, convexity and bottom footprint. Open/nonmanifold, concave/hollow, disconnected, branched or overhanging inputs are rejected with actionable guidance. **No arbitrary repair, face-dropping or hull substitution.** The bottom hull is used only to validate projected support, never to replace input geometry.

## Responsiveness, state, views, exports

Heavy CSG and source mesh checks run in a **Web Worker with locally bundled Manifold WASM**; 100 ms debounce, build IDs and current-parameter/source keys discard stale results. Loading/building/success/error are real. Invalid edits/imports and worker failure disable every STL and ZIP export. Last-good preview is explicitly labelled and cannot export while invalid. Preview and binary export use the same exact current mesh; signatures are displayed as data attributes and compared to downloaded bytes and Node regeneration of the saved JSON.

Bounded tessellation; kernel results simplify at **.001 mm** (reduced from .01 after section tests found microscopic hole bevels). Final solids independently reject nonfinite, degenerate, inward/open/nonmanifold results. No failed face is simply removed.

Undo/redo (35 snapshots), six local named designs, portable JSON open/save with bounded normalized image data or original mesh arrays. Missing payloads require reattachment; invalid/oversized designs rejected. Theme saved separately. Touch orbit and pinch, fit/top/front/zoom buttons, translucent deck, assembled, exploded, connected-card, clean print plate and every isolated part. Idealized outer-bob swing and exploded positions do not change print geometry. Colors are preview only; STL does not store them. Phone layout is preview-first, exports/warnings next, then stacked collapsible controls, without a miniature sidebar rail.

Prominent binary STL export for connected card, clean print plate, or any of eight parts, direct per-part buttons and **Everything ZIP** (connected card + eight clean STLs + portable JSON + numbered current-dimension assembly instructions). ZIP is not labelled 3MF. Exports always flat Z=0, never assembled overlaps. Print ONE card OR the eight clean parts, not both.

## Print and assemble

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls; **all five bobs same 100% infill and material** for approximately equal masses. No supports intended. Snip 32 runners 1.8 mm outside parts, then trim flush. Bond both frames into four deck sockets with shoulders seated, cure while parallel. Supply five .3–.6 mm low-stretch smooth thread lengths; front eye → bob eye → rear eye, securely knotted at both frame eyes. Adjust each pair until all disks hang level, coplanar and just touching for G=0; deburr contact edges. Inspect knots before gentle use. Lift outer disk outward and release. Printed disks lose energy; realistic impact performance requires physical experiments. See the studio's full eleven-step instructions in each ZIP.

## Validation evidence

`geometry-validation.json`: **75 cases**, each parsing binary exports independently, checking nonempty finite/nondegenerate triangles, stored normals, positive per-component volume, consistent outward winding, welded edges with exactly two opposite incident faces (1e-5 mm), component counts, bed-flat Z=0 and millimeter dimensions. Checks defaults, all presets, three shapes, every field min/max, joint extremes, image-derived and ASCII/binary-STL-derived outputs plus transformed imports; all separate parts and translated float32 clean plate. Invalid dimensions/NaN rejected.

Independent Manifold checks cover 32 real runners, one connected card, nine components after simulated cuts (carrier + eight intact parts), no snip damage or print overlaps, card bounds, upward footprint support, four open sockets in card and clean deck, frame insertion path, all thread eyes unblocked, equal bob volume, correct resting gap, protected backing, calculated thread lengths and outer bob outward swing at 0/1/5/10/20/35°. Neighbor contact is intentional; no force/restitution simulation, knot strength or physical print test is inferred from mesh validity.

`browser-validation.json`, `studio-validation.json`, `mobile-layout-validation.json`, `advanced-validation.json` and screenshots record production browser file pickers/downloads, geometry changes, malformed-file recovery, stale result gating, portable saves, views and responsive/touch interaction. These are computational/browser checks, **not physical print testing**.
