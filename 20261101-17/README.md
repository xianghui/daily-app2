# Quarter & Cipher

A local React + Vite maker studio for a **five-part rotating-grille pencil-stencil kit card**. Snip twenty runners, glue three registration guides into six sockets, then lift and turn the aperture mask through four registered orientations. Each cell is exposed exactly once. A physical paper craft, **not secure encryption**, not a browser game.

## Run / publish

```sh
npm install
npm test
npm run predeploy
npm run dev
```

Base `/daily-app2/20261101-17/`. Individual `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. The collection is published using the ROOT monorepo deploy flow, not individual deployment. Fonts, Three.js, Manifold WASM, worker, fflate and samples are bundled locally. No API, key, CDN or paid service. `serve.mjs` serves production output at its real base path on port 5677.

## Reference first

Actual mesh: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source/license downloaded and inspected this run. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL, 30,616 triangles, 179.819997 × 178.019994 × 3.190000 mm. STL units assumed mm, corroborated by sheet dimensions. Source has 27 edge-adjacent components including defects: it is not watertight and is **not repaired or bundled**.

Read-only local candidates were found FIRST under `3d_printing_apps`: keycap_generator2 switch template (switch cavities/stem) and fidget_fabric_generator diamond link (8 mm high interlocking link) were parsed and rejected as unsuitable sheet-kit references. Their dimensions/hashes are in `reference-measurements.json`. Source sections at Z=.10/.50/1.59 mm are saved in `evidence/reference-sections.png` and were visually inspected. Measured 1.60 mm sheets and 4.50 × 1.700012 mm sockets inform this ORIGINAL parametric CSG reconstruction. Default sheet and 4.50 mm length retained. Proposed total fit allowance .15 mm differs from measured ~.100012 mm surplus; it is not universal calibration. New .4–.6 mm runners improve bed-level printability relative to source .21/.22 mm runner levels. See `reference-analysis.json` for parameter mapping. Reproduce with `python reference-measure.py /path/to/downloaded.stl` using numpy/trimesh/matplotlib.

Visual/interaction source `keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts inspected read-only. Adapted concrete patterns: 374 px left scroll rail, compact sticky brand/theme header, lavender desk, white panels, coral keycap buttons/pressed states, paired numeric sliders, checkerboard cutout, actual 3D right viewer, preview-first phone, portable local designs and current-worker-result export gating. No switch cavities on this non-clicker design. Generic studio/import infrastructure adapted from prior Daily Object Lab kits; new model, assembly mathematics and validations are not cosmetic substitutions.

## Geometry and parameters (mm)

- Card width/height each 150–190; grille edge 40–56; sheet 1.6–2.4; part spacing 3–4. Unpackable combinations are blocked, not auto-overlapped.
- Grid 4×4 or 6×6, key integer 0–15; border 4–6, web 1.2–2; actual aperture width `(edge-2*border)/N-web` must be ≥2.5. Exactly N²/4 apertures: one choice in each orbit under `(x,y)→(N-1-y,x)`. All N² cells covered once in four turns. Corner pip is actually engraved.
- Side guides and end register have two tongues each. Six slots are `4.50 × (sheet+fit)`; tongue length `4.50-fit`, width sheet; proposed fit .10–.30 TOTAL, not per-side. Tongue shoulders rest at board top and tips are at bed. Adhesive required at all six seats; no friction-lock claim.
- Loose grille per-side play `fit+.2`; preview paper gap .2 is ESTIMATED and paper is not in STL. Lift mask above guide tops before rotating. Registered 0/90/180/270 previews are not an in-guide continuous rotation simulation. Guide height 6 mm; assembly tests lift 8 mm then check full turn. Mask remains removable, not captive.
- Original connected carrier with 20 low runners: width .8–1.4, height .4–.6. Side landing scans avoid the functional tongues; cuts 1.6 mm outside part edges. Card has exactly one closed solid; twenty accessible snips separate five parts plus carrier. Rounded/square/clipped board outlines; three true thumbnail presets and bounded variations.

## Both local import paths

File picker (phone/desktop) and one-file drag-drop. Choose/replace, remove, reset and sample downloads. **All files stay on-device**. Personal uploads never enter the repository.

### PNG/JPEG/SVG → geometry

PNG/JPEG ≤2 MB, 12 MP, ≤6000 px per side, pre-decoding header validation. Normalize locally to ≤500 px. Simple SVG only, ≤2000 elements, no active/external resources, rasterize locally at 256 px; text must be paths. Downsample to a **20×20 height field** on the lower board handle: dark pixels carve .4–.6 mm, leaving ≥1 mm backing; bright holes keep backing. Threshold 1–254 or grayscale relief, dark/light background, fit/cover crop, X/Y pan ±25%. Checkerboard shows removed background and the sampled conversion grid. This is sampled 2D-to-relief, NOT exact vector tracing or full 3D reconstruction from a single image. Relief interpolation can soften holes narrower than the grid; use bold art. Raised mode intentionally unavailable for flat-sheet support. Text ≤8 characters and six searchable bundled icons use the same real relief path.

### ASCII/binary STL → geometry

≤2 MB, ≤1500 triangles, source axes .2–250 mm. Explicitly confirm source millimeter scale because STL carries no units. Select Z/Y/−Z up before attaching; changing axis clears old source and requests reattachment. Source 3D preview/dimensions/format shown. XY footprint 4–7 mm scales proportionally; independent Z engraving depth .4–.6 mm, Z rotation ±180°, X±1.5/Y±2 mm; reset-center button. Exact mesh Boolean-subtracted in lower-board handle, not unchanged re-export, display-only attachment or convex-hull substitute. Imported concavities are **not supported**: one closed outward-wound convex solid with broad flat bed only. Open, nonmanifold, inward, hollow, disconnected, too slender or unsupported overhang inputs reject with actionable errors. No automatic repair claim. This deliberate limited importer does not silently discard concavities.

Both paths share a radial 6.5 mm keep-in around the handle mark, below the paper/slots; source transforms outside it block export. Plain default mark returns on removal. Export geometry changes with source pixels, threshold/depth, mesh shape, scale and placement. Fine relief is experimental; bold strokes wider than .5 mm are recommended for FDM, not guaranteed.

## State / preview / export

Manifold WASM owns real unions/subtractions in a module worker. Bounded geometry, 100 ms debounce, request-id stale guards and exact current-state key; old valid preview is labelled and export disabled during invalid or pending edits/imports. Current valid STL hash shown in stage data attribute and checked against real downloads. Preview uses the SAME printable meshes as export. Interactive touch orbit/pinch, fit/zoom, connected card, de-tabbed plate, isolated parts, assembled, exploded and see-through board. Saved light/dark theme, visible focus and reduced-motion support.

Undo/redo, up to six named local designs, JSON save/open with bounded normalized image and revalidated mesh payloads. Missing image payload is an explicit reattachment error; no phantom restore. Preview colours do not enter STL.

Prominent binary STL for connected card and every clean part. Everything ZIP contains six STLs (card + five optional clean parts) and numbered ASSEMBLY.txt with current fits. Do not print card AND duplicate clean parts by accident. No fake 3MF export. Every export is bed-flat Z=0, not assembled overlap. Physical dimensions are mm; final X/Y/Z updates with selected export.

## Print and assemble

PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Print one guide and board to calibrate before whole card. Snip twenty runners, trim nubs carefully away from apertures and tongues. Seat/glue two side guides and end register in six sockets, cure. Cut paper square equal to grille edge, register against stop, tape front if desired. Lay stencil, write through holes with fine pencil held vertically. Lift above rails, quarter-turn counterclockwise, re-register; repeat four positions. Pip identifies start corner. Matching key/grid/size needed to decode. Loose paper/grille play means this is not precision drafting. Required external supplies: thin paper .1–.2 mm, fine pencil, adhesive, cutters, optional removable tape. Adult craft, small parts. No loads or force ratings.

## Verification (computational, NOT physical)

`npm test` independently parses final float32 STL, welds at 1e-5 mm, checks every edge has two oppositely directed faces, nondegenerate finite triangles, normal winding, positive volume PER component, mm bounds and bed alignment. Tests all presets/shapes, min/max parameters, images and both STL formats; blocks impossible card packing. Kernel intersections check six insertion paths, registered mask lift paths, elevated full rotations, every actual cell aperture over four turns, separated layout, card envelope, twenty-cut release and upper cross-section support. Worker repeats final closed-solid checks on edits. Browser scripts exercise actual picker imports/downloads, malformed sources, portable round trips, undo/redo, icons/text/SVG, ZIP bytes, stale gating, worker failure, theme/focus and touch/mobile UX. Production server checks real base-path worker/WASM. Reports are alongside scripts.

Computational geometry does NOT prove pencil access/precision, glue strength, fit, comfort or physical printability on every printer. **No physical print, assembly, handwriting or material test performed.**

Dependencies: React, Vite, Three.js, Manifold Apache-2.0, fflate MIT; bundled Fontsource Fredoka/Rubik under OFL. Synthetic shared sample fixtures CC0, no third-party raw source mesh. Source reference attribution/license retained in REFERENCE-LICENSE.txt and export notes.
