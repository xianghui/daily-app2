# Cross & Sight — crossed-slit kit-card studio

A React + Vite browser parametric generator for a **real three-part bed-flat kit card**: signature base, front vertical-aperture gate and rear horizontal-aperture gate. Twelve accessible thin runners join every part to a divided frame. After snipping and bonding four calibrated tongue/socket seats, look along the base through two spatially separated, orthogonal slits. Changing baseline moves the actual rear sockets; changing slit width/span cuts different actual apertures. This open sightline/parallax exploration kit does **not** form an image on a screen, simulate diffraction or guarantee optical precision.

## Reference-first evidence and attribution

First searched `/Volumes/ExternalHD/3d_printing_apps/` and inspected local Keycap Studio and Fabric Fidget instructions and STL candidates. The three-component switch template and 8 mm interlocking fabric link do not describe flat sheet carrier/slot construction. Read-only measurements and hashes are recorded under `localCandidates` in [reference-analysis.json](reference-analysis.json).

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. See REFERENCE-LICENSE.txt and evidence/source-readme.md. Download URL is recorded in reference-analysis.json. The binary STL was freshly downloaded, hashed and parsed; representative actual cross-sections at Z0.10,0.50,1.59 mm are in evidence/reference-sections.png. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Mesh:30,616 triangles,179.820×178.020×3.190 mm overall,27 edge-adjacent components,not watertight. STL has no units; mm is assumed and corroborated by sheet/socket scale. No raw third-party source mesh is bundled or repaired.

**Measured:** sheet planes Z0/1.60 mm; socket loops4.50×1.700012 mm; low webs0.21–0.22 mm. **Reconstruction decisions:** preserve4.50 mm socket length; slot minor width=`sheet+allowance`,tongue length=`4.50-allowance`. Allowance0.10–0.30 mm TOTAL (not per side) is a new printer/material-dependent loose adhesive fit. Increase runners to proposed0.40–0.60 mm,bed-aligned. The cat parts are not copied: entirely new base,orthogonal slit gates,card layout and assembly. Source interfaces and removable carrier construction,not its filename or screenshot,inform geometry. Do not infer tested fit from mesh inspection.

Keycap Studio `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` was inspected read-only: README,styles,App,Viewer,worker,STL,image tracing and export modules. Concrete maker patterns:374 px scrollable left rail with sticky compact brand,tactile selected buttons,paired sliders/numeric mm inputs,collapsible sections,white/lavender light desk,pink accents,saved dark theme,preview-first phone layout,checkerboard source/cutout,unit-confirmed imported-base editor and current-state worker export gating. Shared prior Daily Object Lab infrastructure was adapted; no source project histories/dependency trees copied and no reference deploy scripts run.

## Run / reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node phone-views-test.cjs
node personalization-check.mjs
```

Production tests use http://127.0.0.1:5691/daily-app2/20261102-1/. `npm run deploy` exists for per-app compatibility; combined site publication is from root predeploy/deploy. Source-reference measurement requires `uv run --with trimesh --with numpy --with matplotlib --with networkx --with scipy python reference-measure.py /path/to/reference.stl`. Download reference separately from its documented URL; the script only reads it.

## Units and supported parameters

All physical dimensions are **mm**. Card160–210×170–220,sheet1.6–2.4,gate height44–60,baseline18–30,slit width0.8–2.0,slit span18–30,part spacing3–5,runner width0.8–1.4,runner height0.4–0.6,allowance0.10–0.30. Base88×64;gates60 mm wide. Round/square/clipped silhouettes,three real mesh-thumbnail presets,bounded variations,reset. Base safe engraving radius6.5 mm centered at(0,9);all artwork leaves≥1 mm backing and cannot reach sockets. Invalid combinations block export. Actual export X/Y/Z and slot/assembled height appear below viewer. Assembly is fixed after gluing,not a fake moving mechanism. Exploded positioning illustrates insertion,not print orientation.

## Personalization / local imports

All files stay in-browser: no API,uploads,remote fonts,CDNs or user-file repository storage. Included samples are synthetic original CC0 fixtures,not private inputs. File picker works on desktop/phone,plus desktop drop. Replace/remove/reset and source/final previews are present.

**PNG/JPEG** content/header validation before decode:16 bytes–2 MB,≤12MP,≤6000 px/side;normalize to≤500 px. Simple local SVG accepts at most2000 elements,≤6000 px,filled basic vector shapes;external links,scripts,references,effects and fonts are rejected. SVG rasterizes locally to256 px;convert text to paths. The working image conversion is a bounded **20×20 sampled heightfield**,not automatic 3D reconstruction. Fit/cover crop,±25% pan,light/transparent background removal or dark inversion,threshold1–254 or grayscale relief,depth0.4–0.6 mm. Light hole pixels remain uncut backing. Checkerboard displays actual converted samples. A closed heightfield cutting volume is Boolean-subtracted from the fixed base. Features finer than grid spacing may disappear; interpolation produces slopes rather than exact traced walls. No outline-tracing claim. Text(up to8 characters) and six searchable bundled ISC Lucide-path marks use the same real engraving pipeline. Raised marks are intentionally unavailable to keep full sheet-envelope thickness.

**ASCII/binary STL:**≤2MB,≤1500 triangles,each source axis0.2–250 mm. Parse and validate finite coordinates,nondegenerate triangles,welded edge incidence/opposed winding,single connected outward closed solid,positive volume,self-intersections,convexity,broad flat base and no unsupported overhang footprint. Concave/hollow/branched,multiple-shell,open/nonmanifold meshes are explicitly rejected with recovery guidance. **No convex-hull substitution or claimed automatic repair.** The hull used in input validation tests the bottom footprint only and never replaces geometry. Reorient externally or choose Z/Y/−Z up before attaching,then explicitly confirm millimeter coordinates because STL has no units. Show source dimensions,triangles,format and scale factors. XY scales proportionally to4–7 mm footprint;Z independently scales to0.4–0.6 mm depth. Rotation±180°,X±1.5,Y±2 mm;keep-in checks enforce clearance from sockets. The exact transformed imported mesh is subtracted from the base,so its shape/scale/placement measurably change final export. Reset transforms,replace/remove and built-in defaults are available. No unchanged mesh re-export pretending integration.

## Geometry, persistence and export

Manifold WASM owns real solid union/subtraction in a bundled Web Worker;bounded detail,100 ms debounce,request IDs and current state keys prevent stale export. Every valid result receives independent final closed/winding/volume checks. Worker errors disable export;last-good geometry is labelled when invalid settings prevent a new result. Preview and binary STL export use identical current meshes and values. Parts remain one solid each;connected card is one solid. De-tabbed plate is three nonoverlapping closed components;not assembled overlap. Per-part binary STL buttons,part selector and Everything ZIP with all four STLs plus numbered instructions. STL stores geometry,not preview colors. No fake 3MF.

Undo/redo up to35 states,up to6 named local designs,portable JSON save/open include bounded image/mesh payloads. Missing image payloads explicitly request reattachment;do not pretend restoration. Named saves survive reload. Preview offers assembled,exploded,connected card,de-tabbed plate and three isolated parts,orbit/zoom/fit,touch gestures and transparent base. Bundled Fredoka/Rubik fonts (SIL OFL),React,Vite,Three.js,Manifold(Apache2),fflate and Playwright tests. No server needed after static hosting.

## Printing, assembly and limitations

Opaque PLA/PETG,0.16–0.20 mm layers,3 perimeters,100% millimeter scale. Bed-flat parts and runners,no supports intended. Snip twelve runners at marked 1.6 mm offsets,file nubs,dry-fit and bond four seats square. Calibrate with the clean base and one gate before a whole card;printer/material/elephant foot affect fit. Gates insert vertically without threading or trapped joints. Front vertical gate Y20,rear horizontal gate Y20+baseline,shoulders on base top. Compatible adhesive is required;optional black tape reduces stray light. No switches,bearings,magnets,lenses or fasteners. Adult small-part craft,not eye protection;never view sun,lasers or intense light. Exact numbered instructions are embedded in the app and ZIP.

Computational tests are not physical validation: **no physical print,assembly,strength or optical-performance test performed**. See validation reports and VALIDATION.md for the actual tests run.
