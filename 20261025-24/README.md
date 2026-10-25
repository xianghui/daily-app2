# Cycloid Walk

A local React + Vite maker studio for a **travelling geared thumb wheel**. Hold a fixed rack tray level, turn the eccentric thumb pip while allowing the wheel to walk sideways, then reverse. The pip follows a short curtate-cycloid/trochoid arc, not a complete cycloid loop. Unlike the earlier fixed-axis rack studio, this has no fixed pinion axle, translating rack or captive shuttle. Lift the wheel straight up to release/re-seat it. **The wheel is intentionally removable, not captive.**

## Studio

Reference: the read-only Keycap Studio project at `3d_printing_apps/keycap_generator2`. Applied concrete patterns: 374 px scrolling left control panel, sticky compact brand/theme header, labelled collapsible sections, paired mm sliders/numeric fields, raised tactile selection keys, pale lavender-grey desk, coral accent, local Fredoka/Rubik fonts, large right viewer, source/cutout previews, imported mesh editor, named local designs, portable JSON, per-part STL and ZIP. Phones show the preview, dimensions, warnings and exports before stacked controls. Themes persist locally. Undo/redo covers bounded geometry state; preview colour is deliberately not STL colour.

Three generated-geometry presets: Even Pace, Pocket Steps, Long Wander. Round, hexagonal and oval palm shapes; bounded variations; searchable bundled text/symbol marks; drag/drop and real file-picker imports. All generator/export dependencies, fonts and WASM are locally bundled. No API, keys, CDN, remote generation or uploads.

## Generate and run

```sh
npm install
npm run dev
npm run predeploy
```

Vite base `/daily-app2/20261025-24/`. The per-app `deploy` script is installed as required, but public publication uses **the root monorepo** `npm run predeploy` then `npm run deploy` to publish its combined `deploy/` folder. Do not deploy this app over the whole collection.

## Printable geometry and controls

All lengths are millimeters. Live edits are debounced 100 ms into a dedicated Manifold WASM worker with generation IDs and current-state keys. Heavy STL validation also runs in that worker. Every generated solid and float32 print-layout placement is checked for finite, nondegenerate, outward-wound closed mesh geometry. Invalid edits retain a clearly labelled last-good preview but disable **all** STL/ZIP exports; there is no silent stale export.

| Control | Range / meaning |
|---|---|
| Palm diameter | 22–28 mm, three ergonomic outlines |
| Runway half travel | 20–30 mm; 40–60 mm total supported stroke |
| Tooth face height | 3–4.5 mm |
| Tooth backlash allowance | 0.30–0.60 mm; each tooth profile narrowed and rack offset |
| Thumb pip eccentricity | 4–7 mm from wheel centre |
| Palm dimple depth | 0–0.6 mm |
| Rack crown allowance | 0.25–0.50 mm; rack height = tooth face height + twice allowance. The same allowance gives an explicitly estimated preview-only wheel lift above the 2 mm floor |

The gear has 16 teeth, a fixed 26 mm pitch diameter, module 1.625 mm and 20° pressure angle. Its involute flank approximation is bounded. The fixed rack uses compatible trapezoidal flanks. Wheel angle is displacement / pitch radius. End fences lie at least 4 mm beyond the addendum envelope at the supported stroke limits. The pip keeps at least 1.46 mm of root-circle margin. Palm personalization is outside all tooth interfaces.

**Views:** separated print plate, estimated rolling sweep with position slider, exploded, isolated palm runway, isolated thumb wheel. All exports use the actual final meshes in bed-flat orientation, regardless of the selected illustrative view. The UI reports the selected export's X × Y × Z dimensions and a mesh signature checked against actual downloads.

## Image / SVG workflow

Use Choose / replace source or synthetic fixtures `mark.png`, `waves.jpg`, `ring.svg`. PNG/JPEG actual content headers are checked before decoding: 16 bytes–2 MB, ≤12 million pixels, ≤6,000 px on either side. Normalize locally to ≤500 px; portable designs embed this bounded normalized image. Simple safe SVG shapes are rasterized locally at 256 px; scripts, external URLs, references, fonts and effects are rejected. SVG limit 2,000 elements and 6,000 px dimension.

Conversion is **2D-to-relief**, not reconstruction of an entire 3D object from one photograph. Fit/contain or fill/crop, ±25% crop shift, light/transparent background removal or dark inversion are applied on a 20 × 20 grid. Luminance becomes either thresholded height (threshold 1–254) or grayscale height. A triangulated continuous height field on a 0.4 mm backing is built as a closed solid and boolean-unioned into the palm's recessed landing. Bright holes remain unraised; engraved holes leave the original floor. This is sampled height geometry, not exact vector outline tracing, so use bold artwork and inspect the checkerboard grid. The final geometry preserves the sampled hole pattern, not invisible texture.

Relief 0.4–3 mm; engraving 0.4–0.6 mm to preserve the thick floor. Actual source and cutout previews are shown. Scale 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm; all transformed points must stay within the 6.5 mm safe radius. Text up to 8 characters and six searchable marks use this same pipeline. Replace/remove, image-settings reset, transform reset and Reset all are supported.

## STL workflow and deliberate limits

Binary and complete ASCII STL are supported, ≤2 MB / 1,500 triangles; source dimensions must each be 0.2–250 mm. The parser welds equal coordinates within 0.00001 mm, checks finite vertices, nondegenerate faces, exactly two oppositely directed incidents per edge, connectivity, positive signed volume and pairwise triangle intersections. It additionally requires **one closed outward-wound convex solid, broad flat bottom (≥25% of its bounding footprint), no unsupported overhang outside that footprint**. Concave, open, hollow, disconnected, nonmanifold, self-touching or overcomplex sources receive actionable errors. No hull substitution or claimed automatic mesh repair occurs. These are explicit input restrictions, not a general-purpose STL repair tool.

Select source up axis Z, Y or −Z before attachment. View the actual oriented source and its dimensions, then explicitly confirm millimeters: STL contains no units. Changing axis requests reattachment. Fit the original mesh proportionally in XY to a 4–7 mm footprint, fit Z independently to 0.6–5 mm grip height, rotate and place. A minimum 1.2 mm XY span is enforced. The exact original solid, after these transforms, is boolean-unioned into the fixed palm well with 0.15 mm base overlap. It measurably changes final STL geometry; it is not merely displayed or re-exported. The moving gear is untouched.

## Saved designs and privacy

Processing is entirely browser-local. No user file is uploaded, sent to a service or saved in this repository. Only newly authored synthetic fixtures are bundled (CC0). Source images are embedded as bounded PNG data URLs and STL meshes as validated vertices/indices in JSON and up to six named local designs. Restores revalidate assets and dimensions; missing image payloads explicitly require reattachment. Local storage quota failures recommend portable JSON. Themes are separate local preferences. JSON limit 2 MB. Remove imported data using Remove import or browser storage controls.

## Export / printing

Binary STL per part (`palm-runway`, `walking-wheel`), selected whole print plate, and Everything STL + notes ZIP. ZIP contains real individual printable STL files and assembly instructions, **not 3MF**. STL does not contain preview colours. Both parts rest on Z=0 with a positive gap in plate layout; download filenames identify settings/source. No server or paid service.

Start with PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, both parts flat, pip upward, supports off. Inspect the rack tips in the slicer: narrowest modeled tip is approximately 0.77 mm at maximum backlash, so use calibrated variable line widths or reduce backlash if it drops thin walls. All main floors are ≥2 mm; the recessed palm floor is 4.2 mm before bounded engraving. No compliant material or flexure is needed.

Keep the tray approximately horizontal, place wheel teeth into the rack, apply gentle hand guidance toward the rack and rotate the pip while letting the centre translate. Reverse at the preview-supported endpoints; do not force the end fences. Lift up to release. It is not a captive or hands-free rolling mechanism. Gravity seats the actual wheel against the tray: the preview floor lift avoids z-fighting and exposes illustrative spacing, not a floating bearing fit. Backlash, tooth feel and sliding friction depend on printer/material. Use Pocket Steps as a full-size calibration, deburr strings and increase allowance if binding. Hardware-free, no magnets, bearing, fasteners or adhesive. Small removable part; not for children.

## Reproducible computational validation

```sh
npm test                  # 132 parameter cases, 35 imported-output cases
npm run predeploy
node serve-test.cjs       # production dist at the real base path on localhost:5299
# In another terminal:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node interaction-test.cjs
node gallery-validate.cjs # after gallery entry added, before commit
node gallery-test.cjs
```

`validate.mjs` independently parses actual float32 binary STL byte lengths/counts, finite coordinates, normals, areas, welded edges (1e-5 mm), winding, per-component positive volume, connected-component counts, Euler characteristic and millimeter bounds; every part and translated combined plate is tested. It checks analytic extents, pitch contact ratio, root margins, isolated personalization and disjoint export layouts. Kernel intersections sample 65 rolling positions per tested mechanism plus seated and vertical release positions. These are **computational geometry/kinematic checks**, not contact-force simulation or proof of tactile performance. Browser scripts exercise actual file pickers and downloads, compare signatures against UI and JSON regeneration, compare imports and transforms with defaults, reject invalid inputs, check undo/redo/saves, views/theme, ZIP contents, mobile touch orbit/pinch, phone exports, worker-load failure and recovery. Reports and screenshots are local evidence.

**No physical print, friction, force, wear, fatigue or user study was performed.** Test the fit on your own printer; no universal tolerance or tactile feel is promised.

## Dependencies / licences

React / Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka and Rubik (SIL OFL), gh-pages, Playwright for validation. The small symbol selection uses system-renderable Unicode drawn locally with the bundled font fallback; it becomes actual height geometry. Synthetic fixtures are original CC0 test art/meshes. Studio/editor utilities were adapted from earlier apps in this same monorepo; reference project and archived collection were read-only throughout.
