# Contra Arc

A local React + Vite maker studio for an eight-part **crossed antiparallelogram fidget**. Guide one arm between printed stops; the other counter-turns with a changing angular ratio. Two equal arms, a longer bridge equal to the fixed-pivot spacing, and four friction caps form the hardware-free linkage. This is a new rigid closed-chain mechanism, not a spring toggle or parallel four-bar.

## Run, build, test

Node 22.12+ recommended.

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
# In a separate terminal, using the actual production base path:
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node hole-test.cjs
```

Base path: `/daily-app2/20261026-27/`. Per-app deploy scripts are present, but the public combined site is published only with the root repository's `npm run predeploy` / `npm run deploy` flow.

## Studio and reference

Read-only visual reference: `keycap_generator2`. Concrete adopted patterns: 374 px independently scrollable left editor with sticky compact header, collapsible sections, paired mm sliders/numbers, raised key-like controls with pressed selected states, lavender desk/white panels/coral accents, local Fredoka/Rubik fonts, saved dark theme, right 3D studio, plate/assembled/exploded/isolated views, and reachable per-part exports. Phones put preview, warnings and exports before stacked controls. No switch sockets are used in this unrelated linkage.

The local previous daily studio supplied reusable editor/import/export plumbing; the new geometry and closure/collision checks implement the crossed linkage. No reference Git history, dependencies directory or personal input files were copied. Synthetic fixtures and original six SVG marks are bundled for offline trials.

## Parameters (all lengths in millimeters)

| Control | Range |
| --- | --- |
| Palm diameter | 22–28 mm; round, hex, oval |
| Side arm length | 18–22 mm |
| Ground and bridge span | 30–34 mm |
| Axial clearance | 0.3–0.6 mm |
| Link thickness | 3–4 mm |
| Palm texture depth | 0–0.6 mm |
| Radial running clearance | 0.25–0.45 mm |
| Cap radial fit | −0.06 to +0.06 mm |
| Input travel | 45–80 degrees, bounded by posts |

Three real model-thumbnail presets, bounded variations, undo/redo, six local named saves, portable JSON save/open, text marks, searchable icons, preview colours and live fit/orbit/zoom are included. Colour is preview-only; STL stores no colour. Final export X/Y/Z dimensions are reported for the selected part or plate, not assembled dimensions.

## Local image workflow

PNG/JPEG, plus simple SVG fills/shapes, become **2D sampled relief**, not reconstruction of a whole 3D object from one photograph. Use picker, supported drag/drop, or supplied samples. Sources are checked before decoding: 16 bytes–2 MB, ≤12 megapixels, ≤6,000 px each side. PNG/JPEG signatures and extension/content agreement are checked. SVG forbids references, scripts, external resources and effects; ≤2,000 elements. SVG rasterizes locally to 256 px.

Raster sources normalize to ≤500 px, then fit or crop/pan into a bounded **20 × 20 luminance field**. Light/transparent background removal or inverted dark-background mode, threshold 1–254, grayscale mode, raised/engraved style, 0.4–3 mm depth (engraving capped at 0.6 mm), physical footprint 4–7 mm, rotation ±180°, X ±1.5 mm and Y ±2 mm alter the final solid. The actual cutout grid is shown on checkerboard next to the source. Bright holes remain unraised or unengraved above a continuous solid backing; this is not exact vector tracing or a through-hole silhouette. Triangulated height fields have closed sides and bottom and are boolean-unioned/subtracted into the palm well. The baseline field blends threshold edges over one grid cell. Minimum engraved palm floor is 2.6 mm. Empty sources and unsafe placements block export.

Text (up to eight characters) and six bundled searchable original SVG icons use this same geometric route. No texture-only personalization.

## STL workflow and supported geometry

ASCII and binary `.stl`, 40 bytes–2 MB, at most 1,500 triangles. STL has **no unit metadata**: select Z/Y/−Z up before attachment and explicitly confirm millimeters. Oriented dimensions and source mesh preview appear before integration. Coordinates must be finite and bounded; dimensions must each be 0.2–250 mm. Faces, welding at 0.00001 mm, directed edge incidence, connectedness, winding, volume and intersections are checked.

Supported inputs are one outward-wound closed **convex, broad flat-bottom solid** with no overhang beyond its bottom footprint. Bottom contact must be at least 25% of the XY bounding rectangle. Concavities, cavities, branches, open/nonmanifold/self-intersecting meshes and unsupported bed contact are rejected with guidance; there is no claimed repair and no convex-hull substitution. The hull calculation checks bottom contact only and never replaces the imported mesh.

The original verified mesh is normalized into a 4–7 mm proportional XY footprint and independent 0.6–5 mm Z grip height, rotated and placed in the palm well with 0.15 mm intentional penetration, then **solid-unioned** with Manifold. Minimum scaled XY extent is 1.2 mm. The 6.5 mm radial safe zone protects the mechanism and preserves its moving interfaces. Replace/remove/reset controls restore built-ins deterministically. Portable JSON contains bounded normalized image or verified mesh payloads; missing image payloads explicitly request reattachment. No invisible file-path restoration.

## Geometry, worker and exports

Manifold WASM performs solid operations in a bundled Web Worker. 100 ms debounce, request IDs, asynchronous import IDs and current-state keys reject stale results. Every build checks connectedness, finite triangles, nonzero area, consistent opposite-directed edge incidences, positive volume and each float32-translated plate part. Errors preserve an explicitly labelled last-good preview but disable all exports; it cannot export stale geometry.

The exact valid result is shared by preview, binary STL per part, separated plate STL and Everything ZIP (eight STL files plus assembly notes). A displayed geometry fingerprint is compared with real browser downloads in tests. Print orientation is Z=0 down for every part; assembly and exploded transformations are preview-only. JSON regeneration is byte-compared with downloads. No API, server generation, cloud, 3MF claim or CDN is required.

## Printing, calibration and assembly

PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers and 3–4 walls are starting points. All eight parts are intended to print bed-flat, pins upright, support-free and hardware-free. Long distal pins hold the upper bridge above both ground-cap roofs with the chosen axial gap. No magnets, bearings, fasteners or glue.

1. Print **Gentle Start** as a full-size fit-calibration set. Tolerances are printer/material dependent, not universal. Adjust running gaps and cap fit before printing the desired version. Zero/positive cap fit is calibration-only and may not retain anything.
2. Place input arm on O and output arm on B in the lower layer; arrange distal pins on opposite sides of the ground line as in assembled view.
3. Lower the upper bridge onto A/C. The bridge crosses over the ground rather than intersecting it. Fit all four blind-socket caps fully to their socket roofs, without squeezing links.
4. Gently move between input stops; do not force beyond them. Check cap retention, smooth running and pinch gaps before use. Stop on binding, loose/split caps or wear.
5. Remove distal caps A/C and lift the bridge vertically first. Then remove ground caps O/B and lift the two arms. Ground caps are not withdrawn through the installed bridge.

Small parts and pinch points: not a children's toy. No physical print, retention-force, durability or fatigue testing has been performed. Computational clearance checks do not prove physical feel or safety.

## Verification

`validate.mjs` independently parses float32 binary exports, tests stored normal/winding agreement, finite/nondegenerate triangles, expected mm bounds, 0.00001 mm welded edge incidence, positive volume per connected component and plate separation. It tests 20 default/preset/boundary cases and 35 imported-output cases, with every individual part also checked. Rigid closure and opposite changing-ratio angles are sampled at 71 positions; Manifold intersection checks cover 25 sweep positions per parameter case / 19 per import case, intentional cap contact regions, post stops, vertical disassembly and palm personalization isolation. Geometry and mechanism assertions are separate.

Playwright exercises actual PNG/JPEG/ASCII/binary picker imports, downloaded STLs and ZIP contents, transformation/pixel/threshold/depth differences, source replace/remove/reset, invalid files and dimensions, missing/unsafe inputs, exact current preview/export hashes, presets, text/icons/SVG holes, JSON/local-save roundtrips, worker failure/recovery, stale imports, desktop left/right layout, saved themes, focus/collapsible sections, 320/390 px overflow and reachable exports, touch orbit and pinch. Reports and screenshots live beside this README. Run production tests against `serve-production.cjs`; root-stage checks use `TEST_BASE` where supported. `VALIDATION.md` records executed results, not presumed print success.

## Privacy and dependencies

All personal files remain in browser memory or optional localStorage/portable JSON; no upload code or remote service. Repository fixtures are synthetic, not user inputs. Runtime: React, Three.js/OrbitControls, Manifold-3D, fflate, Fontsource Fredoka/Rubik (SIL OFL fonts bundled locally). Build: Vite/React plugin; tests: Playwright; deploy: gh-pages. Individual dependencies retain their upstream licences. Synthetic fixtures and marks are original reusable local examples.
