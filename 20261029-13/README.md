# Tangram & Tuck

A local **nine-piece flat-pack tangram tray kit-card generator**, not a browser game. Snip 36 real low-height tabs, bond the U-shaped finger-access rim to the backing, then lower seven loose puzzle tiles into the square well. Lift, turn and rearrange them on a desk; rebuild the square for storage. No magnets, fasteners, switches or bearings. **Adhesive is required only at the stationary rim/backing joint.** The open tray is not captive: do not invert it with tiles inside.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
npm run preview -- --port 5199
node extra-validation.mjs
node release-preflight.mjs
node browser-validation.mjs
```

Node 22.12+; React/Vite, Three.js + OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik. No remote CDN, backend, API key, paid service or upload. `vite.config.js` uses `/daily-app2/20261029-13/`. Per-app deploy scripts exist; the public release uses the **root monorepo deploy**, not the individual deploy.

## Reference-first evidence and attribution

Local collections were checked first: keycap/clicker switch sockets, sliding fidgets, fabric links and a helical spring are not suitable sheet/card construction references. The independently downloaded and parsed **White Cat Kit Card**, Mike Kasberg, Printables **865769**, supplies the construction reference:

- Source: <https://github.com/mkasberg/white-cat-kit-card>
- Listing: <https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card>
- License: **CC BY 4.0**, <https://creativecommons.org/licenses/by/4.0/>. Repository README, LICENSE and sheet/carrier SCAD inspected.
- Raw STL URL and SHA-256: [reference-analysis.json](reference-analysis.json). SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: **30,616 triangles**, **179.820 × 178.020 × 3.190 mm** overall. STL has no units; source SCAD corroborates mm, 1.6 mm sheet and 179.8 × 178 carrier.
- Actual mesh cross-sections at Z=.1/.5/1.59 mm: [evidence/reference-sections.png](evidence/reference-sections.png). Ray at Y=100/Z=.5 measures a **1.6 mm carrier rail**. Principal sheet planes at 0/1.6; low connections have .21/.22 mm vertices. Source code explains tapered wire bridges with a one-layer .2 mm neck and .6 mm width.
- **27 edge-connected components**, including 25 two-triangle artifacts. The reference is not watertight. It is inspected as a design example, **not repaired, used as a generated solid, or claimed printable**.

The source's actual construction—sheet parts on the bed retained in a perimeter with thinner breakaway bridges—is reconstructed here with three braced bays and **36 accessible rectangular runners**. The **1.6 mm sheet default is retained**. The carrier is deliberately widened from measured 1.6 to **2.4 mm**; runner thickness .4–.6 and width .8–1.4 mm are proposed FDM choices, not source measurements. Seven traditional tangram polygons, a bonded U rim/backing, and all tile clearances are new. No spacecraft shapes, source clips, bending seams or original mating interfaces are reused. **Raw source mesh is not redistributed.** No endorsement implied. Inspection is reproducible with `reference-inspect.py /path/to/source.stl` using trimesh/numpy/matplotlib.

Visual/interaction reference, read-only: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Inspected README, styles, editor, viewer, worker, image conversion, STL and export modules. Applied concrete patterns: 374 px left scrollable control panel, sticky compact header, paired slider/numeric controls, collapsible sections, raised selection keys, source preview and explicit STL units, safe-zone customization, saved theme, large right viewer and reachable exports. Phone order is viewer → dimensions/warnings/export → stacked controls. No keycap sockets are imposed. Shared local editor/import infrastructure was adapted from the previous daily studio; the puzzle generation, tray and assembly checks are new.

## Parameters (millimeters unless labelled)

| Control | Range / meaning |
|---|---|
| Card width / height | 280–330 / 220–260; three braced carrier bays |
| Puzzle square side | 54–70; all seven tile polygons scale together |
| Tray rim width | 4–6; real U-shaped rim, fixed 12 mm finger notch |
| Tile clearance | .20–.60 total nominal shared-edge gap; default .35 |
| Sheet thickness | 1.6–2.4; shared by tiles, backing and rim |
| Part spacing | 4–7; rejects undersized cards rather than spilling outside |
| Breakaway tab width / thickness | .8–1.4 / .4–.6; 4 tabs per part |
| Medallion dimple depth | 0–.4; backing surface only |
| Tray outline | rounded, medium or large clipped corners; same safe well |
| Import footprint / grip height | 4–7 / .6–3; XY proportional, Z independent |
| Import rotation / placement | −180–180° / X ±1.5, Y ±2, within safe circle |

Each un-gapped tangram polygon tessellates a square; tiles are offset inward by `clearance/2` using genuine 2D solid offsets. The square well is enlarged by `clearance/2` per side. This is a **sliding/drop fit**, not an interference press fit. All pieces remain distinct in assembly. Exported plate/card pieces share bed Z=0. Assembled tiles/rim sit on the backing at Z=sheet thickness; the assembled height is twice the sheet thickness, plus the external front relief. Exploded offsets are explanatory, not exported. Presets Rose Mosaic, Roomy Studio and Pocket Pieces have generated model thumbnails. Bounded variations use the largest card; undo/redo, six local named designs and JSON save/open include bounded imported payloads. Missing payloads explicitly require reattachment.

## Image, text, icon and SVG workflow

File picker on phone/desktop and single-file drag/drop. **All file processing stays in the browser.** Limits: 2 MB per file; PNG/JPEG actual content headers checked before decoding, ≤12 megapixels, ≤6000 px per side, then normalized to ≤500 px. Simple SVG ≤2000 elements, ≤6000 px dimensions, no scripts/links/external resources/text/effects; it is rasterized locally to 256 px. Supplied fixtures are synthetic, not personal inputs.

Conversion is a documented **20 × 20 sampled grayscale height map**, not exact vector tracing or automatic reconstruction of a 3D object from a photo. Fit or cover/crop the source, shift crop ±25%, composite alpha against the selected light/dark background, optionally invert, and compute luminance `.2126R + .7152G + .0722B`. Threshold mode assigns depth below threshold (1–254); relief mode uses `depth × (1 − luminance/255)`. A triangulated continuous top with closed bottom and sides becomes one valid solid and is unioned/subtracted from the backing medallion. Threshold boundaries are linearly interpolated between samples, not exact pixel edges.

Source and **actual converted cutout** appear side by side on checkerboards. Bright enclosed holes remain unraised/unengraved above solid backing; they are not cut through the panel. Raised depth .4–3 mm; engraved .4–.6 preserves at least .8 mm backing at minimum sheet thickness. Marks are confined to a radius-6.5 mm circle at the front of the backing, **outside the puzzle well**. Text (up to 8 characters) and six searchable bundled SVG icons use the same actual geometry path. Fine text/details may be below nozzle resolution: use bold short marks, inspect slicer layers, and calibrate. Replacing/removing, centering transforms and resetting image controls are real operations. Personal files are neither uploaded nor committed.

## STL workflow and explicit unsupported inputs

Choose up-axis **before** attaching: Z, Y (rotate +90° about X), or −Z. Binary and ASCII STL are parsed in a worker, welded at 1e−5 mm, and checked for finite bounded coordinates, nondegenerate triangles, consistent winding, exactly two oppositely directed faces per edge, one connected shell, positive volume and self-intersections. Limit **1500 triangles**, .2–250 mm per axis. No repair claims. **Confirm millimeter coordinates** because STL has no unit metadata.

This intentionally bounded integration supports **one convex, broad flat-bottom, support-free grip**. Concave, hollow, branching, multi-shell or overhanging shapes are rejected with guidance, never replaced by a convex hull. A 2D bottom hull is used only to validate bed support, **not to replace input geometry**. Oriented dimensions and triangle count appear beside a 3D source preview. XY scales proportionally to the physical footprint; Z independently fits grip height. Show scale factors, rotate Z and place within the front medallion. Minimum transformed XY extent is 1.2 mm. A true Manifold union fuses the original transformed mesh .15 mm into the backing. The assembled tile well and moving pieces are untouched. Safe-zone or invalid transforms disable export. Change orientation by reattaching, or center/remove to recover. Portable saved STL payloads are revalidated on restore.

## Mesh/export integrity

Heavy generation and solid operations run in a dedicated locally bundled WASM worker. Debounce 100 ms, request IDs and a current state key prevent old results from enabling export. Invalid parameters/files/empty images disable **all** STL/ZIP exports even if a last-good preview remains visible (labelled). Worker loading failure blocks export and requests reload. Every generated part and connected card must be one closed positive-volume solid; an independent welded-edge/winding/degeneracy preflight runs for every result. Preview and binary STL downloads use the exact same final triangles; UI exposes their byte fingerprint. View colour does not imply STL colour.

Exports: connected-card STL, nine individual bed-flat part STLs, Everything ZIP including all ten STLs and numbered `ASSEMBLY.txt`. Not a 3MF. The connected card is a **real solid union** of frame, 36 low tabs and all nine parts, not a loose print layout. Card dimensions stay within the declared envelope. Final X/Y/Z reflect the actual selected export. The separate de-tabbed view uses the same meshes in their flat positions; solved/exploded/isolated and transparent-rim views explain the fit.

## Printing and assembly

1. Check the large card fits your bed; otherwise export individual parts. PLA/PETG, .4 mm nozzle, .2 mm layer, at least 3 walls, no supports intended, marks up. No compliant mechanism or hidden hardware.
2. First calibrate two tiles, rim and backing. Default .35 mm gap is a starting point, not a universal fit. Deburr elephant foot; never force sharp triangular tips.
3. Snip all 36 tabs on their accessible outer runs, then carefully trim residual nubs flush. Tile edges are functional fit surfaces: do not cut into the original silhouette. There are no tabs inside the rim well. Keep the nine parts; carrier is waste. Safety: cutters, adhesive, small parts and sharp tips are adult craft hazards.
4. Align and glue only the rim to the backing, flush at rear/side edges. Keep glue out of the well, cure flat.
5. Lower loose tiles into the solved square using the assembled view; remove through the front finger notch and rearrange on a desk. Do not glue tiles or invert the tray.

**No physical print, force, adhesive, wear, graspability or durability testing performed.** Computed mesh/fit checks do not prove a successful print. Use slicer inspection and a calibration print.

## Validation evidence

- `validate.mjs`: independent parsed binary-STL finite/normal/winding/volume/bounds/manifold/component checks for every part and connected card; defaults/presets/extremes and image/STL cases; actual Manifold pairwise collision, vertical insertion/removal and exploded path sampling; rim/backing contact; card bounds; snip access and ten resulting components (nine parts plus carrier).
- `extra-validation.mjs`: unsupported concavity rejection; real tiny-solid probes verifying an artwork ring hole remains unraised while its band is raised; source-derived mesh/assembly checks.
- `release-preflight.mjs`: denser insertion checks and mixed settings; explicit insufficient-card rejection.
- `browser-validation.mjs`: production bundle, real PNG/JPEG/SVG and binary/ASCII STL file uploads; actual downloaded STL parsing/signature/state reproduction; image content/threshold/depth/crop, STL scale/rotation/placement; malformed inputs; reset/undo/redo/local and JSON round trips; per-part/ZIP downloads; all views; worker failure; dark theme; desktop layout; 320/390 px phones and CDP touch orbit/pinch.
- `production-preflight.mjs`: root gallery inline-script compilation, exact earlier-entry preservation, unique new STL entry/category, deployed folders, rendered gallery, production error/recovery and reduced motion checks.

Reports and screenshots are kept beside these scripts. They are computational/browser evidence, not physical testing. `TEST_URL` can point the browser suite at the actual root-deploy server. Sample fixture attribution: independently generated synthetic PNG/JPEG/SVG and primitive STL fixtures, reused from the local daily studio; not third-party models. Library licenses remain with their authors (Manifold Apache-2.0, Three MIT, fflate MIT, Fontsource fonts SIL OFL).
