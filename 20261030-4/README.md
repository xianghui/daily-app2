# Spin & Skein

A React + Vite browser maker studio for an original **three-part Turkish-style yarn spindle kit card**. Snip twelve real runners, slide two crossed whorl arms over a shouldered shaft, tie a yarn leader, and finger-twist slowly. Wind over two arms and under one, then dismantle to release a loose bundle. This is a low-speed craft demonstrator, not a high-speed rotor. Yarn/roving is external; no adhesive, hardware or API key is required. Arms are gravity-seated upright, **not positively retained**. Inversion/upward pulling releases them intentionally.

## Reference-first evidence / attribution

Local STL candidates were searched and parsed first: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three switch components) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one 8 mm high interlocking link). Their actual dimensions and hashes are in `reference-analysis.json`; neither supplies a sheet carrier/joint, so a public kit-card reference was selected.

**White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** (see `reference-LICENSE.txt`). Actual binary STL freshly downloaded and inspected read-only; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles; assumed mm; 179.820 × 178.020 × 3.190 mm overall; 27 edge-adjacent components including defective fragments, not watertight. It is a design reference, never silently repaired or re-exported.

Read source README/license and examined actual mesh sections at Z .10, .50 and 1.59 mm, recorded in `evidence/reference-sections.png` and `reference-measurements.json`. Measured sheet planes 0/1.6 mm, four 4.5 × 1.700012 mm rectangular sockets, lower feature planes .21/.22 mm. See `reference-inspect.py` for reproducible parsing (requires Python trimesh/numpy/matplotlib; downloaded source remains in `/tmp`, NOT bundled).

**Measured vs proposed:** 4.4 mm neck with (4.4 + total allowance) × (sheet + total allowance) slots matches source at 1.6/.10 mm. Default .15 mm is our proposed printer-dependent sliding fit. Upper arm transposes the opening to index it at 90°. The original shaft, 18 mm shoulder, 2.2 mm leader eye, crossed horizontal arms, artwork keep-out and twelve .4–.6 mm runner construction are new. We preserve the sheet/socket/carrier design grammar, not aircraft geometry. No third-party raw STL is redistributed. All reference trees and the old gallery remain read-only.

The visual reference was inspected at `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete studio patterns adopted: 374 px left rail, white/lavender light surfaces and saved dark theme, short-shadow tactile segmented buttons, paired mm inputs, collapsible sections, checkerboard cutout, source transforms, current-build export gating, bundled rounded fonts and phone preview-first flow. Local tested studio infrastructure is reused from earlier daily apps; geometry and spindle-specific assembly tests are new.

## Run / build

```sh
npm install
npm run dev
npm test
node extreme-check.mjs
node hole-check.mjs
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node studio-test.cjs
```

Vite base `/daily-app2/20261030-4/`. The app has `predeploy: npm run build` and `deploy: gh-pages -d dist`; actual combined publication MUST use root `npm run predeploy` then root `npm run deploy`, not the per-app deployment.

## Dimensions / constraints (all mm)

| Parameter | Supported range |
|---|---|
| Card X / Y | 160–230 / 110–150 |
| Shaft length | 70–100 |
| Whorl span / width | 50–80 / 12–18 |
| Sheet thickness | 1.6–2.4 |
| Total socket allowance | .10–.35 |
| Part spacing | 4–6 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Grip groove depth | .2–.5 |
| Import footprint / mesh height | 4–7 / .6–3 |
| Import rotation / X / Y | ±180° / ±1.5 / ±2 |
| Raised / engraved depth | .4–3 / .4–.6 |

Round, chamfered and elliptical whorls and three real presets change geometry. Incompatible card envelopes fail visibly, even if individual dimensions are in range. Neck 4.4 mm, top eye diameter 2.2 mm with ≥1.1 mm side wall; shoulder at 18 mm. Lower and upper slots are perpendicular locally but align to the same shaft in assembly. Artwork lies within a 6.5 mm radius at shaft paddle Y=8, below the shoulder. A .2 mm well and bounded engraving preserve ≥.8 mm backing. No artwork on arms avoids large rotational asymmetry, but one-sided shaft marks can still cause wobble. Tests measure actual volume-centroid eccentricity (<.5 mm for tested cases), NOT dynamic balance.

## Image / SVG import

Desktop/phone file picker, drag-and-drop and bundled synthetic samples. PNG/JPEG ≤2 MB, ≤12 MP and ≤6,000 px side; content/header checked before decode and normalized locally to ≤500 px. Simple SVG ≤2 MB/2,000 elements, no scripts, references, effects or external content; rasterized locally to 256 px. SVG holes follow browser fill rules. Invalid files show recoverable errors and disable export.

Exact method: fit or fill/crop source into a **20 × 20 luminance grid**, alpha composited on selected light/dark background; optional invert, brightness threshold 1–254 or grayscale heights. Triangulated grid surface, boundary skirt and closed backing become a real solid in the geometry worker. Threshold relief uses .4 mm carrier plus selected height; engraving subtracts the inverted solid but leaves unengraved bright holes. Checkerboard shows the actual conversion grid. Features are sampled and interpolate across cells, not exact vector tracing; thin details can disappear. Holes in relief remain unraised/unengraved **over continuous backing**, not through holes. Empty art fails. This is **2D-to-relief, not full 3D reconstruction from a photo**. Depth, scale, crop, shift, placement and rotation alter exported triangles.

Text (8 characters) and six searchable bundled original SVG icons use the same local geometry workflow. Preview colour is not encoded by STL.

## STL import / integration contract

Actual ASCII AND binary STL, ≤2 MB and ≤1,500 facets, all axes .2–250 mm. Explicit mm confirmation because STL contains no units; Z-up/Y-up/−Z-up selection before attachment, source dimensions/3D preview, XY-proportional scale, independent Z height, rotation and bounded placement. Changing up-axis clears the source and requests reattachment. Original facets are Boolean-unioned into the shaft paddle with .15 mm embed: not unchanged re-export, not interpenetrating shells, not a convex-hull replacement.

Deliberately supported subset: **one closed, outward-wound, non-self-intersecting convex solid with broad flat bottom and no overhang footprint**. Weld tolerance .00001 mm; reject degenerate faces, unmatched edges, inward/multiple bodies, concavities/cavities/branches, excessive dimensions/coordinates/triangles, truncated content and unsupported bed contact. Convex hull is used only to VERIFY bottom support footprint, never to replace imported geometry. No arbitrary repair claim. This bounded contract permits reliable support-free integration. Unsupported meshes need editing/reorientation in a modeler; they are not silently flattened. All files are processed locally, no upload/remote services, no personal input committed.

## Studio / export

Manifold WASM genuine solid operations in module Web Worker; bounded detail, debounce, request IDs/stale-result guards, busy/success/error states. Preview and binary STL serializer use the identical current result; previous valid preview may remain on invalid edits, but every export is blocked. Per-part STL buttons, true connected-card STL and Everything ZIP containing card + all three clean parts + numbered `ASSEMBLY.txt`. Assembled/exploded/isolated/card/de-tabbed views; export always bed-flat, never assembled overlap. View-only transparency, orbit/zoom/fit, touch orbit/pinch. Three generated 3D preset thumbnails. Undo/redo, six named local designs, JSON save/open carry bounded PNG/mesh payloads; missing images explicitly request reattachment, never pretend restored. Local storage may fail if full; portable JSON remains available.

## Print / assemble / release

PLA or PETG, .16–.20 mm layers, three walls, flat Z=0, no supports intended. Try clean shaft/arms first and adjust total allowance for your printer/material; do not force 1.1 mm eye walls or thin shafts. Snip four tabs per part at 1.6 mm outside edge then trim nubs. Slide lower arm from shaft top to shoulder; slide upper arm at 90° until it rests on lower. Tie leader through eye; lead over rounded tip. Hold/support leader, finger-spin slowly over a soft tray; park before drafting more fiber. Wind gently over two arms/under one, avoiding joints. Untie leader and remove shaft downward; slide arms sideways out of loose winding. Do not pack tightly. No adhesive or hardware. No positive capture: inversion releases arms intentionally. Adult craft, small parts/cutters; not food-contact, a child toy, a high-speed rotor or a load-bearing tool.

## Validation and limitations

See `VALIDATION.md` and JSON reports for executed checks. Independent exported-float32 STL parser requires exact file size, finite coordinates, nonzero triangles, unit normals agreeing with winding, .00001 mm-welded edges with exactly two oppositely directed faces, positive volume PER component and expected millimeter bounds. Every clean part and connected carrier separately checked. Real CSG intersections check insertion/removal at multiple heights, two shoulder/bearing stops, complete common rotation, open leader eye, disjoint card parts and twelve safe snips yielding three parts plus frame. Actual centroid checked. Image-derived AND mesh-derived outputs receive the same checks; holes probed in real solids.

No physical print, fiber drafting, spinning, yarn release, fatigue, tension, impact or strength test was performed. No guarantee of universal fit or production-quality yarn. Computational fit and watertightness do not establish those physical properties. Use a plain shaft for best balance and calibrate first.

## Dependencies / licenses / privacy

React/React DOM, Vite/react plugin, Three.js, Manifold-3D WASM (Apache-2.0), fflate, gh-pages; Fontsource Fredoka/Rubik (OFL) bundled locally. Playwright is test-only. All generation/export dependencies are in the build; no CDN, paid service, API key, cloud, analytics or user-file network upload. Original tiny fixture artwork and ASCII/binary grip meshes are synthetic, inherited local fixtures only; sample README retained. See third-party package licenses. Reference section illustrations are attributed to Mike Kasberg under CC BY 4.0; original implementation uses reference measurements, not source mesh redistribution.
