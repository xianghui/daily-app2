# Tunnel & Sight

A local browser **forced-perspective aperture kit-card generator**. Snip twenty real runners, stand four graded pierced portals in an eight-mortise plinth, and look from the chosen eye point: their circle, hexagon or diamond openings align along the same perspective rays. Moving your eye reveals the layers. This is a five-piece physical assembly, not a browser game, repeating keycap, loose-parts layout or static STL re-export.

## Run and dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
npm run preview -- --host 127.0.0.1 --port 5295
node extra-validation.mjs
node browser-validation.mjs
```

Node 22.12+. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik (SIL OFL). All generation, fonts, imports and exports run locally with bundled dependencies; no APIs, CDN imports, keys, paid service or server-side modeling. WebGL and Web Workers required. Base `/daily-app2/20261029-15/`. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Actual site publication uses the root monorepo `deploy/` flow.

## Inspected STL reference and provenance

Local STL collections were searched first under `/Volumes/ExternalHD/3d_printing_apps/`. Keycap/switch and slider meshes are not appropriate sheet/carrier references. The local kit-card projects have no suitable source STL. The selected public construction reference is **White Cat Kit Card**, **Mike Kasberg**, Printables **865769**, source <https://github.com/mkasberg/white-cat-kit-card>, listing <https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card>, **CC BY 4.0**, <https://creativecommons.org/licenses/by/4.0/>.

Fresh Printables download returned **HTTP 403**. Rather than claim a fresh download, this run parsed the accessible prior public-source cached file `/tmp/lace-facet-reference/source.stl`. Its hash matches the documented source. README, LICENSE and `kit_frame.scad` were freshly retrieved read-only from GitHub. No private mesh or raw third-party STL is redistributed.

- SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**.
- Actual binary STL: **30,616 triangles**, **179.820 × 178.020 × 3.190 mm** bounds.
- STL has no units metadata. Source SCAD corroborates millimeters, **1.6 mm sheet** and 179.8 × 178 mm perimeter.
- Measured main sheet Z planes 0/1.6 mm. Section ray at Y=100/Z=.5 gives **1.600 mm perimeter rail**. Thin-bridge vertices include .21/.22 mm. Source `wire()` uses .6 mm width and a .2 mm one-layer neck.
- Generated and visually inspected actual sections at **Z=.1/.5/1.59 mm**: [reference sections](evidence/reference-sections.png).
- **27 edge-adjacent components**, including 25 two-triangle artifacts. Source is **not watertight**. It is a design/construction reference only, not fed into the CSG engine or claimed repaired.

**Concrete adaptation:** retain measured **1.6 mm default sheet**; strengthen measured 1.6 mm rails to **2.4 mm** and low bridges to **.4–.6 mm** rectangular runners, **.8–1.4 mm** wide. Three braced bays hold five parts with four accessible runners per part. Eight shoulder-supported tongues, all fits, aperture profiles and perspective math are new parametric reconstructions, not source joint dimensions. No spacecraft shapes, bend hinges or clips are copied; no endorsement implied. Full measurements, retrieval details and measured-vs-proposed decisions: [reference-analysis.json](reference-analysis.json). `reference-inspect.py /path/to/source.stl` reproduces mesh analysis in an environment with trimesh, numpy and matplotlib.

**Read-only visual reference:** keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, geometry/STL, worker, export and image-conversion modules were inspected. Applied concrete patterns: compact sticky header, 374 px scrollable left panel, collapsible sections, raised keycap-like selections, paired mm slider/number inputs, large right gradient viewer, source previews, explicit unit confirmation and export panel. Phones show preview → dimensions/warnings/exports → stacked controls. Saved light/dark theme, visible focus and reduced motion. No switch sockets are imposed. Reusable editor, parser and export infrastructure is adapted from an earlier daily studio; portal geometry, calibrated eight-seat assembly and perspective validation are new.

## Parameters and exact geometry

All linear dimensions **millimeters**, rotation degrees. `src/geometry.js` is the pure model shared by Node validation, worker, preview and STL export.

| Parameter | Range |
|---|---|
| Card width / height | 215–250 / 160–200 |
| Plinth width | 54–66 |
| Portal height | 48–64 |
| Portal spacing | 12–18 |
| Eye distance in front of first printed face | 70–130 |
| Near aperture radius / lateral eye offset | 6–9 / −6…6 |
| Tongue width / total joint clearance | 6–8 / .10–.35 |
| Sheet / part spacing | 1.6–2.4 / 4–7 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Medallion dimple depth | 0–.4 |
| Imported footprint / STL grip height | 4–7 / .6–3 |
| Artwork rotation / X / Y displacement | ±180° / ±1.5 / ±2 |

Plinth length = `3*pitch + 28`; portals are `plinthWidth − 8` wide. Stations are `20 + i*pitch`, i=0…3. All four portal shoulders sit at Z=sheet thickness. Their two tongues have width selected by the user and engage **sheet thickness − .15 mm**, leaving a bottom recess. Eight receiving mortises add the selected **total**, not per-side, allowance to both tongue width and sheet thickness. Shoulders bear on the plinth, but seats are **not captive**: **adhesive required** after dry-fitting. Calibration is printer/material dependent, not universal.

At portal i, aperture radius `r_i = r_0*(D+i*pitch)/D`, centre X `−eyeOffset*i*pitch/D`, centre height `sheetThickness + .58*portalHeight`. Polygon shapes are real 64-segment circle, six-sided hexagon or four-sided diamond openings. Exact printed FRONT surfaces define the sightline: eye Y = `20 − sheetThickness/2 − D`. Tests project every actual opening vertex back to the first plane, independently checking agreement. Thin sheet edges may vignette; there is no optical-performance guarantee. Generated openings retain ≥3 mm side wall. Joint shoulders and tongue edges remain ≥3 mm wide. Top dimples number portals 1–4. Imported geometry is confined to the plinth's front medallion, well clear of all seats and sight paths.

Card bounds and minimum spacing are validated; combinations too large for the card are blocked with recovery guidance. Rose Tunnel, Prism Offset and Pocket Diamond have actual generated thumbnails. Bounded variation uses the largest card and wide plinth. Undo/redo, six local named designs, portable JSON save/open include bounded source payloads. Missing payloads request reattachment rather than pretending files were restored.

## Image, text, icon and SVG imports

Desktop/phone file picker and single-file drag/drop. **All user data stays in the browser**; no upload or personal file repository storage. PNG/JPEG headers verified before decoding, **2 MB**, **12 MP**, **6000 px per side** limits; normalized to ≤500 px. Simple SVG ≤2000 elements, no external resources/scripts/text/effects, rasterized locally to 256 px. Synthetic public samples are bundled with attribution notes.

Conversion is a documented **20 × 20 sampled grayscale height map**, not exact vector tracing or full 3D reconstruction from one photo. Fit entire image or cover/crop, pan ±25%, composite alpha against light/dark background and optionally invert. Luminance `.2126R + .7152G + .0722B`; threshold gives a selected height below threshold, relief uses `depth*(1−luminance/255)`. A closed bottom, sides and continuous triangulated top form a genuine solid for boolean union/difference. Threshold boundaries interpolate between sample vertices. Source preview and actual conversion mask appear on checkerboards. Bright enclosed holes remain unraised/unengraved above continuous backing—not cut through the plinth.

Raised relief .4–3 mm; engraving .4–.6 mm preserves at least .8 mm backing at minimum sheet. Text up to eight characters and six searchable bundled icons use this same actual geometry path. Physical scale, rotation and placement change exported geometry. Fine marks may be below nozzle resolution; use bold marks and inspect slicer layers. Replace, remove, reset transforms and reset conversion controls are functional.

## STL import and bounded support

Actual **ASCII and binary STL** parsing in a worker; **1500 triangles**, **2 MB**, **.2–250 mm per axis**. Weld tolerance 1e−5 mm; finite coordinates, nondegenerate faces, exactly two opposite-wound faces per edge, one closed component, positive volume and self-intersections checked. Explicit **millimeter confirmation** is required because STL stores no unit metadata. Choose Z up, Y up (+90° X) or −Z before attaching; changing axis clears the source for reattachment. Show oriented dimensions, triangles, format and original 3D source preview.

Supported inputs are intentionally **one convex, broad flat-bottom, support-free grip**. Concave/hollow/multishell/branching/overhanging meshes are rejected, not silently replaced by a convex hull or claimed repaired. A bottom 2D hull only validates support, never replaces the source mesh. Original accepted triangles are scaled proportionally in XY, independently in Z, rotated and positioned, then genuinely Manifold-unioned **.15 mm into** the plinth medallion. Minimum transformed XY extent 1.2 mm. The circular radius-6.5 mm keep-in region prevents damage to seats or card bounds. Original mesh, scale/placement and actual final result are all visible. Invalid transforms disable export. Portable STL payloads are revalidated on restore.

## Responsive worker, views and exports

Heavy CSG runs in a local WASM Web Worker, bounded resolution, 100 ms debounce, generation IDs and exact current-state keys. Invalid edits/files, conversion pending, load failure or empty artwork block all exports. Last-good previews are labelled; stale geometry cannot be downloaded. Real building/success/error states and recoverable feedback.

Connected card, five de-tabbed parts on a print plate, exact seated assembly, elevated exploded and individual-part views use the same generated triangles. See-through plinth explains seats. **Eye viewpoint** sets the camera to the exact selected eye position, including lateral offset; orbit away to see parallax. Orbit/touch zoom, fit and buttons are functional. Selection dimensions show final export X/Y/Z. The visible geometry fingerprint is checked against actual downloaded bytes and JSON regeneration. Export always uses flat Z=0 meshes, not assembled visual overlap. STL does not store preview colours.

Prominent binary STL download, each of six card/part buttons, and Everything ZIP: connected-card, marked-plinth, four portals and numbered `ASSEMBLY.txt`. It is a normal ZIP, **not 3MF**. Card is one true boolean-unioned solid: frame, crossbars, twenty low runners and all five parts. Removing runners computationally produces five clean parts plus one connected waste carrier. Separate part STL files have no tab nubs.

## Print and assembly

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls, marks up, no supports intended. Check bed size or export individual parts. Inspect slicer layers at 100% mm scale.
2. Print a portal and a plinth slot strip first; calibrate total .10–.35 mm allowance for material, printer and elephant foot. No forced press fit.
3. Adult: snip twenty runners and pare nubs. Preserve tongues, shoulders and slots. Carrier is waste.
4. Place plinth medallion toward you. With printed faces toward you, lower portals vertically: one dimple/smallest aperture at the first station, then two, three and four toward the rear. Each shoulder rests on plinth; all tongue tips stay .15 mm above the bed.
5. Square the portals and apply small adhesive spots to all eight seats. **Adhesive required**; no hardware, cords or flexures. Let cure before handling.
6. Look from the displayed distance, lateral offset and eye height. Shift your eye for the perspective-layer effect. Not a calibrated instrument, child’s toy or load-bearing product. Keep small parts, cutters and adhesive away from children/pets.

**No physical print, optical, stability, adhesion, fatigue, strength or durability tests performed.** Computational watertightness/assembly checks are not proof of real print performance.

## Reproducible validation

- `npm test`: presets, representative minimum/maximum and mixed extremes, image and STL-derived outputs; independently parsed binary STL byte length, finite coordinates, dimensions, normals, nondegenerate faces, welded two-face/opposite winding edges, connected components and individual positive volumes. Mechanical checks include card bounds, no part intersections, eight open slots, supported shoulders, .15 mm tongue recess, straight portal insertion, actual aperture rays/clear openings, accessible cutters and six components after twenty snips.
- `extra-validation.mjs`: raised/engraved ring-hole solid probes with backing preserved; concave input rejection; sixteen mixed configurations through full mesh/assembly checks.
- `browser-validation.mjs`: production worker/WASM, real PNG/JPEG/SVG and ASCII/binary STL file-picker imports and downloaded STLs; content/threshold/depth/crop/placement comparisons; text/icons; replace/remove/reset; source JSON/local saves, undo/redo, every part and ZIP, error/stale protection and worker abort/reload; 320/390 px preview-first no-overflow phone layouts and real CDP touch orbit/pinch.
- `production-preflight.mjs`: root inline script compilation, unique correct gallery entry and earlier-entry preservation, combined production gallery runtime plus invalid concavity/complexity/nonmanifold/transforms, rapid edits, bounded variation, reduced motion and recovery.

Reports and screenshots beside this README record actual results, with computational checks distinguished from physical testing.
