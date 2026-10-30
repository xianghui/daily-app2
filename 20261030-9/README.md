# Cradle & Stitch

A local React + Vite / Manifold WASM maker studio for a **four-part, breakaway kit-card miniature bookbinding cradle**. Snip sixteen runners, hold two wings in a V and slide two end saddles onto four inclined tongue seats. Bond all four joints after a dry calibration trial. Rest a small folded paper signature over the open central stitching channel. This is not a drilling safety jig, a calibrated instrument or a load-bearing bench.

## Reference-first evidence and attribution

Local STL candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` is a three-part switch cutter/stem template, not a sheet assembly; `fidget_fabric_generator/public/templates/diamond-link.stl` is an 8 mm interlocking link, not a flat-card joint. Their measured dimensions, hashes and rejection reasons are in [reference-measurements.json](reference-measurements.json).

The selected actual mesh is **White Cat Kit Card**, Mike Kasberg, [source and instructions](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License text: [reference-LICENSE.txt](reference-LICENSE.txt). The exact public binary STL URL is in the measurement file. SHA-256:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

Parsed this run: 30,616 triangles, 179.820 × 178.020 × 3.190 mm overall; **27 edge-adjacent components and nonwatertight**. STL has no units; millimeters are assumed and corroborated by the source sheet construction. Measured 1.6 mm sheet planes and 4.5 × 1.700012 mm socket section loops. Sections at Z=.1, .5 and 1.59 mm were plotted and inspected in [evidence/reference-sections.png](evidence/reference-sections.png). Source low runner planes .21/.22 mm are observations, not our runner dimensions. The reference is not silently repaired, used as a printable mesh, or redistributed.

**Concrete adaptation:** a 4.4 mm tongue plus .10 mm total allowance reconstructs the measured 4.5 × 1.7 mm seat on 1.6 mm sheet. Proposed default allowance is .15 mm. This original reconstruction changes the source spacecraft into two inclined trough wings and two V-notched saddles. Four mortises rotate with incline, the panel thickness is offset to preserve the complete central channel, and end saddles insert horizontally rather than requiring flexure. Accessible .4–.6 mm runners and carrier are new Boolean solids. The marked wing assembles decorated-face outward/down, leaving both paper faces clear. [reference-analysis.json](reference-analysis.json) separates measurements from these design choices.

The read-only `keycap_generator2` README, styles, App, Viewer, worker, image tracing, STL and export modules were inspected for concrete interaction patterns: 374 px left panel, preview-first phone stacking, lavender desk/white panels, tactile controls, checkerboard cutouts, local font assets, units, saved theme and current-worker-result export gating. This monorepo's own studio/import/serialization infrastructure was reused; the cradle geometry, transforms and assembly checks are new. No reference project dependencies or Git history were copied wholesale.

## Run and package

Node 22.12+; `npm install`, `npm run dev`; `npm test` for computational geometry checks; `npm run predeploy` for production. The per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publication of the combined site uses the root monorepo deploy flow, **not** the individual app script.

Bundled dependencies: React/ReactDOM, Vite/react plugin, Three.js/OrbitControls, Manifold-3D (WASM solid Boolean operations), fflate (real STL ZIP), Fredoka and Rubik via Fontsource (OFL), gh-pages. Playwright is a local validation dev dependency. No CDN imports, API keys or remote modeling services.

## Parameters and printable orientation

All lengths are millimeters; incline is degrees. Card width 220–260; card height 160–200; cradle length 70–94; wing breadth 22–30; incline 30–50 (V opening 120–80 degrees); stitching channel 4–8; sheet 1.6–2.4; total joint allowance .10–.35; spacing 3.5–5; runner width .8–1.4 and thickness .4–.6; groove depth .2–.5. Outer corner variants use small/wide/chamfered cutbacks without changing functional end tongues. Three presets generate thumbnails from real geometry. Card envelope and invalid numeric combinations are checked.

The frame, center carrier and sixteen tabs are genuinely unioned to all four parts; connected-card STL contains **one** closed component. Snipping releases four parts plus the carrier. No print-plate layout is mislabeled as a card. Clean-part STLs omit tabs. Connected card, de-tabbed print layout, exact assembled, exploded and individual views use the same geometry. Exploded offsets are explanatory only. Preview colors/see-through never affect STL. Exports always remain bed-flat, Z=0; the UI shows selected export X/Y/Z (the relief makes total Z larger than sheet thickness).

Print PLA/PETG at .16–.20 mm layers, three walls, 100% mm, no supports intended. Check bed size; export clean parts separately if needed. Calibrate one wing tongue and one saddle socket. All four fixed joints require compatible adhesive; no unverified friction retention. Cut runners 1.6 mm outside parts, trim nubs, leave tongues intact. Hold wings in V, flip the marked wing face down/out, slide each end saddle on from its end, bond and cure. Paper, thread, blunt needle, cutters and adhesive are not printed parts. Use a separate backing for piercing and never drive sharp tools toward hands. Small pieces/adult craft only. No physical print, strength, binding or ergonomic test has been performed.

## Both local import workflows

Picker and single-file drag/drop work on desktop; picker works on phones. The sample buttons/downloads supply synthetic PNG, JPEG, ring SVG and ASCII/binary STL fixtures, reused from this monorepo's authored test fixtures. No private uploads are bundled.

**Images:** PNG/JPEG ≤2 MB, ≤12 megapixels, ≤6,000 px on a side; headers validated before decode. Normalize to ≤500 px, then fit/cover/crop into a **20 × 20** grid. Alpha composites against the selected light/dark background. Threshold mode maps dark samples to selected height; grayscale maps darkness linearly to height. A closed triangulated heightfield with sidewalls/backing is actually unioned into the wing; engraved mode subtracts it. Bright holes remain unraised/unengraved on continuous solid backing, not through-holes. The checkerboard shows the actual sampled foreground. This is documented **2D-to-relief conversion, not full-object 3D reconstruction or exact silhouette tracing**. SVG simple filled paths/shapes are locally rasterized, including holes; scripts, external resources, effects and unsupported elements are rejected. Text (8 chars) and six searchable bundled vector icons follow this same geometry path. Fit, crop shift ±25%, background, threshold 1–254, depth .4–3 mm (engraving .4–.6), footprint 4–7, rotation ±180°, X ±1.5/Y ±2 placement alter the real solid.

**STL:** binary and strict ASCII, ≤2 MB and ≤1,500 triangles; finite coordinates, nondegenerate triangles, paired directed welded edges, positive winding/volume, connectedness, dimensions .2–250 per axis, flat bed and convex/no-overhang suitability are checked. **Concave, hollow, open, nonmanifold, disconnected and otherwise unsupported meshes are rejected, not convex-hulled or repaired.** Select Z/Y/−Z up before attaching; changing axis requests reattachment. Source preview shows oriented dimensions, format and count. Confirm millimeter interpretation explicitly because STL carries no unit metadata. Footprint scales XY proportionally; Z independently fits .6–3 mm height, with displayed factors. Rotation/placement are applied to the original triangles, then **Boolean unioned** into the wing's protected landing. The final part must remain one closed solid, ≥.8 mm backing, and inside a 6.5 mm radius safe zone. Removing, replacing, centering transforms, resetting image settings or returning to defaults is supported.

Everything stays on the device; files are never uploaded. Portable JSON includes bounded normalized image pixels/data or original validated mesh arrays, not missing file paths. Named designs use localStorage (up to six), with undo/redo for local design changes. Invalid/missing payloads fail explicitly with reattachment guidance. Do not commit user design files into the repository.

## Responsive geometry and exports

Heavy parsing/CSG and final topology preflight run in a Web Worker with 100 ms debounce, bounded image/triangle complexity and request IDs. Late results cannot replace current state. Building/error/success statuses are real; a stale last-good preview is explicitly labeled and **all geometry exports disabled** until the exact parameter/source/transform key matches a valid worker result. Image-conversion state is included in this gate. A current-mesh signature links preview to actual downloaded bytes.

Per-part binary STL buttons and Everything ZIP (all five real STLs including card + numbered `ASSEMBLY.txt`) use the same final result. STL stores neither colors nor units. No fake 3MF, AR or cloud export.

## Verification and reproduction

`node validate.mjs`: default, three real presets, individual silhouettes, parameter extrema, raised/engraved threshold/grayscale and original ASCII/binary imported solids; each part and float32-exported card independently checked for triangle counts, byte length, finite coordinates, nonzero faces, unit normals consistent with winding, welded edge incidence (1e-5 mm), opposite edge direction, positive volume per component and millimeter dimensions. Independent kernel intersections check assembled disjointness, both saddle insertion paths, end shoulder stops, .8 mm socket rims, clear paper seats/channel, disjoint print layout, real carrier connection and all sixteen safe snip paths.

`node hole-check.mjs` probes actual Boolean solids to verify white interior holes remain unraised/unengraved. `node browser-test.cjs` and `node studio-test.cjs` use the **production bundle** at its real base prefix; real file-picker PNG/JPEG/ASCII/binary uploads, changed-pixel/threshold/depth/scale/placement download signatures, malformed/unsupported files, blocked stale/invalid export, JSON/named design recovery, real per-part STL/ZIP parsing, themes/focus/sections, worker abort/recovery, mobile 320/390 px, touch orbit/pinch and reachable exports. Scripts and JSON reports are checked in; these are computational checks, never evidence of a physical print.

Additional checked scripts: `node parameter-check.mjs` (32 independent-bound and mixed imported assembly cases), `node axis-test.cjs` (real Y-up/negative-Z picker uploads, unit confirmation, exact downloaded-geometry equivalence and assembly validation). Final combined-deployment results are summarized in [VALIDATION.md](VALIDATION.md).
