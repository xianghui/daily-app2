# Ratio & Reach

A browser-only **proportional-divider kit-card generator**. Snip twelve real runners, stack two equal-radius arms around a printed spacer on external M3 hardware, and transfer a short witness span at 2×–4× scale. This is a physical three-part desktop kit, not a browser game or static STL re-export. It uses actual parametric lever radii, not a relabelled previous mechanism.

## Run

```
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Node 22.12+ recommended. Base `/daily-app2/20261103-19/`. Per-app `predeploy`/`deploy` exist; public publication uses the ROOT monorepo `deploy/` flow.

## Reference evidence

Local STL collections were searched first. Keycap Studio's actual switch template and Fidget Fabric's link were parsed: they are switch/link interfaces, not appropriate flat-sheet kit references. Their measured bounds, hashes, component counts and reasons for rejection are in `reference-measurements.json`. The local Kit Card Studio README was inspected, but no suitable local source STL was available there.

The public **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), is CC BY 4.0. Its actual binary STL was downloaded outside the repo, parsed and sectioned for this run, not inferred from a screenshot. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**; 30,616 triangles; assumed mm bounds **179.820 × 178.020 × 3.190**; 27 edge-adjacent components including degenerate remnants; source NOT watertight. Source Z planes establish 1.60 mm sheet and .21–.22 mm low runners; four 4.50 × 1.700 mm socket outlines were measured. See the reproducible `reference-measure.py`, `reference-measurements.json`, `reference-analysis.json`, and actual mesh cross-sections in `evidence/reference-sections.png`. The upstream README and license are included. No raw third-party STL/artwork is redistributed.

**Adaptation:** reconstruct the source's flat sheets, surrounding carrier, separate clean parts and low breakaway-runner structure with original Boolean solids. Default sheet remains 1.6 mm. Proposed .4–.6 mm runners replace the fragile source runners. The source spacecraft, socket outlines and clips are NOT copied. The new 3 mm pivot, two lever radii, sight holes and spacer are original. M3 bore allowance is a proposed manufacturing fit, not a measured source tolerance. Source flaws are not silently repaired. Physical behavior is not inferred from mesh inspection.

The read-only visual/interaction reference was `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles, App, Viewer, worker, STL, export and imageTrace modules. Concrete adaptations: 374 px left controls/right live viewer; lavender-grey/light panels and coherent saved dark theme; tactile raised/pressed buttons; paired sliders/mm fields; collapsible sections; checkerboard cutout; explicit imported mesh units/orientation; isolated, assembled, exploded, card and de-tabbed views; locally bundled fonts; worker-owned Manifold; exact current-state export gates. No switch sockets are imposed on the divider. Local daily-studio UI/import/export infrastructure was adapted, with new divider geometry and independent mechanism tests.

## Parameters and mechanism

All physical dimensions are **mm**. Ratio is dimensionless; opening angle is degrees.

| Control | Range | Function |
| --- | --- | --- |
| Card width / height | 140–200 / 100–160 | Exact carrier envelope; combinations too small for the parts are blocked |
| Short witness radius A | 20–30 | Equal short radii on both arms |
| Transfer ratio q | 2–4 | Long witness radius qA; actual hole positions change |
| Arm web | 8–12 | Real web width; round/hex/octagonal grip shoulders |
| Sheet | 1.6–2.4 | Both arms and included spacer |
| Part spacing | 3–5 | Clear carrier-bay separation |
| Runner width / height | .8–1.2 / .4–.6 | Actual bed-aligned Boolean-connected breakaway tabs |
| Pivot allowance | .2–.5 | **Diametrical** addition to a nominal 3 mm axle; radial .1–.25 |
| Opening angle | 10–70° | Interactive pose only; not a manufactured travel stop |

The short witness-hole centres lie at radius A, long centres at qA. At angle θ the chords are `2A sin(θ/2)` and `2qA sin(θ/2)`, so their ratio is q throughout motion. The 1.6 mm sight holes, NOT rounded tip edges, define the measurement datums. Arms sit in offset parallel planes: this is a sight-over-drawing demonstration, not precision contact calipers. View vertically through centres to limit parallax. The printed spacer separates the arms; .2 mm axial free play is proposed above it. The included spacer is also the small pivot-bore calibration coupon.

**Hardware required:** one M3 × 16 mm screw, two M3 metal washers (~.5 mm thick), one M3 nylon locknut. Head/nut retain the stack; leave the pivot free to turn. Nominal 5.5 mm head/nut width exceeds every supported pivot bore. Hardware is not exported or pretended to be printed. A paper hinge can illustrate the ratio without hardware but is not the validated retained assembly. External hardware strength/fit must be checked physically.

Three real presets (2×, 3×, 4×) include actual model thumbnails. Undo/redo, six local named designs and portable JSON include bounded source assets. Missing image payloads explicitly request reattachment; restored meshes are re-parsed rather than trusted blindly.

## Local imports and personalization

Use native file pickers on desktop/phone, or drop one file in Import. Replace/remove/reset and source/final previews are provided. Synthetic sample PNG, JPEG, SVG, ASCII and binary STL files are bundled, generated locally; no personal files are included.

- **PNG/JPEG:** real headers verified before decode; ≤2 MB, ≤12 MP, ≤6,000 px per side. Normalize to ≤500 px locally, then sample a 20 × 20 fit/crop grid. Light/dark background selection, threshold or grayscale relief, crop shifts, physical footprint, rotation, XY and depth controls affect printable geometry. Checkerboard shows the actual converted cutout, not an unrelated thumbnail.
- **Method:** luminance → threshold 0/depth or grayscale height; triangulate the continuous height grid with a closed pedestal; Boolean-subtract it from the shoulder's bed-facing surface. Bright holes stay unengraved over a continuous ≥1 mm backing. This is sampled **2D-to-relief/silhouette conversion**, not exact vector tracing or full 3D reconstruction from one photo. Use bold art; fine strokes below nozzle resolution may not reproduce. Six searchable original SVG icons and bundled-font text follow this same actual geometry path.
- **SVG:** simple filled shapes/paths only, ≤2,000 elements, no scripts, references, fonts, effects or external resources; rasterize locally to 256 px and use the same grid. Holes are preserved as unengraved background, not filled into a convex hull.
- **STL:** ASCII/binary ≤2 MB, ≤1,500 triangles, .2–250 mm per axis. Strict finite/degenerate/topology/winding/component/volume and triangle-intersection checks. Explicit mm confirmation is mandatory (STL contains no units). Z/Y/−Z up; changing orientation clears the source and requests reattachment. Actual oriented source dimensions and scale factors are shown.
- This deliberately bounded STL integration supports **one closed convex broad-flat-bottom solid whose XY projection lies within its bed footprint**. Concave, hollow, open/nonmanifold, multiple, inward or overhanging meshes are explicitly rejected. The original source triangles cut a protected recess: no hull substitution, unchanged re-export or claimed repair. XY scales proportionally to a 4–7 mm footprint; Z independently scales to .4–.6 mm engraving, including .02 mm cutting lead-in. Rotation ±180°, XY placement ±1.5/±2 mm, circular 6.5 mm keep-in guard away from pivot/witness holes. Thin imported footprints below 1.2 mm are blocked. Reset reproduces the original geometry.

Art is engraved only on `signature-arm`; the pivot and witness datums are not editable by imports. Only engraving is offered because raised features could obstruct moving faces. No fake raised/inlay controls. All processing stays in the browser; no APIs, CDN imports or uploads. JSON carries ≤500 px PNG or a validated bounded indexed mesh. Export remains disabled during parsing, conversion, invalid state, worker error or stale build; a last-good visible preview never authorizes stale export.

## Export, print and assembly

Prominent connected-card STL, each separate part STL, de-tabbed plate, and Everything ZIP (all STLs, current design JSON and numbered assembly guide). Binary STL uses the exact current preview geometry and parameters. STL does not contain preview colours. Assembled/exploded transforms never affect flat printable exports. All parts bed-flat at Z=0; default connected card **170 × 120 × 1.6 mm**. Increase the card or export loose parts for oversize combinations.

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, ≥3 walls; keep 100% scale. Shallow underside engraving introduces only bounded short bridges; inspect slicer layers. Start with the spacer bore coupon, then calibrate clearance on your actual printer/material. Snip 12 accessible runners outside outlines and file stubs. Stack metal washer, signature-arm, printed spacer and matching-arm on the screw, add second metal washer and locknut, and leave approximately .2 mm free play above spacer. Do not clamp arms rigid. Use corresponding sight-hole centres over a flat drawing. Full numbered guidance is in the app and ZIP.

## Validation and limits

`validate.mjs` independently parses actual float32 STL bytes: triangle count/length, finite nondegenerate coordinates, normalized normals, consistent outward winding, welded 1e-5 mm edge incidence (two opposite faces per edge), per-component positive volume, expected component count and dimensions. Defaults, all presets, silhouettes, individual parameter endpoints, combined extremes, images and both STL fixtures are exercised.

Independent Manifold intersections check card connectivity/bounds, snip-release without damaging parts, separated plate, backing, all functional apertures, nominal axle fit, 10–70° rigid motion samples, straight axial assembly insertion and chord ratio. These are **computational geometry checks**, not friction, structural, fatigue, fastener reliability, physical print or measurement-accuracy tests. Browser scripts exercise production worker/WASM, PNG/JPEG and both STL encodings, actual downloads compared against saved state and preview signature, all part/ZIP exports, transforms, invalid files, portable JSON, local saves, undo/redo, rapid edits, worker abort/reload, phone 320/390 px layout and touch orbit/pinch. Reports/screenshots are saved alongside the source. No physical print has been tested.

Dependencies: React/React DOM, Vite/React plugin, Three.js, Manifold WASM (Apache 2.0), fflate, gh-pages, Fontsource Fredoka/Rubik (OFL). Playwright is a development-only test dependency. All runtime assets bundle locally. See upstream library packages for their licenses.
