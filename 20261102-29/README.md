# Reuleaux & Roll — constant-width kit card studio

A local React + Vite maker studio generating a real connected, breakaway kit card with three clean parts: an integral-floor guide tray, regular odd Reuleaux rotor and equal-width circle control. Drop both rotors into separate halves of the open channel and turn them by hand. No glue, switches, fasteners or other hardware. This is a flat-pack comparison kit, not a browser game or a precision gauge.

## Reference-first design / attribution

Before geometry selection, local keycap switch templates and fabric-link meshes were parsed. They are unsuitable sheet-carrier references. The selected reference is **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License text and source README are included. The actual public binary STL was downloaded and inspected, not inferred from listing images.

SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles; bounding size 179.820 × 178.020 × 3.190 mm; millimeters assumed from source design because STL has no unit metadata. Parsed mesh has 27 edge-adjacent components including degenerate source fragments, and is not globally watertight. We do not repair, import into the generator, or redistribute that raw asset. See `reference-analysis.json`, `reference-measurements.json`, `reference-measure.py`, and actual cross-sections `evidence/reference-sections.png`.

Measured 1.60 mm sheet planes and low .21–.22 mm runner regions motivate the sheet/carrier/divider structure. Proposed runners are deliberately thicker .4–.6 mm. Measured source 4.50 × 1.700 mm sockets are **not** imposed on this open-top drop-in assembly. All tray and rotor geometry is an original Boolean reconstruction, with no spacecraft silhouette. This is a constant-width comparison, not an earlier square-wheel, slider, or conchoid mechanism.

The read-only visual/interaction reference was `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles, App, Viewer, worker, STL parser, export and imageTrace modules inspected. Concrete patterns: 374 px left panel/right viewer, preview-first phone layout, collapsible sections, paired numeric/slider controls, tactile selected keys, checkerboard conversion preview, saved light/dark theme and current-result export gating. Generic bounded import/studio utilities were adapted from the existing daily-app studio; **new geometry, assembly transforms and validation are mechanism-specific**. No project Git history or dependencies were copied wholesale.

## Geometry and fits

Odd Reuleaux rotor = intersection of n discs of radius W whose centres lie at radius `W / (2 cos(pi / (2n)))`, n = 3, 5 or 7. This is not a rounded polygon or convex-hull substitute. The circular control diameter is W. Local Manifold WASM performs real Boolean intersections/unions/subtractions. 360-sided cylinders bound mesh complexity. Every generated mesh is sampled through 361 rotation poses; accepted nominal-width discrepancy <= .02 mm. This is a faceting budget, not guaranteed printer accuracy.

- Constant width: 28–42 mm; guide apron 16–22 mm.
- Total guide clearance: .30–.60 mm, default .40 mm. Shared between both rails; not a press fit.
- Sheet/floor and rotor thickness: 1.6–2.4 mm, default measured 1.6. Tray rail height: twice sheet thickness, 3.2–4.8 mm.
- Card: 190–250 × 130–180 mm; part spacing 3–5 mm. Impossible packing is blocked.
- Tabs: .8–1.2 mm wide, .4–.6 mm thick, at bed level. Twelve real runners attach all pieces to frame/dividers.
- Three tray silhouettes and three real geometry presets; bounded variations rebuild the model.

All dimensions in millimeters. Every intended part is one closed outward-wound positive-volume solid. Card is one component; de-tabbed plate has three distinct nonintersecting components. The open-top loose parts lift out vertically; **no captive retention or snap fit is claimed**. Assembly preview centres each rotated rotor between rails using actual mesh support extrema. This is a fitting-pose demonstration, **not a no-slip rolling dynamics simulation**. Both pieces must stay in their own channel halves. Assembled/exploded/isolated/card/de-tabbed views use the same exact parts. Rotation does not change printable geometry.

## Image / SVG / text workflow

File picker and single-file drag/drop; PNG, JPEG and simple SVG. Text (up to eight characters) and six searchable bundled vector marks use the same pipeline. Actual file content and image headers checked before decode: <=2 MB, <=12 MP, <=6000 px per axis. Sources normalize locally to <=500 px. SVG accepts <=2000 simple filled vector elements, no scripts, URLs, active content, effects or external references; rasterized locally to 256 px. Source and checkerboard cutout shown.

Conversion samples a **20 × 20** luminance grid: thresholded silhouette or grayscale height-map, joined into a closed triangulated height-field tool and Boolean-engraved into the protected tray apron. It is 2D-to-relief, **not automatic full-3D reconstruction from a photo**. Background light/dark inversion, fit/crop, pan, threshold 1–254 and depth .4–.6 mm change the export. Bright holes remain unengraved, keeping solid backing; sampled interpolation means features smaller than grid cells may vanish and edges are not exact traced vectors. Maximum sampled tool resolution is explicitly shown. No texture-only decoration.

Tool footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm, Y ±2 mm within a 6.5 mm radial keep-in zone. Minimum apron backing 1 mm. Engraving only: raised marks intentionally unsupported. Reset/remove/replacement return to defaults; invalid/empty conversions disable export.

## STL integration workflow / deliberate limits

ASCII and binary STL parsed locally in worker; source preview, oriented dimensions and triangle count displayed. **Explicit millimeter confirmation required**. Select Z-up, Y-up or inverted Z before attachment; changing axis clears source for reattachment. XY scale preserves source proportions to 4–7 mm footprint; independent Z scales to .4–.6 mm engraving depth. Rotate/place/reset the exact mesh tool, then Boolean-subtract it into the apron. Source mesh is not merely displayed/re-exported and is never silently convex-hulled.

Bounded contract: one connected, outward-wound closed **convex**, broad flat-bottom solid, <=1500 triangles, .2–250 mm per source axis, <=2 MB. Validate finite coordinates, degenerate facets, edge incidence/direction, connectedness, positive volume, triangle intersections, convexity and flat bed contact before CSG. Open, nonmanifold, concave, hollow, overhanging or otherwise unsupported inputs are explicitly rejected with recovery guidance; no automatic repair claim. These limits are intentional, not universal STL support. Both sample STL formats are original synthetic fixtures.

## Local persistence, worker and export

All dependencies, WASM and Fredoka/Rubik fonts bundled; no remote API, CDN, account or upload. Portable JSON and up to six local named designs store bounded normalized images/exact verified mesh payloads, settings and transformations. Missing image payloads request reattachment. Undo/redo keeps bounded history. User inputs never saved in repository or sent to services.

Heavy geometry and STL validation in a Web Worker with 100 ms debounce and sequence/state guards. Worker errors are recoverable by reload. The last-good preview may stay visible on invalid edits, but **export is blocked until the exact current state is valid**. Preview and binary STL share identical indexed geometry. UI mesh fingerprint is checked against downloaded bytes. STL stores no preview colour.

Per-part STL buttons, selected connected-card/de-tabbed/part STL and Everything ZIP (card, three parts, design JSON, numbered guide). Real printable orientation is bed-flat, Z=0. No mislabeled 3MF or overlapping assembled export.

## Print and assembly

See `ASSEMBLY.txt` (also in UI/ZIP). PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, no supports intended. Snip twelve accessible runners 1.3 mm outside bounding edges. File stubs flush without gouging functional arcs; for accurate width comparisons print clean individual rotors instead. Lower both pieces into tray; turn gently and lift out to remove. Start .40 mm total guide gap; print tray/rotor first to calibrate first-layer expansion and friction. No universal fit, strength, fatigue, print or rolling performance claims.

## Run / verify

`npm install`, `npm run dev`, `npm run predeploy`; per-app `deploy` is `gh-pages -d dist`, but public monorepo publishing uses the root deploy flow. Dependencies: React, Vite, Three.js/OrbitControls, Manifold (Apache-2.0), fflate, Fontsource Fredoka/Rubik (OFL). Playwright is a development dependency. Bundled icons are original minimal SVG paths.

`npm test`: independent final binary STL parser checks finite vertices, nondegenerate triangles, unit stored normals, consistent winding, opposite-directed two-face edge incidence welded at 1e-5 mm, per-component positive volume, expected mm bounds and part counts. Real CSG checks 361 rotation positions, guide clearance, rotor separation, insertion path, support-free slices, connected frame/tab release and clean part preservation. Tests cover every preset, all shapes, all parameter extrema and image/STL-derived variants. `browser-test.cjs`, `studio-test.cjs`, `presentation-test.cjs`, `stale-test.cjs`, `orientation-test.cjs`, `icons-drop-test.cjs` use production assets and real browser-selected files/downloads, not mock exporters. See `VALIDATION.md` and generated JSON reports for actual outcomes. **Computational checks are not physical print tests; no physical print has been performed.**
