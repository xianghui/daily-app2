# Zone & Focus

A local React + Vite maker studio for an original **two-part acoustic Fresnel zone-plate kit card**. Snip eight actual runners, set the stand flat, then lower the panel's two tongues into its sockets. Bond after calibrating fit. The panel has blocked odd zones, open even zones, four radial structural spokes, a 3-mm outer frame and a personalizable lower signature bar. This is a geometric teaching kit, not a calibrated acoustic instrument or a visible-light lens.

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve.py
node browser-test.cjs
node studio-test.cjs
node presentation-test.cjs
```

Production URL locally: http://127.0.0.1:5827/daily-app2/20261103-27/ . `serve.py --staged` serves the root combined deployment. The individual `predeploy` is exactly `npm run build`, `deploy` exactly `gh-pages -d dist`. Public publication uses the parent monorepo `npm run predeploy` / `npm run deploy`, not the individual deploy script.

Export a connected-card binary STL, a de-tabbed print plate, either clean component, or Everything ZIP containing all three individual STLs (including the connected card), bounded portable design JSON and numbered assembly instructions. STL is geometry in assumed **millimeters**, without colour metadata. Preview and downloads consume the exact same current worker-generated mesh; an invalid edit or import blocks export, including any still-visible last-good preview. UI includes a mesh-byte fingerprint. Export orientation is always bed-flat, irrespective of assembly preview.

## Geometry and ranges

All lengths are mm. Card width 130–200; height 210–340; acoustic wavelength 6–10; design focal distance 30–60; zone count 3/5/7; spoke width 1.6–2.8; stand depth 28–44; sheet 1.6–2.4; spacing 3–5; breakaway width .8–1.2, height .4–.6; socket **total** clearance .10–.30 (not per side). The app rejects combinations that cannot fit inside the selected card. Stand width is 70, tongue width 4.50, tongue insertion depth is actual sheet thickness. All numeric/range values validate independently before building. Three thumbnail presets, bounded variations, stand silhouettes, undo/redo, saved light/dark theme, six local named designs and JSON save/open are implemented.

The nonparaxial boundary equation is `r_n = sqrt(n * wavelength * focus + (n * wavelength / 2)^2)`, from a plane wave's extra on-axis path distance `n*wavelength/2`. At 343 m/s, frequency in kHz is `343/wavelength_mm`; default 8.6 mm is approximately 39.9 kHz. This is ultrasound, **not** visible-light optics. A suitable external low-power transmitter and receiver/measurement system are not included; a phone speaker does not satisfy these assumptions. Use equipment instructions; not high-power ultrasound. Source curvature, sound speed, panel thickness and real support spokes/legs alter performance. No wave field, efficiency, focal accuracy, acoustic gain, print fit or physical stability has been tested or simulated.

## Reference-first evidence

Before final geometry selection, inspected local candidate STLs and project instructions: Keycap Studio's actual switch-cut/stem mesh and Weave's diamond-link mesh are not suitable sheet-kit interfaces. Parsed the accessible public **White Cat Kit Card**, Mike Kasberg, Printables 865769 / https://github.com/mkasberg/white-cat-kit-card , CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ . See `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`.

Actual source hash, dimensions, 27 edge-adjacent components, source defects and Z-plane/socket measurements are in `reference-measurements.json`; source SHA-256 is **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Source units are assumed mm, corroborated by the sheet/slot geometry; STL carries no unit metadata. Representative mesh cross-sections at Z=.10/.50/1.59 mm are in `evidence/reference-sections.png`. `reference-measure.py <source.stl>` reproduces them (Python trimesh/numpy/matplotlib). The raw third-party mesh is deliberately not redistributed. No physical print test is claimed.

Measured source 1.60-mm sheets, 4.50 × 1.70-mm rectangular slots and .21–.22-mm low runners informed the original construction. Source sheet maps to panel/stand/carrier; source slot width maps to 4.50-mm tongues. Proposed sockets add .10–.30 total clearance to actual sheet and tongue width; default 1.75 × 4.65 differs from the source. Proposed .4–.6-mm runners are deliberately thicker. All parts and acoustic geometry are new CSG reconstructions, not repaired source mesh or a convex hull. See `reference-analysis.json` for the exact mapping and limitations.

Visual/interaction reference is the read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: inspected README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Used its concrete 374px scrollable left-rail/right-viewer pattern, lavender light desk, white panels, dark ink/coral tactile buttons, paired sliders/mm inputs, collapsible controls, checked cutout preview and import unit confirmation. Phone is preview-first, with reachable exports then stacked controls. Fonts and assets are local. Generic studio/import test utilities are adapted from earlier daily-app2 studio work; this app has independently installed npm dependencies, no imported Git history, and new zone/assembly geometry.

## Image, SVG, text and icons

Choose/replace files via native picker on desktop/phone, drag/drop one file, or use bundled synthetic fixtures. PNG/JPEG ≤2 MB, ≤12 MP, ≤6000px side; verified signatures/header dimensions before decoding. Normalize locally to ≤500px, then sample a **20 × 20** grid. Fit/cover crop, ±25% crop shift, light/transparent-background removal or dark inversion, threshold 1–254, or grayscale relief. Threshold uses sampled luminance to select engraving height; grayscale scales depth continuously. Triangulated top, side and bottom surfaces form a closed height solid; Manifold Boolean subtraction engraves the panel signature bar. Depth .4–.6 keeps ≥1mm backing. Bright holes stay unengraved over a continuous solid backing, not through-holes. Sampling preserves sufficiently large holes, not exact vector outlines or sub-grid details. Checkerboard shows the actual conversion cutout. This is **2D-to-relief**, never single-photo 3D reconstruction. Source and final geometry are both shown.

Simple SVG shapes/paths rasterize locally at 256px; scripts, external resources, effects and more than 2000 elements are rejected. SVG holes use browser fill semantics then the same grid. A small searchable bundled icon set and up-to-eight-character text render locally into this geometry path. Engraving only: raised artwork is intentionally unsupported so the flat sheet thickness/assembly remain unchanged. Placement: footprint 4–7, depth .4–.6, rotation ±180°, X ±1.5/Y ±2; all transformed vertices must stay within a 6.5-mm safe radius, away from sockets/tongues/rings/spokes. Replace, remove, reset image and center/reset transforms work.

## STL integration

ASCII and binary .stl are parsed locally in the worker; max2 MB /1500 triangles, .2–250 per axis. STL lacks units: explicit millimeter checkbox is required before integration. Choose Z/Y/−Z up before attaching (changing axis requests reattachment); inspect oriented source dimensions and separate source preview. XY scales proportionally to 4–7-mm footprint; Z independently maps to .4–.6-mm engraving depth, with displayed scale factors. Rotate/center/place within the protected panel bar; exact source triangles undergo Boolean subtraction. This changes exported geometry; no unchanged re-export and no convex-hull substitution.

Only verified closed, outward-wound **convex** solids with broad planar bed contact are supported in this bounded editor. Open/nonmanifold, degenerate, inward, concave, hollow, branched, unsupported overhangs and excessive files are explicitly rejected, not silently repaired or replaced. Dimension/triangle/transform checks precede heavy Boolean operations. Parser welding tolerance 1e-5 mm; exported validation welds at 1e-5 and uses finite coordinates, nondegenerate triangles, opposite directed edge incidences and positive volume per component. Model tolerance/simplification .001 mm avoids unprintable numerical slivers.

## Privacy and portability

No API keys, CDN imports, uploads or paid services. All user files remain local in-browser. Named designs use localStorage; portable ≤2MB JSON contains bounded mesh or normalized image payloads, never hidden file paths. Missing image payloads explicitly request reattachment; invalid snapshots are rejected. No personal inputs are stored in this repository; sample PNG/JPEG/SVG and ASCII/binary STL are synthetic fixtures. Fonts: Fontsource Fredoka/Rubik (SIL OFL); icons are bundled simple vector marks. Dependencies: React, Vite, Three.js OrbitControls, Manifold WASM (Apache 2), fflate (MIT), gh-pages; Playwright for tests. Dependencies/fonts/WASM bundle locally.

## Print and assembly

Print card or clean parts flat Z=0, 100% mm scale, .4 nozzle, .16–.20 layers, PLA/PETG, 3+ walls. Default card 150 × 240; use separate clean parts on smaller beds. Art faces down, no supports intended; inspect slicer first-layer features. Eight runners physically connect the parts/frame; remove with flush cutters approximately 1.8mm outside edges then smooth. Do not cut functional tongues, slots or thin spokes. Dry-insert panel straight downward until shoulders meet stand; tongues finish at its bottom plane. Glue both joints for retention after calibration—these are not captive/snap joints. Calibrate clearance with the two clean parts, never force. No compliant parts or extra hardware required for assembly; adhesive required. External ultrasound equipment needed only for optional experiments.

## Validation

`validate.mjs` independently checks serialized float32 STL length/normals/coordinates/degeneracy, welded edge incidence with opposite winding, Euler characteristic, positive volume per component, millimeter bounds and bed alignment. Manifold intersections test both separately closed parts, no flat/assembled overlaps, seven insertion positions, actual shoulder seats, socket clearances, frame/card bounds, eight snip cuts releasing exactly frame+two parts without harming functional parts, and supported upper cross-sections. Ring probes verify blocked/open zones away from supports and exact theoretical path differences. Protected artwork backing is checked. Defaults, all presets, shapes, each parameter min/max, combined corners, and image/STL-derived outputs run the same checks. Browser scripts exercise real picker imports and downloads, compare mesh fingerprints and JSON-regenerated geometry, verify rejection/recovery, local saved designs, undo/redo, ZIP parts, views, theme, focus, collapsible sections, touch orbit/pinch and 320/390px layouts. `VALIDATION.md` records actual run outcomes; computational checks do not establish a physically working acoustic instrument.
