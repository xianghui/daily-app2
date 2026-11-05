# Dovetail & Lift — Lift-Out Kit Card Studio

A browser-local React + Vite parametric **two-panel dovetail kit card**. Snip eight real runners, align the widening tail above the through-socket, and lower vertically. Both panels stay horizontal; angled flanks resist in-plane separation after clearance play. Lift vertically to release. No hardware/glue, vertical capture or structural rating. **Physical printing, fit, friction and strength are untested.**

## Reference and original adaptation

First inspected local `keycap_generator2` and `fidget_fabric_generator` instructions and parsed their actual template STLs. Switch-specific sockets and 8 mm fabric links were unsuitable for a thin sheet kit. Selected the accessible public **White Cat Kit Card**, Mike Kasberg, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. Re-parsed the cached binary this run: **SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`**, 30,616 triangles, assumed mm, **179.820 × 178.020 × 3.190 mm**, two edge-adjacent components, 57 edge anomalies. No source triangles reused, repaired or redistributed.

Actual sections Z=.100/.215/1.590 mm identify **1.60 mm sheet, 4.50 × 1.70 mm sockets, .21–.22 mm runner tops**. Measured source clearance is .10 mm greater than the sheet. See `reference-analysis.json`, raw measurements and `evidence/reference-sections.svg`/PNG. Reproduce: `python3 reference-analysis.py /path/to/public-source.stl`.

Adapts the **thin-sheet through-socket and removable low-runner carrier construction**, not the source cat geometry. Original redesign: two coplanar dovetail panels with 8–16° flanks, true outward-offset socket, independently calibrated shoulder gap, thicker sheet and runners. Unlike the earlier upright end-open bridle kit, this flared joint cannot separate axially after taking up clearance; assembly/release is vertical, without rotating either panel. Tolerances are proposed FDM starting points, not measured physical performance.

Visual/interaction reference is read-only `keycap_generator2`: README, App, styles, Viewer, worker and export modules inspected for the 374 px scrolling left rail, compact sticky brand/theme header, collapsible sections, paired sliders/mm inputs, pink depressed keycap controls, source/cutout previews, right-hand orbit viewer and current-solid export gating. Its STL/image implementation was also reviewed. Phone layout is preview-first, stacked, with reachable exports. Fredoka/Rubik fonts and all dependencies are local. General tested Daily Object Lab studio infrastructure is reused; dovetail construction, transforms and fit checks are new. Reference projects and old daily_app tree remain unmodified.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Dependencies: React, Vite, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; gh-pages for deployment and Playwright for browser verification. No CDN, remote generation, API key, paid service or user-file upload. Vite bundles worker, fonts and WASM locally.

## Parametric geometry — lengths in millimeters

| Parameter | Supported range / meaning |
|---|---|
| Card width × height | 100–180 × 85–140; real carrier envelope |
| Handle length | 25–45 |
| Tail reach | 10–18 |
| Flank angle | 8–16 degrees |
| Panel breadth | 24–34; neck = 25% breadth |
| Sheet | 1.8–3.2 |
| Socket diametric allowance | .10–.50; true normal offset = half allowance |
| Shoulder gap | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art XY offset / rotation | X ±1.5, Y ±2 / ±180 degrees |

Tail head = neck + 2 × reach × tan(angle). Socket uses a **mitered 2D outward offset** of the original tail polygon, then a real Boolean subtraction from the second panel. It is not a bounding rectangle or convex-hull substitute. Socket maximum head envelope = head + allowance × (sec(angle)+tan(angle)); cheeks must remain ≥3.5 mm. Nominal axial clearance play = allowance/(2 sin(angle)), displayed explicitly. Shoulder gap is separate. Art keep-in radius 5.8 mm remains inside the solid tail handle, leaving ≥1.2 mm backing.

Rounded, chamfered and notched outlines, three genuine mesh-thumbnail presets, reset, undo/redo, six named local designs and JSON save/open. Portable payloads contain bounded normalized images or validated STL vertices; missing files explicitly require reattachment, never pretend restoration. Builds run in a debounced worker with request IDs and exact full-state keys. Invalid/pending imports or edits disable all geometry exports, even if a labelled last-good preview remains visible.

## Image / text / icon → actual engraving

PNG/JPEG ≤2 MB, ≤12 MP and ≤6,000 px per side. Validate magic/header and decoder dimensions before normalizing to ≤500 px. Simple SVG ≤2 MB / 2,000 elements rasterizes locally; no scripts, text, effects or external resources. Text ≤8 characters and six original searchable SVG marks use the same pipeline.

A bounded **20×20 grayscale grid** samples the image with contain/cover, XY crop shifts and light/transparent or dark-background removal. Threshold mode gives binary sampled heights; grayscale relief gives proportional heights. A closed heightfield solid is **Boolean-subtracted .4–.6 mm into the protected handle**. Bright holes remain unengraved with continuous backing; checkerboard shows retained samples. This is sampled **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photo**, and not exact vector tracing. Raised art is intentionally unavailable to preserve the bed-flat sheet envelope. Image pixels, threshold, crop, depth, placement, scale and rotation change the final STL, not just a texture.

## STL → actual engraving

ASCII/binary ≤2 MB / 1,500 triangles, each axis .2–250 assumed mm. Show source mesh, dimensions, format and triangle count. Explicit millimeter confirmation is mandatory because STL carries no units. Select Z/Y/−Z up before attaching; changing it requests reattachment. Exact source vertices are scaled proportionally in XY to art footprint and independently in Z to engraving depth, rotated and placed, then Boolean-cut into the actual handle.

Supported subset: **one outward-wound, closed, convex, broad-flat-bottom solid without overhanging XY footprint**. File/content, finite coordinates, dimensions, triangle quality, edge incidence/winding, connectivity, volume, self-intersection and support eligibility are checked. Open/nonmanifold, concave, hollow, disconnected, inward or overhung meshes are rejected with guidance. There is no claimed repair or hidden convex-hull replacement. The bottom footprint hull is only an eligibility check, never replacement geometry. Replace/remove/reset work for both imports. All personal inputs remain on device; the repo contains only synthetic fixtures and documented public-source evidence, not personal uploads or raw reference meshes.

## Print / assemble / calibrate

1. Export connected card **or** two clean panels/plate. Default card 120 × 95 × 2.4 mm; all exports bed-flat Z=0. PLA/PETG, .4 nozzle, .16–.20 layers; supports not intended.
2. Snip four runners per panel, eight total. Trim outer-handle scars. Discard carrier/crossbar; never cut mating flanks.
3. Place socket panel on table, printed top face up. Hold tail panel above it, also top up. Align widening tail with widening socket and lower vertically until bed faces are coplanar.
4. Do not force tail through the narrow mouth axially. Flanks resist in-plane separation after clearance play; lift vertically to release. No vertical lock, pressure rating or load-bearing use.
5. No hardware or glue. Print both clean panels first as the calibration pair. Begin at .30 mm diametric allowance PLA / .40 PETG, adjust for your printer/material and elephant foot. Never force a tight joint. The source's .10 mm socket allowance is measurement, not a universal printing recommendation.

Assembled, exploded (instructional vertical offset), connected card, clean plate and isolated views use the same solids. Orbit/zoom/fit, touch gestures and optional ghost. Per-part binary STL, connected-card STL and Everything ZIP (card + two panels + numbered instructions + assembly map + portable JSON). STL has no colours and no 3MF is claimed. Preview colours are only visualization.

## Validation

`npm test` runs independent binary-STL tests on all parts and translated float32 clean plate: finite/nondegenerate triangles, normalized normals consistent with winding, bounding dimensions, every welded edge exactly two opposite faces (1e-5 mm tolerance), positive volume per connected component. Manifold kernel checks validate no part collisions, upper-section bed support, carrier envelope, all eight snip cuts yielding exactly carrier + two intact panels without fragments, unobstructed socket, 81 vertical insertion positions, six normal-gap probes, and in-plane interference after clearance play. Defaults, presets, all field endpoints, combined extrema, three outlines, 16 mixed reach/angle/breadth/fit extremes and image/STL-derived extrema are checked.

Browser scripts use the production bundle at its real `/daily-app2/20261106-8/` prefix, real file pickers/downloads and mesh parsing. They compare downloaded fingerprints with current preview and JSON-regenerated solids, test pixel/threshold/depth/transform changes, invalid imports, portable restoration, undo/redo, named designs, ZIP contents, SVG holes, worker failure/stale imports, desktop and 320/390 px touch layouts. See actual reports and `VALIDATION.md`; these are computational checks, not physical printing/strength tests.
