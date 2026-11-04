# Golomb & Span

A local-browser React/Vite maker studio for a **seven-piece upright Golomb ruler kit card**, not a virtual puzzle or a static STL download. Snip 28 real breakaway runners, set the slotted rail on a desk, and seat six shoulder markers upright. Their centre planes occupy a chosen six-mark Golomb sequence: every positive pair difference is unique. Unit pitch changes actual socket positions; height changes physical markers; profiles, sheet thickness and fit alter exported solids.

## Run and export

```
npm install
npm run dev
npm run predeploy
npm test
```

Static base path `/daily-app2/20261104-14/`. `npm run deploy` exists for individual-folder compatibility; the scheduled publication uses the **root** monorepo `deploy/` flow. No backend, API keys, paid services, CDN or remote model dependencies. React, Three.js, Manifold WASM, fflate and Fontsource Fredoka/Rubik are bundled locally. Heavy CSG and STL parsing run in a Web Worker, with 100 ms debounce, request IDs and current-state export gating. A failed worker or invalid current edit blocks every mesh download, even if the last-good preview remains visible.

The same final meshes drive preview, binary STL and ZIP. The UI fingerprint is compared to real downloaded STL bytes in browser tests. Exports: one connected-card STL, seven clean part STLs, a disconnected clean print-plate STL, or Everything ZIP containing eight named STLs, portable JSON and numbered assembly notes. STL stores neither preview colours nor unit metadata; ZIP is not 3MF. All exports are bed-aligned, not assembled overlaps. Individual parts can be printed instead of the card on smaller beds.

## Reference-first evidence and attribution

Local candidates were inspected first: Keycap Studio `clicker_template2.stl` (944 triangles, 3 components) and Fabric Studio `diamond-link.stl` (5,940 triangles, 1 component). Switch sockets and eight-mm fabric links are inappropriate reference interfaces for a planar assembly card. Those projects and the old gallery remain read-only.

Selected public source: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. License and upstream README are retained as `REFERENCE-LICENSE.txt` and `REFERENCE-UPSTREAM.md`.

Actual downloaded binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles, bounding size 179.820 × 178.020 × 3.190 mm (millimeters assumed; STL has no units). Trimesh splits 27 edge-connected fragments, including two large closed surfaces and multiple tiny duplicate/zero-volume two-face fragments. The complete source is **not claimed clean/manifold**, is not used as a Boolean operand, and has not been silently repaired. It is measurement/design evidence only.

Freshly generated `reference-analysis.json` records bounds/components and actual sections at Z=.100, .215 and 1.590 mm; `evidence/reference-sections.png` plots them. Four measured socket loops are 4.50 × 1.70 mm through a 1.60 mm sheet, a .10 mm total surplus. Low runner top planes are approximately .21–.22 mm. The original slotted-sheet interface and connected detachable carrier inform this reconstruction. We **use the measured 4.50 mm socket width as the nominal width of a newly designed tongue** (not a claim that the source tongue measured 4.50 mm), and deliberately change sheet thickness to 2–3 mm, total socket surplus to .10–.30 mm, and runner thickness to .4–.6 mm. Slots are actual [sheet + surplus] × [4.5 + surplus] through-cuts. Tongue insertion length equals sheet thickness; shoulders seat at the top and tongue ends at the desk. These redesigned fits need printer calibration, not blind application of measured source values.

All Golomb-positioned sockets, uprights, tally engravings, unit tick grooves, protective art apron and card packing are new parametric CSG. No cat geometry/clips/raw STL or private source asset is redistributed. No convex-hull substitution. The reference's duplication/nonmanifold fragments are not inherited. Shared generic local-editor/preview/import infrastructure comes from the prior studio, **not** its arithmetic geometry or mechanism.

Visual/interaction reference: read-only `keycap_generator2` README, App.tsx, Viewer.tsx, styles.css, worker, import/image and export modules. Concrete adapted patterns: 374 px scrollable left panel, sticky compact header, labelled collapsibles, paired mm controls, tactile pressed selections, palette swatches, exact source/converted image previews, imported STL source view/unit confirmation, protected Boolean integration, large right viewer, preview-first phone stack, per-part exports, saved dark theme and bundled rounded fonts.

## Parameters (millimeters unless stated)

| Control | Supported range |
| --- | --- |
| Card width / height | 200–240 / 130–180 |
| Unit pitch | 5.6–7.0 |
| Marker height above shoulder | 12–20 |
| Total socket clearance | .10–.30 (half per side) |
| Sheet thickness | 2–3 |
| Part/frame spacing | 3–5 |
| Tab width / thickness | .8–1.2 / .4–.6 |
| Artwork footprint / depth | 4–7 / .4–.6 |
| Art offset X / Y | ±1.5 / ±2 |
| Art Z rotation | ±180 degrees |

Impossible card packing is blocked, not clipped. The protected art zone at (0, -11) has radius 6.5 mm; transformed art must stay inside it, away from socket row Y=5, with at least 1.4 mm backing. Edge floors, collars and tongue width are not cosmetic controls. Socket surplus is a loose sliding/gravity fit, not an interference fit; there is no captive retention, hardware or glue.

Three real model-thumbnail presets: optimal `[0,1,4,10,12,17]`, spread `[0,1,4,10,18,23]`, wide `[0,2,7,15,18,24]`. Only the first is claimed optimal. All yield 15 unique differences. Marks correspond to upright **centre planes**, not outside edges. Long grooves on the rail indicate marks; shorter grooves show every integer unit. Marker 1–6 tally grooves identify six separately printable parts. Not a calibrated metrology tool.

## Local imports and personalization

File picker works on desktop/phone; single-file drag/drop also supported. Synthetic fixtures with no personal inputs are bundled under `public/samples/`: mark.png, waves.jpg, ring.svg, wedge-ascii.stl, gem-binary.stl (created for the studio; CC0). Sample buttons and fixture downloads work without uploads. Text up to eight characters and six searchable bundled icon paths use the same conversion/export path. Icon SVG artwork is local; no remote icon fetch.

**PNG/JPEG**: validate magic/header, file size ≤2 MB, ≤12 MP and ≤6,000 px side before decoding; normalize to ≤500 px. Local fit/cover and ±25% crop offsets sample luminance at 20×20. Light/transparent background is composited white; dark mode inverts luminance. Threshold 1–254 selects darkness or grayscale sets continuously varying depth .4–.6 mm. A closed piecewise-linear sampled height tool is Boolean-subtracted from the rail apron. Checkerboard shows the actual cutout grid; bright/transparent internal holes leave full backing. This is **2D-to-relief/silhouette conversion**, not automatic full 3D reconstruction and not exact vector tracing. At normal footprint the sample pitch is about .3 mm; fine details may be lost. Empty silhouettes fail recoverably. Engraved only is deliberate: raised art would defeat the bounded flat sheet and protected backing contract.

**SVG**: simple local filled paths/shapes only, ≤2,000 elements; reject scripts, external resources/references, text/effects. Rasterize to 256 px then the same 20×20 relief method, preserving visible bright holes as uncut backing.

**ASCII/binary STL**: exact content/length, ≤2 MB / ≤1,500 triangles; finite coordinates, .2–250 mm per axis, nondegenerate triangles, welded closed opposite edge incidence, one positive-volume connected component, self-intersection check, convexity and broad flat bed contact. Supported contract is intentionally narrow: **one outward convex solid with all XY vertices inside its broad bottom footprint**, not arbitrary sculpture. Concave/open/nonmanifold/cavity/disconnected/overhanging geometry is rejected with instructions; no repair or hull substitution is performed. A bottom-footprint hull is only a validator, never generated replacement geometry.

Select Z-up, Y-up or upside down before attaching, inspect oriented source dimensions, and explicitly confirm millimeters. Source preview remains separate from the final model. XY dimensions scale proportionally to 4–7 mm footprint; Z independently scales into the engraving depth. Rotation/placement alter the actual mesh-shaped subtraction. Input geometry is NOT merely displayed or unchanged re-exported. Center/reset, remove/replace and return to defaults are provided. Changing axis clears the source and explicitly asks for reattachment rather than claiming the old orientation changed.

Everything remains on-device; no personal files are uploaded or committed. Named local designs (six slots), bounded undo/redo and portable JSON store normalized image data / checked STL vertices. Missing image payloads request reattachment; malformed or oversized JSON fails clearly. All source settings and payloads round-trip.

## Assembly and printing

See the exported numbered `ASSEMBLY.txt` and in-app guide. Flat PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, no supports intended. First calibrate rail and one marker. Snip all 28 low runners at marked outside positions and flush-trim stubs. Place rail flat and lower each upright tongue into a socket until shoulders contact the top. Desk supports tongue ends. Lift vertically to release. Pieces are gravity-seated, not captive; do not carry by a marker. There are no snap claims or compliant mechanisms. Fits depend on printer, filament, first-layer compensation and slicer. Keep 100% mm scale because global scaling changes fit.

## Validation and limits

`validate.mjs` independently parses actual float32 binary STLs: exact length, finite coordinates, nonzero triangle area, unit normals/winding, 1e-5 mm welded opposite edge incidence, per-component positive volume, component counts, bed alignment and mm dimensions. Manifold CSG checks card connectivity, cut release (carrier + seven intact parts), no loose-part overlap, all slots unobstructed in both card and clean rail, support-free footprint at sampled heights, protected backing, all 21 assembled pairs and 30 vertical insertion positions. It also checks actual marker centre planes, tongue desk contact and 15 distinct distances. All presets, all silhouettes, field endpoints, combined extrema, malformed parameters and image/STL-derived outputs are exercised.

Real-browser tests run against built `dist/` at the actual base prefix, not only Vite dev. They upload PNG, JPEG, ASCII/binary STL; alter thresholds/depth/scale/rotation/placement; download/parse real STLs; compare byte fingerprints with preview and Node regeneration of saved JSON; validate each ZIP member; test imports, resets, unsupported content, named saves/reload, undo/redo, views and touch gestures. Production worker abort/recovery, stale export blocking, 320/390 px preview-first layout, no overflow, desktop left-panel alignment, theme persistence and focus/collapsibles are checked. Reports/scripts/screenshots are retained in this folder. These are computational geometry and UI checks only: **no physical print, fit, durability, accuracy or tactile test was performed**.
