# Shear & Equal

A React/Vite browser maker studio for a genuine connected kit card: **two trays, one triangular transfer wedge, one quadrilateral remainder, sixteen accessible breakaway runners**. Move the same two tiles from a parallelogram to a rectangle without rotation. Original geometry, not a renamed earlier mechanism. No hardware or glue.

## Run / verify

```
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node mobile-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node hole-test.cjs
node resize-cleanup-test.cjs
```

Production tests use http://127.0.0.1:5994/daily-app2/20261106-4/. Publication is through the root monorepo deploy flow, not per-app deployment. Per-app `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`.

## Reference first

Read-only local candidates were parsed: Keycap Studio clicker_template2 (3 components, MX-specific) and diamond-link (interlocked fabric, 8mm thick), rejected as unrelated sheet constructions. Public **White Cat Kit Card, Mike Kasberg / Printables 865769**, CC BY 4.0, was actually parsed (30,616 triangles), hash `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Source: https://github.com/mkasberg/white-cat-kit-card . Download URL and full provenance in reference-analysis.json. Bounding size 179.820 × 178.020 × 3.190 assumed mm, two edge-connected components, 57 anomalous edge incidences. Source is not claimed manifold or repaired; no raw triangles redistributed.

Sections at Z=.100/.215/1.590 mm and measured planar levels show 1.60mm sheets, four 4.50×1.70mm slots, .21–.22mm runner tops. Evidence: reference-analysis-raw.json, evidence/reference-sections.svg and reproducible reference-analysis.py. This run reread the actual cached public source; its identifier is not inferred from an earlier app description.

This original reconstruction adapts the source's bed-flat pierced-sheet carrier, low breakaway runners and separately assembled sheet pieces. Runners strengthen to .4–.6mm. Source .10mm thickness allowance informs a proposed .10–.30mm edge fit allowance. Source slot length is not imposed on unrelated tiles; blind pockets replace through slots with .80mm floors. Neither material-dependent fit nor physical printing is asserted proven.

Read-only visual/interaction reference: keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, worker.ts, STL and export modules. Concrete patterns used: 372px left editor, sticky compact branding/theme, raised key buttons, labelled collapsible sections, paired mm controls, checkerboard cutout, imported-mesh source viewport, large right 3D view, isolated/assembled/exploded/flat views, locally saved theme/designs and checked export. Shared studio infrastructure is adapted from earlier daily apps; the dissection, its polygons, transformations and verification are new.

## Exact construction / assembly

For W=base, H=perpendicular height and D=shear, nominal corners are (0,0),(W,0),(W+D,H),(D,H). A vertical cut x=D creates wedge [(0,0),(D,0),(D,H)] and remainder [(D,0),(W,0),(W+D,H),(D,H)]. Translating the wedge by (W,0), with remainder unchanged, fills rectangle [D,W+D]×[0,H]. Ideal area is W×H in both arrangements. Actual tiles inset c/2, tray pockets outset c/2, and finger bores remove plastic: **plastic area is not claimed W×H**.

Snip four runners per part; trim scars without cutting interfaces. Set trays apron-forward. Lower wedge at left of parallelogram, remainder at right. Lift both ABOVE rims before moving. Move remainder to rectangle tray without rotation; wedge travels one extra W right, also without rotation. Lower to pocket floors. Reverse to return. Gravity seated, not captive or load-bearing; not an in-plane slider. Exploded positions and inspection yaw explain assembly; exports remain bed-flat.

## Parameters (mm)

- Card width 240–300, height 180–240; default 260×200 (use clean parts for smaller beds).
- Base W 44–60, perpendicular height H 28–40, shear D 10–24.
- Tiles/trays 1.6–2.4 thick, pocket floors .8; pieces protrude .8 for lifting.
- Proposed fit c .10–.30, spacing 3–5, runner width .8–1.2, runner height .4–.6.
- Rounded, mitred and notched apron outlines; three real presets with generated model thumbnails.
- Artwork footprint 4–7, engraving .4–.6, Z rotation ±180°, X offset ±1.5, Y offset ±2; 5.8 radius keep-in protects pocket and edge. At least 1mm backing.

Print PLA/PETG, .16–.20mm layers, .4mm nozzle, flat Z=0 without supports intended. Print a matching tray/wedge first for calibration; no universal tolerance. No physical print, assembly, durability or force test performed.

## Local image / SVG / text / icon workflow

File picker on phones/desktops and desktop drop. PNG/JPEG headers and actual content checked before decode, ≤2MB, ≤12MP, ≤6000px side. Normalize ≤500px. Simple SVG ≤2000 elements and ≤6000px side, no scripts/external resources/effects; locally rasterized to 256px. Text up to 8 characters and six searchable bundled SVG marks use the same pipeline. Synthetic/public sample fixtures only.

Actual conversion: background-normalized luminance resampled to 20×20 with contain/cover crop and ±25% pan. Threshold 1–254 or grayscale mode determines top heights of a closed triangle-grid cutter. Its maximum depth is .4–.6mm; it is Boolean-subtracted from the first tray apron. Bright/transparent holes retain backing. Grid interpolation means this is **sampled 2D-to-relief, not exact outline tracing or full single-photo 3D reconstruction**. Checkerboard cutout shows sampled input; the 3D viewport shows final real geometry. Raised relief is deliberately unsupported to maintain the flat card envelope.

## Local STL workflow

Binary and strict ASCII parser; ≤2MB/1500 triangles, .2–250mm per source axis. Explicitly confirm mm because STL stores no unit metadata. Select Z/Y/−Z up before attaching; changing orientation requests reattachment. Shows actual source mesh and dimensions. XY is uniformly scaled to footprint, Z independently to engraving depth; rotation and placement affect the real exported cut. Scale factors are displayed. Replace/remove/reset restores built-ins.

Supported subset: **one closed outward-wound convex broad-flat-bottom solid with no unsupported overhang**. Finite vertices, areas, edge incidence, connectivity, winding, volume, convexity and bed contact checked. Concave, hollow, branched, disconnected, open, nonmanifold, degenerate or unsupported meshes are rejected actionably, not repaired and never replaced with a hull. Actual accepted triangles become a Boolean engraving cutter; no unchanged re-export or interpenetrating shells. This bounded stamp workflow is deliberately narrower than a general arbitrary STL editor.

## Responsive state and export

Manifold WASM builds in a local Web Worker with debounce/id and state-key stale guards. Invalid/currently building edits disable export; any last-good viewport is labelled. Preview and binary STL come from the exact current result, identified by mesh fingerprint. Assembled/rectangle-fit/exploded/isolated/clean/card views use the same geometry. Orbit/zoom/fit and touch controls. Light/dark theme, undo/redo, six local named saves, JSON open/save including bounded image/STL payloads (2MB JSON); missing payload requests reattachment, never pretends assets restored.

Per-part binary STL, connected card, clean plate and Everything ZIP (card + four STLs, design JSON, assembly text and SVG map). No fake 3MF, no STL colour claims. All dependencies bundled locally: React, Three.js, Manifold, fflate, OFL Fredoka/Rubik. No APIs, CDN assets, server generation or uploads. Playwright is only a development test dependency.

## Validation

`validate.mjs` independently parses final float32 STL, verifies every edge has two opposing face incidences at 1e-5mm weld tolerance, positive per-component volume, finite vertices, nondegenerate faces, normals, dimensions and component counts. All presets, outlines, field endpoints, combined extremes, image/STL-derived extrema are included. Boolean probes verify pocket voids, continuous floors, finger bores, no assembled/flat collision, support-free upper footprint, full vertical insertion, true card bounds, sixteen cuts yielding carrier+four intact parts without fragments. Separate 2D coverage tests verify both exact nominal dissections and area invariant.

Real browser tests download binary STL and compare preview fingerprints and regenerated JSON geometry, upload PNG/JPEG/ASCII/binary fixtures, test threshold/depth/pixels/crop/transforms, malformed and excessive files, portable assets, undo/redo, named storage, all view modes, ZIP contents, worker failure, stale asynchronous imports, source viewport cleanup, saved theme, focus, every mobile tab and touch orbit/pinch. Reports and screenshots are generated alongside the app. Computational checks are NOT physical print or fit testing.
