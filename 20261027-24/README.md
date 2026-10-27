# Lattice & Label

A locally generated **six-divider, nine-joint open-bottom organizer kit card**. Three up-slot lower dividers receive three perpendicular down-slot upper dividers. Set the lattice on a desk or inside a tray: it is not a sealed cup or load-bearing box. The connected carrier has **24 real breakaway tabs**, not loose objects laid near a rectangle. Every printable part is an original parametric solid.

## Run and build

```
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node studio-layout-test.cjs
```

React + Vite base `/daily-app2/20261027-24/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined-site publication uses the ROOT monorepo predeploy/deploy, not the per-app deploy. Three.js/OrbitControls, Manifold3D WASM, fflate and Fontsource Fredoka/Rubik are installed and bundled locally. No CDN, server, API keys, paid services or uploads are used for generation.

## Reference-first evidence and attribution

Searched existing STL files under `/Volumes/ExternalHD/3d_printing_apps/` first. Its switch/socket, telescoping and articulated-link meshes are not appropriate planar kit-card construction references. Read local Kit Card Studio instructions; the local kit-card trees contain no STL reference. Downloaded **Mike Kasberg (mkasberg), White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), under **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**, verified in repository LICENSE. Read README, kit_frame.scad and white-cat-kit-card.scad. The source is reference-only and not bundled.

Independently parsed actual binary STL: **30,616 triangles**, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, bounds **179.819997 × 178.019994 × 3.190000 mm**, two edge-adjacent components at 1e-5 mm welding. STL lacks units; millimeters corroborated by source sheet settings. Source has nonmanifold/coplanar artifacts, disclosed rather than silently repaired or re-exported. `reference-analysis.py` reproduces hash, component, vertex histogram, rail measurement and actual mesh cross-sections in `reference-sections.svg`; pass the downloaded reference path as argument. `reference-analysis.json` records source URL, license, dimensions and parameter mapping.

**Measured:** source sheet and perimeter rail 1.6 mm; bridge Z planes .21/.22 mm; representative mesh sections at Z .1/.5/1.59 and rail Y100. **Adapted:** default 1.6 mm panel, planar carrier and sacrificial bridges. **Redesigned/proposed, not measured source fits:** six original dividers, nine perpendicular half-laps; 2.4 mm reinforced perimeter/spine/crossbars, 24 wider 0.4–0.6 mm high tabs. No raw source triangles, switching sockets or source artwork are reused. Source joint performance is not claimed preserved.

Read-only visual/interaction reference: keycap_generator2 README, styles, App, Viewer, worker, STL parser, image conversion and exports. Concrete patterns: 374 px scrollable left rail; sticky compact header, collapsible groups, paired slider/mm inputs, selected tactile key controls; white/lavender/pink light studio and persisted dark theme; large right gradient preview; source/final previews and explicit transforms. Phone places preview/export before stacked controls. Working local import/persistence helpers are adapted from prior Daily Object studios, but the actual six-panel lattice, carrier and assembly tests are new, not a reskinned rotor/keycap.

## Dimensions and supported ranges

All physical lengths are **millimeters**; rotations are degrees, insertion preview is a 0–1 fraction. Card width190–230, height180–230; divider height24–32; cell pitch14–18; end margin16–18; panel thickness1.6–2.4; total slot allowance0.15–0.45; runner offset8–12; tab width0.8–1.4, height0.4–0.6; dimple depth0–0.4. Divider length = 2×pitch + 2×margin. Three joint centers are −pitch,0,+pitch. Slot width = thickness + allowance; opposing slot depths = height/2 + allowance/2. Clear cell width = pitch−thickness. Soft corners/chamfered/wide rounds change the actual silhouettes; three real presets show generated-model thumbnails. Bounded variation changes supported dimensions; impossible inputs disable export with errors.

Label well is on just one lower panel, at X=−pitch−margin/2, Y=0, radius6.5, depth0.2. It lies beyond every joint, preserving the half-lap clearances. Relief may increase the card's Z beyond sheet thickness; UI reports exact export X/Y/Z. No movement or simulated spring controls are invented for this static kit.

## Images, text and icons → actual solid relief

PNG/JPEG file picker (desktop/phone), drag/drop, and synthetic sample files; simple SVG support too. Local content signatures and dimensions validated before decode: ≤2 MB, ≤12 MP, ≤6000px side; portable normalized PNG≤500px, conversion20×20. Fit/cover, ±25% crop shifts, light/dark background, threshold1–254 or grayscale mode, scale4–7 mm, rotation±180°, offsets X±1.5/Y±2. Raised depth0.4–3; engraving0.4–0.6 preserves the floor. Sampled cutout on a checkerboard shows what is actually converted.

Method: composite alpha on selected background, resample luminance, invert for dark-background mode, threshold or map grayscale to heights. Triangulate a piecewise-linear height grid with closed side walls/bottom; boolean-union raised geometry into the isolated label well, or subtract engraving. Bright internal holes remain unraised/unengraved on the solid panel; ring-hole probes test this. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photo**, nor an exact vector outline trace. Text≤8 characters and six searchable bundled original SVG marks use the same geometry path. SVG simple filled paths/shapes are locally rasterized; external references/scripts/effects/text are rejected; even-odd holes survive sampling.

## STL → integrated source geometry

ASCII/binary parser validates ≤2 MB, ≤1500 triangles, dimensions0.2–250 mm on each axis, finite coordinates, nondegenerate triangles, positive volume, one outward closed manifold and convexity/broad flat bed contact. **This editor explicitly supports closed convex broad-flat-bottom solids without overhangs only.** Concavity, cavities, branches, disconnected/open/nonmanifold inputs are rejected with actionable guidance; no convex-hull substitution or unverified repair. Source dimensions, triangle count, format and original source preview are shown. Explicit confirmation that coordinates are mm is required: STL has no unit metadata.

Choose Z/Y/−Z up before attachment; changing axis requests reattachment. XY scales proportionally to footprint4–7 mm; Z independently scales to height0.6–3 mm (explicit nonuniform transformation). Scale/rotation/placement alter the original source triangles, which become a real Manifold solid fused into the lower divider's label well. Safe-zone and minimum1.2 mm section checks guard imports; source files are not unchanged re-exports or interpenetrating-shell unions. Remove, replace, reset transforms and return to built-in controls are available. Synthetic CC0 fixture README documents included samples.

## Current meshes, persistence and export

Debounced Web Worker owns WASM/CSG and heavy STL checks. Bounded grid/triangle resolution, request IDs and current-state signatures prevent stale-result exports. Invalid/in-flight/unconfirmed edits disable all downloads even when a last-valid preview remains visible. Worker failure is explicit and requires reload. Preview and binary STL use identical final meshes. Connected card, de-tabbed print plate, assembled/exploded and each isolated divider view share the same solids; assembly is an explanatory pose, not a strength simulation. Exports always stay bed-flat, irrespective of preview pose.

Undo/redo, six local named designs and JSON save/open embed bounded original normalized image and indexed mesh data, not filesystem paths. Restored meshes are revalidated. Missing image data requests reattachment; invalid payloads are rejected. Personal uploads remain in browser memory/local storage or user-downloaded JSON, never in the repository or external services. Everything ZIP contains connected-card STL, six part STLs and numbered ASSEMBLY.txt. Per-part buttons export each actual solid. STL stores no colour, units, assembly constraints or material assignments; preview swatches change only appearance.

## Print and assemble

1. Print the connected card OR six individual dividers at100% mm, face up with their planar backs on Z=0. PLA/PETG, .4 nozzle, .2 layers, three walls; no supports intended. Inspect sliced thin tabs.
2. Snip24 side tabs about2mm away from panel ends, trim nubs and discard carrier; functional slots are remote from cuts. Use cutters safely.
3. Stand three lower dividers parallel with slots UP; space them at cell pitch using an upper divider as gauge.
4. Lower three perpendicular upper dividers slots DOWN, one at a time, over all three lowers. Nine mid-height half-laps meet, all bottom edges rest on the desk. Relief sits outside the grid.
5. This is open-bottom and non-captive; lift uppers to disassemble. Do not lift it as a loaded container. No hardware is needed. Print one lower/upper calibration pair first; total slot allowance.30 is only a starting value. Increase by.05 if tight, never force brittle panels. Loose clearance may need a smaller allowance, but no retention-force claim is made.

## Validation and limits

`npm test` independently reparses actual binary STL bytes: exact count/size, finite coords, nondegenerate faces, consistent unit normals/winding, every welded edge exactly two opposite-directed neighbors, each component positive volume, millimeter bounds and bedZ0. Checks every separate part plus connected card. Twelve parameter cases include all presets, extremes and six variations; thirty image/STL-derived cases get identical mesh AND assembly checks. Geometry booleans verify15 assembled part pairs, nine sampled insertion heights for each upper divider, real sideways joint restraint, coplanar feet, no print-layout overlaps, exact card envelope and24 tab cuts releasing precisely carrier+6 parts. Final worker repeats manifold/volume/finite checks on each edit.

Production-browser scripts exercise actual PNG/JPEG/ASCII/binary file imports and downloaded bytes, compare pixel/threshold/depth/transforms vs defaults and Node regeneration from exact JSON, phone file imports/exports and touch orbit/pinch, malformed/truncated/open/nonmanifold/concave/excessive input, invalid dimensions/transforms, empty relief, recoverable reset, source replacement/removal, SVG holes, presets, shape/text/icons, portable/named saves, undo/redo, actual ZIP meshes, worker/stale-result errors, all views, theme/focus/collapsible sections, reduced motion and320/390px no overflow/preview-first layout. Reports record actual outcomes. **No physical print, physical assembly, friction, material-strength, load or durability test has been performed.** Computational watertightness/fit checks are not empirical printability guarantees.

Dependencies: React/Vite, Three.js(MIT), Manifold3D(Apache2), fflate(MIT), Fontsource Fredoka/Rubik(OFL); Playwright for browser tests. Reference attribution above remains separate from synthetic CC0 fixtures and original procedural solids.
