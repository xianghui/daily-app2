# Pepper & Ghost

A local React + Vite maker studio for a **three-part flat-pack Pepper-type optical reflection stage**. Two parallel sheet cheeks have actual 40–55° open-ended diagonal channels and blind bottom stops for an **external clear PET/acrylic pane**. Four shouldered feet slot into a personalized stage. A real connected carrier holds all three printable parts with twelve low removable runners. This is not a browser game, hologram generator or a static STL re-export.

The lit object/display, transparent pane and backdrop are external. The app gives the exact pane cut dimensions; the translucent pane is a labeled, dimensionally accurate **preview-only external item**, never exported as printed plastic. Cheeks require adhesive. The pane gravity-seats but is not captive; remove before carrying the stage. Physical printing, assembly strength, actual fit, optical appearance and stability have **not** been tested.

## Run and verify

```sh
npm install
npm run dev
npm test
node extra-validation.mjs
npm run predeploy
python3 serve-production.py
# In a second terminal, against production dist under its actual Pages prefix:
node browser-test.cjs
node studio-test.cjs
node mobile-layout.cjs
node advanced-test.cjs
```

Production base: `/daily-app2/20261104-18/`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; public monorepo publication uses the ROOT `npm run predeploy` and ROOT `npm run deploy`, not the per-app deploy.

## Reference-first evidence and attribution

Inspected local candidates under `/Volumes/ExternalHD/3d_printing_apps/` first: Keycap Studio's three-part MX template and Weave's eight-mm interlocking fabric link. Parsed both real STLs, and reviewed the project instructions; switch sockets and interlocking links are not appropriate sheet-kit joints. The local Kit Card Studio README describes a house reconstruction, not an accessible source STL in its template tree. Public reference selected instead:

- **White Cat Kit Card**, Mike Kasberg, Printables **865769**; [upstream](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card).
- Reuse terms: **CC BY 4.0**, recorded in `REFERENCE-LICENSE.txt`; upstream README in `REFERENCE-UPSTREAM.md`.
- Download identifier, SHA-256, mm assumptions, bounds, 27 edge-adjacent components, all component dimensions and representative Z sections are in `reference-analysis.json`. `reference-analysis.py` reproduces inspection after downloading the documented source to `/tmp/pepper-ghost-reference.stl`. Sections are rendered in `evidence/reference-sections.png` and were visually inspected.
- Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Bounds **179.820 × 178.020 × 3.190 mm** (STL has no unit metadata; mm assumed from source context).
- Measured source sheet **1.60 mm**, socket **4.50 × 1.70 mm**, low runners at **.21–.22 mm**. These inform real sheet/socket/carrier construction, not just appearance.
- **Proposed reconstruction**, not measured source features: 4.50 mm tongue width uses the measured socket long dimension as a datum; new sockets are `(sheet + C) × (4.50 + C)`, sheet 2–3 mm, total clearance .10–.35 mm, runners .4–.6 mm. The source .10 mm sheet/slot surplus is the lower clearance setting. The wider channel cheeks maintain a calculated **≥2 mm horizontal channel-exit web** (≥1.5 mm perpendicular to the channel) across all supported silhouettes and pane fits.
- The angled channels, independent pane clearance, lower stops, apron, transforms, enclosure and every optical interface are original. Unlike earlier upright wire/measurement kits, this assembly seats a broad **inclined external sheet by diagonal insertion** and exposes a real optical-plane angle.
- Source mesh has nonmanifold/degenerate artifacts and is **inspection-only**, not imported, silently repaired or used as a printable output. No private/reference STL, cat silhouette or source clip is redistributed. All app parts are original Manifold solid reconstructions. Local reference trees and the old daily_app gallery remain read-only.

The concrete visual/interaction reference is read-only `keycap_generator2`: its README, App/Viewer, styles, image/STL and export/worker modules informed the 374 px left rail, labelled collapsible sections, paired numerical sliders, pink keycap buttons, imported-source editor, current-mesh worker gating, isolated/assembled/flat/exploded views, checkerboard image conversion, named portable designs and local exports. No source history or dependency tree copied wholesale. Generic local studio components are reused from prior Daily App Lab studios; the entire optical geometry, interfaces and assembly checks are new.

## Parameters and fits

All dimensions **mm** except explicit tilt/rotation in degrees.

| Control | Supported range |
| --- | --- |
| Card width / height | 180–240 / 170–240 |
| Cheek centre-plane span | 40–70 |
| Channel horizontal run / tilt | 24–40 / 40–55° |
| External pane thickness | .5–1.5 |
| Total pane-channel clearance | .15–.40 |
| Printable sheet thickness | 2–3 |
| Total socket clearance | .10–.35 |
| Part spacing | 3–5 |
| Runner width / height | .8–1.2 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Art rotation / X,Y | ±180° / ±1.5, ±2 |

Width of each cheek is `run + 34`; height is `run*tan(tilt) + 12`. Two 4.50 mm tongues per cheek reach through the stage thickness. Stage footprint is `(span + 24) × (run + 58)`. External pane width is `span + sheet + 6`; sloped length is `(run*tan(tilt) + 6)/sin(tilt)`. Channel normal width is `pane thickness + pane clearance`. At 45°, a horizontal object plane is reflected vertically in the ideal single-plane model; changing tilt changes the reflected plane angle to twice the tilt. No raytraced illusion or verified optical performance claimed.

Three real, mesh-built preset thumbnails: Classic ghost, Pocket theatre, Tall reflection. Rounded/small/broad-chamfer stage silhouettes, calibrated mechanical fits, real text and searchable bundled icons. Layouts that cannot fit in the specified carrier are rejected, not scaled or overlapped. FDM clearances are starting points only; first print one cheek and stage and test scrap pane. Increase clearance .05 mm at a time if tight; no universal fit.

## Both import workflows change exported solids

All processing happens **on-device**: no backend, paid service, API key, cloud request or user-file upload. Dependencies, fonts and WASM bundled locally. Only synthetic CC0 samples in `public/samples` are committed; personal inputs are not saved to the repository.

### PNG/JPEG/simple SVG → real bounded engraving

File picker on phone/desktop and single-file drag/drop. PNG/JPEG content headers are inspected before decoding: maximum **2 MB**, **12 MP**, **6000 px per side**. Images normalize to ≤500 px for bounded portable saving. SVG supports ≤2000 simple filled shapes/path elements and ≤6000 px dimensions, rejects scripts/references/external resources and rasterizes locally at 256 px. Text (8 characters) and six searchable vector icons use the same path. Source and actual converted cutout are shown side-by-side on a checkerboard.

**Exact method:** browser canvas applies contain/cover fit, ±25% crop translation and transparent/light or dark-background compositing. Luminance samples at **20 × 20** become a closed triangulated height field; threshold 1–254 gives depth or zero, grayscale gives `depth × (1−luminance/255)`. Adjacent grid vertices interpolate in triangles: this is deliberately low-resolution **2D-to-relief engraving**, not automatic full-3D reconstruction or high-resolution vector tracing. White/transparent holes keep their backing. A Boolean-subtracted exact tool produces .4–.6 mm recesses with at least 1.4 mm printable backing. No raised mode is offered because the kit remains flat-sheet. Empty silhouettes and unsafe art placement are blocked. Crop, background, threshold, mode, scale, depth, rotation and placement alter the actual exported mesh.

### ASCII/binary STL → exact mesh-shaped stage engraving

Up-axis (Z, Y or upside-down Z) before attach, raw dimensions, explicit mm confirmation because STL is unitless, XY proportional footprint scale, independent Z depth fit, rotation, X/Y placement and reset. Shows the source solid separately. The actual original mesh is subtracted from the stage apron; it is **not** a preview-only texture or unchanged re-export. Engraving lies in a radius-6.5 mm protected keep-in zone outside feet, sheet channels and the external pane projection.

Bounded contract: **one outward-wound, closed, connected convex solid with a broad flat bottom and no overhang**, ≤1500 triangles, 40 bytes–2 MB, .2–250 mm on each axis. Checks file structure/truncation, finite vertices, degeneracies, welded edge incidence/winding, positive volume, connectedness, pairwise self-intersection, convexity, bottom contact and XY footprint. Unsupported concave/hollow/branched/disconnected/open/nonmanifold/overhanging meshes get actionable errors. No convex-hull replacement, face-dropping repair or claimed arbitrary repair. Up-axis changes explicitly clear the source; reattach it. Replace/remove/reset work for both paths.

## State, worker, views and exports

Manifold WASM runs in a Web Worker; 100 ms debounce and sequential build IDs/current-state keys prevent stale geometry export. Loading/building/success/error are real states. Invalid parameters, failed imports and worker failure disable STL/ZIP. Last-good preview is explicitly labeled; it cannot export while a current build is invalid. Bounded tessellation; Boolean results simplify with .01 mm tolerance, then independent closed-solid checks reject invalid output. Preview and binary STL share exactly the final valid mesh; downloaded mesh hashes are tested against the UI signature and a JSON-regenerated model.

Undo/redo, six local named designs, JSON save/open include bounded mesh arrays or normalized PNG payload. Missing/oversized/invalid payloads are rejected with reattachment guidance. Dark/light theme persists separately. Preview rotate/orbit/zoom, fit, top/front, touch orbit/pinch, see-through stage, assembled/exploded/isolated parts, actual connected card and de-tabbed print plate. Cheek lift and explosion are labeled preview-only; all printable exports stay bed-flat. The external pane ghost never goes into an STL.

Prominent **Download STL**, direct per-part STL, **Everything ZIP** containing connected card + three clean-part STLs, portable JSON and numbered instructions with **current pane cut dimensions**. Print one card OR clean parts, never both. ZIP is not labelled 3MF, and preview colours are not encoded in STL. Exact current X/Y/Z export dimensions shown. Exports use proper binary normals and positive-mm coordinates relative to each flat part/layout.

## Print and assemble

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls; all exported parts bed-flat Z=0, no supports intended. Snip twelve runners 1.8 mm outside the parts and trim flush. Seat and **bond** two cheeks in four stage sockets; shoulders touch the top and feet finish flush below. Allow adhesive to cure. Cut and smooth the indicated clear PET/acrylic sheet; slide it diagonally down both channels onto the blind stops. Use a dim backdrop and small horizontally lit object/display; view from the low/front side. Transparent single sheets may cause weak/double reflection. Remove the unretained pane before moving the stage. No bearings, magnets, fasteners or powered electronics are required for the printed assembly; lighting/display is external. There are no compliant printed flexures or claimed material fatigue ratings.

## Validation evidence

`geometry-validation.json`: every preset, built-in shape, field extrema and joint pane/tilt/thickness/silhouette extrema; image-derived and ASCII/binary-STL-derived outputs and transformed imports. Independent binary parser checks byte length, nonempty finite/nondegenerate faces, stored unit normals, consistent outward winding, each component positive volume, welded edges exactly two opposite-directed faces (1e-5 mm weld), expected component counts and mm bounds. All individual parts and translated float32 clean plates are checked.

`validate.mjs` uses Manifold intersections independently of mesh validity: flat-part disjointness; carrier dimensions; upper cross-sections lie inside bed footprint; twelve runner cuts leave exactly carrier plus three undamaged parts; sockets and pane channels remain unblocked in the **connected card**; four foot clearances; seated assembly disjointness; 18 cheek insertion samples and 11 pane insertion samples; true bottom stops; bounded horizontal/normal channel exit webs; protected engraving backing. It distinguishes required adhesive and unretained external pane from positive mechanical capture.

`extra-validation.json`: image and mesh on every preset, with actual bright-hole backing and dark-ring cut probes. Browser reports cover real PNG/JPEG/ASCII/binary uploads and real downloaded geometry, pixel/threshold/depth/crop/scale/placement differences, invalid/open/nonmanifold/concave/truncated/oversized/empty inputs, reset recovery, thumbnails/presets/text/icons/SVG, exact preview/export/JSON roundtrip hashes, each ZIP STL, undo/redo, local saves, missing payloads, real views, worker-abort recovery, phone 320/390 px, all editor tabs and expanded instructions, saved dark theme, keyboard focus and touch orbit/pinch. Screenshots under `evidence/`. Geometry checks are **not physical print, adhesion, optical, safety or strength tests**.

## Dependencies

React/React DOM (MIT), Vite and React plugin (MIT), Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), bundled Fredoka/Rubik Fontsource fonts (SIL OFL 1.1), gh-pages (MIT); Playwright is a development-only test dependency (Apache-2.0). No CDN import. Synthetic fixtures CC0. Source design credit/license above; original parameterization and studio code are not a raw source mesh redistribution.
