# Kakeya & Turn

A browser-based **five-part flat-pack kit-card generator**, not a static STL download. Snip twenty runners, seat two feet under a tray, bond its three-cusp deltoid guide into a shallow receiver, and lower a loose rounded needle into the cavity. Hand-guide the needle through a full planar revolution: it rotates and translates, with no fixed axle. Lift to remove/reset. This is a finite-width Kakeya needle experiment, **not a minimum-area proof**, geared mechanism or physically tested product.

## Reference-first evidence

The read-only local collections were searched first. Two actual local meshes were parsed: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three closed components, 15.20 × 15.20 × 43.10 mm) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one closed component, 7.98 × 9.24 × 8.00 mm). Their switch/fabric interfaces are unrelated to this flat-sheet assembly, so neither was misrepresented as a kit template.

Selected geometry reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream project](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Current upstream README and LICENSE were retrieved and inspected; copies are `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`. The source STL was downloaded temporarily, parsed, sectioned and measured—not inferred from its listing image.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- 30,616 triangles; dimensions **179.8200 × 178.0200 × 3.1900 mm**; **27 edge-adjacent components**, including source edge defects. This is NOT claimed to be a closed printable reference or repaired mesh.
- Millimeters are an explicit assumption: STL has no unit metadata.
- Actual cross-sections at Z=.10, .215 and 1.59 mm: `evidence/reference-sections.png`; full bounds/components/Z planes/socket measurements: `reference-analysis.json`.
- Measured structural sheet: **1.60 mm**; rectangular sockets **4.50 × 1.70 mm**; low source runners **.21–.22 mm**. Source male clips are about 4 mm, not 4.5 mm.
- This original parametric reconstruction preserves the **pierced sheet + perpendicular shouldered interface + low breakaway carrier** construction. New straight tongues deliberately use the **measured socket span of 4.50 mm**, not an invented claim about the source's male clips. Sheet thickness 2.2–3 mm, total socket clearance .10–.30 mm, .4–.6-mm bed-level runners, and all deltoid/needle/receiver geometry are redesigned.

The actual source mesh and its fan-art imagery are **not bundled or redistributed**. No source repository/history/dependency tree was copied. `reference-analysis.py` reproduces source measurements after downloading the documented STL to `/tmp/kakeya-reference.stl` (requires Python trimesh, NumPy, matplotlib).

## Distinct geometry and actual assembly

The new interaction is a translating/turning finite-width needle in a three-cusp deltoid. For generating radius r and turn t:

- Curve: `(r(2 cos t + cos 2t), r(2 sin t − sin 2t))`.
- Centerline endpoints are opposite curve parameters, distance **4r** apart; center `(r cos 2t, −r sin 2t)`, orientation t.
- Needle is a capsule: semicircular ends add one width to its overall length. The guide cavity is a **360-point nonconvex deltoid offset by half needle width + selected radial clearance**; outer wall is a further 3 mm offset. No convex hull replaces the guide.
- A **.40-mm-deep annular receiver**, proposed **.15-mm edge allowance**, registers the guide on the deck. Needle rests on the intact central floor, .2 mm below the rim.
- Two **4.50-mm-wide straight tongues**, sheet-thickness long, insert **from below**. Shoulders support the deck at 12 mm. Both feet and guide require adhesive; they are not snap fits. Needle is deliberately **loose/removable, not retained**. Flat tray without feet is supported.
- CSG unions/subtractions are performed with locally bundled Manifold WASM. Each part is one closed solid. The real card unites five parts with a frame and **twenty removable bed-level runners**, not loose pieces beside a rectangle. Large/over-spaced combinations that cannot pack are blocked.
- Mathematical preview pose is prescribed, not a physics simulation. Export is always bed-flat printable geometry, never overlapping assembled shells. Exploded separation is illustrative only.

## Studio and parameters

React + Vite; Three.js orbit/zoom/fit, local Manifold worker, bounded detail, 100-ms debounce and generation/current-state keys. A last-good preview may remain visible after an invalid edit, but **all export is disabled** until the current state succeeds. Worker load failures explicitly block export and request reload.

The read-only `keycap_generator2` README, styles, App, Viewer, worker, STL/import and export modules were inspected for the studio pattern: **374-px left rail**, sticky compact header, collapsible sections, paired sliders/mm fields, raised tactile controls, lavender-grey desk, white panels, coral selection, rounded bundled Fredoka/Rubik fonts, saved dark theme. Phone layout puts the usable preview/toolbar, dimensions and export before stacked controls. No switch socket or keycap is imposed on this mechanism.

All geometric values are **millimeters** unless labelled degrees:

| Control | Supported range |
|---|---|
| Card width / height | 160–200 / 260–310 |
| Deltoid generating radius | 8–12 |
| Needle width | 1.6–2.4 |
| Guide radial running clearance | .3–.7 |
| Sheet thickness | 2.2–3 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Foot socket total clearance | .10–.30 |
| Artwork footprint / engraving depth | 4–7 / .4–.6 |
| Artwork rotation | −180…180° |
| Artwork X / Y offset | ±1.5 / ±2 |

Three real model-thumbnail presets, three apron silhouettes, bounded variations, text and six searchable bundled icons, preview-only color, undo/redo, up to six named local designs, portable JSON save/open. JSON carries bounded image/mesh data; missing images request reattachment rather than pretending restoration. Source fixtures are original synthetic/public test files only. Phone file-picker and desktop drag/drop are implemented.

## Image/SVG → actual engraving

Accept **PNG, JPEG, simple SVG**, 16 bytes–2 MB. Raster content headers are verified before decoding: ≤12 MP, ≤6,000 px side. Normalize locally to ≤500 px, then sample a **20 × 20 grid** with contain/cover and ±25% crop shifts. Light/transparent or dark backgrounds, threshold 1–254, grayscale relief and .4–.6-mm depth are adjustable. A checkerboard shows the exact sampled cutout beside the source. SVG accepts ≤2,000 simple filled shapes, no external references/effects/scripts; rasterized locally to 256 px, then sampled identically. Font/text/icons use the same pipeline.

Grid luminance becomes a closed triangulated height-field tool, Boolean-subtracted from the protected upper apron. Bright/transparent holes retain uncut backing; this is **2D silhouette/relief conversion, NOT single-photo full-3D reconstruction**, and not an exact vector trace. Rotation, scale and placement alter actual exported triangles. Raised art is intentionally unsupported to avoid intrusive apron features; engraving is explicit. The 6.5-mm keep-in patch is outside the moving guide/foot slots; backing remains ≥1.5 mm. Invalid/empty conversions disable exports recoverably.

## STL → integrated geometry, not an unchanged re-export

Accept **ASCII and binary STL**, ≤2 MB, ≤1,500 triangles, one closed connected positive-volume outward-wound solid, .2–250 mm per axis. Explicitly select Z/Y/−Z up and **confirm millimeter units** before integration. Source dimension, format/triangle count, separate interactive source preview, XY scale factor, independent Z depth factor, Z rotation and placement are shown. Change axis by reattaching; replace/remove/reset are available.

A deliberately bounded supported contract accepts **convex broad-flat-bottom solids**, with ≥25% footprint bed contact and no projected overhang. Nonfinite/degenerate/open/nonmanifold/inverted/multipart/concave/self-intersecting/excessive meshes are rejected with guidance. No arbitrary repair or convex-hull substitution is claimed or done; the bottom convex outline is only a validation test. Accepted original vertices/triangles are transformed and **Boolean-subtracted into the apron**. This measurably changes the final functional tray's solid geometry, not just its texture or source preview. It does not fuse the moving needle or pierce the floor. Coordinate/index/topology checks rerun on restored JSON meshes.

All processing, including file conversion, generation and export, is **local to the browser**. No API, key, paid service or user-file upload. All runtime fonts, icons, code and WASM are bundled locally; production tests reject remote runtime requests.

## Print and assemble

Default connected card **180 × 280 × 2.4 mm**. Choose clean-part exports for smaller beds. PLA/PETG, .4-mm nozzle, .16–.20-mm layers, 3+ walls, 100% mm scale. All parts are bed-flat, no supports intended; inspect slicer layer previews. Print a foot/deck pair first, calibrate fits and elephant foot. Clearances are printer/material-dependent starting ranges, never universal fits.

1. Snip twenty runners about 1.8 mm outside edges; trim stubs. Needle tabs meet its long sides, not rounded functional ends.
2. Seat both feet FROM BELOW; shoulders meet underside, tongues end flush at deck top. Glue square and cure.
3. Bond guide into shallow annular receiver. Remove glue squeeze-out from cavity.
4. Lower needle from above; hold tray level and guide gently around a full turn. Lift to reset. No motion capture, forces, minimum-area or automatic steering claim.

No purchased hardware is required. Adhesive is needed for the normal fixed assembly. Do not print both connected card and all loose parts for one assembly. Export buttons provide binary **connected-card STL, each clean part STL, a clean print plate, and Everything ZIP** (six STLs, portable design JSON, numbered instructions/current fits). STL contains no preview colours; ZIP is not labelled 3MF.

## Run and reproduce checks

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Dependencies: React/ReactDOM, Vite/plugin-react, Three.js, Manifold (Apache-2.0), fflate, Fontsource Fredoka/Rubik (OFL), gh-pages; Playwright for real-browser tests. Existing reusable Daily Object Lab import/studio/test infrastructure is adapted; new geometry is independently implemented rather than reskinning a prior mechanism.

`npm test` validates defaults, all presets, combined/individual range extremes, silhouettes, image-derived and transformed STL-derived outputs. Independent binary STL checks verify exact length/count, finite vertices/normals, nondegenerate faces, unit normals, float32 mm bounds, positive volume for **each** connected component, and exactly two oppositely directed incident faces per welded edge (1e−5 mm tolerance). Every individual part and translated clean plate is checked separately.

Kernel checks verify card envelope, real tab connectivity and cut release into carrier + five unharmed parts, no unintended flat/assembled intersections, bed-supported upper footprints, foot insertion from below, annular guide insertion, protected backing, **73 positions through 360°** and vertical needle lift release. These checks are repeated on imported outputs; they do not prove friction-free physical operation.

Browser tests use real file-picker PNG/JPEG/SVG/ASCII/binary STL, actual STL/ZIP downloads, independent mesh checks and exact preview/export fingerprint plus portable-state regeneration. They cover changed pixels/threshold/depth/crop and mesh scale/rotation/placement, resets/removal/replacement, malformed/truncated/nonmanifold/concave/oversized files, empty images, unsafe transforms, all presets/icons/text, views, undo/redo, named save/reload, JSON payloads, worker error/stale-result handling, desktop theme/focus/rail, 320/390-px overflow and touch orbit/pinch. Tests run against production hosting with the exact Vite base path before publication. Reports and screenshots describe actual performed checks in `VALIDATION.md`.

**No physical print, fit, bond-strength, friction, fatigue or motion test has been performed.** Computational geometry checks are not physical certification.
