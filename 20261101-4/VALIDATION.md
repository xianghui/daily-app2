# Release validation — 2026-11-01

## Reference evidence

Fresh1,530,884-byte binary STL downloaded, SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`,30616 triangles. Actual source/local candidates parsed by reference-inspect.py; source and candidate hashes,dimensions,components,source defects and slot measurements in reference-measurements.json. Source cross-section image inspected. Current CC BY4.0 licence retrieved. New4.5mm tongue/socket interfaces map to measured source dimensions; proposed fit/runners documented separately. Raw source not bundled; read-only reference trees unchanged.

## Computational geometry

- `npm test`:46 valid mesh/assembly cases;46 invalid/out-of-range cases rejected.
- `node extra-check.mjs`:4 additional min/max image/STL-derived cases; sampled image-ring hole/material probes; spacing changes actual binary geometry;fractional eye count rejected;unladen assembly center-of-mass XY lies inside base footprint (not a loaded stability test).
- Every card and all four clean parts independently parsed from binary float32 STL:exact byte length,finite coordinates,nondegenerate triangles,unit normals/winding,1e-5mm welded two-opposite-face edges,positive volume per connected component,Euler,expected mm bounds and Z=0.
- Each valid case:zero unintended assembly/print-layout intersections,13 riser/shelf insertion positions,all four actual socket/tongue volumes,1mm cord paths,wall/shoulder checks,one connected card,16 cuts release four parts plus carrier,upper sections contained in bed footprint. Browser snapshot models also get25-position insertion tests.

`node axis-test.mjs`: two additional Y-up/inverted-Z synthetic STL cases restore the exact original printable signature and pass all mesh/assembly checks. Total computational cases:52.

## Real production browser tests

`node serve.mjs` serves built dist at actual `/daily-app2/20261101-4/` prefix,not Vite dev server.

- browser-test.cjs:PNG,JPEG,ASCII STL,binary STL file-picker imports and real downloaded bytes. Image pixels,threshold,depth,crop/mode/size and STL size/rotation/placement/depth change geometry versus built-in. Remove/transform reset/full reset reproduce original signatures. All downloaded current-result hashes match stage and Node regeneration of saved JSON;every clean part validated. No external requests or page errors.
- Rejected invalid SVG,truncated/open/nonmanifold/concave STL,excessive file/pixels/triangles/dimensions,fake PNG,empty silhouettes,invalid/out-of-zone transforms. Export disabled,replace/reset recovery passed.
- studio-test.cjs:all presets/profiles,text,searchable icon,SVG;portable image+mesh JSON,named saves/reload,missing payload reattachment error,undo/redo,all views,per-part and actual ZIP contents,numbered guide;desktop374px left rail,saved dark theme,focus,collapsible sections,reduced-motion,worker abort+reload recovery.
- Touch-enabled390px phone:real PNG/STL imports and downloads,CDP touch orbit and pinch change canvas.320px/390px:no overflow,preview-first and reachable export.
- rapid-test.cjs:real spacing changes,fast edits followed by invalid state cannot export a late worker result,reset exact signature,fractional station count blocked,background polarity changes geometry.
- Screenshots inspected:desktop-validation.png,mobile-validation.png,evidence/studio-light.png,evidence/studio-dark.png. Source/reference sections and gallery screenshot saved.

## Build and gallery

Individual `npm run predeploy` passes. Gallery inline script compiled with Node new Function;new entry exactly once,area stl,correct folder and first category. Browser gallery renders335 entries,all334 earlier entries hash-identical;search and new link correct. Root predeploy:335 built,zero failed/skipped;all335 app index files present.43 new-app files hash-identical between dist and combined deploy. Entire browser import/download suite also passed against the combined deploy folder on port5643. Root publication outcomes in release-validation.json.

## Not performed

**No physical print,assembly,adhesive strength,knot retention,loading/tip stability,filament fatigue,waterproofing or drying-performance test.** This is a light miniature-brush craft rack,not load-rated. Four adhesive joints and external soft loops/mat/square required. Geometric clearance and watertightness do not establish printer fits,forces or actual drying behavior.

## Published verification

Root `npm run deploy` returned Published. Main commit `bbd00ef` pushed. GitHub Pages action41233065571 succeeded;live app HTTP200,worker/current-solid ready,actual live STL download matches validated default bytes,closed-manifold reparse passes;live gallery335entries with new app first,zero page errors. See live-validation.json and reproducible live-test.cjs.
