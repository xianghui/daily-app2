# Lace & Facet

A browser-based **four-face laced tetrahedron kit-card generator**. Print one connected carrier, snip sixteen real low tabs, then lace four rigid triangular panels into a hollow geometric sculpture using six soft cords. This is a physical assembly kit—not a browser game, sealed container or cosmetic reskin of a slotted model.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
npm run preview -- --host 127.0.0.1 --port 5199
node browser-validation.mjs
node extra-validation.mjs
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik. Dependencies, fonts, worker and WASM bundle locally. Node 22.12+. No API, server-side modeling, CDN, paid service or key. Base path `/daily-app2/20261029-14/`. Individual `predeploy` is `npm run build`, `deploy` is `gh-pages -d dist`; publication uses the root monorepo deployment.

## Reference-first evidence

Checked local collections first under `/Volumes/ExternalHD/3d_printing_apps/`: switch/keycap templates, sliding mechanisms and fabric links are not sheet/card construction sources. The local kit-card projects describe procedural generators but contain no suitable source STL. The reference was freshly downloaded and parsed **before the final panel geometry was selected**:

- **White Cat Kit Card**, Mike Kasberg, Printables **865769**.
- Source <https://github.com/mkasberg/white-cat-kit-card>; STL listing <https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card>.
- **CC BY 4.0**, <https://creativecommons.org/licenses/by/4.0/>. Source README, LICENSE, `kit_frame.scad` and model SCAD inspected read-only.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Raw URL and complete measurements: [reference-analysis.json](reference-analysis.json).
- Binary STL **30,616 triangles**, bounds **179.820 × 178.020 × 3.190 mm**. No STL units metadata; source SCAD corroborates millimeters, 1.6 mm sheet and 179.8 × 178 carrier.
- Actual Z=.1/.5/1.59 mm sections were generated and visually inspected: [evidence/reference-sections.png](evidence/reference-sections.png). Ray at Y=100/Z=.5 measures a **1.600 mm perimeter rail**. Main sheet elevations are 0/1.6 mm; bridge vertices include .21/.22 mm. Source `wire()` specifies .6 mm bridge width and a one-layer .2 mm neck.
- **27 edge-connected components** (including 25 two-triangle artifacts); source is **not watertight**. It is a construction reference, not a generated input solid, and is not claimed repaired or printed.

**Concrete adaptation:** retain measured **1.6 mm default sheet**, redesign rail from measured 1.6 to **2.4 mm**, and low .21/.22 bridges to **.4–.6 mm** rectangular runners of **.8–1.4 mm** width. Two braced bays hold four panels with four accessible runners each. All lacing eyes, tetrahedral planes, corner inset, medallion and tip shaping are new parametric reconstruction, not source fit dimensions. No source spacecraft, clips or bends are copied; **raw source STL is not redistributed**. No endorsement implied. Reproduce analysis with `reference-inspect.py /path/to/source.stl` in a Python environment containing trimesh, numpy and matplotlib.

Read-only visual/interaction reference: `keycap_generator2` README, styles, App.tsx, Viewer.tsx, worker, image conversion, STL and export modules. Concrete patterns applied: 374 px left scroll panel, sticky compact brand/theme header, raised selection keys, paired numeric/slider inputs, collapsible sections, source previews and explicit STL units, bounded customization, large right viewer and clear export panel. Phones stack preview → dimensions/warnings/exports → controls. No switch sockets are imposed. Reusable editor/parser infrastructure is adapted from the preceding daily studio; tetrahedron geometry, matching-eye math and assembly checks are new.

## Parameters and assembly geometry

All dimensions are **millimeters**, angles degrees. `src/geometry.js` is the pure model shared by worker, tests, preview and STL exporter.

| Control | Supported range |
|---|---|
| Card width / height | 165–220 / 160–220 |
| Nominal tetrahedron edge | 48–68 |
| Eye inset from actual panel edge | 3–4.5 |
| Cord eye diameter | 1.6–2.4 |
| Corner seam allowance | .3–1 |
| Sheet thickness | 1.6–2.4 |
| Part spacing | 4–7 |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Medallion dimple depth | 0–.4 |
| Imported footprint / grip height | 4–7 / .6–3 |
| Artwork rotation / X / Y | ±180° / ±1.5 / ±2 |

An equilateral tetrahedron has inner dihedral `acos(1/3) = 70.5288°` and ideal height `edge × sqrt(2/3)`. Each mid-plane triangle is offset inward by **sheetThickness/sqrt(2) + seamAllowance/2**, preventing thickness overlap at corners. Tip variants are genuine rounded (1.2 mm corner smoothing), small clipped (2 mm), and open-corner (3.5 mm) polygons; eye stations remain at .32 and .68 of each ideal shared edge, inset normal to it. All six seams have two corresponding eye pairs, 24 through-bores total. No fake press-fit clearance: this kit uses loose **cord threading and lacing**, not friction seats, snaps or plastic flexures. Eye ligament is at least 1.8 mm; engraved central backing at least .8 mm.

The assembled viewer uses exact right-handed orthonormal face frames. It shows the **ideal tied pose**, not simulated cord tension or hinge strain. Cords are preview-only explanatory lines, never exported plastic. Outward separation/exploded poses explain placement; they are not a folding animation. Use slack bottom stitches and hand-guide the sides, then close the three remaining seams from outside. Parameter-dependent hole-pair alignment, pairwise collision and outward assembly/removal paths are checked computationally. Final physical shape depends on knots/tension; no precision-angle or rigid-retention claim.

Rose Facet, Open Corners and Pocket Prism presets have real generated model thumbnails. Bounded variation uses the largest card. Undersized card combinations are rejected rather than overflowing. Undo/redo, six named local designs and portable JSON preserve bounded imported payloads; missing source payloads explicitly require reattachment.

## Image, text, icon and SVG workflow

File picker on phone/desktop and single-file drag/drop. **All file processing stays in the browser.** Limits: 2 MB per file; PNG/JPEG actual content headers checked before decoding, ≤12 megapixels, ≤6000 px per side, then normalized to ≤500 px. Simple SVG ≤2000 elements, ≤6000 px dimensions, no scripts/links/external resources/text/effects; it is rasterized locally to 256 px. Supplied fixtures are synthetic, not personal inputs.

Conversion is a documented **20 × 20 sampled grayscale height map**, not exact vector tracing or automatic reconstruction of a 3D object from a photo. Fit or cover/crop the source, shift crop ±25%, composite alpha against the selected light/dark background, optionally invert, and compute luminance `.2126R + .7152G + .0722B`. Threshold mode assigns depth below threshold (1–254); relief mode uses `depth × (1 − luminance/255)`. A triangulated continuous top with closed bottom and sides becomes one valid solid and is unioned/subtracted from the front-face medallion. Threshold boundaries are linearly interpolated between samples, not exact pixel edges.

Source and **actual converted cutout** appear side by side on checkerboards. Bright enclosed holes remain unraised/unengraved above solid front panel; they are not cut through the panel. Raised depth .4–3 mm; engraved .4–.6 preserves at least .8 mm front panel at minimum sheet thickness. Marks are confined to a radius-6.5 mm circle at the face centre, **clear of all cord eyes and seams**. Text (up to 8 characters) and six searchable bundled SVG icons use the same actual geometry path. Fine text/details may be below nozzle resolution: use bold short marks, inspect slicer layers, and calibrate. Replacing/removing, centering transforms and resetting image controls are real operations. Personal files are neither uploaded nor committed.

## STL workflow and explicit unsupported inputs

Choose up-axis **before** attaching: Z, Y (rotate +90° about X), or −Z. Binary and ASCII STL are parsed in a worker, welded at 1e−5 mm, and checked for finite bounded coordinates, nondegenerate triangles, consistent winding, exactly two oppositely directed faces per edge, one connected shell, positive volume and self-intersections. Limit **1500 triangles**, .2–250 mm per axis. No repair claims. **Confirm millimeter coordinates** because STL has no unit metadata.

This intentionally bounded integration supports **one convex, broad flat-bottom, support-free grip**. Concave, hollow, branching, multi-shell or overhanging shapes are rejected with guidance, never replaced by a convex hull. A 2D bottom hull is used only to validate bed support, **not to replace input geometry**. Oriented dimensions and triangle count appear beside a 3D source preview. XY scales proportionally to the physical footprint; Z independently fits grip height. Show scale factors, rotate Z and place within the front medallion. Minimum transformed XY extent is 1.2 mm. A true Manifold union fuses the original transformed mesh .15 mm into the front panel. The cord eyes, corner seams and other panels are untouched. Safe-zone or invalid transforms disable export. Change orientation by reattaching, or center/remove to recover. Portable saved STL payloads are revalidated on restore.

## Geometry, views and export

All mesh/CSG work runs in a dedicated local WASM Web Worker. Edits debounce 100 ms; generation IDs and exact current-state keys block stale exports, including during image conversion. Invalid files/settings/empty silhouettes disable STL and ZIP even if the last-good preview remains (labelled). Worker loading failure blocks export with reload guidance. Solid generation uses genuine Manifold unions/differences/2D offsets, never overlapping shells presented as a union.

Every card and separate face must be one finite, closed, positive-volume solid with opposite winding on welded edges. Runtime preflight checks degeneracy, volume and edge incidence. Tests independently parse float32 binary STL normals, bounds, winding, connected component volumes and manifold edges at 1e−5 mm weld tolerance. Imported geometry changes only the front face and connected card, never the other three faces or the eyes.

Views: connected card, de-tabbed print plate, ideal laced tetrahedron, outward-exploded and each isolated panel. Transparent bottom helps explain assembly. Preview uses the exact current generated triangles; each download is checked against the UI mesh fingerprint. Export always uses flat Z=0 parts/card, **not the ideal assembled overlap or a screenshot**. UI reports final X/Y/Z for selected export.

Download connected-card binary STL, each of four face STLs or **Everything ZIP** containing five STLs and numbered `ASSEMBLY.txt`. ZIP is not 3MF. STL stores no preview colours. Frame, crossbars, sixteen runners and panels are a real solid union within the declared envelope; snipping runners computationally separates four faces plus carrier. Clean individual faces exclude runner nubs.

## Print and numbered assembly instructions

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls, marks up, no supports intended. Check bed against the card dimensions; otherwise export the faces individually. Inspect slicer layers before printing.
2. Print two faces first to calibrate the selected eyes and your cord. Supply **six 200 mm lengths of soft .6–.9 mm cord** (about 1.2 m total). Maintain at least .4 mm diametral threading allowance. Fit depends on printer, material, elephant foot and cord; defaults are not universal.
3. Adult: snip all sixteen low runners; trim nubs without damaging eye rings or silhouette. Carrier is waste. Printed faces are rigid—do not bend them. No bearings, magnets, fasteners or adhesive required.
4. Lay bottom print-side DOWN; arrange three sides around its edges print-side DOWN. For each bottom seam pass one cord through both corresponding eye pairs and tie loosely OUTSIDE. Leave slack so the side panels can be hand-positioned.
5. Lift sides with printed marks facing OUT. Lace the three sloping seams, one cord per seam, through both eye pairs. Tie outside using the open seams/clipped corners for access; adjust slack symmetrically until the bottom rests flat. Do not overtighten or pinch rigid edges together.
6. Untie exterior knots to disassemble. This is an open-seam sculpture, not a sealed box, load-bearing product or child’s toy. Cord, cutters and small parts need adult handling; keep away from children and pets.

**No physical print, cord, knot, stability, strain, fatigue or durability tests were performed.** Mesh and assembly calculations are not proof of a successful physical print.

## Validation

- `npm test` / `validate.mjs`: 22 built-in and 35 image/STL-derived cases, presets and representative extrema, independent binary STL checks for every part/card, exact card bounds, separate positive-volume closed components, thickness inset math, all 24 open eyes, twelve matching pairs on six seams, pairwise assembly collision, outward placement/removal and sampled 109.47° hand-guided fold paths, conservative cord-length allowance, snip access and five resulting components. Unsupported inputs are blocked.
- `extra-validation.mjs`: actual ring-hole raised/engraved solid probes, concave STL rejection, 16 mixed parameter cases and insufficient-card rejection. Computational, not physical tests.
- `browser-validation.mjs`: production worker/WASM, real PNG/JPEG/SVG and ASCII/binary STL file pickers, actual downloaded STL validation and state/signature reproduction, threshold/content/depth/crop/transforms, malformed/open/oversize/missing sources, reset/remove/replace/undo/redo, JSON/local saves, every part and ZIP, all views, worker failure/recovery, theme/focus/collapsibles, 320/390 px no-overflow preview-first phones and CDP touch orbit/pinch.
- `production-preflight.mjs`: all gallery inline scripts compile with `new Function`, new entry unique and correct, every earlier entry preserved, root deploy folder coverage and runtime gallery checks.

Synthetic sample fixtures under `public/samples/` were independently generated primitives/artwork, reused from the local studio; no private uploads or third-party source mesh are committed. Library licenses remain with authors: Three.js/fflate MIT, Manifold Apache-2.0, Fontsource fonts SIL OFL. Reference attribution above applies to construction inspiration, not the original spacecraft's art.
