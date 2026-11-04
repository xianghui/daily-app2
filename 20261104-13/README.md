# Napier & Lattice

A local React + Vite maker studio generating a **real connected kit card**, ten loose Napier multiplication rods and a fitted engraved tray. Snip forty-four low runners, arrange digits, then add diagonal values with carry. This is an arithmetic assembly kit, not a browser game or another linkage/switch clone.

## Run and export

```sh
npm install
npm run dev
npm run predeploy
npm test
node browser-test.cjs
node studio-test.cjs
```

Production base: `/daily-app2/20261104-13/`. `python3 serve-production.py` serves `dist` under that real prefix at port 5873. All dependencies, fonts, Three.js and Manifold WASM are bundled locally. No CDN, paid service, API key or generation server. A Web Worker performs solid generation, topology preflight and STL parsing; bounded inputs, 100-ms debounce, request IDs and current-state keys block stale exports. A last-good preview is explicitly marked and cannot be downloaded following an invalid edit.

Export connected-card binary STL, separate tray/rod STLs, loose print plate or Everything ZIP (twelve STL files, portable JSON and numbered assembly guide). Preview and download share the same valid result; the UI exposes its exact mesh fingerprint. STL stores neither color nor units. ZIP is not 3MF. Assembled/exploded/lift poses never alter printable orientations.

## Actual STL reference and provenance

Inspected local candidates first, including their README and actual meshes:

- `keycap_generator2/public/templates/clicker_template2.stl`: 944 triangles, three closed components, 15.20 × 15.20 × 43.10 mm overall; unsuitable MX switch cuts/stem.
- `fidget_fabric_generator/public/templates/diamond-link.stl`: 5,940 triangles, one closed component, 7.981 × 9.241 × 8 mm; unsuitable interlocking fabric geometry.

Selected public source: **White Cat Kit Card**, Mike Kasberg, Printables 865769, [source repository](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. Attribution and license are retained in `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`.

Actual downloaded `white-cat-kit-card_kit.stl` SHA-256:
`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Parsed 30,616 triangles; bounds approximately (−.01,−.01,0) to (179.81,178.01,3.19) mm, 179.82 × 178.02 × 3.19 mm overall; 27 edge-adjacent components, **not globally manifold**. Source units assumed mm because STL has no metadata. We do not repair or reuse its defective faces.

`reference-analysis.py` reparses actual source and local candidates, computes components/bounds/hash and measures Z=.10/.215/1.59-mm cross-sections. `reference-analysis.json` contains measurements; `evidence/reference-sections.png` shows actual mesh sections, inspected before deciding final construction. Source acquisition URL is recorded there; download to `/tmp/napier-reference.stl` before rerunning with a Python environment containing trimesh, numpy and matplotlib. The raw third-party mesh is not redistributed.

**Measured source → actual reconstruction decisions:** planar sheet 1.60 mm; removable low runners end around .21–.22 mm; sockets 4.50 × 1.70 mm are measured for context but deliberately NOT imposed on an unrelated loose-rod assembly. Source detachable sheet/carrier layout informs the generated connected frame and real bed-level tabs. Original CSG uses thicker 2.2–3-mm sheets and .4–.6-mm runners for a .4-mm nozzle. Arithmetic rods, ninety split-digit cells, tray well, row labels and .20–.50-mm running gaps are original redesigned geometry, not source-measured features. No source cat, clip, switch socket or raw mesh is bundled. This is structural adaptation, not an unchanged re-export.

**Studio reference:** read-only Keycap Studio README, styles, App/Viewer, worker, import and export modules inform the 374-px left editor, collapsible sections, paired mm sliders/inputs, tactile buttons, selection states, lavender desk, coral accents, saved dark theme, locally bundled Fredoka/Rubik, real source/cutout previews, imported-base-style transforms, worker geometry and practical part exports. Reused local maker-studio UI/import/test utilities from the preceding daily app; all arithmetic solids, assembly, ranges and tests are new. No source project history or dependency tree copied.

## Parameters and real geometry

Every dimension below is millimeters:

| Parameter | Supported range |
|---|---|
| Card width / height | 280–320 / 340–400 |
| Rod width | 12–14 |
| Row pitch | 12–14 |
| Sheet | 2.2–3 |
| Rod gap, adjacent and end spacing | .20–.50 |
| Part-to-carrier spacing | 3–5 |
| Tab width / thickness | .8–1.2 / .4–.6 |

There are nine rows per rod, 0–9 digit rods, and multiplier labels 1–9 on the tray. Every numeral and diagonal is an actual Boolean engraving, .4 mm deep. Segment width .416 mm; optional dark pigment makes fine grids easier to read. Nominal rod length is 9 × pitch + 4; well width is 10 × rod width + 11 × gap. Tray floor is sheet thickness; upper sides add another sheet thickness. Apron is one sheet thick and isolated from the well. Soft-radius, small-chamfer and broad-chamfer profiles plus three real presets change actual geometry. Bounded variations are not cosmetic random colors.

Solid operations use Manifold, never overlapping preview shells or convex-hull replacements. Numeral cutters overlap by .05 mm at mid-seams to avoid coincident internal surfaces. Final kernel simplification uses a documented .01-mm modeling tolerance, well below printable features; independent **float32 STL** edge/normal/component checks still run. Validation weld tolerance is .00001 mm. Test probes stay .01 mm off exact well boundary surfaces to avoid floating-point contact ambiguity; actual rod gaps remain at least .20 mm.

The card is **large-bed** (default 280 × 340 × 4.8 mm). It is not falsely advertised as a 220-mm card. Individual tray and rods are offered for smaller beds. Print connected card OR clean parts, not both.

## Image import: PNG, JPEG and simple SVG

File picker works on phones/desktops; drop is supported. Images validated before decode: 16 bytes–2 MB, PNG/JPEG content signatures, ≤12 megapixels, ≤6,000 px per side. Normalize longest dimension to ≤500 px, sample a 20×20 grayscale grid with contain/cover fit, pan/crop and light/dark background handling. Transparent pixels composite onto the selected keyed background. Threshold 1–254 or grayscale heights create a closed sampled tool, then Boolean-subtract its .4–.6-mm relief into the protected tray apron. Continuous backing is preserved; bright/transparent internal holes remain unengraved. This is bounded **2D-to-relief/silhouette conversion**, not full 3D reconstruction from one photograph or exact contour tracing. The checkerboard shows the actual cutout grid alongside the source image.

Simple self-contained SVG paths/shapes are sanitized, rasterized locally to 256 px, then use the same pipeline. External resources/scripts, references, filters, text and >2,000 elements rejected; convert text to paths. Text and six searchable bundled icons also enter this real engraving pipeline. No remote icon/font fetches.

Footprint 4–7 mm; placement X ±1.5 / Y ±2 mm; Z rotation ±180°. Keep-in radius 6.5 mm around the apron patch, art depth .4–.6 mm, at least 1.5-mm backing. Raised marks intentionally unsupported because this flat-sheet kit preserves thickness and backing. Empty silhouettes and impossible transforms block export.

## STL import and integration

ASCII and binary STL, ≤2 MB / 1,500 triangles, .2–250 mm on every axis. Explicit millimeter confirmation is mandatory; no unit metadata is invented. Select Z/Y/−Z up before import, see oriented source dimensions, then scale proportional XY to 4–7-mm footprint, independently scale Z to .4–.6-mm engraving depth, rotate, center and place. Display the actual scale factors and original source preview.

Supported source contract: one closed, outward-wound, positive-volume **convex flat-bottom solid** with broad bed contact and no overhangs. Content, complete facets, finite dimensions, vertex welding, manifold edge incidence, consistent winding, connectivity, self intersections, convexity and support footprint are checked. Concave/hollow/branched/multipart/open/nonmanifold/overhanging sources are rejected with actionable messages, NOT hull-replaced or claimed repaired. Accepted original mesh is the exact Boolean engraving tool; no unchanged STL re-export. Geometry changes survive preview/download and transformed imports are tested against no-import output.

Replace/remove/reset recovers from errors; changing up axis requests reattachment. Both built-in controls and imports share manifold/backing/assembly validation. Synthetic PNG/JPEG/SVG and ASCII/binary STL fixtures are in `public/samples` and accessible from the editor. No personal uploads in the repository.

## Designs and privacy

Processing is entirely local. JSON and six named browser-saved designs carry bounded pixel/source-mesh payloads and normalized image data. Missing payloads explicitly request reattachment and block export. JSON ≤2 MB; portable raster ≤250,000 pixels. Undo/redo restores real parameters and assets. Theme persists locally. Imports are not sent to any service; browsers may of course fetch bundled application assets from their static host.

## Printing, assembly and arithmetic

1. PLA/PETG, .4-mm nozzle, .16–.20-mm layers, 3+ walls, 100% millimeter scale. Every part lies at Z=0, no supports intended.
2. Snip forty-four bed-level runners, then trim stubs without narrowing rods. Check the printed grooves; optionally apply dark pigment.
3. Print two rods and tray first to calibrate gaps. This is a loose tray, NOT a press fit. Clearances are printer/material dependent. There is no claim of universal fit.
4. Drop rods in from above, engravings up, row 1 at rear. No hardware, adhesive, snap pins or retention cap. Lift out, or invert the tray over a desk. Rods are deliberately not captive.
5. Example 467 × 8: arrange rods 4,6,7 and read row 8. From right: units 6; next diagonal 5+8=13 → 3 carry 1; next 4+2+1=7; last 3 → **3736**. Ten unique rods cannot represent repeated digits simultaneously; export extra copies of a selected rod when needed.
6. Use Assembled/Exploded/Clean parts/Flat card and isolated-part views to inspect. Lift-rod preview is illustrative, not simulation; exports remain bed flat. Colored previews do not imply STL color.

## Validation / limitations

`validate.mjs`: 51 default/preset/range/corner/import cases, per-component float32 binary-STL normals, finite vertices, nondegenerate triangles, opposite directed edge incidence, positive volume, bounding dimensions and connected components. Checks actual carrier+44-tab connectivity, simulated cuts leaving carrier+11 clean parts, undamaged released solids, no plate/assembled intersections, fifty top-insertion samples, real well and backing, and all ninety arithmetic products. `arithmetic-mesh-test.mjs` additionally probes 5,040 actual-section segment positions against independent digit truth tables across default and all presets. Final topology preflight also runs in worker on each build. Geometry tests are independent of compile success.

`browser-test.cjs`: real PNG/JPEG/ASCII-STL/binary-STL file selection, actual STL downloads parsed and regenerated from JSON to compare fingerprints; pixels/threshold/depth/fit/scale/rotation/placement alter geometry, malformed/truncated/open/nonmanifold/concave/oversized sources fail recoverably, empty images fail, units gate export, min/max controls work, phone uploads/downloads and CDP touch orbit/pinch work without external requests.

`studio-test.cjs`, `mobile-layout.cjs`, `orientation-test.cjs`, `stale-test.cjs`, `icons-drop-test.cjs`, `isolated-test.cjs`, `interaction-test.cjs`, `image-hole-test.mjs`: presets/geometry, text/icons/SVG holes, payload/named-save/reload, undo/redo, exact ZIP parts, absent payload rejection, saved dark theme, focus/collapse/reduced motion, 320/390px all-tab overflow checks, worker abort/recovery, Z/Y/−Z imports, rapid edit stale-result blocking, actual samples and isolated exports. Reports/screenshots are retained beside the app. See `VALIDATION.md` for completed runs.

**No physical print, fit, readability, fatigue or assembly test has been performed.** Computational geometry validation is not physical proof. Fine .416-mm segments require a suitable slicer/nozzle; printing a calibration sample is necessary.

Dependencies: React/React DOM, Vite/plugin-react, Three.js, Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages, Playwright (development). Bundled icons are simple local original SVG paths; third-party reference attribution as above.
