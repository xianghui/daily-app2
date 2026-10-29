# Chord & Lattice

A local React + Vite maker studio for an original **five-part, flat-pack hyperboloid string sculpture**. Two parallel, pierced annular crowns seat on three double-tenoned struts. Lace straight soft-thread strands between indexed eyes to see a curved waist. This is a static kit, not a mechanism with simulated motion or a load-bearing structure. Thread and adhesive are required.

## Reference-first design evidence

First inspected `/Volumes/ExternalHD/3d_printing_apps/fidget_fabric_generator/README.md` and parsed `Diamond+35.stl`: 230,208 binary triangles, approximately 35.981 × 39.241 × 8 mm, SHA-256 `992bd8758e1dd27567168e2c41f41733a5900fd3bf75783fb9c41e6b0fb61b25`. Its articulated links are inappropriate as a planar kit carrier. Local keycap/slider/clicker candidates are moving fidgets rather than sheet kits, so the documented public kit below was selected.

**White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README, LICENSE and SCAD inspected. The actual [binary STL](https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl) was downloaded and parsed this run: 30,616 triangles, 179.820 × 178.020 × 3.190 mm, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. STL has no units; mm corroborated by the SCAD sheet thickness.

Concrete measured structure: sheet planes at Z=0/1.6 mm; outer rail approximately 1.600 mm wide at section Y=100, Z=.5; low bridge elevations .21/.22 mm. Inspected actual sections at Z=.10/.50/1.59 in [reference-sections.png](evidence/reference-sections.png). Reference has 27 edge-adjacent components (including 25 two-triangle artifacts), and is **not** a certified watertight mesh. It is analyzed as design evidence, not repaired or re-exported.

Retained its measured **1.6 mm default sheet** and genuine frame-to-part removable-bridge construction. Redesigned rail width to 2.4 mm and runners to .4–.6 mm tall for accessible snipping. Original annular crowns, eyes, six shoulder/tenon seats, struts, label and thread indexing replace the spacecraft parts entirely. All .10–.35 mm joint allowances and other interface dimensions below are **proposed redesign**, not measured source fits. Raw STL is not redistributed; this original parametric reconstruction uses real solid differences/unions, never a convex hull.

### Studio reference

Read-only inspection of `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, `src/export.ts` and `src/geometry/stl.ts` informed the 374 px left studio panel, sticky compact brand, collapsible sections, paired mm sliders/numbers, raised tactile selection keys, pink accents, checkerboard image cutout, explicit STL units, stale-build gating, ghost/exploded/print views and local WASM worker. No source project was edited or deployed; its Git history and dependencies were not copied wholesale. General studio/import/test infrastructure is adapted from the existing daily-app2 maker studios; the crown/strut assembly, thread geometry and independent assembly checks are new, not a cosmetic reskin. Rounded Fredoka/Rubik fonts are bundled through Fontsource.

## Run and export

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; public monorepo publication uses the **root** `deploy/` flow, not the per-app deploy script. Vite base is `/daily-app2/20261029-21/`.

Exports: binary STL of the one connected card, all five bed-flat individual parts, or Everything ZIP including the card, parts and numbered `ASSEMBLY.txt`. Preview and downloads share exactly the current checked result; invalid, unconfirmed, pending, failed or stale states disable all exports. STL does not encode colours. There is no pretend 3MF.

## Parameters (all linear dimensions in millimeters)

| Parameter | Supported range |
| --- | --- |
| Card X/Y | 220–260 / 95–135 |
| Crown diameter / clear separation | 40–56 / 38–65 |
| Eyes per crown | 12, 18, 24 |
| Thread index offset | integer 1–5 |
| Eye diameter / tongue width | 1.6–2.4 / 4–6 |
| Total joint allowance | .10–.35, split equally per side |
| Sheet / carrier rail | 1.6–2.4 / fixed 2.4 |
| Minimum carrier gap | 4–6 |
| Runner width / height | .8–1.4 / .4–.6 |
| Label dimple depth | 0–.4 |

Three real presets and three lower-label silhouettes. Part spacing sets the actual left runner gap in each carrier bay; any excess card width remains on the right. Mechanically invalid combinations (e.g. 24 large eyes on a small crown leaving <.8 mm tangential webs) are blocked even if individual controls are within range. The eye circle is .52 × crown radius; central aperture .30 × radius; strut stations .79 × radius at 90/210/330 degrees. Slots are tongue width + allowance by sheet + allowance. Shoulders bear on the crowns; tongues engage sheet minus .15 mm. Through-eyes and inset zero/every-third/offset marks are actual geometry. Offset changes the upper-crown target marks in STL and thread routing in the explanatory view.

Ideal chord angle = 2π × offset / eye count. Span = hypot(separation, 2 × eye radius × sin(angle/2)); waist = eye radius × cos(angle/2). These ideal straight-line calculations are not a knot, friction or tension simulation. Two handed families cross intentionally. Thread is a separate consumable and is not included in STL.

## Local image personalization

PNG/JPEG by picker on desktop/phone or one-file drop; simple SVG is also accepted. Bundle synthetic `public/samples/mark.png`, `waves.jpg`, `ring.svg` and two STL fixtures; no personal assets are committed.

A maximum 2 MB image is header-checked (≤12 MP, ≤6,000 px side), decoded locally and normalized to ≤500 px. Simple SVGs are locally validated/rasterized to 256 px; effects, external resources, text, scripts and references are rejected. Luminance uses .2126R+.7152G+.0722B after alpha compositing over the selected light/dark background. Fit/cover and ±25% crop shift sample a **20×20 grid**. Threshold 1–254 selects dark pixels, or grayscale supplies proportional height. A triangulated continuous .4 mm-backed height field preserves bright holes as **unraised/unengraved areas above the solid backing**, not through-holes in a crown. Checkerboard shows the actual sampled cutout. This is bounded sampled **2D-to-relief**, not exact vector tracing or automatic 3D reconstruction of a photograph.

Raised height .4–3 mm, engraving .4–.6 mm to preserve ≥.8 mm backing at the thinnest sheet. Text (eight characters) and searchable bundled icons use this same geometry path. Footprint 4–7 mm; Z rotation ±180°; XY placement ±1.5/±2 mm. Features are Boolean-unioned/subtracted on the **outboard lower-crown lip**, with vertices bounded within a 6.5 mm radius protected zone. Import scale, threshold, crop, placement and pixels all change real exported geometry. Replace/remove/reset are available.

## Local STL integration

ASCII/binary STL ≤2 MB, ≤1,500 complete triangles, .2–250 mm in each dimension. Strict preflight welds at .00001 mm and checks finite coordinates, degeneracy, two opposite-oriented faces per edge, one connected positive-volume component, self-intersections, convexity, broad planar bottom and no footprint overhang. Unsupported **concave**, open, hollow, nonmanifold, disconnected, branch-like or overhanging meshes are rejected with guidance; they are **not repaired, hulled or silently discarded**. This deliberately bounded import contract keeps the personalized grip support-free and solidly attached.

Select Z/Y/−Z up before attachment; reselecting axis clears source and requests reattachment. Oriented source dimensions, source preview and explicit **millimeter confirmation** are shown because STL contains no unit metadata. XY is proportionally scaled to the 4–7 mm footprint; Z is independently scaled to .6–3 mm grip height. Rotate around Z, center/reset, and place within the same safe lip. The original verified mesh (not a replacement primitive) is Boolean-unioned .15 mm into the lip. Source and final preview remain available. No imported part can reach an eye or strut seat.

## Persistence, privacy and responsiveness

All generation/imports run locally, no API keys, uploads, CDN imports or remote processing. Libraries, fonts and Manifold WASM are bundled. A worker handles STL parsing, heavy CSG and final preflight; 100 ms debounce, request IDs and current-state keys reject stale results. Failed worker loading disables export and asks for reload. Undo/redo, up to six named local designs and JSON save/open include bounded source pixels/mesh vertices and normalized PNG payloads. Missing image payload requires reattachment; no missing file is presented as restored. Import limits and protected-zone validation apply to restored designs too.

Desktop left controls/right viewer; phones show preview, warnings and reachable export **before** stacked controls. Touch orbit/pinch, fit/zoom, see-through, assembled/exploded/card/de-tabbed/isolated views, keyboard focus, reduced motion and saved dark mode.

## Printing and assembly

Print bed-flat in PLA/PETG, .16–.20 mm layers, .4 mm nozzle, three walls, no supports intended. Card is 220–260 mm wide: confirm bed size or use individual parts. Snip twenty accessible runners at the external edges and trim waste. Calibrate one crown and strut before the full kit; total clearance is a starting allowance, not a universal press fit. Stand all three struts in the lower crown; lower top crown over the three tenons together. Glue all **six fixed joints** after dry-fitting parallel and let cure. Soft sewing thread ≤.5 mm required; lace eye i to i ± offset modulo N, tie loose knots with ≥20 mm extra per span. Zero is +X; positive eye indices are counterclockwise viewed from above. Do not apply structural tension. One handed family avoids crossing strand families. This is an adult craft with small parts, cutters and glue, not a toy or load-bearing structure.

## Validation

`node control-test.mjs` verifies that all 14 numeric controls alter real STL and rejects insufficient eye webs.

`node validate.mjs` independently parses actual float32 STL bytes: correct length/count, nondegenerate finite triangles, normalized stored normals agreeing with winding, .00001 mm welded edge incidence, per-component positive volume, Euler consistency and expected bounds. Every part and connected card are checked. Defaults, every preset, parameter extrema, image/engraved/STL-derived solids are tested. Kernel intersections check assembled non-overlap, sampled full axial insertion paths, all eye bores, thread-to-strut envelopes, separated card parts and twenty snip paths (five released parts + one carrier). Analytic wall and thread clearances remain separate from watertightness.

`browser-test.cjs` and `studio-test.cjs` use actual production worker/WASM at the real base prefix, file-picker imports and downloaded STL/ZIP bytes. They compare signatures to the current preview, regenerate JSON geometry independently, check imports change solids, validate per-part downloads, cover malformed/excessive/nonmanifold/empty input recovery, asset round trips, shapes/text/icons/SVG/holes, presets, undo/redo, themes, phone layout/orbit/pinch, worker abort/recovery and no remote requests. See JSON reports and `VALIDATION.md`. Gallery tests compile inline scripts and preserve all existing entries.

**No physical print, material-strength, fatigue, thread-tension or physical assembly testing has been performed.** Mesh/fit computations do not establish real-world performance. Calibrate locally.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold-3D WASM, fflate, Fontsource Fredoka/Rubik, gh-pages; Playwright for validation. Dependency licenses remain with their packages. Reference attribution above; sample assets are synthetic studio fixtures.
