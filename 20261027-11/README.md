# Ratio Reverie

A local browser maker studio for a four-part, hardware-free **two-stage compound spur-gear fidget**. Turn a 16-tooth input into a 32-tooth wheel with a rigidly attached upper 16-tooth pinion, then into a 32-tooth output: four input turns yield one same-direction output turn. Back-driving gives the reciprocal 1:4 motion. Unlike a direct gear pair, free idler train or planetary differential, two stacked gear planes multiply two fixed reductions. No spring return, detent or motor. Not print-in-place. Hold level: moving parts are intentionally non-captive.

## Run / build

`npm install` · `npm run dev` · `npm run predeploy`.
React + Vite, Three.js + OrbitControls, Manifold WASM in a Web Worker, fflate ZIP. Fredoka/Rubik fonts are bundled locally through Fontsource (SIL OFL); Manifold Apache-2.0, Three.js MIT, fflate MIT. No CDN, server generation, APIs, account or paid service. Root monorepo deployment publishes the combined site; the required app-level gh-pages script is not used for publication.

## Studio

374 px left control panel, collapsible sections, raised tactile controls and paired slider/numeric fields. Preview-first phone layout, accessible focus, saved light/dark theme and reduced-motion support. Real model thumbnails for Soft Start, Ratio Reverie and Slow Bloom; three palm silhouettes, bounded variations, undo/redo, six named local saves and portable JSON save/open. Assembly, exploded, separated print plate and every isolated part are available. A see-through base explains the guide/pinion fits. Poses show ideal kinematics, not measured force/friction or dynamics. The labeled preview-only inspection lift is running clearance + 0.01 mm above the bearing seats; actual rotors settle onto the floor/plinth. Dense collision checks use those physically seated positions. Colours are preview-only, never encoded in STL.

## Dimensions and bounds

All geometry is in **millimeters**. Palm diameter 22–28; small gear pitch radius 12–14; face thickness 4–6; upper-plane axial gap 0.6–1.2; thumb hub radius 5–6; radial running clearance 0.3–0.5 per side; palm dimple depth 0–0.6. Teeth share module = small pitch radius / 8 and a 20° pressure angle. The input/compound and compound/output pitch center distances both equal three small pitch radii. Two 16:32 stages give a fixed 4:1 reduction. Floor 5 mm. The compound gear planes are bridged by a solid central hub. The output runs on a raised integral plinth, so every exported rotor prints directly flat without a raised support pedestal underneath it. Exported plate X/Y/Z dimensions update with the current geometry. The plate packs into rows up to 190 mm wide; check your bed size or export parts separately. Unsupported numeric combinations block export.

## Personalize with images

File picker and drag/drop accept PNG, JPEG and simple filled SVG, with synthetic fixtures bundled under `public/samples/`. Files ≤2 MB; raster headers must declare ≤12 megapixels and ≤6,000 px per side before decoding. Images normalize locally to ≤500 px. SVG accepts ≤2,000 simple elements, disallows scripts, linked resources, effects and external references, then rasterizes locally at 256 px.

The explicit conversion is **2D sampled height relief**, not reconstruction of a full 3D object from a photograph. Fit/cover and crop shift feed a 20×20 luminance grid; choose dark-threshold or grayscale relief, light/transparent-background removal or dark-background inversion. Every grid square becomes two top triangles; a closed skirt/backing forms a solid. Raised relief (0.4–3 mm) is boolean-unioned into the palm, or engraving (0.4–0.6 mm) is subtracted while keeping >3.5 mm floor. White holes stay unraised/unengraved over the backing; this is not exact vector outline tracing. The source and exact checkerboard conversion are displayed. Sampled slopes may soften tiny features. Text (up to eight characters) and six searchable original bundled SVG icons use this same geometry path.

Import footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm and Y ±2 mm. Every final vertex must remain in the protected 6.5 mm radial well; invalid rotated/offset footprints block export. Replace, remove, reset transforms and reset conversion are supported.

## Personalize with STL

Both binary and complete ASCII STL are parsed locally in the worker. Limit 1,500 triangles / 2 MB; each source axis 0.2–250 mm; finite coordinates bounded to ±10,000 mm. Strict checks require nondegenerate triangles, welded closed manifold edges, consistent winding, a single connected outward solid, positive volume and no detected surface self-intersections. Select Z-up, Y-up or inverted-Z before attaching. Source dimensions, format and triangle count are shown beside a genuine 3D source preview. Explicitly confirm millimeters: **STL has no units metadata**.

Supported input is deliberately **one convex, broad flat-bottom, support-free solid grip**. Concavities, cavities, thin branches, multiple shells, unsupported overhangs and nonmanifold geometry are rejected with guidance; no convex-hull substitution or automatic repair is performed. Bottom footprint hull is used only for validation, never as replacement geometry. Reorient or simplify your source in a mesh editor if rejected.

XY is scaled proportionally to the 4–7 mm footprint; Z fits independently to a 0.6–5 mm grip height. Rotation and placement modify the actual mesh, which is **Manifold solid-unioned** into the isolated palm with 0.15 mm overlap. No loose interpenetrating shells are exported. The safe well is over 20 mm from the supported mechanism envelope, so personalization cannot join moving bodies. Imported assets remain bounded inside portable JSON and named saves; absent image payloads explicitly request reattachment. No personal input files are bundled or uploaded. localStorage persists only designs you explicitly save; files stay on device.

## Geometry / export

Edits debounce 100 ms; worker request ids and exact state keys block stale builds. Invalid settings, pending conversion, parse failures and worker failure disable export even if the last valid preview remains visible. Every current build checks each component and its float32-translated print plate: finite triangles, nonzero area, two opposite-directed faces per welded edge (1e-5 mm tolerance) and positive volume. Manifold robust booleans form one connected solid per printable part. Browser preview and binary STL use the exact same checked mesh.

Download all four parts as a separated plate, select a part, use dedicated per-part STL buttons, or Everything ZIP (four binary STLs + assembly notes). Not 3MF; STL stores no colours. Filenames identify the generator, source and selected part. Plate exports use printable orientations, not assembled overlaps.

## Print / assembly / calibration

PLA or PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls, 25–35% infill. Print every part flat at Z=0, hubs/teeth up. No supports or purchased hardware intended. Deburr elephant foot, bores and teeth. Place the compound rotor large-gear-down on the middle post; place input at left and output on the raised right plinth. Use the neutral assembly preview to align teeth with gaps. Reverse gently, never force teeth. **Disassemble output first, then input, then compound**: the lower compound wheel cannot lift through the upper output wheel. Hold level: no retention caps are claimed. Three fixed open posts locate axes; all rotors lift off in that order. Soft Start is a full-size fit trial. Start at 0.5 mm running clearance, check bores and both gear stages, then reduce only after calibration on your printer/material. Fits are not universal. No flexures or compliant thickness claims. Small loose parts are unsuitable for children.

## Reproducible verification

- `npm test`: defaults, every preset and 64 parameter extrema; image threshold/relief/engraving and both STL fixture outputs; independent binary parsing, per-part/plate dimensions, finite faces, normalized normals, edge incidence/winding and positive volume per connected component; sampled all-pair motion collisions, exact two-stage ratios, ordered vertical release and separated print plate.
- `node dense-motion.mjs`: 198 non-aliased motion samples across presets and minimum/maximum built-in, image and STL outputs.
- `node engagement-test.mjs`: both gear pairs resist deliberate 0.065-radian off-path rotation in both directions at 12 phases across presets/extrema. Positive tooth engagement is distinguished from collision-free intended motion; this is not friction or force testing.
- Serve `node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node motion-test.cjs`, `node resilience-test.cjs`, `node stale-import-test.cjs`. Real production file-picker uploads and actual downloaded bytes are checked against the exact portable state. Pixel/threshold/depth and mesh scale/rotation/placement must alter STL; reset must reproduce the original. Tests cover malformed and unsupported inputs, 320/390px phone touch orbit/pinch, saved state, icons/text/SVG, holes, ZIP contents and worker failure.
- Gallery inline-script compilation and entry preservation, root staging byte equality and live Pages smoke tests have separate reproducible scripts. Reports/screenshots are beside the source.

These are computational geometry/browser/mechanism checks, **not physical print tests**. Print fit, friction, force, wear, durability and physical operation have not been tested. Calibration and gentle assembly remain necessary.

The existing Keycap Studio reference was inspected read-only for the concrete maker-studio visual/interaction patterns. Local earlier daily apps supplied shared import/export/studio infrastructure; this app has a newly implemented two-plane rigid compound reduction mechanism. Original synthetic sample fixtures and six simple icon shapes require no third-party artwork attribution.
