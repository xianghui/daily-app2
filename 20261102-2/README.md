# Beat & Vernier

A parametric **four-part flat-pack kit card**: an engraved main-scale base, unequal-pitch sliding strip, and two transverse retaining bridges. Snip **16 real runners**, lay the slider down first, then lower and bond the bridges. Wide handle pads stop axial escape; bridge roofs limit lifting and sides guide lateral movement. Bridges depend on **compatible adhesive**, not guaranteed friction seats. No switches, magnets, bearings or fasteners.

This is an educational pitch-coincidence model, **not a precision measuring instrument**. Main pitch P=3.0–3.6 mm. N=8–10 moving divisions span N−1 main intervals: moving pitch P(N−1)/N, theoretical beat P/N. Each .45mm-wide, .4mm-deep tick is a real Boolean engraving, not a texture. The zero marks align in the centered assembled pose. Set the preview slider to inspect travel; exports always use the same solids in their bed-flat print orientation, never an overlapping assembled mesh.

## Reference-first evidence and attribution

Before designing the geometry, inspected the read-only local Keycap Studio README, App.tsx, styles.css, Viewer.tsx, worker, STL/export and imageTrace modules, plus local switch and fabric template meshes. Parsed local switch candidate: SHA292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9, 944 triangles, 3 components,15.20×15.20×43.10mm combined envelope. Parsed fabric diamond: SHA8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd,5940 triangles, one component,7.981×9.241×8mm. Neither is a suitable sheet-carrier reference. Their source instructions were inspected, not treated as interchangeable templates.

Downloaded and parsed **Mike Kasberg, White Cat Kit Card**, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY4.0** (fresh repository LICENSE in REFERENCE-LICENSE.txt). Source binary STL SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**,30,616 triangles,179.820×178.020×3.190mm. Assumed millimeters, corroborated by source sheet geometry; STL has no unit metadata.27 edge-adjacent components, not watertight: source defects are recorded, not silently repaired. No raw reference mesh redistributed.

Fresh mesh measurements and sections at Z.10,.50,1.59mm appear in `reference-measurements.json` and `evidence/reference-sections.png`; inspect `reference-analysis.json` for parameter mapping. Measured source sheet1.60mm and socket4.50×1.700012mm inform the four 4.50mm sockets and (4.50−allowance) tongues. Source low webs .21–.22mm inspire removable carriers but are deliberately thickened to proposed .4–.6mm runners. The source has no slider or vernier: the complete mechanism, scales, clearances, stop pads, layouts and tolerances are **original redesigns**, not source measurements or physical fit results. Parametric CSG reconstructs these solids, never a source convex hull.

The maker-studio infrastructure is adapted from a preceding Daily Object Lab app; product geometry and mechanism checks are replaced. Concrete Keycap Studio patterns:374px scrollable left rail, compact sticky brand/theme, labelled collapsible sections, paired mm inputs, raised tactile controls, checkerboard cutout, source editor, named designs, worker/current-result gating, right 3D stage and preview-first phone. No keycap/switch interfaces imposed on this unrelated assembly.

## Local operation

```
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node phone-views-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node stale-test.cjs
node personalization-check.mjs
```

React/Vite, Three.js/OrbitControls, Manifold3D WASM, fflate and bundled Fontsource Fredoka/Rubik. No APIs, keys, CDN dependencies or file uploads. Node tests use the same pure geometry builder and serializer as the Web Worker. `npm run deploy` exists for the individual app as requested; public publication uses the **root monorepo predeploy/deploy** only.

## Parameters and safeguards

All geometry lengths in **mm** (N is a division count; rotation in degrees). Card170–210×170–220; sheet1.6–2.4; bridge half-spacing22–26; bridge height9–13; slider neck78–90; neck width18; stop-pad width28. Running clearance .20–.50 **per side and above** strip. Joint allowance .10–.30 **total**, separate from running clearance. Socket length4.50 preserved, other width sheet+allowance; tongue width4.50−allowance. Symmetric stroke=neck/2−half-spacing−sheet/2. Each roof at least6.1mm thick; stop overlap≥4.5mm per side. Base128×52. Part spacing3–5; runner width.8–1.4,height.4–.6. Impossible/nonfinite inputs block exports with recoverable feedback.

Three true geometry presets with worker-generated 3D thumbnails; soft, square or clipped silhouettes; genuine unequal-pitch variation. Undo/redo, local six named designs, portable JSON save/open, saved light/dark theme. A20×20 bounded height grid caps image complexity. Heavy CSG and STL validation run off-thread,100ms debounced; generation IDs and full current-state keys prevent stale exports. Last-valid preview is explicitly labelled when inputs fail; no export until the current build is valid. Worker failures block exports and explain reload recovery.

## Image / SVG to real geometry

Picker on phone/desktop plus drop zone. PNG/JPEG headers and decoded dimensions checked **before** normalizing to≤500px;2MB,12MP,6000px side limits. Synthetic `mark.png`,`waves.jpg` and `ring.svg` included. SVG supports simple local paths/shapes only,≤2000 elements; scripts,references,external resources/effects rejected and text must be flattened. SVG rasterized locally at256px.

Fit/cover cropping, ±25% pan, light/transparent or dark background, threshold1–254 or grayscale conversion feed **20×20 sampled vertex heights**. In threshold mode darkness selects engraving depth; grayscale linearly maps inverted luminance to depth. Triangulated height field is closed against a bottom plane, transformed and Boolean-subtracted from the protected base patch. Bright/transparent holes remain **uncut solid backing**; finite sampling/interpolation means this is not exact vector contour tracing. Checkerboard shows actual sampled mask. This is **2D-to-relief**, not reconstruction of a whole3D object from a photo.

Footprint4–7mm, depth.4–.6, rotation±180°,X±1.5,Y±2mm around original base X−48,Y8. All transformed vertices must stay within6.5mm radius; floor≥1mm. Patch is separated from scales,sockets and moving interfaces. Text≤8 characters and six searchable bundled original SVG marks enter the identical real engraving workflow. Raised art is intentionally unavailable to keep the sheet bed-flat and avoid the slider. Preview colours are not STL colours.

## STL to real geometry

ASCII **and binary** parsed, exactly checked facet/byte counts;2MB,1500 triangles, each source dimension.2–250mm. Weld1e−5mm; require closed opposite-directed edges, one positive-volume outward component, nondegenerate finite triangles and no self intersections. Supported integration is explicitly **one convex broad flat-bottom solid with no projection beyond its bed footprint**. Open,nonmanifold,concave,cavity/branch/overhang and disconnected meshes are rejected with actionable errors; **no automatic repair or hull substitution**. A bottom hull is used only to validate support footprint, never as replacement geometry.

Show original oriented mesh/dimensions; choose Z,Y,−Z up **before attachment** (axis change requests reattachment). Confirm mm explicitly because STL carries none. XY scales proportionally to4–7mm footprint; Z independently scales to.4–.6mm engraving depth, with numerical factors displayed. Center/reset, rotate and nudge; **subtract the actual transformed source mesh** to make a functional base engraving. Every accepted transform affects export. Sample `wedge-ascii.stl` and `gem-binary.stl` are synthetic. Replace/remove/reset recover safely.

Bounded original normalized PNG payloads and STL triangles are included in JSON/local designs. Missing image payload requests reattachment; never pretends files survived. No personal files written to the repository; all synthetic test data only.

## Export and printing

Prominent per-part binary STL, connected-card STL, separated bed-flat plate and **Everything ZIP** with five STLs and numbered instructions. Exact current valid solids shared by preview and export; assembled/exploded and isolated views use rigid transforms of these solids. STL has no units or colours; import at100% **mm**. No fake3MF.

Print all parts flat at Z0,PLA/PETG,.16–.20 layers,3 perimeters,no supports intended. Snip accessible tabs1.6mm outside contours and file nubs. Print base,slider and bridge fit trial first; adjust both joint and sliding allowances for material/printer/elephant foot. **Slider must be placed before bridges.** Dry-fit,sweep to both stops,then bond only four bridge tongues; keep glue away from contacts and cure. See `ASSEMBLY.txt` or the in-app numbered guide. No universal fit or smoothness promise; do not force tight parts.

## Validation / limitations

`npm test`:48 default/preset/silhouette/extreme/import cases with independent **serialized float32** STL checks:nonempty exact byte count,finite nondegenerate triangles,normal/winding agreement,two opposite incidences per1e−5mm welded edge,positive enclosed volume **per component**,expected dimensions. All four clean parts checked separately; connected card one component,loose plate four. Kernel intersections check24-step full travel,axial pad stops,lateral guides,lift obstruction,bridge lowering around preinstalled slider,four socket probes,shoulder stops,and engraved-scale/backing probes.16 independent cutter snips yield carrier+4 parts without damaging interfaces. Card envelope and sampled bed-support footprints checked. Image/STL cases pass the same mesh/assembly checks. Bright-hole and engraved-ring test uses solid volume probes.

Browser reports cover actual PNG/JPEG/ASCII/binary file-picker imports, transforms,threshold/depth/crop/background,changed output signatures,malformed/empty/excessive inputs,reset/recovery,presets,text/all icons/SVG,JSON/named design reload,undo/redo,ZIP contents,worker failure/stale guards,and320/390px touch orbit/pinch plus reachable exports. Production files served under exact Pages base path; reports and screenshots are saved locally. Exact downloaded STL signature compared to UI and a Node regeneration from downloaded JSON.

These are **computational checks**, not physical printing,adhesive durability,friction,wear or measurement-accuracy tests. Physical printing and assembly have **not been tested**. Adult educational small-parts kit,not calibrated metrology or a load-bearing product.
