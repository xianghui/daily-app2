# Pleat Pause

A local, parametric STL maker for a **six-panel radial accordion fidget**. Hold the isolated palm and gently guide the free fan edge toward the fixed edge, alternating mountain/valley folds, then unfold. Five thin, broad living hinges connect six thicker annular facets. The open semicircular inner relief avoids a shared crease vertex. This is a manually guided folding ritual, not a claimed snap-through mechanism or simulated spring.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base is `/daily-app2/20261025-10/`. The root monorepo deployment publishes this app; the required per-app gh-pages scripts are also present.

React/Vite, locally bundled Three.js OrbitControls, Manifold WASM Boolean solids in a worker, fflate ZIP, Fontsource Fredoka and Rubik (SIL OFL). No CDN, API, account or remote generation service.

## Maker studio

Lavender-grey light studio, white 374 px left control panel, coral tactile buttons and large right viewer; saved dark theme. Phone preview and export come before stacked controls. Paired range/number controls, collapsible sections, three actual model-preview presets, bounded random variations, palm shape choices, text and searchable bundled symbol marks, undo/redo, six named browser-local saves and portable JSON save/open are implemented. Reduced-motion and visible keyboard focus are supported. Dimensions are explicitly millimeters.

The Keycap Studio reference was inspected read-only: concrete patterns adopted include its sticky compact brand/theme header, soft selection states, short key shadows, grouped control sections, source/cutout previews, explicit STL units, worker-owned modeling, truthful view labels, print notes and export gating. No switch sockets apply to this mechanism. Reusable import/editor infrastructure was adapted from earlier daily-app2 studios; the radial accordion geometry and its independent checks are new.

## Parameters and bounds

| Control | Range (mm) | Purpose |
|---|---:|---|
| Palm diameter | 22–28 | Round, hexagonal or oval fixed grip |
| Fan outer radius | 26–32 | Reach and fold lever length |
| Crease lane width | 2–3 | Distributed hinge bending length |
| Inner relief radius | 8–12 | Open access and minimum facet-root width |
| Living hinge thickness | 0.6–1.0 | Actual thin folding sheet |
| Palm dimple depth | 0–0.6 | Tactile palm grip |
| Facet thickness | 2–3 | Thicker pleat panels |

The hinge sheet is continuous. Five full-depth cuts remove only the raised facet layer, leaving six panels on five compliant crease lanes. A Boolean-unioned neck connects the first panel to the palm. The imported mark remains inside radius 6.5 mm in the rigid palm well, separated from the fan and its hinges. Every edit independently validates current solids and mechanism bounds. No moving rigid bodies or assembly joints exist: assembled/exploded views would be misleading. The two useful views are the exact undeformed solid and bed-flat print plate, with optional see-through rendering. No deformed simulation is claimed.

## Image workflow: actual printable height geometry

Choose/replace PNG, JPEG or a simple local SVG, use bundled sample buttons, or drag one file into Import. Raster sources are content-checked before decode: 2 MB maximum, 12 megapixels, 6,000 pixels per side. Normalize to at most 500 px, then sample a bounded **20 × 20 grayscale grid**. SVG supports a restricted set of simple self-contained filled paths/shapes, rejects script/references/effects and rasterizes locally at 256 px; 2,000 elements maximum.

Fit/contain or cover/crop, ±25% crop shift, light-background removal or dark-background inversion, threshold 1–254, and grayscale relief control the actual sampled heights. Threshold mode makes a sampled silhouette **relief**, not an outline-only extrusion. A triangulated height field with closed sides and bottom becomes a Manifold solid, then raised/engraved Boolean geometry in the palm well. Bright interior holes remain unraised/unengraved on a continuous backing; no convex hull or hole-filling outline trace is used. Checkerboard cutout shows the exact samples. This is **2D-to-relief, not reconstruction of a full 3D object from one photo**.

Import footprint 4–7 mm; raised depth 0.4–3 mm, engraving depth 0.4–0.6 mm; Z rotation ±180°, X ±1.5 mm, Y ±2 mm. Off-well combinations are rejected. Empty artwork disables export. Text (up to eight characters) and six searchable marks use this same real geometry route.

## STL workflow and supported geometry

Both complete ASCII and binary STL are parsed locally in the worker. Confirm source coordinates as **millimeters** because STL has no unit metadata. The oriented source preview shows its actual dimensions, format and triangle count. Choose Z-up, Y-up or upside-down before attaching; changing axis clears the mesh and asks for reattachment. Preserve XY proportions while setting footprint 4–7 mm, set height 0.6–5 mm, rotate and place in the protected well, then solid-union the original verified mesh into the palm. No unchanged-mesh passthrough, silent replacement or convex-hull substitution.

Limits: 2 MB, 1,500 triangles, each dimension 0.2–250 mm. Require a single connected outward-facing closed **convex**, broad flat-bottom, support-free solid whose XY projection stays inside its bottom footprint. A minimum 1.2 mm scaled XY dimension protects thin grips. Finite coordinates, nondegenerate triangles, welded edge incidence and winding, positive volume, connectivity, triangle intersections, convexity and bed contact are checked. **Concave meshes, cavities, hollow/open/nonmanifold models, multiple components, overhangs and tiny features are explicitly unsupported.** Reorient, simplify or remodel them externally; no repair is claimed. Invalid files block export until replaced or removed.

Source and final previews, replacement, removal, center/reset transforms and defaults are provided for both paths. JSON embeds bounded normalized images or verified triangle payloads, not missing filesystem paths. Invalid/missing payloads request file reattachment instead of pretending restoration.

## Export and privacy

Download the exact current checked model as binary STL, the single part separately, or an Everything-style **STL + notes ZIP**. The output is already bed-flat at Z=0. Preview uses these same vertices/indices; current state signatures and stale-worker IDs block stale exports. Invalid edits may show the last valid preview with a clear warning but cannot export it. Worker load failures also block export. STL contains no preview colours; ZIP is not mislabeled as 3MF.

Files are decoded and processed entirely on-device. Personal uploads are not sent to any service or committed. Sample PNG/JPEG/SVG and ASCII/binary STL fixtures are synthetic local examples. Browser-local storage is user-controlled; JSON is portable and bounded to 2 MB.

## Printing and calibration

Print in flexible TPU 95A as a **starting point**, flat as exported, no supports or hardware. PLA/PETG are unsuitable for repeated hinge folding. Start with 0.4 mm nozzle and 0.2 mm layers; fill hinge regions with continuous lines and inspect layer adhesion. Pocket Fan is a full-size material/fold calibration coupon. Begin below 10° per hinge; increase only gently if it recovers without whitening/permanent set. Do not force a fully stacked fold. There is no mechanical stop or universal strain limit. Trim brims without nicking edges; keep fingers clear of closing folds. No assembly or print-in-place release required.

## Verification, not physical testing

`npm test` checks 132 default/preset/extreme parameter cases and 35 imported-image/STL cases. Export parsing independently checks finite nondegenerate triangles, normalized normals, consistent neighbor winding, welded closed edges, positive volume per component, expected genus, bed-flat orientation and independent millimeter bounds. Actual Boolean intersection probes verify five continuous thin hinges, five relieved crease lanes, six full-thickness facets and open inner relief. Import differences are confined to the rigid palm. These are geometry/design checks, **not a material simulation, fatigue test or physical print**.

`node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs` exercise real browser uploads/downloads, PNG/JPEG content and threshold changes, ASCII/binary STL integration and transforms, malformed/unsupported input recovery, source replace/remove/reset, presets/variations, text/icons/SVG holes, JSON asset round trips, local saved designs, undo/redo, worker error/latest-result gating, ZIP and per-part STL, themes/focus, desktop layout and 320/390 px mobile orbit/pinch/export. See generated validation JSON files and screenshots. Production and gallery checks are separate.

**No physical print testing performed.** Usable elastic travel, fold force, self-return and fatigue life depend on filament, printing and calibration and are not guaranteed.
