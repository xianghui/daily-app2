# Ink & Wick

A **three-part paper-chromatography rack kit-card generator**. Print a real connected carrier, snip twelve runners, stand the notched rack in two calibrated feet and bond both joints. Fold three filter-paper strips over the rail above a separate shallow water dish; observe water-soluble ink separation. This is an original rack assembly, not a reskinned soap-film cage or static STL re-export.

## Run and publish

Node22.12+; React + Vite. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public publication uses the ROOT monorepo deploy flow. Base `/daily-app2/20261031-4/`.

Dependencies installed independently: React, Three.js/OrbitControls, Manifold3D WASM(Apache2), fflate(MIT), Fredoka/Rubik local fonts(OFL), Vite, gh-pages; Playwright for tests. No remote API/CDN or paid service. Modern WebGL, Worker, WASM and File APIs required. The local studio/import infrastructure is reused from earlier lab work; rack/feet/notches, arrangement, assembly and tests are newly implemented. No reference dependencies/history copied wholesale.

## Reference-first evidence

Inspected Keycap Studio README, styles, App, Viewer, worker, imageTrace, STL and export modules read-only. Applied its concrete374px left rail, sticky header, collapsible labelled sections, mm slider/numeric pairs, tactile buttons, lavender-grey desk(#e7e9f1), white panels, dark ink(#1f2233), coral(#e2557a), current-result gating and local theme storage. Phone is preview/dimensions/export first, controls below. Local rounded fonts, generous touch targets, focus styles and reduced motion.

Parsed local candidates first: Keycap Studio clicker template944 triangles,3 components,15.2×15.2×43.1 mm; Weave diamond-link5940 triangles,1 component,7.981×9.241×8 mm. Read their project instructions. Neither is an appropriate sheet-joint/carrier reference. No local reference modified or deployed.

Selected **White Cat Kit Card**, Mike Kasberg, [source/README](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Downloaded actual binary STL and verified public LICENSE; license text included. Independent parametric reconstruction uses measured sheet/socket and carrier structure, not source appearance. Raw third-party STL is NOT redistributed.

SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;30,616 triangles;179.820×178.020×3.190 mm;27 edge-adjacent components including24 two-triangle fragments; original source NOT watertight. It is measurement evidence, not a repaired production template. STL has no units; mm assumed and corroborated by documented sheet size. `reference-inspect.py`, `reference-measurements.json`, `reference-analysis.json`, actual mesh sections `evidence/reference-sections.png` record source/components/decisions. Re-run with `/tmp/kit-analysis-venv/bin/python reference-inspect.py` after downloading documented URL to `/tmp/ink-wick-reference.stl`; trimesh/numpy/matplotlib for evidence only.

Measured sheet planes0/1.6 mm and socket loops4.5×1.700012 mm: tongue4.4×sheet1.6 with .10 TOTAL allowance reconstructs that section. .15 default and .10–.35 allowance range are NEW FDM proposals, not measured universal tolerances. Source low connector planes .21/.22 mm; new .4–.6 mm runners deliberately strengthen bed-level attachment.

## Parameters, fit and assembly

Every physical dimension is **mm**. Card200–230×200–230; rack post span44–62; hanging height38–54; stance/foot depth32–42; feet2.4–3.2 thick; rack sheet1.6–2; tongues4.4–5.2; total socket allowance.10–.35; spacing3.5–4; runner width.8–1.4 and height.4–.6. Three genuine presets and square/rounded/chamfered feet change solids while retaining joint geometry. Invalid values and insufficient envelope disable exports.

Two bottom rack tongues insert vertically into separate foot slots. Broad rack face alongX/Z, sheet alongY. Shoulders rest on foot tops; tongue ends stop .05 mm above bed. Shoulder overlap≥1.225 mm. Bond BOTH seats with water-resistant filament-compatible adhesive after calibration; no positive snap retention. Feet extend equally front/back. Three open rail notches10 wide×2 deep atX=−span/4,0,+span/4 (pitch11–15.5) register6–8 mm paper. Header backing6 mm, side webs8 mm. An external shallow dish fits below the open window; no printed reservoir/seal.

Print card once, snip12 accessible bed-level runners1.6 mm outside parts, trim nubs, discard carrier. Functional tongues/sockets avoid cuts. Card is ONE Boolean-connected closed solid, not loose parts beside a rectangle. Clean-part STLs are separate closed solids, all Z0 bed-flat. Assembled/exploded/isolated/de-tabbed views use same meshes with rigid transforms; exploded is explanatory, not a print pose. No fake water, paper or ink simulation. Calibration guidance: print rack + one foot first; deburr elephant foot, adjust total gap, never force.

## Local image and STL imports

Desktop/phone file picker plus single-file drag/drop. Synthetic CC0 fixtures in `public/samples`: PNG mark, JPEG waves, SVG ring, ASCII wedge and binary gem. No private source asset/input is committed, uploaded or sent to services.

PNG/JPEG: verify file headers before decoding; ≤2MB,12MP,6000px/side. Normalize≤500px longest side for portable saves. Fit/cover crop,±25% pan, light background removal/dark inversion. Resample20×20 grayscale. Threshold1–254 or grayscale relief, continuous triangular height-field cutter Boolean-subtracts an engraving on outboard signature foot. .4–.6 mm depth with≥1.8 backing; size4–7 mm and radial keep-out6.5 mm. Bright holes remain unengraved. Checkerboard displays actual sampled cutout. This is **2D-to-relief**, not full3D reconstruction or exact outline tracing. SVG is bounded simple paths/shapes≤2000 elements, locally rasterized256px then same method; external resources/scripts/effects/text rejected. Text up to8 chars and six searchable icons use same real geometry conversion; raised art unsupported to keep parts flat.

STL: binary AND complete ASCII; ≤2MB/1500 triangles; each axis.2–250 mm. Weld at1e-5mm; require finite nondegenerate faces, single component, closed opposite edge incidence, consistent outward winding, positive volume and no detected triangle self-intersection. Deliberately restricted to **one convex broad-flat-bottom solid**: bottom footprint≥25% XY box, no overhang outside bottom footprint. Concavity, hollow shell, multiple parts, open/nonmanifold/unsupported meshes are rejected with guidance; no repair or silent convex hull. Bottom convex polygon only checks contact, never replaces source triangles.

Confirm **millimeter units** explicitly (STL carries none). Select Z/Y/−Z up before attach; changing up-axis clears mesh and requests reattachment. Source dimensions/preview shown. Uniform proportionalXY footprint4–7, independentZ depth.4–.6, rotation±180°, offsetsX±1.5/Y±2, reset/center/remove/replace. Actual source triangles become a Boolean cutter in foot grip, measurably changing exported STL; no unchanged re-export. RejectXY detail<1.2 mm or unsafe transforms. No moving joint is fused or obstructed.

## State, responsiveness and export

Worker runs bounded Manifold WASM CSG and independent final-mesh validation. Debounce and request sequence prevent stale results. Current-state key gates export: pending conversion/import, invalid dimensions, worker failure, invalid source or mismatched last-good state disables ALL mesh exports. No silent last-good export. Preview and binary download share identical mesh/fingerprint. Source and final previews separate.

Undo/redo, local named saves(up to6) and versioned JSON carry bounded image/mesh payloads. Missing payload errors explicitly request reattachment; no fake restored file paths. Saved mesh revalidated. Themes saved locally. Three presets have actual generated model thumbnails and bounded variation. Orbit/zoom/fit includes touch.

Prominent connected-card and per-part binary STLs; Everything ZIP contains all4 STLs plus numbered ASSEMBLY.txt and current fits. Export always real Z0 print geometry regardless of preview pose. STL has no color/unit metadata. No mislabeled3MF. `PRINTING.txt` repeats instructions.

## Validation and printing

`npm test` checks32 built-in cases (3 presets,3 profiles, individual extrema, combined min/max),8 import cases. Independent serializer checks byte length, finite coordinates, nondegenerate triangles, unit outward normals, welded1e-5mm edge incidence/opposite winding, positive volume per component, millimeter bounds. Every part separately and full carrier. Independent CSG tests all3 assembled pairs, sampled vertical insertion,2 open sockets, seated shoulders,3 actual notch voids/header backing, disjoint print parts,12 safe snips→4 components and bed-supported section columns. `hole-check.mjs` probes bright holes/dark recess/backing; `import-extremes.mjs` repeats checks at combined extrema. Browser scripts exercise production worker/WASM, real imports/downloads, geometry comparisons, invalid-input recovery, portable JSON, ZIP, UI state and mobile. Results in generated JSON and VALIDATION.md distinguish performed checks from promises.

Print flat100%, PLA/PETG,.16–.20 layers,3 perimeters; no supports intended. Water-resistant adhesive at both fixed joints. Fold filter-paper dry ends over top rail at notches; optional clips. Use washable water-soluble ink and WATER only. Pencil baseline, dot ink above water, wet only lower paper edge; separation depends on paper/ink and may not occur. External dish, paper, ink, water and adhesive required. No solvents/flame/food contact; keep small parts away from children. **No physical printing, assembly, strength, stability, adhesive durability, wetting or chromatography test has been performed.** Computational fit does not prove real-world behavior.
