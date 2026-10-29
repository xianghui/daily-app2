# Loop & Crown

A local browser maker studio for a **four-peg French-knitting loom kit card**. Snip 28 accessible runners, slot two arched feet into an open-center deck from below, and four forked pegs from above. Bond eight joints, then use separately supplied yarn and a blunt hook to make four-stitch cord. This is an original seven-panel assembly, not a winding bobbin, a weaving loom reskin, or a static STL viewer.

**No physical print, knitting, bond-strength, snagging, fatigue or durability testing has been performed.** Computational checks do not establish physical performance. Adhesive, smooth 1–2 mm yarn and a blunt knitting/crochet hook are required separately. The proposed gentle .5 N handling limit is not a tested strength rating. Adult craft: sharp cutters and small parts.

## Reference-first evidence

Local candidate STLs were parsed read-only first: Keycap Studio's three-component switch template and Weave's diamond link. Neither provides sheet-kit joints. The public **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-white-cat-kit-card), CC BY 4.0, supplies the actual mesh reference. Its source license is included in `reference-LICENSE.txt`; raw source STL is **not** redistributed.

`reference-analysis.json` records download URL, identifier, SHA-256, exact bounds, triangle/component counts, source defects and design decisions. `reference-inspect.py` reproduces actual mesh parsing and sections in `evidence/reference-sections.png`. Source: binary STL, 30,616 triangles, approximately **179.820 × 178.020 × 3.190 mm**, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. STL has no units; millimeters are assumed and corroborated against documented sheet scale. Edge adjacency yields 27 components including small defective fragments; it is not watertight. It is used as a design reference, not automatically repaired or re-exported.

Measured mesh planes establish **1.6 mm sheet**, four measured **4.5 × 1.7 mm rectangular sockets**, and low carrier wires at approximately .21–.22 mm. Reconstruction uses **4.4 mm tongues**, socket `(4.4 + total allowance) × (sheet + total allowance)`. At sheet 1.6 and allowance .10, the measured reference socket dimensions are matched. Default .15 allowance is a proposed glue-fit starting value, **not** a measured printer tolerance. New peg forks, central yarn passage, feet, 2.4 mm frame rails and .4–.6 mm runners are redesigned; the source is not a knitting loom.

Visual/interaction reference, inspected read-only: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, `src/export.ts`, `src/imageTrace.ts`, `src/geometry/stl.ts`. Concrete patterns: 374 px scrollable left editor, preview-first phone layout, white/lavender studio, coral keycap buttons, selected depressed states, checkerboard cutout, saved dark theme, worker-backed current-result gating. Shared local import/viewer/studio infrastructure was adapted from `../20261029-31`; loom geometry, sockets, poses, assembly sequence and tests are independently redesigned. No reference project dependencies or Git history were copied wholesale.

## Run / build

Node 22.12+ and npm:

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261029-32/`. Individual scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; public monorepo publication uses the **root** build/deploy flow instead. React/Vite, Three.js, Manifold WASM and fflate are bundled locally, as are Fredoka/Rubik Fontsource fonts (SIL OFL). Manifold is Apache-2.0; Three.js/React/Vite/fflate retain their upstream licenses. No CDN, API key, paid service or generation backend.

## Geometry and bounded parameters

All lengths in **mm**, no implied units from STL. Card width 190–215, height 170–195; deck width 58–66; peg height 24–34; center opening 14–20; open fork depth 2–4, width 3, side prongs 3; foot height 20; sheet 1.6–2.4; total socket allowance .10–.35; spacing 4–6; runner width .8–1.4, thickness .4–.6; grip groove depth .2–.5. Carrier rail 2.4. Raised grip variants: softened square, chamfer and ellipse. Three presets include actual generated assembly thumbnails. Random variations stay within bounded controls. Invalid or undersized card layouts are blocked, not compressed into overlaps.

Every panel is a closed CSG solid. The exported card unions a carrier, middle rail, all seven panels and 28 real low breakaway runners. Four runners per panel contact nonfunctional outer edges. Clean parts omit all runners; card stays within its declared XY envelope. Sockets cut through the deck, with matched tongues and shoulder stops. Feet enter vertically from below; pegs enter from above. Center route is empty from peg tips to the desk. Imports cannot reach sockets, forks or yarn route.

## Images, SVG, text and icons

PNG/JPEG file picker, drag/drop and bundled synthetic samples work on desktop and phones. Limits: **2 MB**, actual PNG/JPEG content, ≤12 MP, ≤6,000 px per side; inspect image header before decode. Normalize to ≤500 px longest side for portable local storage, sample at **20 × 20**. Simple self-contained SVG shapes/paths are rasterized locally to 256 px; ≤2,000 elements, no scripts, URLs, external resources, text or filters. Convert text to paths externally for SVG import. Built-in text (8 characters) and six searchable vector marks go through the same local image conversion.

**Exact method:** fit/contain or fill/crop source into a 20 × 20 grid; alpha composites over selected light/dark background; luminance `0.2126R + 0.7152G + 0.0722B`, inverted for dark-background mode. Threshold (1–254) gives binary heights, or grayscale gives proportional relief. A closed triangulated heightfield with continuous backing is solid-unioned into or subtracted from the medallion. Bilinear triangle interpolation occurs between samples. Holes in artwork remain **unraised/unengraved regions on solid backing**, not physical cut-through holes. This is bounded **2D-to-relief**, not full 3D reconstruction or exact vector tracing. The checkerboard displays the processed foreground and original is shown alongside it.

Adjust depth .4–3 (engraving .4–.6), crop offsets ±25%, footprint 4–7, rotation ±180°, placement X ±1.5 / Y ±2. Entire footprint must remain inside a 6.5 mm safe radius. Engraving leaves ≥.8 mm backing at supported extremes. Empty silhouettes and unsafe transforms block export. Reset controls, replace/remove import and return to defaults remain available.

## STL imported-grip workflow

Actual **ASCII and binary STL** parse in the worker, ≤2 MB, ≤1,500 triangles, each axis .2–250 mm, finite bounded coordinates. Source dimensions/format/triangle count and a separate source preview appear. Explicitly confirm coordinate units are **millimeters**, since STL cannot encode them. Select Z/Y/−Z up before attaching; changing up-axis clears the import to request reattachment. Center, XY footprint scaling (proportional), independent Z height .6–3, Z rotation and safe XY placement alter the actual imported vertices. Original mesh becomes the protected outboard grip mark through a genuine Manifold solid union, embedded .15 mm into the deck. Not unchanged re-export or preview-only decoration.

Supported contract: **one closed, outward-wound, connected convex solid with a broad flat Z-down base**. Validate edge incidence, opposite neighbor winding, positive volume, degenerate/finite triangles, triangle intersections, face-plane convexity, bed contact and no overhang outside bottom footprint. Concave, hollow, open, inconsistent, self-intersecting, disconnected and unsupported meshes produce actionable errors. Convexity is a restriction, **not a hull replacement**. No automatic repair is claimed. Preserve your original complex model and simplify a copy in your modeler if needed.

## State, responsiveness, privacy and export

Manifold heavy generation/CSG and STL parsing run in a locally bundled **Web Worker**, 100 ms debounce and generation IDs ignore stale results. Real building/success/error state. Export requires exact current parameter/source/transform state; invalid changes cannot download the last-good mesh. Same indexed mesh drives preview and binary STL. FNV-1a byte signature on the stage matches actual downloads in tests.

Assembled, exploded, connected-card, de-tabbed print layout and isolated panel views share the same underlying geometry. Assembly transforms are explanatory; no yarn/bending physics simulation. Orbit/zoom/fit and touch gestures use Three.js. Ghost opacity is preview-only. All exports are **bed-flat** at Z=0, not assembled overlapping shells. Prominent binary STL export, per-part buttons and Everything ZIP (card + seven clean panels + numbered assembly notes). STL does not store colour. No mislabeled 3MF.

Undo/redo, six locally named designs, JSON save/open carry bounded normalized PNG or verified mesh payloads; missing image payload requests reattachment and disables export. Files are processed locally, never uploaded or saved as personal repository fixtures. Only synthetic demo fixtures ship. Browser localStorage stores designs only on explicit save; theme preference is persisted. No cloud/sync/AR service.

## Print and assemble

Print flat in PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Calibrate source-derived .10–.35 total socket allowance on your printer/material. Snip all 28 runners; trim nubs without damaging forks or sockets. Insert two feet **up from below**, bond four joints. Insert four pegs **down from above**, bond four joints. Fully cure; smooth all yarn-contact edges. Supply smooth yarn and a blunt hook; wrap four pegs, lift each lower loop over the working yarn and draw cord down the center. External hook/yarn/adhesive are not printed components. See Everything ZIP for numbered detailed instructions.

## Reproducible verification

`npm test` / `validate.mjs`: independent binary STL byte count, finite vertices, normals consistent with winding, nondegenerate faces, dimensions, weld tolerance 1e-5 mm, exactly two opposite-directed triangles per edge, connected components and positive volume **per component**. Every card and clean panel is checked for all presets, shapes, parameter min/max, raised/engraved/grayscale images, ASCII/binary imported grips and transformed imports. Actual CSG intersections check assembly fits, shoulder stops, sampled insertion routes, all clean-part separations, open yarn route and 28 accessible snips yielding eight separated components (seven parts + carrier).

`browser-test.cjs`: real file-picker PNG/JPEG/ASCII/binary, actual STL downloads versus UI signature and independently regenerated JSON state; changed pixels/threshold/depth/crop/scale/rotation/placement; malformed/open/nonmanifold/concave/excessive inputs, empty image, units, stale prevention, replace/remove/reset; every per-part STL; touch orbit/pinch, phone imports/downloads and widths 320/390. `studio-test.cjs`: all presets, silhouettes/text/icons/SVG, image+mesh JSON, named saves/reload, undo/redo, missing payload, engraving, actual ZIP contents, views, dark theme, focus, collapsible sections, desktop panel/phone stacking and worker failure/recovery. `supplemental-test.cjs`: up-axis and rapid edit checks. `variation-test.cjs`: bounded variations. `hole-check.mjs`: actual Boolean probes for unraised/unengraved image holes.

Run browser scripts against a static server exposing **dist under its real base prefix**, `TEST_BASE=http://127.0.0.1:5432` by default. Reports/screenshots in this folder document results, not physical testing. No claim of physical knitting or universal fit is made.
