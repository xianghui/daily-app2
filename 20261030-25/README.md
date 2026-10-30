# Press & Pleat

A React + Vite, local-browser **four-part paper-crimp kit-card generator**. Snip sixteen runners; bond two shouldered guide blades into the lower die; flip the complementary upper die waves-down and lower over the guides. Gently hand-press a narrow soft-paper strip between the matching polygonal waves. Four corner stops establish the selected vertical gap. Upper die intentionally lifts off; no hidden retention, spring or simulated forming force.

**Physical printing, paper forming, force, friction, adhesive strength, fatigue and durability are untested.** Computational clearance is not proof that a particular paper, printer or material will work. Use scraps and gentle fingertip pressure; not metal, hard stock, food or a load-bearing press.

## Run / build / export

Node22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Production base `/daily-app2/20261030-25/`. All modeling uses client-side Manifold WASM in a Web Worker; Three.js previews the exact current valid result. Heavy STL parsing also runs in the worker. Fonts, WASM, icons, runtime and synthetic examples are locally bundled. No API, CDN, key, server generation or paid service. Browser files are never uploaded or saved into the repository.

Individual binary-STL buttons, connected-card download, or Everything ZIP containing all five STLs (connected card + four clean parts) and numbered ASSEMBLY.txt with current fits. Both dies print **waves-up**, then the upper die flips180° X for assembly. STL stores no preview colors. Root monorepo `predeploy` and `deploy` publish the combined site; per-app gh-pages/scripts are present as requested.

## Reference-first evidence and attribution

Before final geometry selection, local STL files under `/Volumes/ExternalHD/3d_printing_apps/` were located and actual candidates parsed. Keycap Studio README and its three-component switch template, and Fabric Fidget Studio README and its diamond link were inspected. Candidate hashes, dimensions, components and rejection reasons are in `reference-measurements.json`: neither has an appropriate bed-flat sheet/socket carrier. All reference trees remained read-only.

Suitable public sheet reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Source README and license retained. Attribution is not endorsement; cat/fan-art geometry is not reproduced.

Freshly downloaded binary STL: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;30,616 triangles;179.819997 ×178.019994 ×3.190000 mm;27 edge-adjacent components, not watertight. Source units assumed mm, corroborated by sheet dimensions; STL has no units. `reference-inspect.py` parses this actual mesh and local candidates; `reference-measurements.json` records results, socket loops and Z levels. Representative actual mesh cross-sections at Z=.1,.5,1.59 are in `evidence/reference-sections.png`. Source defects are disclosed, not silently repaired. **Raw third-party mesh is not redistributed.**

Measured and proposed dimensions are distinct:

- Source sheet1.6 mm → default guide sheet1.6 preserved.1.8–2 and backing2–2.8 are reinforced redesigns.
- Source socket4.5 ×1.700012 mm → guide blade4.4 plus TOTAL allowance.10 and sheet1.6 plus.10 reproduce measured sockets. Default.15 and.10–.35 fit range are proposed printer/material-dependent starts, not universal fits.
- Source low carrier levels.21/.22 mm → sixteen accessible bed-aligned.4–.6 mm breakaway runners are new, stronger reconstructed geometry. Part spacing sets actual left/bottom bay placement, not just validation. Every runner actually joins part and frame; simulated cuts release four parts + carrier.
- Complementary sinusoidal dies, oversized upper guide sockets, four hard closing stops, front signature pad and loading path are original. No source part, hull substitution, keycap or switch interface is imposed.
- Critical defaults and allowable deviations map to real controls in `reference-analysis.json`; tests reproduce the measured socket. This is an original Boolean parametric reconstruction using measured construction principles, not an unchanged STL re-export.

Primary **visual/interaction** reference is read-only `keycap_generator2`: README.md, src/styles.css, src/App.tsx, src/Viewer.tsx, src/worker.ts, src/export.ts, src/imageTrace.ts and src/geometry/stl.ts. Concrete patterns:374px scrollable left controls, compact sticky brand/theme, collapsible sections, paired mm sliders/numbers, tactile raised keys and selected pressed states, lavender desk/white panels/coral selections, checkerboard import cutout, source mesh preview, worker request-id/current-key export gating, local rounded fonts, and preview-first phone layout. Shared local studio/parser/serializer infrastructure was adapted from prior daily apps; wave geometry, assembly, packing and mechanical tests are new. No reference Git history or dependency tree was copied.

## Parameters

All distances mm; wave count dimensionless. Controls are bounded and invalid combinations block export.

| Control | Supported range |
|---|---|
| Card width / height |220–240 /210–230 |
| Die width / working body depth |64–76 /34–44 |
| Working corrugation span / depth |die width minus28 /body depth minus12 |
| Wave amplitude / full wave count |.6–1.2 /3–6 integer |
| Backing / guide sheet |2–2.8 /1.6–2 |
| Blade width / fixed socket TOTAL allowance |4.4–6 /.10–.35 |
| Upper guide allowance per side |.25–.60 |
| Vertical paper closing gap |.30–.60 |
| Part-to-bay left/bottom spacing |3.5–5 |
| Breakaway width / thickness |.8–1.4 /.4–.6 |
| Signature footprint / engraving depth |4–7 /.4–.6 |
| Signature X / Y / rotation |±1.5 /±2 /±180°; extra6.5mm radial keep-in check |

Fine Fold, Soft Pleat and Broad Wave are real presets with generated model thumbnails. Three ergonomic die outlines, bounded variations, undo/redo, six local named designs, portable JSON save/open. Assets are restored from bounded image/mesh payloads, not path strings. Missing/corrupt payloads block export and request reattachment. Saved theme and accessible focus,44px controls, reduced-motion support.

## Matched surfaces and assembly

Work span C=die width−28;24 segments per full wave. At matching sampled X, lower top=`H+.2+A*(1+cos(phase))`. Upper print top=`H+.2+A*(1−cos(phase))`; flip around X, set assembled topZ=`2H+.4+2A+gap`. Therefore actual matching surfaces have constant **vertical** gap. They are polygonal approximations, not exact analytic sine surfaces. Four corner stops reach `H+.4+2A+gap` and seat upper flat backing before waves collide. Surface-normal gap on slopes is smaller than vertical gap; do not equate the control to paper caliper.

Guide lower tongues pass through two calibrated lower sockets and shoulder on backing at H. The keys must be bonded there and cured square. Upper slots use blade/sheet dimensions plus twice radial guide allowance. Key top is12mm above closed upper top; preview lift0–10 retains at least2mm extra blade above upper top. Upper can continue vertically off guides for loading. No captive-part claim, snap or unbonded guide retention.

1. Print wave surfaces up and both guides flat; no supports intended. Inspect slicer and tab layers. PLA/PETG, .16–.20mm layers, three walls are untested FDM starting points.
2. Snip sixteen runners1.6mm away from functional edges, trim nubs, discard carrier. Keep four parts.
3. Calibrate lower tongue/slot fit in.05mm allowance increments before committing to adhesive. Do not globally rescale in slicer. Calibrate upper sliding slots separately.
4. Seat and bond both keys to lower die, shoulders on flat backing, bottom tongues reaching bed. Cure square; keep adhesive off blades and upper die.
5. Flip upper die180° X, waves down; lower onto guides. Check smooth lift-off and corner-stop contact without paper. Deburr or reprint if binding.
6. Lift off, place a narrow soft-paper strip inside the working rectangle, lower and gently press evenly to the four stops. Lift and remove. Maximum strip width=working depth; do not force a jam or pry keys. Forming behavior is unverified and depends on paper/printer.

Assembled, exploded, connected-card, de-tabbed plate and isolated views use identical part meshes. Lift is preview-only, not paper/force simulation. Individual and card exports always use proper bed-flat print orientation.

## Image and SVG import → real geometry

PNG/JPEG16bytes–2MB; content/extension, dimensions≤6000px per side and≤12MP checked before decode; normalized longest side≤500px. File picker on phones/desktops, single-file drag/drop, synthetic samples. Simple SVG≤2000 elements is safely locally rasterized at256px: scripts, external references/resources, text and unsupported effects rejected.

This is **sampled2D-to-relief/silhouette engraving**, not a precise outline trace or full3D reconstruction from a photo. Fit/contain or fill/crop, crop offsets±25%, light/transparent background removal or dark inversion, threshold1–254 or grayscale height relief. A20×20 luminance grid becomes a closed triangulated height-field Boolean cutter. Scale/rotate/place/engraving depth alter the real exported lower-die pad geometry. Holes remain unengraved inside continuous backing, confirmed with actual-solid probes. Checkerboard shows actual sampled cutout alongside source image. Text≤8 characters and six searchable bundled marks use this same real pathway. Raised art is intentionally unsupported to keep backing and bed-flat support guarantees. Blank imports are errors; no default mesh substitution.

## STL import → real integration

ASCII and binary STL16bytes–2MB,≤1500 triangles,.2–250mm per oriented axis. Show actual source dimensions, format, triangles and source3D preview. Explicitly confirm mm because STL has no unit metadata. Choose Z/Y/negative-Z up before attaching; axis change clears mesh with reattachment guidance. XY proportionally fits selected4–7mm footprint; Z independently fits.4–.6 engraving depth. Scale factors, rotation, XY placement, reset, replace/remove are working controls.

Parser validates complete bytes/facets, finite coordinates, nondegenerate triangles, single outward positive-volume closed component, opposite two-face welded incidence, triangle self-intersections, convexity and broad flat bed contact. Concave, hollow, overhung, branched, disconnected, open/nonmanifold meshes are explicitly **unsupported** with actionable errors; no claimed repair. Convexity checks may compute a footprint hull only as a validation predicate; the exact accepted vertices/faces, never a replacement hull, form the Manifold Boolean cutter. Source is actually subtracted into lower-die backing. Safe radial pad zone and≤.6 depth leave≥1.4mm backing and cannot affect guides, closing stops or corrugation. All processing local.

## Responsiveness and export safety

100ms debouncing, bounded wave/image resolution, worker CSG and STL parsing, monotonically increasing request IDs and exact current-state keys. Real building/success/error messages. Preview/export share the same generated solids. Any invalid/pending/import-failed state disables all exports, even if last-good geometry remains visible. Worker failure asks reload and disables export. No stale last-good download without consent. Preview selection colors do not imply STL colors.

## Reproducible validation

- `npm test`:38 built-in configurations (all presets, three silhouettes, simultaneous and individual bounds),8 image/STL variants. Independent binary-STL byte count, finite coordinates, normal/winding, nondegenerate faces,1e-5mm welded opposite two-face edge incidence, per-component positive volume, bed alignment and measured bounds on card and each separate part.
- `node import-extremes.mjs`:105 further image/STL preset/extreme cases with all the same mesh and assembly checks; exact4.5×1.7 measured socket reproduction.
- Assembly checks: all6 part pairs at21 lifts0–10; actual-mesh vertical rays at291 work-surface samples per case; constant selected gap; four real stop seats and overclosure collision; two guide/socket gauges and shoulder stops;21-step upper removal and guide insertion paths; packed parts disjoint;16 accessible nondamaging cuts yield four parts + carrier;40 print-column sections lie over bed footprint. Assumes correctly cured guide joints, not adhesive strength.
- `node browser-test.cjs`:production-base-path real PNG/JPEG/ASCII/binary file-picker uploads; downloaded actual binary STLs parsed and compared to no-import state; changed pixels/threshold/depth/crop/scale/rotation/place change signatures. Download signature matches UI and Node regeneration from saved JSON; all parts validated. Invalid/truncated/open/nonmanifold/concave/excessive inputs, empty images, bad dimensions/transforms block export recoverably.320/390px phone no overflow, reachable exports, actual touch orbit and pinch, phone import/download.
- `node studio-test.cjs`:real presets, silhouettes, text/icons/SVG, image/mesh JSON round trips, named saved designs/reload, missing-payload blocking, undo/redo, parsed ZIP contents, all views, saved dark theme, keyboard focus, collapsed sections, reduced motion,374px left panel, phone preview-first, worker-abort/reload.
- `node sensitivity-check.mjs`:all15 geometry controls change actual exported card geometry, including actual part-to-bay spacing.
- `node axis-test.cjs`, `node stale-test.cjs`, `node hole-check.mjs`:orientation transforms, stale-result export gating, rapid edits, mixed-extreme loading path, actual solid probes for preserved image holes.

Reports/screenshots are stored beside the app. Browser tests use production `dist/` under its real base prefix (`node serve.cjs` local port5530), not only Vite development mode. Gallery inline scripts compile via `new Function`; existing entries are compared and retained before authorized root deployment. No physical tests performed.

Dependencies: React/ReactDOM, Vite/plugin-react, Three.js, Manifold3D Apache2.0, fflate, Fontsource Fredoka/Rubik SIL OFL, gh-pages, Playwright. Source reference CC BY4.0 credited above. Bundled sample PNG/JPEG/SVG/STLs are synthetic local studio fixtures, not personal uploads.
