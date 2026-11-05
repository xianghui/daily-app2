# Bridle & Glide — Open-Bridle Kit Card Studio

A React + Vite, browser-local parametric **two-part kit card**, not a static mesh re-export. Snip eight runners, turn a blade upright and slide it axially into an end-open fork. A long through-slot guides the perpendicular sheet and the solid heel stops inward travel. **Hand-held only: no axial or vertical retention, no freestanding/structural/load rating.** Physical printing, fit and strength have not been tested.

## Reference first

Selected actual model: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. The accessible cached public binary was re-parsed this run, not inferred from its filename or screenshot. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, assumed mm (STL carries no units), bounds **179.820 × 178.020 × 3.190 mm**, two edge-adjacent components, 57 edge anomalies. Source triangles are neither copied nor repaired nor published. The raw source is not included.

Actual sections at Z=.100/.215/1.590 show **1.60 mm sheet, 4.50 × 1.70 mm sockets**, with **.21–.22 mm runner tops**. See `reference-analysis.json`, the independently produced `reference-analysis-raw.json`, source README/license and measured `evidence/reference-sections.svg`/PNG. Reproduce the analysis using `python3 reference-analysis.py /path/to/public-source.stl`. Local keycap template and fabric-link meshes were parsed first and rejected as inappropriate for this sheet kit; their hashes, dimensions and components are recorded.

### Adaptation, not copying

Preserves the real sheet-through-slot fit relation (+.10 mm source socket width) and bed-flat low-runner carrier architecture. Reconstructs an original **elongated end-open fork + perpendicular blade**: 1.8–3.2 mm sheet, slot=sheet+user clearance, 14–28 mm fork engagement, eight thicker breakaway tabs and clear cutting corridors. No source cat parts, switch sockets, scarf incline or sleeve. This is a new open-joint insertion/release interaction, not an old mechanism with new colours. Proposed running gaps are printer-dependent, not measured source tolerances or physically tested fits.

Visual/interaction reference: read-only `keycap_generator2` README, App, Viewer, styles, worker, STL/export and image modules were inspected. Reuses its concrete studio patterns: 374 px scrolling left rail, compact sticky header, collapsible labelled sections, paired range/mm inputs, pink depressed keycap controls, checkerboard import cutout, source preview, right-hand orbit viewer, explicit status and export gating. Phone layout is preview-first and stacked. Locally bundled Fredoka/Rubik and saved light/dark theme. General local studio infrastructure is adapted from existing Daily Object Lab code; joint geometry, assembly transforms and checks are new.

## Run / dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik. All runtime dependencies/fonts/WASM are bundled locally: no CDN, API, account or key. Manifold performs genuine Boolean solid operations in a worker; final geometry is simplified at .001 mm kernel tolerance, not convex-hulled. Import parser and pure generation/STL serializer are independent of React. Source trees and old daily_app remain read-only.

## Parameters — all lengths mm

| Setting | Range / role |
|---|---|
| Card width × height | 100–180 × 85–140; validated real frame envelope |
| Handle length | 25–45; signature center = −.55 × length |
| Fork engagement | 14–28; useful engagement subtracts heel gap |
| Blade height / fork breadth | 16–24 |
| Sheet thickness | 1.8–3.2 |
| Slot total clearance | .10–.50; half per side |
| Heel end gap | .10–.30 |
| Part spacing | 3–5 |
| Breakaway tab width / thickness | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art XY offset / rotation | X ±1.5, Y ±2, rotation ±180 degrees |

Rounded, chamfered and notched handle silhouettes; three real mesh thumbnails and presets. Undo/redo, six named local designs, portable JSON save/open with bounded normalized image or verified mesh payload. Missing assets explicitly require reattachment. No pretend restored paths. Invalid dimensions, bad transforms, empty images, geometry failures or pending edits disable all mesh exports; last-good preview is labelled. Request IDs and full state key prevent stale-result exports.

## Image → actual mesh

PNG/JPEG <=2 MB, <=12 MP, <=6,000 px per side; validated magic/header and decoder dimensions before heavy work. Simple SVG <=2 MB/2,000 elements is locally rasterized (no scripts, external references, filters or text; convert text to paths). PNG/JPEG normalize to <=500 px, then sample a bounded **20×20 grayscale grid**, with contain/cover, crop offsets, dark/light background and transparency composited onto removed background. Threshold produces binary sampled heights; grayscale gives proportional heights. This is **2D-to-relief/silhouette conversion, not 3D reconstruction from one photo**, not exact vector tracing. Checkerboard shows actual retained samples. Bright holes remain unengraved with continuous backing. A closed heightfield cutter is Boolean-subtracted .4–.6 mm into the protected handle; no texture-only personalization. Text up to eight characters and six searchable original bundled SVG icons use this same tested pipeline. Raised art is intentionally unavailable to preserve a flat sheet card and protected interfaces.

## STL → actual mesh

ASCII and binary <=2 MB/1,500 triangles, each axis .2–250 assumed mm. Select Z/Y/−Z up before attaching; source preview shows oriented dimensions/format/triangles. Explicitly confirm millimeters because STL has no unit metadata. XY scales proportionally to selected footprint; Z independently fits engraving depth. Rotate, center and offset the exact accepted source mesh, then Boolean-subtract it from the fork handle. Final/export changes with source shape, size and placement.

Deliberately supported subset: one connected outward-wound watertight **convex, broad-flat-bottom solid with no overhang footprint**. Open/nonmanifold/degenerate, inward, self-intersecting, touching, concave, hollow, disconnected or overhung meshes are rejected with actionable guidance; no hidden repair or replacement by convex hull. The parser computes a bottom footprint hull ONLY as a support eligibility test, never to replace source triangles. Replacing/removing/resetting returns to built-ins. Synthetic PNG/JPEG/SVG/ASCII-STL/binary-STL fixtures and attribution are in `public/samples/`. User inputs are never uploaded or written into the repository.

## Print / assemble / calibrate

1. Export connected card **or** clean plate/individual parts, all already bed-flat Z=0. Default card120×95×2.4 mm. PLA/PETG, .4 nozzle, .16–.20 layers; supports not intended. Continuous bed footprint and minimum backing checked computationally.
2. Cut four runners per part, eight total. Trim outer handle scars; never cut functional slot walls. Discard connected frame/crossbar.
3. Keep fork bed-face down; rotate blade +90° around long X. Center thickness in slot and blade height around fork mid-plane. Hold by hand.
4. Begin beyond the fork tips and slide along X toward heel, leaving selected end gap. Slide out or lift vertically to release. Slot cheeks constrain lateral translation only, **no lock/capture**.
5. Print the two clean parts first as a calibration set. Suggested PLA total gap .30 mm / PETG .40 mm, not universal. Adjust and reprint rather than forcing. No hardware or glue needed; no structural use.

## Views / exports

Assembled, exploded (instructional offset), connected flat card, clean plate and isolated parts share the exact built geometry; ghost mode explains interfaces. Orbit/zoom/fit and touch gestures. Prominent binary STL, per-part STLs, Everything ZIP containing connected card + two clean parts + numbered instructions + portable design + assembly map. STL has no colours; no fake 3MF. Mesh state fingerprint is displayed as stage metadata and compared with real downloads in tests.

## Validation and limitations

`npm test`: independent float32 binary-STL parser checks finite nonzero triangles, normalized normals/winding, bounding sizes, welded edges with exactly two opposite faces at 1e-5 mm, positive volume per component and component counts. Defaults, presets, all field endpoints, combined extrema, three silhouettes, and image/STL-derived extrema are exercised.

Original kernel-based assembly tests verify carrier bounds, flat-part nonintersection, upper-footprint support, all eight real tab cuts (carrier + exactly two intact parts, no stray runners), unobstructed slots, all 81 axial insertion positions, seven vertical release positions, both side-gap probes, lateral cheek and heel stops, and >=1.2 mm art backing. These geometric checks do not establish physical friction, strength or tolerance accuracy.

Browser scripts operate production `dist` at its real `/daily-app2/20261106-7/` prefix: real file pickers, PNG/JPEG/ASCII/binary geometry-changing downloads, pixel/threshold/depth/placement variations, invalid file recovery, stale workers/imports, portable assets, ZIP/per-part parsing, hole probes, all presets/icons, undo/redo, saved theme, phone320/390px layouts and touch orbit/pinch. See reports and screenshots plus `VALIDATION.md` for actual results. No physical print/fit/strength testing claimed.

### Carrier budget invariant

For N independent bays, required height is sum(part heights + twice spacing) + (N−1) crossbar widths. Split remaining interior height across N bays. Counting an extra crossbar leaves free runner fragments at the final edge; the snip-component test specifically guards this regression.
