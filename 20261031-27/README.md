# Ridge & Rasp

A React + Vite browser-only **four-part ridged rubbing instrument kit-card generator**. Snip a real connected carrier, stand two socketed feet, lower the ridged deck onto their tongues, and sweep the separate scraper by hand. Ridges, their spacing, the scraper length and actual assembly interfaces are parametric. This is not another lacing frame, a captive fidget slider or a tuned instrument.

**Physical printing, sound, assembly, wear and fatigue have not been tested.** The two fixed foot seats require filament-compatible adhesive after trial fitting. Use light rubbing only. No other hardware is required. The free scraper is intentionally not mechanically retained.

## Run and verify

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node personalization-test.cjs
node background-test.cjs
node orientation-test.cjs
node stale-test.cjs
node hole-check.mjs
```

Production base `/daily-app2/20261031-27/`; `serve.mjs` serves built `dist` at localhost:5628 under that prefix. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publication uses the **parent monorepo** predeploy/deploy flow, not an individual app deploy.

## Reference-first evidence and attribution

Local candidates were inspected first, read-only: Keycap Studio README, styles, App, Viewer, worker, image conversion, STL parser/serializer and exports; Fabric Fidget Studio README and actual diamond-link mesh. Switch cavities and interlocking links are not suitable flat-sheet kit interfaces. Actual candidate hashes, dimensions and components are recorded in `reference-measurements.json`.

Chosen public reference: **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source README, license and actual binary STL were downloaded again for this run. SHA-256:

```
5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff
```

The actual mesh has 30,616 triangles, bounds approximately **179.820 × 178.020 × 3.190 mm**, and 27 edge-adjacent components. It is not watertight; no repair is claimed. Units are assumed millimeters, corroborated by source sheet dimensions; STL has no unit metadata. Sections at Z=.1,.5,1.59mm were inspected and plotted in `evidence/reference-sections.png`. Read-only parsing is reproducible with `reference-inspect.py` and trimesh/numpy/matplotlib.

**Measured, not invented:** source sheet planes 0/1.6mm, socket loops 4.5 × 1.700012mm, low runner planes near .21/.22mm. **Redesigned:** two 4.5mm-wide foot tongues; 1.6–2mm sheet; `(sheet+fit) × (4.5+fit)` deck sockets; tongue depth exactly the 2–2.6mm deck backing. Default **.15mm TOTAL** allowance (.1–.3 supported) is a proposed trial fit, not a source measurement or universal tolerance. Bond fixed seats after calibration. Accessible .4–.6mm-thick runners are intentionally thicker than source runners.

This original parametric reconstruction replaces the cat assembly with a tactile rasp, fixed feet and a free hand scraper. It adapts measured sheet/socket/tab principles, not the source artwork, arbitrary hulls or unchanged source meshes. The raw third-party STL is **not bundled**. See `reference-analysis.json` for concrete parameter mappings and `REFERENCE-LICENSE.txt`.

## Geometry, parameters and assembly

All physical dimensions are millimeters. Card width120–136, height132–148; working deck length76–84 plus14mm signature extension; deck width20–26; backing2–2.6; feet sheet1.6–2; spacing3–4; tab width.8–1.4 and thickness.4–.6. Three deck profiles: square, rounded and clipped. Three actual presets with generated model thumbnails.

Ridge pitch4–6, height.8–1.6; trapezoid footprint2.2 and crest.7mm. Thus valleys remain>=1.8mm. Scraper length48–64 (whole millimeters), width8, thickness equals backing, with clipped ends and a3mm hanging hole. Feet are24mm broad and16mm tall below shoulders. Deck sockets remain well clear of the ribs and protected signature area. Impossible packing combinations block export rather than overlap parts.

1. Print connected card **or** all four clean parts bed-flat, at100% millimeter scale. PLA/PETG, .16–.20mm layers, three walls. No supports intended. First trial-print a foot and deck to calibrate sockets.
2. Snip all16 runners at least1.6mm beyond part edges; trim nubs without clipping tongues. Adult supervision for cutting/small parts.
3. Stand feet on their broad edges and lower deck, ridges up, onto both upward tongues. The16mm shoulders support it; tongues stop flush with the backing, below rib tops. There is an unobstructed vertical insertion path. Bond both fixed seats with compatible adhesive and cure.
4. Hold scraper with its long straight edge across the ridge rows. Sweep lightly along the working length while stabilizing feet with your other hand. It is hand-guided, not captive. Not an abrasive tool; no guaranteed pitch, volume or force response. Stop if joints loosen.

The exported card is one Boolean-unioned closed solid with frame, cross rails,16 accessible runners and all four parts. Tests sever16 runner cut locations and require four released parts plus carrier. Functional tongues do not receive runner attachments. After removal, clean parts remain distinct. No glued material, hands or preview displacement is included in STL.

## Local image-to-geometry workflow

PNG/JPEG and simple SVG import through file picker or desktop drop. Limit2MB; raster images<=12MP and6000px side, checked by content headers before decoding, normalized to<=500px. SVG permits<=2000 simple filled paths/shapes; scripts, external references, unsupported effects and unflattened text reject. SVG rasterizes locally at256px. Synthetic PNG/JPEG/ring-SVG fixtures are bundled; no personal inputs are saved in this repository.

Conversion fits/crops to a **20×20 grayscale sample grid**, with +/-25% pan. Light/transparent-background or dark/invert options, threshold1–254, grayscale relief, physical footprint4–7mm and depth.4–.6mm. Source and actual checkerboard cutout previews are shown. The connected piecewise-linear sampled heightfield is Boolean-subtracted from a protected extension, not a texture. Bright holes remain unengraved within continuous backing; the grid is an approximation, not exact vector tracing. This is **2D-to-relief, not automatic full3D reconstruction from one photo**. Raised marks are intentionally not offered. Text (eight characters) and six searchable bundled icons use the same real image-to-solid pipeline.

Rotation +/-180degrees, X +/-1.5mm and Y +/-2mm affect geometry. The13mm-diameter safe-zone check blocks artwork that leaves its keepout; backing remains>=1.4mm. Remove, replace, reset transforms/image settings or reset all recover to built-ins. Empty silhouettes and invalid values disable export.

## Local STL-to-geometry workflow

Both ASCII and binary STL parse locally in a worker. Limit2MB,1500triangles,.2–250mm per axis. Validate finite coordinates, nondegenerate triangles, welded closed-manifold edges at.00001mm, opposing winding, one positive-volume component and triangle-pair self-intersections. Accepted integration is deliberately bounded to **outward convex solids with broad flat bottoms and no overhanging footprint**. Concave, hollow, open, multibody, self-intersecting, nonmanifold and unsupported input rejects with actionable guidance. A footprint hull is used only as a rejection test, never to replace the uploaded mesh. No automatic repair is claimed.

Select Z-up,Y-up or upside-down before attachment; changing axis explicitly detaches the source and requests reattachment. Source dimensions/format/triangles and source3D preview are shown; **millimeter confirmation is required** because STL has no units. XY scales proportionally to a4–7mm footprint; Z independently to.4–.6mm engraving depth. Rotation and placement are editable, scale factors shown. Exact imported triangles form a Boolean engraving cutter on the deck extension, visibly and measurably changing the exported part while leaving feet, sockets and ridges intact. Synthetic ASCII wedge and binary gem sample files demonstrate the path.

## Studio, privacy, responsiveness and export

Concrete Keycap Studio patterns:374px scrollable left control rail, sticky compact brand/theme header, tactile raised/pressed buttons, collapsible labelled sections, paired sliders/numeric inputs, checkerboard imports, large right gradient3D viewer, current-build status and exports. On phones, viewer/toolbar, dimensions, warnings and exports precede stacked controls. Touch orbit/pinch, fit/zoom, visible focus and reduced-motion CSS are provided. Locally bundled Fredoka/Rubik; saved coherent light/dark theme.

Geometry and parser run in bundled Manifold WASM worker;100ms debounce, request IDs, current-state keys and pending-conversion checks prevent stale exports. Invalid edits may retain a labelled last-good preview, but cannot export it. Preview and exports share exact current valid indexed meshes and expose a byte fingerprint. Connected card, assembled, exploded, de-tabbed layout and isolated views share these meshes. Assembled scraper is parked beside the deck, not implied to attach; exploded spacing is preview-only.

Prominent binary STL, per-part buttons and Everything ZIP. ZIP includes card, four clean parts and numbered print/assembly instructions. STL does **not** store colors/units; no fake3MF option. Local named designs (six), undo/redo (35 snapshots) and portable JSON include bounded normalized image and mesh payloads. JSON2MB; image URL<=1.8million chars; missing payload explicitly requests reattachment. No upload, backend, API key, paid service or CDN; all generation dependencies bundled.

## Validation and dependencies

See `VALIDATION.md` and reproducible reports/scripts for actual results. Independent exported-byte checks require exact size, finite coordinates, normalized normals consistent with winding, nondegenerate triangles, per-component positive volume, oppositely directed two-face welded edges and expected bounds. Kernel checks verify two-seat insertion paths, nonintersecting assembled parts, scraper clear stroke/contact confined to ridge layer, protected sockets, real runner connectivity/release, carrier bounds and bed-supported upper sections. These are **computational geometry checks**, not physical printing, acoustics, strength, adhesive performance or wear testing.

Dependencies: React,Vite,Three.js/OrbitControls,Manifold3D WASM,fflate,Fontsource Fredoka/Rubik,gh-pages; Playwright for browser checks. Third-party library/font licenses remain with their authors. Shared studio/import infrastructure is adapted from earlier Daily Object Lab studios; the rasp geometry, assembly and checks are new.
