# Snail’s Pace

A browser-local React + Vite **radial snail-cam fidget generator**. Turn a stepped spiral cam counterclockwise while gently guiding an open-rail follower inward. It climbs gradually, then returns by hand across the radial cliff. Unlike the collection’s continuous lobed radial cams, the asymmetric rise/reset is discontinuous; there is no automatic return spring, ratchet or simulated snap force. **All parts are deliberately lift-removable, not captive.**

## Studio

Reference: the read-only Keycap Studio project at `3d_printing_apps/keycap_generator2`. Applied concrete patterns: 374 px scrolling left control panel, sticky compact brand/theme header, labelled collapsible sections, paired mm sliders/numeric fields, raised tactile selection keys, pale lavender-grey desk, coral accent, local Fredoka/Rubik fonts, large right viewer, source/cutout previews, imported mesh editor, named local designs, portable JSON, per-part STL and ZIP. Phones show the preview, dimensions, warnings and exports before stacked controls. Themes persist locally. Undo/redo covers bounded geometry state; preview colour is deliberately not STL colour.

Three generated-geometry presets: Slow Rise, Pocket Reset, Long Climb. Round, hexagonal and oval palm shapes; bounded variations; searchable bundled text/symbol marks; drag/drop and real file-picker imports. All generator/export dependencies, fonts and WASM are locally bundled. No API, keys, CDN, remote generation or uploads.

## Generate and run

```sh
npm install
npm run dev
npm run predeploy
```

Vite base `/daily-app2/20261025-25/`. The per-app `deploy` script is installed as required, but public publication uses **the root monorepo** `npm run predeploy` then `npm run deploy` to publish its combined `deploy/` folder. Do not deploy this app over the whole collection.

## Printable geometry and controls

All lengths are millimeters. Live edits are debounced 100 ms into a dedicated Manifold WASM worker with generation IDs and current-state keys. Heavy STL validation also runs in that worker. Every generated solid and float32 print-layout placement is checked for finite, nondegenerate, outward-wound closed mesh geometry. Invalid edits retain a clearly labelled last-good preview but disable **all** STL/ZIP exports; there is no silent stale export.

| Control | Range / meaning |
|---|---|
| Palm diameter | 22–28 mm, round / hex / oval outlines |
| Spiral radial rise | 8–12 mm beyond the 9 mm initial radius |
| Cam thickness | 3–4.5 mm |
| Running clearance | 0.30–0.60 mm radial pin-bore and guide-side gaps; also bridge-to-cam gap |
| Follower pad length | 8–12 mm of outer guide engagement pad |
| Palm dimple depth | 0–0.6 mm |
| Vertical running gap | 0.25–0.50 mm between tray and cam, allowing the rotor to turn |

The cam outline is a bounded 192-segment radial ramp from 9 mm to 17–21 mm, closed across a straight radial cliff. A circular 2 mm-radius follower nib touches the spiral edge; the overhead bridge runs through open side rails outside the rotor sweep. The exact polygon/circle envelope at the guide line is computed using every segment endpoint and tangency candidate. The illustrative preview adds the running clearance to avoid intentional contact penetration. The geometry permits geometric rise/drop, but **friction, hand pressure and automatic dynamic return are not simulated**. In particular the user must ease the follower back inward at the cliff; do not force reverse rotation into the cliff.

The protected palm is isolated from the entire mechanism by at least 10 mm. The guide engagement pad retains at least 8 mm longitudinal overlap throughout sampled phases. It is constrained laterally, **not retained vertically**; there are no unsupported captivity claims. The rotor bore clears the 3 mm-radius pin by the explicit running gap. The base pin and guide walls are finite closed solids, robustly unioned to a 2 mm tray.

**Views:** separated print plate, assembled cam sweep with phase slider, exploded, isolated palm guide, isolated spiral cam and isolated follower. Optional see-through base explains fit. Preview positions describe the geometric envelope only. Exports always use the same final part meshes in their real print orientation. UI dimensions show the selected printable X × Y × Z and a mesh signature verified against actual downloads.

## Image / SVG workflow

Use Choose / replace source or synthetic fixtures `mark.png`, `waves.jpg`, `ring.svg`. PNG/JPEG actual content headers are checked before decoding: 16 bytes–2 MB, ≤12 million pixels, ≤6,000 px on either side. Normalize locally to ≤500 px; portable designs embed this bounded normalized image. Simple safe SVG shapes are rasterized locally at 256 px; scripts, external URLs, references, fonts and effects are rejected. SVG limit 2,000 elements and 6,000 px dimension.

Conversion is **2D-to-relief**, not reconstruction of an entire 3D object from one photograph. Fit/contain or fill/crop, ±25% crop shift, light/transparent background removal or dark inversion are applied on a 20 × 20 grid. Luminance becomes either thresholded height (threshold 1–254) or grayscale height. A triangulated continuous height field on a 0.4 mm backing is built as a closed solid and boolean-unioned into the palm's recessed landing. Bright holes remain unraised; engraved holes leave the original floor. This is sampled height geometry, not exact vector outline tracing, so use bold artwork and inspect the checkerboard grid. The final geometry preserves the sampled hole pattern, not invisible texture.

Relief 0.4–3 mm; engraving 0.4–0.6 mm to preserve the thick floor. Actual source and cutout previews are shown. Scale 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm; all transformed points must stay within the 6.5 mm safe radius. Text up to 8 characters and six searchable marks use this same pipeline. Replace/remove, image-settings reset, transform reset and Reset all are supported.

## STL workflow and deliberate limits

Binary and complete ASCII STL are supported, ≤2 MB / 1,500 triangles; source dimensions must each be 0.2–250 mm. The parser welds equal coordinates within 0.00001 mm, checks finite vertices, nondegenerate faces, exactly two oppositely directed incidents per edge, connectivity, positive signed volume and pairwise triangle intersections. It additionally requires **one closed outward-wound convex solid, broad flat bottom (≥25% of its bounding footprint), no unsupported overhang outside that footprint**. Concave, open, hollow, disconnected, nonmanifold, self-touching or overcomplex sources receive actionable errors. No hull substitution or claimed automatic mesh repair occurs. These are explicit input restrictions, not a general-purpose STL repair tool.

Select source up axis Z, Y or −Z before attachment. View the actual oriented source and its dimensions, then explicitly confirm millimeters: STL contains no units. Changing axis requests reattachment. Fit the original mesh proportionally in XY to a 4–7 mm footprint, fit Z independently to 0.6–5 mm grip height, rotate and place. A minimum 1.2 mm XY span is enforced. The exact original solid, after these transforms, is boolean-unioned into the fixed palm well with 0.15 mm base overlap. It measurably changes final STL geometry; it is not merely displayed or re-exported. The cam, nib and guide interfaces are untouched by personalization.

## Saved designs and privacy

Processing is entirely browser-local. No user file is uploaded, sent to a service or saved in this repository. Only newly authored synthetic fixtures are bundled (CC0). Source images are embedded as bounded PNG data URLs and STL meshes as validated vertices/indices in JSON and up to six named local designs. Restores revalidate assets and dimensions; missing image payloads explicitly require reattachment. Local storage quota failures recommend portable JSON. Themes are separate local preferences. JSON limit 2 MB. Remove imported data using Remove import or browser storage controls.

## Export / printing

Binary STL per part (`palm-guide`, `spiral-cam`, `radial-follower`), selected whole print plate, and Everything STL + notes ZIP. ZIP contains three real individual STL files plus assembly instructions, **not 3MF**. STL does not contain preview colours. All parts rest on Z=0 with disjoint plate bounding boxes and positive gaps. Filenames identify dimensions/source. No server or paid service.

Use PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, 100% slicer scale. Print all parts as exported, supports off. The follower prints with its broad bridge face on the bed and its nib upward, avoiding an unsupported overhead bridge; **flip it over during assembly**. All base floors are ≥2 mm; the palm well floor is 4.2 mm before bounded engraving. There is no flexure or compliant-material requirement.

1. Deburr the rotor bore, spiral edge, contact nib and guide rails.
2. Drop the cam over its central base pin.
3. Flip the follower over and lower its long bridge between the two open rails. Point the nib down against the cam edge. The bridge clears the cam; only the nib is meant to contact it.
4. Hold the tray horizontal using its personalized palm. Turn counterclockwise with one hand, lightly guiding the follower inward with the other. Follow the slow outward rise; ease inward by hand at the cliff. This is not a spring-powered reset.
5. To reverse, first lift the follower away from the radial cliff. Lift the follower and then the cam to disassemble. Never carry the assembly inverted; no retention lid or cap is present.

Print Pocket Reset as a full-size calibration. Running and vertical clearances depend on printer, surface finish, filament and slicer; no universal fit is promised. Increase gaps if binding, and inspect sliced thin details. No bearings, screws, magnets, springs or adhesive required. Small loose parts: not for children. Do not force or flick the cliff reset. No physical print has been tested.

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

`validate.mjs` independently parses actual float32 binary STL byte lengths/counts, finite coordinates, normals, areas, welded edges (1e-5 mm), winding, per-component positive volume, connected-component counts, Euler characteristic and millimeter bounds; every part and translated combined plate is tested. It checks analytic plate extents, pin-bore and guide gaps, guide overlap, isolated personalization and disjoint export layouts. Kernel intersections sample 193 phases over a full rotation for each tested mechanism, every pair of parts, plus 20 lift-release positions. The exact intended rotor-bore genus is checked separately from other parts. These are **computational geometry/kinematic checks**, not contact-force simulation or proof of tactile performance. Browser scripts exercise actual file pickers and downloads, compare signatures against UI and JSON regeneration, compare imports and transforms with defaults, reject invalid inputs, check undo/redo/saves, views/theme, ZIP contents, mobile touch orbit/pinch, phone exports, worker-load failure and recovery. Reports and screenshots are local evidence.

**No physical print, friction, force, wear, fatigue or user study was performed.** Test the fit on your own printer; no universal tolerance or tactile feel is promised.

## Dependencies / licences

React / Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka and Rubik (SIL OFL), gh-pages, Playwright for validation. The small symbol selection uses system-renderable Unicode drawn locally with the bundled font fallback; it becomes actual height geometry. Synthetic fixtures are original CC0 test art/meshes. Studio/editor utilities were adapted from earlier apps in this same monorepo; reference project and archived collection were read-only throughout.
